import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from './style';

export const ToggleSwitch = ({ onClick }: any) => {
  return (
    <>
      <Button>
        <FaMoon />
        <input type="checkbox" onClick={onClick} />
        <span />
        <FaSun />
      </Button>
    </>
  );
};
