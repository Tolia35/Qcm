import React from 'react';
import { ScrollView, View, Text, Button, Switch, Picker} from 'react-native';
import {Component} from 'react';
import TextInput from "../kitui/TextInput";

class LinksScreen extends Component {

  static navigationOptions = { /* style on headerbarnav */
    title: 'Proposer',
    headerStyle: {backgroundColor: 'lightblue'},
    headerTitleStyle: {color: 'black'},
    fontWeight: 'bold',
    fontSize: 20,
  };

  constructor(props) { /* State creation - state before modification */
    super(props);
    this.state = {
      question: [],
      title: '',
      answer: '',
      correct: true,
    };
  }

  addQuestion() { /* AddQuestion to the DB fonction, with all the elements ( title, answer, subject ...) */
    const question =  { title: this.state.title, answer: this.state.answer, subject: this.state.subject };
    this.setState({
      question: [...this.state.question, question]
    })};

    render() {
      return ( /* What's shown on the page */
    <ScrollView style={{backgroundColor: 'lightgrey'}} >
      {<Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>Ajouter une question</Text>}

      <Picker selectedValue={this.state.subjects}
      onValueChange={(itemValue) =>
        this.setState({subjects: itemValue})}>
      <Picker.Item label="PHP" value="PHP" />
      <Picker.Item label="JavaScript" value="JavaScript" /></Picker>


      <TextInput onChangeText={text => this.setState({ title: text })}
                     value={this.state.title}
                     placeholder='Question'/>
      <TextInput onChangeText={text => this.setState({ answer: text })}
                     value={this.state.answer.toString()}placeholder='Réponse 1'/>
                     <Switch/>
      <TextInput onChangeText={text => this.setState({ answer: text })}
                     value={this.state.answer.toString()}placeholder='Réponse 2'/>
                     <Switch/>              
      <Button onPress={() => this.addQuestion()} title='Envoyer la question pour validation'/>
    </ScrollView>
    );
  }
}

export default LinksScreen;