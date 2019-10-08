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
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="left-image" src={require('../images/1-Hero.png')} alt="" /> <br />
							Designing for diversity
						</a>

						<a
							className="link-no-underline left-line"
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							A guide to help you start building equitable products, services, and content, written by
							Boyuan Gao and Jahan Mantin of Project Inkblot.
						</a>
						<a
							className="blue-link"
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Read on The Creative Independent
						</a>
					</div>

					<div className="design-text">
						<a
							className="design-link left-line"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="left-image" src={require('../images/design-1.jpg')} alt="" /> <br />
							Just the Beginning
						</a>

						<a
							className="link-no-underline left-line"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Our new podcast features stories about how independent creators bring their ideas to life.
							Listen to the first season now.
						</a>
						<a
							className="blue-link"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Listen and subscribe
						</a>
					</div>
				</div>
			</div>
		);
	}
}
