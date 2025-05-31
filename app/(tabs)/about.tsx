import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


const AboutScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Test Title" }} />
            <View style={styles.container}>
                <Text style={styles.title}>About Screen</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontSize: 36,
        color: "white",
        borderWidth: 1,
        backgroundColor: "red",
        textAlign: "center"
    }
})

export default AboutScreen;