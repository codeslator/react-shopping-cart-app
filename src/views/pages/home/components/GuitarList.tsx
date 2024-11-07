import { FC, useEffect } from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react"
import GuitarItem from './GuitarItem';
import { useGuitarStore } from '@/store';

const GuitarList: FC = () => {
  const getAll = useGuitarStore((state) => state.getAll);
  const guitars = useGuitarStore((state) => state.guitars);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <Text textStyle="3xl" mb={4}>Our Guitar Collection</Text>
      <Grid
        templateColumns={{
          'base': 'repeat(1, 1fr)',
          'lg': 'repeat(2, 1fr)',
          'xl': 'repeat(3, 1fr)',
          '2xl': 'repeat(4, 1fr)',
        }}
        gap="6"
      >
        {guitars.map((guitar) => (
          <GridItem key={guitar.id}>
            <GuitarItem guitar={guitar} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GuitarList;