interface Field {
  label?: string;
  isVisible: boolean;
}

export type FieldsHeader = {
  [fieldName: string]: Field;
};

export type Item = {
  id: string | number;
  [fieldName: string]: any;
};

export interface TableCellsProps {
  columns: FieldsHeader;
  item: Item;
}

export interface TableRowsProps {
  fields: FieldsHeader;
  items: Array<Item>;
}

export interface TableHeaderProps {
  fields: FieldsHeader;
}
