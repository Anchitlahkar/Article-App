import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import * as Speech from "expo-speech";

export default class ReadingScreen extends React.Component {
  constructor(data) {
    super();
    this.state = {
      articleDetails: data.route.params.details,
      windowWidth: Dimensions.get("window").width,
      text: data.route.params.details.text,
      visible: false,
    };
  }

  speech = (text) => {
    if(text.length <=4000){
      var Say = text;
      Speech.speak(Say);
    }
    else{
      Speech.speak('Sorry...Unable to read. Text is too long')
    }
    
  };

  render() {
    var { articleDetails } = this.state;
    const { text, title, url } = articleDetails;
    return (
      <ScrollView style={{ margin: 20 }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Title:</Text>
          <Text style={{ fontStyle: "italic" }}>
            {"\t"}
            {title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: this.state.windowWidth - 100,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{ width: 50 }}
            onPress={() => {
              this.speech(text);
            }}
          >
            <Image source={require("../assets/hear.png")} />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Text:</Text>
          <Text
            style={{ fontStyle: "italic", fontFamily: "sans-serif-condensed" }}
          >
            {"\t"}
            {text}
          </Text>
        </View>
      </ScrollView>
    );
  }
}
