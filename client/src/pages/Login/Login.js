import React from "react";
import "./style.css";
import { Container } from "../../components/Grid";



function Login() {
    return (
        <div id="loginContainer">
            <Container>
                <div>
                    <div>
                    </div>
                    <div id="login-center">
                        <form class="form-signin">
                                <h1 class="mb-3 font-weight-normal" id="pleaseLogIn">Please Log In</h1>
                                <label for="inputEmail" class="sr-only">Email address</label>
                                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""/>
                                    <label for="inputPassword" class="sr-only">Password</label>
                                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
                                        <div class="checkbox mb-3">
                                            <label>
                                                <input type="checkbox" value="remember-me" /> Remember me
                                            </label>
                                        </div>
                                        <button id="signInButton" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                        <p class="mt-5 mb-3 text-muted"></p>
                         </form>         
                    </div>
                </div>
                <div>
                    <h6><a className="link" href="/signup">Not registered yet? Click here to sign up!</a></h6>
                </div>
            </Container>
        </div>
    )
}

export default Login;