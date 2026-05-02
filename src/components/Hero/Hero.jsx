import './hero.css'
import logo from '../../assets/ЛОГО.svg'
import button from '../../assets/Кнопка-якорь.svg'

export default function Hero(){
    return(
        <div className='hero'>
            <img src = {logo} alt = 'Логотип' className='hero__logo'/>
            <h2 className='hero__text'>Кофе, чай, холодные напитки и десерты<br/>на набережной Алушты.</h2>
            <a className='hero__phone'
            href = 'tel:+79785034050'>
                Обратная связь
            </a>
            <a className='hero__button' href='#catalog'>
                <p className='hero__button-text'>Меню</p>
                <img src = {button} 
                alt = 'Кнопка-якорь'
                className='hero__button-img'/>
            </a>
        </div>
    )
}