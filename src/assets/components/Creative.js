import React from 'react';
import '../css/creative.css';

export class Creative extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="creative-text-container">
					<div className="creative-text">
						<img className="spiral-image" src={require('../images/svgexport-56.png')} alt="" /> <br />
						<h2 className="yellow-bg">The Creative Independent</h2>
						<p className="creative-left">
							A growing resource of emotional and practical guidance for creative people.
						</p>
						<a
							className="blue-link cr-left"
							href="https://thecreativeindependent.com/?ref=section-homepage-tci-cta"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>Visit The Creative Independent</p>
						</a>
					</div>

					<div className="creative-people">
						<div className="people-links">
							<div className="people-folder">
								<a
									className="creative-link-people"
									href="https://thecreativeindependent.com/people/filmmaker-desiree-akhavan-on-working-on-both-sides-of-the-camera/?ref=section-homepage-tci-article-desiree-akhavan"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img
										className="people-image"
										src={require('../images/Desiree@2x.jpg')}
										alt=""
									/>{' '}
									<br />
									<div>
										<p className="people-name">Desiree Akhavan</p>
										<p className="about-people">on working on both sides of the camera</p>
									</div>
								</a>
							</div>
						</div>
						<div className="people-links">
							<a
								className="creative-link-people"
								href="https://thecreativeindependent.com/people/alicia-bognanno-on-managing-your-creative-time/?ref=section-homepage-tci-article-alicia-bognanno"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="people-image" src={require('../images/Alicia@2x.jpg')} alt="" /> <br />
								<div>
									<p className="people-name">Alicia Bognanno</p>
									<p className="about-people">on managing your creative time</p>
								</div>
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
								<div>
									<p className="people-name">Naama Tsabar</p>
									<p className="about-people">on taking control of your process</p>
								</div>
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
								<div>
									<p className="people-name">Björk</p>
									<p className="about-people">on nature and technology</p>
								</div>
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
								<div>
									<p className="people-name">John Cale</p>
									<p className="about-people">on revisiting your work</p>
								</div>
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
								<div>
									<p className="people-name">Stevie Nicks</p>
									<p className="about-people">on the importance of being a romantic</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
