import React, { useState } from "react";
import { Box, Flex, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaBus, FaPlane, FaTrain, FaTaxi, FaCar } from "react-icons/fa";

// Mock API response
const transportationData = {
  bus: { lat: 35.6895, lng: 139.6917 },
  plane: { lat: 34.0522, lng: -118.2437 },
  train: { lat: 51.5074, lng: -0.1278 },
  taxi: { lat: 40.7128, lng: -74.006 },
  car: { lat: 48.8566, lng: 2.3522 },
};

const Index = () => {
  const [selectedTransport, setSelectedTransport] = useState("bus");

  // Placeholder function for map rendering
  const renderMap = (location) => {
    // In a real application, this is where you would render a map with a marker at the given location
    // For this example, it's just a placeholder image
    return (
      <Box boxSize="lg" bg="gray.200" p={4} borderRadius="md">
        <Text>
          Map displaying location: {location.lat}, {location.lng}
        </Text>
        <Image src="https://images.unsplash.com/photo-1596025015373-fc39b4d4de2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjBwbGFjZWhvbGRlcnxlbnwwfHx8fDE3MDkzMzgyODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map placeholder" />
      </Box>
    );
  };

  return (
    <VStack spacing={8} p={8}>
      <Heading>Transportation Locator</Heading>
      <Flex wrap="wrap" justify="center" gap={4}>
        <Button leftIcon={<FaBus />} onClick={() => setSelectedTransport("bus")}>
          Bus
        </Button>
        <Button leftIcon={<FaPlane />} onClick={() => setSelectedTransport("plane")}>
          Plane
        </Button>
        <Button leftIcon={<FaTrain />} onClick={() => setSelectedTransport("train")}>
          Train
        </Button>
        <Button leftIcon={<FaTaxi />} onClick={() => setSelectedTransport("taxi")}>
          Taxi
        </Button>
        <Button leftIcon={<FaCar />} onClick={() => setSelectedTransport("car")}>
          Car
        </Button>
      </Flex>
      {renderMap(transportationData[selectedTransport])}
    </VStack>
  );
};

export default Index;
