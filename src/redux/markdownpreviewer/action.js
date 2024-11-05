const UPDATE_MARKDOWN = "UPDATE_MARKDOWN";

const parseText = (input) => {
    return {
        type: UPDATE_MARKDOWN,
        payload: input
    }
}

export default parseText;