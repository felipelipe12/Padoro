import { Button, Center, Flex, FormControl, FormLabel, Image, Input, Link, Text } from "@chakra-ui/react";

export const Access = () => {
    return (
        <Center h='100dvh'>
            <Flex bg='original.300' rounded='2xl' h='500px'>
                <Flex bgImage='url(/AccessImage.png)' bgPosition='center' bgRepeat='no-repeat' bgSize='cover' w='500px' borderRadius='1rem 0  0 1rem' />
                <Flex direction='column' justify='space-between' align='center' w='400px' px='10' py='14'>
                    <Image src='/Logo.png' w='160px' />
                    <FormControl isRequired>
                        <Flex direction='column' gap='5'>
                            <Flex direction='column' gap='2'>
                                <Flex direction='column'>
                                    <FormLabel fontSize='14' mx='0' my='1'>E-mail</FormLabel>
                                    <Input type='email' name='email' placeholder='email@domain.com' />
                                </Flex>
                                <Flex direction='column'>
                                    <FormLabel fontSize='14' mx='0' my='1'>Password</FormLabel>
                                    <Input type='password' name='password' placeholder='********' />
                                </Flex>
                            </Flex>
                            <Flex direction='column' gap='1'>
                                <Button bg='original.100' color='original.200' _hover={{ bg: 'original.200', color: 'original.100' }}>Submit</Button>
                                <Flex direction='column' align='end'>
                                    <Link fontSize='14'>Forgot your password?</Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </FormControl>
                    <Text>Don't have access? <Link href='/Register' fontWeight='bolder'>Register!</Link></Text>
                </Flex>
            </Flex>
        </Center >
    );
}