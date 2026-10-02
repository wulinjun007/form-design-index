import {readFile,writeFile,cp,mkdir} from 'node:fs/promises';
const notices=await readFile('public/THIRD_PARTY_NOTICES.txt','utf8');
const html=await readFile('dist/index.html','utf8');
await writeFile('dist/index.html',html.replace('</body>', '<!-- Third-party licenses\n'+notices.replaceAll('--','—')+'\n--></body>'));
await mkdir('docs',{recursive:true});
await cp('dist','docs',{recursive:true});
await writeFile('docs/.nojekyll','');
console.log('Prepared standalone HTML and GitHub Pages docs/.');
