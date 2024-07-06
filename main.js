// List of Selectors
let cardWrapper = document.querySelector('#cardWrapper')
let showContactBtn = document.querySelector('#showContactBtn')
let addContactBtn = document.querySelector('#addContactBtn')
let rmvContactBtn = document.querySelector('#rmvContactBtn')
let findContactBtn = document.querySelector('#findContactBtn')
let inputName = document.querySelector('#inputName')
let inputNumber = document.querySelector('#inputNumber')

let cards


let addressBook = {
    contacts : [
        {name: 'Mario', number: 33325559647},
        {name: 'Ciro', number: 33328859647},
        {name: 'Sonia', number: 33828859647},
        {name: 'Carla', number: 3382887847},
        {name: 'Antonio', number: 3382887847},

        
    ],
    
    showContact: function() {
        cardWrapper.innerHTML=''
        
        this.contacts.forEach((contact)=>{
            let col = document.createElement('div')
            col.classList.add('col-12', 'col-md-6')
            cardWrapper.appendChild(col)
            col.innerHTML=`<div class="col-12  pt-5 columns">
            <div class="card">
            <div class="card-body d-flex justify-content-evenly align-items-center py-4">
            <div class="name col-md-4 d-flex justify-content-center">                    
            <p class="m-0">${contact.name}</p>
            </div>
            <div class=" col-md-4 d-flex justify-content-center"> 
            <p class="m-0">${contact.number}</p>
            </div>
            <div class=" col-md-4 d-flex justify-content-end">
            <i class="fa-solid fa-trash me-4"></i>                            
            </div>
            </div>
            </div>
            </div>`
        })
        let icons = document.querySelectorAll('.fa-trash')
        
        icons.forEach((icon,i)=>{
            icon.addEventListener('click',()=>{
                let name = this.contacts[i].name.toLowerCase()
                this.removeContact(name)
            })
        })
        cards = document.querySelectorAll('.columns')
        
        
    },
    
    addContact: function(name, number) {
        if (inputName.value!==''&&inputNumber.value!=='') {
            this.contacts.push({name: name, number: number})
            
        } else {
            alert('Insert a name and number')
        }
        this.showContact()
        
    },
    removeContact:function(name) {
        let names = this.contacts.map((contact)=> contact.name.toLowerCase())
        let index = names.indexOf(name)
        if (index>=0) {
            this.contacts.splice(index,1)
        } else {
            alert('Name not found!')
        }
        this.showContact()
        
    },
    findContact: function(name) {
        this.showContact()
        let title
        let count = 0
        cards.forEach((card)=>{
            let cardParent = card.querySelector('.card')
            // console.log(card);
            let cardBody = cardParent.querySelector('.card-body')
            title = cardBody.querySelector('.name')
            
            console.log(title.innerText);
            if (title.innerText.toLowerCase().indexOf(name) >=0){
                card.classList.remove('d-none')
                count++
            }else{
                card.classList.add('d-none')
                
                
            }
        })
        if (count==0) {
            
            alert('name is not found!')
        }
        console.log(title.innerText);
        
    }
}

let check = true
showContactBtn.addEventListener('click',()=>{
    if (check == true) {
        showContactBtn.style.backgroundColor = 'grey'
        showContactBtn.innerText='Hide Contacts'
        addressBook.showContact()
        check = false    
        
    } else {
        showContactBtn.innerHTML='Show Contacts'
        showContactBtn.style.backgroundColor = '#32CD32'
        cardWrapper.innerHTML=''
        check = true    
        
    }
})
addContactBtn.addEventListener('click',()=>{
    addressBook.addContact(inputName.value.toLowerCase(),inputNumber.value.toLowerCase())
    inputName.value=''
    inputNumber.value=''
    
    check=false
}

)

rmvContactBtn.addEventListener('click', ()=>{
    addressBook.removeContact(inputName.value.toLowerCase())
    inputName.value=''
    check=true
    
})

findContactBtn.addEventListener('click',()=>{
    addressBook.findContact(inputName.value.toLowerCase())
    
    inputName.value=''
    check=false
}
)

