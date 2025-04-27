import React from 'react'


const PostContent = ({postdata}) => {
  return (
    <div>
        <h2 id="postName">{postdata.name}さん</h2>
        <p id="postContents">{postdata.content}</p>
    </div>
  );
};

export default PostContent