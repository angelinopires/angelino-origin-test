import React from 'react'
import moment from 'moment'
import { mount, ReactWrapper } from 'enzyme'

import { MonthPicker } from './MonthPicker'
import { MonthPickerProps } from './types'

const defaultProps: MonthPickerProps = {
  onChange: jest.fn(),
  selectedDate: moment('2021-04-01T01:31:12.751Z'),
  startDate: moment('2021-04-01T01:31:12.751Z'),
}

const setupComponent = (props = defaultProps): ReactWrapper => {
  return mount(<MonthPicker {...props} />)
}

describe('MonthPicker', (): void => {
  const component = setupComponent()

  afterAll(() => component.unmount())

  it('should render the component', (): void => {
    expect(component.find('.MonthPicker').exists()).toBeTruthy()
  })

  it('should display the full name of month', (): void => {
    const month = component.find('.MonthPicker__date p').at(0)
    expect(month.text()).toEqual('March')
  })

  it('should display the full year', (): void => {
    const year = component.find('.MonthPicker__date p').at(1)
    expect(year.text()).toEqual('2021')
  })

  describe("When left arrow it's clicked", (): void => {
    describe('And the selectedDate is same or before the startDate', (): void => {
      it('should not decrease one month', (): void => {
        const leftArrow = component.find('.arrow').at(0)

        leftArrow.simulate('click')
        expect(component.prop('onChange')).not.toHaveBeenCalledTimes(1)
        expect(component.prop('selectedDate')).toBe(defaultProps.selectedDate)
      })
    })

    it('should decrease one month', (): void => {
      const props = {
        ...defaultProps,
        selectedDate: moment('2021-06-01T01:31:12.751Z'),
      }
      const component = setupComponent({
        ...props,
      })
      const leftArrow = component.find('.arrow').at(0)

      leftArrow.simulate('click')
      expect(component.prop('onChange')).toHaveBeenCalledTimes(1)
      // const expectedResult = moment('2021-05-01T01:31:12.751Z')
      // expect(component.prop('selectedDate')).toBe(expectedResult)
    })
  })
})
