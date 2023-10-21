import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import StyledText from "./components/StyledText"

const Main = () => {
  return (
    <View>
      <StyledText fontSize={"xs"} color={"black"} fontWeight={"bold"}>hello world</StyledText>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({})