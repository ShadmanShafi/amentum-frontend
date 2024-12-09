import { ColumnDef } from "@tanstack/react-table";
import {
  IconStatusDisabledInactive,
  IconStatusDisabledActive,
  IconStatusWarningInactive,
  IconStatusWarningActive,
  IconStatusEnabledInactive,
  IconStatusEnabledActive,
} from "@/assets/Icons";

export const rows = [
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
