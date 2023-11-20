import { StyleSheet, View, Text, TouchableOpacity,ScrollView } from 'react-native';

const MyComponent = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.headingBar}>
      
    </View>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List1')}
    >
      <Text style={styles.buttonText}>Fables</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List2')}
    >
      <Text style={styles.buttonText}>Aesop's Tales </Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List3')}
    >
      <Text style={styles.buttonText}> Relationships</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List4')}
    >
      <Text style={styles.buttonText}>Inspirational  Stories</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List5')}
    >
      <Text style={styles.buttonText}> Around the World</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List6')}
    >
      <Text style={styles.buttonText}>Soul Stories</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List7')}
    >
      <Text style={styles.buttonText}> Meaningful Anecdotes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List8')}
    >
      <Text style={styles.buttonText}>Wisdom Short Stories</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List9')}
    >
      <Text style={styles.buttonText}>Enlightening  Narratives</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('List10')}
    >
      <Text style={styles.buttonText}>Tales of Kindness </Text>
    </TouchableOpacity>
   </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#f0f0f0', 
    padding: 2,
  },
//   headingBar: {
//     backgroundColor: '#339FFF', // Blue background color for the heading bar
//     paddingVertical: 13,
//     alignItems: 'center',
//     bottom:19,
    
//   },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    backgroundColor: '#329FFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#329FFF',
    textAlign: 'center',
    width: '60%', 
    marginLeft: '18%',
  },
  buttonText: {
    textAlign: 'center',
    color:'white',
  },
});

export default MyComponent;