import { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import API from './assets/API';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import Dashboard from "./components/dashboard/Dashboard";
import EditCodeForm from './components/form/edit/EditCodeForm';
import NewCodeForm from "./components/form/new/NewCodeForm";
import Redirect from './components/redirect/Redirect';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount = () => {
    let path = this.props.location.pathname;
    if ( 
      path.startsWith('/login') || 
      path.startsWith('/signup') ||
      path.startsWith('/code')
    ) {
      this.setState({
        loading: false
      }) 
    }
    else {
      API.get('/auth/user')
      .then(response => {
        this.setState({
          loading: false
        })
      })
      .catch(err => {
        this.props.history.push("/login");
        this.setState({
          loading: false
        })
      })
    };
  };

  render() {
    return (
      this.state.loading 
      ?
      <>Loading</>
      :
      <Switch>
        <Route exact path='/dashboard'>
          <Dashboard/>
        </Route>
        <Route exact path='/new'>
          <NewCodeForm/>
        </Route>
        <Route exact path='/edit/:alias'>
          <EditCodeForm/>
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/signup'>
          <Signup/>
        </Route>
        <Route exact path='/code/:alias'>
          <Redirect/>
        </Route>
      </Switch>
    );
  }
};

export default withRouter(App);
