const cards = document.querySelector('.cards')
const basket_wrapper = document.querySelector('.basket_wrapper')
const basket_close = document.querySelector('#basket_close')
const basket = document.querySelector('.basket')


const products = [
    {id:1, title: 'Iphone 15 pro', price: 499, img: '/assets/1.webp'},
    {id:2, title: 'Samsung P20', price: 399, img: '/assets/2.png'},
    {id:3, title: 'Huawei telt', price: 299, img: '/assets/3.png'},
    {id:4, title: 'POCO Y9', price: 199, img: '/assets/4.png'},
]

let productInBasket = []

function displayBlock(){

    for(let i = 0; i < products.length; i++){
        cards.innerHTML += 
        `
            <div class = "card">
                <h3>${products[i].title} </h3>
                <img src = '${products[i].img}'/>

                <div class = "card_bottom_item">
                    <p>$${products[i].price}</p>
                    <button data-id = "${products[i].id}">Добавить</button>
                </div>
            </div>
        `
    }
    basketActive()
    getDataAttribute()
}


function addDataBasket(productId){
    const product = products.find( item => item.id === productId )
    
    if(product){
       productInBasket.push(product) 
       updateBasketDisplay(); 
    }
    else{
        console.error('Произошла ошибка')
    }
}

function getDataAttribute(){
    const btns = document.querySelectorAll('.card button')
    const basket_active = document.querySelector('.basket_active')

    for(let i = 0; i < btns.length; i++){
        btns[i].addEventListener('click', (event)=>{
            const productId = parseInt(event.target.getAttribute('data-id'))
            addDataBasket(productId)
        })
    }

}



function basketActive(){
    basket.addEventListener('click', ()=>{
        basket_wrapper.style.display = 'block'
    })
    basket_close.addEventListener('click', ()=>{
        basket_wrapper.style.display = 'none'
    })
}






displayBlock()