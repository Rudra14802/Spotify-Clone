import React from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="data:image/jpeg;base64,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"
          alt=""
        ></img>
        <div className="footer__songInfo">
          <h4>7 Years</h4>
          <p>Lukas Grahman</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          className="footer__icon"
          fontSize="large"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon"></SkipNextIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
