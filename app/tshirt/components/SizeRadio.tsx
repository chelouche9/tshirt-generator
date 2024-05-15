import {
  Box,
  HStack,
  useRadio,
  useRadioGroup,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

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
        borderRadius="md"
        fontSize="16px"
        boxSizing="border-box"
        fontWeight="600"
        _checked={{
          bg: "teal.50",
          color: "teal.500",
          borderColor: "teal.500",
          borderWidth: "1px",
        }}
        px={4}
        py={2}
        transition="all 0.2s"
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface SizeRadioProps {
  onChange: (value: string) => void;
}

export default function SizeRadio({ onChange }: SizeRadioProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const options = ["XS", "S", "M", "L", "XL", "2XL"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "L",
    onChange,
  });

  const group = getRootProps();

  return (
    <>
      <HStack {...group} mb="8px">
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
      <Text
        fontSize="12px"
        fontWeight="500"
        textDecoration="underline"
        cursor="pointer"
        onClick={onOpen}
        mb="20px"
      >
        View our sizing guide
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sizing Chart (Inches)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Size</Th>
                    <Th>Length</Th>
                    <Th>Width</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>XS</Td>
                    <Td>27</Td>
                    <Td>16.5</Td>
                  </Tr>
                  <Tr>
                    <Td>S</Td>
                    <Td>28</Td>
                    <Td>18</Td>
                  </Tr>
                  <Tr>
                    <Td>M</Td>
                    <Td>29</Td>
                    <Td>20</Td>
                  </Tr>
                  <Tr>
                    <Td>L</Td>
                    <Td>30</Td>
                    <Td>22</Td>
                  </Tr>
                  <Tr>
                    <Td>XL</Td>
                    <Td>31</Td>
                    <Td>24</Td>
                  </Tr>
                  <Tr>
                    <Td>2XL</Td>
                    <Td>32</Td>
                    <Td>26</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
