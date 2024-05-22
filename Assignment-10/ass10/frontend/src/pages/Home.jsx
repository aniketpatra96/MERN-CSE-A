import { useAuth } from "../contexts/AuthContext";
import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useOnlineStatus } from "../hooks/OnlineStatus";
/* eslint-disable react/no-unknown-property */

const Home = () => {
  const authContext = useAuth();
  const isOnline = useOnlineStatus();
  const { user, isLoggedIn } = authContext;
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleLoad = () => {
    setOpen(true);
    isOnline ? setSuccess(true) : setSuccess(false);
  };
  useEffect(() => {
    handleLoad();
  }, [isOnline]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10rem",
        flexWrap: "wrap",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={success ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {success
            ? "Online"
            : "You are Offline!! Please Connect to Internet!!"}
        </Alert>
      </Snackbar>
      <marquee behavior="alternate" direction="" loop scrolldelay="10">
        {isLoggedIn ? (
          <h1>Welcome {user.name}!</h1>
        ) : (
          <h1> Assignment 10 Homepage </h1>
        )}
      </marquee>
    </div>
  );
};

export default Home;
