import logo from './logo.svg';
import './App.css';

function Main(){
  return(
    <section>
      <img alt="logo2" src="https://miro.medium.com/max/2920/1*J4vy57oZS-TAWRTiQSxqEw.png" height={300} width={600}/>
      <p>Do you want to learn more about it ?</p>
      
    </section>
  );
}


function Prompt(props){
  //  props is an object passed into this
  return(
    <section>
    <b>Click here {props.name}!</b> 
    {/* calling the props here with JSX, for dynamic binding  */}
    </section>
  );
}


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3><code>REACT</code></h3>
        <p>
          The most popular JS framework
        </p>
        <Main/> 
        {/* caling the "Main" and "Prompt" component we created */}
        <Prompt name="to learn"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      
      </header>
     
    </div>
    
  );
}



export default App;

