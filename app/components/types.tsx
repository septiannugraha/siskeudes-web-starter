// types.ts
export interface DataItem {
  id: number;
  name: string;
  email: string;
  age: number;
}

export interface DataTableProps {
  data: DataItem[];
}