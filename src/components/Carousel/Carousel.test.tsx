import React from 'react';
import { act, render, renderHook } from '@testing-library/react';
import Carousel from './Carousel';

test('Carousel 测试',()=>{
  const { result } = renderHook(() => Carousel({speed:3000}))
})
