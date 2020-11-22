import React , { Component } from 'react';
import { Wrapper } from './styles';
import Card from './card/Card';

class List extends Component {
    render() {
        return (
            <Wrapper>
            {
                this.props.codes.map((code, index) => {
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