import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Appbar,Surface ,useTheme} from 'react-native-paper';
const AppBar = () => {
    const { colors } = useTheme();
   
    return ( <Appbar.Header style={{backgroundColor: colors.surface,borderRadius:3}}>
    <Appbar.Content title={<Text style={{ color: "#4a97b0",
         fontSize: 22,}}> BuzzWhistle</Text>} />
     
 </Appbar.Header> );
}
const styles=StyleSheet.create({
    appbar:{
         borderRadius:3,
         shadowColor:'grey',
         shadowOffset:{
             width:1,
             height:1
         },
         shadowOpacity:0.1,
         shadowRadius:3,
         

    }
})
 
export default AppBar;