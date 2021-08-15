import * as monaco from 'monaco-editor';

//@ts-ignore
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		console.log("getWorkerUrl: ", moduleId, label)
		switch (label) {
			case 'json':
				return './json.worker.bundle.js';
			case 'css':
			case 'scss':
			case 'less':
				return './css.worker.bundle.js';
			case 'html':
			case 'handlebars':
			case 'razor':
				return './html.worker.bundle.js';
			case 'typescript':
			case 'javascript':
				return './ts.worker.bundle.js';
			default:
				return './editor.worker.bundle.js';
		}
	}
};

let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '600px';
div.id = 'container';

monaco.editor.create(document.getElementById('container'), {
	value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
	language: 'javascript'
});
