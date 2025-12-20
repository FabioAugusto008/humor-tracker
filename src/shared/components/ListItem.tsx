import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface IListProps {
    rate: number;
    datetime: string,
    description: string;
}

export const ListItem = ({ rate, datetime, description }: IListProps) => {


    return(
        <View style={ styles.container }>
            <Text style={ styles.dateTimeText }>
                20/12/2025 às 10:00 
            </Text>

            <View style={ styles.starsContainer }>
                {Array.from(new Array(rate)).map(( _, index, all ) => (
                    <FontAwesome 
                    key={ index }
                    name={ "star" } 
                    size={30} 
                    color={ theme.colors.highlight } 
                    style={ { 
                        ...styles.starFill, 
                        ...( index === 0 ? styles.starFillStart : {} ), 
                        ...( (index + 1 ) === all.length ? styles.starFillEnd : {} ),
                    } }
                />
                ))}
                {Array.from(new Array( 5 - rate )).map(( _, index, all ) => (
                    <FontAwesome 
                    key={ index }
                    name={ 'star-o' } 
                    size={30} 
                    color={ theme.colors.highlight } 
                    style={ styles.star }
                />
                ))}          
            </View>

            <Text style={ styles.descriptionText }>
                {description}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.paper,
        borderRadius: 8,
        padding: 16,
        gap: 12,
    },
    dateTimeText: {
        color: theme.colors.textPlaceholder,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        padding: 4,
    },
    starFill: {
        padding: 4,
        backgroundColor: theme.colors.backgroundHighLight
    },
    starFillStart: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        padding: 4,
        backgroundColor: theme.colors.backgroundHighLight
    },
    starFillEnd: {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        padding: 4,
        backgroundColor: theme.colors.backgroundHighLight
    },
    descriptionText: {
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular,
    }

})