import { Avatar, Box, Flex, Link, Popover, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

export const Profile = () => {
    return (
        <Popover placement='top-start'>
            <PopoverTrigger>
                <Box as='button'>
                    <Avatar bg='original.100' size='md' rounded='2xl' name='Lorem Ipsum' />
                </Box>
            </PopoverTrigger>
            <PopoverContent bg='original.700' border='0' rounded='2xl' shadow='dark-lg'>
                <Flex direction='column' px='4'>
                    <PopoverHeader textAlign='center' fontSize='18' fontWeight='bold' borderColor='original.800' px='0' py='4'>Notifications</PopoverHeader>
                    <PopoverBody px='0' py='4'>

                    </PopoverBody>
                    <PopoverFooter textAlign='center' borderColor='original.800' px='0' py='4'>
                        <Link>Show more</Link>
                    </PopoverFooter>
                </Flex>
            </PopoverContent>
        </Popover >
    );
}