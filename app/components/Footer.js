import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Footer extends Component {
  render() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerChild}>
            <TouchableOpacity style={styles.container}>
                <Image source={require('C:/Apli/images/icone-home.png')} style={styles.button} />
                <Text style={styles.texte}>Accueil</Text>
            </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('C:/Apli/images/icone-enfant.png')} style={styles.button} />
                    <Text style={styles.texte}>Enfants</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('C:/Apli/images/icone-param.png')}  style={styles.button}/>
                    <Text style={[styles.texte]}>Mon Compte</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', // Center content horizontally
    },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
  footerChild: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    width: 45,
    height: 45
  },
  texte: {
    color: 'white',
    fontSize: 11
},
});

export default Footer;
