import React,{useState}from 'react';
import {View,Text} from 'react-native';
import {TouchableRipple,Switch, List,useTheme} from 'react-native-paper';
import AppBar from './AppBar';
import toggleTheme from '../actions/toggleTheme';
import {useSelector,useDispatch,} from 'react-redux';

function SettingsScreen() {
   const {colors}=useTheme();
    const value=useSelector(state=>state.isDarkTheme);
    
    const dispatch=useDispatch();
    return (
      <View>
        <AppBar/>
      
        <List.Section>
           <List.Subheader>Settings</List.Subheader>
           <List.Item title="Dark Theme" right={() => <Switch color={"#4a97b0"} value={value} onValueChange={()=>dispatch(toggleTheme())} /> }/>
    
        </List.Section>
      
    
      </View>
    );
  }

  export default SettingsScreen;

  