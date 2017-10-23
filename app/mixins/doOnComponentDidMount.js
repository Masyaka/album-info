import React from 'react';

export default function doOnComponentMount(cb) {
  return (Component) => {
    return class extends React.Component {
      static displayName = `doOnComponentMount(${Component.name || Component.displayName || ''})`;

      componentDidMount() {
        cb(this);
      }

      render() {
        return <Component {...this.props} />;
      }
    };
  };
}
