import { Link } from "react-router-dom";
import banner3 from "../../public/assets/banner3.png";
import { Heading } from "../components";

import Counting from "../sections/counting";

const Mission = () => {
  return (
    <div className="pb-5 pt-24">
      <div className="relative">
        <div className="">
          <img
            src={banner3}
            className="h-[35rem] w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto w-[90%] space-y-2 bg-black/60 px-10 py-5 md:ml-8 md:w-[70%]">
          <h1 className="family-poppins text-2xl font-bold text-white md:text-4xl">
            Our Mission
          </h1>
          <p className="family-poppins text-sm font-normal text-white md:text-xl">
            Empowering communities through compassionate support and
            transformative opportunities in various sectors and areas.
          </p>
        </div>
      </div>
      <div className="flex w-[100%] flex-col justify-center overflow-hidden">
        <Heading
          title={"Our Mission"}
          subtitle={"Donate to make a Difference"}
          pretitle={"Support our cause"}
        />
        <div className="flex flex-col items-center justify-center md:px-10 lg:px-48">
          <p className="family-sora text-center text-lg font-medium text-black">
            Our mission is to uplift and empower communities in need by
            providing essential resources, support, and opportunities. We
            believe that through collaborative efforts and dedicated service, we
            can create lasting change and foster sustainable growth.
          </p>

          <div className="flex flex-col items-center justify-center px-4 py-16 md:justify-start">
            <h1 className="family-poppins text-4xl font-bold underline">
              Core Values :{" "}
            </h1>
            <ul className="family-poppins space-y-3 py-6 text-xl font-normal">
              <li>
                <b>Compassion</b>: We approach every initiative with empathy and
                understanding.
              </li>
              <li>
                <b>Integrity</b>: We are committed to transparency and
                accountability in all our actions.
              </li>
              <li>
                <b>Innovation</b>: We embrace creative solutions to address
                complex challenges.
              </li>
              <li>
                <b>Collaboration</b>: We work together with partners and
                communities to achieve common goals.
              </li>
            </ul>
          </div>
          <Counting />
          <p className="family-sora px-5 py-10 text-justify text-sm font-medium text-black/70 md:px-0 md:text-center md:text-lg">
            Every day, our dedicated team works tirelessly to empower
            communities and bring meaningful change to those in need. But we
            can't do it alone—your support is the catalyst for our success. By
            choosing to donate, volunteer, or advocate for our cause, you become
            a crucial part of a movement committed to creating lasting impact.
            Your contributions help us provide essential resources, support
            transformative programs, and touch countless lives. Click 'Donate
            Now' to invest in a future where everyone has the opportunity to
            succeed. Every donation, big or small, makes a significant
            difference. Together, we can turn our vision of a better world into
            reality. Join us in this vital mission and help us drive the change
            we all want to see.
          </p>
          <Link to={"/"}>
            <button className="family-sora h-[3.4rem] rounded-full border border-lightBlue bg-white px-10 text-[1rem] font-semibold text-lightBlue active:bg-lightBlue/95 active:text-white">
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mission;
