#!/usr/bin/env node
var fs = require('fs')
var code = ""
var lang = "English"
var count = -1
var langFile = fs.readFileSync('./langs')

var opts = require('nomnom')
	.option('lang',{
			abbr: 'l'
	})
	.option('count',{
			abbr: 'n'
	})
	.parse();
if(opts.lang){
	lang = opts.lang
}

if(opts.count){
	count = opts.count
}

for(line in langFile.toString().split('\n')){
	if(langFile.toString().split('\n')[line].toString().split(':')[0]==lang){
		code = langFile.toString().split('\n')[line].split(':')[1];
	}
}

if(count < 0){
	while(true){
		console.log(code);
	}
}else{
	for(var x=0;x<count;x++){
		console.log(code);
	}
}
