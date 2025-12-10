import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Zoom, Keyboard, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import "../styles/swiper-gallery.css";
import { getImageUrl } from "../utils/images";

interface SwiperGalleryProps {
    images: string[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
    projectTitle: string;
}

const SwiperGallery: React.FC<SwiperGalleryProps> = ({
    images,
    initialIndex,
    isOpen,
    onClose,
    projectTitle,
}) => {
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // Update swiper to initial index when opened
    useEffect(() => {
        if (swiperInstance && isOpen) {
            swiperInstance.slideTo(initialIndex, 0);
        }
    }, [isOpen, initialIndex, swiperInstance]);

    // Handle Escape key to close
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="swiper-gallery-overlay">
            <button className="swiper-gallery-close" onClick={onClose} aria-label="Close">
                ×
            </button>

            <Swiper
                modules={[Navigation, Pagination, Zoom, Keyboard, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, type: "fraction" }}
                zoom={{ maxRatio: 3 }}
                keyboard={{ enabled: true }}
                loop={images.length > 1}
                onSwiper={setSwiperInstance}
                className="mySwiper"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="swiper-zoom-container">
                            <img
                                src={getImageUrl(img)}
                                alt={`${projectTitle} - View ${idx + 1}`}
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperGallery;
