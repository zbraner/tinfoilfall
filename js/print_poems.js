// import { glob, globSync, globStream, globStreamSync, Glob } from 'glob'
//
// console.log("Finished importing glob...")
//
// // the main glob() and globSync() resolve/return array of filenames
//
// // all js files, but don't look in node_modules
// const g = new Glob('audio/*.m4a')
// // glob objects are async iterators, can also do globIterate() or
// // g.iterate(), same deal
// for await (const file of g) {
//   console.log('found an audio file:', file)
// }
//
// const file1 = document.createElement("audio");
// file1.id = "slug";
// file1.src = "audio/40s boxing reel slugging match.m4a"
// file1.controls = true;
// document.body.appendChild(file1);

const poem_paragraph = document.createElement("p");
poem_paragraph.id="poems";
var string = "poems";
poem.paragraph.innerHTML = string;
document.body.appendChild(poem_paragraph);
