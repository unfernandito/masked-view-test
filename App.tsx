import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <MaskedView
      style={styles.maskedView}
      maskElement={
        <View style={styles.viewTransparent}>
          <Text style={styles.text}>Basic Mask</Text>
        </View>
      }>
      {/* Shows behind the mask, you can put anything here, such as an image */}
      <View style={styles.viewBlue} />
      <View style={styles.viewYellow} />
      <View style={styles.viewRed} />
      <View style={styles.viewWhite} />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  viewTransparent: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBlue: {
    flex: 1,
    height: '100%',
    backgroundColor: '#324376',
  },
  viewYellow: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F5DD90',
  },
  viewRed: {
    flex: 1,
    height: '100%',
    backgroundColor: '#F76C5E',
  },
  viewWhite: {
    flex: 1,
    height: '100%',
    backgroundColor: '#e1e1e1',
  },
});

export default App;
