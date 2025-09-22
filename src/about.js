



function createAboutDiv() {
    const content = document.getElementById('content')

    const header = document.createElement('h1')
    header.textContent = "About Us"
    const dummy = document.createElement('div')
    dummy.textContent = `About Gusteau’s  

At Gusteau’s, we believe that great food is more than a meal — it is an experience to be shared.  
Inspired by the vision of Chef Auguste Gusteau, our restaurant celebrates the warmth, joy, and creativity of French cuisine.  

Every dish on our menu is crafted with the finest seasonal ingredients, prepared with care, and served with heart.  
From timeless classics to inspired modern creations, our kitchen carries forward Gusteau’s motto: “Anyone can cook.”  

Whether you join us for a romantic evening, a family gathering, or a celebration with friends, we invite you to discover the magic of Parisian dining in every bite.
    Bienvenue, and bon appétit!  `


    content.appendChild(header)

    content.appendChild(dummy)

}

export { createAboutDiv }