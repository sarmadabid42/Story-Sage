import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: " BEAUTIFUL GIFT", page: 14 },
        { title: "WHAT IS A FAMILY", page: 14 },
        { title: "TRUE WEALTH", page: 16 },
        { title: "A HOLE IN THE FENCE", page: 16 },
        { title: " GRANDPA’S TABLE", page: 17 },
        { title: " FATHERS EYES", page: 19 },
        { title: " BUTTERFLY AND COCOON.", page: 19 },
        { title: " THE OBSTACLE IN OUR PATH", page: 19 },
        { title: "THE WOLF IN SHEEP’S CLOTHING", page: 20 },
        { title: "DON’T JUDGE A BOOK BY ITS COVER", page: 20 }
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
