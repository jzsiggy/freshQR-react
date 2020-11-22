import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { green } from '../../../assets/theme';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 120px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
    width: 500px;
    max-width: 90%;

    height: 50px;
`

const NewCodeBtn = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    width: 130px;
    height: 30px;

    background-color: ${green};
    color: white;
    border-radius: 9px;
    font-size: 15px;
    text-decoration: none;

    transition: 0.2s ease all;
    &:hover {
        transform: scale(1.03);
    }
`

const Text = styled.span`
    width: 130px;
    text-align: center;
    font-size: 18px;
`

export {
    Container,
    Wrapper,
    NewCodeBtn,
    Text
}