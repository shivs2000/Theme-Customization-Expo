import React from 'react';
import { StyleSheet } from 'react-native';
import HomeScreen from './components/Home';
import SettingsScreen from './components/Settings';
import Account from './components/Account';
import { NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme
   } from '@react-navigation/native';

   import { 
    createBottomTabNavigator 
  } from '@react-navigation/bottom-tabs';
  
  import { AntDesign } from '@expo/vector-icons';
  import { MaterialCommunityIcons } from '@expo/vector-icons';  
  const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme,
    colors: {
      ...PaperDefaultTheme.colors,
      ...NavigationDefaultTheme.colors,
    },
  };
  const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      ...NavigationDarkTheme.colors,
    },
  };
  const Tab = createBottomTabNavigator();
  import { 
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme, 
    Provider as PaperProvider,
   
} 
    from 'react-native-paper'
    import { useSelector } from 'react-redux';

  const Main = () => {
 const value=useSelector((state)=>state.isDarkTheme);
 
     const check=value?CombinedDarkTheme:CombinedDefaultTheme;
 
 
      return ( 
        <PaperProvider theme={check}>
    
        <NavigationContainer theme={check}>
          <Tab.Navigator 
           
          screenOptions={({ route }) => ({
              /*tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if(focused){
                  size=30
                }else{
                  size=20
                }
    
                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Settings') {
                  iconName = 'setting';
                } else if (route.name === 'Account') {
                  iconName='user';
                 ;
                }
    
                // You can return any component that you like here!
                return <AntDesign name={iconName} size={size} color={color} />;
              },*/
              
            })}
            tabBarOptions={{
              activeTintColor: '#4a97b0',
              inactiveTintColor: 'gray',
              showLabel: false,
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
             options={{tabBarLabel: '',
              
              
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" size={size} color={color} />
              ),
            }}
            
            />
            <Tab.Screen name="Settings" component={SettingsScreen} 
             options={{
              tabBarLabel: '',
              
              tabBarIcon: ({ focused,color, size }) => (
                <MaterialCommunityIcons name="bookmark-plus" size={size} color={color} />
              ),
            }}
            
            
            />
            <Tab.Screen name="Account" component={Account}
             options={{tabBarLabel: '',
              
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              ),
            }} />
          </Tab.Navigator>
        </NavigationContainer>
        </PaperProvider>
       );
  }
   
  export default Main;