import EStyleSheet from "react-native-extended-stylesheet"
EStyleSheet.build()

 export const style = EStyleSheet.create({
    title: {
        color: "#fff",
        fontSize: "1rem",
        width: "100%",
        textAlign: "center"
    },
    main: {
        backgroundColor: "#252525",
        flex: 1,
    },

    container: {
        width: "100%",
        alignItems: "center",
        paddingVertical: "1rem",
        marginVertical: ".1rem"
    },
    image: {
        width: "80%",
        height: 200,
        borderRadius: 1,
    },
    imageDescriptionText: {
        color: "#252525",
        padding: ".4rem",
        borderRadius: 1,
        backgroundColor: "#FFF",
        width: "80%",
        marginVertical: "0rem"
    },
    buttonContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",

    },
    button: {
        margin: ".2rem",
        backgroundColor: "#4169E1",
        width: "5rem",
        padding: 5,
        borderRadius: 3,
        alignItems: "center"
    },
    genericText: {
        color: "#FFF"

    }

})

