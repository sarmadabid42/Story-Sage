//import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "A Pond Full Of Milk", page: 1 },
        { title: "Don't Change The World", page: 3 },
        { title: "The Travellers And The Tree", page: 3 },
        { title: "Learn From Mistakes", page: 3 },
        { title: "The Boy Who Cried 'Wolf", page: 4 },
        { title: "The Farmer And The Stork", page: 4 },
        { title: "The Hare And The Tortoise", page: 5 },
        { title: "The Ant The Dove", page: 5 },
        { title: "The Monkey And The Dolphin", page: 6 },
        { title: "The Fox And The Stork", page: 6 },
      ];
    const handleViewPage =(page)=>{
        navigation.navigate("Headings",{page});
    }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item,index }) => {
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


