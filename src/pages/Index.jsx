import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image, Spacer } from "@chakra-ui/react";
import { FaCalendarAlt, FaMapMarkerAlt, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} align="center">
        <Heading size="md">EventMaster</Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">Events</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="blue.600" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Discover Amazing Events</Heading>
        <Text fontSize="lg">Find events that match your interests and book your tickets now!</Text>
      </Box>

      {/* Event Listings */}
      <Container maxW="container.lg" py={10}>
        <Heading size="lg" mb={6}>Upcoming Events</Heading>
        <VStack spacing={8}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" w="100%">
            <Image src="https://via.placeholder.com/800x400" alt="Event Image" />
            <Box p={6}>
              <Heading size="md" mb={2}>Event Title</Heading>
              <HStack spacing={4} mb={4}>
                <HStack>
                  <FaCalendarAlt />
                  <Text>12th Dec 2023</Text>
                </HStack>
                <HStack>
                  <FaMapMarkerAlt />
                  <Text>New York, NY</Text>
                </HStack>
                <HStack>
                  <FaTicketAlt />
                  <Text>$50</Text>
                </HStack>
              </HStack>
              <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              <Link color="blue.500" href="#">Learn More</Link>
            </Box>
          </Box>
          {/* Repeat similar blocks for more events */}
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={6} textAlign="center">
        <Text>&copy; 2023 EventMaster. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;