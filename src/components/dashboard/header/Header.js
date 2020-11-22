import React , { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import {
    Container,
    Wrapper,
    NewCodeBtn,
    Text
} from './styles';

class Header extends Component {
    render() {
        return(
            <Container>
                <Wrapper>
                    <Text>Your QR Codes</Text>
                    <NewCodeBtn to='/new'> <FaPlus/> </NewCodeBtn>
                </Wrapper>
            </Container>
        );
    };
};

export default Header;