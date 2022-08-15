import React, { Component } from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true,
            }
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ?
                    (
                        <button onClick={() => this.handleClick()}>
                            Login
                        </button>
                    ) :
                    (
                        <form>
                            <label for="fname">Username:</label>
                            <input type="text" id="fname" name="fname" placeholder="username"></input>
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="password"></input>
                            <button onClick={() => this.handleClick()}>
                                Submit
                            </button>
                        </form>
                    )
                }

                {/* <NavBarChild handleClick={this.handleClick} isLoggedIn={this.state.isLoggedIn} /> */}

            </div>
        )
    }
}

export default NavBarForm