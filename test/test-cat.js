require("6to5/register");

var Cat = require('./../'),
    test = require('tape');

test('sanity check', function(t) {
  t.equal(typeof Cat, 'function', 'Cat exists');
  t.end();
});

test('its default name', function(t) {
  var cat = new Cat();
  t.equal(cat.name, 'Simon', 'is Simon');
  t.end();
});

test('if I call it bob', function(t) {
  var cat = new Cat('Bob');
  t.equal(cat.name, 'Bob', 'then its name is Bob');
  t.end();
})

test('its meow', function(t) {
  var cat = new Cat();
  t.equal('MROW', cat.meow(), 'is loud');
  t.end();
});

test('its eating', function(t) {
  var cat = new Cat();
  t.equal('nom nom nom', cat.eat(), 'is nomtastic')
  t.end();
});

test('after it sleeps', function(t) {
  var cat = new Cat();
  cat.sleep(function() {
    t.pass('it wakes');
    t.end();
  })
});

test('it is actually cthulhu', function(t) {
  var cat = new Cat();
  window = {}; //intentionally global ;)
  window['Object'] = 'foo';
  cat.destroyTheHouse();
  t.equal(window['Object'], undefined, 'the destroyer of worlds');
  t.end();
  delete window;
});
