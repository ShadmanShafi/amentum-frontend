import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Table as ReactTable } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ServerType } from "@/typings/vpsApi";

interface PaginationProps {
  table: ReactTable<ServerType>;
}

export const Pagination = ({ table }: PaginationProps) => {
  const [pageInput, setPageInput] = useState<string>("");
  const pageCount = table.getPageCount();
  const currentPage = table.getState().pagination.pageIndex + 1;

  const handlePageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (
      /^\d*$/.test(value) &&
      (value === "" ||
        (parseInt(value, 10) >= 1 && parseInt(value, 10) <= pageCount))
    ) {
      setPageInput(value);
    }
  };

  const handlePageInputSubmit = () => {
    const pageNumber = parseInt(pageInput, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= pageCount) {
      table.setPageIndex(pageNumber - 1);
    }
    setPageInput("");
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        pages.push(
          <Button
            variant={currentPage === i ? "default" : "outline"}
            className={
              currentPage === i
                ? "text-white bg-customSidebarBg hover:bg-customSidebarBg"
                : ""
            }
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
          variant={currentPage === 1 ? "default" : "outline"}
          className={
            currentPage === 1
              ? "text-white bg-customSidebarBg hover:bg-customSidebarBg"
              : ""
          }
          size="sm"
          onClick={() => table.setPageIndex(0)}
        >
          1
        </Button>
      );

      pages.push(
        <Button
          variant={currentPage === 2 ? "default" : "outline"}
          className={
            currentPage === 2
              ? "text-white bg-customSidebarBg hover:bg-customSidebarBg"
              : ""
          }
          size="sm"
          onClick={() => table.setPageIndex(1)}
        >
          2
        </Button>
      );

      if (currentPage > 3) {
        pages.push(<span key="ellipsis1">...</span>);
      }

      pages.push(
        <Input
          type="text"
          value={pageInput}
          onChange={handlePageInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlePageInputSubmit();
            }
          }}
          borderColor="hsl(var(--customSidebarBg))"
          className={`${pageInput ? "bg-customSidebarBg text-white" : "text-customTextColor"} w-16 text-sm text-center border-customSidebarBg transition-colors`}
          placeholder="Enter"
        />
      );

      if (currentPage < pageCount - 2) {
        pages.push(<span key="ellipsis2">...</span>);
      }

      pages.push(
        <Button
          variant={currentPage === pageCount - 1 ? "default" : "outline"}
          className={
            currentPage === pageCount - 1
              ? "text-white bg-customSidebarBg hover:bg-customSidebarBg"
              : ""
          }
          size="sm"
          onClick={() => table.setPageIndex(pageCount - 2)}
        >
          {pageCount - 1}
        </Button>
      );

      pages.push(
        <Button
          variant={currentPage === pageCount ? "default" : "outline"}
          className={
            currentPage === pageCount
              ? "text-white bg-customSidebarBg hover:bg-customSidebarBg"
              : ""
          }
          size="sm"
          onClick={() => table.setPageIndex(pageCount - 1)}
        >
          {pageCount}
        </Button>
      );
    }

    return pages;
  };

  useEffect(() => {
    if (currentPage > 2 && currentPage < pageCount - 1) {
      setPageInput(currentPage.toString());
    } else {
      setPageInput("");
    }
  }, [currentPage, pageCount]);

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
