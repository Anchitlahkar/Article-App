import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, AirbnbRating, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      articleDetails: { "Loading...": "" },
      articleDetailsURL: "https://e5d5-49-37-33-70.ngrok.io",
    };
  }

  getArticles = () => {
    var { articleDetailsURL } = this.state;
    var url = articleDetailsURL;
    // var url = "http://cors-anywhere.herokuapp.com/" + articleDetailsURLWeb;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        let details = response.data.data;
        this.setState({ articleDetails: details });
        c;
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  liked = () => {
    var { articleDetailsURL } = this.state;
    var url = articleDetailsURL + "/liked-articles";
    axios
      .post(url)
      .then((response) => {
        this.getArticles();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  unliked = () => {
    var { articleDetailsURL } = this.state;
    var url = articleDetailsURL + "/not-liked-articles";
    axios
      .post(url)
      .then((response) => {
        this.getArticles();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    var { articleDetails } = this.state;
    const { text, title } = articleDetails;
    console.log(title);

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#f8f9be" }}>
        <View style={styles.headerContainer}>
          <Header
            centerComponent={{
              text: "Articles Recommended",
              style: styles.headerTitle,
            }}
            rightComponent={{ icon: "search", color: "#fff" }}
            backgroundColor={"#000000"}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <View style={styles.TopContainer}>
          <View style={styles.display}>
            <View title="Title" style={{ margin: RFValue(10) }}>
              <Text style={{ fontWeight: "bold" }}>
                <Text style={{ fontSize: 17 }}>Title:</Text>
                {"\n"}
                <Text>{"\t\t\t\t"}</Text>
                <Text>{title}</Text>
              </Text>
            </View>
            <View style={{ marginTop: RFValue(10) }}>
              <View style={{ margin: RFValue(10) }}>
                <Text numberOfLines={13}>
                  <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                    Text:
                  </Text>{" "}
                  {"\n"}
                  <Text>{"\t\t\t\t"}</Text>
                  <Text style={{ fontStyle: "italic" }}>{text}</Text>
                </Text>
                <Text> </Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Article", {
                      details: articleDetails,
                    });
                  }}
                >
                  <Text>Continoue Reading...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.BottomContainer}>
          <View style={styles.iconButtonContainer}>
            <TouchableOpacity onPress={this.liked}>
              <Icon
                reverse
                name={"check"}
                type={"entypo"}
                size={RFValue(40)}
                color={"#76ff03"}
              />
              <Text style={{ alignSelf: "center" }}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.unliked}>
              <Icon
                reverse
                name={"cross"}
                type={"entypo"}
                size={RFValue(40)}
                color={"#ff1744"}
              />
              <Text style={{ alignSelf: "center" }}>Did Not Like</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: RFValue(20),
  },

  display: {
    margin: RFValue(15),
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "black",
  },

  BottomContainer: {
    marginTop: RFValue(20),
  },
  iconButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonCotainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: RFValue(140),
    height: RFValue(35),
    borderRadius: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: RFValue(15),
  },
});
