import React from "react";

export default class Data extends React.Component{
	render(){
		return(
			<div>
				<p style={{textAlign:"left"}}>CERTIFICATES :</p>
				<div className="w3-row p3">
					<div className="w3-third img-pad p3">
						<img src="img/intel.png" className="w3-image w3-card-8 achv" />
						<p className="descText">INTEL CERTIFICATE(feb 4)</p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/flux.png" className="w3-image w3-card-8 achv" />
						<p className="descText"><a href="https://www.fluxiom.com/security">FLUXIOM HALL OF FAME</a></p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/edomo.png" className="w3-image w3-card-8 achv" />
						<p className="descText">EDOMODO T-Shirt SWAG</p>
					</div>
				</div>
				<hr />
				<div className="w3-row p3" style={{marginTop:"40px"}}>
					<div className="w3-third img-pad p3">
						<img src="img/sony.png" className="w3-image w3-card-8 achv" />
						<p className="descText"><a href="https://secure.sony.net/hallofthanks">SONY HALL OF FAME AND GOODIES</a></p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/govt.png" className="w3-image w3-card-8 achv" />
						<p className="descText">Respectfull GOVERNMENT CERTIFICATE FOR SECURING GOVT. SITES</p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/dell.png" className="w3-image w3-card-8 achv" />
						<p className="descText"><a href="http://www.dell.com/learn/nz/en/nzbsd1/campaigns/contributors-dell-software-security?c=nz&l=en&s=bsd&cs=nzbsd1">DELL HALL OF FAME</a></p>
					</div>
				</div>
				<hr />
				<div className="w3-row p3" style={{marginTop:"40px"}}>
					<div className="w3-third img-pad p3">
						<img src="img/intel1.png" className="w3-image w3-card-8 achv" />
						<p className="descText">INTEL CERTIFICATE(14 Nov)</p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/aol.png" className="w3-image w3-card-8 achv" />
						<p className="descText"><a href="https://contact.security.aol.com/hof/">AOL HALL OF FAME</a></p>
					</div>
					<div className="w3-third img-pad p3">
						<img src="img/att.png" className="w3-image w3-card-8 achv" />
						<p className="descText"><a href="https://bugbounty.att.com/myprofile.php">AT&T HALL OF FAME</a></p>
					</div>
				</div>

				
		
			
			<div className="w3-container">
					<h3 className="achvText">
						Apart From these i was also appriciated by amazon, Facebook For Finding a bug which was although not rewared because
						It was being under fixed by those companies.
					</h3>
				</div>

			</div>

			);
	}
}