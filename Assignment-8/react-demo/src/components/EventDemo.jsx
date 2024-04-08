import { useState  } from "react";

function EventDemo({ name }){
    // let i = 0;
    // const v = useState();
    // const [i, myFunction] = v;
    // const [ i, myFunction ] = useState(0);
    const [ i, setI ] = useState(0);
    const [ show, setShow ] = useState(true)
    // console.log(v);
    function clickFunction(){
        // i = i+1;
        // let newI = i+1;
        // myFunction(newI)
        // setI(newI)
        setI(i+1)
        // console.log("Button is clicked "+newI+" times");
        console.log("Button is clicked "+i+" times");
    }

    function greet(name){
        console.log("Hello "+name);
    }

    function callGreet(){
        greet("Jhon")
    }
    
    function handleToggle(){
        setShow(!show)
    }

    console.log(name+" Component Rendered");

    return (
        <>
        
            {/* <h1>Button is clicked {i} times</h1> */}
            {
                // show ? (
                // <>
                // <h1>Button is clicked {i} times</h1> 
                // <h2>Some Text</h2>
                // </>
                // ) : (
                //     <h1>Hello</h1> 
                // )
            }

            {
                // show ? <h1>Button is clicked {i} times</h1> : null
                show && <h1>Button is clicked {i} times</h1> 
            }
            <button onClick={clickFunction}>Click</button>
            <button onClick={handleToggle}>Toggle</button>
            {/* <button onClick={callGreet}>Greet</button>
            <button onClick={()=>greet("Sam")}>Greet 2</button> */}
        </>
    )
}

export default EventDemo