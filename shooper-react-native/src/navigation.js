import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './screens/login-page';
import RegisterPage from './screens/register-page';
import ProfilePage from './screens/profile-page';

const LoginRegister = createStackNavigator({
  LoginPage: { 
    screen: LoginPage,
    navigationOptions: { header: null }
  },
  RegisterPage: { 
    screen: RegisterPage,
    navigationOptions: { header: null }
  },
});

const AppNavigator = createSwitchNavigator({
  LandingPage: { screen: LoginRegister },
  ProfilePage: { screen: ProfilePage },
  initialRouteName: 'ProfilePage' 
});

export default createAppContainer(AppNavigator);