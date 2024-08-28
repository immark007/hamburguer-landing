'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import './index.css';
import Logo from './../../../public/hamburguer1.png'
import Hamburguer1 from '../../../public/hamburguer2.png';

export default function Container(){
      const [currentImage, setCurrentImage] = useState(Logo);

      const handleImageClick = (image) => {
          setCurrentImage(image);
      };
    return (
        <main className='main'>
            <div className='main-title'>
                <h1>X-salada</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam nesciunt animi voluptatem ipsam dignissimos nobis pariatur ullam dolorem doloribus eos mollitia.</p>
                <a href="#">R$ 15,50</a>
                <div className='span-hamburguers'>
                    <ul>
                        <li>
                            <a href="#" onClick={() => handleImageClick(Logo)}>
                                <Image className='image-main' src={Logo} />
                            </a>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleImageClick(Hamburguer1)}>
                                <Image className='image-main' src={Hamburguer1} />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='main-image'>
                <Image className='image-main' src={currentImage} />
            </div>
        </main>
    )
}