import { useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const VpsDetails = () => {
  const { id } = useParams();

  console.log("params: ", id);

  return (
    <div className="">
      <div className="flex items-center gap-8 px-14">
        <IconServerDetails />

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight scroll-m-20 text-customTextColor">
            Server - {id}
          </h1>

          <div className="flex gap-2">
            <IconStatusDisabledInactive />
            <IconStatusWarningInactive />
            <IconStatusEnabledActive />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 py-2">
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconHardReset />
          </div>

          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconNewInstallation />
          </div>
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconRescueSystem />
          </div>
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconPasswordReset />
          </div>
          <div className="transition-transform cursor-pointer hover:scale-105 active:scale-95">
            <IconSoftReset />
          </div>
        </div>
      </div>

      <div className="flex w-full py-12 justify-evenly px-14 bg-customContainerBg">
        <div className="flex flex-col gap-2">
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

        <div className="flex flex-col gap-2">
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
        </div>

        <div className="flex items-end">
          <Button
            variant="outline"
            disabled
            className="flex items-end w-40 font-semibold align-bottom text-customTextColor"
          >
            Actualizieren
          </Button>
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
