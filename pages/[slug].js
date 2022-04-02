import Image from 'next/image'

import styles from '../styles/SingleTestimonial.module.css'


const SingleTestimonial = ({ testimonial }) => {
    
    const { name, text, image } = testimonial

    return (
        <div className={ styles.testimonial }>
            <article className={ styles.testimonial__item }>
                <p className={ styles.testimonials__item__text }>{ text }</p>
                <div className={ styles.testimonials__item__footer }>
                    <Image src={ image } width={ 65 } height={ 65 } layout="fixed" />
                    <span>{ name }</span>
                </div>
            </article>
        </div>
    )
}

export default SingleTestimonial


export const getStaticPaths = async() => {
    const res = await fetch("http://localhost:3000/api/testimonials")
    const testimonials = await res.json()
    
    const paths = testimonials.map(testimonial => {
  
        const slug = testimonial.slug
            
        return (
            {
                params: {
                    slug: slug
                }
            }
        )
    })
  
    return {
        paths,
        fallback: false,
    }
}
  
  export const getStaticProps = async ({ params }) => {
  
    const res = await fetch("http://localhost:3000/api/testimonials")
    const data = await res.json()

    const testimonial = data.filter(item => item.slug.includes(params.slug))

    return {
        props: {
             testimonial: testimonial[0],
        },
      revalidate: 1
    }
}