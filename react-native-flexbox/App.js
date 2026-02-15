import { StyleSheet, SafeAreaView } from 'react-native';
import AlignContentLayout from './components/AlignContent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AlignContentLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});