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
    downloadImg =  () => {
        fetch(this.props.image)
        .then(res => res.blob())
        .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = 'QR';
            a.click();
            window.URL.revokeObjectURL(url);
        })
    }

    render() {
        return (
            <Wrapper>
                <Edit to={ `edit/${this.props.alias}` }> <FiEdit/> </Edit>
                <Title>{this.props.name}</Title>
                <Image img={this.props.image} onClick={() => this.downloadImg()}/>
                <LinkBox>
                    <Text>{`freshqr.io/${this.props.alias}`}</Text>
                    <BsCaretDownFill/>
                    <Text>{this.props.content}</Text>
                </LinkBox>
            </Wrapper>
        );
    };
};

export default Card;