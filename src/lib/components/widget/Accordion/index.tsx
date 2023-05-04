import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Accordion as ChakraAccordion, Flex, Icon, Text } from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa";

export const Accordion = () => {
    return (
        <ChakraAccordion allowToggle>
            <AccordionItem border='0'>
                <AccordionButton rounded='md' _expanded={{ bg: 'gray.800', color: 'white' }}>
                    <Icon as={FaUsers} mr='3' />
                    <Text flex='1' textAlign='left'>Users</Text>
                    <AccordionIcon />
                </AccordionButton>
                <AccordionPanel p='0' my='2'>
                    <Flex direction='column' gap='1'>
                        <Button w='full' bg='gray.900'>Teste</Button>
                        <Button w='full' bg='gray.900'>Teste</Button>
                        <Button w='full' bg='gray.900'>Teste</Button>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </ChakraAccordion>
    );
}