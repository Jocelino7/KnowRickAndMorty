import { useQuery } from "@apollo/client";
import {
    Pressable,
    Text,
    Image,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator
} from "react-native";

import { style } from "../style/style.js"
import { useState, useEffect } from "react";
import Search from "../components/Search";
import { characterQuery } from "../gql/query"
import NetInfoModal from "../components/NetInfoModal.js";
import { unsubscribe } from "../components/utils.js";

const HomeScreen = ({ navigation,route }) => {

    const [page, setPage] = useState(1)
    const [visible,setVisible]=useState(false)
    const { data, loading } = useQuery(characterQuery(page))
    const handleSearch = (value) => {
        navigation.navigate("SearchScreen", { search: value })

    }


    function handlePaginationFoward() {
        setPage((prev) => prev + 1)
    }
    function handlePaginationBackward(page) {
        if (page === 1)
            return 
        return setPage((prev) => prev - 1);

    }

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Search handleSearch={handleSearch} />
            )
        })
        unsubscribe(setVisible)
            
        
    },)

     if(visible)
         return <NetInfoModal path="HomeScreen" navigation={navigation} visible={visible}/>

    if (loading)
        return (
            <View style={style.main}>
                <ActivityIndicator />
            </View>
        )

    if (data.characters.info.next === null)
        return (
            <View style={[style.main, { flex: 1, alignItems: "center" }]}>
                <Text style={{ color: "#FFF" }}>You have come to the end, no more data to be fetched.</Text>
                <TouchableOpacity style={style.button} onPress={handlePaginationBackward}>
                    <Text style={style.genericText}>Prev</Text>
                </TouchableOpacity>

            </View>
        )

    return (

        <>
            <StatusBar style={{ backgroundColor: "red" }} />
            <ScrollView style={style.main}>

                <Text style={style.title}>Characters</Text>

                {data.characters.results.map(item => {
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
                <View style={style.buttonContainer}>

                    <TouchableOpacity style={style.button} onPress={() => handlePaginationBackward(page)}>
                        <Text style={style.genericText}>Prev</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.button} onPress={handlePaginationFoward}>
                        <Text style={style.genericText}>Next</Text>
                    </TouchableOpacity>


                </View>

            </ScrollView>

        </>

    )
}

export default HomeScreen