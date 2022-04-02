import TestimonialsList from '../components/TestimonialsList'

import styles from '../styles/Home.module.css'


export default function Home({ testimonials }) {

  return (
    <div className={styles.homepage}>
      <TestimonialsList testimonials={ testimonials } />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/testimonials')
  const testimonials = await res.json()

  return {
    props: {
      testimonials
    }
  }
}
