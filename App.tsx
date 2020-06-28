import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import FormScreen from "./src/screens/formScreen/FormScreen";
import DetailsScreen from "./src/screens/detailScreen/DetailsScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <DetailsScreen/>
    );
  }
}
