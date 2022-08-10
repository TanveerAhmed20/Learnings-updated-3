// 'use strict';

function myStrictFunction() {
    // Function-level strict mode syntax
    // 'use strict';
    function nested() { return 'And so am I!'; }
    return "Hi! I'm a strict mode function! " + nested();
  }
  function myNotStrictFunction() { return "I'm not strict."; }

  myNotStrictFunction();
  myStrictFunction();