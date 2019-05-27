(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var overlay = document.getElementById('overlay');
var description = document.getElementById('description');
var map = new mapboxgl.Map({
  container: 'map',
  maxZoom: 8,
  style: 'style.json',
  attributionControl: true,
  hash: true,
  renderWorldCopies: false
});
map.on('mousemove', function (e) {
  var fs = map.queryRenderedFeatures(e.point);
  fs.sort(function (a, b) {
    return parseInt(a.properties.code) - parseInt(b.properties.code);
  });

  if (fs.length > 0) {
    overlay.classList.remove('off');
    overlay.classList.add('on');
    var s = '';
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = fs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;
        s += "".concat(f.properties.code, ": ").concat(f.properties.name, "<br/>");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    description.innerHTML = s;
  } else {
    overlay.classList.remove('on');
    overlay.classList.add('off');
    description.innerHTML = '';
  }
});

},{}]},{},[1]);
