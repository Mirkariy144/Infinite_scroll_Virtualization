import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavButton = ({ button, nav }: { button: string; nav: string }) => {
  const navigate = useNavigate();
  const onButtonClick = (nav: string) => {
    navigate(nav);
  };
  return (
    <Button size="small" variant="outlined" onClick={() => onButtonClick(nav)}>
      {button}
    </Button>
  );
};
