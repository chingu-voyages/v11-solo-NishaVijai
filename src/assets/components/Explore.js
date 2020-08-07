import React from 'react';
import '../css/explore.css';

export class Explore extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="explore-content">
					<div className="container-title">
						<h4>more to explore</h4>
					</div>

					<div className="explore-text-container">
						<div className="explore-text">
							<a
								className="explore-link"
								href="https://medium.com/kickstarter/ten-artists-on-what-social-practice-means-to-them-9cae0a0f1364"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									className="left-image"
									src={require('../images/another_future.jpeg')}
									alt=""
								/>{' '}
								<br />
								<p>10 artists on what social practice means to them</p>
							</a>
							<a
								className="sub-link"
								href="https://medium.com/kickstarter/ten-artists-on-what-social-practice-means-to-them-9cae0a0f1364"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<p>kickstarter magazine</p>
							</a>
						</div>

						<div className="explore-text">
							<a
								className="explore-link"
								href="https://www.vanityfair.com/style/2019/09/dread-scott-slave-rebellion-reenactment?ref=section-homepage-newsitem-this-fall-dread-scott-will-recreate-americas-largest-plantation-uprising"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									className="left-image"
									src={require('../images/Slave-Rebellion-1019-LEDE.jpg')}
									alt=""
								/>{' '}
								<br />
								<p>This fall, Dread Scott will recreate America's largest plantation uprising</p>
							</a>
							<a
								className="sub-link"
								href="https://www.vanityfair.com/style/2019/09/dread-scott-slave-rebellion-reenactment?ref=section-homepage-newsitem-this-fall-dread-scott-will-recreate-americas-largest-plantation-uprising"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<p>vanity fair</p>
							</a>
						</div>

						<div className="explore-text">
							<a
								className="explore-link"
								href="https://medium.com/kickstarter/made-from-melted-down-firearms-triwa-watches-aim-to-end-gun-violence-d333b0f57a44"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="left-image" src={require('../images/triwa-watch.jpg')} alt="" /> <br />
								<p>Made from melted-down firearms, TRIWA watches aim to end gun violence</p>
							</a>
							<a
								className="sub-link"
								href="https://medium.com/kickstarter/made-from-melted-down-firearms-triwa-watches-aim-to-end-gun-violence-d333b0f57a44"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<p>kickstarter magazine</p>
							</a>
						</div>

						<div className="explore-text">
							<a
								className="explore-link"
								href="https://www.core77.com/posts/90497/A-Turner-Prize-Sparked-Their-Ceramics-Workshop-Environmentalism-Fuels-Its-Future?ref=section-homepage-newsitem-a-turner-prize-sparked-granby-workshops-ceramics-studio-environmentalism-fuels-its-future"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="left-image" src={require('../images/plate.jpg')} alt="" /> <br />
								<p>
									A Turner Prize sparked Grandby Workshop's ceramics studio; environmentalism fuels
									its future
								</p>
							</a>
							<a
								className="sub-link"
								href="https://www.core77.com/posts/90497/A-Turner-Prize-Sparked-Their-Ceramics-Workshop-Environmentalism-Fuels-Its-Future?ref=section-homepage-newsitem-a-turner-prize-sparked-granby-workshops-ceramics-studio-environmentalism-fuels-its-future"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<p>Core77</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
