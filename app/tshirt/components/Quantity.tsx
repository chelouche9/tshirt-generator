import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";

interface QuantityProps {
  onChange: (value: number) => void;
  value: number;
}

export default function Quantity({ value, onChange }: QuantityProps) {
  return (
    <Flex
      w="176px"
      borderWidth="1px"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="md"
      p="6px"
      mb="20px"
    >
      <Button
        fontSize="12px"
        onClick={() => onChange(value - 1)}
        isDisabled={value <= 0}
      >
        <MinusIcon />
      </Button>
      <Text fontSize="18px" fontWeight="600">
        {value}
      </Text>
      <Button fontSize="12px" onClick={() => onChange(value + 1)}>
        <AddIcon />
      </Button>
    </Flex>
  );
}
