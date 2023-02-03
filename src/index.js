import React ,{Component} from 'react';
import ReactDOM ,{createRoot}from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {Header}from './header/header.js';
import { Home }from './home/home.js';
 
import {Footer} from './footer/footer.js';


class Main extends Component{

  constructor(){
    super();
    this.state={
      name:"DiNESH",
      age:21,
      profile:"FrontEndDeveloper"
    }
    
  }

  change(age){
    console.log(age)
    
  }

  changeState(){
    
    this.setState({age:22,profile:"developer"});
  }

  hello(age){
    console.log(age)
  }


  render(){
    return(
      <div>
        {this.state.age}
        <button onClick={()=>this.changeState()}>chane</button>
        <Header name={this.state.profile} />
        <Home change={this.change}/>
        <Footer/>
      </div>
    );
  }
}

const root=createRoot(document.getElementById("root"));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
