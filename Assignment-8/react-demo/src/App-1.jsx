import "./style.css"

function App(){
  const name = "Jhon"
  const age = 20
  const header = <h1>Another H1 tag</h1>
  console.log(name);
  console.log(header);
  const customcss = {
    color: "yellow",
    backgroundColor: "red"
  }
  const classTwo = {
    textDecoration: "underline",
    fontSize: "50px"
  }
  return (
    // Fragment
    <> 
      <h1 style={customcss}>Hello React!</h1>
      {/* <br></br> */}
      <br />
      <h2>React is a Library.</h2>
      <p className="myclass" style={classTwo}>The name is {name} and age is {age}</p>
      <p>{1+1}</p>
      {header}
      <p style={{color: 'blue', fontSize: '30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia vel error ducimus obcaecati provident tenetur recusandae minima ullam qui?</p>
    </>
  )
}

export default App