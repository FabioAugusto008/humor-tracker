import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SetUserNamePage } from "./screens/SetUseName";

import { DetailPage } from "./screens/Detail";
import { HomePage } from "./screens/Home";
import { Children } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./shared/themes/Theme";


 type THumorItem = {
    id: string; 
    datetime: number; 
    rate: number;
    description: string;
 }

 type TScreenDefinitions = {
    home: { newName?: string, newItem?: THumorItem } | undefined;
    setUserName: undefined;
    detail: { rate: number, id?: string };
 }

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="home" 
                screenLayout={({ children }) => (
                    <SafeAreaView style={{ flex:1 }} edges={['top', 'left', 'right']}>
                        {children}
                    </SafeAreaView>
                )}
                screenOptions={{ headerShown: false, contentStyle: {
                    backgroundColor: theme.colors.background,
                },
                }}

            >
                <Stack.Screen name="home" component={HomePage} />

                <Stack.Group 
                    screenOptions={{
                        sheetCornerRadius: 30,
                        presentation: 'formSheet',
                        contentStyle: {
                            height: '100%',
                        }
                    }}
                    screenLayout={({ children }) => (
                        <SafeAreaView 
                            style={{ 
                                flex:1, 
                                padding: 16,
                                backgroundColor: theme.colors.paper,
                            }} 
                            edges={['left', 'right']}
                        >
                            {children}
                        </SafeAreaView>
                    )}
                >
                    <Stack.Screen 
                        name="detail" 
                        component={DetailPage} 
                        options={ {sheetAllowedDetents: [0.8]} }
                    />
                    <Stack.Screen 
                        name="setUserName" 
                        component={SetUserNamePage}  
                        options={ {sheetAllowedDetents: [0.5]} }
                    />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>

export type TRouteProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>