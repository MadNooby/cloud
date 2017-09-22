import React from "react";

export default class Skills extends React.Component{
	render(){
		return(
			<div className="w3-container">
				<h1>MY SKILLS :</h1>

				<div className="w3-card-4">
					<div className="w3-row">
						
						<div className="w3-twothird w3-container left" style={{paddingTop:"40px"}}>
							My 4 horsmen of coding are <strong>C</strong>,<strong>Python</strong>,<strong>JAVASCRIPT</strong>,<strong>PHP</strong>.
							Since the very start of my programming , i always love building softwares/Application from scratch . I have numerous Applications
							made in these languages some of them are in <a href="#/work" className="w3-text-blue">Work</a> Section of this Website .<br />
							Some of the Technologies i have worked on are:<br />
							JavaScript,React for Web and Native mobile Apps,nodeJS+Websockets,bash,Complete Web Development(HTML5+CSS3).
						</div>
						
						<img src="./img/horse.jpg" className="w3-image  w3-third" style={{transform:"scale(0.9)"}}/>
					</div>					
				</div>

				<div className="w3-card-4">
					<div className="w3-row">
						<div className="w3-twothird w3-container left" style={{paddingTop:"40px"}}>
							I have many achievements in the field of ethical Hacking ,from Certificates and prices from TOP MNC companies to giving Seminars on this Topic.
							i have a Good grasp over Linux Operating System and Quite advaced in the field of Hacking(FINDING AND REPORTING BUGS).


						</div>
						
						<img src="./img/ceh.jpg" className="w3-image  w3-third" style={{transform:"scale(0.9)"}}/>
					</div>					
				</div>
	
				<div className="w3-card-4">
					<div className="w3-row">
						<div className="w3-twothird w3-container left" style={{paddingTop:"40px"}}>
							<h3>Machine Learning. </h3><br/>
							My enormous interest in this field made me a fan of this field. The beauty of making computer learn a task and make it perform it of its own.
							Just wow. 
							
						</div>
						
						<img src="./img/ml.png" className="w3-image  w3-third" style={{transform:"scale(0.9)"}}/>
					</div>					
				</div>
	
	
				<div className="w3-card-4">
					<div className="w3-row">
						<div className="w3-twothird w3-container left" style={{paddingTop:"40px"}}>
							This Basically is My best Skill of rest. I am a great Learner and very competitive and Hard worker. Thats what make me what i am and defines my vision towards future .


						</div>
						
						<img src="./img/learn.png" className="w3-image  w3-third" style={{transform:"scale(0.9)"}}/>
					</div>					
				</div>
				
				


			</div>
			);
	}
}