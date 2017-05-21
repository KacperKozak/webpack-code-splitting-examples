import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: null,
    };
  }
  componentDidMount() {
    this.props.load.then((loaded) => {
      this.setState({ Component: loaded.default ? loaded.default : loaded });
    });
  }
  render() {
    const { children } = this.props;
    const { Component } = this.state;
    if (!Component) return children || null;
    return <Component {...omit(this.props, ['load'])} />;
  }
}

Async.propTypes = {
  load: PropTypes.shape({
    then: PropTypes.func,
    catch: PropTypes.func,
  }).isRequired,
};

export default Async;
