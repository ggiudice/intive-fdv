import React, { PureComponent, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import { BASE_URL } from '../resources/Constants';
import PrivateRoute from './PrivateRoute';
import { Home, Users } from '../pages';

class Routes extends PureComponent {

  render() {
    return (
      <Fragment>
        <Switch>
          <PrivateRoute path={`${BASE_URL}/users`} component={Users} />
          <PrivateRoute exact path={`${BASE_URL}/`} component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default withRouter(Routes);
