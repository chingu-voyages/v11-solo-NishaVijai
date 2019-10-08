import React from 'react';
import '../css/footerSocial.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKickstarterK } from '@fortawesome/free-brands-svg-icons';

import Social from '../components/Social';

export class FooterSocial extends React.Component {
	render() {
		return (
			<div className="footer-social-links">
				<div>
					<hr className="horiz-line" />
				</div>

				<div className="m-links cont">
					<div className="about">
						<h5>about</h5>
						<div className="anchor">
							<a
								className="link"
								href="https://www.kickstarter.com/about?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								about us
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/charter?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								our charter
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/help/stats?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								stats
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/press?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								press
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/jobs?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								jobs
							</a>
						</div>
					</div>

					<div className="support">
						<h5>support</h5>
						<div className="anchor">
							<a
								className="link"
								href="https://help.kickstarter.com/hc/en-us"
								target="_blank"
								rel="noopener  noreferrer"
							>
								help center
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/rules?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								our rules
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/help/handbook?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								creator handbook
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/patrons?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								patrons
							</a>
						</div>
					</div>

					<div className="hello">
						<h5>hello</h5>
						<div className="anchor">
							<a
								className="link"
								href="https://www.kickstarter.com/login?then=%2Fsettings%2Fnotifications#newsletters"
								target="_blank"
								rel="noopener  noreferrer"
							>
								newsletters
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/mobile?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								mobile apps
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/blog?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								kickstarter blog
							</a>
							<a
								className="link"
								href="https://kickstarter.engineering/"
								target="_blank"
								rel="noopener  noreferrer"
							>
								engineering blog
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/research?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								research
							</a>
						</div>
					</div>

					<div className="more-from">
						<h5>more from kickstarter</h5>
						<div className="anchor">
							<a
								className="link"
								href="https://thecreativeindependent.com/?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								the creative independent
							</a>
							<a
								className="link"
								href="https://medium.com/kickstarter?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								kickstarter magazine
							</a>
							<a
								className="link"
								href="https://www.kickstarter.com/podcast?ref=global-footer"
								target="_blank"
								rel="noopener  noreferrer"
							>
								kickstarter podcast
							</a>
						</div>
					</div>
				</div>

				<div className="m-links-social cont">
					<div className="copy-social">
						<p>
							{/* <FontAwesomeIcon icon={faKickstarterK} size="1x" />{' '}
							<span>Kickstarter, PBC &copy; 2019</span> */}
							<img className="copyright-image" src={require('../images/svgexport-79.png')} alt="" />
							<span>Kickstarter, PBC &copy; 2019</span>
						</p>
					</div>
					<div className="copy-social-icons">
						<Social />
					</div>
				</div>
			</div>
		);
	}
}
