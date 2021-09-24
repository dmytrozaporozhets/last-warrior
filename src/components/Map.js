import React, {useEffect, forwardRef} from 'react';
import {View, TouchableOpacity} from 'react-native';
import MapboxGL, {Logger} from '@react-native-mapbox-gl/maps';
import PropTypes from 'prop-types';
import {MapStyle} from '../styling/components/Map';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styling';
import {isIos} from '../utils';
import {SvgXml} from 'react-native-svg';
import {iconSet} from '../../assets/icons/iconSet';

const Map = forwardRef(
  (
    {
      dataPoints,
      token,
      onMapPress,
      onUserMarkerPress,
      onUpdateUserLocation,
      visibleUserLocation,
      containerStyle,
      followUserLocation,
      scrollEnabled,
      onResponderCapture,
      centerLocation,
      onSelectedLocation,
      zoomLevel,
      onUpdateZoomLevel,
      onDecreaseZoomLevel,
      onIncreaseZoomLevel,
      selectedMarkerColor,
    },
    ref,
  ) => {
    useEffect(() => {
      MapboxGL.setAccessToken(token);
    }, []);

    Logger.setLogCallback((log) => {
      const {message} = log;
      if (
        message.match('Request failed due to a permanent error: Canceled') ||
        message.match('Request failed due to a permanent error: Socket Closed')
      ) {
        return true;
      }
      return false;
    });

    const renderMarker = () => {
      return dataPoints.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            onUpdateZoomLevel(10);
            onSelectedLocation(item);
          }}>
          <MapboxGL.MarkerView
            coordinate={[Number(item.lng), Number(item.lat)]}
            id={item.id.toString()}
            anchor={{x: 0.5, y: 1.1}}>
            <SvgXml
              xml={
                selectedMarkerColor === item.id
                  ? iconSet.greenMarker
                  : iconSet.redMarker
              }
              width={30}
              height={30}
            />
          </MapboxGL.MarkerView>
        </TouchableOpacity>
      ));
    };

    const renderZoomLevel = () => {
      return (
        <>
          <TouchableOpacity
            style={MapStyle.btn}
            activeOpacity={1}
            onPress={onIncreaseZoomLevel}>
            <Icon name="plus" size={10} color={Colors.link} />
          </TouchableOpacity>
          <TouchableOpacity
            style={MapStyle.btn}
            activeOpacity={1}
            onPress={onDecreaseZoomLevel}>
            <Icon name="minus" size={10} color={Colors.link} />
          </TouchableOpacity>
        </>
      );
    };

    return (
      <View style={[MapStyle.container, containerStyle]}>
        <MapboxGL.MapView
          style={MapStyle.map}
          onPress={onMapPress}
          scrollEnabled={scrollEnabled}
          ref={ref}
          onStartShouldSetResponderCapture={onResponderCapture}>
          {isIos && renderZoomLevel()}
          <MapboxGL.UserLocation
            visible={visibleUserLocation}
            onUpdate={onUpdateUserLocation}
            showsUserHeadingIndicator={true}
            onPress={onUserMarkerPress}
            renderMode="normal"
          />
          <MapboxGL.Camera
            zoomLevel={zoomLevel}
            centerCoordinate={centerLocation}
            animationMode="flyTo"
            animationDuration={0}
            followUserLocation={followUserLocation}
            followUserMode="normal"
          />
          {renderMarker()}
        </MapboxGL.MapView>
      </View>
    );
  },
);

Map.displayName = 'Map';

Map.defaultProps = {
  zoomLevel: 5,
  centerLocation: [0, 0],
  containerStyle: [],
  scrollEnabled: true,
  visibleUserLocation: false,
  followUserLocation: false,
  onUserMarkerPress: () => null,
  onUpdateUserLocation: () => null,
  onResponderCapture: () => null,
  onMapPress: () => null,
  onSelectedLocation: () => null,
  onUpdateZoomLevel: () => null,
  onDecreaseZoomLevel: () => null,
  onIncreaseZoomLevel: () => null,
};

Map.propTypes = {
  token: PropTypes.string.isRequired,
  dataPoints: PropTypes.array.isRequired,
  centerLocation: PropTypes.array,
  visibleUserLocation: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  selectedMarkerColor: PropTypes.number,
  ZoomLevel: PropTypes.number,
  followZoomLevel: PropTypes.number,
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onUserMarkerPress: PropTypes.func,
  onUpdateUserLocation: PropTypes.func,
  onResponderCapture: PropTypes.func,
  onMapPress: PropTypes.func,
  onSelectedLocation: PropTypes.func,
  onUpdateZoomLevel: PropTypes.func,
  onDecreaseZoomLevel: PropTypes.func,
  onIncreaseZoomLevel: PropTypes.func,
};

export default Map;
