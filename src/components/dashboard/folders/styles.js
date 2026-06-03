import styled from 'styled-components';

const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
`;

const Aside = styled.aside`
    flex-shrink: 0;
    width: 230px;
    position: sticky;
    top: 24px;
    align-self: flex-start;

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 820px) {
        position: static;
        width: 100%;
    }
`;

const Heading = styled.h2`
    margin: 0 0 2px;
    font-family: var(--mono);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-soft);

    @media (max-width: 820px) {
        display: none;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 820px) {
        flex-direction: row;
        gap: 10px;
        overflow-x: auto;
        padding-bottom: 6px;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
    }
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 10px 12px;
    min-height: 44px;
    cursor: pointer;
    user-select: none;

    background: ${props => props.active ? 'var(--lime)' : 'var(--paper-2)'};
    border: 2px solid var(--ink);
    box-shadow: ${props => props.active ? '4px 4px 0 var(--ink)' : '3px 3px 0 var(--ink)'};

    /* drag-over drop target highlight */
    outline: ${props => props.dragover ? '3px dashed var(--ink)' : 'none'};
    outline-offset: 2px;
    ${props => props.dragover && 'background: var(--lime-deep);'}

    transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    &:hover {
        transform: translate(-1px, -1px);
        box-shadow: 5px 5px 0 var(--ink);
    }

    @media (max-width: 820px) {
        flex-shrink: 0;
        min-height: 40px;
    }
`;

const Dot = styled.span`
    flex-shrink: 0;
    width: 12px;
    height: 12px;
    border: 2px solid var(--ink);
    background: ${props => props.color || 'var(--paper)'};
`;

const Name = styled.span`
    flex: 1;
    font-family: var(--mono);
    font-size: 0.82rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Count = styled.span`
    flex-shrink: 0;
    min-width: 22px;
    text-align: center;
    padding: 1px 6px;

    font-family: var(--mono);
    font-size: 0.7rem;
    font-weight: 700;

    background: var(--ink);
    color: var(--lime);
`;

const IconBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;

    background: var(--paper);
    color: var(--ink);
    border: 2px solid var(--ink);
    cursor: pointer;
    font-size: 0.72rem;

    &:hover { background: var(--lime); }
`;

const NewInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 30px;
    padding: 0 8px;

    background: var(--paper);
    border: 2px solid var(--ink);
    border-radius: 0;
    outline: 0;

    font-family: var(--mono);
    font-size: 0.82rem;
    color: var(--ink);
`;

const NewRow = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 820px) {
        flex-shrink: 0;
        min-width: 160px;
    }
`;

const AddBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 10px 12px;
    min-height: 44px;
    width: 100%;

    background: var(--paper);
    color: var(--ink);
    border: 2px dashed var(--ink);
    cursor: pointer;

    font-family: var(--mono);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    &:hover { background: var(--lime); border-style: solid; }

    @media (max-width: 820px) {
        flex-shrink: 0;
        width: auto;
        white-space: nowrap;
    }
`;

export {
    Aside,
    Heading,
    List,
    Item,
    Dot,
    Name,
    Count,
    Controls,
    IconBtn,
    NewRow,
    NewInput,
    AddBtn
};
