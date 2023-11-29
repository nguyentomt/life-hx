'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Login from './components/Login'

export default function Home() {
  const [user, setUser] = useState({});


  return (
    <main>
      <Login setUser={setUser}/>
    </main>
  )
}
