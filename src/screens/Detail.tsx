import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from "react-native"
import { TNavigationScreenProps, TRouteProps } from "../Routes";
import { theme } from "../shared/themes/Theme";
import { BaseInput } from "../shared/components/BaseImput";
import FontAwesome from '@expo/vector-icons/FontAwesome';




export const DetailPage = () => {
    const navigation = useNavigation<TNavigationScreenProps>(); 
    const { params } = useRoute<TRouteProps<"detail">>();

    return(
        <>
            <View style={styles.footerContainer}>
                <Text style={styles.footerTitle}>
                    Como está o seu humor hoje?
                </Text>

                 
                    <View style={styles.footStarContainer}>
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome 
                                name={ params.rate >= 1 ? "star" : "star-o" } 
                                size={36} 
                                color={params.rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                            />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome 
                                name={ params.rate >= 2 ? "star" : "star-o" } 
                                size={36} 
                                color={params.rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                            />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome 
                                name={ params.rate >= 3 ? "star" : "star-o" } 
                                size={36} 
                                color={params.rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                            />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome 
                                name={ params.rate >= 4 ? "star" : "star-o" } 
                                size={36} 
                                color={params.rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                            />
                        </TouchableOpacity>                    
                        <TouchableOpacity onPress={() => { }}>
                            <FontAwesome 
                                name={ params.rate >= 5 ? "star" : "star-o" } 
                                size={36} 
                                color={params.rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                            />
                        </TouchableOpacity>                    
                    </View>
            </View>   

            <BaseInput label='Data e hora'>      
                <TextInput 
                    style={styles.footerInput}
                    placeholder='Escreva seu nome aqui...'
                    placeholderTextColor={theme.colors.textPlaceholder}
                />
            </BaseInput>
            <BaseInput label='Descreva mais sobre esse humor'>      
                <TextInput 
                    numberOfLines={16}
                    multiline
                    style={{ ...styles.footerInput, ...styles.footerInputArea }}
                    placeholder='Escreva seu nome aqui...'
                    placeholderTextColor={theme.colors.textPlaceholder}
                />
            </BaseInput>    
        </>
    );
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
    footerInputArea: {
        height: theme.fonts.sizes.body * 16,
        textAlignVertical:'top',
    },
    footStarContainer: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        gap: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})