import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class AboutScreen extends Component{

  static navigationOptions = {
    header: null
  }

  render(){
    return(
        <View>
          <Text>About Screen</Text>
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
    );
  }
}

export default AboutScreen;
