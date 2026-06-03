import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import ContentEditable from "react-contenteditable";

const rise = keyframes`
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    padding: 0 20px 60px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 440px;
    height: 84px;
`;

const navBtn = `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    color: var(--ink);
    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 var(--ink);
    font-size: 1.3rem;
    cursor: pointer;

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--ink);
    }
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--ink);
    }
`;

const Back = styled(Link)`
    ${navBtn}
    &:hover { background: var(--lime); }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
    max-width: 440px;
    padding: 28px 28px 30px;

    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow-lg);
    animation: ${rise} 0.5s ease both;
`;

const Name = styled(ContentEditable)`
    font-family: var(--display);
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.05;
    letter-spacing: -0.04em;
    padding-bottom: 6px;
    margin-bottom: 18px;

    box-shadow: inset 0 -10px 0 var(--lime);
    display: inline-block;
    width: fit-content;
    max-width: 100%;
    outline: 0;

    &:focus { box-shadow: inset 0 -10px 0 var(--lime-deep); }
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    margin-bottom: 18px;
`;

const Label = styled.label`
    font-family: var(--mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1.4;
    text-transform: uppercase;
    color: var(--ink-soft);
`;

const Input = styled.input`
    height: 48px;
    width: 100%;
    padding: 0 14px;

    background: var(--paper);
    border: 2px solid var(--ink);
    border-radius: 0;

    outline: 0;
    font-family: var(--mono);
    color: var(--ink);
    font-size: 1rem;

    transition: box-shadow 0.12s ease, transform 0.12s ease;
    &::placeholder { color: rgba(23, 22, 15, 0.35); }
    &:focus {
        box-shadow: var(--shadow);
        transform: translate(-2px, -2px);
    }
`;

const Comment = styled.span`
    margin-top: 4px;
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--ink);

    &::before {
        content: '↳ ';
        color: var(--lime-deep);
        -webkit-text-stroke: 0.5px var(--ink);
    }
`;

const Select = styled.select`
    height: 48px;
    width: 100%;
    padding: 0 14px;

    background: var(--paper);
    border: 2px solid var(--ink);
    border-radius: 0;

    outline: 0;
    cursor: pointer;
    font-family: var(--mono);
    color: var(--ink);
    font-size: 1rem;

    /* custom caret */
    -webkit-appearance: none;
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, var(--ink) 50%),
                      linear-gradient(135deg, var(--ink) 50%, transparent 50%);
    background-position: calc(100% - 18px) 21px, calc(100% - 12px) 21px;
    background-size: 6px 6px, 6px 6px;
    background-repeat: no-repeat;

    transition: box-shadow 0.12s ease, transform 0.12s ease;
    &:focus {
        box-shadow: var(--shadow);
        transform: translate(-2px, -2px);
    }
`;

const Submit = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    height: 58px;
    margin-top: 6px;

    background: var(--lime);
    color: var(--ink);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    cursor: pointer;
    font-size: 1.4rem;

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-lg);
        background: var(--lime-deep);
    }
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--ink);
    }
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0 16px;
`;

const Image = styled.div`
    width: 180px;
    height: 180px;
    padding: 14px;
    background-color: #ffffff;
    background-image: url(${props => props.img});
    background-size: 152px 152px;
    background-repeat: no-repeat;
    background-position: center;
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
`;

const Success = styled(Link)`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    height: 58px;
    margin-top: 6px;

    background: var(--ink);
    color: var(--lime);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    font-size: 1.7rem;

    transition: transform 0.12s ease, box-shadow 0.12s ease;
    &:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-lg); }
`;

const ErrorMessage = styled.span`
    margin-top: 12px;
    text-align: center;
    font-family: var(--mono);
    font-size: 0.82rem;
    line-height: 1.4;
    color: var(--coral);

    &::before { content: '! '; font-weight: 700; }
`;

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
    Select,
    Success,
    Submit,
    Wrapper
};
