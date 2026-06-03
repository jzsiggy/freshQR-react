import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    min-height: 100vh;
    padding-bottom: 120px;
`;

/* Two-column body: folders sidebar + main grid. Collapses to one column. */
const Shell = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 28px;

    width: 100%;
    max-width: 1080px;
    padding: 0 28px;

    @media (max-width: 820px) {
        flex-direction: column;
        gap: 18px;
        padding: 0 16px;
    }
`;

const Main = styled.div`
    flex: 1;
    min-width: 0; /* allow the grid to shrink instead of overflowing */
    width: 100%;
`;

const ErrorMessage = styled.div`
    margin: 60px auto;
    max-width: 460px;
    width: 90%;
    padding: 22px 26px;
    text-align: center;

    font-family: var(--mono);
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--ink);

    background: var(--coral);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
`;

const Logout = styled(Link)`
    position: fixed;
    bottom: 28px;
    right: 28px;
    z-index: 20;

    height: 58px;
    width: 58px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;

    color: var(--ink);
    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: var(--shadow-lg);
        background: var(--coral);
    }
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--ink);
    }
`;

export {
    Wrapper,
    Shell,
    Main,
    ErrorMessage,
    Logout
};
