import { testimonialsData } from '@/src/utils/data'
import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
    const settings = {
        dots: true,
        infiinte: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infiinte: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

  return (
    <div className='slider__comment'>
        <Slider {...settings}>
            {
                testimonialsData.map(({comment, name, profession}, i) => (
                   <div key={i} className="comment">
                    <div className="c__content">
                        <img src="/apos.svg" alt="apos__slider" width={40} height={30}/>
                        <p>
                            {comment}
                        </p>
                    </div>

                    <div className="c__info">
                        <div className="c__avatar">
                            {name[0]}
                        </div>
                        <div className="c__person">
                            <h4 className="c__name">
                                {name}
                            </h4>
                            <p className="c__profession">{profession}</p>
                        </div>
                    </div>
                   </div> 
                ))
            }
        </Slider>
    </div>
  )
}

export default SlickSlider