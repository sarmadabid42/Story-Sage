import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';

function FlatListDemo({ navigation }) {
    const data = [
        { title: "MOUNTAIN STORY", page: 21 },
        { title: "A LESSON FROM A FROG TALE", page: 22 },
        { title: "WEAKNESS OR STRENGTH", page: 22 },
        { title: " JUST P.U.S.H", page: 23 },
        { title: "DETERMINATON", page: 24 },
        { title: "THE CRACKED POT", page: 26 },
        { title: " GOD EXISTS", page: 27 },
        { title: "A BOY WITH STRONG BELIEF", page: 27 },
        { title: "A VERY POWERFUL STORY", page: 28 },
        { title: "WORDS & ACTIONS SHOULD BE SAME", page: 29 }
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
