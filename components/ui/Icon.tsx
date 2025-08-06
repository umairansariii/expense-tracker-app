import type { LucideProps } from 'lucide-react-native';
import { icons } from 'lucide-react-native';

type IconName = keyof typeof icons;

type IconProps = LucideProps & {
  name: IconName;
};

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon {...props} />;
};

export default Icon;
