import styled from 'styled-components';
import { green } from '../../../assets/theme';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    width: 90%;
`

const Input = styled.input`
    height: 40px;
    width: 500px;
    max-width: 90%;

    border: 2px solid ${green};
    border-radius: 10px;

    outline: 0;
    font-family: inherit;
    color: inherit;
    font-size: 18px;
`

export {
    Wrapper,
    Input
}