import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: "", password: ""});
    } catch (e) {
      console.error(e)
    }
  };

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
            type="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;