import React from 'react'
import Layout from "../components/layout"
import Banner from "../components/banner"
import icon from '../assets/img/author/author.jpg'
import { Helmet } from "react-helmet"


const abouttheauthor= (props) =>{


	const bannerText = (
		<>
			<span className="banr-tagline-fx">Nathan W. McKie, Sr.</span>
			<h1 className="banr-header-fx">
				About the
				<span 
					className="banr-spn-highlight"
					id="span-non-front"
					>Author</span>
			</h1>
		</>
	)

	return(
		<Layout>
			<Helmet title="About the Author | Nathan W. McKie, Sr."/>
			<Banner bannerContext={bannerText} />

			<div className="container">
				<section className="body-author-contents columns">
					 	<div className="column">
					 		<div className="heading-quote">

					 			<div className="author-image-container">
					 				<img id="author" src={icon} alt="author" />
					 				<span className="author-name">
					 					<span className="author-span-ft">Author |  Writer </span>
					 					Nathan W. McKie, Sr.
					 				</span>
					 			</div>

					 			<h4>
								 	"The Dignity of Service sets forth the rationale for taking the approach of helping people make money so they can have a path out of poverty."
					 			</h4>

					 			<span className="ata-span-fx">From The Dignity of Service</span>
					 		</div>
					 	</div>

					 	 <div className="column">
					 	 	<article className="article-section">

					 	 		<p style={{textAlign: 'justify'}}>
                                  Nathan was born in a rural Mississippi town to Christian parents. His maternal grandfather was a minister, and both his parents were heavily involved with their local church and with statewide organizations as well. When Nathan was in high school, he was selected to be the president of his denomination’s conference youth organization president. This led to representing the conference youth at two national meetings.
								</p>

								<p style={{textAlign: 'justify'}}>
									Additionally, he was very active in Boy Scouts and the 4-H Club. he won one district-wide contest and three 4-H state-wide contests which involved making presentations on projects in which he was involved. One of them led to a national contest win. He was part of a livestock judging team that won the state contest and went on to compete in the national contest. During his senior year in high school, he was one of four state students to attend a national leadership conference in Washington, D.C.
								</p>

								<p style={{textAlign: 'justify'}}>
									During his college years, Nathan was president of his fraternity. His involvement in U.S. Air Force Reserve Officers Training Corps led to a commission upon graduation along with a private pilot’s license in preparation to enter pilot training while on active duty. Most of his assignments were stateside, but he was also on temporary duty in Germany and Thailand. His four-plus year’s duty ended with him attaining the rank of Captain and an Air Force Commendation Medal.
								</p>

								<p style={{textAlign: 'justify'}}>
									Upon leaving the military service, he worked first as manager for a clothing manufacturer in South Carolina and then a buyer for wholesale hardware distributor. During the latter position, he earned a Master of Business Administration degree. Later, he taught for two semesters as an adjunct professor at a community college and as an on-line facilitator for a university for four courses.
								</p>

								<p style={{textAlign: 'justify'}}>
									He learned enough about the hardware business to start his own retail business. He stayed with that business for approximately six years before selling out the inventory and making a career change to selling instructional computer systems. Over the course of the next six years, he worked for two different companies increasing sales dramatically in each position.
								</p>

								<p style={{textAlign: 'justify'}}>
									Nathan’s next career change was to become the General Manager for a manufacturer of farm fencing and cargo tie down products. After three years, the company went into bankruptcy and he chose to go out on his own, manufacturing many of the items that had been produced by his previous employer. They sold products on a national scale with approximately 50% of the items being produced in-house. In 2000 the business was sold to a major supplier, and Nathan remained with them for approximately 15 years as sales manager on a part-time basis for the customers that he served previously.
								</p>

								<p style={{textAlign: 'justify'}}>
									Somewhat in tandem, he started a business broker organization and later purchased a sign-making business. In 2004, the broker business expanded to include retail sales consulting. At this time, all of these are operating on a very limited basis.
								</p>

								<p style={{textAlign: 'justify'}}>
									As he began to wind down his working career, Nathan felt a calling to move to a rural area to start a ministry helping Christian entrepreneurs. He purchased a 23-acre parcel of land in 2011 on which he built part of the facilities where training will occur. A non-profit organization was created that would attract funds for the operation of the project. This also includes helping start-up businesses obtain funding as well.
								</p>

								<p style={{textAlign: 'justify'}}>
									When Nathan became aware of an award designed to help restore the economic climate in the area where he purchased the property, he gained a seat on the board of directors and was later elected president. This led to securing a grant to purchase and rehab a group of buildings to be used as training in retail business and a small business incubator to launch start-up businesses. The project lasted for two and one half years and achieved most of its goals. The non-profit, Luke 16 Corp, has now shifted its focus to assisting communities to revitalize themselves for the benefit of all residents.
								</p>

								<p style={{textAlign: 'justify'}}>
									Throughout his life, Nathan has been involved with church activities and served on many committees. This included over 27 churches where he either became a member or attended on a regular basis when on a consulting assignment. He sang in the choir in almost all of the eleven churches of which he was a member. He has taught Sunday school for ages eight through adult. This included three thirty-plus week studies in the Bible and Christian Doctrine. In 2012, he received a Certificate of Ministry from Central Baptist Theological Seminary.
								</p>

								<p style={{textAlign: 'justify'}}>
									In 2012, after being involved with the Missouri East Walk to Emmaus organization for fourteen years, Nathan joined the board of directors. For two years, he was the Community Lay Director - essentially the same as being the board chair. His regular stint on the board ended in 2018, but he remains there representing a new program which he helped start in 2017. It is known as Face to Face and is designed for Christians age 60 and over.
								</p>

								<p style={{textAlign: 'justify'}}>
									Because of his vast and varied experience, Nathan decided to write a book to help others learn from his experiences. Initially, he planned a book on how to deal with the difficulties of starting a business. Through his business experience, coupled with several years of serving on short-term mission teams, he ended up publishing The Dignity of Profit: Creating Community through Entrepreneurship. He continues to write and to help communities revitalize themselves through social entrepreneurship.
								</p>

			
					 	 	</article>
					 	</div>
				</section>
			</div>
	  	</Layout>
	)
}

export default abouttheauthor