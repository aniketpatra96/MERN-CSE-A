import React from 'react'
import UserCard from './UserCard'

const Users = () => {
    const users = [
        {"name": "Jhon", "email": "jhon@gmail.com", "phone": 99999999},
        {"name": "jane", "email": "jane@gmail.com", "phone": 999988888},
        {"name": "smith", "email": "smith@gmail.com", "phone": 7777777777},
        {"name": "sara", "email": "sara@gmail.com", "phone": 666666666},
      ]
  return (
    <div>
      {
        users.map( (user, index) => <UserCard key={index} user={user} />)
      }
    </div>
  )
}

export default Users
