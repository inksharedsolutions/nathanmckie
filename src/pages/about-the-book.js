import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import Book from '../assets/img/books/book.png'
import { DiscussionEmbed } from "disqus-react"
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'nathan-w-mckie-sr',
	  config: { identifier:  12, slug}
	}
	
	const bannerText = (
		<>
			<span className="banr-tagline-fx">Nathan W. McKie, Sr.</span>
			<h1 className="banr-header-fx">
				About the
				<span className="banr-spn-highlight" id="span-non-front" >Book</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Book | Nathan W. McKie, Sr." />
			<Banner bannerContext={bannerText} />

			<main className="wrapperMain">
				<div className='container'>
						<div className="columns">
						
							<div className="column">
								<div className="bookImgContainer">
									<img id="you-can-too" alt="main-book" src={Book} />
								</div>
							</div>
							
							<div className="column">
								<section className="contentBook">

									<div className="title-wrapper">
										 <h1>The Dignity of Service</h1>
									 	<p>The Power of Social Entrepreneurship</p>
								    </div>

									<p>
                                    	In 2018, Nathan published a book entitled, The Dignity of Profit: Building Community through Entrepreneurship. In it he described the call that we have as Christians to go out into the field to make a difference and the landscape that awaits those servants who do. A general approach to the way this plays out at field level was provided; but now, there has been some actual experience that we use to flesh out the process. 
									</p>

									<p>
                                    	Through a grant from a local economic development organization, Luke 16 Corp (a non-profit founded by Nathan) purchased a building and built out areas for incubated businesses. This facility also included a café for training people for work focused on customer service. It is an unusual concept in that businesses get support by the Luke 16 organization. This book is about how to garner the support necessary to make projects like this be all that they can be.
									</p>

									<p>
										Jeffrey Baker is joining in this book to provide the additional perspective that will make it much richer in terms of a broader knowledge of field work. Both Nathan and Jeff have entrepreneurial backgrounds and seek to foster a better understanding of the power that can come from true service-oriented approach.
									</p>

									<p>
										Additionally, our experience has helped us understand the potholes that await anyone who seeks to step out in faith. Profit was directed toward churches, and to some degree businesspeople, who weren't that interested in either social enterprises or social entrepreneurship. So, here's the approach in Service: let's develop the notion that servants are not weak or ignorant folks who can't or won't take on such projects. As we look at what it means to be a servant leader, we hope you will find yourself imagining how you can pursue your dream or objective with this approach.
									</p>

									<p>
										Ultimately, the main focus still has to be on developing community. For we believe that only by doing so can there be a meaningful impact on helping to alleviate poverty. We will look closely at the fallacy of other programs and provide some alternatives that can be very effective.
									</p>

								</section>

								<nav className="booklinkBlocks">
								    <span>Ebook :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Dignity-Service-Nathan-W-Mckie-ebook/dp/B08Q61VYT6/ref=sr_1_1?dchild=1&keywords=9781648952517&qid=1608673683&sr=8-1">Amazon</a></li>
									{/* <li><a rel="noopener noreferrer" target="_blank" href="https://www.stratton-press.com/books/you-can-too-how-an-aflac-rookie-built-the-business-in-a-year/">Stratton Press</a></li> */}
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-dignity-of-service-nathan-w-mckie/1138446337?ean=9781648952517">Barnes & Noble</a></li>
								</nav>

								<nav className="booklinkBlocks">
									<span>Paperback :</span>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.amazon.com/Dignity-Service-Nathan-W-McKie/dp/164895250X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1608673683&sr=8-1">Amazon</a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.barnesandnoble.com/w/the-dignity-of-service-nathan-w-mckie/1138446337?ean=9781648952500">Barnes & Noble </a></li>
									<li><a rel="noopener noreferrer" target="_blank" href="https://www.booksamillion.com/p/Dignity-Service/Nathan-W-McKie/9781648952500?id=8238323095674">Books A Million</a></li>
								</nav>
							</div>
						</div>
					
		
						<div className="commentSection" >
						  <DiscussionEmbed {...disqusConfig} />
						</div>

				</div>	
			</main>


	  	</Layout>
	)
}

export default abouttheauthor