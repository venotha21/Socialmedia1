import './App.css';
import React, { useState, useEffect } from "react";
import View from "./View";
import Add from "./Add";
import Likes from './likebutton.js';
import Dislikes from './dislikebutton.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  
  <h1>Social Media App</h1>
  const [posts, changePosts] = useState([
    { username: 1, task: "make static data", complete: false },
    { username: 2, task: "make dynamic data", complete: false }
  ]);
  

  const updatePostItems = (newPost) => {
    localStorage.setItem("List", JSON.stringify([...posts, newPost]))
    changePosts([...posts, newPost])
  }

  useEffect(() => {
    const list = localStorage.getItem("List")
    changePosts(JSON.parse(list)||[])
  }, [])
  return (
     <div className="App">
      <Add
      onSubmit={(newPost) => {
        updatePostItems(newPost);
      }}/>
      <View postItems={posts}/>    
      <Likes/> <Dislikes/>
      
      </div>
  );
}

export default App;
