import React from 'react';
import '../css/homeStretch.css';

export class HomeStretch extends React.Component {
	render() {
		return (
			<div>
				<div>
					<hr className="horiz-line" />
				</div>

				<div className="homestretch-content">
					<div className="container-title">
						<h4>home stretch</h4>
					</div>

					<div className="homestretch-text-container">
						<div className="homestretch-text">
							<a
								className="homestretch-link"
								href="https://www.kickstarter.com/projects/961467660/stories-ii?ref=section-homepage-projectcollection-1-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="homestretch-image" src={require('../images/hs-stories.jpg')} alt="" />
								{/* <button>
									<img className="heart" src={require('../images/svgexport-8.png')} alt="" />Remind Me
								</button> */}
								<br />
								Stories II
							</a>

							<a
								className="link-no-underline"
								href="https://www.kickstarter.com/projects/961467660/stories-ii?ref=section-homepage-projectcollection-1-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								<p>
									Stories II is my 2nd collection of photographs, published in a book, taken over a
									year.
								</p>
							</a>
							<a
								className="black-link"
								href="https://www.kickstarter.com/projects/961467660/stories-ii?ref=section-homepage-projectcollection-1-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								By <span className="name-underline">Alexandre Mendez</span>
							</a>
						</div>

						<div className="homestretch-text">
							<a
								className="homestretch-link"
								href="https://www.kickstarter.com/projects/adamctierney/those-kids-u-know-an-encyclopedia-of-high-school-deviants?ref=section-homepage-projectcollection-2-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img className="homestretch-image" src={require('../images/hs-kids.png')} alt="" />{' '}
								<br />
								THOSE KIDS U KNOW: An Encyclopedia of High School Deviants
							</a>

							<a
								className="link-no-underline"
								href="https://www.kickstarter.com/projects/adamctierney/those-kids-u-know-an-encyclopedia-of-high-school-deviants?ref=section-homepage-projectcollection-2-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								<p>
									A funky fresh A-to-Z illustrated children's book (sorta?) about the different types
									of high school kids!
								</p>
							</a>
							<a
								className="black-link"
								href="https://www.kickstarter.com/projects/adamctierney/those-kids-u-know-an-encyclopedia-of-high-school-deviants?ref=section-homepage-projectcollection-2-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								By <span className="name-underline">Adam Tierney</span>
							</a>
						</div>

						<div className="homestretch-text">
							<a
								className="homestretch-link"
								href="https://www.kickstarter.com/projects/paul-du-coudray/the-orange-who-ruled-the-world?ref=section-homepage-projectcollection-3-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									className="homestretch-image"
									src={require('../images/hs-orange.jpg')}
									alt=""
								/>{' '}
								<br />
								The Orange Who Ruled The World
							</a>

							<a
								className="link-no-underline"
								href="https://www.kickstarter.com/projects/paul-du-coudray/the-orange-who-ruled-the-world?ref=section-homepage-projectcollection-3-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								<p>
									We aim to bring this story to life in a unique full-color book — illustrated by
									Charlotte Dumortier and written by Benjamin Rosenbaum.
								</p>
							</a>
							<a
								className="black-link"
								href="https://www.kickstarter.com/projects/paul-du-coudray/the-orange-who-ruled-the-world?ref=section-homepage-projectcollection-3-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								By <span className="name-underline">Paul du Coudray</span>
							</a>
						</div>

						<div className="homestretch-text">
							<a
								className="homestretch-link"
								href="https://www.kickstarter.com/projects/briecs/homunculus-assembly-line?ref=section-homepage-projectcollection-4-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									className="homestretch-image"
									src={require('../images/hs-assembly.png')}
									alt=""
								/>{' '}
								<br />
								Homunculus Assembly Line
							</a>

							<a
								className="link-no-underline"
								href="https://www.kickstarter.com/projects/briecs/homunculus-assembly-line?ref=section-homepage-projectcollection-4-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								<p>An experimental roleplaying game art zine.</p>
							</a>

							<a
								className="black-link"
								href="https://www.kickstarter.com/projects/briecs/homunculus-assembly-line?ref=section-homepage-projectcollection-4-staff-picks-ending-soon"
								rel="noopener  noreferrer"
							>
								<br />
								By <span className="name-underline">Brie Sheldon</span>
							</a>
						</div>

						<div className="homestretch-text">
							<a
								className="homestretch-link"
								href="https://www.kickstarter.com/projects/lotfw/leaders-of-the-free-world-issue-2?ref=section-homepage-projectcollection-5-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<img
									className="homestretch-image"
									src={require('../images/hs-issue.jpg')}
									alt=""
								/>{' '}
								<br />
								Leaders of the Free World Issue #2
							</a>

							<a
								className="link-no-underline"
								href="https://www.kickstarter.com/projects/lotfw/leaders-of-the-free-world-issue-2?ref=section-homepage-projectcollection-5-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								<p>
									Five heroes from around the world must put aside their differences & team up with a
									super villain to save the world. But at what cost?
								</p>
							</a>
							<a
								className="black-link"
								href="https://www.kickstarter.com/projects/lotfw/leaders-of-the-free-world-issue-2?ref=section-homepage-projectcollection-5-staff-picks-ending-soon"
								target="_blank"
								rel="noopener  noreferrer"
							>
								<br />
								By <span className="name-underline">Lakel Pruitt</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
