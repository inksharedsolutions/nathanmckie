import React from 'react';
import { Link } from 'gatsby';
import icon from '../assets/img/author/author1.jpg';

const main = () => {
	return (
		<section className="main-section container">
			<div className="columns" id="main-author-content">
				<div className="column">
					<div className="wrapper-heading-content">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="column is-three-fifths section-main-contents">
					<p>
						<span className="icon-auhtor">
							<img alt="author_icon" src={icon} />
							<span className="author-name-tagline">
								Nathan W. McKie, Sr.
								<span className="author-fx" />
							</span>
						</span>
					</p>

					<p style={{textAlign: "justify"}}>
						Nathan was born in a rural Mississippi town to Christian parents.  His maternal grandfather was a minister, and both his parents were heavily involved with their local church and with statewide organizations as well.  When Nathan was in high school, he was selected to be the president of his denomination’s conference youth organization president.  This led to representing the conference youth at two national meetings.
					</p>

					<button className="btn-main-customize">
						<Link to="/about-the-author#author"> Read More</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default main;
