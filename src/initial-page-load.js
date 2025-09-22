// console.log("yo")
import gusteauImage from "../gusteau.png"

const content = document.getElementById('content')

const header = document.createElement('h1')
header.textContent = "Welcome to Gusteau's"
const dummy = document.createElement('div')
dummy.textContent = `“Anyone can cook — but at Gusteau’s, anyone can discover the joy of dining.”     
            Step inside Paris’ most beloved kitchen, where every meal is prepared with passion, creativity, and a touch of magic.At
Gusteau’s, we honor the legacy of Chef Auguste Gusteau — a chef who believed that food should be an adventure, full of
            flavor and heart.
            
            Our menu combines timeless French classics with modern inspiration, celebrating the finest ingredients sourced with
            care.Each dish is crafted to delight the senses, from the very first aroma to the last bite.
            
            At Gusteau’s, dining is more than a meal — it’s an experience.Whether you’re here for a romantic evening, a family
gathering, or simply to indulge, you’ll find yourself swept into a world where food and imagination meet.
            
            Because here at Gusteau’s, we believe what Chef always said:
            “Anyone can cook.”
            
            Your table is waiting.`
const image = document.createElement("img");
image.src = gusteauImage;
image.setAttribute("width", "300px")

content.appendChild(header)
content.appendChild(image)

content.appendChild(dummy)





   