import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import './App.css';

function View(props){

    return (
      <div>
       {
        props.postItems?.map(post => {
          return <div>
            <img src={post.imageUrl} alt="example"/>
            {
              post.caption
            }
            {
              post.username
            }
          </div>
        })
       }
      </div>
    );

}
export default View;
