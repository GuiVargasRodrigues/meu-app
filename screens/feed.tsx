import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '../components/card';

const Feed = () => {
  return (
    <ScrollView style={styles.container}>
      <Card 
        userPhoto="https://link-da-foto.com/user.jpg" 
        userName="Nome do Usuário" 
        postText="Este é o texto da postagem" 
        postImage="https://link-da-imagem.com/post.jpg"
      />
      {/* Adicione mais Cards conforme necessário */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Feed;
