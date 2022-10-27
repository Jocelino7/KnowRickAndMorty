import { useQuery } from "@apollo/client";
import NetInfoModal from "../components/NetInfoModal.js";
import { unsubscribe } from "../components/utils.js";
import {
    Pressable,
    Text,
    Image,
    View,
    StatusBar,
    ScrollView,
    ActivityIndicator
} from "react-native";

import { characterQuery } from "../gql/query";
import { style } from "../style/style.js"
import { useEffect, useState } from "react"
import Search from "../components/Search"

const SearchScreen = ({ route, navigation }) => {
    const { search } = route.params

    const { data, loading } = useQuery(characterQuery(null, `"${search}"`))
    const [visible,setVisible] = useState(false)
    const handleSearch = (value) => {
        navigation.navigate("SearchScreen", { search: value })

    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Search handleSearch={handleSearch} />
            ),

        })
        unsubscribe(setVisible)
    })
    if (visible)
        return <NetInfoModal path="SearchScreen" params={route.params} navigation={navigation} visible={visible} />

    if (loading)
        return (
            <View style={style.main}>
                <ActivityIndicator />

            </View>
        )

    return (

        <>
            <StatusBar style={{ backgroundColor: "red" }} />
            <ScrollView style={style.main}>

                <Text style={style.title}>Results</Text>



                {
                    data.characters.results.length === 0 ?
                        <Text style={{ color: "#FFF", alignSelf: "center" }}> No Result Found</Text> :

                        data.characters.results.map(item => {
                            return (
                                <Pressable onPress={() => {
                                    navigation.navigate("Details", {
                                        name: item.name,
                                        status: item.status,
                                        gender: item.gender,
                                        species: item.species,
                                        image: item.image,
                                        origin: item.origin,
                                        next: data.characters.results

                                    })
                                }
                                }
                                    key={item.id}
                                >
                                    <View style={style.container} >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={style.image}

                                        />
                                        <Text style={style.imageDescriptionText}>{item.name}</Text>

                                    </View>

                                </Pressable>


                            )

                        })
                }


            </ScrollView>

        </>

    )

}

export default SearchScreen