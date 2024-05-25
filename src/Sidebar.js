import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="sidebar__logo"
      ></img>
      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusicIcon}
      ></SidebarOption>
      <br></br>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr></hr>
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          // Icon={playlist.items.images[0].url}
        ></SidebarOption>
      ))}
    </div>
  );
}

export default Sidebar;
