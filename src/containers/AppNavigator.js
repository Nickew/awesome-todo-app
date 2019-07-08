import { createAppContainer, createStackNavigator } from 'react-navigation';

import ArchieveScreen from './ArchieveScreen';
import SettingsScreen from './SettingsScreen';
import MainScreen from './MainScreen';

const AppNavigator = createStackNavigator(
  {
    Archieve: ArchieveScreen,
    Settings: SettingsScreen,
    Main: MainScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
