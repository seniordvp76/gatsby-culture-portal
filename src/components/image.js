import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const Photo = ({ imgsrc, className }) => (
  <StaticQuery
    query={graphql`
          query {
            allImageSharp {
              edges {
                node {
                  fluid(maxWidth: 920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `}
    render={data => (
      <Img className={className} fluid={data.allImageSharp.edges.find(element => (element.node.fluid.src.split('/').pop() === imgsrc)).node.fluid} />
    )}
  />
);

export default Photo;

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `);
//
//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
// };
//
// export default Image;
