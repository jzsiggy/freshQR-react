import React , { Component } from 'react';
import { Wrapper, Input } from './styles';
import Card from './card/Card';

class List extends Component {
    state = {
        filter: '',
    }

    handleSetFilter = (e) => {
        this.setState({
            filter: e.target.value
        });
    };

    render() {
        return (
            <Wrapper>
            <Input name='filter' value={this.state.filter} placeholder='filtro' onChange={(e) => this.handleSetFilter(e)}/>
            {
                this.props.codes
                .filter(code => code.name.toLowerCase().includes(this.state.filter.toLowerCase()))
                .map((code, index) => {
                    return (
                        <Card 
                        key={index} 
                        name={code.name} 
                        alias={code.alias} 
                        image={code.image} 
                        content={code.content} 
                        />
                    )
                })
            }
            </Wrapper>
        );
    };
};

export default List;