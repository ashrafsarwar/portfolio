import React from "react";

class ChangingProgressProvider extends React.Component {
  static defaultProps = {
    interval: 1500,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId); // Clear interval on unmount
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
