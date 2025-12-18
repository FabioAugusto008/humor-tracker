import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";


interface IBaseImputProps {
    children: React.ReactNode;
    label: string;
    asButton?: boolean;
    onPress?: () => void;
}

export const BaseInput = ({ children, label, asButton, onPress }: IBaseImputProps) => {


    return (
        <View style={styles.baseImputContainer}>
            <Text style={styles.label}>
                {label}
            </Text>

            {asButton && (
                <Pressable 
                onPress={onPress}
                    style={({pressed}) => pressed ? styles.baseImputPressed : styles.baseImput}

                >           
                    {children}
                </Pressable>)
            }
            {!asButton && (
                <View style={styles.baseImput}>           
                    {children}
                </View>)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    baseImputContainer: {
        flexDirection:'column',
        gap: 4,
     },
    label: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.body,
        color: theme.colors.text,
    },
    baseImput: {
        borderRadius: 8,
        backgroundColor: theme.colors.background,
    },
    baseImputPressed: {
        borderRadius: 8,
        backgroundColor: theme.colors.background,
        opacity: 0.5,

    }
});