import { View, Text, StyleSheet } from "react-native";

function PerfilScreen () {
    return (
        <View style={{flex: 1}}>
            <View style={styles.perfil}>
                <View style={styles.photo}></View>
                <View style={styles.card}>
                    <Text>Nome</Text>
                    <Text>E-mail</Text>
                </View>
            </View>
            <View style={styles.skillSection}>
                <Text>Habilidades</Text>
                <View style={styles.skills}>
                    <Text>Typescript</Text>
                    <Text>React Native</Text>
                </View>                
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    perfil: {
        flexDirection: "row",
        padding: 16
    },

    photo: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#eee"
        
    },

    card: {
        justifyContent: "center",
        paddingLeft: 16
    },

    skillSection: {
        paddingLeft: 16
    },

    skills: {
        flexDirection: "row"
    }

})

export default PerfilScreen;