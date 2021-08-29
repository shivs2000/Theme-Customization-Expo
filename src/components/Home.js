import React, { useEffect } from 'react';
import { View, Text, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import AppBar from './AppBar';
import { useSelector, useDispatch } from 'react-redux';
import { Button, useTheme,Card,Title,Paragraph}from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  const { colors } = useTheme();

  return (

    <View>
      <AppBar />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:3}}>
      

        <Button mode="contained" compact={true} color={colors.surface} style={{}}onPress={() => console.log('Pressed')}>
        <Entypo name="news" size={20} color="black" />
        <Text style={{fontSize: 16}}>News</Text>
        </Button>
        <Button mode="contained" compact={true} color={colors.surface} onPress={() => console.log('Pressed')}>
        <FontAwesome name="file-movie-o" size={20} color="black" /> 
        <Text style={{fontSize: 16}}>Entertainment</Text>
        </Button>
        <Button mode="contained" compact={true} color={colors.surface} onPress={() => console.log('Pressed')}>
        <Entypo name="quote" size={20} color="black" />
          <Text style={{fontSize: 16}}>Quotes</Text>
        </Button>
        <Button mode="contained" compact={true} color={colors.surface} onPress={() => console.log('Pressed')}>
        <MaterialIcons name="sports" size={20} color="black" />
        <Text style={{fontSize: 16}}>Sports</Text>
        </Button>
        <Button mode="contained" compact={true} color={colors.surface} onPress={() => console.log('Pressed')}>
        <MaterialCommunityIcons name="food-variant" size={24} color="black" />
        <Text style={{fontSize: 16}}>Food</Text>
        
        </Button>
         

      </ScrollView>
      <ScrollView >
        <Card style={{ margin: 10 }}>


          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>India won By 3 Wickets </Title>
            <Paragraph>The FlatList component displays the similar structured data in a scrollable list. It works well for 
              large lists of data where the number of list items might change over time.  </Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ margin: 10 }}>


          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>India won By 3 Wickets </Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ margin: 10 }}>


          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>India won By 3 Wickets </Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ margin: 10 }}>


          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>India won By 3 Wickets </Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={{ margin: 10 }}>


          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Content>
            <Title>India won By 3 Wickets </Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius:4,
    height:30,
    width:60
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
export default HomeScreen;