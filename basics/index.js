var app = new Vue({
  el: '#app',
  data: {
    name: 'Shahram',
    elements: []
  },
  methods: {
    changeName: function() {
      this.name = 'Sofia';
    },
    addElement: function() {
      this.elements.push(this.elements.length + 1);
    },
    getColor: function(number) {
      return number % 2 == 0 ? 'green' : 'red';
    }
  }
});
