import { Content } from "@/lib/layout/Dashboard/home";
import { Flex } from "@chakra-ui/react";
import { Apps } from "../../widget/Popover/Apps";
import { Notifications } from "../../widget/Popover/Notifications";
import { Profile } from "../../widget/Popover/Profile";

export const Header = () => {
    return (
        <Flex direction='column' w='full'>
            <Flex justify='space-between' align='center' bg='original.700' h='20' px='4' py='2'>
                <Flex>
                    {/* <Input /> */}
                </Flex>
                <Flex align='center' gap='5'>
                    {/* Component - Apps */}
                    <Apps />
                    {/* Component - Notifications */}
                    <Notifications />
                    {/* Component - Profile */}
                    <Profile />
                </Flex>
            </Flex>
            <Flex pt='20'>
                {/* Content */}
                <Content />
            </Flex>
        </Flex >
    );
}