import { Pressable, StyleSheet, Text } from "react-native";
import { theme } from "../themes/Theme";
import { Background } from "@react-navigation/elements";



interface IButtonProps {
    children?: React.ReactNode;
    title?: string;
    color?: string;
    grow?: boolean; 
    variant?: 'contained' | 'outlined';
    onPress?: () => void;
}

export const Button = ({ children, title, grow, color, variant = 'contained', onPress } : IButtonProps) => {


    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => ({
                ...styles.button,
                ...(pressed ? styles.buttonPressed : {}),
                ...(grow ? { flexGrow: 1 } : {}),
                ...(variant === 'contained' ? styles.buttonContained : {}),
                ...(variant === 'outlined' 
                    ? {
                        ...styles.buttonOutlined,
                        ...(color && { borderColor: color}),
                    } 
                    : {}
                ),
            })}
        >
            {children}
            {!children && (
                <Text 
                    style={{
                        ...styles.buttonText,
                        ...(variant === 'contained' ? styles.buttonContainedText : {}),
                        ...(variant === 'outlined' ? styles.buttonOutlinedText : {}),
                    }}
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonContained: {
        backgroundColor: theme.colors.primary,
    },
    buttonOutlined: {
        borderWidth: 2,  
        borderColor: theme.colors.primary     
    },
    buttonOutlinedText: {
        color: theme.colors.primary,
    },
    buttonText: {
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.primaryText,
        fontSize: theme.fonts.sizes.body,
    },
    buttonContainedText: {
        color: theme.colors.primaryText,

    }
})