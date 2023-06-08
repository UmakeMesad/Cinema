import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import StackNavigator from './StackNavigator';
import { MovieContext } from './Context';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function App() {
  return (
    <>
    <MovieContext>
      <StripeProvider publishableKey="pk_test_51ND2GLLPp6vYpGm4SUfhBQe9eQtHipdz5I0Nv8A9ynWchozOfYyLQ0eDh4IYTxwTV3vgYK17m3MnoPGPJuV22XoO004CZAEQfG">
      <StackNavigator />
      <StatusBar style="auto" />
      </StripeProvider>
    </MovieContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50
  },
});
