import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO } from 'components/common'
import { Intro, Labs } from 'components/labsView'
import { PaginationLinks, PaginationLink, ActivePaginationLink } from './styles'

const IndexPage = ({
  data: {
    allMongodbDevcodelabsDbLabs: { edges: labNodes },
  },
  pageContext,
}) => {
  const labs = labNodes.filter(ln => ln.node.claat?.dev).map(ln => ln.node.claat.dev.codelab)
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
  query labQueryByCategory($skip: Int!, $limit: Int!, $categories: [String]!) {
    allMongodbDevcodelabsDbLabs(skip: $skip, limit: $limit, filter: { claat: { dev: { codelab: { category: { in: $categories } } } } }) {
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
                duration
              }
            }
          }
        }
      }
    }
  }
`
