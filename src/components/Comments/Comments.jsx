import React from 'react'

function Comments({ comment }) {
  return (
    <>
      {comment.map(item => <p id={item.id}>{item.body}</p>
      )}
    </>
  )
}

export default Comments