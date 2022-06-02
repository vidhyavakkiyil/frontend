import React from "react";
import {
  FlexBox,
  FlexBoxDirection,
  Label,
  Table,
  TableCell,
  TableColumn,
  TableRow,
  Text,
} from "@ui5/webcomponents-react";
import ProductCollection from "./products.json";

const CustomProductsTable = () => {
  console.log("ProductCollection::", ProductCollection);
  return (
    <Table
      stickyColumnHeader
      columns={[
        <TableColumn>Product</TableColumn>,
        <TableColumn>Supplier</TableColumn>,
        <TableColumn>Dimensions</TableColumn>,
        <TableColumn>Price</TableColumn>,
      ]}
    >
      {ProductCollection.ProductCollection.map((product) => {
        return (
          <TableRow key={product.ProductId}>
            <TableCell>
              <FlexBox direction={FlexBoxDirection.Column}>
                <Text>{product.Name}</Text>
                <Label>{product.ProductId}</Label>
              </FlexBox>
            </TableCell>
            <TableCell>
              <Label>{product.SupplierName}</Label>
            </TableCell>
            <TableCell>
              <Label>
                {product.Width} x {product.Depth} x {product.Height} cm
              </Label>
            </TableCell>
            <TableCell>
              <Label>{product.Price} EUR</Label>
            </TableCell>
          </TableRow>
        );
      })}
    </Table>
  );
};

export default CustomProductsTable;
