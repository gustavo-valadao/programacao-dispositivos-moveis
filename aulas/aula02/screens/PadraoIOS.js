import { View } from "react-native";

function PadraoIOS () {
    return (
        <View style={
            {
                flex: 1,
                justifyContent: "space-between"
            }
        }>
            <View style={{ height: 64, backgroundColor: "gray"}}>
            </View>

            <View style={{ height: 64, backgroundColor: "lightgray"}}>
            </View>

        </View>
    )
}

export default PadraoIOS;