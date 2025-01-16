import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function RecentEmails() {
  return (
    <Box mt={4}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Recent Emails
      </Typography>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <Box>
          <Typography variant="body1" fontWeight="bold">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Re: Project Update Meeting
          </Typography>
        </Box>
        <Typography variant="caption" color="text.secondary">
          2 hours ago
        </Typography>
      </Paper>
    </Box>
  );
}

export default RecentEmails;
