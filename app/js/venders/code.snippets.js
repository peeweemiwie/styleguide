/*
 *
 * Give an element a .make-snippet class and it's innerhtml
 * will be copied into a pre/code fragment that gets appended
 * adjacent to the element.
 *
 * If Prism.js is included, the snippets will be syntax higlighted.
 *
 * Note, this only autogenerates markup snippets.
 *
 */

(function(){

  document.addEventListener('DOMContentLoaded', function(event) {

    var list = document.querySelectorAll('.example');

    [].forEach.call(list, function(el) {
      var snippet = el.innerHTML.replace(/</g,'&lt;');
          snippet = snippet.replace(/ /g,'&nbsp;');
      var css = el.classList.contains('minor') ? 'language-markup minor' : 'language-markup';
      var code = '<pre class="' + css +'"><code>' + snippet + '</pre></code>';
      var codeHorizontal = '<div class="col-md-6"><pre class="' + css +'"><code>' + snippet + '</pre></code></div>';

      if(el.classList.contains('code-vertical')){
        el.insertAdjacentHTML('afterend', codeHorizontal);
      } else {
        el.insertAdjacentHTML('afterend',code);
        }
    });

    if(window.Prism){
      Prism.highlightAll(false);
    }

  });

})();
