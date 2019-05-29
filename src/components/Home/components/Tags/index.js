import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Wrap, Tags } from './styled'

export default () => {
  const { allMarkdownRemark: { group } } = useStaticQuery(
    graphql`
      query TagQuery {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )

  return (
    <Wrap>
      <section>태그</section>
      <Tags>
        {group.map(item => (
          <li key={item.fieldValue}>
            <Link to={`/${item.fieldValue}`}>{item.fieldValue} ({item.totalCount})</Link>
          </li>
        ))}
      </Tags>
    </Wrap>
  )
}
