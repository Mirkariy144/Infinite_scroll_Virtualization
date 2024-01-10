import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavButton = ({ button, nav }: { button: string; nav: string }) => {
  const navigate = useNavigate();
  const onButtonClick = (nav: string) => {
    navigate(nav);
  };
  return <button onClick={() => onButtonClick(nav)}>{button}</button>;
};
