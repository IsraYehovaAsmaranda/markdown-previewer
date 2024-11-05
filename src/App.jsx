import React from "react";
import "./index.css";
import MarkdownPreviewer from "./features/MarkdownPreviewer/MarkdownPreviewer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  render() {
    return <MarkdownPreviewer />;
  }
}

export default App;
