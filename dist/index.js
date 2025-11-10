import { renderStoryString as E1, persona_description_positions as Zg } from "../../../../power-user.js";
import { parseMesExamples as C1, baseChatReplace as k1, chat_metadata as Ms, getMaxContextSize as A1, name1 as Sa, name2 as $r, this_chid as sn, extension_prompt_types as wa, depth_prompt_role_default as T1, depth_prompt_depth_default as x1 } from "../../../../../script.js";
import { createWorldInfoEntry as N1, world_info_include_names as O1, wi_anchor_position as M1, selected_world_info as R1, METADATA_KEY as j1, world_info as D1, world_names as z1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as L1, formatInstructModeSystemPrompt as P1 } from "../../../../instruct-mode.js";
import { appendFileContent as I1 } from "../../../../chats.js";
import { setOpenAIMessages as B1, setOpenAIMessageExamples as U1, formatWorldInfo as H1, getPromptPosition as q1, getPromptRole as Z1, prepareOpenAIMessages as G1 } from "../../../../openai.js";
import { metadata_keys as Rs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as V1, selected_group as Ft, groups as Gg } from "../../../../group-chats.js";
import { runRegexScript as Y1, getRegexedString as $1, regex_placement as Vg } from "../../../regex/engine.js";
import { getCharaFilename as X1, removeFromArray as Yg, runAfterAnimation as F1 } from "../../../../utils.js";
import { commonEnumProviders as Q1 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Si, fixToastrForDialogs as Ud } from "../../../../popup.js";
import $g from "../../../../../lib/dialog-polyfill.esm.js";
function Lf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Hd = { exports: {} }, js = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg;
function K1() {
  if (Xg) return js;
  Xg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(i, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: i,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return js.Fragment = r, js.jsx = s, js.jsxs = s, js;
}
var Fg;
function J1() {
  return Fg || (Fg = 1, Hd.exports = K1()), Hd.exports;
}
var N = J1(), qd = { exports: {} }, ze = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg;
function W1() {
  if (Qg) return ze;
  Qg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
  function y(I) {
    return I === null || typeof I != "object" ? null : (I = E && I[E] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var b = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, C = {};
  function A(I, $, ce) {
    this.props = I, this.context = $, this.refs = C, this.updater = ce || b;
  }
  A.prototype.isReactComponent = {}, A.prototype.setState = function(I, $) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, $, "setState");
  }, A.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function R() {
  }
  R.prototype = A.prototype;
  function x(I, $, ce) {
    this.props = I, this.context = $, this.refs = C, this.updater = ce || b;
  }
  var L = x.prototype = new R();
  L.constructor = x, h(L, A.prototype), L.isPureReactComponent = !0;
  var l = Array.isArray, S = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, $, ce, Y, H, te) {
    return ce = te.ref, {
      $$typeof: n,
      type: I,
      key: $,
      ref: ce !== void 0 ? ce : null,
      props: te
    };
  }
  function O(I, $) {
    return k(
      I.type,
      $,
      void 0,
      void 0,
      void 0,
      I.props
    );
  }
  function z(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function j(I) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ce) {
      return $[ce];
    });
  }
  var P = /\/+/g;
  function Z(I, $) {
    return typeof I == "object" && I !== null && I.key != null ? j("" + I.key) : $.toString(36);
  }
  function X() {
  }
  function G(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(X, X) : (I.status = "pending", I.then(
          function($) {
            I.status === "pending" && (I.status = "fulfilled", I.value = $);
          },
          function($) {
            I.status === "pending" && (I.status = "rejected", I.reason = $);
          }
        )), I.status) {
          case "fulfilled":
            return I.value;
          case "rejected":
            throw I.reason;
        }
    }
    throw I;
  }
  function K(I, $, ce, Y, H) {
    var te = typeof I;
    (te === "undefined" || te === "boolean") && (I = null);
    var ne = !1;
    if (I === null) ne = !0;
    else
      switch (te) {
        case "bigint":
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case n:
            case r:
              ne = !0;
              break;
            case g:
              return ne = I._init, K(
                ne(I._payload),
                $,
                ce,
                Y,
                H
              );
          }
      }
    if (ne)
      return H = H(I), ne = Y === "" ? "." + Z(I, 0) : Y, l(H) ? (ce = "", ne != null && (ce = ne.replace(P, "$&/") + "/"), K(H, $, ce, "", function(he) {
        return he;
      })) : H != null && (z(H) && (H = O(
        H,
        ce + (H.key == null || I && I.key === H.key ? "" : ("" + H.key).replace(
          P,
          "$&/"
        ) + "/") + ne
      )), $.push(H)), 1;
    ne = 0;
    var ue = Y === "" ? "." : Y + ":";
    if (l(I))
      for (var re = 0; re < I.length; re++)
        Y = I[re], te = ue + Z(Y, re), ne += K(
          Y,
          $,
          ce,
          te,
          H
        );
    else if (re = y(I), typeof re == "function")
      for (I = re.call(I), re = 0; !(Y = I.next()).done; )
        Y = Y.value, te = ue + Z(Y, re++), ne += K(
          Y,
          $,
          ce,
          te,
          H
        );
    else if (te === "object") {
      if (typeof I.then == "function")
        return K(
          G(I),
          $,
          ce,
          Y,
          H
        );
      throw $ = String(I), Error(
        "Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ne;
  }
  function M(I, $, ce) {
    if (I == null) return I;
    var Y = [], H = 0;
    return K(I, Y, "", "", function(te) {
      return $.call(ce, te, H++);
    }), Y;
  }
  function B(I) {
    if (I._status === -1) {
      var $ = I._result;
      $ = $(), $.then(
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = ce);
        },
        function(ce) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = ce);
        }
      ), I._status === -1 && (I._status = 0, I._result = $);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var J = typeof reportError == "function" ? reportError : function(I) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var $ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof I == "object" && I !== null && typeof I.message == "string" ? String(I.message) : String(I),
        error: I
      });
      if (!window.dispatchEvent($)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", I);
      return;
    }
    console.error(I);
  };
  function ae() {
  }
  return ze.Children = {
    map: M,
    forEach: function(I, $, ce) {
      M(
        I,
        function() {
          $.apply(this, arguments);
        },
        ce
      );
    },
    count: function(I) {
      var $ = 0;
      return M(I, function() {
        $++;
      }), $;
    },
    toArray: function(I) {
      return M(I, function($) {
        return $;
      }) || [];
    },
    only: function(I) {
      if (!z(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, ze.Component = A, ze.Fragment = s, ze.Profiler = u, ze.PureComponent = x, ze.StrictMode = i, ze.Suspense = p, ze.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, ze.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return S.H.useMemoCache(I);
    }
  }, ze.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, ze.cloneElement = function(I, $, ce) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var Y = h({}, I.props), H = I.key, te = void 0;
    if ($ != null)
      for (ne in $.ref !== void 0 && (te = void 0), $.key !== void 0 && (H = "" + $.key), $)
        !w.call($, ne) || ne === "key" || ne === "__self" || ne === "__source" || ne === "ref" && $.ref === void 0 || (Y[ne] = $[ne]);
    var ne = arguments.length - 2;
    if (ne === 1) Y.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      Y.children = ue;
    }
    return k(I.type, H, void 0, void 0, te, Y);
  }, ze.createContext = function(I) {
    return I = {
      $$typeof: f,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, I.Provider = I, I.Consumer = {
      $$typeof: c,
      _context: I
    }, I;
  }, ze.createElement = function(I, $, ce) {
    var Y, H = {}, te = null;
    if ($ != null)
      for (Y in $.key !== void 0 && (te = "" + $.key), $)
        w.call($, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (H[Y] = $[Y]);
    var ne = arguments.length - 2;
    if (ne === 1) H.children = ce;
    else if (1 < ne) {
      for (var ue = Array(ne), re = 0; re < ne; re++)
        ue[re] = arguments[re + 2];
      H.children = ue;
    }
    if (I && I.defaultProps)
      for (Y in ne = I.defaultProps, ne)
        H[Y] === void 0 && (H[Y] = ne[Y]);
    return k(I, te, void 0, void 0, null, H);
  }, ze.createRef = function() {
    return { current: null };
  }, ze.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, ze.isValidElement = z, ze.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, ze.memo = function(I, $) {
    return {
      $$typeof: _,
      type: I,
      compare: $ === void 0 ? null : $
    };
  }, ze.startTransition = function(I) {
    var $ = S.T, ce = {};
    S.T = ce;
    try {
      var Y = I(), H = S.S;
      H !== null && H(ce, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(ae, J);
    } catch (te) {
      J(te);
    } finally {
      S.T = $;
    }
  }, ze.unstable_useCacheRefresh = function() {
    return S.H.useCacheRefresh();
  }, ze.use = function(I) {
    return S.H.use(I);
  }, ze.useActionState = function(I, $, ce) {
    return S.H.useActionState(I, $, ce);
  }, ze.useCallback = function(I, $) {
    return S.H.useCallback(I, $);
  }, ze.useContext = function(I) {
    return S.H.useContext(I);
  }, ze.useDebugValue = function() {
  }, ze.useDeferredValue = function(I, $) {
    return S.H.useDeferredValue(I, $);
  }, ze.useEffect = function(I, $, ce) {
    var Y = S.H;
    if (typeof ce == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return Y.useEffect(I, $);
  }, ze.useId = function() {
    return S.H.useId();
  }, ze.useImperativeHandle = function(I, $, ce) {
    return S.H.useImperativeHandle(I, $, ce);
  }, ze.useInsertionEffect = function(I, $) {
    return S.H.useInsertionEffect(I, $);
  }, ze.useLayoutEffect = function(I, $) {
    return S.H.useLayoutEffect(I, $);
  }, ze.useMemo = function(I, $) {
    return S.H.useMemo(I, $);
  }, ze.useOptimistic = function(I, $) {
    return S.H.useOptimistic(I, $);
  }, ze.useReducer = function(I, $, ce) {
    return S.H.useReducer(I, $, ce);
  }, ze.useRef = function(I) {
    return S.H.useRef(I);
  }, ze.useState = function(I) {
    return S.H.useState(I);
  }, ze.useSyncExternalStore = function(I, $, ce) {
    return S.H.useSyncExternalStore(
      I,
      $,
      ce
    );
  }, ze.useTransition = function() {
    return S.H.useTransition();
  }, ze.version = "19.1.1", ze;
}
var Kg;
function Pf() {
  return Kg || (Kg = 1, qd.exports = W1()), qd.exports;
}
var se = Pf();
const dl = /* @__PURE__ */ Lf(se);
var Zd = { exports: {} }, Ds = {}, Gd = { exports: {} }, Vd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function e2() {
  return Jg || (Jg = 1, (function(n) {
    function r(M, B) {
      var J = M.length;
      M.push(B);
      e: for (; 0 < J; ) {
        var ae = J - 1 >>> 1, I = M[ae];
        if (0 < u(I, B))
          M[ae] = B, M[J] = I, J = ae;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function i(M) {
      if (M.length === 0) return null;
      var B = M[0], J = M.pop();
      if (J !== B) {
        M[0] = J;
        e: for (var ae = 0, I = M.length, $ = I >>> 1; ae < $; ) {
          var ce = 2 * (ae + 1) - 1, Y = M[ce], H = ce + 1, te = M[H];
          if (0 > u(Y, J))
            H < I && 0 > u(te, Y) ? (M[ae] = te, M[H] = J, ae = H) : (M[ae] = Y, M[ce] = J, ae = ce);
          else if (H < I && 0 > u(te, J))
            M[ae] = te, M[H] = J, ae = H;
          else break e;
        }
      }
      return B;
    }
    function u(M, B) {
      var J = M.sortIndex - B.sortIndex;
      return J !== 0 ? J : M.id - B.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], _ = [], g = 1, E = null, y = 3, b = !1, h = !1, C = !1, A = !1, R = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function l(M) {
      for (var B = s(_); B !== null; ) {
        if (B.callback === null) i(_);
        else if (B.startTime <= M)
          i(_), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(_);
      }
    }
    function S(M) {
      if (C = !1, l(M), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, Z());
        else {
          var B = s(_);
          B !== null && K(S, B.startTime - M);
        }
    }
    var w = !1, k = -1, O = 5, z = -1;
    function j() {
      return A ? !0 : !(n.unstable_now() - z < O);
    }
    function P() {
      if (A = !1, w) {
        var M = n.unstable_now();
        z = M;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, x(k), k = -1), b = !0;
            var J = y;
            try {
              t: {
                for (l(M), E = s(p); E !== null && !(E.expirationTime > M && j()); ) {
                  var ae = E.callback;
                  if (typeof ae == "function") {
                    E.callback = null, y = E.priorityLevel;
                    var I = ae(
                      E.expirationTime <= M
                    );
                    if (M = n.unstable_now(), typeof I == "function") {
                      E.callback = I, l(M), B = !0;
                      break t;
                    }
                    E === s(p) && i(p), l(M);
                  } else i(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var $ = s(_);
                  $ !== null && K(
                    S,
                    $.startTime - M
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, y = J, b = !1;
            }
            B = void 0;
          }
        } finally {
          B ? Z() : w = !1;
        }
      }
    }
    var Z;
    if (typeof L == "function")
      Z = function() {
        L(P);
      };
    else if (typeof MessageChannel < "u") {
      var X = new MessageChannel(), G = X.port2;
      X.port1.onmessage = P, Z = function() {
        G.postMessage(null);
      };
    } else
      Z = function() {
        R(P, 0);
      };
    function K(M, B) {
      k = R(function() {
        M(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, n.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < M ? Math.floor(1e3 / M) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_next = function(M) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = y;
      }
      var J = y;
      y = B;
      try {
        return M();
      } finally {
        y = J;
      }
    }, n.unstable_requestPaint = function() {
      A = !0;
    }, n.unstable_runWithPriority = function(M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var J = y;
      y = M;
      try {
        return B();
      } finally {
        y = J;
      }
    }, n.unstable_scheduleCallback = function(M, B, J) {
      var ae = n.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ae + J : ae) : J = ae, M) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = J + I, M = {
        id: g++,
        callback: B,
        priorityLevel: M,
        startTime: J,
        expirationTime: I,
        sortIndex: -1
      }, J > ae ? (M.sortIndex = J, r(_, M), s(p) === null && M === s(_) && (C ? (x(k), k = -1) : C = !0, K(S, J - ae))) : (M.sortIndex = I, r(p, M), h || b || (h = !0, w || (w = !0, Z()))), M;
    }, n.unstable_shouldYield = j, n.unstable_wrapCallback = function(M) {
      var B = y;
      return function() {
        var J = y;
        y = B;
        try {
          return M.apply(this, arguments);
        } finally {
          y = J;
        }
      };
    };
  })(Vd)), Vd;
}
var Wg;
function t2() {
  return Wg || (Wg = 1, Gd.exports = e2()), Gd.exports;
}
var Yd = { exports: {} }, Ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function n2() {
  if (ev) return Ht;
  ev = 1;
  var n = Pf();
  function r(p) {
    var _ = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        _ += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + p + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var i = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function c(p, _, g) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: _,
      implementation: g
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, _) {
    if (p === "font") return "";
    if (typeof _ == "string")
      return _ === "use-credentials" ? _ : "";
  }
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Ht.createPortal = function(p, _) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(r(299));
    return c(p, _, null, g);
  }, Ht.flushSync = function(p) {
    var _ = f.T, g = i.p;
    try {
      if (f.T = null, i.p = 2, p) return p();
    } finally {
      f.T = _, i.p = g, i.d.f();
    }
  }, Ht.preconnect = function(p, _) {
    typeof p == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, i.d.C(p, _));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && i.d.D(p);
  }, Ht.preinit = function(p, _) {
    if (typeof p == "string" && _ && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin), y = typeof _.integrity == "string" ? _.integrity : void 0, b = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      g === "style" ? i.d.S(
        p,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: E,
          integrity: y,
          fetchPriority: b
        }
      ) : g === "script" && i.d.X(p, {
        crossOrigin: E,
        integrity: y,
        fetchPriority: b,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, Ht.preinitModule = function(p, _) {
    if (typeof p == "string")
      if (typeof _ == "object" && _ !== null) {
        if (_.as == null || _.as === "script") {
          var g = m(
            _.as,
            _.crossOrigin
          );
          i.d.M(p, {
            crossOrigin: g,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && i.d.M(p);
  }, Ht.preload = function(p, _) {
    if (typeof p == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin);
      i.d.L(p, g, {
        crossOrigin: E,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, Ht.preloadModule = function(p, _) {
    if (typeof p == "string")
      if (_) {
        var g = m(_.as, _.crossOrigin);
        i.d.m(p, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: g,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else i.d.m(p);
  }, Ht.requestFormReset = function(p) {
    i.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, _) {
    return p(_);
  }, Ht.useFormState = function(p, _, g) {
    return f.H.useFormState(p, _, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var tv;
function Y0() {
  if (tv) return Yd.exports;
  tv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yd.exports = n2(), Yd.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function r2() {
  if (nv) return Ds;
  nv = 1;
  var n = t2(), r = Pf(), s = Y0();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(i(188));
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var d = a.return;
      if (d === null) break;
      var v = d.alternate;
      if (v === null) {
        if (o = d.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (d.child === v.child) {
        for (v = d.child; v; ) {
          if (v === a) return m(d), e;
          if (v === o) return m(d), t;
          v = v.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) a = d, o = v;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === a) {
            T = !0, a = d, o = v;
            break;
          }
          if (D === o) {
            T = !0, o = d, a = v;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = v.child; D; ) {
            if (D === a) {
              T = !0, a = v, o = d;
              break;
            }
            if (D === o) {
              T = !0, o = v, a = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign, E = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), x = Symbol.for("react.consumer"), L = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), j = Symbol.for("react.memo_cache_sentinel"), P = Symbol.iterator;
  function Z(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var X = Symbol.for("react.client.reference");
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === X ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case A:
        return "Profiler";
      case C:
        return "StrictMode";
      case S:
        return "Suspense";
      case w:
        return "SuspenseList";
      case z:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case b:
          return "Portal";
        case L:
          return (e.displayName || "Context") + ".Provider";
        case x:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : G(e.type) || "Memo";
        case O:
          t = e._payload, e = e._init;
          try {
            return G(e(t));
          } catch {
          }
      }
    return null;
  }
  var K = Array.isArray, M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ae = [], I = -1;
  function $(e) {
    return { current: e };
  }
  function ce(e) {
    0 > I || (e.current = ae[I], ae[I] = null, I--);
  }
  function Y(e, t) {
    I++, ae[I] = e.current, e.current = t;
  }
  var H = $(null), te = $(null), ne = $(null), ue = $(null);
  function re(e, t) {
    switch (Y(ne, t), Y(te, e), Y(H, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? vg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = vg(t), e = yg(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ce(H), Y(H, e);
  }
  function he() {
    ce(H), ce(te), ce(ne);
  }
  function Re(e) {
    e.memoizedState !== null && Y(ue, e);
    var t = H.current, a = yg(t, e.type);
    t !== a && (Y(te, e), Y(H, a));
  }
  function be(e) {
    te.current === e && (ce(H), ce(te)), ue.current === e && (ce(ue), As._currentValue = J);
  }
  var me = Object.prototype.hasOwnProperty, pe = n.unstable_scheduleCallback, je = n.unstable_cancelCallback, Ve = n.unstable_shouldYield, We = n.unstable_requestPaint, Oe = n.unstable_now, _t = n.unstable_getCurrentPriorityLevel, at = n.unstable_ImmediatePriority, ve = n.unstable_UserBlockingPriority, ye = n.unstable_NormalPriority, qe = n.unstable_LowPriority, Ze = n.unstable_IdlePriority, tt = n.log, qn = n.unstable_setDisableYieldValue, jn = null, mt = null;
  function Zn(e) {
    if (typeof tt == "function" && qn(e), mt && typeof mt.setStrictMode == "function")
      try {
        mt.setStrictMode(jn, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : ra, bn = Math.log, na = Math.LN2;
  function ra(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / na | 0) | 0;
  }
  var tr = 256, Gn = 4194304;
  function Sn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vt(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, v = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~v, o !== 0 ? d = Sn(o) : (T &= D, T !== 0 ? d = Sn(T) : a || (a = D & ~e, a !== 0 && (d = Sn(a))))) : (D = o & ~v, D !== 0 ? d = Sn(D) : T !== 0 ? d = Sn(T) : a || (a = o & ~e, a !== 0 && (d = Sn(a)))), d === 0 ? 0 : t !== 0 && t !== d && (t & v) === 0 && (v = d & -d, a = t & -t, v >= a || v === 32 && (a & 4194048) !== 0) ? t : d;
  }
  function Qt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function oo(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function za() {
    var e = tr;
    return tr <<= 1, (tr & 4194048) === 0 && (tr = 256), e;
  }
  function th() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function Nl(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Li(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function d_(e, t, a, o, d, v) {
    var T = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var D = e.entanglements, U = e.expirationTimes, Q = e.hiddenUpdates;
    for (a = T & ~a; 0 < a; ) {
      var ie = 31 - Gt(a), le = 1 << ie;
      D[ie] = 0, U[ie] = -1;
      var W = Q[ie];
      if (W !== null)
        for (Q[ie] = null, ie = 0; ie < W.length; ie++) {
          var ee = W[ie];
          ee !== null && (ee.lane &= -536870913);
        }
      a &= ~le;
    }
    o !== 0 && nh(e, o, 0), v !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(T & ~t));
  }
  function nh(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194090;
  }
  function rh(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var o = 31 - Gt(a), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), a &= ~d;
    }
  }
  function Ol(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ml(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ah() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Pg(e.type));
  }
  function f_(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Cr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Cr, Kt = "__reactProps$" + Cr, La = "__reactContainer$" + Cr, Rl = "__reactEvents$" + Cr, h_ = "__reactListeners$" + Cr, p_ = "__reactHandles$" + Cr, ih = "__reactResources$" + Cr, Pi = "__reactMarker$" + Cr;
  function jl(e) {
    delete e[Bt], delete e[Kt], delete e[Rl], delete e[h_], delete e[p_];
  }
  function Pa(e) {
    var t = e[Bt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[La] || a[Bt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = wg(e); e !== null; ) {
            if (a = e[Bt]) return a;
            e = wg(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ia(e) {
    if (e = e[Bt] || e[La]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ii(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Ba(e) {
    var t = e[ih];
    return t || (t = e[ih] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function xt(e) {
    e[Pi] = !0;
  }
  var sh = /* @__PURE__ */ new Set(), oh = {};
  function aa(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for (oh[e] = t, e = 0; e < t.length; e++)
      sh.add(t[e]);
  }
  var m_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), uh = {}, lh = {};
  function g_(e) {
    return me.call(lh, e) ? !0 : me.call(uh, e) ? !1 : m_.test(e) ? lh[e] = !0 : (uh[e] = !0, !1);
  }
  function uo(e, t, a) {
    if (g_(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var o = t.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function lo(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function nr(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  var Dl, ch;
  function Ha(e) {
    if (Dl === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        Dl = t && t[1] || "", ch = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Dl + e + ch;
  }
  var zl = !1;
  function Ll(e, t) {
    if (!e || zl) return "";
    zl = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var le = function() {
                throw Error();
              };
              if (Object.defineProperty(le.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(le, []);
                } catch (ee) {
                  var W = ee;
                }
                Reflect.construct(e, [], le);
              } else {
                try {
                  le.call();
                } catch (ee) {
                  W = ee;
                }
                e.call(le.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                W = ee;
              }
              (le = e()) && typeof le.catch == "function" && le.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && W && typeof ee.stack == "string")
              return [ee.stack, W.stack];
          }
          return [null, null];
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var d = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name"
      );
      d && d.configurable && Object.defineProperty(
        o.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var v = o.DetermineComponentFrameRoot(), T = v[0], D = v[1];
      if (T && D) {
        var U = T.split(`
`), Q = D.split(`
`);
        for (d = o = 0; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < Q.length && !Q[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === U.length || d === Q.length)
          for (o = U.length - 1, d = Q.length - 1; 1 <= o && 0 <= d && U[o] !== Q[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (U[o] !== Q[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || U[o] !== Q[d]) {
                  var ie = `
` + U[o].replace(" at new ", " at ");
                  return e.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", e.displayName)), ie;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      zl = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ha(a) : "";
  }
  function v_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ha(e.type);
      case 16:
        return Ha("Lazy");
      case 13:
        return Ha("Suspense");
      case 19:
        return Ha("SuspenseList");
      case 0:
      case 15:
        return Ll(e.type, !1);
      case 11:
        return Ll(e.type.render, !1);
      case 1:
        return Ll(e.type, !0);
      case 31:
        return Ha("Activity");
      default:
        return "";
    }
  }
  function dh(e) {
    try {
      var t = "";
      do
        t += v_(e), e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function wn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function fh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function y_(e) {
    var t = fh(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var d = a.get, v = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          o = "" + T, v.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(T) {
          o = "" + T;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function co(e) {
    e._valueTracker || (e._valueTracker = y_(e));
  }
  function hh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), o = "";
    return e && (o = fh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (t.setValue(e), !0) : !1;
  }
  function fo(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var __ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      __,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pl(e, t, a, o, d, v, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wn(t)) : e.value !== "" + wn(t) && (e.value = "" + wn(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? Il(e, T, wn(t)) : a != null ? Il(e, T, wn(a)) : o != null && e.removeAttribute("value"), d == null && v != null && (e.defaultChecked = !!v), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + wn(D) : e.removeAttribute("name");
  }
  function ph(e, t, a, o, d, v, T, D) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), t != null || a != null) {
      if (!(v !== "submit" && v !== "reset" || t != null))
        return;
      a = a != null ? "" + wn(a) : "", t = t != null ? "" + wn(t) : a, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Il(e, t, a) {
    t === "number" && fo(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function qa(e, t, a, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < a.length; d++)
        t["$" + a[d]] = !0;
      for (a = 0; a < e.length; a++)
        d = t.hasOwnProperty("$" + e[a].value), e[a].selected !== d && (e[a].selected = d), d && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + wn(a), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === a) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function mh(e, t, a) {
    if (t != null && (t = "" + wn(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + wn(a) : "";
  }
  function gh(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (K(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a == null && (a = ""), t = a;
    }
    a = wn(t), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o);
  }
  function Za(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var b_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vh(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || b_.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function yh(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(i(62));
    if (e = e.style, a != null) {
      for (var o in a)
        !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && a[d] !== o && vh(e, d, o);
    } else
      for (var v in t)
        t.hasOwnProperty(v) && vh(e, v, t[v]);
  }
  function Bl(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var S_ = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), w_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ho(e) {
    return w_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Ul = null;
  function Hl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ga = null, Va = null;
  function _h(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var a = e[Kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Pl(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + En(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(i(90));
                Pl(
                  o,
                  d.value,
                  d.defaultValue,
                  d.defaultValue,
                  d.checked,
                  d.defaultChecked,
                  d.type,
                  d.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              o = a[t], o.form === e.form && hh(o);
          }
          break e;
        case "textarea":
          mh(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && qa(e, !!a.multiple, t, !1);
      }
    }
  }
  var ql = !1;
  function bh(e, t, a) {
    if (ql) return e(t, a);
    ql = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (ql = !1, (Ga !== null || Va !== null) && (Jo(), Ga && (t = Ga, e = Va, Va = Ga = null, _h(t), e)))
        for (t = 0; t < e.length; t++) _h(e[t]);
    }
  }
  function Bi(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[Kt] || null;
    if (o === null) return null;
    a = o[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        i(231, t, typeof a)
      );
    return a;
  }
  var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zl = !1;
  if (rr)
    try {
      var Ui = {};
      Object.defineProperty(Ui, "passive", {
        get: function() {
          Zl = !0;
        }
      }), window.addEventListener("test", Ui, Ui), window.removeEventListener("test", Ui, Ui);
    } catch {
      Zl = !1;
    }
  var kr = null, Gl = null, po = null;
  function Sh() {
    if (po) return po;
    var e, t = Gl, a = t.length, o, d = "value" in kr ? kr.value : kr.textContent, v = d.length;
    for (e = 0; e < a && t[e] === d[e]; e++) ;
    var T = a - e;
    for (o = 1; o <= T && t[a - o] === d[v - o]; o++) ;
    return po = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function mo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function go() {
    return !0;
  }
  function wh() {
    return !1;
  }
  function Jt(e) {
    function t(a, o, d, v, T) {
      this._reactName = a, this._targetInst = d, this.type = o, this.nativeEvent = v, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (a = e[D], this[D] = a ? a(v) : v[D]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? go : wh, this.isPropagationStopped = wh, this;
    }
    return g(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = go);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = go);
      },
      persist: function() {
      },
      isPersistent: go
    }), t;
  }
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vo = Jt(ia), Hi = g({}, ia, { view: 0, detail: 0 }), E_ = Jt(Hi), Vl, Yl, qi, yo = g({}, Hi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== qi && (qi && e.type === "mousemove" ? (Vl = e.screenX - qi.screenX, Yl = e.screenY - qi.screenY) : Yl = Vl = 0, qi = e), Vl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yl;
    }
  }), Eh = Jt(yo), C_ = g({}, yo, { dataTransfer: 0 }), k_ = Jt(C_), A_ = g({}, Hi, { relatedTarget: 0 }), $l = Jt(A_), T_ = g({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), x_ = Jt(T_), N_ = g({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), O_ = Jt(N_), M_ = g({}, ia, { data: 0 }), Ch = Jt(M_), R_ = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, j_ = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, D_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function z_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = D_[e]) ? !!t[e] : !1;
  }
  function Xl() {
    return z_;
  }
  var L_ = g({}, Hi, {
    key: function(e) {
      if (e.key) {
        var t = R_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? j_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xl,
    charCode: function(e) {
      return e.type === "keypress" ? mo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), P_ = Jt(L_), I_ = g({}, yo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), kh = Jt(I_), B_ = g({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl
  }), U_ = Jt(B_), H_ = g({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), q_ = Jt(H_), Z_ = g({}, yo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), G_ = Jt(Z_), V_ = g({}, ia, {
    newState: 0,
    oldState: 0
  }), Y_ = Jt(V_), $_ = [9, 13, 27, 32], Fl = rr && "CompositionEvent" in window, Zi = null;
  rr && "documentMode" in document && (Zi = document.documentMode);
  var X_ = rr && "TextEvent" in window && !Zi, Ah = rr && (!Fl || Zi && 8 < Zi && 11 >= Zi), Th = " ", xh = !1;
  function Nh(e, t) {
    switch (e) {
      case "keyup":
        return $_.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Oh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ya = !1;
  function F_(e, t) {
    switch (e) {
      case "compositionend":
        return Oh(t);
      case "keypress":
        return t.which !== 32 ? null : (xh = !0, Th);
      case "textInput":
        return e = t.data, e === Th && xh ? null : e;
      default:
        return null;
    }
  }
  function Q_(e, t) {
    if (Ya)
      return e === "compositionend" || !Fl && Nh(e, t) ? (e = Sh(), po = Gl = kr = null, Ya = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ah && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var K_ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Mh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!K_[e.type] : t === "textarea";
  }
  function Rh(e, t, a, o) {
    Ga ? Va ? Va.push(o) : Va = [o] : Ga = o, t = au(t, "onChange"), 0 < t.length && (a = new vo(
      "onChange",
      "change",
      null,
      a,
      o
    ), e.push({ event: a, listeners: t }));
  }
  var Gi = null, Vi = null;
  function J_(e) {
    fg(e, 0);
  }
  function _o(e) {
    var t = Ii(e);
    if (hh(t)) return e;
  }
  function jh(e, t) {
    if (e === "change") return t;
  }
  var Dh = !1;
  if (rr) {
    var Ql;
    if (rr) {
      var Kl = "oninput" in document;
      if (!Kl) {
        var zh = document.createElement("div");
        zh.setAttribute("oninput", "return;"), Kl = typeof zh.oninput == "function";
      }
      Ql = Kl;
    } else Ql = !1;
    Dh = Ql && (!document.documentMode || 9 < document.documentMode);
  }
  function Lh() {
    Gi && (Gi.detachEvent("onpropertychange", Ph), Vi = Gi = null);
  }
  function Ph(e) {
    if (e.propertyName === "value" && _o(Vi)) {
      var t = [];
      Rh(
        t,
        Vi,
        e,
        Hl(e)
      ), bh(J_, t);
    }
  }
  function W_(e, t, a) {
    e === "focusin" ? (Lh(), Gi = t, Vi = a, Gi.attachEvent("onpropertychange", Ph)) : e === "focusout" && Lh();
  }
  function eb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _o(Vi);
  }
  function tb(e, t) {
    if (e === "click") return _o(t);
  }
  function nb(e, t) {
    if (e === "input" || e === "change")
      return _o(t);
  }
  function rb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : rb;
  function Yi(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var d = a[o];
      if (!me.call(t, d) || !un(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function Ih(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bh(e, t) {
    var a = Ih(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= t && o >= t)
          return { node: a, offset: t - e };
        e = o;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Ih(a);
    }
  }
  function Uh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = fo(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = fo(e.document);
    }
    return t;
  }
  function Jl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ab = rr && "documentMode" in document && 11 >= document.documentMode, $a = null, Wl = null, $i = null, ec = !1;
  function qh(e, t, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ec || $a == null || $a !== fo(o) || (o = $a, "selectionStart" in o && Jl(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), $i && Yi($i, o) || ($i = o, o = au(Wl, "onSelect"), 0 < o.length && (t = new vo(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: o }), t.target = $a)));
  }
  function sa(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Xa = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, tc = {}, Zh = {};
  rr && (Zh = document.createElement("div").style, "AnimationEvent" in window || (delete Xa.animationend.animation, delete Xa.animationiteration.animation, delete Xa.animationstart.animation), "TransitionEvent" in window || delete Xa.transitionend.transition);
  function oa(e) {
    if (tc[e]) return tc[e];
    if (!Xa[e]) return e;
    var t = Xa[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in Zh)
        return tc[e] = t[a];
    return e;
  }
  var Gh = oa("animationend"), Vh = oa("animationiteration"), Yh = oa("animationstart"), ib = oa("transitionrun"), sb = oa("transitionstart"), ob = oa("transitioncancel"), $h = oa("transitionend"), Xh = /* @__PURE__ */ new Map(), nc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  nc.push("scrollEnd");
  function Dn(e, t) {
    Xh.set(e, t), aa(t, [e]);
  }
  var Fh = /* @__PURE__ */ new WeakMap();
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Fh.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: dh(t)
      }, Fh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: dh(t)
    };
  }
  var kn = [], Fa = 0, rc = 0;
  function bo() {
    for (var e = Fa, t = rc = Fa = 0; t < e; ) {
      var a = kn[t];
      kn[t++] = null;
      var o = kn[t];
      kn[t++] = null;
      var d = kn[t];
      kn[t++] = null;
      var v = kn[t];
      if (kn[t++] = null, o !== null && d !== null) {
        var T = o.pending;
        T === null ? d.next = d : (d.next = T.next, T.next = d), o.pending = d;
      }
      v !== 0 && Qh(a, d, v);
    }
  }
  function So(e, t, a, o) {
    kn[Fa++] = e, kn[Fa++] = t, kn[Fa++] = a, kn[Fa++] = o, rc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function ac(e, t, a, o) {
    return So(e, t, a, o), wo(e);
  }
  function Qa(e, t) {
    return So(e, null, null, t), wo(e);
  }
  function Qh(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var d = !1, v = e.return; v !== null; )
      v.childLanes |= a, o = v.alternate, o !== null && (o.childLanes |= a), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (d = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, d && t !== null && (d = 31 - Gt(a), e = v.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = a | 536870912), v) : null;
  }
  function wo(e) {
    if (50 < ys)
      throw ys = 0, cd = null, Error(i(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ka = {};
  function ub(e, t, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, a, o) {
    return new ub(e, t, a, o);
  }
  function ic(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ar(e, t) {
    var a = e.alternate;
    return a === null ? (a = ln(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Kh(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Eo(e, t, a, o, d, v) {
    var T = 0;
    if (o = e, typeof e == "function") ic(e) && (T = 1);
    else if (typeof e == "string")
      T = c1(
        e,
        a,
        H.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case z:
          return e = ln(31, a, t, d), e.elementType = z, e.lanes = v, e;
        case h:
          return ua(a.children, d, v, t);
        case C:
          T = 8, d |= 24;
          break;
        case A:
          return e = ln(12, a, t, d | 2), e.elementType = A, e.lanes = v, e;
        case S:
          return e = ln(13, a, t, d), e.elementType = S, e.lanes = v, e;
        case w:
          return e = ln(19, a, t, d), e.elementType = w, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case R:
              case L:
                T = 10;
                break e;
              case x:
                T = 9;
                break e;
              case l:
                T = 11;
                break e;
              case k:
                T = 14;
                break e;
              case O:
                T = 16, o = null;
                break e;
            }
          T = 29, a = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = ln(T, a, t, d), t.elementType = e, t.type = o, t.lanes = v, t;
  }
  function ua(e, t, a, o) {
    return e = ln(7, e, o, t), e.lanes = a, e;
  }
  function sc(e, t, a) {
    return e = ln(6, e, null, t), e.lanes = a, e;
  }
  function oc(e, t, a) {
    return t = ln(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ja = [], Wa = 0, Co = null, ko = 0, An = [], Tn = 0, la = null, ir = 1, sr = "";
  function ca(e, t) {
    Ja[Wa++] = ko, Ja[Wa++] = Co, Co = e, ko = t;
  }
  function Jh(e, t, a) {
    An[Tn++] = ir, An[Tn++] = sr, An[Tn++] = la, la = e;
    var o = ir;
    e = sr;
    var d = 32 - Gt(o) - 1;
    o &= ~(1 << d), a += 1;
    var v = 32 - Gt(t) + d;
    if (30 < v) {
      var T = d - d % 5;
      v = (o & (1 << T) - 1).toString(32), o >>= T, d -= T, ir = 1 << 32 - Gt(t) + d | a << d | o, sr = v + e;
    } else
      ir = 1 << v | a << d | o, sr = e;
  }
  function uc(e) {
    e.return !== null && (ca(e, 1), Jh(e, 1, 0));
  }
  function lc(e) {
    for (; e === Co; )
      Co = Ja[--Wa], Ja[Wa] = null, ko = Ja[--Wa], Ja[Wa] = null;
    for (; e === la; )
      la = An[--Tn], An[Tn] = null, sr = An[--Tn], An[Tn] = null, ir = An[--Tn], An[Tn] = null;
  }
  var Yt = null, ft = null, $e = !1, da = null, Vn = !1, cc = Error(i(519));
  function fa(e) {
    var t = Error(i(418, ""));
    throw Qi(Cn(t, e)), cc;
  }
  function Wh(e) {
    var t = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (t[Bt] = e, t[Kt] = o, a) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bs.length; a++)
          Be(bs[a], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), ph(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), co(t);
        break;
      case "select":
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), gh(t, o.value, o.defaultValue, o.children), co(t);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || gg(t.textContent, a) ? (o.popover != null && (Be("beforetoggle", t), Be("toggle", t)), o.onScroll != null && Be("scroll", t), o.onScrollEnd != null && Be("scrollend", t), o.onClick != null && (t.onclick = iu), t = !0) : t = !1, t || fa(e);
  }
  function ep(e) {
    for (Yt = e.return; Yt; )
      switch (Yt.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Yt = Yt.return;
      }
  }
  function Xi(e) {
    if (e !== Yt) return !1;
    if (!$e) return ep(e), $e = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ad(e.type, e.memoizedProps)), a = !a), a && ft && fa(e), ep(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (t === 0) {
                ft = Ln(e.nextSibling);
                break e;
              }
              t--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || t++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      t === 27 ? (t = ft, Hr(e.type) ? (e = Od, Od = null, ft = e) : ft = t) : ft = Yt ? Ln(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fi() {
    ft = Yt = null, $e = !1;
  }
  function tp() {
    var e = da;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), da = null), e;
  }
  function Qi(e) {
    da === null ? da = [e] : da.push(e);
  }
  var dc = $(null), ha = null, or = null;
  function Ar(e, t, a) {
    Y(dc, t._currentValue), t._currentValue = a;
  }
  function ur(e) {
    e._currentValue = dc.current, ce(dc);
  }
  function fc(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function hc(e, t, a, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var v = d.dependencies;
      if (v !== null) {
        var T = d.child;
        v = v.firstContext;
        e: for (; v !== null; ) {
          var D = v;
          v = d;
          for (var U = 0; U < t.length; U++)
            if (D.context === t[U]) {
              v.lanes |= a, D = v.alternate, D !== null && (D.lanes |= a), fc(
                v.return,
                a,
                e
              ), o || (T = null);
              break e;
            }
          v = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(i(341));
        T.lanes |= a, v = T.alternate, v !== null && (v.lanes |= a), fc(T, a, e), T = null;
      } else T = d.child;
      if (T !== null) T.return = d;
      else
        for (T = d; T !== null; ) {
          if (T === e) {
            T = null;
            break;
          }
          if (d = T.sibling, d !== null) {
            d.return = T.return, T = d;
            break;
          }
          T = T.return;
        }
      d = T;
    }
  }
  function Ki(e, t, a, o) {
    e = null;
    for (var d = t, v = !1; d !== null; ) {
      if (!v) {
        if ((d.flags & 524288) !== 0) v = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(i(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          un(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === ue.current) {
        if (T = d.alternate, T === null) throw Error(i(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(As) : e = [As]);
      }
      d = d.return;
    }
    e !== null && hc(
      t,
      e,
      a,
      o
    ), t.flags |= 262144;
  }
  function Ao(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!un(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function pa(e) {
    ha = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ut(e) {
    return np(ha, e);
  }
  function To(e, t) {
    return ha === null && pa(e), np(e, t);
  }
  function np(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, or === null) {
      if (e === null) throw Error(i(308));
      or = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else or = or.next = t;
    return a;
  }
  var lb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, cb = n.unstable_scheduleCallback, db = n.unstable_NormalPriority, Ct = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function pc() {
    return {
      controller: new lb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ji(e) {
    e.refCount--, e.refCount === 0 && cb(db, function() {
      e.controller.abort();
    });
  }
  var Wi = null, mc = 0, ei = 0, ti = null;
  function fb(e, t) {
    if (Wi === null) {
      var a = Wi = [];
      mc = 0, ei = vd(), ti = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return mc++, t.then(rp, rp), t;
  }
  function rp() {
    if (--mc === 0 && Wi !== null) {
      ti !== null && (ti.status = "fulfilled");
      var e = Wi;
      Wi = null, ei = 0, ti = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function hb(e, t) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        a.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var d = 0; d < a.length; d++) (0, a[d])(t);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < a.length; d++)
          (0, a[d])(void 0);
      }
    ), o;
  }
  var ap = M.S;
  M.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && fb(e, t), ap !== null && ap(e, t);
  };
  var ma = $(null);
  function gc() {
    var e = ma.current;
    return e !== null ? e : nt.pooledCache;
  }
  function xo(e, t) {
    t === null ? Y(ma, ma.current) : Y(ma, t.pool);
  }
  function ip() {
    var e = gc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var es = Error(i(460)), sp = Error(i(474)), No = Error(i(542)), vc = { then: function() {
  } };
  function op(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Oo() {
  }
  function up(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Oo, Oo), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, cp(e), e;
      default:
        if (typeof t.status == "string") t.then(Oo, Oo);
        else {
          if (e = nt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = t, e.status = "pending", e.then(
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "fulfilled", d.value = o;
              }
            },
            function(o) {
              if (t.status === "pending") {
                var d = t;
                d.status = "rejected", d.reason = o;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, cp(e), e;
        }
        throw ts = t, es;
    }
  }
  var ts = null;
  function lp() {
    if (ts === null) throw Error(i(459));
    var e = ts;
    return ts = null, e;
  }
  function cp(e) {
    if (e === es || e === No)
      throw Error(i(483));
  }
  var Tr = !1;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function xr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Nr(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Xe & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = wo(e), Qh(e, null, a), t;
    }
    return So(e, o, t, a), wo(e);
  }
  function ns(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, rh(e, a);
    }
  }
  function bc(e, t) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
      var d = null, v = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          v === null ? d = v = T : v = v.next = T, a = a.next;
        } while (a !== null);
        v === null ? d = v = t : v = v.next = t;
      } else d = v = t;
      a = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: v,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var Sc = !1;
  function rs() {
    if (Sc) {
      var e = ti;
      if (e !== null) throw e;
    }
  }
  function as(e, t, a, o) {
    Sc = !1;
    var d = e.updateQueue;
    Tr = !1;
    var v = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var U = D, Q = U.next;
      U.next = null, T === null ? v = Q : T.next = Q, T = U;
      var ie = e.alternate;
      ie !== null && (ie = ie.updateQueue, D = ie.lastBaseUpdate, D !== T && (D === null ? ie.firstBaseUpdate = Q : D.next = Q, ie.lastBaseUpdate = U));
    }
    if (v !== null) {
      var le = d.baseState;
      T = 0, ie = Q = U = null, D = v;
      do {
        var W = D.lane & -536870913, ee = W !== D.lane;
        if (ee ? (Ge & W) === W : (o & W) === W) {
          W !== 0 && W === ei && (Sc = !0), ie !== null && (ie = ie.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Ce = e, we = D;
            W = t;
            var Je = a;
            switch (we.tag) {
              case 1:
                if (Ce = we.payload, typeof Ce == "function") {
                  le = Ce.call(Je, le, W);
                  break e;
                }
                le = Ce;
                break e;
              case 3:
                Ce.flags = Ce.flags & -65537 | 128;
              case 0:
                if (Ce = we.payload, W = typeof Ce == "function" ? Ce.call(Je, le, W) : Ce, W == null) break e;
                le = g({}, le, W);
                break e;
              case 2:
                Tr = !0;
            }
          }
          W = D.callback, W !== null && (e.flags |= 64, ee && (e.flags |= 8192), ee = d.callbacks, ee === null ? d.callbacks = [W] : ee.push(W));
        } else
          ee = {
            lane: W,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, ie === null ? (Q = ie = ee, U = le) : ie = ie.next = ee, T |= W;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          ee = D, D = ee.next, ee.next = null, d.lastBaseUpdate = ee, d.shared.pending = null;
        }
      } while (!0);
      ie === null && (U = le), d.baseState = U, d.firstBaseUpdate = Q, d.lastBaseUpdate = ie, v === null && (d.shared.lanes = 0), Pr |= T, e.lanes = T, e.memoizedState = le;
    }
  }
  function dp(e, t) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(t);
  }
  function fp(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        dp(a[e], t);
  }
  var ni = $(null), Mo = $(0);
  function hp(e, t) {
    e = mr, Y(Mo, e), Y(ni, t), mr = e | t.baseLanes;
  }
  function wc() {
    Y(Mo, mr), Y(ni, ni.current);
  }
  function Ec() {
    mr = Mo.current, ce(ni), ce(Mo);
  }
  var Or = 0, Le = null, Qe = null, bt = null, Ro = !1, ri = !1, ga = !1, jo = 0, is = 0, ai = null, pb = 0;
  function gt() {
    throw Error(i(321));
  }
  function Cc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!un(e[a], t[a])) return !1;
    return !0;
  }
  function kc(e, t, a, o, d, v) {
    return Or = v, Le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Qp : Kp, ga = !1, v = a(o, d), ga = !1, ri && (v = mp(
      t,
      a,
      o,
      d
    )), pp(e), v;
  }
  function pp(e) {
    M.H = Bo;
    var t = Qe !== null && Qe.next !== null;
    if (Or = 0, bt = Qe = Le = null, Ro = !1, is = 0, ai = null, t) throw Error(i(300));
    e === null || Nt || (e = e.dependencies, e !== null && Ao(e) && (Nt = !0));
  }
  function mp(e, t, a, o) {
    Le = e;
    var d = 0;
    do {
      if (ri && (ai = null), is = 0, ri = !1, 25 <= d) throw Error(i(301));
      if (d += 1, bt = Qe = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      M.H = Sb, v = t(a, o);
    } while (ri);
    return v;
  }
  function mb() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ss(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (Le.flags |= 1024), t;
  }
  function Ac() {
    var e = jo !== 0;
    return jo = 0, e;
  }
  function Tc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function xc(e) {
    if (Ro) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ro = !1;
    }
    Or = 0, bt = Qe = Le = null, ri = !1, is = jo = 0, ai = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? Le.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function St() {
    if (Qe === null) {
      var e = Le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = bt === null ? Le.memoizedState : bt.next;
    if (t !== null)
      bt = t, Qe = e;
    else {
      if (e === null)
        throw Le.alternate === null ? Error(i(467)) : Error(i(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, bt === null ? Le.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function Nc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ss(e) {
    var t = is;
    return is += 1, ai === null && (ai = []), e = up(ai, e, t), t = Le, (bt === null ? t.memoizedState : bt.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Qp : Kp), e;
  }
  function Do(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ss(e);
      if (e.$$typeof === L) return Ut(e);
    }
    throw Error(i(438, String(e)));
  }
  function Oc(e) {
    var t = null, a = Le.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var o = Le.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Nc(), Le.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), o = 0; o < e; o++)
        a[o] = j;
    return t.index++, a;
  }
  function lr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zo(e) {
    var t = St();
    return Mc(t, Qe, e);
  }
  function Mc(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var d = e.baseQueue, v = o.pending;
    if (v !== null) {
      if (d !== null) {
        var T = d.next;
        d.next = v.next, v.next = T;
      }
      t.baseQueue = d = v, o.pending = null;
    }
    if (v = e.baseState, d === null) e.memoizedState = v;
    else {
      t = d.next;
      var D = T = null, U = null, Q = t, ie = !1;
      do {
        var le = Q.lane & -536870913;
        if (le !== Q.lane ? (Ge & le) === le : (Or & le) === le) {
          var W = Q.revertLane;
          if (W === 0)
            U !== null && (U = U.next = {
              lane: 0,
              revertLane: 0,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }), le === ei && (ie = !0);
          else if ((Or & W) === W) {
            Q = Q.next, W === ei && (ie = !0);
            continue;
          } else
            le = {
              lane: 0,
              revertLane: Q.revertLane,
              action: Q.action,
              hasEagerState: Q.hasEagerState,
              eagerState: Q.eagerState,
              next: null
            }, U === null ? (D = U = le, T = v) : U = U.next = le, Le.lanes |= W, Pr |= W;
          le = Q.action, ga && a(v, le), v = Q.hasEagerState ? Q.eagerState : a(v, le);
        } else
          W = {
            lane: le,
            revertLane: Q.revertLane,
            action: Q.action,
            hasEagerState: Q.hasEagerState,
            eagerState: Q.eagerState,
            next: null
          }, U === null ? (D = U = W, T = v) : U = U.next = W, Le.lanes |= le, Pr |= le;
        Q = Q.next;
      } while (Q !== null && Q !== t);
      if (U === null ? T = v : U.next = D, !un(v, e.memoizedState) && (Nt = !0, ie && (a = ti, a !== null)))
        throw a;
      e.memoizedState = v, e.baseState = T, e.baseQueue = U, o.lastRenderedState = v;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Rc(e) {
    var t = St(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, d = a.pending, v = t.memoizedState;
    if (d !== null) {
      a.pending = null;
      var T = d = d.next;
      do
        v = e(v, T.action), T = T.next;
      while (T !== d);
      un(v, t.memoizedState) || (Nt = !0), t.memoizedState = v, t.baseQueue === null && (t.baseState = v), a.lastRenderedState = v;
    }
    return [v, o];
  }
  function gp(e, t, a) {
    var o = Le, d = St(), v = $e;
    if (v) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var T = !un(
      (Qe || d).memoizedState,
      a
    );
    T && (d.memoizedState = a, Nt = !0), d = d.queue;
    var D = _p.bind(null, o, d, e);
    if (os(2048, 8, D, [e]), d.getSnapshot !== t || T || bt !== null && bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ii(
        9,
        Lo(),
        yp.bind(
          null,
          o,
          d,
          a,
          t
        ),
        null
      ), nt === null) throw Error(i(349));
      v || (Or & 124) !== 0 || vp(o, t, a);
    }
    return a;
  }
  function vp(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Le.updateQueue, t === null ? (t = Nc(), Le.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function yp(e, t, a, o) {
    t.value = a, t.getSnapshot = o, bp(t) && Sp(e);
  }
  function _p(e, t, a) {
    return a(function() {
      bp(t) && Sp(e);
    });
  }
  function bp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !un(e, a);
    } catch {
      return !0;
    }
  }
  function Sp(e) {
    var t = Qa(e, 2);
    t !== null && pn(t, e, 2);
  }
  function jc(e) {
    var t = Wt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ga) {
        Zn(!0);
        try {
          a();
        } finally {
          Zn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lr,
      lastRenderedState: e
    }, t;
  }
  function wp(e, t, a, o) {
    return e.baseState = a, Mc(
      e,
      Qe,
      typeof o == "function" ? o : lr
    );
  }
  function gb(e, t, a, o, d) {
    if (Io(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var v = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(T) {
          v.listeners.push(T);
        }
      };
      M.T !== null ? a(!0) : v.isTransition = !1, o(v), a = t.pending, a === null ? (v.next = t.pending = v, Ep(t, v)) : (v.next = a.next, t.pending = a.next = v);
    }
  }
  function Ep(e, t) {
    var a = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var v = M.T, T = {};
      M.T = T;
      try {
        var D = a(d, o), U = M.S;
        U !== null && U(T, D), Cp(e, t, D);
      } catch (Q) {
        Dc(e, t, Q);
      } finally {
        M.T = v;
      }
    } else
      try {
        v = a(d, o), Cp(e, t, v);
      } catch (Q) {
        Dc(e, t, Q);
      }
  }
  function Cp(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(o) {
        kp(e, t, o);
      },
      function(o) {
        return Dc(e, t, o);
      }
    ) : kp(e, t, a);
  }
  function kp(e, t, a) {
    t.status = "fulfilled", t.value = a, Ap(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Ep(e, a)));
  }
  function Dc(e, t, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = a, Ap(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function Ap(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Tp(e, t) {
    return t;
  }
  function xp(e, t) {
    if ($e) {
      var a = nt.formState;
      if (a !== null) {
        e: {
          var o = Le;
          if ($e) {
            if (ft) {
              t: {
                for (var d = ft, v = Vn; d.nodeType !== 8; ) {
                  if (!v) {
                    d = null;
                    break t;
                  }
                  if (d = Ln(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                v = d.data, d = v === "F!" || v === "F" ? d : null;
              }
              if (d) {
                ft = Ln(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            fa(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return a = Wt(), a.memoizedState = a.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tp,
      lastRenderedState: t
    }, a.queue = o, a = $p.bind(
      null,
      Le,
      o
    ), o.dispatch = a, o = jc(!1), v = Bc.bind(
      null,
      Le,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, a = gb.bind(
      null,
      Le,
      d,
      v,
      a
    ), d.dispatch = a, o.memoizedState = e, [t, a, !1];
  }
  function Np(e) {
    var t = St();
    return Op(t, Qe, e);
  }
  function Op(e, t, a) {
    if (t = Mc(
      e,
      t,
      Tp
    )[0], e = zo(lr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = ss(t);
      } catch (T) {
        throw T === es ? No : T;
      }
    else o = t;
    t = St();
    var d = t.queue, v = d.dispatch;
    return a !== t.memoizedState && (Le.flags |= 2048, ii(
      9,
      Lo(),
      vb.bind(null, d, a),
      null
    )), [o, v, e];
  }
  function vb(e, t) {
    e.action = t;
  }
  function Mp(e) {
    var t = St(), a = Qe;
    if (a !== null)
      return Op(t, a, e);
    St(), t = t.memoizedState, a = St();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [t, o, !1];
  }
  function ii(e, t, a, o) {
    return e = { tag: e, create: a, deps: o, inst: t, next: null }, t = Le.updateQueue, t === null && (t = Nc(), Le.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Lo() {
    return { destroy: void 0, resource: void 0 };
  }
  function Rp() {
    return St().memoizedState;
  }
  function Po(e, t, a, o) {
    var d = Wt();
    o = o === void 0 ? null : o, Le.flags |= e, d.memoizedState = ii(
      1 | t,
      Lo(),
      a,
      o
    );
  }
  function os(e, t, a, o) {
    var d = St();
    o = o === void 0 ? null : o;
    var v = d.memoizedState.inst;
    Qe !== null && o !== null && Cc(o, Qe.memoizedState.deps) ? d.memoizedState = ii(t, v, a, o) : (Le.flags |= e, d.memoizedState = ii(
      1 | t,
      v,
      a,
      o
    ));
  }
  function jp(e, t) {
    Po(8390656, 8, e, t);
  }
  function Dp(e, t) {
    os(2048, 8, e, t);
  }
  function zp(e, t) {
    return os(4, 2, e, t);
  }
  function Lp(e, t) {
    return os(4, 4, e, t);
  }
  function Pp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Ip(e, t, a) {
    a = a != null ? a.concat([e]) : null, os(4, 4, Pp.bind(null, t, e), a);
  }
  function zc() {
  }
  function Bp(e, t) {
    var a = St();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Cc(t, o[1]) ? o[0] : (a.memoizedState = [e, t], e);
  }
  function Up(e, t) {
    var a = St();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && Cc(t, o[1]))
      return o[0];
    if (o = e(), ga) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return a.memoizedState = [o, t], o;
  }
  function Lc(e, t, a) {
    return a === void 0 || (Or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = Zm(), Le.lanes |= e, Pr |= e, a);
  }
  function Hp(e, t, a, o) {
    return un(a, t) ? a : ni.current !== null ? (e = Lc(e, a, o), un(e, t) || (Nt = !0), e) : (Or & 42) === 0 ? (Nt = !0, e.memoizedState = a) : (e = Zm(), Le.lanes |= e, Pr |= e, t);
  }
  function qp(e, t, a, o, d) {
    var v = B.p;
    B.p = v !== 0 && 8 > v ? v : 8;
    var T = M.T, D = {};
    M.T = D, Bc(e, !1, t, a);
    try {
      var U = d(), Q = M.S;
      if (Q !== null && Q(D, U), U !== null && typeof U == "object" && typeof U.then == "function") {
        var ie = hb(
          U,
          o
        );
        us(
          e,
          t,
          ie,
          hn(e)
        );
      } else
        us(
          e,
          t,
          o,
          hn(e)
        );
    } catch (le) {
      us(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: le },
        hn()
      );
    } finally {
      B.p = v, M.T = T;
    }
  }
  function yb() {
  }
  function Pc(e, t, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var d = Zp(e).queue;
    qp(
      e,
      d,
      t,
      J,
      a === null ? yb : function() {
        return Gp(e), a(o);
      }
    );
  }
  function Zp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lr,
        lastRenderedState: J
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Gp(e) {
    var t = Zp(e).next.queue;
    us(e, t, {}, hn());
  }
  function Ic() {
    return Ut(As);
  }
  function Vp() {
    return St().memoizedState;
  }
  function Yp() {
    return St().memoizedState;
  }
  function _b(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = hn();
          e = xr(a);
          var o = Nr(t, e, a);
          o !== null && (pn(o, t, a), ns(o, t, a)), t = { cache: pc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function bb(e, t, a) {
    var o = hn();
    a = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Io(e) ? Xp(t, a) : (a = ac(e, t, a, o), a !== null && (pn(a, e, o), Fp(a, t, o)));
  }
  function $p(e, t, a) {
    var o = hn();
    us(e, t, a, o);
  }
  function us(e, t, a, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Io(e)) Xp(t, d);
    else {
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = t.lastRenderedReducer, v !== null))
        try {
          var T = t.lastRenderedState, D = v(T, a);
          if (d.hasEagerState = !0, d.eagerState = D, un(D, T))
            return So(e, t, d, 0), nt === null && bo(), !1;
        } catch {
        } finally {
        }
      if (a = ac(e, t, d, o), a !== null)
        return pn(a, e, o), Fp(a, t, o), !0;
    }
    return !1;
  }
  function Bc(e, t, a, o) {
    if (o = {
      lane: 2,
      revertLane: vd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Io(e)) {
      if (t) throw Error(i(479));
    } else
      t = ac(
        e,
        a,
        o,
        2
      ), t !== null && pn(t, e, 2);
  }
  function Io(e) {
    var t = e.alternate;
    return e === Le || t !== null && t === Le;
  }
  function Xp(e, t) {
    ri = Ro = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Fp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, rh(e, a);
    }
  }
  var Bo = {
    readContext: Ut,
    use: Do,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, Qp = {
    readContext: Ut,
    use: Do,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ut,
    useEffect: jp,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Po(
        4194308,
        4,
        Pp.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return Po(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Po(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = Wt();
      t = t === void 0 ? null : t;
      var o = e();
      if (ga) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return a.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, a) {
      var o = Wt();
      if (a !== void 0) {
        var d = a(t);
        if (ga) {
          Zn(!0);
          try {
            a(t);
          } finally {
            Zn(!1);
          }
        }
      } else d = t;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = bb.bind(
        null,
        Le,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = Wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = jc(e);
      var t = e.queue, a = $p.bind(null, Le, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = Wt();
      return Lc(a, e, t);
    },
    useTransition: function() {
      var e = jc(!1);
      return e = qp.bind(
        null,
        Le,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var o = Le, d = Wt();
      if ($e) {
        if (a === void 0)
          throw Error(i(407));
        a = a();
      } else {
        if (a = t(), nt === null)
          throw Error(i(349));
        (Ge & 124) !== 0 || vp(o, t, a);
      }
      d.memoizedState = a;
      var v = { value: a, getSnapshot: t };
      return d.queue = v, jp(_p.bind(null, o, v, e), [
        e
      ]), o.flags |= 2048, ii(
        9,
        Lo(),
        yp.bind(
          null,
          o,
          v,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = Wt(), t = nt.identifierPrefix;
      if ($e) {
        var a = sr, o = ir;
        a = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = jo++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = pb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ic,
    useFormState: xp,
    useActionState: xp,
    useOptimistic: function(e) {
      var t = Wt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Bc.bind(
        null,
        Le,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: Oc,
    useCacheRefresh: function() {
      return Wt().memoizedState = _b.bind(
        null,
        Le
      );
    }
  }, Kp = {
    readContext: Ut,
    use: Do,
    useCallback: Bp,
    useContext: Ut,
    useEffect: Dp,
    useImperativeHandle: Ip,
    useInsertionEffect: zp,
    useLayoutEffect: Lp,
    useMemo: Up,
    useReducer: zo,
    useRef: Rp,
    useState: function() {
      return zo(lr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = St();
      return Hp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zo(lr)[0], t = St().memoizedState;
      return [
        typeof e == "boolean" ? e : ss(e),
        t
      ];
    },
    useSyncExternalStore: gp,
    useId: Vp,
    useHostTransitionStatus: Ic,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(e, t) {
      var a = St();
      return wp(a, Qe, e, t);
    },
    useMemoCache: Oc,
    useCacheRefresh: Yp
  }, Sb = {
    readContext: Ut,
    use: Do,
    useCallback: Bp,
    useContext: Ut,
    useEffect: Dp,
    useImperativeHandle: Ip,
    useInsertionEffect: zp,
    useLayoutEffect: Lp,
    useMemo: Up,
    useReducer: Rc,
    useRef: Rp,
    useState: function() {
      return Rc(lr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var a = St();
      return Qe === null ? Lc(a, e, t) : Hp(
        a,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Rc(lr)[0], t = St().memoizedState;
      return [
        typeof e == "boolean" ? e : ss(e),
        t
      ];
    },
    useSyncExternalStore: gp,
    useId: Vp,
    useHostTransitionStatus: Ic,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(e, t) {
      var a = St();
      return Qe !== null ? wp(a, Qe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Yp
  }, si = null, ls = 0;
  function Uo(e) {
    var t = ls;
    return ls += 1, si === null && (si = []), up(si, e, t);
  }
  function cs(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ho(e, t) {
    throw t.$$typeof === E ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Jp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Wp(e) {
    function t(V, q) {
      if (e) {
        var F = V.deletions;
        F === null ? (V.deletions = [q], V.flags |= 16) : F.push(q);
      }
    }
    function a(V, q) {
      if (!e) return null;
      for (; q !== null; )
        t(V, q), q = q.sibling;
      return null;
    }
    function o(V) {
      for (var q = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? q.set(V.key, V) : q.set(V.index, V), V = V.sibling;
      return q;
    }
    function d(V, q) {
      return V = ar(V, q), V.index = 0, V.sibling = null, V;
    }
    function v(V, q, F) {
      return V.index = F, e ? (F = V.alternate, F !== null ? (F = F.index, F < q ? (V.flags |= 67108866, q) : F) : (V.flags |= 67108866, q)) : (V.flags |= 1048576, q);
    }
    function T(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function D(V, q, F, oe) {
      return q === null || q.tag !== 6 ? (q = sc(F, V.mode, oe), q.return = V, q) : (q = d(q, F), q.return = V, q);
    }
    function U(V, q, F, oe) {
      var ge = F.type;
      return ge === h ? ie(
        V,
        q,
        F.props.children,
        oe,
        F.key
      ) : q !== null && (q.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === O && Jp(ge) === q.type) ? (q = d(q, F.props), cs(q, F), q.return = V, q) : (q = Eo(
        F.type,
        F.key,
        F.props,
        null,
        V.mode,
        oe
      ), cs(q, F), q.return = V, q);
    }
    function Q(V, q, F, oe) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== F.containerInfo || q.stateNode.implementation !== F.implementation ? (q = oc(F, V.mode, oe), q.return = V, q) : (q = d(q, F.children || []), q.return = V, q);
    }
    function ie(V, q, F, oe, ge) {
      return q === null || q.tag !== 7 ? (q = ua(
        F,
        V.mode,
        oe,
        ge
      ), q.return = V, q) : (q = d(q, F), q.return = V, q);
    }
    function le(V, q, F) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return q = sc(
          "" + q,
          V.mode,
          F
        ), q.return = V, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case y:
            return F = Eo(
              q.type,
              q.key,
              q.props,
              null,
              V.mode,
              F
            ), cs(F, q), F.return = V, F;
          case b:
            return q = oc(
              q,
              V.mode,
              F
            ), q.return = V, q;
          case O:
            var oe = q._init;
            return q = oe(q._payload), le(V, q, F);
        }
        if (K(q) || Z(q))
          return q = ua(
            q,
            V.mode,
            F,
            null
          ), q.return = V, q;
        if (typeof q.then == "function")
          return le(V, Uo(q), F);
        if (q.$$typeof === L)
          return le(
            V,
            To(V, q),
            F
          );
        Ho(V, q);
      }
      return null;
    }
    function W(V, q, F, oe) {
      var ge = q !== null ? q.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return ge !== null ? null : D(V, q, "" + F, oe);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            return F.key === ge ? U(V, q, F, oe) : null;
          case b:
            return F.key === ge ? Q(V, q, F, oe) : null;
          case O:
            return ge = F._init, F = ge(F._payload), W(V, q, F, oe);
        }
        if (K(F) || Z(F))
          return ge !== null ? null : ie(V, q, F, oe, null);
        if (typeof F.then == "function")
          return W(
            V,
            q,
            Uo(F),
            oe
          );
        if (F.$$typeof === L)
          return W(
            V,
            q,
            To(V, F),
            oe
          );
        Ho(V, F);
      }
      return null;
    }
    function ee(V, q, F, oe, ge) {
      if (typeof oe == "string" && oe !== "" || typeof oe == "number" || typeof oe == "bigint")
        return V = V.get(F) || null, D(q, V, "" + oe, ge);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case y:
            return V = V.get(
              oe.key === null ? F : oe.key
            ) || null, U(q, V, oe, ge);
          case b:
            return V = V.get(
              oe.key === null ? F : oe.key
            ) || null, Q(q, V, oe, ge);
          case O:
            var Pe = oe._init;
            return oe = Pe(oe._payload), ee(
              V,
              q,
              F,
              oe,
              ge
            );
        }
        if (K(oe) || Z(oe))
          return V = V.get(F) || null, ie(q, V, oe, ge, null);
        if (typeof oe.then == "function")
          return ee(
            V,
            q,
            F,
            Uo(oe),
            ge
          );
        if (oe.$$typeof === L)
          return ee(
            V,
            q,
            F,
            To(q, oe),
            ge
          );
        Ho(q, oe);
      }
      return null;
    }
    function Ce(V, q, F, oe) {
      for (var ge = null, Pe = null, _e = q, Ee = q = 0, Mt = null; _e !== null && Ee < F.length; Ee++) {
        _e.index > Ee ? (Mt = _e, _e = null) : Mt = _e.sibling;
        var Ye = W(
          V,
          _e,
          F[Ee],
          oe
        );
        if (Ye === null) {
          _e === null && (_e = Mt);
          break;
        }
        e && _e && Ye.alternate === null && t(V, _e), q = v(Ye, q, Ee), Pe === null ? ge = Ye : Pe.sibling = Ye, Pe = Ye, _e = Mt;
      }
      if (Ee === F.length)
        return a(V, _e), $e && ca(V, Ee), ge;
      if (_e === null) {
        for (; Ee < F.length; Ee++)
          _e = le(V, F[Ee], oe), _e !== null && (q = v(
            _e,
            q,
            Ee
          ), Pe === null ? ge = _e : Pe.sibling = _e, Pe = _e);
        return $e && ca(V, Ee), ge;
      }
      for (_e = o(_e); Ee < F.length; Ee++)
        Mt = ee(
          _e,
          V,
          Ee,
          F[Ee],
          oe
        ), Mt !== null && (e && Mt.alternate !== null && _e.delete(
          Mt.key === null ? Ee : Mt.key
        ), q = v(
          Mt,
          q,
          Ee
        ), Pe === null ? ge = Mt : Pe.sibling = Mt, Pe = Mt);
      return e && _e.forEach(function(Yr) {
        return t(V, Yr);
      }), $e && ca(V, Ee), ge;
    }
    function we(V, q, F, oe) {
      if (F == null) throw Error(i(151));
      for (var ge = null, Pe = null, _e = q, Ee = q = 0, Mt = null, Ye = F.next(); _e !== null && !Ye.done; Ee++, Ye = F.next()) {
        _e.index > Ee ? (Mt = _e, _e = null) : Mt = _e.sibling;
        var Yr = W(V, _e, Ye.value, oe);
        if (Yr === null) {
          _e === null && (_e = Mt);
          break;
        }
        e && _e && Yr.alternate === null && t(V, _e), q = v(Yr, q, Ee), Pe === null ? ge = Yr : Pe.sibling = Yr, Pe = Yr, _e = Mt;
      }
      if (Ye.done)
        return a(V, _e), $e && ca(V, Ee), ge;
      if (_e === null) {
        for (; !Ye.done; Ee++, Ye = F.next())
          Ye = le(V, Ye.value, oe), Ye !== null && (q = v(Ye, q, Ee), Pe === null ? ge = Ye : Pe.sibling = Ye, Pe = Ye);
        return $e && ca(V, Ee), ge;
      }
      for (_e = o(_e); !Ye.done; Ee++, Ye = F.next())
        Ye = ee(_e, V, Ee, Ye.value, oe), Ye !== null && (e && Ye.alternate !== null && _e.delete(Ye.key === null ? Ee : Ye.key), q = v(Ye, q, Ee), Pe === null ? ge = Ye : Pe.sibling = Ye, Pe = Ye);
      return e && _e.forEach(function(w1) {
        return t(V, w1);
      }), $e && ca(V, Ee), ge;
    }
    function Je(V, q, F, oe) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            e: {
              for (var ge = F.key; q !== null; ) {
                if (q.key === ge) {
                  if (ge = F.type, ge === h) {
                    if (q.tag === 7) {
                      a(
                        V,
                        q.sibling
                      ), oe = d(
                        q,
                        F.props.children
                      ), oe.return = V, V = oe;
                      break e;
                    }
                  } else if (q.elementType === ge || typeof ge == "object" && ge !== null && ge.$$typeof === O && Jp(ge) === q.type) {
                    a(
                      V,
                      q.sibling
                    ), oe = d(q, F.props), cs(oe, F), oe.return = V, V = oe;
                    break e;
                  }
                  a(V, q);
                  break;
                } else t(V, q);
                q = q.sibling;
              }
              F.type === h ? (oe = ua(
                F.props.children,
                V.mode,
                oe,
                F.key
              ), oe.return = V, V = oe) : (oe = Eo(
                F.type,
                F.key,
                F.props,
                null,
                V.mode,
                oe
              ), cs(oe, F), oe.return = V, V = oe);
            }
            return T(V);
          case b:
            e: {
              for (ge = F.key; q !== null; ) {
                if (q.key === ge)
                  if (q.tag === 4 && q.stateNode.containerInfo === F.containerInfo && q.stateNode.implementation === F.implementation) {
                    a(
                      V,
                      q.sibling
                    ), oe = d(q, F.children || []), oe.return = V, V = oe;
                    break e;
                  } else {
                    a(V, q);
                    break;
                  }
                else t(V, q);
                q = q.sibling;
              }
              oe = oc(F, V.mode, oe), oe.return = V, V = oe;
            }
            return T(V);
          case O:
            return ge = F._init, F = ge(F._payload), Je(
              V,
              q,
              F,
              oe
            );
        }
        if (K(F))
          return Ce(
            V,
            q,
            F,
            oe
          );
        if (Z(F)) {
          if (ge = Z(F), typeof ge != "function") throw Error(i(150));
          return F = ge.call(F), we(
            V,
            q,
            F,
            oe
          );
        }
        if (typeof F.then == "function")
          return Je(
            V,
            q,
            Uo(F),
            oe
          );
        if (F.$$typeof === L)
          return Je(
            V,
            q,
            To(V, F),
            oe
          );
        Ho(V, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, q !== null && q.tag === 6 ? (a(V, q.sibling), oe = d(q, F), oe.return = V, V = oe) : (a(V, q), oe = sc(F, V.mode, oe), oe.return = V, V = oe), T(V)) : a(V, q);
    }
    return function(V, q, F, oe) {
      try {
        ls = 0;
        var ge = Je(
          V,
          q,
          F,
          oe
        );
        return si = null, ge;
      } catch (_e) {
        if (_e === es || _e === No) throw _e;
        var Pe = ln(29, _e, null, V.mode);
        return Pe.lanes = oe, Pe.return = V, Pe;
      } finally {
      }
    };
  }
  var oi = Wp(!0), em = Wp(!1), xn = $(null), Yn = null;
  function Mr(e) {
    var t = e.alternate;
    Y(kt, kt.current & 1), Y(xn, e), Yn === null && (t === null || ni.current !== null || t.memoizedState !== null) && (Yn = e);
  }
  function tm(e) {
    if (e.tag === 22) {
      if (Y(kt, kt.current), Y(xn, e), Yn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Yn = e);
      }
    } else Rr();
  }
  function Rr() {
    Y(kt, kt.current), Y(xn, xn.current);
  }
  function cr(e) {
    ce(xn), Yn === e && (Yn = null), ce(kt);
  }
  var kt = $(0);
  function qo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Nd(a)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Uc(e, t, a, o) {
    t = e.memoizedState, a = a(o, t), a = a == null ? t : g({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Hc = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var o = hn(), d = xr(o);
      d.payload = t, a != null && (d.callback = a), t = Nr(e, d, o), t !== null && (pn(t, e, o), ns(t, e, o));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var o = hn(), d = xr(o);
      d.tag = 1, d.payload = t, a != null && (d.callback = a), t = Nr(e, d, o), t !== null && (pn(t, e, o), ns(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = hn(), o = xr(a);
      o.tag = 2, t != null && (o.callback = t), t = Nr(e, o, a), t !== null && (pn(t, e, a), ns(t, e, a));
    }
  };
  function nm(e, t, a, o, d, v, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, v, T) : t.prototype && t.prototype.isPureReactComponent ? !Yi(a, o) || !Yi(d, v) : !0;
  }
  function rm(e, t, a, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== e && Hc.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t)
        o !== "ref" && (a[o] = t[o]);
    }
    if (e = e.defaultProps) {
      a === t && (a = g({}, a));
      for (var d in e)
        a[d] === void 0 && (a[d] = e[d]);
    }
    return a;
  }
  var Zo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function am(e) {
    Zo(e);
  }
  function im(e) {
    console.error(e);
  }
  function sm(e) {
    Zo(e);
  }
  function Go(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function om(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function qc(e, t, a) {
    return a = xr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Go(e, t);
    }, a;
  }
  function um(e) {
    return e = xr(e), e.tag = 3, e;
  }
  function lm(e, t, a, o) {
    var d = a.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var v = o.value;
      e.payload = function() {
        return d(v);
      }, e.callback = function() {
        om(t, a, o);
      };
    }
    var T = a.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      om(t, a, o), typeof d != "function" && (Ir === null ? Ir = /* @__PURE__ */ new Set([this]) : Ir.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function wb(e, t, a, o, d) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = a.alternate, t !== null && Ki(
        t,
        a,
        d,
        !0
      ), a = xn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Yn === null ? fd() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = d, o === vc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), pd(e, o, d)), !1;
          case 22:
            return a.flags |= 65536, o === vc ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), pd(e, o, d)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return pd(e, o, d), fd(), !1;
    }
    if ($e)
      return t = xn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== cc && (e = Error(i(422), { cause: o }), Qi(Cn(e, a)))) : (o !== cc && (t = Error(i(423), {
        cause: o
      }), Qi(
        Cn(t, a)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, a), d = qc(
        e.stateNode,
        o,
        d
      ), bc(e, d), ht !== 4 && (ht = 2)), !1;
    var v = Error(i(520), { cause: o });
    if (v = Cn(v, a), vs === null ? vs = [v] : vs.push(v), ht !== 4 && (ht = 2), t === null) return !0;
    o = Cn(o, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = d & -d, a.lanes |= e, e = qc(a.stateNode, o, e), bc(a, e), !1;
        case 1:
          if (t = a.type, v = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Ir === null || !Ir.has(v))))
            return a.flags |= 65536, d &= -d, a.lanes |= d, d = um(d), lm(
              d,
              e,
              a,
              o
            ), bc(a, d), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var cm = Error(i(461)), Nt = !1;
  function jt(e, t, a, o) {
    t.child = e === null ? em(t, null, a, o) : oi(
      t,
      e.child,
      a,
      o
    );
  }
  function dm(e, t, a, o, d) {
    a = a.render;
    var v = t.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return pa(t), o = kc(
      e,
      t,
      a,
      T,
      v,
      d
    ), D = Ac(), e !== null && !Nt ? (Tc(e, t, d), dr(e, t, d)) : ($e && D && uc(t), t.flags |= 1, jt(e, t, o, d), t.child);
  }
  function fm(e, t, a, o, d) {
    if (e === null) {
      var v = a.type;
      return typeof v == "function" && !ic(v) && v.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = v, hm(
        e,
        t,
        v,
        o,
        d
      )) : (e = Eo(
        a.type,
        null,
        o,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (v = e.child, !Qc(e, d)) {
      var T = v.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Yi, a(T, o) && e.ref === t.ref)
        return dr(e, t, d);
    }
    return t.flags |= 1, e = ar(v, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function hm(e, t, a, o, d) {
    if (e !== null) {
      var v = e.memoizedProps;
      if (Yi(v, o) && e.ref === t.ref)
        if (Nt = !1, t.pendingProps = o = v, Qc(e, d))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return t.lanes = e.lanes, dr(e, t, d);
    }
    return Zc(
      e,
      t,
      a,
      o,
      d
    );
  }
  function pm(e, t, a) {
    var o = t.pendingProps, d = o.children, v = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = v !== null ? v.baseLanes | a : a, e !== null) {
          for (d = t.child = e.child, v = 0; d !== null; )
            v = v | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = v & ~o;
        } else t.childLanes = 0, t.child = null;
        return mm(
          e,
          t,
          o,
          a
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && xo(
          t,
          v !== null ? v.cachePool : null
        ), v !== null ? hp(t, v) : wc(), tm(t);
      else
        return t.lanes = t.childLanes = 536870912, mm(
          e,
          t,
          v !== null ? v.baseLanes | a : a,
          a
        );
    } else
      v !== null ? (xo(t, v.cachePool), hp(t, v), Rr(), t.memoizedState = null) : (e !== null && xo(t, null), wc(), Rr());
    return jt(e, t, d, a), t.child;
  }
  function mm(e, t, a, o) {
    var d = gc();
    return d = d === null ? null : { parent: Ct._currentValue, pool: d }, t.memoizedState = {
      baseLanes: a,
      cachePool: d
    }, e !== null && xo(t, null), wc(), tm(t), e !== null && Ki(e, t, o, !0), null;
  }
  function Vo(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Zc(e, t, a, o, d) {
    return pa(t), a = kc(
      e,
      t,
      a,
      o,
      void 0,
      d
    ), o = Ac(), e !== null && !Nt ? (Tc(e, t, d), dr(e, t, d)) : ($e && o && uc(t), t.flags |= 1, jt(e, t, a, d), t.child);
  }
  function gm(e, t, a, o, d, v) {
    return pa(t), t.updateQueue = null, a = mp(
      t,
      o,
      a,
      d
    ), pp(e), o = Ac(), e !== null && !Nt ? (Tc(e, t, v), dr(e, t, v)) : ($e && o && uc(t), t.flags |= 1, jt(e, t, a, v), t.child);
  }
  function vm(e, t, a, o, d) {
    if (pa(t), t.stateNode === null) {
      var v = Ka, T = a.contextType;
      typeof T == "object" && T !== null && (v = Ut(T)), v = new a(o, v), t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = Hc, t.stateNode = v, v._reactInternals = t, v = t.stateNode, v.props = o, v.state = t.memoizedState, v.refs = {}, yc(t), T = a.contextType, v.context = typeof T == "object" && T !== null ? Ut(T) : Ka, v.state = t.memoizedState, T = a.getDerivedStateFromProps, typeof T == "function" && (Uc(
        t,
        a,
        T,
        o
      ), v.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (T = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), T !== v.state && Hc.enqueueReplaceState(v, v.state, null), as(t, o, v, d), rs(), v.state = t.memoizedState), typeof v.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      v = t.stateNode;
      var D = t.memoizedProps, U = va(a, D);
      v.props = U;
      var Q = v.context, ie = a.contextType;
      T = Ka, typeof ie == "object" && ie !== null && (T = Ut(ie));
      var le = a.getDerivedStateFromProps;
      ie = typeof le == "function" || typeof v.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, ie || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (D || Q !== T) && rm(
        t,
        v,
        o,
        T
      ), Tr = !1;
      var W = t.memoizedState;
      v.state = W, as(t, o, v, d), rs(), Q = t.memoizedState, D || W !== Q || Tr ? (typeof le == "function" && (Uc(
        t,
        a,
        le,
        o
      ), Q = t.memoizedState), (U = Tr || nm(
        t,
        a,
        U,
        o,
        W,
        Q,
        T
      )) ? (ie || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = Q), v.props = o, v.state = Q, v.context = T, o = U) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      v = t.stateNode, _c(e, t), T = t.memoizedProps, ie = va(a, T), v.props = ie, le = t.pendingProps, W = v.context, Q = a.contextType, U = Ka, typeof Q == "object" && Q !== null && (U = Ut(Q)), D = a.getDerivedStateFromProps, (Q = typeof D == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== le || W !== U) && rm(
        t,
        v,
        o,
        U
      ), Tr = !1, W = t.memoizedState, v.state = W, as(t, o, v, d), rs();
      var ee = t.memoizedState;
      T !== le || W !== ee || Tr || e !== null && e.dependencies !== null && Ao(e.dependencies) ? (typeof D == "function" && (Uc(
        t,
        a,
        D,
        o
      ), ee = t.memoizedState), (ie = Tr || nm(
        t,
        a,
        ie,
        o,
        W,
        ee,
        U
      ) || e !== null && e.dependencies !== null && Ao(e.dependencies)) ? (Q || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, ee, U), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        o,
        ee,
        U
      )), typeof v.componentDidUpdate == "function" && (t.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = ee), v.props = o, v.state = ee, v.context = U, o = ie) : (typeof v.componentDidUpdate != "function" || T === e.memoizedProps && W === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && W === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return v = o, Vo(e, t), o = (t.flags & 128) !== 0, v || o ? (v = t.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : v.render(), t.flags |= 1, e !== null && o ? (t.child = oi(
      t,
      e.child,
      null,
      d
    ), t.child = oi(
      t,
      null,
      a,
      d
    )) : jt(e, t, a, d), t.memoizedState = v.state, e = t.child) : e = dr(
      e,
      t,
      d
    ), e;
  }
  function ym(e, t, a, o) {
    return Fi(), t.flags |= 256, jt(e, t, a, o), t.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(e) {
    return { baseLanes: e, cachePool: ip() };
  }
  function Yc(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Nn), e;
  }
  function _m(e, t, a) {
    var o = t.pendingProps, d = !1, v = (t.flags & 128) !== 0, T;
    if ((T = v) || (T = e !== null && e.memoizedState === null ? !1 : (kt.current & 2) !== 0), T && (d = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if ($e) {
        if (d ? Mr(t) : Rr(), $e) {
          var D = ft, U;
          if (U = D) {
            e: {
              for (U = D, D = Vn; U.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (U = Ln(
                  U.nextSibling
                ), U === null) {
                  D = null;
                  break e;
                }
              }
              D = U;
            }
            D !== null ? (t.memoizedState = {
              dehydrated: D,
              treeContext: la !== null ? { id: ir, overflow: sr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, U = ln(
              18,
              null,
              null,
              0
            ), U.stateNode = D, U.return = t, t.child = U, Yt = t, ft = null, U = !0) : U = !1;
          }
          U || fa(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Nd(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        cr(t);
      }
      return D = o.children, o = o.fallback, d ? (Rr(), d = t.mode, D = Yo(
        { mode: "hidden", children: D },
        d
      ), o = ua(
        o,
        d,
        a,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = Vc(a), d.childLanes = Yc(
        e,
        T,
        a
      ), t.memoizedState = Gc, o) : (Mr(t), $c(t, D));
    }
    if (U = e.memoizedState, U !== null && (D = U.dehydrated, D !== null)) {
      if (v)
        t.flags & 256 ? (Mr(t), t.flags &= -257, t = Xc(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Rr(), t.child = e.child, t.flags |= 128, t = null) : (Rr(), d = o.fallback, D = t.mode, o = Yo(
          { mode: "visible", children: o.children },
          D
        ), d = ua(
          d,
          D,
          a,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, oi(
          t,
          e.child,
          null,
          a
        ), o = t.child, o.memoizedState = Vc(a), o.childLanes = Yc(
          e,
          T,
          a
        ), t.memoizedState = Gc, t = d);
      else if (Mr(t), Nd(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var Q = T.dgst;
        T = Q, o = Error(i(419)), o.stack = "", o.digest = T, Qi({ value: o, source: null, stack: null }), t = Xc(
          e,
          t,
          a
        );
      } else if (Nt || Ki(e, t, a, !1), T = (a & e.childLanes) !== 0, Nt || T) {
        if (T = nt, T !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : Ol(o), o = (o & (T.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
          throw U.retryLane = o, Qa(e, o), pn(T, e, o), cm;
        D.data === "$?" || fd(), t = Xc(
          e,
          t,
          a
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, ft = Ln(
          D.nextSibling
        ), Yt = t, $e = !0, da = null, Vn = !1, e !== null && (An[Tn++] = ir, An[Tn++] = sr, An[Tn++] = la, ir = e.id, sr = e.overflow, la = t), t = $c(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (Rr(), d = o.fallback, D = t.mode, U = e.child, Q = U.sibling, o = ar(U, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = U.subtreeFlags & 65011712, Q !== null ? d = ar(Q, d) : (d = ua(
      d,
      D,
      a,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = Vc(a) : (U = D.cachePool, U !== null ? (Q = Ct._currentValue, U = U.parent !== Q ? { parent: Q, pool: Q } : U) : U = ip(), D = {
      baseLanes: D.baseLanes | a,
      cachePool: U
    }), d.memoizedState = D, d.childLanes = Yc(
      e,
      T,
      a
    ), t.memoizedState = Gc, o) : (Mr(t), a = e.child, e = a.sibling, a = ar(a, {
      mode: "visible",
      children: o.children
    }), a.return = t, a.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function $c(e, t) {
    return t = Yo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Yo(e, t) {
    return e = ln(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Xc(e, t, a) {
    return oi(t, e.child, null, a), e = $c(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function bm(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), fc(e.return, t, a);
  }
  function Fc(e, t, a, o, d) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: d
    } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = a, v.tailMode = d);
  }
  function Sm(e, t, a) {
    var o = t.pendingProps, d = o.revealOrder, v = o.tail;
    if (jt(e, t, o.children, a), o = kt.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && bm(e, a, t);
          else if (e.tag === 19)
            bm(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      o &= 1;
    }
    switch (Y(kt, o), d) {
      case "forwards":
        for (a = t.child, d = null; a !== null; )
          e = a.alternate, e !== null && qo(e) === null && (d = a), a = a.sibling;
        a = d, a === null ? (d = t.child, t.child = null) : (d = a.sibling, a.sibling = null), Fc(
          t,
          !1,
          d,
          a,
          v
        );
        break;
      case "backwards":
        for (a = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && qo(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = a, a = d, d = e;
        }
        Fc(
          t,
          !0,
          a,
          null,
          v
        );
        break;
      case "together":
        Fc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dr(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (Ki(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = ar(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = ar(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Qc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ao(e)));
  }
  function Eb(e, t, a) {
    switch (t.tag) {
      case 3:
        re(t, t.stateNode.containerInfo), Ar(t, Ct, e.memoizedState.cache), Fi();
        break;
      case 27:
      case 5:
        Re(t);
        break;
      case 4:
        re(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ar(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Mr(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _m(e, t, a) : (Mr(t), e = dr(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        Mr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (a & t.childLanes) !== 0, o || (Ki(
          e,
          t,
          a,
          !1
        ), o = (a & t.childLanes) !== 0), d) {
          if (o)
            return Sm(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Y(kt, kt.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, pm(e, t, a);
      case 24:
        Ar(t, Ct, e.memoizedState.cache);
    }
    return dr(e, t, a);
  }
  function wm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Nt = !0;
      else {
        if (!Qc(e, a) && (t.flags & 128) === 0)
          return Nt = !1, Eb(
            e,
            t,
            a
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, $e && (t.flags & 1048576) !== 0 && Jh(t, ko, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            ic(o) ? (e = va(o, e), t.tag = 1, t = vm(
              null,
              t,
              o,
              e,
              a
            )) : (t.tag = 0, t = Zc(
              null,
              t,
              o,
              e,
              a
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = dm(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = fm(
                  null,
                  t,
                  o,
                  e,
                  a
                );
                break e;
              }
            }
            throw t = G(o) || o, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zc(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return o = t.type, d = va(
          o,
          t.pendingProps
        ), vm(
          e,
          t,
          o,
          d,
          a
        );
      case 3:
        e: {
          if (re(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          o = t.pendingProps;
          var v = t.memoizedState;
          d = v.element, _c(e, t), as(t, o, null, a);
          var T = t.memoizedState;
          if (o = T.cache, Ar(t, Ct, o), o !== v.cache && hc(
            t,
            [Ct],
            a,
            !0
          ), rs(), o = T.element, v.isDehydrated)
            if (v = {
              element: o,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = v, t.memoizedState = v, t.flags & 256) {
              t = ym(
                e,
                t,
                o,
                a
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(i(424)),
                t
              ), Qi(d), t = ym(
                e,
                t,
                o,
                a
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ft = Ln(e.firstChild), Yt = t, $e = !0, da = null, Vn = !0, a = em(
                t,
                null,
                o,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Fi(), o === d) {
              t = dr(
                e,
                t,
                a
              );
              break e;
            }
            jt(
              e,
              t,
              o,
              a
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Vo(e, t), e === null ? (a = Ag(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : $e || (a = t.type, e = t.pendingProps, o = su(
          ne.current
        ).createElement(a), o[Bt] = t, o[Kt] = e, zt(o, a, e), xt(o), t.stateNode = o) : t.memoizedState = Ag(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Re(t), e === null && $e && (o = t.stateNode = Eg(
          t.type,
          t.pendingProps,
          ne.current
        ), Yt = t, Vn = !0, d = ft, Hr(t.type) ? (Od = d, ft = Ln(
          o.firstChild
        )) : ft = d), jt(
          e,
          t,
          t.pendingProps.children,
          a
        ), Vo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && $e && ((d = o = ft) && (o = Kb(
          o,
          t.type,
          t.pendingProps,
          Vn
        ), o !== null ? (t.stateNode = o, Yt = t, ft = Ln(
          o.firstChild
        ), Vn = !1, d = !0) : d = !1), d || fa(t)), Re(t), d = t.type, v = t.pendingProps, T = e !== null ? e.memoizedProps : null, o = v.children, Ad(d, v) ? o = null : T !== null && Ad(d, T) && (t.flags |= 32), t.memoizedState !== null && (d = kc(
          e,
          t,
          mb,
          null,
          null,
          a
        ), As._currentValue = d), Vo(e, t), jt(e, t, o, a), t.child;
      case 6:
        return e === null && $e && ((e = a = ft) && (a = Jb(
          a,
          t.pendingProps,
          Vn
        ), a !== null ? (t.stateNode = a, Yt = t, ft = null, e = !0) : e = !1), e || fa(t)), null;
      case 13:
        return _m(e, t, a);
      case 4:
        return re(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = oi(
          t,
          null,
          o,
          a
        ) : jt(
          e,
          t,
          o,
          a
        ), t.child;
      case 11:
        return dm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return jt(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return jt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return jt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return o = t.pendingProps, Ar(t, t.type, o.value), jt(
          e,
          t,
          o.children,
          a
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, pa(t), d = Ut(d), o = o(d), t.flags |= 1, jt(e, t, o, a), t.child;
      case 14:
        return fm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return hm(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return Sm(e, t, a);
      case 31:
        return o = t.pendingProps, a = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (a = Yo(
          o,
          a
        ), a.ref = t.ref, t.child = a, a.return = t, t = a) : (a = ar(e.child, o), a.ref = t.ref, t.child = a, a.return = t, t = a), t;
      case 22:
        return pm(e, t, a);
      case 24:
        return pa(t), o = Ut(Ct), e === null ? (d = gc(), d === null && (d = nt, v = pc(), d.pooledCache = v, v.refCount++, v !== null && (d.pooledCacheLanes |= a), d = v), t.memoizedState = {
          parent: o,
          cache: d
        }, yc(t), Ar(t, Ct, d)) : ((e.lanes & a) !== 0 && (_c(e, t), as(t, null, null, a), rs()), d = e.memoizedState, v = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Ar(t, Ct, o)) : (o = v.cache, Ar(t, Ct, o), o !== d.cache && hc(
          t,
          [Ct],
          a,
          !0
        ))), jt(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function fr(e) {
    e.flags |= 4;
  }
  function Em(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Mg(t)) {
      if (t = xn.current, t !== null && ((Ge & 4194048) === Ge ? Yn !== null : (Ge & 62914560) !== Ge && (Ge & 536870912) === 0 || t !== Yn))
        throw ts = vc, sp;
      e.flags |= 8192;
    }
  }
  function $o(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? th() : 536870912, e.lanes |= t, di |= t);
  }
  function ds(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var o = null; a !== null; )
            a.alternate !== null && (o = a), a = a.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        a |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, t;
  }
  function Cb(e, t, a) {
    var o = t.pendingProps;
    switch (lc(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(t), null;
      case 1:
        return lt(t), null;
      case 3:
        return a = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), ur(Ct), he(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? fr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, tp())), lt(t), null;
      case 26:
        return a = t.memoizedState, e === null ? (fr(t), a !== null ? (lt(t), Em(t, a)) : (lt(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (fr(t), lt(t), Em(t, a)) : (lt(t), t.flags &= -16777217) : (e.memoizedProps !== o && fr(t), lt(t), t.flags &= -16777217), null;
      case 27:
        be(t), a = ne.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return lt(t), null;
          }
          e = H.current, Xi(t) ? Wh(t) : (e = Eg(d, o, a), t.stateNode = e, fr(t));
        }
        return lt(t), null;
      case 5:
        if (be(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(i(166));
            return lt(t), null;
          }
          if (e = H.current, Xi(t))
            Wh(t);
          else {
            switch (d = su(
              ne.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(a, { is: o.is }) : d.createElement(a);
                }
            }
            e[Bt] = t, e[Kt] = o;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                e.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = e;
            e: switch (zt(e, a, o), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!o.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && fr(t);
          }
        }
        return lt(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(i(166));
          if (e = ne.current, Xi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, o = null, d = Yt, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = t, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || gg(e.nodeValue, a)), e || fa(t);
          } else
            e = su(e).createTextNode(
              o
            ), e[Bt] = t, t.stateNode = e;
        }
        return lt(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Xi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(i(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(i(317));
              d[Bt] = t;
            } else
              Fi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            lt(t), d = !1;
          } else
            d = tp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (cr(t), t) : (cr(t), null);
        }
        if (cr(t), (t.flags & 128) !== 0)
          return t.lanes = a, t;
        if (a = o !== null, e = e !== null && e.memoizedState !== null, a) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var v = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (v = o.memoizedState.cachePool.pool), v !== d && (o.flags |= 2048);
        }
        return a !== e && a && (t.child.flags |= 8192), $o(t, t.updateQueue), lt(t), null;
      case 4:
        return he(), e === null && Sd(t.stateNode.containerInfo), lt(t), null;
      case 10:
        return ur(t.type), lt(t), null;
      case 19:
        if (ce(kt), d = t.memoizedState, d === null) return lt(t), null;
        if (o = (t.flags & 128) !== 0, v = d.rendering, v === null)
          if (o) ds(d, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (v = qo(e), v !== null) {
                  for (t.flags |= 128, ds(d, !1), e = v.updateQueue, t.updateQueue = e, $o(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    Kh(a, e), a = a.sibling;
                  return Y(
                    kt,
                    kt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Oe() > Qo && (t.flags |= 128, o = !0, ds(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = qo(v), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, $o(t, e), ds(d, !0), d.tail === null && d.tailMode === "hidden" && !v.alternate && !$e)
                return lt(t), null;
            } else
              2 * Oe() - d.renderingStartTime > Qo && a !== 536870912 && (t.flags |= 128, o = !0, ds(d, !1), t.lanes = 4194304);
          d.isBackwards ? (v.sibling = t.child, t.child = v) : (e = d.last, e !== null ? e.sibling = v : t.child = v, d.last = v);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Oe(), t.sibling = null, e = kt.current, Y(kt, o ? e & 1 | 2 : e & 1), t) : (lt(t), null);
      case 22:
      case 23:
        return cr(t), Ec(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), a = t.updateQueue, a !== null && $o(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== a && (t.flags |= 2048), e !== null && ce(ma), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ur(Ct), lt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function kb(e, t) {
    switch (lc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(Ct), he(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (cr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(i(340));
          Fi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(kt), null;
      case 4:
        return he(), null;
      case 10:
        return ur(t.type), null;
      case 22:
      case 23:
        return cr(t), Ec(), e !== null && ce(ma), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cm(e, t) {
    switch (lc(t), t.tag) {
      case 3:
        ur(Ct), he();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        he();
        break;
      case 13:
        cr(t);
        break;
      case 19:
        ce(kt);
        break;
      case 10:
        ur(t.type);
        break;
      case 22:
      case 23:
        cr(t), Ec(), e !== null && ce(ma);
        break;
      case 24:
        ur(Ct);
    }
  }
  function fs(e, t) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        a = d;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var v = a.create, T = a.inst;
            o = v(), T.destroy = o;
          }
          a = a.next;
        } while (a !== d);
      }
    } catch (D) {
      et(t, t.return, D);
    }
  }
  function jr(e, t, a) {
    try {
      var o = t.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var v = d.next;
        o = v;
        do {
          if ((o.tag & e) === e) {
            var T = o.inst, D = T.destroy;
            if (D !== void 0) {
              T.destroy = void 0, d = t;
              var U = a, Q = D;
              try {
                Q();
              } catch (ie) {
                et(
                  d,
                  U,
                  ie
                );
              }
            }
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (ie) {
      et(t, t.return, ie);
    }
  }
  function km(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        fp(t, a);
      } catch (o) {
        et(e, e.return, o);
      }
    }
  }
  function Am(e, t, a) {
    a.props = va(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      et(e, t, o);
    }
  }
  function hs(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (d) {
      et(e, t, d);
    }
  }
  function $n(e, t) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          et(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (d) {
          et(e, t, d);
        }
      else a.current = null;
  }
  function Tm(e) {
    var t = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (d) {
      et(e, e.return, d);
    }
  }
  function Kc(e, t, a) {
    try {
      var o = e.stateNode;
      Yb(o, e.type, a, t), o[Kt] = t;
    } catch (d) {
      et(e, e.return, d);
    }
  }
  function xm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hr(e.type) || e.tag === 4;
  }
  function Jc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || xm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Wc(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = iu));
    else if (o !== 4 && (o === 27 && Hr(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (Wc(e, t, a), e = e.sibling; e !== null; )
        Wc(e, t, a), e = e.sibling;
  }
  function Xo(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && Hr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (Xo(e, t, a), e = e.sibling; e !== null; )
        Xo(e, t, a), e = e.sibling;
  }
  function Nm(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      zt(t, o, a), t[Bt] = e, t[Kt] = a;
    } catch (v) {
      et(e, e.return, v);
    }
  }
  var hr = !1, vt = !1, ed = !1, Om = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
  function Ab(e, t) {
    if (e = e.containerInfo, Cd = fu, e = Hh(e), Jl(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var d = o.anchorOffset, v = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, v.nodeType;
            } catch {
              a = null;
              break e;
            }
            var T = 0, D = -1, U = -1, Q = 0, ie = 0, le = e, W = null;
            t: for (; ; ) {
              for (var ee; le !== a || d !== 0 && le.nodeType !== 3 || (D = T + d), le !== v || o !== 0 && le.nodeType !== 3 || (U = T + o), le.nodeType === 3 && (T += le.nodeValue.length), (ee = le.firstChild) !== null; )
                W = le, le = ee;
              for (; ; ) {
                if (le === e) break t;
                if (W === a && ++Q === d && (D = T), W === v && ++ie === o && (U = T), (ee = le.nextSibling) !== null) break;
                le = W, W = le.parentNode;
              }
              le = ee;
            }
            a = D === -1 || U === -1 ? null : { start: D, end: U };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (kd = { focusedElem: e, selectionRange: a }, fu = !1, Ot = t; Ot !== null; )
      if (t = Ot, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Ot = e;
      else
        for (; Ot !== null; ) {
          switch (t = Ot, v = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && v !== null) {
                e = void 0, a = t, d = v.memoizedProps, v = v.memoizedState, o = a.stateNode;
                try {
                  var Ce = va(
                    a.type,
                    d,
                    a.elementType === a.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Ce,
                    v
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (we) {
                  et(
                    a,
                    a.return,
                    we
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  xd(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      xd(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ot = e;
            break;
          }
          Ot = t.return;
        }
  }
  function Mm(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Dr(e, a), o & 4 && fs(5, a);
        break;
      case 1:
        if (Dr(e, a), o & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              et(a, a.return, T);
            }
          else {
            var d = va(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (T) {
              et(
                a,
                a.return,
                T
              );
            }
          }
        o & 64 && km(a), o & 512 && hs(a, a.return);
        break;
      case 3:
        if (Dr(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            fp(e, t);
          } catch (T) {
            et(a, a.return, T);
          }
        }
        break;
      case 27:
        t === null && o & 4 && Nm(a);
      case 26:
      case 5:
        Dr(e, a), t === null && o & 4 && Tm(a), o & 512 && hs(a, a.return);
        break;
      case 12:
        Dr(e, a);
        break;
      case 13:
        Dr(e, a), o & 4 && Dm(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = zb.bind(
          null,
          a
        ), Wb(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || hr, !o) {
          t = t !== null && t.memoizedState !== null || vt, d = hr;
          var v = vt;
          hr = o, (vt = t) && !v ? zr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Dr(e, a), hr = d, vt = v;
        }
        break;
      case 30:
        break;
      default:
        Dr(e, a);
    }
  }
  function Rm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Rm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && jl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, en = !1;
  function pr(e, t, a) {
    for (a = a.child; a !== null; )
      jm(e, t, a), a = a.sibling;
  }
  function jm(e, t, a) {
    if (mt && typeof mt.onCommitFiberUnmount == "function")
      try {
        mt.onCommitFiberUnmount(jn, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || $n(a, t), pr(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || $n(a, t);
        var o = it, d = en;
        Hr(a.type) && (it = a.stateNode, en = !1), pr(
          e,
          t,
          a
        ), ws(a.stateNode), it = o, en = d;
        break;
      case 5:
        vt || $n(a, t);
      case 6:
        if (o = it, d = en, it = null, pr(
          e,
          t,
          a
        ), it = o, en = d, it !== null)
          if (en)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(a.stateNode);
            } catch (v) {
              et(
                a,
                t,
                v
              );
            }
          else
            try {
              it.removeChild(a.stateNode);
            } catch (v) {
              et(
                a,
                t,
                v
              );
            }
        break;
      case 18:
        it !== null && (en ? (e = it, Sg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), Os(e)) : Sg(it, a.stateNode));
        break;
      case 4:
        o = it, d = en, it = a.stateNode.containerInfo, en = !0, pr(
          e,
          t,
          a
        ), it = o, en = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || jr(2, a, t), vt || jr(4, a, t), pr(
          e,
          t,
          a
        );
        break;
      case 1:
        vt || ($n(a, t), o = a.stateNode, typeof o.componentWillUnmount == "function" && Am(
          a,
          t,
          o
        )), pr(
          e,
          t,
          a
        );
        break;
      case 21:
        pr(
          e,
          t,
          a
        );
        break;
      case 22:
        vt = (o = vt) || a.memoizedState !== null, pr(
          e,
          t,
          a
        ), vt = o;
        break;
      default:
        pr(
          e,
          t,
          a
        );
    }
  }
  function Dm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Os(e);
      } catch (a) {
        et(t, t.return, a);
      }
  }
  function Tb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Om()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Om()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function td(e, t) {
    var a = Tb(e);
    t.forEach(function(o) {
      var d = Lb.bind(null, e, o);
      a.has(o) || (a.add(o), o.then(d, d));
    });
  }
  function cn(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var d = a[o], v = e, T = t, D = T;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Hr(D.type)) {
                it = D.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              it = D.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              it = D.stateNode.containerInfo, en = !0;
              break e;
          }
          D = D.return;
        }
        if (it === null) throw Error(i(160));
        jm(v, T, d), it = null, en = !1, v = d.alternate, v !== null && (v.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        zm(t, e), t = t.sibling;
  }
  var zn = null;
  function zm(e, t) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(t, e), dn(e), o & 4 && (jr(3, e, e.return), fs(3, e), jr(5, e, e.return));
        break;
      case 1:
        cn(t, e), dn(e), o & 512 && (vt || a === null || $n(a, a.return)), o & 64 && hr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var d = zn;
        if (cn(t, e), dn(e), o & 512 && (vt || a === null || $n(a, a.return)), o & 4) {
          var v = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, a = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      v = d.getElementsByTagName("title")[0], (!v || v[Pi] || v[Bt] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = d.createElement(o), d.head.insertBefore(
                        v,
                        d.querySelector("head > title")
                      )), zt(v, o, a), v[Bt] = e, xt(v), o = v;
                      break e;
                    case "link":
                      var T = Ng(
                        "link",
                        "href",
                        d
                      ).get(o + (a.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (v = T[D], v.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && v.getAttribute("rel") === (a.rel == null ? null : a.rel) && v.getAttribute("title") === (a.title == null ? null : a.title) && v.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      v = d.createElement(o), zt(v, o, a), d.head.appendChild(v);
                      break;
                    case "meta":
                      if (T = Ng(
                        "meta",
                        "content",
                        d
                      ).get(o + (a.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (v = T[D], v.getAttribute("content") === (a.content == null ? null : "" + a.content) && v.getAttribute("name") === (a.name == null ? null : a.name) && v.getAttribute("property") === (a.property == null ? null : a.property) && v.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && v.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      v = d.createElement(o), zt(v, o, a), d.head.appendChild(v);
                      break;
                    default:
                      throw Error(i(468, o));
                  }
                  v[Bt] = e, xt(v), o = v;
                }
                e.stateNode = o;
              } else
                Og(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = xg(
                d,
                o,
                e.memoizedProps
              );
          else
            v !== o ? (v === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : v.count--, o === null ? Og(
              d,
              e.type,
              e.stateNode
            ) : xg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Kc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        cn(t, e), dn(e), o & 512 && (vt || a === null || $n(a, a.return)), a !== null && o & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (cn(t, e), dn(e), o & 512 && (vt || a === null || $n(a, a.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Za(d, "");
          } catch (ee) {
            et(e, e.return, ee);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, Kc(
          e,
          d,
          a !== null ? a.memoizedProps : d
        )), o & 1024 && (ed = !0);
        break;
      case 6:
        if (cn(t, e), dn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (ee) {
            et(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (lu = null, d = zn, zn = ou(t.containerInfo), cn(t, e), zn = d, dn(e), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Os(t.containerInfo);
          } catch (ee) {
            et(e, e.return, ee);
          }
        ed && (ed = !1, Lm(e));
        break;
      case 4:
        o = zn, zn = ou(
          e.stateNode.containerInfo
        ), cn(t, e), dn(e), zn = o;
        break;
      case 12:
        cn(t, e), dn(e);
        break;
      case 13:
        cn(t, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (od = Oe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, td(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var U = a !== null && a.memoizedState !== null, Q = hr, ie = vt;
        if (hr = Q || d, vt = ie || U, cn(t, e), vt = ie, hr = Q, dn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (a === null || U || hr || vt || ya(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                U = a = t;
                try {
                  if (v = U.stateNode, d)
                    T = v.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    D = U.stateNode;
                    var le = U.memoizedProps.style, W = le != null && le.hasOwnProperty("display") ? le.display : null;
                    D.style.display = W == null || typeof W == "boolean" ? "" : ("" + W).trim();
                  }
                } catch (ee) {
                  et(U, U.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = d ? "" : U.memoizedProps;
                } catch (ee) {
                  et(U, U.return, ee);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, td(e, a))));
        break;
      case 19:
        cn(t, e), dn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, td(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        cn(t, e), dn(e);
    }
  }
  function dn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (xm(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var d = a.stateNode, v = Jc(e);
            Xo(e, v, d);
            break;
          case 5:
            var T = a.stateNode;
            a.flags & 32 && (Za(T, ""), a.flags &= -33);
            var D = Jc(e);
            Xo(e, D, T);
            break;
          case 3:
          case 4:
            var U = a.stateNode.containerInfo, Q = Jc(e);
            Wc(
              e,
              Q,
              U
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (ie) {
        et(e, e.return, ie);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Lm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Dr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Mm(e, t.alternate, t), t = t.sibling;
  }
  function ya(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jr(4, t, t.return), ya(t);
          break;
        case 1:
          $n(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Am(
            t,
            t.return,
            a
          ), ya(t);
          break;
        case 27:
          ws(t.stateNode);
        case 26:
        case 5:
          $n(t, t.return), ya(t);
          break;
        case 22:
          t.memoizedState === null && ya(t);
          break;
        case 30:
          ya(t);
          break;
        default:
          ya(t);
      }
      e = e.sibling;
    }
  }
  function zr(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, v = t, T = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          zr(
            d,
            v,
            a
          ), fs(4, v);
          break;
        case 1:
          if (zr(
            d,
            v,
            a
          ), o = v, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (Q) {
              et(o, o.return, Q);
            }
          if (o = v, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var U = d.shared.hiddenCallbacks;
              if (U !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < U.length; d++)
                  dp(U[d], D);
            } catch (Q) {
              et(o, o.return, Q);
            }
          }
          a && T & 64 && km(v), hs(v, v.return);
          break;
        case 27:
          Nm(v);
        case 26:
        case 5:
          zr(
            d,
            v,
            a
          ), a && o === null && T & 4 && Tm(v), hs(v, v.return);
          break;
        case 12:
          zr(
            d,
            v,
            a
          );
          break;
        case 13:
          zr(
            d,
            v,
            a
          ), a && T & 4 && Dm(d, v);
          break;
        case 22:
          v.memoizedState === null && zr(
            d,
            v,
            a
          ), hs(v, v.return);
          break;
        case 30:
          break;
        default:
          zr(
            d,
            v,
            a
          );
      }
      t = t.sibling;
    }
  }
  function nd(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Ji(a));
  }
  function rd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ji(e));
  }
  function Xn(e, t, a, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pm(
          e,
          t,
          a,
          o
        ), t = t.sibling;
  }
  function Pm(e, t, a, o) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xn(
          e,
          t,
          a,
          o
        ), d & 2048 && fs(9, t);
        break;
      case 1:
        Xn(
          e,
          t,
          a,
          o
        );
        break;
      case 3:
        Xn(
          e,
          t,
          a,
          o
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ji(e)));
        break;
      case 12:
        if (d & 2048) {
          Xn(
            e,
            t,
            a,
            o
          ), e = t.stateNode;
          try {
            var v = t.memoizedProps, T = v.id, D = v.onPostCommit;
            typeof D == "function" && D(
              T,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (U) {
            et(t, t.return, U);
          }
        } else
          Xn(
            e,
            t,
            a,
            o
          );
        break;
      case 13:
        Xn(
          e,
          t,
          a,
          o
        );
        break;
      case 23:
        break;
      case 22:
        v = t.stateNode, T = t.alternate, t.memoizedState !== null ? v._visibility & 2 ? Xn(
          e,
          t,
          a,
          o
        ) : ps(e, t) : v._visibility & 2 ? Xn(
          e,
          t,
          a,
          o
        ) : (v._visibility |= 2, ui(
          e,
          t,
          a,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && nd(T, t);
        break;
      case 24:
        Xn(
          e,
          t,
          a,
          o
        ), d & 2048 && rd(t.alternate, t);
        break;
      default:
        Xn(
          e,
          t,
          a,
          o
        );
    }
  }
  function ui(e, t, a, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var v = e, T = t, D = a, U = o, Q = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          ui(
            v,
            T,
            D,
            U,
            d
          ), fs(8, T);
          break;
        case 23:
          break;
        case 22:
          var ie = T.stateNode;
          T.memoizedState !== null ? ie._visibility & 2 ? ui(
            v,
            T,
            D,
            U,
            d
          ) : ps(
            v,
            T
          ) : (ie._visibility |= 2, ui(
            v,
            T,
            D,
            U,
            d
          )), d && Q & 2048 && nd(
            T.alternate,
            T
          );
          break;
        case 24:
          ui(
            v,
            T,
            D,
            U,
            d
          ), d && Q & 2048 && rd(T.alternate, T);
          break;
        default:
          ui(
            v,
            T,
            D,
            U,
            d
          );
      }
      t = t.sibling;
    }
  }
  function ps(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            ps(a, o), d & 2048 && nd(
              o.alternate,
              o
            );
            break;
          case 24:
            ps(a, o), d & 2048 && rd(o.alternate, o);
            break;
          default:
            ps(a, o);
        }
        t = t.sibling;
      }
  }
  var ms = 8192;
  function li(e) {
    if (e.subtreeFlags & ms)
      for (e = e.child; e !== null; )
        Im(e), e = e.sibling;
  }
  function Im(e) {
    switch (e.tag) {
      case 26:
        li(e), e.flags & ms && e.memoizedState !== null && f1(
          zn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        li(e);
        break;
      case 3:
      case 4:
        var t = zn;
        zn = ou(e.stateNode.containerInfo), li(e), zn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = ms, ms = 16777216, li(e), ms = t) : li(e));
        break;
      default:
        li(e);
    }
  }
  function Bm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function gs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Ot = o, Hm(
            o,
            e
          );
        }
      Bm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Um(e), e = e.sibling;
  }
  function Um(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        gs(e), e.flags & 2048 && jr(9, e, e.return);
        break;
      case 3:
        gs(e);
        break;
      case 12:
        gs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fo(e)) : gs(e);
        break;
      default:
        gs(e);
    }
  }
  function Fo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var o = t[a];
          Ot = o, Hm(
            o,
            e
          );
        }
      Bm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, t, t.return), Fo(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Fo(t));
          break;
        default:
          Fo(t);
      }
      e = e.sibling;
    }
  }
  function Hm(e, t) {
    for (; Ot !== null; ) {
      var a = Ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Ji(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, Ot = o;
      else
        e: for (a = e; Ot !== null; ) {
          o = Ot;
          var d = o.sibling, v = o.return;
          if (Rm(o), o === a) {
            Ot = null;
            break e;
          }
          if (d !== null) {
            d.return = v, Ot = d;
            break e;
          }
          Ot = v;
        }
    }
  }
  var xb = {
    getCacheForType: function(e) {
      var t = Ut(Ct), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    }
  }, Nb = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, nt = null, Ie = null, Ge = 0, Fe = 0, fn = null, Lr = !1, ci = !1, ad = !1, mr = 0, ht = 0, Pr = 0, _a = 0, id = 0, Nn = 0, di = 0, vs = null, tn = null, sd = !1, od = 0, Qo = 1 / 0, Ko = null, Ir = null, Dt = 0, Br = null, fi = null, hi = 0, ud = 0, ld = null, qm = null, ys = 0, cd = null;
  function hn() {
    if ((Xe & 2) !== 0 && Ge !== 0)
      return Ge & -Ge;
    if (M.T !== null) {
      var e = ei;
      return e !== 0 ? e : vd();
    }
    return ah();
  }
  function Zm() {
    Nn === 0 && (Nn = (Ge & 536870912) === 0 || $e ? za() : 536870912);
    var e = xn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function pn(e, t, a) {
    (e === nt && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (pi(e, 0), Ur(
      e,
      Ge,
      Nn,
      !1
    )), Li(e, a), ((Xe & 2) === 0 || e !== nt) && (e === nt && ((Xe & 2) === 0 && (_a |= a), ht === 4 && Ur(
      e,
      Ge,
      Nn,
      !1
    )), Fn(e));
  }
  function Gm(e, t, a) {
    if ((Xe & 6) !== 0) throw Error(i(327));
    var o = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Qt(e, t), d = o ? Rb(e, t) : hd(e, t, !0), v = o;
    do {
      if (d === 0) {
        ci && !o && Ur(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, v && !Ob(a)) {
          d = hd(e, t, !1), v = !1;
          continue;
        }
        if (d === 2) {
          if (v = t, e.errorRecoveryDisabledLanes & v)
            var T = 0;
          else
            T = e.pendingLanes & -536870913, T = T !== 0 ? T : T & 536870912 ? 536870912 : 0;
          if (T !== 0) {
            t = T;
            e: {
              var D = e;
              d = vs;
              var U = D.current.memoizedState.isDehydrated;
              if (U && (pi(D, T).flags |= 256), T = hd(
                D,
                T,
                !1
              ), T !== 2) {
                if (ad && !U) {
                  D.errorRecoveryDisabledLanes |= v, _a |= v, d = 4;
                  break e;
                }
                v = tn, tn = d, v !== null && (tn === null ? tn = v : tn.push.apply(
                  tn,
                  v
                ));
              }
              d = T;
            }
            if (v = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          pi(e, 0), Ur(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, v = d, v) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ur(
                o,
                t,
                Nn,
                !Lr
              );
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (d = od + 300 - Oe(), 10 < d)) {
            if (Ur(
              o,
              t,
              Nn,
              !Lr
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = _g(
              Vm.bind(
                null,
                o,
                a,
                tn,
                Ko,
                sd,
                t,
                Nn,
                _a,
                di,
                Lr,
                v,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          Vm(
            o,
            a,
            tn,
            Ko,
            sd,
            t,
            Nn,
            _a,
            di,
            Lr,
            v,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fn(e);
  }
  function Vm(e, t, a, o, d, v, T, D, U, Q, ie, le, W, ee) {
    if (e.timeoutHandle = -1, le = t.subtreeFlags, (le & 8192 || (le & 16785408) === 16785408) && (ks = { stylesheets: null, count: 0, unsuspend: d1 }, Im(t), le = h1(), le !== null)) {
      e.cancelPendingCommit = le(
        Jm.bind(
          null,
          e,
          t,
          v,
          a,
          o,
          d,
          T,
          D,
          U,
          ie,
          1,
          W,
          ee
        )
      ), Ur(e, v, T, !Q);
      return;
    }
    Jm(
      e,
      t,
      v,
      a,
      o,
      d,
      T,
      D,
      U
    );
  }
  function Ob(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var o = 0; o < a.length; o++) {
          var d = a[o], v = d.getSnapshot;
          d = d.value;
          try {
            if (!un(v(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ur(e, t, a, o) {
    t &= ~id, t &= ~_a, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var v = 31 - Gt(d), T = 1 << v;
      o[v] = -1, d &= ~T;
    }
    a !== 0 && nh(e, a, t);
  }
  function Jo() {
    return (Xe & 6) === 0 ? (_s(0), !1) : !0;
  }
  function dd() {
    if (Ie !== null) {
      if (Fe === 0)
        var e = Ie.return;
      else
        e = Ie, or = ha = null, xc(e), si = null, ls = 0, e = Ie;
      for (; e !== null; )
        Cm(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function pi(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Xb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), dd(), nt = e, Ie = a = ar(e.current, null), Ge = t, Fe = 0, fn = null, Lr = !1, ci = Qt(e, t), ad = !1, di = Nn = id = _a = Pr = ht = 0, tn = vs = null, sd = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - Gt(o), v = 1 << d;
        t |= e[d], o &= ~v;
      }
    return mr = t, bo(), a;
  }
  function Ym(e, t) {
    Le = null, M.H = Bo, t === es || t === No ? (t = lp(), Fe = 3) : t === sp ? (t = lp(), Fe = 4) : Fe = t === cm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, fn = t, Ie === null && (ht = 1, Go(
      e,
      Cn(t, e.current)
    ));
  }
  function $m() {
    var e = M.H;
    return M.H = Bo, e === null ? Bo : e;
  }
  function Xm() {
    var e = M.A;
    return M.A = xb, e;
  }
  function fd() {
    ht = 4, Lr || (Ge & 4194048) !== Ge && xn.current !== null || (ci = !0), (Pr & 134217727) === 0 && (_a & 134217727) === 0 || nt === null || Ur(
      nt,
      Ge,
      Nn,
      !1
    );
  }
  function hd(e, t, a) {
    var o = Xe;
    Xe |= 2;
    var d = $m(), v = Xm();
    (nt !== e || Ge !== t) && (Ko = null, pi(e, t)), t = !1;
    var T = ht;
    e: do
      try {
        if (Fe !== 0 && Ie !== null) {
          var D = Ie, U = fn;
          switch (Fe) {
            case 8:
              dd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xn.current === null && (t = !0);
              var Q = Fe;
              if (Fe = 0, fn = null, mi(e, D, U, Q), a && ci) {
                T = 0;
                break e;
              }
              break;
            default:
              Q = Fe, Fe = 0, fn = null, mi(e, D, U, Q);
          }
        }
        Mb(), T = ht;
        break;
      } catch (ie) {
        Ym(e, ie);
      }
    while (!0);
    return t && e.shellSuspendCounter++, or = ha = null, Xe = o, M.H = d, M.A = v, Ie === null && (nt = null, Ge = 0, bo()), T;
  }
  function Mb() {
    for (; Ie !== null; ) Fm(Ie);
  }
  function Rb(e, t) {
    var a = Xe;
    Xe |= 2;
    var o = $m(), d = Xm();
    nt !== e || Ge !== t ? (Ko = null, Qo = Oe() + 500, pi(e, t)) : ci = Qt(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && Ie !== null) {
          t = Ie;
          var v = fn;
          t: switch (Fe) {
            case 1:
              Fe = 0, fn = null, mi(e, t, v, 1);
              break;
            case 2:
            case 9:
              if (op(v)) {
                Fe = 0, fn = null, Qm(t);
                break;
              }
              t = function() {
                Fe !== 2 && Fe !== 9 || nt !== e || (Fe = 7), Fn(e);
              }, v.then(t, t);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              op(v) ? (Fe = 0, fn = null, Qm(t)) : (Fe = 0, fn = null, mi(e, t, v, 7));
              break;
            case 5:
              var T = null;
              switch (Ie.tag) {
                case 26:
                  T = Ie.memoizedState;
                case 5:
                case 27:
                  var D = Ie;
                  if (!T || Mg(T)) {
                    Fe = 0, fn = null;
                    var U = D.sibling;
                    if (U !== null) Ie = U;
                    else {
                      var Q = D.return;
                      Q !== null ? (Ie = Q, Wo(Q)) : Ie = null;
                    }
                    break t;
                  }
              }
              Fe = 0, fn = null, mi(e, t, v, 5);
              break;
            case 6:
              Fe = 0, fn = null, mi(e, t, v, 6);
              break;
            case 8:
              dd(), ht = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        jb();
        break;
      } catch (ie) {
        Ym(e, ie);
      }
    while (!0);
    return or = ha = null, M.H = o, M.A = d, Xe = a, Ie !== null ? 0 : (nt = null, Ge = 0, bo(), ht);
  }
  function jb() {
    for (; Ie !== null && !Ve(); )
      Fm(Ie);
  }
  function Fm(e) {
    var t = wm(e.alternate, e, mr);
    e.memoizedProps = e.pendingProps, t === null ? Wo(e) : Ie = t;
  }
  function Qm(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = gm(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ge
        );
        break;
      case 11:
        t = gm(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ge
        );
        break;
      case 5:
        xc(t);
      default:
        Cm(a, t), t = Ie = Kh(t, mr), t = wm(a, t, mr);
    }
    e.memoizedProps = e.pendingProps, t === null ? Wo(e) : Ie = t;
  }
  function mi(e, t, a, o) {
    or = ha = null, xc(t), si = null, ls = 0;
    var d = t.return;
    try {
      if (wb(
        e,
        d,
        t,
        a,
        Ge
      )) {
        ht = 1, Go(
          e,
          Cn(a, e.current)
        ), Ie = null;
        return;
      }
    } catch (v) {
      if (d !== null) throw Ie = d, v;
      ht = 1, Go(
        e,
        Cn(a, e.current)
      ), Ie = null;
      return;
    }
    t.flags & 32768 ? ($e || o === 1 ? e = !0 : ci || (Ge & 536870912) !== 0 ? e = !1 : (Lr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = xn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Km(t, e)) : Wo(t);
  }
  function Wo(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Km(
          t,
          Lr
        );
        return;
      }
      e = t.return;
      var a = Cb(
        t.alternate,
        t,
        mr
      );
      if (a !== null) {
        Ie = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ie = t;
        return;
      }
      Ie = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function Km(e, t) {
    do {
      var a = kb(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Ie = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = a;
    } while (e !== null);
    ht = 6, Ie = null;
  }
  function Jm(e, t, a, o, d, v, T, D, U) {
    e.cancelPendingCommit = null;
    do
      eu();
    while (Dt !== 0);
    if ((Xe & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (v = t.lanes | t.childLanes, v |= rc, d_(
        e,
        a,
        v,
        T,
        D,
        U
      ), e === nt && (Ie = nt = null, Ge = 0), fi = t, Br = e, hi = a, ud = v, ld = d, qm = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Pb(ye, function() {
        return rg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = M.T, M.T = null, d = B.p, B.p = 2, T = Xe, Xe |= 4;
        try {
          Ab(e, t, a);
        } finally {
          Xe = T, B.p = d, M.T = o;
        }
      }
      Dt = 1, Wm(), eg(), tg();
    }
  }
  function Wm() {
    if (Dt === 1) {
      Dt = 0;
      var e = Br, t = fi, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Xe;
        Xe |= 4;
        try {
          zm(t, e);
          var v = kd, T = Hh(e.containerInfo), D = v.focusedElem, U = v.selectionRange;
          if (T !== D && D && D.ownerDocument && Uh(
            D.ownerDocument.documentElement,
            D
          )) {
            if (U !== null && Jl(D)) {
              var Q = U.start, ie = U.end;
              if (ie === void 0 && (ie = Q), "selectionStart" in D)
                D.selectionStart = Q, D.selectionEnd = Math.min(
                  ie,
                  D.value.length
                );
              else {
                var le = D.ownerDocument || document, W = le && le.defaultView || window;
                if (W.getSelection) {
                  var ee = W.getSelection(), Ce = D.textContent.length, we = Math.min(U.start, Ce), Je = U.end === void 0 ? we : Math.min(U.end, Ce);
                  !ee.extend && we > Je && (T = Je, Je = we, we = T);
                  var V = Bh(
                    D,
                    we
                  ), q = Bh(
                    D,
                    Je
                  );
                  if (V && q && (ee.rangeCount !== 1 || ee.anchorNode !== V.node || ee.anchorOffset !== V.offset || ee.focusNode !== q.node || ee.focusOffset !== q.offset)) {
                    var F = le.createRange();
                    F.setStart(V.node, V.offset), ee.removeAllRanges(), we > Je ? (ee.addRange(F), ee.extend(q.node, q.offset)) : (F.setEnd(q.node, q.offset), ee.addRange(F));
                  }
                }
              }
            }
            for (le = [], ee = D; ee = ee.parentNode; )
              ee.nodeType === 1 && le.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < le.length; D++) {
              var oe = le[D];
              oe.element.scrollLeft = oe.left, oe.element.scrollTop = oe.top;
            }
          }
          fu = !!Cd, kd = Cd = null;
        } finally {
          Xe = d, B.p = o, M.T = a;
        }
      }
      e.current = t, Dt = 2;
    }
  }
  function eg() {
    if (Dt === 2) {
      Dt = 0;
      var e = Br, t = fi, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var o = B.p;
        B.p = 2;
        var d = Xe;
        Xe |= 4;
        try {
          Mm(e, t.alternate, t);
        } finally {
          Xe = d, B.p = o, M.T = a;
        }
      }
      Dt = 3;
    }
  }
  function tg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, We();
      var e = Br, t = fi, a = hi, o = qm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, fi = Br = null, ng(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ir = null), Ml(a), t = t.stateNode, mt && typeof mt.onCommitFiberRoot == "function")
        try {
          mt.onCommitFiberRoot(
            jn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = M.T, d = B.p, B.p = 2, M.T = null;
        try {
          for (var v = e.onRecoverableError, T = 0; T < o.length; T++) {
            var D = o[T];
            v(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          M.T = t, B.p = d;
        }
      }
      (hi & 3) !== 0 && eu(), Fn(e), d = e.pendingLanes, (a & 4194090) !== 0 && (d & 42) !== 0 ? e === cd ? ys++ : (ys = 0, cd = e) : ys = 0, _s(0);
    }
  }
  function ng(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ji(t)));
  }
  function eu(e) {
    return Wm(), eg(), tg(), rg();
  }
  function rg() {
    if (Dt !== 5) return !1;
    var e = Br, t = ud;
    ud = 0;
    var a = Ml(hi), o = M.T, d = B.p;
    try {
      B.p = 32 > a ? 32 : a, M.T = null, a = ld, ld = null;
      var v = Br, T = hi;
      if (Dt = 0, fi = Br = null, hi = 0, (Xe & 6) !== 0) throw Error(i(331));
      var D = Xe;
      if (Xe |= 4, Um(v.current), Pm(
        v,
        v.current,
        T,
        a
      ), Xe = D, _s(0, !1), mt && typeof mt.onPostCommitFiberRoot == "function")
        try {
          mt.onPostCommitFiberRoot(jn, v);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, M.T = o, ng(e, t);
    }
  }
  function ag(e, t, a) {
    t = Cn(a, t), t = qc(e.stateNode, t, 2), e = Nr(e, t, 2), e !== null && (Li(e, 2), Fn(e));
  }
  function et(e, t, a) {
    if (e.tag === 3)
      ag(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ag(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ir === null || !Ir.has(o))) {
            e = Cn(a, e), a = um(2), o = Nr(t, a, 2), o !== null && (lm(
              a,
              o,
              t,
              e
            ), Li(o, 2), Fn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function pd(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Nb();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(a) || (ad = !0, d.add(a), e = Db.bind(null, e, t, a), t.then(e, e));
  }
  function Db(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, nt === e && (Ge & a) === a && (ht === 4 || ht === 3 && (Ge & 62914560) === Ge && 300 > Oe() - od ? (Xe & 2) === 0 && pi(e, 0) : id |= a, di === Ge && (di = 0)), Fn(e);
  }
  function ig(e, t) {
    t === 0 && (t = th()), e = Qa(e, t), e !== null && (Li(e, t), Fn(e));
  }
  function zb(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), ig(e, a);
  }
  function Lb(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (a = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), ig(e, a);
  }
  function Pb(e, t) {
    return pe(e, t);
  }
  var tu = null, gi = null, md = !1, nu = !1, gd = !1, ba = 0;
  function Fn(e) {
    e !== gi && e.next === null && (gi === null ? tu = gi = e : gi = gi.next = e), nu = !0, md || (md = !0, Bb());
  }
  function _s(e, t) {
    if (!gd && nu) {
      gd = !0;
      do
        for (var a = !1, o = tu; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var v = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              v = (1 << 31 - Gt(42 | e) + 1) - 1, v &= d & ~(T & ~D), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (a = !0, lg(o, v));
          } else
            v = Ge, v = Vt(
              o,
              o === nt ? v : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (v & 3) === 0 || Qt(o, v) || (a = !0, lg(o, v));
          o = o.next;
        }
      while (a);
      gd = !1;
    }
  }
  function Ib() {
    sg();
  }
  function sg() {
    nu = md = !1;
    var e = 0;
    ba !== 0 && ($b() && (e = ba), ba = 0);
    for (var t = Oe(), a = null, o = tu; o !== null; ) {
      var d = o.next, v = og(o, t);
      v === 0 ? (o.next = null, a === null ? tu = d : a.next = d, d === null && (gi = a)) : (a = o, (e !== 0 || (v & 3) !== 0) && (nu = !0)), o = d;
    }
    _s(e);
  }
  function og(e, t) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var T = 31 - Gt(v), D = 1 << T, U = d[T];
      U === -1 ? ((D & a) === 0 || (D & o) !== 0) && (d[T] = oo(D, t)) : U <= t && (e.expiredLanes |= D), v &= ~D;
    }
    if (t = nt, a = Ge, a = Vt(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, a === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && je(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Qt(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (o !== null && je(o), Ml(a)) {
        case 2:
        case 8:
          a = ve;
          break;
        case 32:
          a = ye;
          break;
        case 268435456:
          a = Ze;
          break;
        default:
          a = ye;
      }
      return o = ug.bind(null, e), a = pe(a, o), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return o !== null && o !== null && je(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function ug(e, t) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (eu() && e.callbackNode !== a)
      return null;
    var o = Ge;
    return o = Vt(
      e,
      e === nt ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Gm(e, o, t), og(e, Oe()), e.callbackNode != null && e.callbackNode === a ? ug.bind(null, e) : null);
  }
  function lg(e, t) {
    if (eu()) return null;
    Gm(e, t, !0);
  }
  function Bb() {
    Fb(function() {
      (Xe & 6) !== 0 ? pe(
        at,
        Ib
      ) : sg();
    });
  }
  function vd() {
    return ba === 0 && (ba = za()), ba;
  }
  function cg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ho("" + e);
  }
  function dg(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function Ub(e, t, a, o, d) {
    if (t === "submit" && a && a.stateNode === d) {
      var v = cg(
        (d[Kt] || null).action
      ), T = o.submitter;
      T && (t = (t = T[Kt] || null) ? cg(t.formAction) : T.getAttribute("formAction"), t !== null && (v = t, T = null));
      var D = new vo(
        "action",
        "action",
        null,
        o,
        d
      );
      e.push({
        event: D,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (o.defaultPrevented) {
                if (ba !== 0) {
                  var U = T ? dg(d, T) : new FormData(d);
                  Pc(
                    a,
                    {
                      pending: !0,
                      data: U,
                      method: d.method,
                      action: v
                    },
                    null,
                    U
                  );
                }
              } else
                typeof v == "function" && (D.preventDefault(), U = T ? dg(d, T) : new FormData(d), Pc(
                  a,
                  {
                    pending: !0,
                    data: U,
                    method: d.method,
                    action: v
                  },
                  v,
                  U
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var yd = 0; yd < nc.length; yd++) {
    var _d = nc[yd], Hb = _d.toLowerCase(), qb = _d[0].toUpperCase() + _d.slice(1);
    Dn(
      Hb,
      "on" + qb
    );
  }
  Dn(Gh, "onAnimationEnd"), Dn(Vh, "onAnimationIteration"), Dn(Yh, "onAnimationStart"), Dn("dblclick", "onDoubleClick"), Dn("focusin", "onFocus"), Dn("focusout", "onBlur"), Dn(ib, "onTransitionRun"), Dn(sb, "onTransitionStart"), Dn(ob, "onTransitionCancel"), Dn($h, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Zb = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs)
  );
  function fg(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], d = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (t)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], U = D.instance, Q = D.currentTarget;
            if (D = D.listener, U !== v && d.isPropagationStopped())
              break e;
            v = D, d.currentTarget = Q;
            try {
              v(d);
            } catch (ie) {
              Zo(ie);
            }
            d.currentTarget = null, v = U;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], U = D.instance, Q = D.currentTarget, D = D.listener, U !== v && d.isPropagationStopped())
              break e;
            v = D, d.currentTarget = Q;
            try {
              v(d);
            } catch (ie) {
              Zo(ie);
            }
            d.currentTarget = null, v = U;
          }
      }
    }
  }
  function Be(e, t) {
    var a = t[Rl];
    a === void 0 && (a = t[Rl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (hg(t, e, 2, !1), a.add(o));
  }
  function bd(e, t, a) {
    var o = 0;
    t && (o |= 4), hg(
      a,
      e,
      o,
      t
    );
  }
  var ru = "_reactListening" + Math.random().toString(36).slice(2);
  function Sd(e) {
    if (!e[ru]) {
      e[ru] = !0, sh.forEach(function(a) {
        a !== "selectionchange" && (Zb.has(a) || bd(a, !1, e), bd(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ru] || (t[ru] = !0, bd("selectionchange", !1, t));
    }
  }
  function hg(e, t, a, o) {
    switch (Pg(t)) {
      case 2:
        var d = g1;
        break;
      case 8:
        d = v1;
        break;
      default:
        d = zd;
    }
    a = d.bind(
      null,
      t,
      a,
      e
    ), d = void 0, !Zl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, a, !0) : d !== void 0 ? e.addEventListener(t, a, {
      passive: d
    }) : e.addEventListener(t, a, !1);
  }
  function wd(e, t, a, o, d) {
    var v = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var T = o.tag;
        if (T === 3 || T === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (T === 4)
            for (T = o.return; T !== null; ) {
              var U = T.tag;
              if ((U === 3 || U === 4) && T.stateNode.containerInfo === d)
                return;
              T = T.return;
            }
          for (; D !== null; ) {
            if (T = Pa(D), T === null) return;
            if (U = T.tag, U === 5 || U === 6 || U === 26 || U === 27) {
              o = v = T;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    bh(function() {
      var Q = v, ie = Hl(a), le = [];
      e: {
        var W = Xh.get(e);
        if (W !== void 0) {
          var ee = vo, Ce = e;
          switch (e) {
            case "keypress":
              if (mo(a) === 0) break e;
            case "keydown":
            case "keyup":
              ee = P_;
              break;
            case "focusin":
              Ce = "focus", ee = $l;
              break;
            case "focusout":
              Ce = "blur", ee = $l;
              break;
            case "beforeblur":
            case "afterblur":
              ee = $l;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Eh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = k_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = U_;
              break;
            case Gh:
            case Vh:
            case Yh:
              ee = x_;
              break;
            case $h:
              ee = q_;
              break;
            case "scroll":
            case "scrollend":
              ee = E_;
              break;
            case "wheel":
              ee = G_;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = O_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = kh;
              break;
            case "toggle":
            case "beforetoggle":
              ee = Y_;
          }
          var we = (t & 4) !== 0, Je = !we && (e === "scroll" || e === "scrollend"), V = we ? W !== null ? W + "Capture" : null : W;
          we = [];
          for (var q = Q, F; q !== null; ) {
            var oe = q;
            if (F = oe.stateNode, oe = oe.tag, oe !== 5 && oe !== 26 && oe !== 27 || F === null || V === null || (oe = Bi(q, V), oe != null && we.push(
              Ss(q, oe, F)
            )), Je) break;
            q = q.return;
          }
          0 < we.length && (W = new ee(
            W,
            Ce,
            null,
            a,
            ie
          ), le.push({ event: W, listeners: we }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (W = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", W && a !== Ul && (Ce = a.relatedTarget || a.fromElement) && (Pa(Ce) || Ce[La]))
            break e;
          if ((ee || W) && (W = ie.window === ie ? ie : (W = ie.ownerDocument) ? W.defaultView || W.parentWindow : window, ee ? (Ce = a.relatedTarget || a.toElement, ee = Q, Ce = Ce ? Pa(Ce) : null, Ce !== null && (Je = c(Ce), we = Ce.tag, Ce !== Je || we !== 5 && we !== 27 && we !== 6) && (Ce = null)) : (ee = null, Ce = Q), ee !== Ce)) {
            if (we = Eh, oe = "onMouseLeave", V = "onMouseEnter", q = "mouse", (e === "pointerout" || e === "pointerover") && (we = kh, oe = "onPointerLeave", V = "onPointerEnter", q = "pointer"), Je = ee == null ? W : Ii(ee), F = Ce == null ? W : Ii(Ce), W = new we(
              oe,
              q + "leave",
              ee,
              a,
              ie
            ), W.target = Je, W.relatedTarget = F, oe = null, Pa(ie) === Q && (we = new we(
              V,
              q + "enter",
              Ce,
              a,
              ie
            ), we.target = F, we.relatedTarget = Je, oe = we), Je = oe, ee && Ce)
              t: {
                for (we = ee, V = Ce, q = 0, F = we; F; F = vi(F))
                  q++;
                for (F = 0, oe = V; oe; oe = vi(oe))
                  F++;
                for (; 0 < q - F; )
                  we = vi(we), q--;
                for (; 0 < F - q; )
                  V = vi(V), F--;
                for (; q--; ) {
                  if (we === V || V !== null && we === V.alternate)
                    break t;
                  we = vi(we), V = vi(V);
                }
                we = null;
              }
            else we = null;
            ee !== null && pg(
              le,
              W,
              ee,
              we,
              !1
            ), Ce !== null && Je !== null && pg(
              le,
              Je,
              Ce,
              we,
              !0
            );
          }
        }
        e: {
          if (W = Q ? Ii(Q) : window, ee = W.nodeName && W.nodeName.toLowerCase(), ee === "select" || ee === "input" && W.type === "file")
            var ge = jh;
          else if (Mh(W))
            if (Dh)
              ge = nb;
            else {
              ge = eb;
              var Pe = W_;
            }
          else
            ee = W.nodeName, !ee || ee.toLowerCase() !== "input" || W.type !== "checkbox" && W.type !== "radio" ? Q && Bl(Q.elementType) && (ge = jh) : ge = tb;
          if (ge && (ge = ge(e, Q))) {
            Rh(
              le,
              ge,
              a,
              ie
            );
            break e;
          }
          Pe && Pe(e, W, Q), e === "focusout" && Q && W.type === "number" && Q.memoizedProps.value != null && Il(W, "number", W.value);
        }
        switch (Pe = Q ? Ii(Q) : window, e) {
          case "focusin":
            (Mh(Pe) || Pe.contentEditable === "true") && ($a = Pe, Wl = Q, $i = null);
            break;
          case "focusout":
            $i = Wl = $a = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ec = !1, qh(le, a, ie);
            break;
          case "selectionchange":
            if (ab) break;
          case "keydown":
          case "keyup":
            qh(le, a, ie);
        }
        var _e;
        if (Fl)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          Ya ? Nh(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ah && a.locale !== "ko" && (Ya || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Ya && (_e = Sh()) : (kr = ie, Gl = "value" in kr ? kr.value : kr.textContent, Ya = !0)), Pe = au(Q, Ee), 0 < Pe.length && (Ee = new Ch(
          Ee,
          e,
          null,
          a,
          ie
        ), le.push({ event: Ee, listeners: Pe }), _e ? Ee.data = _e : (_e = Oh(a), _e !== null && (Ee.data = _e)))), (_e = X_ ? F_(e, a) : Q_(e, a)) && (Ee = au(Q, "onBeforeInput"), 0 < Ee.length && (Pe = new Ch(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          ie
        ), le.push({
          event: Pe,
          listeners: Ee
        }), Pe.data = _e)), Ub(
          le,
          e,
          Q,
          a,
          ie
        );
      }
      fg(le, t);
    });
  }
  function Ss(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function au(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var d = e, v = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || v === null || (d = Bi(e, a), d != null && o.unshift(
        Ss(e, d, v)
      ), d = Bi(e, t), d != null && o.push(
        Ss(e, d, v)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function vi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pg(e, t, a, o, d) {
    for (var v = t._reactName, T = []; a !== null && a !== o; ) {
      var D = a, U = D.alternate, Q = D.stateNode;
      if (D = D.tag, U !== null && U === o) break;
      D !== 5 && D !== 26 && D !== 27 || Q === null || (U = Q, d ? (Q = Bi(a, v), Q != null && T.unshift(
        Ss(a, Q, U)
      )) : d || (Q = Bi(a, v), Q != null && T.push(
        Ss(a, Q, U)
      ))), a = a.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var Gb = /\r\n?/g, Vb = /\u0000|\uFFFD/g;
  function mg(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gb, `
`).replace(Vb, "");
  }
  function gg(e, t) {
    return t = mg(t), mg(e) === t;
  }
  function iu() {
  }
  function Ke(e, t, a, o, d, v) {
    switch (a) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Za(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Za(e, "" + o);
        break;
      case "className":
        lo(e, "class", o);
        break;
      case "tabIndex":
        lo(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lo(e, a, o);
        break;
      case "style":
        yh(e, o, v);
        break;
      case "data":
        if (t !== "object") {
          lo(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = ho("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof v == "function" && (a === "formAction" ? (t !== "input" && Ke(e, t, "name", d.name, d, null), Ke(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), Ke(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), Ke(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (Ke(e, t, "encType", d.encType, d, null), Ke(e, t, "method", d.method, d, null), Ke(e, t, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = ho("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = iu);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = ho("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        Be("beforetoggle", e), Be("toggle", e), uo(e, "popover", o);
        break;
      case "xlinkActuate":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          o
        );
        break;
      case "xlinkArcrole":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          o
        );
        break;
      case "xlinkRole":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          o
        );
        break;
      case "xlinkShow":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          o
        );
        break;
      case "xlinkTitle":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          o
        );
        break;
      case "xlinkType":
        nr(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          o
        );
        break;
      case "xmlBase":
        nr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          o
        );
        break;
      case "xmlLang":
        nr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          o
        );
        break;
      case "xmlSpace":
        nr(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          o
        );
        break;
      case "is":
        uo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = S_.get(a) || a, uo(e, a, o));
    }
  }
  function Ed(e, t, a, o, d, v) {
    switch (a) {
      case "style":
        yh(e, o, v);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(i(61));
          if (a = o.__html, a != null) {
            if (d.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Za(e, o) : (typeof o == "number" || typeof o == "bigint") && Za(e, "" + o);
        break;
      case "onScroll":
        o != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Be("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = iu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!oh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (d = a.endsWith("Capture"), t = a.slice(2, d ? a.length - 7 : void 0), v = e[Kt] || null, v = v != null ? v[a] : null, typeof v == "function" && e.removeEventListener(t, v, d), typeof o == "function")) {
              typeof v != "function" && v !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, o, d);
              break e;
            }
            a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : uo(e, a, o);
          }
    }
  }
  function zt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Be("error", e), Be("load", e);
        var o = !1, d = !1, v;
        for (v in a)
          if (a.hasOwnProperty(v)) {
            var T = a[v];
            if (T != null)
              switch (v) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  Ke(e, t, v, T, a, null);
              }
          }
        d && Ke(e, t, "srcSet", a.srcSet, a, null), o && Ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        Be("invalid", e);
        var D = v = T = d = null, U = null, Q = null;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var ie = a[o];
            if (ie != null)
              switch (o) {
                case "name":
                  d = ie;
                  break;
                case "type":
                  T = ie;
                  break;
                case "checked":
                  U = ie;
                  break;
                case "defaultChecked":
                  Q = ie;
                  break;
                case "value":
                  v = ie;
                  break;
                case "defaultValue":
                  D = ie;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ie != null)
                    throw Error(i(137, t));
                  break;
                default:
                  Ke(e, t, o, ie, a, null);
              }
          }
        ph(
          e,
          v,
          D,
          U,
          Q,
          T,
          d,
          !1
        ), co(e);
        return;
      case "select":
        Be("invalid", e), o = T = v = null;
        for (d in a)
          if (a.hasOwnProperty(d) && (D = a[d], D != null))
            switch (d) {
              case "value":
                v = D;
                break;
              case "defaultValue":
                T = D;
                break;
              case "multiple":
                o = D;
              default:
                Ke(e, t, d, D, a, null);
            }
        t = v, a = T, e.multiple = !!o, t != null ? qa(e, !!o, t, !1) : a != null && qa(e, !!o, a, !0);
        return;
      case "textarea":
        Be("invalid", e), v = d = o = null;
        for (T in a)
          if (a.hasOwnProperty(T) && (D = a[T], D != null))
            switch (T) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                v = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(i(91));
                break;
              default:
                Ke(e, t, T, D, a, null);
            }
        gh(e, o, d, v), co(e);
        return;
      case "option":
        for (U in a)
          if (a.hasOwnProperty(U) && (o = a[U], o != null))
            switch (U) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                Ke(e, t, U, o, a, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < bs.length; o++)
          Be(bs[o], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (Q in a)
          if (a.hasOwnProperty(Q) && (o = a[Q], o != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                Ke(e, t, Q, o, a, null);
            }
        return;
      default:
        if (Bl(t)) {
          for (ie in a)
            a.hasOwnProperty(ie) && (o = a[ie], o !== void 0 && Ed(
              e,
              t,
              ie,
              o,
              a,
              void 0
            ));
          return;
        }
    }
    for (D in a)
      a.hasOwnProperty(D) && (o = a[D], o != null && Ke(e, t, D, o, a, null));
  }
  function Yb(e, t, a, o) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var d = null, v = null, T = null, D = null, U = null, Q = null, ie = null;
        for (ee in a) {
          var le = a[ee];
          if (a.hasOwnProperty(ee) && le != null)
            switch (ee) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                U = le;
              default:
                o.hasOwnProperty(ee) || Ke(e, t, ee, null, o, le);
            }
        }
        for (var W in o) {
          var ee = o[W];
          if (le = a[W], o.hasOwnProperty(W) && (ee != null || le != null))
            switch (W) {
              case "type":
                v = ee;
                break;
              case "name":
                d = ee;
                break;
              case "checked":
                Q = ee;
                break;
              case "defaultChecked":
                ie = ee;
                break;
              case "value":
                T = ee;
                break;
              case "defaultValue":
                D = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(i(137, t));
                break;
              default:
                ee !== le && Ke(
                  e,
                  t,
                  W,
                  ee,
                  o,
                  le
                );
            }
        }
        Pl(
          e,
          T,
          D,
          U,
          Q,
          ie,
          v,
          d
        );
        return;
      case "select":
        ee = T = D = W = null;
        for (v in a)
          if (U = a[v], a.hasOwnProperty(v) && U != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                ee = U;
              default:
                o.hasOwnProperty(v) || Ke(
                  e,
                  t,
                  v,
                  null,
                  o,
                  U
                );
            }
        for (d in o)
          if (v = o[d], U = a[d], o.hasOwnProperty(d) && (v != null || U != null))
            switch (d) {
              case "value":
                W = v;
                break;
              case "defaultValue":
                D = v;
                break;
              case "multiple":
                T = v;
              default:
                v !== U && Ke(
                  e,
                  t,
                  d,
                  v,
                  o,
                  U
                );
            }
        t = D, a = T, o = ee, W != null ? qa(e, !!a, W, !1) : !!o != !!a && (t != null ? qa(e, !!a, t, !0) : qa(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        ee = W = null;
        for (D in a)
          if (d = a[D], a.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ke(e, t, D, null, o, d);
            }
        for (T in o)
          if (d = o[T], v = a[T], o.hasOwnProperty(T) && (d != null || v != null))
            switch (T) {
              case "value":
                W = d;
                break;
              case "defaultValue":
                ee = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(i(91));
                break;
              default:
                d !== v && Ke(e, t, T, d, o, v);
            }
        mh(e, W, ee);
        return;
      case "option":
        for (var Ce in a)
          if (W = a[Ce], a.hasOwnProperty(Ce) && W != null && !o.hasOwnProperty(Ce))
            switch (Ce) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ke(
                  e,
                  t,
                  Ce,
                  null,
                  o,
                  W
                );
            }
        for (U in o)
          if (W = o[U], ee = a[U], o.hasOwnProperty(U) && W !== ee && (W != null || ee != null))
            switch (U) {
              case "selected":
                e.selected = W && typeof W != "function" && typeof W != "symbol";
                break;
              default:
                Ke(
                  e,
                  t,
                  U,
                  W,
                  o,
                  ee
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var we in a)
          W = a[we], a.hasOwnProperty(we) && W != null && !o.hasOwnProperty(we) && Ke(e, t, we, null, o, W);
        for (Q in o)
          if (W = o[Q], ee = a[Q], o.hasOwnProperty(Q) && W !== ee && (W != null || ee != null))
            switch (Q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null)
                  throw Error(i(137, t));
                break;
              default:
                Ke(
                  e,
                  t,
                  Q,
                  W,
                  o,
                  ee
                );
            }
        return;
      default:
        if (Bl(t)) {
          for (var Je in a)
            W = a[Je], a.hasOwnProperty(Je) && W !== void 0 && !o.hasOwnProperty(Je) && Ed(
              e,
              t,
              Je,
              void 0,
              o,
              W
            );
          for (ie in o)
            W = o[ie], ee = a[ie], !o.hasOwnProperty(ie) || W === ee || W === void 0 && ee === void 0 || Ed(
              e,
              t,
              ie,
              W,
              o,
              ee
            );
          return;
        }
    }
    for (var V in a)
      W = a[V], a.hasOwnProperty(V) && W != null && !o.hasOwnProperty(V) && Ke(e, t, V, null, o, W);
    for (le in o)
      W = o[le], ee = a[le], !o.hasOwnProperty(le) || W === ee || W == null && ee == null || Ke(e, t, le, W, o, ee);
  }
  var Cd = null, kd = null;
  function su(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function vg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function yg(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Ad(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Td = null;
  function $b() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Td ? !1 : (Td = e, !0) : (Td = null, !1);
  }
  var _g = typeof setTimeout == "function" ? setTimeout : void 0, Xb = typeof clearTimeout == "function" ? clearTimeout : void 0, bg = typeof Promise == "function" ? Promise : void 0, Fb = typeof queueMicrotask == "function" ? queueMicrotask : typeof bg < "u" ? function(e) {
    return bg.resolve(null).then(e).catch(Qb);
  } : _g;
  function Qb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hr(e) {
    return e === "head";
  }
  function Sg(e, t) {
    var a = t, o = 0, d = 0;
    do {
      var v = a.nextSibling;
      if (e.removeChild(a), v && v.nodeType === 8)
        if (a = v.data, a === "/$") {
          if (0 < o && 8 > o) {
            a = o;
            var T = e.ownerDocument;
            if (a & 1 && ws(T.documentElement), a & 2 && ws(T.body), a & 4)
              for (a = T.head, ws(a), T = a.firstChild; T; ) {
                var D = T.nextSibling, U = T.nodeName;
                T[Pi] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && T.rel.toLowerCase() === "stylesheet" || a.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(v), Os(t);
            return;
          }
          d--;
        } else
          a === "$" || a === "$?" || a === "$!" ? d++ : o = a.charCodeAt(0) - 48;
      else o = 0;
      a = v;
    } while (a);
    Os(t);
  }
  function xd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          xd(a), jl(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function Kb(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var d = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Pi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (v = e.getAttribute("rel"), v === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (v !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (v = e.getAttribute("src"), (v !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && v && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var v = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === v)
          return e;
      } else return e;
      if (e = Ln(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Jb(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ln(e.nextSibling), e === null)) return null;
    return e;
  }
  function Nd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function Wb(e, t) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      t();
    else {
      var o = function() {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Ln(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Od = null;
  function wg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Eg(e, t, a) {
    switch (t = su(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function ws(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    jl(e);
  }
  var On = /* @__PURE__ */ new Map(), Cg = /* @__PURE__ */ new Set();
  function ou(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var gr = B.d;
  B.d = {
    f: e1,
    r: t1,
    D: n1,
    C: r1,
    L: a1,
    m: i1,
    X: o1,
    S: s1,
    M: u1
  };
  function e1() {
    var e = gr.f(), t = Jo();
    return e || t;
  }
  function t1(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gp(t) : gr.r(e);
  }
  var yi = typeof document > "u" ? null : document;
  function kg(e, t, a) {
    var o = yi;
    if (o && typeof t == "string" && t) {
      var d = En(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof a == "string" && (d += '[crossorigin="' + a + '"]'), Cg.has(d) || (Cg.add(d), e = { rel: e, crossOrigin: a, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function n1(e) {
    gr.D(e), kg("dns-prefetch", e, null);
  }
  function r1(e, t) {
    gr.C(e, t), kg("preconnect", e, t);
  }
  function a1(e, t, a) {
    gr.L(e, t, a);
    var o = yi;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + En(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (d += '[imagesrcset="' + En(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (d += '[imagesizes="' + En(
        a.imageSizes
      ) + '"]')) : d += '[href="' + En(e) + '"]';
      var v = d;
      switch (t) {
        case "style":
          v = _i(e);
          break;
        case "script":
          v = bi(e);
      }
      On.has(v) || (e = g(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), On.set(v, e), o.querySelector(d) !== null || t === "style" && o.querySelector(Es(v)) || t === "script" && o.querySelector(Cs(v)) || (t = o.createElement("link"), zt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function i1(e, t) {
    gr.m(e, t);
    var a = yi;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + En(o) + '"][href="' + En(e) + '"]', v = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          v = bi(e);
      }
      if (!On.has(v) && (e = g({ rel: "modulepreload", href: e }, t), On.set(v, e), a.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Cs(v)))
              return;
        }
        o = a.createElement("link"), zt(o, "link", e), xt(o), a.head.appendChild(o);
      }
    }
  }
  function s1(e, t, a) {
    gr.S(e, t, a);
    var o = yi;
    if (o && e) {
      var d = Ba(o).hoistableStyles, v = _i(e);
      t = t || "default";
      var T = d.get(v);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = o.querySelector(
          Es(v)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = On.get(v)) && Md(e, a);
          var U = T = o.createElement("link");
          xt(U), zt(U, "link", e), U._p = new Promise(function(Q, ie) {
            U.onload = Q, U.onerror = ie;
          }), U.addEventListener("load", function() {
            D.loading |= 1;
          }), U.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, uu(T, t, o);
        }
        T = {
          type: "stylesheet",
          instance: T,
          count: 1,
          state: D
        }, d.set(v, T);
      }
    }
  }
  function o1(e, t) {
    gr.X(e, t);
    var a = yi;
    if (a && e) {
      var o = Ba(a).hoistableScripts, d = bi(e), v = o.get(d);
      v || (v = a.querySelector(Cs(d)), v || (e = g({ src: e, async: !0 }, t), (t = On.get(d)) && Rd(e, t), v = a.createElement("script"), xt(v), zt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(d, v));
    }
  }
  function u1(e, t) {
    gr.M(e, t);
    var a = yi;
    if (a && e) {
      var o = Ba(a).hoistableScripts, d = bi(e), v = o.get(d);
      v || (v = a.querySelector(Cs(d)), v || (e = g({ src: e, async: !0, type: "module" }, t), (t = On.get(d)) && Rd(e, t), v = a.createElement("script"), xt(v), zt(v, "link", e), a.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(d, v));
    }
  }
  function Ag(e, t, a, o) {
    var d = (d = ne.current) ? ou(d) : null;
    if (!d) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = _i(a.href), a = Ba(
          d
        ).hoistableStyles, o = a.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = _i(a.href);
          var v = Ba(
            d
          ).hoistableStyles, T = v.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, T), (v = d.querySelector(
            Es(e)
          )) && !v._p && (T.instance = v, T.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), v || l1(
            d,
            e,
            a,
            T.state
          ))), t && o === null)
            throw Error(i(528, ""));
          return T;
        }
        if (t && o !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bi(a), a = Ba(
          d
        ).hoistableScripts, o = a.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function _i(e) {
    return 'href="' + En(e) + '"';
  }
  function Es(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Tg(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function l1(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), zt(t, "link", a), xt(t), e.head.appendChild(t));
  }
  function bi(e) {
    return '[src="' + En(e) + '"]';
  }
  function Cs(e) {
    return "script[async]" + e;
  }
  function xg(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(a.href) + '"]'
          );
          if (o)
            return t.instance = o, xt(o), o;
          var d = g({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), zt(o, "style", d), uu(o, a.precedence, e), t.instance = o;
        case "stylesheet":
          d = _i(a.href);
          var v = e.querySelector(
            Es(d)
          );
          if (v)
            return t.state.loading |= 4, t.instance = v, xt(v), v;
          o = Tg(a), (d = On.get(d)) && Md(o, d), v = (e.ownerDocument || e).createElement("link"), xt(v);
          var T = v;
          return T._p = new Promise(function(D, U) {
            T.onload = D, T.onerror = U;
          }), zt(v, "link", o), t.state.loading |= 4, uu(v, a.precedence, e), t.instance = v;
        case "script":
          return v = bi(a.src), (d = e.querySelector(
            Cs(v)
          )) ? (t.instance = d, xt(d), d) : (o = a, (d = On.get(v)) && (o = g({}, a), Rd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), zt(d, "link", o), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, uu(o, a.precedence, e));
    return t.instance;
  }
  function uu(e, t, a) {
    for (var o = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, v = d, T = 0; T < o.length; T++) {
      var D = o[T];
      if (D.dataset.precedence === t) v = D;
      else if (v !== d) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Md(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Rd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var lu = null;
  function Ng(e, t, a) {
    if (lu === null) {
      var o = /* @__PURE__ */ new Map(), d = lu = /* @__PURE__ */ new Map();
      d.set(a, o);
    } else
      d = lu, o = d.get(a), o || (o = /* @__PURE__ */ new Map(), d.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), d = 0; d < a.length; d++) {
      var v = a[d];
      if (!(v[Pi] || v[Bt] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = v.getAttribute(t) || "";
        T = e + T;
        var D = o.get(T);
        D ? D.push(v) : o.set(T, [v]);
      }
    }
    return o;
  }
  function Og(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function c1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Mg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var ks = null;
  function d1() {
  }
  function f1(e, t, a) {
    if (ks === null) throw Error(i(475));
    var o = ks;
    if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = _i(a.href), v = e.querySelector(
          Es(d)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = cu.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = v, xt(v);
          return;
        }
        v = e.ownerDocument || e, a = Tg(a), (d = On.get(d)) && Md(a, d), v = v.createElement("link"), xt(v);
        var T = v;
        T._p = new Promise(function(D, U) {
          T.onload = D, T.onerror = U;
        }), zt(v, "link", a), t.instance = v;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = cu.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function h1() {
    if (ks === null) throw Error(i(475));
    var e = ks;
    return e.stylesheets && e.count === 0 && jd(e, e.stylesheets), 0 < e.count ? function(t) {
      var a = setTimeout(function() {
        if (e.stylesheets && jd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function cu() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) jd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var du = null;
  function jd(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, du = /* @__PURE__ */ new Map(), t.forEach(p1, e), du = null, cu.call(e));
  }
  function p1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = du.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), du.set(e, a);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < d.length; v++) {
          var T = d[v];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (a.set(T.dataset.precedence, T), o = T);
        }
        o && a.set(null, o);
      }
      d = t.instance, T = d.getAttribute("data-precedence"), v = a.get(T) || o, v === o && a.set(null, d), a.set(T, d), this.count++, o = cu.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), v ? v.parentNode.insertBefore(d, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var As = {
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function m1(e, t, a, o, d, v, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.hiddenUpdates = Nl(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = v, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Rg(e, t, a, o, d, v, T, D, U, Q, ie, le) {
    return e = new m1(
      e,
      t,
      a,
      T,
      D,
      U,
      Q,
      le
    ), t = 1, v === !0 && (t |= 24), v = ln(3, null, null, t), e.current = v, v.stateNode = e, t = pc(), t.refCount++, e.pooledCache = t, t.refCount++, v.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: t
    }, yc(v), e;
  }
  function jg(e) {
    return e ? (e = Ka, e) : Ka;
  }
  function Dg(e, t, a, o, d, v) {
    d = jg(d), o.context === null ? o.context = d : o.pendingContext = d, o = xr(t), o.payload = { element: a }, v = v === void 0 ? null : v, v !== null && (o.callback = v), a = Nr(e, o, t), a !== null && (pn(a, e, t), ns(a, e, t));
  }
  function zg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Dd(e, t) {
    zg(e, t), (e = e.alternate) && zg(e, t);
  }
  function Lg(e) {
    if (e.tag === 13) {
      var t = Qa(e, 67108864);
      t !== null && pn(t, e, 67108864), Dd(e, 67108864);
    }
  }
  var fu = !0;
  function g1(e, t, a, o) {
    var d = M.T;
    M.T = null;
    var v = B.p;
    try {
      B.p = 2, zd(e, t, a, o);
    } finally {
      B.p = v, M.T = d;
    }
  }
  function v1(e, t, a, o) {
    var d = M.T;
    M.T = null;
    var v = B.p;
    try {
      B.p = 8, zd(e, t, a, o);
    } finally {
      B.p = v, M.T = d;
    }
  }
  function zd(e, t, a, o) {
    if (fu) {
      var d = Ld(o);
      if (d === null)
        wd(
          e,
          t,
          o,
          hu,
          a
        ), Ig(e, o);
      else if (_1(
        d,
        e,
        t,
        a,
        o
      ))
        o.stopPropagation();
      else if (Ig(e, o), t & 4 && -1 < y1.indexOf(e)) {
        for (; d !== null; ) {
          var v = Ia(d);
          if (v !== null)
            switch (v.tag) {
              case 3:
                if (v = v.stateNode, v.current.memoizedState.isDehydrated) {
                  var T = Sn(v.pendingLanes);
                  if (T !== 0) {
                    var D = v;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; T; ) {
                      var U = 1 << 31 - Gt(T);
                      D.entanglements[1] |= U, T &= ~U;
                    }
                    Fn(v), (Xe & 6) === 0 && (Qo = Oe() + 500, _s(0));
                  }
                }
                break;
              case 13:
                D = Qa(v, 2), D !== null && pn(D, v, 2), Jo(), Dd(v, 2);
            }
          if (v = Ld(o), v === null && wd(
            e,
            t,
            o,
            hu,
            a
          ), v === d) break;
          d = v;
        }
        d !== null && o.stopPropagation();
      } else
        wd(
          e,
          t,
          o,
          null,
          a
        );
    }
  }
  function Ld(e) {
    return e = Hl(e), Pd(e);
  }
  var hu = null;
  function Pd(e) {
    if (hu = null, e = Pa(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = f(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return hu = e, null;
  }
  function Pg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_t()) {
          case at:
            return 2;
          case ve:
            return 8;
          case ye:
          case qe:
            return 32;
          case Ze:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Id = !1, qr = null, Zr = null, Gr = null, Ts = /* @__PURE__ */ new Map(), xs = /* @__PURE__ */ new Map(), Vr = [], y1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ig(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Zr = null;
        break;
      case "mouseover":
      case "mouseout":
        Gr = null;
        break;
      case "pointerover":
      case "pointerout":
        Ts.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xs.delete(t.pointerId);
    }
  }
  function Ns(e, t, a, o, d, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: v,
      targetContainers: [d]
    }, t !== null && (t = Ia(t), t !== null && Lg(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function _1(e, t, a, o, d) {
    switch (t) {
      case "focusin":
        return qr = Ns(
          qr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "dragenter":
        return Zr = Ns(
          Zr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "mouseover":
        return Gr = Ns(
          Gr,
          e,
          t,
          a,
          o,
          d
        ), !0;
      case "pointerover":
        var v = d.pointerId;
        return Ts.set(
          v,
          Ns(
            Ts.get(v) || null,
            e,
            t,
            a,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return v = d.pointerId, xs.set(
          v,
          Ns(
            xs.get(v) || null,
            e,
            t,
            a,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Bg(e) {
    var t = Pa(e.target);
    if (t !== null) {
      var a = c(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = f(a), t !== null) {
            e.blockedOn = t, f_(e.priority, function() {
              if (a.tag === 13) {
                var o = hn();
                o = Ol(o);
                var d = Qa(a, o);
                d !== null && pn(d, a, o), Dd(a, o);
              }
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ld(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(
          a.type,
          a
        );
        Ul = o, a.target.dispatchEvent(o), Ul = null;
      } else
        return t = Ia(a), t !== null && Lg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function Ug(e, t, a) {
    pu(e) && a.delete(t);
  }
  function b1() {
    Id = !1, qr !== null && pu(qr) && (qr = null), Zr !== null && pu(Zr) && (Zr = null), Gr !== null && pu(Gr) && (Gr = null), Ts.forEach(Ug), xs.forEach(Ug);
  }
  function mu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Id || (Id = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      b1
    )));
  }
  var gu = null;
  function Hg(e) {
    gu !== e && (gu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        gu === e && (gu = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Pd(o || a) === null)
              continue;
            break;
          }
          var v = Ia(a);
          v !== null && (e.splice(t, 3), t -= 3, Pc(
            v,
            {
              pending: !0,
              data: d,
              method: a.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function Os(e) {
    function t(U) {
      return mu(U, e);
    }
    qr !== null && mu(qr, e), Zr !== null && mu(Zr, e), Gr !== null && mu(Gr, e), Ts.forEach(t), xs.forEach(t);
    for (var a = 0; a < Vr.length; a++) {
      var o = Vr[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Vr.length && (a = Vr[0], a.blockedOn === null); )
      Bg(a), a.blockedOn === null && Vr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (o = 0; o < a.length; o += 3) {
        var d = a[o], v = a[o + 1], T = d[Kt] || null;
        if (typeof v == "function")
          T || Hg(a);
        else if (T) {
          var D = null;
          if (v && v.hasAttribute("formAction")) {
            if (d = v, T = v[Kt] || null)
              D = T.formAction;
            else if (Pd(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? a[o + 1] = D : (a.splice(o, 3), o -= 3), Hg(a);
        }
      }
  }
  function Bd(e) {
    this._internalRoot = e;
  }
  vu.prototype.render = Bd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current, o = hn();
    Dg(a, o, e, t, null, null);
  }, vu.prototype.unmount = Bd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dg(e.current, 2, null, e, null, null), Jo(), t[La] = null;
    }
  };
  function vu(e) {
    this._internalRoot = e;
  }
  vu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ah();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Vr.length && t !== 0 && t < Vr[a].priority; a++) ;
      Vr.splice(a, 0, e), a === 0 && Bg(e);
    }
  };
  var qg = r.version;
  if (qg !== "19.1.1")
    throw Error(
      i(
        527,
        qg,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = p(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var S1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yu.isDisabled && yu.supportsFiber)
      try {
        jn = yu.inject(
          S1
        ), mt = yu;
      } catch {
      }
  }
  return Ds.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var a = !1, o = "", d = am, v = im, T = sm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (v = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Rg(
      e,
      1,
      !1,
      null,
      null,
      a,
      o,
      d,
      v,
      T,
      D,
      null
    ), e[La] = t.current, Sd(e), new Bd(t);
  }, Ds.hydrateRoot = function(e, t, a) {
    if (!u(e)) throw Error(i(299));
    var o = !1, d = "", v = am, T = im, D = sm, U = null, Q = null;
    return a != null && (a.unstable_strictMode === !0 && (o = !0), a.identifierPrefix !== void 0 && (d = a.identifierPrefix), a.onUncaughtError !== void 0 && (v = a.onUncaughtError), a.onCaughtError !== void 0 && (T = a.onCaughtError), a.onRecoverableError !== void 0 && (D = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (U = a.unstable_transitionCallbacks), a.formState !== void 0 && (Q = a.formState)), t = Rg(
      e,
      1,
      !0,
      t,
      a ?? null,
      o,
      d,
      v,
      T,
      D,
      U,
      Q
    ), t.context = jg(null), a = t.current, o = hn(), o = Ol(o), d = xr(o), d.callback = null, Nr(a, d, o), a = o, t.current.lanes = a, Li(t, a), Fn(t), e[La] = t.current, Sd(e), new vu(t);
  }, Ds.version = "19.1.1", Ds;
}
var rv;
function a2() {
  if (rv) return Zd.exports;
  rv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Zd.exports = r2(), Zd.exports;
}
var i2 = a2();
const av = /* @__PURE__ */ Lf(i2);
var s2 = Object.defineProperty, o2 = (n, r, s) => r in n ? s2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, iv = (n, r, s) => o2(n, typeof r != "symbol" ? r + "" : r, s);
class $0 {
  constructor(r, s) {
    iv(this, "settingsKey"), iv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: s = "recursive" } = r, i = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: i ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const m = {
      ...f,
      oldSettings: structuredClone(c),
      version: {
        changed: !1,
        old: c.version,
        new: c.version
      },
      formatVersion: {
        changed: !1,
        old: c.formatVersion,
        new: c.formatVersion
      }
    };
    if (s === "recursive") {
      let p = function(_, g) {
        let E = !1;
        for (const y of Object.keys(g))
          _[y] === void 0 ? (_[y] = g[y], E = !0) : typeof g[y] == "object" && g[y] !== null && (_[y] = _[y] || {}, p(_[y], g[y]) && (E = !0));
        return E;
      };
      i && c.version !== i && (m.version.changed = !0, m.version.new = i, c.version = i), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      i && !c.version && (c.version = i, m.version.changed = !0, m.version.new = i), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let p = structuredClone(c), _ = c.formatVersion;
      try {
        let g;
        do {
          g = !1;
          let E = s.find((y) => y.from === _);
          if (E && E.to > _)
            p = await E.action(p), _ = E.to, p.formatVersion = E.to, g = !0;
          else
            for (const y of s)
              if (y.from === "*" && y.to > _ && _ !== y.to) {
                p = await y.action(p), _ = y.to, p.formatVersion = y.to, g = !0;
                break;
              }
        } while (g);
        if (_ !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = _;
          const E = this.defaultSettings.version;
          E && (p.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(c))
            delete c[E];
          Object.assign(c, p), this.saveSettings();
        }
      } catch (g) {
        throw console.error("Failed to apply version changes:", g), new Error(`Version migration failed: ${g instanceof Error ? g.message : g}`, {
          cause: g
        });
      }
    }
    return m.newSettings = c, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, s) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = s, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function Sr(n) {
  return Array.isArray ? Array.isArray(n) : Q0(n) === "[object Array]";
}
function u2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function l2(n) {
  return n == null ? "" : u2(n);
}
function Qn(n) {
  return typeof n == "string";
}
function X0(n) {
  return typeof n == "number";
}
function c2(n) {
  return n === !0 || n === !1 || d2(n) && Q0(n) == "[object Boolean]";
}
function F0(n) {
  return typeof n == "object";
}
function d2(n) {
  return F0(n) && n !== null;
}
function yn(n) {
  return n != null;
}
function $d(n) {
  return !n.trim().length;
}
function Q0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const f2 = "Incorrect 'index' type", h2 = (n) => `Invalid value for key ${n}`, p2 = (n) => `Pattern length exceeds max of ${n}.`, m2 = (n) => `Missing ${n} property in key`, g2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, sv = Object.prototype.hasOwnProperty;
class v2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((i) => {
      let u = K0(i);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((i) => {
      i.weight /= s;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function K0(n) {
  let r = null, s = null, i = null, u = 1, c = null;
  if (Qn(n) || Sr(n))
    i = n, r = ov(n), s = mf(n);
  else {
    if (!sv.call(n, "name"))
      throw new Error(m2("name"));
    const f = n.name;
    if (i = f, sv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(g2(f));
    r = ov(f), s = mf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: i, getFn: c };
}
function ov(n) {
  return Sr(n) ? n : n.split(".");
}
function mf(n) {
  return Sr(n) ? n.join(".") : n;
}
function y2(n, r) {
  let s = [], i = !1;
  const u = (c, f, m) => {
    if (yn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const _ = c[p];
        if (!yn(_))
          return;
        if (m === f.length - 1 && (Qn(_) || X0(_) || c2(_)))
          s.push(l2(_));
        else if (Sr(_)) {
          i = !0;
          for (let g = 0, E = _.length; g < E; g += 1)
            u(_[g], f, m + 1);
        } else f.length && u(_, f, m + 1);
      }
  };
  return u(n, Qn(r) ? r.split(".") : r, 0), i ? s : s[0];
}
const _2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, b2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (n, r) => n.score === r.score ? n.idx < r.idx ? -1 : 1 : n.score < r.score ? -1 : 1
}, S2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, w2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: y2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Te = {
  ...b2,
  ..._2,
  ...S2,
  ...w2
};
const E2 = /[^ ]+/g;
function C2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), i = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(E2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(f * i) / i);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class If {
  constructor({
    getFn: r = Te.getFn,
    fieldNormWeight: s = Te.fieldNormWeight
  } = {}) {
    this.norm = C2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, i) => {
      this._keysMap[s.id] = i;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Qn(this.docs[0]) ? this.docs.forEach((r, s) => {
      this._addString(r, s);
    }) : this.docs.forEach((r, s) => {
      this._addObject(r, s);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const s = this.size();
    Qn(r) ? this._addString(r, s) : this._addObject(r, s);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let s = r, i = this.size(); s < i; s += 1)
      this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(r, s) {
    return r[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, s) {
    if (!yn(r) || $d(r))
      return;
    let i = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(i);
  }
  _addObject(r, s) {
    let i = { i: s, $: {} };
    this.keys.forEach((u, c) => {
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (yn(f)) {
        if (Sr(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: _, value: g } = p.pop();
            if (yn(g))
              if (Qn(g) && !$d(g)) {
                let E = {
                  v: g,
                  i: _,
                  n: this.norm.get(g)
                };
                m.push(E);
              } else Sr(g) && g.forEach((E, y) => {
                p.push({
                  nestedArrIndex: y,
                  value: E
                });
              });
          }
          i.$[c] = m;
        } else if (Qn(f) && !$d(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
          };
          i.$[c] = m;
        }
      }
    }), this.records.push(i);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function J0(n, r, { getFn: s = Te.getFn, fieldNormWeight: i = Te.fieldNormWeight } = {}) {
  const u = new If({ getFn: s, fieldNormWeight: i });
  return u.setKeys(n.map(K0)), u.setSources(r), u.create(), u;
}
function k2(n, { getFn: r = Te.getFn, fieldNormWeight: s = Te.fieldNormWeight } = {}) {
  const { keys: i, records: u } = n, c = new If({ getFn: r, fieldNormWeight: s });
  return c.setKeys(i), c.setIndexRecords(u), c;
}
function _u(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: i = 0,
  distance: u = Te.distance,
  ignoreLocation: c = Te.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(i - s);
  return u ? f + m / u : m ? 1 : f;
}
function A2(n = [], r = Te.minMatchCharLength) {
  let s = [], i = -1, u = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && i === -1 ? i = c : !m && i !== -1 && (u = c - 1, u - i + 1 >= r && s.push([i, u]), i = -1);
  }
  return n[c - 1] && c - i >= r && s.push([i, c - 1]), s;
}
const xa = 32;
function T2(n, r, s, {
  location: i = Te.location,
  distance: u = Te.distance,
  threshold: c = Te.threshold,
  findAllMatches: f = Te.findAllMatches,
  minMatchCharLength: m = Te.minMatchCharLength,
  includeMatches: p = Te.includeMatches,
  ignoreLocation: _ = Te.ignoreLocation
} = {}) {
  if (r.length > xa)
    throw new Error(p2(xa));
  const g = r.length, E = n.length, y = Math.max(0, Math.min(i, E));
  let b = c, h = y;
  const C = m > 1 || p, A = C ? Array(E) : [];
  let R;
  for (; (R = n.indexOf(r, h)) > -1; ) {
    let k = _u(r, {
      currentLocation: R,
      expectedLocation: y,
      distance: u,
      ignoreLocation: _
    });
    if (b = Math.min(k, b), h = R + g, C) {
      let O = 0;
      for (; O < g; )
        A[R + O] = 1, O += 1;
    }
  }
  h = -1;
  let x = [], L = 1, l = g + E;
  const S = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let O = 0, z = l;
    for (; O < z; )
      _u(r, {
        errors: k,
        currentLocation: y + z,
        expectedLocation: y,
        distance: u,
        ignoreLocation: _
      }) <= b ? O = z : l = z, z = Math.floor((l - O) / 2 + O);
    l = z;
    let j = Math.max(1, y - z + 1), P = f ? E : Math.min(y + z, E) + g, Z = Array(P + 2);
    Z[P + 1] = (1 << k) - 1;
    for (let G = P; G >= j; G -= 1) {
      let K = G - 1, M = s[n.charAt(K)];
      if (C && (A[K] = +!!M), Z[G] = (Z[G + 1] << 1 | 1) & M, k && (Z[G] |= (x[G + 1] | x[G]) << 1 | 1 | x[G + 1]), Z[G] & S && (L = _u(r, {
        errors: k,
        currentLocation: K,
        expectedLocation: y,
        distance: u,
        ignoreLocation: _
      }), L <= b)) {
        if (b = L, h = K, h <= y)
          break;
        j = Math.max(1, 2 * y - h);
      }
    }
    if (_u(r, {
      errors: k + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: u,
      ignoreLocation: _
    }) > b)
      break;
    x = Z;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, L)
  };
  if (C) {
    const k = A2(A, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function x2(n) {
  let r = {};
  for (let s = 0, i = n.length; s < i; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << i - s - 1;
  }
  return r;
}
const fl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class W0 {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: u = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: _ = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: i,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: _,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = _ ? fl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (b, h) => {
      this.chunks.push({
        pattern: b,
        alphabet: x2(b),
        startIndex: h
      });
    }, y = this.pattern.length;
    if (y > xa) {
      let b = 0;
      const h = y % xa, C = y - h;
      for (; b < C; )
        E(this.pattern.substr(b, xa), b), b += xa;
      if (h) {
        const A = y - xa;
        E(this.pattern.substr(A), A);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: i, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = i ? fl(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return u && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: c,
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: _,
      ignoreLocation: g
    } = this.options;
    let E = [], y = 0, b = !1;
    this.chunks.forEach(({ pattern: C, alphabet: A, startIndex: R }) => {
      const { isMatch: x, score: L, indices: l } = T2(r, C, A, {
        location: c + R,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: _,
        includeMatches: u,
        ignoreLocation: g
      });
      x && (b = !0), y += L, x && l && (E = [...E, ...l]);
    });
    let h = {
      isMatch: b,
      score: b ? y / this.chunks.length : 1
    };
    return b && u && (h.indices = E), h;
  }
}
class Wr {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return uv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return uv(r, this.singleRegex);
  }
  search() {
  }
}
function uv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class N2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const s = r === this.pattern;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class O2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const i = r.indexOf(this.pattern) === -1;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class M2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const s = r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class R2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const s = !r.startsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class j2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const s = r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class D2 extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const s = !r.endsWith(this.pattern);
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class ey extends Wr {
  constructor(r, {
    location: s = Te.location,
    threshold: i = Te.threshold,
    distance: u = Te.distance,
    includeMatches: c = Te.includeMatches,
    findAllMatches: f = Te.findAllMatches,
    minMatchCharLength: m = Te.minMatchCharLength,
    isCaseSensitive: p = Te.isCaseSensitive,
    ignoreDiacritics: _ = Te.ignoreDiacritics,
    ignoreLocation: g = Te.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new W0(r, {
      location: s,
      threshold: i,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: _,
      ignoreLocation: g
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class ty extends Wr {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let s = 0, i;
    const u = [], c = this.pattern.length;
    for (; (i = r.indexOf(this.pattern, s)) > -1; )
      s = i + c, u.push([i, s - 1]);
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const gf = [
  N2,
  ty,
  M2,
  R2,
  D2,
  j2,
  O2,
  ey
], lv = gf.length, z2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, L2 = "|";
function P2(n, r = {}) {
  return n.split(L2).map((s) => {
    let i = s.trim().split(z2).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = i.length; c < f; c += 1) {
      const m = i[c];
      let p = !1, _ = -1;
      for (; !p && ++_ < lv; ) {
        const g = gf[_];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (_ = -1; ++_ < lv; ) {
          const g = gf[_];
          let E = g.isSingleMatch(m);
          if (E) {
            u.push(new g(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const I2 = /* @__PURE__ */ new Set([ey.type, ty.type]);
class B2 {
  constructor(r, {
    isCaseSensitive: s = Te.isCaseSensitive,
    ignoreDiacritics: i = Te.ignoreDiacritics,
    includeMatches: u = Te.includeMatches,
    minMatchCharLength: c = Te.minMatchCharLength,
    ignoreLocation: f = Te.ignoreLocation,
    findAllMatches: m = Te.findAllMatches,
    location: p = Te.location,
    threshold: _ = Te.threshold,
    distance: g = Te.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: i,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: _,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = i ? fl(r) : r, this.pattern = r, this.query = P2(this.pattern, this.options);
  }
  static condition(r, s) {
    return s.useExtendedSearch;
  }
  searchIn(r) {
    const s = this.query;
    if (!s)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: i, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    r = u ? r : r.toLowerCase(), r = c ? fl(r) : r;
    let f = 0, m = [], p = 0;
    for (let _ = 0, g = s.length; _ < g; _ += 1) {
      const E = s[_];
      m.length = 0, f = 0;
      for (let y = 0, b = E.length; y < b; y += 1) {
        const h = E[y], { isMatch: C, indices: A, score: R } = h.search(r);
        if (C) {
          if (f += 1, p += R, i) {
            const x = h.constructor.type;
            I2.has(x) ? m = [...m, ...A] : m.push(A);
          }
        } else {
          p = 0, f = 0, m.length = 0;
          break;
        }
      }
      if (f) {
        let y = {
          isMatch: !0,
          score: p / f
        };
        return i && (y.indices = m), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const vf = [];
function U2(...n) {
  vf.push(...n);
}
function yf(n, r) {
  for (let s = 0, i = vf.length; s < i; s += 1) {
    let u = vf[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new W0(n, r);
}
const hl = {
  AND: "$and",
  OR: "$or"
}, _f = {
  PATH: "$path",
  PATTERN: "$val"
}, bf = (n) => !!(n[hl.AND] || n[hl.OR]), H2 = (n) => !!n[_f.PATH], q2 = (n) => !Sr(n) && F0(n) && !bf(n), cv = (n) => ({
  [hl.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function ny(n, r, { auto: s = !0 } = {}) {
  const i = (u) => {
    let c = Object.keys(u);
    const f = H2(u);
    if (!f && c.length > 1 && !bf(u))
      return i(cv(u));
    if (q2(u)) {
      const p = f ? u[_f.PATH] : c[0], _ = f ? u[_f.PATTERN] : u[p];
      if (!Qn(_))
        throw new Error(h2(p));
      const g = {
        keyId: mf(p),
        pattern: _
      };
      return s && (g.searcher = yf(_, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const _ = u[p];
      Sr(_) && _.forEach((g) => {
        m.children.push(i(g));
      });
    }), m;
  };
  return bf(n) || (n = cv(n)), i(n);
}
function Z2(n, { ignoreFieldNorm: r = Te.ignoreFieldNorm }) {
  n.forEach((s) => {
    let i = 1;
    s.matches.forEach(({ key: u, norm: c, score: f }) => {
      const m = u ? u.weight : null;
      i *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = i;
  });
}
function G2(n, r) {
  const s = n.matches;
  r.matches = [], yn(s) && s.forEach((i) => {
    if (!yn(i.indices) || !i.indices.length)
      return;
    const { indices: u, value: c } = i;
    let f = {
      indices: u,
      value: c
    };
    i.key && (f.key = i.key.src), i.idx > -1 && (f.refIndex = i.idx), r.matches.push(f);
  });
}
function V2(n, r) {
  r.score = n.score;
}
function Y2(n, r, {
  includeMatches: s = Te.includeMatches,
  includeScore: i = Te.includeScore
} = {}) {
  const u = [];
  return s && u.push(G2), i && u.push(V2), n.map((c) => {
    const { idx: f } = c, m = {
      item: r[f],
      refIndex: f
    };
    return u.length && u.forEach((p) => {
      p(c, m);
    }), m;
  });
}
class zi {
  constructor(r, s = {}, i) {
    this.options = { ...Te, ...s }, this.options.useExtendedSearch, this._keyStore = new v2(this.options.keys), this.setCollection(r, i);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof If))
      throw new Error(f2);
    this._myIndex = s || J0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    yn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let i = 0, u = this._docs.length; i < u; i += 1) {
      const c = this._docs[i];
      r(c, i) && (this.removeAt(i), i -= 1, u -= 1, s.push(c));
    }
    return s;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: s = -1 } = {}) {
    const {
      includeMatches: i,
      includeScore: u,
      shouldSort: c,
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Qn(r) ? Qn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return Z2(p, { ignoreFieldNorm: m }), c && p.sort(f), X0(s) && s > -1 && (p = p.slice(0, s)), Y2(p, this._docs, {
      includeMatches: i,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = yf(r, this.options), { records: i } = this._myIndex, u = [];
    return i.forEach(({ v: c, i: f, n: m }) => {
      if (!yn(c))
        return;
      const { isMatch: p, score: _, indices: g } = s.searchIn(c);
      p && u.push({
        item: c,
        idx: f,
        matches: [{ score: _, value: c, norm: m, indices: g }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = ny(r, this.options), i = (m, p, _) => {
      if (!m.children) {
        const { keyId: E, searcher: y } = m, b = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(p, E),
          searcher: y
        });
        return b && b.length ? [
          {
            idx: _,
            item: p,
            matches: b
          }
        ] : [];
      }
      const g = [];
      for (let E = 0, y = m.children.length; E < y; E += 1) {
        const b = m.children[E], h = i(b, p, _);
        if (h.length)
          g.push(...h);
        else if (m.operator === hl.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (yn(m)) {
        let _ = i(s, m, p);
        _.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), _.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = yf(r, this.options), { keys: i, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!yn(f))
        return;
      let p = [];
      i.forEach((_, g) => {
        p.push(
          ...this._findMatches({
            key: _,
            value: f[g],
            searcher: s
          })
        );
      }), p.length && c.push({
        idx: m,
        item: f,
        matches: p
      });
    }), c;
  }
  _findMatches({ key: r, value: s, searcher: i }) {
    if (!yn(s))
      return [];
    let u = [];
    if (Sr(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!yn(c))
          return;
        const { isMatch: p, score: _, indices: g } = i.searchIn(c);
        p && u.push({
          score: _,
          key: r,
          value: c,
          idx: f,
          norm: m,
          indices: g
        });
      });
    else {
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: _ } = i.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: _ });
    }
    return u;
  }
}
zi.version = "7.1.0";
zi.createIndex = J0;
zi.parseIndex = k2;
zi.config = Te;
zi.parseQuery = ny;
U2(B2);
var $2 = Object.defineProperty, X2 = (n, r, s) => r in n ? $2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, F2 = (n, r, s) => X2(n, r + "", s);
let Q2 = class {
  constructor() {
    F2(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const i = this.requestMap.get(r);
    if (i) {
      if (i.abortController)
        try {
          i.abortController.abort();
        } catch {
        }
      (s = i.options) != null && s.onFinish && await i.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var i;
    const u = SillyTavern.getContext(), c = u.uuidv4(), f = ((i = r?.custom) == null ? void 0 : i.stream) ?? !1;
    if (this.requestMap.set(c, {
      abortController: s?.abortController,
      isStream: f,
      options: s
    }), f)
      try {
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(c);
        let p;
        for await (const _ of m())
          p = _, s != null && s.onEntry && await s.onEntry(c, _);
        s != null && s.onFinish && await s.onFinish(c, p);
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    else
      try {
        s != null && s.onStart && await s.onStart(c);
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(c) && (s != null && s.onEntry && await s.onEntry(c, m), s != null && s.onFinish && await s.onFinish(c, m));
      } catch (m) {
        s != null && s.onFinish && await s.onFinish(c, void 0, m);
      } finally {
        this.requestMap.delete(c);
      }
    return c;
  }
  getActiveRequest(r) {
    var s;
    return (s = this.requestMap.get(r)) == null ? void 0 : s.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [s, i] of this.requestMap)
      r.set(s, i.abortController);
    return r;
  }
};
async function K2(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Se(n, r, { escapeHtml: s = !0 } = {}) {
  await K2("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function Xd(n) {
  return A1(n);
}
function dv(n, r) {
  return C1(n, r);
}
function bu(n, r, s) {
  return k1(n, r, s);
}
function J2(n, r, s) {
  return L1(n, r, s);
}
function W2(n, r) {
  return P1(n, r);
}
function e3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return E1(n, { customStoryString: r, customInstructSettings: s });
}
function Ea(n) {
  return Z1(n);
}
function t3() {
  return {
    prompt: Ms[Rs.prompt],
    interval: Ms[Rs.interval],
    position: Ms[Rs.position],
    depth: Ms[Rs.depth],
    role: Ms[Rs.role]
  };
}
function n3(n, r) {
  return V1(n, r);
}
function r3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: i,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: f,
  type: m,
  quietPrompt: p,
  quietImage: _,
  extensionPrompts: g,
  cyclePrompt: E,
  systemPromptOverride: y,
  jailbreakPromptOverride: b,
  personaDescription: h,
  messages: C,
  messageExamples: A
}, R) {
  return G1(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: i,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: f,
      type: m,
      quietPrompt: p,
      quietImage: _,
      cyclePrompt: E,
      systemPromptOverride: y,
      jailbreakPromptOverride: b,
      personaDescription: h,
      extensionPrompts: g,
      messages: C,
      messageExamples: A
    },
    R
  );
}
function a3(n) {
  return B1(n);
}
function i3(n) {
  return U1(n);
}
function s3(n, r, {
  characterOverride: s,
  isMarkdown: i,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return $1(n, r, { characterOverride: s, isMarkdown: i, isPrompt: u, isEdit: c, depth: f });
}
function o3(n, r, { characterOverride: s = null } = {}) {
  return Y1(n, r, { characterOverride: s });
}
async function u3(n, r) {
  return await I1(n, r);
}
function fv(n, {
  wiFormat: r
} = {}) {
  return H1(n, { wiFormat: r });
}
function zs(n) {
  return q1(n);
}
function ry(n, {
  manualAvatarKey: r
} = {}) {
  return X1(n, { manualAvatarKey: r });
}
function Bf(n, r) {
  return N1(n, r);
}
class l3 {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const s = Math.ceil(r.length / 4);
    return new Array(s).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var c3 = Object.defineProperty, d3 = (n, r, s) => r in n ? c3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, Su = (n, r, s) => d3(n, typeof r != "symbol" ? r + "" : r, s);
class f3 {
  constructor(r) {
    Su(this, "messages", []), Su(this, "tokenizer"), Su(this, "maxContext"), Su(this, "currentTokenCount", 0), this.tokenizer = new l3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, i;
    return r.content ? ((i = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : i.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += s, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const s = this.getTokenCount(r);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += s, !0);
  }
  addMany(r) {
    const s = r.filter((m) => m.content), i = s.map((m) => this.getTokenCount(m)), u = i.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], _ = i[m];
      if (this.currentTokenCount + c + _ <= this.maxContext)
        f.unshift(p), c += _;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += c), f.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const i = this.getTokenCount(s);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += i, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function ay(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: i,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: _,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var y, b, h, C, A, R, x, L, l, S, w, k, O, z;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const j = SillyTavern.getContext();
  let { description: P, personality: Z, persona: X, scenario: G, mesExamples: K, system: M, jailbreak: B } = p ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : j.getCharacterCardFields({
    chid: r
  });
  const J = n === "textgenerationwebui" ? (y = j.getPresetManager("instruct")) == null ? void 0 : y.getCompletionPresetByName(i) : void 0, ae = !!(J != null && J.enabled);
  let I = dv(K, ae);
  function $() {
    var ve, ye;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return Xd();
    if (typeof f == "number")
      return f;
    let qe;
    if (n === "textgenerationwebui") {
      const Ze = (ve = j.getPresetManager("textgenerationwebui")) == null ? void 0 : ve.getCompletionPresetByName(s);
      qe = Ze?.max_length;
    } else {
      const Ze = (ye = j.getPresetManager("openai")) == null ? void 0 : ye.getCompletionPresetByName(s);
      qe = Ze?.openai_max_context;
    }
    return typeof qe == "number" ? qe : Xd();
  }
  let ce = [];
  const Y = $();
  if (Y <= 0)
    return { result: [], warnings: ce };
  const H = new f3(Y), te = j.ToolManager.isToolCallingSupported(), ne = E?.start ?? 0, ue = E != null && E.end ? E.end + 1 : void 0;
  let re = ne === -1 && ue === 0 ? [] : j.chat.slice(ne, ue).filter((ve) => {
    var ye;
    return !ve.is_system || te && Array.isArray((ye = ve.extra) == null ? void 0 : ye.tool_invocations);
  });
  re = await Promise.all(
    re.map(async (ve, ye) => {
      var qe, Ze;
      let tt = ve.mes, qn = ve.is_user ? Vg.USER_INPUT : Vg.AI_OUTPUT, jn = { isPrompt: !0, depth: re.length - ye - 1 }, mt = s3(tt, qn, jn);
      return mt = await u3(ve, mt), (qe = ve?.extra) != null && qe.append_title && (Ze = ve?.extra) != null && Ze.title && (mt = `${mt}

${ve.extra.title}`), {
        ...ve,
        mes: mt,
        index: ye
      };
    })
  );
  const he = re.map((ve) => O1 ? `${ve.name}: ${ve.mes}` : ve.mes).reverse(), { worldInfoString: Re, worldInfoBefore: be, worldInfoAfter: me, worldInfoExamples: pe, worldInfoDepth: je, anBefore: Ve, anAfter: We } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await j.getWorldInfoPrompt(he, Y, !1);
  for (const ve of pe) {
    const ye = ve.content;
    if (ye.length === 0)
      continue;
    const qe = bu(ye, Sa, $r), Ze = dv(qe, ae);
    ve.position === M1.before ? I.unshift(...Ze) : I.push(...Ze);
  }
  function Oe() {
    const ve = [];
    for (let ye = re.length - 1; ye >= 0; ye--) {
      const qe = re[ye], Ze = qe.name === "System" && !qe.is_user ? "system" : qe.is_user ? "user" : "assistant";
      ve.unshift({
        role: Ze,
        content: m && Ze != "system" ? `${qe.name}: ${qe.mes}` : qe.mes,
        source: qe
      });
    }
    H.addMany(ve);
  }
  if (n === "textgenerationwebui") {
    const ve = [...I];
    I && (I = J2(I, Sa, $r));
    const ye = (b = j.getPresetManager("sysprompt")) == null ? void 0 : b.getCompletionPresetByName(c);
    ye && (M = j.powerUserSettings.prefer_character_prompt && M ? M : bu(ye.content, Sa, $r), M = ae ? W2(
      j.substituteParams(M, Sa, $r, ye.content),
      J
    ) : M);
    const qe = {
      description: P,
      personality: Z,
      persona: j.powerUserSettings.persona_description_position == Zg.IN_PROMPT ? X : "",
      scenario: G,
      system: M,
      char: $r,
      user: Sa,
      wiBefore: be,
      wiAfter: me,
      loreBefore: be,
      loreAfter: me,
      mesExamples: I.join(""),
      mesExamplesRaw: ve.join("")
    }, Ze = (h = j.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let tt = e3(qe, {
      customInstructSettings: J,
      customStoryString: Ze?.story_string
    });
    tt && H.add({ role: "system", content: tt, ignoreInstruct: !0 }), Oe();
  } else {
    let ve = function(Vt) {
      const Qt = bn.find((za) => za.identifier === Vt);
      if (Qt)
        return Qt;
      const oo = tt.prompts.find((za) => za.identifier === Vt);
      if (oo)
        return oo;
    }, ye = a3(re), qe = i3(I);
    async function Ze() {
      let [Vt, Qt] = await r3(
        {
          name2: $r,
          charDescription: P,
          charPersonality: Z,
          Scenario: G,
          worldInfoBefore: be,
          worldInfoAfter: me,
          extensionPrompts: j.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: M,
          jailbreakPromptOverride: B,
          personaDescription: X,
          messages: ye,
          messageExamples: qe
        },
        !1
      );
      H.addMany(Vt);
    }
    if (!s)
      return ce.push("No preset name provided. Using default preset."), await Ze(), { result: H.getMessages(), warnings: ce };
    const tt = (C = j.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!tt)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ce.push(`Preset not found: ${s}. Using current preset.`), Ze(), { result: H.getMessages(), warnings: ce };
    let qn = (A = tt.prompt_order) == null ? void 0 : A.find((Vt) => Vt.character_id === sn);
    if (!qn && tt.prompt_order && tt.prompt_order.length > 0 && (qn = tt.prompt_order[0]), !qn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ce.push(`No prompt order found for preset: ${s}. Using current preset.`), Ze(), { result: H.getMessages(), warnings: ce };
    const jn = G && tt.scenario_format ? j.substituteParams(tt.scenario_format) : "", mt = Z && tt.personality_format ? j.substituteParams(tt.personality_format) : "", Zn = j.substituteParams(tt.group_nudge_prompt), Gt = tt.impersonation_prompt ? j.substituteParams(tt.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: fv(be, { wiFormat: tt.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: fv(me, { wiFormat: tt.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: P, identifier: "charDescription" },
      { role: "system", content: mt, identifier: "charPersonality" },
      { role: "system", content: jn, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: Gt, identifier: "impersonate" },
      { role: "system", content: Zn, identifier: "groupNudge" }
    );
    const na = j.extensionPrompts["1_memory"];
    na && na.value && bn.push({
      role: Ea(na.role),
      content: na.value,
      identifier: "summary",
      position: zs(na.position)
    });
    const ra = j.extensionPrompts["2_floating_prompt"];
    !_ && ra && ra.value && bn.push({
      role: Ea(ra.role),
      content: ra.value,
      identifier: "authorsNote",
      position: zs(ra.position)
    });
    const tr = j.extensionPrompts["3_vectors"];
    tr && tr.value && bn.push({
      role: "system",
      content: tr.value,
      identifier: "vectorsMemory",
      position: zs(tr.position)
    });
    const Gn = j.extensionPrompts["4_vectors_data_bank"];
    Gn && Gn.value && bn.push({
      role: Ea(Gn.role),
      content: Gn.value,
      identifier: "vectorsDataBank",
      position: zs(Gn.position)
    });
    const Sn = j.extensionPrompts.chromadb;
    Sn && Sn.value && bn.push({
      role: "system",
      content: Sn.value,
      identifier: "smartContext",
      position: zs(Sn.position)
    }), !p && j.powerUserSettings.persona_description && j.powerUserSettings.persona_description_position === Zg.IN_PROMPT && bn.push({
      role: "system",
      content: j.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), qn.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Qt = ve(Vt.identifier);
      if (Qt && Qt.content) {
        H.add({
          role: Qt.role ?? "system",
          content: j.substituteParams(Qt.content)
        });
        return;
      }
      Vt.identifier === "chatHistory" && Oe();
    });
  }
  const _t = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ve in j.extensionPrompts)
    if (Object.hasOwn(j.extensionPrompts, ve)) {
      const ye = j.extensionPrompts[ve];
      if (_t.includes(ve) || !j.extensionPrompts[ve].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(ye.position) || typeof ye.filter == "function" && !await ye.filter()) continue;
      const qe = {
        role: Ea(ye.role) ?? "system",
        content: ye.value
      };
      if (ye.position === wa.BEFORE_PROMPT)
        H.insert(ye.depth, qe);
      else if (ye.position === wa.IN_PROMPT) {
        const Ze = H.getMessages();
        H.insert(Ze.length - ye.depth, qe);
      }
    }
  for (const ve of je) {
    const ye = H.getMessages();
    H.insert(ye.length - ve.depth, {
      role: Ea(ve.role),
      content: ve.entries.join(`
`)
    });
  }
  if (!p) {
    const ve = n3(Ft, Number(sn));
    if (Ft && Array.isArray(ve) && ve.length > 0)
      ve.filter((ye) => ye.text).forEach((ye, qe) => {
        const Ze = H.getMessages();
        H.insert(Ze.length - ye.depth, { role: ye.role, content: ye.text });
      });
    else {
      const ye = bu(
        (S = (l = (L = (x = (R = j.characters[sn]) == null ? void 0 : R.data) == null ? void 0 : x.extensions) == null ? void 0 : L.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : S.trim(),
        Sa,
        $r
      ) || "";
      if (ye) {
        const qe = x1, Ze = ((z = (O = (k = (w = j.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : O.depth_prompt) == null ? void 0 : z.role) ?? T1, tt = H.getMessages();
        H.insert(tt.length - qe, {
          role: Ea(Ze),
          content: ye
        });
      }
    }
  }
  let at = -1;
  if (!_) {
    const ve = t3();
    if (ve.prompt) {
      ve.prompt = bu(ve.prompt, Sa, $r);
      const ye = { role: Ea(ve.role), content: ve.prompt };
      switch (ve.position) {
        case wa.IN_PROMPT:
          H.insert(1, ye), at = 1;
          break;
        case wa.IN_CHAT:
          at = H.getMessages().length - ve.depth, H.insert(at, ye);
          break;
        case wa.BEFORE_PROMPT:
          H.addFront(ye), at = 0;
          break;
      }
    }
  }
  return at >= 0 && (Ve.length > 0 && (H.insert(at, { role: "system", content: Ve.join(`
`) }), at++), We.length > 0 && H.insert(at + 1, { role: "system", content: We.join(`
`) })), { result: H.getMessages(), warnings: ce };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function hv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    r && (i = i.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), s.push.apply(s, i);
  }
  return s;
}
function Wn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? hv(Object(s), !0).forEach(function(i) {
      h3(n, i, s[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : hv(Object(s)).forEach(function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(s, i));
    });
  }
  return n;
}
function al(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? al = function(r) {
    return typeof r;
  } : al = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, al(n);
}
function h3(n, r, s) {
  return r in n ? Object.defineProperty(n, r, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[r] = s, n;
}
function wr() {
  return wr = Object.assign || function(n) {
    for (var r = 1; r < arguments.length; r++) {
      var s = arguments[r];
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }
    return n;
  }, wr.apply(this, arguments);
}
function p3(n, r) {
  if (n == null) return {};
  var s = {}, i = Object.keys(n), u, c;
  for (c = 0; c < i.length; c++)
    u = i[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function m3(n, r) {
  if (n == null) return {};
  var s = p3(n, r), i, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      i = c[u], !(r.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(n, i) && (s[i] = n[i]);
  }
  return s;
}
var g3 = "1.15.6";
function _r(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Er = _r(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), no = _r(/Edge/i), pv = _r(/firefox/i), Fs = _r(/safari/i) && !_r(/chrome/i) && !_r(/android/i), Uf = _r(/iP(ad|od|hone)/i), iy = _r(/chrome/i) && _r(/android/i), sy = {
  capture: !1,
  passive: !1
};
function He(n, r, s) {
  n.addEventListener(r, s, !Er && sy);
}
function Ue(n, r, s) {
  n.removeEventListener(r, s, !Er && sy);
}
function pl(n, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(r);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(r);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function oy(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Un(n, r, s, i) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && pl(n, r) : pl(n, r)) || i && n === s)
        return n;
      if (n === s) break;
    } while (n = oy(n));
  }
  return null;
}
var mv = /\s+/g;
function gn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var i = (" " + n.className + " ").replace(mv, " ").replace(" " + r + " ", " ");
      n.className = (i + (s ? " " + r : "")).replace(mv, " ");
    }
}
function ke(n, r, s) {
  var i = n && n.style;
  if (i) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (s = n.currentStyle), r === void 0 ? s : s[r];
    !(r in i) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), i[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function Ri(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var i = ke(n, "transform");
      i && i !== "none" && (s = i + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function uy(n, r, s) {
  if (n) {
    var i = n.getElementsByTagName(r), u = 0, c = i.length;
    if (s)
      for (; u < c; u++)
        s(i[u], u);
    return i;
  }
  return [];
}
function Kn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function Et(n, r, s, i, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, _, g, E;
    if (n !== window && n.parentNode && n !== Kn() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, _ = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, _ = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !Er))
      do
        if (u && u.getBoundingClientRect && (ke(u, "transform") !== "none" || s && ke(u, "position") !== "static")) {
          var y = u.getBoundingClientRect();
          f -= y.top + parseInt(ke(u, "border-top-width")), m -= y.left + parseInt(ke(u, "border-left-width")), p = f + c.height, _ = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (i && n !== window) {
      var b = Ri(u || n), h = b && b.a, C = b && b.d;
      b && (f /= C, m /= h, E /= h, g /= C, p = f + g, _ = m + E);
    }
    return {
      top: f,
      left: m,
      bottom: p,
      right: _,
      width: E,
      height: g
    };
  }
}
function gv(n, r, s) {
  for (var i = Jr(n, !0), u = Et(n)[r]; i; ) {
    var c = Et(i)[s], f = void 0;
    if (f = u >= c, !f) return i;
    if (i === Kn()) break;
    i = Jr(i, !1);
  }
  return !1;
}
function Di(n, r, s, i) {
  for (var u = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Ae.ghost && (i || f[c] !== Ae.dragged) && Un(f[c], s.draggable, n, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function Hf(n, r) {
  for (var s = n.lastElementChild; s && (s === Ae.ghost || ke(s, "display") === "none" || r && !pl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Mn(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Ae.clone && (!r || pl(n, r)) && s++;
  return s;
}
function vv(n) {
  var r = 0, s = 0, i = Kn();
  if (n)
    do {
      var u = Ri(n), c = u.a, f = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== i && (n = n.parentNode));
  return [r, s];
}
function v3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var i in r)
        if (r.hasOwnProperty(i) && r[i] === n[s][i]) return Number(s);
    }
  return -1;
}
function Jr(n, r) {
  if (!n || !n.getBoundingClientRect) return Kn();
  var s = n, i = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = ke(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Kn();
        if (i || r) return s;
        i = !0;
      }
    }
  while (s = s.parentNode);
  return Kn();
}
function y3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function Fd(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Qs;
function ly(n, r) {
  return function() {
    if (!Qs) {
      var s = arguments, i = this;
      s.length === 1 ? n.call(i, s[0]) : n.apply(i, s), Qs = setTimeout(function() {
        Qs = void 0;
      }, r);
    }
  };
}
function _3() {
  clearTimeout(Qs), Qs = void 0;
}
function cy(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function dy(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function fy(n, r, s) {
  var i = {};
  return Array.from(n.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Un(u, r.draggable, n, !1) || u.animated || u === s)) {
      var _ = Et(u);
      i.left = Math.min((c = i.left) !== null && c !== void 0 ? c : 1 / 0, _.left), i.top = Math.min((f = i.top) !== null && f !== void 0 ? f : 1 / 0, _.top), i.right = Math.max((m = i.right) !== null && m !== void 0 ? m : -1 / 0, _.right), i.bottom = Math.max((p = i.bottom) !== null && p !== void 0 ? p : -1 / 0, _.bottom);
    }
  }), i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function b3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(u) {
          if (!(ke(u, "display") === "none" || u === Ae.ghost)) {
            n.push({
              target: u,
              rect: Et(u)
            });
            var c = Wn({}, n[n.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = Ri(u, !0);
              f && (c.top -= f.f, c.left -= f.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(i) {
      n.push(i);
    },
    removeAnimationState: function(i) {
      n.splice(v3(n, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof i == "function" && i();
        return;
      }
      var c = !1, f = 0;
      n.forEach(function(m) {
        var p = 0, _ = m.target, g = _.fromRect, E = Et(_), y = _.prevFromRect, b = _.prevToRect, h = m.rect, C = Ri(_, !0);
        C && (E.top -= C.f, E.left -= C.e), _.toRect = E, _.thisAnimationDuration && Fd(y, E) && !Fd(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = w3(h, y, b, u.options)), Fd(E, g) || (_.prevFromRect = g, _.prevToRect = E, p || (p = u.options.animation), u.animate(_, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(_.animationResetTimer), _.animationResetTimer = setTimeout(function() {
          _.animationTime = 0, _.prevFromRect = null, _.fromRect = null, _.prevToRect = null, _.thisAnimationDuration = null;
        }, p), _.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof i == "function" && i();
      }, f) : typeof i == "function" && i(), n = [];
    },
    animate: function(i, u, c, f) {
      if (f) {
        ke(i, "transition", ""), ke(i, "transform", "");
        var m = Ri(this.el), p = m && m.a, _ = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (_ || 1);
        i.animatingX = !!g, i.animatingY = !!E, ke(i, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = S3(i), ke(i, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), ke(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          ke(i, "transition", ""), ke(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, f);
      }
    }
  };
}
function S3(n) {
  return n.offsetWidth;
}
function w3(n, r, s, i) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * i.animation;
}
var wi = [], Qd = {
  initializeByDefault: !0
}, ro = {
  mount: function(r) {
    for (var s in Qd)
      Qd.hasOwnProperty(s) && !(s in r) && (r[s] = Qd[s]);
    wi.forEach(function(i) {
      if (i.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, s, i) {
    var u = this;
    this.eventCanceled = !1, i.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    wi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](Wn({
        sortable: s
      }, i)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](Wn({
        sortable: s
      }, i)));
    });
  },
  initializePlugins: function(r, s, i, u) {
    wi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var _ = new m(r, s, r.options);
        _.sortable = r, _.options = r.options, r[p] = _, wr(i, _.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var f = this.modifyOption(r, c, r.options[c]);
        typeof f < "u" && (r.options[c] = f);
      }
  },
  getEventProperties: function(r, s) {
    var i = {};
    return wi.forEach(function(u) {
      typeof u.eventProperties == "function" && wr(i, u.eventProperties.call(s[u.pluginName], r));
    }), i;
  },
  modifyOption: function(r, s, i) {
    var u;
    return wi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], i));
    }), u;
  }
};
function E3(n) {
  var r = n.sortable, s = n.rootEl, i = n.name, u = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, _ = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, y = n.originalEvent, b = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, A = r.options, R = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Er && !no ? C = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(i, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = _, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = y, C.pullMode = b ? b.lastPutMode : void 0;
    var x = Wn(Wn({}, h), ro.getEventProperties(i, r));
    for (var L in x)
      C[L] = x[L];
    s && s.dispatchEvent(C), A[R] && A[R].call(r, C);
  }
}
var C3 = ["evt"], nn = function(r, s) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = i.evt, c = m3(i, C3);
  ro.pluginEvent.bind(Ae)(r, s, Wn({
    dragEl: fe,
    parentEl: pt,
    ghostEl: Me,
    rootEl: st,
    nextEl: Aa,
    lastDownEl: il,
    cloneEl: ct,
    cloneHidden: Kr,
    dragStarted: Gs,
    putSortable: Lt,
    activeSortable: Ae.active,
    originalEvent: u,
    oldIndex: Ni,
    oldDraggableIndex: Ks,
    newIndex: vn,
    newDraggableIndex: Qr,
    hideGhostForTarget: gy,
    unhideGhostForTarget: vy,
    cloneNowHidden: function() {
      Kr = !0;
    },
    cloneNowShown: function() {
      Kr = !1;
    },
    dispatchSortableEvent: function(m) {
      $t({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function $t(n) {
  E3(Wn({
    putSortable: Lt,
    cloneEl: ct,
    targetEl: fe,
    rootEl: st,
    oldIndex: Ni,
    oldDraggableIndex: Ks,
    newIndex: vn,
    newDraggableIndex: Qr
  }, n));
}
var fe, pt, Me, st, Aa, il, ct, Kr, Ni, vn, Ks, Qr, wu, Lt, xi = !1, ml = !1, gl = [], Ca, Pn, Kd, Jd, yv, _v, Gs, Ei, Js, Ws = !1, Eu = !1, sl, qt, Wd = [], Sf = !1, vl = [], Cl = typeof document < "u", Cu = Uf, bv = no || Er ? "cssFloat" : "float", k3 = Cl && !iy && !Uf && "draggable" in document.createElement("div"), hy = (function() {
  if (Cl) {
    if (Er)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), py = function(r, s) {
  var i = ke(r), u = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), c = Di(r, 0, s), f = Di(r, 1, s), m = c && ke(c), p = f && ke(f), _ = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Et(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Et(f).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || _ >= u && i[bv] === "none" || f && i[bv] === "none" && _ + g > u) ? "vertical" : "horizontal";
}, A3 = function(r, s, i) {
  var u = i ? r.left : r.top, c = i ? r.right : r.bottom, f = i ? r.width : r.height, m = i ? s.left : s.top, p = i ? s.right : s.bottom, _ = i ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + _ / 2;
}, T3 = function(r, s) {
  var i;
  return gl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || Hf(u))) {
      var f = Et(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return i = u;
    }
  }), i;
}, my = function(r) {
  function s(c, f) {
    return function(m, p, _, g) {
      var E = m.options.group.name && p.options.group.name && m.options.group.name === p.options.group.name;
      if (c == null && (f || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (f && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, p, _, g), f)(m, p, _, g);
      var y = (f ? m : p).options.group.name;
      return c === !0 || typeof c == "string" && c === y || c.join && c.indexOf(y) > -1;
    };
  }
  var i = {}, u = r.group;
  (!u || al(u) != "object") && (u = {
    name: u
  }), i.name = u.name, i.checkPull = s(u.pull, !0), i.checkPut = s(u.put), i.revertClone = u.revertClone, r.group = i;
}, gy = function() {
  !hy && Me && ke(Me, "display", "none");
}, vy = function() {
  !hy && Me && ke(Me, "display", "");
};
Cl && !iy && document.addEventListener("click", function(n) {
  if (ml)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), ml = !1, !1;
}, !0);
var ka = function(r) {
  if (fe) {
    r = r.touches ? r.touches[0] : r;
    var s = T3(r.clientX, r.clientY);
    if (s) {
      var i = {};
      for (var u in r)
        r.hasOwnProperty(u) && (i[u] = r[u]);
      i.target = i.rootEl = s, i.preventDefault = void 0, i.stopPropagation = void 0, s[an]._onDragOver(i);
    }
  }
}, x3 = function(r) {
  fe && fe.parentNode[an]._isOutsideThisEl(r.target);
};
function Ae(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = wr({}, r), n[an] = this;
  var s = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return py(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, m) {
      f.setData("Text", m.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Ae.supportPointer !== !1 && "PointerEvent" in window && (!Fs || Uf),
    emptyInsertThreshold: 5
  };
  ro.initializePlugins(this, n, s);
  for (var i in s)
    !(i in r) && (r[i] = s[i]);
  my(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : k3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? He(n, "pointerdown", this._onTapStart) : (He(n, "mousedown", this._onTapStart), He(n, "touchstart", this._onTapStart)), this.nativeDraggable && (He(n, "dragover", this), He(n, "dragenter", this)), gl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, b3());
}
Ae.prototype = /** @lends Sortable.prototype */
{
  constructor: Ae,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ei = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, fe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, i = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, _ = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (L3(i), !fe && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !_.isContentEditable && !(!this.nativeDraggable && Fs && p && p.tagName.toUpperCase() === "SELECT") && (p = Un(p, u.draggable, i, !1), !(p && p.animated) && il !== p)) {
        if (Ni = Mn(p), Ks = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            $t({
              sortable: s,
              rootEl: _,
              name: "filter",
              targetEl: p,
              toEl: i,
              fromEl: i
            }), nn("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Un(_, E.trim(), i, !1), E)
            return $t({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: i,
              toEl: i
            }), nn("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !Un(_, u.handle, i, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, i) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (i && !fe && i.parentNode === c) {
      var _ = Et(i);
      if (st = c, fe = i, pt = fe.parentNode, Aa = fe.nextSibling, il = i, wu = f.group, Ae.dragged = fe, Ca = {
        target: fe,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, yv = Ca.clientX - _.left, _v = Ca.clientY - _.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, fe.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Ae.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !pv && u.nativeDraggable && (fe.draggable = !0), u._triggerDragStart(r, s), $t({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), gn(fe, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        uy(fe, g.trim(), ef);
      }), He(m, "dragover", ka), He(m, "mousemove", ka), He(m, "touchmove", ka), f.supportPointer ? (He(m, "pointerup", u._onDrop), !this.nativeDraggable && He(m, "pointercancel", u._onDrop)) : (He(m, "mouseup", u._onDrop), He(m, "touchend", u._onDrop), He(m, "touchcancel", u._onDrop)), pv && this.nativeDraggable && (this.options.touchStartThreshold = 4, fe.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(no || Er))) {
        if (Ae.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (He(m, "pointerup", u._disableDelayedDrag), He(m, "pointercancel", u._disableDelayedDrag)) : (He(m, "mouseup", u._disableDelayedDrag), He(m, "touchend", u._disableDelayedDrag), He(m, "touchcancel", u._disableDelayedDrag)), He(m, "mousemove", u._delayedDragTouchMoveHandler), He(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && He(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    fe && ef(fe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._disableDelayedDrag), Ue(r, "touchend", this._disableDelayedDrag), Ue(r, "touchcancel", this._disableDelayedDrag), Ue(r, "pointerup", this._disableDelayedDrag), Ue(r, "pointercancel", this._disableDelayedDrag), Ue(r, "mousemove", this._delayedDragTouchMoveHandler), Ue(r, "touchmove", this._delayedDragTouchMoveHandler), Ue(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? He(document, "pointermove", this._onTouchMove) : s ? He(document, "touchmove", this._onTouchMove) : He(document, "mousemove", this._onTouchMove) : (He(fe, "dragend", this), He(st, "dragstart", this._onDragStart));
    try {
      document.selection ? ol(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (xi = !1, st && fe) {
      nn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && He(document, "dragover", x3);
      var i = this.options;
      !r && gn(fe, i.dragClass, !1), gn(fe, i.ghostClass, !0), Ae.active = this, r && this._appendGhost(), $t({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, gy();
      for (var r = document.elementFromPoint(Pn.clientX, Pn.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), r !== s); )
        s = r;
      if (fe.parentNode[an]._isOutsideThisEl(r), s)
        do {
          if (s[an]) {
            var i = void 0;
            if (i = s[an]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: r,
              rootEl: s
            }), i && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = oy(s));
      vy();
    }
  },
  _onTouchMove: function(r) {
    if (Ca) {
      var s = this.options, i = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = Me && Ri(Me, !0), m = Me && f && f.a, p = Me && f && f.d, _ = Cu && qt && vv(qt), g = (c.clientX - Ca.clientX + u.x) / (m || 1) + (_ ? _[0] - Wd[0] : 0) / (m || 1), E = (c.clientY - Ca.clientY + u.y) / (p || 1) + (_ ? _[1] - Wd[1] : 0) / (p || 1);
      if (!Ae.active && !xi) {
        if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i)
          return;
        this._onDragStart(r, !0);
      }
      if (Me) {
        f ? (f.e += g - (Kd || 0), f.f += E - (Jd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var y = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        ke(Me, "webkitTransform", y), ke(Me, "mozTransform", y), ke(Me, "msTransform", y), ke(Me, "transform", y), Kd = g, Jd = E, Pn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Me) {
      var r = this.options.fallbackOnBody ? document.body : st, s = Et(fe, !0, Cu, !0, r), i = this.options;
      if (Cu) {
        for (qt = r; ke(qt, "position") === "static" && ke(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = Kn()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = Kn(), Wd = vv(qt);
      }
      Me = fe.cloneNode(!0), gn(Me, i.ghostClass, !1), gn(Me, i.fallbackClass, !0), gn(Me, i.dragClass, !0), ke(Me, "transition", ""), ke(Me, "transform", ""), ke(Me, "box-sizing", "border-box"), ke(Me, "margin", 0), ke(Me, "top", s.top), ke(Me, "left", s.left), ke(Me, "width", s.width), ke(Me, "height", s.height), ke(Me, "opacity", "0.8"), ke(Me, "position", Cu ? "absolute" : "fixed"), ke(Me, "zIndex", "100000"), ke(Me, "pointerEvents", "none"), Ae.ghost = Me, r.appendChild(Me), ke(Me, "transform-origin", yv / parseInt(Me.style.width) * 100 + "% " + _v / parseInt(Me.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var i = this, u = r.dataTransfer, c = i.options;
    if (nn("dragStart", this, {
      evt: r
    }), Ae.eventCanceled) {
      this._onDrop();
      return;
    }
    nn("setupClone", this), Ae.eventCanceled || (ct = dy(fe), ct.removeAttribute("id"), ct.draggable = !1, ct.style["will-change"] = "", this._hideClone(), gn(ct, this.options.chosenClass, !1), Ae.clone = ct), i.cloneId = ol(function() {
      nn("clone", i), !Ae.eventCanceled && (i.options.removeCloneOnHide || st.insertBefore(ct, fe), i._hideClone(), $t({
        sortable: i,
        name: "clone"
      }));
    }), !s && gn(fe, c.dragClass, !0), s ? (ml = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (Ue(document, "mouseup", i._onDrop), Ue(document, "touchend", i._onDrop), Ue(document, "touchcancel", i._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(i, u, fe)), He(document, "drop", i), ke(fe, "transform", "translateZ(0)")), xi = !0, i._dragStartId = ol(i._dragStarted.bind(i, s, r)), He(document, "selectstart", i), Gs = !0, window.getSelection().removeAllRanges(), Fs && ke(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, i = r.target, u, c, f, m = this.options, p = m.group, _ = Ae.active, g = wu === p, E = m.sort, y = Lt || _, b, h = this, C = !1;
    if (Sf) return;
    function A(J, ae) {
      nn(J, h, Wn({
        evt: r,
        isOwner: g,
        axis: b ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: y,
        target: i,
        completed: x,
        onMove: function($, ce) {
          return ku(st, s, fe, u, $, Et($), r, ce);
        },
        changed: L
      }, ae));
    }
    function R() {
      A("dragOverAnimationCapture"), h.captureAnimationState(), h !== y && y.captureAnimationState();
    }
    function x(J) {
      return A("dragOverCompleted", {
        insertion: J
      }), J && (g ? _._hideClone() : _._showClone(h), h !== y && (gn(fe, Lt ? Lt.options.ghostClass : _.options.ghostClass, !1), gn(fe, m.ghostClass, !0)), Lt !== h && h !== Ae.active ? Lt = h : h === Ae.active && Lt && (Lt = null), y === h && (h._ignoreWhileAnimating = i), h.animateAll(function() {
        A("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (i === fe && !fe.animated || i === s && !i.animated) && (Ei = null), !m.dragoverBubble && !r.rootEl && i !== document && (fe.parentNode[an]._isOutsideThisEl(r.target), !J && ka(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function L() {
      vn = Mn(fe), Qr = Mn(fe, m.draggable), $t({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: vn,
        newDraggableIndex: Qr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), i = Un(i, m.draggable, s, !0), A("dragOver"), Ae.eventCanceled) return C;
    if (fe.contains(r.target) || i.animated && i.animatingX && i.animatingY || h._ignoreWhileAnimating === i)
      return x(!1);
    if (ml = !1, _ && !m.disabled && (g ? E || (f = pt !== st) : Lt === this || (this.lastPutMode = wu.checkPull(this, _, fe, r)) && p.checkPut(this, _, fe, r))) {
      if (b = this._getDirection(r, i) === "vertical", u = Et(fe), A("dragOverValid"), Ae.eventCanceled) return C;
      if (f)
        return pt = st, R(), this._hideClone(), A("revert"), Ae.eventCanceled || (Aa ? st.insertBefore(fe, Aa) : st.appendChild(fe)), x(!0);
      var l = Hf(s, m.draggable);
      if (!l || R3(r, b, this) && !l.animated) {
        if (l === fe)
          return x(!1);
        if (l && s === r.target && (i = l), i && (c = Et(i)), ku(st, s, fe, u, i, c, r, !!i) !== !1)
          return R(), l && l.nextSibling ? s.insertBefore(fe, l.nextSibling) : s.appendChild(fe), pt = s, L(), x(!0);
      } else if (l && M3(r, b, this)) {
        var S = Di(s, 0, m, !0);
        if (S === fe)
          return x(!1);
        if (i = S, c = Et(i), ku(st, s, fe, u, i, c, r, !1) !== !1)
          return R(), s.insertBefore(fe, S), pt = s, L(), x(!0);
      } else if (i.parentNode === s) {
        c = Et(i);
        var w = 0, k, O = fe.parentNode !== s, z = !A3(fe.animated && fe.toRect || u, i.animated && i.toRect || c, b), j = b ? "top" : "left", P = gv(i, "top", "top") || gv(fe, "top", "top"), Z = P ? P.scrollTop : void 0;
        Ei !== i && (k = c[j], Ws = !1, Eu = !z && m.invertSwap || O), w = j3(r, i, c, b, z ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Eu, Ei === i);
        var X;
        if (w !== 0) {
          var G = Mn(fe);
          do
            G -= w, X = pt.children[G];
          while (X && (ke(X, "display") === "none" || X === Me));
        }
        if (w === 0 || X === i)
          return x(!1);
        Ei = i, Js = w;
        var K = i.nextElementSibling, M = !1;
        M = w === 1;
        var B = ku(st, s, fe, u, i, c, r, M);
        if (B !== !1)
          return (B === 1 || B === -1) && (M = B === 1), Sf = !0, setTimeout(O3, 30), R(), M && !K ? s.appendChild(fe) : i.parentNode.insertBefore(fe, M ? K : i), P && cy(P, 0, Z - P.scrollTop), pt = fe.parentNode, k !== void 0 && !Eu && (sl = Math.abs(k - Et(i)[j])), L(), x(!0);
      }
      if (s.contains(fe))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", ka), Ue(document, "mousemove", ka), Ue(document, "touchmove", ka);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ue(r, "mouseup", this._onDrop), Ue(r, "touchend", this._onDrop), Ue(r, "pointerup", this._onDrop), Ue(r, "pointercancel", this._onDrop), Ue(r, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, i = this.options;
    if (vn = Mn(fe), Qr = Mn(fe, i.draggable), nn("drop", this, {
      evt: r
    }), pt = fe && fe.parentNode, vn = Mn(fe), Qr = Mn(fe, i.draggable), Ae.eventCanceled) {
      this._nulling();
      return;
    }
    xi = !1, Eu = !1, Ws = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), wf(this.cloneId), wf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Fs && ke(document.body, "user-select", ""), ke(fe, "transform", ""), r && (Gs && (r.cancelable && r.preventDefault(), !i.dropBubble && r.stopPropagation()), Me && Me.parentNode && Me.parentNode.removeChild(Me), (st === pt || Lt && Lt.lastPutMode !== "clone") && ct && ct.parentNode && ct.parentNode.removeChild(ct), fe && (this.nativeDraggable && Ue(fe, "dragend", this), ef(fe), fe.style["will-change"] = "", Gs && !xi && gn(fe, Lt ? Lt.options.ghostClass : this.options.ghostClass, !1), gn(fe, this.options.chosenClass, !1), $t({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), st !== pt ? (vn >= 0 && ($t({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: st,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), $t({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: st,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Lt && Lt.save()) : vn !== Ni && vn >= 0 && ($t({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), $t({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ae.active && ((vn == null || vn === -1) && (vn = Ni, Qr = Ks), $t({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), st = fe = pt = Me = Aa = ct = il = Kr = Ca = Pn = Gs = vn = Qr = Ni = Ks = Ei = Js = Lt = wu = Ae.dragged = Ae.ghost = Ae.clone = Ae.active = null, vl.forEach(function(r) {
      r.checked = !0;
    }), vl.length = Kd = Jd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        fe && (this._onDragOver(r), N3(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], s, i = this.el.children, u = 0, c = i.length, f = this.options; u < c; u++)
      s = i[u], Un(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || z3(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var i = {}, u = this.el;
    this.toArray().forEach(function(c, f) {
      var m = u.children[f];
      Un(m, this.options.draggable, u, !1) && (i[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      i[c] && (u.removeChild(i[c]), u.appendChild(i[c]));
    }), s && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, s) {
    return Un(r, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, s) {
    var i = this.options;
    if (s === void 0)
      return i[r];
    var u = ro.modifyOption(this, r, s);
    typeof u < "u" ? i[r] = u : i[r] = s, r === "group" && my(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, Ue(r, "mousedown", this._onTapStart), Ue(r, "touchstart", this._onTapStart), Ue(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(r, "dragover", this), Ue(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gl.splice(gl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Kr) {
      if (nn("hideClone", this), Ae.eventCanceled) return;
      ke(ct, "display", "none"), this.options.removeCloneOnHide && ct.parentNode && ct.parentNode.removeChild(ct), Kr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kr) {
      if (nn("showClone", this), Ae.eventCanceled) return;
      fe.parentNode == st && !this.options.group.revertClone ? st.insertBefore(ct, fe) : Aa ? st.insertBefore(ct, Aa) : st.appendChild(ct), this.options.group.revertClone && this.animate(fe, ct), ke(ct, "display", ""), Kr = !1;
    }
  }
};
function N3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function ku(n, r, s, i, u, c, f, m) {
  var p, _ = n[an], g = _.options.onMove, E;
  return window.CustomEvent && !Er && !no ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = i, p.related = u || r, p.relatedRect = c || Et(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(_, p, f)), E;
}
function ef(n) {
  n.draggable = !1;
}
function O3() {
  Sf = !1;
}
function M3(n, r, s) {
  var i = Et(Di(s.el, 0, s.options, !0)), u = fy(s.el, s.options, Me), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < i.top && n.clientX < i.right : n.clientY < u.top - c || n.clientY < i.bottom && n.clientX < i.left;
}
function R3(n, r, s) {
  var i = Et(Hf(s.el, s.options.draggable)), u = fy(s.el, s.options, Me), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > i.bottom && n.clientX > i.left : n.clientY > u.bottom + c || n.clientX > i.right && n.clientY > i.top;
}
function j3(n, r, s, i, u, c, f, m) {
  var p = i ? n.clientY : n.clientX, _ = i ? s.height : s.width, g = i ? s.top : s.left, E = i ? s.bottom : s.right, y = !1;
  if (!f) {
    if (m && sl < _ * u) {
      if (!Ws && (Js === 1 ? p > g + _ * c / 2 : p < E - _ * c / 2) && (Ws = !0), Ws)
        y = !0;
      else if (Js === 1 ? p < g + sl : p > E - sl)
        return -Js;
    } else if (p > g + _ * (1 - u) / 2 && p < E - _ * (1 - u) / 2)
      return D3(r);
  }
  return y = y || f, y && (p < g + _ * c / 2 || p > E - _ * c / 2) ? p > g + _ / 2 ? 1 : -1 : 0;
}
function D3(n) {
  return Mn(fe) < Mn(n) ? 1 : -1;
}
function z3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, i = 0; s--; )
    i += r.charCodeAt(s);
  return i.toString(36);
}
function L3(n) {
  vl.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var i = r[s];
    i.checked && vl.push(i);
  }
}
function ol(n) {
  return setTimeout(n, 0);
}
function wf(n) {
  return clearTimeout(n);
}
Cl && He(document, "touchmove", function(n) {
  (Ae.active || xi) && n.cancelable && n.preventDefault();
});
Ae.utils = {
  on: He,
  off: Ue,
  css: ke,
  find: uy,
  is: function(r, s) {
    return !!Un(r, s, r, !1);
  },
  extend: y3,
  throttle: ly,
  closest: Un,
  toggleClass: gn,
  clone: dy,
  index: Mn,
  nextTick: ol,
  cancelNextTick: wf,
  detectDirection: py,
  getChild: Di,
  expando: an
};
Ae.get = function(n) {
  return n[an];
};
Ae.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (Ae.utils = Wn(Wn({}, Ae.utils), i.utils)), ro.mount(i);
  });
};
Ae.create = function(n, r) {
  return new Ae(n, r);
};
Ae.version = g3;
var wt = [], Vs, Ef, Cf = !1, tf, nf, yl, Ys;
function P3() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return n.prototype = {
    dragStarted: function(s) {
      var i = s.originalEvent;
      this.sortable.nativeDraggable ? He(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? He(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? He(document, "touchmove", this._handleFallbackAutoScroll) : He(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var i = s.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), Sv(), ul(), _3();
    },
    nulling: function() {
      yl = Ef = Vs = Cf = Ys = tf = nf = null, wt.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, i) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (yl = s, i || this.options.forceAutoScrollFallback || no || Er || Fs) {
        rf(s, this.options, m, i);
        var p = Jr(m, !0);
        Cf && (!Ys || c !== tf || f !== nf) && (Ys && Sv(), Ys = setInterval(function() {
          var _ = Jr(document.elementFromPoint(c, f), !0);
          _ !== p && (p = _, ul()), rf(s, u.options, _, i);
        }, 10), tf = c, nf = f);
      } else {
        if (!this.options.bubbleScroll || Jr(m, !0) === Kn()) {
          ul();
          return;
        }
        rf(s, this.options, Jr(m, !1), !1);
      }
    }
  }, wr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ul() {
  wt.forEach(function(n) {
    clearInterval(n.pid);
  }), wt = [];
}
function Sv() {
  clearInterval(Ys);
}
var rf = ly(function(n, r, s, i) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = Kn(), _ = !1, g;
    Ef !== s && (Ef = s, ul(), Vs = r.scroll, g = r.scrollFn, Vs === !0 && (Vs = Jr(s, !0)));
    var E = 0, y = Vs;
    do {
      var b = y, h = Et(b), C = h.top, A = h.bottom, R = h.left, x = h.right, L = h.width, l = h.height, S = void 0, w = void 0, k = b.scrollWidth, O = b.scrollHeight, z = ke(b), j = b.scrollLeft, P = b.scrollTop;
      b === p ? (S = L < k && (z.overflowX === "auto" || z.overflowX === "scroll" || z.overflowX === "visible"), w = l < O && (z.overflowY === "auto" || z.overflowY === "scroll" || z.overflowY === "visible")) : (S = L < k && (z.overflowX === "auto" || z.overflowX === "scroll"), w = l < O && (z.overflowY === "auto" || z.overflowY === "scroll"));
      var Z = S && (Math.abs(x - u) <= f && j + L < k) - (Math.abs(R - u) <= f && !!j), X = w && (Math.abs(A - c) <= f && P + l < O) - (Math.abs(C - c) <= f && !!P);
      if (!wt[E])
        for (var G = 0; G <= E; G++)
          wt[G] || (wt[G] = {});
      (wt[E].vx != Z || wt[E].vy != X || wt[E].el !== b) && (wt[E].el = b, wt[E].vx = Z, wt[E].vy = X, clearInterval(wt[E].pid), (Z != 0 || X != 0) && (_ = !0, wt[E].pid = setInterval((function() {
        i && this.layer === 0 && Ae.active._onTouchMove(yl);
        var K = wt[this.layer].vy ? wt[this.layer].vy * m : 0, M = wt[this.layer].vx ? wt[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Ae.dragged.parentNode[an], M, K, n, yl, wt[this.layer].el) !== "continue" || cy(wt[this.layer].el, M, K);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && y !== p && (y = Jr(y, !1)));
    Cf = _;
  }
}, 30), yy = function(r) {
  var s = r.originalEvent, i = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var _ = i || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), _ && !_.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: i
    }));
  }
};
function qf() {
}
qf.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var u = Di(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: yy
};
wr(qf, {
  pluginName: "revertOnSpill"
});
function Zf() {
}
Zf.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, i = r.putSortable, u = i || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: yy
};
wr(Zf, {
  pluginName: "removeOnSpill"
});
Ae.mount(new P3());
Ae.mount(Zf, qf);
async function ll(n, r, s) {
  var i, u, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const _ = R1;
  if (f("global") && _ != null && _.length)
    for (const g of _) {
      const E = await I3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((y) => {
        p[g].push(y);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[j1];
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((y) => {
        p[g].push(y);
      });
    }
  }
  if (f("character") && s) {
    const g = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const y = (u = (i = g?.data) == null ? void 0 : i.extensions) == null ? void 0 : u.world;
    y && E.add(y);
    const b = ry(s), h = (c = D1.charLore) == null ? void 0 : c.find((C) => C.name === b);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const A = await m.loadWorldInfo(C);
      !A || p[C] || (p[C] = [], Object.values(A.entries).forEach((R) => {
        p[C].push(R);
      }));
    }
  }
  if (f("persona")) {
    const g = m.powerUserSettings.persona_description_lorebook;
    if (g && !p[g]) {
      p[g] = [];
      const E = await m.loadWorldInfo(g);
      E && Object.values(E.entries).forEach((y) => {
        p[g].push(y);
      });
    }
  }
  return p;
}
async function I3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const B3 = `=== SILLYTAVERN===

**SillyTavern** is a popular open-source front-end interface designed for interacting with AI language models. It's primarily used for role-playing, creative writing, and conversational experiences, offering a user-friendly platform to customize interactions with AI. Here's an overview:

### Key Features:
1. **AI Backend Compatibility**: Works with APIs like OpenAI (GPT), KoboldAI, Claude, or local models (via services like Text-generation-webui or Ollama).
2. **Customization**:
   - Create and import character cards (with personas, scenarios, and dialogue examples).
   - Adjust model parameters (temperature, repetition penalties) for tailored responses.
3. **Plugins & Extensions**: Adds features like text-to-speech, image generation, emotion recognition, and world-building tools.
4. **Privacy**: Self-hosted locally, giving users control over data (unlike cloud-based services).

### Use Cases:
- Role-playing with AI characters.
- Collaborative storytelling or creative writing.
- Experimental AI interactions (users often share character templates and scripts in communities).

### Requirements:
- Technical setup involves installing Node.js, cloning the GitHub repo, and configuring API connections.
- Requires access to an AI model backend (e.g., OpenAI API key or a locally hosted model).

### Community & Ethics:
- Active communities on platforms like GitHub and Reddit share guides, characters, and plugins.
- Encourages responsible use, as the tool can generate unrestricted content depending on the AI backend.

SillyTavern is not an AI itself but a flexible interface to enhance interactions with LLMs.

=== WORLDINFO (LOREBOOKS) ===

**World Info** (often called **Lorebooks**) is a feature used in AI-driven storytelling and role-playing platforms (like SillyTavern, NovelAI, KoboldAI, or Text-generation-webui) to help AI models maintain consistency in fictional worlds. It acts as a dynamic knowledge base that the AI references during interactions to avoid contradictions and keep track of key details.

---

### **What is World Info/Lorebooks?**
- **A structured database**: Stores details about characters, locations, rules, events, or concepts in your fictional world.
- **Contextual triggers**: Entries activate automatically when specific keywords or phrases appear in the conversation/story.
- **Prevents "amnesia"**: Ensures the AI remembers critical lore without relying solely on its limited context window.

---

### **How It Works**
1. **Create Entries**: Define elements (e.g., a character’s backstory, a magic system’s rules).
2. **Set Triggers**: Link entries to keywords (e.g., mention "Dragonstone" → inject lore about that location).
3. **Dynamic Injection**: When a trigger word appears in the chat/story, the relevant entry is temporarily added to the AI’s context.

---

### **Key Features**
- **Hierarchy**: Organize entries into categories (e.g., factions, items, timelines).
- **Priority**: Set which entries take precedence if multiple triggers occur.
- **Cross-references**: Link entries to each other (e.g., a character entry references their home city).
- **Formatting**: Use markdown, JSON, or plain text depending on the platform.

---

### **Example Lorebook Entry**
\`\`\`plaintext
Name: Dragonstone Citadel
Triggers: Dragonstone, Citadel, Obsidian Fortress
Content:
  A volcanic fortress built from black obsidian. Home to the ancient Order of Flames,
  who guard the Eternal Fire—a magical flame that grants visions of the future.
  The citadel is rumored to be cursed, as its rulers never live past 40 years.
\`\`\`

---

### **Use Cases**
1. **Complex Worldbuilding**: Track political factions, religions, or history.
2. **Character Consistency**: Ensure the AI remembers a character’s motives, secrets, or relationships.
3. **Magic/Science Systems**: Define rules (e.g., "Magic drains lifeforce" or "Robots cannot harm humans").
4. **Plot Hooks**: Store hidden clues or foreshadowing for the AI to weave into the narrative.

---

### **Tools Supporting Lorebooks**
- **SillyTavern**: Integrates with lorebooks via extensions or prompts.
- **NovelAI**: Has a built-in "Lorebook" feature with advanced triggers.
- **KoboldAI/Text-generation-webui**: Use "world info" files or scripts.
- **AIDungeon** (historically): Early adopter of world info, though less popular now.

---

### **Best Practices**
- **Keep entries concise**: AI models process information best in short, clear snippets.
- **Balance detail**: Too many entries can overwhelm the context window.
- **Test triggers**: Ensure keywords are unique enough to avoid false activations.
- **Update dynamically**: Add/remove entries as the story evolves.

Lorebooks are essential for long-term storytelling with AI.`, U3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, H3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, q3 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, Z3 = `If you are creating a new entry you should write it like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>
\`\`\`

If you are updating an existing entry you should specify the id of the entry. Like this:
\`\`\`xml
<lorebooks>
    <entry>
        <worldName>World 1</worldName>
        <id>15</id> // Id should be the id of the entry
        <name>Book 1</name>
        <triggers>word1,word2</triggers>
        <content>Content of book 1</content>
    </entry>
</lorebooks>
\`\`\``, G3 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, V3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", Y3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", $3 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, X3 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, F3 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, Q3 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, _y = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", K3 = _y + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", J3 = "[" + _y + "][" + K3 + "]*", W3 = new RegExp("^" + J3 + "$");
function by(n, r) {
  const s = [];
  let i = r.exec(n);
  for (; i; ) {
    const u = [];
    u.startIndex = r.lastIndex - i[0].length;
    const c = i.length;
    for (let f = 0; f < c; f++)
      u.push(i[f]);
    s.push(u), i = r.exec(n);
  }
  return s;
}
const Gf = function(n) {
  const r = W3.exec(n);
  return !(r === null || typeof r > "u");
};
function e8(n) {
  return typeof n < "u";
}
const t8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function n8(n, r) {
  r = Object.assign({}, t8, r);
  const s = [];
  let i = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = Ev(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = Cv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !c8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", yt("InvalidTag", E, Xt(n, c));
        }
        const _ = i8(n, c);
        if (_ === !1)
          return yt("InvalidAttr", "Attributes for '" + p + "' have open quote.", Xt(n, c));
        let g = _.value;
        if (c = _.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const y = kv(g, r);
          if (y === !0)
            i = !0;
          else
            return yt(y.err.code, y.err.msg, Xt(n, E + y.err.line));
        } else if (m)
          if (_.tagClosed) {
            if (g.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Xt(n, f));
            if (s.length === 0)
              return yt("InvalidTag", "Closing tag '" + p + "' has not been opened.", Xt(n, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let y = Xt(n, E.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + y.line + ", col " + y.col + ") instead of closing tag '" + p + "'.",
                  Xt(n, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Xt(n, c));
        else {
          const E = kv(g, r);
          if (E !== !0)
            return yt(E.err.code, E.err.msg, Xt(n, c - g.length + E.err.line));
          if (u === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", Xt(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), i = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Cv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = Ev(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = u8(n, c);
            if (E == -1)
              return yt("InvalidChar", "char '&' is not expected.", Xt(n, c));
            c = E;
          } else if (u === !0 && !wv(n[c]))
            return yt("InvalidXml", "Extra text at the end", Xt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (wv(n[c]))
        continue;
      return yt("InvalidChar", "char '" + n[c] + "' is not expected.", Xt(n, c));
    }
  if (i) {
    if (s.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Xt(n, s[0].tagStartPos));
    if (s.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function wv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function Ev(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const i = n.substr(s, r - s);
      if (r > 5 && i === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", Xt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Cv(n, r) {
  if (n.length > r + 5 && n[r + 1] === "-" && n[r + 2] === "-") {
    for (r += 3; r < n.length; r++)
      if (n[r] === "-" && n[r + 1] === "-" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (n.length > r + 8 && n[r + 1] === "D" && n[r + 2] === "O" && n[r + 3] === "C" && n[r + 4] === "T" && n[r + 5] === "Y" && n[r + 6] === "P" && n[r + 7] === "E") {
    let s = 1;
    for (r += 8; r < n.length; r++)
      if (n[r] === "<")
        s++;
      else if (n[r] === ">" && (s--, s === 0))
        break;
  } else if (n.length > r + 9 && n[r + 1] === "[" && n[r + 2] === "C" && n[r + 3] === "D" && n[r + 4] === "A" && n[r + 5] === "T" && n[r + 6] === "A" && n[r + 7] === "[") {
    for (r += 8; r < n.length; r++)
      if (n[r] === "]" && n[r + 1] === "]" && n[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const r8 = '"', a8 = "'";
function i8(n, r) {
  let s = "", i = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === r8 || n[r] === a8)
      i === "" ? i = n[r] : i !== n[r] || (i = "");
    else if (n[r] === ">" && i === "") {
      u = !0;
      break;
    }
    s += n[r];
  }
  return i !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const s8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function kv(n, r) {
  const s = by(n, s8), i = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Ls(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Ls(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Ls(s[u]));
    const c = s[u][2];
    if (!l8(c))
      return yt("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Ls(s[u]));
    if (!i.hasOwnProperty(c))
      i[c] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + c + "' is repeated.", Ls(s[u]));
  }
  return !0;
}
function o8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function u8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, o8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function l8(n) {
  return Gf(n);
}
function c8(n) {
  return Gf(n);
}
function Xt(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Ls(n) {
  return n.startIndex + n[1].length;
}
const d8 = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(n, r) {
    return r;
  },
  attributeValueProcessor: function(n, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(n, r, s) {
    return n;
  }
  // skipEmptyListItem: false
}, f8 = function(n) {
  return Object.assign({}, d8, n);
};
class Ps {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, s) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: s });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function h8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let i = 1, u = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && g8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = p8(n, r + 1), p.indexOf("&") === -1 && (s[b8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && v8(n, r)) r += 8;
        else if (u && y8(n, r)) r += 8;
        else if (u && _8(n, r)) r += 9;
        else if (m8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        i++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, i--) : i--, i === 0)
          break;
      } else n[r] === "[" ? u = !0 : f += n[r];
    if (i !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function p8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const i = n[r++];
  let u = "";
  for (; r < n.length && n[r] !== i; r++)
    u += n[r];
  return [s, u, r];
}
function m8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function g8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function v8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function y8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function _8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function b8(n) {
  if (Gf(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const S8 = /^[-+]?0x[a-fA-F0-9]+$/, w8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, E8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function C8(n, r = {}) {
  if (r = Object.assign({}, E8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && S8.test(s))
    return A8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const i = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (i) {
      if (r.leadingZeros)
        s = (i[1] || "") + i[3];
      else if (!(i[2] === "0" && i[3][0] === ".")) return n;
      return r.eNotation ? Number(s) : n;
    } else
      return n;
  } else {
    const i = w8.exec(s);
    if (i) {
      const u = i[1], c = i[2];
      let f = k8(i[3]);
      if (!r.leadingZeros && c.length > 0 && u && s[2] !== ".") return n;
      if (!r.leadingZeros && c.length > 0 && !u && s[1] !== ".") return n;
      if (r.leadingZeros && c === n) return 0;
      {
        const m = Number(s), p = "" + m;
        return p.search(/[eE]/) !== -1 ? r.eNotation ? m : n : s.indexOf(".") !== -1 ? p === "0" && f === "" || p === f || u && p === "-" + f ? m : n : c ? f === p || u + f === p ? m : n : s === p || s === u + p ? m : n;
      }
    } else
      return n;
  }
}
function k8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function A8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function T8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class x8 {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, i) => String.fromCodePoint(Number.parseInt(i, 16)) }
    }, this.addExternalEntities = N8, this.parseXml = D8, this.parseTextData = O8, this.resolveNameSpace = M8, this.buildAttributesMap = j8, this.isItStopNode = I8, this.replaceEntitiesValue = L8, this.readStopNodeData = U8, this.saveTextToParentTag = P8, this.addChild = z8, this.ignoreAttributesFn = T8(this.options.ignoreAttributes);
  }
}
function N8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    this.lastEntities[i] = {
      regex: new RegExp("&" + i + ";", "g"),
      val: n[i]
    };
  }
}
function O8(n, r, s, i, u, c, f) {
  if (n !== void 0 && (this.options.trimValues && !i && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? Af(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? Af(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function M8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const R8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function j8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const i = by(n, R8), u = i.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(i[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = i[f][4], _ = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), _ === "__proto__" && (_ = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[_] = p : typeof g != typeof p || g !== p ? c[_] = g : c[_] = Af(
            p,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[_] = !0);
    }
    if (!Object.keys(c).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = c, f;
    }
    return c;
  }
}
const D8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Ps("!xml");
  let s = r, i = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Na(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (i = this.saveTextToParentTag(i, s, u));
        const _ = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        _ && this.options.unpairedTags.indexOf(_) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), i = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = kf(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (i = this.saveTextToParentTag(i, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Ps(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Na(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          i = this.saveTextToParentTag(i, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = h8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Na(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        i = this.saveTextToParentTag(i, s, u);
        let _ = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        _ == null && (_ = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, _), c = m + 2;
      } else {
        let m = kf(n, c, this.options.removeNSPrefix), p = m.tagName;
        const _ = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, y = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && i && s.tagname !== "!xml" && (i = this.saveTextToParentTag(i, s, u, !1));
        const b = s;
        if (b && this.options.unpairedTags.indexOf(b.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), p !== r.tagname && (u += u ? "." + p : p), this.isItStopNode(this.options.stopNodes, u, p)) {
          let h = "";
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1)
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(p) !== -1)
            c = m.closeIndex;
          else {
            const A = this.readStopNodeData(n, _, y + 1);
            if (!A) throw new Error(`Unexpected end of ${_}`);
            c = A.i, h = A.tagContent;
          }
          const C = new Ps(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Ps(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new Ps(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          i = "", c = y;
        }
      }
    else
      i += n[c];
  return r.child;
};
function z8(n, r, s) {
  const i = this.options.updateTag(r.tagname, s, r[":@"]);
  i === !1 || (typeof i == "string" && (r.tagname = i), n.addChild(r));
}
const L8 = function(n) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const s = this.docTypeEntities[r];
      n = n.replace(s.regx, s.val);
    }
    for (let r in this.lastEntities) {
      const s = this.lastEntities[r];
      n = n.replace(s.regex, s.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const s = this.htmlEntities[r];
        n = n.replace(s.regex, s.val);
      }
    n = n.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return n;
};
function P8(n, r, s, i) {
  return n && (i === void 0 && (i = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    i
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function I8(n, r, s) {
  const i = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (i === c || r === c) return !0;
  }
  return !1;
}
function B8(n, r, s = ">") {
  let i, u = "";
  for (let c = r; c < n.length; c++) {
    let f = n[c];
    if (i)
      f === i && (i = "");
    else if (f === '"' || f === "'")
      i = f;
    else if (f === s[0])
      if (s[1]) {
        if (n[c + 1] === s[1])
          return {
            data: u,
            index: c
          };
      } else
        return {
          data: u,
          index: c
        };
    else f === "	" && (f = " ");
    u += f;
  }
}
function Na(n, r, s, i) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(i);
  return u + r.length - 1;
}
function kf(n, r, s, i = ">") {
  const u = B8(n, r + 1, i);
  if (!u) return;
  let c = u.data;
  const f = u.index, m = c.search(/\s/);
  let p = c, _ = !0;
  m !== -1 && (p = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const g = p;
  if (s) {
    const E = p.indexOf(":");
    E !== -1 && (p = p.substr(E + 1), _ = p !== u.data.substr(E + 1));
  }
  return {
    tagName: p,
    tagExp: c,
    closeIndex: f,
    attrExpPresent: _,
    rawTagName: g
  };
}
function U8(n, r, s) {
  const i = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Na(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(i, s),
            i: c
          };
        s = c;
      } else if (n[s + 1] === "?")
        s = Na(n, "?>", s + 1, "StopNode is not closed.");
      else if (n.substr(s + 1, 3) === "!--")
        s = Na(n, "-->", s + 3, "StopNode is not closed.");
      else if (n.substr(s + 1, 2) === "![")
        s = Na(n, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = kf(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function Af(n, r, s) {
  if (r && typeof n == "string") {
    const i = n.trim();
    return i === "true" ? !0 : i === "false" ? !1 : C8(n, s);
  } else
    return e8(n) ? n : "";
}
function H8(n, r) {
  return Sy(n, r);
}
function Sy(n, r, s) {
  let i;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = q8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      i === void 0 ? i = f[m] : i += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let _ = Sy(f[m], r, p);
        const g = G8(_, r);
        f[":@"] ? Z8(_, f[":@"], p, r) : Object.keys(_).length === 1 && _[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? _ = _[r.textNodeName] : Object.keys(_).length === 0 && (r.alwaysCreateTextNode ? _[r.textNodeName] = "" : _ = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(_)) : r.isArray(m, p, g) ? u[m] = [_] : u[m] = _;
      }
    }
  }
  return typeof i == "string" ? i.length > 0 && (u[r.textNodeName] = i) : i !== void 0 && (u[r.textNodeName] = i), u;
}
function q8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (i !== ":@") return i;
  }
}
function Z8(n, r, s, i) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      i.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function G8(n, r) {
  const { textNodeName: s } = r, i = Object.keys(n).length;
  return !!(i === 0 || i === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class V8 {
  constructor(r) {
    this.externalEntities = {}, this.options = f8(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, s) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (s) {
      s === !0 && (s = {});
      const c = n8(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const i = new x8(this.options);
    i.addExternalEntities(this.externalEntities);
    const u = i.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : H8(u, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, s) {
    if (s.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (s === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = s;
  }
}
const Y8 = new V8();
function $8(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function wy(n, r = {}) {
  let s = n;
  const { previousContent: i } = r;
  if (s = s.replace(/```xml/g, "").replace(/```/g, ""), i && (s = i + s.trimEnd()), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const u = {};
  try {
    const c = Y8.parse(s);
    if (!c.lorebooks)
      return u;
    const f = c.lorebooks.entry?.content ? [c.lorebooks.entry] : c.lorebooks.entry;
    for (const m of f) {
      const p = m.worldName;
      p && (u[p] || (u[p] = []), u[p].push({
        uid: m.id ?? $8(6),
        key: m.triggers?.split(",").map((_) => _.trim()) ?? [],
        content: m.content,
        comment: m.name,
        disable: !1,
        keysecondary: []
      }));
    }
    return u;
  } catch (c) {
    throw console.error(c), new Error("Model response is not valid XML");
  }
}
function X8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function F8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}</content>
  </entry>
</lorebooks>`;
}
var Au = { exports: {} }, Tu = { exports: {} }, In = {}, rn = {}, Av;
function on() {
  if (Av) return rn;
  Av = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = _, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = y, rn.appendContextPath = b;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function i(h) {
    return n[h];
  }
  function u(h) {
    for (var C = 1; C < arguments.length; C++)
      for (var A in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], A) && (h[A] = arguments[C][A]);
    return h;
  }
  var c = Object.prototype.toString;
  rn.toString = c;
  var f = function(C) {
    return typeof C == "function";
  };
  f(/x/) && (rn.isFunction = f = function(h) {
    return typeof h == "function" && c.call(h) === "[object Function]";
  }), rn.isFunction = f;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? c.call(h) === "[object Array]" : !1;
  };
  rn.isArray = m;
  function p(h, C) {
    for (var A = 0, R = h.length; A < R; A++)
      if (h[A] === C)
        return A;
    return -1;
  }
  function _(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return s.test(h) ? h.replace(r, i) : h;
  }
  function g(h) {
    return !h && h !== 0 ? !0 : !!(m(h) && h.length === 0);
  }
  function E(h) {
    var C = u({}, h);
    return C._parent = h, C;
  }
  function y(h, C) {
    return h.path = C, h;
  }
  function b(h, C) {
    return (h ? h + "." : "") + C;
  }
  return rn;
}
var xu = { exports: {} }, Tv;
function Hn() {
  return Tv || (Tv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function i(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, _ = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, _ = f.start.column, g = f.end.column, u += " - " + m + ":" + _);
      for (var E = Error.prototype.constructor.call(this, u), y = 0; y < s.length; y++)
        this[s[y]] = E[s[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
      try {
        f && (this.lineNumber = m, this.endLineNumber = p, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: _,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: g,
          enumerable: !0
        })) : (this.column = _, this.endColumn = g));
      } catch {
      }
    }
    i.prototype = new Error(), r.default = i, n.exports = r.default;
  })(xu, xu.exports)), xu.exports;
}
var Is = {}, Nu = { exports: {} }, xv;
function Q8() {
  return xv || (xv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(i) {
      i.registerHelper("blockHelperMissing", function(u, c) {
        var f = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), i.helpers.each(u, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(u, c);
      });
    }, n.exports = r.default;
  })(Nu, Nu.exports)), Nu.exports;
}
var Ou = { exports: {} }, Nv;
function K8() {
  return Nv || (Nv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var _ = p.fn, g = p.inverse, E = 0, y = "", b = void 0, h = void 0;
        p.data && p.ids && (h = i.appendContextPath(p.data.contextPath, p.ids[0]) + "."), i.isFunction(m) && (m = m.call(this)), p.data && (b = i.createFrame(p.data));
        function C(l, S, w) {
          b && (b.key = l, b.index = S, b.first = S === 0, b.last = !!w, h && (b.contextPath = h + l)), y = y + _(m[l], {
            data: b,
            blockParams: i.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (i.isArray(m))
            for (var A = m.length; E < A; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var R = [], x = m[Symbol.iterator](), L = x.next(); !L.done; L = x.next())
              R.push(L.value);
            m = R;
            for (var A = m.length; E < A; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var l = void 0;
              Object.keys(m).forEach(function(S) {
                l !== void 0 && C(l, E - 1), l = S, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (y = g(this)), y;
      });
    }, n.exports = r.default;
  })(Ou, Ou.exports)), Ou.exports;
}
var Mu = { exports: {} }, Ov;
function J8() {
  return Ov || (Ov = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var i = Hn(), u = s(i);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Mu, Mu.exports)), Mu.exports;
}
var Ru = { exports: {} }, Mv;
function W8() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return i.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || i.isEmpty(m) ? p.inverse(this) : p.fn(this);
      }), f.registerHelper("unless", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, m, {
          fn: p.inverse,
          inverse: p.fn,
          hash: p.hash
        });
      });
    }, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var ju = { exports: {} }, Rv;
function eS() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var i = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          i.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), i[0] = f, s.log.apply(s, i);
      });
    }, n.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var Du = { exports: {} }, jv;
function tS() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(i, u, c) {
        return i && c.lookupProperty(i, u);
      });
    }, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var zu = { exports: {} }, Dv;
function nS() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var i = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        i.isFunction(m) && (m = m.call(this));
        var _ = p.fn;
        if (i.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = i.createFrame(p.data), g.contextPath = i.appendContextPath(p.data.contextPath, p.ids[0])), _(m, {
          data: g,
          blockParams: i.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var zv;
function Ey() {
  if (zv) return Is;
  zv = 1, Is.__esModule = !0, Is.registerDefaultHelpers = C, Is.moveHelperToHooks = A;
  function n(R) {
    return R && R.__esModule ? R : { default: R };
  }
  var r = Q8(), s = n(r), i = K8(), u = n(i), c = J8(), f = n(c), m = W8(), p = n(m), _ = eS(), g = n(_), E = tS(), y = n(E), b = nS(), h = n(b);
  function C(R) {
    s.default(R), u.default(R), f.default(R), p.default(R), g.default(R), y.default(R), h.default(R);
  }
  function A(R, x, L) {
    R.helpers[x] && (R.hooks[x] = R.helpers[x], L || delete R.helpers[x]);
  }
  return Is;
}
var Lu = {}, Pu = { exports: {} }, Lv;
function rS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(i) {
      i.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(_, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var y = u(_, g);
          return f.partials = E, y;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(Pu, Pu.exports)), Pu.exports;
}
var Pv;
function aS() {
  if (Pv) return Lu;
  Pv = 1, Lu.__esModule = !0, Lu.registerDefaultDecorators = i;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = rS(), s = n(r);
  function i(u) {
    s.default(u);
  }
  return Lu;
}
var Iu = { exports: {} }, Iv;
function Cy() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), i = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var f = s.indexOf(i.methodMap, c.toLowerCase());
          f >= 0 ? c = f : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = i.lookupLevel(c), typeof console < "u" && i.lookupLevel(i.level) <= c) {
          var f = i.methodMap[c];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), _ = 1; _ < m; _++)
            p[_ - 1] = arguments[_];
          console[f].apply(console, p);
        }
      }
    };
    r.default = i, n.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Ci = {}, Bu = {}, Bv;
function iS() {
  if (Bv) return Bu;
  Bv = 1, Bu.__esModule = !0, Bu.createNewLookupObject = r;
  var n = on();
  function r() {
    for (var s = arguments.length, i = Array(s), u = 0; u < s; u++)
      i[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(i));
  }
  return Bu;
}
var Uv;
function ky() {
  if (Uv) return Ci;
  Uv = 1, Ci.__esModule = !0, Ci.createProtoAccessControl = c, Ci.resultIsAllowed = f, Ci.resetLoggedProperties = _;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = iS(), s = Cy(), i = n(s), u = /* @__PURE__ */ Object.create(null);
  function c(g) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var y = /* @__PURE__ */ Object.create(null);
    return y.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(y, g.allowedProtoProperties),
        defaultValue: g.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, g.allowedProtoMethods),
        defaultValue: g.allowProtoMethodsByDefault
      }
    };
  }
  function f(g, E, y) {
    return m(typeof g == "function" ? E.methods : E.properties, y);
  }
  function m(g, E) {
    return g.whitelist[E] !== void 0 ? g.whitelist[E] === !0 : g.defaultValue !== void 0 ? g.defaultValue : (p(E), !1);
  }
  function p(g) {
    u[g] !== !0 && (u[g] = !0, i.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function _() {
    Object.keys(u).forEach(function(g) {
      delete u[g];
    });
  }
  return Ci;
}
var Hv;
function Vf() {
  if (Hv) return In;
  Hv = 1, In.__esModule = !0, In.HandlebarsEnvironment = h;
  function n(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = on(), s = Hn(), i = n(s), u = Ey(), c = aS(), f = Cy(), m = n(f), p = ky(), _ = "4.7.8";
  In.VERSION = _;
  var g = 8;
  In.COMPILER_REVISION = g;
  var E = 7;
  In.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var y = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  In.REVISION_CHANGES = y;
  var b = "[object Object]";
  function h(A, R, x) {
    this.helpers = A || {}, this.partials = R || {}, this.decorators = x || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(R, x) {
      if (r.toString.call(R) === b) {
        if (x)
          throw new i.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, R);
      } else
        this.helpers[R] = x;
    },
    unregisterHelper: function(R) {
      delete this.helpers[R];
    },
    registerPartial: function(R, x) {
      if (r.toString.call(R) === b)
        r.extend(this.partials, R);
      else {
        if (typeof x > "u")
          throw new i.default('Attempting to register a partial called "' + R + '" as undefined');
        this.partials[R] = x;
      }
    },
    unregisterPartial: function(R) {
      delete this.partials[R];
    },
    registerDecorator: function(R, x) {
      if (r.toString.call(R) === b) {
        if (x)
          throw new i.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, R);
      } else
        this.decorators[R] = x;
    },
    unregisterDecorator: function(R) {
      delete this.decorators[R];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      p.resetLoggedProperties();
    }
  };
  var C = m.default.log;
  return In.log = C, In.createFrame = r.createFrame, In.logger = m.default, In;
}
var Uu = { exports: {} }, qv;
function sS() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(i) {
      this.string = i;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(Uu, Uu.exports)), Uu.exports;
}
var vr = {}, Hu = {}, Zv;
function oS() {
  if (Zv) return Hu;
  Zv = 1, Hu.__esModule = !0, Hu.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var i = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return i;
  }
  return Hu;
}
var Gv;
function uS() {
  if (Gv) return vr;
  Gv = 1, vr.__esModule = !0, vr.checkRevision = g, vr.template = E, vr.wrapProgram = y, vr.resolvePartial = b, vr.invokePartial = h, vr.noop = C;
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    if (l && l.__esModule)
      return l;
    var S = {};
    if (l != null)
      for (var w in l)
        Object.prototype.hasOwnProperty.call(l, w) && (S[w] = l[w]);
    return S.default = l, S;
  }
  var s = on(), i = r(s), u = Hn(), c = n(u), f = Vf(), m = Ey(), p = oS(), _ = ky();
  function g(l) {
    var S = l && l[0] || 1, w = f.COMPILER_REVISION;
    if (!(S >= f.LAST_COMPATIBLE_COMPILER_REVISION && S <= f.COMPILER_REVISION))
      if (S < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var k = f.REVISION_CHANGES[w], O = f.REVISION_CHANGES[S];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + k + ") or downgrade your runtime to an older version (" + O + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + l[1] + ").");
  }
  function E(l, S) {
    if (!S)
      throw new c.default("No environment passed to template");
    if (!l || !l.main)
      throw new c.default("Unknown template object: " + typeof l);
    l.main.decorator = l.main_d, S.VM.checkRevision(l.compiler);
    var w = l.compiler && l.compiler[0] === 7;
    function k(j, P, Z) {
      Z.hash && (P = i.extend({}, P, Z.hash), Z.ids && (Z.ids[0] = !0)), j = S.VM.resolvePartial.call(this, j, P, Z);
      var X = i.extend({}, Z, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), G = S.VM.invokePartial.call(this, j, P, X);
      if (G == null && S.compile && (Z.partials[Z.name] = S.compile(j, l.compilerOptions, S), G = Z.partials[Z.name](P, X)), G != null) {
        if (Z.indent) {
          for (var K = G.split(`
`), M = 0, B = K.length; M < B && !(!K[M] && M + 1 === B); M++)
            K[M] = Z.indent + K[M];
          G = K.join(`
`);
        }
        return G;
      } else
        throw new c.default("The partial " + Z.name + " could not be compiled when running in runtime-only mode");
    }
    var O = {
      strict: function(P, Z, X) {
        if (!P || !(Z in P))
          throw new c.default('"' + Z + '" not defined in ' + P, {
            loc: X
          });
        return O.lookupProperty(P, Z);
      },
      lookupProperty: function(P, Z) {
        var X = P[Z];
        if (X == null || Object.prototype.hasOwnProperty.call(P, Z) || _.resultIsAllowed(X, O.protoAccessControl, Z))
          return X;
      },
      lookup: function(P, Z) {
        for (var X = P.length, G = 0; G < X; G++) {
          var K = P[G] && O.lookupProperty(P[G], Z);
          if (K != null)
            return P[G][Z];
        }
      },
      lambda: function(P, Z) {
        return typeof P == "function" ? P.call(Z) : P;
      },
      escapeExpression: i.escapeExpression,
      invokePartial: k,
      fn: function(P) {
        var Z = l[P];
        return Z.decorator = l[P + "_d"], Z;
      },
      programs: [],
      program: function(P, Z, X, G, K) {
        var M = this.programs[P], B = this.fn(P);
        return Z || K || G || X ? M = y(this, P, B, Z, X, G, K) : M || (M = this.programs[P] = y(this, P, B)), M;
      },
      data: function(P, Z) {
        for (; P && Z--; )
          P = P._parent;
        return P;
      },
      mergeIfNeeded: function(P, Z) {
        var X = P || Z;
        return P && Z && P !== Z && (X = i.extend({}, Z, P)), X;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: S.VM.noop,
      compilerInfo: l.compiler
    };
    function z(j) {
      var P = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Z = P.data;
      z._setup(P), !P.partial && l.useData && (Z = A(j, Z));
      var X = void 0, G = l.useBlockParams ? [] : void 0;
      l.useDepths && (P.depths ? X = j != P.depths[0] ? [j].concat(P.depths) : P.depths : X = [j]);
      function K(M) {
        return "" + l.main(O, M, O.helpers, O.partials, Z, G, X);
      }
      return K = R(l.main, K, O, P.depths || [], Z, G), K(j, P);
    }
    return z.isTop = !0, z._setup = function(j) {
      if (j.partial)
        O.protoAccessControl = j.protoAccessControl, O.helpers = j.helpers, O.partials = j.partials, O.decorators = j.decorators, O.hooks = j.hooks;
      else {
        var P = i.extend({}, S.helpers, j.helpers);
        x(P, O), O.helpers = P, l.usePartial && (O.partials = O.mergeIfNeeded(j.partials, S.partials)), (l.usePartial || l.useDecorators) && (O.decorators = i.extend({}, S.decorators, j.decorators)), O.hooks = {}, O.protoAccessControl = _.createProtoAccessControl(j);
        var Z = j.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(O, "helperMissing", Z), m.moveHelperToHooks(O, "blockHelperMissing", Z);
      }
    }, z._child = function(j, P, Z, X) {
      if (l.useBlockParams && !Z)
        throw new c.default("must pass block params");
      if (l.useDepths && !X)
        throw new c.default("must pass parent depths");
      return y(O, j, l[j], P, 0, Z, X);
    }, z;
  }
  function y(l, S, w, k, O, z, j) {
    function P(Z) {
      var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], G = j;
      return j && Z != j[0] && !(Z === l.nullContext && j[0] === null) && (G = [Z].concat(j)), w(l, Z, l.helpers, l.partials, X.data || k, z && [X.blockParams].concat(z), G);
    }
    return P = R(w, P, l, j, k, z), P.program = S, P.depth = j ? j.length : 0, P.blockParams = O || 0, P;
  }
  function b(l, S, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function h(l, S, w) {
    var k = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var O = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = f.createFrame(w.data);
      var z = w.fn;
      O = w.data["partial-block"] = function(P) {
        var Z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Z.data = f.createFrame(Z.data), Z.data["partial-block"] = k, z(P, Z);
      }, z.partials && (w.partials = i.extend({}, w.partials, z.partials));
    })(), l === void 0 && O && (l = O), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(S, w);
  }
  function C() {
    return "";
  }
  function A(l, S) {
    return (!S || !("root" in S)) && (S = S ? f.createFrame(S) : {}, S.root = l), S;
  }
  function R(l, S, w, k, O, z) {
    if (l.decorator) {
      var j = {};
      S = l.decorator(S, j, w, k && k[0], O, z, k), i.extend(S, j);
    }
    return S;
  }
  function x(l, S) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = L(k, S);
    });
  }
  function L(l, S) {
    var w = S.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return i.extend({ lookupProperty: w }, k);
    });
  }
  return vr;
}
var qu = { exports: {} }, Vv;
function Ay() {
  return Vv || (Vv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var i = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = i), s;
      };
    }, n.exports = r.default;
  })(qu, qu.exports)), qu.exports;
}
var Yv;
function lS() {
  return Yv || (Yv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    function i(x) {
      if (x && x.__esModule)
        return x;
      var L = {};
      if (x != null)
        for (var l in x)
          Object.prototype.hasOwnProperty.call(x, l) && (L[l] = x[l]);
      return L.default = x, L;
    }
    var u = Vf(), c = i(u), f = sS(), m = s(f), p = Hn(), _ = s(p), g = on(), E = i(g), y = uS(), b = i(y), h = Ay(), C = s(h);
    function A() {
      var x = new c.HandlebarsEnvironment();
      return E.extend(x, c), x.SafeString = m.default, x.Exception = _.default, x.Utils = E, x.escapeExpression = E.escapeExpression, x.VM = b, x.template = function(L) {
        return b.template(L, x);
      }, x;
    }
    var R = A();
    R.create = A, C.default(R), R.default = R, r.default = R, n.exports = r.default;
  })(Tu, Tu.exports)), Tu.exports;
}
var Zu = { exports: {} }, $v;
function Ty() {
  return $v || ($v = 1, (function(n, r) {
    r.__esModule = !0;
    var s = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(u) {
          return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
        },
        scopedId: function(u) {
          return /^\.|this\b/.test(u.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(u) {
          return u.parts.length === 1 && !s.helpers.scopedId(u) && !u.depth;
        }
      }
    };
    r.default = s, n.exports = r.default;
  })(Zu, Zu.exports)), Zu.exports;
}
var ki = {}, Gu = { exports: {} }, Xv;
function cS() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var i = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, p, _, g, E, y, b) {
          var h = y.length - 1;
          switch (E) {
            case 1:
              return y[h - 1];
            case 2:
              this.$ = g.prepareProgram(y[h]);
              break;
            case 3:
              this.$ = y[h];
              break;
            case 4:
              this.$ = y[h];
              break;
            case 5:
              this.$ = y[h];
              break;
            case 6:
              this.$ = y[h];
              break;
            case 7:
              this.$ = y[h];
              break;
            case 8:
              this.$ = y[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: g.stripComment(y[h]),
                strip: g.stripFlags(y[h], y[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: y[h],
                value: y[h],
                loc: g.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = g.prepareRawBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 12:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1] };
              break;
            case 13:
              this.$ = g.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !1, this._$);
              break;
            case 14:
              this.$ = g.prepareBlock(y[h - 3], y[h - 2], y[h - 1], y[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: y[h - 5], path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 16:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 17:
              this.$ = { path: y[h - 4], params: y[h - 3], hash: y[h - 2], blockParams: y[h - 1], strip: g.stripFlags(y[h - 5], y[h]) };
              break;
            case 18:
              this.$ = { strip: g.stripFlags(y[h - 1], y[h - 1]), program: y[h] };
              break;
            case 19:
              var C = g.prepareBlock(y[h - 2], y[h - 1], y[h], y[h], !1, this._$), A = g.prepareProgram([C], y[h - 1].loc);
              A.chained = !0, this.$ = { strip: y[h - 2].strip, program: A, chain: !0 };
              break;
            case 20:
              this.$ = y[h];
              break;
            case 21:
              this.$ = { path: y[h - 1], strip: g.stripFlags(y[h - 2], y[h]) };
              break;
            case 22:
              this.$ = g.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], g.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 23:
              this.$ = g.prepareMustache(y[h - 3], y[h - 2], y[h - 1], y[h - 4], g.stripFlags(y[h - 4], y[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                indent: "",
                strip: g.stripFlags(y[h - 4], y[h]),
                loc: g.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = g.preparePartialBlock(y[h - 2], y[h - 1], y[h], this._$);
              break;
            case 26:
              this.$ = { path: y[h - 3], params: y[h - 2], hash: y[h - 1], strip: g.stripFlags(y[h - 4], y[h]) };
              break;
            case 27:
              this.$ = y[h];
              break;
            case 28:
              this.$ = y[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: y[h - 3],
                params: y[h - 2],
                hash: y[h - 1],
                loc: g.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: y[h], loc: g.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: g.id(y[h - 2]), value: y[h], loc: g.locInfo(this._$) };
              break;
            case 32:
              this.$ = g.id(y[h - 1]);
              break;
            case 33:
              this.$ = y[h];
              break;
            case 34:
              this.$ = y[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: y[h], original: y[h], loc: g.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(y[h]), original: Number(y[h]), loc: g.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: y[h] === "true", original: y[h] === "true", loc: g.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: g.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: g.locInfo(this._$) };
              break;
            case 40:
              this.$ = y[h];
              break;
            case 41:
              this.$ = y[h];
              break;
            case 42:
              this.$ = g.preparePath(!0, y[h], this._$);
              break;
            case 43:
              this.$ = g.preparePath(!1, y[h], this._$);
              break;
            case 44:
              y[h - 2].push({ part: g.id(y[h]), original: y[h], separator: y[h - 1] }), this.$ = y[h - 2];
              break;
            case 45:
              this.$ = [{ part: g.id(y[h]), original: y[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              y[h - 1].push(y[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              y[h - 1].push(y[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              y[h - 1].push(y[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              y[h - 1].push(y[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              y[h - 1].push(y[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              y[h - 1].push(y[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              y[h - 1].push(y[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              y[h - 1].push(y[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              y[h - 1].push(y[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              y[h - 1].push(y[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              y[h - 1].push(y[h]);
              break;
            case 98:
              this.$ = [y[h]];
              break;
            case 99:
              y[h - 1].push(y[h]);
              break;
            case 100:
              this.$ = [y[h]];
              break;
            case 101:
              y[h - 1].push(y[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, p) {
          throw new Error(m);
        },
        parse: function(m) {
          var p = this, _ = [0], g = [null], E = [], y = this.table, b = "", h = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var A = this.lexer.yylloc;
          E.push(A);
          var R = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function x() {
            var X;
            return X = p.lexer.lex() || 1, typeof X != "number" && (X = p.symbols_[X] || X), X;
          }
          for (var L, l, S, w, k = {}, O, z, j, P; ; ) {
            if (l = _[_.length - 1], this.defaultActions[l] ? S = this.defaultActions[l] : ((L === null || typeof L > "u") && (L = x()), S = y[l] && y[l][L]), typeof S > "u" || !S.length || !S[0]) {
              var Z = "";
              {
                P = [];
                for (O in y[l]) this.terminals_[O] && O > 2 && P.push("'" + this.terminals_[O] + "'");
                this.lexer.showPosition ? Z = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + P.join(", ") + ", got '" + (this.terminals_[L] || L) + "'" : Z = "Parse error on line " + (h + 1) + ": Unexpected " + (L == 1 ? "end of input" : "'" + (this.terminals_[L] || L) + "'"), this.parseError(Z, { text: this.lexer.match, token: this.terminals_[L] || L, line: this.lexer.yylineno, loc: A, expected: P });
              }
            }
            if (S[0] instanceof Array && S.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + L);
            switch (S[0]) {
              case 1:
                _.push(L), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), _.push(S[1]), L = null, C = this.lexer.yyleng, b = this.lexer.yytext, h = this.lexer.yylineno, A = this.lexer.yylloc;
                break;
              case 2:
                if (z = this.productions_[S[1]][1], k.$ = g[g.length - z], k._$ = { first_line: E[E.length - (z || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (z || 1)].first_column, last_column: E[E.length - 1].last_column }, R && (k._$.range = [E[E.length - (z || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, b, C, h, this.yy, S[1], g, E), typeof w < "u")
                  return w;
                z && (_ = _.slice(0, -1 * z * 2), g = g.slice(0, -1 * z), E = E.slice(0, -1 * z)), _.push(this.productions_[S[1]][0]), g.push(k.$), E.push(k._$), j = y[_[_.length - 2]][_[_.length - 1]], _.push(j);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var f = {
          EOF: 1,
          parseError: function(p, _) {
            if (this.yy.parser)
              this.yy.parser.parseError(p, _);
            else
              throw new Error(p);
          },
          setInput: function(p) {
            return this._input = p, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var p = this._input[0];
            this.yytext += p, this.yyleng++, this.offset++, this.match += p, this.matched += p;
            var _ = p.match(/(?:\r\n?|\n).*/g);
            return _ ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), p;
          },
          unput: function(p) {
            var _ = p.length, g = p.split(/(?:\r\n?|\n)/g);
            this._input = p + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - _ - 1), this.offset -= _;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), g.length - 1 && (this.yylineno -= g.length - 1);
            var y = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: g ? (g.length === E.length ? this.yylloc.first_column : 0) + E[E.length - g.length].length - g[0].length : this.yylloc.first_column - _
            }, this.options.ranges && (this.yylloc.range = [y[0], y[0] + this.yyleng - _]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(p) {
            this.unput(this.match.slice(p));
          },
          pastInput: function() {
            var p = this.matched.substr(0, this.matched.length - this.match.length);
            return (p.length > 20 ? "..." : "") + p.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var p = this.match;
            return p.length < 20 && (p += this._input.substr(0, 20 - p.length)), (p.substr(0, 20) + (p.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var p = this.pastInput(), _ = new Array(p.length + 1).join("-");
            return p + this.upcomingInput() + `
` + _ + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var p, _, g, E, y;
            this._more || (this.yytext = "", this.match = "");
            for (var b = this._currentRules(), h = 0; h < b.length && (g = this._input.match(this.rules[b[h]]), !(g && (!_ || g[0].length > _[0].length) && (_ = g, E = h, !this.options.flex))); h++)
              ;
            return _ ? (y = _[0].match(/(?:\r\n?|\n).*/g), y && (this.yylineno += y.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: y ? y[y.length - 1].length - y[y.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + _[0].length
            }, this.yytext += _[0], this.match += _[0], this.matches = _, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(_[0].length), this.matched += _[0], p = this.performAction.call(this, this.yy, this, b[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), p || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var p = this.next();
            return typeof p < "u" ? p : this.lex();
          },
          begin: function(p) {
            this.conditionStack.push(p);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(p) {
            this.begin(p);
          }
        };
        return f.options = {}, f.performAction = function(p, _, g, E) {
          function y(b, h) {
            return _.yytext = _.yytext.substring(b, _.yyleng - h + b);
          }
          switch (g) {
            case 0:
              if (_.yytext.slice(-2) === "\\\\" ? (y(0, 1), this.begin("mu")) : _.yytext.slice(-1) === "\\" ? (y(0, 1), this.begin("emu")) : this.begin("mu"), _.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (y(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(_.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return _.yytext = y(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return _.yytext = y(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return _.yytext = _.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      i.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = i, i.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Vu = { exports: {} }, Yu = { exports: {} }, Fv;
function xy() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var i = Hn(), u = s(i);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(g, E) {
        var y = this.accept(g[E]);
        if (this.mutating) {
          if (y && !c.prototype[y.type])
            throw new u.default('Unexpected node type "' + y.type + '" found when accepting ' + E + " on " + g.type);
          g[E] = y;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(g, E) {
        if (this.acceptKey(g, E), !g[E])
          throw new u.default(g.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(g) {
        for (var E = 0, y = g.length; E < y; E++)
          this.acceptKey(g, E), g[E] || (g.splice(E, 1), E--, y--);
      },
      accept: function(g) {
        if (g) {
          if (!this[g.type])
            throw new u.default("Unknown type: " + g.type, g);
          this.current && this.parents.unshift(this.current), this.current = g;
          var E = this[g.type](g);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return g;
        }
      },
      Program: function(g) {
        this.acceptArray(g.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: p,
      PartialBlockStatement: function(g) {
        p.call(this, g), this.acceptKey(g, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(g) {
        this.acceptArray(g.pairs);
      },
      HashPair: function(g) {
        this.acceptRequired(g, "value");
      }
    };
    function f(_) {
      this.acceptRequired(_, "path"), this.acceptArray(_.params), this.acceptKey(_, "hash");
    }
    function m(_) {
      f.call(this, _), this.acceptKey(_, "program"), this.acceptKey(_, "inverse");
    }
    function p(_) {
      this.acceptRequired(_, "name"), this.acceptArray(_.params), this.acceptKey(_, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var Qv;
function dS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var i = xy(), u = s(i);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var b = g.body, h = 0, C = b.length; h < C; h++) {
        var A = b[h], R = this.accept(A);
        if (R) {
          var x = f(b, h, y), L = m(b, h, y), l = R.openStandalone && x, S = R.closeStandalone && L, w = R.inlineStandalone && x && L;
          R.close && p(b, h, !0), R.open && _(b, h, !0), E && w && (p(b, h), _(b, h) && A.type === "PartialStatement" && (A.indent = /([ \t]+$)/.exec(b[h - 1].original)[1])), E && l && (p((A.program || A.inverse).body), _(b, h)), E && S && (p(b, h), _((A.inverse || A.program).body));
        }
      }
      return g;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(g) {
      this.accept(g.program), this.accept(g.inverse);
      var E = g.program || g.inverse, y = g.program && g.inverse, b = y, h = y;
      if (y && y.chained)
        for (b = y.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var C = {
        open: g.openStrip.open,
        close: g.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: f((b || E).body)
      };
      if (g.openStrip.close && p(E.body, null, !0), y) {
        var A = g.inverseStrip;
        A.open && _(E.body, null, !0), A.close && p(b.body, null, !0), g.closeStrip.open && _(h.body, null, !0), !this.options.ignoreStandalone && f(E.body) && m(b.body) && (_(E.body), p(b.body));
      } else g.closeStrip.open && _(E.body, null, !0);
      return C;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(g) {
      return g.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(g) {
      var E = g.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function f(g, E, y) {
      E === void 0 && (E = g.length);
      var b = g[E - 1], h = g[E - 2];
      if (!b)
        return y;
      if (b.type === "ContentStatement")
        return (h || !y ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(b.original);
    }
    function m(g, E, y) {
      E === void 0 && (E = -1);
      var b = g[E + 1], h = g[E + 2];
      if (!b)
        return y;
      if (b.type === "ContentStatement")
        return (h || !y ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(b.original);
    }
    function p(g, E, y) {
      var b = g[E == null ? 0 : E + 1];
      if (!(!b || b.type !== "ContentStatement" || !y && b.rightStripped)) {
        var h = b.value;
        b.value = b.value.replace(y ? /^\s+/ : /^[ \t]*\r?\n?/, ""), b.rightStripped = b.value !== h;
      }
    }
    function _(g, E, y) {
      var b = g[E == null ? g.length - 1 : E - 1];
      if (!(!b || b.type !== "ContentStatement" || !y && b.leftStripped)) {
        var h = b.value;
        return b.value = b.value.replace(y ? /\s+$/ : /[ \t]+$/, ""), b.leftStripped = b.value !== h, b.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var mn = {}, Kv;
function fS() {
  if (Kv) return mn;
  Kv = 1, mn.__esModule = !0, mn.SourceLocation = u, mn.id = c, mn.stripFlags = f, mn.stripComment = m, mn.preparePath = p, mn.prepareMustache = _, mn.prepareRawBlock = g, mn.prepareBlock = E, mn.prepareProgram = y, mn.preparePartialBlock = b;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Hn(), s = n(r);
  function i(h, C) {
    if (C = C.path ? C.path.original : C, h.path.original !== C) {
      var A = { loc: h.path.loc };
      throw new s.default(h.path.original + " doesn't match " + C, A);
    }
  }
  function u(h, C) {
    this.source = h, this.start = {
      line: C.first_line,
      column: C.first_column
    }, this.end = {
      line: C.last_line,
      column: C.last_column
    };
  }
  function c(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function f(h, C) {
    return {
      open: h.charAt(2) === "~",
      close: C.charAt(C.length - 3) === "~"
    };
  }
  function m(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function p(h, C, A) {
    A = this.locInfo(A);
    for (var R = h ? "@" : "", x = [], L = 0, l = 0, S = C.length; l < S; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (R += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (x.length > 0)
          throw new s.default("Invalid path: " + R, { loc: A });
        w === ".." && L++;
      } else
        x.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: L,
      parts: x,
      original: R,
      loc: A
    };
  }
  function _(h, C, A, R, x, L) {
    var l = R.charAt(3) || R.charAt(2), S = l !== "{" && l !== "&", w = /\*/.test(R);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: A,
      escaped: S,
      strip: x,
      loc: this.locInfo(L)
    };
  }
  function g(h, C, A, R) {
    i(h, A), R = this.locInfo(R);
    var x = {
      type: "Program",
      body: C,
      strip: {},
      loc: R
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: R
    };
  }
  function E(h, C, A, R, x, L) {
    R && R.path && i(h, R);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var S = void 0, w = void 0;
    if (A) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", A);
      A.chain && (A.program.body[0].closeStrip = R.strip), w = A.strip, S = A.program;
    }
    return x && (x = S, S = C, C = x), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      inverse: S,
      openStrip: h.strip,
      inverseStrip: w,
      closeStrip: R && R.strip,
      loc: this.locInfo(L)
    };
  }
  function y(h, C) {
    if (!C && h.length) {
      var A = h[0].loc, R = h[h.length - 1].loc;
      A && R && (C = {
        source: A.source,
        start: {
          line: A.start.line,
          column: A.start.column
        },
        end: {
          line: R.end.line,
          column: R.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: C
    };
  }
  function b(h, C, A, R) {
    return i(h, A), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: A && A.strip,
      loc: this.locInfo(R)
    };
  }
  return mn;
}
var Jv;
function hS() {
  if (Jv) return ki;
  Jv = 1, ki.__esModule = !0, ki.parseWithoutProcessing = g, ki.parse = E;
  function n(y) {
    if (y && y.__esModule)
      return y;
    var b = {};
    if (y != null)
      for (var h in y)
        Object.prototype.hasOwnProperty.call(y, h) && (b[h] = y[h]);
    return b.default = y, b;
  }
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var s = cS(), i = r(s), u = dS(), c = r(u), f = fS(), m = n(f), p = on();
  ki.parser = i.default;
  var _ = {};
  p.extend(_, m);
  function g(y, b) {
    if (y.type === "Program")
      return y;
    i.default.yy = _, _.locInfo = function(C) {
      return new _.SourceLocation(b && b.srcName, C);
    };
    var h = i.default.parse(y);
    return h;
  }
  function E(y, b) {
    var h = g(y, b), C = new c.default(b);
    return C.accept(h);
  }
  return ki;
}
var Ai = {}, Wv;
function pS() {
  if (Wv) return Ai;
  Wv = 1, Ai.__esModule = !0, Ai.Compiler = m, Ai.precompile = p, Ai.compile = _;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Hn(), s = n(r), i = on(), u = Ty(), c = n(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(b) {
      var h = this.opcodes.length;
      if (b.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var A = this.opcodes[C], R = b.opcodes[C];
        if (A.opcode !== R.opcode || !g(A.args, R.args))
          return !1;
      }
      h = this.children.length;
      for (var C = 0; C < h; C++)
        if (!this.children[C].equals(b.children[C]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(b, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = i.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(b);
    },
    compileProgram: function(b) {
      var h = new this.compiler(), C = h.compile(b, this.options), A = this.guid++;
      return this.usePartial = this.usePartial || C.usePartial, this.children[A] = C, this.useDepths = this.useDepths || C.useDepths, A;
    },
    accept: function(b) {
      if (!this[b.type])
        throw new s.default("Unknown type: " + b.type, b);
      this.sourceNode.unshift(b);
      var h = this[b.type](b);
      return this.sourceNode.shift(), h;
    },
    Program: function(b) {
      this.options.blockParams.unshift(b.blockParams);
      for (var h = b.body, C = h.length, A = 0; A < C; A++)
        this.accept(h[A]);
      return this.options.blockParams.shift(), this.isSimple = C === 1, this.blockParams = b.blockParams ? b.blockParams.length : 0, this;
    },
    BlockStatement: function(b) {
      E(b);
      var h = b.program, C = b.inverse;
      h = h && this.compileProgram(h), C = C && this.compileProgram(C);
      var A = this.classifySexpr(b);
      A === "helper" ? this.helperSexpr(b, h, C) : A === "simple" ? (this.simpleSexpr(b), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("blockValue", b.path.original)) : (this.ambiguousSexpr(b, h, C), this.opcode("pushProgram", h), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(b) {
      var h = b.program && this.compileProgram(b.program), C = this.setupFullMustacheParams(b, h, void 0), A = b.path;
      this.useDecorators = !0, this.opcode("registerDecorator", C.length, A.original);
    },
    PartialStatement: function(b) {
      this.usePartial = !0;
      var h = b.program;
      h && (h = this.compileProgram(b.program));
      var C = b.params;
      if (C.length > 1)
        throw new s.default("Unsupported number of partial arguments: " + C.length, b);
      C.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : C.push({ type: "PathExpression", parts: [], depth: 0 }));
      var A = b.name.original, R = b.name.type === "SubExpression";
      R && this.accept(b.name), this.setupFullMustacheParams(b, h, void 0, !0);
      var x = b.indent || "";
      this.options.preventIndent && x && (this.opcode("appendContent", x), x = ""), this.opcode("invokePartial", R, A, x), this.opcode("append");
    },
    PartialBlockStatement: function(b) {
      this.PartialStatement(b);
    },
    MustacheStatement: function(b) {
      this.SubExpression(b), b.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(b) {
      this.DecoratorBlock(b);
    },
    ContentStatement: function(b) {
      b.value && this.opcode("appendContent", b.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(b) {
      E(b);
      var h = this.classifySexpr(b);
      h === "simple" ? this.simpleSexpr(b) : h === "helper" ? this.helperSexpr(b) : this.ambiguousSexpr(b);
    },
    ambiguousSexpr: function(b, h, C) {
      var A = b.path, R = A.parts[0], x = h != null || C != null;
      this.opcode("getContext", A.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), A.strict = !0, this.accept(A), this.opcode("invokeAmbiguous", R, x);
    },
    simpleSexpr: function(b) {
      var h = b.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(b, h, C) {
      var A = this.setupFullMustacheParams(b, h, C), R = b.path, x = R.parts[0];
      if (this.options.knownHelpers[x])
        this.opcode("invokeKnownHelper", A.length, x);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + x, b);
        R.strict = !0, R.falsy = !0, this.accept(R), this.opcode("invokeHelper", A.length, R.original, c.default.helpers.simpleId(R));
      }
    },
    PathExpression: function(b) {
      this.addDepth(b.depth), this.opcode("getContext", b.depth);
      var h = b.parts[0], C = c.default.helpers.scopedId(b), A = !b.depth && !C && this.blockParamIndex(h);
      A ? this.opcode("lookupBlockParam", A, b.parts) : h ? b.data ? (this.options.data = !0, this.opcode("lookupData", b.depth, b.parts, b.strict)) : this.opcode("lookupOnContext", b.parts, b.falsy, b.strict, C) : this.opcode("pushContext");
    },
    StringLiteral: function(b) {
      this.opcode("pushString", b.value);
    },
    NumberLiteral: function(b) {
      this.opcode("pushLiteral", b.value);
    },
    BooleanLiteral: function(b) {
      this.opcode("pushLiteral", b.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(b) {
      var h = b.pairs, C = 0, A = h.length;
      for (this.opcode("pushHash"); C < A; C++)
        this.pushParam(h[C].value);
      for (; C--; )
        this.opcode("assignToHash", h[C].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(b) {
      this.opcodes.push({
        opcode: b,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(b) {
      b && (this.useDepths = !0);
    },
    classifySexpr: function(b) {
      var h = c.default.helpers.simpleId(b.path), C = h && !!this.blockParamIndex(b.path.parts[0]), A = !C && c.default.helpers.helperExpression(b), R = !C && (A || h);
      if (R && !A) {
        var x = b.path.parts[0], L = this.options;
        L.knownHelpers[x] ? A = !0 : L.knownHelpersOnly && (R = !1);
      }
      return A ? "helper" : R ? "ambiguous" : "simple";
    },
    pushParams: function(b) {
      for (var h = 0, C = b.length; h < C; h++)
        this.pushParam(b[h]);
    },
    pushParam: function(b) {
      var h = b.value != null ? b.value : b.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", h, b.type), b.type === "SubExpression" && this.accept(b);
      else {
        if (this.trackIds) {
          var C = void 0;
          if (b.parts && !c.default.helpers.scopedId(b) && !b.depth && (C = this.blockParamIndex(b.parts[0])), C) {
            var A = b.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", C, A);
          } else
            h = b.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", b.type, h);
        }
        this.accept(b);
      }
    },
    setupFullMustacheParams: function(b, h, C, A) {
      var R = b.params;
      return this.pushParams(R), this.opcode("pushProgram", h), this.opcode("pushProgram", C), b.hash ? this.accept(b.hash) : this.opcode("emptyHash", A), R;
    },
    blockParamIndex: function(b) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var A = this.options.blockParams[h], R = A && i.indexOf(A, b);
        if (A && R >= 0)
          return [h, R];
      }
    }
  };
  function p(y, b, h) {
    if (y == null || typeof y != "string" && y.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + y);
    b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
    var C = h.parse(y, b), A = new h.Compiler().compile(C, b);
    return new h.JavaScriptCompiler().compile(A, b);
  }
  function _(y, b, h) {
    if (b === void 0 && (b = {}), y == null || typeof y != "string" && y.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + y);
    b = i.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
    var C = void 0;
    function A() {
      var x = h.parse(y, b), L = new h.Compiler().compile(x, b), l = new h.JavaScriptCompiler().compile(L, b, void 0, !0);
      return h.template(l);
    }
    function R(x, L) {
      return C || (C = A()), C.call(this, x, L);
    }
    return R._setup = function(x) {
      return C || (C = A()), C._setup(x);
    }, R._child = function(x, L, l, S) {
      return C || (C = A()), C._child(x, L, l, S);
    }, R;
  }
  function g(y, b) {
    if (y === b)
      return !0;
    if (i.isArray(y) && i.isArray(b) && y.length === b.length) {
      for (var h = 0; h < y.length; h++)
        if (!g(y[h], b[h]))
          return !1;
      return !0;
    }
  }
  function E(y) {
    if (!y.path.parts) {
      var b = y.path;
      y.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [b.original + ""],
        original: b.original + "",
        loc: b.loc
      };
    }
  }
  return Ai;
}
var $u = { exports: {} }, Xu = { exports: {} }, Bs = {}, af = {}, Fu = {}, Qu = {}, e0;
function mS() {
  if (e0) return Qu;
  e0 = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Qu.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Qu.decode = function(r) {
    var s = 65, i = 90, u = 97, c = 122, f = 48, m = 57, p = 43, _ = 47, g = 26, E = 52;
    return s <= r && r <= i ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == _ ? 63 : -1;
  }, Qu;
}
var t0;
function Ny() {
  if (t0) return Fu;
  t0 = 1;
  var n = mS(), r = 5, s = 1 << r, i = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, _ = m >> 1;
    return p ? -_ : _;
  }
  return Fu.encode = function(p) {
    var _ = "", g, E = c(p);
    do
      g = E & i, E >>>= r, E > 0 && (g |= u), _ += n.encode(g);
    while (E > 0);
    return _;
  }, Fu.decode = function(p, _, g) {
    var E = p.length, y = 0, b = 0, h, C;
    do {
      if (_ >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(_++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(_ - 1));
      h = !!(C & u), C &= i, y = y + (C << b), b += r;
    } while (h);
    g.value = f(y), g.rest = _;
  }, Fu;
}
var sf = {}, n0;
function ao() {
  return n0 || (n0 = 1, (function(n) {
    function r(l, S, w) {
      if (S in l)
        return l[S];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + S + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, i = /^data:.+\,.+$/;
    function u(l) {
      var S = l.match(s);
      return S ? {
        scheme: S[1],
        auth: S[2],
        host: S[3],
        port: S[4],
        path: S[5]
      } : null;
    }
    n.urlParse = u;
    function c(l) {
      var S = "";
      return l.scheme && (S += l.scheme + ":"), S += "//", l.auth && (S += l.auth + "@"), l.host && (S += l.host), l.port && (S += ":" + l.port), l.path && (S += l.path), S;
    }
    n.urlGenerate = c;
    function f(l) {
      var S = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        S = w.path;
      }
      for (var k = n.isAbsolute(S), O = S.split(/\/+/), z, j = 0, P = O.length - 1; P >= 0; P--)
        z = O[P], z === "." ? O.splice(P, 1) : z === ".." ? j++ : j > 0 && (z === "" ? (O.splice(P + 1, j), j = 0) : (O.splice(P, 2), j--));
      return S = O.join("/"), S === "" && (S = k ? "/" : "."), w ? (w.path = S, c(w)) : S;
    }
    n.normalize = f;
    function m(l, S) {
      l === "" && (l = "."), S === "" && (S = ".");
      var w = u(S), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || S.match(i))
        return S;
      if (k && !k.host && !k.path)
        return k.host = S, c(k);
      var O = S.charAt(0) === "/" ? S : f(l.replace(/\/+$/, "") + "/" + S);
      return k ? (k.path = O, c(k)) : O;
    }
    n.join = m, n.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function p(l, S) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; S.indexOf(l + "/") !== 0; ) {
        var k = l.lastIndexOf("/");
        if (k < 0 || (l = l.slice(0, k), l.match(/^([^\/]+:\/)?\/*$/)))
          return S;
        ++w;
      }
      return Array(w + 1).join("../") + S.substr(l.length + 1);
    }
    n.relative = p;
    var _ = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function g(l) {
      return l;
    }
    function E(l) {
      return b(l) ? "$" + l : l;
    }
    n.toSetString = _ ? g : E;
    function y(l) {
      return b(l) ? l.slice(1) : l;
    }
    n.fromSetString = _ ? g : y;
    function b(l) {
      if (!l)
        return !1;
      var S = l.length;
      if (S < 9 || l.charCodeAt(S - 1) !== 95 || l.charCodeAt(S - 2) !== 95 || l.charCodeAt(S - 3) !== 111 || l.charCodeAt(S - 4) !== 116 || l.charCodeAt(S - 5) !== 111 || l.charCodeAt(S - 6) !== 114 || l.charCodeAt(S - 7) !== 112 || l.charCodeAt(S - 8) !== 95 || l.charCodeAt(S - 9) !== 95)
        return !1;
      for (var w = S - 10; w >= 0; w--)
        if (l.charCodeAt(w) !== 36)
          return !1;
      return !0;
    }
    function h(l, S, w) {
      var k = A(l.source, S.source);
      return k !== 0 || (k = l.originalLine - S.originalLine, k !== 0) || (k = l.originalColumn - S.originalColumn, k !== 0 || w) || (k = l.generatedColumn - S.generatedColumn, k !== 0) || (k = l.generatedLine - S.generatedLine, k !== 0) ? k : A(l.name, S.name);
    }
    n.compareByOriginalPositions = h;
    function C(l, S, w) {
      var k = l.generatedLine - S.generatedLine;
      return k !== 0 || (k = l.generatedColumn - S.generatedColumn, k !== 0 || w) || (k = A(l.source, S.source), k !== 0) || (k = l.originalLine - S.originalLine, k !== 0) || (k = l.originalColumn - S.originalColumn, k !== 0) ? k : A(l.name, S.name);
    }
    n.compareByGeneratedPositionsDeflated = C;
    function A(l, S) {
      return l === S ? 0 : l === null ? 1 : S === null ? -1 : l > S ? 1 : -1;
    }
    function R(l, S) {
      var w = l.generatedLine - S.generatedLine;
      return w !== 0 || (w = l.generatedColumn - S.generatedColumn, w !== 0) || (w = A(l.source, S.source), w !== 0) || (w = l.originalLine - S.originalLine, w !== 0) || (w = l.originalColumn - S.originalColumn, w !== 0) ? w : A(l.name, S.name);
    }
    n.compareByGeneratedPositionsInflated = R;
    function x(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = x;
    function L(l, S, w) {
      if (S = S || "", l && (l[l.length - 1] !== "/" && S[0] !== "/" && (l += "/"), S = l + S), w) {
        var k = u(w);
        if (!k)
          throw new Error("sourceMapURL could not be parsed");
        if (k.path) {
          var O = k.path.lastIndexOf("/");
          O >= 0 && (k.path = k.path.substring(0, O + 1));
        }
        S = m(c(k), S);
      }
      return f(S);
    }
    n.computeSourceURL = L;
  })(sf)), sf;
}
var of = {}, r0;
function Oy() {
  if (r0) return of;
  r0 = 1;
  var n = ao(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function i() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return i.fromArray = function(c, f) {
    for (var m = new i(), p = 0, _ = c.length; p < _; p++)
      m.add(c[p], f);
    return m;
  }, i.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, i.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), _ = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, _) : this._set[m] = _);
  }, i.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = n.toSetString(c);
    return r.call(this._set, f);
  }, i.prototype.indexOf = function(c) {
    if (s) {
      var f = this._set.get(c);
      if (f >= 0)
        return f;
    } else {
      var m = n.toSetString(c);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, i.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, i.prototype.toArray = function() {
    return this._array.slice();
  }, of.ArraySet = i, of;
}
var uf = {}, a0;
function gS() {
  if (a0) return uf;
  a0 = 1;
  var n = ao();
  function r(i, u) {
    var c = i.generatedLine, f = u.generatedLine, m = i.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(i, u) <= 0;
  }
  function s() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return s.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, s.prototype.add = function(u) {
    r(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, s.prototype.toArray = function() {
    return this._sorted || (this._array.sort(n.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, uf.MappingList = s, uf;
}
var i0;
function My() {
  if (i0) return af;
  i0 = 1;
  var n = Ny(), r = ao(), s = Oy().ArraySet, i = gS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new i(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(f) {
    var m = f.sourceRoot, p = new u({
      file: f.file,
      sourceRoot: m
    });
    return f.eachMapping(function(_) {
      var g = {
        generated: {
          line: _.generatedLine,
          column: _.generatedColumn
        }
      };
      _.source != null && (g.source = _.source, m != null && (g.source = r.relative(m, g.source)), g.original = {
        line: _.originalLine,
        column: _.originalColumn
      }, _.name != null && (g.name = _.name)), p.addMapping(g);
    }), f.sources.forEach(function(_) {
      var g = _;
      m !== null && (g = r.relative(m, _)), p._sources.has(g) || p._sources.add(g);
      var E = f.sourceContentFor(_);
      E != null && p.setSourceContent(_, E);
    }), p;
  }, u.prototype.addMapping = function(f) {
    var m = r.getArg(f, "generated"), p = r.getArg(f, "original", null), _ = r.getArg(f, "source", null), g = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(m, p, _, g), _ != null && (_ = String(_), this._sources.has(_) || this._sources.add(_)), g != null && (g = String(g), this._names.has(g) || this._names.add(g)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: p != null && p.line,
      originalColumn: p != null && p.column,
      source: _,
      name: g
    });
  }, u.prototype.setSourceContent = function(f, m) {
    var p = f;
    this._sourceRoot != null && (p = r.relative(this._sourceRoot, p)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(p)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(p)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(f, m, p) {
    var _ = m;
    if (m == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      _ = f.file;
    }
    var g = this._sourceRoot;
    g != null && (_ = r.relative(g, _));
    var E = new s(), y = new s();
    this._mappings.unsortedForEach(function(b) {
      if (b.source === _ && b.originalLine != null) {
        var h = f.originalPositionFor({
          line: b.originalLine,
          column: b.originalColumn
        });
        h.source != null && (b.source = h.source, p != null && (b.source = r.join(p, b.source)), g != null && (b.source = r.relative(g, b.source)), b.originalLine = h.line, b.originalColumn = h.column, h.name != null && (b.name = h.name));
      }
      var C = b.source;
      C != null && !E.has(C) && E.add(C);
      var A = b.name;
      A != null && !y.has(A) && y.add(A);
    }, this), this._sources = E, this._names = y, f.sources.forEach(function(b) {
      var h = f.sourceContentFor(b);
      h != null && (p != null && (b = r.join(p, b)), g != null && (b = r.relative(g, b)), this.setSourceContent(b, h));
    }, this);
  }, u.prototype._validateMapping = function(f, m, p, _) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !m && !p && !_)) {
      if (f && "line" in f && "column" in f && m && "line" in m && "column" in m && f.line > 0 && f.column >= 0 && m.line > 0 && m.column >= 0 && p)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: p,
        original: m,
        name: _
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var f = 0, m = 1, p = 0, _ = 0, g = 0, E = 0, y = "", b, h, C, A, R = this._mappings.toArray(), x = 0, L = R.length; x < L; x++) {
      if (h = R[x], b = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          b += ";", m++;
      else if (x > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, R[x - 1]))
          continue;
        b += ",";
      }
      b += n.encode(h.generatedColumn - f), f = h.generatedColumn, h.source != null && (A = this._sources.indexOf(h.source), b += n.encode(A - E), E = A, b += n.encode(h.originalLine - 1 - _), _ = h.originalLine - 1, b += n.encode(h.originalColumn - p), p = h.originalColumn, h.name != null && (C = this._names.indexOf(h.name), b += n.encode(C - g), g = C)), y += b;
    }
    return y;
  }, u.prototype._generateSourcesContent = function(f, m) {
    return f.map(function(p) {
      if (!this._sourcesContents)
        return null;
      m != null && (p = r.relative(m, p));
      var _ = r.toSetString(p);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, _) ? this._sourcesContents[_] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, af.SourceMapGenerator = u, af;
}
var Us = {}, lf = {}, s0;
function vS() {
  return s0 || (s0 = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, i, u, c, f, m) {
      var p = Math.floor((i - s) / 2) + s, _ = f(u, c[p], !0);
      return _ === 0 ? p : _ > 0 ? i - p > 1 ? r(p, i, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? i < c.length ? i : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(i, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        i,
        u,
        c,
        f || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(lf)), lf;
}
var cf = {}, o0;
function yS() {
  if (o0) return cf;
  o0 = 1;
  function n(i, u, c) {
    var f = i[u];
    i[u] = i[c], i[c] = f;
  }
  function r(i, u) {
    return Math.round(i + Math.random() * (u - i));
  }
  function s(i, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(i, m, f);
      for (var _ = i[f], g = c; g < f; g++)
        u(i[g], _) <= 0 && (p += 1, n(i, p, g));
      n(i, p + 1, g);
      var E = p + 1;
      s(i, u, c, E - 1), s(i, u, E + 1, f);
    }
  }
  return cf.quickSort = function(i, u) {
    s(i, u, 0, i.length - 1);
  }, cf;
}
var u0;
function _S() {
  if (u0) return Us;
  u0 = 1;
  var n = ao(), r = vS(), s = Oy().ArraySet, i = Ny(), u = yS().quickSort;
  function c(_, g) {
    var E = _;
    return typeof _ == "string" && (E = n.parseSourceMapInput(_)), E.sections != null ? new p(E, g) : new f(E, g);
  }
  c.fromSourceMap = function(_, g) {
    return f.fromSourceMap(_, g);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(g, E) {
    var y = g.charAt(E);
    return y === ";" || y === ",";
  }, c.prototype._parseMappings = function(g, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(g, E, y) {
    var b = E || null, h = y || c.GENERATED_ORDER, C;
    switch (h) {
      case c.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var A = this.sourceRoot;
    C.map(function(R) {
      var x = R.source === null ? null : this._sources.at(R.source);
      return x = n.computeSourceURL(A, x, this._sourceMapURL), {
        source: x,
        generatedLine: R.generatedLine,
        generatedColumn: R.generatedColumn,
        originalLine: R.originalLine,
        originalColumn: R.originalColumn,
        name: R.name === null ? null : this._names.at(R.name)
      };
    }, this).forEach(g, b);
  }, c.prototype.allGeneratedPositionsFor = function(g) {
    var E = n.getArg(g, "line"), y = {
      source: n.getArg(g, "source"),
      originalLine: E,
      originalColumn: n.getArg(g, "column", 0)
    };
    if (y.source = this._findSourceIndex(y.source), y.source < 0)
      return [];
    var b = [], h = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var C = this._originalMappings[h];
      if (g.column === void 0)
        for (var A = C.originalLine; C && C.originalLine === A; )
          b.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
      else
        for (var R = C.originalColumn; C && C.originalLine === E && C.originalColumn == R; )
          b.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return b;
  }, Us.SourceMapConsumer = c;
  function f(_, g) {
    var E = _;
    typeof _ == "string" && (E = n.parseSourceMapInput(_));
    var y = n.getArg(E, "version"), b = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), A = n.getArg(E, "sourcesContent", null), R = n.getArg(E, "mappings"), x = n.getArg(E, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    C && (C = n.normalize(C)), b = b.map(String).map(n.normalize).map(function(L) {
      return C && n.isAbsolute(C) && n.isAbsolute(L) ? n.relative(C, L) : L;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(b, !0), this._absoluteSources = this._sources.toArray().map(function(L) {
      return n.computeSourceURL(C, L, g);
    }), this.sourceRoot = C, this.sourcesContent = A, this._mappings = R, this._sourceMapURL = g, this.file = x;
  }
  f.prototype = Object.create(c.prototype), f.prototype.consumer = c, f.prototype._findSourceIndex = function(_) {
    var g = _;
    if (this.sourceRoot != null && (g = n.relative(this.sourceRoot, g)), this._sources.has(g))
      return this._sources.indexOf(g);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == _)
        return E;
    return -1;
  }, f.fromSourceMap = function(g, E) {
    var y = Object.create(f.prototype), b = y._names = s.fromArray(g._names.toArray(), !0), h = y._sources = s.fromArray(g._sources.toArray(), !0);
    y.sourceRoot = g._sourceRoot, y.sourcesContent = g._generateSourcesContent(
      y._sources.toArray(),
      y.sourceRoot
    ), y.file = g._file, y._sourceMapURL = E, y._absoluteSources = y._sources.toArray().map(function(w) {
      return n.computeSourceURL(y.sourceRoot, w, E);
    });
    for (var C = g._mappings.toArray().slice(), A = y.__generatedMappings = [], R = y.__originalMappings = [], x = 0, L = C.length; x < L; x++) {
      var l = C[x], S = new m();
      S.generatedLine = l.generatedLine, S.generatedColumn = l.generatedColumn, l.source && (S.source = h.indexOf(l.source), S.originalLine = l.originalLine, S.originalColumn = l.originalColumn, l.name && (S.name = b.indexOf(l.name)), R.push(S)), A.push(S);
    }
    return u(y.__originalMappings, n.compareByOriginalPositions), y;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(g, E) {
    for (var y = 1, b = 0, h = 0, C = 0, A = 0, R = 0, x = g.length, L = 0, l = {}, S = {}, w = [], k = [], O, z, j, P, Z; L < x; )
      if (g.charAt(L) === ";")
        y++, L++, b = 0;
      else if (g.charAt(L) === ",")
        L++;
      else {
        for (O = new m(), O.generatedLine = y, P = L; P < x && !this._charIsMappingSeparator(g, P); P++)
          ;
        if (z = g.slice(L, P), j = l[z], j)
          L += z.length;
        else {
          for (j = []; L < P; )
            i.decode(g, L, S), Z = S.value, L = S.rest, j.push(Z);
          if (j.length === 2)
            throw new Error("Found a source, but no line and column");
          if (j.length === 3)
            throw new Error("Found a source and line, but no column");
          l[z] = j;
        }
        O.generatedColumn = b + j[0], b = O.generatedColumn, j.length > 1 && (O.source = A + j[1], A += j[1], O.originalLine = h + j[2], h = O.originalLine, O.originalLine += 1, O.originalColumn = C + j[3], C = O.originalColumn, j.length > 4 && (O.name = R + j[4], R += j[4])), k.push(O), typeof O.originalLine == "number" && w.push(O);
      }
    u(k, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = k, u(w, n.compareByOriginalPositions), this.__originalMappings = w;
  }, f.prototype._findMapping = function(g, E, y, b, h, C) {
    if (g[y] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + g[y]);
    if (g[b] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + g[b]);
    return r.search(g, E, h, C);
  }, f.prototype.computeColumnSpans = function() {
    for (var g = 0; g < this._generatedMappings.length; ++g) {
      var E = this._generatedMappings[g];
      if (g + 1 < this._generatedMappings.length) {
        var y = this._generatedMappings[g + 1];
        if (E.generatedLine === y.generatedLine) {
          E.lastGeneratedColumn = y.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, y = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var b = this._generatedMappings[y];
      if (b.generatedLine === E.generatedLine) {
        var h = n.getArg(b, "source", null);
        h !== null && (h = this._sources.at(h), h = n.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var C = n.getArg(b, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: h,
          line: n.getArg(b, "originalLine", null),
          column: n.getArg(b, "originalColumn", null),
          name: C
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(g) {
      return g == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(g, E) {
    if (!this.sourcesContent)
      return null;
    var y = this._findSourceIndex(g);
    if (y >= 0)
      return this.sourcesContent[y];
    var b = g;
    this.sourceRoot != null && (b = n.relative(this.sourceRoot, b));
    var h;
    if (this.sourceRoot != null && (h = n.urlParse(this.sourceRoot))) {
      var C = b.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + b))
        return this.sourcesContent[this._sources.indexOf("/" + b)];
    }
    if (E)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(g) {
    var E = n.getArg(g, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var y = {
      source: E,
      originalLine: n.getArg(g, "line"),
      originalColumn: n.getArg(g, "column")
    }, b = this._findMapping(
      y,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(g, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var h = this._originalMappings[b];
      if (h.source === y.source)
        return {
          line: n.getArg(h, "generatedLine", null),
          column: n.getArg(h, "generatedColumn", null),
          lastColumn: n.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Us.BasicSourceMapConsumer = f;
  function p(_, g) {
    var E = _;
    typeof _ == "string" && (E = n.parseSourceMapInput(_));
    var y = n.getArg(E, "version"), b = n.getArg(E, "sections");
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    this._sources = new s(), this._names = new s();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = b.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var A = n.getArg(C, "offset"), R = n.getArg(A, "line"), x = n.getArg(A, "column");
      if (R < h.line || R === h.line && x < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = A, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: R + 1,
          generatedColumn: x + 1
        },
        consumer: new c(n.getArg(C, "map"), g)
      };
    });
  }
  return p.prototype = Object.create(c.prototype), p.prototype.constructor = c, p.prototype._version = 3, Object.defineProperty(p.prototype, "sources", {
    get: function() {
      for (var _ = [], g = 0; g < this._sections.length; g++)
        for (var E = 0; E < this._sections[g].consumer.sources.length; E++)
          _.push(this._sections[g].consumer.sources[E]);
      return _;
    }
  }), p.prototype.originalPositionFor = function(g) {
    var E = {
      generatedLine: n.getArg(g, "line"),
      generatedColumn: n.getArg(g, "column")
    }, y = r.search(
      E,
      this._sections,
      function(h, C) {
        var A = h.generatedLine - C.generatedOffset.generatedLine;
        return A || h.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), b = this._sections[y];
    return b ? b.consumer.originalPositionFor({
      line: E.generatedLine - (b.generatedOffset.generatedLine - 1),
      column: E.generatedColumn - (b.generatedOffset.generatedLine === E.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
      bias: g.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, p.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(g) {
      return g.consumer.hasContentsOfAllSources();
    });
  }, p.prototype.sourceContentFor = function(g, E) {
    for (var y = 0; y < this._sections.length; y++) {
      var b = this._sections[y], h = b.consumer.sourceContentFor(g, !0);
      if (h)
        return h;
    }
    if (E)
      return null;
    throw new Error('"' + g + '" is not in the SourceMap.');
  }, p.prototype.generatedPositionFor = function(g) {
    for (var E = 0; E < this._sections.length; E++) {
      var y = this._sections[E];
      if (y.consumer._findSourceIndex(n.getArg(g, "source")) !== -1) {
        var b = y.consumer.generatedPositionFor(g);
        if (b) {
          var h = {
            line: b.line + (y.generatedOffset.generatedLine - 1),
            column: b.column + (y.generatedOffset.generatedLine === b.line ? y.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, p.prototype._parseMappings = function(g, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var y = 0; y < this._sections.length; y++)
      for (var b = this._sections[y], h = b.consumer._generatedMappings, C = 0; C < h.length; C++) {
        var A = h[C], R = b.consumer._sources.at(A.source);
        R = n.computeSourceURL(b.consumer.sourceRoot, R, this._sourceMapURL), this._sources.add(R), R = this._sources.indexOf(R);
        var x = null;
        A.name && (x = b.consumer._names.at(A.name), this._names.add(x), x = this._names.indexOf(x));
        var L = {
          source: R,
          generatedLine: A.generatedLine + (b.generatedOffset.generatedLine - 1),
          generatedColumn: A.generatedColumn + (b.generatedOffset.generatedLine === A.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
          originalLine: A.originalLine,
          originalColumn: A.originalColumn,
          name: x
        };
        this.__generatedMappings.push(L), typeof L.originalLine == "number" && this.__originalMappings.push(L);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, Us.IndexedSourceMapConsumer = p, Us;
}
var df = {}, l0;
function bS() {
  if (l0) return df;
  l0 = 1;
  var n = My().SourceMapGenerator, r = ao(), s = /(\r?\n)/, i = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, _, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, _ != null && this.add(_);
  }
  return c.fromStringWithSourceMap = function(m, p, _) {
    var g = new c(), E = m.split(s), y = 0, b = function() {
      var x = l(), L = l() || "";
      return x + L;
      function l() {
        return y < E.length ? E[y++] : void 0;
      }
    }, h = 1, C = 0, A = null;
    return p.eachMapping(function(x) {
      if (A !== null)
        if (h < x.generatedLine)
          R(A, b()), h++, C = 0;
        else {
          var L = E[y] || "", l = L.substr(0, x.generatedColumn - C);
          E[y] = L.substr(x.generatedColumn - C), C = x.generatedColumn, R(A, l), A = x;
          return;
        }
      for (; h < x.generatedLine; )
        g.add(b()), h++;
      if (C < x.generatedColumn) {
        var L = E[y] || "";
        g.add(L.substr(0, x.generatedColumn)), E[y] = L.substr(x.generatedColumn), C = x.generatedColumn;
      }
      A = x;
    }, this), y < E.length && (A && R(A, b()), g.add(E.splice(y).join(""))), p.sources.forEach(function(x) {
      var L = p.sourceContentFor(x);
      L != null && (_ != null && (x = r.join(_, x)), g.setSourceContent(x, L));
    }), g;
    function R(x, L) {
      if (x === null || x.source === void 0)
        g.add(L);
      else {
        var l = _ ? r.join(_, x.source) : x.source;
        g.add(new c(
          x.originalLine,
          x.originalColumn,
          l,
          L,
          x.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(p) {
        this.add(p);
      }, this);
    else if (m[u] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var p = m.length - 1; p >= 0; p--)
        this.prepend(m[p]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var p, _ = 0, g = this.children.length; _ < g; _++)
      p = this.children[_], p[u] ? p.walk(m) : p !== "" && m(p, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var p, _, g = this.children.length;
    if (g > 0) {
      for (p = [], _ = 0; _ < g - 1; _++)
        p.push(this.children[_]), p.push(m);
      p.push(this.children[_]), this.children = p;
    }
    return this;
  }, c.prototype.replaceRight = function(m, p) {
    var _ = this.children[this.children.length - 1];
    return _[u] ? _.replaceRight(m, p) : typeof _ == "string" ? this.children[this.children.length - 1] = _.replace(m, p) : this.children.push("".replace(m, p)), this;
  }, c.prototype.setSourceContent = function(m, p) {
    this.sourceContents[r.toSetString(m)] = p;
  }, c.prototype.walkSourceContents = function(m) {
    for (var p = 0, _ = this.children.length; p < _; p++)
      this.children[p][u] && this.children[p].walkSourceContents(m);
    for (var g = Object.keys(this.sourceContents), p = 0, _ = g.length; p < _; p++)
      m(r.fromSetString(g[p]), this.sourceContents[g[p]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(p) {
      m += p;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var p = {
      code: "",
      line: 1,
      column: 0
    }, _ = new n(m), g = !1, E = null, y = null, b = null, h = null;
    return this.walk(function(C, A) {
      p.code += C, A.source !== null && A.line !== null && A.column !== null ? ((E !== A.source || y !== A.line || b !== A.column || h !== A.name) && _.addMapping({
        source: A.source,
        original: {
          line: A.line,
          column: A.column
        },
        generated: {
          line: p.line,
          column: p.column
        },
        name: A.name
      }), E = A.source, y = A.line, b = A.column, h = A.name, g = !0) : g && (_.addMapping({
        generated: {
          line: p.line,
          column: p.column
        }
      }), E = null, g = !1);
      for (var R = 0, x = C.length; R < x; R++)
        C.charCodeAt(R) === i ? (p.line++, p.column = 0, R + 1 === x ? (E = null, g = !1) : g && _.addMapping({
          source: A.source,
          original: {
            line: A.line,
            column: A.column
          },
          generated: {
            line: p.line,
            column: p.column
          },
          name: A.name
        })) : p.column++;
    }), this.walkSourceContents(function(C, A) {
      _.setSourceContent(C, A);
    }), { code: p.code, map: _ };
  }, df.SourceNode = c, df;
}
var c0;
function SS() {
  return c0 || (c0 = 1, Bs.SourceMapGenerator = My().SourceMapGenerator, Bs.SourceMapConsumer = _S().SourceMapConsumer, Bs.SourceNode = bS().SourceNode), Bs;
}
var d0;
function wS() {
  return d0 || (d0 = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), i = void 0;
    try {
      var u = SS();
      i = u.SourceNode;
    } catch {
    }
    i || (i = function(m, p, _, g) {
      this.src = "", g && this.add(g);
    }, i.prototype = {
      add: function(p) {
        s.isArray(p) && (p = p.join("")), this.src += p;
      },
      prepend: function(p) {
        s.isArray(p) && (p = p.join("")), this.src = p + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, p, _) {
      if (s.isArray(m)) {
        for (var g = [], E = 0, y = m.length; E < y; E++)
          g.push(p.wrap(m[E], _));
        return g;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function f(m) {
      this.srcFile = m, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(p, _) {
        this.source.unshift(this.wrap(p, _));
      },
      push: function(p, _) {
        this.source.push(this.wrap(p, _));
      },
      merge: function() {
        var p = this.empty();
        return this.each(function(_) {
          p.add(["  ", _, `
`]);
        }), p;
      },
      each: function(p) {
        for (var _ = 0, g = this.source.length; _ < g; _++)
          p(this.source[_]);
      },
      empty: function() {
        var p = this.currentLocation || { start: {} };
        return new i(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var _ = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof i ? p : (p = c(p, this, _), new i(_.start.line, _.start.column, this.srcFile, p));
      },
      functionCall: function(p, _, g) {
        return g = this.generateList(g), this.wrap([p, _ ? "." + _ + "(" : "(", g, ")"]);
      },
      quotedString: function(p) {
        return '"' + (p + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(p) {
        var _ = this, g = [];
        Object.keys(p).forEach(function(y) {
          var b = c(p[y], _);
          b !== "undefined" && g.push([_.quotedString(y), ":", b]);
        });
        var E = this.generateList(g);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(p) {
        for (var _ = this.empty(), g = 0, E = p.length; g < E; g++)
          g && _.add(","), _.add(c(p[g], this));
        return _;
      },
      generateArray: function(p) {
        var _ = this.generateList(p);
        return _.prepend("["), _.add("]"), _;
      }
    }, r.default = f, n.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var f0;
function ES() {
  return f0 || (f0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var i = Vf(), u = Hn(), c = s(u), f = on(), m = wS(), p = s(m);
    function _(y) {
      this.value = y;
    }
    function g() {
    }
    g.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(b, h) {
        return this.internalNameLookup(b, h);
      },
      depthedLookup: function(b) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(b), ")"];
      },
      compilerInfo: function() {
        var b = i.COMPILER_REVISION, h = i.REVISION_CHANGES[b];
        return [b, h];
      },
      appendToBuffer: function(b, h, C) {
        return f.isArray(b) || (b = [b]), b = this.source.wrap(b, h), this.environment.isSimple ? ["return ", b, ";"] : C ? ["buffer += ", b, ";"] : (b.appendToBuffer = !0, b);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(b, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", b, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(b, h, C, A) {
        this.environment = b, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !A, this.name = this.environment.name, this.isChild = !!C, this.context = C || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(b, h), this.useDepths = this.useDepths || b.useDepths || b.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || b.useBlockParams;
        var R = b.opcodes, x = void 0, L = void 0, l = void 0, S = void 0;
        for (l = 0, S = R.length; l < S; l++)
          x = R[l], this.source.currentLocation = x.loc, L = L || x.loc, this[x.opcode].apply(this, x.args);
        if (this.source.currentLocation = L, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), A ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(A);
        if (this.isChild)
          return w;
        var k = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (k.main_d = this.decorators, k.useDecorators = !0);
        var O = this.context, z = O.programs, j = O.decorators;
        for (l = 0, S = z.length; l < S; l++)
          z[l] && (k[l] = z[l], j[l] && (k[l + "_d"] = j[l], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), A ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(b) {
        var h = this, C = "", A = this.stackVars.concat(this.registers.list);
        A.length > 0 && (C += ", " + A.join(", "));
        var R = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var S = h.aliases[l];
          S.children && S.referenceCount > 1 && (C += ", alias" + ++R + "=" + l, S.children[0] = "alias" + R);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var x = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths");
        var L = this.mergeSource(C);
        return b ? (x.push(L), Function.apply(this, x)) : this.source.wrap(["function(", x.join(","), `) {
  `, L, "}"]);
      },
      mergeSource: function(b) {
        var h = this.environment.isSimple, C = !this.forceBuffer, A = void 0, R = void 0, x = void 0, L = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (x ? l.prepend("  + ") : x = l, L = l) : (x && (R ? x.prepend("buffer += ") : A = !0, L.add(";"), x = L = void 0), R = !0, h || (C = !1));
        }), C ? x ? (x.prepend("return "), L.add(";")) : R || this.source.push('return "";') : (b += ", buffer = " + (A ? "" : this.initializeBuffer()), x ? (x.prepend("return buffer + "), L.add(";")) : this.source.push("return buffer;")), b && this.source.prepend("var " + b.substring(2) + (A ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(b) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), C = [this.contextName(0)];
        this.setupHelperArgs(b, 0, C);
        var A = this.popStack();
        C.splice(1, 0, A), this.push(this.source.functionCall(h, "call", C));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var b = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var C = this.topStack();
        h.splice(1, 0, C), this.pushSource(["if (!", this.lastHelper, ") { ", C, " = ", this.source.functionCall(b, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(b) {
        this.pendingContent ? b = this.pendingContent + b : this.pendingLocation = this.source.currentLocation, this.pendingContent = b;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var b = this.popStack();
          this.pushSource(["if (", b, " != null) { ", this.appendToBuffer(b, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(b) {
        this.lastContext = b;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(b, h, C, A) {
        var R = 0;
        !A && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(b[R++])) : this.pushContext(), this.resolvePath("context", b, R, h, C);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(b, h) {
        this.useBlockParams = !0, this.push(["blockParams[", b[0], "][", b[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(b, h, C) {
        b ? this.pushStackLiteral("container.data(data, " + b + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, C);
      },
      resolvePath: function(b, h, C, A, R) {
        var x = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && R, this, h, C, b));
          return;
        }
        for (var L = h.length; C < L; C++)
          this.replaceStack(function(l) {
            var S = x.nameLookup(l, h[C], b);
            return A ? [" && ", S] : [" != null ? ", S, " : ", l];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(b, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof b == "string" ? this.pushString(b) : this.pushStackLiteral(b));
      },
      emptyHash: function(b) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(b ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var b = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(b.ids)), this.stringParams && (this.push(this.objectLiteral(b.contexts)), this.push(this.objectLiteral(b.types))), this.push(this.objectLiteral(b.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(b) {
        this.pushStackLiteral(this.quotedString(b));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(b) {
        this.pushStackLiteral(b);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(b) {
        b != null ? this.pushStackLiteral(this.programExpression(b)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(b, h) {
        var C = this.nameLookup("decorators", h, "decorator"), A = this.setupHelperArgs(h, b);
        this.decorators.push(["fn = ", this.decorators.functionCall(C, "", ["fn", "props", "container", A]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(b, h, C) {
        var A = this.popStack(), R = this.setupHelper(b, h), x = [];
        C && x.push(R.name), x.push(A), this.options.strict || x.push(this.aliasable("container.hooks.helperMissing"));
        var L = ["(", this.itemsSeparatedBy(x, "||"), ")"], l = this.source.functionCall(L, "call", R.callParams);
        this.push(l);
      },
      itemsSeparatedBy: function(b, h) {
        var C = [];
        C.push(b[0]);
        for (var A = 1; A < b.length; A++)
          C.push(h, b[A]);
        return C;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(b, h) {
        var C = this.setupHelper(b, h);
        this.push(this.source.functionCall(C.name, "call", C.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(b, h) {
        this.useRegister("helper");
        var C = this.popStack();
        this.emptyHash();
        var A = this.setupHelper(0, b, h), R = this.lastHelper = this.nameLookup("helpers", b, "helper"), x = ["(", "(helper = ", R, " || ", C, ")"];
        this.options.strict || (x[0] = "(helper = ", x.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", x, A.paramsInit ? ["),(", A.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", A.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(b, h, C) {
        var A = [], R = this.setupParams(h, 1, A);
        b && (h = this.popStack(), delete R.name), C && (R.indent = JSON.stringify(C)), R.helpers = "helpers", R.partials = "partials", R.decorators = "container.decorators", b ? A.unshift(h) : A.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (R.depths = "depths"), R = this.objectLiteral(R), A.push(R), this.push(this.source.functionCall("container.invokePartial", "", A));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(b) {
        var h = this.popStack(), C = void 0, A = void 0, R = void 0;
        this.trackIds && (R = this.popStack()), this.stringParams && (A = this.popStack(), C = this.popStack());
        var x = this.hash;
        C && (x.contexts[b] = C), A && (x.types[b] = A), R && (x.ids[b] = R), x.values[b] = h;
      },
      pushId: function(b, h, C) {
        b === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : b === "PathExpression" ? this.pushString(h) : b === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(b, h) {
        for (var C = b.children, A = void 0, R = void 0, x = 0, L = C.length; x < L; x++) {
          A = C[x], R = new this.compiler();
          var l = this.matchExistingProgram(A);
          if (l == null) {
            this.context.programs.push("");
            var S = this.context.programs.length;
            A.index = S, A.name = "program" + S, this.context.programs[S] = R.compile(A, h, this.context, !this.precompile), this.context.decorators[S] = R.decorators, this.context.environments[S] = A, this.useDepths = this.useDepths || R.useDepths, this.useBlockParams = this.useBlockParams || R.useBlockParams, A.useDepths = this.useDepths, A.useBlockParams = this.useBlockParams;
          } else
            A.index = l.index, A.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams;
        }
      },
      matchExistingProgram: function(b) {
        for (var h = 0, C = this.context.environments.length; h < C; h++) {
          var A = this.context.environments[h];
          if (A && A.equals(b))
            return A;
        }
      },
      programExpression: function(b) {
        var h = this.environment.children[b], C = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths"), "container.program(" + C.join(", ") + ")";
      },
      useRegister: function(b) {
        this.registers[b] || (this.registers[b] = !0, this.registers.list.push(b));
      },
      push: function(b) {
        return b instanceof _ || (b = this.source.wrap(b)), this.inlineStack.push(b), b;
      },
      pushStackLiteral: function(b) {
        this.push(new _(b));
      },
      pushSource: function(b) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), b && this.source.push(b);
      },
      replaceStack: function(b) {
        var h = ["("], C = void 0, A = void 0, R = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var x = this.popStack(!0);
        if (x instanceof _)
          C = [x.value], h = ["(", C], R = !0;
        else {
          A = !0;
          var L = this.incrStack();
          h = ["((", this.push(L), " = ", x, ")"], C = this.topStack();
        }
        var l = b.call(this, C);
        R || this.popStack(), A && this.stackSlot--, this.push(h.concat(l, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var b = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, C = b.length; h < C; h++) {
          var A = b[h];
          if (A instanceof _)
            this.compileStack.push(A);
          else {
            var R = this.incrStack();
            this.pushSource([R, " = ", A, ";"]), this.compileStack.push(R);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(b) {
        var h = this.isInline(), C = (h ? this.inlineStack : this.compileStack).pop();
        if (!b && C instanceof _)
          return C.value;
        if (!h) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return C;
      },
      topStack: function() {
        var b = this.isInline() ? this.inlineStack : this.compileStack, h = b[b.length - 1];
        return h instanceof _ ? h.value : h;
      },
      contextName: function(b) {
        return this.useDepths && b ? "depths[" + b + "]" : "depth" + b;
      },
      quotedString: function(b) {
        return this.source.quotedString(b);
      },
      objectLiteral: function(b) {
        return this.source.objectLiteral(b);
      },
      aliasable: function(b) {
        var h = this.aliases[b];
        return h ? (h.referenceCount++, h) : (h = this.aliases[b] = this.source.wrap(b), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(b, h, C) {
        var A = [], R = this.setupHelperArgs(h, b, A, C), x = this.nameLookup("helpers", h, "helper"), L = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: A,
          paramsInit: R,
          name: x,
          callParams: [L].concat(A)
        };
      },
      setupParams: function(b, h, C) {
        var A = {}, R = [], x = [], L = [], l = !C, S = void 0;
        l && (C = []), A.name = this.quotedString(b), A.hash = this.popStack(), this.trackIds && (A.hashIds = this.popStack()), this.stringParams && (A.hashTypes = this.popStack(), A.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (A.fn = k || "container.noop", A.inverse = w || "container.noop");
        for (var O = h; O--; )
          S = this.popStack(), C[O] = S, this.trackIds && (L[O] = this.popStack()), this.stringParams && (x[O] = this.popStack(), R[O] = this.popStack());
        return l && (A.args = this.source.generateArray(C)), this.trackIds && (A.ids = this.source.generateArray(L)), this.stringParams && (A.types = this.source.generateArray(x), A.contexts = this.source.generateArray(R)), this.options.data && (A.data = "data"), this.useBlockParams && (A.blockParams = "blockParams"), A;
      },
      setupHelperArgs: function(b, h, C, A) {
        var R = this.setupParams(b, h, C);
        return R.loc = JSON.stringify(this.source.currentLocation), R = this.objectLiteral(R), A ? (this.useRegister("options"), C.push("options"), ["options=", R]) : C ? (C.push(R), "") : R;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = g.RESERVED_WORDS = {}, h = 0, C = y.length; h < C; h++)
        b[y[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(y) {
      return !g.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function E(y, b, h, C, A) {
      var R = b.popStack(), x = h.length;
      for (y && x--; C < x; C++)
        R = b.nameLookup(R, h[C], A);
      return y ? [b.aliasable("container.strict"), "(", R, ", ", b.quotedString(h[C]), ", ", JSON.stringify(b.source.currentLocation), " )"] : R;
    }
    r.default = g, n.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var h0;
function CS() {
  return h0 || (h0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var i = lS(), u = s(i), c = Ty(), f = s(c), m = hS(), p = pS(), _ = ES(), g = s(_), E = xy(), y = s(E), b = Ay(), h = s(b), C = u.default.create;
    function A() {
      var x = C();
      return x.compile = function(L, l) {
        return p.compile(L, l, x);
      }, x.precompile = function(L, l) {
        return p.precompile(L, l, x);
      }, x.AST = f.default, x.Compiler = p.Compiler, x.JavaScriptCompiler = g.default, x.Parser = m.parser, x.parse = m.parse, x.parseWithoutProcessing = m.parseWithoutProcessing, x;
    }
    var R = A();
    R.create = A, h.default(R), R.Visitor = y.default, R.default = R, r.default = R, n.exports = r.default;
  })(Au, Au.exports)), Au.exports;
}
var _n = CS();
const De = SillyTavern.getContext();
new $0("dumb", {}).getSettings();
async function Ry({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: i,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: f,
  maxResponseToken: m,
  continueFrom: p
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const g = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((x) => x.id === n);
  if (!g)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  const E = g.api ? De.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const y = {};
  y.user = "{{user}}", y.char = "{{char}}", y.persona = "{{persona}}", y.blackListedEntries = i.blackListedEntries;
  const b = r.trim();
  p && p.mode === "revise" ? y.userInstructions = "" : y.userInstructions = _n.compile(b, { noEscape: !0 })(y);
  {
    const x = {};
    Object.entries(u).filter(
      ([L, l]) => l.length > 0 && i.selectedWorldNames.includes(L) && l.some((S) => !S?.disable)
    ).forEach(([L, l]) => {
      let S = l.filter((k) => !k?.disable);
      const w = i.selectedEntryUids?.[L];
      if (w && w.length > 0) {
        const k = new Set(w);
        S = S.filter((O) => k.has(O.uid));
      }
      S.length > 0 && (x[L] = S);
    }), y.currentLorebooks = x;
  }
  {
    const x = {};
    Object.entries(i.suggestedEntries).filter(([L, l]) => l.length > 0).forEach(([L, l]) => {
      x[L] = l.filter(
        (S) => !(L === p?.worldName && S.uid === p.entry.uid && S.comment === p.entry.comment)
      );
    }), y.suggestedLorebooks = x;
  }
  const h = [];
  {
    for (const x of f) {
      if (x.promptName === "chatHistory") {
        h.push(...(await ay(E, s)).result);
        continue;
      }
      const L = c[x.promptName];
      if (!L)
        continue;
      const l = {
        role: x.role,
        content: _n.compile(L.content, { noEscape: !0 })(y)
      };
      l.content = De.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: X8(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: F8(p.worldName, p.entry)
    }), b && h.push({
      role: "user",
      content: b
    })));
  }
  const C = await De.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), A = h.find((x) => x.role === "assistant");
  if (!C.content)
    return {};
  let R = wy(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? A?.content : void 0
  });
  return Object.keys(R).length === 0 ? {} : (Object.entries(R).forEach(([x, L]) => {
    u[x] && L.forEach((l) => {
      const S = u[x]?.find((w) => w.uid === l.uid);
      S && (l.key.length === 0 && (l.key = S.key), l.comment || (l.comment = S.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), R = p ? { [p.worldName]: [R[p.worldName][0]] } : R, R);
}
function kS(n, r, s) {
  s[r] || (s[r] = []);
  const i = s[r], u = i.findIndex((m) => m.uid === n.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = i[u];
  else {
    const m = { entries: {} };
    i.forEach((g) => m.entries[g.uid] = g);
    const p = Bf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const _ = i.length > 0 ? i[i.length - 1] : void 0;
    if (_) {
      const g = p.uid;
      Object.assign(p, _), p.uid = g;
    }
    c = p, i.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function AS() {
  const n = De.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((i) => i.name?.includes(s))?.name
  }));
}
const Oi = "SillyTavern-WorldInfo-Recommender", TS = "0.3.0", xS = "F_1.5", NS = {
  EXTENSION: "worldInfoRecommender"
}, jy = ["en", "zh-CN"], Ku = [
  "stDescription",
  "currentLorebooks",
  "blackListedEntries",
  "suggestedLorebooks",
  "responseRules",
  "taskDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription",
  "reviseGlobalStateUpdate",
  "reviseGlobalStateUpdateAddedModified",
  "reviseGlobalStateUpdateRemoved"
], ot = {
  stDescription: B3,
  currentLorebooks: U3,
  blackListedEntries: H3,
  suggestedLorebooks: q3,
  responseRules: Z3,
  taskDescription: G3,
  reviseJsonPrompt: V3,
  reviseXmlPrompt: Y3,
  reviseTaskDescription: $3,
  reviseGlobalStateUpdate: Q3,
  reviseGlobalStateUpdateAddedModified: X3,
  reviseGlobalStateUpdateRemoved: F3
}, Yf = {
  version: TS,
  formatVersion: xS,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "all",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    authorNote: !0,
    worldInfo: !0,
    suggestedEntries: !0
  },
  defaultPromptEngineeringMode: "native",
  language: "en",
  prompts: {
    stDescription: {
      label: "SillyTavern Description",
      content: ot.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: ot.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: ot.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: ot.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: ot.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: ot.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: ot.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: ot.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: ot.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: ot.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: ot.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: ot.reviseGlobalStateUpdateRemoved,
      isDefault: !0,
      label: "Revise Global State (Removed)"
    }
  },
  promptPreset: "default",
  promptPresets: {
    default: {
      content: ""
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          promptName: "chatHistory",
          // this is exception, since chat history is not exactly a prompt
          enabled: !0,
          role: "system"
        },
        {
          promptName: "stDescription",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "currentLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "blackListedEntries",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "suggestedLorebooks",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "responseRules",
          enabled: !0,
          role: "system"
        },
        {
          promptName: "taskDescription",
          enabled: !0,
          role: "user"
        }
      ]
    }
  }
};
function p0(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let i = !1;
  return s.map((u, c) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = i ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return i || (i = !0), m;
    }
    return "";
  }).join("");
}
const It = new $0(NS.EXTENSION, Yf);
async function OS() {
  return new Promise((n, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const i = {
              ...Yf,
              ...s
            };
            return delete i.stWorldInfoPrompt, delete i.usingDefaultStWorldInfoPrompt, delete i.lorebookDefinitionPrompt, delete i.usingDefaultLorebookDefinitionPrompt, delete i.lorebookRulesPrompt, delete i.usingDefaultLorebookRulesPrompt, delete i.responseRulesPrompt, delete i.usingDefaultResponseRulesPrompt, i;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.2", i.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (i.prompts.taskDescription.content = ot.taskDescription, i.prompts.taskDescription.isDefault = !0) : i.prompts.taskDescription.isDefault = !1, i;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.3", i.defaultPromptEngineeringMode = "native", i.prompts || (i.prompts = {}), i.prompts.reviseJsonPrompt = {
              content: ot.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, i.prompts.reviseXmlPrompt = {
              content: ot.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, i.prompts.reviseTaskDescription = {
              content: ot.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (i.prompts.currentLorebooks.content = ot.currentLorebooks, i.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (i.prompts.blackListedEntries.content = ot.blackListedEntries, i.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (i.prompts.suggestedLorebooks.content = ot.suggestedLorebooks, i.prompts.suggestedLorebooks.isDefault = !0), i;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.4", i.prompts || (i.prompts = {}), i.prompts.reviseGlobalStateUpdate = {
              content: ot.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, i.prompts.reviseGlobalStateUpdateAddedModified = {
              content: ot.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, i.prompts.reviseGlobalStateUpdateRemoved = {
              content: ot.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, i;
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(s) {
            const i = { ...s };
            return i.formatVersion = "F_1.5", (!("language" in i) || !i.language) && (i.language = "en"), i;
          }
        }
      ]
    }).then((s) => {
      n();
    }).catch((s) => {
      console.error(`[${Oi}] Error initializing settings:`, s), Se("error", `[${Oi}] Failed to initialize settings: ${s.message}`), De.Popup.show.confirm(
        `[${Oi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((i) => {
        i && (It.resetSettings(), Se("success", `[${Oi}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const xe = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("button", { className: u, ...i, children: n });
}, Dy = ({ label: n, className: r, overrideDefaults: s = !1, type: i = "text", ...u }) => {
  const c = se.useMemo(() => {
    const f = [];
    return s || (i === "text" || i === "number" || i === "password" || i === "email" || i === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, i]);
  if (i === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: f, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ N.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: i, className: c, ...u });
}, _l = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("select", { className: u, ...i, children: n });
}, br = ({ children: n, className: r, overrideDefaults: s = !1, ...i }) => {
  const u = se.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("textarea", { className: u, ...i, children: n });
};
var MS = Y0(), Pt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Pt || {}), Fr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Fr || {});
const RS = SillyTavern.getContext(), Jn = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: i = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = se.useRef(null), p = se.useRef(null), [_, g] = se.useState(!1), [E, y] = se.useState(null), b = se.useRef(RS.uuidv4()), h = se.useRef({
    id: b.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  se.useEffect(() => {
    const x = m.current;
    if (!x) return;
    const L = (l) => {
      l.preventDefault(), u || C(Fr.CANCELLED);
    };
    return x.addEventListener("cancel", L), h.current.dlg = x, h.current.mainInput = p.current, Si.util.popups.push(h.current), x.showModal || (x.classList.add("poly_dialog"), $g.registerDialog(x), new ResizeObserver((l) => {
      for (const S of l)
        $g.reposition(S.target);
    }).observe(x)), x.showModal(), Ud(), () => {
      Yg(Si.util.popups, h.current), Ud(), x.removeEventListener("cancel", L);
    };
  }, []);
  const C = async (x) => {
    var L, l;
    let S = x;
    if (r === Pt.INPUT && (x >= Fr.AFFIRMATIVE ? S = (L = p.current) == null ? void 0 : L.value : x === Fr.NEGATIVE ? S = !1 : x === Fr.CANCELLED ? S = null : S = !1), (l = i.customInputs) != null && l.length) {
      const k = new Map(
        i.customInputs.map((O) => {
          var z;
          const j = (z = m.current) == null ? void 0 : z.querySelector(`#${O.id}`);
          return [j.id, j.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = x, h.current.value = S, i.onClosing && !await i.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Si.util.lastResult = {
      value: S,
      result: x,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Ud(), F1(w, async () => {
      var k;
      if (w.close(), i.onClose && await i.onClose(h.current), Yg(Si.util.popups, h.current), Si.util.popups.length > 0) {
        const O = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), z = O?.getAttribute("data-id"), j = Si.util.popups.find((P) => P.id === z);
        j && j.lastFocus && j.lastFocus.focus();
      }
      c(S);
    }));
  }, A = (x) => {
    x.target instanceof HTMLElement && x.target !== m.current && (y(x.target), h.current.lastFocus = x.target);
  }, R = async (x) => {
  };
  return MS.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const x = ["popup"];
          return i.wide && x.push("wide_dialogue_popup"), i.wider && x.push("wider_dialogue_popup"), i.large && x.push("large_dialogue_popup"), i.transparent && x.push("transparent_dialogue_popup"), i.allowHorizontalScrolling && x.push("horizontal_scrolling_dialogue_popup"), i.allowVerticalScrolling && x.push("vertical_scrolling_dialogue_popup"), i.animation && x.push(`popup--animation-${i.animation}`), x.join(" ");
        })(),
        "data-id": b.current,
        onKeyDown: R,
        onFocus: A,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: n }),
          r === Pt.INPUT && /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: i.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          i.customInputs && /* @__PURE__ */ N.jsx("div", { className: "popup-inputs", children: i.customInputs.map((x) => /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: x.id, children: [
            /* @__PURE__ */ N.jsx("input", { type: "checkbox", id: x.id, defaultChecked: x.defaultState }),
            /* @__PURE__ */ N.jsx("span", { "data-i18n": x.label, children: x.label }),
            x.tooltip && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: x.tooltip,
                "data-i18n": `[title]${x.tooltip}`
              }
            )
          ] }, x.id)) }),
          r !== Pt.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (f = i.customButtons) == null ? void 0 : f.map((x, L) => {
              const l = typeof x == "string" ? { text: x, result: L + 2 } : x;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var S;
                    (S = l.action) == null || S.call(l), C(l.result ?? L + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                L
              );
            }),
            r !== Pt.DISPLAY && i.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Fr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof i.okButton == "string" ? i.okButton : "OK"
              }
            ),
            r !== Pt.DISPLAY && i.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Fr.NEGATIVE),
                "data-result": "0",
                children: typeof i.cancelButton == "string" ? i.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Pt.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Fr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Hs = (n, r, s) => {
  if (!n || !n.api)
    return !1;
  const i = s[n.api];
  if (!i || !Object.hasOwn(r, i.selected))
    return !1;
  switch (i.selected) {
    case "openai":
      return !!i.source;
    case "textgenerationwebui":
      return !!i.type;
  }
  return !1;
}, yr = SillyTavern.getContext(), zy = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: i,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = se.useState(n ?? ""), [_, g] = se.useState(Date.now()), { isEnabled: E, profiles: y, connectApiMap: b } = se.useMemo(() => {
    var A, R;
    return (A = yr.extensionSettings.disabledExtensions) != null && A.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((R = yr.extensionSettings.connectionManager) == null ? void 0 : R.profiles) ?? [],
      connectApiMap: yr.CONNECT_API_MAP
    };
  }, [_]);
  se.useEffect(() => {
    if (!E) return;
    const A = (L) => {
      Hs(L, r, b) && (g(Date.now()), u?.(L));
    }, R = (L, l) => {
      const S = Hs(L, r, b), w = Hs(l, r, b);
      (S || w) && g(Date.now()), c?.(L, l), m === L.id && !w && (p(""), i?.(void 0));
    }, x = (L) => {
      Hs(L, r, b) && (g(Date.now()), f?.(L), m === L.id && (p(""), i?.(void 0)));
    };
    return yr.eventSource.on("CONNECTION_PROFILE_CREATED", A), yr.eventSource.on("CONNECTION_PROFILE_UPDATED", R), yr.eventSource.on("CONNECTION_PROFILE_DELETED", x), () => {
      yr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", A), yr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", R), yr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", x);
    };
  }, [E, m, r, b, i, u, c, f]);
  const h = se.useMemo(() => {
    if (!E) return [];
    const A = y.filter((x) => Hs(x, r, b)), R = {};
    for (const [x, L] of Object.entries(r))
      R[x] = { label: L, profiles: [] };
    for (const x of A) {
      const L = b[x.api];
      R[L.selected] && R[L.selected].profiles.push(x);
    }
    for (const x of Object.values(R))
      x.profiles.sort((L, l) => (L.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(R).filter((x) => x.profiles.length > 0);
  }, [E, y, r, b]), C = se.useCallback(
    (A) => {
      const R = A.target.value;
      p(R);
      const x = y.find((L) => L.id === R);
      i?.(x);
    },
    [y, i]
  );
  return E ? /* @__PURE__ */ N.jsxs(_l, { value: m, onChange: C, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: s }),
    h.map((A) => /* @__PURE__ */ N.jsx("optgroup", { label: A.label, children: A.profiles.map((R) => /* @__PURE__ */ N.jsx("option", { value: R.id, children: R.name }, R.id)) }, A.label))
  ] }) : /* @__PURE__ */ N.jsx(_l, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, jS = dl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: i, onToggle: u, onDelete: c, onSelectChange: f }) => {
    const {
      id: m,
      label: p,
      enabled: _,
      canDelete: g = !0,
      canToggle: E = !0,
      showSelect: y = !0,
      canSelect: b = !0,
      selectOptions: h = [],
      selectValue: C
    } = n, A = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !_ ? 0.6 : 1
    }, R = { cursor: "pointer", flexShrink: 0 }, x = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ N.jsxs("li", { className: "sortable-list-item", style: A, "data-id": m, children: [
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: p
        }
      ),
      i && y && b && /* @__PURE__ */ N.jsx(
        _l,
        {
          value: C,
          onChange: (L) => f(m, L.target.value),
          disabled: !_,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((L) => /* @__PURE__ */ N.jsx("option", { value: L.value, children: L.label }, L.value))
        }
      ),
      i && (!y || !b) && /* @__PURE__ */ N.jsx("span", { style: x }),
      r && E && /* @__PURE__ */ N.jsx(
        xe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${_ ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...R,
            marginRight: "10px",
            fontSize: "1.2em",
            color: _ ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ N.jsx("span", { style: x }),
      s && g && /* @__PURE__ */ N.jsx(
        xe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...R,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      s && !g && /* @__PURE__ */ N.jsx("span", { style: { ...x, marginRight: 0 } })
    ] });
  }
), Ly = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: i = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const f = se.useRef(null), m = se.useRef(null);
  se.useEffect(() => (f.current && (m.current = Ae.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...c,
    onEnd: (E) => {
      const { oldIndex: y, newIndex: b } = E;
      if (y === void 0 || b === void 0 || y === b)
        return;
      const h = Array.from(n), [C] = h.splice(y, 1);
      h.splice(b, 0, C), r(h);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [n, r, c]);
  const p = (E) => {
    r(n.map((y) => y.id === E ? { ...y, enabled: !y.enabled } : y));
  }, _ = (E) => {
    r(n.filter((y) => y.id !== E));
  }, g = (E, y) => {
    r(n.map((b) => b.id === E ? { ...b, selectValue: y } : b));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ N.jsx(
    jS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: i,
      showSelectInput: u,
      onToggle: p,
      onDelete: _,
      onSelectChange: g
    },
    E.id
  )) });
}, Py = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: i = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: f = !1,
  onBeforeSelection: m,
  enableSearch: p = !1,
  searchPlaceholder: _ = "Search...",
  searchNoResultsText: g = "No results found",
  searchFuseOptions: E,
  inputClasses: y,
  containerClasses: b
}) => {
  const [h, C] = se.useState(!1), [A, R] = se.useState(""), x = se.useRef(null);
  se.useEffect(() => {
    const k = (O) => {
      x.current && !x.current.contains(O.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), se.useEffect(() => {
    h || R("");
  }, [h]);
  const L = se.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new zi(n, k);
  }, [n, p, E]), l = se.useMemo(() => !p || !A.trim() || !L ? n : L.search(A.trim()).map((k) => k.item), [n, A, p, L]), S = async (k) => {
    let O;
    c ? O = r.includes(k) ? r.filter((z) => z !== k) : [...r, k] : O = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, O))) && (s(O), u && C(!1));
  }, w = se.useMemo(() => {
    var k;
    return r.length === 0 ? i : r.length === 1 ? ((k = n.find((O) => O.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, i]);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: x,
      className: `fancy-dropdown-container ${b ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && C(!h),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ N.jsx("span", { className: "fancy-dropdown-trigger-text", children: w }),
              /* @__PURE__ */ N.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              p && /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ N.jsx(
                    Dy,
                    {
                      type: "text",
                      placeholder: _,
                      value: A,
                      onChange: (k) => R(k.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ N.jsx(
                DS,
                {
                  item: k,
                  isSelected: r.includes(k.value),
                  onClick: S
                },
                k.value
              )) : /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: g
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, DS = dl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [i, u] = se.useState(!1);
  return /* @__PURE__ */ N.jsxs(
    "li",
    {
      onClick: () => s(n.value),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : i ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ N.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ N.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), ff = SillyTavern.getContext(), Tf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: i,
  onChange: u,
  onItemsChange: c,
  enableCreate: f = !1,
  enableRename: m = !1,
  enableDelete: p = !1,
  onCreate: _,
  onRename: g,
  onDelete: E,
  buttons: y
}) => {
  const b = se.useMemo(() => r.find((x) => x.value === n), [r, n]), h = se.useCallback((x) => x ? s.includes(x) : !1, [s]), C = async () => {
    const x = await ff.Popup.show.input(
      `Create a new ${i}`,
      `Please enter a name for the new ${i}:`,
      ""
    );
    if (!x || x.trim() === "") return;
    const L = x.trim();
    if (r.some((S) => S.value === L)) {
      await Se("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: L, label: L };
    if (_) {
      const S = await Promise.resolve(_(L));
      if (!S.confirmed) return;
      S.value && (typeof S.value == "string" ? l = { value: S.value, label: S.value } : l = S.value);
    }
    c([...r, l]), u(l.value, n);
  }, A = async () => {
    if (!b) {
      await Se("warning", `Please select a ${i} to rename.`);
      return;
    }
    if (h(b.value)) {
      await Se("warning", `This ${i} cannot be renamed as it is read-only.`);
      return;
    }
    const x = await ff.Popup.show.input(
      `Rename ${i}`,
      `Please enter a new name for "${b.label}":`,
      b.label
    );
    if (!x || x.trim() === "" || x.trim() === b.value) return;
    const L = x.trim();
    if (r.some((w) => w.value === L)) {
      await Se("warning", `A ${i} with this name already exists.`);
      return;
    }
    let l = { value: L, label: L };
    if (g) {
      const w = await Promise.resolve(g(b.value, L));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const S = r.map((w) => w.value === b.value ? l : w);
    c(S), u(l.value, n);
  }, R = async () => {
    var x;
    if (!b) {
      await Se("warning", `Please select a ${i} to delete.`);
      return;
    }
    if (h(b.value)) {
      await Se("warning", `This ${i} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await ff.Popup.show.confirm(
      `Delete ${i}`,
      `Are you sure you want to delete "${b.label}"?`
    ) || E && !await Promise.resolve(E(b.value)))
      return;
    const L = r.findIndex((w) => w.value === b.value), l = r.filter((w) => w.value !== b.value);
    c(l);
    let S;
    if (l.length > 0) {
      const w = Math.min(L, l.length - 1);
      S = (x = l[w]) == null ? void 0 : x.value;
    }
    u(S, n);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(_l, { value: n ?? "", onChange: (x) => u(x.target.value, n), children: r.map((x) => /* @__PURE__ */ N.jsx("option", { value: x.value, children: x.label }, x.value)) }),
    f && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${i}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${i}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${i}`,
        onClick: A,
        disabled: !b,
        "data-i18n": `[title]Rename selected ${i}`
      }
    ),
    p && /* @__PURE__ */ N.jsx(
      xe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${i}`,
        onClick: R,
        disabled: !b,
        "data-i18n": `[title]Delete selected ${i}`
      }
    ),
    y?.map((x) => /* @__PURE__ */ N.jsx(
      xe,
      {
        className: x.icon,
        title: x.title,
        onClick: x.onClick,
        disabled: x.disabled,
        "data-i18n": x.i18n ? `[title]${x.i18n}` : void 0
      },
      x.key
    ))
  ] });
}, Iy = () => {
  const [, n] = se.useState(0);
  return se.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, m0 = "en", zS = {
  en: "English",
  "zh-CN": "中文"
}, LS = jy.map((n) => ({
  value: n,
  label: zS[n]
})), g0 = {
  en: {
    languageLabel: "Language",
    languageDescription: "Choose the language for the extension interface.",
    mainContextTitle: "Main Context Template",
    restoreMainContextTooltip: "Restore main context template to default",
    restoreMainContextConfirmTitle: "Restore default",
    restoreMainContextConfirmMessage: "Are you sure?",
    mainContextTemplateLabel: "Template",
    promptTemplatesTitle: "Prompt Templates",
    restorePromptTooltip: "Restore selected prompt to default",
    promptLabel: "Prompt",
    restorePromptConfirmTitle: "Restore default",
    restorePromptConfirmMessage: (n) => `Restore default for "${n}"?`,
    promptEditorPlaceholder: "Edit the selected system prompt template here...",
    resetEverythingButton: "I messed up, reset everything",
    resetEverythingConfirmTitle: "Reset Everything",
    resetEverythingConfirmMessage: "Are you sure? This cannot be undone.",
    resetEverythingSuccess: "Settings reset. The UI has been updated.",
    noPromptSelectedWarning: "No prompt selected."
  },
  "zh-CN": {
    languageLabel: "界面语言",
    languageDescription: "选择扩展界面显示的语言。",
    mainContextTitle: "主要上下文模板",
    restoreMainContextTooltip: "恢复主要上下文模板为默认值",
    restoreMainContextConfirmTitle: "恢复默认",
    restoreMainContextConfirmMessage: "确定要恢复默认设置吗？",
    mainContextTemplateLabel: "模板",
    promptTemplatesTitle: "提示词模板",
    restorePromptTooltip: "将所选提示词恢复为默认值",
    promptLabel: "提示词",
    restorePromptConfirmTitle: "恢复默认",
    restorePromptConfirmMessage: (n) => `确定要恢复“${n}”为默认值吗？`,
    promptEditorPlaceholder: "在此编辑所选系统提示词模板...",
    resetEverythingButton: "我弄错了，全部重置",
    resetEverythingConfirmTitle: "全部重置",
    resetEverythingConfirmMessage: "确定要重置所有设置吗？此操作无法撤销。",
    resetEverythingSuccess: "设置已重置，界面已更新。",
    noPromptSelectedWarning: "未选择任何提示词。"
  }
}, v0 = (n) => jy.includes(n), hf = SillyTavern.getContext(), PS = () => {
  const n = Iy(), r = It.getSettings(), s = v0(r.language) ? r.language : m0, i = g0[s] ?? g0[m0], [u, c] = se.useState(Ku[0]), f = se.useCallback(
    (k) => {
      const O = It.getSettings();
      k(O), It.saveSettings(), n();
    },
    [n]
  ), m = (k) => {
    const O = k.target.value;
    !v0(O) || O === r.language || f((z) => {
      z.language = O;
    });
  }, p = se.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((k) => ({
      value: k,
      label: k
    })),
    [r.mainContextTemplatePresets]
  ), _ = se.useMemo(
    () => Object.keys(r.prompts).map((k) => {
      const O = r.prompts[k];
      return {
        value: k,
        label: O ? `${O.label} (${k})` : k
      };
    }),
    [r.prompts]
  ), g = se.useMemo(() => {
    const k = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return k ? k.prompts.map((O) => {
      const z = r.prompts[O.promptName], j = z ? `${z.label} (${O.promptName})` : O.promptName;
      return {
        id: O.promptName,
        label: j,
        enabled: O.enabled,
        selectValue: O.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), E = (k) => {
    f((O) => {
      O.mainContextTemplatePreset = k ?? "default";
    });
  }, y = (k) => {
    f((O) => {
      const z = {}, j = O.mainContextTemplatePresets;
      k.forEach((P) => {
        z[P.value] = j[P.value] ?? structuredClone(j[O.mainContextTemplatePreset] ?? j.default);
      }), O.mainContextTemplatePresets = z;
    });
  }, b = (k) => {
    f((O) => {
      const z = k.map((P) => ({
        promptName: P.id,
        enabled: P.enabled,
        role: P.selectValue ?? "user"
      })), j = {
        ...O.mainContextTemplatePresets[O.mainContextTemplatePreset],
        prompts: z
      };
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        [O.mainContextTemplatePreset]: j
      };
    });
  }, h = async () => {
    await hf.Popup.show.confirm(
      i.restoreMainContextConfirmTitle,
      i.restoreMainContextConfirmMessage
    ) && f((O) => {
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        default: structuredClone(Yf.mainContextTemplatePresets.default)
      }, O.mainContextTemplatePreset = "default";
    });
  }, C = (k) => {
    f((O) => {
      const z = {}, j = O.prompts, P = Object.keys(j), Z = k.map((G) => G.value);
      Z.forEach((G) => {
        z[G] = j[G] ?? { content: "", isDefault: !1, label: G };
      }), O.prompts = z;
      const X = P.filter((G) => !Z.includes(G));
      if (X.length > 0) {
        const G = Object.fromEntries(
          Object.entries(O.mainContextTemplatePresets).map(([K, M]) => [
            K,
            {
              ...M,
              prompts: M.prompts.filter((B) => !X.includes(B.promptName))
            }
          ])
        );
        O.mainContextTemplatePresets = G;
      }
    });
  }, A = (k) => {
    const O = p0(k);
    return O ? r.prompts[O] ? (Se("error", `Prompt name already exists: ${O}`), { confirmed: !1 }) : (f((z) => {
      z.prompts = {
        ...z.prompts,
        [O]: {
          content: z.prompts[u]?.content ?? "",
          isDefault: !1,
          label: k
        }
      }, z.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(z.mainContextTemplatePresets).map(([j, P]) => [
          j,
          {
            ...P,
            prompts: [...P.prompts, { enabled: !0, promptName: O, role: "user" }]
          }
        ])
      );
    }), c(O), { confirmed: !0, value: O }) : (Se("error", `Invalid prompt name: ${k}`), { confirmed: !1 });
  }, R = (k, O) => {
    const z = p0(O);
    return z ? r.prompts[z] ? (Se("error", `Prompt name already exists: ${z}`), { confirmed: !1 }) : (f((j) => {
      const { [k]: P, ...Z } = j.prompts;
      j.prompts = {
        ...Z,
        [z]: { ...P, label: O }
      }, j.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(j.mainContextTemplatePresets).map(([X, G]) => [
          X,
          {
            ...G,
            prompts: G.prompts.map((K) => K.promptName === k ? { ...K, promptName: z } : K)
          }
        ])
      );
    }), c(z), { confirmed: !0, value: z }) : (Se("error", `Invalid prompt name: ${O}`), { confirmed: !1 });
  }, x = (k) => {
    const O = k.target.value;
    f((z) => {
      const j = z.prompts[u];
      j && (z.prompts = {
        ...z.prompts,
        [u]: {
          ...j,
          content: O,
          isDefault: Ku.includes(u) ? ot[u] === O : !1
        }
      });
    });
  }, L = async () => {
    const k = r.prompts[u];
    if (!k) return Se("warning", i.noPromptSelectedWarning);
    await hf.Popup.show.confirm(
      i.restorePromptConfirmTitle,
      i.restorePromptConfirmMessage(k.label)
    ) && f((z) => {
      z.prompts = {
        ...z.prompts,
        [u]: {
          ...z.prompts[u],
          content: ot[u]
        }
      };
    });
  }, l = async () => {
    await hf.Popup.show.confirm(
      i.resetEverythingConfirmTitle,
      i.resetEverythingConfirmMessage
    ) && (It.resetSettings(), n(), Se("success", i.resetEverythingSuccess));
  }, S = r.prompts[u]?.content ?? "", w = Ku.includes(u);
  return /* @__PURE__ */ N.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "settings-language", style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsx("label", { htmlFor: "world-info-recommender-language-select", children: i.languageLabel }),
      /* @__PURE__ */ N.jsx(
        "select",
        {
          id: "world-info-recommender-language-select",
          className: "settings-language__select",
          value: s,
          onChange: m,
          children: LS.map((k) => /* @__PURE__ */ N.jsx("option", { value: k.value, children: k.label }, k.value))
        }
      ),
      /* @__PURE__ */ N.jsx("p", { className: "settings-language__description", children: i.languageDescription })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: i.mainContextTitle }),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            className: "fa-solid fa-undo",
            title: i.restoreMainContextTooltip,
            onClick: h
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: i.mainContextTemplateLabel,
          items: p,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: E,
          onItemsChange: y,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ N.jsx(
        Ly,
        {
          items: g,
          onItemsChange: b,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: i.promptTemplatesTitle }),
        w && /* @__PURE__ */ N.jsx(
          xe,
          {
            className: "fa-solid fa-undo",
            title: i.restorePromptTooltip,
            onClick: L
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Tf,
        {
          label: i.promptLabel,
          items: _,
          value: u,
          readOnlyValues: Ku,
          onChange: (k) => c(k ?? ""),
          onItemsChange: C,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: A,
          onRename: R
        }
      ),
      /* @__PURE__ */ N.jsx(
        br,
        {
          value: S,
          onChange: x,
          placeholder: i.promptEditorPlaceholder,
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(xe, { className: "danger_button", style: { width: "auto" }, onClick: l, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      /* @__PURE__ */ N.jsx("span", { children: i.resetEverythingButton })
    ] }) })
  ] });
};
var cl = { exports: {} }, IS = cl.exports, y0;
function BS() {
  return y0 || (y0 = 1, (function(n) {
    (function() {
      function r(l) {
        var S = {
          omitExtraWLInCodeBlocks: {
            defaultValue: !1,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: !1,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: !1,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string"
          },
          rawPrefixHeaderId: {
            defaultValue: !1,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean"
          },
          ghCompatibleHeaderId: {
            defaultValue: !1,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: !1,
            describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: !1,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: !1,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: !1,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: !1,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: !1,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: !1,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: !1,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: !1,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: !1,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: !0,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: !1,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: !1,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: !1,
            describe: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: !1,
            describe: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: !1,
            describe: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: !1,
            describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: !1,
            describe: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: !0,
            describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: !1,
            describe: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: !1,
            describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: !1,
            describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: !1,
            describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean"
          },
          ellipsis: {
            defaultValue: !0,
            describe: "Replaces three dots with the ellipsis unicode character",
            type: "boolean"
          },
          completeHTMLDocument: {
            defaultValue: !1,
            describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            defaultValue: !1,
            describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: !1,
            describe: "Split adjacent blockquote blocks",
            type: "boolean"
          }
        };
        if (l === !1)
          return JSON.parse(JSON.stringify(S));
        var w = {};
        for (var k in S)
          S.hasOwnProperty(k) && (w[k] = S[k].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), S = {};
        for (var w in l)
          l.hasOwnProperty(w) && (S[w] = !0);
        return S;
      }
      var i = {}, u = {}, c = {}, f = r(!0), m = "vanilla", p = {
        github: {
          omitExtraWLInCodeBlocks: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          disableForced4SpacesIndentedSublists: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghCompatibleHeaderId: !0,
          ghMentions: !0,
          backslashEscapesHTMLTags: !0,
          emoji: !0,
          splitAdjacentBlockquotes: !0
        },
        original: {
          noHeaderId: !0,
          ghCodeBlocks: !1
        },
        ghost: {
          omitExtraWLInCodeBlocks: !0,
          parseImgDimensions: !0,
          simplifiedAutoLink: !0,
          excludeTrailingPunctuationFromURLs: !0,
          literalMidWordUnderscores: !0,
          strikethrough: !0,
          tables: !0,
          tablesHeaderId: !0,
          ghCodeBlocks: !0,
          tasklists: !0,
          smoothLivePreview: !0,
          simpleLineBreaks: !0,
          requireSpaceBeforeHeadingText: !0,
          ghMentions: !1,
          encodeEmails: !0
        },
        vanilla: r(!0),
        allOn: s()
      };
      i.helper = {}, i.extensions = {}, i.setOption = function(l, S) {
        return f[l] = S, this;
      }, i.getOption = function(l) {
        return f[l];
      }, i.getOptions = function() {
        return f;
      }, i.resetOptions = function() {
        f = r(!0);
      }, i.setFlavor = function(l) {
        if (!p.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        i.resetOptions();
        var S = p[l];
        m = l;
        for (var w in S)
          S.hasOwnProperty(w) && (f[w] = S[w]);
      }, i.getFlavor = function() {
        return m;
      }, i.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
      }, i.getDefaultOptions = function(l) {
        return r(l);
      }, i.subParser = function(l, S) {
        if (i.helper.isString(l))
          if (typeof S < "u")
            u[l] = S;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, i.extension = function(l, S) {
        if (!i.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = i.helper.stdExtName(l), i.helper.isUndefined(S)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof S == "function" && (S = S()), i.helper.isArray(S) || (S = [S]);
          var w = _(S, l);
          if (w.valid)
            c[l] = S;
          else
            throw Error(w.error);
        }
      }, i.getAllExtensions = function() {
        return c;
      }, i.removeExtension = function(l) {
        delete c[l];
      }, i.resetExtensions = function() {
        c = {};
      };
      function _(l, S) {
        var w = S ? "Error in " + S + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        i.helper.isArray(l) || (l = [l]);
        for (var O = 0; O < l.length; ++O) {
          var z = w + " sub-extension " + O + ": ", j = l[O];
          if (typeof j != "object")
            return k.valid = !1, k.error = z + "must be an object, but " + typeof j + " given", k;
          if (!i.helper.isString(j.type))
            return k.valid = !1, k.error = z + 'property "type" must be a string, but ' + typeof j.type + " given", k;
          var P = j.type = j.type.toLowerCase();
          if (P === "language" && (P = j.type = "lang"), P === "html" && (P = j.type = "output"), P !== "lang" && P !== "output" && P !== "listener")
            return k.valid = !1, k.error = z + "type " + P + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (P === "listener") {
            if (i.helper.isUndefined(j.listeners))
              return k.valid = !1, k.error = z + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (i.helper.isUndefined(j.filter) && i.helper.isUndefined(j.regex))
            return k.valid = !1, k.error = z + P + ' extensions must define either a "regex" property or a "filter" method', k;
          if (j.listeners) {
            if (typeof j.listeners != "object")
              return k.valid = !1, k.error = z + '"listeners" property must be an object but ' + typeof j.listeners + " given", k;
            for (var Z in j.listeners)
              if (j.listeners.hasOwnProperty(Z) && typeof j.listeners[Z] != "function")
                return k.valid = !1, k.error = z + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + Z + " must be a function but " + typeof j.listeners[Z] + " given", k;
          }
          if (j.filter) {
            if (typeof j.filter != "function")
              return k.valid = !1, k.error = z + '"filter" must be a function, but ' + typeof j.filter + " given", k;
          } else if (j.regex) {
            if (i.helper.isString(j.regex) && (j.regex = new RegExp(j.regex, "g")), !(j.regex instanceof RegExp))
              return k.valid = !1, k.error = z + '"regex" property must either be a string or a RegExp object, but ' + typeof j.regex + " given", k;
            if (i.helper.isUndefined(j.replace))
              return k.valid = !1, k.error = z + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      i.validateExtension = function(l) {
        var S = _(l, null);
        return S.valid ? !0 : (console.warn(S.error), !1);
      }, i.hasOwnProperty("helper") || (i.helper = {}), i.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, i.helper.isFunction = function(l) {
        var S = {};
        return l && S.toString.call(l) === "[object Function]";
      }, i.helper.isArray = function(l) {
        return Array.isArray(l);
      }, i.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, i.helper.forEach = function(l, S) {
        if (i.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (i.helper.isUndefined(S))
          throw new Error("callback param is required");
        if (!i.helper.isFunction(S))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(S);
        else if (i.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            S(l[w], w, l);
        else if (typeof l == "object")
          for (var k in l)
            l.hasOwnProperty(k) && S(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, i.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, S) {
        var w = S.charCodeAt(0);
        return "¨E" + w + "E";
      }
      i.helper.escapeCharactersCallback = g, i.helper.escapeCharacters = function(l, S, w) {
        var k = "([" + S.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var O = new RegExp(k, "g");
        return l = l.replace(O, g), l;
      }, i.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, S, w, k) {
        var O = k || "", z = O.indexOf("g") > -1, j = new RegExp(S + "|" + w, "g" + O.replace(/g/g, "")), P = new RegExp(S, O.replace(/g/g, "")), Z = [], X, G, K, M, B;
        do
          for (X = 0; K = j.exec(l); )
            if (P.test(K[0]))
              X++ || (G = j.lastIndex, M = G - K[0].length);
            else if (X && !--X) {
              B = K.index + K[0].length;
              var J = {
                left: { start: M, end: G },
                match: { start: G, end: K.index },
                right: { start: K.index, end: B },
                wholeMatch: { start: M, end: B }
              };
              if (Z.push(J), !z)
                return Z;
            }
        while (X && (j.lastIndex = G));
        return Z;
      };
      i.helper.matchRecursiveRegExp = function(l, S, w, k) {
        for (var O = E(l, S, w, k), z = [], j = 0; j < O.length; ++j)
          z.push([
            l.slice(O[j].wholeMatch.start, O[j].wholeMatch.end),
            l.slice(O[j].match.start, O[j].match.end),
            l.slice(O[j].left.start, O[j].left.end),
            l.slice(O[j].right.start, O[j].right.end)
          ]);
        return z;
      }, i.helper.replaceRecursiveRegExp = function(l, S, w, k, O) {
        if (!i.helper.isFunction(S)) {
          var z = S;
          S = function() {
            return z;
          };
        }
        var j = E(l, w, k, O), P = l, Z = j.length;
        if (Z > 0) {
          var X = [];
          j[0].wholeMatch.start !== 0 && X.push(l.slice(0, j[0].wholeMatch.start));
          for (var G = 0; G < Z; ++G)
            X.push(
              S(
                l.slice(j[G].wholeMatch.start, j[G].wholeMatch.end),
                l.slice(j[G].match.start, j[G].match.end),
                l.slice(j[G].left.start, j[G].left.end),
                l.slice(j[G].right.start, j[G].right.end)
              )
            ), G < Z - 1 && X.push(l.slice(j[G].wholeMatch.end, j[G + 1].wholeMatch.start));
          j[Z - 1].wholeMatch.end < l.length && X.push(l.slice(j[Z - 1].wholeMatch.end)), P = X.join("");
        }
        return P;
      }, i.helper.regexIndexOf = function(l, S, w) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(S instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(S);
        return k >= 0 ? k + (w || 0) : k;
      }, i.helper.splitAtIndex = function(l, S) {
        if (!i.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, S), l.substring(S)];
      }, i.helper.encodeEmailAddress = function(l) {
        var S = [
          function(w) {
            return "&#" + w.charCodeAt(0) + ";";
          },
          function(w) {
            return "&#x" + w.charCodeAt(0).toString(16) + ";";
          },
          function(w) {
            return w;
          }
        ];
        return l = l.replace(/./g, function(w) {
          if (w === "@")
            w = S[Math.floor(Math.random() * 2)](w);
          else {
            var k = Math.random();
            w = k > 0.9 ? S[2](w) : k > 0.45 ? S[1](w) : S[0](w);
          }
          return w;
        }), l;
      }, i.helper.padEnd = function(S, w, k) {
        return w = w >> 0, k = String(k || " "), S.length > w ? String(S) : (w = w - S.length, w > k.length && (k += k.repeat(w / k.length)), String(S) + k.slice(0, w));
      }, typeof console > "u" && (console = {
        warn: function(l) {
          alert(l);
        },
        log: function(l) {
          alert(l);
        },
        error: function(l) {
          throw l;
        }
      }), i.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, i.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        /* special emojis :P */
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
      }, i.Converter = function(l) {
        var S = {}, w = [], k = [], O = {}, z = m, j = {
          parsed: {},
          raw: "",
          format: ""
        };
        P();
        function P() {
          l = l || {};
          for (var M in f)
            f.hasOwnProperty(M) && (S[M] = f[M]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (S[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          S.extensions && i.helper.forEach(S.extensions, Z);
        }
        function Z(M, B) {
          if (B = B || null, i.helper.isString(M))
            if (M = i.helper.stdExtName(M), B = M, i.extensions[M]) {
              console.warn("DEPRECATION WARNING: " + M + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), X(i.extensions[M], M);
              return;
            } else if (!i.helper.isUndefined(c[M]))
              M = c[M];
            else
              throw Error('Extension "' + M + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof M == "function" && (M = M()), i.helper.isArray(M) || (M = [M]);
          var J = _(M, B);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < M.length; ++ae) {
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
            }
            if (M[ae].hasOwnProperty("listeners"))
              for (var I in M[ae].listeners)
                M[ae].listeners.hasOwnProperty(I) && G(I, M[ae].listeners[I]);
          }
        }
        function X(M, B) {
          typeof M == "function" && (M = M(new i.Converter())), i.helper.isArray(M) || (M = [M]);
          var J = _(M, B);
          if (!J.valid)
            throw Error(J.error);
          for (var ae = 0; ae < M.length; ++ae)
            switch (M[ae].type) {
              case "lang":
                w.push(M[ae]);
                break;
              case "output":
                k.push(M[ae]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function G(M, B) {
          if (!i.helper.isString(M))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof M + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          O.hasOwnProperty(M) || (O[M] = []), O[M].push(B);
        }
        function K(M) {
          var B = M.match(/^\s*/)[0].length, J = new RegExp("^\\s{0," + B + "}", "gm");
          return M.replace(J, "");
        }
        this._dispatch = function(B, J, ae, I) {
          if (O.hasOwnProperty(B))
            for (var $ = 0; $ < O[B].length; ++$) {
              var ce = O[B][$](B, J, this, ae, I);
              ce && typeof ce < "u" && (J = ce);
            }
          return J;
        }, this.listen = function(M, B) {
          return G(M, B), this;
        }, this.makeHtml = function(M) {
          if (!M)
            return M;
          var B = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: w,
            outputModifiers: k,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return M = M.replace(/¨/g, "¨T"), M = M.replace(/\$/g, "¨D"), M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/\u00A0/g, "&nbsp;"), S.smartIndentationFix && (M = K(M)), M = `

` + M + `

`, M = i.subParser("detab")(M, S, B), M = M.replace(/^[ \t]+$/mg, ""), i.helper.forEach(w, function(J) {
            M = i.subParser("runExtension")(J, M, S, B);
          }), M = i.subParser("metadata")(M, S, B), M = i.subParser("hashPreCodeTags")(M, S, B), M = i.subParser("githubCodeBlocks")(M, S, B), M = i.subParser("hashHTMLBlocks")(M, S, B), M = i.subParser("hashCodeTags")(M, S, B), M = i.subParser("stripLinkDefinitions")(M, S, B), M = i.subParser("blockGamut")(M, S, B), M = i.subParser("unhashHTMLSpans")(M, S, B), M = i.subParser("unescapeSpecialChars")(M, S, B), M = M.replace(/¨D/g, "$$"), M = M.replace(/¨T/g, "¨"), M = i.subParser("completeHTMLDocument")(M, S, B), i.helper.forEach(k, function(J) {
            M = i.subParser("runExtension")(J, M, S, B);
          }), j = B.metadata, M;
        }, this.makeMarkdown = this.makeMd = function(M, B) {
          if (M = M.replace(/\r\n/g, `
`), M = M.replace(/\r/g, `
`), M = M.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var J = B.createElement("div");
          J.innerHTML = M;
          var ae = {
            preList: H(J)
          };
          Y(J);
          for (var I = J.childNodes, $ = "", ce = 0; ce < I.length; ce++)
            $ += i.subParser("makeMarkdown.node")(I[ce], ae);
          function Y(te) {
            for (var ne = 0; ne < te.childNodes.length; ++ne) {
              var ue = te.childNodes[ne];
              ue.nodeType === 3 ? !/\S/.test(ue.nodeValue) && !/^[ ]+$/.test(ue.nodeValue) ? (te.removeChild(ue), --ne) : (ue.nodeValue = ue.nodeValue.split(`
`).join(" "), ue.nodeValue = ue.nodeValue.replace(/(\s)+/g, "$1")) : ue.nodeType === 1 && Y(ue);
            }
          }
          function H(te) {
            for (var ne = te.querySelectorAll("pre"), ue = [], re = 0; re < ne.length; ++re)
              if (ne[re].childElementCount === 1 && ne[re].firstChild.tagName.toLowerCase() === "code") {
                var he = ne[re].firstChild.innerHTML.trim(), Re = ne[re].firstChild.getAttribute("data-language") || "";
                if (Re === "")
                  for (var be = ne[re].firstChild.className.split(" "), me = 0; me < be.length; ++me) {
                    var pe = be[me].match(/^language-(.+)$/);
                    if (pe !== null) {
                      Re = pe[1];
                      break;
                    }
                  }
                he = i.helper.unescapeHTMLEntities(he), ue.push(he), ne[re].outerHTML = '<precode language="' + Re + '" precodenum="' + re.toString() + '"></precode>';
              } else
                ue.push(ne[re].innerHTML), ne[re].innerHTML = "", ne[re].setAttribute("prenum", re.toString());
            return ue;
          }
          return $;
        }, this.setOption = function(M, B) {
          S[M] = B;
        }, this.getOption = function(M) {
          return S[M];
        }, this.getOptions = function() {
          return S;
        }, this.addExtension = function(M, B) {
          B = B || null, Z(M, B);
        }, this.useExtension = function(M) {
          Z(M);
        }, this.setFlavor = function(M) {
          if (!p.hasOwnProperty(M))
            throw Error(M + " flavor was not found");
          var B = p[M];
          z = M;
          for (var J in B)
            B.hasOwnProperty(J) && (S[J] = B[J]);
        }, this.getFlavor = function() {
          return z;
        }, this.removeExtension = function(M) {
          i.helper.isArray(M) || (M = [M]);
          for (var B = 0; B < M.length; ++B) {
            for (var J = M[B], ae = 0; ae < w.length; ++ae)
              w[ae] === J && w.splice(ae, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === J && k.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(M) {
          return M ? j.raw : j.parsed;
        }, this.getMetadataFormat = function() {
          return j.format;
        }, this._setMetadataPair = function(M, B) {
          j.parsed[M] = B;
        }, this._setMetadataFormat = function(M) {
          j.format = M;
        }, this._setMetadataRaw = function(M) {
          j.raw = M;
        };
      }, i.subParser("anchors", function(l, S, w) {
        l = w.converter._dispatch("anchors.before", l, S, w);
        var k = function(O, z, j, P, Z, X, G) {
          if (i.helper.isUndefined(G) && (G = ""), j = j.toLowerCase(), O.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            P = "";
          else if (!P)
            if (j || (j = z.toLowerCase().replace(/ ?\n/g, " ")), P = "#" + j, !i.helper.isUndefined(w.gUrls[j]))
              P = w.gUrls[j], i.helper.isUndefined(w.gTitles[j]) || (G = w.gTitles[j]);
            else
              return O;
          P = P.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var K = '<a href="' + P + '"';
          return G !== "" && G !== null && (G = G.replace(/"/g, "&quot;"), G = G.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), K += ' title="' + G + '"'), S.openLinksInNewWindow && !/^#/.test(P) && (K += ' rel="noopener noreferrer" target="¨E95Eblank"'), K += ">" + z + "</a>", K;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), S.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(O, z, j, P, Z) {
          if (j === "\\")
            return z + P;
          if (!i.helper.isString(S.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var X = S.ghMentionsLink.replace(/\{u}/g, Z), G = "";
          return S.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), z + '<a href="' + X + '"' + G + ">" + P + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, S, w), l;
      });
      var y = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, b = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, A = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, R = function(l) {
        return function(S, w, k, O, z, j, P) {
          k = k.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var Z = k, X = "", G = "", K = w || "", M = P || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && j && (X = j), l.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), K + '<a href="' + k + '"' + G + ">" + Z + "</a>" + X + M;
        };
      }, x = function(l, S) {
        return function(w, k, O) {
          var z = "mailto:";
          return k = k || "", O = i.subParser("unescapeSpecialChars")(O, l, S), l.encodeEmails ? (z = i.helper.encodeEmailAddress(z + O), O = i.helper.encodeEmailAddress(O)) : z = z + O, k + '<a href="' + z + '">' + O + "</a>";
        };
      };
      i.subParser("autoLinks", function(l, S, w) {
        return l = w.converter._dispatch("autoLinks.before", l, S, w), l = l.replace(h, R(S)), l = l.replace(A, x(S, w)), l = w.converter._dispatch("autoLinks.after", l, S, w), l;
      }), i.subParser("simplifiedAutoLinks", function(l, S, w) {
        return S.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, S, w), S.excludeTrailingPunctuationFromURLs ? l = l.replace(b, R(S)) : l = l.replace(y, R(S)), l = l.replace(C, x(S, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, S, w)), l;
      }), i.subParser("blockGamut", function(l, S, w) {
        return l = w.converter._dispatch("blockGamut.before", l, S, w), l = i.subParser("blockQuotes")(l, S, w), l = i.subParser("headers")(l, S, w), l = i.subParser("horizontalRule")(l, S, w), l = i.subParser("lists")(l, S, w), l = i.subParser("codeBlocks")(l, S, w), l = i.subParser("tables")(l, S, w), l = i.subParser("hashHTMLBlocks")(l, S, w), l = i.subParser("paragraphs")(l, S, w), l = w.converter._dispatch("blockGamut.after", l, S, w), l;
      }), i.subParser("blockQuotes", function(l, S, w) {
        l = w.converter._dispatch("blockQuotes.before", l, S, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return S.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(O) {
          return O = O.replace(/^[ \t]*>[ \t]?/gm, ""), O = O.replace(/¨0/g, ""), O = O.replace(/^[ \t]+$/gm, ""), O = i.subParser("githubCodeBlocks")(O, S, w), O = i.subParser("blockGamut")(O, S, w), O = O.replace(/(^|\n)/g, "$1  "), O = O.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(z, j) {
            var P = j;
            return P = P.replace(/^  /mg, "¨0"), P = P.replace(/¨0/g, ""), P;
          }), i.subParser("hashBlock")(`<blockquote>
` + O + `
</blockquote>`, S, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, S, w), l;
      }), i.subParser("codeBlocks", function(l, S, w) {
        l = w.converter._dispatch("codeBlocks.before", l, S, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(O, z, j) {
          var P = z, Z = j, X = `
`;
          return P = i.subParser("outdent")(P, S, w), P = i.subParser("encodeCode")(P, S, w), P = i.subParser("detab")(P, S, w), P = P.replace(/^\n+/g, ""), P = P.replace(/\n+$/g, ""), S.omitExtraWLInCodeBlocks && (X = ""), P = "<pre><code>" + P + X + "</code></pre>", i.subParser("hashBlock")(P, S, w) + Z;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, S, w), l;
      }), i.subParser("codeSpans", function(l, S, w) {
        return l = w.converter._dispatch("codeSpans.before", l, S, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, O, z, j) {
            var P = j;
            return P = P.replace(/^([ \t]*)/g, ""), P = P.replace(/[ \t]*$/g, ""), P = i.subParser("encodeCode")(P, S, w), P = O + "<code>" + P + "</code>", P = i.subParser("hashHTMLSpans")(P, S, w), P;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, S, w), l;
      }), i.subParser("completeHTMLDocument", function(l, S, w) {
        if (!S.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, S, w);
        var k = "html", O = `<!DOCTYPE HTML>
`, z = "", j = `<meta charset="utf-8">
`, P = "", Z = "";
        typeof w.metadata.parsed.doctype < "u" && (O = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (j = '<meta charset="utf-8">'));
        for (var X in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(X))
            switch (X.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                z = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? j = '<meta charset="' + w.metadata.parsed.charset + `">
` : j = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                P = ' lang="' + w.metadata.parsed[X] + '"', Z += '<meta name="' + X + '" content="' + w.metadata.parsed[X] + `">
`;
                break;
              default:
                Z += '<meta name="' + X + '" content="' + w.metadata.parsed[X] + `">
`;
            }
        return l = O + "<html" + P + `>
<head>
` + z + j + Z + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, S, w), l;
      }), i.subParser("detab", function(l, S, w) {
        return l = w.converter._dispatch("detab.before", l, S, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, O) {
          for (var z = O, j = 4 - z.length % 4, P = 0; P < j; P++)
            z += " ";
          return z;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, S, w), l;
      }), i.subParser("ellipsis", function(l, S, w) {
        return S.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, S, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, S, w)), l;
      }), i.subParser("emoji", function(l, S, w) {
        if (!S.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, S, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(O, z) {
          return i.helper.emojis.hasOwnProperty(z) ? i.helper.emojis[z] : O;
        }), l = w.converter._dispatch("emoji.after", l, S, w), l;
      }), i.subParser("encodeAmpsAndAngles", function(l, S, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, S, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, S, w), l;
      }), i.subParser("encodeBackslashEscapes", function(l, S, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, S, w), l = l.replace(/\\(\\)/g, i.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, S, w), l;
      }), i.subParser("encodeCode", function(l, S, w) {
        return l = w.converter._dispatch("encodeCode.before", l, S, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, S, w), l;
      }), i.subParser("escapeSpecialCharsWithinTagAttributes", function(l, S, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, S, w);
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, O = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(z) {
          return z.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = l.replace(O, function(z) {
          return z.replace(/([\\`*_~=|])/g, i.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, S, w), l;
      }), i.subParser("githubCodeBlocks", function(l, S, w) {
        return S.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, S, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, O, z, j) {
          var P = S.omitExtraWLInCodeBlocks ? "" : `
`;
          return j = i.subParser("encodeCode")(j, S, w), j = i.subParser("detab")(j, S, w), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), j = "<pre><code" + (z ? ' class="' + z + " language-" + z + '"' : "") + ">" + j + P + "</code></pre>", j = i.subParser("hashBlock")(j, S, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: j }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, S, w)) : l;
      }), i.subParser("hashBlock", function(l, S, w) {
        return l = w.converter._dispatch("hashBlock.before", l, S, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, S, w), l;
      }), i.subParser("hashCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, S, w);
        var k = function(O, z, j, P) {
          var Z = j + i.subParser("encodeCode")(z, S, w) + P;
          return "¨C" + (w.gHtmlSpans.push(Z) - 1) + "C";
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, S, w), l;
      }), i.subParser("hashElement", function(l, S, w) {
        return function(k, O) {
          var z = O;
          return z = z.replace(/\n\n/g, `
`), z = z.replace(/^\n/, ""), z = z.replace(/\n+$/g, ""), z = `

¨K` + (w.gHtmlBlocks.push(z) - 1) + `K

`, z;
        };
      }), i.subParser("hashHTMLBlocks", function(l, S, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, S, w);
        var k = [
          "pre",
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "blockquote",
          "table",
          "dl",
          "ol",
          "ul",
          "script",
          "noscript",
          "form",
          "fieldset",
          "iframe",
          "math",
          "style",
          "section",
          "header",
          "footer",
          "nav",
          "article",
          "aside",
          "address",
          "audio",
          "canvas",
          "figure",
          "hgroup",
          "output",
          "video",
          "p"
        ], O = function(M, B, J, ae) {
          var I = M;
          return J.search(/\bmarkdown\b/) !== -1 && (I = J + w.converter.makeHtml(B) + ae), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        S.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(M, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var z = 0; z < k.length; ++z)
          for (var j, P = new RegExp("^ {0,3}(<" + k[z] + "\\b[^>]*>)", "im"), Z = "<" + k[z] + "\\b[^>]*>", X = "</" + k[z] + ">"; (j = i.helper.regexIndexOf(l, P)) !== -1; ) {
            var G = i.helper.splitAtIndex(l, j), K = i.helper.replaceRecursiveRegExp(G[1], O, Z, X, "im");
            if (K === G[1])
              break;
            l = G[0].concat(K);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, S, w)
        ), l = i.helper.replaceRecursiveRegExp(l, function(M) {
          return `

¨K` + (w.gHtmlBlocks.push(M) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          i.subParser("hashElement")(l, S, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, S, w), l;
      }), i.subParser("hashHTMLSpans", function(l, S, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, S, w);
        function k(O) {
          return "¨C" + (w.gHtmlSpans.push(O) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(O) {
          return k(O);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(O) {
          return k(O);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(O) {
          return k(O);
        }), l = l.replace(/<[^>]+?>/gi, function(O) {
          return k(O);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, S, w), l;
      }), i.subParser("unhashHTMLSpans", function(l, S, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, S, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var O = w.gHtmlSpans[k], z = 0; /¨C(\d+)C/.test(O); ) {
            var j = RegExp.$1;
            if (O = O.replace("¨C" + j + "C", w.gHtmlSpans[j]), z === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++z;
          }
          l = l.replace("¨C" + k + "C", O);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, S, w), l;
      }), i.subParser("hashPreCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, S, w);
        var k = function(O, z, j, P) {
          var Z = j + i.subParser("encodeCode")(z, S, w) + P;
          return `

¨G` + (w.ghCodeBlocks.push({ text: O, codeblock: Z }) - 1) + `G

`;
        };
        return l = i.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, S, w), l;
      }), i.subParser("headers", function(l, S, w) {
        l = w.converter._dispatch("headers.before", l, S, w);
        var k = isNaN(parseInt(S.headerLevelStart)) ? 1 : parseInt(S.headerLevelStart), O = S.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, z = S.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(O, function(Z, X) {
          var G = i.subParser("spanGamut")(X, S, w), K = S.noHeaderId ? "" : ' id="' + P(X) + '"', M = k, B = "<h" + M + K + ">" + G + "</h" + M + ">";
          return i.subParser("hashBlock")(B, S, w);
        }), l = l.replace(z, function(Z, X) {
          var G = i.subParser("spanGamut")(X, S, w), K = S.noHeaderId ? "" : ' id="' + P(X) + '"', M = k + 1, B = "<h" + M + K + ">" + G + "</h" + M + ">";
          return i.subParser("hashBlock")(B, S, w);
        });
        var j = S.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(j, function(Z, X, G) {
          var K = G;
          S.customizedHeaderId && (K = G.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var M = i.subParser("spanGamut")(K, S, w), B = S.noHeaderId ? "" : ' id="' + P(G) + '"', J = k - 1 + X.length, ae = "<h" + J + B + ">" + M + "</h" + J + ">";
          return i.subParser("hashBlock")(ae, S, w);
        });
        function P(Z) {
          var X, G;
          if (S.customizedHeaderId) {
            var K = Z.match(/\{([^{]+?)}\s*$/);
            K && K[1] && (Z = K[1]);
          }
          return X = Z, i.helper.isString(S.prefixHeaderId) ? G = S.prefixHeaderId : S.prefixHeaderId === !0 ? G = "section-" : G = "", S.rawPrefixHeaderId || (X = G + X), S.ghCompatibleHeaderId ? X = X.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : S.rawHeaderId ? X = X.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : X = X.replace(/[^\w]/g, "").toLowerCase(), S.rawPrefixHeaderId && (X = G + X), w.hashLinkCounts[X] ? X = X + "-" + w.hashLinkCounts[X]++ : w.hashLinkCounts[X] = 1, X;
        }
        return l = w.converter._dispatch("headers.after", l, S, w), l;
      }), i.subParser("horizontalRule", function(l, S, w) {
        l = w.converter._dispatch("horizontalRule.before", l, S, w);
        var k = i.subParser("hashBlock")("<hr />", S, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, S, w), l;
      }), i.subParser("images", function(l, S, w) {
        l = w.converter._dispatch("images.before", l, S, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, O = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, z = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, P = /!\[([^\[\]]+)]()()()()()/g;
        function Z(G, K, M, B, J, ae, I, $) {
          return B = B.replace(/\s/g, ""), X(G, K, M, B, J, ae, I, $);
        }
        function X(G, K, M, B, J, ae, I, $) {
          var ce = w.gUrls, Y = w.gTitles, H = w.gDimensions;
          if (M = M.toLowerCase(), $ || ($ = ""), G.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((M === "" || M === null) && (M = K.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + M, !i.helper.isUndefined(ce[M]))
              B = ce[M], i.helper.isUndefined(Y[M]) || ($ = Y[M]), i.helper.isUndefined(H[M]) || (J = H[M].width, ae = H[M].height);
            else
              return G;
          K = K.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), B = B.replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback);
          var te = '<img src="' + B + '" alt="' + K + '"';
          return $ && i.helper.isString($) && ($ = $.replace(/"/g, "&quot;").replace(i.helper.regexes.asteriskDashAndColon, i.helper.escapeCharactersCallback), te += ' title="' + $ + '"'), J && ae && (J = J === "*" ? "auto" : J, ae = ae === "*" ? "auto" : ae, te += ' width="' + J + '"', te += ' height="' + ae + '"'), te += " />", te;
        }
        return l = l.replace(j, X), l = l.replace(z, Z), l = l.replace(O, X), l = l.replace(k, X), l = l.replace(P, X), l = w.converter._dispatch("images.after", l, S, w), l;
      }), i.subParser("italicsAndBold", function(l, S, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, S, w);
        function k(O, z, j) {
          return z + O + j;
        }
        return S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(O, z) {
          return k(z, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(O, z) {
          return k(z, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(O, z) {
          return k(z, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : O;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : O;
        })), S.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(O, z, j) {
          return k(j, z + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(O, z, j) {
          return k(j, z + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(O, z, j) {
          return k(j, z + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<strong>", "</strong>") : O;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(O, z) {
          return /\S$/.test(z) ? k(z, "<em>", "</em>") : O;
        })), l = w.converter._dispatch("italicsAndBold.after", l, S, w), l;
      }), i.subParser("lists", function(l, S, w) {
        function k(j, P) {
          w.gListLevel++, j = j.replace(/\n{2,}$/, `
`), j += "¨0";
          var Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, X = /\n[ \t]*\n(?!¨0)/.test(j);
          return S.disableForced4SpacesIndentedSublists && (Z = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), j = j.replace(Z, function(G, K, M, B, J, ae, I) {
            I = I && I.trim() !== "";
            var $ = i.subParser("outdent")(J, S, w), ce = "";
            return ae && S.tasklists && (ce = ' class="task-list-item" style="list-style-type: none;"', $ = $.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var Y = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (Y += " checked"), Y += ">", Y;
            })), $ = $.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(Y) {
              return "¨A" + Y;
            }), K || $.search(/\n{2,}/) > -1 ? ($ = i.subParser("githubCodeBlocks")($, S, w), $ = i.subParser("blockGamut")($, S, w)) : ($ = i.subParser("lists")($, S, w), $ = $.replace(/\n$/, ""), $ = i.subParser("hashHTMLBlocks")($, S, w), $ = $.replace(/\n\n+/g, `

`), X ? $ = i.subParser("paragraphs")($, S, w) : $ = i.subParser("spanGamut")($, S, w)), $ = $.replace("¨A", ""), $ = "<li" + ce + ">" + $ + `</li>
`, $;
          }), j = j.replace(/¨0/g, ""), w.gListLevel--, P && (j = j.replace(/\s+$/, "")), j;
        }
        function O(j, P) {
          if (P === "ol") {
            var Z = j.match(/^ *(\d+)\./);
            if (Z && Z[1] !== "1")
              return ' start="' + Z[1] + '"';
          }
          return "";
        }
        function z(j, P, Z) {
          var X = S.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, G = S.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, K = P === "ul" ? X : G, M = "";
          if (j.search(K) !== -1)
            (function J(ae) {
              var I = ae.search(K), $ = O(j, P);
              I !== -1 ? (M += `

<` + P + $ + `>
` + k(ae.slice(0, I), !!Z) + "</" + P + `>
`, P = P === "ul" ? "ol" : "ul", K = P === "ul" ? X : G, J(ae.slice(I))) : M += `

<` + P + $ + `>
` + k(ae, !!Z) + "</" + P + `>
`;
            })(j);
          else {
            var B = O(j, P);
            M = `

<` + P + B + `>
` + k(j, !!Z) + "</" + P + `>
`;
          }
          return M;
        }
        return l = w.converter._dispatch("lists.before", l, S, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, Z) {
            var X = Z.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(P, X, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, P, Z, X) {
            var G = X.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return z(Z, G, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, S, w), l;
      }), i.subParser("metadata", function(l, S, w) {
        if (!S.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, S, w);
        function k(O) {
          w.metadata.raw = O, O = O.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), O = O.replace(/\n {4}/g, " "), O.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(z, j, P) {
            return w.metadata.parsed[j] = P, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(O, z, j) {
          return k(j), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(O, z, j) {
          return z && (w.metadata.format = z), k(j), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, S, w), l;
      }), i.subParser("outdent", function(l, S, w) {
        return l = w.converter._dispatch("outdent.before", l, S, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, S, w), l;
      }), i.subParser("paragraphs", function(l, S, w) {
        l = w.converter._dispatch("paragraphs.before", l, S, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), O = [], z = k.length, j = 0; j < z; j++) {
          var P = k[j];
          P.search(/¨(K|G)(\d+)\1/g) >= 0 ? O.push(P) : P.search(/\S/) >= 0 && (P = i.subParser("spanGamut")(P, S, w), P = P.replace(/^([ \t]*)/g, "<p>"), P += "</p>", O.push(P));
        }
        for (z = O.length, j = 0; j < z; j++) {
          for (var Z = "", X = O[j], G = !1; /¨(K|G)(\d+)\1/.test(X); ) {
            var K = RegExp.$1, M = RegExp.$2;
            K === "K" ? Z = w.gHtmlBlocks[M] : G ? Z = i.subParser("encodeCode")(w.ghCodeBlocks[M].text, S, w) : Z = w.ghCodeBlocks[M].codeblock, Z = Z.replace(/\$/g, "$$$$"), X = X.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, Z), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(X) && (G = !0);
          }
          O[j] = X;
        }
        return l = O.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, S, w);
      }), i.subParser("runExtension", function(l, S, w, k) {
        if (l.filter)
          S = l.filter(S, k.converter, w);
        else if (l.regex) {
          var O = l.regex;
          O instanceof RegExp || (O = new RegExp(O, "g")), S = S.replace(O, l.replace);
        }
        return S;
      }), i.subParser("spanGamut", function(l, S, w) {
        return l = w.converter._dispatch("spanGamut.before", l, S, w), l = i.subParser("codeSpans")(l, S, w), l = i.subParser("escapeSpecialCharsWithinTagAttributes")(l, S, w), l = i.subParser("encodeBackslashEscapes")(l, S, w), l = i.subParser("images")(l, S, w), l = i.subParser("anchors")(l, S, w), l = i.subParser("autoLinks")(l, S, w), l = i.subParser("simplifiedAutoLinks")(l, S, w), l = i.subParser("emoji")(l, S, w), l = i.subParser("underline")(l, S, w), l = i.subParser("italicsAndBold")(l, S, w), l = i.subParser("strikethrough")(l, S, w), l = i.subParser("ellipsis")(l, S, w), l = i.subParser("hashHTMLSpans")(l, S, w), l = i.subParser("encodeAmpsAndAngles")(l, S, w), S.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, S, w), l;
      }), i.subParser("strikethrough", function(l, S, w) {
        function k(O) {
          return S.simplifiedAutoLink && (O = i.subParser("simplifiedAutoLinks")(O, S, w)), "<del>" + O + "</del>";
        }
        return S.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, S, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(O, z) {
          return k(z);
        }), l = w.converter._dispatch("strikethrough.after", l, S, w)), l;
      }), i.subParser("stripLinkDefinitions", function(l, S, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, O = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var z = function(j, P, Z, X, G, K, M) {
          return P = P.toLowerCase(), l.toLowerCase().split(P).length - 1 < 2 ? j : (Z.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[P] = Z.replace(/\s/g, "") : w.gUrls[P] = i.subParser("encodeAmpsAndAngles")(Z, S, w), K ? K + M : (M && (w.gTitles[P] = M.replace(/"|'/g, "&quot;")), S.parseImgDimensions && X && G && (w.gDimensions[P] = {
            width: X,
            height: G
          }), ""));
        };
        return l = l.replace(O, z), l = l.replace(k, z), l = l.replace(/¨0/, ""), l;
      }), i.subParser("tables", function(l, S, w) {
        if (!S.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, O = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function z(G) {
          return /^:[ \t]*--*$/.test(G) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(G) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(G) ? ' style="text-align:center;"' : "";
        }
        function j(G, K) {
          var M = "";
          return G = G.trim(), (S.tablesHeaderId || S.tableHeaderId) && (M = ' id="' + G.replace(/ /g, "_").toLowerCase() + '"'), G = i.subParser("spanGamut")(G, S, w), "<th" + M + K + ">" + G + `</th>
`;
        }
        function P(G, K) {
          var M = i.subParser("spanGamut")(G, S, w);
          return "<td" + K + ">" + M + `</td>
`;
        }
        function Z(G, K) {
          for (var M = `<table>
<thead>
<tr>
`, B = G.length, J = 0; J < B; ++J)
            M += G[J];
          for (M += `</tr>
</thead>
<tbody>
`, J = 0; J < K.length; ++J) {
            M += `<tr>
`;
            for (var ae = 0; ae < B; ++ae)
              M += K[J][ae];
            M += `</tr>
`;
          }
          return M += `</tbody>
</table>
`, M;
        }
        function X(G) {
          var K, M = G.split(`
`);
          for (K = 0; K < M.length; ++K)
            /^ {0,3}\|/.test(M[K]) && (M[K] = M[K].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(M[K]) && (M[K] = M[K].replace(/\|[ \t]*$/, "")), M[K] = i.subParser("codeSpans")(M[K], S, w);
          var B = M[0].split("|").map(function(te) {
            return te.trim();
          }), J = M[1].split("|").map(function(te) {
            return te.trim();
          }), ae = [], I = [], $ = [], ce = [];
          for (M.shift(), M.shift(), K = 0; K < M.length; ++K)
            M[K].trim() !== "" && ae.push(
              M[K].split("|").map(function(te) {
                return te.trim();
              })
            );
          if (B.length < J.length)
            return G;
          for (K = 0; K < J.length; ++K)
            $.push(z(J[K]));
          for (K = 0; K < B.length; ++K)
            i.helper.isUndefined($[K]) && ($[K] = ""), I.push(j(B[K], $[K]));
          for (K = 0; K < ae.length; ++K) {
            for (var Y = [], H = 0; H < I.length; ++H)
              i.helper.isUndefined(ae[K][H]), Y.push(P(ae[K][H], $[H]));
            ce.push(Y);
          }
          return Z(I, ce);
        }
        return l = w.converter._dispatch("tables.before", l, S, w), l = l.replace(/\\(\|)/g, i.helper.escapeCharactersCallback), l = l.replace(k, X), l = l.replace(O, X), l = w.converter._dispatch("tables.after", l, S, w), l;
      }), i.subParser("underline", function(l, S, w) {
        return S.underline && (l = w.converter._dispatch("underline.before", l, S, w), S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, O) {
          return "<u>" + O + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, O) {
          return "<u>" + O + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : k;
        })), l = l.replace(/(_)/g, i.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, S, w)), l;
      }), i.subParser("unescapeSpecialChars", function(l, S, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, S, w), l = l.replace(/¨E(\d+)E/g, function(k, O) {
          var z = parseInt(O);
          return String.fromCharCode(z);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, S, w), l;
      }), i.subParser("makeMarkdown.blockquote", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z) {
            var j = i.subParser("makeMarkdown.node")(k[z], S);
            j !== "" && (w += j);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), i.subParser("makeMarkdown.codeBlock", function(l, S) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + S.preList[k] + "\n```";
      }), i.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), i.subParser("makeMarkdown.emphasis", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], S);
          w += "*";
        }
        return w;
      }), i.subParser("makeMarkdown.header", function(l, S, w) {
        var k = new Array(w + 1).join("#"), O = "";
        if (l.hasChildNodes()) {
          O = k + " ";
          for (var z = l.childNodes, j = z.length, P = 0; P < j; ++P)
            O += i.subParser("makeMarkdown.node")(z[P], S);
        }
        return O;
      }), i.subParser("makeMarkdown.hr", function() {
        return "---";
      }), i.subParser("makeMarkdown.image", function(l) {
        var S = "";
        return l.hasAttribute("src") && (S += "![" + l.getAttribute("alt") + "](", S += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (S += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (S += ' "' + l.getAttribute("title") + '"'), S += ")"), S;
      }), i.subParser("makeMarkdown.links", function(l, S) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var k = l.childNodes, O = k.length;
          w = "[";
          for (var z = 0; z < O; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], S);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), i.subParser("makeMarkdown.list", function(l, S, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var O = l.childNodes, z = O.length, j = l.getAttribute("start") || 1, P = 0; P < z; ++P)
          if (!(typeof O[P].tagName > "u" || O[P].tagName.toLowerCase() !== "li")) {
            var Z = "";
            w === "ol" ? Z = j.toString() + ". " : Z = "- ", k += Z + i.subParser("makeMarkdown.listItem")(O[P], S), ++j;
          }
        return k += `
<!-- -->
`, k.trim();
      }), i.subParser("makeMarkdown.listItem", function(l, S) {
        for (var w = "", k = l.childNodes, O = k.length, z = 0; z < O; ++z)
          w += i.subParser("makeMarkdown.node")(k[z], S);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), i.subParser("makeMarkdown.node", function(l, S, w) {
        w = w || !1;
        var k = "";
        if (l.nodeType === 3)
          return i.subParser("makeMarkdown.txt")(l, S);
        if (l.nodeType === 8)
          return "<!--" + l.data + `-->

`;
        if (l.nodeType !== 1)
          return "";
        var O = l.tagName.toLowerCase();
        switch (O) {
          //
          // BLOCKS
          //
          case "h1":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 1) + `

`);
            break;
          case "h2":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 2) + `

`);
            break;
          case "h3":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 3) + `

`);
            break;
          case "h4":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 4) + `

`);
            break;
          case "h5":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 5) + `

`);
            break;
          case "h6":
            w || (k = i.subParser("makeMarkdown.header")(l, S, 6) + `

`);
            break;
          case "p":
            w || (k = i.subParser("makeMarkdown.paragraph")(l, S) + `

`);
            break;
          case "blockquote":
            w || (k = i.subParser("makeMarkdown.blockquote")(l, S) + `

`);
            break;
          case "hr":
            w || (k = i.subParser("makeMarkdown.hr")(l, S) + `

`);
            break;
          case "ol":
            w || (k = i.subParser("makeMarkdown.list")(l, S, "ol") + `

`);
            break;
          case "ul":
            w || (k = i.subParser("makeMarkdown.list")(l, S, "ul") + `

`);
            break;
          case "precode":
            w || (k = i.subParser("makeMarkdown.codeBlock")(l, S) + `

`);
            break;
          case "pre":
            w || (k = i.subParser("makeMarkdown.pre")(l, S) + `

`);
            break;
          case "table":
            w || (k = i.subParser("makeMarkdown.table")(l, S) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = i.subParser("makeMarkdown.codeSpan")(l, S);
            break;
          case "em":
          case "i":
            k = i.subParser("makeMarkdown.emphasis")(l, S);
            break;
          case "strong":
          case "b":
            k = i.subParser("makeMarkdown.strong")(l, S);
            break;
          case "del":
            k = i.subParser("makeMarkdown.strikethrough")(l, S);
            break;
          case "a":
            k = i.subParser("makeMarkdown.links")(l, S);
            break;
          case "img":
            k = i.subParser("makeMarkdown.image")(l, S);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), i.subParser("makeMarkdown.paragraph", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], S);
        return w = w.trim(), w;
      }), i.subParser("makeMarkdown.pre", function(l, S) {
        var w = l.getAttribute("prenum");
        return "<pre>" + S.preList[w] + "</pre>";
      }), i.subParser("makeMarkdown.strikethrough", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], S);
          w += "~~";
        }
        return w;
      }), i.subParser("makeMarkdown.strong", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z)
            w += i.subParser("makeMarkdown.node")(k[z], S);
          w += "**";
        }
        return w;
      }), i.subParser("makeMarkdown.table", function(l, S) {
        var w = "", k = [[], []], O = l.querySelectorAll("thead>tr>th"), z = l.querySelectorAll("tbody>tr"), j, P;
        for (j = 0; j < O.length; ++j) {
          var Z = i.subParser("makeMarkdown.tableCell")(O[j], S), X = "---";
          if (O[j].hasAttribute("style")) {
            var G = O[j].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (G) {
              case "text-align:left;":
                X = ":---";
                break;
              case "text-align:right;":
                X = "---:";
                break;
              case "text-align:center;":
                X = ":---:";
                break;
            }
          }
          k[0][j] = Z.trim(), k[1][j] = X;
        }
        for (j = 0; j < z.length; ++j) {
          var K = k.push([]) - 1, M = z[j].getElementsByTagName("td");
          for (P = 0; P < O.length; ++P) {
            var B = " ";
            typeof M[P] < "u" && (B = i.subParser("makeMarkdown.tableCell")(M[P], S)), k[K].push(B);
          }
        }
        var J = 3;
        for (j = 0; j < k.length; ++j)
          for (P = 0; P < k[j].length; ++P) {
            var ae = k[j][P].length;
            ae > J && (J = ae);
          }
        for (j = 0; j < k.length; ++j) {
          for (P = 0; P < k[j].length; ++P)
            j === 1 ? k[j][P].slice(-1) === ":" ? k[j][P] = i.helper.padEnd(k[j][P].slice(-1), J - 1, "-") + ":" : k[j][P] = i.helper.padEnd(k[j][P], J, "-") : k[j][P] = i.helper.padEnd(k[j][P], J);
          w += "| " + k[j].join(" | ") + ` |
`;
        }
        return w.trim();
      }), i.subParser("makeMarkdown.tableCell", function(l, S) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, O = k.length, z = 0; z < O; ++z)
          w += i.subParser("makeMarkdown.node")(k[z], S, !0);
        return w.trim();
      }), i.subParser("makeMarkdown.txt", function(l) {
        var S = l.nodeValue;
        return S = S.replace(/ +/g, " "), S = S.replace(/¨NBSP;/g, " "), S = i.helper.unescapeHTMLEntities(S), S = S.replace(/([*_~|`])/g, "\\$1"), S = S.replace(/^(\s*)>/g, "\\$1>"), S = S.replace(/^#/gm, "\\#"), S = S.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), S = S.replace(/^( {0,3}\d+)\./gm, "$1\\."), S = S.replace(/^( {0,3})([+-])/gm, "$1\\$2"), S = S.replace(/]([\s]*)\(/g, "\\]$1\\("), S = S.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), S;
      });
      var L = this;
      n.exports ? n.exports = i : L.showdown = i;
    }).call(IS);
  })(cl)), cl.exports;
}
var US = BS();
const HS = /* @__PURE__ */ Lf(US);
var ea = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, i) {
      i === void 0 && (i = {});
      var u;
      typeof i == "function" ? (u = i, i = {}) : "callback" in i && (u = i.callback);
      var c = this.castInput(r, i), f = this.castInput(s, i), m = this.removeEmpty(this.tokenize(c, i)), p = this.removeEmpty(this.tokenize(f, i));
      return this.diffWithOptionsObj(m, p, i, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, i, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, i), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, _ = r.length, g = 1, E = p + _;
      i.maxEditLength != null && (E = Math.min(E, i.maxEditLength));
      var y = (f = i.timeout) !== null && f !== void 0 ? f : 1 / 0, b = Date.now() + y, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, i);
      if (h[0].oldPos + 1 >= _ && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var A = -1 / 0, R = 1 / 0, x = function() {
        for (var l = Math.max(A, -g); l <= Math.min(R, g); l += 2) {
          var S = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var O = !1;
          if (k) {
            var z = k.oldPos - l;
            O = k && 0 <= z && z < p;
          }
          var j = w && w.oldPos + 1 < _;
          if (!O && !j) {
            h[l] = void 0;
            continue;
          }
          if (!j || O && w.oldPos < k.oldPos ? S = c.addToPath(k, !0, !1, 0, i) : S = c.addToPath(w, !1, !0, 1, i), C = c.extractCommon(S, s, r, l, i), S.oldPos + 1 >= _ && C + 1 >= p)
            return m(c.buildValues(S.lastComponent, s, r)) || !0;
          h[l] = S, S.oldPos + 1 >= _ && (R = Math.min(R, l - 1)), C + 1 >= p && (A = Math.max(A, l + 1));
        }
        g++;
      };
      if (u)
        (function l() {
          setTimeout(function() {
            if (g > E || Date.now() > b)
              return u(void 0);
            x() || l();
          }, 0);
        })();
      else
        for (; g <= E && Date.now() <= b; ) {
          var L = x();
          if (L)
            return L;
        }
    }, n.prototype.addToPath = function(r, s, i, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === i ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: i, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: i, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, i, u, c) {
      for (var f = s.length, m = i.length, p = r.oldPos, _ = p - u, g = 0; _ + 1 < f && p + 1 < m && this.equals(i[p + 1], s[_ + 1], c); )
        _++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, _;
    }, n.prototype.equals = function(r, s, i) {
      return i.comparator ? i.comparator(r, s) : r === s || !!i.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var s = [], i = 0; i < r.length; i++)
        r[i] && s.push(r[i]);
      return s;
    }, n.prototype.castInput = function(r, s) {
      return r;
    }, n.prototype.tokenize = function(r, s) {
      return Array.from(r);
    }, n.prototype.join = function(r) {
      return r.join("");
    }, n.prototype.postProcess = function(r, s) {
      return r;
    }, Object.defineProperty(n.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.buildValues = function(r, s, i) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var f = u.length, m = 0, p = 0, _ = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(i.slice(_, _ + g.count)), _ += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(y, b) {
              var h = i[_ + b];
              return h.length > y.length ? h : y;
            }), g.value = this.join(E);
          } else
            g.value = this.join(s.slice(p, p + g.count));
          p += g.count, g.added || (_ += g.count);
        }
      }
      return u;
    }, n;
  })()
), qS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), ZS = (
  /** @class */
  (function(n) {
    qS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ea)
);
new ZS();
function _0(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function b0(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function xf(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function Nf(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function qs(n, r) {
  return xf(n, r, "");
}
function Ju(n, r) {
  return Nf(n, r, "");
}
function S0(n, r) {
  return r.slice(0, GS(n, r));
}
function GS(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var i = r.length;
  n.length < r.length && (i = n.length);
  var u = Array(i), c = 0;
  u[0] = 0;
  for (var f = 1; f < i; f++) {
    for (r[f] == r[c] ? u[f] = u[c] : u[f] = c; c > 0 && r[f] != r[c]; )
      c = u[c];
    r[f] == r[c] && c++;
  }
  c = 0;
  for (var m = s; m < n.length; m++) {
    for (; c > 0 && n[m] != r[c]; )
      c = u[c];
    n[m] == r[c] && c++;
  }
  return c;
}
function Zs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Xr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var By = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), bl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", VS = new RegExp("[".concat(bl, "]+|\\s+|[^").concat(bl, "]"), "ug"), YS = (
  /** @class */
  (function(n) {
    By(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreCase && (s = s.toLowerCase(), i = i.toLowerCase()), s.trim() === i.trim();
    }, r.prototype.tokenize = function(s, i) {
      i === void 0 && (i = {});
      var u;
      if (i.intlSegmenter) {
        var c = i.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(VS) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(i, u) {
        return u == 0 ? i : i.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, i) {
      if (!s || i.oneChangePerToken)
        return s;
      var u = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && w0(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && w0(u, f, c, null), s;
    }, r;
  })(ea)
), $S = new YS();
function Uy(n, r, s) {
  return $S.diff(n, r, s);
}
function w0(n, r, s, i) {
  if (r && s) {
    var u = Xr(r.value), c = Zs(r.value), f = Xr(s.value), m = Zs(s.value);
    if (n) {
      var p = _0(u, f);
      n.value = Nf(n.value, f, p), r.value = qs(r.value, p), s.value = qs(s.value, p);
    }
    if (i) {
      var _ = b0(c, m);
      i.value = xf(i.value, m, _), r.value = Ju(r.value, _), s.value = Ju(s.value, _);
    }
  } else if (s) {
    if (n) {
      var g = Xr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (i) {
      var g = Xr(i.value);
      i.value = i.value.substring(g.length);
    }
  } else if (n && i) {
    var E = Xr(i.value), y = Xr(r.value), b = Zs(r.value), h = _0(E, y);
    r.value = qs(r.value, h);
    var C = b0(qs(E, h), b);
    r.value = Ju(r.value, C), i.value = xf(i.value, E, C), n.value = Nf(n.value, E, E.slice(0, E.length - C.length));
  } else if (i) {
    var A = Xr(i.value), R = Zs(r.value), x = S0(R, A);
    r.value = Ju(r.value, x);
  } else if (n) {
    var L = Zs(n.value), l = Xr(r.value), x = S0(L, l);
    r.value = qs(r.value, x);
  }
}
var XS = (
  /** @class */
  (function(n) {
    By(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var i = new RegExp("(\\r?\\n)|[".concat(bl, "]+|[^\\S\\n\\r]+|[^").concat(bl, "]"), "ug");
      return s.match(i) || [];
    }, r;
  })(ea)
);
new XS();
var FS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), QS = (
  /** @class */
  (function(n) {
    FS(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Hy, s;
    }
    return r.prototype.equals = function(s, i, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !i.includes(`
`)) && (i = i.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), i.endsWith(`
`) && (i = i.slice(0, -1))), n.prototype.equals.call(this, s, i, u);
    }, r;
  })(ea)
);
new QS();
function Hy(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], i = n.split(/(\n|\r\n)/);
  i[i.length - 1] || i.pop();
  for (var u = 0; u < i.length; u++) {
    var c = i[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var KS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), JS = (
  /** @class */
  (function(n) {
    KS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ea)
);
new JS();
var WS = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), ew = (
  /** @class */
  (function(n) {
    WS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ea)
);
new ew();
var tw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), nw = (
  /** @class */
  (function(n) {
    tw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Hy, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, i) {
      var u = i.undefinedReplacement, c = i.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Of(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, i, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), i.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(ea)
);
new nw();
function Of(n, r, s, i, u) {
  r = r || [], s = s || [], i && (n = i(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Of(n[c], r, s, i, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Of(n[p], r, s, i, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var rw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
      i.__proto__ = u;
    } || function(i, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function i() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i());
  };
})(), aw = (
  /** @class */
  (function(n) {
    rw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.slice();
    }, r.prototype.join = function(s) {
      return s;
    }, r.prototype.removeEmpty = function(s) {
      return s;
    }, r;
  })(ea)
);
new aw();
const iw = ({ originalEntry: n, newEntry: r }) => {
  const s = se.useMemo(() => {
    const i = Uy(n.content, r.content);
    let u = "", c = "";
    return i.forEach((f) => {
      const p = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${f.value}</span>`;
      f.added || (u += p), f.removed || (c += p);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: "Compare Changes" }),
    /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "Original Content" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "New Content (Suggestion)" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            style: {
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              maxHeight: "400px",
              overflowY: "auto"
            },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, sw = SillyTavern.getContext(), ow = se.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [i, u] = se.useState([]), [c, f] = se.useState(n.comment), [m, p] = se.useState(n.key.join(", ")), [_, g] = se.useState(n.content), [E, y] = se.useState([]);
  se.useEffect(() => {
    const R = sw.extensionSettings.regex ?? [];
    u(R);
    const x = Object.entries(r).map(([L, l]) => {
      const S = R.find((w) => w.id === L);
      return S ? { id: S.id, label: S.scriptName, enabled: !l?.disabled } : null;
    }).filter((L) => L !== null);
    y(x);
  }, [r]), se.useImperativeHandle(s, () => ({
    getFormData: () => {
      const R = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((L) => L.trim()).filter(Boolean),
        content: _
      }, x = E.reduce(
        (L, l) => (L[l.id] = { disabled: !l.enabled }, L),
        {}
      );
      return { updatedEntry: R, updatedRegexIds: x };
    }
  }));
  const b = se.useMemo(
    () => i.map((R) => ({ value: R.id, label: R.scriptName })),
    [i]
  ), h = se.useMemo(() => E.map((R) => R.id), [E]), C = se.useCallback(() => {
    let R = n.content;
    const x = E.filter((L) => L.enabled);
    for (const L of x) {
      const l = i.find((S) => S.id === L.id);
      l && (R = o3(l, R));
    }
    g(R);
  }, [E, i, n.content]), A = (R) => {
    const x = R.map((L) => {
      const l = E.find((w) => w.id === L);
      if (l) return l;
      const S = i.find((w) => w.id === L);
      return S ? { id: S.id, label: S.scriptName, enabled: !0 } : null;
    }).filter((L) => L !== null);
    y(x);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Title" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (R) => f(R.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (R) => p(R.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ N.jsx(
        Py,
        {
          items: b,
          value: h,
          onChange: A,
          multiple: !0,
          enableSearch: !0,
          placeholder: "Select regex scripts..."
        }
      ),
      E.length > 0 && /* @__PURE__ */ N.jsx(
        Ly,
        {
          items: E,
          onItemsChange: y,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(xe, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ N.jsx(
      br,
      {
        value: _,
        onChange: (R) => g(R.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function de(n, r, s) {
  function i(m, p) {
    var _;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (_ = m._zod).traits ?? (_.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, p);
    for (const g in f.prototype)
      g in m || Object.defineProperty(m, g, { value: f.prototype[g].bind(m) });
    m._zod.constr = f, m._zod.def = p;
  }
  const u = s?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: n });
  function f(m) {
    var p;
    const _ = s?.Parent ? new c() : this;
    i(_, m), (p = _._zod).deferred ?? (p.deferred = []);
    for (const g of _._zod.deferred)
      g();
    return _;
  }
  return Object.defineProperty(f, "init", { value: i }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class ji extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class qy extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const Zy = {};
function Ma(n) {
  return Zy;
}
function Gy(n) {
  const r = Object.values(n).filter((i) => typeof i == "number");
  return Object.entries(n).filter(([i, u]) => r.indexOf(+i) === -1).map(([i, u]) => u);
}
function Mf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function $f(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Xf(n) {
  return n == null;
}
function Ff(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const E0 = Symbol("evaluating");
function rt(n, r, s) {
  let i;
  Object.defineProperty(n, r, {
    get() {
      if (i !== E0)
        return i === void 0 && (i = E0, i = s()), i;
    },
    set(u) {
      Object.defineProperty(n, r, {
        value: u
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ja(n, r, s) {
  Object.defineProperty(n, r, {
    value: s,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Da(...n) {
  const r = {};
  for (const s of n) {
    const i = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, i);
  }
  return Object.defineProperties({}, r);
}
function C0(n) {
  return JSON.stringify(n);
}
const Vy = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function Sl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const uw = $f(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function eo(n) {
  if (Sl(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(Sl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function Yy(n) {
  return eo(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const lw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function kl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ta(n, r, s) {
  const i = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (i._zod.parent = n), i;
}
function Ne(n) {
  const r = n;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function cw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function dw(n, r) {
  const s = n._zod.def, i = Da(n._zod.def, {
    get shape() {
      const u = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = s.shape[c]);
      }
      return ja(this, "shape", u), u;
    },
    checks: []
  });
  return ta(n, i);
}
function fw(n, r) {
  const s = n._zod.def, i = Da(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return ja(this, "shape", u), u;
    },
    checks: []
  });
  return ta(n, i);
}
function hw(n, r) {
  if (!eo(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = n._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Da(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(n, u);
}
function pw(n, r) {
  if (!eo(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const i = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", i), i;
    },
    checks: n._zod.def.checks
  };
  return ta(n, s);
}
function mw(n, r) {
  const s = Da(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape, ...r._zod.def.shape };
      return ja(this, "shape", i), i;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ta(n, s);
}
function gw(n, r, s) {
  const i = Da(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f]);
        }
      else
        for (const f in u)
          c[f] = n ? new n({
            type: "optional",
            innerType: u[f]
          }) : u[f];
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(r, i);
}
function vw(n, r, s) {
  const i = Da(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const f in s) {
          if (!(f in c))
            throw new Error(`Unrecognized key: "${f}"`);
          s[f] && (c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          }));
        }
      else
        for (const f in u)
          c[f] = new n({
            type: "nonoptional",
            innerType: u[f]
          });
      return ja(this, "shape", c), c;
    },
    checks: []
  });
  return ta(r, i);
}
function Mi(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function $y(n, r) {
  return r.map((s) => {
    var i;
    return (i = s).path ?? (i.path = []), s.path.unshift(n), s;
  });
}
function Wu(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ra(n, r, s) {
  const i = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = Wu(n.inst?._zod.def?.error?.(n)) ?? Wu(r?.error?.(n)) ?? Wu(s.customError?.(n)) ?? Wu(s.localeError?.(n)) ?? "Invalid input";
    i.message = u;
  }
  return delete i.inst, delete i.continue, r?.reportInput || delete i.input, i;
}
function Qf(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function to(...n) {
  const [r, s, i] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: i
  } : { ...r };
}
const Xy = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, Mf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Fy = de("$ZodError", Xy), Qy = de("$ZodError", Xy, { Parent: Error });
function yw(n, r = (s) => s.message) {
  const s = {}, i = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : i.push(r(u));
  return { formErrors: i, fieldErrors: s };
}
function _w(n, r = (s) => s.message) {
  const s = { _errors: [] }, i = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((f) => i({ issues: f }));
      else if (c.code === "invalid_key")
        i({ issues: c.issues });
      else if (c.code === "invalid_element")
        i({ issues: c.issues });
      else if (c.path.length === 0)
        s._errors.push(r(c));
      else {
        let f = s, m = 0;
        for (; m < c.path.length; ) {
          const p = c.path[m];
          m === c.path.length - 1 ? (f[p] = f[p] || { _errors: [] }, f[p]._errors.push(r(c))) : f[p] = f[p] || { _errors: [] }, f = f[p], m++;
        }
      }
  };
  return i(n), s;
}
const Kf = (n) => (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new ji();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Vy(m, u?.callee), m;
  }
  return f.value;
}, Jf = (n) => async (r, s, i, u) => {
  const c = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Vy(m, u?.callee), m;
  }
  return f.value;
}, Al = (n) => (r, s, i) => {
  const u = i ? { ...i, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new ji();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? Fy)(c.issues.map((f) => Ra(f, u, Ma())))
  } : { success: !0, data: c.value };
}, bw = /* @__PURE__ */ Al(Qy), Tl = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => Ra(f, u, Ma())))
  } : { success: !0, data: c.value };
}, Sw = /* @__PURE__ */ Tl(Qy), ww = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Kf(n)(r, s, u);
}, Ew = (n) => (r, s, i) => Kf(n)(r, s, i), Cw = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Jf(n)(r, s, u);
}, kw = (n) => async (r, s, i) => Jf(n)(r, s, i), Aw = (n) => (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Al(n)(r, s, u);
}, Tw = (n) => (r, s, i) => Al(n)(r, s, i), xw = (n) => async (r, s, i) => {
  const u = i ? Object.assign(i, { direction: "backward" }) : { direction: "backward" };
  return Tl(n)(r, s, u);
}, Nw = (n) => async (r, s, i) => Tl(n)(r, s, i), Ow = /^[cC][^\s-]{8,}$/, Mw = /^[0-9a-z]+$/, Rw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, jw = /^[0-9a-vA-V]{20}$/, Dw = /^[A-Za-z0-9]{27}$/, zw = /^[a-zA-Z0-9_-]{21}$/, Lw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Pw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, k0 = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Iw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Bw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Uw() {
  return new RegExp(Bw, "u");
}
const Hw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, qw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Zw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Gw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Vw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ky = /^[A-Za-z0-9_-]*$/, Yw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, $w = /^\+(?:[0-9]){6,14}[0-9]$/, Jy = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Xw = /* @__PURE__ */ new RegExp(`^${Jy}$`);
function Wy(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Fw(n) {
  return new RegExp(`^${Wy(n)}$`);
}
function Qw(n) {
  const r = Wy({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const i = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${Jy}T(?:${i})$`);
}
const Kw = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Jw = /^[^A-Z]*$/, Ww = /^[^a-z]*$/, er = /* @__PURE__ */ de("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), eE = /* @__PURE__ */ de("$ZodCheckMaxLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Xf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (i._zod.bag.maximum = r.maximum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length <= r.maximum)
      return;
    const f = Qf(u);
    i.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), tE = /* @__PURE__ */ de("$ZodCheckMinLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Xf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (i._zod.bag.minimum = r.minimum);
  }), n._zod.check = (i) => {
    const u = i.value;
    if (u.length >= r.minimum)
      return;
    const f = Qf(u);
    i.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), nE = /* @__PURE__ */ de("$ZodCheckLengthEquals", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (i) => {
    const u = i.value;
    return !Xf(u) && u.length !== void 0;
  }), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (i) => {
    const u = i.value, c = u.length;
    if (c === r.length)
      return;
    const f = Qf(u), m = c > r.length;
    i.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), xl = /* @__PURE__ */ de("$ZodCheckStringFormat", (n, r) => {
  var s, i;
  er.init(n, r), n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.format = r.format, r.pattern && (c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(r.pattern));
  }), r.pattern ? (s = n._zod).check ?? (s.check = (u) => {
    r.pattern.lastIndex = 0, !r.pattern.test(u.value) && u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: u.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (i = n._zod).check ?? (i.check = () => {
  });
}), rE = /* @__PURE__ */ de("$ZodCheckRegex", (n, r) => {
  xl.init(n, r), n._zod.check = (s) => {
    r.pattern.lastIndex = 0, !r.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: s.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), aE = /* @__PURE__ */ de("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = Jw), xl.init(n, r);
}), iE = /* @__PURE__ */ de("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = Ww), xl.init(n, r);
}), sE = /* @__PURE__ */ de("$ZodCheckIncludes", (n, r) => {
  er.init(n, r);
  const s = kl(r.includes), i = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = i, n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(i);
  }), n._zod.check = (u) => {
    u.value.includes(r.includes, r.position) || u.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: u.value,
      inst: n,
      continue: !r.abort
    });
  };
}), oE = /* @__PURE__ */ de("$ZodCheckStartsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`^${kl(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.startsWith(r.prefix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), uE = /* @__PURE__ */ de("$ZodCheckEndsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`.*${kl(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.endsWith(r.suffix) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), lE = /* @__PURE__ */ de("$ZodCheckOverwrite", (n, r) => {
  er.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class cE {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const i = r.split(`
`).filter((f) => f), u = Math.min(...i.map((f) => f.length - f.trimStart().length)), c = i.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const dE = {
  major: 4,
  minor: 1,
  patch: 12
}, Tt = /* @__PURE__ */ de("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = dE;
  const i = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && i.unshift(n);
  for (const u of i)
    for (const c of u._zod.onattach)
      c(n);
  if (i.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const u = (f, m, p) => {
      let _ = Mi(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (_)
          continue;
        const y = f.issues.length, b = E._zod.check(f);
        if (b instanceof Promise && p?.async === !1)
          throw new ji();
        if (g || b instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await b, f.issues.length !== y && (_ || (_ = Mi(f, y)));
          });
        else {
          if (f.issues.length === y)
            continue;
          _ || (_ = Mi(f, y));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (Mi(f))
        return f.aborted = !0, f;
      const _ = u(m, i, p);
      if (_ instanceof Promise) {
        if (p.async === !1)
          throw new ji();
        return _.then((g) => n._zod.parse(g, p));
      }
      return n._zod.parse(_, p);
    };
    n._zod.run = (f, m) => {
      if (m.skipChecks)
        return n._zod.parse(f, m);
      if (m.direction === "backward") {
        const _ = n._zod.parse({ value: f.value, issues: [] }, { ...m, skipChecks: !0 });
        return _ instanceof Promise ? _.then((g) => c(g, f, m)) : c(_, f, m);
      }
      const p = n._zod.parse(f, m);
      if (p instanceof Promise) {
        if (m.async === !1)
          throw new ji();
        return p.then((_) => u(_, i, m));
      }
      return u(p, i, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = bw(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Sw(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Wf = /* @__PURE__ */ de("$ZodString", (n, r) => {
  Tt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Kw(n._zod.bag), n._zod.parse = (s, i) => {
    if (r.coerce)
      try {
        s.value = String(s.value);
      } catch {
      }
    return typeof s.value == "string" || s.issues.push({
      expected: "string",
      code: "invalid_type",
      input: s.value,
      inst: n
    }), s;
  };
}), ut = /* @__PURE__ */ de("$ZodStringFormat", (n, r) => {
  xl.init(n, r), Wf.init(n, r);
}), fE = /* @__PURE__ */ de("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Pw), ut.init(n, r);
}), hE = /* @__PURE__ */ de("$ZodUUID", (n, r) => {
  if (r.version) {
    const i = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (i === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = k0(i));
  } else
    r.pattern ?? (r.pattern = k0());
  ut.init(n, r);
}), pE = /* @__PURE__ */ de("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Iw), ut.init(n, r);
}), mE = /* @__PURE__ */ de("$ZodURL", (n, r) => {
  ut.init(n, r), n._zod.check = (s) => {
    try {
      const i = s.value.trim(), u = new URL(i);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Yw.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(u.protocol.endsWith(":") ? u.protocol.slice(0, -1) : u.protocol) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: s.value,
        inst: n,
        continue: !r.abort
      })), r.normalize ? s.value = u.href : s.value = i;
      return;
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "url",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), gE = /* @__PURE__ */ de("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = Uw()), ut.init(n, r);
}), vE = /* @__PURE__ */ de("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = zw), ut.init(n, r);
}), yE = /* @__PURE__ */ de("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Ow), ut.init(n, r);
}), _E = /* @__PURE__ */ de("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Mw), ut.init(n, r);
}), bE = /* @__PURE__ */ de("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Rw), ut.init(n, r);
}), SE = /* @__PURE__ */ de("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = jw), ut.init(n, r);
}), wE = /* @__PURE__ */ de("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Dw), ut.init(n, r);
}), EE = /* @__PURE__ */ de("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Qw(r)), ut.init(n, r);
}), CE = /* @__PURE__ */ de("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Xw), ut.init(n, r);
}), kE = /* @__PURE__ */ de("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = Fw(r)), ut.init(n, r);
}), AE = /* @__PURE__ */ de("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Lw), ut.init(n, r);
}), TE = /* @__PURE__ */ de("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Hw), ut.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv4";
  });
}), xE = /* @__PURE__ */ de("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = qw), ut.init(n, r), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.format = "ipv6";
  }), n._zod.check = (s) => {
    try {
      new URL(`http://[${s.value}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), NE = /* @__PURE__ */ de("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Zw), ut.init(n, r);
}), OE = /* @__PURE__ */ de("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = Gw), ut.init(n, r), n._zod.check = (s) => {
    const i = s.value.split("/");
    try {
      if (i.length !== 2)
        throw new Error();
      const [u, c] = i;
      if (!c)
        throw new Error();
      const f = Number(c);
      if (`${f}` !== c)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${u}]`);
    } catch {
      s.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: s.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function e_(n) {
  if (n === "")
    return !0;
  if (n.length % 4 !== 0)
    return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
const ME = /* @__PURE__ */ de("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Vw), ut.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    e_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function RE(n) {
  if (!Ky.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (i) => i === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return e_(s);
}
const jE = /* @__PURE__ */ de("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = Ky), ut.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    RE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), DE = /* @__PURE__ */ de("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = $w), ut.init(n, r);
});
function zE(n, r = null) {
  try {
    const s = n.split(".");
    if (s.length !== 3)
      return !1;
    const [i] = s;
    if (!i)
      return !1;
    const u = JSON.parse(atob(i));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const LE = /* @__PURE__ */ de("$ZodJWT", (n, r) => {
  ut.init(n, r), n._zod.check = (s) => {
    zE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), PE = /* @__PURE__ */ de("$ZodUnknown", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s) => s;
}), IE = /* @__PURE__ */ de("$ZodNever", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, i) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function A0(n, r, s) {
  n.issues.length && r.issues.push(...$y(s, n.issues)), r.value[s] = n.value;
}
const BE = /* @__PURE__ */ de("$ZodArray", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, i) => {
    const u = s.value;
    if (!Array.isArray(u))
      return s.issues.push({
        expected: "array",
        code: "invalid_type",
        input: u,
        inst: n
      }), s;
    s.value = Array(u.length);
    const c = [];
    for (let f = 0; f < u.length; f++) {
      const m = u[f], p = r.element._zod.run({
        value: m,
        issues: []
      }, i);
      p instanceof Promise ? c.push(p.then((_) => A0(_, s, f))) : A0(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function wl(n, r, s, i) {
  n.issues.length && r.issues.push(...$y(s, n.issues)), n.value === void 0 ? s in i && (r.value[s] = void 0) : r.value[s] = n.value;
}
function t_(n) {
  const r = Object.keys(n.shape);
  for (const i of r)
    if (!n.shape?.[i]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${i}": expected a Zod schema`);
  const s = cw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function n_(n, r, s, i, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, _ = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (_ === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, i);
    E instanceof Promise ? n.push(E.then((y) => wl(y, s, g, r))) : wl(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const UE = /* @__PURE__ */ de("$ZodObject", (n, r) => {
  if (Tt.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const p = { ...m };
        return Object.defineProperty(r, "shape", {
          value: p
        }), p;
      }
    });
  }
  const i = $f(() => t_(r));
  rt(n._zod, "propValues", () => {
    const m = r.shape, p = {};
    for (const _ in m) {
      const g = m[_]._zod;
      if (g.values) {
        p[_] ?? (p[_] = /* @__PURE__ */ new Set());
        for (const E of g.values)
          p[_].add(E);
      }
    }
    return p;
  });
  const u = Sl, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = i.value);
    const _ = m.value;
    if (!u(_))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: _,
        inst: n
      }), m;
    m.value = {};
    const g = [], E = f.shape;
    for (const y of f.keys) {
      const h = E[y]._zod.run({ value: _[y], issues: [] }, p);
      h instanceof Promise ? g.push(h.then((C) => wl(C, m, y, _))) : wl(h, m, y, _);
    }
    return c ? n_(g, _, m, p, i.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), HE = /* @__PURE__ */ de("$ZodObjectJIT", (n, r) => {
  UE.init(n, r);
  const s = n._zod.parse, i = $f(() => t_(r)), u = (y) => {
    const b = new cE(["shape", "payload", "ctx"]), h = i.value, C = (L) => {
      const l = C0(L);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    b.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let R = 0;
    for (const L of h.keys)
      A[L] = `key_${R++}`;
    b.write("const newResult = {};");
    for (const L of h.keys) {
      const l = A[L], S = C0(L);
      b.write(`const ${l} = ${C(L)};`), b.write(`
        if (${l}.issues.length) {
          payload.issues = payload.issues.concat(${l}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        
        if (${l}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${l}.value;
        }
        
      `);
    }
    b.write("payload.value = newResult;"), b.write("return payload;");
    const x = b.compile();
    return (L, l) => x(y, L, l);
  };
  let c;
  const f = Sl, m = !Zy.jitless, _ = m && uw.value, g = r.catchall;
  let E;
  n._zod.parse = (y, b) => {
    E ?? (E = i.value);
    const h = y.value;
    return f(h) ? m && _ && b?.async === !1 && b.jitless !== !0 ? (c || (c = u(r.shape)), y = c(y, b), g ? n_([], h, y, b, E, n) : y) : s(y, b) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), y);
  };
});
function T0(n, r, s, i) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !Mi(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => Ra(f, i, Ma())))
  }), r);
}
const qE = /* @__PURE__ */ de("$ZodUnion", (n, r) => {
  Tt.init(n, r), rt(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), rt(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), rt(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), rt(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => Ff(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, i = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return i(u, c);
    let f = !1;
    const m = [];
    for (const p of r.options) {
      const _ = p._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (_ instanceof Promise)
        m.push(_), f = !0;
      else {
        if (_.issues.length === 0)
          return _;
        m.push(_);
      }
    }
    return f ? Promise.all(m).then((p) => T0(p, u, n, c)) : T0(m, u, n, c);
  };
}), ZE = /* @__PURE__ */ de("$ZodIntersection", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, i) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, i), f = r.right._zod.run({ value: u, issues: [] }, i);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, _]) => x0(s, p, _)) : x0(s, c, f);
  };
});
function Rf(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (eo(n) && eo(r)) {
    const s = Object.keys(r), i = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of i) {
      const f = Rf(n[c], r[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      u[c] = f.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let i = 0; i < n.length; i++) {
      const u = n[i], c = r[i], f = Rf(u, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function x0(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), Mi(n))
    return n;
  const i = Rf(r.value, s.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return n.value = i.data, n;
}
const GE = /* @__PURE__ */ de("$ZodEnum", (n, r) => {
  Tt.init(n, r);
  const s = Gy(r.entries), i = new Set(s);
  n._zod.values = i, n._zod.pattern = new RegExp(`^(${s.filter((u) => lw.has(typeof u)).map((u) => typeof u == "string" ? kl(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const f = u.value;
    return i.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), u;
  };
}), VE = /* @__PURE__ */ de("$ZodTransform", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new qy(n.constructor.name);
    const u = r.transform(s.value, s);
    if (i.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new ji();
    return s.value = u, s;
  };
});
function N0(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const YE = /* @__PURE__ */ de("$ZodOptional", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Ff(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, i) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, i);
      return u instanceof Promise ? u.then((c) => N0(c, s.value)) : N0(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, i);
  };
}), $E = /* @__PURE__ */ de("$ZodNullable", (n, r) => {
  Tt.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Ff(s.source)}|null)$`) : void 0;
  }), rt(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, i) => s.value === null ? s : r.innerType._zod.run(s, i);
}), XE = /* @__PURE__ */ de("$ZodDefault", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => O0(c, r)) : O0(u, r);
  };
});
function O0(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const FE = /* @__PURE__ */ de("$ZodPrefault", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => (i.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, i));
}), QE = /* @__PURE__ */ de("$ZodNonOptional", (n, r) => {
  Tt.init(n, r), rt(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((i) => i !== void 0)) : void 0;
  }), n._zod.parse = (s, i) => {
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => M0(c, n)) : M0(u, n);
  };
});
function M0(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const KE = /* @__PURE__ */ de("$ZodCatch", (n, r) => {
  Tt.init(n, r), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), rt(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Ra(f, i, Ma()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => Ra(c, i, Ma()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), JE = /* @__PURE__ */ de("$ZodPipe", (n, r) => {
  Tt.init(n, r), rt(n._zod, "values", () => r.in._zod.values), rt(n._zod, "optin", () => r.in._zod.optin), rt(n._zod, "optout", () => r.out._zod.optout), rt(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, i) => {
    if (i.direction === "backward") {
      const c = r.out._zod.run(s, i);
      return c instanceof Promise ? c.then((f) => el(f, r.in, i)) : el(c, r.in, i);
    }
    const u = r.in._zod.run(s, i);
    return u instanceof Promise ? u.then((c) => el(c, r.out, i)) : el(u, r.out, i);
  };
});
function el(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const WE = /* @__PURE__ */ de("$ZodReadonly", (n, r) => {
  Tt.init(n, r), rt(n._zod, "propValues", () => r.innerType._zod.propValues), rt(n._zod, "values", () => r.innerType._zod.values), rt(n._zod, "optin", () => r.innerType._zod.optin), rt(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      return r.innerType._zod.run(s, i);
    const u = r.innerType._zod.run(s, i);
    return u instanceof Promise ? u.then(R0) : R0(u);
  };
});
function R0(n) {
  return n.value = Object.freeze(n.value), n;
}
const eC = /* @__PURE__ */ de("$ZodCustom", (n, r) => {
  er.init(n, r), Tt.init(n, r), n._zod.parse = (s, i) => s, n._zod.check = (s) => {
    const i = s.value, u = r.fn(i);
    if (u instanceof Promise)
      return u.then((c) => j0(c, s, i, n));
    j0(u, s, i, n);
  };
});
function j0(n, r, s, i) {
  if (!n) {
    const u = {
      code: "custom",
      input: s,
      inst: i,
      // incorporates params.error into issue reporting
      path: [...i._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !i._zod.def.abort
      // params: inst._zod.def.params,
    };
    i._zod.def.params && (u.params = i._zod.def.params), r.issues.push(to(u));
  }
}
class r_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const i = s[0];
    if (this._map.set(r, i), i && typeof i == "object" && "id" in i) {
      if (this._idmap.has(i.id))
        throw new Error(`ID ${i.id} already exists in the registry`);
      this._idmap.set(i.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const s = this._map.get(r);
    return s && typeof s == "object" && "id" in s && this._idmap.delete(s.id), this._map.delete(r), this;
  }
  get(r) {
    const s = r._zod.parent;
    if (s) {
      const i = { ...this.get(s) ?? {} };
      delete i.id;
      const u = { ...i, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function tC() {
  return new r_();
}
const $s = /* @__PURE__ */ tC();
function nC(n, r) {
  return new n({
    type: "string",
    ...Ne(r)
  });
}
function rC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function D0(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function aC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function iC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Ne(r)
  });
}
function sC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Ne(r)
  });
}
function oC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Ne(r)
  });
}
function uC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function lC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function cC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function dC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function fC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function hC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function pC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Ne(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Ne(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Ne(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Ne(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Ne(r)
  });
}
function xC(n) {
  return new n({
    type: "unknown"
  });
}
function NC(n, r) {
  return new n({
    type: "never",
    ...Ne(r)
  });
}
function a_(n, r) {
  return new eE({
    check: "max_length",
    ...Ne(r),
    maximum: n
  });
}
function El(n, r) {
  return new tE({
    check: "min_length",
    ...Ne(r),
    minimum: n
  });
}
function i_(n, r) {
  return new nE({
    check: "length_equals",
    ...Ne(r),
    length: n
  });
}
function OC(n, r) {
  return new rE({
    check: "string_format",
    format: "regex",
    ...Ne(r),
    pattern: n
  });
}
function MC(n) {
  return new aE({
    check: "string_format",
    format: "lowercase",
    ...Ne(n)
  });
}
function RC(n) {
  return new iE({
    check: "string_format",
    format: "uppercase",
    ...Ne(n)
  });
}
function jC(n, r) {
  return new sE({
    check: "string_format",
    format: "includes",
    ...Ne(r),
    includes: n
  });
}
function DC(n, r) {
  return new oE({
    check: "string_format",
    format: "starts_with",
    ...Ne(r),
    prefix: n
  });
}
function zC(n, r) {
  return new uE({
    check: "string_format",
    format: "ends_with",
    ...Ne(r),
    suffix: n
  });
}
function io(n) {
  return new lE({
    check: "overwrite",
    tx: n
  });
}
function LC(n) {
  return io((r) => r.normalize(n));
}
function PC() {
  return io((n) => n.trim());
}
function IC() {
  return io((n) => n.toLowerCase());
}
function BC() {
  return io((n) => n.toUpperCase());
}
function UC(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Ne(s)
  });
}
function HC(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Ne(s)
  });
}
function qC(n) {
  const r = ZC((s) => (s.addIssue = (i) => {
    if (typeof i == "string")
      s.issues.push(to(i, s.value, r._zod.def));
    else {
      const u = i;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(to(u));
    }
  }, n(s.value, s)));
  return r;
}
function ZC(n, r) {
  const s = new er({
    check: "custom",
    ...Ne(r)
  });
  return s._zod.check = n, s;
}
class z0 {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? $s, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var i;
    const u = r._zod.def, c = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, s.schemaPath.includes(r) && (f.cycle = s.path), f.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: s.path };
    this.seen.set(r, m);
    const p = r._zod.toJSONSchema?.();
    if (p)
      m.schema = p;
    else {
      const E = {
        ...s,
        schemaPath: [...s.schemaPath, r],
        path: s.path
      }, y = r._zod.parent;
      if (y)
        m.ref = y, this.process(y, E), this.seen.get(y).isParent = !0;
      else {
        const b = m.schema;
        switch (u.type) {
          case "string": {
            const h = b;
            h.type = "string";
            const { minimum: C, maximum: A, format: R, patterns: x, contentEncoding: L } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof A == "number" && (h.maxLength = A), R && (h.format = c[R] ?? R, h.format === "" && delete h.format), L && (h.contentEncoding = L), x && x.size > 0) {
              const l = [...x];
              l.length === 1 ? h.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((S) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: S.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const h = b, { minimum: C, maximum: A, format: R, multipleOf: x, exclusiveMaximum: L, exclusiveMinimum: l } = r._zod.bag;
            typeof R == "string" && R.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof L == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = L, h.exclusiveMaximum = !0) : h.exclusiveMaximum = L), typeof A == "number" && (h.maximum = A, typeof L == "number" && this.target !== "draft-4" && (L <= A ? delete h.maximum : delete h.exclusiveMaximum)), typeof x == "number" && (h.multipleOf = x);
            break;
          }
          case "boolean": {
            const h = b;
            h.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (b.type = "string", b.nullable = !0, b.enum = [null]) : b.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            b.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const h = b, { minimum: C, maximum: A } = r._zod.bag;
            typeof C == "number" && (h.minItems = C), typeof A == "number" && (h.maxItems = A), h.type = "array", h.items = this.process(u.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const h = b;
            h.type = "object", h.properties = {};
            const C = u.shape;
            for (const x in C)
              h.properties[x] = this.process(C[x], {
                ...E,
                path: [...E.path, "properties", x]
              });
            const A = new Set(Object.keys(C)), R = new Set([...A].filter((x) => {
              const L = u.shape[x]._zod;
              return this.io === "input" ? L.optin === void 0 : L.optout === void 0;
            }));
            R.size > 0 && (h.required = Array.from(R)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = b, C = u.options.map((A, R) => this.process(A, {
              ...E,
              path: [...E.path, "anyOf", R]
            }));
            h.anyOf = C;
            break;
          }
          case "intersection": {
            const h = b, C = this.process(u.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), A = this.process(u.right, {
              ...E,
              path: [...E.path, "allOf", 1]
            }), R = (L) => "allOf" in L && Object.keys(L).length === 1, x = [
              ...R(C) ? C.allOf : [C],
              ...R(A) ? A.allOf : [A]
            ];
            h.allOf = x;
            break;
          }
          case "tuple": {
            const h = b;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", A = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", R = u.items.map((S, w) => this.process(S, {
              ...E,
              path: [...E.path, C, w]
            })), x = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, A, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = R, x && (h.items = x)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: R
            }, x && h.items.anyOf.push(x), h.minItems = R.length, x || (h.maxItems = R.length)) : (h.items = R, x && (h.additionalItems = x));
            const { minimum: L, maximum: l } = r._zod.bag;
            typeof L == "number" && (h.minItems = L), typeof l == "number" && (h.maxItems = l);
            break;
          }
          case "record": {
            const h = b;
            h.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (h.propertyNames = this.process(u.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), h.additionalProperties = this.process(u.valueType, {
              ...E,
              path: [...E.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const h = b, C = Gy(u.entries);
            C.every((A) => typeof A == "number") && (h.type = "number"), C.every((A) => typeof A == "string") && (h.type = "string"), h.enum = C;
            break;
          }
          case "literal": {
            const h = b, C = [];
            for (const A of u.values)
              if (A === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof A == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                C.push(Number(A));
              } else
                C.push(A);
            if (C.length !== 0) if (C.length === 1) {
              const A = C[0];
              h.type = A === null ? "null" : typeof A, this.target === "draft-4" || this.target === "openapi-3.0" ? h.enum = [A] : h.const = A;
            } else
              C.every((A) => typeof A == "number") && (h.type = "number"), C.every((A) => typeof A == "string") && (h.type = "string"), C.every((A) => typeof A == "boolean") && (h.type = "string"), C.every((A) => A === null) && (h.type = "null"), h.enum = C;
            break;
          }
          case "file": {
            const h = b, C = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: A, maximum: R, mime: x } = r._zod.bag;
            A !== void 0 && (C.minLength = A), R !== void 0 && (C.maxLength = R), x ? x.length === 1 ? (C.contentMediaType = x[0], Object.assign(h, C)) : h.anyOf = x.map((L) => ({ ...C, contentMediaType: L })) : Object.assign(h, C);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const h = this.process(u.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = u.innerType, b.nullable = !0) : b.anyOf = [h, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "success": {
            const h = b;
            h.type = "boolean";
            break;
          }
          case "default": {
            this.process(u.innerType, E), m.ref = u.innerType, b.default = JSON.parse(JSON.stringify(u.defaultValue));
            break;
          }
          case "prefault": {
            this.process(u.innerType, E), m.ref = u.innerType, this.io === "input" && (b._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
            break;
          }
          case "catch": {
            this.process(u.innerType, E), m.ref = u.innerType;
            let h;
            try {
              h = u.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            b.default = h;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const h = b, C = r._zod.pattern;
            if (!C)
              throw new Error("Pattern not found in template literal");
            h.type = "string", h.pattern = C.source;
            break;
          }
          case "pipe": {
            const h = this.io === "input" ? u.in._zod.def.type === "transform" ? u.out : u.in : u.out;
            this.process(h, E), m.ref = h;
            break;
          }
          case "readonly": {
            this.process(u.innerType, E), m.ref = u.innerType, b.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "optional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "lazy": {
            const h = r._zod.innerType;
            this.process(h, E), m.ref = h;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const _ = this.metadataRegistry.get(r);
    return _ && Object.assign(m.schema, _), this.io === "input" && At(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((i = m.schema).default ?? (i.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const i = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, u = this.seen.get(r);
    if (!u)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const c = (g) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (i.external) {
        const C = i.external.registry.get(g[0])?.id, A = i.external.uri ?? ((x) => x);
        if (C)
          return { ref: A(C) };
        const R = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = R, { defId: R, ref: `${A("__shared")}#/${E}/${R}` };
      }
      if (g[1] === u)
        return { ref: "#" };
      const b = `#/${E}/`, h = g[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: h, ref: b + h };
    }, f = (g) => {
      if (g[1].schema.$ref)
        return;
      const E = g[1], { ref: y, defId: b } = c(g);
      E.def = { ...E.schema }, b && (E.defId = b);
      const h = E.schema;
      for (const C in h)
        delete h[C];
      h.$ref = y;
    };
    if (i.cycles === "throw")
      for (const g of this.seen.entries()) {
        const E = g[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const g of this.seen.entries()) {
      const E = g[1];
      if (r === g[0]) {
        f(g);
        continue;
      }
      if (i.external) {
        const b = i.external.registry.get(g[0])?.id;
        if (r !== g[0] && b) {
          f(g);
          continue;
        }
      }
      if (this.metadataRegistry.get(g[0])?.id) {
        f(g);
        continue;
      }
      if (E.cycle) {
        f(g);
        continue;
      }
      if (E.count > 1 && i.reused === "ref") {
        f(g);
        continue;
      }
    }
    const m = (g, E) => {
      const y = this.seen.get(g), b = y.def ?? y.schema, h = { ...b };
      if (y.ref === null)
        return;
      const C = y.ref;
      if (y.ref = null, C) {
        m(C, E);
        const A = this.seen.get(C).schema;
        A.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (b.allOf = b.allOf ?? [], b.allOf.push(A)) : (Object.assign(b, A), Object.assign(b, h));
      }
      y.isParent || this.override({
        zodSchema: g,
        jsonSchema: b,
        path: y.path ?? []
      });
    };
    for (const g of [...this.seen.entries()].reverse())
      m(g[0], { target: this.target });
    const p = {};
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), i.external?.uri) {
      const g = i.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = i.external.uri(g);
    }
    Object.assign(p, u.def);
    const _ = i.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (_[E.defId] = E.def);
    }
    i.external || Object.keys(_).length > 0 && (this.target === "draft-2020-12" ? p.$defs = _ : p.definitions = _);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function GC(n, r) {
  if (n instanceof r_) {
    const i = new z0(r), u = {};
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      i.process(_);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      c[p] = i.emit(_, {
        ...r,
        external: f
      });
    }
    if (Object.keys(u).length > 0) {
      const m = i.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: u
      };
    }
    return { schemas: c };
  }
  const s = new z0(r);
  return s.process(n), s.emit(n, r);
}
function At(n, r) {
  const s = r ?? { seen: /* @__PURE__ */ new Set() };
  if (s.seen.has(n))
    return !1;
  s.seen.add(n);
  const u = n._zod.def;
  switch (u.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return At(u.element, s);
    case "object": {
      for (const c in u.shape)
        if (At(u.shape[c], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of u.options)
        if (At(c, s))
          return !0;
      return !1;
    }
    case "intersection":
      return At(u.left, s) || At(u.right, s);
    case "tuple": {
      for (const c of u.items)
        if (At(c, s))
          return !0;
      return !!(u.rest && At(u.rest, s));
    }
    case "record":
      return At(u.keyType, s) || At(u.valueType, s);
    case "map":
      return At(u.keyType, s) || At(u.valueType, s);
    case "set":
      return At(u.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return At(u.innerType, s);
    case "lazy":
      return At(u.getter(), s);
    case "default":
      return At(u.innerType, s);
    case "prefault":
      return At(u.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return At(u.in, s) || At(u.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${u.type}`);
}
const VC = /* @__PURE__ */ de("ZodISODateTime", (n, r) => {
  EE.init(n, r), dt.init(n, r);
});
function YC(n) {
  return CC(VC, n);
}
const $C = /* @__PURE__ */ de("ZodISODate", (n, r) => {
  CE.init(n, r), dt.init(n, r);
});
function XC(n) {
  return kC($C, n);
}
const FC = /* @__PURE__ */ de("ZodISOTime", (n, r) => {
  kE.init(n, r), dt.init(n, r);
});
function QC(n) {
  return AC(FC, n);
}
const KC = /* @__PURE__ */ de("ZodISODuration", (n, r) => {
  AE.init(n, r), dt.init(n, r);
});
function JC(n) {
  return TC(KC, n);
}
const WC = (n, r) => {
  Fy.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => _w(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => yw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, Mf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, Mf, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return n.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, Rn = de("ZodError", WC, {
  Parent: Error
}), e4 = /* @__PURE__ */ Kf(Rn), t4 = /* @__PURE__ */ Jf(Rn), n4 = /* @__PURE__ */ Al(Rn), r4 = /* @__PURE__ */ Tl(Rn), a4 = /* @__PURE__ */ ww(Rn), i4 = /* @__PURE__ */ Ew(Rn), s4 = /* @__PURE__ */ Cw(Rn), o4 = /* @__PURE__ */ kw(Rn), u4 = /* @__PURE__ */ Aw(Rn), l4 = /* @__PURE__ */ Tw(Rn), c4 = /* @__PURE__ */ xw(Rn), d4 = /* @__PURE__ */ Nw(Rn), Rt = /* @__PURE__ */ de("ZodType", (n, r) => (Tt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Da(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((i) => typeof i == "function" ? { _zod: { check: i, def: { check: "custom" }, onattach: [] } } : i)
  ]
})), n.clone = (s, i) => ta(n, s, i), n.brand = () => n, n.register = ((s, i) => (s.add(n, i), n)), n.parse = (s, i) => e4(n, s, i, { callee: n.parse }), n.safeParse = (s, i) => n4(n, s, i), n.parseAsync = async (s, i) => t4(n, s, i, { callee: n.parseAsync }), n.safeParseAsync = async (s, i) => r4(n, s, i), n.spa = n.safeParseAsync, n.encode = (s, i) => a4(n, s, i), n.decode = (s, i) => i4(n, s, i), n.encodeAsync = async (s, i) => s4(n, s, i), n.decodeAsync = async (s, i) => o4(n, s, i), n.safeEncode = (s, i) => u4(n, s, i), n.safeDecode = (s, i) => l4(n, s, i), n.safeEncodeAsync = async (s, i) => c4(n, s, i), n.safeDecodeAsync = async (s, i) => d4(n, s, i), n.refine = (s, i) => n.check(ek(s, i)), n.superRefine = (s) => n.check(tk(s)), n.overwrite = (s) => n.check(io(s)), n.optional = () => I0(n), n.nullable = () => B0(n), n.nullish = () => I0(B0(n)), n.nonoptional = (s) => $4(n, s), n.array = () => Oa(n), n.or = (s) => L4([n, s]), n.and = (s) => I4(n, s), n.transform = (s) => U0(n, H4(s)), n.default = (s) => G4(n, s), n.prefault = (s) => Y4(n, s), n.catch = (s) => F4(n, s), n.pipe = (s) => U0(n, s), n.readonly = () => J4(n), n.describe = (s) => {
  const i = n.clone();
  return $s.add(i, { description: s }), i;
}, Object.defineProperty(n, "description", {
  get() {
    return $s.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return $s.get(n);
  const i = n.clone();
  return $s.add(i, s[0]), i;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), s_ = /* @__PURE__ */ de("_ZodString", (n, r) => {
  Wf.init(n, r), Rt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...i) => n.check(OC(...i)), n.includes = (...i) => n.check(jC(...i)), n.startsWith = (...i) => n.check(DC(...i)), n.endsWith = (...i) => n.check(zC(...i)), n.min = (...i) => n.check(El(...i)), n.max = (...i) => n.check(a_(...i)), n.length = (...i) => n.check(i_(...i)), n.nonempty = (...i) => n.check(El(1, ...i)), n.lowercase = (i) => n.check(MC(i)), n.uppercase = (i) => n.check(RC(i)), n.trim = () => n.check(PC()), n.normalize = (...i) => n.check(LC(...i)), n.toLowerCase = () => n.check(IC()), n.toUpperCase = () => n.check(BC());
}), f4 = /* @__PURE__ */ de("ZodString", (n, r) => {
  Wf.init(n, r), s_.init(n, r), n.email = (s) => n.check(rC(h4, s)), n.url = (s) => n.check(uC(p4, s)), n.jwt = (s) => n.check(EC(N4, s)), n.emoji = (s) => n.check(lC(m4, s)), n.guid = (s) => n.check(D0(L0, s)), n.uuid = (s) => n.check(aC(tl, s)), n.uuidv4 = (s) => n.check(iC(tl, s)), n.uuidv6 = (s) => n.check(sC(tl, s)), n.uuidv7 = (s) => n.check(oC(tl, s)), n.nanoid = (s) => n.check(cC(g4, s)), n.guid = (s) => n.check(D0(L0, s)), n.cuid = (s) => n.check(dC(v4, s)), n.cuid2 = (s) => n.check(fC(y4, s)), n.ulid = (s) => n.check(hC(_4, s)), n.base64 = (s) => n.check(bC(A4, s)), n.base64url = (s) => n.check(SC(T4, s)), n.xid = (s) => n.check(pC(b4, s)), n.ksuid = (s) => n.check(mC(S4, s)), n.ipv4 = (s) => n.check(gC(w4, s)), n.ipv6 = (s) => n.check(vC(E4, s)), n.cidrv4 = (s) => n.check(yC(C4, s)), n.cidrv6 = (s) => n.check(_C(k4, s)), n.e164 = (s) => n.check(wC(x4, s)), n.datetime = (s) => n.check(YC(s)), n.date = (s) => n.check(XC(s)), n.time = (s) => n.check(QC(s)), n.duration = (s) => n.check(JC(s));
});
function Zt(n) {
  return nC(f4, n);
}
const dt = /* @__PURE__ */ de("ZodStringFormat", (n, r) => {
  ut.init(n, r), s_.init(n, r);
}), h4 = /* @__PURE__ */ de("ZodEmail", (n, r) => {
  pE.init(n, r), dt.init(n, r);
}), L0 = /* @__PURE__ */ de("ZodGUID", (n, r) => {
  fE.init(n, r), dt.init(n, r);
}), tl = /* @__PURE__ */ de("ZodUUID", (n, r) => {
  hE.init(n, r), dt.init(n, r);
}), p4 = /* @__PURE__ */ de("ZodURL", (n, r) => {
  mE.init(n, r), dt.init(n, r);
}), m4 = /* @__PURE__ */ de("ZodEmoji", (n, r) => {
  gE.init(n, r), dt.init(n, r);
}), g4 = /* @__PURE__ */ de("ZodNanoID", (n, r) => {
  vE.init(n, r), dt.init(n, r);
}), v4 = /* @__PURE__ */ de("ZodCUID", (n, r) => {
  yE.init(n, r), dt.init(n, r);
}), y4 = /* @__PURE__ */ de("ZodCUID2", (n, r) => {
  _E.init(n, r), dt.init(n, r);
}), _4 = /* @__PURE__ */ de("ZodULID", (n, r) => {
  bE.init(n, r), dt.init(n, r);
}), b4 = /* @__PURE__ */ de("ZodXID", (n, r) => {
  SE.init(n, r), dt.init(n, r);
}), S4 = /* @__PURE__ */ de("ZodKSUID", (n, r) => {
  wE.init(n, r), dt.init(n, r);
}), w4 = /* @__PURE__ */ de("ZodIPv4", (n, r) => {
  TE.init(n, r), dt.init(n, r);
}), E4 = /* @__PURE__ */ de("ZodIPv6", (n, r) => {
  xE.init(n, r), dt.init(n, r);
}), C4 = /* @__PURE__ */ de("ZodCIDRv4", (n, r) => {
  NE.init(n, r), dt.init(n, r);
}), k4 = /* @__PURE__ */ de("ZodCIDRv6", (n, r) => {
  OE.init(n, r), dt.init(n, r);
}), A4 = /* @__PURE__ */ de("ZodBase64", (n, r) => {
  ME.init(n, r), dt.init(n, r);
}), T4 = /* @__PURE__ */ de("ZodBase64URL", (n, r) => {
  jE.init(n, r), dt.init(n, r);
}), x4 = /* @__PURE__ */ de("ZodE164", (n, r) => {
  DE.init(n, r), dt.init(n, r);
}), N4 = /* @__PURE__ */ de("ZodJWT", (n, r) => {
  LE.init(n, r), dt.init(n, r);
}), O4 = /* @__PURE__ */ de("ZodUnknown", (n, r) => {
  PE.init(n, r), Rt.init(n, r);
});
function P0() {
  return xC(O4);
}
const M4 = /* @__PURE__ */ de("ZodNever", (n, r) => {
  IE.init(n, r), Rt.init(n, r);
});
function R4(n) {
  return NC(M4, n);
}
const j4 = /* @__PURE__ */ de("ZodArray", (n, r) => {
  BE.init(n, r), Rt.init(n, r), n.element = r.element, n.min = (s, i) => n.check(El(s, i)), n.nonempty = (s) => n.check(El(1, s)), n.max = (s, i) => n.check(a_(s, i)), n.length = (s, i) => n.check(i_(s, i)), n.unwrap = () => n.element;
});
function Oa(n, r) {
  return UC(j4, n, r);
}
const D4 = /* @__PURE__ */ de("ZodObject", (n, r) => {
  HE.init(n, r), Rt.init(n, r), rt(n, "shape", () => r.shape), n.keyof = () => B4(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: P0() }), n.loose = () => n.clone({ ...n._zod.def, catchall: P0() }), n.strict = () => n.clone({ ...n._zod.def, catchall: R4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => hw(n, s), n.safeExtend = (s) => pw(n, s), n.merge = (s) => mw(n, s), n.pick = (s) => dw(n, s), n.omit = (s) => fw(n, s), n.partial = (...s) => gw(o_, n, s[0]), n.required = (...s) => vw(u_, n, s[0]);
});
function so(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Ne(r)
  };
  return new D4(s);
}
const z4 = /* @__PURE__ */ de("ZodUnion", (n, r) => {
  qE.init(n, r), Rt.init(n, r), n.options = r.options;
});
function L4(n, r) {
  return new z4({
    type: "union",
    options: n,
    ...Ne(r)
  });
}
const P4 = /* @__PURE__ */ de("ZodIntersection", (n, r) => {
  ZE.init(n, r), Rt.init(n, r);
});
function I4(n, r) {
  return new P4({
    type: "intersection",
    left: n,
    right: r
  });
}
const jf = /* @__PURE__ */ de("ZodEnum", (n, r) => {
  GE.init(n, r), Rt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (i, u) => {
    const c = {};
    for (const f of i)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new jf({
      ...r,
      checks: [],
      ...Ne(u),
      entries: c
    });
  }, n.exclude = (i, u) => {
    const c = { ...r.entries };
    for (const f of i)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new jf({
      ...r,
      checks: [],
      ...Ne(u),
      entries: c
    });
  };
});
function B4(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((i) => [i, i])) : n;
  return new jf({
    type: "enum",
    entries: s,
    ...Ne(r)
  });
}
const U4 = /* @__PURE__ */ de("ZodTransform", (n, r) => {
  VE.init(n, r), Rt.init(n, r), n._zod.parse = (s, i) => {
    if (i.direction === "backward")
      throw new qy(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(to(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(to(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function H4(n) {
  return new U4({
    type: "transform",
    transform: n
  });
}
const o_ = /* @__PURE__ */ de("ZodOptional", (n, r) => {
  YE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function I0(n) {
  return new o_({
    type: "optional",
    innerType: n
  });
}
const q4 = /* @__PURE__ */ de("ZodNullable", (n, r) => {
  $E.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function B0(n) {
  return new q4({
    type: "nullable",
    innerType: n
  });
}
const Z4 = /* @__PURE__ */ de("ZodDefault", (n, r) => {
  XE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function G4(n, r) {
  return new Z4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : Yy(r);
    }
  });
}
const V4 = /* @__PURE__ */ de("ZodPrefault", (n, r) => {
  FE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Y4(n, r) {
  return new V4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : Yy(r);
    }
  });
}
const u_ = /* @__PURE__ */ de("ZodNonOptional", (n, r) => {
  QE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function $4(n, r) {
  return new u_({
    type: "nonoptional",
    innerType: n,
    ...Ne(r)
  });
}
const X4 = /* @__PURE__ */ de("ZodCatch", (n, r) => {
  KE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function F4(n, r) {
  return new X4({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const Q4 = /* @__PURE__ */ de("ZodPipe", (n, r) => {
  JE.init(n, r), Rt.init(n, r), n.in = r.in, n.out = r.out;
});
function U0(n, r) {
  return new Q4({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const K4 = /* @__PURE__ */ de("ZodReadonly", (n, r) => {
  WE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function J4(n) {
  return new K4({
    type: "readonly",
    innerType: n
  });
}
const W4 = /* @__PURE__ */ de("ZodCustom", (n, r) => {
  eC.init(n, r), Rt.init(n, r);
});
function ek(n, r = {}) {
  return HC(W4, n, r);
}
function tk(n) {
  return qC(n);
}
const H0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Df = "placeholder-chatHistory", nk = so({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: Oa(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), rk = so({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: Oa(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), ak = so({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Oa(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), ik = so({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), sk = so({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: Oa(rk).optional().describe("A list of new entries to add."),
  change: Oa(ak).optional().describe("A list of existing entries to change."),
  remove: Oa(ik).optional().describe("A list of existing entries to remove.")
});
function pf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function zf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((i) => i !== null && typeof i == "object" ? `${s}<item>
${zf(i, r + 1)}${s}</item>
` : `${s}<item>${pf(i)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let i = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? i += `${s}<${u}>
${zf(c, r + 1)}${s}</${u}>
` : i += `${s}<${u}>${pf(c)}</${u}>
`;
    }
    return i;
  }
  return `${s}<value>${pf(n)}</value>
`;
}
function ok(n, r) {
  const s = Ta(n);
  return r === "xml" ? `<entry>
${zf(s, 1)}</entry>` : JSON.stringify(s, null, 2);
}
function uk(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function lk(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ta(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = uk(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const i = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (i) return Ta(i);
  switch (lk(n.type)) {
    case "object": {
      const c = {}, f = n.properties || {};
      for (const m of Object.keys(f))
        c[m] = Ta(f[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = Ta(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [Ta(c)];
    }
    case "string":
      return n.title || n.description || "string";
    case "integer":
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return n.properties || n.additionalProperties ? Ta({ ...n, type: "object" }) : n.items ? Ta({ ...n, type: "array" }) : null;
  }
}
const ck = new Q2();
async function q0(n, r, s, i, u, c) {
  const f = !i.json_schema && !1;
  return new Promise((m, p) => {
    const _ = new AbortController(), g = c ?? _.signal;
    c && c.addEventListener("abort", () => _.abort(), { once: !0 }), ck.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: i
      },
      {
        abortController: _,
        onEntry: void 0,
        onFinish: (E, y, b) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : b ? p(b) : y === void 0 && b === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (y || p(new Error("No data received from LLM")), b ? p(b) : m(y))
      }
    );
  });
}
async function Z0(n, r, s, i, u, c, f) {
  const m = It.getSettings();
  let p, _;
  const g = GC(s);
  if (u === "native") {
    if (p = await q0(
      n,
      r,
      c,
      {
        json_schema: { name: i, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    _ = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const y = u, b = ok(g, y), h = JSON.stringify(g, null, 2), C = y === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", A = m.prompts[C]?.content;
    if (!A)
      throw new Error(`Prompt template for mode "${y}" not found.`);
    const R = {
      example_response: b,
      schema: h
    }, L = { role: "system", content: _n.compile(A, { noEscape: !0, strict: !0 })(R) };
    if (p = await q0(
      n,
      [...r, L],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${i} failed to return content.`);
    if (y === "xml") {
      const l = wy(p.content), S = Object.values(l).flat();
      if (S.length > 0) {
        const w = S[0];
        _ = {
          justification: "Updated via XML.",
          // Justification is hard with XML parsing this way
          name: w.comment,
          triggers: w.key,
          content: w.content
        };
      } else
        throw new Error("Could not find a valid entry in the XML response.");
    } else
      _ = JSON.parse(p.content);
  }
  const E = s.safeParse(_);
  if (!E.success) {
    const y = `Model response failed schema validation for ${i}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", _), await Se("error", y), new Error(y);
  }
  return E.data;
}
const dk = ({ originalContent: n, newContent: r }) => {
  const s = se.useMemo(() => {
    const i = Uy(n, r);
    let u = "", c = "";
    return i.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += _), f.removed || (c += _);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, l_ = ({ before: n, after: r }) => {
  const s = se.useMemo(() => {
    const i = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && i.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && i.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && i.push({ label: "Content", before: n.content || "", after: r.content || "" })), i;
  }, [n, r]);
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: s.map(({ label: i, before: u, after: c }) => /* @__PURE__ */ N.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ N.jsx("h4", { children: i }),
    /* @__PURE__ */ N.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ N.jsx("span", { children: "Before" }),
      /* @__PURE__ */ N.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ N.jsx(dk, { originalContent: u, newContent: c })
  ] }, i)) });
}, fk = ({ before: n, after: r }) => {
  const { added: s, removed: i, changed: u } = se.useMemo(() => {
    const f = n || {}, m = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([y, b]) => {
      b.forEach((h) => {
        const C = `${y}::${h.uid}`;
        m.set(C, { worldName: y, entry: h });
      });
    });
    const p = [], _ = [], g = [], E = Object.entries(r || {}).flatMap(
      ([y, b]) => b.map((h) => ({ worldName: y, entry: h }))
    );
    for (const { worldName: y, entry: b } of E) {
      const h = `${y}::${b.uid}`;
      if (m.has(h)) {
        const A = m.get(h).entry;
        (A.comment !== b.comment || A.content !== b.content || (A.key || []).join(",") !== (b.key || []).join(",")) && g.push({ worldName: y, before: A, after: b }), m.delete(h);
      } else
        p.push({ worldName: y, entry: b });
    }
    return m.forEach(({ worldName: y, entry: b }) => {
      _.push({ worldName: y, entry: b });
    }), { added: p, removed: _, changed: g };
  }, [n, r]), c = s.length > 0 || i.length > 0 || u.length > 0;
  return /* @__PURE__ */ N.jsx("div", { className: "global-diff", children: c ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    s.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Added Entries (",
        s.length,
        ")"
      ] }),
      s.map(({ worldName: f, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry added", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    i.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Removed Entries (",
        i.length,
        ")"
      ] }),
      i.map(({ worldName: f, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry removed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(from ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${f}::${m.uid}`))
    ] }),
    u.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Changed Entries (",
        u.length,
        ")"
      ] }),
      u.map(({ worldName: f, before: m, after: p }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          p.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            f,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx(l_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, eh = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ N.jsx(fk, { before: r, after: s }) : /* @__PURE__ */ N.jsx(l_, { before: r, after: s }) })
] }), hk = ({ currentState: n, initialState: r }) => {
  const [s, i] = se.useState(!1), u = se.useMemo(
    () => [
      { label: "Name", value: n.comment },
      { label: "Triggers", value: n.key.join(", ") },
      { label: "Content", value: n.content }
    ],
    [n]
  );
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Entry State" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (c) => i(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(eh, { sessionType: "entry", before: r, after: n }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ N.jsx("label", { children: c }),
      /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, pk = ({ currentState: n, initialState: r }) => {
  const [s, i] = se.useState(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (u) => i(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(eh, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([u, c]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ N.jsx("h4", { children: u }),
      c.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle-text", children: "No entries in this world." }) : c.map((f) => /* @__PURE__ */ N.jsxs("div", { className: "state-field-group", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Name" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f.comment || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Triggers" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: (f.key || []).join(", ") || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: "Content" }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f.content || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] })
      ] }, f.uid))
    ] }, u)) })
  ] });
}, Ti = SillyTavern.getContext(), mk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, gk = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const i of r.remove) {
      const { worldName: u, name: c } = i;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const i of r.change) {
      const { worldName: u, originalName: c } = i, f = s[u]?.find((m) => m.comment === c);
      f ? (i.newName !== void 0 && (f.comment = i.newName), i.triggers !== void 0 && (f.key = i.triggers), i.content !== void 0 && (f.content = i.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), Se("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const i of r.add) {
      const { worldName: u, name: c, triggers: f, content: m } = i;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, _ = Bf(u, p);
      _ && (_.comment = c, _.key = f, _.content = m, s[u].push(_));
    }
  return s;
}, vk = ({ initialState: n, onSave: r, onClose: s }) => {
  const [i, u] = se.useState(n.comment), [c, f] = se.useState(n.key.join(", ")), [m, p] = se.useState(n.content), _ = () => {
    const g = {
      ...structuredClone(n),
      comment: i,
      key: c.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(g);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsxs(xe, { onClick: _, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ N.jsxs(xe, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Name" }),
        /* @__PURE__ */ N.jsx(Dy, { type: "text", value: i, onInput: (g) => u(g.currentTarget.value) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Triggers (comma-separated)" }),
        /* @__PURE__ */ N.jsx(br, { value: c, onChange: (g) => f(g.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Content" }),
        /* @__PURE__ */ N.jsx(br, { value: m, onChange: (g) => p(g.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, yk = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: i,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = se.useState(n.messages), [p, _] = se.useState(""), [g, E] = se.useState(!1), [y, b] = se.useState(null), [h, C] = se.useState(!1), [A, R] = se.useState(!1), [x, L] = se.useState(null), [l, S] = se.useState(""), w = se.useRef(null), k = se.useRef(null);
  se.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const O = se.useCallback(
    (Y, H, te) => {
      if (JSON.stringify(te) === JSON.stringify(H))
        return Y;
      const ne = It.getSettings();
      let ue = "";
      if (n.type === "global") {
        const re = ne.prompts.reviseGlobalStateUpdate?.content, he = ne.prompts.reviseGlobalStateUpdateAddedModified?.content, Re = ne.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!re || !he || !Re) return Y;
        const be = te || {}, me = H || {}, pe = /* @__PURE__ */ new Map();
        Object.entries(be).forEach(([at, ve]) => {
          ve.forEach((ye) => {
            pe.set(`${at}::${ye.uid}`, ye);
          });
        });
        const je = /* @__PURE__ */ new Map();
        Object.entries(me).forEach(([at, ve]) => {
          ve.forEach((ye) => {
            je.set(`${at}::${ye.uid}`, ye);
          });
        });
        const Ve = {}, We = [];
        if (je.forEach((at, ve) => {
          const [ye] = ve.split("::"), qe = pe.get(ve);
          let Ze = !1;
          if (!qe)
            Ze = !0;
          else {
            const tt = (at.content || "") !== (qe.content || ""), qn = (at.comment || "") !== (qe.comment || ""), jn = (at.key || []).sort().join(",") !== (qe.key || []).sort().join(",");
            (tt || qn || jn) && (Ze = !0);
          }
          Ze && (Ve[ye] || (Ve[ye] = []), Ve[ye].push(at));
        }), pe.forEach((at, ve) => {
          if (!je.has(ve)) {
            const [ye] = ve.split("::");
            We.push({ worldName: ye, comment: at.comment });
          }
        }), Object.keys(Ve).length === 0 && We.length === 0)
          return Y;
        const Oe = _n.compile(he, { noEscape: !0 })({
          changedLorebooks: Ve
        }), _t = _n.compile(Re, { noEscape: !0 })({ removedEntries: We });
        ue = _n.compile(re, { noEscape: !0 })({
          addedModifiedContent: Oe,
          removedContent: _t
        });
      } else {
        const re = H;
        ue = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${re.comment})
Triggers: ${(re.key || []).join(", ")}
Content: ${re.content}`;
      }
      if (ue = Ti.substituteParams(ue.trim()), ue) {
        const re = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: ue,
          isStateUpdate: !0
        };
        return [...Y, re];
      }
      return Y;
    },
    [n.type, n.worldName]
  ), z = se.useCallback(
    async (Y, H, te, ne) => {
      const ue = It.getSettings();
      if (!n.profileId) {
        Se("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), te(), E(!0);
      try {
        const re = [], he = Ti.extensionSettings.connectionManager?.profiles?.find(
          (Oe) => Oe.id === n.profileId
        ), Re = he?.api ? Ti.CONNECT_API_MAP[he.api].selected : void 0;
        if (!Re) {
          Se("warning", "No API selected for this session.");
          return;
        }
        for (const Oe of Y)
          if (Oe.id === Df) {
            if (sn === void 0 && !Ft) continue;
            const _t = await ay(Re, c);
            _t.warnings?.length && _t.warnings.forEach((at) => Se("warning", at)), re.push(..._t.result);
          } else
            re.push(Oe);
        const be = Y.slice(0, Y.length - (H ? 0 : 1)).reverse().find((Oe) => Oe.stateSnapshot)?.stateSnapshot ?? u;
        let me = "";
        if (n.type === "global") {
          const Oe = ue.prompts.currentLorebooks?.content;
          if (Oe) {
            const _t = { currentLorebooks: be };
            me = _n.compile(Oe, { noEscape: !0 })(_t);
          }
        } else {
          const Oe = be;
          me = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${Oe.comment})
Triggers: ${(Oe.key || []).join(", ")}
Content: ${Oe.content}`;
        }
        if (me = Ti.substituteParams(me.trim()), me) {
          const Oe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: me
          }, _t = re.pop();
          re.push(Oe), _t && re.push(_t);
        }
        let pe, je;
        if (n.type === "entry") {
          const Oe = await Z0(
            n.profileId,
            re,
            nk,
            H0.ENTRY,
            n.promptEngineeringMode,
            ue.maxResponseToken,
            k.current.signal
          );
          pe = mk(be, Oe), je = Oe.justification;
        } else {
          const Oe = await Z0(
            n.profileId,
            re,
            sk,
            H0.GLOBAL,
            n.promptEngineeringMode,
            ue.maxResponseToken,
            k.current.signal
          );
          pe = gk(be, Oe), je = Oe.justification;
        }
        const Ve = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: je,
          stateSnapshot: pe
        };
        let We = [...Y, Ve];
        We = O(We, pe, be), m(We), i({ ...n, messages: We });
      } catch (re) {
        re.name === "AbortError" ? Se("info", "Request was cancelled.") : (console.error("Revise request failed:", re), Se("error", `Request failed: ${re.message}`)), ne();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, i, u, c, O]
  ), j = se.useCallback(async () => {
    if (!p.trim() || g) return;
    const Y = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, H = f;
    await z(
      [...f, Y],
      !1,
      () => {
        m([...f, Y]), _("");
      },
      () => m(H)
    );
  }, [p, g, f, z]), P = se.useCallback(async () => {
    if (g || f.length === 0) return;
    const Y = f;
    let H = [...f];
    const te = f.findLastIndex((ne) => !ne.isStateUpdate);
    te > -1 && f[te].role === "assistant" && (H = f.slice(0, te)), await z(
      H,
      !0,
      () => m(H),
      () => m(Y)
    );
  }, [g, f, z]), Z = () => {
    const Y = f.slice().reverse().find((H) => H.stateSnapshot)?.stateSnapshot ?? u;
    s(Y), r();
  }, X = (Y) => {
    const H = f.findIndex((ue) => ue.id === Y);
    if (H < 0 || !f[H].stateSnapshot) return;
    const te = f[H].stateSnapshot;
    let ne = u;
    for (let ue = H - 1; ue >= 0; ue--)
      if (f[ue].stateSnapshot) {
        ne = f[ue].stateSnapshot;
        break;
      }
    b({ before: ne, after: te });
  }, G = (Y) => {
    L(Y.id), S(Y.content);
  }, K = () => {
    L(null), S("");
  }, M = async () => {
    if (!x) return;
    const Y = f.findIndex((he) => he.id === x);
    if (Y === -1 || !await Ti.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const te = f, ne = f.slice(0, Y), ue = { ...f[Y], content: l }, re = [...ne, ue];
    K(), await z(
      re,
      !1,
      () => m(re),
      () => m(te)
    );
  }, B = async (Y) => {
    const H = f.findIndex((re) => re.id === Y);
    if (H === -1) return;
    const te = !!f[H].isInitial;
    if (!await Ti.Popup.show.confirm(
      "Delete Message",
      te ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const ue = te ? f.filter((re) => re.isInitial && re.id !== Y) : f.slice(0, H);
    m(ue), i({ ...n, messages: ue }), Se("info", "Message history has been updated.");
  }, J = (Y) => {
    const H = f.slice().reverse().find((ue) => ue.stateSnapshot)?.stateSnapshot ?? u, te = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: Y
    };
    let ne = [...f, te];
    ne = O(ne, Y, H), m(ne), i({ ...n, messages: ne }), R(!1);
  }, ae = f.slice().reverse().find((Y) => Y.stateSnapshot)?.stateSnapshot ?? u, I = f.filter((Y) => !Y.isStateUpdate), $ = I.filter((Y) => Y.isInitial), ce = I.filter((Y) => !Y.isInitial);
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h2", { children: n.name }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsx(
          zy,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (Y) => i({ ...n, profileId: Y?.id ?? "" })
          }
        ),
        /* @__PURE__ */ N.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (Y) => i({ ...n, promptEngineeringMode: Y.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ N.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        n.type === "entry" && /* @__PURE__ */ N.jsx(xe, { onClick: () => R(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ N.jsx(xe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ N.jsxs(xe, { onClick: Z, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-messages", children: [
      $.length > 0 && /* @__PURE__ */ N.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ N.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ N.jsx("div", { className: "initial-messages-content", children: $.map(
          (Y) => x === Y.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ N.jsx(br, { value: l, onChange: (H) => S(H.target.value), rows: 5 }),
            /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ N.jsxs(xe, { onClick: M, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ N.jsxs(xe, { onClick: K, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Y.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper initial-context ${Y.role}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${Y.role} initial`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: Y.content }) }),
            !g && Y.id !== Df && /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ N.jsx(
                xe,
                {
                  className: "message-action-button",
                  onClick: () => G(Y),
                  title: "Edit Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ N.jsx(
                xe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B(Y.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, Y.id)
        ) })
      ] }),
      ce.map(
        (Y) => x === Y.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ N.jsx(br, { value: l, onChange: (H) => S(H.target.value), rows: 3 }),
          /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ N.jsxs(xe, { onClick: M, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ N.jsxs(xe, { onClick: K, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Y.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper ${Y.role}`, children: [
          /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
            Y.role === "user" && !Y.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button",
                onClick: () => G(Y),
                title: "Edit and Fork",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            Y.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button",
                onClick: () => X(Y.id),
                title: "Compare changes",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ N.jsx(
              xe,
              {
                className: "message-action-button danger_button",
                onClick: () => B(Y.id),
                title: "Delete Message",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${Y.role}`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: Y.content }) })
        ] }, Y.id)
      ),
      ce.length > 0 && !g && /* @__PURE__ */ N.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ N.jsxs(xe, { onClick: P, title: "Regenerate response", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ N.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ N.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => k.current?.abort(),
            className: "danger_button",
            title: "Cancel Request",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-stop" })
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("div", { ref: w })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ N.jsx(
        br,
        {
          value: p,
          onChange: (Y) => _(Y.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!x,
          onKeyDown: (Y) => {
            Y.key === "Enter" && !Y.shiftKey && (Y.preventDefault(), j());
          }
        }
      ),
      /* @__PURE__ */ N.jsx(xe, { onClick: j, disabled: g || !p.trim() || !!x, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    y && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(eh, { sessionType: n.type, before: y.before, after: y.after }),
        onComplete: () => b(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ N.jsx(hk, { currentState: ae, initialState: u }) : /* @__PURE__ */ N.jsx(
          pk,
          {
            currentState: ae,
            initialState: u
          }
        ),
        onComplete: () => C(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    A && n.type === "entry" && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          vk,
          {
            initialState: ae,
            onSave: (Y) => {
              J(Y), R(!1);
            },
            onClose: () => R(!1)
          }
        ),
        onComplete: () => R(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function _k(n, r, s, i, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[i];
  if (!p)
    throw new Error(`Main context template preset "${i}" not found.`);
  const _ = [], g = {
    user: De.name1 || "You",
    char: De.name2 || "Character",
    persona: De.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = n;
    else {
      const y = {};
      Object.entries(f).filter(([b]) => c.selectedWorldNames.includes(b)).forEach(([b, h]) => {
        const C = new Set(c.selectedEntryUids[b] ?? []), A = C.size > 0 ? h.filter((R) => C.has(R.uid)) : h.filter((R) => !R.disable);
        A.length > 0 && (y[b] = A);
      }), g.currentLorebooks = y;
    }
  if (r === "entry") {
    const y = n;
    g.entryToRevise = {
      worldName: s,
      name: y.comment,
      triggers: y.key.join(", "),
      content: y.content
    };
  }
  for (const y of p.prompts) {
    if (!y.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(y.promptName) || y.promptName === "chatHistory" && u.messages.type === "none" || sn === void 0 && !Ft && y.promptName === "chatHistory") continue;
    if (y.promptName === "chatHistory") {
      _.push({
        id: Df,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const b = m.prompts[y.promptName];
    if (b) {
      let h = _n.compile(b.content, { noEscape: !0 })(g);
      h = De.substituteParams(h), h.trim() && _.push({
        id: `im-${_.length}`,
        role: y.role,
        content: h.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const y = _n.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? n.comment : ""
    });
    _.push({
      id: `im-${_.length}`,
      role: "system",
      content: y,
      isInitial: !0
    });
  }
  return _;
}
const nl = SillyTavern.getContext(), G0 = "worldInfoRecommender_reviseSessions", c_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: i,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = se.useState([]), [_, g] = se.useState(null), [E, y] = se.useState(!0), b = se.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  se.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(G0) || "[]");
    p(w), y(!1);
  }, []);
  const h = se.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === b).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, b]), C = (w) => {
    localStorage.setItem(G0, JSON.stringify(w)), p(w);
  }, A = async () => {
    const w = await nl.Popup.show.input(
      "New Session Name",
      n.type === "entry" ? `Revise "${n.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = It.getSettings();
        if (!k.profileId) {
          Se("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const O = await _k(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), z = {
          id: `rs-${Date.now()}`,
          name: w,
          type: n.type,
          targetEntryIdentifier: n.type === "entry" ? b : void 0,
          worldName: n.type === "entry" ? n.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: O,
          context: { mainContextTemplatePreset: k.mainContextTemplatePreset },
          profileId: k.profileId,
          promptEngineeringMode: k.defaultPromptEngineeringMode
        };
        g(z);
      } catch (k) {
        const O = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), Se("error", `Failed to create session: ${O}`);
      }
  }, R = (w) => {
    g(w);
  }, x = async (w) => {
    if (await nl.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = m.filter((z) => z.id !== w);
      C(O);
    }
  }, L = (w) => {
    const k = m.findIndex((z) => z.id === w.id), O = [...m];
    k !== -1 ? O[k] = w : O.push(w), C(O), g(w);
  }, l = (w) => {
    n.type === "entry" ? i({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : i(w), s();
  };
  if (_) {
    const w = nl.extensionSettings.connectionManager?.profiles?.find(
      (z) => z.id === _.profileId
    ), k = f.messages, O = {
      targetCharacterId: sn,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!Ft,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!sn && !Ft)
      O.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (k.type) {
        case "none":
          O.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          O.messageIndexesBetween = { start: 0, end: k.first ?? 10 };
          break;
        case "last": {
          const z = nl.chat?.length ?? 0, j = k.last ?? 10;
          O.messageIndexesBetween = {
            end: Math.max(0, z - 1),
            start: Math.max(0, z - j)
          };
          break;
        }
        case "range":
          k.range && (O.messageIndexesBetween = {
            start: k.range.start,
            end: k.range.end
          });
          break;
      }
    return /* @__PURE__ */ N.jsx(
      yk,
      {
        session: _,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: L,
        initialState: r,
        chatContextOptions: O
      }
    );
  }
  const S = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ N.jsx("div", { className: "popup_header", children: /* @__PURE__ */ N.jsx("h2", { children: S }) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ N.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "session-info", onClick: () => R(w), children: [
        /* @__PURE__ */ N.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ N.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ N.jsx(xe, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-actions", children: /* @__PURE__ */ N.jsxs(xe, { onClick: A, className: "menu_button", children: [
      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, bk = new HS.Converter(), Sk = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: i,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: _,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [y, b] = se.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = se.useState(!1), [A, R] = se.useState(!1), [x, L] = se.useState(!1), [l, S] = se.useState(!1), [w, k] = se.useState(!1), [O, z] = se.useState(!1), [j, P] = se.useState(""), Z = se.useRef(null), X = se.useMemo(
    () => !!_[y]?.find((ae) => ae.uid === r.uid && ae.comment === r.comment),
    [y, r.uid, r.comment, _]
  ), G = A || x, K = async () => {
    C(!0), await c(r, n, y);
  }, M = async () => {
    R(!0), await m({ worldName: n, entry: r, prompt: j, mode: "continue" }), R(!1);
  }, B = async () => {
    L(!0), await m({ worldName: n, entry: r, prompt: j, mode: "revise" }), L(!1);
  }, J = (ae) => {
    p(n, r, ae, u);
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ N.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: y,
            onChange: (ae) => b(ae.target.value),
            children: s.map((ae) => /* @__PURE__ */ N.jsx("option", { value: ae, children: ae }, ae))
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: K, disabled: h || G, className: "menu_button interactable add", children: X ? "Update" : "Add" }),
        /* @__PURE__ */ N.jsxs(
          xe,
          {
            onClick: () => z(!0),
            disabled: G,
            className: "menu_button interactable",
            title: "Revise this entry with a chat-based AI session.",
            children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
              " Revise"
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: M,
            disabled: G,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: A ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: B,
            disabled: G,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: x ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: () => S(!0), disabled: G, className: "menu_button interactable edit", children: "Edit" }),
        X && /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => k(!0),
            disabled: G,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => f(r, n, !0),
            disabled: G,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ N.jsx(
          xe,
          {
            onClick: () => f(r, n, !1),
            disabled: G,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ N.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ N.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: bk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ N.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
        br,
        {
          value: j,
          onChange: (ae) => P(ae.target.value),
          placeholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    l && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(ow, { ref: Z, entry: r, initialRegexIds: u }),
        onComplete: (ae) => {
          if (ae && Z.current) {
            const { updatedEntry: I, updatedRegexIds: $ } = Z.current.getFormData();
            p(n, r, I, $);
          }
          S(!1);
        }
      }
    ),
    w && i && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(iw, { originalEntry: i, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    O && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          c_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => z(!1),
            onApply: J,
            sessionForContext: g,
            allEntries: _,
            contextToSend: E
          }
        ),
        onComplete: () => z(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, V0 = se.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, i) => {
    const [u, c] = se.useState(""), [f, m] = se.useState(() => {
      const y = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([b, h]) => {
        h.forEach((C) => y.add(`${b}::${C}`));
      }), y;
    }), p = se.useMemo(() => {
      if (!u)
        return n;
      const y = u.toLowerCase(), b = {};
      return Object.entries(n).forEach(([h, C]) => {
        const A = C.filter(
          (R) => R.comment.toLowerCase().includes(y) || h.toLowerCase().includes(y)
        );
        A.length > 0 && (b[h] = A);
      }), b;
    }, [u, n]);
    se.useImperativeHandle(i, () => ({
      getSelection: () => {
        const y = {};
        return f.forEach((b) => {
          const [h, C] = b.split("::"), A = parseInt(C, 10);
          y[h] || (y[h] = []), y[h].push(A);
        }), y;
      }
    }));
    const _ = (y, b) => {
      const h = `${y}::${b}`, C = new Set(f);
      C.has(h) ? C.delete(h) : C.add(h), m(C);
    }, g = () => {
      const y = /* @__PURE__ */ new Set();
      Object.entries(p).forEach(([b, h]) => {
        h.forEach((C) => y.add(`${b}::${C.uid}`));
      }), m(y);
    }, E = () => {
      m(/* @__PURE__ */ new Set());
    };
    return /* @__PURE__ */ N.jsxs("div", { className: "select-entries-popup", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s }),
      /* @__PURE__ */ N.jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ N.jsx(
          "input",
          {
            type: "text",
            className: "text_pole",
            placeholder: "Filter by name or lorebook...",
            value: u,
            onChange: (y) => c(y.target.value)
          }
        ),
        /* @__PURE__ */ N.jsx(xe, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ N.jsx(xe, { onClick: E, children: "Deselect All" })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "entry-list", children: Object.keys(p).length === 0 ? /* @__PURE__ */ N.jsx("p", { children: "No entries match your filter." }) : Object.entries(p).map(([y, b]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ N.jsx("h4", { children: y }),
        /* @__PURE__ */ N.jsx("ul", { children: b.map((h) => /* @__PURE__ */ N.jsx("li", { children: /* @__PURE__ */ N.jsxs("label", { children: [
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "checkbox",
              checked: f.has(`${y}::${h.uid}`),
              onChange: () => _(y, h.uid)
            }
          ),
          h.comment || `Entry ${h.uid}`
        ] }) }, h.uid)) })
      ] }, y)) })
    ] });
  }
);
_n.helpers.join || _n.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
_n.helpers.is_not_empty || _n.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Bn = SillyTavern.getContext(), rl = () => sn ? ry(sn) : Ft, wk = () => {
  const n = Iy(), r = It.getSettings(), [s, i] = se.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [u, c] = se.useState([]), [f, m] = se.useState({}), [p, _] = se.useState([]), [g, E] = se.useState(!0), [y, b] = se.useState(!1), [h, C] = se.useState(!1), [A, R] = se.useState(!1), [x, L] = se.useState(!1), l = se.useRef(null), S = se.useRef(null), w = se.useMemo(() => rl() ?? "_global", [sn, Ft]);
  se.useEffect(() => {
    (async () => {
      E(!0), m({}), c([]), _([]);
      const te = rl(), ne = `worldInfoRecommend_${w}`, ue = JSON.parse(localStorage.getItem(ne) ?? "{}"), re = {
        suggestedEntries: ue.suggestedEntries ?? {},
        blackListedEntries: ue.blackListedEntries ?? [],
        selectedWorldNames: ue.selectedWorldNames ?? [],
        selectedEntryUids: ue.selectedEntryUids ?? {},
        regexIds: ue.regexIds ?? {}
      };
      let he = {};
      if (te)
        if (Ft) {
          const me = await ll(["chat", "persona", "global"]);
          me && (he = me);
          const pe = Gg.find((je) => je.id === Ft);
          if (pe)
            for (const je of pe.members) {
              const Ve = Bn.characters.findIndex((We) => We.avatar === je);
              if (Ve !== -1) {
                const We = await ll(["character"], !0, Ve);
                We && (he = { ...he, ...We });
              }
            }
        } else
          he = await ll(["all"], !0, sn);
      else
        for (const me of z1) {
          const pe = await Bn.loadWorldInfo(me);
          pe && (he[me] = Object.values(pe.entries));
        }
      m(he);
      const Re = Object.keys(he);
      c(Re), re.selectedWorldNames.length === 0 && w !== "_global" ? re.selectedWorldNames = [...Re] : re.selectedWorldNames = re.selectedWorldNames.filter(
        (me) => Re.includes(me)
      );
      const be = {};
      if (re.selectedEntryUids) {
        for (const [me, pe] of Object.entries(re.selectedEntryUids))
          if (he[me]) {
            const je = new Set(he[me].map((We) => We.uid)), Ve = pe.filter((We) => je.has(We));
            Ve.length > 0 && (be[me] = Ve);
          }
      }
      if (re.selectedEntryUids = be, i(re), Ft) {
        const me = Gg.find((pe) => pe.id === Ft);
        if (me?.generation_mode === 0) {
          const pe = me.members.map((je) => Bn.characters.find((Ve) => Ve.avatar === je)).filter((je) => !!je);
          _(pe);
        }
      }
      E(!1);
    })();
  }, [w]), se.useEffect(() => {
    if (g) return;
    const H = `worldInfoRecommend_${w}`;
    localStorage.setItem(H, JSON.stringify(s));
  }, [s, w, g]);
  const k = (H, te) => {
    It.getSettings()[H] = te, It.saveSettings(), n();
  }, O = (H, te) => {
    It.getSettings().contextToSend[H] = te, It.saveSettings(), n();
  }, z = se.useCallback(
    async (H, te, ne = !1) => {
      const ue = structuredClone(f);
      ue[te] || (ue[te] = []);
      const re = ue[te].find((be) => be.uid === H.uid), he = !!re;
      let Re;
      if (he) {
        const be = (H.content || "") !== (re.content || ""), me = (H.comment || "") !== (re.comment || ""), pe = (H.key || []).slice().sort().join(",") !== (re.key || []).slice().sort().join(",");
        if (!be && !me && !pe)
          return "unchanged";
        Re = re;
      } else {
        const be = { entries: Object.fromEntries(ue[te].map((pe) => [pe.uid, pe])) }, me = Bf(te, be);
        if (!me) throw new Error("Failed to create new World Info entry.");
        Re = me, ue[te].push(Re);
      }
      if (Object.assign(Re, { key: H.key, content: H.content, comment: H.comment }), m(ue), !ne) {
        const be = { entries: Object.fromEntries(ue[te].map((me) => [me.uid, me])) };
        await Bn.saveWorldInfo(te, be), Bn.reloadWorldInfoEditor(te, !0);
      }
      return he ? "updated" : "added";
    },
    [f]
  ), j = se.useCallback(
    async (H) => {
      if (!r.profileId) return Se("warning", "Please select a connection profile.");
      const te = H?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!H && !te)
        return Se("warning", "Please enter a prompt.");
      b(!0);
      try {
        const ne = Bn.extensionSettings.connectionManager?.profiles?.find(
          (pe) => pe.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const ue = rl(), re = {
          presetName: ne.preset,
          contextName: ne.context,
          instructName: ne.instruct,
          syspromptName: ne.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Ft
        };
        if (!ue)
          re.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              re.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              re.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const pe = r.contextToSend.messages.last ?? 10, je = Bn.chat?.length ?? 0;
              re.messageIndexesBetween = {
                end: Math.max(0, je - 1),
                start: Math.max(0, je - pe)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (re.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const he = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete he.stDescription, (!r.contextToSend.worldInfo || s.selectedWorldNames.length === 0) && delete he.currentLorebooks;
        const Re = Object.values(s.suggestedEntries).some((pe) => pe.length > 0);
        (!r.contextToSend.suggestedEntries || !Re) && delete he.suggestedLorebooks, s.blackListedEntries.length === 0 && delete he.blackListedEntries;
        const be = H ? { worldName: H.worldName, entry: H.entry, mode: H.mode } : void 0, me = await Ry({
          profileId: r.profileId,
          userPrompt: te,
          buildPromptOptions: re,
          session: s,
          entriesGroupByWorldName: f,
          promptSettings: he,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((pe) => pe.enabled).map((pe) => ({ promptName: pe.promptName, role: pe.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: be
        });
        Object.keys(me).length > 0 ? i(H ? (pe) => {
          const je = structuredClone(pe.suggestedEntries), Ve = H.worldName, We = me[Ve]?.[0];
          if (je[Ve] && We) {
            const Oe = je[Ve].findIndex(
              (_t) => _t.uid === H.entry.uid && _t.comment === H.entry.comment
            );
            Oe !== -1 && (je[Ve][Oe] = We);
          }
          return { ...pe, suggestedEntries: je };
        } : (pe) => {
          const je = structuredClone(pe.suggestedEntries);
          for (const [Ve, We] of Object.entries(me)) {
            je[Ve] || (je[Ve] = []);
            for (const Oe of We)
              je[Ve].some((_t) => _t.uid === Oe.uid && _t.comment === Oe.comment) || je[Ve].push(Oe);
          }
          return { ...pe, suggestedEntries: je };
        }) : Se("warning", "No results from AI");
      } catch (ne) {
        console.error(ne), Se("error", ne instanceof Error ? ne.message : String(ne));
      } finally {
        b(!1);
      }
    },
    [r, s, f]
  ), P = se.useCallback(
    async (H, te, ne) => {
      try {
        const ue = await z(H, ne);
        ue === "unchanged" ? Se("info", `No changes detected for "${H.comment}". Entry was not updated.`) : Se("success", ue === "added" ? "Entry added" : "Entry updated"), i((re) => {
          const he = { ...re.suggestedEntries };
          return he[te] && (he[te] = he[te].filter(
            (Re) => !(Re.uid === H.uid && Re.comment === H.comment)
          )), { ...re, suggestedEntries: he };
        });
      } catch (ue) {
        console.error(ue), Se("error", `Failed to add entry: ${ue.message}`);
      }
    },
    [z]
  ), Z = async () => {
    const H = Object.values(s.suggestedEntries).flat().length;
    if (H === 0) return Se("warning", "No entries to add.");
    if (!await Bn.Popup.show.confirm(
      "Add All",
      `Are you sure you want to add/update all ${H} suggested entries?`
    )) return;
    b(!0);
    let ne = 0, ue = 0, re = 0;
    const he = /* @__PURE__ */ new Set(), Re = [];
    Object.entries(s.suggestedEntries).forEach(([be, me]) => {
      me.forEach((pe) => {
        const je = u.includes(be) ? be : u[0] ?? "";
        je && Re.push({ worldName: je, entry: pe });
      });
    });
    for (const { worldName: be, entry: me } of Re)
      try {
        const pe = await z(me, be, !0);
        pe === "added" ? ne++ : pe === "updated" ? ue++ : re++, pe !== "unchanged" && he.add(be);
      } catch {
        Se("error", `Failed to process entry: ${me.comment}`);
      }
    for (const be of he)
      try {
        const me = { entries: Object.fromEntries(f[be].map((pe) => [pe.uid, pe])) };
        await Bn.saveWorldInfo(be, me), Bn.reloadWorldInfoEditor(be, !0);
      } catch {
        Se("error", `Failed to save world: ${be}`);
      }
    i((be) => ({ ...be, suggestedEntries: {} })), Se("success", `Processed: ${ne} new, ${ue} updated, ${re} unchanged.`), b(!1);
  }, X = async () => {
    await Bn.Popup.show.confirm(
      "Reset",
      "Clear all suggestions and reset lorebook selection?"
    ) && (i((te) => ({
      ...te,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: rl() ? [...u] : [],
      selectedEntryUids: {}
    })), Se("success", "Reset successful"));
  }, G = (H, te, ne) => {
    i((ue) => {
      const re = { ...ue };
      ne && (re.blackListedEntries = [...re.blackListedEntries, `${te} (${H.comment})`]);
      const he = { ...re.suggestedEntries };
      return he[te] && (he[te] = he[te].filter(
        (Re) => !(Re.uid === H.uid && Re.comment === H.comment)
      )), re.suggestedEntries = he, re;
    });
  }, K = (H, te, ne, ue) => {
    i((re) => {
      const he = { ...re.suggestedEntries };
      if (he[H]) {
        const be = he[H].findIndex(
          (me) => me.uid === te.uid && me.comment === te.comment
        );
        be !== -1 && (he[H][be] = ne);
      }
      const Re = { ...re, suggestedEntries: he };
      return ue && (Re.regexIds = ue), Re;
    });
  }, M = se.useCallback(
    (H) => {
      i((te) => {
        const ne = structuredClone(te.suggestedEntries);
        let ue = 0;
        for (const [re, he] of Object.entries(H))
          if (f[re]) {
            ne[re] || (ne[re] = []);
            for (const Re of he) {
              if (ne[re].some((pe) => pe.uid === Re)) continue;
              const me = f[re].find((pe) => pe.uid === Re);
              me && (ne[re].push(structuredClone(me)), ue++);
            }
          }
        return ue > 0 && Se("success", `Imported ${ue} entries for revision.`), { ...te, suggestedEntries: ne };
      });
    },
    [f]
  ), B = se.useMemo(() => {
    const H = {};
    return s.selectedWorldNames.forEach((te) => {
      f[te] && (H[te] = f[te]);
    }), H;
  }, [s.selectedWorldNames, f]), J = se.useMemo(() => {
    const H = JSON.parse(JSON.stringify(B)), te = /* @__PURE__ */ new Map();
    return Object.entries(s.suggestedEntries).forEach(([ne, ue]) => {
      ue.forEach((re) => {
        re.uid && te.set(re.uid, { worldName: ne, entry: re });
      });
    }), Object.entries(H).forEach(([, ne]) => {
      ne.forEach((ue, re) => {
        ue.uid && te.has(ue.uid) && (ne[re] = te.get(ue.uid).entry, te.delete(ue.uid));
      });
    }), te.forEach(({ worldName: ne, entry: ue }) => {
      H[ne] || (H[ne] = []), H[ne].some((re) => re.uid === ue.uid) || H[ne].push(ue);
    }), H;
  }, [B, s.suggestedEntries]), ae = (H) => {
    const te = /* @__PURE__ */ new Map();
    Object.entries(f).forEach(([ue, re]) => {
      re.forEach((he) => {
        te.set(`${ue}::${he.uid}`, he);
      });
    });
    const ne = {};
    Object.entries(H).forEach(([ue, re]) => {
      re.forEach((he) => {
        const Re = `${ue}::${he.uid}`, be = te.get(Re);
        let me = !1;
        if (!be)
          me = !0;
        else {
          const pe = (he.content || "") !== (be.content || ""), je = (he.comment || "") !== (be.comment || ""), Ve = (he.key || []).slice().sort().join(",") !== (be.key || []).slice().sort().join(",");
          (pe || je || Ve) && (me = !0);
        }
        me && (ne[ue] || (ne[ue] = []), ne[ue].push(he));
      });
    }), i((ue) => ({ ...ue, suggestedEntries: ne })), Se("success", "Changes from global revise session applied.");
  }, I = se.useMemo(
    () => Object.keys(r.promptPresets).map((H) => ({ value: H, label: H })),
    [r.promptPresets]
  ), $ = se.useMemo(
    () => u.map((H) => ({ value: H, label: H })),
    [u]
  ), ce = se.useMemo(
    () => Object.values(s.selectedEntryUids).reduce((H, te) => H + te.length, 0),
    [s.selectedEntryUids]
  );
  if (g)
    return /* @__PURE__ */ N.jsx("div", { children: "Loading..." });
  const Y = Object.entries(s.suggestedEntries).flatMap(
    ([H, te]) => te.map((ne) => ({ worldName: H, entry: ne }))
  );
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ N.jsx("h2", { children: "World Info Recommender" }),
      /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Connection Profile" }),
            /* @__PURE__ */ N.jsx(
              zy,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (H) => k("profileId", H?.id)
              }
            )
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Context to Send" }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.stDescription,
                    onChange: (H) => O("stDescription", H.target.checked)
                  }
                ),
                "Description of SillyTavern and Lorebook"
              ] }),
              w !== "_global" && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Messages to Include" }),
                /* @__PURE__ */ N.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (H) => O("messages", {
                      ...r.contextToSend.messages,
                      type: H.target.value
                    }),
                    children: [
                      /* @__PURE__ */ N.jsx("option", { value: "none", children: "None" }),
                      /* @__PURE__ */ N.jsx("option", { value: "all", children: "All Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "first", children: "First X Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "last", children: "Last X Messages" }),
                      /* @__PURE__ */ N.jsx("option", { value: "range", children: "Range" })
                    ]
                  }
                ),
                r.contextToSend.messages.type === "first" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "First",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.first ?? 10,
                      onChange: (H) => O("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(H.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "last" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "Last",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.last ?? 10,
                      onChange: (H) => O("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(H.target.value) || 10
                      })
                    }
                  ),
                  " ",
                  "Messages"
                ] }) }),
                r.contextToSend.messages.type === "range" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  "Range:",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "0",
                      placeholder: "Start",
                      value: r.contextToSend.messages.range?.start ?? 0,
                      onChange: (H) => O("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(H.target.value) || 0
                        }
                      })
                    }
                  ),
                  " ",
                  "to",
                  " ",
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      placeholder: "End",
                      value: r.contextToSend.messages.range?.end ?? 10,
                      onChange: (H) => O("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(H.target.value) || 10
                        }
                      })
                    }
                  )
                ] }) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.charCard,
                    onChange: (H) => O("charCard", H.target.checked)
                  }
                ),
                "Char Card"
              ] }),
              p.length > 0 && /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Select Character" }),
                /* @__PURE__ */ N.jsx("select", { className: "text_pole", title: "Select character for your group.", children: p.map((H) => /* @__PURE__ */ N.jsx("option", { value: H.avatar, children: H.name }, H.avatar)) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (H) => O("authorNote", H.target.checked)
                  }
                ),
                " ",
                "Author Note"
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.worldInfo,
                    onChange: (H) => O("worldInfo", H.target.checked)
                  }
                ),
                " ",
                "World Info"
              ] }),
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: "Lorebooks to Include" }),
                /* @__PURE__ */ N.jsx(
                  Py,
                  {
                    items: $,
                    value: s.selectedWorldNames,
                    onChange: (H) => {
                      i((te) => {
                        const ne = { ...te.selectedEntryUids };
                        return te.selectedWorldNames.filter((re) => !H.includes(re)).forEach((re) => delete ne[re]), { ...te, selectedWorldNames: H, selectedEntryUids: ne };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              s.selectedWorldNames.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ N.jsxs(
                  xe,
                  {
                    className: "menu_button",
                    onClick: () => C(!0),
                    title: "Select specific entries from the chosen lorebooks",
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-list-check" }),
                      "Select Entries"
                    ]
                  }
                ),
                /* @__PURE__ */ N.jsx("span", { children: ce > 0 ? `${ce} selected` : "All entries included" })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (H) => O("suggestedEntries", H.target.checked)
                  }
                ),
                " ",
                "Existing Suggestions"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsxs("label", { children: [
              "Max Context",
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  title: "Select Max Context Type",
                  value: r.maxContextType,
                  onChange: (H) => k("maxContextType", H.target.value),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ N.jsx("option", { value: "sampler", children: "Use active preset in sampler settings" }),
                    /* @__PURE__ */ N.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            r.maxContextType === "custom" && /* @__PURE__ */ N.jsx("label", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                min: "1",
                step: "1",
                placeholder: "Enter max tokens",
                value: r.maxContextValue,
                onChange: (H) => k("maxContextValue", parseInt(H.target.value) || 2048)
              }
            ) }),
            /* @__PURE__ */ N.jsxs("label", { style: { display: "block", marginTop: "10px" }, children: [
              "Max Response Tokens",
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  min: "1",
                  step: "1",
                  placeholder: "Enter max response tokens",
                  value: r.maxResponseToken,
                  onChange: (H) => k("maxResponseToken", parseInt(H.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: "Your Prompt" }),
            /* @__PURE__ */ N.jsx(
              Tf,
              {
                label: "Prompt Preset",
                items: I,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (H) => k("promptPreset", H ?? "default"),
                onItemsChange: (H) => {
                  const te = H.reduce(
                    (ne, ue) => (ne[ue.value] = r.promptPresets[ue.value] ?? { content: "" }, ne),
                    {}
                  );
                  k("promptPresets", te);
                },
                enableCreate: !0,
                enableRename: !0,
                enableDelete: !0
              }
            ),
            /* @__PURE__ */ N.jsx(
              br,
              {
                value: r.promptPresets[r.promptPreset]?.content ?? "",
                onChange: (H) => {
                  const te = { ...r.promptPresets };
                  te[r.promptPreset] && (te[r.promptPreset].content = H.target.value, k("promptPresets", te));
                },
                placeholder: "e.g., 'Suggest entries for places {{user}} visited.'",
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: () => j(),
                disabled: y,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: y ? "Generating..." : "Send Prompt"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "wide-column", children: /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ N.jsx("h3", { children: "Suggested Entries" }),
          /* @__PURE__ */ N.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: Z,
                disabled: y || Y.length === 0,
                className: "menu_button interactable",
                children: "Add All"
              }
            ),
            /* @__PURE__ */ N.jsxs(
              xe,
              {
                onClick: () => L(!0),
                disabled: y,
                className: "menu_button interactable",
                title: "Revise all selected existing entries and current suggestions in a single chat session",
                children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
                  " Global Revise"
                ]
              }
            ),
            /* @__PURE__ */ N.jsx(
              xe,
              {
                onClick: () => R(!0),
                disabled: y,
                className: "menu_button interactable",
                title: "Import existing entries to continue/revise them",
                children: "Import Entry"
              }
            ),
            /* @__PURE__ */ N.jsx(xe, { onClick: X, disabled: y, className: "menu_button interactable", children: "Reset" })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { children: [
            Y.length === 0 && /* @__PURE__ */ N.jsx("p", { children: "No suggestions yet. Send a prompt to get started!" }),
            Y.map(({ worldName: H, entry: te }) => /* @__PURE__ */ N.jsx(
              Sk,
              {
                initialWorldName: H,
                entry: te,
                allWorldNames: u,
                existingEntry: f[H]?.find((ne) => ne.uid === te.uid),
                sessionRegexIds: s.regexIds,
                onAdd: P,
                onRemove: G,
                onContinue: j,
                onUpdate: K,
                entriesGroupByWorldName: f,
                sessionForContext: s,
                contextToSend: r.contextToSend
              },
              `${H}-${te.uid}-${te.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    h && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          V0,
          {
            ref: l,
            entriesByWorldName: B,
            initialSelectedUids: s.selectedEntryUids,
            title: "Select Entries to Include in Context"
          }
        ),
        onComplete: (H) => {
          if (H && l.current) {
            const te = l.current.getSelection();
            i((ne) => ({ ...ne, selectedEntryUids: te }));
          }
          C(!1);
        },
        options: { wide: !0 }
      }
    ),
    A && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          V0,
          {
            ref: S,
            entriesByWorldName: f,
            initialSelectedUids: {},
            title: "Select Entries to Import for Revision"
          }
        ),
        onComplete: (H) => {
          if (H && S.current) {
            const te = S.current.getSelection();
            M(te);
          }
          R(!1);
        },
        options: { wide: !0 }
      }
    ),
    x && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          c_,
          {
            target: { type: "global" },
            initialState: J,
            onClose: () => L(!1),
            onApply: ae,
            sessionForContext: s,
            allEntries: f,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, Ek = () => {
  const [n, r] = se.useState(!1), s = () => r(!0), i = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, n ? /* @__PURE__ */ N.jsx(
    Jn,
    {
      content: /* @__PURE__ */ N.jsx(wk, {}),
      type: Pt.DISPLAY,
      onComplete: i,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function Ck() {
  function n(r) {
    if (!r)
      return null;
    const s = [], i = Array.isArray(r) ? r : [r];
    for (const u of i) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let f = "", m = !1, p = "";
      for (let _ = 0; _ < c.length; _++) {
        const g = c[_];
        g === '"' || g === "'" ? _ > 0 && c[_ - 1] === "\\" ? f = f.slice(0, -1) + g : m ? g === p ? (m = !1, f.trim() && s.push(f.trim()), f = "", p = "") : f += g : (m = !0, p = g) : g === "," && !m ? (f.trim() && s.push(f.trim()), f = "") : f += g;
      }
      f.trim() && s.push(f.trim());
    }
    return s;
  }
  De.SlashCommandParser.addCommandObject(
    De.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: De.ARGUMENT_TYPE.BOOLEAN
    })
  ), De.SlashCommandParser.addCommandObject(
    De.SlashCommand.fromProps({
      name: "world-info-recommender-run",
      helpString: `
              <div class="inline-drawer">
                  <details>
                      <summary>Run the World Info Recommender AI automatically.</summary>
                      <div class="list-group">
                          Executes the recommendation process using the specified parameters.
                          <br>
                          - <b>profile</b>: (Required) Connection profile ID/name to use for the AI request.
                          <br>
                          - <b>prompt</b>: (Required) The core task/instruction for the AI. Passed as unnamed argument(s).
                          <br>
                          - <b>lorebooks</b>: List of lorebook names to include as context. Defaults to currently active worlds.
                          <br>
                          - <b>allowed-ops</b>: List of operations allowed ('add', 'update'). Defaults to 'add,update'.
                          <br>
                          - <b>editable-entries</b>: Comma-separated list of specific entries allowed for update, format: <code>WorldName.EntryComment</code> or <code>WorldName.UID</code>. If provided, only these entries can be updated. Adds are still allowed if 'add' is in allowed-ops. Defaults to allowing updates for all entries.
                          <br>
                          - <b>context</b>: Context parts ('stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'). Defaults to extension settings.
                          <br>
                          - <b>messages</b>: Message range ('all', 'none', 'first:N', 'last:N', 'range:S-E'). Defaults to extension settings.
                          <br>
                          - <b>max-context</b>: Override context token limit (number). Defaults to extension settings.
                          <br>
                          - <b>max-response</b>: Override response token limit (number). Defaults to extension settings.
                          <br>
                          - <b>main-context-template</b>: Override main context template preset (string). Defaults to extension settings.
                          <br>
                          - <b>silent</b>: Suppress success/error messages (boolean). Defaults to false.
                      </div>
                      <div>
                          <b>Example:</b>
                          <pre><code>/wir-run profile=your_profile_id lorebooks=[CommonEvents,Characters] allowed-ops=[add] "Create 3 new entries about recent events in the tavern based on the last 5 messages."</code></pre>
                          <pre><code>/wir-run profile=your_profile_name editable-entries=[Characters.12345,Locations.The Docks] messages=last:10 prompt="Update the description for character UID 12345 and The Docks based on the recent fight."</code></pre>
                      </div>
                  </details>
              </div>
          `,
      returns: De.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        De.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [De.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: AS
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [De.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: Q1.worlds
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [De.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [De.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [De.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [De.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [De.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [De.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [De.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        De.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [De.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        De.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [De.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const i = r.silent ?? !1;
        try {
          const u = It.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = De.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === f || B.name === f
          );
          if (!p)
            throw new Error(`Profile with ID "${f}" not found.`);
          m = p.id;
          const _ = n(r.lorebooks);
          let g;
          if (_ !== null) {
            g = {};
            for (const B of _) {
              const J = await De.loadWorldInfo(B);
              J && (g[B] = Object.values(J.entries));
            }
          } else
            g = await ll(["all"], !0, sn);
          const E = Object.keys(g);
          let y;
          if (_ !== null) {
            if (y = _.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (i || Se("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), y.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            y = E;
          y.length === 0 && (i || Se("warning", "No active lorebooks found to use for context."));
          const b = n(r["allowed-ops"]), h = b !== null ? b : ["add", "update"], C = h.includes("add"), A = h.includes("update"), R = /* @__PURE__ */ new Set(), x = n(r["editable-entries"]);
          x !== null && x.forEach((B) => {
            R.add(B.trim());
          });
          const L = R.size > 0, l = n(r.context), S = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((J) => J.trim());
            S.stDescription = B.includes("stdescription"), S.messages.type = B.includes("messages") ? S.messages.type : "none", S.charCard = B.includes("charcard"), S.authorNote = B.includes("authornote"), S.worldInfo = B.includes("worldinfo"), S.suggestedEntries = !1;
          }
          if (r.messages && S.messages.type !== "none") {
            const B = r.messages.toLowerCase().trim();
            if (B === "all") S.messages.type = "all";
            else if (B === "none") S.messages.type = "none";
            else if (B.startsWith("first:"))
              S.messages.type = "first", S.messages.first = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("last:"))
              S.messages.type = "last", S.messages.last = parseInt(B.split(":")[1]) || 10;
            else if (B.startsWith("range:")) {
              const J = B.split(":")[1].split("-");
              S.messages.type = "range", S.messages.range = {
                start: parseInt(J[0]) || 0,
                end: parseInt(J[1]) || 10
              };
            } else
              i || Se("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
          }
          const w = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: void 0,
            contextName: void 0,
            instructName: void 0,
            syspromptName: void 0,
            // Use derived contextToSend settings
            ignoreCharacterFields: !S.charCard,
            ignoreWorldInfo: !0,
            // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !S.authorNote,
            maxContext: r["max-context"] ?? (u.maxContextType === "custom" ? u.maxContextValue : u.maxContextType === "profile" ? "preset" : "active"),
            includeNames: !!Ft,
            targetCharacterId: Ft ? sn : void 0
            // Simplification: Use current char in group context
          };
          switch (S.messages.type) {
            case "none":
              w.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              w.messageIndexesBetween = { start: 0, end: S.messages.first ?? 10 };
              break;
            case "last":
              const B = S.messages.last ?? 10, J = De.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, J - 1),
                start: Math.max(0, J - B)
              };
              break;
            case "range":
              S.messages.range && (w.messageIndexesBetween = {
                start: S.messages.range.start,
                end: S.messages.range.end
              });
              break;
            case "all":
            default:
              break;
          }
          const k = {
            selectedWorldNames: y,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, O = r["max-response"] ? parseInt(r["max-response"]) : void 0, z = structuredClone(u.prompts);
          S.stDescription || delete z.stDescription, (!S.worldInfo || y.length === 0) && delete z.currentLorebooks, delete z.suggestedLorebooks;
          const j = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: z,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: O ?? u.maxResponseToken
          };
          i || Se("info", "Running World Info Recommender...");
          const P = await Ry(j);
          if (Object.keys(P).length === 0)
            return i || Se("info", "AI returned no suggestions."), !0;
          let Z = 0, X = 0, G = 0;
          const K = /* @__PURE__ */ new Set(), M = structuredClone(g);
          for (const [B, J] of Object.entries(P)) {
            let ae = B;
            if (!y.includes(ae))
              if (E.includes(ae)) {
                i || Se(
                  "warning",
                  `AI suggested entry for "${ae}", but it wasn't in the specified 'lorebooks'. Skipping ${J.length} entries.`
                ), G += J.length;
                continue;
              } else if (y.length > 0)
                ae = y[0], i || Se(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ae}".`
                );
              else {
                i || Se(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${J.length} entries.`
                ), G += J.length;
                continue;
              }
            for (const I of J) {
              if (M[ae]?.some(
                (ce) => ce.uid === I.uid && ce.comment === I.comment
              )) {
                if (!A) {
                  i || Se(
                    "info",
                    `Skipping update for "${ae}.${I.comment || I.uid}" (updates disallowed).`
                  ), G++;
                  continue;
                }
                if (L) {
                  const ce = `${ae}.${I.comment}`, Y = `${ae}.${I.uid}`;
                  if (!R.has(ce) && !R.has(Y)) {
                    i || Se(
                      "info",
                      `Skipping update for "${ae}.${I.comment || I.uid}" (not in editable-entries).`
                    ), G++;
                    continue;
                  }
                }
              } else if (!C) {
                i || Se(
                  "info",
                  `Skipping add for "${ae}.${I.comment || "New Entry"}" (adds disallowed).`
                ), G++;
                continue;
              }
              try {
                const { status: ce } = kS(I, ae, M);
                ce === "added" ? Z++ : X++, K.add(ae);
              } catch (ce) {
                i || Se(
                  "error",
                  `Failed to prepare modification for "${ae}.${I.comment || I.uid}": ${ce.message}`
                ), G++;
              }
            }
          }
          if (K.size > 0) {
            i || Se("info", `Saving changes to ${K.size} lorebook(s)...`);
            for (const B of K) {
              const J = M[B], ae = { entries: {} };
              J.forEach((I) => ae.entries[I.uid] = I), await De.saveWorldInfo(B, ae), De.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!i) {
            const B = [];
            (Z > 0 || X > 0 || G > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${Z}</li>
                  <li><strong>Updated:</strong> ${X}</li>
                  <li><strong>Skipped:</strong> ${G}</li>
                  </ul>
                </div>
                `), K.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(K).map((ae) => `<li>${ae}</li>`).join("")}
                  </ul>
                </div>
                `);
            const J = B.length > 0 ? `
                <div class="wir-results">
                  <h4>World Info Recommender Results:</h4>
                  ${B.join("")}
                </div>
                ` : `
                <div class="wir-results">
                  <h4>World Info Recommender:</h4>
                  <p>No changes were made</p>
                </div>
                `;
            Se("success", J, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), i || Se("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Xs = SillyTavern.getContext();
async function kk() {
  const n = await Xs.renderExtensionTemplateAsync(
    `third-party/${Oi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), av.createRoot(r).render(
    /* @__PURE__ */ N.jsx(dl.StrictMode, { children: /* @__PURE__ */ N.jsx(PS, {}) })
  ));
  const i = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), av.createRoot(c).render(
    /* @__PURE__ */ N.jsx(dl.StrictMode, { children: /* @__PURE__ */ N.jsx(Ek, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = i.trim();
    const _ = p.firstChild;
    _ && (m.prepend(_), _.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function Ak() {
  return !(!Xs.ConnectionManagerRequestService || !Xs.getCharacterCardFields || !Xs.getWorldInfoPrompt || !Xs.reloadWorldInfoEditor);
}
Ak() ? OS().then(() => {
  kk(), Ck();
}) : Se("error", `[${Oi}] Make sure ST is updated.`);
export {
  kk as init
};
