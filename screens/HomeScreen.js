import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class HomeScreen extends Component{

  static navigationOptions = {
    header: null
  }

  render(){
    return(
        <View>
          <Text>Home Screen</Text>
          <Button
            title="About Me"
            onPress={() => this.props.navigation.navigate('About')}
          />
        </View>
    );
  }
}

export default HomeScreen;
