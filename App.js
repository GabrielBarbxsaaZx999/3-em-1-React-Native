import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <ImageBackground
      source={{ uri: 'https://preview.redd.it/n4smgahutmv81.jpg?auto=webp&s=dd523509ee67353e0f94741fe6b6d4466988712f' }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
    >
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 40, fontFamily: 'Arial', fontWeight: 'bold', color: '#333', color: 'black' }}>
          Gabriel Sistemas's Page
        </Text>
        <Button
          title="Quadrado"
          onPress={() => navigation.navigate('Quadrado')}
          color="#FF5733"  // Cor personalizada
        />
        <Button
          title="Triangulo"
          onPress={() => navigation.navigate('Triangulo')}
          color="#3498db"  // Cor personalizada
        />
        <Button
          title="Idade"
          onPress={() => navigation.navigate('Idade')}
          color="#FF5733"  // Cor personalizada
        />
      </View>
    </ImageBackground>
  );
}

function QuadradoScreen() {
  const [side, setSide] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = parseFloat(side) ** 2;
    setResult(area);
  };

  return (
    <View style={stylesArea.container}>
      <Text style={stylesArea.title}>Calculadora de Área de Quadrado </Text>
      <TextInput
        style={stylesArea.input}
        placeholder="Digite o lado do quadrado"
        onChangeText={(text) => setSide(text)}
        keyboardType="numeric"
        value={side}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={stylesArea.result}>Área: {result}</Text>}
    </View>
  );
}

function TrianguloScreen() {
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleArea = () => {
    const area = (parseFloat(base) * parseFloat(height)) / 2;
    setResult(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área de Triângulo em React Native</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBase(text)}
        keyboardType="numeric"
        value={base}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setHeight(text)}
        keyboardType="numeric"
        value={height}
      />
      <Button title="Calcular Área" onPress={handleArea} />
      {result !== null && <Text style={styles.result}>Área: {result}</Text>}
    </View>
  );
}

const stylesArea = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

 function IdadeScreen() {
  const [idade, setIdade] = useState('');
  const [greeting, setGreeting] = useState('');

  const verificarFase = (idade) => {
    let novaFase;

    idade = parseInt(idade); // Converte a idade para um número inteiro

    if (idade <= 11) {
      novaFase = 'Criança';
    } else if (idade <= 20) {
      novaFase = 'Adolescente';
    } else if (idade <= 60) {
      novaFase = 'Adulto';
    } else {
      novaFase = 'Idoso';
    }

    setGreeting(`Você está na fase da vida: ${novaFase}`);
  };

  const handleGreet = () => {
    verificarFase(idade);
  };

  return (
    <View style={stylesIdade.container}>
      <Text style={StyleSheetList.title}>Exemplo de Variável em React Native</Text>
      <TextInput
        style={stylesIdade.input}
        placeholder="Digite sua idade"
        onChangeText={(text) => setIdade(text)}
        value={idade}
        keyboardType="numeric" // Garante que o teclado seja numérico
      />
      <Button title="APERTE" onPress={handleGreet} />
      <Text style={stylesIdade.greeting}>{greeting}</Text>
    </View>
  );
}

const stylesIdade = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  greeting: {
    marginTop: 20,
    fontSize: 18,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quadrado" component={QuadradoScreen} />
        <Stack.Screen name="Triangulo" component={TrianguloScreen} />
        <Stack.Screen name="Idade" component={IdadeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
