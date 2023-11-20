import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "THE WOLF AND THE LAMB", page: 7 },
        { title: "THE FOX AND THE GRAPES", page: 7 },
        { title: "THE THIRSTY CROW", page: 8 },
        { title: "THE MILKMAID", page: 8},
        { title: "PARABLE OF THE PENCIL", page: 9 },
        { title: "THE BOY AND THE APPLE TREE", page: 10 },
        { title: "THE ANGEL", page: 11 },
        { title: "THE DEVOTED MOTHER", page: 12 },
        { title: " MENTALLY RETARDED", page: 12 },
        { title: "PAID IN FULL", page: 13 }
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