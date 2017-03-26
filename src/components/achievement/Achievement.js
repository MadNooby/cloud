import React from "react";

export default class Achievement extends React.Component{
	render(){
		return(
			<div className="w3-container">
				
				<h2>We are in Achievemnet </h2>
				

				<p style={{textAlign:"left"}}>CERTIFICATES :</p>
				<div className="w3-row p3">
					<div className="w3-third img-pad">
						<img src="img/intel.png" className="w3-image w3-card-8 achv" />
					</div>
					<div className="w3-third img-pad">
						<img src="img/flux.png" className="w3-image w3-card-8 achv" />
					</div>
					<div className="w3-third img-pad">
						<img src="img/edomo.png" className="w3-image w3-card-8 achv" />
					</div>
				</div>

				<div className="w3-row p3">
					<div className="w3-third img-pad">
						<img src="img/sony.png" className="w3-image w3-card-8 achv" />
					</div>
					<div className="w3-third img-pad">
						<img src="img/govt.png" className="w3-image w3-card-8 achv" />
					</div>
					<div className="w3-third img-pad">
						<img src="img/dell.png" className="w3-image w3-card-8 achv" />
					</div>
				</div>

				<div className="w3 p3">
					<div className="w3-third img-pad">
						<img src="img/intel1.png" className="w3-image w3-card-8 achv" />
					</div>
				</div>
		
				<div className="w3-container">
					<h4 className="achvText">
						Apart From these i was also appriciated by amazon, Facebook For Finding a bug which was although not rewared because
						It was being under fixed by those companies.
					</h4>
				</div>
			</div>
			);
	}
}