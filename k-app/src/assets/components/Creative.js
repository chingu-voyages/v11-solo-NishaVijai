import React from 'react';
import '../css/creative.css';

export class Creative extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="horiz-line" />
				</div>

				<div className="creative-text-container">
					<div className="creative-text">
						<img className="spiral-image" src={require('../images/svgexport-56.png')} alt="" /> <br />
						<h2>The Creative Independent</h2>
						<p>A growing resource of emotional and practical guidance for creative people.</p>
						<a
							className="blue-link"
							href="https://thecreativeindependent.com/?ref=section-homepage-tci-cta"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							Visit The Creative Independent
						</a>
					</div>

					<div className="creative-people">
						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/filmmaker-desiree-akhavan-on-working-on-both-sides-of-the-camera/?ref=section-homepage-tci-article-desiree-akhavan"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Desiree@2x.jpg')} alt="" /> <br />
								Desiree Akhavan
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/filmmaker-desiree-akhavan-on-working-on-both-sides-of-the-camera/?ref=section-homepage-tci-article-desiree-akhavan"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								On working on both sides of the camera
							</a>
						</div>
						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/alicia-bognanno-on-managing-your-creative-time/?ref=section-homepage-tci-article-alicia-bognanno"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Alicia@2x.jpg')} alt="" /> <br />
								Alicia Bognanno
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/alicia-bognanno-on-managing-your-creative-time/?ref=section-homepage-tci-article-alicia-bognanno"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								on managing your creative time
							</a>
						</div>

						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/naama-tsabar-on-taking-control-of-your-process/?ref=section-homepage-tci-article-naama-tsabar"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Naama@2x.jpg')} alt="" /> <br />
								Naama Tsabar
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/naama-tsabar-on-taking-control-of-your-process/?ref=section-homepage-tci-article-naama-tsabar"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								on taking control of your process
							</a>
						</div>

						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/bjork-on-nature-and-technology/?ref=section-homepage-tci-article-bjork"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Bjork@2x.jpg')} alt="" /> <br />
								Björk
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/bjork-on-nature-and-technology/?ref=section-homepage-tci-article-bjork"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								on nature and technology
							</a>
						</div>

						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/john-cale-on-revisiting-your-work/?ref=section-homepage-tci-article-john-cale"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/John@2x.jpg')} alt="" /> <br />
								John Cale
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/john-cale-on-revisiting-your-work/?ref=section-homepage-tci-article-john-cale"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								on revisiting your work
							</a>
						</div>

						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/stevie-nicks-on-the-importance-of-being-a-romantic/?ref=section-homepage-tci-article-stevie-nicks"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Stevie@2x.jpg')} alt="" /> <br />
								Stevie Nicks
							</a>

							<a
								className="link-no-undeline"
								href="https://thecreativeindependent.com/people/stevie-nicks-on-the-importance-of-being-a-romantic/?ref=section-homepage-tci-article-stevie-nicks"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								on the importance of being a romantic
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
