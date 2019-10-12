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

				<div className="design-text-container">
					<div className="design-text feature-left">
						<div className="container-title feature-title">
							<h4>featured project</h4>
						</div>
						<a
							className="design-link tilt-five-text f-p-l"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="left-image f-p-l" src={require('../images/tiltfive.jpg')} alt="" /> <br />
							<p className="tilt-text tilt-heading">Tilt Five: Holographic Tabletop Gaming</p>
						</a>

						<a
							className="link-no-underline f-p-l"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p className="tilt-text tilt-p">Take game night to another dimension.</p>
						</a>
						<a
							className="black-link f-p-l"
							href="https://www.kickstarter.com/projects/tiltfive/holographic-tabletop-gaming?ref=section-homepage-featured-project"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<br />
							<p className="tilt-text">
								By <span className="name-underline">Tilt Five</span>
							</p>
						</a>
					</div>

					<hr className="thin-vertical-line" />
					{/* <hr /> */}

					{/* <div className=""> */}
					{/* <div className="container-title feature-title">
							<h4>recommended</h4>
						</div> */}
					<div className="feature-right">
						<div className="container-title feature-title">
							<h4>recommended</h4>
						</div>
						<div className="feature-right-content">
							<div className="f-right first">
								<div className="image-right">
									{/* <a
											className=""
											href="https://www.kickstarter.com/projects/nichtlustig/moviecliches?ref=section-homepage-projectcollection-3-staff-picks-newest"
											target="_blank"
											rel="noopener  noreferrer"
										>
											<img className="" src={require('../images/ff-movie.png')} alt="" /> <br />
											<p>MOVIE CLICHÉS - the card game</p>
										</a> */}
									<img className="" src={require('../images/ff-movie.png')} alt="" />
								</div>
								<div className="p-right">
									<p className="p-text">MOVIE CLICHÉS - the card game</p>
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
									{/* <p className="heart-desc">Remind Me</p> */}
								</div>
							</div>
							{/* <div>
									<p>220% funded</p>
								</div>
								<div>
									<a
										className="black-link"
										href="https://www.kickstarter.com/projects/nichtlustig/moviecliches?ref=section-homepage-projectcollection-3-staff-picks-newest"
										target="_blank"
										rel="noopener  noreferrer"
									>
										<br />
										By <span className="name-underline">Joscha Sauer</span>
									</a>
								</div> */}

							<hr className="thin-horiz-line" />

							<div className="f-right second">
								<div className="image-right">
									<img className="" src={require('../images/to-everspace.jpg')} alt="" />
								</div>
								<div className="p-right">
									<p>EVERSPACE 2</p>

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
									{/* <p className="heart-desc">Remind Me</p> */}
								</div>
							</div>

							<hr className="thin-horiz-line" />

							<div className="f-right third">
								<div className="image-right">
									<img className="" src={require('../images/to-legends.jpg')} alt="" />
								</div>
								<div className="p-right">
									<p>Time of Legends: Joan of Arc 1.5</p>

									<p className="right-green-font">617% funded</p>
									<a
										className="black-link"
										href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
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
									{/* <p className="heart-desc">Remind Me</p> */}
								</div>
							</div>

							<hr className="thin-horiz-line" />
						</div>

						{/* <div className="f-right second">
								<a
									className=""
									href="https://www.kickstarter.com/projects/rockfishgames/everspace-2?ref=section-homepage-projectcollection-3-staff-picks-popular"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img className="" src={require('../images/to-everspace.jpg')} alt="" /> <br />
									<p>EVERSPACE 2</p>
								</a>
								<p>EVERSPACE 2</p>
								<br />
								<p>35% funded</p>
								<br />
								<a
									className="black-link"
									href="https://www.kickstarter.com/projects/rockfishgames/everspace-2?ref=section-homepage-projectcollection-3-staff-picks-popular"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<br />
									By <span className="name-underline">ROCKFISH Games</span>
								</a>
							</div> */}

						{/* <div className="f-right third">
								<a
									className="homestretch-link"
									href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
									target="_blank"
									rel="noopener  noreferrer"
								>
									<img className="" src={require('../images/to-legends.jpg')} alt="" /> <br />
									<p>Time of Legends: Joan of Arc 1.5</p>
								</a>

								<p>617% funded</p>

								<a
									className="black-link"
									href="https://www.kickstarter.com/projects/1162110258/time-of-legends-joan-of-arc-15?ref=section-homepage-projectcollection-4-staff-picks-popular"
									rel="noopener  noreferrer"
								>
									<br />
									By <span className="name-underline">Mythic Games, Inc.</span>
								</a>
							</div> */}
						{/* </div> */}
					</div>
				</div>
			</div>
		);
	}
}
