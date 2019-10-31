import React from 'react'
import {Link} from 'gatsby'

const menuItem = props => {
    console.log(props)
    return (
    <li>
        <Link to={props.link}>
            {props.text}
        </Link>
    </li>
)}

export default menuItem
