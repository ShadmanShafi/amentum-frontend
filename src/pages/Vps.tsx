import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowUp, ArrowUpDown } from "lucide-react";

const servers = [
  {
    key: "1",
    name: "Mitarbeiter-Server",
    displayName: "Mitarbeiter",
    productType: "VPS 4 SSD",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "62.84.123.456",
    region: "EU",
  },
  {
    key: "2",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Pause",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "3",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Stopped",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
  {
    key: "4",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "5",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Running",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
  {
    key: "6",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "7",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Running",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
  {
    key: "8",
    name: "Mitarbeiter-Server",
    displayName: "Mitarbeiter",
    productType: "VPS 4 SSD",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "62.84.123.456",
    region: "EU",
  },
  {
    key: "9",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Pause",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "10",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Stopped",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
  {
    key: "11",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "12",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Running",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
  {
    key: "13",
    name: "Mitarbeiter-Server 2",
    displayName: "Mitarbeiter 2",
    productType: "VPS 2 SSD (ohne Setup)",
    defaultUser: "Admin",
    status: "Running",
    ipAddress: "213.166.15.98",
    region: "EU",
  },
  {
    key: "14",
    name: "Mitarbeiter-Server 3",
    displayName: "Mitarbeiter 3",
    productType: "VPS 0 SSD",
    defaultUser: "Root",
    status: "Running",
    ipAddress: "84.247.188.24",
    region: "EU",
  },
];

const columns: ColumnDef<(typeof servers)[0]>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "displayName",
    header: "Display Name",
  },
  {
    accessorKey: "productType",
    header: "Product Type",
  },
  {
    accessorKey: "defaultUser",
    header: "Default User",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "ipAddress",
    header: "IP Address",
  },
  {
    accessorKey: "region",
    header: "Region",
  },
];

const Vps = () => {
  const navigate = useNavigate();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const handleRowClick = (id: string) => {
    navigate(`/server-management/servers/vps/${id}`);
  };

  const table = useReactTable({
    data: servers,
    columns,
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

      <Separator className="mt-8 mb-4" />

      <Table className="border">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-5 py-2 text-base font-semibold border cursor-pointer select-none text-customTableHeaderColor bg-customTableHeaderBg"
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
                        asc: <ArrowUp className="w-4 h-4 ml-2" />,
                        desc: <ArrowUpDown className="w-4 h-4 ml-2" />,
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
              className="text-xs cursor-pointer hover:bg-customTableRowHoverBg"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="px-5 py-4 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getRowModel().rows.length} of{" "}
          {table.getCoreRowModel().rows.length} rows
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Vps;
