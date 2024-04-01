import "./style.css"
import UserCard  from "./UserCard"

function App(){
  const x = 10;
  const users = [
    {"name": "Jhon", "email": "jhon@gmail.com", "phone": 99999999},
    {"name": "jane", "email": "jane@gmail.com", "phone": 999988888},
    {"name": "smith", "email": "smith@gmail.com", "phone": 7777777777},
    {"name": "sara", "email": "sara@gmail.com", "phone": 666666666},
  ]
  return (
    <> 
      {/* <div className="user-card">
        <h1>Jhon Doe</h1>
        <p>jhon@gmail.com</p>
      </div>
      <div className="user-card">
        <h1>Jane Doe</h1>
        <p>jane@gmail.com</p>
      </div>
      <div className="user-card">
        <h1>Sara Smith</h1>
        <p>sara@gmail.com</p>
      </div> */}

      {/* {UserCard("Jhon Smith", "jhon@gmail.com")}
      {UserCard("Jane Smith", "jane@gmail.com")} */}

      {/* <UserCard></UserCard>     

      <UserCard /> */}

      {/* <UserCard name="Brad" email="brad@gmail.com" />
      <UserCard name="Smith" email="smith@gmail.com" />
      <UserCard name="abc" email="abc@gmail.com" /> */}
      {
        // users.forEach( user => console.log(user.name))
        // users.forEach( user => <h1>{user.name}</h1>)
        // users.map( user => (
        //   <div>
        //     <h1>{user.name}</h1>
        //     <p>{user.email}</p>
        // </div>
        // ))

        // users.map( user => <UserCard name={user.name} email={user.email} />)
        users.map( (user, index) => <UserCard key={index} user={user} />)
      }
    </>
  )
}



export default App