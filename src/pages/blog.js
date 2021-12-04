import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({data}) => {
  return (
    <Layout pageTitle="My Blog Posts" pageHeading="Blogs">
      <ul>
          {data.allMdx.nodes.map(node =>{
              return <li key={node.id}>{node.frontmatter.title} {node.frontmatter.date}</li>;
          })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: ASC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
      }
    }
  }
`


export default BlogPage