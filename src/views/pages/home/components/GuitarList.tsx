import { FC } from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react"
import GuitarItem from './GuitarItem';

const GuitarList: FC = () => {
  return (
    <>
      <Text textStyle="3xl" mb={4}>Our Guitar Collection</Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="6"
      >
        <GridItem>
          <GuitarItem />
        </GridItem>
        <GridItem>
          <GuitarItem />
        </GridItem>
        <GridItem>
          <GuitarItem />
        </GridItem>
        <GridItem>
          <GuitarItem />
        </GridItem>
      </Grid>
    </>
  );
};

export default GuitarList;