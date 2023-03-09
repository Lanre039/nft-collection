import * as React from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Container,
  Heading,
  Divider,
  useDisclosure,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NftCard } from "./components/NftCard";
import { NftModal } from "./components/Modal";
import { useState } from "react";
import mockdata from "./mock-data.json";
import { IData } from "./types";
import { CustomParticles } from "./CustomParticles";

export const App = () => {
  const [modalData, setModalData] = useState<IData>({} as IData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (data: IData) => {
    onOpen();
    setModalData(data);
  };

  const handleClose = () => {
    onClose();
    setModalData({} as IData);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomParticles color={theme.colors.current} />
        <Box paddingTop="6">
          <Container maxW="1240px">
            <Stack
              direction={["column", "row"]}
              margin={4}
              justifyContent="space-between"
            >
              <Box>
                <Heading textAlign="center">NFT Collections</Heading>
              </Box>

              <ColorModeSwitcher />
            </Stack>
          </Container>
          <Divider my="6" />
          <Container maxW="1240px">
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px">
              {mockdata.map((item, idx) => (
                <NftCard key={idx} data={item} onClick={handleClick} />
              ))}
            </SimpleGrid>
          </Container>
          <NftModal data={modalData} isOpen={isOpen} onClose={handleClose} />
        </Box>
      </ChakraProvider>
    </>
  );
};
