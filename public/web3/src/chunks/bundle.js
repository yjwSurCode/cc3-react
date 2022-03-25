System.register([], function (_export, _context) {
  return {
    execute: function () {
      System.register(
        'chunks:///_virtual/_rollupPluginModLoBabelHelpers.js',
        [],
        function (e) {
          'use strict';
          return {
            execute: function () {
              function t(r, n) {
                return (t = e(
                  'setPrototypeOf',
                  Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    },
                ))(r, n);
              }
              e({
                assertThisInitialized: function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    );
                  return e;
                },
                defineProperty: function (e, t, r) {
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                  return e;
                },
                inheritsLoose: function (e, r) {
                  (e.prototype = Object.create(r.prototype)),
                    (e.prototype.constructor = e),
                    t(e, r);
                },
                setPrototypeOf: t,
              });
            },
          };
        },
      );
    },
  };
});
