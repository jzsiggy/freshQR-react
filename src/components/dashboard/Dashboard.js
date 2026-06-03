import React , { Component } from 'react';
import { Wrapper, Shell, Main, ErrorMessage, Logout } from './styles';
import Header from './header/Header';
import List from './list/List';
import Folders from './folders/Folders';

import { HiLogout } from 'react-icons/hi'

import API from '../../assets/API';

class Dashboard extends Component {
    state = {
        codes : [],
        folders : [],
        selectedFolder : null,   // null === "All codes"
        error : false
    }

    logout = () => {
        API.post('auth/logout')
    };

    componentDidMount() {
        this.fetchCodes();
        this.fetchFolders();
    }

    fetchCodes = () => {
        API.get('qr/list')
        .then(response => this.setState({ codes: response.data }))
        .catch(() => this.setState({ error: true }));
    };

    fetchFolders = () => {
        API.get('folder/list')
        .then(response => this.setState({ folders: response.data }))
        .catch(() => {});
    };

    selectFolder = (folder) => this.setState({ selectedFolder: folder });

    // Drag-and-drop move: update locally for instant feedback, then persist.
    handleMoveCode = (codeId, folderId) => {
        this.setState(prev => ({
            codes: prev.codes.map(c => c._id === codeId ? { ...c, folder: folderId } : c)
        }));
        API.post('qr/move', { id: codeId, folder: folderId })
        .catch(() => this.fetchCodes());   // revert to server truth on failure
    };

    render() {
        return (
            <Wrapper>
                <Header/>
                {
                this.state.error
                ?
                <ErrorMessage>We encountered an error trying to connect to the server</ErrorMessage>
                :
                <Shell>
                    <Folders
                        folders={this.state.folders}
                        codes={this.state.codes}
                        selected={this.state.selectedFolder}
                        onSelect={this.selectFolder}
                        onMove={this.handleMoveCode}
                        onChanged={this.fetchFolders}
                    />
                    <Main>
                        <List
                            codes={this.state.codes}
                            selectedFolder={this.state.selectedFolder}
                        />
                    </Main>
                </Shell>
                }
                <Logout to='/login' onClick={() => this.logout()}><HiLogout/></Logout>
            </Wrapper>
        );
    };
};

export default Dashboard;
