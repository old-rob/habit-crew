import { FlatList, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Habit Crew</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="defaultSemiBold">List of Movies</ThemedText>
      <FlatList
        data={[
          {key: 'Princess Bride'},
          {key: 'Dan In Real Life'},
          {key: 'Mary Poppins'},
        ]}
        renderItem={({item}) => <ThemedText>{item.key}</ThemedText>}
      />
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
