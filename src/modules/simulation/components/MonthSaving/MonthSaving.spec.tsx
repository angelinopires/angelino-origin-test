import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

import { MonthSaving } from './MonthSaving'
import { MonthSavingProps } from './types'

const setupComponent = (props: MonthSavingProps): ReactWrapper => {
  return mount(<MonthSaving {...props} />)
}

describe('MonthSaving tests case', (): void => {
  const component = setupComponent({
    amountOfMonths: 10,
    goalDate: 'Wed Jun 30 2021 22:09:57 GMT-0300 (Brasilia Standard Time)',
    moneyPerMonth: '$100,000',
    totalSaved: '1,000,000',
  })

  afterAll(() => component.unmount())
  it('should render the component', (): void => {
    expect(component.find('.MonthSaving').exists()).toBeTruthy()
  })

  it('should display the provided money per month', (): void => {
    expect(component.find('.MonthSaving__money').text()).toBe('$100,000')
  })

  it('should display the amount of month deposits', (): void => {
    const amountOfMonths = component.find('.MonthSaving__caption strong').at(0)

    expect(amountOfMonths.text()).toBe('10 monthly deposits')
  })

  it('should display the total of money saved', (): void => {
    const totalMoney = component.find('.MonthSaving__caption strong').at(1)

    expect(totalMoney.text()).toBe('$1,000,000')
  })

  it('should display the goal date', (): void => {
    const goalDate = component.find('.MonthSaving__caption strong').at(2)

    expect(goalDate.text()).toBe('Wed Jun 30 2021 22:09:57 GMT-0300 (Brasilia Standard Time)')
  })
})
