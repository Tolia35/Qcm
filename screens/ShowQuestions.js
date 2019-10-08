import React from 'react';
import {ScrollView,Text,View,FlatList, StyleSheet, Platform} from 'react-native';
import {Component} from 'react';
import QuestionItem from '../components/QuestionItem';



  export default class ShowQuestions extends Component {
    

    static navigationOptions = {/* style on headerbarnav */
      title: 'Question', /* TODO number variable > {{this.props.number }} ?*/
      headerStyle: {backgroundColor: 'lightblue'},
      headerTitleStyle: {color: 'black'},
      fontWeight: 'bold',
      fontSize: 20,
    };
  
    constructor(props) { /* State creation - state before modification */
      super(props);
      this.state = {
        questions: [],
        title: '',
        answer: '',
      };
    }

    componentDidMount() { /* fetch repertory */
      this.fetchQuestions();
    }
  
    fetchQuestions() {
      fetch('http://178.128.172.170:8000/subjects/' + this.props.navigation.getParam('id')) /* API call*/
        .then(response => response.json()) /*change to json*/
        .then(subject => this.setState({ questions:subject.questions })) /*get info back*/
    }

    render() {
      return ( /* What's shown on the page */
      <View>
      <ScrollView >
        <View>
        <FlatList data={this.state.questions} /* questions loop */
                      renderItem={({item}) => <QuestionItem question={item}/>}
                      keyExtractor={(item, index) => index.toString()}/>
        </View>
      </ScrollView>
    </View>
  )}
}