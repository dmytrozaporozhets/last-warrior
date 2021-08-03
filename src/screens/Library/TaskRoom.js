import React from 'react';
import {Header, ScreenView} from '../../components';
import {Colors} from '../../styling';

const TaskRoom = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Task Room" onBack={goBack} />
    </ScreenView>
  );
};

export default TaskRoom;
