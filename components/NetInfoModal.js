import { View, Modal, TouchableOpacity, Text } from 'react-native';
import { style } from "../style/style.js"
function NetInfoModal({ navigation, path, visible, params }) {
    

    return (
        <Modal
            visible={visible}
            transparent={false}
            animationType="fade"
        >
            <View style={style.main}>
                <Text style={[style.genericText, { alignSelf: "center" }]}>
                    You are not connected to the internet...
                </Text>
                <TouchableOpacity style={[style.button, { alignSelf: "center" }]} onPress={() => navigation.navigate(path, params ? params : "")}>
                    <Text style={style.genericText}>
                        retry
                    </Text>
                </TouchableOpacity>

            </View>

        </Modal>
    )



}





export default NetInfoModal