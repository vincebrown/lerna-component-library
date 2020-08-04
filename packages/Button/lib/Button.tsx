import React, { FC } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Theme from "@vincebrown-org/theme"

const Button: FC = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Theme.color.primary200,
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: Theme.sizing.borderRadius,
      width: "70%",
      padding: Theme.padding.p4
    }
  })

  return (
    <TouchableOpacity style={styles.container} testID="button">
      <Text>CONTINUE!</Text>
    </TouchableOpacity>
  )
}

export default Button
