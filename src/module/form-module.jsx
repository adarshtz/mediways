import { X } from "lucide-react";
import { useContext } from "react";
import { FormContext } from "../../contextprovider";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const FormModule = () => {
  const { isFormActive, setIsFormActive } = useContext(FormContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const serviceId = "service_2etdexx";
    const templateId = "template_v8bmzvq";
    const publicKey = "e4Ew1VeMYnj1yTU1n";

    const templateParams = {
      campaignName: data.campaignName,
      beneficiaryName: data.beneficiaryName,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });

    console.log(data);
  };

  return (
    <div className="h-fit w-[45rem] rounded-md border bg-white p-5">
      <div id="card-header" className="flex justify-between">
        <h1 className="family-sora text-2xl font-bold text-darkBlue">
          Create a Campaign
        </h1>
        <button onClick={() => setIsFormActive(!isFormActive)}>
          <X className="family-sora text-darkBlue" />
        </button>
      </div>
      <div id="card-description">
        <p className="font-medium text-darkBlue/70">
          Enter the details to create a new campaign
        </p>
      </div>
      <div id="card-content">
        <form
          id="my-form"
          className="space-y-4 py-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="family-sora py-2 font-semibold">
              Campaign Name
            </label>
            <input
              type="text"
              placeholder="enter your campaign name"
              {...register("campaignName")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2"
              name="campaignName"
              required
            />
          </div>
          <div>
            <label className="family-sora py-2 font-semibold">
              Beneficiary Name
            </label>
            <input
              type="text"
              placeholder="enter the beneficiary name"
              z
              {...register("beneficiaryName")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2"
              required
            />
          </div>
          <div>
            <label className="family-sora py-2 font-semibold">
              Donation Target
            </label>
            <input
              type="number"
              placeholder="enter the donation amount"
              {...register("dontationTarget")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2"
              required
            />
          </div>
          <div>
            <label className="family-sora py-2 font-semibold">UPI ID</label>
            <input
              type="text"
              placeholder="enter the upi id"
              {...register("upiId")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2"
              required
            />
          </div>
          <div>
            <label className="family-sora py-2 font-semibold">
              Bank Account Information
            </label>
            <input
              type="text"
              placeholder="enter your campaign name"
              {...register("bankAccountInfo")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2"
              required
            />
          </div>
          <div>
            <label className="family-sora py-2 font-semibold">
              Description
            </label>
            <textarea
              type="text"
              placeholder="describe about the campaign"
              {...register("bankAccountInfo")}
              className="h-[3rem] w-full rounded-md border border-darkBlue pl-2 pt-2"
              required
            />
          </div>

          <button
            type="submit"
            className="family-poppins w-full rounded-md border bg-lightBlue px-4 py-3 font-semibold text-white"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModule;
