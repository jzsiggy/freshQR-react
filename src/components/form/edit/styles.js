import styled from 'styled-components';

const Delete = styled.div`
    display: flex;
    flex-direction: column;
    justify-conntent: center;
    width: 30px;
    color: inherit;

    font-size: 1.5rem;
`

const DeleteModal = styled.div`
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 30%;
    width: 60%;

    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
`

const Text = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 80%;
    height: 60%;
`

const BtnGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    height: 30%;
    width: 80%;
`

const Cancel = styled.div`

`

const Confirm = styled.div`

`

export {
    Delete,
    DeleteModal,
    BtnGroup,
    Cancel,
    Confirm,
    Text
}