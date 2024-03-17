import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {categories} from '../data';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../Navigation/Navigation';

type CategoriesItemScreenRouteProp = RouteProp<
  RootStackParamList,
  'CategoriesItemScreen'
>;

const CategoriesItemScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<CategoriesItemScreenRouteProp>();
  const categoryId = parseInt(route.params.id, 10);
  const category = categories.find(cat => cat.id === categoryId);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../assets/w3.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{category?.name || 'Category'}</Text>
        </View>
        <FlatList
          data={category?.items}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => `item-${index}`}
        />
        <View style={styles.buttonContainer}>
          <Button title="Go Back" onPress={handleGoBack} color="red" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 50,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  item: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  nameContainer: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  itemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
});

export default CategoriesItemScreen;
