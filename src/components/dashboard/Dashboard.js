import React , { Component } from 'react';
import { Wrapper, ErrorMessage } from './styles';
import Header from './header/Header';
import List from './list/List';

import API from '../../assets/API';

class Dashboard extends Component {
    state = {
        codes : [],
        error : false
    }

    componentDidMount() {
        API.get('list')
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
            </Wrapper>
        );
    };
};

export default Dashboard;