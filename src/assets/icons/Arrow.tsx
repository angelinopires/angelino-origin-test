import React from 'react'

// TYPES
import { IconSvgProps } from '~/shared/types'

export const Arrow = (props: IconSvgProps): JSX.Element => {
  return (
    <svg width={10} height={19} viewBox="0 0 10 19" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9.686 16.914a.9.9 0 11-1.272 1.272l-8.1-8.1a.9.9 0 010-1.272l8.1-8.1a.9.9 0 111.272 1.272L2.223 9.45l7.463 7.464z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}
