import React from 'react';
import LikeScreen from '../Screens/Popular';
import PopularMovies from '../Screens/Recommended';
import { StyleSheet, View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
        },
        tabBarShowLabel: false,
        tabBarStyle: [styles.bottomTabStyle, styles.shadowStyle],
      }}>

      {/* Popular Movies */}
      <Tab.Screen
        name="Popular Movies"
        component={PopularMovies}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 7 }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'blue' : '#ffffff',
                  alignSelf: 'center',
                }}
              />
              <Text style={{ color: focused ? 'blue' : '#ffffff' }}>
                Popular_Movies
              </Text>
            </View>
          ),
        }}
      />

      {/* Liked Movies */}
      <Tab.Screen
        name="Liked Movies"
        component={LikeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 7 }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? 'blue' : '#ffffff',
                  alignSelf: 'center',
                }}
              />
              <Text style={{ color: focused ? 'blue' : '#ffffff' }}>
                Likes_Movies
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    position: 'absolute',
    backgroundColor: '#000000',
    height: '9.5%',
    elevation: 0,
  },

  shadowStyle: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
