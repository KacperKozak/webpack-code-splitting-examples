import React, { Component } from 'react';

const async = load => (
  class extends Component {
    constructor(props) {
      super(props);
      this.state = { BaseComponent: null };
    }
    componentDidMount() {
      load().then((module) => {
        this.setState({
          BaseComponent: module.default ? module.default : module,
        });
      });
    }
    render() {
      const { BaseComponent } = this.state;
      if (BaseComponent) return <BaseComponent {...this.props} />;
      return null;
    }
  }
);

export default async;
