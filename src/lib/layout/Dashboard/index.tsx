import { Header } from "@/lib/components/global/Header";
import { Sidebar } from "@/lib/components/global/Sidebar";
import { Flex } from "@chakra-ui/react";

export const Dashboard = () => {
    return (
        <Flex>
            {/* Component Global - Sidebar */}
            <Sidebar />
            {/* Component Global - Header */}
            <Header />
        </Flex>
    );
}