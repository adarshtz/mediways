import { FaHeart } from "react-icons/fa";
import ProgressBar from "./progress-bar";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const CampaignCard = ({
  title,
  beneficiary,
  thumbnail,
  target,
  donated,
  isTaxBenefit,
}) => {
  const [donatedAmount, setDonatedAmount] = useState(0);

  useEffect(() => {
    if (donated === undefined) {
      setDonatedAmount(0);
    } else {
      setDonatedAmount(donated);
    }
  }, []);

  return (
    <div className="h-content relative mt-8 w-[21.5rem] cursor-pointer rounded-lg border shadow-lg shadow-black/20 md:w-[24rem]">
      {isTaxBenefit && (
        <div className="family-sora absolute m-2 rounded-md border border-lightBlue bg-lightBlue p-1 text-[0.8rem] text-white">
          <h1>Tax Benefit</h1>
        </div>
      )}

      <div className="h-[12rem] overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          className="hover:scale-10 h-full] w-[full] overflow-hidden rounded-t-lg object-cover transition"
        />
      </div>
      <div className="flex flex-col space-y-3 bg-white px-3 py-5">
        <h1 className="family-sora h-[4rem] text-[1.2rem] font-semibold text-darkBlue">
          {title}
        </h1>
        <p className="family-poppins text-[1rem] text-gray-700">
          {beneficiary}
        </p>
        <ProgressBar target={target} donated={donatedAmount} />
        <div className="flex h-full w-full items-center justify-between">
          <button className="flex items-center rounded-md bg-lightBlue px-3 py-2 text-white">
            <p className="family-inter pr-2">Donate Now</p>
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
