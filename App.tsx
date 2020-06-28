import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import FormScreen from "./src/screens/formScreen/FormScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <FormScreen/>
    );
  }
}
