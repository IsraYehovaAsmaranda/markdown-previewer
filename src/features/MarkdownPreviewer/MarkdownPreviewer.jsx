import React from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import parseText from "../../redux/markdownpreviewer/action";
import { connect, Provider } from "react-redux";
import store from "../../redux/markdownpreviewer/store";

const mapToStateProps = (state) => ({
  input: state,
});

const mapToDispatchProps = (dispatch) => ({
  changePreview: (text) => {
    dispatch(parseText(text));
  },
});

const EditorContainer = connect(mapToStateProps, mapToDispatchProps)(Editor);
const PreviewerContainer = connect(mapToStateProps, null)(Previewer);

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <EditorContainer />
        <PreviewerContainer />
      </Provider>
    );
  }
}

export default MarkdownPreviewer;
