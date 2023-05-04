import { Avatar, Flex, Icon, IconButton, Link, Mark, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Text } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
export const Notifications = () => {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <IconButton aria-label='Apps' bg='original.600' rounded='2xl' _hover={{ bg: 'original.800' }}>
                    <Icon as={FaBell} color='original.50' fontSize='18' />
                </IconButton>
            </PopoverTrigger>
            <PopoverContent w='md' bg='original.700' border='0' rounded='2xl' shadow='dark-lg'>
                <Flex direction='column' px='4'>
                    <PopoverHeader textAlign='center' fontSize='18' fontWeight='bold' borderColor='original.800' px='0' py='4'>Notifications</PopoverHeader>
                    <PopoverBody px='0' py='4'>
                        <Flex direction='column' gap='2'>
                            <Flex bg='original.800' gap='4' rounded='2xl' p='4'>
                                <Flex align='center'>
                                    <Avatar name='Ipsun Lorem'></Avatar>
                                </Flex>
                                <Flex direction='column' justify='center'>
                                    <Text fontSize='16px'><Mark fontWeight='bold' color='white'>Ipsum Lorem</Mark> create Card in Trello.</Text>
                                    <Text fontSize='12px'>10 min ago</Text>
                                </Flex>
                            </Flex>
                            <Flex bg='original.800' gap='4' rounded='2xl' p='4'>
                                <Flex align='center'>
                                    <Avatar name='Lorem Ipsun'></Avatar>
                                </Flex>
                                <Flex direction='column' justify='center'>
                                    <Text fontSize='16px'><Mark fontWeight='bold' color='white'>Lorem Ipsum</Mark> create Card in Trello.</Text>
                                    <Text fontSize='12px'>10 min ago</Text>
                                </Flex>
                            </Flex>
                            <Flex bg='original.800' gap='4' rounded='2xl' p='4'>
                                <Flex align='center'>
                                    <Avatar name='Lorem Ipsun'></Avatar>
                                </Flex>
                                <Flex direction='column' justify='center'>
                                    <Text fontSize='16px'><Mark fontWeight='bold' color='white'>Lorem Ipsum</Mark> create Card in Trello.</Text>
                                    <Text fontSize='12px'>10 min ago</Text>
                                </Flex>
                            </Flex>
                            <Flex bg='original.800' gap='4' rounded='2xl' p='4'>
                                <Flex align='center'>
                                    <Avatar name='Lorem Ipsun'></Avatar>
                                </Flex>
                                <Flex direction='column' justify='center'>
                                    <Text fontSize='16px'><Mark fontWeight='bold' color='white'>Lorem Ipsum</Mark> create Card in Trello.</Text>
                                    <Text fontSize='12px'>10 min ago</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </PopoverBody>
                    <PopoverFooter textAlign='center' borderColor='original.800' px='0' py='4'>
                        <Link>Show more</Link>
                    </PopoverFooter>
                </Flex>
            </PopoverContent>
        </Popover >
    );
}