import React from 'react'

// TYPES
import { GoalProps as Props } from './types'

// STYLES
import './Goal.scss'

export const Goal = ({ icon, name }: Props): JSX.Element => {
  return (
    <div className="Goal">
      <span className="Goal__icon">{icon}</span>
      <div>
        <h3 className="Goal__name">{name}</h3>
        <p className="Goal__description">Saving goal</p>
      </div>
    </div>
  )
}
