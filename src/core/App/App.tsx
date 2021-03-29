import React from 'react'

// COMPONENTS
import { SimulationCard } from '~/modules/simulation/components'
import { Navbar } from '~/shared/components'

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
