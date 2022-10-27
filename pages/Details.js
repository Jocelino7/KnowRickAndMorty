import { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, ImageBackground,Pressable } from "react-native"

import NetInfoModal from "../components/NetInfoModal.js";
import {unsubscribe} from '../components/utils'
import {style} from "../style/detailStyle"
function handleStatus(status) {
    return status === "Dead" ? <Text style={[style.status, { color: 'red' }]}>Dead</Text> :
        <Text style={[style.status, { color: 'green' }]}>Alive</Text>
}


const Details = ({ route, navigation }) => {
    const { status, name, species, image, gender, origin, next } = route.params
    const { type, dimension } = origin
    const [visible,setVisible] = useState(false)

    useEffect(()=>unsubscribe(setVisible))

    if(visible)
        return (<NetInfoModal path="HomeScreen" params={route.params} navigation={navigation} visible={visible}/>)

    return (
        <ScrollView style={style.main} >
            <View style={style.container}>
                <Image resizeMode="cover" style={style.image} source={{ uri: image }} />
                <View style={style.description}>
                    <Text>Name: {name}</Text>
                    <Text>Gender: {gender}</Text>
                    <Text>Specie: {species}</Text>
                    <Text>status: {handleStatus(status)}</Text>
                    <Text>Origin:{origin.name}</Text>
                    <Text>Type:{type}</Text>
                    <Text>Dimension:{dimension}</Text>

                </View>
            </View>
            <Text style={{ color: "#FFF", padding: "5%" }}>Next</Text>
            <ScrollView horizontal={true} style={style.ScrollViewHorizontal}>

                {next.map(item => {

                    if (item.name !== name)
                        return (
                            <Pressable key={item.id}   onPress={() => {
                                navigation.navigate("Details", {
                                    name: item.name,
                                    status: item.status,
                                    gender: item.gender,
                                    species: item.species,
                                    image: item.image,
                                    origin: item.origin,
                                    next: next

                                })
                            }}>
                                <View style={style.imageContainer}>

                                    <ImageBackground
                                        style={style.scrowllViewImage}
                                        source={{ uri: item.image }}
                                    >
                                        <Text style={style.scrowllViewImageDescription}>{item.name}</Text>
                                    </ImageBackground>

                                </View>

                            </Pressable>


                        )


                })}

            </ScrollView>
        </ScrollView>
    )
}

export default Details