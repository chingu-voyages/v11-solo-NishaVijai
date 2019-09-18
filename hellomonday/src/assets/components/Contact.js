import React from 'react';
import '../css/contact.css';

export class Contact extends React.Component {
	render() {
		return (
			<div className="contact-container">
				<div className="left-section">
					<div>
						<h1>
							Hello Monday<sub>tm</sub>
						</h1>
						<img src={require('../images/tower@2.png')} alt="" />
					</div>

					<div>
						<a href="hello@hellomonday.com">hello@hellomonday.com</a>
					</div>
				</div>

				<div className="right-section">
					<div className="center-top">
						<p>
							We collaborate with ambitious brands and people that are willing to go to the edge of the
							waterfall, look down, and take a leap into the sparkling pool of new ideas. We don’t jump as
							a client and an agency; we’re one team, and we’ll be holding your hand the whole way. Ready
							to take the plunge?
						</p>
					</div>

					<div className="center-bottom">
						<div className="right-side-adresses">
							<h2>Find Us</h2>

							<div className="adresses">
								<h4>New York</h4>
								<address>
									36 East 20th Street, 6th Floor <br />
									New York, NY 10003
								</address>
								<a href="tel: +1 917 261 5750"> Tel: +1 917 261 5750</a>
							</div>

							<div className="adresses">
								<h4>Copenhagen</h4>
								<address>
									Njalsgade 21F, Pakhus 5, ST. <br />
									2300 Copenhagen S
								</address>
								<a href="tel: +45 3145 6035">Tel: +45 3145 6035</a>
							</div>

							<div className="adresses">
								<h4>Aarhus</h4>
								<address>
									Banegardspladsen 20A, 1.tv <br />
									8000 Aarhus C
								</address>
								<a href="tel: +45 6015 4515">Tel: +45 6015 4515</a>
							</div>
						</div>

						<div className="right-side-emails">
							<h2>Say Hello</h2>

							<div className="emails">
								<h4>Work with us</h4>
								<a href="newbusiness@hellomonday.com">newbusiness@hellomonday.com</a>
							</div>

							<div className="emails">
								<h4>General inquiries</h4>
								<a href="hello@hellomonday.com">hello@hellomonday.com</a>
							</div>

							<div className="emails">
								<h4>Become a Mondayteer</h4>
								<a href="career@hellomonday.com">career@hellomonday.com</a>
							</div>

							<div className="emails">
								<h4>Become an intern</h4>
								<a href="intern@hellomonday.com">intern@hellomonday.com</a>
							</div>
						</div>
					</div>

					<div className="copyright-text">
						<span>&copy; Copyright 2019 - </span>
						<a href="https://github.com/chingu-voyages/v11-solo-NishaVijai">Chingu-11-solo-project</a>
					</div>
				</div>
			</div>
		);
	}
}
