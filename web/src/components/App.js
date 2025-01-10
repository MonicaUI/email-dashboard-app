import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// import {

//   useIsAuthenticated,
//   useMsal
// } from '@azure/msal-react';

import Dashboard from './dashboard';
import Login from './login';

import { getEmailStats, getEmailActivity, invokeWorkflow } from "../utils/helpers/api";
import {Paths} from  '../constants/labels'




function App() {
  // const isAuthenticated = useIsAuthenticated();
  // const { instance, accounts } = useMsal();
  // const navigate = useNavigate();

  const [emailStats, setEmailStats] = useState(null);
  const [emailActivity, setEmailActivity] = useState(null);
  const [workflowResponse, setWorkflowResponse] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await getEmailStats();
        setEmailStats(stats);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchActivity = async () => {
      try {
        const activity = await getEmailActivity();
        setEmailActivity(activity);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
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
                        <Dashboard />
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
