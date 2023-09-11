import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";

const useUserTable = () => {
    const columnHelper = createColumnHelper();

    const columns = useMemo(() => {
        return [
            columnHelper.accessor("name", {
                cell: (info) => info.getValue(),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("mobileNumber", {
                header: () => "Age",
                cell: (info) => info.renderValue(),
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("visits", {
                header: () => <span>Visits</span>,
                footer: (info) => info.column.id,
            }),
            columnHelper.accessor("status", {
                header: "Status",
                footer: (info) => info.column.id,
            }),
        ];
    }, [columnHelper]);

    return { columns };
};

export default useUserTable;
