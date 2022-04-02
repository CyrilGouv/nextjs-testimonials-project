import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/TestimonialsList.module.css'


const TestimonialsList = ({ testimonials }) => {

    

    return (
        <ul className={ styles.testimonials }>
            {
                testimonials.map(testimonial => {

                    const { id, name, slug, image, text } = testimonial

                    return (
                        <li key={ id } className={ styles.testimonials__item }>
                            <Link href={ `/${slug}` }>
                                <a>
                                    <p className={ styles.testimonials__item__text }>{ text }</p>
                                    <div className={ styles.testimonials__item__footer }>
                                        <Image src={ image } width={ 45 } height={ 45 } layout="fixed" />
                                        <span>{ name }</span>
                                    </div>
                                </a>
                            </Link>
                        </li>
                    )
                })
            }
            
        </ul>
    )
}

export default TestimonialsList