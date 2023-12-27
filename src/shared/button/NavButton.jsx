import React from "react";
import { useNavigate } from "react-router-dom";

export const NavButton = ({button, nav}) => {
  const navigate = useNavigate()
  const onButtonClick = (nav) => {
    navigate(nav)
  }
  return <button onClick={() => onButtonClick(nav)}>{button}</button>
}