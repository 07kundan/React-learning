

function customRender(mainContainer, reactElement) {

    const newElement = document.createElement(reactElement.type);
    newElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {

        if (prop === 'children') continue;
        newElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.appendChild(newElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "click to open google"
}


const mainContainer = document.querySelector("#root");

customRender(mainContainer, reactElement);
