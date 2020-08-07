import React from 'react';
import '../css/terms.css';

export class Terms extends React.Component {
	render() {
		return (
			<div className="term-links">
				<div>
					<hr className="horiz-line" />
				</div>

				<div className="link-text">
					<a
						className="link"
						href="https://www.kickstarter.com/trust?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Trust and Safety
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/terms-of-use?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Terms of Use
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/privacy?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Privacy Policy
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/cookies?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Cookie Policy
					</a>
				</div>
			</div>
		);
	}
}
