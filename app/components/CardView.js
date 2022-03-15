import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// const ProdRender = ({ proddata }) => {

//     return proddata.map((item, key) => {
//         return (
//             <View key={key}>
                
//             </View>
//         )
//     })
// }

const CardView = (props) => {
    console.log(props)
    return (
        <ScrollView style={styles.listContainer}>
            <View style={styles.listItem}>
            <Image
                    source={{ uri: item.image }}
                    style={styles.placeImage} />
                <Text style={styles.textval} >{item.name}</Text>
                <Text >{'\n'}</Text>
                <Text style={styles.textval2}> category: {item.category} </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "80%"
    },
    listItem: {
        width: "100%",
        padding: 10,
        marginTop: 2,
        color: '#191970',
        backgroundColor: '#eee',
        alignSelf: 'stretch',
    },
    placeImage: {
        marginRight: 8,
        height: 100
    },
    textval: {
        textAlign: 'center',
        fontSize: 30
    },
    textval2: {
        textAlign: 'center',
        fontSize: 15
    }
})

export default CardView;