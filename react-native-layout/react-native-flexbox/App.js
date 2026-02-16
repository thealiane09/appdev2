import { StyleSheet, SafeAreaView } from 'react-native';
import FlexWrapLayout from './components/FlexWrap';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlexWrapLayout />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});