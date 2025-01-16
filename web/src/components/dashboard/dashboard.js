import React, {useState, useEffect} from "react";
import { Box, Typography, Select, MenuItem, Grid } from "@mui/material";
import StatsCards from "./statscards";
import RecentEmails from "./recent-emails";
import { getEmailStats } from "../../utils/helpers/api";

function Dashboard() {
  const [emailStats, setEmailStats] = useState({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await getEmailStats();
        setEmailStats(stats);
      } catch (error) {
        console.error(error);
      }
    }

    fetchStats();
    },[])
  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: "#f9f9f9" }}>
      <Grid 
        item container flexDirection="row"
        justifyContent="space-between"
         alignItems="center"
         flexWrap= "nowrap"
        mb={4}
      >
        <Grid item container flexDirection="column" sx={{ mr: 4 }}>
        <Typography variant="h5" fontWeight="bold">
          Email Monitoring Dashboard
        </Typography>
        <Typography variant="body" >
          Welcome back, Admin
        </Typography>
        </Grid>
        <Grid item container justifyContent="flex-end" sx={{ gap: 2, flexWrap: "nowrap" }}>
          <Select defaultValue="24Hours" sx={{ mr: 2 }}>
            <MenuItem value="24Hours">Last 24 Hours</MenuItem>
            <MenuItem value="7Days">Last 7 Days</MenuItem>
          </Select>
          <Select defaultValue="allAccounts">
            <MenuItem value="allAccounts">All Accounts</MenuItem>
            <MenuItem value="support">support@company.com</MenuItem>
            <MenuItem value="info">info@company.com</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <StatsCards emailStats={emailStats} />
      <RecentEmails />
    </Box>
  );
}

export default Dashboard;
