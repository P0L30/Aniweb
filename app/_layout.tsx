import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false, title: "" }} />
      <Stack.Screen name="+not-found" />
      <StatusBar style="light" />
    </Stack>
  );
}
