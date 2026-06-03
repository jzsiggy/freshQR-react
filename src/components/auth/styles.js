import styled, { keyframes } from 'styled-components';

const rise = keyframes`
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 100vh;
    padding: 40px 20px;
    overflow: hidden;

    /* Oversized ghost glyph bleeding off the corner */
    &::before {
        content: '';
        position: absolute;
        right: -120px;
        bottom: -120px;
        width: 460px;
        height: 460px;
        background-color: var(--ink);
        opacity: 0.04;
        -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
        mask: url('/qr-code.svg') center / contain no-repeat;
        transform: rotate(8deg);
        pointer-events: none;
    }
`;

const Brand = styled.div`
    margin-bottom: 26px;
    animation: ${rise} 0.5s ease both;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 22px;

    width: 100%;
    max-width: 380px;

    padding: 34px 30px 30px;
    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow-lg);
    animation: ${rise} 0.55s 0.06s ease both;
`;

const Kicker = styled.span`
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-soft);
`;

const Header = styled.div`
    display: inline-flex;
    align-items: flex-end;
    gap: 8px;

    font-family: var(--display);
    font-weight: 800;
    font-size: 2.7rem;
    line-height: 0.95;
    letter-spacing: -0.04em;
    margin: 2px 0 4px;

    /* lime ink-stamp under the heading */
    span.bar {
        display: inline-block;
        width: 34px;
        height: 12px;
        margin-bottom: 8px;
        background: var(--lime);
        box-shadow: 2px 2px 0 var(--ink);
    }
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
`;

const Label = styled.label`
    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.14em;
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

const Submit = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    height: 54px;
    margin-top: 4px;

    background: var(--lime);
    color: var(--ink);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    cursor: pointer;

    font-family: var(--mono);
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;

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

const Success = styled.div`
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 54px;
    background: var(--ink);
    color: var(--lime);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    font-size: 1.9rem;
`;

const Message = styled.span`
    font-family: var(--mono);
    font-size: 0.82rem;
    line-height: 1.4;
    text-align: center;
    color: var(--coral);

    &::before { content: '! '; font-weight: 700; }
`;

const Switch = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 2px;

    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--ink-soft);

    a {
        color: var(--ink);
        font-weight: 700;
        text-decoration: underline;
        text-decoration-color: var(--lime-deep);
        text-decoration-thickness: 2px;
        text-underline-offset: 3px;
    }
    a:hover { background: var(--lime); }
`;

export {
    Brand,
    Container,
    Header,
    Input,
    InputGroup,
    Kicker,
    Label,
    Message,
    Submit,
    Success,
    Switch,
    Wrapper,
};
