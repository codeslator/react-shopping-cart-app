import { FC, ReactNode } from 'react';
import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';

interface FeatureItemProps {
  text: string;
  icon: ReactNode;
  bgColor: string;
  iconColor: string;
}

const FeatureItem: FC<FeatureItemProps> = ({ text, icon, bgColor, iconColor }) => {
  return (
    <HStack width="100%">
      <Box>
        <Flex w={8} h={8} align="center" justify="center" borderRadius="sm" bg={bgColor}>
          <Icon color={iconColor}>
            {icon}
          </Icon>
        </Flex>
      </Box>
      <Text truncate fontSize={{ base: 'sm', md: 'md' }} fontWeight={600}>{text}</Text>
    </HStack>
  );
};

export default FeatureItem;