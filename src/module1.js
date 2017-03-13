import  React  from "react";
import Re from "react-dom";
import { Route,Router,hashHistory ,IndexRoute} from "react-router";


import  Main from "./components/Main";
import  Home from "./components/home/Home";
import  About from "./components/about/About";
import  Skills from "./components/skills/Skills";
import  Work from "./components/work/Work";
import  Achievement from "./components/achievement/Achievement";


class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={Home} />
					<Route path="home" component={Home}/>
					<Route path="about" component={About}/>
					<Route path="skills" component={Skills}/>
					<Route path="work" component={Work}/>
					<Route path="achievement" component={Achievement}/>

					
				</Route>
			</Router>
			);
		};
}
const app=document.getElementById('app');
Re.render(<App />, app );