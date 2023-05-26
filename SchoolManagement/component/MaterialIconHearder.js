import React from "react";

import {
    HeaderButton,
  } from 'react-navigation-header-buttons';
  import { MaterialIcons } from '@expo/vector-icons'; 


const MaterialIconHearder = (props) => {
    return <HeaderButton 
        IconComponent={MaterialIcons}
        iconSize={23}
        {...props}
        color='#000'
    />
}

export default MaterialIconHearder;