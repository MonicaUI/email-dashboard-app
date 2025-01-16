import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import Login from './login';

import { getEmailActivity, invokeWorkflow } from "../utils/helpers/api";
import {Paths} from  '../constants/labels'

function App() {
  const [emailActivity, setEmailActivity] = useState(null);
  const [workflowResponse, setWorkflowResponse] = useState(null);

  useEffect(() => {
   

    const fetchActivity = async () => {
      try {
        const activity = await getEmailActivity();
        setEmailActivity(activity);
      } catch (error) {
        console.error(error);
      }
    };

    fetchActivity();
  }, []);

  const handleInvokeWorkflow = async () => {
    const emailData = {
      id: "email123",
      threadId: "thread123",
      messageId: "msg123",
      references: "",
      sender: "user@example.com",
      subject: "Product Inquiry",
      body: "I would like to know more about your pricing plans.",
    };

    try {
      const response = await invokeWorkflow(emailData);
      setWorkflowResponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
 
                <Routes>
             
                  <Route
                    path={Paths.Dashboard}
                    element={
                        <Dashboard  />
                    }
                  />
    
                  <Route
                    path="/"
                    element={
                     <Login />
                    }
                  />
                </Routes>
    
            ) 
  
}

export default App;
