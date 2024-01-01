import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import { MdOutlineRecommend } from "react-icons/md";

const ProfileCard = () => {
  return (
    <Flex
      marginTop="25"
      width="100%"
      gap="2"
      border="1px solid lightgray"
      rounded="10"
      padding="6"
    >
      <img
        className="h-10 w-10 rounded-full"
        src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/362237826_962672261681884_8704361258993556260_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEAB2vIfEY2vLQRFbkhNkQMTy1vnmmMMlFPLW-eaYwyUVEsot6HjZzQWZF4XJinc9ig8xIKQMiNY2PHoVbfdb52&_nc_ohc=KrvXNdJ1YbMAX91I4Zo&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfAVZeTf78z5yZGvkml1M3sZPZNC8lDDvZMXNK5kJoZTcA&oe=6596E201"
        alt=""
      />
      <Box>
        <Heading as="h4" size="md" color="green">
          Prodip K.
        </Heading>
        <Heading as="h6" size="sm">
          React, Next Js & Javascript Expert | Frontend Developer
        </Heading>
        <Box display="flex" gap="100px" marginTop="20px">
          <Box>
            <Heading as="h6" size="sm">
              Madaripur, Bangladesh
            </Heading>
            <Text>10:00 AM 00:00 Time</Text>
          </Box>
          <Box>
            <Heading
              as="h6"
              size="sm"
              display="flex"
              alignItems="center"
              gap="1"
            >
              <MdOutlineRecommend /> 94% JOB SUCCESS
            </Heading>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProfileCard;
