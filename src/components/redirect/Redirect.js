import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import API from '../../assets/API';

class Redirect extends Component {
    state = {
        error: false
    }
    
    componentDidMount = () => {
        const { alias } = this.props.match.params;
        API.get(`content/${alias}`)
        .then(response => {
            window.location.replace(response.data.content)
        })
        .catch(err => {
            this.setState({
                error: true
            });
        });
    };

    render() {
        return(
            !this.state.error ?
            <>Loading</>
            :
            <>Invalid URL</>
        )
    }
}

export default withRouter(Redirect);