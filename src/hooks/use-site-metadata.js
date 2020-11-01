import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query siteMetaDataAndSiteMetaData {
        site {
          siteMetadata {
            author
            title
            siteUrl
            social {
              name
              url
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}