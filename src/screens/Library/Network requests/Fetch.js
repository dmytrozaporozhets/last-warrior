import React from 'react';
import {
  Button,
  Header,
  PhotosCard,
  ScreenView,
  Spinner,
} from '../../../components';
import {ScrollView, View} from 'react-native';
import {Colors, sg} from '../../../styling';
import {useDispatch, useSelector} from 'react-redux';
import {onCreateRequest, onReset} from '../../../redax/network';

const Fetch = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const dispatch = useDispatch();
  const request = useSelector((state) => state.network.fetchRequest);
  const loading = useSelector((state) => state.network.isLoading);
  const onRequest = () => dispatch(onCreateRequest());
  const resetFetchPost = () => dispatch(onReset());

  return (
    <ScreenView
      childrenStyle={{backgroundColor: Colors.black}}
      statusBarColor={Colors.black}>
      <Header onBack={goBack} />
      <ScrollView>
        <View style={[sg.flex, sg.mH20]}>
          <View style={[sg.row, sg.mT30, sg.mB10]}>
            <Button
              title="Send request"
              btnType="primary"
              size="medium"
              style={[sg.mR10]}
              onPress={onRequest}
            />
            {request.length !== 0 && (
              <Button
                title="Reset"
                btnType="red"
                size="small"
                style={{}}
                onPress={resetFetchPost}
              />
            )}
          </View>
          <View>
            {request.map((it) => (
              <View key={it.id}>
                <PhotosCard {...it} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {loading && <Spinner visible />}
    </ScreenView>
  );
};

export default Fetch;
