import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Home
      <h1>
        <Outlet />
      </h1>
    </div>
  )
}
