import React, {createRef} from 'react';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import { render, act, fireEvent } from 'test-utils';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('SeasonModal', () => {
  test('Show all season options', () => {
    const modalizeRef = createRef<Modalize>();
    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={season => console.log(season)}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i).length).toBe(3);
  });

  test('Call onSelectSeason function with correct season when season option was pressed', () => {
    const modalizeRef = createRef<Modalize>();

    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);

    fireEvent.press(season2Element);

    expect(onSelectSeasonMock).toHaveBeenCalledWith('2');
  });
});
