import React, { useRef, useEffect } from 'react'
import img1 from '../imagenes/01.jpg'
import img2 from '../imagenes/02.jpg'
import img3 from '../imagenes/03.jpg'
import { ReactComponent as FlechaIz } from '../imagenes/left.svg'
import { ReactComponent as FlechaDr } from '../imagenes/right.svg'
import '../css/slide.css'


const Slide = () => {
    const slideshow = useRef(null);
    const intervaloSlodeShow = useRef(null);
    const siguiente = () => {
        //Comprobar que tenga elementos
        if (slideshow.current != null && slideshow.current.children.length > 0) {
            //Obtener el primer elemento
            const primerElemento = slideshow.current.children[0];

            //Transition
            slideshow.current.style.transition = `4000ms ease-out all`;

            //Mover el slider
            slideshow.current.style.transform = `translateX(-100vw)`;

            const transicion = () => {
                //Reiniciar posicion
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = 'translateX(0)';

                //Mandar el primero al final
                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion);

            }

            //Eventlistener
            slideshow.current.addEventListener('transitionend', transicion);

        }
    }
    const anterior = () => {
        if (slideshow.current.children.length > 0) {
            //Obtenemos el ultimo elemento del slide
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
            //Moverlo a la izquierda
            slideshow.current.style.transicion = 'none';
            slideshow.current.style.transform = `translateX(-100vw)`;

            setTimeout(() => {
                slideshow.current.style.transicion = '400ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 40);
        }
    }
    useEffect(() => {
        intervaloSlodeShow.current = setInterval(() => {
            siguiente();
        }, 4000);

        //Eliminar intervalo
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlodeShow.current);
        });

        //Volver a poner el intervalo
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlodeShow.current = setInterval(() => {
                siguiente();
            }, 4000);
        });
    }, []);
    return (
        <div class="bodySlide">
            <div class="ContenedorPrincipal">
                <div class="ContenedorSlideShow" ref={slideshow}>
                    <div class="Slide">
                        <a href="https://www.google.com/">
                            <img class="IMGSlider" src={img1} alt="" />
                        </a>
                    </div>
                    <div class="Slide">
                        <a href="https://www.google.com/">
                            <img class="IMGSlider" src={img2} alt="" />
                        </a>
                    </div>
                    <div class="Slide">
                        <a href="https://www.google.com/">
                            <img class="IMGSlider" src={img3} alt="" />
                        </a>
                    </div>
                </div>
                <div class="Controles">

                    <button class="Boton-S izquierdo" onClick={anterior}>
                        <FlechaIz />
                    </button>
                    <button class="Boton-S derecho" onClick={siguiente}>
                        <FlechaDr />
                    </button>

                </div>
            </div>
        </div>
    );
}


export default Slide;