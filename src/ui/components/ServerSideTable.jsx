import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useState, useEffect } from "react";
import useFetch from "../../hook/useFetch";

// eslint-disable-next-line react/prop-types
const ServerSideTable = ({ data, columns, baseUrl }) => {
    const [fetchUrl, setfetchUrl] = useState(baseUrl);

    const {
        data: fetchedData,
        fetchDataByUrl,
        isLoading,
        pagination,
        error,
        setPagination,
    } = useFetch(fetchUrl);

    const table = useReactTable({
        data: fetchedData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    useEffect(() => {
        fetchDataByUrl(fetchUrl);
    }, [fetchDataByUrl, fetchUrl]);

    const handlePageChange = (page) => {
        setPagination((prev) => ({ ...prev, page }));
        const newUrl = new URL(fetchUrl);
    };

    const handlePageSizeChange = (pageSize) => {
        setPagination((prev) => ({ ...prev, limit: pageSize }));
    };

    const handleNextPage = () => {
        setPagination((prev) => ({ ...prev, page: prev.page + 1 }));
    };

    const handlePrevPage = () => {
        setPagination((prev) => ({ ...prev, page: prev.page - 1 }));
    };

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    Total Results:{" "}
                    <span className='badge bg-success text-white'>
                        {pagination.totalResults ?? "NA"}
                    </span>
                </div>
                <nav aria-label='Page navigation example'>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a className='page-link' href='#'>
                                Previous
                            </a>
                        </li>

                        <li className='page-item'>
                            <a className='page-link' href='#'>
                                1
                            </a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link' href='#'>
                                2
                            </a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link' href='#'>
                                3
                            </a>
                        </li>
                        <li className='page-item'>
                            <a className='page-link' href='#'>
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <section>
                <table className='table '>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .header,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className='table-spinner'>
                        {isLoading && (
                            <span
                                className=' spinner-border text-warning'
                                role='status'>
                                <span className='visually-hidden'></span>
                            </span>
                        )}
                        {!isLoading &&
                            table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                    </tbody>
                    <tfoot>
                        {table.getFooterGroups().map((footerGroup) => (
                            <tr key={footerGroup.id}>
                                {footerGroup.headers.map((header) => (
                                    <th key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  header.column.columnDef
                                                      .footer,
                                                  header.getContext()
                                              )}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </tfoot>
                </table>
            </section>
        </div>
    );
};

export default ServerSideTable;
