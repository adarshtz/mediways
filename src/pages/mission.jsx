import banner from "../../public/assets/banner.jpg";
import { Heading } from "../components";

const Mission = () => {
  return (
    <div className="pb-5 pt-24">
      <div className="relative">
        <div className="">
          <img
            src={banner}
            className="h-[35rem] w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto w-[90%] space-y-2 bg-black/60 px-10 py-5 md:ml-8 md:w-[70%]">
          <h1 className="family-poppins text-2xl font-bold text-white md:text-4xl">
            Explore Campaigns
          </h1>
          <p className="family-poppins text-sm font-normal text-white md:text-xl">
            Home to World-class internationally accredited healthcare
            institutions delivering a fulfilling patient experience
          </p>
        </div>
      </div>
      <div className="flex w-[100%] flex-col justify-center overflow-hidden">
        <Heading
          title={"Our Mission"}
          subtitle={"Donate to make a Difference"}
          pretitle={"Support our cause"}
        />
        <div className="px-48">
          <p className="family-sora text-center text-lg font-medium text-black">
            To foster a global community of giving by connecting compassionate
            individuals with impactful causes. We aim to simplify the donation
            process, increase transparency, and maximize the positive impact of
            charitable contributions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
