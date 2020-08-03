import React from "react"
import { render } from "@testing-library/react-native"
import Button from "../lib/Button"

jest.mock("react-native-device-info")
describe("Button", () => {
  it("render correctly", () => {
    const { getByTestId } = render(<Button />)
    const button = getByTestId("button")
    expect(button).toBeDefined()
  })
})
