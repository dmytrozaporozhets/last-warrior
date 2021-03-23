import React from 'react';
import {Button, PhotosCard, ScreenView, Spinner} from '../../../components';
import {ScrollView, View} from 'react-native';
import {sg} from '../../../styling';
import {useDispatch, useSelector} from 'react-redux';
import {onCreateRequest} from '../../../redax/network';
import {fetchGetRequest} from '../../../services/NetworkRequest';
import {requestPhotosURL} from '../../../../assets/link/request';

const Fetch = () => {
  const dispatch = useDispatch;
  const request = useSelector((state) => state.network.fetchRequest);
  const loading = useSelector((state) => state.network.isLoading);
  const onRequest = () => dispatch(onCreateRequest());

  // fetchGetRequest(requestPhotosURL)
  //   .then((response) => console.log(response))
  //   .catch((e) => console.log(e));

  return (
    <ScreenView>
      <ScrollView>
        <View style={[sg.flex, sg.mH20]}>
          <Button
            title="Send request"
            btnType="primary"
            size="medium"
            style={[sg.aSCenter, sg.mT30, sg.mB10]}
            onPress={onRequest}
          />
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
