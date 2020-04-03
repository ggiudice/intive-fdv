import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

class PrivateRoute extends PureComponent {
  renderRouteComponent = (Component, props) => {
    return <Component {...props} />;
  }
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => this.renderRouteComponent(Component, props)}
      />
    );
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
