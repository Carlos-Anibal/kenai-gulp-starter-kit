
(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=youtubeVideo;function youtubeVideo(){var d=document,w=window,mq=w.matchMedia('(min-width: 64em)'),youtube=d.querySelectorAll('.Youtube'),youtubeWrapper=d.querySelectorAll('.Youtube-wrapper'),youtubeIds=[],youtubeIframe=[];youtube.forEach(function(video,index){return youtubeIds[index]=video.id;});console.log(youtubeIds);function showVideo(mq){if(mq.matches){youtubeWrapper.forEach(function(video,index){video.innerHTML='<iframe src="https://www.youtube.com/embed/'+youtubeIds[index]+'" frameborder="0"></iframe>';});}else{youtubeWrapper.forEach(function(video,index){video.innerHTML='<a href="https://www.youtube.com/watch?v='+youtubeIds[index]+'" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';});}}
mq.addListener(showVideo);showVideo(mq);}},{}],2:[function(require,module,exports){'use strict';var _youtube_video=require('./components/youtube_video');var _youtube_video2=_interopRequireDefault(_youtube_video);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
(0,_youtube_video2.default)();},{"./components/youtube_video":1}]},{},[2]);