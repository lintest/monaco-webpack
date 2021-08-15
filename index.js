import * as monaco from 'monaco-editor'

let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '600px';
div.id = 'container';

monaco.editor.create(document.getElementById('container'), {
  value: 'console.log("Hello, world")',
  language: 'javascript'
});