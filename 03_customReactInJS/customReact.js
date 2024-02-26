
// %%%%%%%%%% not working

// function render(root,reactElement2){
//     const newElement=document.createElement(reactElement2.type);
//     newElement.innerHTML=reactElement2.children.type;

//     const innerelement=document.createElement(reactElement2.children.type)
     
//     innerelement.innerHTML=reactElement2.children.children;
//     for(const prop in reactElement2.children.props){
//         innerelement.setAttribute(prop,reactElement2.children.props[prop]);
//     }
//     for(const prop in reactElement2.props){
//         newElement.setAttribute(prop,reactElement2.props[prop]);
//     }
//     root.appendChild(newElement);
// }

// const reactElement2 = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank",
//     },
//     children: {
//         type: "img",
//         props: {
//             src: "",
//             alt: "image not found",
//         },
//         children: "click"
//     }
// }


// const root = document.querySelector("#root");
// render(root,reactElement2);
