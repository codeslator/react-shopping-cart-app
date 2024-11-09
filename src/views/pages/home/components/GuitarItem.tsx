import { FC } from 'react';
import { Box, Card, Image, Text } from '@chakra-ui/react'
import { toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { Guitar } from '@/global/interfaces';
import { useCartStore } from '@/store';

interface GuitarItemProps {
  guitar: Guitar;
}

const GuitarItem: FC<GuitarItemProps> = ({ guitar }) => {
  const { image, name, description, price } = guitar;
  const add = useCartStore((state) => state.add);

  const addToCart = () => {
    add(guitar);
    toaster.create({
      title: `Guitar ${name} added to cart successfully.`,
      type: 'success'
    });
  };

  return (
    <Card.Root flexDirection="row" overflow="hidden">
      <Image
        objectFit="contain"
        maxW="150px"
        src={image}
        alt={name}
      />
      <Box>
        <Card.Body>
          <Card.Title mb="2">Guitar {name}</Card.Title>
          <Card.Description as="div">
            {description}
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              ${price}
            </Text>
          </Card.Description>
        </Card.Body>
        <Card.Footer position="absolute" bottom={0}>
          <Button
            size="sm"
            variant="outline"
            colorPalette="blue"
          >
            Details
          </Button>
          <Button
            size="sm"
            variant="outline"
            colorPalette="green"
            onClick={addToCart}
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default GuitarItem;