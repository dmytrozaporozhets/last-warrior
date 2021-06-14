import React, {useState} from 'react';
import {Header, ProgressBar, ScreenView} from '../../components';
import {Colors, sg} from '../../styling';
import {View} from 'react-native';

const AddProgress = ({navigation}) => {
  const goBack = () => navigation.goBack();
  const [count, setCount] = useState(1);
  const switchPathways = (pathways) => () => {
    switch (pathways) {
      case 'next': {
        if (count === 4) {
          return null;
        } else {
          return setCount(count + 1);
        }
      }
      case 'back': {
        if (count === 1) {
          return null;
        } else {
          return setCount(count - 1);
        }
      }
      default:
        return;
    }
  };
  return (
    <ScreenView statusBarColor={Colors.black}>
      <Header title="Progress Bar" onBack={goBack} />
      <View style={[sg.mH20, sg.mT20]}>
        <ProgressBar
          title="Completed"
          step={count}
          numberOfSteps={4}
          onBack={switchPathways('back')}
          onSkip={switchPathways('next')}
        />
      </View>
    </ScreenView>
  );
};

export default AddProgress;
