import React from 'react';

import { Top } from './Top';
import { Navigation } from './Navigation';
import { LinksHeader } from './LinksHeader';

export class Header extends React.Component {
	render() {
		return (
			<div className="footer-contents">
				<div>
					<Top />
				</div>

				<div>
					<Navigation />
				</div>

				<div>
					<LinksHeader />
				</div>
			</div>
		);
	}
}
