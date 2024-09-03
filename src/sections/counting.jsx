import CountUps from "../components/count-up";
import { CountingData } from "../data";

const Counting = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 border">
      {CountingData.map((item, index) => (
        <CountUps key={index} {...item} />
      ))}
    </div>
  );
};

export default Counting;
