import { StyleSheet, SafeAreaView } from 'react-native';
import DirectionLayout from './components/LayoutDirection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DirectionLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});