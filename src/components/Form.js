import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic:""
    };
  }
  clickHandlerusername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  clickHandlerComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange=(event)=>{
      this.setState({
          topic:event.target.value,
      })
  }
  handleSubmit=event=>{
      alert(`${this.state.username} ${this.state.comments}  ${this.state.topic}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.clickHandlerusername}
            />
          </div>

          <div>
            <label>Comments</label>
            <input
              type="text"
              value={this.state.comments}
              onChange={this.clickHandlerComments}
            />
          </div>
          <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handleTopicChange}>
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>

              </select>
              <div>
                  <button type="submit">Submit</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
