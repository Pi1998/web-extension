"use client";
import React from 'react';
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const RawCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchPexelsImages() {
            try {
                const response = await fetch('/api/pexels-images');
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error! status: ${response.status} - ${errorData?.error || 'Unknown error'}`);
                }
                const data = await response.json();
                // console.log(data);
                setImages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPexelsImages();
    }, []);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [images]);

    if (loading) return <p>Loading images...</p>;
    if (error) return <p>Error loading images: {error}</p>;

    return (
        <div className="absolute inset-0 -z-10">
            <Carousel>
                <CarouselContent>
                    {
                        images.map((image, index) => (
                            <CarouselItem
                                key={image.id}
                                className={index === activeIndex ? "block" : "hidden"}
                            >
                                <img
                                    src={image.src.large2x || image.src.large || image.src.medium || image.src.original}
                                    alt={image.alt}
                                    className="w-full h-screen object-cover"
                                />
                            </CarouselItem>
                        ))}
                </CarouselContent>
                {images.length > 1 && (
                    <>
                        <CarouselPrevious
                            onClick={() =>
                                setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
                            }
                            className="z-20"
                        />
                        <CarouselNext
                            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)}
                            className="z-20"
                        />
                    </>
                )}
            </Carousel>
        </div>
    );
};

export default RawCarousel;