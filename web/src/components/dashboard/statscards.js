import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Mail, Drafts, Inbox, Reply, Send, Timer } from "@mui/icons-material";

const stats = [
  { title: "Total Received", value: 1234, icon: <Mail color="primary" /> },
  { title: "Read", value: 987, icon: <Drafts color="success" /> },
  { title: "Unread", value: 247, icon: <Inbox color="error" /> },
  { title: "Sent", value: 856, icon: <Send color="primary" /> },
  { title: "Replies", value: 543, icon: <Reply color="primary" /> },
  { title: "Avg Response", value: "2.5h", icon: <Timer color="error" /> },
];

function StatsCards() {
  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={2} key={index}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle1">{stat.title}</Typography>
              <Typography variant="h6" fontWeight="bold">
                {stat.value}
              </Typography>
            </Box>
            {stat.icon}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatsCards;
