import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import AppNavigator from "./src/navigation/AppNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";
import FormScreen from "./src/screens/formScreen/FormScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
        <SafeAreaProvider>
          <AppNavigator/>
        </SafeAreaProvider>
    );
  }
}
