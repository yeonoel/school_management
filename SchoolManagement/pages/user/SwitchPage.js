import React from "react";
import App from "test/App.js";
import inscription from "test/inscription.js";
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const screen = {
    App: {
        screen: App
    },
    inscription: {
        screen: inscription
    }
}

const StackNav = createStackNavigator(screen);

export default createAppContainer(StackNav);