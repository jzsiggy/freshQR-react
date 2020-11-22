import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: relative;

    height: 380px;
    width: 275px;
    max-width: 85%;

    margin: 20px;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
`

const Title = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
`

const Image = styled.div`
    height: 150px;
    width: 150px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
`

const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    height: 60px;
`

const Text = styled.span`

`

const Edit = styled(Link)`
    position: absolute;
    top: 20px;
    right: 20px;
    color: inherit;
`

export {
    Edit,
    Image, 
    LinkBox,
    Text,
    Title,
    Wrapper
}