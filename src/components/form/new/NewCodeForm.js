import React , { Component } from 'react';
import { FaPlus } from "react-icons/fa";
import { IoIosArrowBack, IoIosCheckmarkCircleOutline } from "react-icons/io"

import API from '../../../assets/API';

import {
    Back,
    Comment,
    Container,
    ErrorMessage, 
    Header,
    Image, 
    ImageContainer,
    Input,
    InputGroup,
    Label,
    Name, 
    Success,
    Submit,
    Wrapper
} from '../styles'

class NewCodeForm extends Component {
    state = {
        name: 'Name',
        content: '',
        alias: '',
        image: null,
        success: false,
        error: false
    }

    handleSubmit = () => {
        let body = {
            name: this.state.name,
            content: this.state.content,
            alias: this.state.alias
        }

        let emptyFields = Object.values(body).some(value => value === '');
        if (emptyFields) {
            return this.setState({
                error: 'Form fields cannot be empty'
            })
        }

        API.post('qr/new', body)
        .then(response => {
            this.setState({
                error: false,
                success: true,
                image: response.data.image
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
            alias: e.target.value.replace(/[^a-z0-9-]/gi,'')
        });
    }

    render() {
        return (
            <Container>
                <Header> <Back to='/'><IoIosArrowBack/></Back> </Header>
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
                            Choose an alias for the QR Code.
                        </Label>
                        <Input name='alias' value={this.state.alias} placeholder='cat-video1' onChange={(e) => this.handleSetAlias(e)}/>
                        <Comment>{`www.freshqr.sh/${this.state.alias}`}</Comment>
                    </InputGroup>
                    {
                        this.state.success ?
                        <>
                            <ImageContainer>
                                <Image img={this.state.image}/>
                            </ImageContainer>
                            <Success to='/'> <IoIosCheckmarkCircleOutline/> </Success>
                        </>
                        :
                        <>
                            <br/>
                            <Submit onClick={() => this.handleSubmit()}> <FaPlus/> </Submit>
                        </>
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

export default NewCodeForm;