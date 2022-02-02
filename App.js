import React from "react"
import { View, Text } from "react-native"
import { Provider } from "react-redux"
import Navigation from "./src/navigation"
import { Store } from "./src/redux"

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  )
}

export default App