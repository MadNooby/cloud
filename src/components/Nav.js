import  React  from "react";


export default class Nav extends React.Component{
	
	render(){
		return(
			<div className="nav  w3-light-grey w3-row">
				<div className="w3-col l7 m6 nav-nav w3-hide-small">
					<ul>
						<li><a href="#home" className="w3-btn btn w3-green">Home</a></li>
						<li><a href="#about" className="w3-btn btn w3-green">About</a></li>
						<li><a href="#achievement" className="w3-btn btn w3-green">Achievement</a></li>
						<li><a href="#skills" className="w3-btn btn w3-green">Skills</a></li>
						<li><a href="#work" className="w3-btn btn w3-green">Work</a></li>
					</ul>
				</div>
				<div className="w3-hide-medium w3-hide-large w3-col s4 w3-container" style={{height:"100%"}}>
					<div className="icon-floater">
						<span className="invisible inc-size" >no text</span>
					</div>
				</div>
				<div className="w3-col l5 m6 s8" style={{height:"100%"}}>
					<img src="./img/logo.png" className="w3-hide-medium w3-hide-small logo" style={{height:"100%"}} />
					<img src="./img/logo-lg.png" className="w3-hide-small w3-hide-large logo" style={{height:"100%"}}/>
					<img src="./img/logo.png" className="w3-hide-medium w3-hide-large" style={{height:"100%"}}/>
				</div>

			</div>
			);
	}
}