import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "THE CLUB 99", page: 46 },
        { title: "REPENTANCE", page: 47 },
        { title: " THE NEIGHBOR", page: 48 },
        { title: "A BOX FULL OF KISSES", page: 48 },
        { title: " THE THREE COWS", page: 49 },
        { title: " A WHITE HAS NO SUPERIORITY", page: 50 },
        { title: "GHULAMHUSSEIN AND THE GAME.", page: 51 },
        { title: "FINDERS KEEPERS", page: 51 },
        { title: " BANDAGE OF COMPLAINT", page: 51 },
        { title: "AN AGED STUDENT", page: 52 }
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
