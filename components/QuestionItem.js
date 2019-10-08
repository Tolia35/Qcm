import React, {Component} from 'react';
import { View, Text, Radio } from "react-native";

export default class QuestionItem extends Component { /* TODO fonction > Onpress should route to next page ( results ) with the count of right answer*/
  render() {
    return (
      <View >
        <Text>{this.props.question.title}</Text>
        <Text>{this.props.question.answer}</Text>
      </View>
    );
  }
}