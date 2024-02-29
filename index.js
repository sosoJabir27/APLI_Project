import React, { useRef, useCallback, useEffect } from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import Header from './app/components/Header';
import Body from './app/components/Body';
import Footer from './app/components/Footer';
import FileSystem from 'react-native-fs';

const Todo = () => {

  const viewRef = useRef()

  const takeScreenshot = useCallback(async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 0.8,
      });
      console.log('Screenshot saved to:', uri);
      const appFolder = FileSystem.DocumentDirectoryPath;
      const screenshotsFolder = `${appFolder}/screenshots`;

      // Check if the screenshots directory exists, if not, create it
      const folderExists = await FileSystem.exists(screenshotsFolder);
      if (!folderExists) {
        await FileSystem.mkdir(screenshotsFolder);
      }

      const filePath = `${screenshotsFolder}/screenshot.jpg`;

      // Move the screenshot to the screenshots directory
      await FileSystem.moveFile(uri, filePath);
      console.log('Screenshot saved to:', filePath);

      // Open the screenshot in Android
      
      
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    const screenshotInterval = setInterval(() => {
      takeScreenshot();
    }, 5000);
    return () => clearInterval(screenshotInterval);
  }, [takeScreenshot]);

  return (
    <View ref={viewRef} style={[styles.container]}>
      <View style={{flex: 0.5}}>
        <Header />
      </View>
      <View style={{flex: 4}}>
        <Body />
      </View>
      <View style={{flex: 0.5 , backgroundColor: '#fe6902', borderTopStartRadius: 10, borderTopEndRadius: 10}}>
        <Footer />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position:'absolute',
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    position: 'relative'
  }
});

AppRegistry.registerComponent('Apli', () => Todo);
