import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useIsMobile } from "@/hooks/use-mobile";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
} from "@/assets/Icons";

import { createPasswordResetFormSchema } from "./validation";

const VpsDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  console.log("params: ", id);

  const formSchema = createPasswordResetFormSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: "",
      newPassword: "",
    },
  });

  const handleNewInstallationSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-1 px-2 lg:flex-row sm:gap-2 md:gap-4 sm:px-3 md:px-4 lg:px-6 xl:px-14">
        <IconServerDetails scale={isMobile ? 0.7 : 1} />

        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold tracking-tight text-center text-wrap sm:text-xl md:text-xl lg:text-2xl xl:text-2xl scroll-m-20 text-customTextColor pe-4">
            ServerServer - {id}
          </h1>

          <div className="flex justify-center gap-2">
            <IconStatusDisabledInactive />
            <IconStatusWarningInactive />
            <IconStatusEnabledActive />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 py-2">
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconHardReset scale={isMobile ? 0.8 : 1} />
          </div>

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
          {/* <Popover>
            <PopoverTrigger asChild>
              <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
                <IconPasswordReset scale={isMobile ? 0.8 : 1} />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 p-4"
              >
                <input
                  {...register("field1", {
                    required: "This field is required",
                  })}
                  placeholder="Field 1"
                  className="p-2 border"
                />
                {errors.field1 && (
                  <span className="text-red-500">
                    {errors.field1.message as string}
                  </span>
                )}
                <input
                  {...register("field2", {
                    required: "This field is required",
                  })}
                  placeholder="Field 2"
                  className="p-2 border"
                />
                {errors.field2 && (
                  <span className="text-red-500">
                    {errors.field2.message as string}
                  </span>
                )}
                <button
                  type="submit"
                  className="p-2 text-white bg-blue-500 rounded"
                >
                  Submit
                </button>
              </form>
            </PopoverContent>
          </Popover> */}

          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconSoftReset scale={isMobile ? 0.8 : 1} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full px-6 py-6 md:py-6 md:px-7 lg:py-12 justify-evenly lg:px-14 bg-customContainerBg">
        <div className="flex flex-col w-full gap-2 md:w-1/2">
          <h6>
            <span className="font-semibold text-customTextColor">ID: </span>
            <span className="text-customTextColorSecondary">11912</span>
          </h6>

          <h6>
            <span className="font-semibold text-customTextColor">IP: </span>
            <span className="text-customTextColorSecondary">
              207.108.244.12
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Servername:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              NEUE-SERVER-01
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">OS: </span>
            <span className="text-customTextColorSecondary">Linux</span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              MAC-Address:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              00:50:56:55:4a:4b
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Letzte Bootzeit:{" "}
            </span>
            <span className="text-customTextColorSecondary">
              21.09.2024 17:32 Uhr0
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Termination Date:{" "}
            </span>
            <span className="text-customTextColorSecondary">-</span>
          </h6>
        </div>

        <div className="flex flex-col w-full gap-2 md:w-1/2">
          <h6>
            <span className="font-semibold text-customTextColor">Region: </span>
            <span className="text-customTextColorSecondary">EU</span>
          </h6>

          <h6>
            <span className="font-semibold text-customTextColor">Plan: </span>
            <span className="text-customTextColorSecondary">
              Description: VPS 4 SSD (ohne Setup) Disk Space: 1.95 TB
            </span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Default User:{" "}
            </span>
            <span className="text-customTextColorSecondary">root</span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">VNC: </span>
            <span className="text-customTextColorSecondary">Disabled</span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Monthly Price:{" "}
            </span>
            <span className="text-customTextColorSecondary">0.00 Euro</span>
          </h6>
          <h6>
            <span className="font-semibold text-customTextColor">
              Contract Period:{" "}
            </span>
            <span className="text-customTextColorSecondary">0.00 Euro</span>
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
