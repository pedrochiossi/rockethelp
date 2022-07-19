import { HStack, Text, useTheme, Box, VStack, Circle, Pressable, IPressableProps } from 'native-base';
import { ClockAfternoon, CircleWavyCheck, Hourglass } from 'phosphor-react-native';

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed'
}

type Props = IPressableProps & {
  data: OrderProps;
}

export function Order({ data, ...rest } : Props) {

  const { colors } = useTheme();

  const colorsMap = {
    open: colors.secondary[700],
    closed: colors.green[300]
  };

  const statusIconMap = {
    open: <Hourglass size={24} color={colorsMap.open} />,
    closed: <CircleWavyCheck size={24} color={colorsMap.closed} />
  } 

  return (
    <Pressable { ...rest }>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={colorsMap[data.status]} />
        <VStack flex={1} my={5} ml={5}> 
          <Text color="white" fontSize="md">
            Patrimonio {data.patrimony}
          </Text>
          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1} >
              {data.when}
            </Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {statusIconMap[data.status]}
        </Circle> 
      </HStack>
    </Pressable>
  );
}