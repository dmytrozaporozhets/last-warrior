import React from 'react';
import {View} from 'react-native';
import {Colors, sg} from '../styling';
import {BackButton, SkipButton} from '../elements/HeaderButtons';
import {Text} from './index';
import {ProgressBarStyle} from '../styling/components/ProgressBar';

const ProgressBar = ({
  step = 0,
  numberOfSteps = 4,
  onBack,
  onSkip,
  title,
  style,
}) => {
  const array = [];
  array.length = numberOfSteps;
  for (let i = 0; i < numberOfSteps; i++) {
    array.push(
      <View
        key={i}
        style={[
          ProgressBarStyle.line,
          {
            backgroundColor: step > i ? Colors.pink : 'rgba(0,0,0,0.2)',
            marginLeft: i === 0 ? 10 : 0,
            width: step - 1 === i ? 100 : 40,
          },
        ]}
      />,
    );
  }
  return (
    <View style={[ProgressBarStyle.container, style]}>
      {title && (
        <View style={[sg.centeredRow, sg.jCCenter]}>
          <Text style={[ProgressBarStyle.text, sg.mR5]}>{title}:</Text>
          <Text style={ProgressBarStyle.text}>
            {`${step}/${numberOfSteps} (${(step / numberOfSteps) * 100}%)`}
          </Text>
        </View>
      )}
      <View style={ProgressBarStyle.containerBar}>
        <BackButton
          colorIcon={step === 1 ? Colors.gray6 : Colors.black}
          size={26}
          onPress={onBack}
          disabled={step === 1}
        />
        <View style={sg.row}>{array}</View>
        <SkipButton
          colorIcon={numberOfSteps === step ? Colors.gray6 : Colors.black}
          size={26}
          onPress={onSkip}
          style={sg.mL10}
          disabled={numberOfSteps === step}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
