import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster'
import { Footer, Header } from './components';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" p={4} h="100%">
        <Toaster />
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;