import { Flex, Text } from "@chakra-ui/react";

export default function Info() {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      bgColor="gray.50"
      gap="10px"
      padding="15px"
    >
      <Flex flexDirection="row" gap="8px" color="gray.600" alignItems="center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          focusable="false"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path>
        </svg>
        <Text fontSize="16px" fontWeight="500">
          Free Shipping - 4-7 Business Days
        </Text>
      </Flex>
      <Flex flexDirection="row" gap="8px" color="gray.600" alignItems="center">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          focusable="false"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0H24V24H0z"></path>
            <path d="M12 13c1.657 0 3 1.343 3 3 0 .85-.353 1.616-.92 2.162L12.17 20H15v2H9v-1.724l3.693-3.555c.19-.183.307-.438.307-.721 0-.552-.448-1-1-1s-1 .448-1 1H9c0-1.657 1.343-3 3-3zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2zM4 12c0 2.527 1.171 4.78 3 6.246v2.416C4.011 18.933 2 15.702 2 12h2zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012C19.446 7.054 16.08 4 12 4 9.25 4 6.824 5.387 5.385 7.5H8v2H2v-6h2V6c1.824-2.43 4.729-4 8-4z"></path>
          </g>
        </svg>
        <Text fontSize="16px" fontWeight="500">
          We’re here for you 24/7
        </Text>
      </Flex>
    </Flex>
  );
}
