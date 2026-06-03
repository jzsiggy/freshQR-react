import React , { Component } from 'react';
import API from '../../../assets/API';

import { IoIosCheckmarkCircleOutline } from "react-icons/io"

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
    Success,
    Switch,
    Wrapper
} from '../styles';
import { Logo } from '../../common';

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
                <Brand><Logo size={26} mark={32}/></Brand>
                <Wrapper>
                    <Kicker>{'// keep your codes fresh'}</Kicker>
                    <Header>Register<span className='bar'/></Header>
                    <InputGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input name='email' value={this.state.email} placeholder='you@domain.com' onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input name='password' type='password' value={this.state.password} placeholder='••••••••' onChange={(e) => this.handleFormInput(e)}/>
                    </InputGroup>
                    {
                        this.state.success ?
                        <Success> <IoIosCheckmarkCircleOutline/> </Success>
                        :
                        <Submit onClick={() => this.handleSubmit()}>Create account &rarr;</Submit>
                    }
                    {
                        this.state.error &&
                        <Message>{this.state.error}</Message>
                    }
                    <Switch>
                        <span>{this.state.success ? 'All set.' : 'Already registered?'}</span>
                        <Link to='/login'>Log in</Link>
                    </Switch>
                </Wrapper>
            </Container>
        )
    };
};

export default Signup;