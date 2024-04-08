import { useState, useEffect  } from "react"
import axios from "axios"

function ApiDemo(){
    const [ users, setUsers] = useState(null)
    const [count, setCount] = useState(0)

    async function getUsers(){
        console.log("calling api");
        let url = "https://jsonplaceholder.typicode.com/users/"
        let res = await axios.get(url)
        let users = res.data
        console.log(users)
        setUsers(users)
    }

    useEffect(()=>{
        getUsers()
    }, [])
    // useEffect(()=>{
    //     getUsers()
    // }, [count])

    function updateCounter() {
        setCount(count+1)
    }

    console.log("Component Rendering...");
    return (
        <div>
            {
                users && users.map( user => <h1 key={user.id}>{user.name}</h1>)
            }
            <button onClick={updateCounter}>Click</button>
        </div>
    )

}

export default ApiDemo