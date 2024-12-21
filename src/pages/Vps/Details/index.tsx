import { useState } from "react";
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGetVmByIdQuery, useGetVmsListQuery } from "@/store/apis/vpsApis";
import {
  useHardResetMutation,
  useNewInstallationMutation,
  useResetPasswordMutation,
  useSoftResetMutation,
} from "@/store/apis/serverActionApis";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import {
  IconServerDetails,
  IconHardReset,
  IconNewInstallation,
  IconPasswordReset,
  IconRescueSystem,
  IconSoftReset,
  IconStatusDisabledInactive,
  IconStatusEnabledActive,
  IconStatusWarningInactive,
  IconStatusDisabledActive,
  IconStatusWarningActive,
  IconStatusEnabledInactive,
} from "@/assets/Icons";

import {
  createNewInstallationFormSchema,
  createPasswordResetFormSchema,
  createSnapshotFormSchema,
  updateSnapshotFormSchema,
} from "./validation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IconSnapshotCreate } from "@/assets/Icons/IconSnapshotCreate";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Snapshot } from "@/typings/vpsApi";
import { Pagination } from "./Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownAz, ArrowDownZA } from "lucide-react";
import { IconEdit } from "@/assets/Icons/IconEdit";
import { IconDelete } from "@/assets/Icons/IconDelete";
import {
  useSnapshotCreateMutation,
  useSnapshotDeleteMutation,
  useSnapshotUpdateMutation,
} from "@/store/apis/snapshotApis";

