import React from "react"
import Layout from '../components/layout'
import PostsBar from '../components/postsbar'
import {Helmet} from 'react-helmet'

import '../styles/style.css'

const IndexPage = () => (
	<Layout title="Home">
		<Helmet>
			<title>Burrito's Blog</title>
		</Helmet>
	</Layout>
)

export default IndexPage
