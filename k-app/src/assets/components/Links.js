import React from 'react';
import '../css/terms.css';

export class Links extends React.Component {
	render() {
		return (
			<div className="links-content">
				<div>
					<hr className="thick-horiz-line" />
				</div>

				<div className="link-text">
					<a
						className="link"
						href="https://www.kickstarter.com/arts?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Arts
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/comics-illustration?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Comics & Illustration
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/design-tech?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Design & Tech
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/film?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Film
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/food-craft?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Food & Craft
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/games?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Games
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/music?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Music
					</a>
					<a
						className="link"
						href="https://www.kickstarter.com/publishing?ref=global-footer"
						target="_blank"
						rel="noopener  noreferrer"
					>
						Publishing
					</a>
				</div>
			</div>
		);
	}
}
