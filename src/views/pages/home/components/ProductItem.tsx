import { FC } from 'react';
import { Box, Card, Image } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import { Product } from '@/global/interfaces';

interface ProductItemProps {
  product?: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  console.log(product)
  return (
    <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
      <Image
        objectFit="cover"
        maxW="200px"
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">The perfect latte</Card.Title>
          <Card.Description>
            Caffè latte is a coffee beverage of Italian origin made with espresso
            and steamed milk.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button>Buy Latte</Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default ProductItem;