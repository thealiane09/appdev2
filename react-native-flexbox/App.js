import { StyleSheet, SafeAreaView } from 'react-native';
import Flex from './components/Flex';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Flex />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});