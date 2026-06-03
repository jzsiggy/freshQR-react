import styled, { keyframes } from 'styled-components';

const pop = keyframes`
    from { opacity: 0; transform: translateY(10px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const Delete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;

    color: var(--ink);
    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 var(--ink);
    font-size: 1.2rem;
    cursor: pointer;

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease, color 0.12s ease;
    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 var(--ink);
        background: var(--coral);
    }
    &:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0 var(--ink);
    }
`;

const DeleteModal = styled.div`
    position: fixed;
    z-index: 50;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;

    width: 90%;
    max-width: 400px;
    padding: 34px 30px;

    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow-lg);
    animation: ${pop} 0.2s ease both;

    /* dimmed backdrop */
    &::before {
        content: '';
        position: fixed;
        inset: 0;
        z-index: -1;
        background: rgba(23, 22, 15, 0.55);
    }

    a {
        font-family: var(--mono);
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: var(--lime-deep);
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
    }
`;

const Text = styled.div`
    text-align: center;
    font-family: var(--mono);
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--ink);
`;

const BtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 14px;
    width: 100%;
`;

const baseBtn = `
    flex: 1;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 2px solid var(--ink);
    box-shadow: 4px 4px 0 var(--ink);
    cursor: pointer;

    font-family: var(--mono);
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    &:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
    &:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--ink); }
`;

const Cancel = styled.div`
    ${baseBtn}
    background: var(--paper);
    color: var(--ink);
`;

const Confirm = styled.div`
    ${baseBtn}
    background: var(--coral);
    color: var(--ink);
`;

export {
    Delete,
    DeleteModal,
    BtnGroup,
    Cancel,
    Confirm,
    Text
};
