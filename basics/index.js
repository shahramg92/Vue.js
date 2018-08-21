var app = new Vue({
  el: '#app',
  data: {
    name: 'Shahram'
  },
  methods: {
    changeName: function() {
      this.name = 'Sofia';
    }
  }
});
