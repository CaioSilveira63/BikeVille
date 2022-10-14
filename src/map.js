import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button, Surface, Text, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Timer, Countdown } from 'react-native-element-timer';

// import { Container } from './styles';

const Map = ({ theme, navigation }) => {
  const [IsInitialFetch, setIsInitialFetch] = useState(true);
  const [time, setTime] = useState(0);
  const timerRef = useRef(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current += 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <Surface style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 2, padding: 10 }}>
          <Surface style={{ flex: 1, padding: 5, elevation: 10, borderRadius: 20 }}>
            <MapView
              userInterfaceStyle={theme.Type == 'dark' ? 'dark' : 'light'}
              style={{ height: "100%", width: "100%", borderRadius: 20 }}
              initialRegion={{
                latitude: -23.47601432078373,
                longitude: -46.572117552876634,
                latitudeDelta: 0.004,
                longitudeDelta: 0.006,
              }}>
              <Marker
                coordinate={{
                  latitude: -23.47601432078373,
                  longitude: -46.572117552876634,
                }}
                title={'Drogasil'}
              />
            </MapView>
          </Surface>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 15, flex: 1, justifyContent: "space-between" }}>
            <View>
              <Text style={{marginBottom: 10}}>Minha viagem:</Text>
              <Text style={{fontSize: 25, fontWeight: "bold"}}>{new Date(time * 1000).toISOString().slice(14, 19)}</Text>
            </View>
            <View>
            <Button
              icon={({ size, color }) => (
                <Icon name='alert' color={'white'} size={25} />
              )}

              buttonColor='#d35400'
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                marginBottom: 10
              }}
              mode="contained"
              onPress={() => navigation.navigate('Report')}>
              Reportar dano
            </Button>
            <Button
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
              }}
              mode="contained"
              onPress={() => navigation.navigate('Main')}>
              Finalizar
            </Button>

            </View>

          </View>
        </View>
      </SafeAreaView>
    </Surface>

  );
}

export default withTheme(Map);