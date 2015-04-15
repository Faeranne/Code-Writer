#!/usr/bin/env node
var fs = require('fs')
var code = ""
var lang = "English"
var langFile = fs.readFileSync('./langs')

for(line in langFile.toString().split('\n')){
	if(langFile.toString().split('\n')[line].toString().split(':')[0]==lang){
		code = langFile.toString().split('\n')[line].split(':')[1];
	}
}
while(true){
	console.log(code);
}
