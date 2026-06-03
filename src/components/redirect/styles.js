import styled, { keyframes } from 'styled-components';

const scan = keyframes`
    0%   { top: 6px; }
    50%  { top: calc(100% - 12px); }
    100% { top: 6px; }
`;

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    min-height: 100vh;
    width: 100%;
    padding: 100px 20px 40px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    left: 0;
    height: 84px;
    width: 100%;
    border-bottom: 2px solid var(--ink);
    background: var(--paper);
    z-index: 10;
`;

const IconGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;

    font-family: var(--display);
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: -0.04em;
`;

const Icon = styled.div`
    height: 30px;
    width: 30px;
    background-color: var(--ink);
    -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
    mask: url('/qr-code.svg') center / contain no-repeat;
`;

/* Scanning loader: framed QR with a sweeping lime laser line */
const Loading = styled.div`
    position: relative;
    height: 240px;
    width: 240px;

    background: #ffffff;
    border: 2px solid var(--ink);
    box-shadow: var(--shadow-lg);
    overflow: hidden;
    animation: ${fadeIn} 0.4s ease both;

    &::before {
        content: '';
        position: absolute;
        inset: 28px;
        background-color: var(--ink);
        -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
        mask: url('/qr-code.svg') center / contain no-repeat;
    }
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: 6px;
        background: var(--lime);
        box-shadow: 0 0 16px 4px var(--lime-deep);
        mix-blend-mode: multiply;
        animation: ${scan} 1.7s ease-in-out infinite;
    }
`;

/* Error illustration: a struck-through glyph */
const Animation = styled.div`
    position: relative;
    height: 180px;
    width: 180px;
    margin-bottom: 10px;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--ink);
        opacity: 0.18;
        -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
        mask: url('/qr-code.svg') center / contain no-repeat;
    }
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -6%;
        width: 112%;
        height: 10px;
        background: var(--coral);
        border: 2px solid var(--ink);
        transform: translateY(-50%) rotate(-18deg);
        box-shadow: 3px 3px 0 var(--ink);
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    text-align: center;
    width: 460px;
    max-width: 92%;
    padding: 30px 28px;

    background: var(--paper-2);
    border: 2px solid var(--ink);
    box-shadow: var(--shadow);
    animation: ${fadeIn} 0.4s ease both;

    span {
        font-family: var(--mono);
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--ink);
    }
`;

const Underline = styled.span`
    background: var(--lime);
    box-shadow: 1px 1px 0 var(--ink);
    padding: 0 3px;
`;

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
