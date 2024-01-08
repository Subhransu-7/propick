import React from "react";
import Image from "next/image";
import ServiceCard from "../Servicecard/Servicecard";
const servicesData = [
    // Add your service data here...
    // For example:
    {
      image:
        "https://web.archive.org/web/20220324072911im_/https://propick.in/_next/static/images/social-media-marketing-2d42deadd50871edc3d491eaf895d7bd.png",
      heading: "Social Media Marketing",
      paragraph:
        "Are you looking for an effective way to grow your business, brand awareness, number of new customers, and website traffic?",
    },
    {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/social-media-management-0a7eb032bffe811c97873a5f2531581a.png",
        heading: "Social Media Management",
        paragraph:
          "Our social media management services will put your company in the forefront, along with saving you time and stress by monitoring activity and creating content for you.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/digital-marketing-service-9f59879ca8e0250f54bd567f61cb3a50.png",
        heading: "Digital Marketing",
        paragraph:
          "The team at propick is ready to help you take your online presence to the next level with industry leading digital marketing services.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/brand-6d518bef0fd3a4e6c77ef27b7c1d16fa.png",
        heading: "Branding",
        paragraph:
          "Branding is about understanding the attributes that your target audience appreciates in a business and blending your business values and personality.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/celebrity-0e18dc2986b4f58077574b9be12e3c2e.png",
        heading: "Celebrity Management",
        paragraph:
          "Celebrity management involves 360 degree celebrity & brand fit sevices including endorsement , digital presence & Portfolio management, strategic PR etc.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/talent-search-29342669882d22162644e8c23f8009f3.png",
        heading: "Talent Management",
        paragraph:
          "In talent management, the personal relationship between a celebrity & a manager is eminent. A talent focus is to highlight oneself but a talent manager's job is to make a brand out of an individual.",
      },
      {
        image:
          "images/social-verification.png",
        heading: "Social Media Varificaion",
        paragraph:
          "Social media verification is crucial when it comes to protecting your identity & the reputation of your brand. The blue tick represents credibility & authority on social media.",
      },
      {
        image:"images/digital-music.png",
        heading: "Digital Music Distribution",
        paragraph:
          "Distribute your music on spotify , Itunes, Deezer, Amazon music, TikTok, Instagram and more , reaching new audiences & fans across the biggest global platforms.",
      },
      {
        image: "images/web-dev.png",
        heading: "Web Development",
        paragraph:
          "We start with analysis, research and planning followed by architecture, wireframing and content creation. Once completed we move on to design and SEO driven content including copywriting, photography and video.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072911im_/https://propick.in/_next/static/images/social-media-marketing-2d42deadd50871edc3d491eaf895d7bd.png",
        heading: "App Development",
        paragraph:
          "We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/event-management-42446030515fd478dc9f990d34f4e55b.png",
        heading: "Event Management",
        paragraph:
          "Event management services team works with you from the beginning stages of planning your event to the live event & post event reconciliation. Whether you are planning a virtual event,hybrid, or an in-person meeting.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/tv-0629b98bd00d55d63f0164fc1a6c4290.png",
        heading: "TVC",
        paragraph:
          "TV advertising allows you to show and tell a wide audience about your business,product  or service. TV advertising advantages are TV reaches a much larger audience than localnewspapers & radio stations and it does so during a short period of time. ",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/film-roll-da71854206b03452086b231c06353048.png",
        heading: "Documentaries & Short Films",
        paragraph:
          "We bring our unique expertise in short film to broadcasters, platforms & brands to expand and diversify their offerings. ",
      },
      {
        image:
          "images/commercial-film",
        heading: "Commercial Films",
        paragraph:
          "Our vision is to use the cinematic nature of movies, powered by award-winning talent, to crate bitesize movie experiences that amaze & entertain audiences globally.",
      },
      {
        image:
          "https://web.archive.org/web/20220324072844im_/https://propick.in/_next/static/images/graphic-designer-c8060bf8f4a513ba8c84e5e73d83fbe2.png",
        heading: "Graphics Design",
        paragraph:
          "We offer a wide range of custom graphic design services, & ably translate your thoughts and ideas into create graphic design that bring out superior results. ",
      },
    // Add more service objects as needed...
  ];
export default function OtherServices() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <h1 className="text-center font-black text-3xl">Other services you must appreciate</h1>
      <p className="text-center leading-10">
        Propick is not exactly a promoting township in itself and in our little{" "}
        <br /> town of 35 workers we cover nearly everything that goes under the{" "}
        <br /> name of publicizing, marketing, planning, advance promoting,{" "}
        <br /> web based-life the board, SEO and much more is on offer for you.
      </p>
      <div className="flex flex-1 flex-wrap justify-center items-center gap-5">
        {
            servicesData.map((item,i)=>{
                return(
                    <ServiceCard props={item} key={i}/>
                )
            })
        }
      </div>
    </div>
  );
}
