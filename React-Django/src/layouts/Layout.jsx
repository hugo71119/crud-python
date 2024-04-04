import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  )
}
