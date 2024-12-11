import { ColumnDef } from "@tanstack/react-table";
import {
  IconStatusDisabledInactive,
  IconStatusDisabledActive,
  IconStatusWarningInactive,
  IconStatusWarningActive,
  IconStatusEnabledInactive,
  IconStatusEnabledActive,
} from "@/assets/Icons";

const generateDummyData = (count: number) => {
  const statuses = ["Running", "Pause", "Stopped"];
  const regions = ["EU", "US", "ASIA"];
  const productTypes = ["VPS 4 SSD", "VPS 2 SSD (ohne Setup)", "VPS 0 SSD"];
  const defaultUsers = ["Admin", "Root", "User"];

  return Array.from({ length: count }, (_, index) => ({
    key: (index + 1).toString(),
    name: `Server-${index + 1}`,
    displayName: `Display-${index + 1}`,
    productType: productTypes[index % productTypes.length],
    defaultUser: defaultUsers[index % defaultUsers.length],
    status: statuses[index % statuses.length],
    ipAddress: `192.168.1.${index + 1}`,
    region: regions[index % regions.length],
  }));
};

export const rows = generateDummyData(54);

export const columns: ColumnDef<(typeof rows)[0]>[] = [
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
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <div className="flex items-center space-x-2">
          {row.original.status === "Stopped" ? (
            <IconStatusDisabledActive />
          ) : (
            <IconStatusDisabledInactive />
          )}

          {row.original.status === "Pause" ? (
            <IconStatusWarningActive />
          ) : (
            <IconStatusWarningInactive />
          )}

          {row.original.status === "Running" ? (
            <IconStatusEnabledActive />
          ) : (
            <IconStatusEnabledInactive />
          )}
          <span>{status}</span>
        </div>
      );
    },
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
