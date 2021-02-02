module.exports = {
  siteMetadata: {
    title: "Burrito's Blog"
	},
	plugins: [
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/`,
				name: 'pages'
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false,
							backgroundColor: `none`,
						}
					}
				]
			}	
		},
		'gatsby-plugin-react-helmet'
	]
}
