import React, {Component} from 'react'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import './sign-up-page.styles.scss'

class SignUpPage extends Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.render() {
            const {displayName, email, password, confirmPassword} = this.state
            return (
                <div className='sign-up'>
                    <h2 className='sign-up-title'>Create an Account</h2>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                        <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required>
                            
                    </FormInput>
                    </form>
                </div>
            )
        }
    }
}