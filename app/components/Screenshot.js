import React, { Component, useRef, useEffect } from 'react';
import { View, AppRegistry, StyleSheet } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { captureRef } from 'react-native-view-shot';
import RNFS from 'react-native-fs';

class Screenshot extends Component {
  constructor(props) {
    super(props);
    this.viewRef = useRef();
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.takeScreenshot();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  takeScreenshot = async () => {
    try {
      if (!this.viewRef.current) return;

      // Using react-native-view-shot to capture the view
      const uri = await captureRef(this.viewRef, {
        format: 'jpg',
        quality: 1,
      });

      // Generate file path with current timestamp
      const timestamp = new Date().getTime();
      const filePath = `${RNFS.DocumentDirectoryPath}/screenshot_${timestamp}.jpg`;

      // Save image to local file system
      await RNFS.copyFile(uri, filePath);

    } catch (error) {
      console.error('Error capturing screenshot', error);
    }
  };

  render() {
    return (
      <View style={styles.container} ref={this.viewRef}>
        <View style={{ flex: 0.5 }}>
          <Header />
        </View>
        <View style={{ flex: 4 }}>
          <Body />
        </View>
        <View style={{ flex: 0.5, backgroundColor: '#fe6902', borderTopStartRadius: 10, borderTopEndRadius: 10 }}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('Apli', () => Screenshot);

export default Screenshot;
