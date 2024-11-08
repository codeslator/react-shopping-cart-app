import { FC, Fragment } from 'react';
import { IconButton, HStack, Box, Text, Image, Group, Separator } from '@chakra-ui/react';
import { MdAdd, MdAddShoppingCart, MdRemove } from "react-icons/md";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useCartStore } from '@/store';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { LuShoppingCart } from 'react-icons/lu';

const ShoppingCart: FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeAll = useCartStore((state) => state.removeAll);

  return (
    <DrawerRoot placement="end" size="lg">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          size="md"
          aria-label="Open Menu"
          variant="outline"
          colorPalette="green"
          mr={4}
        >
          <MdAddShoppingCart />
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>
        <DrawerBody as="nav">
          {(cart.length > 0) ? (
            <>
              {cart.map(({ id, name, quantity, image, price }) => (
                <Fragment key={id}>
                  <HStack justify="space-between">
                    <Image
                      height="64px"
                      src={image}
                      alt={name}
                      border="solid 1px #86efac"
                      rounded="md"
                      w="84px"
                      fit="contain"
                    />
                    <Box w="100%" px={2}>
                      <Text textStyle="lg">{name}</Text>
                      <Text>${price}</Text>
                    </Box>
                    <Group attached>
                      <IconButton variant="outline" colorPalette="green" size="sm">
                        <MdRemove />
                      </IconButton>
                      <Button variant="outline" colorPalette="green" size="sm">
                        {quantity}
                      </Button>
                      <IconButton variant="outline" colorPalette="green" size="sm">
                        <MdAdd />
                      </IconButton>
                    </Group>
                  </HStack>
                  <Separator my={2} />
                </Fragment>
              ))}
            </>
          ) : (
            <EmptyState
              icon={<LuShoppingCart />}
              title="Your cart is empty"
              description="Explore our products and add items to your cart"
            />
          )}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" colorPalette="red" onClick={removeAll}>Remove All</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ShoppingCart;