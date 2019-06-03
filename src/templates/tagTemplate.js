import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Seo from 'components/Seo'
import Home from 'components/Home'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  const item = {
    tag,
    list: edges,
  }

  return (
    <Layout>
      <Seo tag={tag} />
      <Home {...item} />
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY년 MM월 DD일")
            title
            description
            tags
          }
        }
      }
    }
  }
`
