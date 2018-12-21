import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


class Menu extends React.Component {

    render() {
        return (
            <div className = "title-container">
            Recrutation Task
                    <div className= "link-container">
                        <Link
                            to='/users'
                        >
                            <div>Users</div>
                        </Link>
                        <Link
                            to='/about'
                        >
                            <div>About</div>
                        </Link>
                    </div>
            </div>
        )
    }

}

export default Menu