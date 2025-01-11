import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
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
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
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

  const inputFields = [
    {
      label: "Account Name",
      variant: "outlined",
      type: "text",
      placeholder: "Enter account name",
    },
    {
      label: "Email Address",
      variant: "outlined",
      type: "text",
      placeholder: "Enter email address",
    },
    {
      label: "Password (Optional)",
      variant: "outlined",
      type: "password",
      placeholder: "Enter password",
    },
    {
      label: "API key",
      variant: "outlined",
      type: "text",
      placeholder: "Enter API key",
    },
  ];

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
          wrap="nowrap"
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

        <Grid
          container
          spacing={3}
          sx={{
            marginTop: "30px",
            boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
            margin: "10px",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          <Grid item xs={12} md={6}>
            {inputFields.map((field, index) => (
              <Grid key={index} sx={{ marginBottom: "20px" }}>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "8px", fontWeight: "bold" }}
                >
                  {field.label}
                </Typography>
                <TextField
                  variant={field.variant}
                  type={field.type}
                  fullWidth
                  placeholder={field.placeholder}
                  InputProps={{
                    sx: {
                      height: "40px",
                      padding: "0",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      fontSize: "14px",
                    },
                  }}
                />
              </Grid>
            ))}

            <Grid sx = {{marginBottom: '20px'}}>
            <Button variant="contained" sx={{ backgroundColor: "blue", marginRight: '20px', textTransform: 'none'  }}> Save Configuration</Button>
              <Button variant="contained"  sx={{ backgroundColor: "white", color: 'gray', textTransform: 'none' }}>Test Connection</Button>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
            <Grid sx={{padding: '20px',  backgroundColor: "#f8f8f8"}}>
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
      </Grid>
    </Box>
  );
}
