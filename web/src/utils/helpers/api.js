// api.js
export const getEmailStats = async () => {
  const response = await fetch('http://localhost:8000/email-stats');
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return response.json();
};

export const getEmailActivity = async () => {
  const response = await fetch('http://localhost:8000/email-activity');
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return response.json();
};

export const invokeWorkflow = async (emailData) => {
  const response = await fetch('http://localhost:8000/invoke', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: emailData }),
  });
  if (!response.ok) throw new Error(`Error: ${response.status}`);
  return response.json();
};
