import React from 'react'

export default function BlurryImage({ src }) {
  return (
    <>
      <img
        style={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          transform: 'scale(1.15)',
        }}
        src={src}
      />
      <img
        style={{
          height: '100vh',
          width: '100vw',
          objectFit: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          filter: 'blur(3vh)',
          transform: 'scale(1.15)',
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
