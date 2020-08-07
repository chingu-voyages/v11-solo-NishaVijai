import React from 'react';
import '../css/top.css';

export class Top extends React.Component {
	render() {
		return (
			<div className="top-content">
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="top-text-container">
					<div className="top-left">
						<img className="coral-image" src={require('../images/CORAL-TUBE_01.png')} alt="" />
						<img className="yellow-disc-image" src={require('../images/YELLOW-DISC_01.png')} alt="" />
					</div>

					<div className="top-middle">
						<p className="top-m-first">Find projects you love, faster.</p>
						<p className="top-m-second">
							Fine-tune your recommendations by answering a few quick questions.
						</p>
						<a
							className="link"
							href="https://www.kickstarter.com/personalize?ref=section-homepage"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<p className="top-m-third">Let's get started</p>
						</a>
					</div>

					<div className="top-right">
						<img className="blue-image" src={require('../images/Yellow-Stairs_8.png')} alt="" />
					</div>
				</div>
			</div>
		);
	}
}
