import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { TNavigationScreenProps, TRouteProps } from "../Routes";
import { theme } from "../shared/themes/Theme";
import { BaseInput } from "../shared/components/BaseImput";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from "../shared/components/Button";
import { v4 as uuid } from 'uuid';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const DetailPage = () => {
    const navigation = useNavigation<TNavigationScreenProps>(); 
    const { params } = useRoute<TRouteProps<"detail">>();
    
    const [rate, setRate] = useState(params.rate);
    const [datetime, setDatetime] = useState(new Date());
    const [description, setDescription] = useState('');
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const insets = useSafeAreaInsets();
    
    const handleSave = async () => {

        const newItem = { 
            id: uuid(),
            datetime: datetime.getDate(), 
            rate, 
            description 
        };

        
        try {
            const items = await AsyncStorage
                .getItem('humor-items', )
                .then(itemsAsString => !itemsAsString ? [] : JSON.parse(itemsAsString) as any[]); 

            items.unshift(newItem);    

            await AsyncStorage.setItem('humor-items', JSON.stringify(items));

            navigation.popTo('home', { newItem });
        } catch (e) {
        // saving error
        }

        


    }

    return(
        <>
            <View style={{ ...styles.footerContainer, paddingBottom: insets.bottom }}>
                <Text style={styles.footerTitle}>
                    Como está o seu humor hoje?
                </Text>

                    <View style={styles.footStarContainer}>
                            <TouchableOpacity onPress={() => setRate(1)}>
                                <FontAwesome 
                                    name={ rate >= 1 ? "star" : "star-o" } 
                                    size={36} 
                                    color={rate >= 1 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                                />
                            </TouchableOpacity>                    
                            <TouchableOpacity onPress={() => setRate(2)}>
                                <FontAwesome 
                                    name={ rate >= 2 ? "star" : "star-o" } 
                                    size={36} 
                                    color={rate >= 2 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                                />
                            </TouchableOpacity>                    
                            <TouchableOpacity onPress={() => setRate(3)}>
                                <FontAwesome 
                                    name={ rate >= 3 ? "star" : "star-o" } 
                                    size={36} 
                                    color={rate >= 3 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                                />
                            </TouchableOpacity>                    
                            <TouchableOpacity onPress={() => setRate(4)}>
                                <FontAwesome 
                                    name={ rate >= 4 ? "star" : "star-o" } 
                                    size={36} 
                                    color={rate >= 4 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                                />
                            </TouchableOpacity>                    
                            <TouchableOpacity onPress={() => setRate(5)}>
                                <FontAwesome 
                                    name={ rate >= 5 ? "star" : "star-o" } 
                                    size={36} 
                                    color={rate >= 5 ? theme.colors.highlight : theme.colors.textPlaceholder} 
                                />
                            </TouchableOpacity>                    
                    </View>
                

                <BaseInput label='Data e hora' asButton onPress={() => setShowDateTimePicker(true)}>      
                    <TextInput 
                        value={datetime.toLocaleString('pt-Br')}
                        pointerEvents='none'
                        editable={false}
                        style={styles.footerInput}
                        placeholder='Selecione uma data e hora...'
                        placeholderTextColor={theme.colors.textPlaceholder}
                    />
                </BaseInput>
                <DateTimePickerModal
                    isVisible={showDateTimePicker}
                    mode="datetime"
                    date={datetime}
                    onCancel={() => setShowDateTimePicker(false)}
                    onConfirm={(date) => { setShowDateTimePicker(false); setDatetime(date) }}
                />

                <BaseInput label='Descreva mais sobre esse humor'>      
                    <TextInput 
                        value={description}
                        onChangeText={setDescription}
                        numberOfLines={16}
                        multiline
                        style={{ ...styles.footerInput, ...styles.footerInputArea }}
                        placeholder='Escreva uma nota...'
                        placeholderTextColor={theme.colors.textPlaceholder}
                    />
                </BaseInput>    

                <View style={{ flex: 1 }} />

                <View style={styles.actionContainer}> 
                    {params.id &&(
                        <Button variant="outlined" color={theme.colors.error}>
                            <MaterialIcons 
                                name="delete-outline" 
                                size={18} 
                                color={theme.colors.error}
                            />   
                        </Button>
                    )}                 
                    <Button
                        variant="outlined"
                        grow 
                        title='Cancelar'
                        onPress={() => navigation.goBack()}
                    />
                    <Button 
                        grow
                        title='Salvar'
                        onPress={handleSave}
                    />   
                </View>
            </View>
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
       flex: 1
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
    },

    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,

    }
})