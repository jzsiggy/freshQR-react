import React from 'react';
import styled, { keyframes } from 'styled-components';

/* ---------------------------------------------------------------- Logo --- */

const Mark = styled.div`
    width: ${props => props.size || 30}px;
    height: ${props => props.size || 30}px;
    flex-shrink: 0;
    background-color: var(--ink);
    -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
    mask: url('/qr-code.svg') center / contain no-repeat;
`;

const Wordmark = styled.span`
    font-family: var(--display);
    font-weight: 800;
    font-size: ${props => props.size || 22}px;
    letter-spacing: -0.04em;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    gap: 1px;

    em {
        font-style: normal;
        background: var(--lime);
        color: var(--ink);
        padding: 0 5px;
        margin-left: 4px;
        box-shadow: 2px 2px 0 var(--ink);
    }
`;

const LogoRow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    user-select: none;
`;

const Logo = ({ size = 22, mark = 28 }) => (
    <LogoRow>
        <Mark size={mark} />
        <Wordmark size={size}>FRESH<em>QR</em></Wordmark>
    </LogoRow>
);

/* ------------------------------------------------------------- Splash --- */

const pulse = keyframes`
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.88); opacity: 0.55; }
`;

const SplashWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
    height: 100vh;
    width: 100%;

    div.glyph {
        width: 72px;
        height: 72px;
        background-color: var(--ink);
        -webkit-mask: url('/qr-code.svg') center / contain no-repeat;
        mask: url('/qr-code.svg') center / contain no-repeat;
        animation: ${pulse} 1.1s ease-in-out infinite;
    }

    span {
        font-family: var(--mono);
        font-size: 0.72rem;
        letter-spacing: 0.4em;
        text-transform: uppercase;
        padding-left: 0.4em;
        color: var(--ink-soft);
    }
`;

const Splash = ({ label = 'Loading' }) => (
    <SplashWrap>
        <div className="glyph" />
        <span>{label}</span>
    </SplashWrap>
);

export { Logo, Splash };
