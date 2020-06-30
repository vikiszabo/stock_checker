import React from "react";
import useCachedResources from "./src/hooks/useCachedResources";
import AppNavigator from "./src/navigation/AppNavigator";
import {SafeAreaProvider} from "react-native-safe-area-context";


const App: React.FC = () => {
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
};

export default App;
