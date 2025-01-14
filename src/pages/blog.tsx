import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

interface BlogPageProps {
  data: any
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`;

const BlogPage = ({data}: BlogPageProps) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allFile.nodes.map((node: any) => (
            <li key={node.name}>{node.name} type: {typeof node}</li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage