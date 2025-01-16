import React from "react";
import { Grid, Box, Typography, Button, List, ListItem, ListItemText, Divider, IconButton } from "@mui/material";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import EmailIcon from "@mui/icons-material/Email";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function Sidebar() {
  const emailAccounts = ["support@company.com", "info@company.com"];
  return (
    <Box
      sx={{
        width: 350,
        bgcolor: "#ffffff",
        boxShadow: 1,
        display: "flex",
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Grid item container  >
        <IconButton rel="EmailMonitor">
          <MarkEmailReadIcon color="primary" />
        </IconButton>
      <Typography variant="h5" fontWeight="bold" sx={{padding: '10px'}} >
        EmailMonitor
      </Typography>
      <Typography variant="body" fontWeight="bold" sx={{padding: '10px'}} >
        EMAIL ACCOUNTS
      </Typography>
      </Grid>
      <Button variant="contained" justifyContent="space-between" fullWidth sx={{ mb: 2 , justifyContent: "space-between", backgroundColor: "#e5f0fa", color:"blue", boxShadow: 'none'}}>
        Add New Account
        <IconButton rel="AddIcon">
          <AddIcon color="primary" />
        </IconButton>
      </Button>

      <Divider />
      <List>
      {emailAccounts.map((email, index) => (
        <ListItem
          key={index}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            margin:"10px 0 "
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 1, color: "primary.main" }} />
            <ListItemText primary={email} />
          </Box>
          <IconButton aria-label="delete" sx ={{padding: '0'}}>
            <DeleteIcon color="error" />
          </IconButton>
        </ListItem>
      ))}
    </List>
    </Box>
  );
}

export default Sidebar;
