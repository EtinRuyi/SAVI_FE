import React from "react";
import HomeIcon from "../../assets/HomeIcon.svg";
import GroupIcon from "../../assets/GroupIcon.svg";
import UsersIcon from "../../assets/UsersIcon.svg";
import DefaultUsersIcon from "../../assets/DefaultUsersIcon.svg";
import ComplaintsIcon from "../../assets/ComplaintsIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg"
import styled from 'styled-components';


const GreyBackgroundIcon = styled.img`
  background-color: grey;
`;


export const SidebarData = [
  {
    title: "Dashboard",
    icon: <GreyBackgroundIcon src={HomeIcon} alt="homeIcon" className="house" />,
    link: "/dashboard",
  },
  {
    title: "Groups",
    icon: <img src={GroupIcon} alt="groupIcon" />,
    link: "/groups",
  },
  {
    title: "Users",
    icon: <img src={UsersIcon} alt="usersIcon" />,
    link: "/users",
  },
  {
    title: "Defaulting Users",
    icon: <img src={DefaultUsersIcon} alt="defaultUser" />,
    link: "/defaulting-users",
  },
  {
    title: "Complaints",
    icon: <img src={ComplaintsIcon} alt="complaintIcon" />,
    link: "/complaints",
  },
  {
    title: "Settings",
    icon: <img src={SettingsIcon} alt="SettingsIcon" />,
    link: "/complaints",
  },
  {
    title: "Logout",
    icon: <img src={LogoutIcon} alt="logoutIcon" />,
    link: "/complaints",
  },
];
