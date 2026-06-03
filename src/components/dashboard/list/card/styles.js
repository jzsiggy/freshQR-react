import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    overflow: hidden;
    cursor: grab;

    transition: transform 0.14s ease, box-shadow 0.14s ease;
    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: var(--shadow-lg);
    }
    &:active { cursor: grabbing; }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 12px 14px;
    border-bottom: 2px solid var(--ink);
`;

const Tag = styled.span`
    font-family: var(--mono);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--ink);

    max-width: 75%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::before {
        content: '/';
        color: var(--lime-deep);
        -webkit-text-stroke: 0.5px var(--ink);
    }
`;

const Edit = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: var(--ink);
    border: 2px solid var(--ink);
    background: var(--paper);
    font-size: 0.85rem;

    transition: background 0.12s ease;
    &:hover { background: var(--lime); }
`;

const Title = styled.span`
    padding: 16px 16px 6px;
    font-family: var(--display);
    font-weight: 800;
    font-size: 1.45rem;
    line-height: 1.05;
    letter-spacing: -0.03em;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Frame = styled.div`
    position: relative;
    align-self: center;
    margin: 10px 16px 16px;

    width: 168px;
    height: 168px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border: 2px solid var(--ink);
    cursor: pointer;
    overflow: hidden;
`;

const Image = styled.div`
    height: 132px;
    width: 132px;
    background-image: url(${props => props.img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const Save = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    background: var(--lime);
    color: var(--ink);
    font-family: var(--mono);
    font-weight: 700;
    font-size: 0.82rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    opacity: 0;
    transform: translateY(100%);
    transition: opacity 0.16s ease, transform 0.16s ease;

    ${Frame}:hover & {
        opacity: 1;
        transform: translateY(0);
    }
`;

const LinkBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    padding: 12px 14px 14px;
    border-top: 2px solid var(--ink);
    background: var(--paper);
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const Pin = styled.span`
    flex-shrink: 0;
    width: 34px;
    text-align: center;
    padding: 2px 0;

    font-family: var(--mono);
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.08em;

    color: ${props => props.dst ? 'var(--ink)' : 'var(--paper)'};
    background: ${props => props.dst ? 'var(--lime)' : 'var(--ink)'};
`;

const Code = styled.span`
    font-family: var(--mono);
    font-size: 0.76rem;
    color: var(--ink-soft);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Arrow = styled.div`
    display: flex;
    align-items: center;
    padding-left: 12px;
    color: var(--ink);
    font-size: 0.7rem;
    opacity: 0.5;
`;

export {
    Wrapper,
    Top,
    Tag,
    Edit,
    Title,
    Frame,
    Image,
    Save,
    LinkBox,
    Row,
    Pin,
    Code,
    Arrow
};
