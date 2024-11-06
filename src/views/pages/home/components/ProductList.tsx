import { FC } from 'react';
import { Grid, GridItem, Text } from "@chakra-ui/react"
import ProductItem from './ProductItem';

const ProductList: FC = () => {
  return (
    <>
      <Text textStyle="3xl" mb={4}>Our Guitar Collection</Text>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap="6"
      >
        <GridItem>
          <ProductItem />
        </GridItem>
        <GridItem>
          <ProductItem />
        </GridItem>
        <GridItem>
          <ProductItem />
        </GridItem>
        <GridItem>
          <ProductItem />
        </GridItem>
      </Grid>
    </>
  );
};

export default ProductList;