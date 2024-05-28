import { Form } from "react-router-dom";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
export default function JoinRoom() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Join Room</h1>
      <Form method="POST">
        <FormControl isRequired marginY={2}>
          <FormLabel>Room Code : </FormLabel>
          <Input
            borderRadius="1rem"
            paddingX="18px"
            paddingY="18px"
            border="1px solid #12182B"
            type="number"
            name="name"
            placeholder="Room Code..."
          />
        </FormControl>
        <Button
          bgColor={"transparent"}
          borderWidth={2}
          borderColor={"#12182B"}
          color={"black"}
          type="submit"
          width={"100%"}
          marginTop={"10px"}
          borderRadius="1rem"
          _hover={{ bgColor: "#12182B", color: "white" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
