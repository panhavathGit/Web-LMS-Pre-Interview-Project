import React from 'react'

export const Dashboard = () => {
  return (
    <div className="p-8 grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="bg-white shadow rounded p-4">Profile Overview</div>
        <div className="bg-white shadow rounded p-4">Enrolled Courses</div>
        <div className="bg-white shadow rounded p-4">Progress Tracker</div>
    </div>
  )
}
