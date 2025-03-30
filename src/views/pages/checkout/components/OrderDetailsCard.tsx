import { FC } from 'react';
import { Button, Card, Heading, HStack, Text, Separator, Box, Table } from '@chakra-ui/react';
import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";

import { useCart } from '@/hooks';

const OrderDetailsCard: FC = () => {
  const { cart, total } = useCart();

  return (
    <Card.Root size="md" width="100%">
      <Card.Header>
        <Heading size="lg">Order Details</Heading>
      </Card.Header>
      <Card.Body gap={6}>
        <HStack justifyContent="space-between">
          <Box>
            <Text as="p">
              Order no.{' '}
              <Text as="span" color="teal" fontWeight="bold">241342</Text>
              {' from '}
              <Text as="span" color="teal" fontWeight="bold">01.01.2025</Text>
            </Text>
            <Text as="p">Code: <Text as="span" fontWeight="bold">K1234</Text></Text>
          </Box>
          <Button variant="outline" colorPalette="teal">Invoice</Button>
        </HStack>
        <Separator />
        <Table.Root size="md" colorPalette="blue">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Quantity</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cart.map(({ id, name, price, quantity }) => (
              <Table.Row key={id}>
                <Table.Cell>Guitar {name}</Table.Cell>
                <Table.Cell>{quantity}</Table.Cell>
                <Table.Cell textAlign="end">${price * quantity}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <StatRoot>
          <StatLabel>Total</StatLabel>
          <StatValueText
            value={total}
            formatOptions={{ style: "currency", currency: "USD" }}
          />
        </StatRoot>
        <Button size="md" colorPalette="teal" width="100%">Pay now</Button>
      </Card.Body>
    </Card.Root>
  );
};

export default OrderDetailsCard;