import React from 'react'
import PropTypes from 'prop-types'


function Navbar(props) {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

Navbar.defaultProps = {
    name : 'Default Title'
}

Navbar.propTypes = {
    name : PropTypes.string.isRequired
}

export default Navbar