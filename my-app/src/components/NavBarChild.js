import React from 'react'

function NavBarChild(props) {
    return (
        props.isLoggedIn ?
            <button onClick={props.handleClick}>Login</button>
            : (
                <form>
                    <label for="fname">Username:</label>
                    <input type="text" id="fname" name="fname" placeholder="username"></input>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="password"></input>
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            )
    )
}

export default NavBarChild