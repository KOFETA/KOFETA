import './catalog.css'
import './category.css'
import './card.css'
import categories from '../../assets/menu.json'
// import coldDrink from '../../assets/menu_images/coldPhoto.png'

function Card({product}){
    const imageSrc = product.image
        ? new URL(`../../assets/menu_images/${product.image}`, import.meta.url).href
        : null
    return(        
        <article className={'card ' + (product.isCold? "cold " : '') + (product.image? 'card_with-image' : 'card_without-image')}>
            {product.image && <img src = {imageSrc} alt = 'Фото товара' className='card__image'/>}
            <div className='card__titleBlock'>
                <h1 className='card__titleBlock-title'>{product.title}</h1>
                <p className='card__titleBlock-description'>{product.description}</p>
            </div>
            <div className='card__priceTagBox'>
            {product.price.map((el, index) => (
                <div className='card__priceTagBox-priceTag' key = {el.volume}>
                    {(product.category !== 'cold-drinks') && (product.category !== 'desserts')?<p className='card__priceTagBox-priceTag-volume'>{el.volume}мл</p>: null}
                    {product.category === 'desserts'? <p className='card__priceTagBox-priceTag-volume'>{el.volume}шт</p>: null}
                    <p className='card__priceTagBox-priceTag-price'>{el.price}р</p>
                    {(product.category === 'cold-drinks') && (index !== product.price.length - 1) && (product.image)?<span className='card__priceTagBox-priceTag-separator'></span> : null }
                </div>
            ))}
            </div>
        </article>
    )
}

function Category({category}){
    return(
    <section className={'category ' + (category.slug === 'cold-drinks'? 'cold' : '')} id = {category.id}>
        <div className='category__header'>
            <h1 className='category__header-title'>{category.title}</h1>
            {category.slug === 'cold-drinks'? <h2 className='category__header-volume'>{category.volume.map((volume, index) => (
                <span key = {volume} className='category__header-volume-item'>
                    {volume}
                    {index !== category.volume.length - 1 && (
                        <span className='category__header-volume-separator'></span>
                    )}
                </span>
            ))}<span className='category__header-volume-unit'>мл</span>
            </h2> : null}
            
        </div>
        <article className='category__body'>
            {category.items.map((item,index) => (
                <div id = {item.id}>
                    <Card key = {item.id} product={item}/>
                    {category.slug === 'cold-drinks' && index !== category.items.length-1 && category.items[0].image && <span className='category__body-separator'></span>}
                </div>
            ))}
        </article>
    </section>)
}

export default function Catalog(){
    return(
        <div className="catalog" id = 'catalog'>
            <div className = 'catalog__filter'>
                
                <nav className='catalog__filter-nav'>
                    {categories.categories.map(category => (
                        <a key = {category.id} className='catalog__filter-nav-el' href = {'#' + category.id}>
                            {category.title}
                        </a>
                    ))}
                </nav>
            </div>
            <div className='catalog__body'>
                    {
                        categories.categories.map(сategory => (
                            <Category key = {сategory.id} category={сategory}/>
                        ))
                    }
            </div>
        </div>
    )
}