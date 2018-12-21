import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


class Menu extends React.Component {

    render() {
        return (
            <div className="title-container">
                <div className="title"> Recrutation Task</div>
                <div >
                    <div className="link-container">
                        <Link
                            className="link"
                            to='/users'
                        >

                            <div>Users</div>
                        </Link>
                    </div>
                    <div className="link-container">
                        <Link
                            className="link"
                            to='/about'
                        >
                            <div>About</div>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }

}

export default Menu