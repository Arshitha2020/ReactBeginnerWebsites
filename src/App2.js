function Footer(props){
  return(
    <footer>
      <p>copyright Arshitha Ashok {props.year}</p>
    </footer>
  )
}

const  courses = [
    "React JS:beginner",
    "Node JS: beginner to advance",
    "Complete Web Development"
  ]; //creating an array of courses

const courseObjects =  courses.map((course, i) => ({id: i,title: course})); //mapping course to its object and id
console.log(courseObjects);

function Main2(props){
    return(
      <section>
        <h2 style={{textAlign:"center",color:"#408697"}}>The courses we offer!</h2>
        <ul>
          {props.courses.map((course) => (
          <li key={course.id}>{course.title}</li>))}
          {/* maping each course to display it in tha component taking it from props */}
        </ul>
      </section>
    );
  }
  courses.map((course) => console.log(course));

function App2(){
    return(
      <div className="App2">
        <header className="App-header2">
          <Main2 courses={courseObjects}/>
  
  
        </header>

        <footer style={{textAlign:"center"}}>
        <Footer year={new Date().getFullYear()}/>
        </footer>
  
  
      </div>
    );
  }

  export default App2;