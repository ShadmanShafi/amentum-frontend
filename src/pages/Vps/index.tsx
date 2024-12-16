import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowDownAz, ArrowDownZA } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

import { columns, rows } from "./constants";
import { Pagination } from "./components/Pagination";

const Vps = () => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const handleRowClick = (id: string) => {
    navigate(`/server-management/servers/vps/${id}`);
  };

  const table = useReactTable({
    data: rows,
    columns: columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="py-6 px-14">
      <h1 className="text-3xl font-semibold tracking-tight scroll-m-20 text-customTextColor">
        Servers & Hosting
      </h1>

      <Separator className="mt-6 mb-4" />

      <Table className="border">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-2 py-1 text-sm font-semibold border cursor-pointer select-none sm:text-base sm:px-5 sm:py-2 text-customTableHeaderColor bg-customTableHeaderBg"
                >
                  <div className="flex items-center">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getIsSorted() &&
                      {
                        asc: <ArrowDownAz className="w-4 h-4 ml-2" />,
                        desc: <ArrowDownZA className="w-4 h-4 ml-2" />,
                      }[header.column.getIsSorted() as "asc" | "desc"]}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => handleRowClick(row.original.key)}
              className="text-xs cursor-pointer hover:bg-customTableRowHoverBg text-customTextColor"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="px-2 py-1 border sm:px-5 sm:py-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-col-reverse items-center justify-between gap-4 py-4 space-y-2 sm:flex-row sm:space-y-0">
        <div className="text-sm text-customTextColorSecondary">
          {`Showing ${table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to ${Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getCoreRowModel().rows.length)}, out of ${table.getCoreRowModel().rows.length} entires`}
        </div>

        <Pagination table={table} />
      </div>
    </div>
  );
};

export default Vps;
