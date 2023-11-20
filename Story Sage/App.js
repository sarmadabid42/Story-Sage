import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screen/Splash";
import Home from "./Screen/Home";
import Headings from "./Screen/Headings";
import Category from"./Screen/Category";
import List1 from "./Screen/List1";
import List2 from "./Screen/List2";
import List3 from "./Screen/List3";
import List4 from "./Screen/List4";
import List5 from "./Screen/List5";
import List6 from "./Screen/List6";
import List7 from "./Screen/List7";
import List8 from "./Screen/List8";
import List9 from "./Screen/List9";
import List10 from "./Screen/List10";
const Stack = createNativeStackNavigator();
const App = ()=>{
     return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen}options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home}options={{headerShown:false}}/>
    <Stack.Screen name="Headings" component={Headings}options={{headerShown:true,headerTitleAlign:'center',title:'StroySage',}}/>
    <Stack.Screen name="Category" component={Category}options={{headerShown:true,headerTitleAlign:'center',title:'StorySage'}}/>
    <Stack.Screen name="List1" component={List1}options={{headerShown:true,headerTitleAlign:'center',title:'Fables'}}/>
    <Stack.Screen name="List2" component={List2}options={{headerShown:true,headerTitleAlign:'center',title:'Aesops Tales'}}/>
    <Stack.Screen name="List3" component={List3}options={{headerShown:true,headerTitleAlign:'center',title:' Relationships'}}/>
    <Stack.Screen name="List4" component={List4}options={{headerShown:true,headerTitleAlign:'center',title:'Insipirational Stories'}}/>
    <Stack.Screen name="List5" component={List5}options={{headerShown:true,headerTitleAlign:'center',title:' Around the World'}}/>
    <Stack.Screen name="List6" component={List6}options={{headerShown:true,headerTitleAlign:'center',title:'Soul Stories'}}/>
    <Stack.Screen name="List7" component={List7}options={{headerShown:true,headerTitleAlign:'center',title:'Meaningful Anecdotes'}}/>
    <Stack.Screen name="List8" component={List8}options={{headerShown:true,headerTitleAlign:'center',title:'Wisdom Short Stories'}}/>
    <Stack.Screen name="List9" component={List9}options={{headerShown:true,headerTitleAlign:'center',title:'Enlightening Narratives'}}/>
    <Stack.Screen name="List10" component={List10}options={{headerShown:true,headerTitleAlign:'center',title:'Tales of Kindness'}}/>



    </Stack.Navigator>
    </NavigationContainer>
    );

}
export default App
