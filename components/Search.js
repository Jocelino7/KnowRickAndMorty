import { TextInput, StyleSheet, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"

const Search = ({handleSearch}) => {
   
    return (
        <View style={style.search}>
            <Icon name='search1' size={20} color="#4169E1" />
            <TextInput style={style.input} onEndEditing={(value)=>handleSearch(value.nativeEvent.text)} />

        </View>
    )
}
const style = StyleSheet.create({
    search:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      borderWidth:1,
      borderColor:"#4169E1",
      borderRadius:5,
      paddingHorizontal:5,
      width:"80%",
      alignSelf:"center"

    },
    input:{
      width:"90%",
      marginHorizontal:3,
      alignSelf:"center"

    }

})


export default Search