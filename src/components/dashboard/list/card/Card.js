import React , { Component } from 'react';
import { BsArrowDown } from "react-icons/bs";
import { FiEdit, FiDownload } from "react-icons/fi";
import {
    Wrapper,
    Top,
    Tag,
    Edit,
    Title,
    Frame,
    Image,
    Save,
    LinkBox,
    Row,
    Pin,
    Code,
    Arrow
} from './styles';

class Card extends Component {
    downloadImg =  () => {
        fetch(this.props.image)
        .then(res => res.blob())
        .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = `${this.props.alias || 'QR'}.png`;
            a.click();
            window.URL.revokeObjectURL(url);
        })
    }

    handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', this.props.id);
        e.dataTransfer.effectAllowed = 'move';
    };

    render() {
        return (
            <Wrapper draggable onDragStart={this.handleDragStart}>
                <Top>
                    <Tag>{this.props.alias}</Tag>
                    <Edit to={ `edit/${this.props.alias}` }> <FiEdit/> </Edit>
                </Top>
                <Title>{this.props.name}</Title>
                <Frame onClick={() => this.downloadImg()}>
                    <Image img={this.props.image}/>
                    <Save> <FiDownload/> Save PNG </Save>
                </Frame>
                <LinkBox>
                    <Row>
                        <Pin>SRC</Pin>
                        <Code>{`freshqr.io/${this.props.alias}`}</Code>
                    </Row>
                    <Arrow><BsArrowDown/></Arrow>
                    <Row>
                        <Pin dst>DST</Pin>
                        <Code>{this.props.content}</Code>
                    </Row>
                </LinkBox>
            </Wrapper>
        );
    };
};

export default Card;
