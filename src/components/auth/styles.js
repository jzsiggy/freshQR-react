import styled from 'styled-components';

import { green } from '../../assets/theme';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
    max-width: 350px;

    height: 50%;
    min-height: 300px;
    max-height: 600px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;

    font-size: 2rem;
    font-weight: bold;
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    height: 110px;
    width: 100%;
`

const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 40px;
    width: 50%;
    font-size: 1.2rem;
`

const Input = styled.input`
    height: 40px;
    width: 100%;

    border: 1px solid ${green};
    border-radius: 10px;

    outline: 0;
    font-family: inherit;
    color: inherit;
    font-size: 18px;
`

const Submit = styled.div`
    align-self: center;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 130px;
    height: 40px;

    background-color: ${green};
    color: white;
    border-radius: 9px;
    font-size: 17px;

    transition: 0.2s ease all;
    &:hover {
        transform: scale(1.03);
    }
`

const Success = styled.div`

    align-self: center;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 150px;
    height: 50px;

    background-color: ${green};
    color: white;
    border-radius: 9px;
    font-size: 25px;
`

const Message = styled.span`
    text-align: center;
`


export {
    Container,
    Message, 
    Header,
    Input,
    InputGroup,
    Label,
    Submit,
    Success,
    Wrapper
}