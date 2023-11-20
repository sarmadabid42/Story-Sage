import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "YOU'RE MORE PRECIOUS THAN PEARLS", page: 30 },
        { title: "THE ONE-EYED DOE", page: 30 },
        { title: "THE CAGE BIRD'S ESCAPE", page: 31 },
        { title: "THE THREE WISE MEN", page: 32 },
        { title: "THE CLEVER BOY", page: 33 },
        { title: "A MERCHANT AND HIS DONKEY", page: 33 },
        { title: "THE ANT AND THE GRASSHOPPER", page: 34 },
        { title: "THE FOX WHO GOT CAUGHT IN TREE", page: 34 },
        { title: "CATS AND ROOSTERS", page: 35 },
        { title: "THE PROUD RED ROSE", page: 36 }
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
