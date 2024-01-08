import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function ServiceCard({props}) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="icon"
          height={40}
          radius="sm"
          src={props.image}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-xl font-black ">{props.heading}</p>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="flex w-90 p-4">{props.paragraph}</p>
      </CardBody>
      <Divider/>
      {/* <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
