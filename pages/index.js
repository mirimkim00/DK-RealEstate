import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import img1 from '../src/images/1.jpg';
import style from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <section>
        <div>
          {/* <Image
            alt=''
            src={img1}
          /> */}

          {/* <Carousel>
            <Carousel.Item>
              <Image
                alt=''
                src={img1}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

              <Image
                alt=''
                src={img1}
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>

              <Image
                alt=''
                src={img1}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}

          <div className={style.description}>
            <h3>
              Pretium vulputate sapien nec sagittis aliquam
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus. Eget est lorem ipsum dolor sit. Aliquam eleifend mi in nulla. Volutpat est velit egestas dui id. Commodo quis imperdiet massa tincidunt nunc. Consequat semper viverra nam libero justo laoreet sit amet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
