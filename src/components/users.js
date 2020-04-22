 import React, { Component } from 'react'
 import User from './user'
 
class Users extends Component {
     render() {
         const {users} = this.props; 
         
         return (
             <div>

                {
                users.map(user => {
                    return (
                        <User
                            id = {user.id}
                            name = {user.name}
                            department = {user.department}
                            salary = {user.salary}

                        />
                    )
                })
                }            
                 
             </div>
         )
     }
 }
 
 export default Users