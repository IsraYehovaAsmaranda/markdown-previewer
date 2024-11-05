import PropTypes from "prop-types";
import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.changePreview(event.target.value);
  }
  render() {
    return (
      <div className="max-w-xl mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-500 p-3">
            <h2 className="text-xl font-bold text-gray-800">Editor</h2>
          </div>
          <div className="bg-blue-200 p-3">
            <textarea
              className="w-full bg-blue-100 rounded-lg p-2 focus:outline-none"
              value={this.props.input}
              onChange={this.handleChange}
              id="editor"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  changePreview: PropTypes.func,
  input: PropTypes.string,
}

export default Editor;
