import React from "react";
import "./comment.css";
import commentsData from "../data.json";

const Comment = () => {
  console.log(commentsData);

  const theComment = commentsData.comments.map((comment) => {
    const avatar = `${comment.user.image.png}`.replace("./images/avatars/", "");

    return (
        
      <div key={comment.id} className="ui comments">
        <div className="comment">
          <a href="#" className="avatar">
            {/* https://stackoverflow.com/questions/74292448/reactjs-uncaught-error-cannot-find-module-png-when-loading-from-a-json-file 
             this is the reason why i used the const avatar to get the image
           */}
            <img src={require(`../images/avatars/${avatar}`)}></img>
          </a>
          <div className="content">
            <a href="#" className="author">
              {comment.user.username}
            </a>
            <div className="metadata">
              <span className="date">{comment.createdAt}</span>
            </div>
            <div className="text">{comment.content}</div>
          </div>
          <div className="actions">
            <a href="#" className="reply">
              Reply
            </a>
          </div>
        </div>
      </div>
      
    );
  });

  return <div>{theComment}

        </div>;
};

export default Comment;
