import Vue from 'vue';
import IEcharts from './full.vue';
// import IEcharts from './lite.vue';
// import 'echarts/lib/chart/bar';
// import IEcharts from '../dist/js/full.js';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    IEcharts
  },
  data: () => ({
    loading: true,
    style: {},
    bar: [{
      title: {
        text: 'ECharts 入门示例1'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }],
      graphic: [{
        type: 'image',
        id: 'logo',
        left: '30%',
        top: 130,
        z: 5,
        bounding: 'raw',
        origin: [75, 75],
        style: {
          image: 'http://s.map.qq.com/themes/default/img/icons.png?v=v4.2.49',
          width: 249,
          height: 36,
          opacity: 0.1
        }
      }]
    }, {
      title: {
        text: 'ECharts 入门示例2'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'line',
        data: [18, 17, 86, 64, 44, 23]
      }]
    }]
  }),
  methods: {
    doLoading() {
      const that = this;
      that.loading = !that.loading;
      that.style = {
        width: Math.floor(Math.random() * (1024 + 1 - 400) + 400) + 'px',
        height: Math.floor(Math.random() * (768 + 1 - 200) + 200) + 'px'
      };
    },
    onReady(ins) {
      console.dir(ins);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  }
});
