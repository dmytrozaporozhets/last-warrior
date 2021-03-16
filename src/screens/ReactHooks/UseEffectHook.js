import React, {useState, useEffect} from 'react';
import {Button, ScreenView, Text} from '../../components';
import {View, ScrollView} from 'react-native';
import {resourceJSON} from '../../constants';
import {sg} from '../../styling';
import {ReactHooksStyle} from '../../styling/screens/ReactHooks';

const UseEffectHook = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);

  const switchResource = (resource) => () => {
    switch (resource) {
      case 'users':
        return setType('users');
      case 'todos':
        return setType('todos');
      case 'posts':
        return setType('posts');
      default:
        return;
    }
  };

  return (
    <ScreenView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={ReactHooksStyle.container}>
          <View style={sg.mT20}>
            <Text style={ReactHooksStyle.title}>Resource: {type}</Text>
            <View style={[sg.centeredRow, sg.mT10, sg.jCCenter]}>
              {resourceJSON.map((it, index) => (
                <Button
                  title={it.title}
                  size={it.size}
                  btnType={it.btnType}
                  onPress={switchResource(it.resource)}
                  style={index !== 0 && sg.mL10}
                  key={it.id}
                />
              ))}
            </View>
            <Text style={sg.mT20}>{JSON.stringify(data, null, 2)}</Text>
          </View>
        </View>
      </ScrollView>
    </ScreenView>
  );
};

export default UseEffectHook;
