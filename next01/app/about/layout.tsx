import React from 'react'

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
        <nav>about nav</nav>
        <main>
          {children}
        </main>
     </>
  )
}
