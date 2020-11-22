import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentEditable from "react-contenteditable";

import { green } from '../../assets/theme';

const Back = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-conntent: center;
    width: 50px;
    color: inherit;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 80%;
    max-width: 350px;
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 100px;
    width: 95%;

    font-size: 45px;
    font-weight: bold;
`

const Name = styled(ContentEditable)`
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100px;

    font-size: 30px;
    font-weight: bold;
    
    text-decoration: underline;
    text-decoration-color: ${green};

    outline: 0;
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
    font-size: 0.8rem;
`

const Input = styled.input`
    height: 40px;
    width: 100%;

    border: 2px solid ${green};
    border-radius: 10px;

    outline: 0;
    font-family: inherit;
    color: inherit;
    font-size: 18px;
`

const Comment = styled.span`
    width: 100%;
    font-size: 0.6rem;
`

const Submit = styled.div`
    align-self: center;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 130px;
    height: 70px;

    background-color: ${green};
    color: white;
    border-radius: 9px;
    font-size: 25px;

    transition: 0.2s ease all;
    &:hover {
        transform: scale(1.03);
    }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 200px;
    width: 100%;
`

const Image = styled.div`
    width: 150px;
    height: 150px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
`

const Success = styled(Link)`

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

const ErrorMessage = styled.span`
    text-align: center;
`


export {
    Back,
    Container,
    Comment,
    ErrorMessage, 
    Header,
    Image, 
    ImageContainer,
    Input,
    InputGroup,
    Label,
    Name, 
    Success,
    Submit,
    Wrapper
}