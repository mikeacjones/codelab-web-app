const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')
const { createTagSlug, powerSet } = require('./helpers')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMongodbDevcodelabsDbLabCategories {
        nodes {
          image
          name
        }
      }
      allMongodbDevcodelabsDbLabs {
        edges {
          node {
            claat {
              dev {
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
        allMongodbDevcodelabsDbLabCategories: { nodes: labCategories },
        allMongodbDevcodelabsDbLabs: { edges: labNodes },
      },
    }) => {
      const { labsPerPage } = require('./src/data/config')
      const labs = labNodes.filter(ln => ln.node.claat?.dev).map(ln => ln.node.claat.dev.codelab)
      const labCats = labCategories.map(lc => lc.name)
      const categoriesInUse = labs.flatMap(lab => lab.category).filter((cat, index, self) => self.indexOf(cat) === index)
      const labCatsInUse = labCategories.filter(lc => categoriesInUse.includes(lc.name))
      const categoryStrings = labCategories.map(lc => lc.name)

      const labsTemplate = path.resolve('./src/templates/index.js')
      const byCategoryTemplate = path.resolve('./src/templates/byCategory.js')

      paginate({
        createPage,
        items: labs,
        itemsPerPage: labsPerPage,
        pathPrefix: '/',
        component: labsTemplate,
        context: {
          labCategories: labCatsInUse,
          catSlugs: labCats.reduce((acc, lc) => {
            return { ...acc, [lc]: `/category/${createTagSlug(lc)}` }
          }, {}),
        },
      })

      const combinedCategories = powerSet(categoryStrings).filter(set => set.length > 0)
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
          },
        })
      }
    }
  )
}
