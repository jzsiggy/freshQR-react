import styled from 'styled-components';

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    width: 100%;
    padding: 0 0 24px;
`;

const Input = styled.input`
    flex: 1;
    height: 48px;
    padding: 0 16px;

    background: var(--paper-2);
    border: 2px solid var(--ink);
    border-radius: 0;
    box-shadow: 3px 3px 0 var(--ink);

    outline: 0;
    font-family: var(--mono);
    color: var(--ink);
    font-size: 0.95rem;

    transition: box-shadow 0.12s ease, transform 0.12s ease;
    &::placeholder { color: rgba(23, 22, 15, 0.4); }
    &:focus {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 var(--ink);
    }
`;

const Count = styled.span`
    flex-shrink: 0;
    font-family: var(--mono);
    font-size: 0.78rem;
    letter-spacing: 0.05em;
    color: var(--ink-soft);

    b {
        display: inline-block;
        margin-right: 6px;
        padding: 3px 8px;
        background: var(--ink);
        color: var(--lime);
        font-weight: 700;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 26px;

    width: 100%;

    @media (max-width: 820px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 16px;
    }
`;

const Empty = styled.div`
    width: 100%;
    margin: 10px 0;
    padding: 48px 30px;
    text-align: center;

    font-family: var(--mono);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--ink-soft);

    border: 2px dashed var(--ink);

    b { color: var(--ink); }
`;

export {
    Toolbar,
    Input,
    Count,
    Wrapper,
    Empty
};
