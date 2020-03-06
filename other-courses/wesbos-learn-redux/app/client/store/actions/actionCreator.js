import C from "./constants";

// increment likes
export function increment(index) {
  return {
    type: C.INCREMENT_LIKES,
    index
  };
}

// add comment
export function addComment(postID, author, comment) {
  return {
    type: C.ADD_COMMENT,
    postID,
    author,
    comment
  }
}

// remove comment
export function removeComment(postID, index) {
  return {
    type: C.REMOVE_COMMENT,
    postID,
    index
  }
}