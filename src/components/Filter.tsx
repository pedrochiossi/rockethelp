import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
}

export function Filter({ title, isActive = false, type, ...rest } : Props) {

  const { colors } = useTheme();
  const colorsMap = {
    open: colors.secondary[700],
    closed: colors.green[300]
  };

  return (
    <Button
      flex={1}
      size="sm" 
      variant="outline" 
      borderWidth={isActive ? 1 : 0} 
      borderColor={colorsMap[type]}
      bg="gray.600"
      { ...rest }
    >
      <Text color={ isActive ? colorsMap[type] : 'gray.300'} fontSize="xs" textTransform="uppercase">
        {title} 
      </Text>
    </Button>
  );
}