import say from './util.js';
import Vue from 'vue';
import './style/common.scss';

say();
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello Vue!'
  }
})
