/* eslint-disable react/no-unescaped-entities */
import { Heading } from "../components";

const About = () => {
  return (
    <div className="overflow-hidden pt-24">
      <div className="relative">
        <div className="">
          <img
            src="/public/assets/banner.jpg"
            className="h-[35rem] w-full object-cover brightness-50"
          />
        </div>
        <div className="absolute bottom-10 ml-8 w-[70%] space-y-2 bg-black/60 px-10 py-5">
          <h1 className="family-poppins text-4xl font-bold text-white">
            About us
          </h1>
          <p className="family-poppins text-xl font-normal text-white">
            Your gateway to high-quality healthcare services and an unparalleled
            holiday experience in India
          </p>
        </div>
      </div>
      <div className="verflow-hidden py-10">
        <Heading title={"About us"} />
        <div className="px-18 family-sora m-auto flex w-11/12 flex-wrap space-y-8 p-5 md:w-3/4">
          <div>
            <h1 className="family-sora text-2xl font-bold text-black">
              About Us
            </h1>
            <p>
              Welcome to Mediways.in, your trusted partner in crowdfunding for
              medical and social causes. Our mission is to make a meaningful
              difference in the lives of those in need by harnessing the power
              of community support. At Mediways.in, we believe that together, we
              can overcome the most challenging circumstances.
            </p>
          </div>
          <div>
            <h1 className="family-sora text-2xl font-bold text-black">
              What we do
            </h1>
            <p>
              Mediways.in is dedicated to raising funds for individuals and
              communities facing medical emergencies and social hardships.
              Whether it's covering medical expenses, supporting a cause close
              to your heart, or helping someone rebuild their life, we provide a
              platform where every contribution counts.
            </p>
          </div>
          <div>
            <h1 className="family-sora text-2xl font-bold text-black">
              Why choose us?
            </h1>
            <p>
              <ul className="family-sora space-y-3 px-10 py-2">
                <li className="text-black">
                  <span className="pr-2 font-bold">
                    1. Constant Updates on All Campaigns:
                  </span>
                  We ensure you stay informed every step of the way with regular
                  updates on the progress of the campaigns you support.
                </li>
                <li className="text-black">
                  <span className="pr-2 font-bold">
                    2. Safe and Transparent:
                  </span>
                  our trust is our priority. We maintain the highest standards
                  of security and transparency, ensuring that every donation is
                  used exactly as intended.
                </li>
                <li className="text-black">
                  <span className="pr-2 font-bold">
                    3. Verified Beneficiaries
                  </span>
                  We rigorously verify all beneficiaries to ensure that your
                  contributions go to those who genuinely need help.
                </li>
              </ul>
            </p>
          </div>
          <p>
            We understand the urgency and importance of timely assistance, and
            that's why we've created a user-friendly, transparent, and secure
            platform that connects donors with those who need help the most. Our
            goal is to empower people to make a difference, one donation at a
            time. Join us in our mission to bring hope, healing, and positive
            change. Together, we can turn compassion into action and create a
            better tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
