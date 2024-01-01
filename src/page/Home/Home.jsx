/* eslint-disable react-hooks/rules-of-hooks */
import { Heading } from "@chakra-ui/react";
import ProfileCard from "../../components/ProfileCard";
import JobDetails from "../../components/JobDetails";
import { useSelector } from "react-redux";
const Home = () => {
  const info = useSelector((state) => state?.jobOffer.jobDetails);

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
