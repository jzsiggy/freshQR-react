import React , { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import {
    Container,
    Bar,
    NewCodeBtn,
    Title,
    Subtitle
} from './styles';
import { Logo } from '../../common';

class Header extends Component {
    render() {
        return(
            <Container>
                <Bar>
                    <Logo size={22} mark={28}/>
                    <NewCodeBtn to='/new'> <FaPlus/> New code </NewCodeBtn>
                </Bar>
                <Title>Your <em>codes.</em></Title>
                <Subtitle>{'// edit where they point — the printed code never changes'}</Subtitle>
            </Container>
        );
    };
};

export default Header;
