import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Footer, Header } from './components';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" p={4} h="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;