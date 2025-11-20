import React from 'react';
import { Alert, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// 1. The Data Shape
type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  desc: string;
};

// 2. The Data List
const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Baskets Vintage',
    price: '89,99 €',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Classique et intemporel.',
  },
  {
    id: '2',
    title: 'Montre Luxe',
    price: '120,50 €',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Élégance à votre poignet.',
  },
  {
    id: '3',
    title: 'Sac à Dos',
    price: '45,00 €',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Pour toutes vos aventures.',
  },
  {
    id: '4',
    title: 'Lunettes Soleil',
    price: '59,90 €',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    desc: 'Protection et style assurés.',
  },
];

export default function HomeScreen() {
  
  // 3. The Interaction Logic
  const handleBuyPress = (productName: string) => {
    Alert.alert("Succès", `Vous avez ajouté ${productName} au panier !`);
  };

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      
      <View style={styles.row}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      
      <Text style={styles.description}>{item.desc}</Text>
      
      {/* Added onPress here to satisfy the 'Interactions' requirement */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => handleBuyPress(item.title)} 
      >
        <Text style={styles.buttonText}>Acheter maintenant</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 10, 
  },
  listContent: {
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});