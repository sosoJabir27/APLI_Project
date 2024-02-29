//import needed libraries
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

class Header extends Component{
    render(){
      return (
        <View style={styles.containerHeader}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.menuButton}>
              <Image source={require('C:/Apli/images/menu-hamburger.png')} style={styles.logo} />
            </TouchableOpacity>
            <Image source={require('C:/Apli/images/logo-lapli.png')} style={styles.logoLarge} />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    containerHeader: {
      marginTop: 10
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },

    menuButton: {
      marginLeft: 10,
    },

    logo: {
      width: 30,
      height: 30,
    },

    logoLarge: {
      width: 160,
      height: 50,
    },

  });


//export the component to be aviable for other components in the app
export default Header;