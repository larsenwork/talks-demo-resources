import React from 'react'

export default function BlurryImage({ src }) {
  return (
    <>
      <div
        style={{
          backgroundColor: '#333',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      />
      <img
        style={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          filter: 'blur(40px)',
        }}
        src={src}
      />
      <img
        style={{
          maxHeight: '80vh',
          width: '100%',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 1,
        }}
        src={src}
      />
    </>
  )
}
