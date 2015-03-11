var assert = chai.assert;

suite('CSV', function() {
    setup(function(){
      if (typeof __html__ !== 'undefined') {
          document.body.innerHTML = __html__['tests/index.html'];
          original = document.getElementById('original');
          finaltable = document.getElementById('converted');
      }
    });

    test('No se separa por comas entre comillas.', function() {
        original.value = '"esto,es,un,unico,valor","este es otro"';
        calculate();
        assert.deepEqual(finaltable.innerHTML, ["esto,es,un,unico,valor","este es otro"]);
    });
    test('45C = 113F', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(finaltable.innerHTML, "113.0F");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(finaltable.innerHTML, /Try something like '-4.2C'/);
    });
});
