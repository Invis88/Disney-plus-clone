import styled from "styled-components";

const Channels = (props) => {
    return (
        <Container>
            <Wrap>
                <img src="./images/viewers-disney.png" alt="" />
                <video autoPlay playsInline loop muted >
                    <source src='/videos/disney.mp4' type="video/mp4" />
                </video>
            </Wrap>

            <Wrap>
                <img src="./images/viewers-pixar.png" alt="" />
                <video autoPlay loop playsInline muted >
                    <source src="/videos/pixar.mp4" type='video/mp4' />
                </video>
            </Wrap>

            <Wrap>
                <img src="./images/viewers-marvel.png" alt="" />
                <video autoPlay loop playsInline muted >
                    <source src="/videos/marvel.mp4" type='video/mp4' />
                </video>
            </Wrap>

            <Wrap>
                <img src="./images/viewers-starwars.png" alt="" />
                <video autoPlay loop playsInline muted >
                    <source src="/videos/star-wars.mp4" type='video/mp4' />
                </video>
            </Wrap>

            <Wrap>
                <img src="./images/viewers-national.png" alt="" />
                <video autoPlay loop playsInline muted >
                    <source src="/videos/national-geographic.mp4" type='video/mp4' />
                </video>
            </Wrap>

            <Wrap>
                <img src="./images/star.png" alt="" />
                <video autoPlay loop playsInline muted >
                    <source src="/videos/star.mp4" type='video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 80px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr))
    }
`
const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: 
        rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94 ) 0s;
    border: 3px solid rgba(249, 249, 249, 0.2);
    
    img {
        background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        aspect-ratio: auto 320 / 240;
  }

  &:hover {
    box-shadow: 
        rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    img {
        background: none;
    }
    
    video {
        opacity: 1;
    }
  }
`

export default Channels