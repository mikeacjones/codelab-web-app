const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')
const { createTagSlug, powerSet } = require('./helpers')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type mongodbCodelabsDBLabsClaat {
      dev: ClaatNode
      prod: ClaatNode
    }
    type ClaatNode {
      codelab: CodelabNode
      lastBuild: Date
      lastBuiltBy: String
    }
    type CodelabNode {
      category: [String]
      url: String
      updated: Date
      title: String
      tags: [String]
      summary: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMongodbCodelabsDbLabCategories {
        nodes {
          image
          name
        }
      }
      dev: allMongodbCodelabsDbLabs {
        edges {
          node {
            claat {
              env: dev {
                codelab {
                  category
                  url
                  updated
                  title
                  tags
                  summary
                }
              }
            }
          }
        }
      }
      prod: allMongodbCodelabsDbLabs {
        edges {
          node {
            claat {
              env: prod {
                codelab {
                  category
                  url
                  updated
                  title
                  tags
                  summary
                }
              }
            }
          }
        }
      }
    }
  `).then(
    ({
      data: {
        allMongodbCodelabsDbLabCategories: { nodes: labCategories },
      },
      data,
    }) => {
      const labNodes = data[process.env.BUILD_ENV].edges
      const { labsPerPage } = require('./src/data/config')
      const labs = labNodes.filter(ln => ln.node.claat?.env).map(ln => ln.node.claat.env.codelab)
      const labCats = labCategories.map(lc => lc.name)
      const categoriesInUse = labs.flatMap(lab => lab.category).filter((cat, index, self) => self.indexOf(cat) === index)
      const labCatsInUse = labCategories.filter(lc => categoriesInUse.includes(lc.name))

      const labsTemplate = path.resolve('./src/templates/index.js')
      const byCategoryTemplate = path.resolve('./src/templates/byCategory.js')

      paginate({
        createPage,
        items: labs,
        itemsPerPage: labsPerPage,
        pathPrefix: '/',
        component: labsTemplate,
        context: {
          buildEnv: process.env.BUILD_ENV,
          labCategories: labCatsInUse,
          catSlugs: labCats.reduce((acc, lc) => {
            return { ...acc, [lc]: `/category/${createTagSlug(lc)}` }
          }, {}),
        },
      })

      const combinedCategories = powerSet(categoriesInUse).filter(set => set.length > 0)
      for (categoryCombo of combinedCategories) {
        const labsWithCategory = labs.filter(lab => lab.category && categoryCombo.some(cat => lab.category.includes(cat)))
        const currentSlug = createTagSlug(categoryCombo.sort().join('-'))
        const catSlugs = labCats.reduce((map, cat) => {
          const linkCats = (categoryCombo.includes(cat)
            ? [...categoryCombo.slice(0, categoryCombo.indexOf(cat)), ...categoryCombo.slice(categoryCombo.indexOf(cat) + 1)]
            : [...categoryCombo, cat]
          ).sort()
          map[cat] = linkCats.length === 0 ? '/' : `/category/${createTagSlug(linkCats.join('-'))}`
          return map
        }, {})
        paginate({
          createPage,
          items: labsWithCategory,
          component: byCategoryTemplate,
          itemsPerPage: labsPerPage,
          pathPrefix: `/category/${currentSlug}`,
          context: {
            categories: categoryCombo,
            catSlugs,
            labCategories: labCatsInUse,
            buildEnv: process.env.BUILD_ENV
          },
        })
      }
    }
  )
}
