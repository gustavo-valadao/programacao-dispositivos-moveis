import { View, StyleSheet } from 'react-native';
import { Card, Text} from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={styles.container}>


      <Card style={styles.card}>
        <Card.Title titleStyle={styles.title} title="Bem vindo ao Meu App!"/>
        <Card.Content>

            <Text style={styles.paragraph}>

                Navegue pelo menu lateral para acessar seu perfil.

            </Text>


        </Card.Content>
      </Card>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center"
  },

  card: {
    margin: 16,
    padding: 16,
    backgroundColor: '#e6e6fa', // cor de fundo do card
    borderRadius: 8,
    
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: "center"
    
  },

  paragraph: {
    fontSize: 16,
    color: '#333',
    textAlign: "center"
  },
  
});

export default HomeScreen;