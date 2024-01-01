/* eslint-disable react-hooks/rules-of-hooks */
import { Heading } from "@chakra-ui/react";
import ProfileCard from "../ProfileCard/ProfileCard";
import JobDetails from "../JobDetails/JobDetails";
import { useSelector } from "react-redux";
import ContractTerms from "../ContractTerms/ContractTerms";
const Home = () => {
  const info = useSelector((state) => state?.jobOffer);

  const handleSubmit = () => {
    console.log(info);
  };

  return (
    <div className="max-w-[1440px] mx-auto py-8 px-20">
      <Heading as="h5" size="xl" className="">
        Send an Offer
      </Heading>
      <ProfileCard />
      <JobDetails />
      <ContractTerms />
      <div
        className="py-2 px-5 text-white cursor-pointer rounded-full bg-green-500 w-fit mt-20"
        onClick={handleSubmit}
      >
        Continue
      </div>
    </div>
  );
};

export default Home;
