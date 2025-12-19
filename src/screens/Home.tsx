import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TNavigationScreenProps, TRouteProps } from "../Routes";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";
import { BaseInput } from "../shared/components/BaseImput";
import { theme } from "../shared/themes/Theme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export const HomePage = () => {
    const navigation = useNavigation<TNavigationScreenProps>(); 
    const { params } = useRoute<TRouteProps<"home">>();

    const [name, setName] = useState('');
    
    useEffect(() => {
        if (params?.newName) {
            setName(params?.newName || '')
        }
    }, [params?.newName]);

    useEffect(() => {
        AsyncStorage
        .getItem('user-name')
        .then(value => {
            setName(value || '');
        })
    }, []);


    return<>
        <Header name={name} />

        <View style={ styles.emptyContentConainer}>
            <Text style={ styles.emptyContentText}>
                Você ainda não {'\n'}
                registrou o seu humor! {'\n'} 
            </Text>
        </View>

        <Footer>
            <View style={styles.footerContainer}>
                <Text style={styles.footerTitle}>
                    {name ? 'Como está o seu humor hoje?' : 'Qual é o seu nome?'} 
                </Text>

                 {!name && (
                    <BaseInput label='Nome' asButton onPress={() => navigation.navigate('setUserName')}>      
                        <TextInput 
                            pointerEvents='none'
                            editable={false}
                            style={styles.footerInput}
                            placeholder='Escreva seu nome aqui...'
                            placeholderTextColor={theme.colors.textPlaceholder}
                        />
                    </BaseInput>
                 )}
                 {name && (
                    <View style={styles.footStarContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 1 })}>
                            <FontAwesome name="star-o" size={36} color={theme.colors.textPlaceholder} />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 2 })}>
                            <FontAwesome name="star-o" size={36} color={theme.colors.textPlaceholder} />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 3 })}>
                            <FontAwesome name="star-o" size={36} color={theme.colors.textPlaceholder} />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 4 })}>
                            <FontAwesome name="star-o" size={36} color={theme.colors.textPlaceholder} />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => navigation.navigate('detail', {rate: 5 })}>
                            <FontAwesome name="star-o" size={36} color={theme.colors.textPlaceholder} />
                        </TouchableOpacity>                    
                    </View>
                 )}
            </View>
        </Footer>
    </>;
}

const styles = StyleSheet.create({
    footerTitle: {
        textAlign:'center',
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        
    },
    footerContainer: {
       gap: 8,
    },
    footerInput: {
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
        color: theme.colors.text,
        padding: 12,
    },
    footStarContainer: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    emptyContentConainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    emptyContentText: {
        textAlign:'center',
        fontSize: theme.fonts.sizes.subtitle,
        fontFamily: theme.fonts.family.italic,
        color: theme.colors.textPlaceholder,
    },
});