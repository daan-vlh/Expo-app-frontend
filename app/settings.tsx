import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { SafeAreaView } from "react-native-safe-area-context";

import useUsers from "@/data/users";

export default function TabTwoScreen() {
  const { data, error, isLoading } = useUsers();

  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedText type="title">Settings</ThemedText>
        <ThemedText type="subtitle">This is the settingspage</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedView style={{ padding: 16 }}>
          {isLoading && <ThemedText>Loading...</ThemedText>}
          {error && <ThemedText>Error loading data</ThemedText>}
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((user, idx) => {
              return (
                <ThemedView
                  key={user._id ?? idx}
                  style={{
                    marginBottom: 10,
                    backgroundColor: "#ffffff1a",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <ThemedText style={{ fontSize: 14, fontStyle: "italic" }}>
                    Sender: {user.username}
                  </ThemedText>
                  <ThemedText style={{ fontSize: 14, color: "#888" }}>
                    Date: {new Date(user.createdAt).toLocaleString()}{" "}
                  </ThemedText>
                </ThemedView>
              );
            })}
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
