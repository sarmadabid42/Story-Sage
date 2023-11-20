import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "THE STRANGER IN THE GARDEN", page: 60 },
        { title: "TO TELL THE TRUTH", page: 60 },
        { title: " WHEN THE WINDS BLOW", page: 61 },
        { title: "THE ROPE", page: 62 },
        { title: "THE SHIP", page: 62 },
        { title: "THE CLEVER KING", page: 63 },
        { title: " THE ILLUSION OF REFLECTION", page: 65 },
        { title: " BUILDING YOUR HOUSE", page: 66 },
        { title: " SAND AND STONE", page: 66 },
        { title: " A TEACHER’S PROTEST", page: 67 }
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
