



import React from 'react'

export default async function getAllUser() {
  
const res = await fetch('https://jsonplaceholder.typicode.com/users')
if(!res.ok) throw new Error('Faild to fatch data')
  return res.json()



  
}
