// console.log("yo")


function createMenuDiv() {
    const content = document.getElementById('content')

    const header = document.createElement('h1')
    header.textContent = "Menu"
    const dummy = document.createElement('div')
    dummy.textContent = `Welcome to Gusteau’s!  
Our menu celebrates the spirit of French cuisine with a modern twist.  

Starters  
- Escargots de Bourgogne with garlic-parsley butter  
- Onion Soup Gratinée with melted Gruyère  
- Ratatouille Provençal served warm with fresh herbs  

Main Courses  
- Coq au Vin braised in Burgundy wine  
- Bouillabaisse Marseillaise with saffron broth  
- Filet Mignon au Poivre with green peppercorn sauce  
- Linguine with a light herb cream sauce topped with the Chef’s special ratatouille  

Chef’s Specials  
- Confit de Canard with roasted potatoes  
- Lobster Thermidor with cognac cream  
- Gusteau’s Signature Ratatouille — “Anyone Can Cook”  

Desserts  
- Crème Brûlée with caramelized sugar  
- Tarte Tatin with vanilla ice cream  
- Profiteroles drizzled with warm chocolate sauce  `


    content.appendChild(header)

    content.appendChild(dummy)

}

export { createMenuDiv }







   