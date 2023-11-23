import "./content.css"
import ai_image from "./ai_image.jpg"
// import ai_image from "./kiwi.jpg"
class Content {
    render(){
        const img = document.createElement("img");
        img.src= ai_image ;
        // img.src= "./dist/687bee259ccec0b47f48.jpg" ;
        img.alt="couldn't find the image";
        const body = document.querySelector("body")
        const paragraph = document.createElement("p");
        paragraph.innerHTML = "random paragraph";
        body.appendChild(img);
        body.appendChild(paragraph);
    }
}
export default Content