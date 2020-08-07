import React from 'react';

import { Links } from './Links';
import { FooterSocial } from './FooterSocial';
import { Terms } from './Terms';

export class Footer extends React.Component {
	render() {
		return (
			<div className="footer-contents">
				<div>
					<Links />
				</div>

				<div>
					<FooterSocial />
				</div>

				<div>
					<Terms />
				</div>
			</div>
		);
	}
}
