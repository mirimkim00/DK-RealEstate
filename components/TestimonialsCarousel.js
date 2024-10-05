import React from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import styles from "../styles/Home.module.css";
import starRating from "../src/images/star.png";
import Image from "next/image";

export default function TestimonialsCarousel() {
    const testimonials = [
        {
            id: 1,
            name: "Customer Name1",
            feedback:
                "“Aliquam etiam lacus at est turpis. Sollicitudin ultricies feugiat eu eu bibendum. Vel dui sed lorem malesuada amet accumsan.”",
            rating: 5,
        },
        {
            id: 2,
            name: "Customer Name2",
            feedback:
                "“Aliquam etiam lacus at est turpis. Sollicitudin ultricies feugiat eu eu bibendum. Vel dui sed lorem malesuada amet accumsan.”",
            rating: 4,
        },
        {
            id: 3,
            name: "Customer Name3",
            feedback:
                "“Aliquam etiam lacus at est turpis. Sollicitudin ultricies feugiat eu eu bibendum. Vel dui sed lorem malesuada amet accumsan.”",
            rating: 5,
        },
    ];

    return (
        <section className={styles.testimonialSection}>
            <h3 className="text-center mb-4">Testimonials</h3>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className={styles.testimonialSwiper}
                breakpoints={{
                    1024: {
                        slidesPerView: 2, // 데스크탑에서 2개 보이게
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 1, // 태블릿에서 1개 보이게
                        spaceBetween: 40,
                    },
                    480: {
                        slidesPerView: 1, // 모바일에서 1개 보이게
                        spaceBetween: 20,
                    },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className={styles.slide}>
                        <Card className={styles.testimonialCard}>
                            <Card.Body className="text-center">
                                <Card.Title>{testimonial.name}</Card.Title>
                                <div className={styles.ratingContainer}>
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <Image
                                            key={index}
                                            src={starRating}
                                            alt={`${testimonial.rating} stars`}
                                        />
                                    ))}
                                </div>
                                <Card.Text>{`"${testimonial.feedback}"`}</Card.Text>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}