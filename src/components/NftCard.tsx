import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import { IData } from "../types";

interface IProps {
  onClick: (args: any) => void;
  data: IData;
}

export const NftCard = ({ data, onClick }: IProps) => {
  const { id, name, image, availablility, price, equivalent, address } = data;
  return (
    <Card
      maxW="sm"
      // h="405px"
      // w="271px"
      height="fit-content"
      cursor="pointer"
      m={3}
      onClick={() => onClick(data)}
    >
      <CardBody>
        <Image
          // boxSize="150px"
          objectFit="cover"
          src={image}
          alt={name}
          borderRadius="lg"
          _hover={{
            objectFit: "cover",
            transition: "0.25s ease-in-out 0s",
          }}
        />
        <Stack mt="6" spacing="3">
          {/* <Divider /> */}
          <Box>
            <Text size="sm">{id}</Text>
            <Heading size="sm">{name}</Heading>
          </Box>
          {/* <Text fontSize="xl">{availablility}</Text> */}
          <HStack alignItems="center">
            <Heading color="blue.600" size="md">
              {equivalent}
            </Heading>
            <Text fontSize="sm">{price}</Text>
            {/* <Heading fontSize="sm">{price}</Heading> */}
          </HStack>
        </Stack>
      </CardBody>
      {/* <Divider /> */}
    </Card>
  );
};
