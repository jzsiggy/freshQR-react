import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1080px;
    padding: 22px 28px;
    border-bottom: 2px solid var(--ink);
`;

const NewCodeBtn = styled(Link)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 9px;

    padding: 0 18px;
    height: 44px;

    background: var(--lime);
    color: var(--ink);
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 var(--ink);

    font-family: var(--mono);
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    svg { font-size: 0.8rem; }

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--ink);
        background: var(--lime-deep);
    }
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--ink);
    }
`;

const Title = styled.h1`
    width: 100%;
    max-width: 1080px;
    margin: 38px 0 4px;
    padding: 0 28px;

    font-family: var(--display);
    font-weight: 800;
    font-size: clamp(2.6rem, 7vw, 4.4rem);
    line-height: 0.92;
    letter-spacing: -0.05em;

    em {
        font-style: normal;
        color: var(--lime-deep);
        -webkit-text-stroke: 2px var(--ink);
    }
`;

const Subtitle = styled.p`
    width: 100%;
    max-width: 1080px;
    margin: 0 0 14px;
    padding: 0 28px;

    font-family: var(--mono);
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    color: var(--ink-soft);
`;

export {
    Container,
    Bar,
    NewCodeBtn,
    Title,
    Subtitle
};
