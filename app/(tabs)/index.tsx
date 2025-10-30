import { Image } from "expo-image";
import { Link } from "expo-router";

import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

import useMessages from "@/data/messages";

export default function HomeScreen() {
  const { data, error, isLoading } = useMessages();
  console.log(data);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={{ color: "#5fb6fdff" }} type="subtitle">
          Mango
        </ThemedText>
        <Link href="/modal">
          <Link.Trigger>
            <ThemedText type="subtitle">Open modal</ThemedText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction
              title="Action"
              icon="cube"
              onPress={() => alert("Action pressed")}
            />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert("Share pressed")}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert("Delete pressed")}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>
      </ThemedView>
      <ThemedView>
        <Image
          source={require("@/assets/images/successful-entrepreneurs.jpg")}
          style={styles.heroImage}
        ></Image>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ marginBottom: 8 }} type="title">
          Stack navigation
        </ThemedText>
        <Link
          href={"../camera-simple"}
          style={{
            color: "white",
            textDecorationLine: "underline",
            marginBottom: 20,
          }}
        >
          Go to camera page
        </Link>
        <Link
          href={"../camera-test"}
          style={{
            color: "white",
            textDecorationLine: "underline",
            marginBottom: 20,
          }}
        >
          Go to another camera page
        </Link>
        <Link
          href={"../settings"}
          style={{
            color: "white",
            textDecorationLine: "underline",
            marginBottom: 20,
          }}
        >
          Go to settings page
        </Link>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ marginBottom: 8 }} type="title">
          SWR Data Fetching
        </ThemedText>
        <ThemedView>
          {isLoading && <ThemedText>Loading...</ThemedText>}
          {error && <ThemedText>Error loading data</ThemedText>}
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((message, idx) => {
              return (
                <ThemedView
                  key={message._id ?? idx}
                  style={{
                    marginBottom: 10,
                    backgroundColor: "#ffffff1a",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <ThemedText>{message.text}</ThemedText>
                  <ThemedText style={{ fontSize: 14, fontStyle: "italic" }}>
                    Sender: {message.sender.username}
                  </ThemedText>
                  <ThemedText style={{ fontSize: 14, color: "#888" }}>
                    Date: {new Date(message.createdAt).toLocaleString()}{" "}
                  </ThemedText>
                </ThemedView>
              );
            })}
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  container: {
    flexDirection: "column",
    gap: 8,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  heroImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 8,
    resizeMode: "cover",
  },
});
