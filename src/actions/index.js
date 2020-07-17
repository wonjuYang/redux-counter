/* 
    action 객체를 만드는 액션 생성 함수들을 선언합니다. (action creators).
    여기에서 () => ({})은 fuction() { return {}} 와 동일한 의미입니다.

*/

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setCOlor = (color) => ({
    type: types.SET_COLOR,
    color
});

