import React from 'react';
import {
    View,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Surface, Text, withTheme, TextInput, Button } from 'react-native-paper';
import { BG } from './assets/images';
import { Icon } from '@rneui/base';

function Register({ theme, navigation }) {
    const Colors = theme.colors;

    const Separator = () => (
        <View
            style={{
                backgroundColor: Colors.onSurface,
                height: 1,
                width: '100%',
                marginTop: 15,
                marginBottom: 15,
            }}
        />
    );

    const Margin = 15;

    return (
        <Surface style={{ flex: 1 }}>
            <ImageBackground
                source={BG}
                imageStyle={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                style={{
                    flex: 1,
                }}>
                <SafeAreaView />
                <View style={{ flex: 1, padding: 20 }}>
                    <Surface style={{ borderRadius: 20, padding: 20, flex: 1 }}>
                        <Text style={{ fontSize: 20 }}>Registrar</Text>

                        <Separator />
                        <ScrollView style={{ width: '100%' }}>
                            <View style={{ width: '100%' }}>
                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Nome"
                                    left={<TextInput.Icon icon="account" />}
                                    style={{ marginBottom: Margin }}
                                />
                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Sobrenome"
                                    left={<TextInput.Icon icon="account" />}
                                    style={{ marginBottom: Margin }}
                                />
                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="CPF"
                                    left={<TextInput.Icon icon="account" />}
                                    style={{ marginBottom: Margin }}
                                />

                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Email"
                                    left={<TextInput.Icon icon="email" />}
                                    style={{ marginBottom: Margin }}
                                />
                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Confirmar email"
                                    left={<TextInput.Icon icon="email" />}
                                    style={{ marginBottom: Margin }}
                                />

                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Senha"
                                    left={<TextInput.Icon icon="lock" />}
                                    right={<TextInput.Icon icon="eye" />}
                                    style={{ marginBottom: Margin }}
                                />
                                <TextInput
                                    theme={{ roundness: 10 }}
                                    mode="outlined"
                                    label="Confirmar senha"
                                    left={<TextInput.Icon icon="lock" />}
                                    right={<TextInput.Icon icon="eye" />}
                                    style={{ marginBottom: Margin }}
                                />
                                <Button buttonColor='#d35400'

                                    mode="contained"
                                    style={{
                                        borderRadius: 100,
                                        width: '100%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 15,
                                    }}
                                    onPress={() => navigation.navigate('Main')}>
                                    Concluir
                                </Button>
                                <Button
                                    onPress={() => navigation.goBack()}
                                    mode="contained"
                                    icon={'arrow-left'}
                                    buttonColor='#c0392b'
                                    style={{
                                        borderRadius: 100,

                                        width: '100%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginBottom: 15,
                                    }}>
                                    Voltar
                                </Button>
                            </View>
                        </ScrollView>
                    </Surface>
                </View>
            </ImageBackground>
        </Surface>
    );
}

export default withTheme(Register);
