import { useEffect, useState } from "react";
import { Heading, CampaignCard } from "../components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../../contextprovider";
import FormModule from "../module/form-module";

const Campaign = () => {
  const [parsedData, setParsedData] = useState(null);

  const { isFormActive } = useContext(FormContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://mediways-server.vercel.app/user/get-all-campaigns",
      );
      setParsedData(response.data.campaigns);
    };

    fetchData();
  }, []);

  return (
    <div className="">
      {!isFormActive && (
        <div className="pt-24">
          <div className="relative">
            <div className="">
              <img
                src="/public/assets/banner.jpg"
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
          <div className="overflow-hidden py-10">
            <Heading title={"Explore our Campaigns"} className={""} />
            <div className="px-18 flex flex-wrap justify-center p-5">
              {parsedData?.map((item, index) => (
                <Link
                  key={index}
                  to={`/campaigns/${item.link}`}
                  className="mx-5"
                >
                  <CampaignCard
                    title={item.title}
                    beneficiary={item.beneficiaryName}
                    thumbnail={item.thumbnail}
                    target={item.amount}
                    donated={item.amountDonated}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div>
        {isFormActive && (
          <div className="absolute bottom-0 top-24 flex h-fit w-full items-center justify-center bg-black/90 px-3 py-8 md:px-0">
            <FormModule />
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaign;
