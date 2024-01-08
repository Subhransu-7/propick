import React from "react";
import Image from "next/image";
export default function Clients() {
  return (
    <div className="flex flex-1 p-5 flex-col justify-center items-center">
      <h1 className="text-center pb-10 text-3xl font-black">Meet Our Clients</h1>
      <p className="text-center pb-10  pt-10">
        Our clients all have one goal in common : to connect customers <br />{" "}
        with their brand through creative and strategic marketing content.
      </p>
      <div className="flex flex-row flex-1 gap-10 p-5">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/advertisig-agency.png"}
            width={50}
            height={30}
            alt="logo"
          />
          <p className="text-center pt-10">
            “Excellent implementation of their marketing strategies is very much
            profitale in a long business run.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/advertisig-agency.png"}
            width={50}
            height={30}
            alt="logo"
          />
          <p className="text-center pt-10">
            “Excellent implementation of their marketing strategies is very much
            profitale in a long business run.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/advertisig-agency.png"}
            width={50}
            height={30}
            alt="logo"
          />
          <p className="text-center pt-10">
            “Excellent implementation of their marketing strategies is very much
            profitale in a long business run.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/images/advertisig-agency.png"}
            width={50}
            height={30}
            alt="logo"
          />
          <p className="text-center pt-10">
            “Excellent implementation of their marketing strategies is very much
            profitale in a long business run.
          </p>
        </div>
      </div>
    </div>
  );
}
