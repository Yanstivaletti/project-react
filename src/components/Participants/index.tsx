import React from 'react';
import { WrapperReadme } from './style';

const Participants: React.FC = () => {
  return (
    <WrapperReadme>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/82842303?s=400&u=f6315587dda89105ec25cd7f9fa5eeeae517a390&v=4"
          alt="João Lima"
        />
        <img
          src="https://avatars.githubusercontent.com/u/78707603?v=4"
          alt="Allan Quiterio"
        />
        <img
          src="https://avatars.githubusercontent.com/u/57848392?v=4"
          alt="Yan Stivaletti"
        />
      </div>
    </WrapperReadme>
  );
};

export default Participants;
