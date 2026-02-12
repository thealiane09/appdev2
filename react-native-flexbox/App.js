import { StyleSheet, SafeAreaView } from 'react-native';
import FlexDirectionBasics from './components/FlexDirection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexDirectionBasics />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});