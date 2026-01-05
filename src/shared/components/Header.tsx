import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme";




interface IHeaderProps {
    name: string | undefined;
}
export const Header = ({ name }: IHeaderProps) => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Olá, </Text>
            <Text style={styles.headerBoldText}>{!name ? 'Seu nome é?' : `${name}! ` }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.title
    },
    headerBoldText: {
        color: theme.colors.primary,
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.bold
    }
});