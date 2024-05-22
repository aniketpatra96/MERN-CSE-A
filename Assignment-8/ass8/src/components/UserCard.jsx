import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function UserCard({ user }) {
  const { image, firstName, lastName, phone, email, address } = user;
  return (
    <Card sx={{ maxWidth: 385, maxHeight: 700 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30%"
          image={image}
          alt={firstName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName + " " + lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone No :- {phone}
            <br /> Email Id :-{email}
            <br />
            Address :- {address.address} <br />
            City :- {address.city} <br />
            State :- {address.state} <br />
            Postal Code :- {address.postalCode} <br />
            Coordinates :- <br />
            Latitude({address?.coordinates?.lat}), Longitude (
            {address?.coordinates?.lng})
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      address: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postalCode: PropTypes.string,
      coordinates: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
