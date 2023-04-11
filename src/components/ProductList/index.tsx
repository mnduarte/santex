import { Product } from "../../types";
import { Container, Row, Column } from "./styles";

interface ColumnProps {
  title: string;
  field?: string;
  render?: (rowData: Product) => JSX.Element;
}


interface ProductListProps {
  columns: ColumnProps[];
  data: Product[];
  action: (productId: number, quantity?: number) => void;
}


export const ProductList = ({ columns, data, action }: ProductListProps) => {
  return (
    <Container>
      <Row isTitle>
        {columns.map((column: any) => (
          <Column key={column.title}>{column.title}</Column>
        ))}
      </Row>

      {data.map((row: any) => (
        <Row key={row.id}>
          {columns.map((column: any) => (
            <Column key={column.title}>
              {column.render
                ? column.render({ ...row, fn: action })
                : row[column.field]}
            </Column>
          ))}
        </Row>
      ))}
    </Container>
  );
};
