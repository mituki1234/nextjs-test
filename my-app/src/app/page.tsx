"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "./css/style.css";

export default function Home() {
    const slidesRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<NodeListOf<HTMLSpanElement> | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeDifference, setTimeDifference] = useState(Date.now());

    const showSlide = (index: number) => {
        if (slidesRef.current) {
            slidesRef.current.style.transform = `translateX(${-index * 33.33333}%)`;
        }

        if (dotsRef.current) {
            dotsRef.current.forEach(dot => dot.classList.remove("active"));
            dotsRef.current[index].classList.add("active");
        }
    };

    useEffect(() => {
        dotsRef.current = document.querySelectorAll(".dot");

        dotsRef.current.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                setTimeDifference(Date.now());
                setCurrentIndex(index);
            });
        });

        return () => {
            dotsRef.current?.forEach((dot) => {
                dot.removeEventListener("click", () => {});
            });
        };
    }, []);

    useEffect(() => {
        showSlide(currentIndex);
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (Date.now() - timeDifference >= 5000) {
                setTimeDifference(Date.now());
                setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [timeDifference]);

    return (
        <div className="container">
            <div className="topbar">
                <div className="logo">
                    <h2>美術</h2>
                </div>
                <div className="menu">
                    <a href="./"><span>MEMBER</span></a>
                    <a href="./"><span>NEWS</span></a>
                    <a href="./"><span>ABOUT</span></a>
                    <a href="./login"><span>ADMIN</span></a>
                </div>
            </div>
            <div className="main-img">
                <div className="slider">
                    <div className="slides" ref={slidesRef}>
                        <div className="slide red"></div>
                        <div className="slide blue"></div>
                        <div className="slide green"></div>
                    </div>
                    <div className="dots">
                        <span className="dot" data-index="0"></span>
                        <span className="dot" data-index="1"></span>
                        <span className="dot" data-index="2"></span>
                    </div>
                </div>
            </div>
            <div className="news">
                <div className="news-one">
                    <div className="news-top">
                        <span>time</span>
                    </div>
                    <div className="news-title">
                        <p>newstitled</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
