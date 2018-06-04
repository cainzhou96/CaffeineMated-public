import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
  LinearLayout,
  Dimensions,

} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Segment,
  Content,
  Text,
  Title,
  Item,
  Input,
  Form,
  Textarea,
  Grid,
  Col,
  Row,
  Spinner,
  Card,
} from 'native-base';
import {styles} from "../CSS/CoffeeOfTheDay.js";
import {randomCoffee} from "../database";

export class CoffeeOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false
    }
    // Bind login related functions
    this.getCoffee = this.getCoffee.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  async getCoffee(){
    var test = await randomCoffee();
    this.setState({item: test});
    this.setState({update: true});
  }

  async componentWillMount(){
    //await this.getCoffee();
    var test = await randomCoffee();
    this.setState({item: test});
    this.setState({update: true});

  }

  render () {
    var result = this.state.item;

    if( this.state.update){
      //console.log("this is result in items: " + result.image);
      return(

          <View style={styles.container}>
            <Grid style={{flexWrap: 'wrap'}}>
              <Row style={styles.titleRow}>
                <Text style={styles.titleTex}>Coffee of the Moment</Text>
              </Row>

              <Row style={styles.lineRow}>
                <View style={styles.line} />
              </Row>

              <Row style={styles.imageRow}>
                <TouchableWithoutFeedback onPress={() => {
                  this.getCoffee();
                }} >
                  <Image style={styles.itemImage} source={{uri: result.image}}/>
                </TouchableWithoutFeedback>
              </Row>

              <Row style={styles.nameRow}>
                 <Text style={styles.itemName}>{result.name}</Text>
              </Row>

            </Grid>
          </View>

      );
    } else {
      return(
        <View />
       )
    }
  }
}
export default CoffeeOfTheDay;
