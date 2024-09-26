import { FlatList, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';

export default function HomeScreen() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([{"title": "loading ..."}]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Habit Crew</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="defaultSemiBold">List of Movies</ThemedText>
      {data && <FlatList
        data={data}
        renderItem={({ item }) => <ThemedText>{item.title}</ThemedText>}
      />}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 50,
    marginBottom: 25
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
    position: 'absolute',
  },
});
