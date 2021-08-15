import * as monaco from 'monaco-editor';
//@ts-ignore
import EditorWorker from 'worker-loader!monaco-editor/esm/vs/editor/editor.worker';
//@ts-ignore
import CSSWorker from 'worker-loader!monaco-editor/esm/vs/language/css/css.worker'
//@ts-ignore
import HTMLWorker from 'worker-loader!monaco-editor/esm/vs/language/html/html.worker'
//@ts-ignore
import JSONWorker from 'worker-loader!monaco-editor/esm/vs/language/json/json.worker'
//@ts-ignore
import TypeScriptWorker from 'worker-loader!monaco-editor/esm/vs/language/typescript/ts.worker' 

//@ts-ignore
self.MonacoEnvironment = {
	globalAPI: true,
	getWorker: (workerId, label) => {
		console.log(workerId, label);
		switch (label) {
			case 'json':
				return new JSONWorker();
			case 'css':
			case 'scss':
			case 'less':
				return new CSSWorker();
			case 'html':
			case 'handlebars':
			case 'razor':
				return new HTMLWorker();
			case 'typescript':
			case 'javascript':
				return new TypeScriptWorker();
			default:
				return new EditorWorker();;
		}
	}
};

let div = document.createElement('div');
document.body.appendChild(div);
div.style.height = '600px';

monaco.editor.create(div, {
	value: 'function x() {\n\tconsole.log("Hello world!");\n}',
	language: 'javascript'
});
