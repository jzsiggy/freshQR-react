import React , { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import API from '../../../assets/API';

import {
    Brand,
    Container,
    Message,
    Header,
    Input,
    InputGroup,
    Kicker,
    Label,
    Submit,
    Switch,
    Wrapper
} from '../styles';
import { Logo } from '../../common';

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
                <Brand><Logo size={26} mark={32}/></Brand>
                <Wrapper>
                    <Kicker>{'// access your codes'}</Kicker>
                    <Header>Log in<span className='bar'/></Header>
                    <InputGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input name='email' value={this.state.email} placeholder='you@domain.com' onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input name='password' type='password' value={this.state.password} placeholder='••••••••' onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <Submit onClick={() => this.handleSubmit()}>Log in &rarr;</Submit>
                    {
                        this.state.error &&
                        <Message>{this.state.error}</Message>
                    }
                    <Switch>
                        <span>No account yet?</span>
                        <Link to='/signup'>Sign up</Link>
                    </Switch>
                </Wrapper>
            </Container>
        )
    };
};

export default withRouter(Login);