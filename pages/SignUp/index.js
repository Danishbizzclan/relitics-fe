import React, { Component } from 'react'
import UserDetails from '../../Component/UserDetail'
import PersonalDetails from '../../Component/PersonalDetails'
import Confirmation from '../../Component/Confirmation'
import Payment from '../../Component/Payment'
import Success from '../../Component/Success'
import Navbar from '../../Component/Navbar'

import PersonalInfo from '../../Component/PersonalInfo'


export default class Signup extends Component {

  state = {
    step: 1,
    profilePic: "",
    email: '',
    state: '',
    username: '',
    password: '',
    price: "",
    pkgId: "",
    firstName: '',
    familyName: '',
    DOB: '',
    country: '',

  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    if (input == "profilePic") {
      console.log(e.target.files[0])
      this.setState({[input] : URL.createObjectURL(e.target.files[0])})
    }
    else
      this.setState({ [input]: e.target.value });
  }

  handleDirectChange = (name, value) => {
    this.setState({ [name]: value });
  }

  render() {
    const { step, profilePic, email, cardName, cvv, price, pkgId, year, username, password, firstName, cardNumber, familyName, state, country } = this.state;
    const values = { step, profilePic, email, cvv, price, pkgId, year, cardName, username, familyName, cardNumber, state, password, firstName, country }

    console.log({ values })
    switch (values.step) {
      case 1:
        return (
          <>

            <UserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        )
      case 2:
        return (
          <>

            <PersonalDetails
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleDirectChange={this.handleDirectChange}
              values={values}
            />
          </>

        )
      case 3:

        return (
          <>

            <Payment
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>

        )
      // case 4: 
      //     return (
      //       <>

      //       <Confirmation 
      //         prevStep={ this.prevStep }
      //         nextStep={ this.nextStep }
      //         values={ values }
      //       />
      //       </>
      //     )
      case 5:
        return (
          <Success />
        )
      default:
      // do nothing
    }
  }
}