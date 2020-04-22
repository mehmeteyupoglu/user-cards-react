import React from 'react';
import './App.css';
import Navbar from './components/navbar'; 
import Users from './components/users'; 


class App extends React.Component {

  state = {
    users : [
      {
        id : 1, 
        name : 'Mustafa Murat Coskun', 
        department : 'Marketing', 
        salary : '6000 USD'
      
      }, 
      {
        id : 2, 
        name : 'Mehmet Eyupoglu', 
        department : 'IT', 
        salary : '7000 USD'
      }, 
      {
        id : 3,
        name : 'Sena Eyupoglu', 
        department: 'IT', 
        salary : '10000 USD'
      }, 
      {
        id : 4, 
        name: 'Seyda Cetinkaya', 
        department: 'Accounting', 
        salary : '10000 USD'
      }

    ]
  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <hr/>
        <Users users = {this.state.users}/>
      </div>
    ); 
  }
}

export default App;
