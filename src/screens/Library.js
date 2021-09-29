import React, {useState} from 'react';
import {
  Header,
  ScreenView,
  SnapCarousel,
  CategorySelectCard,
} from '../components';
import {ScrollView} from 'react-native';
import {Colors, sg} from '../styling';
import {mainCategories, reduxCategories} from '../constants';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  const [currentItemIndex, setCurrentItemIndex] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(1);
  const onSnap = (type) => (index: number) => {
    switch (type) {
      case 'item':
        return setCurrentItemIndex(index);
      case 'redux':
        return setCurrentIndex(index);
      default:
        return;
    }
  };
  const renderItem = (type) => ({item}) => {
    switch (type) {
      case 'item':
        return <CategorySelectCard {...item} onPress={goTo(item.pathway)} />;
      case 'redux':
        return <CategorySelectCard {...item} onPress={goTo(item.pathway)} />;
      default:
        return;
    }
  };

  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header />
      <ScrollView style={sg.flex}>
        <SnapCarousel
          data={mainCategories}
          index={currentItemIndex}
          renderItem={renderItem('item')}
          onSnapToItem={onSnap('item')}
          alignment={'center'}
          layout={'default'}
          itemWidth={200}
          inactiveSlideScale={0.8}
          containerStyle={sg.mT30}
        />
        <SnapCarousel
          data={reduxCategories}
          index={currentIndex}
          renderItem={renderItem('redux')}
          onSnapToItem={onSnap('redux')}
          alignment={'center'}
          layout={'default'}
          itemWidth={200}
          inactiveSlideScale={0.8}
          containerStyle={sg.mT30}
        />
      </ScrollView>
    </ScreenView>
  );
};

export default Library;
