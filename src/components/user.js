import React, { Component } from 'react'; 
import '../App.css';

class User extends Component {
    static defaultProps = {
         name : 'Bilgi Yok', 
         department: 'Bilgi Yok',
         salary: 'Bilgi Yok',    
    }
    constructor(props) {
        super(props)
        this.state = {
            isVisible : true
        }
    }

    onClickEvent = (event) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }
    
    render() {
        const {name, department, salary} = this.props
        const {isVisible} = this.state

        return (
            <div className= 'col-md-8 mb-4'>
                <div className= 'card'>
                    <div className = 'card-header d-flex justify-between-content'>
                        <h4 className = 'd-inline' onClick = {this.onClickEvent}>{name}</h4>
                        <i className = 'far fa-trash-alt' style = {{cursor: 'pointer'}}></i>
                    </div>
                    {
                        isVisible ? <div className = 'card-body'>
                        <p className= 'card-text'>Maaş : {salary}</p>
                        <p className= 'card-text'>Departman : {department}</p>
        
                    </div> : null
                    }
                    
                </div>
            </div>
        )
    }
}

export default User