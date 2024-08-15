import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  userPhoto: string;
  userName: string;
  postText: string;
  postImage?: string;
}

const Card: React.FC<CardProps> = ({ userPhoto, userName, postText, postImage }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: userPhoto }} style={styles.userPhoto} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.postText}>{postText}</Text>
        {postImage && <Image source={{ uri: postImage }} style={styles.postImage} />}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Curtir</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerText}>Comentar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 8,
  },
  postText: {
    fontSize: 14,
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  footerText: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default Card;
