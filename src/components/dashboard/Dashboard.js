import React , { Component } from 'react';
import { Wrapper, ErrorMessage, Logout } from './styles';
import Header from './header/Header';
import List from './list/List';

import { HiLogout } from 'react-icons/hi'

import API from '../../assets/API';

class Dashboard extends Component {
    state = {
        codes : [],
        error : false
    }

    logout = () => {
        API.post('auth/logout')
    };

    componentDidMount() {
        API.get('qr/list')
        .then(response => {
            const { data } = response;
            this.setState({
                codes: data
            })
        })
        .catch(err => {
            this.setState({
                error : true
            })
        })
    }
    
    render() {
        return (
            <Wrapper>
                <Header/>
                {
                this.state.error 
                ? 
                <ErrorMessage>We encountered an error trying to connect to the server</ErrorMessage> 
                :
                <List codes={this.state.codes}/>
                }
                <Logout to='/login' onClick={() => this.logout()}><HiLogout/></Logout>
            </Wrapper>
        );
    };
};

export default Dashboard;