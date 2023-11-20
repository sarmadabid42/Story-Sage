import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';

const MyComponent = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.headingBar}>
      <Text style={styles.heading}>StorySage</Text>
    </View>
    <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigation.navigate('Category')}>
      <Text style={styles.buttonText}>Moral Tales</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate('ProductInformation')}>
      <Text style={styles.buttonText}>Send Feedback</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, styles.button3]} onPress={() => navigation.navigate('Reports')}>
      <Text style={styles.buttonText}>Search More Apps</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, styles.button4]} onPress={() => navigation.navigate('Status')}>
      <Text style={styles.buttonText}>Rate Applications</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.button, styles.button5]} onPress={() => navigation.navigate('ProductStatus')}>
      <Text style={styles.buttonText}>Share With Friends</Text>
    </TouchableOpacity>

    
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    padding: 2,
  },
  headingBar: {
    
    paddingVertical: 13,
    alignItems: 'center',
    bottom: 19,
    marginTop:25,
  },
  heading: {
    fontSize: 30,
    
    color: '#725849', 
  },
  button: {
    padding: 15,
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
    borderColor: '#339FFF',
    textAlign: 'center',
    width: '60%', // Set the desired width for your buttons
    marginLeft: '18%', // Push the buttons to the right
  },
  buttonText: {
    textAlign: 'center',
    color:'white',
  },
  button1: {
    backgroundColor: '#3B3B3B', // Set color for the first button
    borderColor: '#3B3B3B',
  },
  button2: {
    backgroundColor: '#D56B63', // Set color for the second button
    borderColor: '#D56B63',
  },
  button3: {
    backgroundColor: '#9D8DBC', // Set color for the third button
    borderColor: '#9D8DBC',
  },
  button4: {
    backgroundColor: '#EDC06C', // Set color for the fourth button
    borderColor: '#EDC06C',
  },
  button5: {
    backgroundColor: '#AA7155', // Set color for the fifth button
    borderColor: '#AA7155',
  },
});

export default MyComponent;










    


















