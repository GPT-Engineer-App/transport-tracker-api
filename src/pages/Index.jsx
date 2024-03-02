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
  const renderMap = (transportData) => {
    return (
      <Box boxSize="lg" bg="gray.200" p={4} borderRadius="md">
        {Object.entries(transportData).map(([key, location]) => (
          <Text key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)} location: {location.lat}, {location.lng}
          </Text>
        ))}
        <Image src="https://images.unsplash.com/photo-1596025015373-fc39b4d4de2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjBwbGFjZWhvbGRlcnxlbnwwfHx8fDE3MDkzMzgyODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Map placeholder" />
      </Box>
    );
  };

  return (
    <VStack spacing={8} p={8}>
      <Heading>Transportation Locator</Heading>
      {renderMap(transportationData)}
    </VStack>
  );
};

export default Index;
