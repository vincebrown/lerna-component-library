import React, { FC } from "react"
import { StyleSheet, Text, View } from "react-native"
import Theme from "@vincebrown/theme"

const Button: FC = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Theme.color.brand
    }
  })
  return (
    <View style={styles.container} testID="button">
      <Text>Hello World</Text>
    </View>
  )
}

export default Button
