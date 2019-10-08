import React, {Component} from 'react';
import { View, Button} from "react-native";
/*import ShowQuestions from '../screens/ShowQuestions';*/
/*import HomeScreen from '../screens/HomeScreen';*/

export default class SubjectItem extends Component {
  render() {


      let button = <Button onPress={() => { /* INPROGRESS fonction > Onpress should route to next page ( showquestions ) with the correct picked id*/
        console.log('http://178.128.172.170:8000/subjects/'+ this.props.id);
        this.props.onClick(this.props.id);
        /*
        fetch('http://178.128.172.170:8000/subjects/'+ this.props.id)
          .then(response => response.json())
          .then(subjects => this.setState({ subjects:subjects }))
          .catch(err => console.log(err))
          */
      }} title={this.props.title}/>;

      return (
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'lightgrey', borderRadius: 20, margin: 4}}>
              {button}
          </View>
      );
  }
}