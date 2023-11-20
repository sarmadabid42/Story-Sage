import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "DO NOT DO EVIL TO ANYONE", page: 68 },
        { title: "PUPPIES FOR SALE", page: 68 },
        { title: "OFFFICE BOY", page: 69 },
        { title: " ONE BEDROOM FLAT", page: 70 },
        { title: "THEY ARE NOT IN NEED", page: 71 },
        { title: "YOU ARE BEAUTIFUL", page: 72 },
        { title: "  BE PATIENT", page: 73},
        { title: "THE FATHER AND HIS SONS", page: 73 },
        { title: "A SENSE OF A GOOSE", page: 74 },
        { title: "MAKING A DIFFERENCE", page: 74 }
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
