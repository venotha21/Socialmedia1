import React, { useState } from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './likebutton.js';


function Add(props){

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  

    const [formValues, changeFormValues] = useState({
      username : "",
      imageUrl: "",
      caption: "",
    })

    const handleChange = (event) => {
      const newState = {...formValues}
      newState[event.target.name] = event.target.value;
      
      changeFormValues(formValues => {
        return {...formValues, [event.target.name]: event.target.value}
      })
    }

    const submitHandler = (event) => {

      console.log(formValues)

      event.preventDefault();
      props.onSubmit({
        username: formValues.username,
        imageUrl: formValues.imageUrl,
        caption: formValues.caption,
        likes: 0
      })
      changeFormValues({
        username: "",
        imageUrl: "",
        caption: "",
      })
      
      toastr["success"]("Todo added, success")
    }

    
  
  return (
      <div>
        <Form onSubmit={(event) => submitHandler(event)}>
          <Form.Group controlId="taskID">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              name="username" 
              onChange={(event) => handleChange(event)}
              value={formValues.username}
            />
          </Form.Group>

          <Form.Group controlId="taskDescription">
            <Form.Label>Image (url)</Form.Label>
            <Form.Control 
              name="imageUrl" 
              type="text"
              onChange={(event) => handleChange(event)}
              value={formValues.imageUrl}
            />
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Caption</Form.Label>
            <Form.Control 
              name="caption" 
              type="text"
              onChange={(event) => handleChange(event)}
              value={formValues.caption}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </div>
  );

}
export default Add;
