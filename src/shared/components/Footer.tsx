import { StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets} from 'react-native-safe-area-context'
import { theme } from "../themes/Theme";




interface IFooterProps {
    children: React.ReactNode;
}
export const Footer = ({ children }: IFooterProps) => {

    const insets = useSafeAreaInsets();

    return(
        <View style={ {...styles.footerContainer, paddingBottom: insets.bottom + 16 }}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        padding: 16,
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        backgroundColor: theme.colors.paper,
        ...theme.shadows.default
    },
});