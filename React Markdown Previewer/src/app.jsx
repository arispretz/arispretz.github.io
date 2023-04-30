import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { marked } from 'marked';
import Prism from 'prismjs';
import DOMPurify from 'isomorphic-dompurify';


// markdown example
const defaultText =
`
# Welcome to my React Markdown Previewer!
---

## This is a sub-heading...

### And here's some other cool stuff:

\`\`let message="Hello World!";\`\`  

\`\`\`javascript
// this is multi-line code:

    function map(f, a) {
      let result = [];
        for (let i = 0; i < a.length; i++) {
          result[i] = f(a[i]);
 }
      return result;
}
\`\`\`


You can also make text **bold**...
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.


You can visit [my freeCodeCamp personal portfolio:](https://codepen.io/arispretz/pen/poWXbzL)

There are also...
  > Block Quotes!
  >"When everything seems to be going against you, 
  >remember that the airplane takes off against the wind, 
  >not with it". 
  >(Henry Ford)

- And of course there are lists.
 - Some are bulleted.
   - With different indentation levels.
    - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![Aerial View](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdxHddN8Ef_KZ-zuBoNVPF9InNC5WUuHUilL8hW3O_VMni0OWZVMDf1d3ihDR67BnsTYbvC5S872zleZWuU7OfbkuWOqKJkFoHIEVQ9aYws8Xauy2XfHdMLsH-XqQxsy_OFCrZL3YHy6Gm4ol7Na5aLyMye2jucgyVinfYM6bPzUl7rgcwmJfIxJkn_g/s800/P4020120%20%28Copy%29%20%28Copy%29.JPG)
`;

// converting to markdown
marked.setOptions({
 breaks: true,
// highlighting some code
 highlight: function (code) {
  return Prism.highlight(code,Prism.languages.javascript, "javascript");
 }
});

// open the link in another window
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
 return `<a target="_blank" href="${href}">${text}</a>`;
};

// Editor component 
const Editor = ({ text, handleChange }) =>
 <textarea id="editor" cols="50" rows={50} value={text} onChange={handleChange} />

// Previewer component 
const Previewer = ({text}) => (
 <div id="preview"
  dangerouslySetInnerHTML={{
   __html: DOMPurify.sanitize(marked(text, { renderer: renderer }))
  }}
 />
);

// Application
const App = () => {
// to remember the state
 const [text, setContent] = React.useState(defaultText)
// to handle the event
const handleChange = (event) => {
  setContent(event.target.value)
 }

 return (
  <div id = "background">
 <container-fluid>
 <div className ="bg-success text-white">
 <div className="row">
 <h1>React Markdown Previewer</h1>
 </div>

 <div className="row">
 <div className="bg-primary text-white">
 <h2>Editor</h2>
// response to event
   <Editor text={text} handleChange={handleChange} />
 </div>
 <div className="bg-info text-dark" >
 <h2>Preview</h2>
   <Previewer text={text} />
   </div>
   </div>

 <div className="footClass">
 <p><strong>Copyright 2022 - Ariana Spretz</strong></p>
 </div>
 </div>
 </container-fluid>
 </div>
 );
}


export default App;