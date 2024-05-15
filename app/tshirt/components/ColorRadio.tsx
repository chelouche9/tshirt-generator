import { Box, HStack, useRadio, useRadioGroup } from "@chakra-ui/react";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="99px"
        width="40px"
        height="40px"
        bg={props.color}
        boxSizing="border-box"
        _checked={{
          borderWidth: "3px",
          borderColor: "teal.500",
        }}
        transition="all 0.2s"
      ></Box>
    </Box>
  );
}

interface SizeRadioProps {
  onChange: (value: string) => void;
}

export default function ColorRadio({ onChange }: SizeRadioProps) {
  const options = [
    { name: "Black", value: "#0b0b0b" },
    { name: "White", value: "#fff" },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    defaultValue: "Black",
    onChange,
  });

  const group = getRootProps();

  return (
    <>
      <HStack {...group} mb="20px">
        {options.map((color) => {
          const radio = getRadioProps({ value: color.name });
          return (
            <RadioCard key={color.name} color={color.value} {...radio}>
              {color.name}
            </RadioCard>
          );
        })}
      </HStack>
    </>
  );
}
