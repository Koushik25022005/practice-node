/*Npm - gloabl command, comes with node (npm stands for node package manager) 
npm --version or npm --v

local dependecy - use it only in this project
npm i <packageName>

global dependency - use it in any project
npm install -g <packageName>
sudo install -g <packageName> (mac)

package.json - manifest file (stores important info about project/package)
manual approach (create package.json in the root, create properties etc)
npm init (step by step, press enter to skip)
npm init -y (everything default)*/

const _ = require('lodash');

const items = [1,[2,3,[4]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');