import React from 'react';
import '../css/design.css';
import '../css/feature.css';

export class Feature extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="design-text-container feature-container">
					<div className="design-text feature-left">
						<div className="container-title feature-title">
							<h4>featured project</h4>
						</div>
						<a
							className="design-link tilt-five"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="" src={require('../images/tiltfive.jpg')} alt="" /> <br />
							<p>Tilt Five: Holographic Tabletop Gaming</p>
						</a>

						<a
							className="link-no-underline feature-no-underline"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>Take game night to another dimension.</p>
						</a>
						<a
							className="black-link"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p>
								By <span className="name-underline">Tilt Five</span>
							</p>
						</a>
					</div>

					<hr className="thin-vertical-line" />

					<div className="feature-right">
						<div className="container-title feature-title">
							<h4>recommended</h4>
						</div>
						<div className="feature-right-content">
							<div className="f-right first">
								<div className="image-right">
									<a
										className=""
										href="https://www.kickstarter.com/projects/nichtlustig/moviecliches?ref=section-homepage-projectcollection-3-staff-picks-newest"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<img className="" src={require('../images/ff-movie.png')} alt="" />
									</a>
								</div>

								<div className="p-right">
									<a
										className="p-right-hover"
										href="https://www.kickstarter.com/projects/nichtlustig/moviecliches?ref=section-homepage-projectcollection-3-staff-picks-newest"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p>MOVIE CLICHÉS - the card game</p>
									</a>
									{/* <p className="p-text">MOVIE CLICHÉS - the card game</p> */}
									<p className="right-green-font">220% funded</p>
									<a
										className="black-link"
										href="https://www.kickstarter.com/projects/nichtlustig/moviecliches?ref=section-homepage-projectcollection-3-staff-picks-newest"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p className="span-text">
											By <span className="name-underline">Joscha Sauer</span>
										</p>
									</a>
								</div>

								<div className="heart-right">
									<img
										className=""
										src={require('../images/svgexport-8.png')}
										alt=""
										title="Remind Me"
									/>
								</div>
							</div>

							<hr className="thin-horiz-line" />

							<div className="f-right second">
								<div className="image-right">
									<a
										className=""
										href="https://www.kickstarter.com/projects/rockfishgames/everspace-2?ref=section-homepage-projectcollection-3-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<img className="" src={require('../images/to-everspace.jpg')} alt="" />
									</a>
								</div>

								<div className="p-right">
									<a
										className="p-right-hover"
										href="https://www.kickstarter.com/projects/rockfishgames/everspace-2?ref=section-homepage-projectcollection-3-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p>EVERSPACE 2</p>
									</a>
									<p className="right-green-font">35% funded</p>
									<a
										className="black-link"
										href="https://www.kickstarter.com/projects/rockfishgames/everspace-2?ref=section-homepage-projectcollection-3-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p className="span-text">
											By <span className="name-underline">ROCKFISH Games</span>{' '}
										</p>
									</a>
								</div>

								<div className="heart-right">
									<img
										className=""
										src={require('../images/svgexport-8.png')}
										alt=""
										title="Remind Me"
									/>
								</div>
							</div>

							<hr className="thin-horiz-line" />

							<div className="f-right third">
								<div className="image-right">
									<a
										className=""
										href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<img className="" src={require('../images/to-legends.jpg')} alt="" />
									</a>
								</div>

								<div className="p-right">
									<a
										className="p-right-hover"
										href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p>Time of Legends: Joan of Arc 1.5</p>
									</a>
									<p className="right-green-font">617% funded</p>
									<a
										className="black-link"
										href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										<p className="span-text">
											By <span className="name-underline">Mythic Games, Inc.</span>
										</p>
									</a>
								</div>

								<div className="heart-right">
									<img
										className=""
										src={require('../images/svgexport-8.png')}
										alt=""
										title="Remind Me"
									/>
								</div>
							</div>

							<hr className="thin-horiz-line" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
