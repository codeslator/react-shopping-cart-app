import { FC } from 'react';
import { Box, Card, Stack, Image, Text } from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster'
import { Button } from '@/components/ui/button'
import { Guitar } from '@/global/interfaces';
import { useCart } from '@/hooks';
import { Rating } from '@/components/ui/rating';

interface GuitarItemProps {
  guitar: Guitar;
}

const GuitarItem: FC<GuitarItemProps> = ({ guitar }) => {
  const { image, name, description, price } = guitar;
  const { add, rating } = useCart();

  const addToCart = () => {
    add(guitar);
    toaster.create({
      title: `Guitar ${name} added to cart.`,
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
          <Rating readOnly defaultValue={rating} mt={4} colorPalette="orange" />
        </Card.Body>
        <Card.Footer>
          <Stack direction={{ base: "column", md: "row" }}>
            <Button
              size="sm"
              variant="outline"
              colorPalette="teal"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </Stack>
        </Card.Footer>
      </Box>
    </Card.Root>
  );
};

export default GuitarItem;