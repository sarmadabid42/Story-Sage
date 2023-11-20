import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "WEALTH - LOVE - SUCCESS", page: 53 },
        { title: "LOVE AND TIME", page: 54 },
        { title: "ALWAYS THANKFUL TO GOD", page: 54 },
        { title: " THE MAYONNAISE AND THE COFFEE", page: 55 },
        { title: "THE BAR", page: 55 },
        { title: " LESSONS ON LIFE", page: 56 },
        { title: "THE ROSE WITHIN", page: 56 },
        { title: " PUT THE GLASS DOWN!", page: 57 },
        { title: " MAY I NEVER GET TOO BUSY", page: 58 },
        { title: " DON’T WE ALL", page: 58 }
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
