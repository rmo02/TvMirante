import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { DrawerRoutes } from './src/Routes/DrawerRoutes';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <DrawerRoutes />
      <StatusBar backgroundColor={"transparent"} translucent  />
    </ThemeProvider>
  );
}

