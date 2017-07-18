import React from "react";

export default class Footer extends React.Component{
	render(){
		return (
			<footer className="fainter w3-black w3-container">
				<div className="w3-container cnter">
					<div className="w3-row">
						<div className="w3-half">
						<h2 className="w3-container w3-text-blue">Contact Me: </h2>
							<ul>
								<li className="w3-padding-8" style={{display:"block"}}><a href="https://www.facebook.com/aman.sapra.773">FaceBook</a></li>
								<li className="w3-padding-8"><a href="https://www.youtube.com/channel/UCGnuev6fWFEWE4cMZ-Y1Ddg">YouTube</a></li>
								<li className="w3-padding-8" style={{display:"block"}}><a href="https://github.com/Anonyme1396">GitHub</a></li>
							</ul>
						</div>
						<div className="w3-half">
							<h2 className="invisible">Empty</h2>
								<p>Leave Me a Message :</p>
								<form className="w3-container w3-text-black">
									<input className="w3-input" type="text" placeholder="Message" />
								</form>
						</div>
						
						
					</div>
				</div>
			</footer>
			);
	}
}