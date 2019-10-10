import React from 'react';
import '../css/navigation.css';

export class Navigation extends React.Component {
	render() {
		return (
			<div className="links-content">
				<div>
					<hr className="thin-horiz-line" />
				</div>

				<div className="link-navigation-text">
					<div className="nav-left nav-flex">
						<a
							className="link-explore"
							href="https://www.kickstarter.com/"
							target="_blank"
							rel="noopener  noreferrer"
						>
							Explore
						</a>
						<a
							className="link"
							href="https://www.kickstarter.com/learn?ref=nav"
							target="_blank"
							rel="noopener  noreferrer"
						>
							Start a project
						</a>
					</div>

					<div className="nav-middle">
						<a
							className="link"
							href="https://www.kickstarter.com/?ref=nav"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<img className="kick-image" src={require('../images/svgexport-4.png')} alt="" />
						</a>
					</div>

					<div className="nav-right nav-flex">
						<a
							className="link"
							href="https://www.kickstarter.com/film?ref=global-footer"
							target="_blank"
							rel="noopener  noreferrer"
						>
							<span>Search</span>
							<img className="search-image" src={require('../images/svgexport-5.png')} alt="" />
						</a>
						<img className="blue-image" src={require('../images/missing_user_avatar.png')} alt="" />
					</div>
				</div>
			</div>
		);
	}
}
