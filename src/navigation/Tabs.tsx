import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Navigator} from './Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab2Components} from './TabSearch';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#5658D6',

        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          position: 'absolute',
          marginTop: 10,
          elevation: 0,
          borderTopColor: 'white',
          borderTopWidth: 0,
          borderBottomColor: 'white',
          borderBottomWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Navigator"
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon color={color} name="list-outline" size={26} />
          ),
        }}
        component={Navigator}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({color}) => (
            <Icon color={color} name="search-outline" size={26} />
          ),
        }}
        component={Tab2Components}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
