import React from 'react';
import '../css/social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Social() {
	return (
		<div className="social-media-links">
			<a
				className="facebook social"
				href="https://www.facebook.com/Kickstarter/"
				target="_blank"
				rel="noopener  noreferrer"
			>
				<FontAwesomeIcon icon={faFacebook} />
			</a>

			<a
				className="instagram social"
				href="https://www.instagram.com/kickstarter/"
				target="_blank"
				rel="noopener  noreferrer"
			>
				<FontAwesomeIcon icon={faInstagram} />
			</a>

			<a
				className="twitter social"
				href="https://twitter.com/kickstarter"
				target="_blank"
				rel="noopener  noreferrer"
			>
				<FontAwesomeIcon icon={faTwitter} />
			</a>

			<a
				className="youtube social"
				href="https://www.youtube.com/user/kickstarter"
				target="_blank"
				rel="noopener  noreferrer"
			>
				<FontAwesomeIcon icon={faYoutube} size="1x" />
			</a>
		</div>
	);
}
