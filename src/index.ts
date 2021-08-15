import * as monaco from 'monaco-editor';

//@ts-ignore
self.MonacoEnvironment = {
	global: true
};

let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '600px';

monaco.editor.create(div, {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript'
});
