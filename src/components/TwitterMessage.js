import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxChars: 280
    };
  }

  handleInput = (event) => {
    this.setState({
      message: event.target.value
    }, () => this.setState({
      maxChars: this.props.maxChars - this.state.message.length
    }))
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} type="text" value={this.state.message} name="message" id="message" />
        <br /><br />
        Characters left: {this.state.maxChars}
      </div>
    );
  }
}

export default TwitterMessage;
