let user_items = []
let user_input = document.querySelector('.user_input')
let add_btn = document.querySelector('.add')
let view_btn = document.querySelector('.view_btn')
let form = document.querySelector('form')
let amount_value = document.querySelector('.amount_value')




form.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(user_items.includes(user_input.value)){
        alert("sorry! " + user_input.value + " has alreadey been added to cart")
    }else{
        user_items.push(user_input.value)

        amount_value.innerHTML = user_items.length

    }

    user_input.value = ''
})


view_btn.addEventListener('click', (e)=>{
    e.preventDefault()


    let items = document.createElement('div')
    items.classList.add('items')
    items.innerHTML = ''
   


    let ul_items = document.createElement('ol')

    
    user_items.map((e)=>{
    let li = document.createElement('li')
    li.textContent = e
    ul_items.appendChild(li)
    })


    let display_box = document.querySelector('.display')
    display_box.style.display = 'flex'
    
    

    items.appendChild(ul_items)
    display_box.appendChild(items)
})