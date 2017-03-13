import React from "react";

export default class Title extends React.Component{

	render(){
		return(

			<div className="w3-container  mywork">
				<div className="w3-row w3-card-8">
				
					<div className=" mywork w3-threequarter"> 
						<header className="w3-container w3-light-grey">
							<h1>{this.props.title}</h1>
						</header>
						<div className="w3-container" style={{textAlign:"left"}}>
							{this.props.data}
						</div>
						<div className="w3-container" style={{float:"right"}}>
							<a href={this.props.imgurl}><strong>GOTO THIS PROJECT CODE</strong></a>
						</div>
					</div>

					<div className="w3-quarter">
						<img src={this.props.imageurl} className="w3-image" style={{maxHeight:"300px"}} />
					</div>
				</div>
			</div>

			);
	}

}