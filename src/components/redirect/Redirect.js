import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import API from '../../assets/API';

import {
    Animation,
    Text,
    Container,
    Header,
    IconGroup,
    Icon,
    Loading,
    Underline,
} from './styles';

class Redirect extends Component {
    state = {
        error: false
    }
    
    componentDidMount = () => {
        const { alias } = this.props.match.params;
        API.get(`qr/content/${alias}`)
        .then(response => {
            setTimeout(() => window.location.replace(response.data.content), 1000);
        })
        .catch(err => {
            this.setState({
                error: true
            });
        });
    };

    render() {
        return(
            <Container>
                <Header>
                    <IconGroup>
                        <Icon/>
                        <span>FreshQR</span>
                    </IconGroup>
                </Header>
                {
                    !this.state.error ?
                    <Loading/>
                    :
                    <Text>
                        <Animation/>
                        <span>
                            This <Underline>QR code</Underline> is not <Underline>correctly configured.</Underline> 
                            &nbsp;If you are the owner, please check your <Underline>code configurations</Underline>.
                        </span>
                    </Text>
                }
            </Container>
        )
    }
}

export default withRouter(Redirect);