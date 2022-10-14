import React, { useContext } from 'react';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { Button, Surface, Text, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemeContext from './Contexts/ThemeContext';

// import { Container } from './styles';

const Main = ({ theme, navigation }) => {
  const [Theme, setTheme] = useContext(ThemeContext);

  return (
    <Surface style={{ flex: 1, padding: 20 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <Text variant="displayLarge" style={{ marginBottom: 10 }}>Ultimas viagens:</Text>
            <List.Item
              title="01/08/2022"
              left={props => <List.Icon {...props} icon="bike" />}
            />
            <List.Item
              title="23/07/2022"
              left={props => <List.Icon {...props} icon="bike" />}
            />
            <List.Item
              title="20/07/2022"
              left={props => <List.Icon {...props} icon="bike" />}
            />

          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setTheme(Theme === 0 ? 1 : 0);
              }}>
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>Alterar tema</Text>
            </TouchableOpacity>

            <Button
              icon={({ size, color }) => (
                <Icon name='qrcode' color={'white'} size={25} />
              )}
              buttonColor='#d35400'
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
              mode="contained"
              onPress={() => navigation.navigate('QRCode')}>
              Escanear QR Code
            </Button>

          </View>
        </View>
      </SafeAreaView>
    </Surface>);
}

export default Main;