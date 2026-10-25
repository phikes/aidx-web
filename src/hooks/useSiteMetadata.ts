import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  query useSiteMetadata {
    site {
      siteMetadata {
	title
      }
    }
  }
`

export const useSiteMetadata = () => useStaticQuery<Queries.useSiteMetadataQuery>(query).site?.siteMetadata
