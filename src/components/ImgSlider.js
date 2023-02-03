import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src='/images/slider-mandalorian.jfif' alt='' />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-avatar.jfif' alt='' />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-prey.jfif' alt='' />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-bad-batch.jfif' alt='' />
                </a>
            </Wrap>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    width: 100%;

    & > button {
        opacity: 0;
        height: 100%;
        width: 15vw;
        z-index: 1;
        
        &:hover {
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
        width: 200px;
        opacity: 0;
    }

    .slick-next {
        width: 200px;
        opacity: 0;
    } 
`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 6px;
        box-shadow: 
            rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor: pointer;
        display: block;
        position: relative;
        padding: 4px;

        img {
            width: 100%;
            height: 100%;
        }

        &:hover {
            padding: 0;
            transform: scale(1.01);
            z-index: 5;
            transition-duration: 500ms;
        }
    }
`

export default ImgSlider