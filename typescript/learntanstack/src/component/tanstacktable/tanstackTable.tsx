'use client'
import React from "react";
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { motion } from "framer-motion";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

// Sample data
const defaultData: Person[] = [
  { firstName: "Alice", lastName: "Smith", age: 24 },
  { firstName: "Bob", lastName: "Johnson", age: 30 },
  { firstName: "Charlie", lastName: "Brown", age: 28 },
];

// Column definitions
const columnHelper = createColumnHelper<Person>();
const columns = [
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: info => info.getValue(),
  }),
];

const TableComponent = () => {
  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full p-6 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="min-w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="text-center py-3 border-r-2 border-black last:border-r-0 px-6 uppercase tracking-wider"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-100 border-b"
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="py-4 text-center border-r-2 last:border-r-0 px-6">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default TableComponent;
