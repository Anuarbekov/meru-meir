import { useContext } from "react";
import { HeartbeatContext } from "./HeartbeatContext";

export const HeartCard = () => {
  const hearbeat = useContext(HeartbeatContext);

  return (
    <div className="card mr-3">
      <div className="card-header bg-primary text-white"></div>
      <div className="card-body">
        <div className="display-4 text-center">{hearbeat}</div>
      </div>
    </div>
  );
};