const VpsDetails = () => {
  const [isHardResetDialogOpen, setIsHardResetDialogOpen] = useState(false);
  const [isSoftResetDialogOpen, setIsSoftResetDialogOpen] = useState(false);
  const [isNewInstallationDialogOpen, setIsNewInstallationDialogOpen] =
    useState(false);
  const [isPasswordResetDialogOpen, setIsPasswordResetDialogOpen] =
    useState(false);
  const [isSnapshotCreateDialogOpen, setIsSnapshotCreateDialogOpen] =
    useState(false);
  const [isSnapshotEditDialogOpen, setIsSnapshotEditDialogOpen] =
    useState(false);

  const { nodeId, vmId } = useParams();
  const isMobile = useIsMobile();

  const {
    isFetching,
    data: vmDetails,
    refetch,
  } = useGetVmByIdQuery(
    { nodeId: nodeId!, vmId: vmId! },
    {
      skip: !nodeId || !vmId,
    }
  );

  const [hardReset, { isLoading: isHardResetLoading }] = useHardResetMutation();
  const [softReset, { isLoading: isSoftResetLoading }] = useSoftResetMutation();
  const [newInstallation, { isLoading: isNewInstallationLoading }] =
    useNewInstallationMutation();
  const [passwordReset, { isLoading: isPasswordResetLoading }] =
    useResetPasswordMutation();

  const [snapshotDelete, { isLoading: isSnapshotDeleteLoading }] =
    useSnapshotDeleteMutation();
  const [selectedSnapshotName, setSelectedSnapshotName] = useState<string>("");
  const [snapshotCreate, { isLoading: isSnapshotCreateLoading }] =
    useSnapshotCreateMutation();
  const [snapshotUpdate, { isLoading: isSnapshotUpdateLoading }] =
    useSnapshotUpdateMutation();

  const { data: vmsList } = useGetVmsListQuery();

  const newInstallationFormSchema = createNewInstallationFormSchema();
  const passwordResetFormSchema = createPasswordResetFormSchema();
  const snapshotCreateFormSchema = createSnapshotFormSchema();
  const snapshotEditFormSchema = updateSnapshotFormSchema();

  const newInstallationForm = useForm<
    z.infer<typeof newInstallationFormSchema>
  >({
    resolver: zodResolver(newInstallationFormSchema),
    defaultValues: {
      templateVmid: "",
      cloneName: "",
      user: "",
      password: "",
    },
  });

  const passwordResetForm = useForm<z.infer<typeof passwordResetFormSchema>>({
    resolver: zodResolver(passwordResetFormSchema),
    defaultValues: {
      user: "",
      newPassword: "",
    },
  });

  const snapshotCreateForm = useForm<z.infer<typeof snapshotCreateFormSchema>>({
    resolver: zodResolver(snapshotCreateFormSchema),
    defaultValues: {
      snapshot_name: "",
      description: "",
    },
  });

  const snapshotUpdateForm = useForm<z.infer<typeof snapshotEditFormSchema>>({
    resolver: zodResolver(snapshotEditFormSchema),
    defaultValues: {
      description: "",
    },
  });

  const handleHardReset = async () => {
    setIsHardResetDialogOpen(true);

    try {
      const response = await hardReset({
        nodeId: nodeId!,
        vmId: vmId!,
      }).unwrap();
      toast.info(`${response?.message}`);
    } catch (error) {
      const errorMessage =
        (error as { data?: { message?: string }; message?: string }).data
          ?.message ||
        (error as { message?: string }).message ||
        "";
      toast.error(`${errorMessage}`);
    } finally {
      setIsHardResetDialogOpen(false);
      refetch();
    }
  };

  const handleSoftReset = async () => {
    setIsSoftResetDialogOpen(true);

    try {
      const response = await softReset({
        nodeId: nodeId!,
        vmId: vmId!,
      }).unwrap();
      toast.info(`${response?.message}`);
    } catch (error) {
      const errorMessage =
        (error as { data?: { message?: string }; message?: string }).data
          ?.message ||
        (error as { message?: string }).message ||
        "";
      toast.error(`Soft Reset failed ${errorMessage}`);
    } finally {
      setIsSoftResetDialogOpen(false);
      refetch();
    }
  };

  const handleNewInstallationSubmit = async (
    data: z.infer<typeof newInstallationFormSchema>
  ) => {
    setIsNewInstallationDialogOpen(true);

    try {
      const response = await newInstallation({
        nodeId: nodeId!,
        vmId: vmId!,
        templateVmid: data.templateVmid,
        cloneName: data.cloneName,
        cloudInitConfig: {
          user: data.user,
          password: data.password,
        },
      }).unwrap();
      toast.info(`${response?.message}`);
    } catch (error: unknown) {
      const errorMessage =
        (error as { data?: { message?: string }; message?: string }).data
          ?.message ||
        (error as { message?: string }).message ||
        "";
      toast.error(`${errorMessage}`);
    } finally {
      setIsNewInstallationDialogOpen(false);
      newInstallationForm.reset();
      refetch();
    }
  };

  const handlePasswordResetSubmit = async (
    data: z.infer<typeof passwordResetFormSchema>
  ) => {
    setIsPasswordResetDialogOpen(true);

    try {
      const response = await passwordReset({
        nodeId: nodeId!,
        vmId: vmId!,
        user: data.user,
        newPassword: data.newPassword,
      }).unwrap();
      toast.info(`${response?.message}`);
    } catch (error: unknown) {
      const errorMessage =
        (error as { data?: { message?: string }; message?: string }).data
          ?.message ||
        (error as { message?: string }).message ||
        "";
      toast.error(`${errorMessage}`);
    } finally {
      setIsPasswordResetDialogOpen(false);
      passwordResetForm.reset();
      refetch();
    }
  };

  const handleSnapshotCreateSubmit = async (
    data: z.infer<typeof snapshotCreateFormSchema>
  ) => {
    setIsSnapshotCreateDialogOpen(true);

    try {
      const response = await snapshotCreate({
        nodeId: nodeId!,
        vmId: vmId!,
        snapshot_name: data.snapshot_name,
        description: data.description,
      }).unwrap();
      toast.info(`${response?.message}`);
    } catch (error: unknown) {
      const errorMessage =
        (error as { data?: { message?: string }; message?: string }).data
          ?.message ||
        (error as { message?: string }).message ||
        "";
      toast.error(`${errorMessage}`);
    } finally {
      setIsSnapshotCreateDialogOpen(false);
      snapshotCreateForm.reset();
      refetch();
    }
  };

  const SnapshotsTable = () => {
    const handleSnapshotEditSubmit = async (
      data: z.infer<typeof snapshotEditFormSchema>,
      snapshot_name: string
    ) => {
      setIsSnapshotEditDialogOpen(true);

      try {
        const response = await snapshotUpdate({
          nodeId: nodeId!,
          vmId: vmId!,
          snapshotName: snapshot_name,
          description: data.description,
        }).unwrap();
        toast.info(`${response?.message}`);
      } catch (error: unknown) {
        const errorMessage =
          (error as { data?: { message?: string }; message?: string }).data
            ?.message ||
          (error as { message?: string }).message ||
          "";
        toast.error(`${errorMessage}`);
      } finally {
        setIsSnapshotEditDialogOpen(false);
        snapshotUpdateForm.reset();
        refetch();
      }
    };

    const handleSnapshotDelete = async (row: Snapshot) => {
      setSelectedSnapshotName(row.name);

      try {
        await snapshotDelete({
          nodeId: nodeId!,
          vmsId: vmId!,
          snapshotId: row.name,
        }).unwrap();
        toast.success("Snapshot deleted successfully");
      } catch (error: unknown) {
        const errorMessage =
          (error as { data?: { message?: string }; message?: string }).data
            ?.message ||
          (error as { message?: string }).message ||
          "";
        toast.error(`Snapshot deletion failed: ${errorMessage}`);
      } finally {
        refetch();
        setSelectedSnapshotName("");
      }
    };

    const snapshotColumns = [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "created",
        header: "Created",
      },
      {
        accessorKey: "autoDeletion",
        header: "Auto-Deletion",
      },
      {
        id: "actions",
        header: "Quick Action",
        cell: ({ row }: { row: { original: Snapshot } }) => (
          <div className="flex space-x-2">
            <Dialog
              open={isSnapshotEditDialogOpen}
              onOpenChange={setIsSnapshotEditDialogOpen}
            >
              <DialogTrigger asChild>
                <div className="flex items-center justify-center transition-transform cursor-pointer hover:scale-105 active:scale-95">
                  <IconEdit scale={0.7} />
                </div>
              </DialogTrigger>

              {!isSnapshotUpdateLoading ? (
                <DialogContent className="sm:max-w-[425px] gap-1">
                  <DialogHeader className="flex justify-center">
                    <h2 className="mt-4 mb-2 text-center text-customTextColor">
                      Enter the information below to Edit the Snapshot
                    </h2>
                  </DialogHeader>
                  <Form {...snapshotUpdateForm}>
                    <form
                      onSubmit={snapshotUpdateForm.handleSubmit((data) =>
                        handleSnapshotEditSubmit(data, row.original.name)
                      )}
                      className="flex flex-col gap-2 p-1"
                    >
                      <FormField
                        control={snapshotUpdateForm.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <DialogFooter>
                        <Button type="submit" className="px-10 mt-2">
                          Confirm
                        </Button>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              ) : (
                <DialogContent
                  className="flex items-center justify-center"
                  unClosable
                >
                  <>
                    <h2 className="text-xl font-semibold text-customTextColor">
                      Editing the Snapshot's description
                    </h2>
                    <div className="flex items-center justify-center space-x-2">
                      <div
                        className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </>
                </DialogContent>
              )}
            </Dialog>

            <Button
              className="px-2 py-1 active:bg-destructive-500"
              variant="ghost"
              size="sm"
              onClick={() => handleSnapshotDelete(row.original)}
              loading={
                selectedSnapshotName === row.original.name &&
                isSnapshotDeleteLoading
              }
              disabled={
                selectedSnapshotName === row.original.name &&
                isSnapshotDeleteLoading
              }
            >
              <IconDelete />
            </Button>
          </div>
        ),
      },
    ];

    const table = useReactTable({
      data: vmDetails?.snapshots || [],
      columns: snapshotColumns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });

    return (
      <div className="w-full py-2">
        <h1 className="mb-1 text-lg font-semibold tracking-tight scroll-m-20 text-customTextColor">
          Snapshots
        </h1>

        <Table className="w-full border">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-2 py-0 text-sm font-semibold border cursor-pointer select-none sm:px-4 text-customTableHeaderColor bg-customTableHeaderBg"
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
            {isFetching
              ? Array.from({ length: 2 }).map((_, index) => (
                  <TableRow
                    key={index}
                    className="text-sm cursor-pointer hover:bg-customTableRowHoverBg text-customTextColor"
                  >
                    {snapshotColumns.map((column) => (
                      <TableCell
                        key={column.accessorKey || column.id}
                        className="px-4 py-2 border sm:px-4"
                      >
                        <Skeleton className="w-full h-4 bg-slate-300" />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="text-sm cursor-pointer hover:bg-customTableRowHoverBg text-customTextColor"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-2 py-1 border sm:px-4"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>

        <div className="flex flex-col-reverse items-center justify-between gap-4 py-4 space-y-2 sm:flex-row sm:space-y-0">
          <div className="text-sm text-customTextColorSecondary">
            {`Showing ${table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to ${Math.min((table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize, table.getCoreRowModel().rows.length)}, out of ${table.getCoreRowModel().rows.length} entries`}
          </div>

          <Pagination table={table} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-1 px-2 lg:flex-row sm:gap-2 md:gap-4 sm:px-3 md:px-4 lg:px-6 xl:px-14">
        <IconServerDetails scale={isMobile ? 0.7 : 1} />

        <div className="flex flex-col gap-3">
          {!isFetching ? (
            <h1 className="px-0 text-xl font-bold tracking-tight text-center text-wrap sm:text-xl md:text-xl lg:text-2xl xl:text-2xl scroll-m-20 text-customTextColor lg:px-4 xl:px-8">
              {vmDetails?.server?.name}
            </h1>
          ) : (
            <Skeleton className="w-24 h-8 bg-slate-200" />
          )}

          {!isFetching ? (
            <div className="flex justify-center gap-2">
              {vmDetails?.server?.status === "stopped" ? (
                <IconStatusDisabledActive />
              ) : (
                <IconStatusDisabledInactive />
              )}

              {vmDetails?.server?.status === "paused" ? (
                <IconStatusWarningActive />
              ) : (
                <IconStatusWarningInactive />
              )}

              {vmDetails?.server?.status === "running" ? (
                <IconStatusEnabledActive />
              ) : (
                <IconStatusEnabledInactive />
              )}
            </div>
          ) : (
            <Skeleton className="w-12 h-6 bg-slate-200" />
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-2 py-2">
          {/* Hard Reset */}
          <Dialog
            open={isHardResetDialogOpen}
            onOpenChange={setIsHardResetDialogOpen}
          >
            <DialogTrigger asChild>
              {isFetching ? (
                <div className="cursor-not-allowed">
                  <Skeleton className="w-1/6 h-20 bg-slate-300" />
                </div>
              ) : (
                <div
                  className="transition-transform cursor-pointer hover:scale-105 active:scale-95"
                  onClick={handleHardReset}
                >
                  <IconHardReset scale={isMobile ? 0.8 : 1} />
                </div>
              )}
            </DialogTrigger>
            <DialogContent
              className="flex items-center justify-center"
              unClosable
            >
              {isHardResetLoading ? (
                <>
                  <h2 className="text-xl font-semibold text-customTextColor">
                    Server Hard Resetting
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </>
              ) : null}
            </DialogContent>
          </Dialog>

          {/* New Installation */}
          <Dialog
            open={isNewInstallationDialogOpen}
            onOpenChange={setIsNewInstallationDialogOpen}
          >
            <DialogTrigger asChild>
              {isFetching ? (
                <div className="cursor-not-allowed">
                  <Skeleton className="w-1/6 h-20 bg-slate-300" />
                </div>
              ) : (
                <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
                  <IconNewInstallation scale={isMobile ? 0.8 : 1} />
                </div>
              )}
            </DialogTrigger>

            {!isNewInstallationLoading ? (
              <DialogContent className="sm:max-w-[425px] gap-1">
                <DialogHeader className="flex justify-center">
                  <h2 className="mt-4 mb-2 text-center text-customTextColor">
                    Enter the information below for Neueinstalation
                  </h2>
                </DialogHeader>
                <Form {...newInstallationForm}>
                  <form
                    onSubmit={newInstallationForm.handleSubmit(
                      handleNewInstallationSubmit
                    )}
                    className="flex flex-col gap-2 p-1"
                  >
                    <FormField
                      control={newInstallationForm.control}
                      name="templateVmid"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a VM" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>VMs</SelectLabel>
                                  {vmsList?.servers.map((server) => (
                                    <SelectItem
                                      key={server.id}
                                      value={JSON.stringify(server.id)}
                                    >
                                      {server.name}
                                    </SelectItem>
                                  ))}
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={newInstallationForm.control}
                      name="cloneName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Clone Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={newInstallationForm.control}
                      name="user"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="User" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={newInstallationForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button
                        type="submit"
                        className="px-10 mt-2"
                        disabled={isNewInstallationLoading}
                        loading={isNewInstallationLoading}
                      >
                        Confirm
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            ) : (
              <DialogContent
                className="flex items-center justify-center"
                unClosable
              >
                <>
                  <h2 className="text-xl font-semibold text-customTextColor">
                    New Installation of Server
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </>
              </DialogContent>
            )}
          </Dialog>

          {/* Rescue System */}
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconRescueSystem scale={isMobile ? 0.8 : 1} />
          </div>

          {/* Password Reset */}
          <Dialog
            open={isPasswordResetDialogOpen}
            onOpenChange={setIsPasswordResetDialogOpen}
          >
            <DialogTrigger asChild>
              {isFetching ? (
                <div className="cursor-not-allowed">
                  <Skeleton className="w-1/6 h-20 bg-slate-300" />
                </div>
              ) : (
                <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
                  <IconPasswordReset scale={isMobile ? 0.8 : 1} />
                </div>
              )}
            </DialogTrigger>

            {!isPasswordResetLoading ? (
              <DialogContent className="sm:max-w-[425px] gap-1">
                <DialogHeader className="flex justify-center">
                  <h2 className="mt-4 mb-2 text-center text-customTextColor">
                    Enter the information below for Password Reset
                  </h2>
                </DialogHeader>
                <Form {...passwordResetForm}>
                  <form
                    onSubmit={passwordResetForm.handleSubmit(
                      handlePasswordResetSubmit
                    )}
                    className="flex flex-col gap-2 p-1"
                  >
                    <FormField
                      control={passwordResetForm.control}
                      name="user"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="User" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={passwordResetForm.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="New Password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" className="px-10 mt-2">
                        Confirm
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            ) : (
              <DialogContent
                className="flex items-center justify-center"
                unClosable
              >
                <>
                  <h2 className="text-xl font-semibold text-customTextColor">
                    Resetting the Password of the Server
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </>
              </DialogContent>
            )}
          </Dialog>

          {/* Soft Reset */}
          <Dialog
            open={isSoftResetDialogOpen}
            onOpenChange={setIsSoftResetDialogOpen}
          >
            <DialogTrigger asChild>
              {isFetching ? (
                <div className="cursor-not-allowed">
                  <Skeleton className="w-1/6 h-20 bg-slate-300" />
                </div>
              ) : (
                <div
                  className="transition-transform cursor-pointer hover:scale-105 active:scale-95"
                  onClick={handleSoftReset}
                >
                  <IconSoftReset scale={isMobile ? 0.8 : 1} />
                </div>
              )}
            </DialogTrigger>
            <DialogContent
              className="flex items-center justify-center"
              unClosable
            >
              {isSoftResetLoading ? (
                <>
                  <h2 className="text-xl font-semibold text-customTextColor">
                    Server Soft Resetting
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </>
              ) : null}
            </DialogContent>
          </Dialog>

          {/* Snapshot Create */}
          <Dialog
            open={isSnapshotCreateDialogOpen}
            onOpenChange={setIsSnapshotCreateDialogOpen}
          >
            <DialogTrigger asChild>
              {isFetching ? (
                <div className="cursor-not-allowed">
                  <Skeleton className="w-1/6 h-20 bg-slate-300" />
                </div>
              ) : (
                <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
                  <IconSnapshotCreate scale={isMobile ? 0.8 : 1} />
                </div>
              )}
            </DialogTrigger>

            {!isSnapshotCreateLoading ? (
              <DialogContent className="sm:max-w-[425px] gap-1">
                <DialogHeader className="flex justify-center">
                  <h2 className="mt-4 mb-2 text-center text-customTextColor">
                    Enter the information below to Create a Snapshot
                  </h2>
                </DialogHeader>
                <Form {...snapshotCreateForm}>
                  <form
                    onSubmit={snapshotCreateForm.handleSubmit(
                      handleSnapshotCreateSubmit
                    )}
                    className="flex flex-col gap-2 p-1"
                  >
                    <FormField
                      control={snapshotCreateForm.control}
                      name="snapshot_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Snapshot name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={snapshotCreateForm.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <DialogFooter>
                      <Button type="submit" className="px-10 mt-2">
                        Confirm
                      </Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            ) : (
              <DialogContent
                className="flex items-center justify-center"
                unClosable
              >
                <>
                  <h2 className="text-xl font-semibold text-customTextColor">
                    Creating a new Snapshot
                  </h2>
                  <div className="flex items-center justify-center space-x-2">
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-4 h-4 duration-1000 rounded-full animate-pulse bg-customPrimaryBtnHoverBg"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>

      {/* Server Details */}
      <div className="flex flex-wrap w-full px-6 py-6 md:py-6 md:px-7 lg:py-12 justify-evenly lg:px-14 bg-customContainerBg">
        <div className="flex flex-col w-full gap-2 md:w-1/2">
          <h6>
            <span className="font-semibold text-customTextColor">ID: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.id}
            </span>
          </h6>

          <h6>
            <span className="font-semibold text-customTextColor">IP: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.ipAddresses?.join(", ")}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Servername:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.serverName}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">OS: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.os}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              MAC-Address:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.mac}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Letzte Bootzeit:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.lastBootTime}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Termination Date:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.terminationTime}
            </span>
          </h6>
        </div>

        <div className="flex flex-col w-full gap-2 md:w-1/2">
          <h6>
            <span className="font-semibold text-customTextColor">Region: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.region}
            </span>
          </h6>

          <h6>
            <span className="font-semibold text-customTextColor">Plan: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.plan}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Default User:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.defaultUser}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">VNC: </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.vnc}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Monthly Price:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.monthlyPrice}
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Contract Period:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              {vmDetails?.server?.contractPeriod}
            </span>
          </h6>

          <div className="flex items-end justify-end mt-4">
            <Button
              variant="outline"
              disabled
              className="flex items-end w-40 font-semibold align-bottom text-customTextColor"
            >
              Actualizieren
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <SnapshotsTable />
      </div>
    </div>
  );
};

export default VpsDetails;
