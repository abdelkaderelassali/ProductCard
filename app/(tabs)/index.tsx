import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screenContainer}>
      
      {/* 1. The Card Container */}
      {/* Requirement: White background, rounded corners, shadow [cite: 431] */}
      <View style={styles.card}>
        
        {/* 2. Image */}
        {/* Requirement: Image at the top [cite: 432] */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} 
          style={styles.image} 
        />

        {/* 3. Title & Price */}
        {/* Requirement: Row direction, space-between [cite: 433] */}
        <View style={styles.row}>
          <Text style={styles.title}>Baskets Vintage</Text>
          <Text style={styles.price}>89,99 €</Text>
        </View>

        {/* 4. Description */}
        {/* Requirement: Short description [cite: 435] */}
        <Text style={styles.description}>
          Description, Vintage dirvest com pronge reiveus
        </Text>

        {/* 5. Button */}
        {/* Requirement: Centered at bottom [cite: 436] */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acheter maintenant</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center', // Centers the card vertically
    alignItems: 'center',     // Centers the card horizontally
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    width: '100%',
    maxWidth: 350,
    // Shadow logic (No 'box-shadow' like CSS, use these instead)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Required for shadow on Android
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',       // Switches axis to Horizontal [cite: 212]
    justifyContent: 'space-between', // Pushes items to edges [cite: 230]
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
    alignItems: 'center', // Standard align (no position: absolute needed) [cite: 437]
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});