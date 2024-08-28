import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image'
import './index.css';
import Logo from './../../../public/hamburguer1.png'

export default function Container(){
    return (
        <main className='main'>
            <div className='main-title'>
                <h1>X-salada</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magnam nesciunt animi voluptatem ipsam dignissimos nobis pariatur ullam dolorem doloribus eos mollitia.</p>
                <a href="#">R$ 15,50</a>
                <div className='main-hamburguers'>
                </div>
            </div>
            <div className='main-image'>
                <Image className='image-main' src={Logo} />
            </div>
        </main>
    )
}