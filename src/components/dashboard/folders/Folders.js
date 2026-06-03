import React, { Component } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import API from '../../../assets/API';

import {
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
} from './styles';

class Folders extends Component {
    state = {
        adding: false,
        newName: '',
        editingId: null,
        editName: '',
        dragOver: null   // key of the row currently being dragged over ('all' | folderId)
    };

    countFor = (folderId) => this.props.codes.filter(c => (c.folder || null) === folderId).length;

    /* ---- create ---- */
    startAdd = () => this.setState({ adding: true, newName: '' });
    cancelAdd = () => this.setState({ adding: false, newName: '' });
    submitAdd = () => {
        if (!this.state.adding) return;
        const name = this.state.newName.trim();
        if (!name) return this.cancelAdd();
        this.setState({ adding: false, newName: '' });
        API.post('folder/new', { name })
            .then(() => this.props.onChanged())
            .catch(() => {});
    };

    /* ---- rename ---- */
    startEdit = (folder) => this.setState({ editingId: folder._id, editName: folder.name });
    submitEdit = (id) => {
        if (this.state.editingId !== id) return;
        const name = this.state.editName.trim();
        this.setState({ editingId: null, editName: '' });
        if (!name) return;
        API.post('folder/update', { id, name })
            .then(() => this.props.onChanged())
            .catch(() => {});
    };

    /* ---- delete ---- */
    remove = (folder) => {
        const ok = window.confirm(`Delete folder “${folder.name}”? Its codes move back to All — they are not deleted.`);
        if (!ok) return;
        API.post('folder/delete', { id: folder._id })
            .then(() => {
                if (this.props.selected && this.props.selected._id === folder._id) {
                    this.props.onSelect(null);
                }
                this.props.onChanged();
            })
            .catch(() => {});
    };

    /* ---- drag & drop (desktop) ---- */
    allowDrop = (key) => (e) => {
        e.preventDefault();
        if (this.state.dragOver !== key) this.setState({ dragOver: key });
    };
    leaveDrop = () => this.setState({ dragOver: null });
    handleDrop = (folderId) => (e) => {
        e.preventDefault();
        this.setState({ dragOver: null });
        const codeId = e.dataTransfer.getData('text/plain');
        if (codeId) this.props.onMove(codeId, folderId);
    };

    render() {
        const { folders, selected, onSelect } = this.props;

        return (
            <Aside>
                <Heading>Folders</Heading>
                <List>
                    <Item
                        active={!selected}
                        dragover={this.state.dragOver === 'all'}
                        onClick={() => onSelect(null)}
                        onDragOver={this.allowDrop('all')}
                        onDragLeave={this.leaveDrop}
                        onDrop={this.handleDrop(null)}
                    >
                        <Name>All codes</Name>
                        <Count>{this.props.codes.length}</Count>
                    </Item>

                    {folders.map(folder => (
                        <Item
                            key={folder._id}
                            active={selected && selected._id === folder._id}
                            dragover={this.state.dragOver === folder._id}
                            onClick={() => onSelect(folder)}
                            onDragOver={this.allowDrop(folder._id)}
                            onDragLeave={this.leaveDrop}
                            onDrop={this.handleDrop(folder._id)}
                        >
                            {this.state.editingId === folder._id ? (
                                <NewInput
                                    autoFocus
                                    value={this.state.editName}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => this.setState({ editName: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') this.submitEdit(folder._id);
                                        if (e.key === 'Escape') this.setState({ editingId: null });
                                    }}
                                    onBlur={() => this.submitEdit(folder._id)}
                                />
                            ) : (
                                <>
                                    <Dot color={folder.color} />
                                    <Name>{folder.name}</Name>
                                    <Count>{this.countFor(folder._id)}</Count>
                                    <Controls onClick={(e) => e.stopPropagation()}>
                                        <IconBtn title='Rename' onClick={() => this.startEdit(folder)}><FiEdit2 /></IconBtn>
                                        <IconBtn title='Delete' onClick={() => this.remove(folder)}><FiTrash2 /></IconBtn>
                                    </Controls>
                                </>
                            )}
                        </Item>
                    ))}
                </List>

                {this.state.adding ? (
                    <NewRow>
                        <NewInput
                            autoFocus
                            placeholder='Folder name'
                            value={this.state.newName}
                            onChange={(e) => this.setState({ newName: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') this.submitAdd();
                                if (e.key === 'Escape') this.cancelAdd();
                            }}
                            onBlur={this.submitAdd}
                        />
                    </NewRow>
                ) : (
                    <AddBtn onClick={this.startAdd}><FiPlus /> New folder</AddBtn>
                )}
            </Aside>
        );
    }
}

export default Folders;
