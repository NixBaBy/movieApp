"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";

export const Paginat = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const value = searchParams.get("searchvalue");

  const goToPage = (pagenum: number) => {
    router.push(`?${value ? "searchvalue=" + value + "&" : ""}page=${pagenum}`);
  };

  return (
    <div className="mt-[32px]">
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => goToPage(currentPage - 1)}
              />
            </PaginationItem>
          )}

          {currentPage > 1 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => goToPage(currentPage - 1)}
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {currentPage < totalPages && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => goToPage(currentPage + 1)}
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}
          {currentPage == 1 && (
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => goToPage(currentPage + 2)}
              >
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => goToPage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
