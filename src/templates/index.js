import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components/common'
import { Intro, Labs } from 'components/labsView'
import { PaginationLinks, PaginationLink, ActivePaginationLink } from './styles'

const IndexPage = ({
  data,
  pageContext,
}) => {
  const labNodes = data[pageContext.buildEnv].edges
  const labs = labNodes
    .filter(ln => ln.node.claat?.env?.lastBuild)
    .map(ln => ln.node)
  const labCats = pageContext.labCategories.reduce((acc, lc) => {
    return { ...acc, [lc.name]: lc.image }
  }, {})
  return (
    <Layout>
      <SEO />
      <Intro pageContext={pageContext} />
      <Labs labs={labs} labCategories={labCats} />
      <PaginationLinks>
        {(pageContext.nextPagePath || pageContext.previousPagePath) && (
          <>
            {pageContext.previousPagePath ? (
              <ActivePaginationLink as='a' href={pageContext.previousPagePath}>
                Previous
              </ActivePaginationLink>
            ) : (
              <PaginationLink>Previous</PaginationLink>
            )}
            {pageContext.nextPagePath ? (
              <ActivePaginationLink className='activePagination' as='a' href={pageContext.nextPagePath}>
                Next
              </ActivePaginationLink>
            ) : (
              <PaginationLink>Next</PaginationLink>
            )}
          </>
        )}
      </PaginationLinks>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query labQuery($skip: Int!, $limit: Int!) {
    dev: allMongodbCodelabsDbLabs(skip: $skip, limit: $limit) {
      edges {
        node {
          labConfig {
            labCategories
            labSummary
            labTitle
            labUrl
          }
          claat {
            env: dev {
              lastBuild
              codelab {
                duration
              }
            }
          }
        }
      }
    }
    prod: allMongodbCodelabsDbLabs(skip: $skip, limit: $limit) {
      edges {
        node {
          labConfig {
            labCategories
            labSummary
            labTitle
            labUrl
          }
          claat {
            env: prod {
              lastBuild
              codelab {
                duration
              }
            }
          }
        }
      }
    }
  }
`
