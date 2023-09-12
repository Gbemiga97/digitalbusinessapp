import SlickSlider from './SlickSlider'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <section className="t__wrapper">
        <div className="container">
            <div className="t__container">
              <div className="t__head">
                <h5 className="tag">Testimonials</h5>
                <h2 className="title">Access Capital That Complements Traditional Funding Options</h2>
                <p className="des">What people say about us</p>
                </div>
            </div>

            <SlickSlider />
        </div>
    </section>
  )
}

export default Testimonials