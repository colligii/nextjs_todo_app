import { Box, Heading, Input, Button } from "@chakra-ui/react"
import ToDoComponent from "../components/ToDoComponent";
import { useCallback, useRef } from "react"
import { useDispatch } from "react-redux";
import Head from "next/head";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {

  const dispatch = useDispatch();

  const todoAppInput = useRef(null);

  const [portrait] = useMediaQuery(['(orientation:portrait)'])

  const submitForm = useCallback((e) => {
    e.preventDefault();
    if(todoAppInput !== null) {

      const todoAppValue = todoAppInput.current.value;

      if(!/[0-9a-zA-Z]{2}/.test(todoAppValue)) return alert("Coloque mais informações nos campos")

      dispatch({ type: 'ADD_TO_LIST', value: { text: todoAppValue, checked: false } })

      todoAppInput.current.value = ""

    }

  },[dispatch])

  return (
    <>
      <Head>
        <title>ToDo App</title>
      </Head>
      <Box
        h="100vh"
        background="#5b5ed1"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          padding="10"
          background="#E0E6F8"
          borderRadius="20"
          boxShadow="10px 10px 30px rgba(0, 0, 0, 0.4)"
          width={portrait ? "80vw" : "50vw"}
          maxWidth="60vh"
          height="60vh"
          display="grid"
          gridTemplateRows="min-content auto min-content"
        >

          <Heading
            as="h3"
            size="sm"
            textAlign="center"
          >
            ToDO APP
          </Heading>

          <Box>
            <ToDoComponent/>
          </Box>

          <Box
          
          >
            <form
              style={{
                display: "grid",
                gridTemplateColumns: "auto min-content",
                columnGap: "2px"
              }}
              onSubmit={submitForm}
            >
              <Input
                ref={todoAppInput}
                background="white"
                borderColor="blackAlpha.500"
              ></Input>
              <Button
                type="submit"
                colorScheme="blue"  
              >
                Enviar
              </Button>
            </form>
          </Box>

        </Box>

      </Box>
    </>
  )
}