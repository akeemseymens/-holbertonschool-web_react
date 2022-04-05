/* Logs messages for the mounting and unmounting of the wrappedComponenet */
import React from 'react';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function WithLogging(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.name = getDisplayName(WrappedComponent);
      this.displayName = `WithLogging(${this.name})`;
    }
    componentDidMount() {
      console.log(`Component ${this.name} is mounted`)
    }

    componentWillUnmount() {
      console.log(`Component ${this.name} is going to unmount`)
    }

    render() {
      return <WrappedComponent {...this.props}/>
    }
  };
}

export default WithLogging;