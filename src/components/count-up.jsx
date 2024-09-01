import CountUp from "react-countup";

// eslint-disable-next-line react/prop-types
const CountUps = ({ value, duration, title, span }) => {
  return (
    <div className="box flex h-48 w-72 flex-col items-center justify-center rounded-lg bg-lightBlue p-4 text-white">
      <h1 className="family-sora text-center text-2xl font-bold text-white">
        {title}
      </h1>
      <div className="family-poppins mt-5 text-2xl font-bold text-white">
        <CountUp start={0} end={value} duration={duration} separator="," />
        <span className="pl-2">{span}</span>
      </div>
    </div>
  );
};

export default CountUps;
