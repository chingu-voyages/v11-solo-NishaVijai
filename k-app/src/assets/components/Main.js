import React from 'react';
// import '../css/footer.css';
// import '../css/terms.css';

import { Feature } from './Feature';
import { FreshFav } from './FreshFav';
import { ShapeShift } from './Shapeshift';
import { TakingOff } from './TakingOff';
import { Design } from './Design';
import { Creative } from './Creative';
import { HomeStretch } from './HomeStretch';
import { Explore } from './Explore';

export class Main extends React.Component {
	render() {
		return (
			<div className="main-contents">
				{/* <div>
					<Feature />
				</div>

				<div>
					<FreshFav />
				</div>

				<div>
					<ShapeShift />
				</div>

				<div>
					<TakingOff />
				</div>

				<div>
					<Design />
				</div>

				<div>
					<Creative />
				</div>

				<div>
					<HomeStretch />
				</div> */}

				<div>
					<Design />
				</div>

				<div>
					<Creative />
				</div>

				<div>
					<HomeStretch />
				</div>

				<div>
					<Explore />
				</div>
			</div>
		);
	}
}
