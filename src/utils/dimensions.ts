
import React, { Component } from 'react';
import {Dimensions, PixelRatio } from 'react-native';

export const widthPercent = (widthPercent: any) => {
    const width = Dimensions.get('window').width
    return PixelRatio.roundToNearestPixel(width * parseFloat(widthPercent) / 100)
}

export const heightPercent = (heightPercent: any) => {
    const height = Dimensions.get('window').height
    return PixelRatio.roundToNearestPixel(height * parseFloat(heightPercent) / 100)
}