import React from "react";
import Title from "./Title";

export default class Work extends React.Component{
	constructor() {
		super();
		this.state={
			title:["Photoshop","Shell","WordPRess Scanner","Messenger","Crawler","Physics Engine","Flappy Bird","Snake Game","Maze Generator","Website","Navigator/Gps APP","Image Processing Library","Randomness","Time saviour Extension","Quiz app With real time JAVA compiler","Machine Learning algorithms"],
			
			data:["This app is a PhotoShop kind of software that i created Using Pure javascript and HTML.Pixel Manipulation,Maths related to system etc. Were learned during this",
			"This is a shell developed in php and linux. Its a backdoor that when uploaded gives a total access to user when accessed on webserver. This SHell contained some very dangerous scripts of encrypting whole system and many dangerous stuff. ",
			"A wordpress Site Scanner made in python that uses simple regex and urllib library from python to crawl the web and then find wordpress in it .",
			"Messanger was an app build on python and used twilio API to make messages to Any phone number We want which the reciever recieves as a Normal messagr on hs phone",
			"Crawler is a App used to crawl through a website and extract all the link from the website. This technoloy is used by Google which is 100 times better then mine. My crawler is made in python which use regex to find the link in website crawling through it.",
			"Physics Engine : As the name suggest is putting physics into objects. I Tried to simulate the physics within various objects .I created a firework example where the firework is accelerated with different velocities from ground and when they react there max height the particle system explode. This is still an ongoing project as there are numerous possibilities here. I tried to put life to matter in this :D",
			"Quite famous game Flapy Bird : Made a graphic Game like flappy Bird Using pure javascript and Horse :) . Not that much of a graphic but playable and enjoyable. My Hourse tries to excalate from bars.",
			"Another Famous game snake game Was copied and canvased :P. Not that graphical of a snake , this game simulates a snake his chasing food story Quite Similarly",
			"Maze Generating App made in Javascript was an Awesome Learning app where The app creates a Maze That is solvable and each time a new maze .",
			"This website including many other websites for startups etc. are developed by me. I am a full stack web developer and can Creat a full functional website from scratch using php/mysql,react/ajax,html5/css3, Javascript.",
			"An Geolocation Tracking App that tracks exact location of User and other users near him/her. ",
			"While Working on the Photoshop ,I encountered many complex tasks whose algorithms where to be manually wriiten to get the desired effect. Keeping this in mind i decided to create a Library in js to carry out these tasks but using a simple Image Object the library provides. Effects like grayscale,pencil effect ,blur etc where manually coded by me in this. ",
			"To visually analyze the different nature of random number in nature",
			"Being addicted to watcing youtube , i wanted an extension that can take control of my browsing activity and 'learn' my actions and predict if the site is good to be spent time or not and limit me using the site",
			"Just like any advance Wesbite may contain , a quiz app with real time compiler to compile your code, submit your answer and get rated among players playing the game",
			"I am still working on these but till time i have coded algrithm for regression-> linear Regression, classification-> k Nearest neighbour and working on svm's and Artificial Intelligence"],
			
			imgurl:["https://github.com/Anonyme1396/photoshop",
					"https://github.com/Anonyme1396/shell",
					"https://github.com/Anonyme1396/mycreative/tree/master/python/wordpress%20scan",
					"https://github.com/Anonyme1396/mycreative/tree/master/python/messanger",
					"https://github.com/Anonyme1396/mycreative/blob/master/python/crawler/crawler_final.py",
					"https://github.com/Anonyme1396/mycreative/tree/master/js/physics",
					"https://github.com/Anonyme1396/mycreative/tree/master/js/flappy bird",
					"https://github.com/Anonyme1396/mycreative/tree/master/js/snake%20game",
					"https://github.com/Anonyme1396/mycreative/blob/master/js/maze/maze_final.html",
					"",
					"",
					"https://github.com/Anonyme1396/mycreative/tree/master/image%20processing%20library",
					"https://github.com/Anonyme1396/mycreative/tree/master/random%20numbers",
					"https://github.com/Anonyme1396/extensions",
					"https://github.com/Anonyme1396/quiz",
					"https://github.com/Anonyme1396/mycreative/blob/master/js/linear_reg.html"],

			imageurl:["img/photoshop.png","img/shell.png","img/scanner.png","img/mess.png","img/crawler.png","img/physics.png","img/flappy.png","img/snake.png","img/maze.png","./img/website.png","./img/nav.png","./img/lib1.png","./img/random.png","./img/app.png","./img/quiz.png","./img/linear.png"]
		}
	}

	xyz(){

			let x=[];
			for(let i=0;i<this.state.title.length;i++){
				x[i]=<Title key={i} title={this.state.title[i]} data={this.state.data[i]} imgurl={this.state.imgurl[i]} imageurl={this.state.imageurl[i]} />
			}
			return x;
		}
	
	close(){
		document.getElementById('id01').style.display='none';
	}

	addNew(e){
		document.getElementById('id01').style.display='block';
	}
	
	login(e){
		const user=document.getElementById('uname').value;
		const paswd=document.getElementById('pwd').value;
		var xhr=new XMLHttpRequest();
		xhr.open("GET","req1.php?un="+user+"&pwd="+paswd,true);
		xhr.send(null);
		xhr.onload=function(){
			if(xhr.responseText=="found"){
				alert("functionility will be made available soon");
			}
			else{
				alert("no");
			}
		}
		

	}
	render(){


		
		return(
			<div>
				<h2>Some Awesome Work By Me : </h2>
				{this.xyz()}
				<br /><br /><br /><br />
				<div className="w3-panel">
					<h3 className="w3-left-align">	
						Apart from these I have created some CTF's(Captutre the flag) challenges based on web challenges,Binary exploitation etc. 
						<br />
						Also alongside working on a startup named Voicebook (all alone code exceeds 350000 lines of code).
					</h3>
				</div>
				<button onClick={this.addNew} className="w3-button w3-blue">ADD NEW</button>
				
				<div id="id01" className="w3-modal w3-center">
					<div className="w3-model-content w3-animate-top w3-card-8 w3-teal">
						<span onClick={this.close} class="w3-closebtn w3-red">&times;</span>
						<h1 className="w3-container">Login please</h1>
						<input type="text" id="uname" /><br />
						<input type="password" id="pwd" className="w3-text-red" /><br />
						<button className="w3-button" onClick={this.login.bind(this)}>LOGIN</button>
					</div>
				</div>

			</div>
			);
	}

}

