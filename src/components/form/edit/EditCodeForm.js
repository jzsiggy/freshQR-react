import React , { Component } from 'react';
import { IoIosArrowBack, IoIosCheckmarkCircleOutline } from "react-icons/io"
import { BiSend } from "react-icons/bi"
import { BsTrash } from 'react-icons/bs'

import { withRouter , Link } from 'react-router-dom';

import API from '../../../assets/API';

import {
    Back,
    Comment,
    Container,
    ErrorMessage, 
    Header,
    Input,
    InputGroup,
    Label,
    Name, 
    Success,
    Submit,
    Wrapper
} from '../styles'

import {
    Delete,
    DeleteModal,
    BtnGroup,
    Cancel,
    Confirm,
    Text
} from './styles'

class EditCodeForm extends Component {
    state = {
        name: '',
        content: '',
        alias: '',
        id: '',
        image: null,
        
        success: false,
        error: false,

        deletePopup: false,
        deleted: false
    }

    componentDidMount = () => {
        let { alias } = this.props.match.params;
        API.get(`qr/specs/${alias}`)
        .then(response => {
            this.setState({
                id: response.data._id,
                name: response.data.name,
                alias: response.data.alias,
                content: response.data.content,
                image: response.data.image
            })
        })
        .catch(err => {
            this.setState({
                error: err.response ? err.response.data.message : "We've ran into an error. Please try again later."
            })
        })
    }

    handleSubmit = () => {
        let formFields = {
            name: this.state.name,
            content: this.state.content,
        }

        let emptyFields = Object.values(formFields).some(value => value === '');
        if (emptyFields) {
            return this.setState({
                error: 'Form fields cannot be empty'
            })
        }

        if (!this.state.content.startsWith('http://') && !this.state.content.startsWith('https://')) {
            return this.setState({
                error: `url must start with 'http://' or 'https://'`
            })
        }

        let body = { ...formFields, id: this.state.id }

        API.post('qr/update', body)
        .then(response => {
            console.log(response)
            this.setState({
                error: false,
                success: true,
            })
        })
        .catch(err => {
            this.setState({
                error: err.response ? err.response.data.message : "We've ran into an error. Please try again later."
            })
        });
    };

    handleSetName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    handleSetContent = (e) => {
        this.setState({
            content: e.target.value.replace(/[| ]/gi,'')
        });
    };

    handleSetAlias = (e) => {
        this.setState({
            error: "Alias is unchangable."
        });
    }

    confirmDeletion = () => {
        API.post('qr/delete', { id: this.state.id })
        .then(response => {
            this.setState({
                deleted: true
            })
        })
        .catch(err => {
            this.setState({
                deletePopup: false,
                error: 'Unable to delete QR Code. Try again later.'
            })
        })
    }

    showModal = () => {
        this.setState({
            deletePopup: true
        });
    };

    hideModal = () => {
        this.setState({
            deletePopup: false
        });
    };

    render() {
        return (
            <Container>
                {
                    this.state.deletePopup &&
                    <DeleteModal>
                        {
                        this.state.deleted ?
                        <>
                            <Text>
                                <span>Code deleted succesfully</span>
                            </Text>
                            <Link to='/dashboard'>Back to home</Link>
                        </>
                        :
                        <>
                            <Text>
                                <span>Are you sure you want to delete this QR code? This action cannot be undone.</span>
                            </Text>
                            <BtnGroup>
                                <Cancel onClick={() => this.hideModal()}>Cancel</Cancel>
                                <Confirm onClick={() => this.confirmDeletion()}>Confirm</Confirm>
                            </BtnGroup>
                        </>
                    }
                    </DeleteModal>
                }
                <Header> 
                    <Back to='/dashboard'> <IoIosArrowBack/> </Back> 
                    <Delete onClick={() => this.showModal()}> <BsTrash/> </Delete>
                </Header>
                <Wrapper>
                    <Name html={this.state.name} onChange={(e) => this.handleSetName(e)}/>
                    <InputGroup>
                        <Label htmlFor='content'>
                            To which URL do want the QR Code to redirect to?
                        </Label>
                        <Input name='content' value={this.state.content} placeholder='https://' onChange={(e) => this.handleSetContent(e)}/>
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <Label htmlFor='alias'>
                            Alias:
                        </Label>
                        <Input name='alias' value={this.state.alias} onChange={(e) => this.handleSetAlias(e)}/>
                        <Comment>{`www.freshqr.io/${this.state.alias}`}</Comment>
                    </InputGroup>
                    <br/>
                    {
                        this.state.success ?
                        <Success to='/dashboard'> <IoIosCheckmarkCircleOutline/> </Success>
                        :
                        <Submit onClick={() => this.handleSubmit()}> <BiSend/> </Submit>
                    }
                    {
                        this.state.error &&
                        <>
                            <br/>
                            <ErrorMessage>{this.state.error}</ErrorMessage>
                        </>
                    }
                </Wrapper>
            </Container>
        );
    };
};

export default withRouter(EditCodeForm);