import React, {useState} from 'react';
import {
  Header,
  ScreenView,
  SnapCarousel,
  CategorySelectCard,
} from '../components';
import {ScrollView, View} from 'react-native';
import {Colors, sg} from '../styling';
import {mainCategories} from '../constants';

const Library = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onSnap = (index: number) => setCurrentIndex(index);
  const renderItem = ({item}) => (
    <CategorySelectCard
      {...item}
      selected={currentIndex + 1 === item.id}
      onPress={goTo(item.pathway)}
    />
  );

  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header />
      <ScrollView>
        <View style={[sg.flex, sg.mV15]}>
          <SnapCarousel
            data={mainCategories}
            index={currentIndex}
            renderItem={renderItem}
            onSnapToItem={onSnap}
            alignment={'center'}
            layout={'default'}
            itemWidth={265}
            inactiveSlideScale={0.8}
          />
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default Library;
