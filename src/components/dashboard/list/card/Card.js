import React , { Component } from 'react';
import { BsCaretDownFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import {
    Edit,
    Image, 
    LinkBox,
    Text,
    Title,
    Wrapper
} from './styles';

class Card extends Component {
    render() {
        return (
            <Wrapper>
                <Edit to={ `edit/${this.props.alias}` }> <FiEdit/> </Edit>
                <Title>{this.props.name}</Title>
                <Image img={this.props.image}/>
                <LinkBox>
                    <Text>{this.props.alias}</Text>
                    <BsCaretDownFill/>
                    <Text>{this.props.content}</Text>
                </LinkBox>
            </Wrapper>
        );
    };
};

export default Card;