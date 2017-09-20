import React from "react";

import Main from "../Main";
import Footer from "../Footer";

export default class Home extends React.Component{
	constructor() {
		super();
		this.state={
			name:"Hard Work Beat Talent if Talent Doesn't Work Hard ."
		};
	}



	changeState(e){
		let xhr=new XMLHttpRequest();
		xhr.open("GET","req.php",true);
		xhr.send(null);
		var name="";
		xhr.onload=function(){
			this.setState({name:xhr.responseText});
		}.bind(this);
		
	}
	xyz(){
		return(
			<svg className="myname w3-hide-small">
			 <g>
			  <title>Layer 1</title>
			  <text  textAnchor="middle" fontFamily="Cursive" fontSize="2em" id="svg_3" y="154.92184" x="195.7344"  strokeWidth="0.8">A</text>
			  <text  textAnchor="middle" fontFamily="Cursive" fontSize="2em" id="svg_4" y="162.51559" x="213.45315"  strokeWidth="0.8">m</text>
			  <text  textAnchor="middle" fontFamily="Cursive" fontSize="2em" id="svg_5" y="162.09371" x="230.32815"  strokeWidth="0.8" >a</text>
			  <text  textAnchor="middle" fontFamily="Cursive" fontSize="2em" id="svg_7" y="156.18746" x="245.51565"  strokeWidth="0.8">N</text>
			 </g>
			</svg>
		);
	}

	

	render(){
		return(
			
			<div className="w3-container" style={{zIndex:"2"}}>
				<div className="w3-container w3-card-8 w3-light-grey w3-row" style={{paddingBottom:"50px"}}>
					<div className="w3-twothird w3-large">
						<h2>Welcome Home AMAN </h2>
						<p className="about-me">
							Hello, I am Aman Sapra. This is a Portfolio site describing my work.
							
							I am just a believer that i can Change the world And "why not". I have a big Aim and Work HARD 
							for it .some Quotes i would like to Phrase :<br />
							  <span style={{fontSize:"100px"}}>&#10077;</span>
									<span style={{fontFamily:"cursive"}}>{this.state.name}</span><br />
									<button className="w3-button w3-blue getquote" onClick={this.changeState.bind(this)}>GET MORE QUOTES</button><br />
						</p>
					</div>
					<div className="w3-third  w3-container" style={{position:"relative"}}>
						<img src="./img/me.jpg" className="w3-image my-img" />
						{this.xyz()}
						here
					</div>
				</div>

				
				<br />
			</div>
			);
	}
}