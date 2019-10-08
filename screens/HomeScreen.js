import React from 'react';
import {ScrollView,Text,View,FlatList} from 'react-native';
import {Component} from 'react';
import SubjectItem from '../components/SubjectItem';


class HomeScreen extends Component {


    static navigationOptions = { /* style on headerbarnav */
      title: 'Sujet',
      headerStyle: {backgroundColor: 'lightblue'},
      headerTitleStyle: {color: 'black'},
      fontWeight: 'bold',

    }; 
  
    constructor(props) { /* State creation - state before modification */
      super(props);
      this.state = {
        subjects: [],
        title: '',
        id: ''
      };
    }

    componentDidMount() { /* fetch repertory */
      this.fetchSubjects();
    }
  
    fetchSubjects() {
      fetch('http://178.128.172.170:8000/subjects') /* API call*/
        .then(response => response.json()) /*change to json*/
        .then(subjects => this.setState({ subjects:subjects })) /*get info back*/
    }

    render() {
      return ( /* What's shown on the page */
      <ScrollView>
        <View>
        <FlatList data={this.state.subjects} /* subject loop + clickable subjects */
                      renderItem={({item}) => <SubjectItem id={item._id} title={item.title} onClick={id => this.props.navigation.navigate("Questions", { id: id })} />}
                      keyExtractor={(item, index) => index.toString()} style={{marginTop: 5}}/>
        </View>
      </ScrollView>
  );
      }
  
}
export default HomeScreen; 