import { Switch, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import EditCodeForm from './components/form/edit/EditCodeForm';
import NewCodeForm from "./components/form/new/NewCodeForm";
import Redirect from './components/redirect/Redirect';

function App() {
  return (
      <Switch>
        <Route exact path='/'>
          <Dashboard/>
        </Route>
        <Route exact path='/new'>
          <NewCodeForm/>
        </Route>
        <Route exact path='/edit/:alias'>
          <EditCodeForm/>
        </Route>
        <Route exact path='/:alias'>
          <Redirect/>
        </Route>
      </Switch>
  );
};

export default App;
