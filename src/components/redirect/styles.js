import styled from 'styled-components';
import { green } from '../../assets/theme';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    

    height: 100vh;
    width: 100vw;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    jusitfy-content: center;

    position: absolute;
    display: fixed;
    top: 0;
    height: 180px;
    width: 100vw;

    font-weight: bold;
    font-size: 1.5rem;
`

const IconGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 80%;
    max-width: 250px;
`

const Icon = styled.div`
    height: 30px;
    width: 30px;

    background-image: url('/qr-code.svg');
    background-size: contain;
    background-repeat: no-repeat;
`

const Text = styled.span`
    text-align: center;
    width: 400px;
    max-width: 90%;

    font-size: 1.2rem;
`

const Animation = styled.div`
    height: 250px;

    background-image: url('/animate.gif');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

const Loading = styled.div`
    height: 250px;
    width: 250px;

    background-image: url('/animate.gif');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

const Underline = styled.span`
    text-decoration: underline;
    text-decoration-color: ${green};
`

export {
    Animation,
    Container,
    Header,
    IconGroup,
    Icon,
    Loading,
    Text,
    Underline
};