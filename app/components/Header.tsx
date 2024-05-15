import { Flex, HStack, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex
        height="38px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomColor="rgba(18, 18, 18, 0.08)"
      >
        <Text fontSize="13px">Free shipping available on all orders!</Text>
      </Flex>
      <Flex
        height="85px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        borderBottomWidth="1px"
        borderBottomColor="rgba(18, 18, 18, 0.08)"
      >
        <HStack width="1100px" padding="0 50px" spacing="24px">
          <Text fontSize="28px">Logo</Text>
          <Text fontSize="14px">Design T-Shirt</Text>
        </HStack>
      </Flex>
    </>
  );
}
