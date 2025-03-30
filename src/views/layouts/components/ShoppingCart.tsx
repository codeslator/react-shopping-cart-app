import { FC, Fragment } from 'react';
import { IconButton, HStack, Box, Text, Image, Group, Separator, Link, Float } from '@chakra-ui/react';
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
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { StatLabel, StatRoot, StatValueText } from '@/components/ui/stat';
import { Badge } from "@chakra-ui/react"
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { LuShoppingCart } from 'react-icons/lu';
import { ROUTES } from '@/global';
import { useCart } from '@/hooks';

const ShoppingCart: FC = () => {
  const { cart, remove, removeAll, increment, decrement, isEmpty, total, count } = useCart();

  return (
    <DrawerRoot placement="end" size="lg">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton
          size="md"
          aria-label="Open Menu"
          variant="outline"
          colorPalette="teal"
          mr={4}
        >
          <MdAddShoppingCart />
          {!isEmpty && (
            <Float placement="top-end" offsetX="1" offsetY="1">
              <Badge variant="surface">{count}</Badge>
            </Float>
          )}
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
              <Button variant="outline" colorPalette="teal" asChild>
                <Link href={ROUTES.CHECKOUT}>Purchase</Link>
              </Button>
              <DialogRoot placement="center">
                <DialogTrigger asChild>
                  <Button variant="outline" colorPalette="red">Remove All</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Remove all products?</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    <p>
                      Are you sure that you want to remove all guitars? This action can't be undone. Click "Yes" to confirm.
                    </p>
                  </DialogBody>
                  <DialogFooter>
                    <DialogActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogActionTrigger>
                    <Button variant="outline" colorPalette="red" onClick={removeAll}>Yes</Button>
                  </DialogFooter>
                  <DialogCloseTrigger />
                </DialogContent>
              </DialogRoot>
            </>
          )}
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ShoppingCart;