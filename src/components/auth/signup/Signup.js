import React , { Component } from 'react';
import API from '../../../assets/API';

import { IoIosCheckmarkCircleOutline } from "react-icons/io"

import {
    Container,
    Message, 
    Header,
    Input,
    InputGroup,
    Label,
    Submit,
    Success,
    Wrapper
} from '../styles';

import { Link } from 'react-router-dom';

class Signup extends Component {
    state = {
        email: '',
        password: '',
        error: null,
        success: null
    }

    handleSubmit = () => {
        let body = {
            email: this.state.email,
            password: this.state.password
        };

        const hasEmptyFields = Object.values(body).some(field => !field)
        if (hasEmptyFields) {
            return this.setState({
                error: 'You must fill out all fields properly'
            })
        }
        
        API.post('auth/signup', body)
        .then(repsponse => {
            this.setState({
                success: true,
                error: false
            })
        })
        .catch(err => {
            this.setState({
                error: err.response ? err.response.data.message : 'We had a problem processing your request. Please try again later.'
            })
        })
    }

    handleFormInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    };
    
    render() {
        return(
            <Container>
                <Wrapper>
                    <Header>Register</Header>
                    <InputGroup>
                        <Label htmlFor='email'>Email:</Label>
                        <Input name='email' value={this.state.email} onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor='password'>Password:</Label>
                        <Input name='password' type='password' value={this.state.password} onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        {
                            this.state.success ?
                            <>
                                <Success> <IoIosCheckmarkCircleOutline/> </Success>
                                <Message>Back to <Link to='/login'>Login</Link></Message>
                            </>
                            :
                            <Submit onClick={() => this.handleSubmit()}>Sign Up!</Submit>
                        }
                    </InputGroup>
                    {
                        this.state.error &&
                        <>
                            <br/>
                            <Message>{this.state.error}</Message>
                        </>
                    }
                    <Link to='/login'>Log In</Link>
                </Wrapper>
            </Container>
        )
    };
};

export default Signup;