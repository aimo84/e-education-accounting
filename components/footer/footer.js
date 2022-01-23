import Link from "next/link";
import React from "react";

export default function Footer() {
  const navigation = {
    title: "Learn",
    lins: [
      { link: "/transit-chart", text: "Mobile Repairing" },
      { link: "/natal-report", text: "Software Development" },
      { link: "/solar-return", text: "Accounting" },
      { link: "/app", text: "Hardware & Networking" },
      { link: "/blog", text: "All Courses" },
    ],
  };
  const resourse = {
    title: "Resources",
    lins: [
      { link: "/", text: "Student Login" },
      { link: "/", text: "Download" },
      { link: "/", text: "Check Certificate" },
      { link: "/", text: "Online Registration" },
      { link: "/", text: "Franchise Membership" },
    ],
  };
  const quicklink = {
    title: "Other Services",
    lins: [
      { link: "/", text: "Sarkariresult.com" },
      { link: "/", text: "Sarkariexam.com" },
      { link: "/", text: "Fcs.Up.Gov.in      " },
      { link: "/", text: "Edistrict.Up.Nic.in" },
      { link: "/", text: "Dbrauaaems.in" },
      { link: "/", text: " Student.Nielit.in" },
      { link: "/", text: "Guruji24.com(Online Test)" },
      { link: "/", text: "W3sumit.com(Online Test)" },
    ],
  };
  const use = {
    title: "More Link",
    lins: [
      { link: "/", text: "Gallery" },
      { link: "/", text: "About Us" },
      { link: "/", text: "Contact" },
    ],
  };
  return (
    <div className="pt-24 bg-zinc-900 px-5">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-10 max-w-6xl mx-auto">
        <div className="flex w-full flex-col gap-5 ">
          <h2 className="md:text-4xl text-3xl text-zinc-50">
            Subscribe Newsletter
          </h2>
          <p className="text-zinc-200 max-w-lg md:text-lg">
            Subscribe now and receive weekly newsletter with educational
            materials, new courses, popular books!
          </p>
        </div>
        <div className="w-full gap-7 flex  items-start justify-end sm:items-end flex-col">
          <div className=" sm:max-w-sm w-full">
            <input
              type="email"
              placeholder="Enter Your email"
              className="outline-none focus:border-blue-500 w-full border-b-2 max-w-[500px] bg-transparent text-white border-zinc-100 pb-3"
            />
          </div>
          <div className="flex max-w-sm w w-full  gap-5">
            <a href="/">
              <svg
                className="fill-white w-7 h-7 hover:fill-zinc-400"
                enableBackground="new 0 0 56.693 56.693"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
              >
                <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
              </svg>
            </a>
            <a href="/">
              <svg
                className="fill-white w-7 h-7 hover:fill-zinc-400"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.7 56.7"
                enableBackground="new 0 0 56.7 56.7"
              >
                <g>
                  <path
                    d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                  />
                  <circle cx="41.5" cy="16.4" r="2.9" />
                  <path
                    d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                  />
                </g>
              </svg>
            </a>
            <a href="/">
              <svg
                className="fill-white w-7 h-7 hover:fill-zinc-400"
                enableBackground="new 0 0 56.693 56.693"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
              >
                <path d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" />
              </svg>
            </a>
            <a href="/">
              <svg
                className="fill-white w-7 h-7 hover:fill-zinc-400"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 56.693 56.693"
              >
                <g>
                  <path
                    className="st0"
                    d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
                  />
                  <path
                    className="st0"
                    d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-14 md:py-14 grid gap-12 grid-cols-2  md:grid-cols-4 border-t max-w-6xl mx-auto">
        <FooterSection title={navigation.title} links={navigation.lins} />
        <FooterSection title={resourse.title} links={resourse.lins} />
        <FooterSection title={quicklink.title} links={quicklink.lins} />
        <FooterSection title={use.title} links={use.lins} />
        <div></div>
      </div>
      <div className="pt-10 pb-14 text-sm text-zinc-400 border-t max-w-6xl mx-auto flex justify-between">
        <span>
          © Copyright 2019 Maa Durga Institute Of Education. All Rights Reserved
        </span>
        <span>Design & Developed By Darshan Rathod</span>
      </div>
    </div>
  );
}

function FooterSection(props) {
  return (
    <div className="flex  flex-col gap-4 items-start">
      <span className="text-xl text-zinc-50 self-start font-semibold">
        {props.title}
      </span>
      <div className="flex  text-sm flex-col gap-2 md:text-lg text-zinc-400">
        {props.links.map((item, i) => (
          <Link key={i} href={item.link}>
            <a className=" text-zinc-300 hover:text-zinc-500">{item.text}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}