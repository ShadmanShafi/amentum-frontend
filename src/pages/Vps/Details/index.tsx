import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";
import { useGetVmByIdQuery } from "@/store/apis/vpsApis";
import {
  useHardResetMutation,
  useSoftResetMutation,
} from "@/store/apis/serverActionApis";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

import { createPasswordResetFormSchema } from "./validation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const VpsDetails = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);
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

  const formSchema = createPasswordResetFormSchema();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      newPassword: "",
    },
  });

  const handleHardReset = async () => {
    setIsDialogOpen(true);

    try {
      const response = await hardReset({
        nodeId: nodeId!,
        vmId: vmId!,
      }).unwrap();
      toast.info(`${response?.message}`);

      refetch();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.data?.message || error.message || "";
      toast.error(`Hard Reset failed ${errorMessage}`);
    } finally {
      setIsDialogOpen(false);
    }
  };

  const handleSoftReset = async () => {
    setIsDialogOpen2(true);

    try {
      const response = await softReset({
        nodeId: nodeId!,
        vmId: vmId!,
      }).unwrap();
      console.log("Soft Reset success: ", response);

      toast.success(`Soft Reset success ${response?.message}`);

      refetch();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage = error.data?.message || error.message || "";
      toast.error(`Soft Reset failed ${errorMessage}`);
    } finally {
      setIsDialogOpen2(false);
    }
  };

  const handleNewInstallationSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-1 px-2 lg:flex-row sm:gap-2 md:gap-4 sm:px-3 md:px-4 lg:px-6 xl:px-14">
        <IconServerDetails scale={isMobile ? 0.7 : 1} />

        <div className="flex flex-col gap-3">
          {!isFetching ? (
            <h1 className="text-xl font-bold tracking-tight text-center text-wrap sm:text-xl md:text-xl lg:text-2xl xl:text-2xl scroll-m-20 text-customTextColor">
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
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <div
                className="transition-transform cursor-pointer hover:scale-105 active:scale-95"
                onClick={handleHardReset}
              >
                <IconHardReset scale={isMobile ? 0.8 : 1} />
              </div>
            </DialogTrigger>
            <DialogContent>
              {isHardResetLoading ? (
                <Loader2 className="w-10 h-10 text-center animate-spin" />
              ) : null}
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
                <IconNewInstallation scale={isMobile ? 0.8 : 1} />
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] gap-1">
              <DialogHeader>
                <DialogTitle>Form</DialogTitle>
                <DialogDescription>
                  Enter the information below for Neueinstalation.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleNewInstallationSubmit)}
                  className="flex flex-col gap-2 p-1"
                >
                  <FormField
                    control={form.control}
                    name="user"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-customTextColorSecondary">
                          User
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-customTextColorSecondary">
                          New Password
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
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
          </Dialog>

          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconRescueSystem scale={isMobile ? 0.8 : 1} />
          </div>

          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconPasswordReset scale={isMobile ? 0.8 : 1} />
          </div>

          <Dialog open={isDialogOpen2} onOpenChange={setIsDialogOpen2}>
            <DialogTrigger asChild>
              <div
                className="transition-transform cursor-pointer hover:scale-105 active:scale-95"
                onClick={handleSoftReset}
              >
                <IconSoftReset scale={isMobile ? 0.8 : 1} />
              </div>
            </DialogTrigger>
            <DialogContent>
              {isSoftResetLoading ? (
                <Loader2 className="w-10 h-10 text-center animate-spin" />
              ) : null}
            </DialogContent>
          </Dialog>
        </div>
      </div>

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

      <div className="flex justify-center px-4 py-6 sm:px-8 md:px-16 lg:px-32 xl:px-48">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="snapshots">Snapshots</TabsTrigger>
            <TabsTrigger disabled value="images">
              Images
            </TabsTrigger>
            <TabsTrigger disabled value="private-network">
              Private network
            </TabsTrigger>
            <TabsTrigger disabled value="additional-ips">
              Additional IPs
            </TabsTrigger>
            <TabsTrigger disabled value="licenses">
              Licenses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="snapshots">
            <div>Table for Snapshots</div>
          </TabsContent>

          <TabsContent value="images">
            <div>Content for Images</div>
          </TabsContent>

          <TabsContent value="private-network">
            <div>Content for Private network</div>
          </TabsContent>

          <TabsContent value="additional-ips">
            <div>Content for Additional IPs</div>
          </TabsContent>

          <TabsContent value="licenses">
            <div>Content for Licenses</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VpsDetails;
