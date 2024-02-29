import React, { Component } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Body extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card containerStyle={styles.cardContainer}>
                    <Card.Title style={styles.title}>CGU / RGPD</Card.Title>
                </Card>
                <Card containerStyle={styles.subcardContainer}>
                    <Text style={styles.text}>
                        <Text style={styles.subtitle}>TITRE DU TEXTE :</Text>
                        {"\n\n"}
                        <Text>
                            Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
                            Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
                            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
                        </Text>
                        {"\n\n"}
                        <Text>
                            Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. 
                        </Text>
                        {"\n\n"}
                        <Text>
                            Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, 
                            par son inclusion dans des applications de mise en page de texte, comme Aldus Page Maker.
                        </Text>
                        {"\n\n"}
                        <Text>
                            Lorem Ipsum.
                        </Text>
                    </Text>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    title: {
        textAlign: 'left',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    text: {
        textAlign: 'left',
        // fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    cardContainer: {
        backgroundColor: '#fe6902',
        borderRadius: 20,
        position: 'relative',
        paddingTop: 4
    },
    subcardContainer: {
        shadowColor: 'transparent', // Set shadow color to transparent
        shadowOpacity: 0, // Set shadow opacity to 0 to remove shadow
        borderWidth: 0, // Remove border
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        position: 'absolute',
        marginTop: 45,
        left: 0,
        height: '91%',
        marginLeft: 16, // Adjusted marginLeft
        paddingTop: 40
    },
});
export default Body;
