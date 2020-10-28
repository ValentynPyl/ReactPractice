import React, {Component} from 'react';
import classes from "./Auth.css";
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {

    loginHandler = () => {
        
    }

    registerHandler = () => {

    }

    submitHandler = event => {
        event.preventDefault();
    }

    render () {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Authorization</h1>


                    <form className={classes.AuthForm} onSubmit = {this.submitHandler}>
                        <input type="text"/>
                        <input type="text"/>
                        <Button 
                        type="success" 
                        onClick={this.loginHandler}>
                            Log in
                        </Button>
                        <Button 
                        type="primary" 
                        onClick={this.registerHandler}>
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}