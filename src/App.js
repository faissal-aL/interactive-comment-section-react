import React from "react";
import Comment from "./components/Comment";
import Reply from "./components/Reply";
import data from "./data.json";

const App = () => {
    return (
        <div>
           <div><Comment dataForComment={data} /> <br></br></div> 
            <div><Reply /></div>
        </div>
    );
};

export default App;