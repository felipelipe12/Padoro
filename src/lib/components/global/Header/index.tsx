import { Flex } from "@chakra-ui/react";
import { Apps } from "../../widget/Popover/Apps";
import { Notifications } from "../../widget/Popover/Notifications";
import { Profile } from "../../widget/Popover/Profile";

export const Header = () => {
    return (
        <Flex h='20' w={{ sm: 'full', md: 'full', xl: 'full' }} bg='original.700' justify='space-between' align='center' p='4'>
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
    );
}