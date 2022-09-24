import React from 'react'

export default function () {
  return (
    <div className='header'>
      <img className='header-photo' src={require('../imgs/profile-photo.png')} alt='Ollie Rowles' /> <p className='header-text unselectable'>Ollie Rowles</p>
    </div>
  )
}
