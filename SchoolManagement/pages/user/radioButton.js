import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1',
    label: 'se rappeler de moi',
    value: 'option1',
    color: 'orange',
    selected: true,
  },
  {
    id: '2',
    label: 'oublier le mot de passe',
    value: 'option2',
    color: 'orange',
    selected: false,
  },
];

const ButtonRadio = () => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  return (
    <View >
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  );
};

export default ButtonRadio;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 350,
    height: 200,
    
  },
});