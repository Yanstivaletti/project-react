import { WrapperHeader } from './style';
import { HeaderProps } from './types';

export const Header = ({
  MyIcon,
  title,
  subtitle,
}: HeaderProps): JSX.Element => {
  return (
    <WrapperHeader>
      <div>
        <MyIcon size={24} />
        <h1>{title}</h1>
      </div>

      <div>
        <h2>{subtitle}</h2>
      </div>
    </WrapperHeader>
  );
};
