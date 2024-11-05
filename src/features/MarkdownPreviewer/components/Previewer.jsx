import DOMPurify from "dompurify";
import { marked } from "marked";
import PropTypes from "prop-types";
import React from "react";

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-500 p-3">
            <h2 className="text-xl font-bold text-gray-800">Previewer</h2>
          </div>
          <div
            className="bg-blue-200 p-3"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(marked.parse(this.props.input)),
            }}
          ></div>
        </div>
      </div>
    );
  }
}

Previewer.propTypes = {
  input: PropTypes.string,
};

export default Previewer;
