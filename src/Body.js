import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify}></Header>

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt=""></img>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
          <FavoriteIcon fontSize="large"></FavoriteIcon>
          <MoreHorizIcon></MoreHorizIcon>
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track}></SongRow>
        ))}
        {/* List of Songs */}
      </div>
    </div>
  );
}

export default Body;
