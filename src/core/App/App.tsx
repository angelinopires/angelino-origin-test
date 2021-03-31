import React from 'react'

// COMPONENTS
import { Navbar } from '~/shared/components'
import { SimulationCard } from '~/modules/simulation/components'

// STYLES
import './App.scss'

export const App = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <SimulationCard />
      </div>
    </>
  )
}
