import React, { useState, useEffect } from "react";
import { getEmailStats, getEmailActivity, invokeWorkflow } from "./utils/helpers/api";

const App = () => {
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
    <div>
      <h1>Email Dashboard</h1>
      <section>
        <h2>Email Statistics</h2>
        {emailStats ? (
          <ul>
            <li>Total Emails: {emailStats.total}</li>
            <li>Unread: {emailStats.unread}</li>
            <li>Read: {emailStats.read}</li>
            <li>Replied: {emailStats.replied}</li>
            <li>Drafts: {emailStats.drafted}</li>
          </ul>
        ) : (
          <p>Loading stats...</p>
        )}
      </section>

      <section>
        <h2>Email Activity Timeline</h2>
        {emailActivity ? (
          <ul>
            {emailActivity.map((item, index) => (
              <li key={index}>
                Time: {item.time}, Emails: {item.emails}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading activity...</p>
        )}
      </section>

      <section>
        <h2>Invoke Workflow</h2>
        <button onClick={handleInvokeWorkflow}>Invoke</button>
        {workflowResponse && (
          <div>
            <h3>Workflow Response</h3>
            <pre>{JSON.stringify(workflowResponse, null, 2)}</pre>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
