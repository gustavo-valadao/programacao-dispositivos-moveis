import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

function ProfileScreen() {


    const user = {
            name: "João da Silva",
            email: "joao.silva@email.com.br",
            phone: "(61) 99999-9999",
            avatarUrl: "https://robohash.org/joaosilva.png"
        };

    return (
        <View style={styles.container}>

            <Card style={styles.card}>


                <View style={styles.avatarContainer}>
                    <Avatar.Image 
                        size={100} 
                        source={{ uri: user.avatarUrl }} 
                    />
                </View>


                <Card.Content style={styles.cardContent}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <Text style={styles.phone}>{user.phone}</Text>
                </Card.Content>


                <Card.Actions>
                    <Button mode="contained" style={styles.editButton}>
                        Editar Perfil
                    </Button>
                </Card.Actions>

            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  card: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    elevation: 4,
  },

  avatarContainer: {
    marginBottom: 16,
    alignItems:'center'
  },

  cardContent: {
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  email: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },

  phone: {
    fontSize: 14,
    color: '#777',
    marginBottom: 16,
  },
  editButton: {
    width: '100%',
  },
  
});

export default ProfileScreen;