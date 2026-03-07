import React from "react";
import { Button, Text, View } from "react-native";

export default function App() {
const [page, setPage] = React.useState("home");

if (page === "home") {
    return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ fontSize: 24 }}>Home Screen</Text>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Button title="Go to About" onPress={() => setPage("about")} />
    </View>
    );
}

return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
    <Text style={{ fontSize: 24 }}>About Screen</Text>
    <Text>This is my Expo mobile app for the React frameworks assignment.</Text>
    <Button title="Go to Home" onPress={() => setPage("home")} />
    </View>
);
}