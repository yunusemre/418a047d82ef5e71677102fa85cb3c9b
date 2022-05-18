import { useState } from 'react'
import { IProduct } from '../../models'
import Detail from '../Detail'
import './List.scss'

const ProductList = (props: IProduct) => {
  const [showModal, setShowModal] = useState(false)

  const toggleDetails = () => {
    !showModal ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto')
    setShowModal(!showModal)
  }

  return (
    <>
      <li className='product-item c-pointer' onClick={toggleDetails}>
        <img className='product-item__image' src={props.image.src} alt={props.title} />
        <section className='product-item__content'>
          <p className='product-item__content--title'>
            <strong>{props.title}</strong>
          </p>
          <span className='product-item__content--price'>${props.variants[0]?.price}</span>
        </section>
      </li>
      {showModal && <Detail {...props} closeModal={toggleDetails} />}
    </>
  )
}

export default ProductList
