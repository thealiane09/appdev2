import { StyleSheet, SafeAreaView } from 'react-native';
import AlignSelfLayout from './components/AlignSelf';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AlignSelfLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});