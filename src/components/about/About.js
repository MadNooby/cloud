import React from "react";

export default class About extends React.Component{
	render(){
		return(
			<div>
				<h2>About me: </h2>
				<div><p className="about-me">
				<h3 style={{textAlign:"left"}}>
					<ul>
					<li>Keen , Hard working and hungry for knowledge, thats me for you. <br/></li>
					<li>Major developer in <a href='http://www.dit.channelcs.com' style={{color:'lightblue'}}>dit.channelcs.com</a>, <a href='#' style={{color:'lightblue'}}>aman.bugtails.in</a>, hosted numerous CTF, ethical hacking compition etc.<br/></li>
					<li>Working on 2 startups and belive to follow your dreams and work hard .<br/></li>
					<li>World rank 430/20,000 in a worlds major ethical hacking compition.<br/></li>
					<li>Was in basketball school team . <br/></li>
					<li>School rank 1 in Maths /science and english olympiads <br /></li>
					
					</ul>
				</h3>
				</p></div>
			</div>
			
			);
	}
}