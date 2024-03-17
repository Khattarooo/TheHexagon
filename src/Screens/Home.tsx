import React, {useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {categories, Category} from '../data';
import {RootStackParamList} from '../Navigation/Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ProfileIcon from '../components/ProfileIcon';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const {width} = Dimensions.get('window');
const cardMargin = 10;
const totalHorizontalPadding = 32;
const cardWidth = (width - totalHorizontalPadding - cardMargin * 3) / 2;

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleCategoryPress = (categoryId: number) => {
    navigation.navigate('CategoriesItemScreen', {id: categoryId.toString()});
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{marginLeft: 20}}>
          <ProfileIcon />
        </View>
      ),
    });
  }, [navigation]);
  const renderCategoryItem = ({item}: {item: Category}) => (
    <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
      <View style={styles.categoryCard}>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/w4.jpg')}
      style={styles.imageBackground}
      resizeMode="cover">
      <View style={styles.screenContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={{paddingBottom: cardMargin}}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  categoryCard: {
    margin: cardMargin,
    width: cardWidth,
    height: cardWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#070707',
    borderWidth: 4,
    backgroundColor: 'rgba(255,255,255,0.9)',
    opacity: 0.9,
    borderRadius: 50,
    padding: 18,
  },
  categoryText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  imageBackground: {
    flex: 1,
  },
});

export default Home;
