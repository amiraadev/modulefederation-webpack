import Header from './components/header/header.js'
import Content from './components/content/content.js'

const header = new Header();
const content = new Content();

    header.render();
    content.render();

// import ('helloButtonApp/helloButton')
//    .then(HelloButtonModule => {
//     const HelloButton =  HelloButtonModule.default;
//     const helloButton = new HelloButton();
//     console.log("emported");
//     helloButton.render()
//    })

   import('helloButtonApp/helloButton')
    .then(HelloButtonModule => {
        const HelloButtonClass = HelloButtonModule.default; // Ensure 'default' property holds the class
        console.log(HelloButtonClass);
        // const helloButtonInstance = new HelloButtonClass();
        // console.log("Imported successfully");
        // helloButtonInstance.render();
    })
    .catch(error => {
        console.error('Error importing module:', error);
    });