import { theme } from "@/theme";
import { useNavigation } from "expo-router";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Entrar() {

    const navigation = useNavigation()

    async function handlerLogar() {

        navigation.navigate("(tabs)")

    }

    async function handlerVoltar() {

        navigation.navigate("index")

    }

    return(
        <View style={styles.container}>

            <Text style={styles.textInicio}>
                INSCREVA-SE
            </Text>

            <TextInput
                style={styles.textNome}
                placeholder="Digite seu nome"
                placeholderTextColor={theme.colors.white}
            />
            
            <TextInput
                inputMode="email"
                style={styles.textEmail}
                placeholder="Digite seu email"
                placeholderTextColor={theme.colors.white}
            />

            <TextInput
                style={styles.textSenha}
                placeholder="Digite sua senha"
                placeholderTextColor={theme.colors.white}
            />

            <TextInput
                style={styles.textCargo}
                placeholder="Você é cliente ou pretador de serviço?"
                placeholderTextColor={theme.colors.white}
            />

            <TouchableOpacity style={styles.butttomLogar} onPress={() => ""}>

                <Text style={styles.textLogar}>
                    Salvar
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.butttomVoltar} onPress={handlerVoltar}>

                <Text style={styles.textVoltar}>
                    Voltar
                </Text>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black
    },
    textInicio:{
        top: 200,
        fontSize: 30,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.bold
    },
    textNome: {
        top: 280,
        width: 360,
        height: 50,
        padding: 10,
        alignSelf: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        backgroundColor: theme.colors.gray[700],
    },
    textEmail: {
        top: 300,
        width: 360,
        height: 50,
        padding: 10,
        alignSelf: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        backgroundColor: theme.colors.gray[700],
    },
    textSenha: {
        top: 320,
        width: 360,
        height: 50,
        padding: 10,
        alignSelf: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        backgroundColor: theme.colors.gray[700],
    },
    textCargo: {
        top: 340,
        width: 360,
        height: 50,
        padding: 10,
        alignSelf: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.regular,
        backgroundColor: theme.colors.gray[700],
    },
    butttomLogar: {
        top: 380,
        width: 360,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.blue,
    },
    textLogar: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium
    },
    butttomVoltar: {
        top: 392,
        width: 360,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: theme.colors.vermelho,
    },
    textVoltar: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        color: theme.colors.white,
        fontFamily: theme.fontFamily.medium
    },
})