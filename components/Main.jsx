import React from 'react'
import styles from '../styles/main.module.css'

const Main = () => {
  return (
    <section className={styles.main}>
      <div>
        <h1 className='text-4xl font-black'>Build websites even faster with components on top of Tailwind CSS</h1>
        <p className='text-xl px-40 py-6'>Start developing with an open-source library of over 600+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
        <button><a href="https://flowbite.com/docs/getting-started/quickstart/" className='px-10 py-3 bg-blue-700 rounded-xl'>Get started</a></button>
      </div>
    </section>
  )
}

export default Main