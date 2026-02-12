import { StyleSheet, SafeAreaView } from 'react-native';
import AlignItemsLayout from './components/AlignItems';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AlignItemsLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});