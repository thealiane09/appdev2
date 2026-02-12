import { StyleSheet, SafeAreaView } from 'react-native';
import JustifyContentBasics from './components/JustifyContent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <JustifyContentBasics />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});