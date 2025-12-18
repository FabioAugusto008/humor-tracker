import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../themes/Theme";



interface IButtonProps {
    children?: React.ReactNode;
    title: string;
    onPress?: () => void;
}

export const Button = ({ children, title, onPress } : IButtonProps) => {


    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => ({
                ...styles.button,
                ...(pressed ? styles.buttonPressed : {})
            })}
        >
            {children}
            {!children && <Text style={styles.buttonText}>{title}</Text>}
        </Pressable>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonText: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.body,
        color: theme.colors.primaryText
    }
})