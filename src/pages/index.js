import React from 'react';
import { Link, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import Layout from '../components/layout';
import Container from '../components/container';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['widget', 'blockchain', 'blog']} />
    <Container>
      <h4>{ data.allMarkdownRemark.totalCount } Posts</h4>

      {data.allMarkdownRemark.edges.map(({node}) => (
        <div key={node.id}>
          <Link to={node.fields.slug}
            style={{ textDecoration: 'None', color: 'inherit' }}
          >
            <h3 style={{ marginBottom: rhythm(1 / 4)}}>
              {node.frontmatter.title}{" "}
              <span style={{ color: '#bbb'}}>
              — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
