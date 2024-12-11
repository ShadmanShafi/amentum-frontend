import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownAz,
  ArrowDownZA,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Table as ReactTable } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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

const Pagination = ({ table }: { table: ReactTable<(typeof rows)[0]> }) => {
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const maxPagesToShow = 5;
    const pages = [];

    if (pageCount <= maxPagesToShow) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            onClick={() => table.setPageIndex(i - 1)}
          >
            {i}
          </Button>
        );
      }
    } else {
      pages.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => table.setPageIndex(0)}
        >
          1
        </Button>
      );

      if (currentPage > 3) {
        pages.push(<span key="ellipsis1">...</span>);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(pageCount - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            onClick={() => table.setPageIndex(i - 1)}
          >
            {i}
          </Button>
        );
      }

      if (currentPage < pageCount - 2) {
        pages.push(<span key="ellipsis2">...</span>);
      }

      pages.push(
        <Button
          key={pageCount}
          variant={currentPage === pageCount ? "default" : "outline"}
          size="sm"
          onClick={() => table.setPageIndex(pageCount - 1)}
        >
          {pageCount}
        </Button>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ChevronLeft />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

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
          Total {table.getCoreRowModel().rows.length} rows
        </div>

        <Pagination table={table} />
      </div>
    </div>
  );
};

export default Vps;
