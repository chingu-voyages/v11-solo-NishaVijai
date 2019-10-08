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
							className="design-link left-line"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="left-image" src={require('../images/plant-recycle.jpg')} alt="" /> <br />
							Shapeshift
						</a>

						<a
							className="link-no-underline left-line"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Bold new products made from recycled materials.
						</a>
						<a
							className="blue-link"
							href="https://www.kickstarter.com/shapeshift?ref=section-homepage-promo-shapeshift"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							View projects
						</a>
					</div>

					<div className="design-text">
						<a
							className="design-link left-line"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="left-image" src={require('../images/smile-people.jpg')} alt="" /> <br />
							Kickstarter x Social Art Network
						</a>

						<a
							className="link-no-underline left-line"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Explore projects from UK-based artists highlighting urgent social and political issues.
						</a>
						<a
							className="blue-link"
							href="https://www.kickstarter.com/social-art-network?ref=section-homepage-promo-kickstarter-x-social-art-network"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							View projects
						</a>
					</div>
				</div>
			</div>
		);
	}
}
