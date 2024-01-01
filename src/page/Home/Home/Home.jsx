import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import ProfileCard from "../ProfileCard/ProfileCard";
import JobDetails from "../JobDetails/JobDetails";
import { useSelector } from "react-redux";
import ContractTerms from "../ContractTerms/ContractTerms";

const Home = () => {
  const info = useSelector((state) => state?.jobOffer);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = () => {
    console.log(info);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="mx-auto py-8 px-52">
      <Heading as="h5" size="xl" className="">
        Send an Offer
      </Heading>
      <ProfileCard />
      <JobDetails />
      <ContractTerms />
      <div className="border border-gray-300 rounded-lg mt-8 p-5">
        <div className="flex gap-1">
          <input
            type="checkbox"
            name=""
            id=""
            checked={isChecked}
            onChange={handleCheckboxChange}
          />{" "}
          <p>
            Yes, I understand and agree to the{" "}
            <span className="text-green-500">Upwork Terms of Service</span>,
            including the <span className="text-green-500">User Agreement</span>{" "}
            and <span className="text-green-500">Privacy Policy</span>
          </p>
        </div>
        <div className="font-semibold text-right">
          <button className="text-green-500 mr-10">Cancel</button>
          <button
            className={`py-2 px-5 text-white cursor-pointer rounded-full bg-green-500 w-fit mt-20 ${
              !isChecked && "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSubmit}
            disabled={!isChecked}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
