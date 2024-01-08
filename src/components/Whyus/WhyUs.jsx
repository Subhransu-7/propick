"use client";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "@/components/Checkitem/Checkitem";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function Whyus() {
  return (
    <div className="flex  flex-1 flex-col pt-unit-4xl">
      <Tabs aria-label="Options" className="flex flex-col p-0">
        <Tab
          key="photos"
          title="What’s our business promise?"
          className="m-0 p-0 flex "
        >
          <Card className="mt-9">
            <CardBody className="flex flex-col justify-around">
              <p>
                {" "}
                For us, it's not simply one more project that we'll be making,
                it's a relationship that we work with each item that enters our
                office.
              </p>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Why you choose our service?">
          <Card className="mt-9">
            <CardBody>
                <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
                </p>
              
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="What’s our role model plan?">
          <Card className="mt-9">
            <CardBody>
                <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
                </p>
              
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
      <div className="flex flex-row justify-center items-center p-15">
        {" "}
        <p className="text-center font-bold w-unit-7xl p-8 ">
          {" "}
          We at propick religiously pursue a framework that guarantees the quality result and smoothens the imaginative procedure.
        </p>
        <div className="flex flex-1 flex-row gap-10 flex-wrap justify-center ">
          <Chip
            startContent={<CheckIcon size={18} />}
            variant="faded"
            color="success"
          >
            On going support
          </Chip>
          <Chip
            startContent={<CheckIcon size={18} />}
            variant="faded"
            color="success"
          >
            Maintenance
          </Chip>
          <Chip
            startContent={<CheckIcon size={18} />}
            variant="faded"
            color="success"
          >
            Prototyping
          </Chip>
          <Chip
            startContent={<CheckIcon size={18} />}
            variant="faded"
            color="success"
          >
            Consulting
          </Chip>
        </div>
      </div>
    </div>
  );
}
