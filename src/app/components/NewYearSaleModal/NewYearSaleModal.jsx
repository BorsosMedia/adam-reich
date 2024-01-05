"use client";

import styles from "./NewYearSaleModa.module.css";

import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import Link from "next/link";

const NewYearSaleModal = () => {
  const { onOpenChange } = useDisclosure();

  return (
    <Modal
      backdrop="opaque"
      isDismissable={true}
      onOpenChange={onOpenChange}
      defaultOpen={true}
      className="popup my-[12.5%] h-[75%] w-fit max-w-[320px] md:max-w-[650px] md:px-[100px] py-20 md:py-0 bg-transparent shadow-none"
      classNames={{
        closeButton:
          "text-pink hover:text-white hover:bg-blue transition-all ease-in-out duration-300 md:-translate-x-12",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody className="flex flex-col items-center justify-evenly text-center">
            <h2 className="font-Organetto text-pink text-3xl md:text-4xl 2xl:text-6xl">
              <span className="text-[1.5em] whitespace-nowrap">new year</span>
              <br />
              <span className="text-blue whitespace-nowrap">new challenge</span>
            </h2>
            <h3 className="font-Mortend uppercase font-black text-white tracking-widest text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">
              join the new year&apos;s contest and Get Ripped While Winning!
            </h3>

            <Link href="#contest">
              <Button
                onPress={onClose}
                className={`${styles.bg} text-white rounded-full xl:px-20 xl:py-10 px-16 py-8 font-bold hover:scale-110 transition-all duration-300 ease-in-out text-2xl lg:text-3xl xl:text-5xl`}
              >
                Learn more
              </Button>
            </Link>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default NewYearSaleModal;
