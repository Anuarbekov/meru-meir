import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { HeartbeatContext } from "./HeartbeatContext";
import { HeartCard } from "./HeartCard";
import { useInterval } from "./useInterval";
import { useState } from "react";

const FinishCard = () => {
  const [hearbeat, setHearbeat] = useState(0);

  useInterval(() => {
    setHearbeat(hearbeat + 1);
  }, 1000);
  return (
    <>
      <Card
        sx={{ maxWidth: 1000, marginTop: 5, marginLeft: 4, marginRight: 4 }}
      >
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              fontSize: 20,
              margin: 5,
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            Ты прошла игру, умничка моя, горжусь тобой ! В конце было чуть-чуть
            сложно да :) Эта мини игра была сделана{" "}
            <span className="final-description-meru">менің ботама</span> с
            любовью и с частичкой моей души ❤️ Снизу указаны секунды; с каждой
            секундой люблю тебя все больше и больше жанм ❤️
          </Typography>
        </CardContent>
      </Card>
      <HeartbeatContext.Provider value={hearbeat}>
        <div className="d-flex flex-row" style={{ marginTop: 15 }}>
          <HeartCard />
        </div>
      </HeartbeatContext.Provider>
    </>
  );
};
export default FinishCard;
