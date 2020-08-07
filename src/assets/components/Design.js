import React from 'react';
import '../css/design.css';

export class Design extends React.Component {
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
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="" src={require('../images/1-Hero.png')} alt="" /> <br />
							<p>Designing for diversity</p>
						</a>

						<a
							className="link-no-underline ds-link"
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>
								A guide to help you start building equitable products, services, and content, written by
								Boyuan Gao and Jahan Mantin of Project Inkblot.
							</p>
						</a>

						<a
							className="blue-link"
							href="https://thecreativeindependent.com/guides/how-to-begin-designing-for-diversity/?ref=section-homepage-promo-designing-for-diversity"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>Read on The Creative Independent</p>
						</a>
					</div>

					<div className="design-text">
						<a
							className="design-link"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="" src={require('../images/design-1.jpg')} alt="" /> <br />
							<p>Just the Beginning</p>
						</a>

						<a
							className="link-no-underline ds-link"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>
								Our new podcast features stories about how independent creators bring their ideas to
								life. Listen to the first season now.
							</p>
						</a>
						<a
							className="blue-link"
							href="https://podcast.kickstarter.com/?ref=section-homepage-promo-just-the-beginning"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>Listen and subscribe</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
