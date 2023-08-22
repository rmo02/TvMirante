import 'react-native-gesture-handler';
import { StyleSheet, StatusBar, View } from 'react-native';
import { DrawerRoutes } from './src/Routes/DrawerRoutes';

export default function App() {
  return (
    <>
      <DrawerRoutes />
      <StatusBar backgroundColor={"transparent"} translucent  />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
