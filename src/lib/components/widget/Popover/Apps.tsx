import { Flex, Grid, GridItem, Icon, IconButton, Link, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { FaJs, FaThLarge, FaTrello, FaWhatsapp } from "react-icons/fa";
export const Apps = () => {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <IconButton aria-label='Apps' bg='original.600' rounded='2xl' _hover={{ bg: 'original.800' }}>
                    <Icon as={FaThLarge} color='original.50' fontSize='18' />
                </IconButton>
            </PopoverTrigger>
            <PopoverContent bg='original.700' border='0' rounded='2xl' shadow='dark-lg'>
                <Flex direction='column' px='4'>
                    <PopoverHeader textAlign='center' fontSize='18' fontWeight='bold' borderColor='original.800' px='0' py='4'>Apps</PopoverHeader>
                    <PopoverBody px='0' py='4'>
                        <Grid templateColumns='repeat(3, 1fr)' gap='4'>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='blue.400' rounded='2xl' _hover={{ bg: 'blue.500' }}>
                                        <Icon as={FaTrello} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>Trello</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='yellow.400' rounded='2xl' _hover={{ bg: 'yellow.500' }}>
                                        <Icon as={FaJs} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>App</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='purple.400' rounded='2xl' _hover={{ bg: 'purple.500' }}>
                                        <Icon as={FaJs} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>App</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='orange.400' rounded='2xl' _hover={{ bg: 'orange.500' }}>
                                        <Icon as={FaJs} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>App</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='red.400' rounded='2xl' _hover={{ bg: 'red.500' }}>
                                        <Icon as={FaJs} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>App</Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction='column' align='center' gap='2'>
                                    <IconButton aria-label='Notifications' bg='green.400' rounded='2xl' _hover={{ bg: 'green.500' }}>
                                        <Icon as={FaWhatsapp} color='original.50' fontSize='20' />
                                    </IconButton>
                                    <Text fontSize='12'>WhatsApp</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </PopoverBody>
                    <PopoverFooter textAlign='center' borderColor='original.800' px='0' py='4'>
                        <Link>Show more</Link>
                    </PopoverFooter>
                </Flex>
            </PopoverContent>
        </Popover >
    );
}