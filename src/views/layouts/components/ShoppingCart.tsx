import { FC, Fragment, useMemo } from 'react';
import { IconButton, HStack, Box, Text, Image, Group, Separator } from '@chakra-ui/react';
import { MdAdd, MdAddShoppingCart, MdRemove, MdDelete } from "react-icons/md";
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
import { StatLabel, StatRoot, StatValueText } from '@/components/ui/stat';
import { useCartStore } from '@/store';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { LuShoppingCart } from 'react-icons/lu';

const ShoppingCart: FC = () => {
  const cart = useCartStore((state) => state.cart);
  const remove = useCartStore((state) => state.remove);
  const removeAll = useCartStore((state) => state.removeAll);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const total = useMemo(() => cart.reduce((acc: number, currentGuitar) => acc + (currentGuitar.price * currentGuitar.quantity), 0), [cart]);

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
          {(!isEmpty) ? (
            <>
              {cart.map(({ id, name, quantity, image, price }) => (
                <Fragment key={id}>
                  <HStack justify="space-between">
                    <Image
                      height="64px"
                      src={image}
                      alt={name}
                      border="solid 1px #27272a"
                      rounded="md"
                      w="84px"
                      fit="contain"
                    />
                    <Box w="100%" px={2}>
                      <Text textStyle="lg">Guitar {name}</Text>
                      <Text>${price}</Text>
                    </Box>
                    <Group attached>
                      <IconButton
                        variant="outline"
                        colorPalette="green"
                        size="sm"
                        onClick={() => decrement(id)}
                      >
                        <MdRemove />
                      </IconButton>
                      <Button variant="outline" colorPalette="green" size="sm">
                        {quantity}
                      </Button>
                      <IconButton
                        variant="outline"
                        colorPalette="green"
                        size="sm"
                        onClick={() => increment(id)}
                      >
                        <MdAdd />
                      </IconButton>
                    </Group>
                    <IconButton
                      variant="outline"
                      colorPalette="red"
                      size="sm"
                      onClick={() => remove(id)}
                    >
                      <MdDelete />
                    </IconButton>
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
        <DrawerFooter display="flex" direction="row" alignItems="flex-end">
          <StatRoot size="sm">
            <StatLabel>Total</StatLabel>
            <StatValueText
              value={total}
              formatOptions={{ style: "currency", currency: "USD" }}
            />
          </StatRoot>
          {(!isEmpty) && (
            <>
              <Button variant="outline" colorPalette="green">Purchase</Button>
              <Button variant="outline" colorPalette="red" onClick={removeAll}>Remove All</Button>
            </>
          )}
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ShoppingCart;