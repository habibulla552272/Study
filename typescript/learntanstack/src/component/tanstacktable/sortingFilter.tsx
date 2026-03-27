'use client'
import React, { useState } from "react";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

type Person = {
  id: number;
  name: string;
  age: number;
};

const defaultData: Person[] = [
  { id: 1, name: "Habibulla", age: 23 },
  { id: 2, name: "Sakib", age: 28 },
  { id: 3, name: "Tamim", age: 30 },
];

const columnHelper = createColumnHelper<Person>();
const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.getValue(),
  }),
];

const SortingFilter = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: defaultData,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4">
      {/* Filter box */}
      <input
        placeholder="Search name..."
        onChange={(e) =>
          table.getColumn("name")?.setFilterValue(e.target.value)
        }
        className="border p-1 mb-2"
      />

      <table border={1} cellPadding={5} style={{ borderCollapse: "collapse" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{ cursor: "pointer" }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: " 🔼",
                    desc: " 🔽",
                  }[header.column.getIsSorted() as string] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortingFilter;
