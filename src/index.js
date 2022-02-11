import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment.js';
import Button from './button';


const App = () =>{
    return(
      <Comment name="Jenny Lawrence" meta="New User" des={<>Jenny wants to add you to the group <b>contact details</b></>}>
        <Button />
      </Comment>
    )

};

ReactDOM.render(

    <App / >,
    document.getElementById("root")
);