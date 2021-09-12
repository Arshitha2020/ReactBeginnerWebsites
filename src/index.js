import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //importing the App component
import App2 from './App2'; //importing the App2 component



ReactDOM.render(
 React.createElement("h1",{style: {color:"#52d6f4",textAlign:"center"}},"Welcome Everyone!"),
  document.getElementById('root')
);

ReactDOM.render(
  React.createElement("h2",{style:{color:"#408697",textAlign:"center"}},"Things to learn in JS"),
   document.getElementById('root2')
 ); 
  
 ReactDOM.render(
  <ul>
    <li>React Js</li>
    <li>Node Js</li>
    <li>Babel Js</li>
    <li>Mongo Db</li>
    <li>Express Js</li>

  </ul>,
   document.getElementById('root3')
 ); //This is JSX, (JS as Xml), this gets converted to the below list code by babeljs, Babel js converts any new js syntax like jsx and compiles it
 
 ReactDOM.render(
 <App/>,
   document.getElementById('root6') //Calling the App component here
 ); 

ReactDOM.render(
  <App2/>,
  document.getElementById('root8') //Calling App 2 component
);

 ReactDOM.render(
  React.createElement("h2",{style:{color:"#408697",textAlign:"center"}},"You can also learn MERN Stack :"),
   document.getElementById('root4')
 ); 

 ReactDOM.render( /*#__PURE__*/
  React.createElement("ul", null, /*#__PURE__*/
  React.createElement("li", null, "MongoDb"), /*#__PURE__*/
  React.createElement("li", null, "Express"), /*#__PURE__*/
  React.createElement("li", null, "React"), /*#__PURE__*/
  React.createElement("li", null, "Node")), 
  document.getElementById('root5'));
   
 
