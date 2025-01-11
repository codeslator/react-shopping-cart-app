import { FC } from 'react';
import { Button, Card, Heading, HStack, Text, Separator, Box, Table } from '@chakra-ui/react';

const OrderDetailsCard: FC = () => {
  return (
    <Card.Root size="md" width="100%">
      <Card.Header>
        <Heading size="lg">Order Details</Heading>
      </Card.Header>
      <Card.Body>
        <HStack justifyContent="space-between" mb={4}>
          <Box>
            <Text as="p">
              Order no.{' '}
              <Text as="span" color="teal" fontWeight="bold">241342</Text>
              {' from '}
              <Text as="span" color="teal" fontWeight="bold">01.01.2025</Text>
            </Text>
            <Text as="p">Code: <Text as="span" fontWeight="bold">KF332</Text></Text>
          </Box>
          <Button variant="outline" colorPalette="teal">Invoice</Button>
        </HStack>
        <Separator />
        <Table.Root size="md" colorPalette="transparent">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>AAA</Table.Cell>
              <Table.Cell>Guitar</Table.Cell>
              <Table.Cell textAlign="end">1</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Card.Body>
    </Card.Root>
  );
};

export default OrderDetailsCard;