import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "THE SELFISH MAN", page: 37 },
        { title: "YOU ARE PRICELESS", page: 37 },
        { title: " BE CAREFUL WHAT YOU PLANT", page: 38 },
        { title: " GENEROSITY", page: 39 },
        { title: "THE CRYSTAL BALL", page: 40 },
        { title: "THE SIGNS OF HAPPINESS", page: 41 },
        { title: "HOPE AND GREED", page: 42 },
        { title: "FOUR WIVES", page: 43 },
        { title: "LION, RATS, SNAKE & HONECOMB", page: 44 },
        { title: " THE MOST BEAUTIFUL HEART", page: 45 }
      ];
    const handleViewPage =(page)=>{
        navigation.navigate("Headings",{page});
    }
    

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Card style={{ margin: 10 }}>
              <Card.Content>
                <Title>{item.title}</Title>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => {
                    //global.category = item;
                    handleViewPage(item.page)
                  }}
                >
                  View Page
                </Button>
              </Card.Actions>
            </Card>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

export default FlatListDemo;
