 import "./header.css"
class Header {
    render(){
        const h1 = document.createElement("h1");
        const body = document.querySelector("body");
        h1.innerHTML = "Title of the page";
        body.appendChild(h1);
    }
}
export default Header