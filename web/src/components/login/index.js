import React from "react";
import { Box, Typography, Grid, IconButton, TextField } from "@mui/material";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";

export default function LoginPage() {
  const GridComponent = ({ icon: Icon, label, color }) => {
    return (
      <Grid
        item
        xs={6}
        sm={3}
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="nowrap"
        sx={{
          height: "100px",
         
          borderRadius: "5px",
          padding: "20px",
          margin: "10px",
          textAlign: "left",
          backgroundColor: "white",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton
          rel={label}
          sx={{
            padding: "0",
            color: color || "blue",
            fontSize: "40px",
          }}
        >
          <Icon />
        </IconButton>
        <Typography sx={{ marginTop: "10px", fontSize: "14px" }}>
          {label}
        </Typography>
      </Grid>
    );
  };

  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f8f8f8" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" align="left" sx={{ fontWeight: "bold" }}>
            Email Server Configuration
          </Typography>
          <Typography sx={{ padding: "10px 0" }}>
            Select your email provider and configure your account settings
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          spacing={2}
          wrap="nowrap"
          sx={{ padding: "20px" }}
        >
          <GridComponent
            icon={GridViewSharpIcon}
            label="Office 365"
            color="blue"
          />
          <GridComponent
            icon={GridViewSharpIcon}
            label="Outlook"
            color="blue"
          />
          <GridComponent icon={GoogleIcon} label="Gmail" color="red" />
          <GridComponent icon={EmailIcon} label="Other IMAP" color="gray" />
        </Grid>

        <Grid container spacing={3} sx={{ marginTop: "30px",  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", margin: '10px', backgroundColor: 'white' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ marginBottom: "15px" }}>
              Configure Email Settings
            </Typography>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="SMTP Server"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="IMAP Server"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              sx={{ marginBottom: "20px" }}
            />
          </Grid>

          <Grid item xs={12} md={6} sx={{padding: '20px'}}>
            <Typography variant="h6" sx={{ marginBottom: "15px" }}>
            How to get API key
            </Typography>
            <Typography sx={{ marginBottom: "15px" }}>
              1. Sign in to your email provider account
            </Typography>
            <Typography sx={{ marginBottom: "15px" }}>
              2. Go to Security settings
            </Typography>
            <Typography sx={{ marginBottom: "15px" }}>
              3. Enable 2-factor authentication if required
            </Typography>
            <Typography sx={{ marginBottom: "15px" }}>
             4. Generate an App password or API key
            </Typography>
            <Typography sx={{ marginBottom: "15px" }}>
             5. Copy and paste the key above
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
