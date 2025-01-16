import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Mail, Drafts, Inbox, Reply, Send, Timer } from "@mui/icons-material";

function StatsCards({emailStats}) {
console.log(emailStats)
  const stats = [
    { title: "Total Received", value: emailStats?.total || 0, icon: <Mail color="primary" /> },
    { title: "Read", value: emailStats?.read || 0, icon: <Drafts color="success" /> },
    { title: "Unread", value: emailStats?.unread || 0, icon: <Inbox color="error" /> },
    { title: "Sent", value: emailStats?.sent || 0, icon: <Send color="primary" /> },
    { title: "Replies", value: emailStats?.replied || 0, icon: <Reply color="primary" /> },
    { title: "Avg Response", value: emailStats?.averageResponse || "N/A", icon: <Timer color="error" /> },
  ];
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
