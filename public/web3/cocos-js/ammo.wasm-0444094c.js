System.register(['./_commonjsHelpers-364bf34e.js'], function (t) {
  'use strict';
  var e;
  return {
    setters: [
      function (t) {
        e = t.c;
      },
    ],
    execute: function () {
      var n;
      (n = e(function (t) {
        var e,
          n =
            ((e =
              'undefined' != typeof document && document.currentScript
                ? document.currentScript.src
                : void 0),
            function (t) {
              var n;
              (t = t || {}), n || (n = void 0 !== t ? t : {});
              var o,
                p,
                r,
                i,
                c,
                _ = {};
              for (o in n) n.hasOwnProperty(o) && (_[o] = n[o]);
              (p = 'object' == typeof window),
                (r = 'function' == typeof importScripts),
                (i =
                  'object' == typeof process &&
                  'object' == typeof process.versions &&
                  'string' == typeof process.versions.node &&
                  !p &&
                  !r),
                (c = !p && !i && !r);
              var a,
                s,
                l = '';
              i
                ? ((l = __dirname + '/'),
                  (a = function (t) {
                    return console.error('shell read', t, void 0);
                  }),
                  (s = function (t) {
                    return (
                      (t = a(t)).buffer || (t = new Uint8Array(t)),
                      h(t.buffer),
                      t
                    );
                  }),
                  1 < process.argv.length &&
                    process.argv[1].replace(/\\/g, '/'),
                  process.argv.slice(2),
                  process.on('uncaughtException', function (t) {
                    throw t;
                  }),
                  process.on('unhandledRejection', L),
                  (n.inspect = function () {
                    return '[Emscripten Module object]';
                  }))
                : c
                ? ('undefined' != typeof read &&
                    (a = function (t) {
                      return read(t);
                    }),
                  (s = function (t) {
                    return 'function' == typeof readbuffer
                      ? new Uint8Array(readbuffer(t))
                      : (h('object' == typeof (t = read(t, 'binary'))), t);
                  }),
                  'undefined' != typeof print &&
                    ('undefined' == typeof console && (console = {}),
                    (console.log = print),
                    (console.warn = console.error =
                      'undefined' != typeof printErr ? printErr : print)))
                : (p || r) &&
                  (r
                    ? (l = self.location.href)
                    : document.currentScript &&
                      (l = document.currentScript.src),
                  e && (l = e),
                  (l =
                    0 !== l.indexOf('blob:')
                      ? l.substr(0, l.lastIndexOf('/') + 1)
                      : ''),
                  (a = function (t) {
                    var e = new XMLHttpRequest();
                    return e.open('GET', t, !1), e.send(null), e.responseText;
                  }),
                  r &&
                    (s = function (t) {
                      var e = new XMLHttpRequest();
                      return (
                        e.open('GET', t, !1),
                        (e.responseType = 'arraybuffer'),
                        e.send(null),
                        new Uint8Array(e.response)
                      );
                    }));
              var u,
                y = n.print || console.log.bind(console),
                b = n.printErr || console.warn.bind(console);
              for (o in _) _.hasOwnProperty(o) && (n[o] = _[o]);
              (_ = null),
                n.wasmBinary && (u = n.wasmBinary),
                'object' != typeof WebAssembly &&
                  b('no native wasm support detected');
              var f,
                m = new WebAssembly.Table({
                  initial: 758,
                  maximum: 778,
                  element: 'anyfunc',
                }),
                d = !1;
              function h(t, e) {
                t || L('Assertion failed: ' + e);
              }
              var g =
                'undefined' != typeof TextDecoder
                  ? new TextDecoder('utf8')
                  : void 0;
              'undefined' != typeof TextDecoder && new TextDecoder('utf-16le');
              var j,
                C,
                v,
                S = n.TOTAL_MEMORY || 67108864;
              (f = n.wasmMemory
                ? n.wasmMemory
                : new WebAssembly.Memory({
                    initial: S / 65536,
                    maximum: S / 65536,
                  })) && (j = f.buffer),
                (S = j.byteLength);
              var O = j;
              function I(t) {
                for (; 0 < t.length; ) {
                  var e = t.shift();
                  if ('function' == typeof e) e();
                  else {
                    var o = e.Ap;
                    'number' == typeof o
                      ? void 0 === e.qp
                        ? n.dynCall_v(o)
                        : n.dynCall_vi(o, e.qp)
                      : o(void 0 === e.qp ? null : e.qp);
                  }
                }
              }
              (j = O),
                (n.HEAP8 = new Int8Array(O)),
                (n.HEAP16 = new Int16Array(O)),
                (n.HEAP32 = v = new Int32Array(O)),
                (n.HEAPU8 = C = new Uint8Array(O)),
                (n.HEAPU16 = new Uint16Array(O)),
                (n.HEAPU32 = new Uint32Array(O)),
                (n.HEAPF32 = new Float32Array(O)),
                (n.HEAPF64 = new Float64Array(O)),
                (v[6808] = 5270272);
              var P = [],
                T = [],
                R = [],
                D = [],
                B = !1;
              function x() {
                var t = n.preRun.shift();
                P.unshift(t);
              }
              var A = 0,
                M = null;
              function L(t) {
                throw (
                  (n.onAbort && n.onAbort(t),
                  y((t += '')),
                  b(t),
                  (d = !0),
                  new WebAssembly.RuntimeError(
                    'abort(' +
                      t +
                      '). Build with -s ASSERTIONS=1 for more info.',
                  ))
                );
              }
              function k() {
                var t = F;
                return String.prototype.startsWith
                  ? t.startsWith('data:application/octet-stream;base64,')
                  : 0 === t.indexOf('data:application/octet-stream;base64,');
              }
              (n.preloadedImages = {}), (n.preloadedAudios = {});
              var F = 'ammo.wasm.wasm';
              if (!k()) {
                var W = F;
                F = n.locateFile ? n.locateFile(W, l) : l + W;
              }
              function G() {
                try {
                  if (u) return new Uint8Array(u);
                  if (s) return s(F);
                  throw 'both async and sync fetching of the wasm failed';
                } catch (t) {
                  L(t);
                }
              }
              T.push({
                Ap: function () {
                  K();
                },
              });
              var U = [null, [], []],
                w = {
                  f: function () {
                    L();
                  },
                  c: function (t, e, n) {
                    C.set(C.subarray(e, e + n), t);
                  },
                  d: function () {
                    L('OOM');
                  },
                  e: function () {
                    return 0;
                  },
                  b: function () {
                    return 0;
                  },
                  g: function (t, e, n, o) {
                    try {
                      for (var p = 0, r = 0; r < n; r++) {
                        for (
                          var i = v[(e + 8 * r) >> 2],
                            c = v[(e + (8 * r + 4)) >> 2],
                            _ = 0;
                          _ < c;
                          _++
                        ) {
                          var a = C[i + _],
                            s = U[t];
                          if (0 === a || 10 === a) {
                            for (
                              var l = 1 === t ? y : b,
                                u = s,
                                f = 0,
                                m = f + void 0,
                                d = f;
                              u[d] && !(d >= m);

                            )
                              ++d;
                            if (16 < d - f && u.subarray && g)
                              var h = g.decode(u.subarray(f, d));
                            else {
                              for (m = ''; f < d; ) {
                                var j = u[f++];
                                if (128 & j) {
                                  var S = 63 & u[f++];
                                  if (192 == (224 & j))
                                    m += String.fromCharCode(
                                      ((31 & j) << 6) | S,
                                    );
                                  else {
                                    var O = 63 & u[f++];
                                    if (
                                      65536 >
                                      (j =
                                        224 == (240 & j)
                                          ? ((15 & j) << 12) | (S << 6) | O
                                          : ((7 & j) << 18) |
                                            (S << 12) |
                                            (O << 6) |
                                            (63 & u[f++]))
                                    )
                                      m += String.fromCharCode(j);
                                    else {
                                      var I = j - 65536;
                                      m += String.fromCharCode(
                                        55296 | (I >> 10),
                                        56320 | (1023 & I),
                                      );
                                    }
                                  }
                                } else m += String.fromCharCode(j);
                              }
                              h = m;
                            }
                            l(h), (s.length = 0);
                          } else s.push(a);
                        }
                        p += c;
                      }
                      return (v[o >> 2] = p), 0;
                    } catch (t) {
                      return L(t), t.Tq;
                    }
                  },
                  a: function (t) {
                    var e = Date.now();
                    return (
                      (v[t >> 2] = (e / 1e3) | 0),
                      (v[(t + 4) >> 2] = ((e % 1e3) * 1e3) | 0),
                      0
                    );
                  },
                  memory: f,
                  table: m,
                },
                H = (function () {
                  function t(t) {
                    (n.asm = t.exports),
                      A--,
                      n.monitorRunDependencies && n.monitorRunDependencies(A),
                      0 == A && M && ((t = M), (M = null), t());
                  }
                  function e(e) {
                    t(e.instance);
                  }
                  function o(t) {
                    return (
                      u || (!p && !r) || 'function' != typeof fetch
                        ? new Promise(function (t) {
                            t(G());
                          })
                        : fetch(F, { credentials: 'same-origin' })
                            .then(function (t) {
                              if (!t.ok)
                                throw (
                                  "failed to load wasm binary file at '" +
                                  F +
                                  "'"
                                );
                              return t.arrayBuffer();
                            })
                            .catch(function () {
                              return G();
                            })
                    )
                      .then(function (t) {
                        return WebAssembly.instantiate(t, i);
                      })
                      .then(t, function (t) {
                        b('failed to asynchronously prepare wasm: ' + t), L(t);
                      });
                  }
                  var i = { env: w, wasi_unstable: w };
                  if (
                    (A++,
                    n.monitorRunDependencies && n.monitorRunDependencies(A),
                    n.instantiateWasm)
                  )
                    try {
                      return n.instantiateWasm(i, t);
                    } catch (t) {
                      return (
                        b(
                          'Module.instantiateWasm callback failed with error: ' +
                            t,
                        ),
                        !1
                      );
                    }
                  return (
                    (function () {
                      if (
                        u ||
                        'function' != typeof WebAssembly.instantiateStreaming ||
                        k() ||
                        'function' != typeof fetch
                      )
                        return o(e);
                      fetch(F, { credentials: 'same-origin' }).then(function (
                        t,
                      ) {
                        return WebAssembly.instantiateStreaming(t, i).then(
                          e,
                          function (t) {
                            b('wasm streaming compile failed: ' + t),
                              b('falling back to ArrayBuffer instantiation'),
                              o(e);
                          },
                        );
                      });
                    })(),
                    {}
                  );
                })();
              n.asm = H;
              var q,
                K = (n.___wasm_call_ctors = function () {
                  return n.asm.h.apply(null, arguments);
                }),
                E = (n._emscripten_bind_btCollisionShape_setLocalScaling_1 =
                  function () {
                    return n.asm.i.apply(null, arguments);
                  }),
                N = (n._emscripten_bind_btCollisionShape_getLocalScaling_0 =
                  function () {
                    return n.asm.j.apply(null, arguments);
                  }),
                V =
                  (n._emscripten_bind_btCollisionShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.k.apply(null, arguments);
                    }),
                z = (n._emscripten_bind_btCollisionShape_setMargin_1 =
                  function () {
                    return n.asm.l.apply(null, arguments);
                  }),
                Q = (n._emscripten_bind_btCollisionShape_getMargin_0 =
                  function () {
                    return n.asm.m.apply(null, arguments);
                  }),
                Y = (n._emscripten_bind_btCollisionShape_isCompound_0 =
                  function () {
                    return n.asm.n.apply(null, arguments);
                  }),
                J = (n._emscripten_bind_btCollisionShape_getUserIndex_0 =
                  function () {
                    return n.asm.o.apply(null, arguments);
                  }),
                X = (n._emscripten_bind_btCollisionShape_setUserIndex_1 =
                  function () {
                    return n.asm.p.apply(null, arguments);
                  }),
                Z = (n._emscripten_bind_btCollisionShape_getAabb_3 =
                  function () {
                    return n.asm.q.apply(null, arguments);
                  }),
                $ =
                  (n._emscripten_bind_btCollisionShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.r.apply(null, arguments);
                    }),
                tt = (n._emscripten_bind_btCollisionShape___destroy___0 =
                  function () {
                    return n.asm.s.apply(null, arguments);
                  }),
                et = (n._emscripten_bind_btCollisionObject_btCollisionObject_0 =
                  function () {
                    return n.asm.t.apply(null, arguments);
                  }),
                nt =
                  (n._emscripten_bind_btCollisionObject_setAnisotropicFriction_2 =
                    function () {
                      return n.asm.u.apply(null, arguments);
                    }),
                ot = (n._emscripten_bind_btCollisionObject_getCollisionShape_0 =
                  function () {
                    return n.asm.v.apply(null, arguments);
                  }),
                pt =
                  (n._emscripten_bind_btCollisionObject_getActivationState_0 =
                    function () {
                      return n.asm.w.apply(null, arguments);
                    }),
                rt =
                  (n._emscripten_bind_btCollisionObject_setActivationState_1 =
                    function () {
                      return n.asm.x.apply(null, arguments);
                    }),
                it =
                  (n._emscripten_bind_btCollisionObject_forceActivationState_1 =
                    function () {
                      return n.asm.y.apply(null, arguments);
                    }),
                ct = (n._emscripten_bind_btCollisionObject_activate_0 =
                  function () {
                    return n.asm.z.apply(null, arguments);
                  }),
                _t = (n._emscripten_bind_btCollisionObject_activate_1 =
                  function () {
                    return n.asm.A.apply(null, arguments);
                  }),
                at = (n._emscripten_bind_btCollisionObject_isActive_0 =
                  function () {
                    return n.asm.B.apply(null, arguments);
                  }),
                st = (n._emscripten_bind_btCollisionObject_isKinematicObject_0 =
                  function () {
                    return n.asm.C.apply(null, arguments);
                  }),
                lt = (n._emscripten_bind_btCollisionObject_isStaticObject_0 =
                  function () {
                    return n.asm.D.apply(null, arguments);
                  }),
                ut =
                  (n._emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 =
                    function () {
                      return n.asm.E.apply(null, arguments);
                    }),
                yt = (n._emscripten_bind_btCollisionObject_setRestitution_1 =
                  function () {
                    return n.asm.F.apply(null, arguments);
                  }),
                bt = (n._emscripten_bind_btCollisionObject_setFriction_1 =
                  function () {
                    return n.asm.G.apply(null, arguments);
                  }),
                ft =
                  (n._emscripten_bind_btCollisionObject_setRollingFriction_1 =
                    function () {
                      return n.asm.H.apply(null, arguments);
                    }),
                mt =
                  (n._emscripten_bind_btCollisionObject_setSpinningFriction_1 =
                    function () {
                      return n.asm.I.apply(null, arguments);
                    }),
                dt = (n._emscripten_bind_btCollisionObject_getWorldTransform_0 =
                  function () {
                    return n.asm.J.apply(null, arguments);
                  }),
                ht = (n._emscripten_bind_btCollisionObject_getCollisionFlags_0 =
                  function () {
                    return n.asm.K.apply(null, arguments);
                  }),
                gt = (n._emscripten_bind_btCollisionObject_setCollisionFlags_1 =
                  function () {
                    return n.asm.L.apply(null, arguments);
                  }),
                jt = (n._emscripten_bind_btCollisionObject_setWorldTransform_1 =
                  function () {
                    return n.asm.M.apply(null, arguments);
                  }),
                Ct = (n._emscripten_bind_btCollisionObject_setCollisionShape_1 =
                  function () {
                    return n.asm.N.apply(null, arguments);
                  }),
                vt =
                  (n._emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 =
                    function () {
                      return n.asm.O.apply(null, arguments);
                    }),
                St =
                  (n._emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 =
                    function () {
                      return n.asm.P.apply(null, arguments);
                    }),
                Ot = (n._emscripten_bind_btCollisionObject_getUserIndex_0 =
                  function () {
                    return n.asm.Q.apply(null, arguments);
                  }),
                It = (n._emscripten_bind_btCollisionObject_setUserIndex_1 =
                  function () {
                    return n.asm.R.apply(null, arguments);
                  }),
                Pt = (n._emscripten_bind_btCollisionObject_setUserIndex2_1 =
                  function () {
                    return n.asm.S.apply(null, arguments);
                  }),
                Tt =
                  (n._emscripten_bind_btCollisionObject_setIgnoreCollisionCheck_2 =
                    function () {
                      return n.asm.T.apply(null, arguments);
                    }),
                Rt = (n._emscripten_bind_btCollisionObject___destroy___0 =
                  function () {
                    return n.asm.U.apply(null, arguments);
                  }),
                Dt = (n._emscripten_bind_btConvexShape_setLocalScaling_1 =
                  function () {
                    return n.asm.V.apply(null, arguments);
                  }),
                Bt = (n._emscripten_bind_btConvexShape_getLocalScaling_0 =
                  function () {
                    return n.asm.W.apply(null, arguments);
                  }),
                xt = (n._emscripten_bind_btConvexShape_calculateLocalInertia_2 =
                  function () {
                    return n.asm.X.apply(null, arguments);
                  }),
                At = (n._emscripten_bind_btConvexShape_setMargin_1 =
                  function () {
                    return n.asm.Y.apply(null, arguments);
                  }),
                Mt = (n._emscripten_bind_btConvexShape_getMargin_0 =
                  function () {
                    return n.asm.Z.apply(null, arguments);
                  }),
                Lt = (n._emscripten_bind_btConvexShape_isCompound_0 =
                  function () {
                    return n.asm._.apply(null, arguments);
                  }),
                kt = (n._emscripten_bind_btConvexShape_getUserIndex_0 =
                  function () {
                    return n.asm.$.apply(null, arguments);
                  }),
                Ft = (n._emscripten_bind_btConvexShape_setUserIndex_1 =
                  function () {
                    return n.asm.aa.apply(null, arguments);
                  }),
                Wt = (n._emscripten_bind_btConvexShape_getAabb_3 = function () {
                  return n.asm.ba.apply(null, arguments);
                }),
                Gt =
                  (n._emscripten_bind_btConvexShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.ca.apply(null, arguments);
                    }),
                Ut = (n._emscripten_bind_btConvexShape___destroy___0 =
                  function () {
                    return n.asm.da.apply(null, arguments);
                  }),
                wt = (n._emscripten_bind_btConcaveShape_setLocalScaling_1 =
                  function () {
                    return n.asm.ea.apply(null, arguments);
                  }),
                Ht = (n._emscripten_bind_btConcaveShape_getLocalScaling_0 =
                  function () {
                    return n.asm.fa.apply(null, arguments);
                  }),
                qt =
                  (n._emscripten_bind_btConcaveShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.ga.apply(null, arguments);
                    }),
                Kt = (n._emscripten_bind_btConcaveShape_isCompound_0 =
                  function () {
                    return n.asm.ha.apply(null, arguments);
                  }),
                Et = (n._emscripten_bind_btConcaveShape_getUserIndex_0 =
                  function () {
                    return n.asm.ia.apply(null, arguments);
                  }),
                Nt = (n._emscripten_bind_btConcaveShape_setUserIndex_1 =
                  function () {
                    return n.asm.ja.apply(null, arguments);
                  }),
                Vt = (n._emscripten_bind_btConcaveShape_getAabb_3 =
                  function () {
                    return n.asm.ka.apply(null, arguments);
                  }),
                zt =
                  (n._emscripten_bind_btConcaveShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.la.apply(null, arguments);
                    }),
                Qt = (n._emscripten_bind_btConcaveShape___destroy___0 =
                  function () {
                    return n.asm.ma.apply(null, arguments);
                  }),
                Yt = (n._emscripten_bind_btCollisionWorld_getDispatcher_0 =
                  function () {
                    return n.asm.na.apply(null, arguments);
                  }),
                Jt = (n._emscripten_bind_btCollisionWorld_rayTest_3 =
                  function () {
                    return n.asm.oa.apply(null, arguments);
                  }),
                Xt = (n._emscripten_bind_btCollisionWorld_rayTestSingle_6 =
                  function () {
                    return n.asm.pa.apply(null, arguments);
                  }),
                Zt = (n._emscripten_bind_btCollisionWorld_getPairCache_0 =
                  function () {
                    return n.asm.qa.apply(null, arguments);
                  }),
                $t = (n._emscripten_bind_btCollisionWorld_addCollisionObject_1 =
                  function () {
                    return n.asm.ra.apply(null, arguments);
                  }),
                te = (n._emscripten_bind_btCollisionWorld_addCollisionObject_2 =
                  function () {
                    return n.asm.sa.apply(null, arguments);
                  }),
                ee = (n._emscripten_bind_btCollisionWorld_addCollisionObject_3 =
                  function () {
                    return n.asm.ta.apply(null, arguments);
                  }),
                ne =
                  (n._emscripten_bind_btCollisionWorld_removeCollisionObject_1 =
                    function () {
                      return n.asm.ua.apply(null, arguments);
                    }),
                oe =
                  (n._emscripten_bind_btCollisionWorld_setContactBreakingThreshold_1 =
                    function () {
                      return n.asm.va.apply(null, arguments);
                    }),
                pe = (n._emscripten_bind_btCollisionWorld___destroy___0 =
                  function () {
                    return n.asm.wa.apply(null, arguments);
                  }),
                re = (n._emscripten_bind_btTypedConstraint_enableFeedback_1 =
                  function () {
                    return n.asm.xa.apply(null, arguments);
                  }),
                ie =
                  (n._emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.ya.apply(null, arguments);
                    }),
                ce =
                  (n._emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.za.apply(null, arguments);
                    }),
                _e = (n._emscripten_bind_btTypedConstraint_getParam_2 =
                  function () {
                    return n.asm.Aa.apply(null, arguments);
                  }),
                ae = (n._emscripten_bind_btTypedConstraint_setParam_3 =
                  function () {
                    return n.asm.Ba.apply(null, arguments);
                  }),
                se = (n._emscripten_bind_btTypedConstraint___destroy___0 =
                  function () {
                    return n.asm.Ca.apply(null, arguments);
                  }),
                le =
                  (n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 =
                    function () {
                      return n.asm.Da.apply(null, arguments);
                    }),
                ue =
                  (n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 =
                    function () {
                      return n.asm.Ea.apply(null, arguments);
                    }),
                ye =
                  (n._emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 =
                    function () {
                      return n.asm.Fa.apply(null, arguments);
                    }),
                be =
                  (n._emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 =
                    function () {
                      return n.asm.Ga.apply(null, arguments);
                    }),
                fe =
                  (n._emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 =
                    function () {
                      return n.asm.Ha.apply(null, arguments);
                    }),
                me =
                  (n._emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 =
                    function () {
                      return n.asm.Ia.apply(null, arguments);
                    }),
                de =
                  (n._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 =
                    function () {
                      return n.asm.Ja.apply(null, arguments);
                    }),
                he =
                  (n._emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 =
                    function () {
                      return n.asm.Ka.apply(null, arguments);
                    }),
                ge =
                  (n._emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.La.apply(null, arguments);
                    }),
                je =
                  (n._emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.Ma.apply(null, arguments);
                    }),
                Ce = (n._emscripten_bind_btGeneric6DofConstraint_getParam_2 =
                  function () {
                    return n.asm.Na.apply(null, arguments);
                  }),
                ve = (n._emscripten_bind_btGeneric6DofConstraint_setParam_3 =
                  function () {
                    return n.asm.Oa.apply(null, arguments);
                  }),
                Se = (n._emscripten_bind_btGeneric6DofConstraint___destroy___0 =
                  function () {
                    return n.asm.Pa.apply(null, arguments);
                  }),
                Oe = (n._emscripten_bind_btStridingMeshInterface_setScaling_1 =
                  function () {
                    return n.asm.Qa.apply(null, arguments);
                  }),
                Ie = (n._emscripten_bind_btStridingMeshInterface___destroy___0 =
                  function () {
                    return n.asm.Ra.apply(null, arguments);
                  }),
                Pe =
                  (n._emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 =
                    function () {
                      return n.asm.Sa.apply(null, arguments);
                    }),
                Te = (n._emscripten_bind_btBroadphaseInterface___destroy___0 =
                  function () {
                    return n.asm.Ta.apply(null, arguments);
                  }),
                Re = (n._emscripten_bind_btMotionState_getWorldTransform_1 =
                  function () {
                    return n.asm.Ua.apply(null, arguments);
                  }),
                De = (n._emscripten_bind_btMotionState_setWorldTransform_1 =
                  function () {
                    return n.asm.Va.apply(null, arguments);
                  }),
                Be = (n._emscripten_bind_btMotionState___destroy___0 =
                  function () {
                    return n.asm.Wa.apply(null, arguments);
                  }),
                xe =
                  (n._emscripten_bind_btConvexInternalShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.Xa.apply(null, arguments);
                    }),
                Ae =
                  (n._emscripten_bind_btConvexInternalShape_setLocalScaling_1 =
                    function () {
                      return n.asm.Ya.apply(null, arguments);
                    }),
                Me =
                  (n._emscripten_bind_btConvexInternalShape_getLocalScaling_0 =
                    function () {
                      return n.asm.Za.apply(null, arguments);
                    }),
                Le =
                  (n._emscripten_bind_btConvexInternalShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm._a.apply(null, arguments);
                    }),
                ke = (n._emscripten_bind_btConvexInternalShape_setMargin_1 =
                  function () {
                    return n.asm.$a.apply(null, arguments);
                  }),
                Fe = (n._emscripten_bind_btConvexInternalShape_getMargin_0 =
                  function () {
                    return n.asm.ab.apply(null, arguments);
                  }),
                We = (n._emscripten_bind_btConvexInternalShape_isCompound_0 =
                  function () {
                    return n.asm.bb.apply(null, arguments);
                  }),
                Ge = (n._emscripten_bind_btConvexInternalShape_getUserIndex_0 =
                  function () {
                    return n.asm.cb.apply(null, arguments);
                  }),
                Ue = (n._emscripten_bind_btConvexInternalShape_setUserIndex_1 =
                  function () {
                    return n.asm.db.apply(null, arguments);
                  }),
                we = (n._emscripten_bind_btConvexInternalShape_getAabb_3 =
                  function () {
                    return n.asm.eb.apply(null, arguments);
                  }),
                He =
                  (n._emscripten_bind_btConvexInternalShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.fb.apply(null, arguments);
                    }),
                qe = (n._emscripten_bind_btConvexInternalShape___destroy___0 =
                  function () {
                    return n.asm.gb.apply(null, arguments);
                  }),
                Ke = (n._emscripten_bind_btDynamicsWorld_addAction_1 =
                  function () {
                    return n.asm.hb.apply(null, arguments);
                  }),
                Ee = (n._emscripten_bind_btDynamicsWorld_removeAction_1 =
                  function () {
                    return n.asm.ib.apply(null, arguments);
                  }),
                Ne = (n._emscripten_bind_btDynamicsWorld_getSolverInfo_0 =
                  function () {
                    return n.asm.jb.apply(null, arguments);
                  }),
                Ve = (n._emscripten_bind_btDynamicsWorld_getFixedBody_0 =
                  function () {
                    return n.asm.kb.apply(null, arguments);
                  }),
                ze = (n._emscripten_bind_btDynamicsWorld_getDispatcher_0 =
                  function () {
                    return n.asm.lb.apply(null, arguments);
                  }),
                Qe = (n._emscripten_bind_btDynamicsWorld_rayTest_3 =
                  function () {
                    return n.asm.mb.apply(null, arguments);
                  }),
                Ye = (n._emscripten_bind_btDynamicsWorld_rayTestSingle_6 =
                  function () {
                    return n.asm.nb.apply(null, arguments);
                  }),
                Je = (n._emscripten_bind_btDynamicsWorld_getPairCache_0 =
                  function () {
                    return n.asm.ob.apply(null, arguments);
                  }),
                Xe = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_1 =
                  function () {
                    return n.asm.pb.apply(null, arguments);
                  }),
                Ze = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_2 =
                  function () {
                    return n.asm.qb.apply(null, arguments);
                  }),
                $e = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_3 =
                  function () {
                    return n.asm.rb.apply(null, arguments);
                  }),
                tn =
                  (n._emscripten_bind_btDynamicsWorld_removeCollisionObject_1 =
                    function () {
                      return n.asm.sb.apply(null, arguments);
                    }),
                en =
                  (n._emscripten_bind_btDynamicsWorld_setContactBreakingThreshold_1 =
                    function () {
                      return n.asm.tb.apply(null, arguments);
                    }),
                nn = (n._emscripten_bind_btDynamicsWorld___destroy___0 =
                  function () {
                    return n.asm.ub.apply(null, arguments);
                  }),
                on = (n._emscripten_bind_btDispatcher_getNumManifolds_0 =
                  function () {
                    return n.asm.vb.apply(null, arguments);
                  }),
                pn =
                  (n._emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 =
                    function () {
                      return n.asm.wb.apply(null, arguments);
                    }),
                rn = (n._emscripten_bind_btDispatcher___destroy___0 =
                  function () {
                    return n.asm.xb.apply(null, arguments);
                  }),
                cn = (n._emscripten_bind_RayResultCallback_hasHit_0 =
                  function () {
                    return n.asm.yb.apply(null, arguments);
                  }),
                _n = (n._emscripten_bind_RayResultCallback_setUseCC_1 =
                  function () {
                    return n.asm.zb.apply(null, arguments);
                  }),
                an =
                  (n._emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 =
                    function () {
                      return n.asm.Ab.apply(null, arguments);
                    }),
                sn =
                  (n._emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 =
                    function () {
                      return n.asm.Bb.apply(null, arguments);
                    }),
                ln =
                  (n._emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 =
                    function () {
                      return n.asm.Cb.apply(null, arguments);
                    }),
                un =
                  (n._emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 =
                    function () {
                      return n.asm.Db.apply(null, arguments);
                    }),
                yn = (n._emscripten_bind_RayResultCallback_get_m_shapePart_0 =
                  function () {
                    return n.asm.Eb.apply(null, arguments);
                  }),
                bn = (n._emscripten_bind_RayResultCallback_set_m_shapePart_1 =
                  function () {
                    return n.asm.Fb.apply(null, arguments);
                  }),
                fn =
                  (n._emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 =
                    function () {
                      return n.asm.Gb.apply(null, arguments);
                    }),
                mn =
                  (n._emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 =
                    function () {
                      return n.asm.Hb.apply(null, arguments);
                    }),
                dn =
                  (n._emscripten_bind_RayResultCallback_get_m_collisionObject_0 =
                    function () {
                      return n.asm.Ib.apply(null, arguments);
                    }),
                hn =
                  (n._emscripten_bind_RayResultCallback_set_m_collisionObject_1 =
                    function () {
                      return n.asm.Jb.apply(null, arguments);
                    }),
                gn = (n._emscripten_bind_RayResultCallback___destroy___0 =
                  function () {
                    return n.asm.Kb.apply(null, arguments);
                  }),
                jn = (n._emscripten_bind_btActionInterface_updateAction_2 =
                  function () {
                    return n.asm.Lb.apply(null, arguments);
                  }),
                Cn = (n._emscripten_bind_btActionInterface___destroy___0 =
                  function () {
                    return n.asm.Mb.apply(null, arguments);
                  }),
                vn = (n._emscripten_bind_btTriangleMeshShape_setLocalScaling_1 =
                  function () {
                    return n.asm.Nb.apply(null, arguments);
                  }),
                Sn = (n._emscripten_bind_btTriangleMeshShape_getLocalScaling_0 =
                  function () {
                    return n.asm.Ob.apply(null, arguments);
                  }),
                On =
                  (n._emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Pb.apply(null, arguments);
                    }),
                In = (n._emscripten_bind_btTriangleMeshShape_isCompound_0 =
                  function () {
                    return n.asm.Qb.apply(null, arguments);
                  }),
                Pn = (n._emscripten_bind_btTriangleMeshShape_getUserIndex_0 =
                  function () {
                    return n.asm.Rb.apply(null, arguments);
                  }),
                Tn = (n._emscripten_bind_btTriangleMeshShape_setUserIndex_1 =
                  function () {
                    return n.asm.Sb.apply(null, arguments);
                  }),
                Rn = (n._emscripten_bind_btTriangleMeshShape_getAabb_3 =
                  function () {
                    return n.asm.Tb.apply(null, arguments);
                  }),
                Dn =
                  (n._emscripten_bind_btTriangleMeshShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Ub.apply(null, arguments);
                    }),
                Bn = (n._emscripten_bind_btTriangleMeshShape___destroy___0 =
                  function () {
                    return n.asm.Vb.apply(null, arguments);
                  }),
                xn = (n._emscripten_bind_btGhostObject_btGhostObject_0 =
                  function () {
                    return n.asm.Wb.apply(null, arguments);
                  }),
                An =
                  (n._emscripten_bind_btGhostObject_getNumOverlappingObjects_0 =
                    function () {
                      return n.asm.Xb.apply(null, arguments);
                    }),
                Mn = (n._emscripten_bind_btGhostObject_getOverlappingObject_1 =
                  function () {
                    return n.asm.Yb.apply(null, arguments);
                  }),
                Ln =
                  (n._emscripten_bind_btGhostObject_setAnisotropicFriction_2 =
                    function () {
                      return n.asm.Zb.apply(null, arguments);
                    }),
                kn = (n._emscripten_bind_btGhostObject_getCollisionShape_0 =
                  function () {
                    return n.asm._b.apply(null, arguments);
                  }),
                Fn = (n._emscripten_bind_btGhostObject_getActivationState_0 =
                  function () {
                    return n.asm.$b.apply(null, arguments);
                  }),
                Wn = (n._emscripten_bind_btGhostObject_setActivationState_1 =
                  function () {
                    return n.asm.ac.apply(null, arguments);
                  }),
                Gn = (n._emscripten_bind_btGhostObject_forceActivationState_1 =
                  function () {
                    return n.asm.bc.apply(null, arguments);
                  }),
                Un = (n._emscripten_bind_btGhostObject_activate_0 =
                  function () {
                    return n.asm.cc.apply(null, arguments);
                  }),
                wn = (n._emscripten_bind_btGhostObject_activate_1 =
                  function () {
                    return n.asm.dc.apply(null, arguments);
                  }),
                Hn = (n._emscripten_bind_btGhostObject_isActive_0 =
                  function () {
                    return n.asm.ec.apply(null, arguments);
                  }),
                qn = (n._emscripten_bind_btGhostObject_isKinematicObject_0 =
                  function () {
                    return n.asm.fc.apply(null, arguments);
                  }),
                Kn = (n._emscripten_bind_btGhostObject_isStaticObject_0 =
                  function () {
                    return n.asm.gc.apply(null, arguments);
                  }),
                En =
                  (n._emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 =
                    function () {
                      return n.asm.hc.apply(null, arguments);
                    }),
                Nn = (n._emscripten_bind_btGhostObject_setRestitution_1 =
                  function () {
                    return n.asm.ic.apply(null, arguments);
                  }),
                Vn = (n._emscripten_bind_btGhostObject_setFriction_1 =
                  function () {
                    return n.asm.jc.apply(null, arguments);
                  }),
                zn = (n._emscripten_bind_btGhostObject_setRollingFriction_1 =
                  function () {
                    return n.asm.kc.apply(null, arguments);
                  }),
                Qn = (n._emscripten_bind_btGhostObject_setSpinningFriction_1 =
                  function () {
                    return n.asm.lc.apply(null, arguments);
                  }),
                Yn = (n._emscripten_bind_btGhostObject_getWorldTransform_0 =
                  function () {
                    return n.asm.mc.apply(null, arguments);
                  }),
                Jn = (n._emscripten_bind_btGhostObject_getCollisionFlags_0 =
                  function () {
                    return n.asm.nc.apply(null, arguments);
                  }),
                Xn = (n._emscripten_bind_btGhostObject_setCollisionFlags_1 =
                  function () {
                    return n.asm.oc.apply(null, arguments);
                  }),
                Zn = (n._emscripten_bind_btGhostObject_setWorldTransform_1 =
                  function () {
                    return n.asm.pc.apply(null, arguments);
                  }),
                $n = (n._emscripten_bind_btGhostObject_setCollisionShape_1 =
                  function () {
                    return n.asm.qc.apply(null, arguments);
                  }),
                to = (n._emscripten_bind_btGhostObject_setCcdMotionThreshold_1 =
                  function () {
                    return n.asm.rc.apply(null, arguments);
                  }),
                eo =
                  (n._emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 =
                    function () {
                      return n.asm.sc.apply(null, arguments);
                    }),
                no = (n._emscripten_bind_btGhostObject_getUserIndex_0 =
                  function () {
                    return n.asm.tc.apply(null, arguments);
                  }),
                oo = (n._emscripten_bind_btGhostObject_setUserIndex_1 =
                  function () {
                    return n.asm.uc.apply(null, arguments);
                  }),
                po = (n._emscripten_bind_btGhostObject_setUserIndex2_1 =
                  function () {
                    return n.asm.vc.apply(null, arguments);
                  }),
                ro =
                  (n._emscripten_bind_btGhostObject_setIgnoreCollisionCheck_2 =
                    function () {
                      return n.asm.wc.apply(null, arguments);
                    }),
                io = (n._emscripten_bind_btGhostObject___destroy___0 =
                  function () {
                    return n.asm.xc.apply(null, arguments);
                  }),
                co = (n._emscripten_bind_btOverlapFilterCallback___destroy___0 =
                  function () {
                    return n.asm.yc.apply(null, arguments);
                  }),
                _o = (n._emscripten_bind_btQuadWord_x_0 = function () {
                  return n.asm.zc.apply(null, arguments);
                }),
                ao = (n._emscripten_bind_btQuadWord_y_0 = function () {
                  return n.asm.Ac.apply(null, arguments);
                }),
                so = (n._emscripten_bind_btQuadWord_z_0 = function () {
                  return n.asm.Bc.apply(null, arguments);
                }),
                lo = (n._emscripten_bind_btQuadWord_w_0 = function () {
                  return n.asm.Cc.apply(null, arguments);
                }),
                uo = (n._emscripten_bind_btQuadWord_setX_1 = function () {
                  return n.asm.Dc.apply(null, arguments);
                }),
                yo = (n._emscripten_bind_btQuadWord_setY_1 = function () {
                  return n.asm.Ec.apply(null, arguments);
                }),
                bo = (n._emscripten_bind_btQuadWord_setZ_1 = function () {
                  return n.asm.Fc.apply(null, arguments);
                }),
                fo = (n._emscripten_bind_btQuadWord_setW_1 = function () {
                  return n.asm.Gc.apply(null, arguments);
                }),
                mo = (n._emscripten_bind_btQuadWord___destroy___0 =
                  function () {
                    return n.asm.Hc.apply(null, arguments);
                  }),
                ho = (n._emscripten_bind_btMatrix3x3_getRotation_1 =
                  function () {
                    return n.asm.Ic.apply(null, arguments);
                  }),
                go = (n._emscripten_bind_btMatrix3x3___destroy___0 =
                  function () {
                    return n.asm.Jc.apply(null, arguments);
                  }),
                jo = (n._emscripten_bind_btScalarArray_size_0 = function () {
                  return n.asm.Kc.apply(null, arguments);
                }),
                Co = (n._emscripten_bind_btScalarArray_at_1 = function () {
                  return n.asm.Lc.apply(null, arguments);
                }),
                vo = (n._emscripten_bind_btScalarArray_clear_0 = function () {
                  return n.asm.Mc.apply(null, arguments);
                }),
                So = (n._emscripten_bind_btScalarArray___destroy___0 =
                  function () {
                    return n.asm.Nc.apply(null, arguments);
                  }),
                Oo =
                  (n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 =
                    function () {
                      return n.asm.Oc.apply(null, arguments);
                    }),
                Io =
                  (n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 =
                    function () {
                      return n.asm.Pc.apply(null, arguments);
                    }),
                Po =
                  (n._emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1 =
                    function () {
                      return n.asm.Qc.apply(null, arguments);
                    }),
                To =
                  (n._emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0 =
                    function () {
                      return n.asm.Rc.apply(null, arguments);
                    }),
                Ro =
                  (n._emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Sc.apply(null, arguments);
                    }),
                Do = (n._emscripten_bind_btBvhTriangleMeshShape_isCompound_0 =
                  function () {
                    return n.asm.Tc.apply(null, arguments);
                  }),
                Bo = (n._emscripten_bind_btBvhTriangleMeshShape_getUserIndex_0 =
                  function () {
                    return n.asm.Uc.apply(null, arguments);
                  }),
                xo = (n._emscripten_bind_btBvhTriangleMeshShape_setUserIndex_1 =
                  function () {
                    return n.asm.Vc.apply(null, arguments);
                  }),
                Ao = (n._emscripten_bind_btBvhTriangleMeshShape_getAabb_3 =
                  function () {
                    return n.asm.Wc.apply(null, arguments);
                  }),
                Mo =
                  (n._emscripten_bind_btBvhTriangleMeshShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Xc.apply(null, arguments);
                    }),
                Lo = (n._emscripten_bind_btBvhTriangleMeshShape___destroy___0 =
                  function () {
                    return n.asm.Yc.apply(null, arguments);
                  }),
                ko = (n._emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 =
                  function () {
                    return n.asm.Zc.apply(null, arguments);
                  }),
                Fo =
                  (n._emscripten_bind_btDbvtBroadphase_getOverlappingPairCache_0 =
                    function () {
                      return n.asm._c.apply(null, arguments);
                    }),
                Wo = (n._emscripten_bind_btDbvtBroadphase___destroy___0 =
                  function () {
                    return n.asm.$c.apply(null, arguments);
                  }),
                Go = (n._emscripten_bind_btIntArray_size_0 = function () {
                  return n.asm.ad.apply(null, arguments);
                }),
                Uo = (n._emscripten_bind_btIntArray_at_1 = function () {
                  return n.asm.bd.apply(null, arguments);
                }),
                wo = (n._emscripten_bind_btIntArray_clear_0 = function () {
                  return n.asm.cd.apply(null, arguments);
                }),
                Ho = (n._emscripten_bind_btIntArray___destroy___0 =
                  function () {
                    return n.asm.dd.apply(null, arguments);
                  }),
                qo = (n._emscripten_bind_btConstCollisionObjectArray_size_0 =
                  function () {
                    return n.asm.ed.apply(null, arguments);
                  }),
                Ko = (n._emscripten_bind_btConstCollisionObjectArray_at_1 =
                  function () {
                    return n.asm.fd.apply(null, arguments);
                  }),
                Eo = (n._emscripten_bind_btConstCollisionObjectArray_clear_0 =
                  function () {
                    return n.asm.gd.apply(null, arguments);
                  }),
                No =
                  (n._emscripten_bind_btConstCollisionObjectArray___destroy___0 =
                    function () {
                      return n.asm.hd.apply(null, arguments);
                    }),
                Vo =
                  (n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 =
                    function () {
                      return n.asm.id.apply(null, arguments);
                    }),
                zo =
                  (n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 =
                    function () {
                      return n.asm.jd.apply(null, arguments);
                    }),
                Qo =
                  (n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 =
                    function () {
                      return n.asm.kd.apply(null, arguments);
                    }),
                Yo =
                  (n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 =
                    function () {
                      return n.asm.ld.apply(null, arguments);
                    }),
                Jo = (n._emscripten_bind_btBroadphaseProxy___destroy___0 =
                  function () {
                    return n.asm.md.apply(null, arguments);
                  }),
                Xo =
                  (n._emscripten_bind_btSliderConstraint_btSliderConstraint_3 =
                    function () {
                      return n.asm.nd.apply(null, arguments);
                    }),
                Zo =
                  (n._emscripten_bind_btSliderConstraint_btSliderConstraint_5 =
                    function () {
                      return n.asm.od.apply(null, arguments);
                    }),
                $o = (n._emscripten_bind_btSliderConstraint_setLowerLinLimit_1 =
                  function () {
                    return n.asm.pd.apply(null, arguments);
                  }),
                tp = (n._emscripten_bind_btSliderConstraint_setUpperLinLimit_1 =
                  function () {
                    return n.asm.qd.apply(null, arguments);
                  }),
                ep = (n._emscripten_bind_btSliderConstraint_setLowerAngLimit_1 =
                  function () {
                    return n.asm.rd.apply(null, arguments);
                  }),
                np = (n._emscripten_bind_btSliderConstraint_setUpperAngLimit_1 =
                  function () {
                    return n.asm.sd.apply(null, arguments);
                  }),
                op = (n._emscripten_bind_btSliderConstraint_enableFeedback_1 =
                  function () {
                    return n.asm.td.apply(null, arguments);
                  }),
                pp =
                  (n._emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.ud.apply(null, arguments);
                    }),
                rp =
                  (n._emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.vd.apply(null, arguments);
                    }),
                ip = (n._emscripten_bind_btSliderConstraint_getParam_2 =
                  function () {
                    return n.asm.wd.apply(null, arguments);
                  }),
                cp = (n._emscripten_bind_btSliderConstraint_setParam_3 =
                  function () {
                    return n.asm.xd.apply(null, arguments);
                  }),
                _p = (n._emscripten_bind_btSliderConstraint___destroy___0 =
                  function () {
                    return n.asm.yd.apply(null, arguments);
                  }),
                ap = (n._emscripten_bind_btIndexedMesh_get_m_numTriangles_0 =
                  function () {
                    return n.asm.zd.apply(null, arguments);
                  }),
                sp = (n._emscripten_bind_btIndexedMesh_set_m_numTriangles_1 =
                  function () {
                    return n.asm.Ad.apply(null, arguments);
                  }),
                lp = (n._emscripten_bind_btIndexedMesh___destroy___0 =
                  function () {
                    return n.asm.Bd.apply(null, arguments);
                  }),
                up =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 =
                    function () {
                      return n.asm.Cd.apply(null, arguments);
                    }),
                yp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 =
                    function () {
                      return n.asm.Dd.apply(null, arguments);
                    }),
                bp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 =
                    function () {
                      return n.asm.Ed.apply(null, arguments);
                    }),
                fp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 =
                    function () {
                      return n.asm.Fd.apply(null, arguments);
                    }),
                mp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 =
                    function () {
                      return n.asm.Gd.apply(null, arguments);
                    }),
                dp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 =
                    function () {
                      return n.asm.Hd.apply(null, arguments);
                    }),
                hp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 =
                    function () {
                      return n.asm.Id.apply(null, arguments);
                    }),
                gp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 =
                    function () {
                      return n.asm.Jd.apply(null, arguments);
                    }),
                jp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 =
                    function () {
                      return n.asm.Kd.apply(null, arguments);
                    }),
                Cp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 =
                    function () {
                      return n.asm.Ld.apply(null, arguments);
                    }),
                vp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 =
                    function () {
                      return n.asm.Md.apply(null, arguments);
                    }),
                Sp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 =
                    function () {
                      return n.asm.Nd.apply(null, arguments);
                    }),
                Op =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 =
                    function () {
                      return n.asm.Od.apply(null, arguments);
                    }),
                Ip =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 =
                    function () {
                      return n.asm.Pd.apply(null, arguments);
                    }),
                Pp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 =
                    function () {
                      return n.asm.Qd.apply(null, arguments);
                    }),
                Tp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 =
                    function () {
                      return n.asm.Rd.apply(null, arguments);
                    }),
                Rp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 =
                    function () {
                      return n.asm.Sd.apply(null, arguments);
                    }),
                Dp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 =
                    function () {
                      return n.asm.Td.apply(null, arguments);
                    }),
                Bp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 =
                    function () {
                      return n.asm.Ud.apply(null, arguments);
                    }),
                xp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 =
                    function () {
                      return n.asm.Vd.apply(null, arguments);
                    }),
                Ap =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 =
                    function () {
                      return n.asm.Wd.apply(null, arguments);
                    }),
                Mp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 =
                    function () {
                      return n.asm.Xd.apply(null, arguments);
                    }),
                Lp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 =
                    function () {
                      return n.asm.Yd.apply(null, arguments);
                    }),
                kp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 =
                    function () {
                      return n.asm.Zd.apply(null, arguments);
                    }),
                Fp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 =
                    function () {
                      return n.asm._d.apply(null, arguments);
                    }),
                Wp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 =
                    function () {
                      return n.asm.$d.apply(null, arguments);
                    }),
                Gp =
                  (n._emscripten_bind_btRigidBodyConstructionInfo___destroy___0 =
                    function () {
                      return n.asm.ae.apply(null, arguments);
                    }),
                Up = (n._emscripten_bind_btManifoldPoint_getAppliedImpulse_0 =
                  function () {
                    return n.asm.be.apply(null, arguments);
                  }),
                wp = (n._emscripten_bind_btManifoldPoint_getDistance_0 =
                  function () {
                    return n.asm.ce.apply(null, arguments);
                  }),
                Hp = (n._emscripten_bind_btManifoldPoint_getShape0_0 =
                  function () {
                    return n.asm.de.apply(null, arguments);
                  }),
                qp = (n._emscripten_bind_btManifoldPoint_getShape1_0 =
                  function () {
                    return n.asm.ee.apply(null, arguments);
                  }),
                Kp = (n._emscripten_bind_btManifoldPoint_get_m_localPointA_0 =
                  function () {
                    return n.asm.fe.apply(null, arguments);
                  }),
                Ep = (n._emscripten_bind_btManifoldPoint_set_m_localPointA_1 =
                  function () {
                    return n.asm.ge.apply(null, arguments);
                  }),
                Np = (n._emscripten_bind_btManifoldPoint_get_m_localPointB_0 =
                  function () {
                    return n.asm.he.apply(null, arguments);
                  }),
                Vp = (n._emscripten_bind_btManifoldPoint_set_m_localPointB_1 =
                  function () {
                    return n.asm.ie.apply(null, arguments);
                  }),
                zp =
                  (n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 =
                    function () {
                      return n.asm.je.apply(null, arguments);
                    }),
                Qp =
                  (n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 =
                    function () {
                      return n.asm.ke.apply(null, arguments);
                    }),
                Yp =
                  (n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 =
                    function () {
                      return n.asm.le.apply(null, arguments);
                    }),
                Jp =
                  (n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 =
                    function () {
                      return n.asm.me.apply(null, arguments);
                    }),
                Xp =
                  (n._emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 =
                    function () {
                      return n.asm.ne.apply(null, arguments);
                    }),
                Zp =
                  (n._emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 =
                    function () {
                      return n.asm.oe.apply(null, arguments);
                    }),
                $p = (n._emscripten_bind_btManifoldPoint_get_m_distance1_0 =
                  function () {
                    return n.asm.pe.apply(null, arguments);
                  }),
                tr = (n._emscripten_bind_btManifoldPoint_set_m_distance1_1 =
                  function () {
                    return n.asm.qe.apply(null, arguments);
                  }),
                er = (n._emscripten_bind_btManifoldPoint_get_m_index0_0 =
                  function () {
                    return n.asm.re.apply(null, arguments);
                  }),
                nr = (n._emscripten_bind_btManifoldPoint_set_m_index0_1 =
                  function () {
                    return n.asm.se.apply(null, arguments);
                  }),
                or = (n._emscripten_bind_btManifoldPoint_get_m_index1_0 =
                  function () {
                    return n.asm.te.apply(null, arguments);
                  }),
                pr = (n._emscripten_bind_btManifoldPoint_set_m_index1_1 =
                  function () {
                    return n.asm.ue.apply(null, arguments);
                  }),
                rr =
                  (n._emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 =
                    function () {
                      return n.asm.ve.apply(null, arguments);
                    }),
                ir =
                  (n._emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 =
                    function () {
                      return n.asm.we.apply(null, arguments);
                    }),
                cr =
                  (n._emscripten_bind_btManifoldPoint_get_m_userPersistentData0_0 =
                    function () {
                      return n.asm.xe.apply(null, arguments);
                    }),
                _r =
                  (n._emscripten_bind_btManifoldPoint_set_m_userPersistentData0_1 =
                    function () {
                      return n.asm.ye.apply(null, arguments);
                    }),
                ar =
                  (n._emscripten_bind_btManifoldPoint_get_m_userPersistentData1_0 =
                    function () {
                      return n.asm.ze.apply(null, arguments);
                    }),
                sr =
                  (n._emscripten_bind_btManifoldPoint_set_m_userPersistentData1_1 =
                    function () {
                      return n.asm.Ae.apply(null, arguments);
                    }),
                lr = (n._emscripten_bind_btManifoldPoint___destroy___0 =
                  function () {
                    return n.asm.Be.apply(null, arguments);
                  }),
                ur =
                  (n._emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 =
                    function () {
                      return n.asm.Ce.apply(null, arguments);
                    }),
                yr =
                  (n._emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 =
                    function () {
                      return n.asm.De.apply(null, arguments);
                    }),
                br =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 =
                    function () {
                      return n.asm.Ee.apply(null, arguments);
                    }),
                fr = (n._emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 =
                  function () {
                    return n.asm.Fe.apply(null, arguments);
                  }),
                mr = (n._emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 =
                  function () {
                    return n.asm.Ge.apply(null, arguments);
                  }),
                dr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 =
                    function () {
                      return n.asm.He.apply(null, arguments);
                    }),
                hr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 =
                    function () {
                      return n.asm.Ie.apply(null, arguments);
                    }),
                gr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 =
                    function () {
                      return n.asm.Je.apply(null, arguments);
                    }),
                jr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 =
                    function () {
                      return n.asm.Ke.apply(null, arguments);
                    }),
                Cr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 =
                    function () {
                      return n.asm.Le.apply(null, arguments);
                    }),
                vr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 =
                    function () {
                      return n.asm.Me.apply(null, arguments);
                    }),
                Sr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 =
                    function () {
                      return n.asm.Ne.apply(null, arguments);
                    }),
                Or =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 =
                    function () {
                      return n.asm.Oe.apply(null, arguments);
                    }),
                Ir =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 =
                    function () {
                      return n.asm.Pe.apply(null, arguments);
                    }),
                Pr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 =
                    function () {
                      return n.asm.Qe.apply(null, arguments);
                    }),
                Tr = (n._emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 =
                  function () {
                    return n.asm.Re.apply(null, arguments);
                  }),
                Rr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_rayTestSingle_6 =
                    function () {
                      return n.asm.Se.apply(null, arguments);
                    }),
                Dr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_getPairCache_0 =
                    function () {
                      return n.asm.Te.apply(null, arguments);
                    }),
                Br =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 =
                    function () {
                      return n.asm.Ue.apply(null, arguments);
                    }),
                xr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 =
                    function () {
                      return n.asm.Ve.apply(null, arguments);
                    }),
                Ar =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 =
                    function () {
                      return n.asm.We.apply(null, arguments);
                    }),
                Mr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 =
                    function () {
                      return n.asm.Xe.apply(null, arguments);
                    }),
                Lr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_setContactBreakingThreshold_1 =
                    function () {
                      return n.asm.Ye.apply(null, arguments);
                    }),
                kr = (n._emscripten_bind_btDiscreteDynamicsWorld_addAction_1 =
                  function () {
                    return n.asm.Ze.apply(null, arguments);
                  }),
                Fr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 =
                    function () {
                      return n.asm._e.apply(null, arguments);
                    }),
                Wr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 =
                    function () {
                      return n.asm.$e.apply(null, arguments);
                    }),
                Gr =
                  (n._emscripten_bind_btDiscreteDynamicsWorld_getFixedBody_0 =
                    function () {
                      return n.asm.af.apply(null, arguments);
                    }),
                Ur = (n._emscripten_bind_btDiscreteDynamicsWorld___destroy___0 =
                  function () {
                    return n.asm.bf.apply(null, arguments);
                  }),
                wr =
                  (n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 =
                    function () {
                      return n.asm.cf.apply(null, arguments);
                    }),
                Hr =
                  (n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 =
                    function () {
                      return n.asm.df.apply(null, arguments);
                    }),
                qr = (n._emscripten_bind_btPoint2PointConstraint_setPivotA_1 =
                  function () {
                    return n.asm.ef.apply(null, arguments);
                  }),
                Kr = (n._emscripten_bind_btPoint2PointConstraint_setPivotB_1 =
                  function () {
                    return n.asm.ff.apply(null, arguments);
                  }),
                Er = (n._emscripten_bind_btPoint2PointConstraint_getPivotInA_0 =
                  function () {
                    return n.asm.gf.apply(null, arguments);
                  }),
                Nr = (n._emscripten_bind_btPoint2PointConstraint_getPivotInB_0 =
                  function () {
                    return n.asm.hf.apply(null, arguments);
                  }),
                Vr =
                  (n._emscripten_bind_btPoint2PointConstraint_enableFeedback_1 =
                    function () {
                      return n.asm.jf.apply(null, arguments);
                    }),
                zr =
                  (n._emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.kf.apply(null, arguments);
                    }),
                Qr =
                  (n._emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.lf.apply(null, arguments);
                    }),
                Yr = (n._emscripten_bind_btPoint2PointConstraint_getParam_2 =
                  function () {
                    return n.asm.mf.apply(null, arguments);
                  }),
                Jr = (n._emscripten_bind_btPoint2PointConstraint_setParam_3 =
                  function () {
                    return n.asm.nf.apply(null, arguments);
                  }),
                Xr =
                  (n._emscripten_bind_btPoint2PointConstraint_get_m_setting_0 =
                    function () {
                      return n.asm.of.apply(null, arguments);
                    }),
                Zr =
                  (n._emscripten_bind_btPoint2PointConstraint_set_m_setting_1 =
                    function () {
                      return n.asm.pf.apply(null, arguments);
                    }),
                $r = (n._emscripten_bind_btPoint2PointConstraint___destroy___0 =
                  function () {
                    return n.asm.qf.apply(null, arguments);
                  }),
                ti =
                  (n._emscripten_bind_ccOverlapFilterCallback_ccOverlapFilterCallback_0 =
                    function () {
                      return n.asm.rf.apply(null, arguments);
                    }),
                ei = (n._emscripten_bind_ccOverlapFilterCallback___destroy___0 =
                  function () {
                    return n.asm.sf.apply(null, arguments);
                  }),
                ni =
                  (n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 =
                    function () {
                      return n.asm.tf.apply(null, arguments);
                    }),
                oi =
                  (n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 =
                    function () {
                      return n.asm.uf.apply(null, arguments);
                    }),
                pi =
                  (n._emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 =
                    function () {
                      return n.asm.vf.apply(null, arguments);
                    }),
                ri =
                  (n._emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 =
                    function () {
                      return n.asm.wf.apply(null, arguments);
                    }),
                ii =
                  (n._emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.xf.apply(null, arguments);
                    }),
                ci = (n._emscripten_bind_btConvexTriangleMeshShape_setMargin_1 =
                  function () {
                    return n.asm.yf.apply(null, arguments);
                  }),
                _i = (n._emscripten_bind_btConvexTriangleMeshShape_getMargin_0 =
                  function () {
                    return n.asm.zf.apply(null, arguments);
                  }),
                ai =
                  (n._emscripten_bind_btConvexTriangleMeshShape_isCompound_0 =
                    function () {
                      return n.asm.Af.apply(null, arguments);
                    }),
                si =
                  (n._emscripten_bind_btConvexTriangleMeshShape_getUserIndex_0 =
                    function () {
                      return n.asm.Bf.apply(null, arguments);
                    }),
                li =
                  (n._emscripten_bind_btConvexTriangleMeshShape_setUserIndex_1 =
                    function () {
                      return n.asm.Cf.apply(null, arguments);
                    }),
                ui = (n._emscripten_bind_btConvexTriangleMeshShape_getAabb_3 =
                  function () {
                    return n.asm.Df.apply(null, arguments);
                  }),
                yi =
                  (n._emscripten_bind_btConvexTriangleMeshShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Ef.apply(null, arguments);
                    }),
                bi =
                  (n._emscripten_bind_btConvexTriangleMeshShape___destroy___0 =
                    function () {
                      return n.asm.Ff.apply(null, arguments);
                    }),
                fi =
                  (n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 =
                    function () {
                      return n.asm.Gf.apply(null, arguments);
                    }),
                mi =
                  (n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 =
                    function () {
                      return n.asm.Hf.apply(null, arguments);
                    }),
                di = (n._emscripten_bind_btConeTwistConstraint_setLimit_2 =
                  function () {
                    return n.asm.If.apply(null, arguments);
                  }),
                hi =
                  (n._emscripten_bind_btConeTwistConstraint_setAngularOnly_1 =
                    function () {
                      return n.asm.Jf.apply(null, arguments);
                    }),
                gi = (n._emscripten_bind_btConeTwistConstraint_setDamping_1 =
                  function () {
                    return n.asm.Kf.apply(null, arguments);
                  }),
                ji = (n._emscripten_bind_btConeTwistConstraint_enableMotor_1 =
                  function () {
                    return n.asm.Lf.apply(null, arguments);
                  }),
                Ci =
                  (n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 =
                    function () {
                      return n.asm.Mf.apply(null, arguments);
                    }),
                vi =
                  (n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 =
                    function () {
                      return n.asm.Nf.apply(null, arguments);
                    }),
                Si =
                  (n._emscripten_bind_btConeTwistConstraint_setMotorTarget_1 =
                    function () {
                      return n.asm.Of.apply(null, arguments);
                    }),
                Oi =
                  (n._emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 =
                    function () {
                      return n.asm.Pf.apply(null, arguments);
                    }),
                Ii =
                  (n._emscripten_bind_btConeTwistConstraint_enableFeedback_1 =
                    function () {
                      return n.asm.Qf.apply(null, arguments);
                    }),
                Pi =
                  (n._emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.Rf.apply(null, arguments);
                    }),
                Ti =
                  (n._emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.Sf.apply(null, arguments);
                    }),
                Ri = (n._emscripten_bind_btConeTwistConstraint_getParam_2 =
                  function () {
                    return n.asm.Tf.apply(null, arguments);
                  }),
                Di = (n._emscripten_bind_btConeTwistConstraint_setParam_3 =
                  function () {
                    return n.asm.Uf.apply(null, arguments);
                  }),
                Bi = (n._emscripten_bind_btConeTwistConstraint___destroy___0 =
                  function () {
                    return n.asm.Vf.apply(null, arguments);
                  }),
                xi = (n._emscripten_bind_btConeShape_btConeShape_2 =
                  function () {
                    return n.asm.Wf.apply(null, arguments);
                  }),
                Ai = (n._emscripten_bind_btConeShape_setRadius_1 = function () {
                  return n.asm.Xf.apply(null, arguments);
                }),
                Mi = (n._emscripten_bind_btConeShape_setHeight_1 = function () {
                  return n.asm.Yf.apply(null, arguments);
                }),
                Li = (n._emscripten_bind_btConeShape_setConeUpIndex_1 =
                  function () {
                    return n.asm.Zf.apply(null, arguments);
                  }),
                ki = (n._emscripten_bind_btConeShape_setLocalScaling_1 =
                  function () {
                    return n.asm._f.apply(null, arguments);
                  }),
                Fi = (n._emscripten_bind_btConeShape_getLocalScaling_0 =
                  function () {
                    return n.asm.$f.apply(null, arguments);
                  }),
                Wi = (n._emscripten_bind_btConeShape_calculateLocalInertia_2 =
                  function () {
                    return n.asm.ag.apply(null, arguments);
                  }),
                Gi = (n._emscripten_bind_btConeShape_isCompound_0 =
                  function () {
                    return n.asm.bg.apply(null, arguments);
                  }),
                Ui = (n._emscripten_bind_btConeShape_getUserIndex_0 =
                  function () {
                    return n.asm.cg.apply(null, arguments);
                  }),
                wi = (n._emscripten_bind_btConeShape_setUserIndex_1 =
                  function () {
                    return n.asm.dg.apply(null, arguments);
                  }),
                Hi = (n._emscripten_bind_btConeShape_getAabb_3 = function () {
                  return n.asm.eg.apply(null, arguments);
                }),
                qi = (n._emscripten_bind_btConeShape_getLocalBoundingSphere_0 =
                  function () {
                    return n.asm.fg.apply(null, arguments);
                  }),
                Ki =
                  (n._emscripten_bind_btConeShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.gg.apply(null, arguments);
                    }),
                Ei = (n._emscripten_bind_btConeShape___destroy___0 =
                  function () {
                    return n.asm.hg.apply(null, arguments);
                  }),
                Ni =
                  (n._emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 =
                    function () {
                      return n.asm.ig.apply(null, arguments);
                    }),
                Vi = (n._emscripten_bind_btHeightfieldTerrainShape_setMargin_1 =
                  function () {
                    return n.asm.jg.apply(null, arguments);
                  }),
                zi = (n._emscripten_bind_btHeightfieldTerrainShape_getMargin_0 =
                  function () {
                    return n.asm.kg.apply(null, arguments);
                  }),
                Qi =
                  (n._emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1 =
                    function () {
                      return n.asm.lg.apply(null, arguments);
                    }),
                Yi =
                  (n._emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0 =
                    function () {
                      return n.asm.mg.apply(null, arguments);
                    }),
                Ji =
                  (n._emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.ng.apply(null, arguments);
                    }),
                Xi =
                  (n._emscripten_bind_btHeightfieldTerrainShape_isCompound_0 =
                    function () {
                      return n.asm.og.apply(null, arguments);
                    }),
                Zi =
                  (n._emscripten_bind_btHeightfieldTerrainShape_getUserIndex_0 =
                    function () {
                      return n.asm.pg.apply(null, arguments);
                    }),
                $i =
                  (n._emscripten_bind_btHeightfieldTerrainShape_setUserIndex_1 =
                    function () {
                      return n.asm.qg.apply(null, arguments);
                    }),
                tc = (n._emscripten_bind_btHeightfieldTerrainShape_getAabb_3 =
                  function () {
                    return n.asm.rg.apply(null, arguments);
                  }),
                ec =
                  (n._emscripten_bind_btHeightfieldTerrainShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.sg.apply(null, arguments);
                    }),
                nc =
                  (n._emscripten_bind_btHeightfieldTerrainShape___destroy___0 =
                    function () {
                      return n.asm.tg.apply(null, arguments);
                    }),
                oc = (n._emscripten_bind_VoidPtr___destroy___0 = function () {
                  return n.asm.ug.apply(null, arguments);
                }),
                pc =
                  (n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 =
                    function () {
                      return n.asm.vg.apply(null, arguments);
                    }),
                rc =
                  (n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 =
                    function () {
                      return n.asm.wg.apply(null, arguments);
                    }),
                ic =
                  (n._emscripten_bind_btDefaultCollisionConfiguration___destroy___0 =
                    function () {
                      return n.asm.xg.apply(null, arguments);
                    }),
                cc =
                  (n._emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 =
                    function () {
                      return n.asm.yg.apply(null, arguments);
                    }),
                _c =
                  (n._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 =
                    function () {
                      return n.asm.zg.apply(null, arguments);
                    }),
                ac =
                  (n._emscripten_bind_btPairCachingGhostObject_getCollisionShape_0 =
                    function () {
                      return n.asm.Ag.apply(null, arguments);
                    }),
                sc =
                  (n._emscripten_bind_btPairCachingGhostObject_getActivationState_0 =
                    function () {
                      return n.asm.Bg.apply(null, arguments);
                    }),
                lc =
                  (n._emscripten_bind_btPairCachingGhostObject_setActivationState_1 =
                    function () {
                      return n.asm.Cg.apply(null, arguments);
                    }),
                uc =
                  (n._emscripten_bind_btPairCachingGhostObject_forceActivationState_1 =
                    function () {
                      return n.asm.Dg.apply(null, arguments);
                    }),
                yc = (n._emscripten_bind_btPairCachingGhostObject_activate_0 =
                  function () {
                    return n.asm.Eg.apply(null, arguments);
                  }),
                bc = (n._emscripten_bind_btPairCachingGhostObject_activate_1 =
                  function () {
                    return n.asm.Fg.apply(null, arguments);
                  }),
                fc = (n._emscripten_bind_btPairCachingGhostObject_isActive_0 =
                  function () {
                    return n.asm.Gg.apply(null, arguments);
                  }),
                mc =
                  (n._emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 =
                    function () {
                      return n.asm.Hg.apply(null, arguments);
                    }),
                dc =
                  (n._emscripten_bind_btPairCachingGhostObject_isStaticObject_0 =
                    function () {
                      return n.asm.Ig.apply(null, arguments);
                    }),
                hc =
                  (n._emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 =
                    function () {
                      return n.asm.Jg.apply(null, arguments);
                    }),
                gc =
                  (n._emscripten_bind_btPairCachingGhostObject_setRestitution_1 =
                    function () {
                      return n.asm.Kg.apply(null, arguments);
                    }),
                jc =
                  (n._emscripten_bind_btPairCachingGhostObject_setFriction_1 =
                    function () {
                      return n.asm.Lg.apply(null, arguments);
                    }),
                Cc =
                  (n._emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 =
                    function () {
                      return n.asm.Mg.apply(null, arguments);
                    }),
                vc =
                  (n._emscripten_bind_btPairCachingGhostObject_setSpinningFriction_1 =
                    function () {
                      return n.asm.Ng.apply(null, arguments);
                    }),
                Sc =
                  (n._emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 =
                    function () {
                      return n.asm.Og.apply(null, arguments);
                    }),
                Oc =
                  (n._emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 =
                    function () {
                      return n.asm.Pg.apply(null, arguments);
                    }),
                Ic =
                  (n._emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 =
                    function () {
                      return n.asm.Qg.apply(null, arguments);
                    }),
                Pc =
                  (n._emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 =
                    function () {
                      return n.asm.Rg.apply(null, arguments);
                    }),
                Tc =
                  (n._emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 =
                    function () {
                      return n.asm.Sg.apply(null, arguments);
                    }),
                Rc =
                  (n._emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 =
                    function () {
                      return n.asm.Tg.apply(null, arguments);
                    }),
                Dc =
                  (n._emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 =
                    function () {
                      return n.asm.Ug.apply(null, arguments);
                    }),
                Bc =
                  (n._emscripten_bind_btPairCachingGhostObject_getUserIndex_0 =
                    function () {
                      return n.asm.Vg.apply(null, arguments);
                    }),
                xc =
                  (n._emscripten_bind_btPairCachingGhostObject_setUserIndex_1 =
                    function () {
                      return n.asm.Wg.apply(null, arguments);
                    }),
                Ac =
                  (n._emscripten_bind_btPairCachingGhostObject_setUserIndex2_1 =
                    function () {
                      return n.asm.Xg.apply(null, arguments);
                    }),
                Mc =
                  (n._emscripten_bind_btPairCachingGhostObject_setIgnoreCollisionCheck_2 =
                    function () {
                      return n.asm.Yg.apply(null, arguments);
                    }),
                Lc =
                  (n._emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 =
                    function () {
                      return n.asm.Zg.apply(null, arguments);
                    }),
                kc =
                  (n._emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 =
                    function () {
                      return n.asm._g.apply(null, arguments);
                    }),
                Fc =
                  (n._emscripten_bind_btPairCachingGhostObject___destroy___0 =
                    function () {
                      return n.asm.$g.apply(null, arguments);
                    }),
                Wc =
                  (n._emscripten_bind_btOverlappingPairCallback___destroy___0 =
                    function () {
                      return n.asm.ah.apply(null, arguments);
                    }),
                Gc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 =
                    function () {
                      return n.asm.bh.apply(null, arguments);
                    }),
                Uc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 =
                    function () {
                      return n.asm.ch.apply(null, arguments);
                    }),
                wc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 =
                    function () {
                      return n.asm.dh.apply(null, arguments);
                    }),
                Hc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 =
                    function () {
                      return n.asm.eh.apply(null, arguments);
                    }),
                qc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 =
                    function () {
                      return n.asm.fh.apply(null, arguments);
                    }),
                Kc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 =
                    function () {
                      return n.asm.gh.apply(null, arguments);
                    }),
                Ec =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 =
                    function () {
                      return n.asm.hh.apply(null, arguments);
                    }),
                Nc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 =
                    function () {
                      return n.asm.ih.apply(null, arguments);
                    }),
                Vc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 =
                    function () {
                      return n.asm.jh.apply(null, arguments);
                    }),
                zc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 =
                    function () {
                      return n.asm.kh.apply(null, arguments);
                    }),
                Qc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 =
                    function () {
                      return n.asm.lh.apply(null, arguments);
                    }),
                Yc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 =
                    function () {
                      return n.asm.mh.apply(null, arguments);
                    }),
                Jc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 =
                    function () {
                      return n.asm.nh.apply(null, arguments);
                    }),
                Xc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 =
                    function () {
                      return n.asm.oh.apply(null, arguments);
                    }),
                Zc =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.ph.apply(null, arguments);
                    }),
                $c =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.qh.apply(null, arguments);
                    }),
                t_ =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 =
                    function () {
                      return n.asm.rh.apply(null, arguments);
                    }),
                e_ =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 =
                    function () {
                      return n.asm.sh.apply(null, arguments);
                    }),
                n_ =
                  (n._emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 =
                    function () {
                      return n.asm.th.apply(null, arguments);
                    }),
                o_ = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_0 =
                  function () {
                    return n.asm.uh.apply(null, arguments);
                  }),
                p_ = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_1 =
                  function () {
                    return n.asm.vh.apply(null, arguments);
                  }),
                r_ = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_2 =
                  function () {
                    return n.asm.wh.apply(null, arguments);
                  }),
                i_ = (n._emscripten_bind_btTriangleMesh_addTriangle_3 =
                  function () {
                    return n.asm.xh.apply(null, arguments);
                  }),
                c_ = (n._emscripten_bind_btTriangleMesh_addTriangle_4 =
                  function () {
                    return n.asm.yh.apply(null, arguments);
                  }),
                __ = (n._emscripten_bind_btTriangleMesh_addTriangleIndices_3 =
                  function () {
                    return n.asm.zh.apply(null, arguments);
                  }),
                a_ = (n._emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 =
                  function () {
                    return n.asm.Ah.apply(null, arguments);
                  }),
                s_ = (n._emscripten_bind_btTriangleMesh_setScaling_1 =
                  function () {
                    return n.asm.Bh.apply(null, arguments);
                  }),
                l_ = (n._emscripten_bind_btTriangleMesh___destroy___0 =
                  function () {
                    return n.asm.Ch.apply(null, arguments);
                  }),
                u_ =
                  (n._emscripten_bind_btCollisionConfiguration___destroy___0 =
                    function () {
                      return n.asm.Dh.apply(null, arguments);
                    }),
                y_ =
                  (n._emscripten_bind_btPersistentManifold_btPersistentManifold_0 =
                    function () {
                      return n.asm.Eh.apply(null, arguments);
                    }),
                b_ = (n._emscripten_bind_btPersistentManifold_getBody0_0 =
                  function () {
                    return n.asm.Fh.apply(null, arguments);
                  }),
                f_ = (n._emscripten_bind_btPersistentManifold_getBody1_0 =
                  function () {
                    return n.asm.Gh.apply(null, arguments);
                  }),
                m_ = (n._emscripten_bind_btPersistentManifold_getNumContacts_0 =
                  function () {
                    return n.asm.Hh.apply(null, arguments);
                  }),
                d_ =
                  (n._emscripten_bind_btPersistentManifold_getContactPoint_1 =
                    function () {
                      return n.asm.Ih.apply(null, arguments);
                    }),
                h_ = (n._emscripten_bind_btPersistentManifold___destroy___0 =
                  function () {
                    return n.asm.Jh.apply(null, arguments);
                  }),
                g_ = (n._emscripten_bind_btBoxShape_btBoxShape_1 = function () {
                  return n.asm.Kh.apply(null, arguments);
                }),
                j_ = (n._emscripten_bind_btBoxShape_setMargin_1 = function () {
                  return n.asm.Lh.apply(null, arguments);
                }),
                C_ = (n._emscripten_bind_btBoxShape_getMargin_0 = function () {
                  return n.asm.Mh.apply(null, arguments);
                }),
                v_ = (n._emscripten_bind_btBoxShape_setUnscaledHalfExtents_1 =
                  function () {
                    return n.asm.Nh.apply(null, arguments);
                  }),
                S_ = (n._emscripten_bind_btBoxShape_setLocalScaling_1 =
                  function () {
                    return n.asm.Oh.apply(null, arguments);
                  }),
                O_ = (n._emscripten_bind_btBoxShape_getLocalScaling_0 =
                  function () {
                    return n.asm.Ph.apply(null, arguments);
                  }),
                I_ = (n._emscripten_bind_btBoxShape_calculateLocalInertia_2 =
                  function () {
                    return n.asm.Qh.apply(null, arguments);
                  }),
                P_ = (n._emscripten_bind_btBoxShape_isCompound_0 = function () {
                  return n.asm.Rh.apply(null, arguments);
                }),
                T_ = (n._emscripten_bind_btBoxShape_getUserIndex_0 =
                  function () {
                    return n.asm.Sh.apply(null, arguments);
                  }),
                R_ = (n._emscripten_bind_btBoxShape_setUserIndex_1 =
                  function () {
                    return n.asm.Th.apply(null, arguments);
                  }),
                D_ = (n._emscripten_bind_btBoxShape_getAabb_3 = function () {
                  return n.asm.Uh.apply(null, arguments);
                }),
                B_ = (n._emscripten_bind_btBoxShape_getLocalBoundingSphere_0 =
                  function () {
                    return n.asm.Vh.apply(null, arguments);
                  }),
                x_ =
                  (n._emscripten_bind_btBoxShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.Wh.apply(null, arguments);
                    }),
                A_ = (n._emscripten_bind_btBoxShape___destroy___0 =
                  function () {
                    return n.asm.Xh.apply(null, arguments);
                  }),
                M_ = (n._emscripten_bind_btCapsuleShape_btCapsuleShape_2 =
                  function () {
                    return n.asm.Yh.apply(null, arguments);
                  }),
                L_ = (n._emscripten_bind_btCapsuleShape_setMargin_1 =
                  function () {
                    return n.asm.Zh.apply(null, arguments);
                  }),
                k_ = (n._emscripten_bind_btCapsuleShape_getMargin_0 =
                  function () {
                    return n.asm._h.apply(null, arguments);
                  }),
                F_ = (n._emscripten_bind_btCapsuleShape_updateProp_3 =
                  function () {
                    return n.asm.$h.apply(null, arguments);
                  }),
                W_ = (n._emscripten_bind_btCapsuleShape_setLocalScaling_1 =
                  function () {
                    return n.asm.ai.apply(null, arguments);
                  }),
                G_ = (n._emscripten_bind_btCapsuleShape_getLocalScaling_0 =
                  function () {
                    return n.asm.bi.apply(null, arguments);
                  }),
                U_ =
                  (n._emscripten_bind_btCapsuleShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.ci.apply(null, arguments);
                    }),
                w_ = (n._emscripten_bind_btCapsuleShape_isCompound_0 =
                  function () {
                    return n.asm.di.apply(null, arguments);
                  }),
                H_ = (n._emscripten_bind_btCapsuleShape_getUserIndex_0 =
                  function () {
                    return n.asm.ei.apply(null, arguments);
                  }),
                q_ = (n._emscripten_bind_btCapsuleShape_setUserIndex_1 =
                  function () {
                    return n.asm.fi.apply(null, arguments);
                  }),
                K_ = (n._emscripten_bind_btCapsuleShape_getAabb_3 =
                  function () {
                    return n.asm.gi.apply(null, arguments);
                  }),
                E_ =
                  (n._emscripten_bind_btCapsuleShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.hi.apply(null, arguments);
                    }),
                N_ =
                  (n._emscripten_bind_btCapsuleShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.ii.apply(null, arguments);
                    }),
                V_ = (n._emscripten_bind_btCapsuleShape___destroy___0 =
                  function () {
                    return n.asm.ji.apply(null, arguments);
                  }),
                z_ = (n._emscripten_bind_btCompoundShape_btCompoundShape_0 =
                  function () {
                    return n.asm.ki.apply(null, arguments);
                  }),
                Q_ = (n._emscripten_bind_btCompoundShape_btCompoundShape_1 =
                  function () {
                    return n.asm.li.apply(null, arguments);
                  }),
                Y_ = (n._emscripten_bind_btCompoundShape_addChildShape_2 =
                  function () {
                    return n.asm.mi.apply(null, arguments);
                  }),
                J_ = (n._emscripten_bind_btCompoundShape_removeChildShape_1 =
                  function () {
                    return n.asm.ni.apply(null, arguments);
                  }),
                X_ =
                  (n._emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 =
                    function () {
                      return n.asm.oi.apply(null, arguments);
                    }),
                Z_ = (n._emscripten_bind_btCompoundShape_getNumChildShapes_0 =
                  function () {
                    return n.asm.pi.apply(null, arguments);
                  }),
                $_ = (n._emscripten_bind_btCompoundShape_getChildShape_1 =
                  function () {
                    return n.asm.qi.apply(null, arguments);
                  }),
                ta =
                  (n._emscripten_bind_btCompoundShape_updateChildTransform_2 =
                    function () {
                      return n.asm.ri.apply(null, arguments);
                    }),
                ea =
                  (n._emscripten_bind_btCompoundShape_updateChildTransform_3 =
                    function () {
                      return n.asm.si.apply(null, arguments);
                    }),
                na = (n._emscripten_bind_btCompoundShape_setMargin_1 =
                  function () {
                    return n.asm.ti.apply(null, arguments);
                  }),
                oa = (n._emscripten_bind_btCompoundShape_getMargin_0 =
                  function () {
                    return n.asm.ui.apply(null, arguments);
                  }),
                pa = (n._emscripten_bind_btCompoundShape_setMaterial_3 =
                  function () {
                    return n.asm.vi.apply(null, arguments);
                  }),
                ra = (n._emscripten_bind_btCompoundShape_setMaterial_4 =
                  function () {
                    return n.asm.wi.apply(null, arguments);
                  }),
                ia = (n._emscripten_bind_btCompoundShape_setMaterial_5 =
                  function () {
                    return n.asm.xi.apply(null, arguments);
                  }),
                ca = (n._emscripten_bind_btCompoundShape_setMaterial_6 =
                  function () {
                    return n.asm.yi.apply(null, arguments);
                  }),
                _a = (n._emscripten_bind_btCompoundShape_setLocalScaling_1 =
                  function () {
                    return n.asm.zi.apply(null, arguments);
                  }),
                aa = (n._emscripten_bind_btCompoundShape_getLocalScaling_0 =
                  function () {
                    return n.asm.Ai.apply(null, arguments);
                  }),
                sa =
                  (n._emscripten_bind_btCompoundShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Bi.apply(null, arguments);
                    }),
                la = (n._emscripten_bind_btCompoundShape_isCompound_0 =
                  function () {
                    return n.asm.Ci.apply(null, arguments);
                  }),
                ua = (n._emscripten_bind_btCompoundShape_getUserIndex_0 =
                  function () {
                    return n.asm.Di.apply(null, arguments);
                  }),
                ya = (n._emscripten_bind_btCompoundShape_setUserIndex_1 =
                  function () {
                    return n.asm.Ei.apply(null, arguments);
                  }),
                ba = (n._emscripten_bind_btCompoundShape_getAabb_3 =
                  function () {
                    return n.asm.Fi.apply(null, arguments);
                  }),
                fa =
                  (n._emscripten_bind_btCompoundShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Gi.apply(null, arguments);
                    }),
                ma = (n._emscripten_bind_btCompoundShape___destroy___0 =
                  function () {
                    return n.asm.Hi.apply(null, arguments);
                  }),
                da =
                  (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 =
                    function () {
                      return n.asm.Ii.apply(null, arguments);
                    }),
                ha =
                  (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 =
                    function () {
                      return n.asm.Ji.apply(null, arguments);
                    }),
                ga =
                  (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 =
                    function () {
                      return n.asm.Ki.apply(null, arguments);
                    }),
                ja =
                  (n._emscripten_bind_btDefaultMotionState_getWorldTransform_1 =
                    function () {
                      return n.asm.Li.apply(null, arguments);
                    }),
                Ca =
                  (n._emscripten_bind_btDefaultMotionState_setWorldTransform_1 =
                    function () {
                      return n.asm.Mi.apply(null, arguments);
                    }),
                va = (n._emscripten_bind_btDefaultMotionState___destroy___0 =
                  function () {
                    return n.asm.Ni.apply(null, arguments);
                  }),
                Sa =
                  (n._emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 =
                    function () {
                      return n.asm.Oi.apply(null, arguments);
                    }),
                Oa = (n._emscripten_bind_AllHitsRayResultCallback_hasHit_0 =
                  function () {
                    return n.asm.Pi.apply(null, arguments);
                  }),
                Ia = (n._emscripten_bind_AllHitsRayResultCallback_setUseCC_1 =
                  function () {
                    return n.asm.Qi.apply(null, arguments);
                  }),
                Pa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 =
                    function () {
                      return n.asm.Ri.apply(null, arguments);
                    }),
                Ta =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 =
                    function () {
                      return n.asm.Si.apply(null, arguments);
                    }),
                Ra =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 =
                    function () {
                      return n.asm.Ti.apply(null, arguments);
                    }),
                Da =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 =
                    function () {
                      return n.asm.Ui.apply(null, arguments);
                    }),
                Ba =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 =
                    function () {
                      return n.asm.Vi.apply(null, arguments);
                    }),
                xa =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 =
                    function () {
                      return n.asm.Wi.apply(null, arguments);
                    }),
                Aa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 =
                    function () {
                      return n.asm.Xi.apply(null, arguments);
                    }),
                Ma =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 =
                    function () {
                      return n.asm.Yi.apply(null, arguments);
                    }),
                La =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 =
                    function () {
                      return n.asm.Zi.apply(null, arguments);
                    }),
                ka =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 =
                    function () {
                      return n.asm._i.apply(null, arguments);
                    }),
                Fa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 =
                    function () {
                      return n.asm.$i.apply(null, arguments);
                    }),
                Wa =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 =
                    function () {
                      return n.asm.aj.apply(null, arguments);
                    }),
                Ga =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_shapeParts_0 =
                    function () {
                      return n.asm.bj.apply(null, arguments);
                    }),
                Ua =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_shapeParts_1 =
                    function () {
                      return n.asm.cj.apply(null, arguments);
                    }),
                wa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 =
                    function () {
                      return n.asm.dj.apply(null, arguments);
                    }),
                Ha =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 =
                    function () {
                      return n.asm.ej.apply(null, arguments);
                    }),
                qa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 =
                    function () {
                      return n.asm.fj.apply(null, arguments);
                    }),
                Ka =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 =
                    function () {
                      return n.asm.gj.apply(null, arguments);
                    }),
                Ea =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_shapePart_0 =
                    function () {
                      return n.asm.hj.apply(null, arguments);
                    }),
                Na =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_shapePart_1 =
                    function () {
                      return n.asm.ij.apply(null, arguments);
                    }),
                Va =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 =
                    function () {
                      return n.asm.jj.apply(null, arguments);
                    }),
                za =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 =
                    function () {
                      return n.asm.kj.apply(null, arguments);
                    }),
                Qa =
                  (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 =
                    function () {
                      return n.asm.lj.apply(null, arguments);
                    }),
                Ya =
                  (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 =
                    function () {
                      return n.asm.mj.apply(null, arguments);
                    }),
                Ja =
                  (n._emscripten_bind_AllHitsRayResultCallback___destroy___0 =
                    function () {
                      return n.asm.nj.apply(null, arguments);
                    }),
                Xa =
                  (n._emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 =
                    function () {
                      return n.asm.oj.apply(null, arguments);
                    }),
                Za = (n._emscripten_bind_ClosestRayResultCallback_hasHit_0 =
                  function () {
                    return n.asm.pj.apply(null, arguments);
                  }),
                $a = (n._emscripten_bind_ClosestRayResultCallback_setUseCC_1 =
                  function () {
                    return n.asm.qj.apply(null, arguments);
                  }),
                ts =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 =
                    function () {
                      return n.asm.rj.apply(null, arguments);
                    }),
                es =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 =
                    function () {
                      return n.asm.sj.apply(null, arguments);
                    }),
                ns =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 =
                    function () {
                      return n.asm.tj.apply(null, arguments);
                    }),
                os =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 =
                    function () {
                      return n.asm.uj.apply(null, arguments);
                    }),
                ps =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 =
                    function () {
                      return n.asm.vj.apply(null, arguments);
                    }),
                rs =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 =
                    function () {
                      return n.asm.wj.apply(null, arguments);
                    }),
                is =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 =
                    function () {
                      return n.asm.xj.apply(null, arguments);
                    }),
                cs =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 =
                    function () {
                      return n.asm.yj.apply(null, arguments);
                    }),
                _s =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 =
                    function () {
                      return n.asm.zj.apply(null, arguments);
                    }),
                as =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 =
                    function () {
                      return n.asm.Aj.apply(null, arguments);
                    }),
                ss =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 =
                    function () {
                      return n.asm.Bj.apply(null, arguments);
                    }),
                ls =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 =
                    function () {
                      return n.asm.Cj.apply(null, arguments);
                    }),
                us =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_shapePart_0 =
                    function () {
                      return n.asm.Dj.apply(null, arguments);
                    }),
                ys =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_shapePart_1 =
                    function () {
                      return n.asm.Ej.apply(null, arguments);
                    }),
                bs =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 =
                    function () {
                      return n.asm.Fj.apply(null, arguments);
                    }),
                fs =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 =
                    function () {
                      return n.asm.Gj.apply(null, arguments);
                    }),
                ms =
                  (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 =
                    function () {
                      return n.asm.Hj.apply(null, arguments);
                    }),
                ds =
                  (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 =
                    function () {
                      return n.asm.Ij.apply(null, arguments);
                    }),
                hs =
                  (n._emscripten_bind_ClosestRayResultCallback___destroy___0 =
                    function () {
                      return n.asm.Jj.apply(null, arguments);
                    }),
                gs =
                  (n._emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_3 =
                    function () {
                      return n.asm.Kj.apply(null, arguments);
                    }),
                js =
                  (n._emscripten_bind_ccKinematicCharacterController_ccKinematicCharacterController_4 =
                    function () {
                      return n.asm.Lj.apply(null, arguments);
                    }),
                Cs =
                  (n._emscripten_bind_ccKinematicCharacterController_setUpAxis_1 =
                    function () {
                      return n.asm.Mj.apply(null, arguments);
                    }),
                vs =
                  (n._emscripten_bind_ccKinematicCharacterController_setWalkDirection_1 =
                    function () {
                      return n.asm.Nj.apply(null, arguments);
                    }),
                Ss =
                  (n._emscripten_bind_ccKinematicCharacterController_setVelocityForTimeInterval_2 =
                    function () {
                      return n.asm.Oj.apply(null, arguments);
                    }),
                Os = (n._emscripten_bind_ccKinematicCharacterController_warp_1 =
                  function () {
                    return n.asm.Pj.apply(null, arguments);
                  }),
                Is =
                  (n._emscripten_bind_ccKinematicCharacterController_preStep_1 =
                    function () {
                      return n.asm.Qj.apply(null, arguments);
                    }),
                Ps =
                  (n._emscripten_bind_ccKinematicCharacterController_playerStep_2 =
                    function () {
                      return n.asm.Rj.apply(null, arguments);
                    }),
                Ts =
                  (n._emscripten_bind_ccKinematicCharacterController_setFallSpeed_1 =
                    function () {
                      return n.asm.Sj.apply(null, arguments);
                    }),
                Rs =
                  (n._emscripten_bind_ccKinematicCharacterController_setJumpSpeed_1 =
                    function () {
                      return n.asm.Tj.apply(null, arguments);
                    }),
                Ds =
                  (n._emscripten_bind_ccKinematicCharacterController_setMaxJumpHeight_1 =
                    function () {
                      return n.asm.Uj.apply(null, arguments);
                    }),
                Bs =
                  (n._emscripten_bind_ccKinematicCharacterController_canJump_0 =
                    function () {
                      return n.asm.Vj.apply(null, arguments);
                    }),
                xs = (n._emscripten_bind_ccKinematicCharacterController_jump_0 =
                  function () {
                    return n.asm.Wj.apply(null, arguments);
                  }),
                As =
                  (n._emscripten_bind_ccKinematicCharacterController_setGravity_1 =
                    function () {
                      return n.asm.Xj.apply(null, arguments);
                    }),
                Ms =
                  (n._emscripten_bind_ccKinematicCharacterController_getGravity_0 =
                    function () {
                      return n.asm.Yj.apply(null, arguments);
                    }),
                Ls =
                  (n._emscripten_bind_ccKinematicCharacterController_setMaxSlope_1 =
                    function () {
                      return n.asm.Zj.apply(null, arguments);
                    }),
                ks =
                  (n._emscripten_bind_ccKinematicCharacterController_getMaxSlope_0 =
                    function () {
                      return n.asm._j.apply(null, arguments);
                    }),
                Fs =
                  (n._emscripten_bind_ccKinematicCharacterController_getGhostObject_0 =
                    function () {
                      return n.asm.$j.apply(null, arguments);
                    }),
                Ws =
                  (n._emscripten_bind_ccKinematicCharacterController_setUseGhostSweepTest_1 =
                    function () {
                      return n.asm.ak.apply(null, arguments);
                    }),
                Gs =
                  (n._emscripten_bind_ccKinematicCharacterController_onGround_0 =
                    function () {
                      return n.asm.bk.apply(null, arguments);
                    }),
                Us =
                  (n._emscripten_bind_ccKinematicCharacterController_setUpInterpolate_1 =
                    function () {
                      return n.asm.ck.apply(null, arguments);
                    }),
                ws =
                  (n._emscripten_bind_ccKinematicCharacterController_updateAction_2 =
                    function () {
                      return n.asm.dk.apply(null, arguments);
                    }),
                Hs =
                  (n._emscripten_bind_ccKinematicCharacterController___destroy___0 =
                    function () {
                      return n.asm.ek.apply(null, arguments);
                    }),
                qs = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_2 =
                  function () {
                    return n.asm.fk.apply(null, arguments);
                  }),
                Ks = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_3 =
                  function () {
                    return n.asm.gk.apply(null, arguments);
                  }),
                Es = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_4 =
                  function () {
                    return n.asm.hk.apply(null, arguments);
                  }),
                Ns = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_5 =
                  function () {
                    return n.asm.ik.apply(null, arguments);
                  }),
                Vs = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_6 =
                  function () {
                    return n.asm.jk.apply(null, arguments);
                  }),
                zs = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_7 =
                  function () {
                    return n.asm.kk.apply(null, arguments);
                  }),
                Qs = (n._emscripten_bind_btHingeConstraint_setLimit_4 =
                  function () {
                    return n.asm.lk.apply(null, arguments);
                  }),
                Ys = (n._emscripten_bind_btHingeConstraint_setLimit_5 =
                  function () {
                    return n.asm.mk.apply(null, arguments);
                  }),
                Js =
                  (n._emscripten_bind_btHingeConstraint_enableAngularMotor_3 =
                    function () {
                      return n.asm.nk.apply(null, arguments);
                    }),
                Xs = (n._emscripten_bind_btHingeConstraint_setAngularOnly_1 =
                  function () {
                    return n.asm.ok.apply(null, arguments);
                  }),
                Zs = (n._emscripten_bind_btHingeConstraint_enableMotor_1 =
                  function () {
                    return n.asm.pk.apply(null, arguments);
                  }),
                $s =
                  (n._emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 =
                    function () {
                      return n.asm.qk.apply(null, arguments);
                    }),
                tl = (n._emscripten_bind_btHingeConstraint_setMotorTarget_2 =
                  function () {
                    return n.asm.rk.apply(null, arguments);
                  }),
                el = (n._emscripten_bind_btHingeConstraint_setFrames_2 =
                  function () {
                    return n.asm.sk.apply(null, arguments);
                  }),
                nl = (n._emscripten_bind_btHingeConstraint_setAxis_1 =
                  function () {
                    return n.asm.tk.apply(null, arguments);
                  }),
                ol =
                  (n._emscripten_bind_btHingeConstraint_setUseReferenceFrameA_1 =
                    function () {
                      return n.asm.uk.apply(null, arguments);
                    }),
                pl = (n._emscripten_bind_btHingeConstraint_enableFeedback_1 =
                  function () {
                    return n.asm.vk.apply(null, arguments);
                  }),
                rl =
                  (n._emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.wk.apply(null, arguments);
                    }),
                il =
                  (n._emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.xk.apply(null, arguments);
                    }),
                cl = (n._emscripten_bind_btHingeConstraint_getParam_2 =
                  function () {
                    return n.asm.yk.apply(null, arguments);
                  }),
                _l = (n._emscripten_bind_btHingeConstraint_setParam_3 =
                  function () {
                    return n.asm.zk.apply(null, arguments);
                  }),
                al = (n._emscripten_bind_btHingeConstraint___destroy___0 =
                  function () {
                    return n.asm.Ak.apply(null, arguments);
                  }),
                sl = (n._emscripten_bind_btQuaternion_btQuaternion_4 =
                  function () {
                    return n.asm.Bk.apply(null, arguments);
                  }),
                ll = (n._emscripten_bind_btQuaternion_setValue_4 = function () {
                  return n.asm.Ck.apply(null, arguments);
                }),
                ul = (n._emscripten_bind_btQuaternion_x_0 = function () {
                  return n.asm.Dk.apply(null, arguments);
                }),
                yl = (n._emscripten_bind_btQuaternion_y_0 = function () {
                  return n.asm.Ek.apply(null, arguments);
                }),
                bl = (n._emscripten_bind_btQuaternion_z_0 = function () {
                  return n.asm.Fk.apply(null, arguments);
                }),
                fl = (n._emscripten_bind_btQuaternion_w_0 = function () {
                  return n.asm.Gk.apply(null, arguments);
                }),
                ml = (n._emscripten_bind_btQuaternion_setX_1 = function () {
                  return n.asm.Hk.apply(null, arguments);
                }),
                dl = (n._emscripten_bind_btQuaternion_setY_1 = function () {
                  return n.asm.Ik.apply(null, arguments);
                }),
                hl = (n._emscripten_bind_btQuaternion_setZ_1 = function () {
                  return n.asm.Jk.apply(null, arguments);
                }),
                gl = (n._emscripten_bind_btQuaternion_setW_1 = function () {
                  return n.asm.Kk.apply(null, arguments);
                }),
                jl = (n._emscripten_bind_btQuaternion___destroy___0 =
                  function () {
                    return n.asm.Lk.apply(null, arguments);
                  }),
                Cl = (n._emscripten_bind_btBU_Simplex1to4_btBU_Simplex1to4_0 =
                  function () {
                    return n.asm.Mk.apply(null, arguments);
                  }),
                vl = (n._emscripten_bind_btBU_Simplex1to4_addVertex_1 =
                  function () {
                    return n.asm.Nk.apply(null, arguments);
                  }),
                Sl = (n._emscripten_bind_btBU_Simplex1to4_setLocalScaling_1 =
                  function () {
                    return n.asm.Ok.apply(null, arguments);
                  }),
                Ol = (n._emscripten_bind_btBU_Simplex1to4_getLocalScaling_0 =
                  function () {
                    return n.asm.Pk.apply(null, arguments);
                  }),
                Il =
                  (n._emscripten_bind_btBU_Simplex1to4_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Qk.apply(null, arguments);
                    }),
                Pl = (n._emscripten_bind_btBU_Simplex1to4_isCompound_0 =
                  function () {
                    return n.asm.Rk.apply(null, arguments);
                  }),
                Tl = (n._emscripten_bind_btBU_Simplex1to4_getUserIndex_0 =
                  function () {
                    return n.asm.Sk.apply(null, arguments);
                  }),
                Rl = (n._emscripten_bind_btBU_Simplex1to4_setUserIndex_1 =
                  function () {
                    return n.asm.Tk.apply(null, arguments);
                  }),
                Dl = (n._emscripten_bind_btBU_Simplex1to4_getAabb_3 =
                  function () {
                    return n.asm.Uk.apply(null, arguments);
                  }),
                Bl =
                  (n._emscripten_bind_btBU_Simplex1to4_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Vk.apply(null, arguments);
                    }),
                xl = (n._emscripten_bind_btBU_Simplex1to4___destroy___0 =
                  function () {
                    return n.asm.Wk.apply(null, arguments);
                  }),
                Al =
                  (n._emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 =
                    function () {
                      return n.asm.Xk.apply(null, arguments);
                    }),
                Ml =
                  (n._emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 =
                    function () {
                      return n.asm.Yk.apply(null, arguments);
                    }),
                Ll =
                  (n._emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 =
                    function () {
                      return n.asm.Zk.apply(null, arguments);
                    }),
                kl =
                  (n._emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 =
                    function () {
                      return n.asm._k.apply(null, arguments);
                    }),
                Fl =
                  (n._emscripten_bind_btContactSolverInfo_get_m_numIterations_0 =
                    function () {
                      return n.asm.$k.apply(null, arguments);
                    }),
                Wl =
                  (n._emscripten_bind_btContactSolverInfo_set_m_numIterations_1 =
                    function () {
                      return n.asm.al.apply(null, arguments);
                    }),
                Gl = (n._emscripten_bind_btContactSolverInfo___destroy___0 =
                  function () {
                    return n.asm.bl.apply(null, arguments);
                  }),
                Ul =
                  (n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3 =
                    function () {
                      return n.asm.cl.apply(null, arguments);
                    }),
                wl =
                  (n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4 =
                    function () {
                      return n.asm.dl.apply(null, arguments);
                    }),
                Hl =
                  (n._emscripten_bind_btKinematicCharacterController_setUp_1 =
                    function () {
                      return n.asm.el.apply(null, arguments);
                    }),
                ql =
                  (n._emscripten_bind_btKinematicCharacterController_setWalkDirection_1 =
                    function () {
                      return n.asm.fl.apply(null, arguments);
                    }),
                Kl =
                  (n._emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2 =
                    function () {
                      return n.asm.gl.apply(null, arguments);
                    }),
                El =
                  (n._emscripten_bind_btKinematicCharacterController_reset_1 =
                    function () {
                      return n.asm.hl.apply(null, arguments);
                    }),
                Nl = (n._emscripten_bind_btKinematicCharacterController_warp_1 =
                  function () {
                    return n.asm.il.apply(null, arguments);
                  }),
                Vl =
                  (n._emscripten_bind_btKinematicCharacterController_preStep_1 =
                    function () {
                      return n.asm.jl.apply(null, arguments);
                    }),
                zl =
                  (n._emscripten_bind_btKinematicCharacterController_playerStep_2 =
                    function () {
                      return n.asm.kl.apply(null, arguments);
                    }),
                Ql =
                  (n._emscripten_bind_btKinematicCharacterController_setFallSpeed_1 =
                    function () {
                      return n.asm.ll.apply(null, arguments);
                    }),
                Yl =
                  (n._emscripten_bind_btKinematicCharacterController_setJumpSpeed_1 =
                    function () {
                      return n.asm.ml.apply(null, arguments);
                    }),
                Jl =
                  (n._emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1 =
                    function () {
                      return n.asm.nl.apply(null, arguments);
                    }),
                Xl =
                  (n._emscripten_bind_btKinematicCharacterController_canJump_0 =
                    function () {
                      return n.asm.ol.apply(null, arguments);
                    }),
                Zl = (n._emscripten_bind_btKinematicCharacterController_jump_0 =
                  function () {
                    return n.asm.pl.apply(null, arguments);
                  }),
                $l = (n._emscripten_bind_btKinematicCharacterController_jump_1 =
                  function () {
                    return n.asm.ql.apply(null, arguments);
                  }),
                tu =
                  (n._emscripten_bind_btKinematicCharacterController_setGravity_1 =
                    function () {
                      return n.asm.rl.apply(null, arguments);
                    }),
                eu =
                  (n._emscripten_bind_btKinematicCharacterController_getGravity_0 =
                    function () {
                      return n.asm.sl.apply(null, arguments);
                    }),
                nu =
                  (n._emscripten_bind_btKinematicCharacterController_setMaxSlope_1 =
                    function () {
                      return n.asm.tl.apply(null, arguments);
                    }),
                ou =
                  (n._emscripten_bind_btKinematicCharacterController_getMaxSlope_0 =
                    function () {
                      return n.asm.ul.apply(null, arguments);
                    }),
                pu =
                  (n._emscripten_bind_btKinematicCharacterController_getGhostObject_0 =
                    function () {
                      return n.asm.vl.apply(null, arguments);
                    }),
                ru =
                  (n._emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1 =
                    function () {
                      return n.asm.wl.apply(null, arguments);
                    }),
                iu =
                  (n._emscripten_bind_btKinematicCharacterController_onGround_0 =
                    function () {
                      return n.asm.xl.apply(null, arguments);
                    }),
                cu =
                  (n._emscripten_bind_btKinematicCharacterController_setUpInterpolate_1 =
                    function () {
                      return n.asm.yl.apply(null, arguments);
                    }),
                _u =
                  (n._emscripten_bind_btKinematicCharacterController_updateAction_2 =
                    function () {
                      return n.asm.zl.apply(null, arguments);
                    }),
                au =
                  (n._emscripten_bind_btKinematicCharacterController___destroy___0 =
                    function () {
                      return n.asm.Al.apply(null, arguments);
                    }),
                su =
                  (n._emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 =
                    function () {
                      return n.asm.Bl.apply(null, arguments);
                    }),
                lu = (n._emscripten_bind_btStaticPlaneShape_getPlaneNormal_0 =
                  function () {
                    return n.asm.Cl.apply(null, arguments);
                  }),
                uu = (n._emscripten_bind_btStaticPlaneShape_setPlaneConstant_1 =
                  function () {
                    return n.asm.Dl.apply(null, arguments);
                  }),
                yu = (n._emscripten_bind_btStaticPlaneShape_setLocalScaling_1 =
                  function () {
                    return n.asm.El.apply(null, arguments);
                  }),
                bu = (n._emscripten_bind_btStaticPlaneShape_getLocalScaling_0 =
                  function () {
                    return n.asm.Fl.apply(null, arguments);
                  }),
                fu =
                  (n._emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Gl.apply(null, arguments);
                    }),
                mu = (n._emscripten_bind_btStaticPlaneShape_isCompound_0 =
                  function () {
                    return n.asm.Hl.apply(null, arguments);
                  }),
                du = (n._emscripten_bind_btStaticPlaneShape_getUserIndex_0 =
                  function () {
                    return n.asm.Il.apply(null, arguments);
                  }),
                hu = (n._emscripten_bind_btStaticPlaneShape_setUserIndex_1 =
                  function () {
                    return n.asm.Jl.apply(null, arguments);
                  }),
                gu = (n._emscripten_bind_btStaticPlaneShape_getAabb_3 =
                  function () {
                    return n.asm.Kl.apply(null, arguments);
                  }),
                ju =
                  (n._emscripten_bind_btStaticPlaneShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.Ll.apply(null, arguments);
                    }),
                Cu = (n._emscripten_bind_btStaticPlaneShape___destroy___0 =
                  function () {
                    return n.asm.Ml.apply(null, arguments);
                  }),
                vu =
                  (n._emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 =
                    function () {
                      return n.asm.Nl.apply(null, arguments);
                    }),
                Su =
                  (n._emscripten_bind_btOverlappingPairCache_setOverlapFilterCallback_1 =
                    function () {
                      return n.asm.Ol.apply(null, arguments);
                    }),
                Ou =
                  (n._emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 =
                    function () {
                      return n.asm.Pl.apply(null, arguments);
                    }),
                Iu = (n._emscripten_bind_btOverlappingPairCache___destroy___0 =
                  function () {
                    return n.asm.Ql.apply(null, arguments);
                  }),
                Pu = (n._emscripten_bind_btVector3_btVector3_0 = function () {
                  return n.asm.Rl.apply(null, arguments);
                }),
                Tu = (n._emscripten_bind_btVector3_btVector3_3 = function () {
                  return n.asm.Sl.apply(null, arguments);
                }),
                Ru = (n._emscripten_bind_btVector3_x_0 = function () {
                  return n.asm.Tl.apply(null, arguments);
                }),
                Du = (n._emscripten_bind_btVector3_y_0 = function () {
                  return n.asm.Ul.apply(null, arguments);
                }),
                Bu = (n._emscripten_bind_btVector3_z_0 = function () {
                  return n.asm.Vl.apply(null, arguments);
                }),
                xu = (n._emscripten_bind_btVector3_setX_1 = function () {
                  return n.asm.Wl.apply(null, arguments);
                }),
                Au = (n._emscripten_bind_btVector3_setY_1 = function () {
                  return n.asm.Xl.apply(null, arguments);
                }),
                Mu = (n._emscripten_bind_btVector3_setZ_1 = function () {
                  return n.asm.Yl.apply(null, arguments);
                }),
                Lu = (n._emscripten_bind_btVector3_setValue_3 = function () {
                  return n.asm.Zl.apply(null, arguments);
                }),
                ku = (n._emscripten_bind_btVector3___destroy___0 = function () {
                  return n.asm._l.apply(null, arguments);
                }),
                Fu = (n._emscripten_bind_btSphereShape_btSphereShape_1 =
                  function () {
                    return n.asm.$l.apply(null, arguments);
                  }),
                Wu = (n._emscripten_bind_btSphereShape_setMargin_1 =
                  function () {
                    return n.asm.am.apply(null, arguments);
                  }),
                Gu = (n._emscripten_bind_btSphereShape_getMargin_0 =
                  function () {
                    return n.asm.bm.apply(null, arguments);
                  }),
                Uu = (n._emscripten_bind_btSphereShape_setUnscaledRadius_1 =
                  function () {
                    return n.asm.cm.apply(null, arguments);
                  }),
                wu = (n._emscripten_bind_btSphereShape_setLocalScaling_1 =
                  function () {
                    return n.asm.dm.apply(null, arguments);
                  }),
                Hu = (n._emscripten_bind_btSphereShape_getLocalScaling_0 =
                  function () {
                    return n.asm.em.apply(null, arguments);
                  }),
                qu = (n._emscripten_bind_btSphereShape_calculateLocalInertia_2 =
                  function () {
                    return n.asm.fm.apply(null, arguments);
                  }),
                Ku = (n._emscripten_bind_btSphereShape_isCompound_0 =
                  function () {
                    return n.asm.gm.apply(null, arguments);
                  }),
                Eu = (n._emscripten_bind_btSphereShape_getUserIndex_0 =
                  function () {
                    return n.asm.hm.apply(null, arguments);
                  }),
                Nu = (n._emscripten_bind_btSphereShape_setUserIndex_1 =
                  function () {
                    return n.asm.im.apply(null, arguments);
                  }),
                Vu = (n._emscripten_bind_btSphereShape_getAabb_3 = function () {
                  return n.asm.jm.apply(null, arguments);
                }),
                zu =
                  (n._emscripten_bind_btSphereShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.km.apply(null, arguments);
                    }),
                Qu =
                  (n._emscripten_bind_btSphereShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.lm.apply(null, arguments);
                    }),
                Yu = (n._emscripten_bind_btSphereShape___destroy___0 =
                  function () {
                    return n.asm.mm.apply(null, arguments);
                  }),
                Ju =
                  (n._emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 =
                    function () {
                      return n.asm.nm.apply(null, arguments);
                    }),
                Xu =
                  (n._emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 =
                    function () {
                      return n.asm.om.apply(null, arguments);
                    }),
                Zu = (n._emscripten_bind_btEmptyShape_btEmptyShape_0 =
                  function () {
                    return n.asm.pm.apply(null, arguments);
                  }),
                $u = (n._emscripten_bind_btEmptyShape_setLocalScaling_1 =
                  function () {
                    return n.asm.qm.apply(null, arguments);
                  }),
                ty = (n._emscripten_bind_btEmptyShape_getLocalScaling_0 =
                  function () {
                    return n.asm.rm.apply(null, arguments);
                  }),
                ey = (n._emscripten_bind_btEmptyShape_calculateLocalInertia_2 =
                  function () {
                    return n.asm.sm.apply(null, arguments);
                  }),
                ny = (n._emscripten_bind_btEmptyShape_isCompound_0 =
                  function () {
                    return n.asm.tm.apply(null, arguments);
                  }),
                oy = (n._emscripten_bind_btEmptyShape_getUserIndex_0 =
                  function () {
                    return n.asm.um.apply(null, arguments);
                  }),
                py = (n._emscripten_bind_btEmptyShape_setUserIndex_1 =
                  function () {
                    return n.asm.vm.apply(null, arguments);
                  }),
                ry = (n._emscripten_bind_btEmptyShape_getAabb_3 = function () {
                  return n.asm.wm.apply(null, arguments);
                }),
                iy = (n._emscripten_bind_btEmptyShape_getLocalBoundingSphere_0 =
                  function () {
                    return n.asm.xm.apply(null, arguments);
                  }),
                cy = (n._emscripten_bind_btEmptyShape___destroy___0 =
                  function () {
                    return n.asm.ym.apply(null, arguments);
                  }),
                _y =
                  (n._emscripten_bind_btConstraintSetting_btConstraintSetting_0 =
                    function () {
                      return n.asm.zm.apply(null, arguments);
                    }),
                ay = (n._emscripten_bind_btConstraintSetting_get_m_tau_0 =
                  function () {
                    return n.asm.Am.apply(null, arguments);
                  }),
                sy = (n._emscripten_bind_btConstraintSetting_set_m_tau_1 =
                  function () {
                    return n.asm.Bm.apply(null, arguments);
                  }),
                ly = (n._emscripten_bind_btConstraintSetting_get_m_damping_0 =
                  function () {
                    return n.asm.Cm.apply(null, arguments);
                  }),
                uy = (n._emscripten_bind_btConstraintSetting_set_m_damping_1 =
                  function () {
                    return n.asm.Dm.apply(null, arguments);
                  }),
                yy =
                  (n._emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 =
                    function () {
                      return n.asm.Em.apply(null, arguments);
                    }),
                by =
                  (n._emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 =
                    function () {
                      return n.asm.Fm.apply(null, arguments);
                    }),
                fy = (n._emscripten_bind_btConstraintSetting___destroy___0 =
                  function () {
                    return n.asm.Gm.apply(null, arguments);
                  }),
                my = (n._emscripten_bind_LocalShapeInfo_get_m_shapePart_0 =
                  function () {
                    return n.asm.Hm.apply(null, arguments);
                  }),
                dy = (n._emscripten_bind_LocalShapeInfo_set_m_shapePart_1 =
                  function () {
                    return n.asm.Im.apply(null, arguments);
                  }),
                hy = (n._emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 =
                  function () {
                    return n.asm.Jm.apply(null, arguments);
                  }),
                gy = (n._emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 =
                  function () {
                    return n.asm.Km.apply(null, arguments);
                  }),
                jy = (n._emscripten_bind_LocalShapeInfo___destroy___0 =
                  function () {
                    return n.asm.Lm.apply(null, arguments);
                  }),
                Cy = (n._emscripten_bind_btVector3Array_size_0 = function () {
                  return n.asm.Mm.apply(null, arguments);
                }),
                vy = (n._emscripten_bind_btVector3Array_at_1 = function () {
                  return n.asm.Nm.apply(null, arguments);
                }),
                Sy = (n._emscripten_bind_btVector3Array_clear_0 = function () {
                  return n.asm.Om.apply(null, arguments);
                }),
                Oy = (n._emscripten_bind_btVector3Array___destroy___0 =
                  function () {
                    return n.asm.Pm.apply(null, arguments);
                  }),
                Iy = (n._emscripten_bind_btConstraintSolver___destroy___0 =
                  function () {
                    return n.asm.Qm.apply(null, arguments);
                  }),
                Py = (n._emscripten_bind_btFixedConstraint_btFixedConstraint_4 =
                  function () {
                    return n.asm.Rm.apply(null, arguments);
                  }),
                Ty = (n._emscripten_bind_btFixedConstraint_enableFeedback_1 =
                  function () {
                    return n.asm.Sm.apply(null, arguments);
                  }),
                Ry =
                  (n._emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 =
                    function () {
                      return n.asm.Tm.apply(null, arguments);
                    }),
                Dy =
                  (n._emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 =
                    function () {
                      return n.asm.Um.apply(null, arguments);
                    }),
                By = (n._emscripten_bind_btFixedConstraint_getParam_2 =
                  function () {
                    return n.asm.Vm.apply(null, arguments);
                  }),
                xy = (n._emscripten_bind_btFixedConstraint_setParam_3 =
                  function () {
                    return n.asm.Wm.apply(null, arguments);
                  }),
                Ay = (n._emscripten_bind_btFixedConstraint___destroy___0 =
                  function () {
                    return n.asm.Xm.apply(null, arguments);
                  }),
                My =
                  (n._emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 =
                    function () {
                      return n.asm.Ym.apply(null, arguments);
                    }),
                Ly =
                  (n._emscripten_bind_btCollisionDispatcher_setDispatcherFlags_1 =
                    function () {
                      return n.asm.Zm.apply(null, arguments);
                    }),
                ky =
                  (n._emscripten_bind_btCollisionDispatcher_getNumManifolds_0 =
                    function () {
                      return n.asm._m.apply(null, arguments);
                    }),
                Fy =
                  (n._emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 =
                    function () {
                      return n.asm.$m.apply(null, arguments);
                    }),
                Wy = (n._emscripten_bind_btCollisionDispatcher___destroy___0 =
                  function () {
                    return n.asm.an.apply(null, arguments);
                  }),
                Gy = (n._emscripten_bind_btRigidBody_btRigidBody_1 =
                  function () {
                    return n.asm.bn.apply(null, arguments);
                  }),
                Uy =
                  (n._emscripten_bind_btRigidBody_getCenterOfMassTransform_0 =
                    function () {
                      return n.asm.cn.apply(null, arguments);
                    }),
                wy =
                  (n._emscripten_bind_btRigidBody_setCenterOfMassTransform_1 =
                    function () {
                      return n.asm.dn.apply(null, arguments);
                    }),
                Hy = (n._emscripten_bind_btRigidBody_setSleepingThresholds_2 =
                  function () {
                    return n.asm.en.apply(null, arguments);
                  }),
                qy =
                  (n._emscripten_bind_btRigidBody_getLinearSleepingThreshold_0 =
                    function () {
                      return n.asm.fn.apply(null, arguments);
                    }),
                Ky = (n._emscripten_bind_btRigidBody_getLinearDamping_0 =
                  function () {
                    return n.asm.gn.apply(null, arguments);
                  }),
                Ey = (n._emscripten_bind_btRigidBody_getAngularDamping_0 =
                  function () {
                    return n.asm.hn.apply(null, arguments);
                  }),
                Ny = (n._emscripten_bind_btRigidBody_setDamping_2 =
                  function () {
                    return n.asm.jn.apply(null, arguments);
                  }),
                Vy = (n._emscripten_bind_btRigidBody_setMassProps_2 =
                  function () {
                    return n.asm.kn.apply(null, arguments);
                  }),
                zy = (n._emscripten_bind_btRigidBody_getLinearFactor_0 =
                  function () {
                    return n.asm.ln.apply(null, arguments);
                  }),
                Qy = (n._emscripten_bind_btRigidBody_setLinearFactor_1 =
                  function () {
                    return n.asm.mn.apply(null, arguments);
                  }),
                Yy = (n._emscripten_bind_btRigidBody_applyTorque_1 =
                  function () {
                    return n.asm.nn.apply(null, arguments);
                  }),
                Jy = (n._emscripten_bind_btRigidBody_applyForce_2 =
                  function () {
                    return n.asm.on.apply(null, arguments);
                  }),
                Xy = (n._emscripten_bind_btRigidBody_applyCentralForce_1 =
                  function () {
                    return n.asm.pn.apply(null, arguments);
                  }),
                Zy = (n._emscripten_bind_btRigidBody_applyTorqueImpulse_1 =
                  function () {
                    return n.asm.qn.apply(null, arguments);
                  }),
                $y = (n._emscripten_bind_btRigidBody_applyImpulse_2 =
                  function () {
                    return n.asm.rn.apply(null, arguments);
                  }),
                tb = (n._emscripten_bind_btRigidBody_applyCentralImpulse_1 =
                  function () {
                    return n.asm.sn.apply(null, arguments);
                  }),
                eb = (n._emscripten_bind_btRigidBody_updateInertiaTensor_0 =
                  function () {
                    return n.asm.tn.apply(null, arguments);
                  }),
                nb = (n._emscripten_bind_btRigidBody_getLinearVelocity_0 =
                  function () {
                    return n.asm.un.apply(null, arguments);
                  }),
                ob = (n._emscripten_bind_btRigidBody_getAngularVelocity_0 =
                  function () {
                    return n.asm.vn.apply(null, arguments);
                  }),
                pb = (n._emscripten_bind_btRigidBody_setLinearVelocity_1 =
                  function () {
                    return n.asm.wn.apply(null, arguments);
                  }),
                rb = (n._emscripten_bind_btRigidBody_setAngularVelocity_1 =
                  function () {
                    return n.asm.xn.apply(null, arguments);
                  }),
                ib = (n._emscripten_bind_btRigidBody_getMotionState_0 =
                  function () {
                    return n.asm.yn.apply(null, arguments);
                  }),
                cb = (n._emscripten_bind_btRigidBody_setMotionState_1 =
                  function () {
                    return n.asm.zn.apply(null, arguments);
                  }),
                _b = (n._emscripten_bind_btRigidBody_getAngularFactor_0 =
                  function () {
                    return n.asm.An.apply(null, arguments);
                  }),
                ab = (n._emscripten_bind_btRigidBody_setAngularFactor_1 =
                  function () {
                    return n.asm.Bn.apply(null, arguments);
                  }),
                sb = (n._emscripten_bind_btRigidBody_upcast_1 = function () {
                  return n.asm.Cn.apply(null, arguments);
                }),
                lb = (n._emscripten_bind_btRigidBody_getAabb_2 = function () {
                  return n.asm.Dn.apply(null, arguments);
                }),
                ub = (n._emscripten_bind_btRigidBody_applyGravity_0 =
                  function () {
                    return n.asm.En.apply(null, arguments);
                  }),
                yb = (n._emscripten_bind_btRigidBody_getGravity_0 =
                  function () {
                    return n.asm.Fn.apply(null, arguments);
                  }),
                bb = (n._emscripten_bind_btRigidBody_setGravity_1 =
                  function () {
                    return n.asm.Gn.apply(null, arguments);
                  }),
                fb = (n._emscripten_bind_btRigidBody_getFlags_0 = function () {
                  return n.asm.Hn.apply(null, arguments);
                }),
                mb = (n._emscripten_bind_btRigidBody_setFlags_1 = function () {
                  return n.asm.In.apply(null, arguments);
                }),
                db = (n._emscripten_bind_btRigidBody_wantsSleeping_0 =
                  function () {
                    return n.asm.Jn.apply(null, arguments);
                  }),
                hb = (n._emscripten_bind_btRigidBody_clearForces_0 =
                  function () {
                    return n.asm.Kn.apply(null, arguments);
                  }),
                gb = (n._emscripten_bind_btRigidBody_getTotalForce_0 =
                  function () {
                    return n.asm.Ln.apply(null, arguments);
                  }),
                jb = (n._emscripten_bind_btRigidBody_getTotalTorque_0 =
                  function () {
                    return n.asm.Mn.apply(null, arguments);
                  }),
                Cb = (n._emscripten_bind_btRigidBody_clearState_0 =
                  function () {
                    return n.asm.Nn.apply(null, arguments);
                  }),
                vb = (n._emscripten_bind_btRigidBody_setAnisotropicFriction_2 =
                  function () {
                    return n.asm.On.apply(null, arguments);
                  }),
                Sb = (n._emscripten_bind_btRigidBody_getCollisionShape_0 =
                  function () {
                    return n.asm.Pn.apply(null, arguments);
                  }),
                Ob = (n._emscripten_bind_btRigidBody_getActivationState_0 =
                  function () {
                    return n.asm.Qn.apply(null, arguments);
                  }),
                Ib = (n._emscripten_bind_btRigidBody_setActivationState_1 =
                  function () {
                    return n.asm.Rn.apply(null, arguments);
                  }),
                Pb = (n._emscripten_bind_btRigidBody_forceActivationState_1 =
                  function () {
                    return n.asm.Sn.apply(null, arguments);
                  }),
                Tb = (n._emscripten_bind_btRigidBody_activate_0 = function () {
                  return n.asm.Tn.apply(null, arguments);
                }),
                Rb = (n._emscripten_bind_btRigidBody_activate_1 = function () {
                  return n.asm.Un.apply(null, arguments);
                }),
                Db = (n._emscripten_bind_btRigidBody_isActive_0 = function () {
                  return n.asm.Vn.apply(null, arguments);
                }),
                Bb = (n._emscripten_bind_btRigidBody_isKinematicObject_0 =
                  function () {
                    return n.asm.Wn.apply(null, arguments);
                  }),
                xb = (n._emscripten_bind_btRigidBody_isStaticObject_0 =
                  function () {
                    return n.asm.Xn.apply(null, arguments);
                  }),
                Ab =
                  (n._emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 =
                    function () {
                      return n.asm.Yn.apply(null, arguments);
                    }),
                Mb = (n._emscripten_bind_btRigidBody_setRestitution_1 =
                  function () {
                    return n.asm.Zn.apply(null, arguments);
                  }),
                Lb = (n._emscripten_bind_btRigidBody_setFriction_1 =
                  function () {
                    return n.asm._n.apply(null, arguments);
                  }),
                kb = (n._emscripten_bind_btRigidBody_setRollingFriction_1 =
                  function () {
                    return n.asm.$n.apply(null, arguments);
                  }),
                Fb = (n._emscripten_bind_btRigidBody_setSpinningFriction_1 =
                  function () {
                    return n.asm.ao.apply(null, arguments);
                  }),
                Wb = (n._emscripten_bind_btRigidBody_getWorldTransform_0 =
                  function () {
                    return n.asm.bo.apply(null, arguments);
                  }),
                Gb = (n._emscripten_bind_btRigidBody_getCollisionFlags_0 =
                  function () {
                    return n.asm.co.apply(null, arguments);
                  }),
                Ub = (n._emscripten_bind_btRigidBody_setCollisionFlags_1 =
                  function () {
                    return n.asm.eo.apply(null, arguments);
                  }),
                wb = (n._emscripten_bind_btRigidBody_setWorldTransform_1 =
                  function () {
                    return n.asm.fo.apply(null, arguments);
                  }),
                Hb = (n._emscripten_bind_btRigidBody_setCollisionShape_1 =
                  function () {
                    return n.asm.go.apply(null, arguments);
                  }),
                qb = (n._emscripten_bind_btRigidBody_setCcdMotionThreshold_1 =
                  function () {
                    return n.asm.ho.apply(null, arguments);
                  }),
                Kb = (n._emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 =
                  function () {
                    return n.asm.io.apply(null, arguments);
                  }),
                Eb = (n._emscripten_bind_btRigidBody_getUserIndex_0 =
                  function () {
                    return n.asm.jo.apply(null, arguments);
                  }),
                Nb = (n._emscripten_bind_btRigidBody_setUserIndex_1 =
                  function () {
                    return n.asm.ko.apply(null, arguments);
                  }),
                Vb = (n._emscripten_bind_btRigidBody_setUserIndex2_1 =
                  function () {
                    return n.asm.lo.apply(null, arguments);
                  }),
                zb = (n._emscripten_bind_btRigidBody_setIgnoreCollisionCheck_2 =
                  function () {
                    return n.asm.mo.apply(null, arguments);
                  }),
                Qb = (n._emscripten_bind_btRigidBody___destroy___0 =
                  function () {
                    return n.asm.no.apply(null, arguments);
                  }),
                Yb = (n._emscripten_bind_btIndexedMeshArray_size_0 =
                  function () {
                    return n.asm.oo.apply(null, arguments);
                  }),
                Jb = (n._emscripten_bind_btIndexedMeshArray_at_1 = function () {
                  return n.asm.po.apply(null, arguments);
                }),
                Xb = (n._emscripten_bind_btIndexedMeshArray___destroy___0 =
                  function () {
                    return n.asm.qo.apply(null, arguments);
                  }),
                Zb = (n._emscripten_bind_btTransform_btTransform_0 =
                  function () {
                    return n.asm.ro.apply(null, arguments);
                  }),
                $b = (n._emscripten_bind_btTransform_btTransform_2 =
                  function () {
                    return n.asm.so.apply(null, arguments);
                  }),
                tf = (n._emscripten_bind_btTransform_setIdentity_0 =
                  function () {
                    return n.asm.to.apply(null, arguments);
                  }),
                ef = (n._emscripten_bind_btTransform_setOrigin_1 = function () {
                  return n.asm.uo.apply(null, arguments);
                }),
                nf = (n._emscripten_bind_btTransform_setRotation_1 =
                  function () {
                    return n.asm.vo.apply(null, arguments);
                  }),
                of = (n._emscripten_bind_btTransform_getOrigin_0 = function () {
                  return n.asm.wo.apply(null, arguments);
                }),
                pf = (n._emscripten_bind_btTransform_getRotation_0 =
                  function () {
                    return n.asm.xo.apply(null, arguments);
                  }),
                rf = (n._emscripten_bind_btTransform_getBasis_0 = function () {
                  return n.asm.yo.apply(null, arguments);
                }),
                cf = (n._emscripten_bind_btTransform_inverse_0 = function () {
                  return n.asm.zo.apply(null, arguments);
                }),
                _f = (n._emscripten_bind_btTransform_op_mul_1 = function () {
                  return n.asm.Ao.apply(null, arguments);
                }),
                af = (n._emscripten_bind_btTransform___destroy___0 =
                  function () {
                    return n.asm.Bo.apply(null, arguments);
                  }),
                sf = (n._emscripten_bind_btCylinderShape_btCylinderShape_1 =
                  function () {
                    return n.asm.Co.apply(null, arguments);
                  }),
                lf = (n._emscripten_bind_btCylinderShape_setMargin_1 =
                  function () {
                    return n.asm.Do.apply(null, arguments);
                  }),
                uf = (n._emscripten_bind_btCylinderShape_getMargin_0 =
                  function () {
                    return n.asm.Eo.apply(null, arguments);
                  }),
                yf = (n._emscripten_bind_btCylinderShape_updateProp_3 =
                  function () {
                    return n.asm.Fo.apply(null, arguments);
                  }),
                bf = (n._emscripten_bind_btCylinderShape_setLocalScaling_1 =
                  function () {
                    return n.asm.Go.apply(null, arguments);
                  }),
                ff = (n._emscripten_bind_btCylinderShape_getLocalScaling_0 =
                  function () {
                    return n.asm.Ho.apply(null, arguments);
                  }),
                mf =
                  (n._emscripten_bind_btCylinderShape_calculateLocalInertia_2 =
                    function () {
                      return n.asm.Io.apply(null, arguments);
                    }),
                df = (n._emscripten_bind_btCylinderShape_isCompound_0 =
                  function () {
                    return n.asm.Jo.apply(null, arguments);
                  }),
                hf = (n._emscripten_bind_btCylinderShape_getUserIndex_0 =
                  function () {
                    return n.asm.Ko.apply(null, arguments);
                  }),
                gf = (n._emscripten_bind_btCylinderShape_setUserIndex_1 =
                  function () {
                    return n.asm.Lo.apply(null, arguments);
                  }),
                jf = (n._emscripten_bind_btCylinderShape_getAabb_3 =
                  function () {
                    return n.asm.Mo.apply(null, arguments);
                  }),
                Cf =
                  (n._emscripten_bind_btCylinderShape_getLocalBoundingSphere_0 =
                    function () {
                      return n.asm.No.apply(null, arguments);
                    }),
                vf =
                  (n._emscripten_bind_btCylinderShape_getImplicitShapeDimensions_0 =
                    function () {
                      return n.asm.Oo.apply(null, arguments);
                    }),
                Sf = (n._emscripten_bind_btCylinderShape___destroy___0 =
                  function () {
                    return n.asm.Po.apply(null, arguments);
                  }),
                Of = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP =
                  function () {
                    return n.asm.Qo.apply(null, arguments);
                  }),
                If =
                  (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP =
                    function () {
                      return n.asm.Ro.apply(null, arguments);
                    }),
                Pf = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM =
                  function () {
                    return n.asm.So.apply(null, arguments);
                  }),
                Tf =
                  (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM =
                    function () {
                      return n.asm.To.apply(null, arguments);
                    }),
                Rf = (n._emscripten_enum_PHY_ScalarType_PHY_FLOAT =
                  function () {
                    return n.asm.Uo.apply(null, arguments);
                  }),
                Df = (n._emscripten_enum_PHY_ScalarType_PHY_DOUBLE =
                  function () {
                    return n.asm.Vo.apply(null, arguments);
                  }),
                Bf = (n._emscripten_enum_PHY_ScalarType_PHY_INTEGER =
                  function () {
                    return n.asm.Wo.apply(null, arguments);
                  }),
                xf = (n._emscripten_enum_PHY_ScalarType_PHY_SHORT =
                  function () {
                    return n.asm.Xo.apply(null, arguments);
                  }),
                Af = (n._emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 =
                  function () {
                    return n.asm.Yo.apply(null, arguments);
                  }),
                Mf = (n._emscripten_enum_PHY_ScalarType_PHY_UCHAR =
                  function () {
                    return n.asm.Zo.apply(null, arguments);
                  });
              function Lf() {
                function t() {
                  if (!q && ((q = !0), !d)) {
                    if (
                      ((B = !0),
                      I(T),
                      I(R),
                      n.onRuntimeInitialized && n.onRuntimeInitialized(),
                      n.postRun)
                    )
                      for (
                        'function' == typeof n.postRun &&
                        (n.postRun = [n.postRun]);
                        n.postRun.length;

                      ) {
                        var t = n.postRun.shift();
                        D.unshift(t);
                      }
                    I(D);
                  }
                }
                if (!(0 < A)) {
                  if (n.preRun)
                    for (
                      'function' == typeof n.preRun && (n.preRun = [n.preRun]);
                      n.preRun.length;

                    )
                      x();
                  I(P),
                    0 < A ||
                      (n.setStatus
                        ? (n.setStatus('Running...'),
                          setTimeout(function () {
                            setTimeout(function () {
                              n.setStatus('');
                            }, 1),
                              t();
                          }, 1))
                        : t());
                }
              }
              if (
                ((n._malloc = function () {
                  return n.asm._o.apply(null, arguments);
                }),
                (n._free = function () {
                  return n.asm.$o.apply(null, arguments);
                }),
                (n.dynCall_vi = function () {
                  return n.asm.ap.apply(null, arguments);
                }),
                (n.dynCall_v = function () {
                  return n.asm.bp.apply(null, arguments);
                }),
                (n.asm = H),
                (n.addFunction = function (t, e) {
                  var n = m.length;
                  try {
                    m.grow(1);
                  } catch (t) {
                    if (!t instanceof RangeError) throw t;
                    throw 'Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH.';
                  }
                  try {
                    m.set(n, t);
                  } catch (c) {
                    if (!c instanceof TypeError) throw c;
                    h(
                      void 0 !== e,
                      'Missing signature argument to addFunction',
                    );
                    var o = [1, 0, 1, 96],
                      p = e.slice(0, 1);
                    e = e.slice(1);
                    var r = { i: 127, j: 126, f: 125, d: 124 };
                    o.push(e.length);
                    for (var i = 0; i < e.length; ++i) o.push(r[e[i]]);
                    'v' == p ? o.push(0) : (o = o.concat([1, r[p]])),
                      (o[1] = o.length - 2),
                      (o = new Uint8Array(
                        [0, 97, 115, 109, 1, 0, 0, 0].concat(
                          o,
                          [
                            2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0,
                            0,
                          ],
                        ),
                      )),
                      (o = new WebAssembly.Module(o)),
                      (t = new WebAssembly.Instance(o, { e: { zp: t } }).exports
                        .zp),
                      m.set(n, t);
                  }
                  return n;
                }),
                (n.then = function (t) {
                  if (q) t(n);
                  else {
                    var e = n.onRuntimeInitialized;
                    n.onRuntimeInitialized = function () {
                      e && e(), t(n);
                    };
                  }
                  return n;
                }),
                (M = function t() {
                  q || Lf(), q || (M = t);
                }),
                (n.run = Lf),
                n.preInit)
              )
                for (
                  'function' == typeof n.preInit && (n.preInit = [n.preInit]);
                  0 < n.preInit.length;

                )
                  n.preInit.pop()();
              function kf() {}
              function Ff(t) {
                return (t || kf).fp;
              }
              function Wf(t, e) {
                var n = Ff(e),
                  o = n[t];
                return (
                  o ||
                  (((o = Object.create((e || kf).prototype)).cp = t),
                  (n[t] = o))
                );
              }
              function Gf() {
                throw 'cannot construct a btCollisionShape, no constructor in IDL';
              }
              function Uf() {
                (this.cp = et()), (Ff(Uf)[this.cp] = this);
              }
              function wf() {
                throw 'cannot construct a btConvexShape, no constructor in IDL';
              }
              function Hf() {
                throw 'cannot construct a btConcaveShape, no constructor in IDL';
              }
              function qf() {
                throw 'cannot construct a btCollisionWorld, no constructor in IDL';
              }
              function Kf() {
                throw 'cannot construct a btTypedConstraint, no constructor in IDL';
              }
              function Ef(t, e, n, o, p) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  p && 'object' == typeof p && (p = p.cp),
                  (this.cp =
                    void 0 === o
                      ? le(t, e, n)
                      : void 0 === p
                      ? _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_4(
                          t,
                          e,
                          n,
                          o,
                        )
                      : ue(t, e, n, o, p)),
                  (Ff(Ef)[this.cp] = this);
              }
              function Nf() {
                throw 'cannot construct a btStridingMeshInterface, no constructor in IDL';
              }
              function Vf() {
                throw 'cannot construct a btBroadphaseInterface, no constructor in IDL';
              }
              function zf() {
                throw 'cannot construct a btMotionState, no constructor in IDL';
              }
              function Qf() {
                throw 'cannot construct a btConvexInternalShape, no constructor in IDL';
              }
              function Yf() {
                throw 'cannot construct a btDynamicsWorld, no constructor in IDL';
              }
              function Jf() {
                throw 'cannot construct a btDispatcher, no constructor in IDL';
              }
              function Xf() {
                throw 'cannot construct a RayResultCallback, no constructor in IDL';
              }
              function Zf() {
                throw 'cannot construct a btActionInterface, no constructor in IDL';
              }
              function $f() {
                throw 'cannot construct a btTriangleMeshShape, no constructor in IDL';
              }
              function tm() {
                (this.cp = xn()), (Ff(tm)[this.cp] = this);
              }
              function em() {
                throw 'cannot construct a btOverlapFilterCallback, no constructor in IDL';
              }
              function nm() {
                throw 'cannot construct a btQuadWord, no constructor in IDL';
              }
              function om() {
                throw 'cannot construct a btMatrix3x3, no constructor in IDL';
              }
              function pm() {
                throw 'cannot construct a btScalarArray, no constructor in IDL';
              }
              function rm(t, e, n) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  (this.cp = void 0 === n ? Oo(t, e) : Io(t, e, n)),
                  (Ff(rm)[this.cp] = this);
              }
              function im() {
                (this.cp = ko()), (Ff(im)[this.cp] = this);
              }
              function cm() {
                throw 'cannot construct a btIntArray, no constructor in IDL';
              }
              function _m() {
                throw 'cannot construct a btConstCollisionObjectArray, no constructor in IDL';
              }
              function am() {
                throw 'cannot construct a btBroadphaseProxy, no constructor in IDL';
              }
              function sm(t, e, n, o, p) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  p && 'object' == typeof p && (p = p.cp),
                  (this.cp =
                    void 0 === o
                      ? Xo(t, e, n)
                      : void 0 === p
                      ? _emscripten_bind_btSliderConstraint_btSliderConstraint_4(
                          t,
                          e,
                          n,
                          o,
                        )
                      : Zo(t, e, n, o, p)),
                  (Ff(sm)[this.cp] = this);
              }
              function lm() {
                throw 'cannot construct a btIndexedMesh, no constructor in IDL';
              }
              function um(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = void 0 === o ? up(t, e, n) : yp(t, e, n, o)),
                  (Ff(um)[this.cp] = this);
              }
              function ym() {
                throw 'cannot construct a btManifoldPoint, no constructor in IDL';
              }
              function bm() {
                (this.cp = ur()), (Ff(bm)[this.cp] = this);
              }
              function fm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = br(t, e, n, o)),
                  (Ff(fm)[this.cp] = this);
              }
              function mm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp =
                    void 0 === n
                      ? wr(t, e)
                      : void 0 === o
                      ? _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_3(
                          t,
                          e,
                          n,
                        )
                      : Hr(t, e, n, o)),
                  (Ff(mm)[this.cp] = this);
              }
              function dm() {
                (this.cp = ti()), (Ff(dm)[this.cp] = this);
              }
              function hm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = void 0 === e ? ni(t) : oi(t, e)),
                  (Ff(hm)[this.cp] = this);
              }
              function gm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp =
                    void 0 === n
                      ? fi(t, e)
                      : void 0 === o
                      ? _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_3(
                          t,
                          e,
                          n,
                        )
                      : mi(t, e, n, o)),
                  (Ff(gm)[this.cp] = this);
              }
              function jm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = xi(t, e)),
                  (Ff(jm)[this.cp] = this);
              }
              function Cm(t, e, n, o, p, r, i, c, _) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  p && 'object' == typeof p && (p = p.cp),
                  r && 'object' == typeof r && (r = r.cp),
                  i && 'object' == typeof i && (i = i.cp),
                  c && 'object' == typeof c && (c = c.cp),
                  _ && 'object' == typeof _ && (_ = _.cp),
                  (this.cp = Ni(t, e, n, o, p, r, i, c, _)),
                  (Ff(Cm)[this.cp] = this);
              }
              function vm() {
                throw 'cannot construct a VoidPtr, no constructor in IDL';
              }
              function Sm(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = void 0 === t ? pc() : rc(t)),
                  (Ff(Sm)[this.cp] = this);
              }
              function Om() {
                (this.cp = cc()), (Ff(Om)[this.cp] = this);
              }
              function Im() {
                throw 'cannot construct a btOverlappingPairCallback, no constructor in IDL';
              }
              function Pm(t, e, n, o, p) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  p && 'object' == typeof p && (p = p.cp),
                  (this.cp =
                    void 0 === o
                      ? Gc(t, e, n)
                      : void 0 === p
                      ? _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_4(
                          t,
                          e,
                          n,
                          o,
                        )
                      : Uc(t, e, n, o, p)),
                  (Ff(Pm)[this.cp] = this);
              }
              function Tm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp =
                    void 0 === t ? o_() : void 0 === e ? p_(t) : r_(t, e)),
                  (Ff(Tm)[this.cp] = this);
              }
              function Rm() {
                throw 'cannot construct a btCollisionConfiguration, no constructor in IDL';
              }
              function Dm() {
                (this.cp = y_()), (Ff(Dm)[this.cp] = this);
              }
              function Bm(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = g_(t)),
                  (Ff(Bm)[this.cp] = this);
              }
              function xm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = M_(t, e)),
                  (Ff(xm)[this.cp] = this);
              }
              function Am(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = void 0 === t ? z_() : Q_(t)),
                  (Ff(Am)[this.cp] = this);
              }
              function Mm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp =
                    void 0 === t ? da() : void 0 === e ? ha(t) : ga(t, e)),
                  (Ff(Mm)[this.cp] = this);
              }
              function Lm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = Sa(t, e)),
                  (Ff(Lm)[this.cp] = this);
              }
              function km(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = Xa(t, e)),
                  (Ff(km)[this.cp] = this);
              }
              function Fm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = void 0 === o ? gs(t, e, n) : js(t, e, n, o)),
                  (Ff(Fm)[this.cp] = this);
              }
              function Wm(t, e, n, o, p, r, i) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  p && 'object' == typeof p && (p = p.cp),
                  r && 'object' == typeof r && (r = r.cp),
                  i && 'object' == typeof i && (i = i.cp),
                  (this.cp =
                    void 0 === n
                      ? qs(t, e)
                      : void 0 === o
                      ? Ks(t, e, n)
                      : void 0 === p
                      ? Es(t, e, n, o)
                      : void 0 === r
                      ? Ns(t, e, n, o, p)
                      : void 0 === i
                      ? Vs(t, e, n, o, p, r)
                      : zs(t, e, n, o, p, r, i)),
                  (Ff(Wm)[this.cp] = this);
              }
              function Gm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = sl(t, e, n, o)),
                  (Ff(Gm)[this.cp] = this);
              }
              function Um() {
                (this.cp = Cl()), (Ff(Um)[this.cp] = this);
              }
              function wm() {
                throw 'cannot construct a btContactSolverInfo, no constructor in IDL';
              }
              function Hm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = void 0 === o ? Ul(t, e, n) : wl(t, e, n, o)),
                  (Ff(Hm)[this.cp] = this);
              }
              function qm(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp = su(t, e)),
                  (Ff(qm)[this.cp] = this);
              }
              function Km() {
                throw 'cannot construct a btOverlappingPairCache, no constructor in IDL';
              }
              function Em(t, e, n) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  (this.cp =
                    void 0 === t
                      ? Pu()
                      : void 0 === e
                      ? _emscripten_bind_btVector3_btVector3_1(t)
                      : void 0 === n
                      ? _emscripten_bind_btVector3_btVector3_2(t, e)
                      : Tu(t, e, n)),
                  (Ff(Em)[this.cp] = this);
              }
              function Nm(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = Fu(t)),
                  (Ff(Nm)[this.cp] = this);
              }
              function Vm() {
                (this.cp = Ju()), (Ff(Vm)[this.cp] = this);
              }
              function zm() {
                (this.cp = Zu()), (Ff(zm)[this.cp] = this);
              }
              function Qm() {
                (this.cp = _y()), (Ff(Qm)[this.cp] = this);
              }
              function Ym() {
                throw 'cannot construct a LocalShapeInfo, no constructor in IDL';
              }
              function Jm() {
                throw 'cannot construct a btVector3Array, no constructor in IDL';
              }
              function Xm() {
                throw 'cannot construct a btConstraintSolver, no constructor in IDL';
              }
              function Zm(t, e, n, o) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  n && 'object' == typeof n && (n = n.cp),
                  o && 'object' == typeof o && (o = o.cp),
                  (this.cp = Py(t, e, n, o)),
                  (Ff(Zm)[this.cp] = this);
              }
              function $m(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = My(t)),
                  (Ff($m)[this.cp] = this);
              }
              function td(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = Gy(t)),
                  (Ff(td)[this.cp] = this);
              }
              function ed() {
                throw 'cannot construct a btIndexedMeshArray, no constructor in IDL';
              }
              function nd(t, e) {
                t && 'object' == typeof t && (t = t.cp),
                  e && 'object' == typeof e && (e = e.cp),
                  (this.cp =
                    void 0 === t
                      ? Zb()
                      : void 0 === e
                      ? _emscripten_bind_btTransform_btTransform_1(t)
                      : $b(t, e)),
                  (Ff(nd)[this.cp] = this);
              }
              function od(t) {
                t && 'object' == typeof t && (t = t.cp),
                  (this.cp = sf(t)),
                  (Ff(od)[this.cp] = this);
              }
              return (
                Lf(),
                (kf.prototype = Object.create(kf.prototype)),
                (kf.prototype.constructor = kf),
                (kf.prototype.ep = kf),
                (kf.fp = {}),
                (n.WrapperObject = kf),
                (n.getCache = Ff),
                (n.wrapPointer = Wf),
                (n.castObject = function (t, e) {
                  return Wf(t.cp, e);
                }),
                (n.NULL = Wf(0)),
                (n.destroy = function (t) {
                  if (!t.__destroy__)
                    throw 'Error: Cannot destroy object. (Did you create it yourself?)';
                  t.__destroy__(), delete Ff(t.ep)[t.cp];
                }),
                (n.compare = function (t, e) {
                  return t.cp === e.cp;
                }),
                (n.getPointer = function (t) {
                  return t.cp;
                }),
                (n.getClass = function (t) {
                  return t.ep;
                }),
                (Gf.prototype = Object.create(kf.prototype)),
                (Gf.prototype.constructor = Gf),
                (Gf.prototype.ep = Gf),
                (Gf.fp = {}),
                (n.btCollisionShape = Gf),
                (Gf.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), E(e, t);
                }),
                (Gf.prototype.getLocalScaling = function () {
                  return Wf(N(this.cp), Em);
                }),
                (Gf.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    V(n, t, e);
                }),
                (Gf.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), z(e, t);
                }),
                (Gf.prototype.getMargin = function () {
                  return Q(this.cp);
                }),
                (Gf.prototype.isCompound = function () {
                  return !!Y(this.cp);
                }),
                (Gf.prototype.getUserIndex = function () {
                  return J(this.cp);
                }),
                (Gf.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), X(e, t);
                }),
                (Gf.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Z(o, t, e, n);
                }),
                (Gf.prototype.getLocalBoundingSphere = function () {
                  return $(this.cp);
                }),
                (Gf.prototype.__destroy__ = function () {
                  tt(this.cp);
                }),
                (Uf.prototype = Object.create(kf.prototype)),
                (Uf.prototype.constructor = Uf),
                (Uf.prototype.ep = Uf),
                (Uf.fp = {}),
                (n.btCollisionObject = Uf),
                (Uf.prototype.setAnisotropicFriction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    nt(n, t, e);
                }),
                (Uf.prototype.getCollisionShape = function () {
                  return Wf(ot(this.cp), Gf);
                }),
                (Uf.prototype.getActivationState = function () {
                  return pt(this.cp);
                }),
                (Uf.prototype.setActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), rt(e, t);
                }),
                (Uf.prototype.forceActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), it(e, t);
                }),
                (Uf.prototype.activate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    void 0 === t ? ct(e) : _t(e, t);
                }),
                (Uf.prototype.isActive = function () {
                  return !!at(this.cp);
                }),
                (Uf.prototype.isKinematicObject = function () {
                  return !!st(this.cp);
                }),
                (Uf.prototype.isStaticObject = function () {
                  return !!lt(this.cp);
                }),
                (Uf.prototype.isStaticOrKinematicObject = function () {
                  return !!ut(this.cp);
                }),
                (Uf.prototype.setRestitution = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), yt(e, t);
                }),
                (Uf.prototype.setFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), bt(e, t);
                }),
                (Uf.prototype.setRollingFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ft(e, t);
                }),
                (Uf.prototype.setSpinningFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), mt(e, t);
                }),
                (Uf.prototype.getWorldTransform = function () {
                  return Wf(dt(this.cp), nd);
                }),
                (Uf.prototype.getCollisionFlags = function () {
                  return ht(this.cp);
                }),
                (Uf.prototype.setCollisionFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gt(e, t);
                }),
                (Uf.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), jt(e, t);
                }),
                (Uf.prototype.setCollisionShape = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ct(e, t);
                }),
                (Uf.prototype.setCcdMotionThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vt(e, t);
                }),
                (Uf.prototype.setCcdSweptSphereRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), St(e, t);
                }),
                (Uf.prototype.getUserIndex = function () {
                  return Ot(this.cp);
                }),
                (Uf.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), It(e, t);
                }),
                (Uf.prototype.setUserIndex2 = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Pt(e, t);
                }),
                (Uf.prototype.setIgnoreCollisionCheck = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Tt(n, t, e);
                }),
                (Uf.prototype.__destroy__ = function () {
                  Rt(this.cp);
                }),
                (wf.prototype = Object.create(Gf.prototype)),
                (wf.prototype.constructor = wf),
                (wf.prototype.ep = wf),
                (wf.fp = {}),
                (n.btConvexShape = wf),
                (wf.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Dt(e, t);
                }),
                (wf.prototype.getLocalScaling = function () {
                  return Wf(Bt(this.cp), Em);
                }),
                (wf.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    xt(n, t, e);
                }),
                (wf.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), At(e, t);
                }),
                (wf.prototype.getMargin = function () {
                  return Mt(this.cp);
                }),
                (wf.prototype.isCompound = function () {
                  return !!Lt(this.cp);
                }),
                (wf.prototype.getUserIndex = function () {
                  return kt(this.cp);
                }),
                (wf.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ft(e, t);
                }),
                (wf.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Wt(o, t, e, n);
                }),
                (wf.prototype.getLocalBoundingSphere = function () {
                  return Gt(this.cp);
                }),
                (wf.prototype.__destroy__ = function () {
                  Ut(this.cp);
                }),
                (Hf.prototype = Object.create(Gf.prototype)),
                (Hf.prototype.constructor = Hf),
                (Hf.prototype.ep = Hf),
                (Hf.fp = {}),
                (n.btConcaveShape = Hf),
                (Hf.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), wt(e, t);
                }),
                (Hf.prototype.getLocalScaling = function () {
                  return Wf(Ht(this.cp), Em);
                }),
                (Hf.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    qt(n, t, e);
                }),
                (Hf.prototype.isCompound = function () {
                  return !!Kt(this.cp);
                }),
                (Hf.prototype.getUserIndex = function () {
                  return Et(this.cp);
                }),
                (Hf.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Nt(e, t);
                }),
                (Hf.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Vt(o, t, e, n);
                }),
                (Hf.prototype.getLocalBoundingSphere = function () {
                  return zt(this.cp);
                }),
                (Hf.prototype.__destroy__ = function () {
                  Qt(this.cp);
                }),
                (qf.prototype = Object.create(kf.prototype)),
                (qf.prototype.constructor = qf),
                (qf.prototype.ep = qf),
                (qf.fp = {}),
                (n.btCollisionWorld = qf),
                (qf.prototype.getDispatcher = function () {
                  return Wf(Yt(this.cp), Jf);
                }),
                (qf.prototype.rayTest = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Jt(o, t, e, n);
                }),
                (qf.prototype.rayTestSingle = function (t, e, n, o, p, r) {
                  var i = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    p && 'object' == typeof p && (p = p.cp),
                    r && 'object' == typeof r && (r = r.cp),
                    Xt(i, t, e, n, o, p, r);
                }),
                (qf.prototype.getPairCache = function () {
                  return Wf(Zt(this.cp), Km);
                }),
                (qf.prototype.addCollisionObject = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === e
                      ? $t(o, t)
                      : void 0 === n
                      ? te(o, t, e)
                      : ee(o, t, e, n);
                }),
                (qf.prototype.removeCollisionObject = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ne(e, t);
                }),
                (qf.prototype.setContactBreakingThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), oe(e, t);
                }),
                (qf.prototype.__destroy__ = function () {
                  pe(this.cp);
                }),
                (Kf.prototype = Object.create(kf.prototype)),
                (Kf.prototype.constructor = Kf),
                (Kf.prototype.ep = Kf),
                (Kf.fp = {}),
                (n.btTypedConstraint = Kf),
                (Kf.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), re(e, t);
                }),
                (Kf.prototype.getBreakingImpulseThreshold = function () {
                  return ie(this.cp);
                }),
                (Kf.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ce(e, t);
                }),
                (Kf.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    _e(n, t, e)
                  );
                }),
                (Kf.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    ae(o, t, e, n);
                }),
                (Kf.prototype.__destroy__ = function () {
                  se(this.cp);
                }),
                (Ef.prototype = Object.create(Kf.prototype)),
                (Ef.prototype.constructor = Ef),
                (Ef.prototype.ep = Ef),
                (Ef.fp = {}),
                (n.btGeneric6DofConstraint = Ef),
                (Ef.prototype.setLinearLowerLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ye(e, t);
                }),
                (Ef.prototype.setLinearUpperLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), be(e, t);
                }),
                (Ef.prototype.setAngularLowerLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), fe(e, t);
                }),
                (Ef.prototype.setAngularUpperLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), me(e, t);
                }),
                (Ef.prototype.getFrameOffsetA = function () {
                  return Wf(de(this.cp), nd);
                }),
                (Ef.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), he(e, t);
                }),
                (Ef.prototype.getBreakingImpulseThreshold = function () {
                  return ge(this.cp);
                }),
                (Ef.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), je(e, t);
                }),
                (Ef.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ce(n, t, e)
                  );
                }),
                (Ef.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    ve(o, t, e, n);
                }),
                (Ef.prototype.__destroy__ = function () {
                  Se(this.cp);
                }),
                (Nf.prototype = Object.create(kf.prototype)),
                (Nf.prototype.constructor = Nf),
                (Nf.prototype.ep = Nf),
                (Nf.fp = {}),
                (n.btStridingMeshInterface = Nf),
                (Nf.prototype.setScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Oe(e, t);
                }),
                (Nf.prototype.__destroy__ = function () {
                  Ie(this.cp);
                }),
                (Vf.prototype = Object.create(kf.prototype)),
                (Vf.prototype.constructor = Vf),
                (Vf.prototype.ep = Vf),
                (Vf.fp = {}),
                (n.btBroadphaseInterface = Vf),
                (Vf.prototype.getOverlappingPairCache = function () {
                  return Wf(Pe(this.cp), Km);
                }),
                (Vf.prototype.__destroy__ = function () {
                  Te(this.cp);
                }),
                (zf.prototype = Object.create(kf.prototype)),
                (zf.prototype.constructor = zf),
                (zf.prototype.ep = zf),
                (zf.fp = {}),
                (n.btMotionState = zf),
                (zf.prototype.getWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Re(e, t);
                }),
                (zf.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), De(e, t);
                }),
                (zf.prototype.__destroy__ = function () {
                  Be(this.cp);
                }),
                (Qf.prototype = Object.create(wf.prototype)),
                (Qf.prototype.constructor = Qf),
                (Qf.prototype.ep = Qf),
                (Qf.fp = {}),
                (n.btConvexInternalShape = Qf),
                (Qf.prototype.getImplicitShapeDimensions = function () {
                  return Wf(xe(this.cp), Em);
                }),
                (Qf.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ae(e, t);
                }),
                (Qf.prototype.getLocalScaling = function () {
                  return Wf(Me(this.cp), Em);
                }),
                (Qf.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Le(n, t, e);
                }),
                (Qf.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ke(e, t);
                }),
                (Qf.prototype.getMargin = function () {
                  return Fe(this.cp);
                }),
                (Qf.prototype.isCompound = function () {
                  return !!We(this.cp);
                }),
                (Qf.prototype.getUserIndex = function () {
                  return Ge(this.cp);
                }),
                (Qf.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ue(e, t);
                }),
                (Qf.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    we(o, t, e, n);
                }),
                (Qf.prototype.getLocalBoundingSphere = function () {
                  return He(this.cp);
                }),
                (Qf.prototype.__destroy__ = function () {
                  qe(this.cp);
                }),
                (Yf.prototype = Object.create(qf.prototype)),
                (Yf.prototype.constructor = Yf),
                (Yf.prototype.ep = Yf),
                (Yf.fp = {}),
                (n.btDynamicsWorld = Yf),
                (Yf.prototype.addAction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ke(e, t);
                }),
                (Yf.prototype.removeAction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ee(e, t);
                }),
                (Yf.prototype.getSolverInfo = function () {
                  return Wf(Ne(this.cp), wm);
                }),
                (Yf.prototype.getFixedBody = function () {
                  return Wf(Ve(this.cp), td);
                }),
                (Yf.prototype.getDispatcher = function () {
                  return Wf(ze(this.cp), Jf);
                }),
                (Yf.prototype.rayTest = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Qe(o, t, e, n);
                }),
                (Yf.prototype.rayTestSingle = function (t, e, n, o, p, r) {
                  var i = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    p && 'object' == typeof p && (p = p.cp),
                    r && 'object' == typeof r && (r = r.cp),
                    Ye(i, t, e, n, o, p, r);
                }),
                (Yf.prototype.getPairCache = function () {
                  return Wf(Je(this.cp), Km);
                }),
                (Yf.prototype.addCollisionObject = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === e
                      ? Xe(o, t)
                      : void 0 === n
                      ? Ze(o, t, e)
                      : $e(o, t, e, n);
                }),
                (Yf.prototype.removeCollisionObject = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), tn(e, t);
                }),
                (Yf.prototype.setContactBreakingThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), en(e, t);
                }),
                (Yf.prototype.__destroy__ = function () {
                  nn(this.cp);
                }),
                (Jf.prototype = Object.create(kf.prototype)),
                (Jf.prototype.constructor = Jf),
                (Jf.prototype.ep = Jf),
                (Jf.fp = {}),
                (n.btDispatcher = Jf),
                (Jf.prototype.getNumManifolds = function () {
                  return on(this.cp);
                }),
                (Jf.prototype.getManifoldByIndexInternal = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(pn(e, t), Dm)
                  );
                }),
                (Jf.prototype.__destroy__ = function () {
                  rn(this.cp);
                }),
                (Xf.prototype = Object.create(kf.prototype)),
                (Xf.prototype.constructor = Xf),
                (Xf.prototype.ep = Xf),
                (Xf.fp = {}),
                (n.RayResultCallback = Xf),
                (Xf.prototype.hasHit = function () {
                  return !!cn(this.cp);
                }),
                (Xf.prototype.setUseCC = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), _n(e, t);
                }),
                (Xf.prototype.get_m_collisionFilterGroup = Xf.prototype.gp =
                  function () {
                    return an(this.cp);
                  }),
                (Xf.prototype.set_m_collisionFilterGroup = Xf.prototype.jp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), sn(e, t);
                  }),
                Object.defineProperty(Xf.prototype, 'm_collisionFilterGroup', {
                  get: Xf.prototype.gp,
                  set: Xf.prototype.jp,
                }),
                (Xf.prototype.get_m_collisionFilterMask = Xf.prototype.hp =
                  function () {
                    return ln(this.cp);
                  }),
                (Xf.prototype.set_m_collisionFilterMask = Xf.prototype.kp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), un(e, t);
                  }),
                Object.defineProperty(Xf.prototype, 'm_collisionFilterMask', {
                  get: Xf.prototype.hp,
                  set: Xf.prototype.kp,
                }),
                (Xf.prototype.get_m_shapePart = Xf.prototype.ip =
                  function () {
                    return yn(this.cp);
                  }),
                (Xf.prototype.set_m_shapePart = Xf.prototype.lp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), bn(e, t);
                  }),
                Object.defineProperty(Xf.prototype, 'm_shapePart', {
                  get: Xf.prototype.ip,
                  set: Xf.prototype.lp,
                }),
                (Xf.prototype.get_m_closestHitFraction = Xf.prototype.mp =
                  function () {
                    return fn(this.cp);
                  }),
                (Xf.prototype.set_m_closestHitFraction = Xf.prototype.op =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), mn(e, t);
                  }),
                Object.defineProperty(Xf.prototype, 'm_closestHitFraction', {
                  get: Xf.prototype.mp,
                  set: Xf.prototype.op,
                }),
                (Xf.prototype.get_m_collisionObject = Xf.prototype.np =
                  function () {
                    return Wf(dn(this.cp), Uf);
                  }),
                (Xf.prototype.set_m_collisionObject = Xf.prototype.pp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), hn(e, t);
                  }),
                Object.defineProperty(Xf.prototype, 'm_collisionObject', {
                  get: Xf.prototype.np,
                  set: Xf.prototype.pp,
                }),
                (Xf.prototype.__destroy__ = function () {
                  gn(this.cp);
                }),
                (Zf.prototype = Object.create(kf.prototype)),
                (Zf.prototype.constructor = Zf),
                (Zf.prototype.ep = Zf),
                (Zf.fp = {}),
                (n.btActionInterface = Zf),
                (Zf.prototype.updateAction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    jn(n, t, e);
                }),
                (Zf.prototype.__destroy__ = function () {
                  Cn(this.cp);
                }),
                ($f.prototype = Object.create(Hf.prototype)),
                ($f.prototype.constructor = $f),
                ($f.prototype.ep = $f),
                ($f.fp = {}),
                (n.btTriangleMeshShape = $f),
                ($f.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vn(e, t);
                }),
                ($f.prototype.getLocalScaling = function () {
                  return Wf(Sn(this.cp), Em);
                }),
                ($f.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    On(n, t, e);
                }),
                ($f.prototype.isCompound = function () {
                  return !!In(this.cp);
                }),
                ($f.prototype.getUserIndex = function () {
                  return Pn(this.cp);
                }),
                ($f.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Tn(e, t);
                }),
                ($f.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Rn(o, t, e, n);
                }),
                ($f.prototype.getLocalBoundingSphere = function () {
                  return Dn(this.cp);
                }),
                ($f.prototype.__destroy__ = function () {
                  Bn(this.cp);
                }),
                (tm.prototype = Object.create(Uf.prototype)),
                (tm.prototype.constructor = tm),
                (tm.prototype.ep = tm),
                (tm.fp = {}),
                (n.btGhostObject = tm),
                (tm.prototype.getNumOverlappingObjects = function () {
                  return An(this.cp);
                }),
                (tm.prototype.getOverlappingObject = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(Mn(e, t), Uf)
                  );
                }),
                (tm.prototype.setAnisotropicFriction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ln(n, t, e);
                }),
                (tm.prototype.getCollisionShape = function () {
                  return Wf(kn(this.cp), Gf);
                }),
                (tm.prototype.getActivationState = function () {
                  return Fn(this.cp);
                }),
                (tm.prototype.setActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Wn(e, t);
                }),
                (tm.prototype.forceActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Gn(e, t);
                }),
                (tm.prototype.activate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    void 0 === t ? Un(e) : wn(e, t);
                }),
                (tm.prototype.isActive = function () {
                  return !!Hn(this.cp);
                }),
                (tm.prototype.isKinematicObject = function () {
                  return !!qn(this.cp);
                }),
                (tm.prototype.isStaticObject = function () {
                  return !!Kn(this.cp);
                }),
                (tm.prototype.isStaticOrKinematicObject = function () {
                  return !!En(this.cp);
                }),
                (tm.prototype.setRestitution = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Nn(e, t);
                }),
                (tm.prototype.setFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vn(e, t);
                }),
                (tm.prototype.setRollingFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), zn(e, t);
                }),
                (tm.prototype.setSpinningFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Qn(e, t);
                }),
                (tm.prototype.getWorldTransform = function () {
                  return Wf(Yn(this.cp), nd);
                }),
                (tm.prototype.getCollisionFlags = function () {
                  return Jn(this.cp);
                }),
                (tm.prototype.setCollisionFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Xn(e, t);
                }),
                (tm.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Zn(e, t);
                }),
                (tm.prototype.setCollisionShape = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $n(e, t);
                }),
                (tm.prototype.setCcdMotionThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), to(e, t);
                }),
                (tm.prototype.setCcdSweptSphereRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), eo(e, t);
                }),
                (tm.prototype.getUserIndex = function () {
                  return no(this.cp);
                }),
                (tm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), oo(e, t);
                }),
                (tm.prototype.setUserIndex2 = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), po(e, t);
                }),
                (tm.prototype.setIgnoreCollisionCheck = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    ro(n, t, e);
                }),
                (tm.prototype.__destroy__ = function () {
                  io(this.cp);
                }),
                (em.prototype = Object.create(kf.prototype)),
                (em.prototype.constructor = em),
                (em.prototype.ep = em),
                (em.fp = {}),
                (n.btOverlapFilterCallback = em),
                (em.prototype.__destroy__ = function () {
                  co(this.cp);
                }),
                (nm.prototype = Object.create(kf.prototype)),
                (nm.prototype.constructor = nm),
                (nm.prototype.ep = nm),
                (nm.fp = {}),
                (n.btQuadWord = nm),
                (nm.prototype.x = nm.prototype.x =
                  function () {
                    return _o(this.cp);
                  }),
                (nm.prototype.y = nm.prototype.y =
                  function () {
                    return ao(this.cp);
                  }),
                (nm.prototype.z = nm.prototype.z =
                  function () {
                    return so(this.cp);
                  }),
                (nm.prototype.w = function () {
                  return lo(this.cp);
                }),
                (nm.prototype.setX = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), uo(e, t);
                }),
                (nm.prototype.setY = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), yo(e, t);
                }),
                (nm.prototype.setZ = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), bo(e, t);
                }),
                (nm.prototype.setW = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), fo(e, t);
                }),
                (nm.prototype.__destroy__ = function () {
                  mo(this.cp);
                }),
                (om.prototype = Object.create(kf.prototype)),
                (om.prototype.constructor = om),
                (om.prototype.ep = om),
                (om.fp = {}),
                (n.btMatrix3x3 = om),
                (om.prototype.getRotation = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ho(e, t);
                }),
                (om.prototype.__destroy__ = function () {
                  go(this.cp);
                }),
                (pm.prototype = Object.create(kf.prototype)),
                (pm.prototype.constructor = pm),
                (pm.prototype.ep = pm),
                (pm.fp = {}),
                (n.btScalarArray = pm),
                (pm.prototype.size = pm.prototype.size =
                  function () {
                    return jo(this.cp);
                  }),
                (pm.prototype.at = function (t) {
                  var e = this.cp;
                  return t && 'object' == typeof t && (t = t.cp), Co(e, t);
                }),
                (pm.prototype.clear = pm.prototype.clear =
                  function () {
                    vo(this.cp);
                  }),
                (pm.prototype.__destroy__ = function () {
                  So(this.cp);
                }),
                (rm.prototype = Object.create($f.prototype)),
                (rm.prototype.constructor = rm),
                (rm.prototype.ep = rm),
                (rm.fp = {}),
                (n.btBvhTriangleMeshShape = rm),
                (rm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Po(e, t);
                }),
                (rm.prototype.getLocalScaling = function () {
                  return Wf(To(this.cp), Em);
                }),
                (rm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ro(n, t, e);
                }),
                (rm.prototype.isCompound = function () {
                  return !!Do(this.cp);
                }),
                (rm.prototype.getUserIndex = function () {
                  return Bo(this.cp);
                }),
                (rm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), xo(e, t);
                }),
                (rm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Ao(o, t, e, n);
                }),
                (rm.prototype.getLocalBoundingSphere = function () {
                  return Mo(this.cp);
                }),
                (rm.prototype.__destroy__ = function () {
                  Lo(this.cp);
                }),
                (im.prototype = Object.create(Vf.prototype)),
                (im.prototype.constructor = im),
                (im.prototype.ep = im),
                (im.fp = {}),
                (n.btDbvtBroadphase = im),
                (im.prototype.getOverlappingPairCache = function () {
                  return Wf(Fo(this.cp), Km);
                }),
                (im.prototype.__destroy__ = function () {
                  Wo(this.cp);
                }),
                (cm.prototype = Object.create(kf.prototype)),
                (cm.prototype.constructor = cm),
                (cm.prototype.ep = cm),
                (cm.fp = {}),
                (n.btIntArray = cm),
                (cm.prototype.size = cm.prototype.size =
                  function () {
                    return Go(this.cp);
                  }),
                (cm.prototype.at = function (t) {
                  var e = this.cp;
                  return t && 'object' == typeof t && (t = t.cp), Uo(e, t);
                }),
                (cm.prototype.clear = cm.prototype.clear =
                  function () {
                    wo(this.cp);
                  }),
                (cm.prototype.__destroy__ = function () {
                  Ho(this.cp);
                }),
                (_m.prototype = Object.create(kf.prototype)),
                (_m.prototype.constructor = _m),
                (_m.prototype.ep = _m),
                (_m.fp = {}),
                (n.btConstCollisionObjectArray = _m),
                (_m.prototype.size = _m.prototype.size =
                  function () {
                    return qo(this.cp);
                  }),
                (_m.prototype.at = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(Ko(e, t), Uf)
                  );
                }),
                (_m.prototype.clear = _m.prototype.clear =
                  function () {
                    Eo(this.cp);
                  }),
                (_m.prototype.__destroy__ = function () {
                  No(this.cp);
                }),
                (am.prototype = Object.create(kf.prototype)),
                (am.prototype.constructor = am),
                (am.prototype.ep = am),
                (am.fp = {}),
                (n.btBroadphaseProxy = am),
                (am.prototype.get_m_collisionFilterGroup = am.prototype.gp =
                  function () {
                    return Vo(this.cp);
                  }),
                (am.prototype.set_m_collisionFilterGroup = am.prototype.jp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), zo(e, t);
                  }),
                Object.defineProperty(am.prototype, 'm_collisionFilterGroup', {
                  get: am.prototype.gp,
                  set: am.prototype.jp,
                }),
                (am.prototype.get_m_collisionFilterMask = am.prototype.hp =
                  function () {
                    return Qo(this.cp);
                  }),
                (am.prototype.set_m_collisionFilterMask = am.prototype.kp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Yo(e, t);
                  }),
                Object.defineProperty(am.prototype, 'm_collisionFilterMask', {
                  get: am.prototype.hp,
                  set: am.prototype.kp,
                }),
                (am.prototype.__destroy__ = function () {
                  Jo(this.cp);
                }),
                (sm.prototype = Object.create(Kf.prototype)),
                (sm.prototype.constructor = sm),
                (sm.prototype.ep = sm),
                (sm.fp = {}),
                (n.btSliderConstraint = sm),
                (sm.prototype.setLowerLinLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $o(e, t);
                }),
                (sm.prototype.setUpperLinLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), tp(e, t);
                }),
                (sm.prototype.setLowerAngLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ep(e, t);
                }),
                (sm.prototype.setUpperAngLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), np(e, t);
                }),
                (sm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), op(e, t);
                }),
                (sm.prototype.getBreakingImpulseThreshold = function () {
                  return pp(this.cp);
                }),
                (sm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), rp(e, t);
                }),
                (sm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    ip(n, t, e)
                  );
                }),
                (sm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    cp(o, t, e, n);
                }),
                (sm.prototype.__destroy__ = function () {
                  _p(this.cp);
                }),
                (lm.prototype = Object.create(kf.prototype)),
                (lm.prototype.constructor = lm),
                (lm.prototype.ep = lm),
                (lm.fp = {}),
                (n.btIndexedMesh = lm),
                (lm.prototype.get_m_numTriangles = lm.prototype.Wp =
                  function () {
                    return ap(this.cp);
                  }),
                (lm.prototype.set_m_numTriangles = lm.prototype.Fq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), sp(e, t);
                  }),
                Object.defineProperty(lm.prototype, 'm_numTriangles', {
                  get: lm.prototype.Wp,
                  set: lm.prototype.Fq,
                }),
                (lm.prototype.__destroy__ = function () {
                  lp(this.cp);
                }),
                (um.prototype = Object.create(kf.prototype)),
                (um.prototype.constructor = um),
                (um.prototype.ep = um),
                (um.fp = {}),
                (n.btRigidBodyConstructionInfo = um),
                (um.prototype.get_m_linearDamping = um.prototype.Qp =
                  function () {
                    return bp(this.cp);
                  }),
                (um.prototype.set_m_linearDamping = um.prototype.zq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), fp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_linearDamping', {
                  get: um.prototype.Qp,
                  set: um.prototype.zq,
                }),
                (um.prototype.get_m_angularDamping = um.prototype.Gp =
                  function () {
                    return mp(this.cp);
                  }),
                (um.prototype.set_m_angularDamping = um.prototype.pq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), dp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_angularDamping', {
                  get: um.prototype.Gp,
                  set: um.prototype.pq,
                }),
                (um.prototype.get_m_friction = um.prototype.Lp =
                  function () {
                    return hp(this.cp);
                  }),
                (um.prototype.set_m_friction = um.prototype.uq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), gp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_friction', {
                  get: um.prototype.Lp,
                  set: um.prototype.uq,
                }),
                (um.prototype.get_m_rollingFriction = um.prototype.$p =
                  function () {
                    return jp(this.cp);
                  }),
                (um.prototype.set_m_rollingFriction = um.prototype.Jq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Cp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_rollingFriction', {
                  get: um.prototype.$p,
                  set: um.prototype.Jq,
                }),
                (um.prototype.get_m_restitution = um.prototype.Zp =
                  function () {
                    return vp(this.cp);
                  }),
                (um.prototype.set_m_restitution = um.prototype.Iq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Sp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_restitution', {
                  get: um.prototype.Zp,
                  set: um.prototype.Iq,
                }),
                (um.prototype.get_m_linearSleepingThreshold = um.prototype.Rp =
                  function () {
                    return Op(this.cp);
                  }),
                (um.prototype.set_m_linearSleepingThreshold = um.prototype.Aq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ip(e, t);
                  }),
                Object.defineProperty(
                  um.prototype,
                  'm_linearSleepingThreshold',
                  { get: um.prototype.Rp, set: um.prototype.Aq },
                ),
                (um.prototype.get_m_angularSleepingThreshold = um.prototype.Hp =
                  function () {
                    return Pp(this.cp);
                  }),
                (um.prototype.set_m_angularSleepingThreshold = um.prototype.qq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Tp(e, t);
                  }),
                Object.defineProperty(
                  um.prototype,
                  'm_angularSleepingThreshold',
                  { get: um.prototype.Hp, set: um.prototype.qq },
                ),
                (um.prototype.get_m_additionalDamping = um.prototype.Dp =
                  function () {
                    return !!Rp(this.cp);
                  }),
                (um.prototype.set_m_additionalDamping = um.prototype.mq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Dp(e, t);
                  }),
                Object.defineProperty(um.prototype, 'm_additionalDamping', {
                  get: um.prototype.Dp,
                  set: um.prototype.mq,
                }),
                (um.prototype.get_m_additionalDampingFactor = um.prototype.Ep =
                  function () {
                    return Bp(this.cp);
                  }),
                (um.prototype.set_m_additionalDampingFactor = um.prototype.nq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), xp(e, t);
                  }),
                Object.defineProperty(
                  um.prototype,
                  'm_additionalDampingFactor',
                  { get: um.prototype.Ep, set: um.prototype.nq },
                ),
                (um.prototype.get_m_additionalLinearDampingThresholdSqr =
                  um.prototype.Fp =
                    function () {
                      return Ap(this.cp);
                    }),
                (um.prototype.set_m_additionalLinearDampingThresholdSqr =
                  um.prototype.oq =
                    function (t) {
                      var e = this.cp;
                      t && 'object' == typeof t && (t = t.cp), Mp(e, t);
                    }),
                Object.defineProperty(
                  um.prototype,
                  'm_additionalLinearDampingThresholdSqr',
                  { get: um.prototype.Fp, set: um.prototype.oq },
                ),
                (um.prototype.get_m_additionalAngularDampingThresholdSqr =
                  um.prototype.Cp =
                    function () {
                      return Lp(this.cp);
                    }),
                (um.prototype.set_m_additionalAngularDampingThresholdSqr =
                  um.prototype.lq =
                    function (t) {
                      var e = this.cp;
                      t && 'object' == typeof t && (t = t.cp), kp(e, t);
                    }),
                Object.defineProperty(
                  um.prototype,
                  'm_additionalAngularDampingThresholdSqr',
                  { get: um.prototype.Cp, set: um.prototype.lq },
                ),
                (um.prototype.get_m_additionalAngularDampingFactor =
                  um.prototype.Bp =
                    function () {
                      return Fp(this.cp);
                    }),
                (um.prototype.set_m_additionalAngularDampingFactor =
                  um.prototype.kq =
                    function (t) {
                      var e = this.cp;
                      t && 'object' == typeof t && (t = t.cp), Wp(e, t);
                    }),
                Object.defineProperty(
                  um.prototype,
                  'm_additionalAngularDampingFactor',
                  { get: um.prototype.Bp, set: um.prototype.kq },
                ),
                (um.prototype.__destroy__ = function () {
                  Gp(this.cp);
                }),
                (ym.prototype = Object.create(kf.prototype)),
                (ym.prototype.constructor = ym),
                (ym.prototype.ep = ym),
                (ym.fp = {}),
                (n.btManifoldPoint = ym),
                (ym.prototype.getAppliedImpulse = function () {
                  return Up(this.cp);
                }),
                (ym.prototype.getDistance = function () {
                  return wp(this.cp);
                }),
                (ym.prototype.getShape0 = function () {
                  return Wf(Hp(this.cp), Gf);
                }),
                (ym.prototype.getShape1 = function () {
                  return Wf(qp(this.cp), Gf);
                }),
                (ym.prototype.get_m_localPointA = ym.prototype.Sp =
                  function () {
                    return Wf(Kp(this.cp), Em);
                  }),
                (ym.prototype.set_m_localPointA = ym.prototype.Bq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ep(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_localPointA', {
                  get: ym.prototype.Sp,
                  set: ym.prototype.Bq,
                }),
                (ym.prototype.get_m_localPointB = ym.prototype.Tp =
                  function () {
                    return Wf(Np(this.cp), Em);
                  }),
                (ym.prototype.set_m_localPointB = ym.prototype.Cq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Vp(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_localPointB', {
                  get: ym.prototype.Tp,
                  set: ym.prototype.Cq,
                }),
                (ym.prototype.get_m_positionWorldOnA = ym.prototype.Xp =
                  function () {
                    return Wf(zp(this.cp), Em);
                  }),
                (ym.prototype.set_m_positionWorldOnA = ym.prototype.Gq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Qp(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_positionWorldOnA', {
                  get: ym.prototype.Xp,
                  set: ym.prototype.Gq,
                }),
                (ym.prototype.get_m_positionWorldOnB = ym.prototype.Yp =
                  function () {
                    return Wf(Yp(this.cp), Em);
                  }),
                (ym.prototype.set_m_positionWorldOnB = ym.prototype.Hq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Jp(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_positionWorldOnB', {
                  get: ym.prototype.Yp,
                  set: ym.prototype.Hq,
                }),
                (ym.prototype.get_m_normalWorldOnB = ym.prototype.Up =
                  function () {
                    return Wf(Xp(this.cp), Em);
                  }),
                (ym.prototype.set_m_normalWorldOnB = ym.prototype.Dq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Zp(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_normalWorldOnB', {
                  get: ym.prototype.Up,
                  set: ym.prototype.Dq,
                }),
                (ym.prototype.get_m_distance1 = ym.prototype.Kp =
                  function () {
                    return $p(this.cp);
                  }),
                (ym.prototype.set_m_distance1 = ym.prototype.tq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), tr(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_distance1', {
                  get: ym.prototype.Kp,
                  set: ym.prototype.tq,
                }),
                (ym.prototype.get_m_index0 = ym.prototype.Op =
                  function () {
                    return er(this.cp);
                  }),
                (ym.prototype.set_m_index0 = ym.prototype.xq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), nr(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_index0', {
                  get: ym.prototype.Op,
                  set: ym.prototype.xq,
                }),
                (ym.prototype.get_m_index1 = ym.prototype.Pp =
                  function () {
                    return or(this.cp);
                  }),
                (ym.prototype.set_m_index1 = ym.prototype.yq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), pr(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_index1', {
                  get: ym.prototype.Pp,
                  set: ym.prototype.yq,
                }),
                (ym.prototype.get_m_userPersistentData = ym.prototype.hq =
                  function () {
                    return rr(this.cp);
                  }),
                (ym.prototype.set_m_userPersistentData = ym.prototype.Qq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), ir(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_userPersistentData', {
                  get: ym.prototype.hq,
                  set: ym.prototype.Qq,
                }),
                (ym.prototype.get_m_userPersistentData0 = ym.prototype.iq =
                  function () {
                    return cr(this.cp);
                  }),
                (ym.prototype.set_m_userPersistentData0 = ym.prototype.Rq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), _r(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_userPersistentData0', {
                  get: ym.prototype.iq,
                  set: ym.prototype.Rq,
                }),
                (ym.prototype.get_m_userPersistentData1 = ym.prototype.jq =
                  function () {
                    return ar(this.cp);
                  }),
                (ym.prototype.set_m_userPersistentData1 = ym.prototype.Sq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), sr(e, t);
                  }),
                Object.defineProperty(ym.prototype, 'm_userPersistentData1', {
                  get: ym.prototype.jq,
                  set: ym.prototype.Sq,
                }),
                (ym.prototype.__destroy__ = function () {
                  lr(this.cp);
                }),
                (bm.prototype = Object.create(kf.prototype)),
                (bm.prototype.constructor = bm),
                (bm.prototype.ep = bm),
                (bm.fp = {}),
                (n.btSequentialImpulseConstraintSolver = bm),
                (bm.prototype.__destroy__ = function () {
                  yr(this.cp);
                }),
                (fm.prototype = Object.create(Yf.prototype)),
                (fm.prototype.constructor = fm),
                (fm.prototype.ep = fm),
                (fm.fp = {}),
                (n.btDiscreteDynamicsWorld = fm),
                (fm.prototype.setGravity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), fr(e, t);
                }),
                (fm.prototype.getGravity = function () {
                  return Wf(mr(this.cp), Em);
                }),
                (fm.prototype.addRigidBody = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === e
                      ? dr(o, t)
                      : void 0 === n
                      ? _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_2(
                          o,
                          t,
                          e,
                        )
                      : hr(o, t, e, n);
                }),
                (fm.prototype.removeRigidBody = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gr(e, t);
                }),
                (fm.prototype.addConstraint = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    void 0 === e ? jr(n, t) : Cr(n, t, e);
                }),
                (fm.prototype.removeConstraint = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vr(e, t);
                }),
                (fm.prototype.stepSimulation = function (t, e, n) {
                  var o = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === e
                      ? Sr(o, t)
                      : void 0 === n
                      ? Or(o, t, e)
                      : Ir(o, t, e, n)
                  );
                }),
                (fm.prototype.getDispatcher = function () {
                  return Wf(Pr(this.cp), Jf);
                }),
                (fm.prototype.rayTest = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Tr(o, t, e, n);
                }),
                (fm.prototype.rayTestSingle = function (t, e, n, o, p, r) {
                  var i = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    p && 'object' == typeof p && (p = p.cp),
                    r && 'object' == typeof r && (r = r.cp),
                    Rr(i, t, e, n, o, p, r);
                }),
                (fm.prototype.getPairCache = function () {
                  return Wf(Dr(this.cp), Km);
                }),
                (fm.prototype.addCollisionObject = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === e
                      ? Br(o, t)
                      : void 0 === n
                      ? xr(o, t, e)
                      : Ar(o, t, e, n);
                }),
                (fm.prototype.removeCollisionObject = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Mr(e, t);
                }),
                (fm.prototype.setContactBreakingThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Lr(e, t);
                }),
                (fm.prototype.addAction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), kr(e, t);
                }),
                (fm.prototype.removeAction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Fr(e, t);
                }),
                (fm.prototype.getSolverInfo = function () {
                  return Wf(Wr(this.cp), wm);
                }),
                (fm.prototype.getFixedBody = function () {
                  return Wf(Gr(this.cp), td);
                }),
                (fm.prototype.__destroy__ = function () {
                  Ur(this.cp);
                }),
                (mm.prototype = Object.create(Kf.prototype)),
                (mm.prototype.constructor = mm),
                (mm.prototype.ep = mm),
                (mm.fp = {}),
                (n.btPoint2PointConstraint = mm),
                (mm.prototype.setPivotA = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), qr(e, t);
                }),
                (mm.prototype.setPivotB = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Kr(e, t);
                }),
                (mm.prototype.getPivotInA = function () {
                  return Wf(Er(this.cp), Em);
                }),
                (mm.prototype.getPivotInB = function () {
                  return Wf(Nr(this.cp), Em);
                }),
                (mm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vr(e, t);
                }),
                (mm.prototype.getBreakingImpulseThreshold = function () {
                  return zr(this.cp);
                }),
                (mm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Qr(e, t);
                }),
                (mm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Yr(n, t, e)
                  );
                }),
                (mm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Jr(o, t, e, n);
                }),
                (mm.prototype.get_m_setting = mm.prototype.aq =
                  function () {
                    return Wf(Xr(this.cp), Qm);
                  }),
                (mm.prototype.set_m_setting = mm.prototype.Kq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Zr(e, t);
                  }),
                Object.defineProperty(mm.prototype, 'm_setting', {
                  get: mm.prototype.aq,
                  set: mm.prototype.Kq,
                }),
                (mm.prototype.__destroy__ = function () {
                  $r(this.cp);
                }),
                (dm.prototype = Object.create(em.prototype)),
                (dm.prototype.constructor = dm),
                (dm.prototype.ep = dm),
                (dm.fp = {}),
                (n.ccOverlapFilterCallback = dm),
                (dm.prototype.__destroy__ = function () {
                  ei(this.cp);
                }),
                (hm.prototype = Object.create(wf.prototype)),
                (hm.prototype.constructor = hm),
                (hm.prototype.ep = hm),
                (hm.fp = {}),
                (n.btConvexTriangleMeshShape = hm),
                (hm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), pi(e, t);
                }),
                (hm.prototype.getLocalScaling = function () {
                  return Wf(ri(this.cp), Em);
                }),
                (hm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    ii(n, t, e);
                }),
                (hm.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ci(e, t);
                }),
                (hm.prototype.getMargin = function () {
                  return _i(this.cp);
                }),
                (hm.prototype.isCompound = function () {
                  return !!ai(this.cp);
                }),
                (hm.prototype.getUserIndex = function () {
                  return si(this.cp);
                }),
                (hm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), li(e, t);
                }),
                (hm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    ui(o, t, e, n);
                }),
                (hm.prototype.getLocalBoundingSphere = function () {
                  return yi(this.cp);
                }),
                (hm.prototype.__destroy__ = function () {
                  bi(this.cp);
                }),
                (gm.prototype = Object.create(Kf.prototype)),
                (gm.prototype.constructor = gm),
                (gm.prototype.ep = gm),
                (gm.fp = {}),
                (n.btConeTwistConstraint = gm),
                (gm.prototype.setLimit = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    di(n, t, e);
                }),
                (gm.prototype.setAngularOnly = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), hi(e, t);
                }),
                (gm.prototype.setDamping = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gi(e, t);
                }),
                (gm.prototype.enableMotor = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ji(e, t);
                }),
                (gm.prototype.setMaxMotorImpulse = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ci(e, t);
                }),
                (gm.prototype.setMaxMotorImpulseNormalized = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vi(e, t);
                }),
                (gm.prototype.setMotorTarget = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Si(e, t);
                }),
                (gm.prototype.setMotorTargetInConstraintSpace = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Oi(e, t);
                }),
                (gm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ii(e, t);
                }),
                (gm.prototype.getBreakingImpulseThreshold = function () {
                  return Pi(this.cp);
                }),
                (gm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ti(e, t);
                }),
                (gm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ri(n, t, e)
                  );
                }),
                (gm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Di(o, t, e, n);
                }),
                (gm.prototype.__destroy__ = function () {
                  Bi(this.cp);
                }),
                (jm.prototype = Object.create(Qf.prototype)),
                (jm.prototype.constructor = jm),
                (jm.prototype.ep = jm),
                (jm.fp = {}),
                (n.btConeShape = jm),
                (jm.prototype.setRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ai(e, t);
                }),
                (jm.prototype.setHeight = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Mi(e, t);
                }),
                (jm.prototype.setConeUpIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Li(e, t);
                }),
                (jm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ki(e, t);
                }),
                (jm.prototype.getLocalScaling = function () {
                  return Wf(Fi(this.cp), Em);
                }),
                (jm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Wi(n, t, e);
                }),
                (jm.prototype.isCompound = function () {
                  return !!Gi(this.cp);
                }),
                (jm.prototype.getUserIndex = function () {
                  return Ui(this.cp);
                }),
                (jm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), wi(e, t);
                }),
                (jm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Hi(o, t, e, n);
                }),
                (jm.prototype.getLocalBoundingSphere = function () {
                  return qi(this.cp);
                }),
                (jm.prototype.getImplicitShapeDimensions = function () {
                  return Wf(Ki(this.cp), Em);
                }),
                (jm.prototype.__destroy__ = function () {
                  Ei(this.cp);
                }),
                (Cm.prototype = Object.create(Hf.prototype)),
                (Cm.prototype.constructor = Cm),
                (Cm.prototype.ep = Cm),
                (Cm.fp = {}),
                (n.btHeightfieldTerrainShape = Cm),
                (Cm.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vi(e, t);
                }),
                (Cm.prototype.getMargin = function () {
                  return zi(this.cp);
                }),
                (Cm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Qi(e, t);
                }),
                (Cm.prototype.getLocalScaling = function () {
                  return Wf(Yi(this.cp), Em);
                }),
                (Cm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ji(n, t, e);
                }),
                (Cm.prototype.isCompound = function () {
                  return !!Xi(this.cp);
                }),
                (Cm.prototype.getUserIndex = function () {
                  return Zi(this.cp);
                }),
                (Cm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $i(e, t);
                }),
                (Cm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    tc(o, t, e, n);
                }),
                (Cm.prototype.getLocalBoundingSphere = function () {
                  return ec(this.cp);
                }),
                (Cm.prototype.__destroy__ = function () {
                  nc(this.cp);
                }),
                (vm.prototype = Object.create(kf.prototype)),
                (vm.prototype.constructor = vm),
                (vm.prototype.ep = vm),
                (vm.fp = {}),
                (n.VoidPtr = vm),
                (vm.prototype.__destroy__ = function () {
                  oc(this.cp);
                }),
                (Sm.prototype = Object.create(kf.prototype)),
                (Sm.prototype.constructor = Sm),
                (Sm.prototype.ep = Sm),
                (Sm.fp = {}),
                (n.btDefaultCollisionConfiguration = Sm),
                (Sm.prototype.__destroy__ = function () {
                  ic(this.cp);
                }),
                (Om.prototype = Object.create(tm.prototype)),
                (Om.prototype.constructor = Om),
                (Om.prototype.ep = Om),
                (Om.fp = {}),
                (n.btPairCachingGhostObject = Om),
                (Om.prototype.setAnisotropicFriction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    _c(n, t, e);
                }),
                (Om.prototype.getCollisionShape = function () {
                  return Wf(ac(this.cp), Gf);
                }),
                (Om.prototype.getActivationState = function () {
                  return sc(this.cp);
                }),
                (Om.prototype.setActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), lc(e, t);
                }),
                (Om.prototype.forceActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), uc(e, t);
                }),
                (Om.prototype.activate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    void 0 === t ? yc(e) : bc(e, t);
                }),
                (Om.prototype.isActive = function () {
                  return !!fc(this.cp);
                }),
                (Om.prototype.isKinematicObject = function () {
                  return !!mc(this.cp);
                }),
                (Om.prototype.isStaticObject = function () {
                  return !!dc(this.cp);
                }),
                (Om.prototype.isStaticOrKinematicObject = function () {
                  return !!hc(this.cp);
                }),
                (Om.prototype.setRestitution = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gc(e, t);
                }),
                (Om.prototype.setFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), jc(e, t);
                }),
                (Om.prototype.setRollingFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Cc(e, t);
                }),
                (Om.prototype.setSpinningFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vc(e, t);
                }),
                (Om.prototype.getWorldTransform = function () {
                  return Wf(Sc(this.cp), nd);
                }),
                (Om.prototype.getCollisionFlags = function () {
                  return Oc(this.cp);
                }),
                (Om.prototype.setCollisionFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ic(e, t);
                }),
                (Om.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Pc(e, t);
                }),
                (Om.prototype.setCollisionShape = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Tc(e, t);
                }),
                (Om.prototype.setCcdMotionThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Rc(e, t);
                }),
                (Om.prototype.setCcdSweptSphereRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Dc(e, t);
                }),
                (Om.prototype.getUserIndex = function () {
                  return Bc(this.cp);
                }),
                (Om.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), xc(e, t);
                }),
                (Om.prototype.setUserIndex2 = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ac(e, t);
                }),
                (Om.prototype.setIgnoreCollisionCheck = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Mc(n, t, e);
                }),
                (Om.prototype.getNumOverlappingObjects = function () {
                  return Lc(this.cp);
                }),
                (Om.prototype.getOverlappingObject = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(kc(e, t), Uf)
                  );
                }),
                (Om.prototype.__destroy__ = function () {
                  Fc(this.cp);
                }),
                (Im.prototype = Object.create(kf.prototype)),
                (Im.prototype.constructor = Im),
                (Im.prototype.ep = Im),
                (Im.fp = {}),
                (n.btOverlappingPairCallback = Im),
                (Im.prototype.__destroy__ = function () {
                  Wc(this.cp);
                }),
                (Pm.prototype = Object.create(Ef.prototype)),
                (Pm.prototype.constructor = Pm),
                (Pm.prototype.ep = Pm),
                (Pm.fp = {}),
                (n.btGeneric6DofSpringConstraint = Pm),
                (Pm.prototype.enableSpring = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    wc(n, t, e);
                }),
                (Pm.prototype.setStiffness = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Hc(n, t, e);
                }),
                (Pm.prototype.setDamping = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    qc(n, t, e);
                }),
                (Pm.prototype.setEquilibriumPoint = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    void 0 === t
                      ? Kc(n)
                      : void 0 === e
                      ? Ec(n, t)
                      : Nc(n, t, e);
                }),
                (Pm.prototype.setLinearLowerLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vc(e, t);
                }),
                (Pm.prototype.setLinearUpperLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), zc(e, t);
                }),
                (Pm.prototype.setAngularLowerLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Qc(e, t);
                }),
                (Pm.prototype.setAngularUpperLimit = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Yc(e, t);
                }),
                (Pm.prototype.getFrameOffsetA = function () {
                  return Wf(Jc(this.cp), nd);
                }),
                (Pm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Xc(e, t);
                }),
                (Pm.prototype.getBreakingImpulseThreshold = function () {
                  return Zc(this.cp);
                }),
                (Pm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $c(e, t);
                }),
                (Pm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    t_(n, t, e)
                  );
                }),
                (Pm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    e_(o, t, e, n);
                }),
                (Pm.prototype.__destroy__ = function () {
                  n_(this.cp);
                }),
                (Tm.prototype = Object.create(Nf.prototype)),
                (Tm.prototype.constructor = Tm),
                (Tm.prototype.ep = Tm),
                (Tm.fp = {}),
                (n.btTriangleMesh = Tm),
                (Tm.prototype.addTriangle = function (t, e, n, o) {
                  var p = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    void 0 === o ? i_(p, t, e, n) : c_(p, t, e, n, o);
                }),
                (Tm.prototype.addTriangleIndices = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    __(o, t, e, n);
                }),
                (Tm.prototype.getIndexedMeshArray = function () {
                  return Wf(a_(this.cp), ed);
                }),
                (Tm.prototype.setScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), s_(e, t);
                }),
                (Tm.prototype.__destroy__ = function () {
                  l_(this.cp);
                }),
                (Rm.prototype = Object.create(kf.prototype)),
                (Rm.prototype.constructor = Rm),
                (Rm.prototype.ep = Rm),
                (Rm.fp = {}),
                (n.btCollisionConfiguration = Rm),
                (Rm.prototype.__destroy__ = function () {
                  u_(this.cp);
                }),
                (Dm.prototype = Object.create(kf.prototype)),
                (Dm.prototype.constructor = Dm),
                (Dm.prototype.ep = Dm),
                (Dm.fp = {}),
                (n.btPersistentManifold = Dm),
                (Dm.prototype.getBody0 = function () {
                  return Wf(b_(this.cp), Uf);
                }),
                (Dm.prototype.getBody1 = function () {
                  return Wf(f_(this.cp), Uf);
                }),
                (Dm.prototype.getNumContacts = function () {
                  return m_(this.cp);
                }),
                (Dm.prototype.getContactPoint = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(d_(e, t), ym)
                  );
                }),
                (Dm.prototype.__destroy__ = function () {
                  h_(this.cp);
                }),
                (Bm.prototype = Object.create(Qf.prototype)),
                (Bm.prototype.constructor = Bm),
                (Bm.prototype.ep = Bm),
                (Bm.fp = {}),
                (n.btBoxShape = Bm),
                (Bm.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), j_(e, t);
                }),
                (Bm.prototype.getMargin = function () {
                  return C_(this.cp);
                }),
                (Bm.prototype.setUnscaledHalfExtents = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), v_(e, t);
                }),
                (Bm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), S_(e, t);
                }),
                (Bm.prototype.getLocalScaling = function () {
                  return Wf(O_(this.cp), Em);
                }),
                (Bm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    I_(n, t, e);
                }),
                (Bm.prototype.isCompound = function () {
                  return !!P_(this.cp);
                }),
                (Bm.prototype.getUserIndex = function () {
                  return T_(this.cp);
                }),
                (Bm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), R_(e, t);
                }),
                (Bm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    D_(o, t, e, n);
                }),
                (Bm.prototype.getLocalBoundingSphere = function () {
                  return B_(this.cp);
                }),
                (Bm.prototype.getImplicitShapeDimensions = function () {
                  return Wf(x_(this.cp), Em);
                }),
                (Bm.prototype.__destroy__ = function () {
                  A_(this.cp);
                }),
                (xm.prototype = Object.create(Qf.prototype)),
                (xm.prototype.constructor = xm),
                (xm.prototype.ep = xm),
                (xm.fp = {}),
                (n.btCapsuleShape = xm),
                (xm.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), L_(e, t);
                }),
                (xm.prototype.getMargin = function () {
                  return k_(this.cp);
                }),
                (xm.prototype.updateProp = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    F_(o, t, e, n);
                }),
                (xm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), W_(e, t);
                }),
                (xm.prototype.getLocalScaling = function () {
                  return Wf(G_(this.cp), Em);
                }),
                (xm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    U_(n, t, e);
                }),
                (xm.prototype.isCompound = function () {
                  return !!w_(this.cp);
                }),
                (xm.prototype.getUserIndex = function () {
                  return H_(this.cp);
                }),
                (xm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), q_(e, t);
                }),
                (xm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    K_(o, t, e, n);
                }),
                (xm.prototype.getLocalBoundingSphere = function () {
                  return E_(this.cp);
                }),
                (xm.prototype.getImplicitShapeDimensions = function () {
                  return Wf(N_(this.cp), Em);
                }),
                (xm.prototype.__destroy__ = function () {
                  V_(this.cp);
                }),
                (Am.prototype = Object.create(Gf.prototype)),
                (Am.prototype.constructor = Am),
                (Am.prototype.ep = Am),
                (Am.fp = {}),
                (n.btCompoundShape = Am),
                (Am.prototype.addChildShape = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Y_(n, t, e);
                }),
                (Am.prototype.removeChildShape = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), J_(e, t);
                }),
                (Am.prototype.removeChildShapeByIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), X_(e, t);
                }),
                (Am.prototype.getNumChildShapes = function () {
                  return Z_(this.cp);
                }),
                (Am.prototype.getChildShape = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf($_(e, t), Gf)
                  );
                }),
                (Am.prototype.updateChildTransform = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    void 0 === n ? ta(o, t, e) : ea(o, t, e, n);
                }),
                (Am.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), na(e, t);
                }),
                (Am.prototype.getMargin = function () {
                  return oa(this.cp);
                }),
                (Am.prototype.setMaterial = function (t, e, n, o, p, r) {
                  var i = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    p && 'object' == typeof p && (p = p.cp),
                    r && 'object' == typeof r && (r = r.cp),
                    void 0 === o
                      ? pa(i, t, e, n)
                      : void 0 === p
                      ? ra(i, t, e, n, o)
                      : void 0 === r
                      ? ia(i, t, e, n, o, p)
                      : ca(i, t, e, n, o, p, r);
                }),
                (Am.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), _a(e, t);
                }),
                (Am.prototype.getLocalScaling = function () {
                  return Wf(aa(this.cp), Em);
                }),
                (Am.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    sa(n, t, e);
                }),
                (Am.prototype.isCompound = function () {
                  return !!la(this.cp);
                }),
                (Am.prototype.getUserIndex = function () {
                  return ua(this.cp);
                }),
                (Am.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ya(e, t);
                }),
                (Am.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    ba(o, t, e, n);
                }),
                (Am.prototype.getLocalBoundingSphere = function () {
                  return fa(this.cp);
                }),
                (Am.prototype.__destroy__ = function () {
                  ma(this.cp);
                }),
                (Mm.prototype = Object.create(zf.prototype)),
                (Mm.prototype.constructor = Mm),
                (Mm.prototype.ep = Mm),
                (Mm.fp = {}),
                (n.btDefaultMotionState = Mm),
                (Mm.prototype.getWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ja(e, t);
                }),
                (Mm.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ca(e, t);
                }),
                (Mm.prototype.__destroy__ = function () {
                  va(this.cp);
                }),
                (Lm.prototype = Object.create(Xf.prototype)),
                (Lm.prototype.constructor = Lm),
                (Lm.prototype.ep = Lm),
                (Lm.fp = {}),
                (n.AllHitsRayResultCallback = Lm),
                (Lm.prototype.hasHit = function () {
                  return !!Oa(this.cp);
                }),
                (Lm.prototype.setUseCC = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ia(e, t);
                }),
                (Lm.prototype.get_m_collisionObjects = Lm.prototype.Ip =
                  function () {
                    return Wf(Pa(this.cp), _m);
                  }),
                (Lm.prototype.set_m_collisionObjects = Lm.prototype.rq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ta(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_collisionObjects', {
                  get: Lm.prototype.Ip,
                  set: Lm.prototype.rq,
                }),
                (Lm.prototype.get_m_rayFromWorld = Lm.prototype.tp =
                  function () {
                    return Wf(Ra(this.cp), Em);
                  }),
                (Lm.prototype.set_m_rayFromWorld = Lm.prototype.xp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Da(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_rayFromWorld', {
                  get: Lm.prototype.tp,
                  set: Lm.prototype.xp,
                }),
                (Lm.prototype.get_m_rayToWorld = Lm.prototype.up =
                  function () {
                    return Wf(Ba(this.cp), Em);
                  }),
                (Lm.prototype.set_m_rayToWorld = Lm.prototype.yp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), xa(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_rayToWorld', {
                  get: Lm.prototype.up,
                  set: Lm.prototype.yp,
                }),
                (Lm.prototype.get_m_hitNormalWorld = Lm.prototype.rp =
                  function () {
                    return Wf(Aa(this.cp), Jm);
                  }),
                (Lm.prototype.set_m_hitNormalWorld = Lm.prototype.vp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ma(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_hitNormalWorld', {
                  get: Lm.prototype.rp,
                  set: Lm.prototype.vp,
                }),
                (Lm.prototype.get_m_hitPointWorld = Lm.prototype.sp =
                  function () {
                    return Wf(La(this.cp), Jm);
                  }),
                (Lm.prototype.set_m_hitPointWorld = Lm.prototype.wp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), ka(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_hitPointWorld', {
                  get: Lm.prototype.sp,
                  set: Lm.prototype.wp,
                }),
                (Lm.prototype.get_m_hitFractions = Lm.prototype.Mp =
                  function () {
                    return Wf(Fa(this.cp), pm);
                  }),
                (Lm.prototype.set_m_hitFractions = Lm.prototype.vq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Wa(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_hitFractions', {
                  get: Lm.prototype.Mp,
                  set: Lm.prototype.vq,
                }),
                (Lm.prototype.get_m_shapeParts = Lm.prototype.bq =
                  function () {
                    return Wf(Ga(this.cp), cm);
                  }),
                (Lm.prototype.set_m_shapeParts = Lm.prototype.Lq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ua(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_shapeParts', {
                  get: Lm.prototype.bq,
                  set: Lm.prototype.Lq,
                }),
                (Lm.prototype.get_m_collisionFilterGroup = Lm.prototype.gp =
                  function () {
                    return wa(this.cp);
                  }),
                (Lm.prototype.set_m_collisionFilterGroup = Lm.prototype.jp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ha(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_collisionFilterGroup', {
                  get: Lm.prototype.gp,
                  set: Lm.prototype.jp,
                }),
                (Lm.prototype.get_m_collisionFilterMask = Lm.prototype.hp =
                  function () {
                    return qa(this.cp);
                  }),
                (Lm.prototype.set_m_collisionFilterMask = Lm.prototype.kp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ka(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_collisionFilterMask', {
                  get: Lm.prototype.hp,
                  set: Lm.prototype.kp,
                }),
                (Lm.prototype.get_m_shapePart = Lm.prototype.ip =
                  function () {
                    return Ea(this.cp);
                  }),
                (Lm.prototype.set_m_shapePart = Lm.prototype.lp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Na(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_shapePart', {
                  get: Lm.prototype.ip,
                  set: Lm.prototype.lp,
                }),
                (Lm.prototype.get_m_closestHitFraction = Lm.prototype.mp =
                  function () {
                    return Va(this.cp);
                  }),
                (Lm.prototype.set_m_closestHitFraction = Lm.prototype.op =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), za(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_closestHitFraction', {
                  get: Lm.prototype.mp,
                  set: Lm.prototype.op,
                }),
                (Lm.prototype.get_m_collisionObject = Lm.prototype.np =
                  function () {
                    return Wf(Qa(this.cp), Uf);
                  }),
                (Lm.prototype.set_m_collisionObject = Lm.prototype.pp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ya(e, t);
                  }),
                Object.defineProperty(Lm.prototype, 'm_collisionObject', {
                  get: Lm.prototype.np,
                  set: Lm.prototype.pp,
                }),
                (Lm.prototype.__destroy__ = function () {
                  Ja(this.cp);
                }),
                (km.prototype = Object.create(Xf.prototype)),
                (km.prototype.constructor = km),
                (km.prototype.ep = km),
                (km.fp = {}),
                (n.ClosestRayResultCallback = km),
                (km.prototype.hasHit = function () {
                  return !!Za(this.cp);
                }),
                (km.prototype.setUseCC = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $a(e, t);
                }),
                (km.prototype.get_m_rayFromWorld = km.prototype.tp =
                  function () {
                    return Wf(ts(this.cp), Em);
                  }),
                (km.prototype.set_m_rayFromWorld = km.prototype.xp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), es(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_rayFromWorld', {
                  get: km.prototype.tp,
                  set: km.prototype.xp,
                }),
                (km.prototype.get_m_rayToWorld = km.prototype.up =
                  function () {
                    return Wf(ns(this.cp), Em);
                  }),
                (km.prototype.set_m_rayToWorld = km.prototype.yp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), os(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_rayToWorld', {
                  get: km.prototype.up,
                  set: km.prototype.yp,
                }),
                (km.prototype.get_m_hitNormalWorld = km.prototype.rp =
                  function () {
                    return Wf(ps(this.cp), Em);
                  }),
                (km.prototype.set_m_hitNormalWorld = km.prototype.vp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), rs(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_hitNormalWorld', {
                  get: km.prototype.rp,
                  set: km.prototype.vp,
                }),
                (km.prototype.get_m_hitPointWorld = km.prototype.sp =
                  function () {
                    return Wf(is(this.cp), Em);
                  }),
                (km.prototype.set_m_hitPointWorld = km.prototype.wp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), cs(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_hitPointWorld', {
                  get: km.prototype.sp,
                  set: km.prototype.wp,
                }),
                (km.prototype.get_m_collisionFilterGroup = km.prototype.gp =
                  function () {
                    return _s(this.cp);
                  }),
                (km.prototype.set_m_collisionFilterGroup = km.prototype.jp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), as(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_collisionFilterGroup', {
                  get: km.prototype.gp,
                  set: km.prototype.jp,
                }),
                (km.prototype.get_m_collisionFilterMask = km.prototype.hp =
                  function () {
                    return ss(this.cp);
                  }),
                (km.prototype.set_m_collisionFilterMask = km.prototype.kp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), ls(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_collisionFilterMask', {
                  get: km.prototype.hp,
                  set: km.prototype.kp,
                }),
                (km.prototype.get_m_shapePart = km.prototype.ip =
                  function () {
                    return us(this.cp);
                  }),
                (km.prototype.set_m_shapePart = km.prototype.lp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), ys(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_shapePart', {
                  get: km.prototype.ip,
                  set: km.prototype.lp,
                }),
                (km.prototype.get_m_closestHitFraction = km.prototype.mp =
                  function () {
                    return bs(this.cp);
                  }),
                (km.prototype.set_m_closestHitFraction = km.prototype.op =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), fs(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_closestHitFraction', {
                  get: km.prototype.mp,
                  set: km.prototype.op,
                }),
                (km.prototype.get_m_collisionObject = km.prototype.np =
                  function () {
                    return Wf(ms(this.cp), Uf);
                  }),
                (km.prototype.set_m_collisionObject = km.prototype.pp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), ds(e, t);
                  }),
                Object.defineProperty(km.prototype, 'm_collisionObject', {
                  get: km.prototype.np,
                  set: km.prototype.pp,
                }),
                (km.prototype.__destroy__ = function () {
                  hs(this.cp);
                }),
                (Fm.prototype = Object.create(Zf.prototype)),
                (Fm.prototype.constructor = Fm),
                (Fm.prototype.ep = Fm),
                (Fm.fp = {}),
                (n.ccKinematicCharacterController = Fm),
                (Fm.prototype.setUpAxis = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Cs(e, t);
                }),
                (Fm.prototype.setWalkDirection = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vs(e, t);
                }),
                (Fm.prototype.setVelocityForTimeInterval = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ss(n, t, e);
                }),
                (Fm.prototype.warp = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Os(e, t);
                }),
                (Fm.prototype.preStep = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Is(e, t);
                }),
                (Fm.prototype.playerStep = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ps(n, t, e);
                }),
                (Fm.prototype.setFallSpeed = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ts(e, t);
                }),
                (Fm.prototype.setJumpSpeed = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Rs(e, t);
                }),
                (Fm.prototype.setMaxJumpHeight = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ds(e, t);
                }),
                (Fm.prototype.canJump = function () {
                  return !!Bs(this.cp);
                }),
                (Fm.prototype.jump = function () {
                  xs(this.cp);
                }),
                (Fm.prototype.setGravity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), As(e, t);
                }),
                (Fm.prototype.getGravity = function () {
                  return Ms(this.cp);
                }),
                (Fm.prototype.setMaxSlope = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ls(e, t);
                }),
                (Fm.prototype.getMaxSlope = function () {
                  return ks(this.cp);
                }),
                (Fm.prototype.getGhostObject = function () {
                  return Wf(Fs(this.cp), Om);
                }),
                (Fm.prototype.setUseGhostSweepTest = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ws(e, t);
                }),
                (Fm.prototype.onGround = function () {
                  return !!Gs(this.cp);
                }),
                (Fm.prototype.setUpInterpolate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Us(e, t);
                }),
                (Fm.prototype.updateAction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    ws(n, t, e);
                }),
                (Fm.prototype.__destroy__ = function () {
                  Hs(this.cp);
                }),
                (Wm.prototype = Object.create(Kf.prototype)),
                (Wm.prototype.constructor = Wm),
                (Wm.prototype.ep = Wm),
                (Wm.fp = {}),
                (n.btHingeConstraint = Wm),
                (Wm.prototype.setLimit = function (t, e, n, o, p) {
                  var r = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    p && 'object' == typeof p && (p = p.cp),
                    void 0 === p ? Qs(r, t, e, n, o) : Ys(r, t, e, n, o, p);
                }),
                (Wm.prototype.enableAngularMotor = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Js(o, t, e, n);
                }),
                (Wm.prototype.setAngularOnly = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Xs(e, t);
                }),
                (Wm.prototype.enableMotor = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Zs(e, t);
                }),
                (Wm.prototype.setMaxMotorImpulse = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $s(e, t);
                }),
                (Wm.prototype.setMotorTarget = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    tl(n, t, e);
                }),
                (Wm.prototype.setFrames = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    el(n, t, e);
                }),
                (Wm.prototype.setAxis = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), nl(e, t);
                }),
                (Wm.prototype.setUseReferenceFrameA = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ol(e, t);
                }),
                (Wm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), pl(e, t);
                }),
                (Wm.prototype.getBreakingImpulseThreshold = function () {
                  return rl(this.cp);
                }),
                (Wm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), il(e, t);
                }),
                (Wm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    cl(n, t, e)
                  );
                }),
                (Wm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    _l(o, t, e, n);
                }),
                (Wm.prototype.__destroy__ = function () {
                  al(this.cp);
                }),
                (Gm.prototype = Object.create(nm.prototype)),
                (Gm.prototype.constructor = Gm),
                (Gm.prototype.ep = Gm),
                (Gm.fp = {}),
                (n.btQuaternion = Gm),
                (Gm.prototype.setValue = function (t, e, n, o) {
                  var p = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    o && 'object' == typeof o && (o = o.cp),
                    ll(p, t, e, n, o);
                }),
                (Gm.prototype.x = Gm.prototype.x =
                  function () {
                    return ul(this.cp);
                  }),
                (Gm.prototype.y = Gm.prototype.y =
                  function () {
                    return yl(this.cp);
                  }),
                (Gm.prototype.z = Gm.prototype.z =
                  function () {
                    return bl(this.cp);
                  }),
                (Gm.prototype.w = function () {
                  return fl(this.cp);
                }),
                (Gm.prototype.setX = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ml(e, t);
                }),
                (Gm.prototype.setY = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), dl(e, t);
                }),
                (Gm.prototype.setZ = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), hl(e, t);
                }),
                (Gm.prototype.setW = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gl(e, t);
                }),
                (Gm.prototype.__destroy__ = function () {
                  jl(this.cp);
                }),
                (Um.prototype = Object.create(wf.prototype)),
                (Um.prototype.constructor = Um),
                (Um.prototype.ep = Um),
                (Um.fp = {}),
                (n.btBU_Simplex1to4 = Um),
                (Um.prototype.addVertex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vl(e, t);
                }),
                (Um.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Sl(e, t);
                }),
                (Um.prototype.getLocalScaling = function () {
                  return Wf(Ol(this.cp), Em);
                }),
                (Um.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Il(n, t, e);
                }),
                (Um.prototype.isCompound = function () {
                  return !!Pl(this.cp);
                }),
                (Um.prototype.getUserIndex = function () {
                  return Tl(this.cp);
                }),
                (Um.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Rl(e, t);
                }),
                (Um.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Dl(o, t, e, n);
                }),
                (Um.prototype.getLocalBoundingSphere = function () {
                  return Bl(this.cp);
                }),
                (Um.prototype.__destroy__ = function () {
                  xl(this.cp);
                }),
                (wm.prototype = Object.create(kf.prototype)),
                (wm.prototype.constructor = wm),
                (wm.prototype.ep = wm),
                (wm.fp = {}),
                (n.btContactSolverInfo = wm),
                (wm.prototype.get_m_splitImpulse = wm.prototype.cq =
                  function () {
                    return !!Al(this.cp);
                  }),
                (wm.prototype.set_m_splitImpulse = wm.prototype.Mq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Ml(e, t);
                  }),
                Object.defineProperty(wm.prototype, 'm_splitImpulse', {
                  get: wm.prototype.cq,
                  set: wm.prototype.Mq,
                }),
                (wm.prototype.get_m_splitImpulsePenetrationThreshold =
                  wm.prototype.eq =
                    function () {
                      return Ll(this.cp);
                    }),
                (wm.prototype.set_m_splitImpulsePenetrationThreshold =
                  wm.prototype.Nq =
                    function (t) {
                      var e = this.cp;
                      t && 'object' == typeof t && (t = t.cp), kl(e, t);
                    }),
                Object.defineProperty(
                  wm.prototype,
                  'm_splitImpulsePenetrationThreshold',
                  { get: wm.prototype.eq, set: wm.prototype.Nq },
                ),
                (wm.prototype.get_m_numIterations = wm.prototype.Vp =
                  function () {
                    return Fl(this.cp);
                  }),
                (wm.prototype.set_m_numIterations = wm.prototype.Eq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), Wl(e, t);
                  }),
                Object.defineProperty(wm.prototype, 'm_numIterations', {
                  get: wm.prototype.Vp,
                  set: wm.prototype.Eq,
                }),
                (wm.prototype.__destroy__ = function () {
                  Gl(this.cp);
                }),
                (Hm.prototype = Object.create(Zf.prototype)),
                (Hm.prototype.constructor = Hm),
                (Hm.prototype.ep = Hm),
                (Hm.fp = {}),
                (n.btKinematicCharacterController = Hm),
                (Hm.prototype.setUp = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Hl(e, t);
                }),
                (Hm.prototype.setWalkDirection = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ql(e, t);
                }),
                (Hm.prototype.setVelocityForTimeInterval = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Kl(n, t, e);
                }),
                (Hm.prototype.reset = Hm.prototype.reset =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), El(e, t);
                  }),
                (Hm.prototype.warp = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Nl(e, t);
                }),
                (Hm.prototype.preStep = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vl(e, t);
                }),
                (Hm.prototype.playerStep = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    zl(n, t, e);
                }),
                (Hm.prototype.setFallSpeed = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ql(e, t);
                }),
                (Hm.prototype.setJumpSpeed = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Yl(e, t);
                }),
                (Hm.prototype.setMaxJumpHeight = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Jl(e, t);
                }),
                (Hm.prototype.canJump = function () {
                  return !!Xl(this.cp);
                }),
                (Hm.prototype.jump = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    void 0 === t ? Zl(e) : $l(e, t);
                }),
                (Hm.prototype.setGravity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), tu(e, t);
                }),
                (Hm.prototype.getGravity = function () {
                  return Wf(eu(this.cp), Em);
                }),
                (Hm.prototype.setMaxSlope = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), nu(e, t);
                }),
                (Hm.prototype.getMaxSlope = function () {
                  return ou(this.cp);
                }),
                (Hm.prototype.getGhostObject = function () {
                  return Wf(pu(this.cp), Om);
                }),
                (Hm.prototype.setUseGhostSweepTest = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ru(e, t);
                }),
                (Hm.prototype.onGround = function () {
                  return !!iu(this.cp);
                }),
                (Hm.prototype.setUpInterpolate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), cu(e, t);
                }),
                (Hm.prototype.updateAction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    _u(n, t, e);
                }),
                (Hm.prototype.__destroy__ = function () {
                  au(this.cp);
                }),
                (qm.prototype = Object.create(Hf.prototype)),
                (qm.prototype.constructor = qm),
                (qm.prototype.ep = qm),
                (qm.fp = {}),
                (n.btStaticPlaneShape = qm),
                (qm.prototype.getPlaneNormal = function () {
                  return Wf(lu(this.cp), Em);
                }),
                (qm.prototype.setPlaneConstant = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), uu(e, t);
                }),
                (qm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), yu(e, t);
                }),
                (qm.prototype.getLocalScaling = function () {
                  return Wf(bu(this.cp), Em);
                }),
                (qm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    fu(n, t, e);
                }),
                (qm.prototype.isCompound = function () {
                  return !!mu(this.cp);
                }),
                (qm.prototype.getUserIndex = function () {
                  return du(this.cp);
                }),
                (qm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), hu(e, t);
                }),
                (qm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    gu(o, t, e, n);
                }),
                (qm.prototype.getLocalBoundingSphere = function () {
                  return ju(this.cp);
                }),
                (qm.prototype.__destroy__ = function () {
                  Cu(this.cp);
                }),
                (Km.prototype = Object.create(kf.prototype)),
                (Km.prototype.constructor = Km),
                (Km.prototype.ep = Km),
                (Km.fp = {}),
                (n.btOverlappingPairCache = Km),
                (Km.prototype.setInternalGhostPairCallback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), vu(e, t);
                }),
                (Km.prototype.setOverlapFilterCallback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Su(e, t);
                }),
                (Km.prototype.getNumOverlappingPairs = function () {
                  return Ou(this.cp);
                }),
                (Km.prototype.__destroy__ = function () {
                  Iu(this.cp);
                }),
                (Em.prototype = Object.create(kf.prototype)),
                (Em.prototype.constructor = Em),
                (Em.prototype.ep = Em),
                (Em.fp = {}),
                (n.btVector3 = Em),
                (Em.prototype.x = Em.prototype.x =
                  function () {
                    return Ru(this.cp);
                  }),
                (Em.prototype.y = Em.prototype.y =
                  function () {
                    return Du(this.cp);
                  }),
                (Em.prototype.z = Em.prototype.z =
                  function () {
                    return Bu(this.cp);
                  }),
                (Em.prototype.setX = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), xu(e, t);
                }),
                (Em.prototype.setY = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Au(e, t);
                }),
                (Em.prototype.setZ = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Mu(e, t);
                }),
                (Em.prototype.setValue = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Lu(o, t, e, n);
                }),
                (Em.prototype.__destroy__ = function () {
                  ku(this.cp);
                }),
                (Nm.prototype = Object.create(Qf.prototype)),
                (Nm.prototype.constructor = Nm),
                (Nm.prototype.ep = Nm),
                (Nm.fp = {}),
                (n.btSphereShape = Nm),
                (Nm.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Wu(e, t);
                }),
                (Nm.prototype.getMargin = function () {
                  return Gu(this.cp);
                }),
                (Nm.prototype.setUnscaledRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Uu(e, t);
                }),
                (Nm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), wu(e, t);
                }),
                (Nm.prototype.getLocalScaling = function () {
                  return Wf(Hu(this.cp), Em);
                }),
                (Nm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    qu(n, t, e);
                }),
                (Nm.prototype.isCompound = function () {
                  return !!Ku(this.cp);
                }),
                (Nm.prototype.getUserIndex = function () {
                  return Eu(this.cp);
                }),
                (Nm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Nu(e, t);
                }),
                (Nm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    Vu(o, t, e, n);
                }),
                (Nm.prototype.getLocalBoundingSphere = function () {
                  return zu(this.cp);
                }),
                (Nm.prototype.getImplicitShapeDimensions = function () {
                  return Wf(Qu(this.cp), Em);
                }),
                (Nm.prototype.__destroy__ = function () {
                  Yu(this.cp);
                }),
                (Vm.prototype = Object.create(kf.prototype)),
                (Vm.prototype.constructor = Vm),
                (Vm.prototype.ep = Vm),
                (Vm.fp = {}),
                (n.btDefaultCollisionConstructionInfo = Vm),
                (Vm.prototype.__destroy__ = function () {
                  Xu(this.cp);
                }),
                (zm.prototype = Object.create(Hf.prototype)),
                (zm.prototype.constructor = zm),
                (zm.prototype.ep = zm),
                (zm.fp = {}),
                (n.btEmptyShape = zm),
                (zm.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), $u(e, t);
                }),
                (zm.prototype.getLocalScaling = function () {
                  return Wf(ty(this.cp), Em);
                }),
                (zm.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    ey(n, t, e);
                }),
                (zm.prototype.isCompound = function () {
                  return !!ny(this.cp);
                }),
                (zm.prototype.getUserIndex = function () {
                  return oy(this.cp);
                }),
                (zm.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), py(e, t);
                }),
                (zm.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    ry(o, t, e, n);
                }),
                (zm.prototype.getLocalBoundingSphere = function () {
                  return iy(this.cp);
                }),
                (zm.prototype.__destroy__ = function () {
                  cy(this.cp);
                }),
                (Qm.prototype = Object.create(kf.prototype)),
                (Qm.prototype.constructor = Qm),
                (Qm.prototype.ep = Qm),
                (Qm.fp = {}),
                (n.btConstraintSetting = Qm),
                (Qm.prototype.get_m_tau = Qm.prototype.fq =
                  function () {
                    return ay(this.cp);
                  }),
                (Qm.prototype.set_m_tau = Qm.prototype.Oq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), sy(e, t);
                  }),
                Object.defineProperty(Qm.prototype, 'm_tau', {
                  get: Qm.prototype.fq,
                  set: Qm.prototype.Oq,
                }),
                (Qm.prototype.get_m_damping = Qm.prototype.Jp =
                  function () {
                    return ly(this.cp);
                  }),
                (Qm.prototype.set_m_damping = Qm.prototype.sq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), uy(e, t);
                  }),
                Object.defineProperty(Qm.prototype, 'm_damping', {
                  get: Qm.prototype.Jp,
                  set: Qm.prototype.sq,
                }),
                (Qm.prototype.get_m_impulseClamp = Qm.prototype.Np =
                  function () {
                    return yy(this.cp);
                  }),
                (Qm.prototype.set_m_impulseClamp = Qm.prototype.wq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), by(e, t);
                  }),
                Object.defineProperty(Qm.prototype, 'm_impulseClamp', {
                  get: Qm.prototype.Np,
                  set: Qm.prototype.wq,
                }),
                (Qm.prototype.__destroy__ = function () {
                  fy(this.cp);
                }),
                (Ym.prototype = Object.create(kf.prototype)),
                (Ym.prototype.constructor = Ym),
                (Ym.prototype.ep = Ym),
                (Ym.fp = {}),
                (n.LocalShapeInfo = Ym),
                (Ym.prototype.get_m_shapePart = Ym.prototype.ip =
                  function () {
                    return my(this.cp);
                  }),
                (Ym.prototype.set_m_shapePart = Ym.prototype.lp =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), dy(e, t);
                  }),
                Object.defineProperty(Ym.prototype, 'm_shapePart', {
                  get: Ym.prototype.ip,
                  set: Ym.prototype.lp,
                }),
                (Ym.prototype.get_m_triangleIndex = Ym.prototype.gq =
                  function () {
                    return hy(this.cp);
                  }),
                (Ym.prototype.set_m_triangleIndex = Ym.prototype.Pq =
                  function (t) {
                    var e = this.cp;
                    t && 'object' == typeof t && (t = t.cp), gy(e, t);
                  }),
                Object.defineProperty(Ym.prototype, 'm_triangleIndex', {
                  get: Ym.prototype.gq,
                  set: Ym.prototype.Pq,
                }),
                (Ym.prototype.__destroy__ = function () {
                  jy(this.cp);
                }),
                (Jm.prototype = Object.create(kf.prototype)),
                (Jm.prototype.constructor = Jm),
                (Jm.prototype.ep = Jm),
                (Jm.fp = {}),
                (n.btVector3Array = Jm),
                (Jm.prototype.size = Jm.prototype.size =
                  function () {
                    return Cy(this.cp);
                  }),
                (Jm.prototype.at = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(vy(e, t), Em)
                  );
                }),
                (Jm.prototype.clear = Jm.prototype.clear =
                  function () {
                    Sy(this.cp);
                  }),
                (Jm.prototype.__destroy__ = function () {
                  Oy(this.cp);
                }),
                (Xm.prototype = Object.create(kf.prototype)),
                (Xm.prototype.constructor = Xm),
                (Xm.prototype.ep = Xm),
                (Xm.fp = {}),
                (n.btConstraintSolver = Xm),
                (Xm.prototype.__destroy__ = function () {
                  Iy(this.cp);
                }),
                (Zm.prototype = Object.create(Kf.prototype)),
                (Zm.prototype.constructor = Zm),
                (Zm.prototype.ep = Zm),
                (Zm.fp = {}),
                (n.btFixedConstraint = Zm),
                (Zm.prototype.enableFeedback = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ty(e, t);
                }),
                (Zm.prototype.getBreakingImpulseThreshold = function () {
                  return Ry(this.cp);
                }),
                (Zm.prototype.setBreakingImpulseThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Dy(e, t);
                }),
                (Zm.prototype.getParam = function (t, e) {
                  var n = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    By(n, t, e)
                  );
                }),
                (Zm.prototype.setParam = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    xy(o, t, e, n);
                }),
                (Zm.prototype.__destroy__ = function () {
                  Ay(this.cp);
                }),
                ($m.prototype = Object.create(Jf.prototype)),
                ($m.prototype.constructor = $m),
                ($m.prototype.ep = $m),
                ($m.fp = {}),
                (n.btCollisionDispatcher = $m),
                ($m.prototype.setDispatcherFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ly(e, t);
                }),
                ($m.prototype.getNumManifolds = function () {
                  return ky(this.cp);
                }),
                ($m.prototype.getManifoldByIndexInternal = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(Fy(e, t), Dm)
                  );
                }),
                ($m.prototype.__destroy__ = function () {
                  Wy(this.cp);
                }),
                (td.prototype = Object.create(Uf.prototype)),
                (td.prototype.constructor = td),
                (td.prototype.ep = td),
                (td.fp = {}),
                (n.btRigidBody = td),
                (td.prototype.getCenterOfMassTransform = function () {
                  return Wf(Uy(this.cp), nd);
                }),
                (td.prototype.setCenterOfMassTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), wy(e, t);
                }),
                (td.prototype.setSleepingThresholds = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Hy(n, t, e);
                }),
                (td.prototype.getLinearSleepingThreshold = function () {
                  return qy(this.cp);
                }),
                (td.prototype.getLinearDamping = function () {
                  return Ky(this.cp);
                }),
                (td.prototype.getAngularDamping = function () {
                  return Ey(this.cp);
                }),
                (td.prototype.setDamping = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Ny(n, t, e);
                }),
                (td.prototype.setMassProps = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Vy(n, t, e);
                }),
                (td.prototype.getLinearFactor = function () {
                  return Wf(zy(this.cp), Em);
                }),
                (td.prototype.setLinearFactor = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Qy(e, t);
                }),
                (td.prototype.applyTorque = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Yy(e, t);
                }),
                (td.prototype.applyForce = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    Jy(n, t, e);
                }),
                (td.prototype.applyCentralForce = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Xy(e, t);
                }),
                (td.prototype.applyTorqueImpulse = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Zy(e, t);
                }),
                (td.prototype.applyImpulse = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    $y(n, t, e);
                }),
                (td.prototype.applyCentralImpulse = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), tb(e, t);
                }),
                (td.prototype.updateInertiaTensor = function () {
                  eb(this.cp);
                }),
                (td.prototype.getLinearVelocity = function () {
                  return Wf(nb(this.cp), Em);
                }),
                (td.prototype.getAngularVelocity = function () {
                  return Wf(ob(this.cp), Em);
                }),
                (td.prototype.setLinearVelocity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), pb(e, t);
                }),
                (td.prototype.setAngularVelocity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), rb(e, t);
                }),
                (td.prototype.getMotionState = function () {
                  return Wf(ib(this.cp), zf);
                }),
                (td.prototype.setMotionState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), cb(e, t);
                }),
                (td.prototype.getAngularFactor = function () {
                  return Wf(_b(this.cp), Em);
                }),
                (td.prototype.setAngularFactor = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ab(e, t);
                }),
                (td.prototype.upcast = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(sb(e, t), td)
                  );
                }),
                (td.prototype.getAabb = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    lb(n, t, e);
                }),
                (td.prototype.applyGravity = function () {
                  ub(this.cp);
                }),
                (td.prototype.getGravity = function () {
                  return Wf(yb(this.cp), Em);
                }),
                (td.prototype.setGravity = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), bb(e, t);
                }),
                (td.prototype.getFlags = function () {
                  return fb(this.cp);
                }),
                (td.prototype.setFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), mb(e, t);
                }),
                (td.prototype.wantsSleeping = function () {
                  return !!db(this.cp);
                }),
                (td.prototype.clearForces = function () {
                  hb(this.cp);
                }),
                (td.prototype.getTotalForce = function () {
                  return Wf(gb(this.cp), Em);
                }),
                (td.prototype.getTotalTorque = function () {
                  return Wf(jb(this.cp), Em);
                }),
                (td.prototype.clearState = function () {
                  Cb(this.cp);
                }),
                (td.prototype.setAnisotropicFriction = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    vb(n, t, e);
                }),
                (td.prototype.getCollisionShape = function () {
                  return Wf(Sb(this.cp), Gf);
                }),
                (td.prototype.getActivationState = function () {
                  return Ob(this.cp);
                }),
                (td.prototype.setActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ib(e, t);
                }),
                (td.prototype.forceActivationState = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Pb(e, t);
                }),
                (td.prototype.activate = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    void 0 === t ? Tb(e) : Rb(e, t);
                }),
                (td.prototype.isActive = function () {
                  return !!Db(this.cp);
                }),
                (td.prototype.isKinematicObject = function () {
                  return !!Bb(this.cp);
                }),
                (td.prototype.isStaticObject = function () {
                  return !!xb(this.cp);
                }),
                (td.prototype.isStaticOrKinematicObject = function () {
                  return !!Ab(this.cp);
                }),
                (td.prototype.setRestitution = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Mb(e, t);
                }),
                (td.prototype.setFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Lb(e, t);
                }),
                (td.prototype.setRollingFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), kb(e, t);
                }),
                (td.prototype.setSpinningFriction = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Fb(e, t);
                }),
                (td.prototype.getWorldTransform = function () {
                  return Wf(Wb(this.cp), nd);
                }),
                (td.prototype.getCollisionFlags = function () {
                  return Gb(this.cp);
                }),
                (td.prototype.setCollisionFlags = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Ub(e, t);
                }),
                (td.prototype.setWorldTransform = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), wb(e, t);
                }),
                (td.prototype.setCollisionShape = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Hb(e, t);
                }),
                (td.prototype.setCcdMotionThreshold = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), qb(e, t);
                }),
                (td.prototype.setCcdSweptSphereRadius = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Kb(e, t);
                }),
                (td.prototype.getUserIndex = function () {
                  return Eb(this.cp);
                }),
                (td.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Nb(e, t);
                }),
                (td.prototype.setUserIndex2 = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), Vb(e, t);
                }),
                (td.prototype.setIgnoreCollisionCheck = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    zb(n, t, e);
                }),
                (td.prototype.__destroy__ = function () {
                  Qb(this.cp);
                }),
                (ed.prototype = Object.create(kf.prototype)),
                (ed.prototype.constructor = ed),
                (ed.prototype.ep = ed),
                (ed.fp = {}),
                (n.btIndexedMeshArray = ed),
                (ed.prototype.size = ed.prototype.size =
                  function () {
                    return Yb(this.cp);
                  }),
                (ed.prototype.at = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(Jb(e, t), lm)
                  );
                }),
                (ed.prototype.__destroy__ = function () {
                  Xb(this.cp);
                }),
                (nd.prototype = Object.create(kf.prototype)),
                (nd.prototype.constructor = nd),
                (nd.prototype.ep = nd),
                (nd.fp = {}),
                (n.btTransform = nd),
                (nd.prototype.setIdentity = function () {
                  tf(this.cp);
                }),
                (nd.prototype.setOrigin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), ef(e, t);
                }),
                (nd.prototype.setRotation = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), nf(e, t);
                }),
                (nd.prototype.getOrigin = function () {
                  return Wf(of(this.cp), Em);
                }),
                (nd.prototype.getRotation = function () {
                  return Wf(pf(this.cp), Gm);
                }),
                (nd.prototype.getBasis = function () {
                  return Wf(rf(this.cp), om);
                }),
                (nd.prototype.inverse = nd.prototype.inverse =
                  function () {
                    return Wf(cf(this.cp), nd);
                  }),
                (nd.prototype.op_mul = function (t) {
                  var e = this.cp;
                  return (
                    t && 'object' == typeof t && (t = t.cp), Wf(_f(e, t), nd)
                  );
                }),
                (nd.prototype.__destroy__ = function () {
                  af(this.cp);
                }),
                (od.prototype = Object.create(Qf.prototype)),
                (od.prototype.constructor = od),
                (od.prototype.ep = od),
                (od.fp = {}),
                (n.btCylinderShape = od),
                (od.prototype.setMargin = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), lf(e, t);
                }),
                (od.prototype.getMargin = function () {
                  return uf(this.cp);
                }),
                (od.prototype.updateProp = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    yf(o, t, e, n);
                }),
                (od.prototype.setLocalScaling = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), bf(e, t);
                }),
                (od.prototype.getLocalScaling = function () {
                  return Wf(ff(this.cp), Em);
                }),
                (od.prototype.calculateLocalInertia = function (t, e) {
                  var n = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    mf(n, t, e);
                }),
                (od.prototype.isCompound = function () {
                  return !!df(this.cp);
                }),
                (od.prototype.getUserIndex = function () {
                  return hf(this.cp);
                }),
                (od.prototype.setUserIndex = function (t) {
                  var e = this.cp;
                  t && 'object' == typeof t && (t = t.cp), gf(e, t);
                }),
                (od.prototype.getAabb = function (t, e, n) {
                  var o = this.cp;
                  t && 'object' == typeof t && (t = t.cp),
                    e && 'object' == typeof e && (e = e.cp),
                    n && 'object' == typeof n && (n = n.cp),
                    jf(o, t, e, n);
                }),
                (od.prototype.getLocalBoundingSphere = function () {
                  return Cf(this.cp);
                }),
                (od.prototype.getImplicitShapeDimensions = function () {
                  return Wf(vf(this.cp), Em);
                }),
                (od.prototype.__destroy__ = function () {
                  Sf(this.cp);
                }),
                (function () {
                  function t() {
                    (n.BT_CONSTRAINT_ERP = Of()),
                      (n.BT_CONSTRAINT_STOP_ERP = If()),
                      (n.BT_CONSTRAINT_CFM = Pf()),
                      (n.BT_CONSTRAINT_STOP_CFM = Tf()),
                      (n.PHY_FLOAT = Rf()),
                      (n.PHY_DOUBLE = Df()),
                      (n.PHY_INTEGER = Bf()),
                      (n.PHY_SHORT = xf()),
                      (n.PHY_FIXEDPOINT88 = Af()),
                      (n.PHY_UCHAR = Mf());
                  }
                  B ? t() : R.unshift(t);
                })(),
                (this.Ammo = n),
                t
              );
            });
        t.exports = n;
      })),
        t({ default: n, __moduleExports: n });
    },
  };
});
