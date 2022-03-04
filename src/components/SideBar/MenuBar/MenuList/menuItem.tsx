import React, { ElementType } from 'react';
import { Link } from 'react-router-dom';
import { WrapperLink } from './style';

interface MenuListProps {
  Icon: ElementType;
  path: string;
  title: string;
}

export function MenuItem({ Icon, title, path }: MenuListProps): JSX.Element {
  return (
    <WrapperLink>
      <Link to={path}>
        <Icon size={22} />
        <span>{title}</span>
      </Link>
    </WrapperLink>
  );
}
