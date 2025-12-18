import { StyleSheet, Text, TextInput, View } from "react-native"
import { BaseInput } from "../shared/components/BaseImput"
import { theme } from "../shared/themes/Theme";
import { Button } from "../shared/components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TNavigationScreenProps } from "../Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const SetUserNamePage = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<TNavigationScreenProps>();

    const [ name, setName ] = useState('');

    useEffect(() => {
        AsyncStorage
        .getItem('user-name')
        .then(value => {
            setName(value || '');
        })
    }, []);


    const handleSaveUserName = async () => {
        try {
            await AsyncStorage.setItem('user-name', name);
        } catch (e) {
        // saving error
        }
        navigation.popTo('home', {newName: name})
    }
    
    return (
        <View style={ { ...styles.container, paddingBottom: insets.bottom }}>
            <Text style={styles.title}>
                Qual é o seu nome?
            </Text>

            <BaseInput label='Nome'>
                <TextInput 
                autoFocus
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
                placeholder='Escreva seu nome aqui...'
                placeholderTextColor={theme.colors.textPlaceholder}
                /> 
            </BaseInput>    

            <View style={{flex: 1 }} />

            <Button
                title='Salvar'
                onPress={ handleSaveUserName }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        flex: 1
    },
    title: {
        textAlign:'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        
    },
    input: {
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        padding: 12,
    }
});