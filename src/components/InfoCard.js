import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
const InfoCard = ({ text, level }) => {
  return (
    <Card sx={{ maxWidth: 1000, marginTop: 3, marginLeft: 4, marginRight: 4 }}>
      <CardContent>
        <Divider
          sx={{
            marginTop: 1,
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Твой уровень: {level}
        </Divider>
        <Typography
          variant="body2"
          sx={{
            fontSize: 16,
            marginTop: 2,
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default InfoCard;
