import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, ActivityIndicator, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import Pdf from 'react-native-pdf';

export default function Headings({ route }) {
  const [pageNumber, setPageNumber] = useState('1');
  const [selectedPage, setSelectedPage] = useState(1);
  const [pdfLoaded, setPdfLoaded] = useState(false);

  useEffect(() => {
    if (route.params && route.params.page) {
      const page = parseInt(route.params.page) + 1;
      setSelectedPage(page);
      setPageNumber(page.toString());
    }
  }, [route.params]);

  const handleGoToPage = () => {
    const totalPages = 74;
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      let page = Number(pageNumber) + 1;
      setSelectedPage(Number(page));
      Keyboard.dismiss();
    } else {
      console.error('Invalid page number input');
    }
  };

  const handlePdfLoadComplete = (numberOfPages, filePath) => {
    
    setPdfLoaded(true);
  };

  return (
    <View style={styles.container}>
      
      <Pdf
        trustAllCerts={false}
        source={{
          uri: 'https://www.appsloveworld.com/wp-content/uploads/2020/01/SAMPLE_42mb_76_Pages.pdf',
        }}
        spacing={1} 
        page={selectedPage}
        scale={1.0}
        minScale={0.5}
        maxScale={3.0}
        renderActivityIndicator={() => <ActivityIndicator color="black" size="large" />}
        enablePaging={true}
        onPageChanged={(page, totalPages) => console.log(`${page}/${totalPages}`)}
        onLoadComplete={handlePdfLoadComplete}
        style={styles.pdf}
      />

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setSelectedPage(selectedPage - 1)}
          disabled={selectedPage === 1}
          style={selectedPage === 1 ? styles.disabledButton : styles.button}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedPage(selectedPage + 1)}
          disabled={selectedPage === 75}
          style={selectedPage === 75 ? styles.disabledButton : styles.button}
        >
          <Text style={styles.buttonText}>Forward</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  pdf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width-50,
    height: Dimensions.get('window').height-310,
    position: 'absolute',
    marginLeft: 5,
    marginRight:25,
    borderWidth: 1,
    marginTop:50,
    borderBottomWidth:1,
    borderColor:'#329FFF',
    marginBottom:100,
    },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 40,
  },
  button: {
    backgroundColor: '#329FFF',
    padding: 10,
    borderRadius: 10,
    margin: 4,
    width: 150,
  },
  disabledButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 40,
    margin: 15,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});


















