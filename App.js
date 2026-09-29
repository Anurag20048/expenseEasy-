import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ExpenseProvider } from './src/context/ExpenseContext';
import AppNavigator from './src/navigation/AppNavigator';
export default function App(){return <SafeAreaProvider><ExpenseProvider><AppNavigator/><StatusBar style="light"/></ExpenseProvider></SafeAreaProvider>}
