"use client";

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { logEvent } from "firebase/analytics";
import { useRouter } from "next/navigation";

import { analytics } from "../utils/firebase";

export default function Mockups() {
  const router = useRouter();
  const itemsToShow = useBreakpointValue({ base: 3, md: 6 });

  const onStart = () => {
    router.push(`design`);
    logEvent(analytics!, "start");
  };

  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="50px"
    >
      <Box maxW="1100px">
        <Stack spacing="24px" textAlign="center">
          <Heading as="h3" mt="50px">
            Create Your Own Unique Designs
          </Heading>
          <Text>
            Follow our simple steps to create your own unique designs.
          </Text>
        </Stack>
        <Stack spacing="24px" alignItems="center" mt="50px">
          <SimpleGrid columns={[1, 3]} spacing="24px">
            {["1", "2", "3", "4", "5", "6"]
              .slice(0, itemsToShow)
              .map((image) => {
                return (
                  <Box key={image} padding="20px" bgColor="gray.200">
                    <Image src={`mockups/${image}.png`} alt={image} />
                  </Box>
                );
              })}
          </SimpleGrid>
        </Stack>
      </Box>
      <Button colorScheme="teal" size="lg" mt="50px" w="100%" onClick={onStart}>
        Design Your T-Shirt Now
      </Button>
    </Flex>
  );
}
