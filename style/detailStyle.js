import EStyleSheet from "react-native-extended-stylesheet"
import {Dimensions} from "react-native"
const window = Dimensions.get('window')['width']
EStyleSheet.build()
export const style = EStyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#252525"
    },
    container: {

        alignItems: "center",
        marginVertical: "1rem"

    },
    image: {
        width: "90%",
        height: 150,
    },
    description: {
        backgroundColor: "#FFF",
        width: "90%",
        padding: "1rem",
        opacity: 20,
    },
    status: {
        padding: 10,
        borderRadius: 5,
    },
    ScrollViewHorizontal: {
        marginVertical: "1rem"

    },
    scrowllViewImage: {
        width: "100%",
        minHeight: 100,
        borderRadius: 5,
        justifyContent: "flex-end",
        alignItems: "center"


    },
    imageContainer: {
        width: (window * 0.35),
        height: 100,
        marginHorizontal: 5
    },
    ScrollViewHorizontal: {
        padding: "5%",
    },
    scrowllViewImageDescription: {
        padding: 5,
        backgroundColor: "#FFF",
        width: "100%"

    }

})
