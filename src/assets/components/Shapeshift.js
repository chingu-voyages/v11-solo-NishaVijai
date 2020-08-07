import React from 'react';
import '../css/design.css';
export class Shapeshift extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="design-text-container">
					<div className="design-text">
						<a
							className="design-link"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="" src={require('../images/plant-recycle.jpg')} alt="" /> <br />
							<p>Shapeshift</p>
						</a>

						<a
							className="link-no-underline ds-link"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>Bold new products made from recycled materials.</p>
						</a>
						<a
							className="blue-link"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>View projects</p>
						</a>
					</div>

					<div className="design-text">
						<a
							className="design-link"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="" src={require('../images/smile-people.jpg')} alt="" /> <br />
							<p>Kickstarter x Social Art Network</p>
						</a>

						<a
							className="link-no-underline ds-link"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>
								Explore projects from UK-based artists highlighting urgent social and political issues.
							</p>
						</a>
						<a
							className="blue-link"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>View projects</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
