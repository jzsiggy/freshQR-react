import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { green } from '../../assets/theme';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorMessage = styled.div`
    width: 90%;
    text-align: center;
`

const Logout = styled(Link)`
    position: fixed;
    bottom: 30px;
    right: 30px;
    height: 60px;
    width: 60px;

    background-color: ${green};
    border-radius: 50%;

    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    box-shadow: 0 0 50px #ccc;
`

export {
    Wrapper,
    ErrorMessage,
    Logout
}