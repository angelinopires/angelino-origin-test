import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import { CurrencyInput } from './CurrencyInput'
import { CurrencyInputProps } from './types'

const setupComponent = (props: CurrencyInputProps): ReactWrapper => {
  return mount(<CurrencyInput {...props} />)
}

describe('CurrencyInput', (): void => {
  const component = setupComponent({ value: 1000000 })

  afterAll(() => component.unmount())

  describe('When the value property is provided', (): void => {
    it('should render the component', (): void => {
      expect(component.find('.Input').exists()).toBeTruthy()
    })

    it('should render value formatted as money', (): void => {
      expect(component.find('input').prop('value')).toEqual('1,000,000')
    })
  })

  describe('When the leftIcon property is provided', (): void => {
    it('should render the left icon', (): void => {
      const componentWithIcon = setupComponent({ leftIcon: <div></div>, value: 100 })
      expect(componentWithIcon.find('.Input--withLeftIcon').exists()).toBeTruthy()
    })
  })

  describe('When any character is tipped', (): void => {
    it('should call the onChange method', (): void => {
      const component = setupComponent({ onChange: jest.fn(), value: 100 })
      const input = component.find('input')

      input.simulate('change', 5000)
      expect(component.prop('onChange')).toHaveBeenCalledTimes(1)
    })
  })
})
