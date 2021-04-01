import React from 'react'
import { mount, ReactWrapper } from 'enzyme'

// ASSETS
import { House } from '~/assets/icons'

import { Goal } from './Goal'
import { GoalProps } from './types'

const setupComponent = (props: GoalProps): ReactWrapper => {
  return mount(<Goal {...props} />)
}

describe('Goal', (): void => {
  const component = setupComponent({
    icon: <House />,
    name: "Buy a house"
   })

  afterAll(() => component.unmount())

  it('should render the component', (): void => {
    expect(component.find('.Goal').exists()).toBeTruthy()
  })

  it('should display the icon', (): void => {
    expect(component.find('svg').exists()).toBeTruthy()
  })

  it('should display the goal name', (): void => {
    expect(component.find('.Goal__name').text()).toBe('Buy a house')
  })
})
