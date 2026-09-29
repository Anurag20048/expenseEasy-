import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import SummaryScreen from '../screens/SummaryScreen';
import { colors } from '../constants/theme';
const Stack = createNativeStackNavigator(); const Tab = createBottomTabNavigator();
function Tabs() { return (<Tab.Navigator screenOptions={{headerStyle:{backgroundColor:colors.primary},headerTintColor:'#fff',tabBarActiveTintColor:colors.primary}}><Tab.Screen name="Expenses" component={HomeScreen}/><Tab.Screen name="Summary" component={SummaryScreen}/></Tab.Navigator>); }
export default function AppNavigator() { return (<NavigationContainer><Stack.Navigator screenOptions={{headerStyle:{backgroundColor:colors.primary},headerTintColor:'#fff'}}><Stack.Screen name="Main" component={Tabs} options={{headerShown:false}}/><Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{title:'Expense'}}/></Stack.Navigator></NavigationContainer>); }
