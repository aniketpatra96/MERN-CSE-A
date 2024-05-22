/* eslint-disable react/prop-types */
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import moment from "moment";
function Footer({ fixed = false }) {
  const footerStyle = {
    padding: "20px",
    marginTop: "auto",
    backgroundColor: "black",
    bottom: 0,
    position: fixed ? "fixed" : "relative",
    height: "6rem",
  };
  const year = moment().format("YYYY");
  return (
    <AppBar
      position="static"
      style={footerStyle}
    >
      <Toolbar>
        <Container maxWidth="md">
          <Typography
            variant="body1"
            color="inherit"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            &copy; {year} 21BCSE30 | ANIKET PATRA &nbsp;&nbsp;All rights
            reserved.
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
