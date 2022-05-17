import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Entypo } from '@expo/vector-icons';
import { Widget } from './src/components/Widget';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import { theme } from './src/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  })

  useEffect(() => {
    async function prepare() {
      try {
        // Mantenha a tela inicial visível enquanto buscamos recursos
        await SplashScreen.preventAutoHideAsync();

        // Pré-carregue fontes, faça qualquer chamada de API que você precisar fazer aqui
        await Font.loadAsync(Entypo.font);

        // Atraso artificialmente por dois segundos para simular um carregamento lento
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (e) {
        console.warn(e);

      } finally {
        // Diga ao aplicativo para renderizar
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      /** Isso diz à tela inicial para se esconder imediatamente! Se chamarmos isso depois
        `setAppIsReady`, então podemos ver uma tela em branco enquanto o aplicativo está
        carregando seu estado inicial e renderizando seus primeiros pixels. Então, em vez disso,
        ocultamos a tela inicial quando sabemos que a visualização raiz já foi layout executado.
      */
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1,  backgroundColor: '#bbb' }}>
      <Text>SplashScreen Demo! 👋</Text>

      <Widget/>

      <StatusBar 
        style='light'
        backgroundColor='transparent'
        translucent
      />

    </View>


  );
}
