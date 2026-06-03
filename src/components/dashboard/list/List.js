import React , { Component } from 'react';
import { Toolbar, Input, Count, Wrapper, Empty } from './styles';
import Card from './card/Card';

class List extends Component {
    state = {
        filter: '',
    }

    handleSetFilter = (e) => {
        this.setState({
            filter: e.target.value
        });
    };

    render() {
        const { selectedFolder } = this.props;

        const visible = this.props.codes
            .filter(code => !selectedFolder || (code.folder || null) === selectedFolder._id)
            .filter(code => code.name.toLowerCase().includes(this.state.filter.toLowerCase()));

        return (
            <>
            <Toolbar>
                <Input name='filter' value={this.state.filter} placeholder='Search your codes…' onChange={(e) => this.handleSetFilter(e)}/>
                <Count><b>{visible.length}</b>{visible.length === 1 ? 'code' : 'codes'}</Count>
            </Toolbar>
            {
                visible.length === 0
                ?
                <Empty>
                    {this.state.filter
                        ? <>Nothing matches <b>“{this.state.filter}”</b>.</>
                        : selectedFolder
                            ? <>This folder is empty. <b>Drag a code here</b> or set its folder in the edit screen.</>
                            : <>No codes yet. Hit <b>New code</b> to mint your first one.</>}
                </Empty>
                :
                <Wrapper>
                {
                    visible.map((code) => {
                        return (
                            <Card
                            key={code._id}
                            id={code._id}
                            name={code.name}
                            alias={code.alias}
                            image={code.image}
                            content={code.content}
                            folder={code.folder}
                            />
                        )
                    })
                }
                </Wrapper>
            }
            </>
        );
    };
};

export default List;
