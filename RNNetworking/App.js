import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  const [postList, setPostList] = useState();

  const [isLoading, setIsLoading] = useState(true);

  const [refreshing, setRefreshing] = useState(false);

  const [postTitle, setPostTitle] = useState("");

  const [postBody, setPostBody] = useState("");

  const [isPosting, setIsPosting] = useState(false);

  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();

      setPostList(data);

      setIsLoading(false);

      setError("");
    } catch (error) {
      console.error("Error fetching data", error);
      setError("Failed to fetch post list");
      setIsLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        }
      );
      const newPost = await response.json();

      setPostList([newPost, ...postList]);

      setPostTitle("");

      setPostBody("");

      setIsPosting(false);

      setError("");
    } catch (error) {
      console.error("Error adding new post", error);
      setError("Failed to add new post");
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              value={postTitle}
              onChangeText={setPostTitle}
              style={styles.input}
              placeholder="Post title"
            />
            <TextInput
              value={postBody}
              onChangeText={setPostBody}
              style={styles.input}
              placeholder="Post body"
            />
            <Button
              title={isPosting ? "Adding..." : "Add Post"}
              disabled={isPosting}
              onPress={addPost}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              )}
              ItemSeparatorComponent={<View style={{ height: 16 }} />}
              ListEmptyComponent={
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    marginTop: "100%",
                  }}
                >
                  No posts found
                </Text>
              }
              ListHeaderComponent={
                <Text style={styles.headerText}>Post List</Text>
              }
              ListFooterComponent={
                <Text style={styles.footerText}>End of list</Text>
              }
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "#666666",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: "#ffc0cb",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#d8000c",
    fontSize: 16,
    textAlign: "center",
  },
});
