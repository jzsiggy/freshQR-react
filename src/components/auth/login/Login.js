import React , { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import API from '../../../assets/API';

import {
    Container,
    Message, 
    Header,
    Input,
    InputGroup,
    Label,
    Submit,
    Wrapper
} from '../styles';

class Login extends Component {
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
        
        API.post('auth/login', body)
        .then(repsponse => {
            this.props.history.push('/dashboard')
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
                    <Header>Log in</Header>
                    <InputGroup>
                        <Label htmlFor='email'>Email:</Label>
                        <Input name='email' value={this.state.email} onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor='password'>Password:</Label>
                        <Input name='password' type='password' value={this.state.password} onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        <Submit onClick={() => this.handleSubmit()}>Log In!</Submit>
                    </InputGroup>
                    {
                        this.state.error &&
                        <>
                            <br/>
                            <Message>{this.state.error}</Message>
                        </>
                    }
                <Link to='/signup'>Sign Up</Link>
                </Wrapper>
            </Container>
        )
    };
};

export default withRouter(Login);