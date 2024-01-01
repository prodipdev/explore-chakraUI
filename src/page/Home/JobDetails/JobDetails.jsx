import {
  Heading,
  Text,
  Box,
  Select,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setJobDetails } from "../../../redux/features/jobOfferSlice";

const JobDetails = () => {
  const [formData, setFormData] = useState({
    selectedTeam: "",
    relatedJob: "",
    jobCategory: "1",
  });

  // update form data and dispatch to Redux
  const dispatch = useDispatch();
  const handleFormDataChange = (key, value) => {
    const updatedFormData = {
      ...formData,
      [key]: value,
    };
    setFormData(updatedFormData);
    dispatch(setJobDetails(updatedFormData));
  };
  return (
    <Box
      marginTop="25"
      width="100%"
      gap="2"
      border="1px solid lightgray"
      rounded="10"
      padding="5"
    >
      <Heading as="h4" size="md">
        Job Details
      </Heading>
      <Box marginTop="30">
        <Heading as="h5" size="sm">
          Hiring Team
        </Heading>
        <Select
          placeholder="CoFounderLab"
          marginTop="15"
          width="md"
          value={formData.selectedTeam}
          onChange={(e) => handleFormDataChange("selectedTeam", e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box marginTop="30">
        <Heading as="h5" size="sm" display="flex" gap="1">
          Related Job Posting <Text color="gray">(Optional)</Text>
        </Heading>
        <Select
          placeholder="Select an open job poet.."
          marginTop="15"
          width="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box marginTop="30">
        <Heading as="h5" size="sm">
          Related Job Posting
        </Heading>
        <Input placeholder="Basic usage" marginTop="15" />
      </Box>
      <Box marginTop={30}>
        <Heading as="h5" size="sm">
          Job Category
        </Heading>
        <RadioGroup
          value={formData.jobCategory}
          onChange={(value) => handleFormDataChange("jobCategory", value)}
          marginTop="15"
        >
          <Stack direction="column">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </Stack>
        </RadioGroup>
        <Text fontWeight="500" color="green" marginTop="2">
          See all categories
        </Text>
      </Box>
    </Box>
  );
};

export default JobDetails;
