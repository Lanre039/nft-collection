import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { IData } from "../types";
import { NftDetailsCard } from "./NftDetailsCard";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  data: IData;
}
export const NftModal = ({ isOpen, onClose, data }: IProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay
        bg="blackAlpha.100"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
      <ModalContent>
        <ModalBody>
          <Box p="5" pl="3" position="relative">
            <Box
              position="absolute"
              right="20px"
              rounded={"full"}
              bg="blackAlpha.100"
              p="2"
            >
              <IoMdClose />
            </Box>
            <NftDetailsCard data={data} onClose={onClose} />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
