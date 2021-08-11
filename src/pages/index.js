import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Main from '../components/main'
import MainBottom  from '../components/main-bottom'
//import Newsletter  from '../components/newsletter'
import Banner from "../components/banner"
import { Helmet } from "react-helmet"

const IndexPage = () => {
	

	const bannerText = (
		<>
			<span className="banr-tagline-fx">Nathan W. McKie, Sr.</span>
			<h1 className="banr-header-fx">
				<span className="banr-spn-highlight">The Dignity of Service</span>
				<span className="banr-spn-2">The Power of Social Entrepreneurship</span> 
				<Link
					key=""
					className="btn-banner-intro" 
					to="/about-the-book">Read More
				</Link>
			</h1>
		</>
	)

	return (
	  	<Layout>
			  <Helmet title="Home | Nathan W. McKie, Sr."/>
	  		 <Banner bannerContext={bannerText} />
			 <Main/>
			 <MainBottom />
			 {/* <Newsletter /> */}
	  	</Layout>
  	)

}

export default IndexPage
