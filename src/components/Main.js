import  React  from "react";

import Nav from "./Nav";
import Slider from "./Slider";
import Footer from "./Footer";

export default class Main extends React.Component{
		

	render(){
		return(
			<div>
				<div className="chck">
					<Slider />
					<Nav />
					<div className="w3-center content-main">
						{this.props.children}
					</div>
				</div>
				<Footer />
				 
			</div>
			
			);
	}
}

