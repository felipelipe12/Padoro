import { Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { FaIndent } from "react-icons/fa";
import { Accordion } from "../../widget/Accordion";

export const Sidebar = () => {
    return (
        <Flex h='100vh' w='80' bg='original.700' direction='column'>
            <Flex h='20' justify='center' align='center' p='4'>
                <Image src='/Logo.png' w='150px' />
            </Flex>
            <Flex h='full' direction='column' justify='space-between'>
                <Flex direction='column' p='4'>
                    <Accordion />
                </Flex>
                <Flex bg='original.800' justify='right' p='3'>
                    <IconButton bg='original.600' size='sm' rounded='xl' aria-label='Toggle'>
                        <Icon as={FaIndent} color='original.50' fontSize='16' />
                    </IconButton>
                </Flex>
            </Flex>
        </Flex>
    );
}