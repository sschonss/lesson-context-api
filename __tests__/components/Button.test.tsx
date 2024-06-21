import { describe, expect, test } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import Button from "../../src/components/Button";
import { fireEvent } from "@testing-library/react-native";

describe("Button", () => {
  test("should title text be 'Prev'", () => {
    const button = renderer.create(
      <Button title="Prev" onPress={() => {}} color="red" />
    );

    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    expect(buttonElement.props.title).toBe("Prev");
  });

  test("should color be 'red'", () => {
    const button = renderer.create(
      <Button title="Prev" onPress={() => {}} color="red" />
    );

    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    expect(buttonElement.props.color).toBe("red");
  });

  test("should call onPress", () => {
    const onPress = jest.fn();
    const button = renderer.create(
      <Button title="Prev" onPress={onPress} color="red" />
    );

    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    buttonElement.props.onPress();
    expect(onPress).toBeCalled();
  });

  test("should match snapshot", () => {
    const button = renderer.create(
      <Button title="Prev" onPress={() => {}} color="red" />
    );

    expect(button.toJSON()).toMatchSnapshot();
  });

  test("should match snapshot with different props", () => {
    const button = renderer.create(
      <Button title="Next" onPress={() => {}} color="blue" />
    );

    expect(button.toJSON()).toMatchSnapshot();
  });

  test("mock function should be called", () => {
    const onPress = jest.fn(() => console.log("Button pressed"));
    const button = renderer.create(
      <Button title="Next" onPress={onPress} color="blue" />
    );

    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    buttonElement.props.onPress();
    expect(onPress).toBeCalled();
  });

  test("pressing button should call onPress", () => {
    const onPress = jest.fn(() => console.log("Button pressed"));
    const button = renderer.create(
      <Button title="Next" onPress={onPress} color="blue" />
    );

    const instance = button.root;
    const buttonElement = instance.findByType(Button);
    fireEvent.press(buttonElement);
    expect(onPress).toBeCalled();
  });

  test("should throw error", () => {
    const onPress = jest.fn(() => {
      throw new Error("Error");
    });

    const button = renderer.create(
      <Button title="Next" onPress={onPress} color="blue" />
    );

    const instance = button.root;
    const buttonElement = instance.findByProps({ title: "Next" });

    expect(() => buttonElement.props.onPress()).toThrowError();
  });
});
