(function () {
    'use strict';

    // #region src\something.js
    const span$1 = document.querySelector('#btn');

    span$1.addEventListener("click", () => {
        span$1.classList.add("optional");
    });
    // #endregion src\something.js
    // =============================================================================

    // #region src\update.js
    const span = document.querySelector('#time-now');

    let ctr = 0;
    function update() {
    	span.textContent = ctr++;
    	setTimeout(update, 1000);
    }

    // #endregion src\update.js
    // =============================================================================

    console.log('if you have sourcemaps enabled in your devtools, click on main.js:6 -->');

    update();
    // #endregion src\main.js
    // =============================================================================

})();
//# sourceMappingURL=bundle.js.map
