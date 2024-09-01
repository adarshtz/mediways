import CountUps from "../components/count-up";
import { CountingData } from "../data";

const Counting = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-4 border flex-wrap">
      {CountingData.map((item, index) => (
        <CountUps key={index} {...item} />
      ))}
    </div>
  );
};

export default Counting;
