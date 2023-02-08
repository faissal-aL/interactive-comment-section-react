import React, { useState } from "react";
import commentsData from "../data.json";
import Comment from "./Comment";

const Reply = () => {
  const avatar = `${commentsData.currentUser.image.png}`.replace(
    "./images/avatars/",
    ""
  );

  const [textar, setTextar] = useState("");

  const sendComment = (event) => {
  //  console.log('clicked');
    event.preventDefault();
    console.log(textar);
    return <Comment dataForComment={textar} />
  };

  return (
    <div>
      
      <form onSubmit={sendComment} className="ui reply form">
        
        <a href="#" className="avatar">
          {/* https://stackoverflow.com/questions/74292448/reactjs-uncaught-error-cannot-find-module-png-when-loading-from-a-json-file 
             this is the reason why i used the const avatar to get the image
           */}
          <img src={require(`../images/avatars/${avatar}`)}></img>
        </a>
        <div className="field">
          <textarea value={textar} onChange={e => setTextar(e.target.value)}></textarea>
        </div>
        <div >
        <input className="ui blue labeled submit icon button" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};


export default Reply;