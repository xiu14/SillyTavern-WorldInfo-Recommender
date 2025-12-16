import { renderStoryString as q1, persona_description_positions as Yg } from "../../../../power-user.js";
import { parseMesExamples as G1, baseChatReplace as Z1, chat_metadata as Rs, getMaxContextSize as V1, name1 as wa, name2 as Yr, this_chid as un, extension_prompt_types as Ea, depth_prompt_role_default as $1, depth_prompt_depth_default as Y1 } from "../../../../../script.js";
import { createWorldInfoEntry as F1, world_info_include_names as X1, wi_anchor_position as Q1, selected_world_info as K1, METADATA_KEY as J1, world_info as W1, world_names as e2 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as t2, formatInstructModeSystemPrompt as n2 } from "../../../../instruct-mode.js";
import { appendFileContent as r2 } from "../../../../chats.js";
import { setOpenAIMessages as a2, setOpenAIMessageExamples as i2, formatWorldInfo as s2, getPromptPosition as o2, getPromptRole as u2, prepareOpenAIMessages as l2 } from "../../../../openai.js";
import { metadata_keys as js } from "../../../../authors-note.js";
import { getGroupDepthPrompts as c2, selected_group as Kt, groups as Fg } from "../../../../group-chats.js";
import { runRegexScript as d2, getRegexedString as f2, regex_placement as Xg } from "../../../regex/engine.js";
import { getCharaFilename as h2, removeFromArray as Qg, runAfterAnimation as p2 } from "../../../../utils.js";
import { commonEnumProviders as m2 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as wi, fixToastrForDialogs as Zd } from "../../../../popup.js";
import Kg from "../../../../../lib/dialog-polyfill.esm.js";
function Hf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Vd = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function g2() {
  if (Jg) return Ls;
  Jg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, u, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), u.key !== void 0 && (h = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: a,
      key: h,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Ls.Fragment = r, Ls.jsx = s, Ls.jsxs = s, Ls;
}
var Wg;
function v2() {
  return Wg || (Wg = 1, Vd.exports = g2()), Vd.exports;
}
var N = v2(), $d = { exports: {} }, Ue = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function y2() {
  if (ev) return Ue;
  ev = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.iterator;
  function b(I) {
    return I === null || typeof I != "object" ? null : (I = E && I[E] || I["@@iterator"], typeof I == "function" ? I : null);
  }
  var _ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, p = Object.assign, C = {};
  function T(I, $, ne) {
    this.props = I, this.context = $, this.refs = C, this.updater = ne || _;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(I, $) {
    if (typeof I != "object" && typeof I != "function" && I != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, I, $, "setState");
  }, T.prototype.forceUpdate = function(I) {
    this.updater.enqueueForceUpdate(this, I, "forceUpdate");
  };
  function j() {
  }
  j.prototype = T.prototype;
  function k(I, $, ne) {
    this.props = I, this.context = $, this.refs = C, this.updater = ne || _;
  }
  var P = k.prototype = new j();
  P.constructor = k, p(P, T.prototype), P.isPureReactComponent = !0;
  var l = Array.isArray, S = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function A(I, $, ne, le, fe, Ae) {
    return ne = Ae.ref, {
      $$typeof: n,
      type: I,
      key: $,
      ref: ne !== void 0 ? ne : null,
      props: Ae
    };
  }
  function O(I, $) {
    return A(
      I.type,
      $,
      void 0,
      void 0,
      void 0,
      I.props
    );
  }
  function L(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function M(I) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(ne) {
      return $[ne];
    });
  }
  var z = /\/+/g;
  function H(I, $) {
    return typeof I == "object" && I !== null && I.key != null ? M("" + I.key) : $.toString(36);
  }
  function Z() {
  }
  function G(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(Z, Z) : (I.status = "pending", I.then(
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
  function Q(I, $, ne, le, fe) {
    var Ae = typeof I;
    (Ae === "undefined" || Ae === "boolean") && (I = null);
    var ee = !1;
    if (I === null) ee = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          ee = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case n:
            case r:
              ee = !0;
              break;
            case v:
              return ee = I._init, Q(
                ee(I._payload),
                $,
                ne,
                le,
                fe
              );
          }
      }
    if (ee)
      return fe = fe(I), ee = le === "" ? "." + H(I, 0) : le, l(fe) ? (ne = "", ee != null && (ne = ee.replace(z, "$&/") + "/"), Q(fe, $, ne, "", function($e) {
        return $e;
      })) : fe != null && (L(fe) && (fe = O(
        fe,
        ne + (fe.key == null || I && I.key === fe.key ? "" : ("" + fe.key).replace(
          z,
          "$&/"
        ) + "/") + ee
      )), $.push(fe)), 1;
    ee = 0;
    var we = le === "" ? "." : le + ":";
    if (l(I))
      for (var be = 0; be < I.length; be++)
        le = I[be], Ae = we + H(le, be), ee += Q(
          le,
          $,
          ne,
          Ae,
          fe
        );
    else if (be = b(I), typeof be == "function")
      for (I = be.call(I), be = 0; !(le = I.next()).done; )
        le = le.value, Ae = we + H(le, be++), ee += Q(
          le,
          $,
          ne,
          Ae,
          fe
        );
    else if (Ae === "object") {
      if (typeof I.then == "function")
        return Q(
          G(I),
          $,
          ne,
          le,
          fe
        );
      throw $ = String(I), Error(
        "Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ee;
  }
  function R(I, $, ne) {
    if (I == null) return I;
    var le = [], fe = 0;
    return Q(I, le, "", "", function(Ae) {
      return $.call(ne, Ae, fe++);
    }), le;
  }
  function B(I) {
    if (I._status === -1) {
      var $ = I._result;
      $ = $(), $.then(
        function(ne) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = ne);
        },
        function(ne) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = ne);
        }
      ), I._status === -1 && (I._status = 0, I._result = $);
    }
    if (I._status === 1) return I._result.default;
    throw I._result;
  }
  var K = typeof reportError == "function" ? reportError : function(I) {
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
  function ie() {
  }
  return Ue.Children = {
    map: R,
    forEach: function(I, $, ne) {
      R(
        I,
        function() {
          $.apply(this, arguments);
        },
        ne
      );
    },
    count: function(I) {
      var $ = 0;
      return R(I, function() {
        $++;
      }), $;
    },
    toArray: function(I) {
      return R(I, function($) {
        return $;
      }) || [];
    },
    only: function(I) {
      if (!L(I))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return I;
    }
  }, Ue.Component = T, Ue.Fragment = s, Ue.Profiler = u, Ue.PureComponent = k, Ue.StrictMode = a, Ue.Suspense = f, Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, Ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return S.H.useMemoCache(I);
    }
  }, Ue.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, Ue.cloneElement = function(I, $, ne) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var le = p({}, I.props), fe = I.key, Ae = void 0;
    if ($ != null)
      for (ee in $.ref !== void 0 && (Ae = void 0), $.key !== void 0 && (fe = "" + $.key), $)
        !w.call($, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && $.ref === void 0 || (le[ee] = $[ee]);
    var ee = arguments.length - 2;
    if (ee === 1) le.children = ne;
    else if (1 < ee) {
      for (var we = Array(ee), be = 0; be < ee; be++)
        we[be] = arguments[be + 2];
      le.children = we;
    }
    return A(I.type, fe, void 0, void 0, Ae, le);
  }, Ue.createContext = function(I) {
    return I = {
      $$typeof: h,
      _currentValue: I,
      _currentValue2: I,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, I.Provider = I, I.Consumer = {
      $$typeof: c,
      _context: I
    }, I;
  }, Ue.createElement = function(I, $, ne) {
    var le, fe = {}, Ae = null;
    if ($ != null)
      for (le in $.key !== void 0 && (Ae = "" + $.key), $)
        w.call($, le) && le !== "key" && le !== "__self" && le !== "__source" && (fe[le] = $[le]);
    var ee = arguments.length - 2;
    if (ee === 1) fe.children = ne;
    else if (1 < ee) {
      for (var we = Array(ee), be = 0; be < ee; be++)
        we[be] = arguments[be + 2];
      fe.children = we;
    }
    if (I && I.defaultProps)
      for (le in ee = I.defaultProps, ee)
        fe[le] === void 0 && (fe[le] = ee[le]);
    return A(I, Ae, void 0, void 0, null, fe);
  }, Ue.createRef = function() {
    return { current: null };
  }, Ue.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, Ue.isValidElement = L, Ue.lazy = function(I) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, Ue.memo = function(I, $) {
    return {
      $$typeof: g,
      type: I,
      compare: $ === void 0 ? null : $
    };
  }, Ue.startTransition = function(I) {
    var $ = S.T, ne = {};
    S.T = ne;
    try {
      var le = I(), fe = S.S;
      fe !== null && fe(ne, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(ie, K);
    } catch (Ae) {
      K(Ae);
    } finally {
      S.T = $;
    }
  }, Ue.unstable_useCacheRefresh = function() {
    return S.H.useCacheRefresh();
  }, Ue.use = function(I) {
    return S.H.use(I);
  }, Ue.useActionState = function(I, $, ne) {
    return S.H.useActionState(I, $, ne);
  }, Ue.useCallback = function(I, $) {
    return S.H.useCallback(I, $);
  }, Ue.useContext = function(I) {
    return S.H.useContext(I);
  }, Ue.useDebugValue = function() {
  }, Ue.useDeferredValue = function(I, $) {
    return S.H.useDeferredValue(I, $);
  }, Ue.useEffect = function(I, $, ne) {
    var le = S.H;
    if (typeof ne == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(I, $);
  }, Ue.useId = function() {
    return S.H.useId();
  }, Ue.useImperativeHandle = function(I, $, ne) {
    return S.H.useImperativeHandle(I, $, ne);
  }, Ue.useInsertionEffect = function(I, $) {
    return S.H.useInsertionEffect(I, $);
  }, Ue.useLayoutEffect = function(I, $) {
    return S.H.useLayoutEffect(I, $);
  }, Ue.useMemo = function(I, $) {
    return S.H.useMemo(I, $);
  }, Ue.useOptimistic = function(I, $) {
    return S.H.useOptimistic(I, $);
  }, Ue.useReducer = function(I, $, ne) {
    return S.H.useReducer(I, $, ne);
  }, Ue.useRef = function(I) {
    return S.H.useRef(I);
  }, Ue.useState = function(I) {
    return S.H.useState(I);
  }, Ue.useSyncExternalStore = function(I, $, ne) {
    return S.H.useSyncExternalStore(
      I,
      $,
      ne
    );
  }, Ue.useTransition = function() {
    return S.H.useTransition();
  }, Ue.version = "19.1.1", Ue;
}
var tv;
function qf() {
  return tv || (tv = 1, $d.exports = y2()), $d.exports;
}
var ae = qf();
const fl = /* @__PURE__ */ Hf(ae);
var Yd = { exports: {} }, Ds = {}, Fd = { exports: {} }, Xd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function _2() {
  return nv || (nv = 1, (function(n) {
    function r(R, B) {
      var K = R.length;
      R.push(B);
      e: for (; 0 < K; ) {
        var ie = K - 1 >>> 1, I = R[ie];
        if (0 < u(I, B))
          R[ie] = B, R[K] = I, K = ie;
        else break e;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function a(R) {
      if (R.length === 0) return null;
      var B = R[0], K = R.pop();
      if (K !== B) {
        R[0] = K;
        e: for (var ie = 0, I = R.length, $ = I >>> 1; ie < $; ) {
          var ne = 2 * (ie + 1) - 1, le = R[ne], fe = ne + 1, Ae = R[fe];
          if (0 > u(le, K))
            fe < I && 0 > u(Ae, le) ? (R[ie] = Ae, R[fe] = K, ie = fe) : (R[ie] = le, R[ne] = K, ie = ne);
          else if (fe < I && 0 > u(Ae, K))
            R[ie] = Ae, R[fe] = K, ie = fe;
          else break e;
        }
      }
      return B;
    }
    function u(R, B) {
      var K = R.sortIndex - B.sortIndex;
      return K !== 0 ? K : R.id - B.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var h = Date, m = h.now();
      n.unstable_now = function() {
        return h.now() - m;
      };
    }
    var f = [], g = [], v = 1, E = null, b = 3, _ = !1, p = !1, C = !1, T = !1, j = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function l(R) {
      for (var B = s(g); B !== null; ) {
        if (B.callback === null) a(g);
        else if (B.startTime <= R)
          a(g), B.sortIndex = B.expirationTime, r(f, B);
        else break;
        B = s(g);
      }
    }
    function S(R) {
      if (C = !1, l(R), !p)
        if (s(f) !== null)
          p = !0, w || (w = !0, H());
        else {
          var B = s(g);
          B !== null && Q(S, B.startTime - R);
        }
    }
    var w = !1, A = -1, O = 5, L = -1;
    function M() {
      return T ? !0 : !(n.unstable_now() - L < O);
    }
    function z() {
      if (T = !1, w) {
        var R = n.unstable_now();
        L = R;
        var B = !0;
        try {
          e: {
            p = !1, C && (C = !1, k(A), A = -1), _ = !0;
            var K = b;
            try {
              t: {
                for (l(R), E = s(f); E !== null && !(E.expirationTime > R && M()); ) {
                  var ie = E.callback;
                  if (typeof ie == "function") {
                    E.callback = null, b = E.priorityLevel;
                    var I = ie(
                      E.expirationTime <= R
                    );
                    if (R = n.unstable_now(), typeof I == "function") {
                      E.callback = I, l(R), B = !0;
                      break t;
                    }
                    E === s(f) && a(f), l(R);
                  } else a(f);
                  E = s(f);
                }
                if (E !== null) B = !0;
                else {
                  var $ = s(g);
                  $ !== null && Q(
                    S,
                    $.startTime - R
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, b = K, _ = !1;
            }
            B = void 0;
          }
        } finally {
          B ? H() : w = !1;
        }
      }
    }
    var H;
    if (typeof P == "function")
      H = function() {
        P(z);
      };
    else if (typeof MessageChannel < "u") {
      var Z = new MessageChannel(), G = Z.port2;
      Z.port1.onmessage = z, H = function() {
        G.postMessage(null);
      };
    } else
      H = function() {
        j(z, 0);
      };
    function Q(R, B) {
      A = j(function() {
        R(n.unstable_now());
      }, B);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, n.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < R ? Math.floor(1e3 / R) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return b;
    }, n.unstable_next = function(R) {
      switch (b) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = b;
      }
      var K = b;
      b = B;
      try {
        return R();
      } finally {
        b = K;
      }
    }, n.unstable_requestPaint = function() {
      T = !0;
    }, n.unstable_runWithPriority = function(R, B) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var K = b;
      b = R;
      try {
        return B();
      } finally {
        b = K;
      }
    }, n.unstable_scheduleCallback = function(R, B, K) {
      var ie = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ie + K : ie) : K = ie, R) {
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
      return I = K + I, R = {
        id: v++,
        callback: B,
        priorityLevel: R,
        startTime: K,
        expirationTime: I,
        sortIndex: -1
      }, K > ie ? (R.sortIndex = K, r(g, R), s(f) === null && R === s(g) && (C ? (k(A), A = -1) : C = !0, Q(S, K - ie))) : (R.sortIndex = I, r(f, R), p || _ || (p = !0, w || (w = !0, H()))), R;
    }, n.unstable_shouldYield = M, n.unstable_wrapCallback = function(R) {
      var B = b;
      return function() {
        var K = b;
        b = B;
        try {
          return R.apply(this, arguments);
        } finally {
          b = K;
        }
      };
    };
  })(Xd)), Xd;
}
var rv;
function b2() {
  return rv || (rv = 1, Fd.exports = _2()), Fd.exports;
}
var Qd = { exports: {} }, Zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function S2() {
  if (av) return Zt;
  av = 1;
  var n = qf();
  function r(f) {
    var g = "https://react.dev/errors/" + f;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        g += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + f + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var a = {
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
  function c(f, g, v) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: E == null ? null : "" + E,
      children: f,
      containerInfo: g,
      implementation: v
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(f, g) {
    if (f === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Zt.createPortal = function(f, g) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return c(f, g, null, v);
  }, Zt.flushSync = function(f) {
    var g = h.T, v = a.p;
    try {
      if (h.T = null, a.p = 2, f) return f();
    } finally {
      h.T = g, a.p = v, a.d.f();
    }
  }, Zt.preconnect = function(f, g) {
    typeof f == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, a.d.C(f, g));
  }, Zt.prefetchDNS = function(f) {
    typeof f == "string" && a.d.D(f);
  }, Zt.preinit = function(f, g) {
    if (typeof f == "string" && g && typeof g.as == "string") {
      var v = g.as, E = m(v, g.crossOrigin), b = typeof g.integrity == "string" ? g.integrity : void 0, _ = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      v === "style" ? a.d.S(
        f,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: E,
          integrity: b,
          fetchPriority: _
        }
      ) : v === "script" && a.d.X(f, {
        crossOrigin: E,
        integrity: b,
        fetchPriority: _,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Zt.preinitModule = function(f, g) {
    if (typeof f == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var v = m(
            g.as,
            g.crossOrigin
          );
          a.d.M(f, {
            crossOrigin: v,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && a.d.M(f);
  }, Zt.preload = function(f, g) {
    if (typeof f == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var v = g.as, E = m(v, g.crossOrigin);
      a.d.L(f, v, {
        crossOrigin: E,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Zt.preloadModule = function(f, g) {
    if (typeof f == "string")
      if (g) {
        var v = m(g.as, g.crossOrigin);
        a.d.m(f, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: v,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else a.d.m(f);
  }, Zt.requestFormReset = function(f) {
    a.d.r(f);
  }, Zt.unstable_batchedUpdates = function(f, g) {
    return f(g);
  }, Zt.useFormState = function(f, g, v) {
    return h.H.useFormState(f, g, v);
  }, Zt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Zt.version = "19.1.1", Zt;
}
var iv;
function d0() {
  if (iv) return Qd.exports;
  iv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Qd.exports = S2(), Qd.exports;
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
var sv;
function w2() {
  if (sv) return Ds;
  sv = 1;
  var n = b2(), r = qf(), s = d0();
  function a(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        t += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(a(188));
  }
  function f(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var d = i.return;
      if (d === null) break;
      var y = d.alternate;
      if (y === null) {
        if (o = d.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (d.child === y.child) {
        for (y = d.child; y; ) {
          if (y === i) return m(d), e;
          if (y === o) return m(d), t;
          y = y.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) i = d, o = y;
      else {
        for (var x = !1, D = d.child; D; ) {
          if (D === i) {
            x = !0, i = d, o = y;
            break;
          }
          if (D === o) {
            x = !0, o = d, i = y;
            break;
          }
          D = D.sibling;
        }
        if (!x) {
          for (D = y.child; D; ) {
            if (D === i) {
              x = !0, i = y, o = d;
              break;
            }
            if (D === o) {
              x = !0, o = y, i = d;
              break;
            }
            D = D.sibling;
          }
          if (!x) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = g(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, E = Symbol.for("react.element"), b = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), j = Symbol.for("react.provider"), k = Symbol.for("react.consumer"), P = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), M = Symbol.for("react.memo_cache_sentinel"), z = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Z = Symbol.for("react.client.reference");
  function G(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Z ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case p:
        return "Fragment";
      case T:
        return "Profiler";
      case C:
        return "StrictMode";
      case S:
        return "Suspense";
      case w:
        return "SuspenseList";
      case L:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case _:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case A:
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
  var Q = Array.isArray, R = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], I = -1;
  function $(e) {
    return { current: e };
  }
  function ne(e) {
    0 > I || (e.current = ie[I], ie[I] = null, I--);
  }
  function le(e, t) {
    I++, ie[I] = e.current, e.current = t;
  }
  var fe = $(null), Ae = $(null), ee = $(null), we = $(null);
  function be(e, t) {
    switch (le(ee, t), le(Ae, e), le(fe, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Sg(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Sg(t), e = wg(t, e);
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
    ne(fe), le(fe, e);
  }
  function $e() {
    ne(fe), ne(Ae), ne(ee);
  }
  function Ge(e) {
    e.memoizedState !== null && le(we, e);
    var t = fe.current, i = wg(t, e.type);
    t !== i && (le(Ae, e), le(fe, i));
  }
  function F(e) {
    Ae.current === e && (ne(fe), ne(Ae)), we.current === e && (ne(we), ks._currentValue = K);
  }
  var de = Object.prototype.hasOwnProperty, ve = n.unstable_scheduleCallback, me = n.unstable_cancelCallback, he = n.unstable_shouldYield, Ee = n.unstable_requestPaint, Ne = n.unstable_now, Be = n.unstable_getCurrentPriorityLevel, ge = n.unstable_ImmediatePriority, te = n.unstable_UserBlockingPriority, ue = n.unstable_NormalPriority, ye = n.unstable_LowPriority, _e = n.unstable_IdlePriority, Oe = n.log, ut = n.unstable_setDisableYieldValue, Ot = null, et = null;
  function wn(e) {
    if (typeof Oe == "function" && ut(e), et && typeof et.setStrictMode == "function")
      try {
        et.setStrictMode(Ot, e);
      } catch {
      }
  }
  var zt = Math.clz32 ? Math.clz32 : aa, En = Math.log, ra = Math.LN2;
  function aa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (En(e) / ra | 0) | 0;
  }
  var tr = 256, Zn = 4194304;
  function Cn(e) {
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
  function Yt(e, t, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, y = e.suspendedLanes, x = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~y, o !== 0 ? d = Cn(o) : (x &= D, x !== 0 ? d = Cn(x) : i || (i = D & ~e, i !== 0 && (d = Cn(i))))) : (D = o & ~y, D !== 0 ? d = Cn(D) : x !== 0 ? d = Cn(x) : i || (i = o & ~e, i !== 0 && (d = Cn(i)))), d === 0 ? 0 : t !== 0 && t !== d && (t & y) === 0 && (y = d & -d, i = t & -t, y >= i || y === 32 && (i & 4194048) !== 0) ? t : d;
  }
  function Jt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function uo(e, t) {
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
  function ih() {
    var e = Zn;
    return Zn <<= 1, (Zn & 62914560) === 0 && (Zn = 4194304), e;
  }
  function jl(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Pi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function O_(e, t, i, o, d, y) {
    var x = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var D = e.entanglements, U = e.expirationTimes, X = e.hiddenUpdates;
    for (i = x & ~i; 0 < i; ) {
      var re = 31 - zt(i), oe = 1 << re;
      D[re] = 0, U[re] = -1;
      var J = X[re];
      if (J !== null)
        for (X[re] = null, re = 0; re < J.length; re++) {
          var W = J[re];
          W !== null && (W.lane &= -536870913);
        }
      i &= ~oe;
    }
    o !== 0 && sh(e, o, 0), y !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= y & ~(x & ~t));
  }
  function sh(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - zt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function oh(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var o = 31 - zt(i), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), i &= ~d;
    }
  }
  function Ll(e) {
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
  function Dl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function uh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Hg(e.type));
  }
  function M_(e, t) {
    var i = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = i;
    }
  }
  var Cr = Math.random().toString(36).slice(2), qt = "__reactFiber$" + Cr, Wt = "__reactProps$" + Cr, Pa = "__reactContainer$" + Cr, zl = "__reactEvents$" + Cr, R_ = "__reactListeners$" + Cr, j_ = "__reactHandles$" + Cr, lh = "__reactResources$" + Cr, Ii = "__reactMarker$" + Cr;
  function Pl(e) {
    delete e[qt], delete e[Wt], delete e[zl], delete e[R_], delete e[j_];
  }
  function Ia(e) {
    var t = e[qt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[Pa] || i[qt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = Tg(e); e !== null; ) {
            if (i = e[qt]) return i;
            e = Tg(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ba(e) {
    if (e = e[qt] || e[Pa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Bi(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Ua(e) {
    var t = e[lh];
    return t || (t = e[lh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Mt(e) {
    e[Ii] = !0;
  }
  var ch = /* @__PURE__ */ new Set(), dh = {};
  function ia(e, t) {
    Ha(e, t), Ha(e + "Capture", t);
  }
  function Ha(e, t) {
    for (dh[e] = t, e = 0; e < t.length; e++)
      ch.add(t[e]);
  }
  var L_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fh = {}, hh = {};
  function D_(e) {
    return de.call(hh, e) ? !0 : de.call(fh, e) ? !1 : L_.test(e) ? hh[e] = !0 : (fh[e] = !0, !1);
  }
  function lo(e, t, i) {
    if (D_(t))
      if (i === null) e.removeAttribute(t);
      else {
        switch (typeof i) {
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
        e.setAttribute(t, "" + i);
      }
  }
  function co(e, t, i) {
    if (i === null) e.removeAttribute(t);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + i);
    }
  }
  function nr(e, t, i, o) {
    if (o === null) e.removeAttribute(i);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(t, i, "" + o);
    }
  }
  var Il, ph;
  function qa(e) {
    if (Il === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Il = t && t[1] || "", ph = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Il + e + ph;
  }
  var Bl = !1;
  function Ul(e, t) {
    if (!e || Bl) return "";
    Bl = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var oe = function() {
                throw Error();
              };
              if (Object.defineProperty(oe.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(oe, []);
                } catch (W) {
                  var J = W;
                }
                Reflect.construct(e, [], oe);
              } else {
                try {
                  oe.call();
                } catch (W) {
                  J = W;
                }
                e.call(oe.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                J = W;
              }
              (oe = e()) && typeof oe.catch == "function" && oe.catch(function() {
              });
            }
          } catch (W) {
            if (W && J && typeof W.stack == "string")
              return [W.stack, J.stack];
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
      var y = o.DetermineComponentFrameRoot(), x = y[0], D = y[1];
      if (x && D) {
        var U = x.split(`
`), X = D.split(`
`);
        for (d = o = 0; o < U.length && !U[o].includes("DetermineComponentFrameRoot"); )
          o++;
        for (; d < X.length && !X[d].includes(
          "DetermineComponentFrameRoot"
        ); )
          d++;
        if (o === U.length || d === X.length)
          for (o = U.length - 1, d = X.length - 1; 1 <= o && 0 <= d && U[o] !== X[d]; )
            d--;
        for (; 1 <= o && 0 <= d; o--, d--)
          if (U[o] !== X[d]) {
            if (o !== 1 || d !== 1)
              do
                if (o--, d--, 0 > d || U[o] !== X[d]) {
                  var re = `
` + U[o].replace(" at new ", " at ");
                  return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), re;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      Bl = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? qa(i) : "";
  }
  function z_(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return qa(e.type);
      case 16:
        return qa("Lazy");
      case 13:
        return qa("Suspense");
      case 19:
        return qa("SuspenseList");
      case 0:
      case 15:
        return Ul(e.type, !1);
      case 11:
        return Ul(e.type.render, !1);
      case 1:
        return Ul(e.type, !0);
      case 31:
        return qa("Activity");
      default:
        return "";
    }
  }
  function mh(e) {
    try {
      var t = "";
      do
        t += z_(e), e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
    }
  }
  function An(e) {
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
  function gh(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function P_(e) {
    var t = gh(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, y = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(x) {
          o = "" + x, y.call(this, x);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
      }), {
        getValue: function() {
          return o;
        },
        setValue: function(x) {
          o = "" + x;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function fo(e) {
    e._valueTracker || (e._valueTracker = P_(e));
  }
  function vh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), o = "";
    return e && (o = gh(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1;
  }
  function ho(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var I_ = /[\n"\\]/g;
  function Tn(e) {
    return e.replace(
      I_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hl(e, t, i, o, d, y, x, D) {
    e.name = "", x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? e.type = x : e.removeAttribute("type"), t != null ? x === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + An(t)) : e.value !== "" + An(t) && (e.value = "" + An(t)) : x !== "submit" && x !== "reset" || e.removeAttribute("value"), t != null ? ql(e, x, An(t)) : i != null ? ql(e, x, An(i)) : o != null && e.removeAttribute("value"), d == null && y != null && (e.defaultChecked = !!y), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + An(D) : e.removeAttribute("name");
  }
  function yh(e, t, i, o, d, y, x, D) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.type = y), t != null || i != null) {
      if (!(y !== "submit" && y !== "reset" || t != null))
        return;
      i = i != null ? "" + An(i) : "", t = t != null ? "" + An(t) : i, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" && (e.name = x);
  }
  function ql(e, t, i) {
    t === "number" && ho(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function Ga(e, t, i, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < i.length; d++)
        t["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = t.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + An(i), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _h(e, t, i) {
    if (t != null && (t = "" + An(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + An(i) : "";
  }
  function bh(e, t, i, o) {
    if (t == null) {
      if (o != null) {
        if (i != null) throw Error(a(92));
        if (Q(o)) {
          if (1 < o.length) throw Error(a(93));
          o = o[0];
        }
        i = o;
      }
      i == null && (i = ""), t = i;
    }
    i = An(t), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
  }
  function Za(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var B_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sh(e, t, i) {
    var o = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, i) : typeof i != "number" || i === 0 || B_.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function wh(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && i[d] !== o && Sh(e, d, o);
    } else
      for (var y in t)
        t.hasOwnProperty(y) && Sh(e, y, t[y]);
  }
  function Gl(e) {
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
  var U_ = /* @__PURE__ */ new Map([
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
  ]), H_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function po(e) {
    return H_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Zl = null;
  function Vl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Va = null, $a = null;
  function Eh(e) {
    var t = Ba(e);
    if (t && (e = t.stateNode)) {
      var i = e[Wt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Hl(
            e,
            i.value,
            i.defaultValue,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name
          ), t = i.name, i.type === "radio" && t != null) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (i = i.querySelectorAll(
              'input[name="' + Tn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < i.length; t++) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var d = o[Wt] || null;
                if (!d) throw Error(a(90));
                Hl(
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
            for (t = 0; t < i.length; t++)
              o = i[t], o.form === e.form && vh(o);
          }
          break e;
        case "textarea":
          _h(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && Ga(e, !!i.multiple, t, !1);
      }
    }
  }
  var $l = !1;
  function Ch(e, t, i) {
    if ($l) return e(t, i);
    $l = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if ($l = !1, (Va !== null || $a !== null) && (Wo(), Va && (t = Va, e = $a, $a = Va = null, Eh(t), e)))
        for (t = 0; t < e.length; t++) Eh(e[t]);
    }
  }
  function Ui(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Wt] || null;
    if (o === null) return null;
    i = o[t];
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
    if (i && typeof i != "function")
      throw Error(
        a(231, t, typeof i)
      );
    return i;
  }
  var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yl = !1;
  if (rr)
    try {
      var Hi = {};
      Object.defineProperty(Hi, "passive", {
        get: function() {
          Yl = !0;
        }
      }), window.addEventListener("test", Hi, Hi), window.removeEventListener("test", Hi, Hi);
    } catch {
      Yl = !1;
    }
  var Ar = null, Fl = null, mo = null;
  function Ah() {
    if (mo) return mo;
    var e, t = Fl, i = t.length, o, d = "value" in Ar ? Ar.value : Ar.textContent, y = d.length;
    for (e = 0; e < i && t[e] === d[e]; e++) ;
    var x = i - e;
    for (o = 1; o <= x && t[i - o] === d[y - o]; o++) ;
    return mo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function go(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vo() {
    return !0;
  }
  function Th() {
    return !1;
  }
  function en(e) {
    function t(i, o, d, y, x) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = y, this.target = x, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (i = e[D], this[D] = i ? i(y) : y[D]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? vo : Th, this.isPropagationStopped = Th, this;
    }
    return v(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = vo);
      },
      stopPropagation: function() {
        var i = this.nativeEvent;
        i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = vo);
      },
      persist: function() {
      },
      isPersistent: vo
    }), t;
  }
  var sa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yo = en(sa), qi = v({}, sa, { view: 0, detail: 0 }), q_ = en(qi), Xl, Ql, Gi, _o = v({}, qi, {
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
    getModifierState: Jl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (Xl = e.screenX - Gi.screenX, Ql = e.screenY - Gi.screenY) : Ql = Xl = 0, Gi = e), Xl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ql;
    }
  }), kh = en(_o), G_ = v({}, _o, { dataTransfer: 0 }), Z_ = en(G_), V_ = v({}, qi, { relatedTarget: 0 }), Kl = en(V_), $_ = v({}, sa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Y_ = en($_), F_ = v({}, sa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), X_ = en(F_), Q_ = v({}, sa, { data: 0 }), xh = en(Q_), K_ = {
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
  }, J_ = {
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
  }, W_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eb(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = W_[e]) ? !!t[e] : !1;
  }
  function Jl() {
    return eb;
  }
  var tb = v({}, qi, {
    key: function(e) {
      if (e.key) {
        var t = K_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J_[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Jl,
    charCode: function(e) {
      return e.type === "keypress" ? go(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), nb = en(tb), rb = v({}, _o, {
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
  }), Nh = en(rb), ab = v({}, qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Jl
  }), ib = en(ab), sb = v({}, sa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ob = en(sb), ub = v({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lb = en(ub), cb = v({}, sa, {
    newState: 0,
    oldState: 0
  }), db = en(cb), fb = [9, 13, 27, 32], Wl = rr && "CompositionEvent" in window, Zi = null;
  rr && "documentMode" in document && (Zi = document.documentMode);
  var hb = rr && "TextEvent" in window && !Zi, Oh = rr && (!Wl || Zi && 8 < Zi && 11 >= Zi), Mh = " ", Rh = !1;
  function jh(e, t) {
    switch (e) {
      case "keyup":
        return fb.indexOf(t.keyCode) !== -1;
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
  function Lh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ya = !1;
  function pb(e, t) {
    switch (e) {
      case "compositionend":
        return Lh(t);
      case "keypress":
        return t.which !== 32 ? null : (Rh = !0, Mh);
      case "textInput":
        return e = t.data, e === Mh && Rh ? null : e;
      default:
        return null;
    }
  }
  function mb(e, t) {
    if (Ya)
      return e === "compositionend" || !Wl && jh(e, t) ? (e = Ah(), mo = Fl = Ar = null, Ya = !1, e) : null;
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
        return Oh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gb = {
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
  function Dh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gb[e.type] : t === "textarea";
  }
  function zh(e, t, i, o) {
    Va ? $a ? $a.push(o) : $a = [o] : Va = o, t = iu(t, "onChange"), 0 < t.length && (i = new yo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: t }));
  }
  var Vi = null, $i = null;
  function vb(e) {
    gg(e, 0);
  }
  function bo(e) {
    var t = Bi(e);
    if (vh(t)) return e;
  }
  function Ph(e, t) {
    if (e === "change") return t;
  }
  var Ih = !1;
  if (rr) {
    var ec;
    if (rr) {
      var tc = "oninput" in document;
      if (!tc) {
        var Bh = document.createElement("div");
        Bh.setAttribute("oninput", "return;"), tc = typeof Bh.oninput == "function";
      }
      ec = tc;
    } else ec = !1;
    Ih = ec && (!document.documentMode || 9 < document.documentMode);
  }
  function Uh() {
    Vi && (Vi.detachEvent("onpropertychange", Hh), $i = Vi = null);
  }
  function Hh(e) {
    if (e.propertyName === "value" && bo($i)) {
      var t = [];
      zh(
        t,
        $i,
        e,
        Vl(e)
      ), Ch(vb, t);
    }
  }
  function yb(e, t, i) {
    e === "focusin" ? (Uh(), Vi = t, $i = i, Vi.attachEvent("onpropertychange", Hh)) : e === "focusout" && Uh();
  }
  function _b(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bo($i);
  }
  function bb(e, t) {
    if (e === "click") return bo(t);
  }
  function Sb(e, t) {
    if (e === "input" || e === "change")
      return bo(t);
  }
  function wb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var cn = typeof Object.is == "function" ? Object.is : wb;
  function Yi(e, t) {
    if (cn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!de.call(t, d) || !cn(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function qh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Gh(e, t) {
    var i = qh(e);
    e = 0;
    for (var o; i; ) {
      if (i.nodeType === 3) {
        if (o = e + i.textContent.length, e <= t && o >= t)
          return { node: i, offset: t - e };
        e = o;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = qh(i);
    }
  }
  function Zh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Vh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ho(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = ho(e.document);
    }
    return t;
  }
  function nc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Eb = rr && "documentMode" in document && 11 >= document.documentMode, Fa = null, rc = null, Fi = null, ac = !1;
  function $h(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    ac || Fa == null || Fa !== ho(o) || (o = Fa, "selectionStart" in o && nc(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Fi && Yi(Fi, o) || (Fi = o, o = iu(rc, "onSelect"), 0 < o.length && (t = new yo(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: o }), t.target = Fa)));
  }
  function oa(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Xa = {
    animationend: oa("Animation", "AnimationEnd"),
    animationiteration: oa("Animation", "AnimationIteration"),
    animationstart: oa("Animation", "AnimationStart"),
    transitionrun: oa("Transition", "TransitionRun"),
    transitionstart: oa("Transition", "TransitionStart"),
    transitioncancel: oa("Transition", "TransitionCancel"),
    transitionend: oa("Transition", "TransitionEnd")
  }, ic = {}, Yh = {};
  rr && (Yh = document.createElement("div").style, "AnimationEvent" in window || (delete Xa.animationend.animation, delete Xa.animationiteration.animation, delete Xa.animationstart.animation), "TransitionEvent" in window || delete Xa.transitionend.transition);
  function ua(e) {
    if (ic[e]) return ic[e];
    if (!Xa[e]) return e;
    var t = Xa[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in Yh)
        return ic[e] = t[i];
    return e;
  }
  var Fh = ua("animationend"), Xh = ua("animationiteration"), Qh = ua("animationstart"), Cb = ua("transitionrun"), Ab = ua("transitionstart"), Tb = ua("transitioncancel"), Kh = ua("transitionend"), Jh = /* @__PURE__ */ new Map(), sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  sc.push("scrollEnd");
  function zn(e, t) {
    Jh.set(e, t), ia(t, [e]);
  }
  var Wh = /* @__PURE__ */ new WeakMap();
  function kn(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = Wh.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: mh(t)
      }, Wh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: mh(t)
    };
  }
  var xn = [], Qa = 0, oc = 0;
  function So() {
    for (var e = Qa, t = oc = Qa = 0; t < e; ) {
      var i = xn[t];
      xn[t++] = null;
      var o = xn[t];
      xn[t++] = null;
      var d = xn[t];
      xn[t++] = null;
      var y = xn[t];
      if (xn[t++] = null, o !== null && d !== null) {
        var x = o.pending;
        x === null ? d.next = d : (d.next = x.next, x.next = d), o.pending = d;
      }
      y !== 0 && ep(i, d, y);
    }
  }
  function wo(e, t, i, o) {
    xn[Qa++] = e, xn[Qa++] = t, xn[Qa++] = i, xn[Qa++] = o, oc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function uc(e, t, i, o) {
    return wo(e, t, i, o), Eo(e);
  }
  function Ka(e, t) {
    return wo(e, null, null, t), Eo(e);
  }
  function ep(e, t, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, y = e.return; y !== null; )
      y.childLanes |= i, o = y.alternate, o !== null && (o.childLanes |= i), y.tag === 22 && (e = y.stateNode, e === null || e._visibility & 1 || (d = !0)), e = y, y = y.return;
    return e.tag === 3 ? (y = e.stateNode, d && t !== null && (d = 31 - zt(i), e = y.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = i | 536870912), y) : null;
  }
  function Eo(e) {
    if (50 < _s)
      throw _s = 0, pd = null, Error(a(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ja = {};
  function kb(e, t, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, t, i, o) {
    return new kb(e, t, i, o);
  }
  function lc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ar(e, t) {
    var i = e.alternate;
    return i === null ? (i = dn(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function tp(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Co(e, t, i, o, d, y) {
    var x = 0;
    if (o = e, typeof e == "function") lc(e) && (x = 1);
    else if (typeof e == "string")
      x = N1(
        e,
        i,
        fe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = dn(31, i, t, d), e.elementType = L, e.lanes = y, e;
        case p:
          return la(i.children, d, y, t);
        case C:
          x = 8, d |= 24;
          break;
        case T:
          return e = dn(12, i, t, d | 2), e.elementType = T, e.lanes = y, e;
        case S:
          return e = dn(13, i, t, d), e.elementType = S, e.lanes = y, e;
        case w:
          return e = dn(19, i, t, d), e.elementType = w, e.lanes = y, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case j:
              case P:
                x = 10;
                break e;
              case k:
                x = 9;
                break e;
              case l:
                x = 11;
                break e;
              case A:
                x = 14;
                break e;
              case O:
                x = 16, o = null;
                break e;
            }
          x = 29, i = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = dn(x, i, t, d), t.elementType = e, t.type = o, t.lanes = y, t;
  }
  function la(e, t, i, o) {
    return e = dn(7, e, o, t), e.lanes = i, e;
  }
  function cc(e, t, i) {
    return e = dn(6, e, null, t), e.lanes = i, e;
  }
  function dc(e, t, i) {
    return t = dn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = i, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Wa = [], ei = 0, Ao = null, To = 0, Nn = [], On = 0, ca = null, ir = 1, sr = "";
  function da(e, t) {
    Wa[ei++] = To, Wa[ei++] = Ao, Ao = e, To = t;
  }
  function np(e, t, i) {
    Nn[On++] = ir, Nn[On++] = sr, Nn[On++] = ca, ca = e;
    var o = ir;
    e = sr;
    var d = 32 - zt(o) - 1;
    o &= ~(1 << d), i += 1;
    var y = 32 - zt(t) + d;
    if (30 < y) {
      var x = d - d % 5;
      y = (o & (1 << x) - 1).toString(32), o >>= x, d -= x, ir = 1 << 32 - zt(t) + d | i << d | o, sr = y + e;
    } else
      ir = 1 << y | i << d | o, sr = e;
  }
  function fc(e) {
    e.return !== null && (da(e, 1), np(e, 1, 0));
  }
  function hc(e) {
    for (; e === Ao; )
      Ao = Wa[--ei], Wa[ei] = null, To = Wa[--ei], Wa[ei] = null;
    for (; e === ca; )
      ca = Nn[--On], Nn[On] = null, sr = Nn[--On], Nn[On] = null, ir = Nn[--On], Nn[On] = null;
  }
  var Ft = null, gt = null, Ke = !1, fa = null, Vn = !1, pc = Error(a(519));
  function ha(e) {
    var t = Error(a(418, ""));
    throw Ki(kn(t, e)), pc;
  }
  function rp(e) {
    var t = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (t[qt] = e, t[Wt] = o, i) {
      case "dialog":
        Ve("cancel", t), Ve("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ve("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Ss.length; i++)
          Ve(Ss[i], t);
        break;
      case "source":
        Ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ve("error", t), Ve("load", t);
        break;
      case "details":
        Ve("toggle", t);
        break;
      case "input":
        Ve("invalid", t), yh(
          t,
          o.value,
          o.defaultValue,
          o.checked,
          o.defaultChecked,
          o.type,
          o.name,
          !0
        ), fo(t);
        break;
      case "select":
        Ve("invalid", t);
        break;
      case "textarea":
        Ve("invalid", t), bh(t, o.value, o.defaultValue, o.children), fo(t);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || o.suppressHydrationWarning === !0 || bg(t.textContent, i) ? (o.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)), o.onScroll != null && Ve("scroll", t), o.onScrollEnd != null && Ve("scrollend", t), o.onClick != null && (t.onclick = su), t = !0) : t = !1, t || ha(e);
  }
  function ap(e) {
    for (Ft = e.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function Xi(e) {
    if (e !== Ft) return !1;
    if (!Ke) return ap(e), Ke = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Od(e.type, e.memoizedProps)), i = !i), i && gt && ha(e), ap(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (t === 0) {
                gt = In(e.nextSibling);
                break e;
              }
              t--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || t++;
          e = e.nextSibling;
        }
        gt = null;
      }
    } else
      t === 27 ? (t = gt, Hr(e.type) ? (e = Ld, Ld = null, gt = e) : gt = t) : gt = Ft ? In(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qi() {
    gt = Ft = null, Ke = !1;
  }
  function ip() {
    var e = fa;
    return e !== null && (rn === null ? rn = e : rn.push.apply(
      rn,
      e
    ), fa = null), e;
  }
  function Ki(e) {
    fa === null ? fa = [e] : fa.push(e);
  }
  var mc = $(null), pa = null, or = null;
  function Tr(e, t, i) {
    le(mc, t._currentValue), t._currentValue = i;
  }
  function ur(e) {
    e._currentValue = mc.current, ne(mc);
  }
  function gc(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function vc(e, t, i, o) {
    var d = e.child;
    for (d !== null && (d.return = e); d !== null; ) {
      var y = d.dependencies;
      if (y !== null) {
        var x = d.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var D = y;
          y = d;
          for (var U = 0; U < t.length; U++)
            if (D.context === t[U]) {
              y.lanes |= i, D = y.alternate, D !== null && (D.lanes |= i), gc(
                y.return,
                i,
                e
              ), o || (x = null);
              break e;
            }
          y = D.next;
        }
      } else if (d.tag === 18) {
        if (x = d.return, x === null) throw Error(a(341));
        x.lanes |= i, y = x.alternate, y !== null && (y.lanes |= i), gc(x, i, e), x = null;
      } else x = d.child;
      if (x !== null) x.return = d;
      else
        for (x = d; x !== null; ) {
          if (x === e) {
            x = null;
            break;
          }
          if (d = x.sibling, d !== null) {
            d.return = x.return, x = d;
            break;
          }
          x = x.return;
        }
      d = x;
    }
  }
  function Ji(e, t, i, o) {
    e = null;
    for (var d = t, y = !1; d !== null; ) {
      if (!y) {
        if ((d.flags & 524288) !== 0) y = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var x = d.alternate;
        if (x === null) throw Error(a(387));
        if (x = x.memoizedProps, x !== null) {
          var D = d.type;
          cn(d.pendingProps.value, x.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === we.current) {
        if (x = d.alternate, x === null) throw Error(a(387));
        x.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(ks) : e = [ks]);
      }
      d = d.return;
    }
    e !== null && vc(
      t,
      e,
      i,
      o
    ), t.flags |= 262144;
  }
  function ko(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!cn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ma(e) {
    pa = e, or = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Gt(e) {
    return sp(pa, e);
  }
  function xo(e, t) {
    return pa === null && ma(e), sp(e, t);
  }
  function sp(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, or === null) {
      if (e === null) throw Error(a(308));
      or = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else or = or.next = t;
    return i;
  }
  var xb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(i, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(i) {
        return i();
      });
    };
  }, Nb = n.unstable_scheduleCallback, Ob = n.unstable_NormalPriority, Tt = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function yc() {
    return {
      controller: new xb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wi(e) {
    e.refCount--, e.refCount === 0 && Nb(Ob, function() {
      e.controller.abort();
    });
  }
  var es = null, _c = 0, ti = 0, ni = null;
  function Mb(e, t) {
    if (es === null) {
      var i = es = [];
      _c = 0, ti = Sd(), ni = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return _c++, t.then(op, op), t;
  }
  function op() {
    if (--_c === 0 && es !== null) {
      ni !== null && (ni.status = "fulfilled");
      var e = es;
      es = null, ti = 0, ni = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Rb(e, t) {
    var i = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(d) {
        i.push(d);
      }
    };
    return e.then(
      function() {
        o.status = "fulfilled", o.value = t;
        for (var d = 0; d < i.length; d++) (0, i[d])(t);
      },
      function(d) {
        for (o.status = "rejected", o.reason = d, d = 0; d < i.length; d++)
          (0, i[d])(void 0);
      }
    ), o;
  }
  var up = R.S;
  R.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Mb(e, t), up !== null && up(e, t);
  };
  var ga = $(null);
  function bc() {
    var e = ga.current;
    return e !== null ? e : it.pooledCache;
  }
  function No(e, t) {
    t === null ? le(ga, ga.current) : le(ga, t.pool);
  }
  function lp() {
    var e = bc();
    return e === null ? null : { parent: Tt._currentValue, pool: e };
  }
  var ts = Error(a(460)), cp = Error(a(474)), Oo = Error(a(542)), Sc = { then: function() {
  } };
  function dp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mo() {
  }
  function fp(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(Mo, Mo), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, pp(e), e;
      default:
        if (typeof t.status == "string") t.then(Mo, Mo);
        else {
          if (e = it, e !== null && 100 < e.shellSuspendCounter)
            throw Error(a(482));
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
            throw e = t.reason, pp(e), e;
        }
        throw ns = t, ts;
    }
  }
  var ns = null;
  function hp() {
    if (ns === null) throw Error(a(459));
    var e = ns;
    return ns = null, e;
  }
  function pp(e) {
    if (e === ts || e === Oo)
      throw Error(a(483));
  }
  var kr = !1;
  function wc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ec(e, t) {
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
  function Nr(e, t, i) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Je & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = Eo(e), ep(e, null, i), t;
    }
    return wo(e, o, t, i), Eo(e);
  }
  function rs(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, oh(e, i);
    }
  }
  function Cc(e, t) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var d = null, y = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var x = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          y === null ? d = y = x : y = y.next = x, i = i.next;
        } while (i !== null);
        y === null ? d = y = t : y = y.next = t;
      } else d = y = t;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: y,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var Ac = !1;
  function as() {
    if (Ac) {
      var e = ni;
      if (e !== null) throw e;
    }
  }
  function is(e, t, i, o) {
    Ac = !1;
    var d = e.updateQueue;
    kr = !1;
    var y = d.firstBaseUpdate, x = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var U = D, X = U.next;
      U.next = null, x === null ? y = X : x.next = X, x = U;
      var re = e.alternate;
      re !== null && (re = re.updateQueue, D = re.lastBaseUpdate, D !== x && (D === null ? re.firstBaseUpdate = X : D.next = X, re.lastBaseUpdate = U));
    }
    if (y !== null) {
      var oe = d.baseState;
      x = 0, re = X = U = null, D = y;
      do {
        var J = D.lane & -536870913, W = J !== D.lane;
        if (W ? (Xe & J) === J : (o & J) === J) {
          J !== 0 && J === ti && (Ac = !0), re !== null && (re = re.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Me = e, ke = D;
            J = t;
            var rt = i;
            switch (ke.tag) {
              case 1:
                if (Me = ke.payload, typeof Me == "function") {
                  oe = Me.call(rt, oe, J);
                  break e;
                }
                oe = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = ke.payload, J = typeof Me == "function" ? Me.call(rt, oe, J) : Me, J == null) break e;
                oe = v({}, oe, J);
                break e;
              case 2:
                kr = !0;
            }
          }
          J = D.callback, J !== null && (e.flags |= 64, W && (e.flags |= 8192), W = d.callbacks, W === null ? d.callbacks = [J] : W.push(J));
        } else
          W = {
            lane: J,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          }, re === null ? (X = re = W, U = oe) : re = re.next = W, x |= J;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          W = D, D = W.next, W.next = null, d.lastBaseUpdate = W, d.shared.pending = null;
        }
      } while (!0);
      re === null && (U = oe), d.baseState = U, d.firstBaseUpdate = X, d.lastBaseUpdate = re, y === null && (d.shared.lanes = 0), Pr |= x, e.lanes = x, e.memoizedState = oe;
    }
  }
  function mp(e, t) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(t);
  }
  function gp(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        mp(i[e], t);
  }
  var ri = $(null), Ro = $(0);
  function vp(e, t) {
    e = mr, le(Ro, e), le(ri, t), mr = e | t.baseLanes;
  }
  function Tc() {
    le(Ro, mr), le(ri, ri.current);
  }
  function kc() {
    mr = Ro.current, ne(ri), ne(Ro);
  }
  var Or = 0, He = null, tt = null, wt = null, jo = !1, ai = !1, va = !1, Lo = 0, ss = 0, ii = null, jb = 0;
  function _t() {
    throw Error(a(321));
  }
  function xc(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!cn(e[i], t[i])) return !1;
    return !0;
  }
  function Nc(e, t, i, o, d, y) {
    return Or = y, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? em : tm, va = !1, y = i(o, d), va = !1, ai && (y = _p(
      t,
      i,
      o,
      d
    )), yp(e), y;
  }
  function yp(e) {
    R.H = Uo;
    var t = tt !== null && tt.next !== null;
    if (Or = 0, wt = tt = He = null, jo = !1, ss = 0, ii = null, t) throw Error(a(300));
    e === null || Rt || (e = e.dependencies, e !== null && ko(e) && (Rt = !0));
  }
  function _p(e, t, i, o) {
    He = e;
    var d = 0;
    do {
      if (ai && (ii = null), ss = 0, ai = !1, 25 <= d) throw Error(a(301));
      if (d += 1, wt = tt = null, e.updateQueue != null) {
        var y = e.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      R.H = Ub, y = t(i, o);
    } while (ai);
    return y;
  }
  function Lb() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (tt !== null ? tt.memoizedState : null) !== e && (He.flags |= 1024), t;
  }
  function Oc() {
    var e = Lo !== 0;
    return Lo = 0, e;
  }
  function Mc(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function Rc(e) {
    if (jo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      jo = !1;
    }
    Or = 0, wt = tt = He = null, ai = !1, ss = Lo = 0, ii = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return wt === null ? He.memoizedState = wt = e : wt = wt.next = e, wt;
  }
  function Et() {
    if (tt === null) {
      var e = He.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = wt === null ? He.memoizedState : wt.next;
    if (t !== null)
      wt = t, tt = e;
    else {
      if (e === null)
        throw He.alternate === null ? Error(a(467)) : Error(a(310));
      tt = e, e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null
      }, wt === null ? He.memoizedState = wt = e : wt = wt.next = e;
    }
    return wt;
  }
  function jc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(e) {
    var t = ss;
    return ss += 1, ii === null && (ii = []), e = fp(ii, e, t), t = He, (wt === null ? t.memoizedState : wt.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? em : tm), e;
  }
  function Do(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return os(e);
      if (e.$$typeof === P) return Gt(e);
    }
    throw Error(a(438, String(e)));
  }
  function Lc(e) {
    var t = null, i = He.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var o = He.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = jc(), He.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), o = 0; o < e; o++)
        i[o] = M;
    return t.index++, i;
  }
  function lr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zo(e) {
    var t = Et();
    return Dc(t, tt, e);
  }
  function Dc(e, t, i) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
    var d = e.baseQueue, y = o.pending;
    if (y !== null) {
      if (d !== null) {
        var x = d.next;
        d.next = y.next, y.next = x;
      }
      t.baseQueue = d = y, o.pending = null;
    }
    if (y = e.baseState, d === null) e.memoizedState = y;
    else {
      t = d.next;
      var D = x = null, U = null, X = t, re = !1;
      do {
        var oe = X.lane & -536870913;
        if (oe !== X.lane ? (Xe & oe) === oe : (Or & oe) === oe) {
          var J = X.revertLane;
          if (J === 0)
            U !== null && (U = U.next = {
              lane: 0,
              revertLane: 0,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }), oe === ti && (re = !0);
          else if ((Or & J) === J) {
            X = X.next, J === ti && (re = !0);
            continue;
          } else
            oe = {
              lane: 0,
              revertLane: X.revertLane,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }, U === null ? (D = U = oe, x = y) : U = U.next = oe, He.lanes |= J, Pr |= J;
          oe = X.action, va && i(y, oe), y = X.hasEagerState ? X.eagerState : i(y, oe);
        } else
          J = {
            lane: oe,
            revertLane: X.revertLane,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }, U === null ? (D = U = J, x = y) : U = U.next = J, He.lanes |= oe, Pr |= oe;
        X = X.next;
      } while (X !== null && X !== t);
      if (U === null ? x = y : U.next = D, !cn(y, e.memoizedState) && (Rt = !0, re && (i = ni, i !== null)))
        throw i;
      e.memoizedState = y, e.baseState = x, e.baseQueue = U, o.lastRenderedState = y;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function zc(e) {
    var t = Et(), i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, d = i.pending, y = t.memoizedState;
    if (d !== null) {
      i.pending = null;
      var x = d = d.next;
      do
        y = e(y, x.action), x = x.next;
      while (x !== d);
      cn(y, t.memoizedState) || (Rt = !0), t.memoizedState = y, t.baseQueue === null && (t.baseState = y), i.lastRenderedState = y;
    }
    return [y, o];
  }
  function bp(e, t, i) {
    var o = He, d = Et(), y = Ke;
    if (y) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = t();
    var x = !cn(
      (tt || d).memoizedState,
      i
    );
    x && (d.memoizedState = i, Rt = !0), d = d.queue;
    var D = Ep.bind(null, o, d, e);
    if (us(2048, 8, D, [e]), d.getSnapshot !== t || x || wt !== null && wt.memoizedState.tag & 1) {
      if (o.flags |= 2048, si(
        9,
        Po(),
        wp.bind(
          null,
          o,
          d,
          i,
          t
        ),
        null
      ), it === null) throw Error(a(349));
      y || (Or & 124) !== 0 || Sp(o, t, i);
    }
    return i;
  }
  function Sp(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = He.updateQueue, t === null ? (t = jc(), He.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function wp(e, t, i, o) {
    t.value = i, t.getSnapshot = o, Cp(t) && Ap(e);
  }
  function Ep(e, t, i) {
    return i(function() {
      Cp(t) && Ap(e);
    });
  }
  function Cp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !cn(e, i);
    } catch {
      return !0;
    }
  }
  function Ap(e) {
    var t = Ka(e, 2);
    t !== null && gn(t, e, 2);
  }
  function Pc(e) {
    var t = tn();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), va) {
        wn(!0);
        try {
          i();
        } finally {
          wn(!1);
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
  function Tp(e, t, i, o) {
    return e.baseState = i, Dc(
      e,
      tt,
      typeof o == "function" ? o : lr
    );
  }
  function Db(e, t, i, o, d) {
    if (Bo(e)) throw Error(a(485));
    if (e = t.action, e !== null) {
      var y = {
        payload: d,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(x) {
          y.listeners.push(x);
        }
      };
      R.T !== null ? i(!0) : y.isTransition = !1, o(y), i = t.pending, i === null ? (y.next = t.pending = y, kp(t, y)) : (y.next = i.next, t.pending = i.next = y);
    }
  }
  function kp(e, t) {
    var i = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var y = R.T, x = {};
      R.T = x;
      try {
        var D = i(d, o), U = R.S;
        U !== null && U(x, D), xp(e, t, D);
      } catch (X) {
        Ic(e, t, X);
      } finally {
        R.T = y;
      }
    } else
      try {
        y = i(d, o), xp(e, t, y);
      } catch (X) {
        Ic(e, t, X);
      }
  }
  function xp(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Np(e, t, o);
      },
      function(o) {
        return Ic(e, t, o);
      }
    ) : Np(e, t, i);
  }
  function Np(e, t, i) {
    t.status = "fulfilled", t.value = i, Op(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, kp(e, i)));
  }
  function Ic(e, t, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = i, Op(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function Op(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Mp(e, t) {
    return t;
  }
  function Rp(e, t) {
    if (Ke) {
      var i = it.formState;
      if (i !== null) {
        e: {
          var o = He;
          if (Ke) {
            if (gt) {
              t: {
                for (var d = gt, y = Vn; d.nodeType !== 8; ) {
                  if (!y) {
                    d = null;
                    break t;
                  }
                  if (d = In(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                y = d.data, d = y === "F!" || y === "F" ? d : null;
              }
              if (d) {
                gt = In(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            ha(o);
          }
          o = !1;
        }
        o && (t = i[0]);
      }
    }
    return i = tn(), i.memoizedState = i.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mp,
      lastRenderedState: t
    }, i.queue = o, i = Kp.bind(
      null,
      He,
      o
    ), o.dispatch = i, o = Pc(!1), y = Gc.bind(
      null,
      He,
      !1,
      o.queue
    ), o = tn(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = Db.bind(
      null,
      He,
      d,
      y,
      i
    ), d.dispatch = i, o.memoizedState = e, [t, i, !1];
  }
  function jp(e) {
    var t = Et();
    return Lp(t, tt, e);
  }
  function Lp(e, t, i) {
    if (t = Dc(
      e,
      t,
      Mp
    )[0], e = zo(lr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = os(t);
      } catch (x) {
        throw x === ts ? Oo : x;
      }
    else o = t;
    t = Et();
    var d = t.queue, y = d.dispatch;
    return i !== t.memoizedState && (He.flags |= 2048, si(
      9,
      Po(),
      zb.bind(null, d, i),
      null
    )), [o, y, e];
  }
  function zb(e, t) {
    e.action = t;
  }
  function Dp(e) {
    var t = Et(), i = tt;
    if (i !== null)
      return Lp(t, i, e);
    Et(), t = t.memoizedState, i = Et();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [t, o, !1];
  }
  function si(e, t, i, o) {
    return e = { tag: e, create: i, deps: o, inst: t, next: null }, t = He.updateQueue, t === null && (t = jc(), He.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Po() {
    return { destroy: void 0, resource: void 0 };
  }
  function zp() {
    return Et().memoizedState;
  }
  function Io(e, t, i, o) {
    var d = tn();
    o = o === void 0 ? null : o, He.flags |= e, d.memoizedState = si(
      1 | t,
      Po(),
      i,
      o
    );
  }
  function us(e, t, i, o) {
    var d = Et();
    o = o === void 0 ? null : o;
    var y = d.memoizedState.inst;
    tt !== null && o !== null && xc(o, tt.memoizedState.deps) ? d.memoizedState = si(t, y, i, o) : (He.flags |= e, d.memoizedState = si(
      1 | t,
      y,
      i,
      o
    ));
  }
  function Pp(e, t) {
    Io(8390656, 8, e, t);
  }
  function Ip(e, t) {
    us(2048, 8, e, t);
  }
  function Bp(e, t) {
    return us(4, 2, e, t);
  }
  function Up(e, t) {
    return us(4, 4, e, t);
  }
  function Hp(e, t) {
    if (typeof t == "function") {
      e = e();
      var i = t(e);
      return function() {
        typeof i == "function" ? i() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function qp(e, t, i) {
    i = i != null ? i.concat([e]) : null, us(4, 4, Hp.bind(null, t, e), i);
  }
  function Bc() {
  }
  function Gp(e, t) {
    var i = Et();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return t !== null && xc(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e);
  }
  function Zp(e, t) {
    var i = Et();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    if (t !== null && xc(t, o[1]))
      return o[0];
    if (o = e(), va) {
      wn(!0);
      try {
        e();
      } finally {
        wn(!1);
      }
    }
    return i.memoizedState = [o, t], o;
  }
  function Uc(e, t, i) {
    return i === void 0 || (Or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = i, e = Ym(), He.lanes |= e, Pr |= e, i);
  }
  function Vp(e, t, i, o) {
    return cn(i, t) ? i : ri.current !== null ? (e = Uc(e, i, o), cn(e, t) || (Rt = !0), e) : (Or & 42) === 0 ? (Rt = !0, e.memoizedState = i) : (e = Ym(), He.lanes |= e, Pr |= e, t);
  }
  function $p(e, t, i, o, d) {
    var y = B.p;
    B.p = y !== 0 && 8 > y ? y : 8;
    var x = R.T, D = {};
    R.T = D, Gc(e, !1, t, i);
    try {
      var U = d(), X = R.S;
      if (X !== null && X(D, U), U !== null && typeof U == "object" && typeof U.then == "function") {
        var re = Rb(
          U,
          o
        );
        ls(
          e,
          t,
          re,
          mn(e)
        );
      } else
        ls(
          e,
          t,
          o,
          mn(e)
        );
    } catch (oe) {
      ls(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: oe },
        mn()
      );
    } finally {
      B.p = y, R.T = x;
    }
  }
  function Pb() {
  }
  function Hc(e, t, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = Yp(e).queue;
    $p(
      e,
      d,
      t,
      K,
      i === null ? Pb : function() {
        return Fp(e), i(o);
      }
    );
  }
  function Yp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: K,
      baseState: K,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lr,
        lastRenderedState: K
      },
      next: null
    };
    var i = {};
    return t.next = {
      memoizedState: i,
      baseState: i,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: lr,
        lastRenderedState: i
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Fp(e) {
    var t = Yp(e).next.queue;
    ls(e, t, {}, mn());
  }
  function qc() {
    return Gt(ks);
  }
  function Xp() {
    return Et().memoizedState;
  }
  function Qp() {
    return Et().memoizedState;
  }
  function Ib(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = mn();
          e = xr(i);
          var o = Nr(t, e, i);
          o !== null && (gn(o, t, i), rs(o, t, i)), t = { cache: yc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Bb(e, t, i) {
    var o = mn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bo(e) ? Jp(t, i) : (i = uc(e, t, i, o), i !== null && (gn(i, e, o), Wp(i, t, o)));
  }
  function Kp(e, t, i) {
    var o = mn();
    ls(e, t, i, o);
  }
  function ls(e, t, i, o) {
    var d = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Bo(e)) Jp(t, d);
    else {
      var y = e.alternate;
      if (e.lanes === 0 && (y === null || y.lanes === 0) && (y = t.lastRenderedReducer, y !== null))
        try {
          var x = t.lastRenderedState, D = y(x, i);
          if (d.hasEagerState = !0, d.eagerState = D, cn(D, x))
            return wo(e, t, d, 0), it === null && So(), !1;
        } catch {
        } finally {
        }
      if (i = uc(e, t, d, o), i !== null)
        return gn(i, e, o), Wp(i, t, o), !0;
    }
    return !1;
  }
  function Gc(e, t, i, o) {
    if (o = {
      lane: 2,
      revertLane: Sd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bo(e)) {
      if (t) throw Error(a(479));
    } else
      t = uc(
        e,
        i,
        o,
        2
      ), t !== null && gn(t, e, 2);
  }
  function Bo(e) {
    var t = e.alternate;
    return e === He || t !== null && t === He;
  }
  function Jp(e, t) {
    ai = jo = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function Wp(e, t, i) {
    if ((i & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, oh(e, i);
    }
  }
  var Uo = {
    readContext: Gt,
    use: Do,
    useCallback: _t,
    useContext: _t,
    useEffect: _t,
    useImperativeHandle: _t,
    useLayoutEffect: _t,
    useInsertionEffect: _t,
    useMemo: _t,
    useReducer: _t,
    useRef: _t,
    useState: _t,
    useDebugValue: _t,
    useDeferredValue: _t,
    useTransition: _t,
    useSyncExternalStore: _t,
    useId: _t,
    useHostTransitionStatus: _t,
    useFormState: _t,
    useActionState: _t,
    useOptimistic: _t,
    useMemoCache: _t,
    useCacheRefresh: _t
  }, em = {
    readContext: Gt,
    use: Do,
    useCallback: function(e, t) {
      return tn().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Gt,
    useEffect: Pp,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, Io(
        4194308,
        4,
        Hp.bind(null, t, e),
        i
      );
    },
    useLayoutEffect: function(e, t) {
      return Io(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Io(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var i = tn();
      t = t === void 0 ? null : t;
      var o = e();
      if (va) {
        wn(!0);
        try {
          e();
        } finally {
          wn(!1);
        }
      }
      return i.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, i) {
      var o = tn();
      if (i !== void 0) {
        var d = i(t);
        if (va) {
          wn(!0);
          try {
            i(t);
          } finally {
            wn(!1);
          }
        }
      } else d = t;
      return o.memoizedState = o.baseState = d, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: d
      }, o.queue = e, e = e.dispatch = Bb.bind(
        null,
        He,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = tn();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Pc(e);
      var t = e.queue, i = Kp.bind(null, He, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var i = tn();
      return Uc(i, e, t);
    },
    useTransition: function() {
      var e = Pc(!1);
      return e = $p.bind(
        null,
        He,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var o = He, d = tn();
      if (Ke) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = t(), it === null)
          throw Error(a(349));
        (Xe & 124) !== 0 || Sp(o, t, i);
      }
      d.memoizedState = i;
      var y = { value: i, getSnapshot: t };
      return d.queue = y, Pp(Ep.bind(null, o, y, e), [
        e
      ]), o.flags |= 2048, si(
        9,
        Po(),
        wp.bind(
          null,
          o,
          y,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = tn(), t = it.identifierPrefix;
      if (Ke) {
        var i = sr, o = ir;
        i = (o & ~(1 << 32 - zt(o) - 1)).toString(32) + i, t = "«" + t + "R" + i, i = Lo++, 0 < i && (t += "H" + i.toString(32)), t += "»";
      } else
        i = jb++, t = "«" + t + "r" + i.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: qc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(e) {
      var t = tn();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = Gc.bind(
        null,
        He,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: Lc,
    useCacheRefresh: function() {
      return tn().memoizedState = Ib.bind(
        null,
        He
      );
    }
  }, tm = {
    readContext: Gt,
    use: Do,
    useCallback: Gp,
    useContext: Gt,
    useEffect: Ip,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Zp,
    useReducer: zo,
    useRef: zp,
    useState: function() {
      return zo(lr);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var i = Et();
      return Vp(
        i,
        tt.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zo(lr)[0], t = Et().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: bp,
    useId: Xp,
    useHostTransitionStatus: qc,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var i = Et();
      return Tp(i, tt, e, t);
    },
    useMemoCache: Lc,
    useCacheRefresh: Qp
  }, Ub = {
    readContext: Gt,
    use: Do,
    useCallback: Gp,
    useContext: Gt,
    useEffect: Ip,
    useImperativeHandle: qp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Zp,
    useReducer: zc,
    useRef: zp,
    useState: function() {
      return zc(lr);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, t) {
      var i = Et();
      return tt === null ? Uc(i, e, t) : Vp(
        i,
        tt.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zc(lr)[0], t = Et().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: bp,
    useId: Xp,
    useHostTransitionStatus: qc,
    useFormState: Dp,
    useActionState: Dp,
    useOptimistic: function(e, t) {
      var i = Et();
      return tt !== null ? Tp(i, tt, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Lc,
    useCacheRefresh: Qp
  }, oi = null, cs = 0;
  function Ho(e) {
    var t = cs;
    return cs += 1, oi === null && (oi = []), fp(oi, e, t);
  }
  function ds(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function qo(e, t) {
    throw t.$$typeof === E ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(
      a(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function nm(e) {
    var t = e._init;
    return t(e._payload);
  }
  function rm(e) {
    function t(V, q) {
      if (e) {
        var Y = V.deletions;
        Y === null ? (V.deletions = [q], V.flags |= 16) : Y.push(q);
      }
    }
    function i(V, q) {
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
    function y(V, q, Y) {
      return V.index = Y, e ? (Y = V.alternate, Y !== null ? (Y = Y.index, Y < q ? (V.flags |= 67108866, q) : Y) : (V.flags |= 67108866, q)) : (V.flags |= 1048576, q);
    }
    function x(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function D(V, q, Y, se) {
      return q === null || q.tag !== 6 ? (q = cc(Y, V.mode, se), q.return = V, q) : (q = d(q, Y), q.return = V, q);
    }
    function U(V, q, Y, se) {
      var Se = Y.type;
      return Se === p ? re(
        V,
        q,
        Y.props.children,
        se,
        Y.key
      ) : q !== null && (q.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === O && nm(Se) === q.type) ? (q = d(q, Y.props), ds(q, Y), q.return = V, q) : (q = Co(
        Y.type,
        Y.key,
        Y.props,
        null,
        V.mode,
        se
      ), ds(q, Y), q.return = V, q);
    }
    function X(V, q, Y, se) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== Y.containerInfo || q.stateNode.implementation !== Y.implementation ? (q = dc(Y, V.mode, se), q.return = V, q) : (q = d(q, Y.children || []), q.return = V, q);
    }
    function re(V, q, Y, se, Se) {
      return q === null || q.tag !== 7 ? (q = la(
        Y,
        V.mode,
        se,
        Se
      ), q.return = V, q) : (q = d(q, Y), q.return = V, q);
    }
    function oe(V, q, Y) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return q = cc(
          "" + q,
          V.mode,
          Y
        ), q.return = V, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case b:
            return Y = Co(
              q.type,
              q.key,
              q.props,
              null,
              V.mode,
              Y
            ), ds(Y, q), Y.return = V, Y;
          case _:
            return q = dc(
              q,
              V.mode,
              Y
            ), q.return = V, q;
          case O:
            var se = q._init;
            return q = se(q._payload), oe(V, q, Y);
        }
        if (Q(q) || H(q))
          return q = la(
            q,
            V.mode,
            Y,
            null
          ), q.return = V, q;
        if (typeof q.then == "function")
          return oe(V, Ho(q), Y);
        if (q.$$typeof === P)
          return oe(
            V,
            xo(V, q),
            Y
          );
        qo(V, q);
      }
      return null;
    }
    function J(V, q, Y, se) {
      var Se = q !== null ? q.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return Se !== null ? null : D(V, q, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case b:
            return Y.key === Se ? U(V, q, Y, se) : null;
          case _:
            return Y.key === Se ? X(V, q, Y, se) : null;
          case O:
            return Se = Y._init, Y = Se(Y._payload), J(V, q, Y, se);
        }
        if (Q(Y) || H(Y))
          return Se !== null ? null : re(V, q, Y, se, null);
        if (typeof Y.then == "function")
          return J(
            V,
            q,
            Ho(Y),
            se
          );
        if (Y.$$typeof === P)
          return J(
            V,
            q,
            xo(V, Y),
            se
          );
        qo(V, Y);
      }
      return null;
    }
    function W(V, q, Y, se, Se) {
      if (typeof se == "string" && se !== "" || typeof se == "number" || typeof se == "bigint")
        return V = V.get(Y) || null, D(q, V, "" + se, Se);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case b:
            return V = V.get(
              se.key === null ? Y : se.key
            ) || null, U(q, V, se, Se);
          case _:
            return V = V.get(
              se.key === null ? Y : se.key
            ) || null, X(q, V, se, Se);
          case O:
            var qe = se._init;
            return se = qe(se._payload), W(
              V,
              q,
              Y,
              se,
              Se
            );
        }
        if (Q(se) || H(se))
          return V = V.get(Y) || null, re(q, V, se, Se, null);
        if (typeof se.then == "function")
          return W(
            V,
            q,
            Y,
            Ho(se),
            Se
          );
        if (se.$$typeof === P)
          return W(
            V,
            q,
            Y,
            xo(q, se),
            Se
          );
        qo(q, se);
      }
      return null;
    }
    function Me(V, q, Y, se) {
      for (var Se = null, qe = null, Te = q, xe = q = 0, Lt = null; Te !== null && xe < Y.length; xe++) {
        Te.index > xe ? (Lt = Te, Te = null) : Lt = Te.sibling;
        var Qe = J(
          V,
          Te,
          Y[xe],
          se
        );
        if (Qe === null) {
          Te === null && (Te = Lt);
          break;
        }
        e && Te && Qe.alternate === null && t(V, Te), q = y(Qe, q, xe), qe === null ? Se = Qe : qe.sibling = Qe, qe = Qe, Te = Lt;
      }
      if (xe === Y.length)
        return i(V, Te), Ke && da(V, xe), Se;
      if (Te === null) {
        for (; xe < Y.length; xe++)
          Te = oe(V, Y[xe], se), Te !== null && (q = y(
            Te,
            q,
            xe
          ), qe === null ? Se = Te : qe.sibling = Te, qe = Te);
        return Ke && da(V, xe), Se;
      }
      for (Te = o(Te); xe < Y.length; xe++)
        Lt = W(
          Te,
          V,
          xe,
          Y[xe],
          se
        ), Lt !== null && (e && Lt.alternate !== null && Te.delete(
          Lt.key === null ? xe : Lt.key
        ), q = y(
          Lt,
          q,
          xe
        ), qe === null ? Se = Lt : qe.sibling = Lt, qe = Lt);
      return e && Te.forEach(function($r) {
        return t(V, $r);
      }), Ke && da(V, xe), Se;
    }
    function ke(V, q, Y, se) {
      if (Y == null) throw Error(a(151));
      for (var Se = null, qe = null, Te = q, xe = q = 0, Lt = null, Qe = Y.next(); Te !== null && !Qe.done; xe++, Qe = Y.next()) {
        Te.index > xe ? (Lt = Te, Te = null) : Lt = Te.sibling;
        var $r = J(V, Te, Qe.value, se);
        if ($r === null) {
          Te === null && (Te = Lt);
          break;
        }
        e && Te && $r.alternate === null && t(V, Te), q = y($r, q, xe), qe === null ? Se = $r : qe.sibling = $r, qe = $r, Te = Lt;
      }
      if (Qe.done)
        return i(V, Te), Ke && da(V, xe), Se;
      if (Te === null) {
        for (; !Qe.done; xe++, Qe = Y.next())
          Qe = oe(V, Qe.value, se), Qe !== null && (q = y(Qe, q, xe), qe === null ? Se = Qe : qe.sibling = Qe, qe = Qe);
        return Ke && da(V, xe), Se;
      }
      for (Te = o(Te); !Qe.done; xe++, Qe = Y.next())
        Qe = W(Te, V, xe, Qe.value, se), Qe !== null && (e && Qe.alternate !== null && Te.delete(Qe.key === null ? xe : Qe.key), q = y(Qe, q, xe), qe === null ? Se = Qe : qe.sibling = Qe, qe = Qe);
      return e && Te.forEach(function(H1) {
        return t(V, H1);
      }), Ke && da(V, xe), Se;
    }
    function rt(V, q, Y, se) {
      if (typeof Y == "object" && Y !== null && Y.type === p && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case b:
            e: {
              for (var Se = Y.key; q !== null; ) {
                if (q.key === Se) {
                  if (Se = Y.type, Se === p) {
                    if (q.tag === 7) {
                      i(
                        V,
                        q.sibling
                      ), se = d(
                        q,
                        Y.props.children
                      ), se.return = V, V = se;
                      break e;
                    }
                  } else if (q.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === O && nm(Se) === q.type) {
                    i(
                      V,
                      q.sibling
                    ), se = d(q, Y.props), ds(se, Y), se.return = V, V = se;
                    break e;
                  }
                  i(V, q);
                  break;
                } else t(V, q);
                q = q.sibling;
              }
              Y.type === p ? (se = la(
                Y.props.children,
                V.mode,
                se,
                Y.key
              ), se.return = V, V = se) : (se = Co(
                Y.type,
                Y.key,
                Y.props,
                null,
                V.mode,
                se
              ), ds(se, Y), se.return = V, V = se);
            }
            return x(V);
          case _:
            e: {
              for (Se = Y.key; q !== null; ) {
                if (q.key === Se)
                  if (q.tag === 4 && q.stateNode.containerInfo === Y.containerInfo && q.stateNode.implementation === Y.implementation) {
                    i(
                      V,
                      q.sibling
                    ), se = d(q, Y.children || []), se.return = V, V = se;
                    break e;
                  } else {
                    i(V, q);
                    break;
                  }
                else t(V, q);
                q = q.sibling;
              }
              se = dc(Y, V.mode, se), se.return = V, V = se;
            }
            return x(V);
          case O:
            return Se = Y._init, Y = Se(Y._payload), rt(
              V,
              q,
              Y,
              se
            );
        }
        if (Q(Y))
          return Me(
            V,
            q,
            Y,
            se
          );
        if (H(Y)) {
          if (Se = H(Y), typeof Se != "function") throw Error(a(150));
          return Y = Se.call(Y), ke(
            V,
            q,
            Y,
            se
          );
        }
        if (typeof Y.then == "function")
          return rt(
            V,
            q,
            Ho(Y),
            se
          );
        if (Y.$$typeof === P)
          return rt(
            V,
            q,
            xo(V, Y),
            se
          );
        qo(V, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint" ? (Y = "" + Y, q !== null && q.tag === 6 ? (i(V, q.sibling), se = d(q, Y), se.return = V, V = se) : (i(V, q), se = cc(Y, V.mode, se), se.return = V, V = se), x(V)) : i(V, q);
    }
    return function(V, q, Y, se) {
      try {
        cs = 0;
        var Se = rt(
          V,
          q,
          Y,
          se
        );
        return oi = null, Se;
      } catch (Te) {
        if (Te === ts || Te === Oo) throw Te;
        var qe = dn(29, Te, null, V.mode);
        return qe.lanes = se, qe.return = V, qe;
      } finally {
      }
    };
  }
  var ui = rm(!0), am = rm(!1), Mn = $(null), $n = null;
  function Mr(e) {
    var t = e.alternate;
    le(kt, kt.current & 1), le(Mn, e), $n === null && (t === null || ri.current !== null || t.memoizedState !== null) && ($n = e);
  }
  function im(e) {
    if (e.tag === 22) {
      if (le(kt, kt.current), le(Mn, e), $n === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && ($n = e);
      }
    } else Rr();
  }
  function Rr() {
    le(kt, kt.current), le(Mn, Mn.current);
  }
  function cr(e) {
    ne(Mn), $n === e && ($n = null), ne(kt);
  }
  var kt = $(0);
  function Go(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || jd(i)))
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
  function Zc(e, t, i, o) {
    t = e.memoizedState, i = i(o, t), i = i == null ? t : v({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var Vc = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var o = mn(), d = xr(o);
      d.payload = t, i != null && (d.callback = i), t = Nr(e, d, o), t !== null && (gn(t, e, o), rs(t, e, o));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var o = mn(), d = xr(o);
      d.tag = 1, d.payload = t, i != null && (d.callback = i), t = Nr(e, d, o), t !== null && (gn(t, e, o), rs(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = mn(), o = xr(i);
      o.tag = 2, t != null && (o.callback = t), t = Nr(e, o, i), t !== null && (gn(t, e, i), rs(t, e, i));
    }
  };
  function sm(e, t, i, o, d, y, x) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, y, x) : t.prototype && t.prototype.isPureReactComponent ? !Yi(i, o) || !Yi(d, y) : !0;
  }
  function om(e, t, i, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && Vc.enqueueReplaceState(t, t.state, null);
  }
  function ya(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var o in t)
        o !== "ref" && (i[o] = t[o]);
    }
    if (e = e.defaultProps) {
      i === t && (i = v({}, i));
      for (var d in e)
        i[d] === void 0 && (i[d] = e[d]);
    }
    return i;
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
  function um(e) {
    Zo(e);
  }
  function lm(e) {
    console.error(e);
  }
  function cm(e) {
    Zo(e);
  }
  function Vo(e, t) {
    try {
      var i = e.onUncaughtError;
      i(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function dm(e, t, i) {
    try {
      var o = e.onCaughtError;
      o(i.value, {
        componentStack: i.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (d) {
      setTimeout(function() {
        throw d;
      });
    }
  }
  function $c(e, t, i) {
    return i = xr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Vo(e, t);
    }, i;
  }
  function fm(e) {
    return e = xr(e), e.tag = 3, e;
  }
  function hm(e, t, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var y = o.value;
      e.payload = function() {
        return d(y);
      }, e.callback = function() {
        dm(t, i, o);
      };
    }
    var x = i.stateNode;
    x !== null && typeof x.componentDidCatch == "function" && (e.callback = function() {
      dm(t, i, o), typeof d != "function" && (Ir === null ? Ir = /* @__PURE__ */ new Set([this]) : Ir.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function Hb(e, t, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = i.alternate, t !== null && Ji(
        t,
        i,
        d,
        !0
      ), i = Mn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return $n === null ? gd() : i.alternate === null && vt === 0 && (vt = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === Sc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), yd(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === Sc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), yd(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return yd(e, o, d), gd(), !1;
    }
    if (Ke)
      return t = Mn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== pc && (e = Error(a(422), { cause: o }), Ki(kn(e, i)))) : (o !== pc && (t = Error(a(423), {
        cause: o
      }), Ki(
        kn(t, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = kn(o, i), d = $c(
        e.stateNode,
        o,
        d
      ), Cc(e, d), vt !== 4 && (vt = 2)), !1;
    var y = Error(a(520), { cause: o });
    if (y = kn(y, i), ys === null ? ys = [y] : ys.push(y), vt !== 4 && (vt = 2), t === null) return !0;
    o = kn(o, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = $c(i.stateNode, o, e), Cc(i, e), !1;
        case 1:
          if (t = i.type, y = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Ir === null || !Ir.has(y))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = fm(d), hm(
              d,
              e,
              i,
              o
            ), Cc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var pm = Error(a(461)), Rt = !1;
  function Pt(e, t, i, o) {
    t.child = e === null ? am(t, null, i, o) : ui(
      t,
      e.child,
      i,
      o
    );
  }
  function mm(e, t, i, o, d) {
    i = i.render;
    var y = t.ref;
    if ("ref" in o) {
      var x = {};
      for (var D in o)
        D !== "ref" && (x[D] = o[D]);
    } else x = o;
    return ma(t), o = Nc(
      e,
      t,
      i,
      x,
      y,
      d
    ), D = Oc(), e !== null && !Rt ? (Mc(e, t, d), dr(e, t, d)) : (Ke && D && fc(t), t.flags |= 1, Pt(e, t, o, d), t.child);
  }
  function gm(e, t, i, o, d) {
    if (e === null) {
      var y = i.type;
      return typeof y == "function" && !lc(y) && y.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = y, vm(
        e,
        t,
        y,
        o,
        d
      )) : (e = Co(
        i.type,
        null,
        o,
        t,
        t.mode,
        d
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (y = e.child, !ed(e, d)) {
      var x = y.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Yi, i(x, o) && e.ref === t.ref)
        return dr(e, t, d);
    }
    return t.flags |= 1, e = ar(y, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vm(e, t, i, o, d) {
    if (e !== null) {
      var y = e.memoizedProps;
      if (Yi(y, o) && e.ref === t.ref)
        if (Rt = !1, t.pendingProps = o = y, ed(e, d))
          (e.flags & 131072) !== 0 && (Rt = !0);
        else
          return t.lanes = e.lanes, dr(e, t, d);
    }
    return Yc(
      e,
      t,
      i,
      o,
      d
    );
  }
  function ym(e, t, i) {
    var o = t.pendingProps, d = o.children, y = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = y !== null ? y.baseLanes | i : i, e !== null) {
          for (d = t.child = e.child, y = 0; d !== null; )
            y = y | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = y & ~o;
        } else t.childLanes = 0, t.child = null;
        return _m(
          e,
          t,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && No(
          t,
          y !== null ? y.cachePool : null
        ), y !== null ? vp(t, y) : Tc(), im(t);
      else
        return t.lanes = t.childLanes = 536870912, _m(
          e,
          t,
          y !== null ? y.baseLanes | i : i,
          i
        );
    } else
      y !== null ? (No(t, y.cachePool), vp(t, y), Rr(), t.memoizedState = null) : (e !== null && No(t, null), Tc(), Rr());
    return Pt(e, t, d, i), t.child;
  }
  function _m(e, t, i, o) {
    var d = bc();
    return d = d === null ? null : { parent: Tt._currentValue, pool: d }, t.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && No(t, null), Tc(), im(t), e !== null && Ji(e, t, o, !0), null;
  }
  function $o(e, t) {
    var i = t.ref;
    if (i === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object")
        throw Error(a(284));
      (e === null || e.ref !== i) && (t.flags |= 4194816);
    }
  }
  function Yc(e, t, i, o, d) {
    return ma(t), i = Nc(
      e,
      t,
      i,
      o,
      void 0,
      d
    ), o = Oc(), e !== null && !Rt ? (Mc(e, t, d), dr(e, t, d)) : (Ke && o && fc(t), t.flags |= 1, Pt(e, t, i, d), t.child);
  }
  function bm(e, t, i, o, d, y) {
    return ma(t), t.updateQueue = null, i = _p(
      t,
      o,
      i,
      d
    ), yp(e), o = Oc(), e !== null && !Rt ? (Mc(e, t, y), dr(e, t, y)) : (Ke && o && fc(t), t.flags |= 1, Pt(e, t, i, y), t.child);
  }
  function Sm(e, t, i, o, d) {
    if (ma(t), t.stateNode === null) {
      var y = Ja, x = i.contextType;
      typeof x == "object" && x !== null && (y = Gt(x)), y = new i(o, y), t.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = Vc, t.stateNode = y, y._reactInternals = t, y = t.stateNode, y.props = o, y.state = t.memoizedState, y.refs = {}, wc(t), x = i.contextType, y.context = typeof x == "object" && x !== null ? Gt(x) : Ja, y.state = t.memoizedState, x = i.getDerivedStateFromProps, typeof x == "function" && (Zc(
        t,
        i,
        x,
        o
      ), y.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (x = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), x !== y.state && Vc.enqueueReplaceState(y, y.state, null), is(t, o, y, d), as(), y.state = t.memoizedState), typeof y.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      y = t.stateNode;
      var D = t.memoizedProps, U = ya(i, D);
      y.props = U;
      var X = y.context, re = i.contextType;
      x = Ja, typeof re == "object" && re !== null && (x = Gt(re));
      var oe = i.getDerivedStateFromProps;
      re = typeof oe == "function" || typeof y.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, re || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (D || X !== x) && om(
        t,
        y,
        o,
        x
      ), kr = !1;
      var J = t.memoizedState;
      y.state = J, is(t, o, y, d), as(), X = t.memoizedState, D || J !== X || kr ? (typeof oe == "function" && (Zc(
        t,
        i,
        oe,
        o
      ), X = t.memoizedState), (U = kr || sm(
        t,
        i,
        U,
        o,
        J,
        X,
        x
      )) ? (re || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = X), y.props = o, y.state = X, y.context = x, o = U) : (typeof y.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      y = t.stateNode, Ec(e, t), x = t.memoizedProps, re = ya(i, x), y.props = re, oe = t.pendingProps, J = y.context, X = i.contextType, U = Ja, typeof X == "object" && X !== null && (U = Gt(X)), D = i.getDerivedStateFromProps, (X = typeof D == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (x !== oe || J !== U) && om(
        t,
        y,
        o,
        U
      ), kr = !1, J = t.memoizedState, y.state = J, is(t, o, y, d), as();
      var W = t.memoizedState;
      x !== oe || J !== W || kr || e !== null && e.dependencies !== null && ko(e.dependencies) ? (typeof D == "function" && (Zc(
        t,
        i,
        D,
        o
      ), W = t.memoizedState), (re = kr || sm(
        t,
        i,
        re,
        o,
        J,
        W,
        U
      ) || e !== null && e.dependencies !== null && ko(e.dependencies)) ? (X || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(o, W, U), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        o,
        W,
        U
      )), typeof y.componentDidUpdate == "function" && (t.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || x === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = W), y.props = o, y.state = W, y.context = U, o = re) : (typeof y.componentDidUpdate != "function" || x === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return y = o, $o(e, t), o = (t.flags & 128) !== 0, y || o ? (y = t.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : y.render(), t.flags |= 1, e !== null && o ? (t.child = ui(
      t,
      e.child,
      null,
      d
    ), t.child = ui(
      t,
      null,
      i,
      d
    )) : Pt(e, t, i, d), t.memoizedState = y.state, e = t.child) : e = dr(
      e,
      t,
      d
    ), e;
  }
  function wm(e, t, i, o) {
    return Qi(), t.flags |= 256, Pt(e, t, i, o), t.child;
  }
  var Fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xc(e) {
    return { baseLanes: e, cachePool: lp() };
  }
  function Qc(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= Rn), e;
  }
  function Em(e, t, i) {
    var o = t.pendingProps, d = !1, y = (t.flags & 128) !== 0, x;
    if ((x = y) || (x = e !== null && e.memoizedState === null ? !1 : (kt.current & 2) !== 0), x && (d = !0, t.flags &= -129), x = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ke) {
        if (d ? Mr(t) : Rr(), Ke) {
          var D = gt, U;
          if (U = D) {
            e: {
              for (U = D, D = Vn; U.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (U = In(
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
              treeContext: ca !== null ? { id: ir, overflow: sr } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, U = dn(
              18,
              null,
              null,
              0
            ), U.stateNode = D, U.return = t, t.child = U, Ft = t, gt = null, U = !0) : U = !1;
          }
          U || ha(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return jd(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        cr(t);
      }
      return D = o.children, o = o.fallback, d ? (Rr(), d = t.mode, D = Yo(
        { mode: "hidden", children: D },
        d
      ), o = la(
        o,
        d,
        i,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = Xc(i), d.childLanes = Qc(
        e,
        x,
        i
      ), t.memoizedState = Fc, o) : (Mr(t), Kc(t, D));
    }
    if (U = e.memoizedState, U !== null && (D = U.dehydrated, D !== null)) {
      if (y)
        t.flags & 256 ? (Mr(t), t.flags &= -257, t = Jc(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Rr(), t.child = e.child, t.flags |= 128, t = null) : (Rr(), d = o.fallback, D = t.mode, o = Yo(
          { mode: "visible", children: o.children },
          D
        ), d = la(
          d,
          D,
          i,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, ui(
          t,
          e.child,
          null,
          i
        ), o = t.child, o.memoizedState = Xc(i), o.childLanes = Qc(
          e,
          x,
          i
        ), t.memoizedState = Fc, t = d);
      else if (Mr(t), jd(D)) {
        if (x = D.nextSibling && D.nextSibling.dataset, x) var X = x.dgst;
        x = X, o = Error(a(419)), o.stack = "", o.digest = x, Ki({ value: o, source: null, stack: null }), t = Jc(
          e,
          t,
          i
        );
      } else if (Rt || Ji(e, t, i, !1), x = (i & e.childLanes) !== 0, Rt || x) {
        if (x = it, x !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Ll(o), o = (o & (x.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
          throw U.retryLane = o, Ka(e, o), gn(x, e, o), pm;
        D.data === "$?" || gd(), t = Jc(
          e,
          t,
          i
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, gt = In(
          D.nextSibling
        ), Ft = t, Ke = !0, fa = null, Vn = !1, e !== null && (Nn[On++] = ir, Nn[On++] = sr, Nn[On++] = ca, ir = e.id, sr = e.overflow, ca = t), t = Kc(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (Rr(), d = o.fallback, D = t.mode, U = e.child, X = U.sibling, o = ar(U, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = U.subtreeFlags & 65011712, X !== null ? d = ar(X, d) : (d = la(
      d,
      D,
      i,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = Xc(i) : (U = D.cachePool, U !== null ? (X = Tt._currentValue, U = U.parent !== X ? { parent: X, pool: X } : U) : U = lp(), D = {
      baseLanes: D.baseLanes | i,
      cachePool: U
    }), d.memoizedState = D, d.childLanes = Qc(
      e,
      x,
      i
    ), t.memoizedState = Fc, o) : (Mr(t), i = e.child, e = i.sibling, i = ar(i, {
      mode: "visible",
      children: o.children
    }), i.return = t, i.sibling = null, e !== null && (x = t.deletions, x === null ? (t.deletions = [e], t.flags |= 16) : x.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function Kc(e, t) {
    return t = Yo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Yo(e, t) {
    return e = dn(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Jc(e, t, i) {
    return ui(t, e.child, null, i), e = Kc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Cm(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), gc(e.return, t, i);
  }
  function Wc(e, t, i, o, d) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: d
    } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = o, y.tail = i, y.tailMode = d);
  }
  function Am(e, t, i) {
    var o = t.pendingProps, d = o.revealOrder, y = o.tail;
    if (Pt(e, t, o.children, i), o = kt.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Cm(e, i, t);
          else if (e.tag === 19)
            Cm(e, i, t);
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
    switch (le(kt, o), d) {
      case "forwards":
        for (i = t.child, d = null; i !== null; )
          e = i.alternate, e !== null && Go(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = t.child, t.child = null) : (d = i.sibling, i.sibling = null), Wc(
          t,
          !1,
          d,
          i,
          y
        );
        break;
      case "backwards":
        for (i = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Go(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        Wc(
          t,
          !0,
          i,
          null,
          y
        );
        break;
      case "together":
        Wc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function dr(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Pr |= t.lanes, (i & t.childLanes) === 0)
      if (e !== null) {
        if (Ji(
          e,
          t,
          i,
          !1
        ), (i & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, i = ar(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; )
        e = e.sibling, i = i.sibling = ar(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function ed(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ko(e)));
  }
  function qb(e, t, i) {
    switch (t.tag) {
      case 3:
        be(t, t.stateNode.containerInfo), Tr(t, Tt, e.memoizedState.cache), Qi();
        break;
      case 27:
      case 5:
        Ge(t);
        break;
      case 4:
        be(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tr(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Mr(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Em(e, t, i) : (Mr(t), e = dr(
            e,
            t,
            i
          ), e !== null ? e.sibling : null);
        Mr(t);
        break;
      case 19:
        var d = (e.flags & 128) !== 0;
        if (o = (i & t.childLanes) !== 0, o || (Ji(
          e,
          t,
          i,
          !1
        ), o = (i & t.childLanes) !== 0), d) {
          if (o)
            return Am(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), le(kt, kt.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ym(e, t, i);
      case 24:
        Tr(t, Tt, e.memoizedState.cache);
    }
    return dr(e, t, i);
  }
  function Tm(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Rt = !0;
      else {
        if (!ed(e, i) && (t.flags & 128) === 0)
          return Rt = !1, qb(
            e,
            t,
            i
          );
        Rt = (e.flags & 131072) !== 0;
      }
    else
      Rt = !1, Ke && (t.flags & 1048576) !== 0 && np(t, To, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            lc(o) ? (e = ya(o, e), t.tag = 1, t = Sm(
              null,
              t,
              o,
              e,
              i
            )) : (t.tag = 0, t = Yc(
              null,
              t,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = mm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === A) {
                t.tag = 14, t = gm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw t = G(o) || o, Error(a(306, t, ""));
          }
        }
        return t;
      case 0:
        return Yc(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return o = t.type, d = ya(
          o,
          t.pendingProps
        ), Sm(
          e,
          t,
          o,
          d,
          i
        );
      case 3:
        e: {
          if (be(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = t.pendingProps;
          var y = t.memoizedState;
          d = y.element, Ec(e, t), is(t, o, null, i);
          var x = t.memoizedState;
          if (o = x.cache, Tr(t, Tt, o), o !== y.cache && vc(
            t,
            [Tt],
            i,
            !0
          ), as(), o = x.element, y.isDehydrated)
            if (y = {
              element: o,
              isDehydrated: !1,
              cache: x.cache
            }, t.updateQueue.baseState = y, t.memoizedState = y, t.flags & 256) {
              t = wm(
                e,
                t,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = kn(
                Error(a(424)),
                t
              ), Ki(d), t = wm(
                e,
                t,
                o,
                i
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
              for (gt = In(e.firstChild), Ft = t, Ke = !0, fa = null, Vn = !0, i = am(
                t,
                null,
                o,
                i
              ), t.child = i; i; )
                i.flags = i.flags & -3 | 4096, i = i.sibling;
            }
          else {
            if (Qi(), o === d) {
              t = dr(
                e,
                t,
                i
              );
              break e;
            }
            Pt(
              e,
              t,
              o,
              i
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return $o(e, t), e === null ? (i = Og(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : Ke || (i = t.type, e = t.pendingProps, o = ou(
          ee.current
        ).createElement(i), o[qt] = t, o[Wt] = e, Bt(o, i, e), Mt(o), t.stateNode = o) : t.memoizedState = Og(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ge(t), e === null && Ke && (o = t.stateNode = kg(
          t.type,
          t.pendingProps,
          ee.current
        ), Ft = t, Vn = !0, d = gt, Hr(t.type) ? (Ld = d, gt = In(
          o.firstChild
        )) : gt = d), Pt(
          e,
          t,
          t.pendingProps.children,
          i
        ), $o(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ke && ((d = o = gt) && (o = g1(
          o,
          t.type,
          t.pendingProps,
          Vn
        ), o !== null ? (t.stateNode = o, Ft = t, gt = In(
          o.firstChild
        ), Vn = !1, d = !0) : d = !1), d || ha(t)), Ge(t), d = t.type, y = t.pendingProps, x = e !== null ? e.memoizedProps : null, o = y.children, Od(d, y) ? o = null : x !== null && Od(d, x) && (t.flags |= 32), t.memoizedState !== null && (d = Nc(
          e,
          t,
          Lb,
          null,
          null,
          i
        ), ks._currentValue = d), $o(e, t), Pt(e, t, o, i), t.child;
      case 6:
        return e === null && Ke && ((e = i = gt) && (i = v1(
          i,
          t.pendingProps,
          Vn
        ), i !== null ? (t.stateNode = i, Ft = t, gt = null, e = !0) : e = !1), e || ha(t)), null;
      case 13:
        return Em(e, t, i);
      case 4:
        return be(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = ui(
          t,
          null,
          o,
          i
        ) : Pt(
          e,
          t,
          o,
          i
        ), t.child;
      case 11:
        return mm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 7:
        return Pt(
          e,
          t,
          t.pendingProps,
          i
        ), t.child;
      case 8:
        return Pt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 12:
        return Pt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 10:
        return o = t.pendingProps, Tr(t, t.type, o.value), Pt(
          e,
          t,
          o.children,
          i
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, ma(t), d = Gt(d), o = o(d), t.flags |= 1, Pt(e, t, o, i), t.child;
      case 14:
        return gm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return vm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return Am(e, t, i);
      case 31:
        return o = t.pendingProps, i = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Yo(
          o,
          i
        ), i.ref = t.ref, t.child = i, i.return = t, t = i) : (i = ar(e.child, o), i.ref = t.ref, t.child = i, i.return = t, t = i), t;
      case 22:
        return ym(e, t, i);
      case 24:
        return ma(t), o = Gt(Tt), e === null ? (d = bc(), d === null && (d = it, y = yc(), d.pooledCache = y, y.refCount++, y !== null && (d.pooledCacheLanes |= i), d = y), t.memoizedState = {
          parent: o,
          cache: d
        }, wc(t), Tr(t, Tt, d)) : ((e.lanes & i) !== 0 && (Ec(e, t), is(t, null, null, i), as()), d = e.memoizedState, y = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Tr(t, Tt, o)) : (o = y.cache, Tr(t, Tt, o), o !== d.cache && vc(
          t,
          [Tt],
          i,
          !0
        ))), Pt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(a(156, t.tag));
  }
  function fr(e) {
    e.flags |= 4;
  }
  function km(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Dg(t)) {
      if (t = Mn.current, t !== null && ((Xe & 4194048) === Xe ? $n !== null : (Xe & 62914560) !== Xe && (Xe & 536870912) === 0 || t !== $n))
        throw ns = Sc, cp;
      e.flags |= 8192;
    }
  }
  function Fo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ih() : 536870912, e.lanes |= t, fi |= t);
  }
  function fs(e, t) {
    if (!Ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var i = null; t !== null; )
            t.alternate !== null && (i = t), t = t.sibling;
          i === null ? e.tail = null : i.sibling = null;
          break;
        case "collapsed":
          i = e.tail;
          for (var o = null; i !== null; )
            i.alternate !== null && (o = i), i = i.sibling;
          o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, t;
  }
  function Gb(e, t, i) {
    var o = t.pendingProps;
    switch (hc(t), t.tag) {
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
        return ht(t), null;
      case 1:
        return ht(t), null;
      case 3:
        return i = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), ur(Tt), $e(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? fr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ip())), ht(t), null;
      case 26:
        return i = t.memoizedState, e === null ? (fr(t), i !== null ? (ht(t), km(t, i)) : (ht(t), t.flags &= -16777217)) : i ? i !== e.memoizedState ? (fr(t), ht(t), km(t, i)) : (ht(t), t.flags &= -16777217) : (e.memoizedProps !== o && fr(t), ht(t), t.flags &= -16777217), null;
      case 27:
        F(t), i = ee.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ht(t), null;
          }
          e = fe.current, Xi(t) ? rp(t) : (e = kg(d, o, i), t.stateNode = e, fr(t));
        }
        return ht(t), null;
      case 5:
        if (F(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ht(t), null;
          }
          if (e = fe.current, Xi(t))
            rp(t);
          else {
            switch (d = ou(
              ee.current
            ), e) {
              case 1:
                e = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                e = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    e = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    e = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    e = d.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof o.is == "string" ? d.createElement("select", { is: o.is }) : d.createElement("select"), o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                    break;
                  default:
                    e = typeof o.is == "string" ? d.createElement(i, { is: o.is }) : d.createElement(i);
                }
            }
            e[qt] = t, e[Wt] = o;
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
            e: switch (Bt(e, i, o), i) {
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
        return ht(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(a(166));
          if (e = ee.current, Xi(t)) {
            if (e = t.stateNode, i = t.memoizedProps, o = null, d = Ft, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[qt] = t, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || bg(e.nodeValue, i)), e || ha(t);
          } else
            e = ou(e).createTextNode(
              o
            ), e[qt] = t, t.stateNode = e;
        }
        return ht(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Xi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[qt] = t;
            } else
              Qi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ht(t), d = !1;
          } else
            d = ip(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (cr(t), t) : (cr(t), null);
        }
        if (cr(t), (t.flags & 128) !== 0)
          return t.lanes = i, t;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var y = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (y = o.memoizedState.cachePool.pool), y !== d && (o.flags |= 2048);
        }
        return i !== e && i && (t.child.flags |= 8192), Fo(t, t.updateQueue), ht(t), null;
      case 4:
        return $e(), e === null && Ad(t.stateNode.containerInfo), ht(t), null;
      case 10:
        return ur(t.type), ht(t), null;
      case 19:
        if (ne(kt), d = t.memoizedState, d === null) return ht(t), null;
        if (o = (t.flags & 128) !== 0, y = d.rendering, y === null)
          if (o) fs(d, !1);
          else {
            if (vt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (y = Go(e), y !== null) {
                  for (t.flags |= 128, fs(d, !1), e = y.updateQueue, t.updateQueue = e, Fo(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    tp(i, e), i = i.sibling;
                  return le(
                    kt,
                    kt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && Ne() > Ko && (t.flags |= 128, o = !0, fs(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Go(y), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Fo(t, e), fs(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !Ke)
                return ht(t), null;
            } else
              2 * Ne() - d.renderingStartTime > Ko && i !== 536870912 && (t.flags |= 128, o = !0, fs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (y.sibling = t.child, t.child = y) : (e = d.last, e !== null ? e.sibling = y : t.child = y, d.last = y);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = Ne(), t.sibling = null, e = kt.current, le(kt, o ? e & 1 | 2 : e & 1), t) : (ht(t), null);
      case 22:
      case 23:
        return cr(t), kc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ht(t), i = t.updateQueue, i !== null && Fo(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== i && (t.flags |= 2048), e !== null && ne(ga), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), ur(Tt), ht(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Zb(e, t) {
    switch (hc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(Tt), $e(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return F(t), null;
      case 13:
        if (cr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(a(340));
          Qi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ne(kt), null;
      case 4:
        return $e(), null;
      case 10:
        return ur(t.type), null;
      case 22:
      case 23:
        return cr(t), kc(), e !== null && ne(ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ur(Tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xm(e, t) {
    switch (hc(t), t.tag) {
      case 3:
        ur(Tt), $e();
        break;
      case 26:
      case 27:
      case 5:
        F(t);
        break;
      case 4:
        $e();
        break;
      case 13:
        cr(t);
        break;
      case 19:
        ne(kt);
        break;
      case 10:
        ur(t.type);
        break;
      case 22:
      case 23:
        cr(t), kc(), e !== null && ne(ga);
        break;
      case 24:
        ur(Tt);
    }
  }
  function hs(e, t) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var d = o.next;
        i = d;
        do {
          if ((i.tag & e) === e) {
            o = void 0;
            var y = i.create, x = i.inst;
            o = y(), x.destroy = o;
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (D) {
      at(t, t.return, D);
    }
  }
  function jr(e, t, i) {
    try {
      var o = t.updateQueue, d = o !== null ? o.lastEffect : null;
      if (d !== null) {
        var y = d.next;
        o = y;
        do {
          if ((o.tag & e) === e) {
            var x = o.inst, D = x.destroy;
            if (D !== void 0) {
              x.destroy = void 0, d = t;
              var U = i, X = D;
              try {
                X();
              } catch (re) {
                at(
                  d,
                  U,
                  re
                );
              }
            }
          }
          o = o.next;
        } while (o !== y);
      }
    } catch (re) {
      at(t, t.return, re);
    }
  }
  function Nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        gp(t, i);
      } catch (o) {
        at(e, e.return, o);
      }
    }
  }
  function Om(e, t, i) {
    i.props = ya(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      at(e, t, o);
    }
  }
  function ps(e, t) {
    try {
      var i = e.ref;
      if (i !== null) {
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
        typeof i == "function" ? e.refCleanup = i(o) : i.current = o;
      }
    } catch (d) {
      at(e, t, d);
    }
  }
  function Yn(e, t) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          at(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (d) {
          at(e, t, d);
        }
      else i.current = null;
  }
  function Mm(e) {
    var t = e.type, i = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && o.focus();
          break e;
        case "img":
          i.src ? o.src = i.src : i.srcSet && (o.srcset = i.srcSet);
      }
    } catch (d) {
      at(e, e.return, d);
    }
  }
  function td(e, t, i) {
    try {
      var o = e.stateNode;
      d1(o, e.type, i, t), o[Wt] = t;
    } catch (d) {
      at(e, e.return, d);
    }
  }
  function Rm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hr(e.type) || e.tag === 4;
  }
  function nd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rd(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = su));
    else if (o !== 4 && (o === 27 && Hr(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (rd(e, t, i), e = e.sibling; e !== null; )
        rd(e, t, i), e = e.sibling;
  }
  function Xo(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Hr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Xo(e, t, i), e = e.sibling; e !== null; )
        Xo(e, t, i), e = e.sibling;
  }
  function jm(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      Bt(t, o, i), t[qt] = e, t[Wt] = i;
    } catch (y) {
      at(e, e.return, y);
    }
  }
  var hr = !1, bt = !1, ad = !1, Lm = typeof WeakSet == "function" ? WeakSet : Set, jt = null;
  function Vb(e, t) {
    if (e = e.containerInfo, xd = hu, e = Vh(e), nc(e)) {
      if ("selectionStart" in e)
        var i = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          i = (i = e.ownerDocument) && i.defaultView || window;
          var o = i.getSelection && i.getSelection();
          if (o && o.rangeCount !== 0) {
            i = o.anchorNode;
            var d = o.anchorOffset, y = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, y.nodeType;
            } catch {
              i = null;
              break e;
            }
            var x = 0, D = -1, U = -1, X = 0, re = 0, oe = e, J = null;
            t: for (; ; ) {
              for (var W; oe !== i || d !== 0 && oe.nodeType !== 3 || (D = x + d), oe !== y || o !== 0 && oe.nodeType !== 3 || (U = x + o), oe.nodeType === 3 && (x += oe.nodeValue.length), (W = oe.firstChild) !== null; )
                J = oe, oe = W;
              for (; ; ) {
                if (oe === e) break t;
                if (J === i && ++X === d && (D = x), J === y && ++re === o && (U = x), (W = oe.nextSibling) !== null) break;
                oe = J, J = oe.parentNode;
              }
              oe = W;
            }
            i = D === -1 || U === -1 ? null : { start: D, end: U };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Nd = { focusedElem: e, selectionRange: i }, hu = !1, jt = t; jt !== null; )
      if (t = jt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, jt = e;
      else
        for (; jt !== null; ) {
          switch (t = jt, y = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && y !== null) {
                e = void 0, i = t, d = y.memoizedProps, y = y.memoizedState, o = i.stateNode;
                try {
                  var Me = ya(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Me,
                    y
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ke) {
                  at(
                    i,
                    i.return,
                    ke
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Rd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rd(e);
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
              if ((e & 1024) !== 0) throw Error(a(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, jt = e;
            break;
          }
          jt = t.return;
        }
  }
  function Dm(e, t, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Lr(e, i), o & 4 && hs(5, i);
        break;
      case 1:
        if (Lr(e, i), o & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (x) {
              at(i, i.return, x);
            }
          else {
            var d = ya(
              i.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                d,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (x) {
              at(
                i,
                i.return,
                x
              );
            }
          }
        o & 64 && Nm(i), o & 512 && ps(i, i.return);
        break;
      case 3:
        if (Lr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
          if (t = null, i.child !== null)
            switch (i.child.tag) {
              case 27:
              case 5:
                t = i.child.stateNode;
                break;
              case 1:
                t = i.child.stateNode;
            }
          try {
            gp(e, t);
          } catch (x) {
            at(i, i.return, x);
          }
        }
        break;
      case 27:
        t === null && o & 4 && jm(i);
      case 26:
      case 5:
        Lr(e, i), t === null && o & 4 && Mm(i), o & 512 && ps(i, i.return);
        break;
      case 12:
        Lr(e, i);
        break;
      case 13:
        Lr(e, i), o & 4 && Im(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = e1.bind(
          null,
          i
        ), y1(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || hr, !o) {
          t = t !== null && t.memoizedState !== null || bt, d = hr;
          var y = bt;
          hr = o, (bt = t) && !y ? Dr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Lr(e, i), hr = d, bt = y;
        }
        break;
      case 30:
        break;
      default:
        Lr(e, i);
    }
  }
  function zm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var lt = null, nn = !1;
  function pr(e, t, i) {
    for (i = i.child; i !== null; )
      Pm(e, t, i), i = i.sibling;
  }
  function Pm(e, t, i) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Ot, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        bt || Yn(i, t), pr(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        bt || Yn(i, t);
        var o = lt, d = nn;
        Hr(i.type) && (lt = i.stateNode, nn = !1), pr(
          e,
          t,
          i
        ), Es(i.stateNode), lt = o, nn = d;
        break;
      case 5:
        bt || Yn(i, t);
      case 6:
        if (o = lt, d = nn, lt = null, pr(
          e,
          t,
          i
        ), lt = o, nn = d, lt !== null)
          if (nn)
            try {
              (lt.nodeType === 9 ? lt.body : lt.nodeName === "HTML" ? lt.ownerDocument.body : lt).removeChild(i.stateNode);
            } catch (y) {
              at(
                i,
                t,
                y
              );
            }
          else
            try {
              lt.removeChild(i.stateNode);
            } catch (y) {
              at(
                i,
                t,
                y
              );
            }
        break;
      case 18:
        lt !== null && (nn ? (e = lt, Ag(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ms(e)) : Ag(lt, i.stateNode));
        break;
      case 4:
        o = lt, d = nn, lt = i.stateNode.containerInfo, nn = !0, pr(
          e,
          t,
          i
        ), lt = o, nn = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bt || jr(2, i, t), bt || jr(4, i, t), pr(
          e,
          t,
          i
        );
        break;
      case 1:
        bt || (Yn(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function" && Om(
          i,
          t,
          o
        )), pr(
          e,
          t,
          i
        );
        break;
      case 21:
        pr(
          e,
          t,
          i
        );
        break;
      case 22:
        bt = (o = bt) || i.memoizedState !== null, pr(
          e,
          t,
          i
        ), bt = o;
        break;
      default:
        pr(
          e,
          t,
          i
        );
    }
  }
  function Im(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ms(e);
      } catch (i) {
        at(t, t.return, i);
      }
  }
  function $b(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Lm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lm()), t;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function id(e, t) {
    var i = $b(e);
    t.forEach(function(o) {
      var d = t1.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function fn(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var d = i[o], y = e, x = t, D = x;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Hr(D.type)) {
                lt = D.stateNode, nn = !1;
                break e;
              }
              break;
            case 5:
              lt = D.stateNode, nn = !1;
              break e;
            case 3:
            case 4:
              lt = D.stateNode.containerInfo, nn = !0;
              break e;
          }
          D = D.return;
        }
        if (lt === null) throw Error(a(160));
        Pm(y, x, d), lt = null, nn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Bm(t, e), t = t.sibling;
  }
  var Pn = null;
  function Bm(e, t) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fn(t, e), hn(e), o & 4 && (jr(3, e, e.return), hs(3, e), jr(5, e, e.return));
        break;
      case 1:
        fn(t, e), hn(e), o & 512 && (bt || i === null || Yn(i, i.return)), o & 64 && hr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = Pn;
        if (fn(t, e), hn(e), o & 512 && (bt || i === null || Yn(i, i.return)), o & 4) {
          var y = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      y = d.getElementsByTagName("title")[0], (!y || y[Ii] || y[qt] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = d.createElement(o), d.head.insertBefore(
                        y,
                        d.querySelector("head > title")
                      )), Bt(y, o, i), y[qt] = e, Mt(y), o = y;
                      break e;
                    case "link":
                      var x = jg(
                        "link",
                        "href",
                        d
                      ).get(o + (i.href || ""));
                      if (x) {
                        for (var D = 0; D < x.length; D++)
                          if (y = x[D], y.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && y.getAttribute("rel") === (i.rel == null ? null : i.rel) && y.getAttribute("title") === (i.title == null ? null : i.title) && y.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            x.splice(D, 1);
                            break t;
                          }
                      }
                      y = d.createElement(o), Bt(y, o, i), d.head.appendChild(y);
                      break;
                    case "meta":
                      if (x = jg(
                        "meta",
                        "content",
                        d
                      ).get(o + (i.content || ""))) {
                        for (D = 0; D < x.length; D++)
                          if (y = x[D], y.getAttribute("content") === (i.content == null ? null : "" + i.content) && y.getAttribute("name") === (i.name == null ? null : i.name) && y.getAttribute("property") === (i.property == null ? null : i.property) && y.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && y.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            x.splice(D, 1);
                            break t;
                          }
                      }
                      y = d.createElement(o), Bt(y, o, i), d.head.appendChild(y);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  y[qt] = e, Mt(y), o = y;
                }
                e.stateNode = o;
              } else
                Lg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rg(
                d,
                o,
                e.memoizedProps
              );
          else
            y !== o ? (y === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : y.count--, o === null ? Lg(
              d,
              e.type,
              e.stateNode
            ) : Rg(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && td(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        fn(t, e), hn(e), o & 512 && (bt || i === null || Yn(i, i.return)), i !== null && o & 4 && td(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (fn(t, e), hn(e), o & 512 && (bt || i === null || Yn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Za(d, "");
          } catch (W) {
            at(e, e.return, W);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, td(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (ad = !0);
        break;
      case 6:
        if (fn(t, e), hn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (W) {
            at(e, e.return, W);
          }
        }
        break;
      case 3:
        if (cu = null, d = Pn, Pn = uu(t.containerInfo), fn(t, e), Pn = d, hn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ms(t.containerInfo);
          } catch (W) {
            at(e, e.return, W);
          }
        ad && (ad = !1, Um(e));
        break;
      case 4:
        o = Pn, Pn = uu(
          e.stateNode.containerInfo
        ), fn(t, e), hn(e), Pn = o;
        break;
      case 12:
        fn(t, e), hn(e);
        break;
      case 13:
        fn(t, e), hn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (dd = Ne()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, id(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var U = i !== null && i.memoizedState !== null, X = hr, re = bt;
        if (hr = X || d, bt = re || U, fn(t, e), bt = re, hr = X, hn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (i === null || U || hr || bt || _a(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                U = i = t;
                try {
                  if (y = U.stateNode, d)
                    x = y.style, typeof x.setProperty == "function" ? x.setProperty("display", "none", "important") : x.display = "none";
                  else {
                    D = U.stateNode;
                    var oe = U.memoizedProps.style, J = oe != null && oe.hasOwnProperty("display") ? oe.display : null;
                    D.style.display = J == null || typeof J == "boolean" ? "" : ("" + J).trim();
                  }
                } catch (W) {
                  at(U, U.return, W);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = d ? "" : U.memoizedProps;
                } catch (W) {
                  at(U, U.return, W);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              i === t && (i = null), t = t.return;
            }
            i === t && (i = null), t.sibling.return = t.return, t = t.sibling;
          }
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, id(e, i))));
        break;
      case 19:
        fn(t, e), hn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, id(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fn(t, e), hn(e);
    }
  }
  function hn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var i, o = e.return; o !== null; ) {
          if (Rm(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, y = nd(e);
            Xo(e, y, d);
            break;
          case 5:
            var x = i.stateNode;
            i.flags & 32 && (Za(x, ""), i.flags &= -33);
            var D = nd(e);
            Xo(e, D, x);
            break;
          case 3:
          case 4:
            var U = i.stateNode.containerInfo, X = nd(e);
            rd(
              e,
              X,
              U
            );
            break;
          default:
            throw Error(a(161));
        }
      } catch (re) {
        at(e, e.return, re);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Um(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Um(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Lr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Dm(e, t.alternate, t), t = t.sibling;
  }
  function _a(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jr(4, t, t.return), _a(t);
          break;
        case 1:
          Yn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && Om(
            t,
            t.return,
            i
          ), _a(t);
          break;
        case 27:
          Es(t.stateNode);
        case 26:
        case 5:
          Yn(t, t.return), _a(t);
          break;
        case 22:
          t.memoizedState === null && _a(t);
          break;
        case 30:
          _a(t);
          break;
        default:
          _a(t);
      }
      e = e.sibling;
    }
  }
  function Dr(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, y = t, x = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Dr(
            d,
            y,
            i
          ), hs(4, y);
          break;
        case 1:
          if (Dr(
            d,
            y,
            i
          ), o = y, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (X) {
              at(o, o.return, X);
            }
          if (o = y, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var U = d.shared.hiddenCallbacks;
              if (U !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < U.length; d++)
                  mp(U[d], D);
            } catch (X) {
              at(o, o.return, X);
            }
          }
          i && x & 64 && Nm(y), ps(y, y.return);
          break;
        case 27:
          jm(y);
        case 26:
        case 5:
          Dr(
            d,
            y,
            i
          ), i && o === null && x & 4 && Mm(y), ps(y, y.return);
          break;
        case 12:
          Dr(
            d,
            y,
            i
          );
          break;
        case 13:
          Dr(
            d,
            y,
            i
          ), i && x & 4 && Im(d, y);
          break;
        case 22:
          y.memoizedState === null && Dr(
            d,
            y,
            i
          ), ps(y, y.return);
          break;
        case 30:
          break;
        default:
          Dr(
            d,
            y,
            i
          );
      }
      t = t.sibling;
    }
  }
  function sd(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && Wi(i));
  }
  function od(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e));
  }
  function Fn(e, t, i, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Hm(
          e,
          t,
          i,
          o
        ), t = t.sibling;
  }
  function Hm(e, t, i, o) {
    var d = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Fn(
          e,
          t,
          i,
          o
        ), d & 2048 && hs(9, t);
        break;
      case 1:
        Fn(
          e,
          t,
          i,
          o
        );
        break;
      case 3:
        Fn(
          e,
          t,
          i,
          o
        ), d & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e)));
        break;
      case 12:
        if (d & 2048) {
          Fn(
            e,
            t,
            i,
            o
          ), e = t.stateNode;
          try {
            var y = t.memoizedProps, x = y.id, D = y.onPostCommit;
            typeof D == "function" && D(
              x,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (U) {
            at(t, t.return, U);
          }
        } else
          Fn(
            e,
            t,
            i,
            o
          );
        break;
      case 13:
        Fn(
          e,
          t,
          i,
          o
        );
        break;
      case 23:
        break;
      case 22:
        y = t.stateNode, x = t.alternate, t.memoizedState !== null ? y._visibility & 2 ? Fn(
          e,
          t,
          i,
          o
        ) : ms(e, t) : y._visibility & 2 ? Fn(
          e,
          t,
          i,
          o
        ) : (y._visibility |= 2, li(
          e,
          t,
          i,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && sd(x, t);
        break;
      case 24:
        Fn(
          e,
          t,
          i,
          o
        ), d & 2048 && od(t.alternate, t);
        break;
      default:
        Fn(
          e,
          t,
          i,
          o
        );
    }
  }
  function li(e, t, i, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var y = e, x = t, D = i, U = o, X = x.flags;
      switch (x.tag) {
        case 0:
        case 11:
        case 15:
          li(
            y,
            x,
            D,
            U,
            d
          ), hs(8, x);
          break;
        case 23:
          break;
        case 22:
          var re = x.stateNode;
          x.memoizedState !== null ? re._visibility & 2 ? li(
            y,
            x,
            D,
            U,
            d
          ) : ms(
            y,
            x
          ) : (re._visibility |= 2, li(
            y,
            x,
            D,
            U,
            d
          )), d && X & 2048 && sd(
            x.alternate,
            x
          );
          break;
        case 24:
          li(
            y,
            x,
            D,
            U,
            d
          ), d && X & 2048 && od(x.alternate, x);
          break;
        default:
          li(
            y,
            x,
            D,
            U,
            d
          );
      }
      t = t.sibling;
    }
  }
  function ms(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            ms(i, o), d & 2048 && sd(
              o.alternate,
              o
            );
            break;
          case 24:
            ms(i, o), d & 2048 && od(o.alternate, o);
            break;
          default:
            ms(i, o);
        }
        t = t.sibling;
      }
  }
  var gs = 8192;
  function ci(e) {
    if (e.subtreeFlags & gs)
      for (e = e.child; e !== null; )
        qm(e), e = e.sibling;
  }
  function qm(e) {
    switch (e.tag) {
      case 26:
        ci(e), e.flags & gs && e.memoizedState !== null && M1(
          Pn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ci(e);
        break;
      case 3:
      case 4:
        var t = Pn;
        Pn = uu(e.stateNode.containerInfo), ci(e), Pn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gs, gs = 16777216, ci(e), gs = t) : ci(e));
        break;
      default:
        ci(e);
    }
  }
  function Gm(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function vs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          jt = o, Vm(
            o,
            e
          );
        }
      Gm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zm(e), e = e.sibling;
  }
  function Zm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vs(e), e.flags & 2048 && jr(9, e, e.return);
        break;
      case 3:
        vs(e);
        break;
      case 12:
        vs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qo(e)) : vs(e);
        break;
      default:
        vs(e);
    }
  }
  function Qo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var i = 0; i < t.length; i++) {
          var o = t[i];
          jt = o, Vm(
            o,
            e
          );
        }
      Gm(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, t, t.return), Qo(t);
          break;
        case 22:
          i = t.stateNode, i._visibility & 2 && (i._visibility &= -3, Qo(t));
          break;
        default:
          Qo(t);
      }
      e = e.sibling;
    }
  }
  function Vm(e, t) {
    for (; jt !== null; ) {
      var i = jt;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          jr(8, i, t);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var o = i.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Wi(i.memoizedState.cache);
      }
      if (o = i.child, o !== null) o.return = i, jt = o;
      else
        e: for (i = e; jt !== null; ) {
          o = jt;
          var d = o.sibling, y = o.return;
          if (zm(o), o === i) {
            jt = null;
            break e;
          }
          if (d !== null) {
            d.return = y, jt = d;
            break e;
          }
          jt = y;
        }
    }
  }
  var Yb = {
    getCacheForType: function(e) {
      var t = Gt(Tt), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    }
  }, Fb = typeof WeakMap == "function" ? WeakMap : Map, Je = 0, it = null, Ze = null, Xe = 0, We = 0, pn = null, zr = !1, di = !1, ud = !1, mr = 0, vt = 0, Pr = 0, ba = 0, ld = 0, Rn = 0, fi = 0, ys = null, rn = null, cd = !1, dd = 0, Ko = 1 / 0, Jo = null, Ir = null, It = 0, Br = null, hi = null, pi = 0, fd = 0, hd = null, $m = null, _s = 0, pd = null;
  function mn() {
    if ((Je & 2) !== 0 && Xe !== 0)
      return Xe & -Xe;
    if (R.T !== null) {
      var e = ti;
      return e !== 0 ? e : Sd();
    }
    return uh();
  }
  function Ym() {
    Rn === 0 && (Rn = (Xe & 536870912) === 0 || Ke ? za() : 536870912);
    var e = Mn.current;
    return e !== null && (e.flags |= 32), Rn;
  }
  function gn(e, t, i) {
    (e === it && (We === 2 || We === 9) || e.cancelPendingCommit !== null) && (mi(e, 0), Ur(
      e,
      Xe,
      Rn,
      !1
    )), Pi(e, i), ((Je & 2) === 0 || e !== it) && (e === it && ((Je & 2) === 0 && (ba |= i), vt === 4 && Ur(
      e,
      Xe,
      Rn,
      !1
    )), Xn(e));
  }
  function Fm(e, t, i) {
    if ((Je & 6) !== 0) throw Error(a(327));
    var o = !i && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Jt(e, t), d = o ? Kb(e, t) : vd(e, t, !0), y = o;
    do {
      if (d === 0) {
        di && !o && Ur(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, y && !Xb(i)) {
          d = vd(e, t, !1), y = !1;
          continue;
        }
        if (d === 2) {
          if (y = t, e.errorRecoveryDisabledLanes & y)
            var x = 0;
          else
            x = e.pendingLanes & -536870913, x = x !== 0 ? x : x & 536870912 ? 536870912 : 0;
          if (x !== 0) {
            t = x;
            e: {
              var D = e;
              d = ys;
              var U = D.current.memoizedState.isDehydrated;
              if (U && (mi(D, x).flags |= 256), x = vd(
                D,
                x,
                !1
              ), x !== 2) {
                if (ud && !U) {
                  D.errorRecoveryDisabledLanes |= y, ba |= y, d = 4;
                  break e;
                }
                y = rn, rn = d, y !== null && (rn === null ? rn = y : rn.push.apply(
                  rn,
                  y
                ));
              }
              d = x;
            }
            if (y = !1, d !== 2) continue;
          }
        }
        if (d === 1) {
          mi(e, 0), Ur(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, y = d, y) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ur(
                o,
                t,
                Rn,
                !zr
              );
              break e;
            case 2:
              rn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((t & 62914560) === t && (d = dd + 300 - Ne(), 10 < d)) {
            if (Ur(
              o,
              t,
              Rn,
              !zr
            ), Yt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Eg(
              Xm.bind(
                null,
                o,
                i,
                rn,
                Jo,
                cd,
                t,
                Rn,
                ba,
                fi,
                zr,
                y,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          Xm(
            o,
            i,
            rn,
            Jo,
            cd,
            t,
            Rn,
            ba,
            fi,
            zr,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Xn(e);
  }
  function Xm(e, t, i, o, d, y, x, D, U, X, re, oe, J, W) {
    if (e.timeoutHandle = -1, oe = t.subtreeFlags, (oe & 8192 || (oe & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: O1 }, qm(t), oe = R1(), oe !== null)) {
      e.cancelPendingCommit = oe(
        ng.bind(
          null,
          e,
          t,
          y,
          i,
          o,
          d,
          x,
          D,
          U,
          re,
          1,
          J,
          W
        )
      ), Ur(e, y, x, !X);
      return;
    }
    ng(
      e,
      t,
      y,
      i,
      o,
      d,
      x,
      D,
      U
    );
  }
  function Xb(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], y = d.getSnapshot;
          d = d.value;
          try {
            if (!cn(y(), d)) return !1;
          } catch {
            return !1;
          }
        }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null)
        i.return = t, t = i;
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
  function Ur(e, t, i, o) {
    t &= ~ld, t &= ~ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var y = 31 - zt(d), x = 1 << y;
      o[y] = -1, d &= ~x;
    }
    i !== 0 && sh(e, i, t);
  }
  function Wo() {
    return (Je & 6) === 0 ? (bs(0), !1) : !0;
  }
  function md() {
    if (Ze !== null) {
      if (We === 0)
        var e = Ze.return;
      else
        e = Ze, or = pa = null, Rc(e), oi = null, cs = 0, e = Ze;
      for (; e !== null; )
        xm(e.alternate, e), e = e.return;
      Ze = null;
    }
  }
  function mi(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, h1(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), md(), it = e, Ze = i = ar(e.current, null), Xe = t, We = 0, pn = null, zr = !1, di = Jt(e, t), ud = !1, fi = Rn = ld = ba = Pr = vt = 0, rn = ys = null, cd = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - zt(o), y = 1 << d;
        t |= e[d], o &= ~y;
      }
    return mr = t, So(), i;
  }
  function Qm(e, t) {
    He = null, R.H = Uo, t === ts || t === Oo ? (t = hp(), We = 3) : t === cp ? (t = hp(), We = 4) : We = t === pm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, pn = t, Ze === null && (vt = 1, Vo(
      e,
      kn(t, e.current)
    ));
  }
  function Km() {
    var e = R.H;
    return R.H = Uo, e === null ? Uo : e;
  }
  function Jm() {
    var e = R.A;
    return R.A = Yb, e;
  }
  function gd() {
    vt = 4, zr || (Xe & 4194048) !== Xe && Mn.current !== null || (di = !0), (Pr & 134217727) === 0 && (ba & 134217727) === 0 || it === null || Ur(
      it,
      Xe,
      Rn,
      !1
    );
  }
  function vd(e, t, i) {
    var o = Je;
    Je |= 2;
    var d = Km(), y = Jm();
    (it !== e || Xe !== t) && (Jo = null, mi(e, t)), t = !1;
    var x = vt;
    e: do
      try {
        if (We !== 0 && Ze !== null) {
          var D = Ze, U = pn;
          switch (We) {
            case 8:
              md(), x = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mn.current === null && (t = !0);
              var X = We;
              if (We = 0, pn = null, gi(e, D, U, X), i && di) {
                x = 0;
                break e;
              }
              break;
            default:
              X = We, We = 0, pn = null, gi(e, D, U, X);
          }
        }
        Qb(), x = vt;
        break;
      } catch (re) {
        Qm(e, re);
      }
    while (!0);
    return t && e.shellSuspendCounter++, or = pa = null, Je = o, R.H = d, R.A = y, Ze === null && (it = null, Xe = 0, So()), x;
  }
  function Qb() {
    for (; Ze !== null; ) Wm(Ze);
  }
  function Kb(e, t) {
    var i = Je;
    Je |= 2;
    var o = Km(), d = Jm();
    it !== e || Xe !== t ? (Jo = null, Ko = Ne() + 500, mi(e, t)) : di = Jt(
      e,
      t
    );
    e: do
      try {
        if (We !== 0 && Ze !== null) {
          t = Ze;
          var y = pn;
          t: switch (We) {
            case 1:
              We = 0, pn = null, gi(e, t, y, 1);
              break;
            case 2:
            case 9:
              if (dp(y)) {
                We = 0, pn = null, eg(t);
                break;
              }
              t = function() {
                We !== 2 && We !== 9 || it !== e || (We = 7), Xn(e);
              }, y.then(t, t);
              break e;
            case 3:
              We = 7;
              break e;
            case 4:
              We = 5;
              break e;
            case 7:
              dp(y) ? (We = 0, pn = null, eg(t)) : (We = 0, pn = null, gi(e, t, y, 7));
              break;
            case 5:
              var x = null;
              switch (Ze.tag) {
                case 26:
                  x = Ze.memoizedState;
                case 5:
                case 27:
                  var D = Ze;
                  if (!x || Dg(x)) {
                    We = 0, pn = null;
                    var U = D.sibling;
                    if (U !== null) Ze = U;
                    else {
                      var X = D.return;
                      X !== null ? (Ze = X, eu(X)) : Ze = null;
                    }
                    break t;
                  }
              }
              We = 0, pn = null, gi(e, t, y, 5);
              break;
            case 6:
              We = 0, pn = null, gi(e, t, y, 6);
              break;
            case 8:
              md(), vt = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        Jb();
        break;
      } catch (re) {
        Qm(e, re);
      }
    while (!0);
    return or = pa = null, R.H = o, R.A = d, Je = i, Ze !== null ? 0 : (it = null, Xe = 0, So(), vt);
  }
  function Jb() {
    for (; Ze !== null && !he(); )
      Wm(Ze);
  }
  function Wm(e) {
    var t = Tm(e.alternate, e, mr);
    e.memoizedProps = e.pendingProps, t === null ? eu(e) : Ze = t;
  }
  function eg(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = bm(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Xe
        );
        break;
      case 11:
        t = bm(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Xe
        );
        break;
      case 5:
        Rc(t);
      default:
        xm(i, t), t = Ze = tp(t, mr), t = Tm(i, t, mr);
    }
    e.memoizedProps = e.pendingProps, t === null ? eu(e) : Ze = t;
  }
  function gi(e, t, i, o) {
    or = pa = null, Rc(t), oi = null, cs = 0;
    var d = t.return;
    try {
      if (Hb(
        e,
        d,
        t,
        i,
        Xe
      )) {
        vt = 1, Vo(
          e,
          kn(i, e.current)
        ), Ze = null;
        return;
      }
    } catch (y) {
      if (d !== null) throw Ze = d, y;
      vt = 1, Vo(
        e,
        kn(i, e.current)
      ), Ze = null;
      return;
    }
    t.flags & 32768 ? (Ke || o === 1 ? e = !0 : di || (Xe & 536870912) !== 0 ? e = !1 : (zr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Mn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), tg(t, e)) : eu(t);
  }
  function eu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        tg(
          t,
          zr
        );
        return;
      }
      e = t.return;
      var i = Gb(
        t.alternate,
        t,
        mr
      );
      if (i !== null) {
        Ze = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ze = t;
        return;
      }
      Ze = t = e;
    } while (t !== null);
    vt === 0 && (vt = 5);
  }
  function tg(e, t) {
    do {
      var i = Zb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ze = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ze = e;
        return;
      }
      Ze = e = i;
    } while (e !== null);
    vt = 6, Ze = null;
  }
  function ng(e, t, i, o, d, y, x, D, U) {
    e.cancelPendingCommit = null;
    do
      tu();
    while (It !== 0);
    if ((Je & 6) !== 0) throw Error(a(327));
    if (t !== null) {
      if (t === e.current) throw Error(a(177));
      if (y = t.lanes | t.childLanes, y |= oc, O_(
        e,
        i,
        y,
        x,
        D,
        U
      ), e === it && (Ze = it = null, Xe = 0), hi = t, Br = e, pi = i, fd = y, hd = d, $m = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n1(ue, function() {
        return og(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = R.T, R.T = null, d = B.p, B.p = 2, x = Je, Je |= 4;
        try {
          Vb(e, t, i);
        } finally {
          Je = x, B.p = d, R.T = o;
        }
      }
      It = 1, rg(), ag(), ig();
    }
  }
  function rg() {
    if (It === 1) {
      It = 0;
      var e = Br, t = hi, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = R.T, R.T = null;
        var o = B.p;
        B.p = 2;
        var d = Je;
        Je |= 4;
        try {
          Bm(t, e);
          var y = Nd, x = Vh(e.containerInfo), D = y.focusedElem, U = y.selectionRange;
          if (x !== D && D && D.ownerDocument && Zh(
            D.ownerDocument.documentElement,
            D
          )) {
            if (U !== null && nc(D)) {
              var X = U.start, re = U.end;
              if (re === void 0 && (re = X), "selectionStart" in D)
                D.selectionStart = X, D.selectionEnd = Math.min(
                  re,
                  D.value.length
                );
              else {
                var oe = D.ownerDocument || document, J = oe && oe.defaultView || window;
                if (J.getSelection) {
                  var W = J.getSelection(), Me = D.textContent.length, ke = Math.min(U.start, Me), rt = U.end === void 0 ? ke : Math.min(U.end, Me);
                  !W.extend && ke > rt && (x = rt, rt = ke, ke = x);
                  var V = Gh(
                    D,
                    ke
                  ), q = Gh(
                    D,
                    rt
                  );
                  if (V && q && (W.rangeCount !== 1 || W.anchorNode !== V.node || W.anchorOffset !== V.offset || W.focusNode !== q.node || W.focusOffset !== q.offset)) {
                    var Y = oe.createRange();
                    Y.setStart(V.node, V.offset), W.removeAllRanges(), ke > rt ? (W.addRange(Y), W.extend(q.node, q.offset)) : (Y.setEnd(q.node, q.offset), W.addRange(Y));
                  }
                }
              }
            }
            for (oe = [], W = D; W = W.parentNode; )
              W.nodeType === 1 && oe.push({
                element: W,
                left: W.scrollLeft,
                top: W.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < oe.length; D++) {
              var se = oe[D];
              se.element.scrollLeft = se.left, se.element.scrollTop = se.top;
            }
          }
          hu = !!xd, Nd = xd = null;
        } finally {
          Je = d, B.p = o, R.T = i;
        }
      }
      e.current = t, It = 2;
    }
  }
  function ag() {
    if (It === 2) {
      It = 0;
      var e = Br, t = hi, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = R.T, R.T = null;
        var o = B.p;
        B.p = 2;
        var d = Je;
        Je |= 4;
        try {
          Dm(e, t.alternate, t);
        } finally {
          Je = d, B.p = o, R.T = i;
        }
      }
      It = 3;
    }
  }
  function ig() {
    if (It === 4 || It === 3) {
      It = 0, Ee();
      var e = Br, t = hi, i = pi, o = $m;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? It = 5 : (It = 0, hi = Br = null, sg(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ir = null), Dl(i), t = t.stateNode, et && typeof et.onCommitFiberRoot == "function")
        try {
          et.onCommitFiberRoot(
            Ot,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = R.T, d = B.p, B.p = 2, R.T = null;
        try {
          for (var y = e.onRecoverableError, x = 0; x < o.length; x++) {
            var D = o[x];
            y(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          R.T = t, B.p = d;
        }
      }
      (pi & 3) !== 0 && tu(), Xn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === pd ? _s++ : (_s = 0, pd = e) : _s = 0, bs(0);
    }
  }
  function sg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
  }
  function tu(e) {
    return rg(), ag(), ig(), og();
  }
  function og() {
    if (It !== 5) return !1;
    var e = Br, t = fd;
    fd = 0;
    var i = Dl(pi), o = R.T, d = B.p;
    try {
      B.p = 32 > i ? 32 : i, R.T = null, i = hd, hd = null;
      var y = Br, x = pi;
      if (It = 0, hi = Br = null, pi = 0, (Je & 6) !== 0) throw Error(a(331));
      var D = Je;
      if (Je |= 4, Zm(y.current), Hm(
        y,
        y.current,
        x,
        i
      ), Je = D, bs(0, !1), et && typeof et.onPostCommitFiberRoot == "function")
        try {
          et.onPostCommitFiberRoot(Ot, y);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, R.T = o, sg(e, t);
    }
  }
  function ug(e, t, i) {
    t = kn(i, t), t = $c(e.stateNode, t, 2), e = Nr(e, t, 2), e !== null && (Pi(e, 2), Xn(e));
  }
  function at(e, t, i) {
    if (e.tag === 3)
      ug(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ug(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ir === null || !Ir.has(o))) {
            e = kn(i, e), i = fm(2), o = Nr(t, i, 2), o !== null && (hm(
              i,
              o,
              t,
              e
            ), Pi(o, 2), Xn(o));
            break;
          }
        }
        t = t.return;
      }
  }
  function yd(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Fb();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(i) || (ud = !0, d.add(i), e = Wb.bind(null, e, t, i), t.then(e, e));
  }
  function Wb(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, it === e && (Xe & i) === i && (vt === 4 || vt === 3 && (Xe & 62914560) === Xe && 300 > Ne() - dd ? (Je & 2) === 0 && mi(e, 0) : ld |= i, fi === Xe && (fi = 0)), Xn(e);
  }
  function lg(e, t) {
    t === 0 && (t = ih()), e = Ka(e, t), e !== null && (Pi(e, t), Xn(e));
  }
  function e1(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), lg(e, i);
  }
  function t1(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var o = e.stateNode, d = e.memoizedState;
        d !== null && (i = d.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    o !== null && o.delete(t), lg(e, i);
  }
  function n1(e, t) {
    return ve(e, t);
  }
  var nu = null, vi = null, _d = !1, ru = !1, bd = !1, Sa = 0;
  function Xn(e) {
    e !== vi && e.next === null && (vi === null ? nu = vi = e : vi = vi.next = e), ru = !0, _d || (_d = !0, a1());
  }
  function bs(e, t) {
    if (!bd && ru) {
      bd = !0;
      do
        for (var i = !1, o = nu; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var y = 0;
            else {
              var x = o.suspendedLanes, D = o.pingedLanes;
              y = (1 << 31 - zt(42 | e) + 1) - 1, y &= d & ~(x & ~D), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (i = !0, hg(o, y));
          } else
            y = Xe, y = Yt(
              o,
              o === it ? y : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (y & 3) === 0 || Jt(o, y) || (i = !0, hg(o, y));
          o = o.next;
        }
      while (i);
      bd = !1;
    }
  }
  function r1() {
    cg();
  }
  function cg() {
    ru = _d = !1;
    var e = 0;
    Sa !== 0 && (f1() && (e = Sa), Sa = 0);
    for (var t = Ne(), i = null, o = nu; o !== null; ) {
      var d = o.next, y = dg(o, t);
      y === 0 ? (o.next = null, i === null ? nu = d : i.next = d, d === null && (vi = i)) : (i = o, (e !== 0 || (y & 3) !== 0) && (ru = !0)), o = d;
    }
    bs(e);
  }
  function dg(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, y = e.pendingLanes & -62914561; 0 < y; ) {
      var x = 31 - zt(y), D = 1 << x, U = d[x];
      U === -1 ? ((D & i) === 0 || (D & o) !== 0) && (d[x] = uo(D, t)) : U <= t && (e.expiredLanes |= D), y &= ~D;
    }
    if (t = it, i = Xe, i = Yt(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === t && (We === 2 || We === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && me(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Jt(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (o !== null && me(o), Dl(i)) {
        case 2:
        case 8:
          i = te;
          break;
        case 32:
          i = ue;
          break;
        case 268435456:
          i = _e;
          break;
        default:
          i = ue;
      }
      return o = fg.bind(null, e), i = ve(i, o), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return o !== null && o !== null && me(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function fg(e, t) {
    if (It !== 0 && It !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (tu() && e.callbackNode !== i)
      return null;
    var o = Xe;
    return o = Yt(
      e,
      e === it ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : (Fm(e, o, t), dg(e, Ne()), e.callbackNode != null && e.callbackNode === i ? fg.bind(null, e) : null);
  }
  function hg(e, t) {
    if (tu()) return null;
    Fm(e, t, !0);
  }
  function a1() {
    p1(function() {
      (Je & 6) !== 0 ? ve(
        ge,
        r1
      ) : cg();
    });
  }
  function Sd() {
    return Sa === 0 && (Sa = za()), Sa;
  }
  function pg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : po("" + e);
  }
  function mg(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function i1(e, t, i, o, d) {
    if (t === "submit" && i && i.stateNode === d) {
      var y = pg(
        (d[Wt] || null).action
      ), x = o.submitter;
      x && (t = (t = x[Wt] || null) ? pg(t.formAction) : x.getAttribute("formAction"), t !== null && (y = t, x = null));
      var D = new yo(
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
                if (Sa !== 0) {
                  var U = x ? mg(d, x) : new FormData(d);
                  Hc(
                    i,
                    {
                      pending: !0,
                      data: U,
                      method: d.method,
                      action: y
                    },
                    null,
                    U
                  );
                }
              } else
                typeof y == "function" && (D.preventDefault(), U = x ? mg(d, x) : new FormData(d), Hc(
                  i,
                  {
                    pending: !0,
                    data: U,
                    method: d.method,
                    action: y
                  },
                  y,
                  U
                ));
            },
            currentTarget: d
          }
        ]
      });
    }
  }
  for (var wd = 0; wd < sc.length; wd++) {
    var Ed = sc[wd], s1 = Ed.toLowerCase(), o1 = Ed[0].toUpperCase() + Ed.slice(1);
    zn(
      s1,
      "on" + o1
    );
  }
  zn(Fh, "onAnimationEnd"), zn(Xh, "onAnimationIteration"), zn(Qh, "onAnimationStart"), zn("dblclick", "onDoubleClick"), zn("focusin", "onFocus"), zn("focusout", "onBlur"), zn(Cb, "onTransitionRun"), zn(Ab, "onTransitionStart"), zn(Tb, "onTransitionCancel"), zn(Kh, "onTransitionEnd"), Ha("onMouseEnter", ["mouseout", "mouseover"]), Ha("onMouseLeave", ["mouseout", "mouseover"]), Ha("onPointerEnter", ["pointerout", "pointerover"]), Ha("onPointerLeave", ["pointerout", "pointerover"]), ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), u1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss)
  );
  function gg(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var y = void 0;
        if (t)
          for (var x = o.length - 1; 0 <= x; x--) {
            var D = o[x], U = D.instance, X = D.currentTarget;
            if (D = D.listener, U !== y && d.isPropagationStopped())
              break e;
            y = D, d.currentTarget = X;
            try {
              y(d);
            } catch (re) {
              Zo(re);
            }
            d.currentTarget = null, y = U;
          }
        else
          for (x = 0; x < o.length; x++) {
            if (D = o[x], U = D.instance, X = D.currentTarget, D = D.listener, U !== y && d.isPropagationStopped())
              break e;
            y = D, d.currentTarget = X;
            try {
              y(d);
            } catch (re) {
              Zo(re);
            }
            d.currentTarget = null, y = U;
          }
      }
    }
  }
  function Ve(e, t) {
    var i = t[zl];
    i === void 0 && (i = t[zl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (vg(t, e, 2, !1), i.add(o));
  }
  function Cd(e, t, i) {
    var o = 0;
    t && (o |= 4), vg(
      i,
      e,
      o,
      t
    );
  }
  var au = "_reactListening" + Math.random().toString(36).slice(2);
  function Ad(e) {
    if (!e[au]) {
      e[au] = !0, ch.forEach(function(i) {
        i !== "selectionchange" && (u1.has(i) || Cd(i, !1, e), Cd(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[au] || (t[au] = !0, Cd("selectionchange", !1, t));
    }
  }
  function vg(e, t, i, o) {
    switch (Hg(t)) {
      case 2:
        var d = D1;
        break;
      case 8:
        d = z1;
        break;
      default:
        d = Bd;
    }
    i = d.bind(
      null,
      t,
      i,
      e
    ), d = void 0, !Yl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, i, !0) : d !== void 0 ? e.addEventListener(t, i, {
      passive: d
    }) : e.addEventListener(t, i, !1);
  }
  function Td(e, t, i, o, d) {
    var y = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
      e: for (; ; ) {
        if (o === null) return;
        var x = o.tag;
        if (x === 3 || x === 4) {
          var D = o.stateNode.containerInfo;
          if (D === d) break;
          if (x === 4)
            for (x = o.return; x !== null; ) {
              var U = x.tag;
              if ((U === 3 || U === 4) && x.stateNode.containerInfo === d)
                return;
              x = x.return;
            }
          for (; D !== null; ) {
            if (x = Ia(D), x === null) return;
            if (U = x.tag, U === 5 || U === 6 || U === 26 || U === 27) {
              o = y = x;
              continue e;
            }
            D = D.parentNode;
          }
        }
        o = o.return;
      }
    Ch(function() {
      var X = y, re = Vl(i), oe = [];
      e: {
        var J = Jh.get(e);
        if (J !== void 0) {
          var W = yo, Me = e;
          switch (e) {
            case "keypress":
              if (go(i) === 0) break e;
            case "keydown":
            case "keyup":
              W = nb;
              break;
            case "focusin":
              Me = "focus", W = Kl;
              break;
            case "focusout":
              Me = "blur", W = Kl;
              break;
            case "beforeblur":
            case "afterblur":
              W = Kl;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = kh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = Z_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = ib;
              break;
            case Fh:
            case Xh:
            case Qh:
              W = Y_;
              break;
            case Kh:
              W = ob;
              break;
            case "scroll":
            case "scrollend":
              W = q_;
              break;
            case "wheel":
              W = lb;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = X_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Nh;
              break;
            case "toggle":
            case "beforetoggle":
              W = db;
          }
          var ke = (t & 4) !== 0, rt = !ke && (e === "scroll" || e === "scrollend"), V = ke ? J !== null ? J + "Capture" : null : J;
          ke = [];
          for (var q = X, Y; q !== null; ) {
            var se = q;
            if (Y = se.stateNode, se = se.tag, se !== 5 && se !== 26 && se !== 27 || Y === null || V === null || (se = Ui(q, V), se != null && ke.push(
              ws(q, se, Y)
            )), rt) break;
            q = q.return;
          }
          0 < ke.length && (J = new W(
            J,
            Me,
            null,
            i,
            re
          ), oe.push({ event: J, listeners: ke }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", J && i !== Zl && (Me = i.relatedTarget || i.fromElement) && (Ia(Me) || Me[Pa]))
            break e;
          if ((W || J) && (J = re.window === re ? re : (J = re.ownerDocument) ? J.defaultView || J.parentWindow : window, W ? (Me = i.relatedTarget || i.toElement, W = X, Me = Me ? Ia(Me) : null, Me !== null && (rt = c(Me), ke = Me.tag, Me !== rt || ke !== 5 && ke !== 27 && ke !== 6) && (Me = null)) : (W = null, Me = X), W !== Me)) {
            if (ke = kh, se = "onMouseLeave", V = "onMouseEnter", q = "mouse", (e === "pointerout" || e === "pointerover") && (ke = Nh, se = "onPointerLeave", V = "onPointerEnter", q = "pointer"), rt = W == null ? J : Bi(W), Y = Me == null ? J : Bi(Me), J = new ke(
              se,
              q + "leave",
              W,
              i,
              re
            ), J.target = rt, J.relatedTarget = Y, se = null, Ia(re) === X && (ke = new ke(
              V,
              q + "enter",
              Me,
              i,
              re
            ), ke.target = Y, ke.relatedTarget = rt, se = ke), rt = se, W && Me)
              t: {
                for (ke = W, V = Me, q = 0, Y = ke; Y; Y = yi(Y))
                  q++;
                for (Y = 0, se = V; se; se = yi(se))
                  Y++;
                for (; 0 < q - Y; )
                  ke = yi(ke), q--;
                for (; 0 < Y - q; )
                  V = yi(V), Y--;
                for (; q--; ) {
                  if (ke === V || V !== null && ke === V.alternate)
                    break t;
                  ke = yi(ke), V = yi(V);
                }
                ke = null;
              }
            else ke = null;
            W !== null && yg(
              oe,
              J,
              W,
              ke,
              !1
            ), Me !== null && rt !== null && yg(
              oe,
              rt,
              Me,
              ke,
              !0
            );
          }
        }
        e: {
          if (J = X ? Bi(X) : window, W = J.nodeName && J.nodeName.toLowerCase(), W === "select" || W === "input" && J.type === "file")
            var Se = Ph;
          else if (Dh(J))
            if (Ih)
              Se = Sb;
            else {
              Se = _b;
              var qe = yb;
            }
          else
            W = J.nodeName, !W || W.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? X && Gl(X.elementType) && (Se = Ph) : Se = bb;
          if (Se && (Se = Se(e, X))) {
            zh(
              oe,
              Se,
              i,
              re
            );
            break e;
          }
          qe && qe(e, J, X), e === "focusout" && X && J.type === "number" && X.memoizedProps.value != null && ql(J, "number", J.value);
        }
        switch (qe = X ? Bi(X) : window, e) {
          case "focusin":
            (Dh(qe) || qe.contentEditable === "true") && (Fa = qe, rc = X, Fi = null);
            break;
          case "focusout":
            Fi = rc = Fa = null;
            break;
          case "mousedown":
            ac = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ac = !1, $h(oe, i, re);
            break;
          case "selectionchange":
            if (Eb) break;
          case "keydown":
          case "keyup":
            $h(oe, i, re);
        }
        var Te;
        if (Wl)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          Ya ? jh(e, i) && (xe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Oh && i.locale !== "ko" && (Ya || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Ya && (Te = Ah()) : (Ar = re, Fl = "value" in Ar ? Ar.value : Ar.textContent, Ya = !0)), qe = iu(X, xe), 0 < qe.length && (xe = new xh(
          xe,
          e,
          null,
          i,
          re
        ), oe.push({ event: xe, listeners: qe }), Te ? xe.data = Te : (Te = Lh(i), Te !== null && (xe.data = Te)))), (Te = hb ? pb(e, i) : mb(e, i)) && (xe = iu(X, "onBeforeInput"), 0 < xe.length && (qe = new xh(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          re
        ), oe.push({
          event: qe,
          listeners: xe
        }), qe.data = Te)), i1(
          oe,
          e,
          X,
          i,
          re
        );
      }
      gg(oe, t);
    });
  }
  function ws(e, t, i) {
    return {
      instance: e,
      listener: t,
      currentTarget: i
    };
  }
  function iu(e, t) {
    for (var i = t + "Capture", o = []; e !== null; ) {
      var d = e, y = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || y === null || (d = Ui(e, i), d != null && o.unshift(
        ws(e, d, y)
      ), d = Ui(e, t), d != null && o.push(
        ws(e, d, y)
      )), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function yi(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function yg(e, t, i, o, d) {
    for (var y = t._reactName, x = []; i !== null && i !== o; ) {
      var D = i, U = D.alternate, X = D.stateNode;
      if (D = D.tag, U !== null && U === o) break;
      D !== 5 && D !== 26 && D !== 27 || X === null || (U = X, d ? (X = Ui(i, y), X != null && x.unshift(
        ws(i, X, U)
      )) : d || (X = Ui(i, y), X != null && x.push(
        ws(i, X, U)
      ))), i = i.return;
    }
    x.length !== 0 && e.push({ event: t, listeners: x });
  }
  var l1 = /\r\n?/g, c1 = /\u0000|\uFFFD/g;
  function _g(e) {
    return (typeof e == "string" ? e : "" + e).replace(l1, `
`).replace(c1, "");
  }
  function bg(e, t) {
    return t = _g(t), _g(e) === t;
  }
  function su() {
  }
  function nt(e, t, i, o, d, y) {
    switch (i) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Za(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Za(e, "" + o);
        break;
      case "className":
        co(e, "class", o);
        break;
      case "tabIndex":
        co(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        co(e, i, o);
        break;
      case "style":
        wh(e, o, y);
        break;
      case "data":
        if (t !== "object") {
          co(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = po("" + o), e.setAttribute(i, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof y == "function" && (i === "formAction" ? (t !== "input" && nt(e, t, "name", d.name, d, null), nt(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), nt(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), nt(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (nt(e, t, "encType", d.encType, d, null), nt(e, t, "method", d.method, d, null), nt(e, t, "target", d.target, d, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(i);
          break;
        }
        o = po("" + o), e.setAttribute(i, o);
        break;
      case "onClick":
        o != null && (e.onclick = su);
        break;
      case "onScroll":
        o != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
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
        i = po("" + o), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          i
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
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "" + o) : e.removeAttribute(i);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(i, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(i, o) : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(i) : e.setAttribute(i, o);
        break;
      case "popover":
        Ve("beforetoggle", e), Ve("toggle", e), lo(e, "popover", o);
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
        lo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = U_.get(i) || i, lo(e, i, o));
    }
  }
  function kd(e, t, i, o, d, y) {
    switch (i) {
      case "style":
        wh(e, o, y);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(a(61));
          if (i = o.__html, i != null) {
            if (d.children != null) throw Error(a(60));
            e.innerHTML = i;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Za(e, o) : (typeof o == "number" || typeof o == "bigint") && Za(e, "" + o);
        break;
      case "onScroll":
        o != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        o != null && Ve("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = su);
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
        if (!dh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), t = i.slice(2, d ? i.length - 7 : void 0), y = e[Wt] || null, y = y != null ? y[i] : null, typeof y == "function" && e.removeEventListener(t, y, d), typeof o == "function")) {
              typeof y != "function" && y !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : lo(e, i, o);
          }
    }
  }
  function Bt(e, t, i) {
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
        Ve("error", e), Ve("load", e);
        var o = !1, d = !1, y;
        for (y in i)
          if (i.hasOwnProperty(y)) {
            var x = i[y];
            if (x != null)
              switch (y) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  d = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, t));
                default:
                  nt(e, t, y, x, i, null);
              }
          }
        d && nt(e, t, "srcSet", i.srcSet, i, null), o && nt(e, t, "src", i.src, i, null);
        return;
      case "input":
        Ve("invalid", e);
        var D = y = x = d = null, U = null, X = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var re = i[o];
            if (re != null)
              switch (o) {
                case "name":
                  d = re;
                  break;
                case "type":
                  x = re;
                  break;
                case "checked":
                  U = re;
                  break;
                case "defaultChecked":
                  X = re;
                  break;
                case "value":
                  y = re;
                  break;
                case "defaultValue":
                  D = re;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (re != null)
                    throw Error(a(137, t));
                  break;
                default:
                  nt(e, t, o, re, i, null);
              }
          }
        yh(
          e,
          y,
          D,
          U,
          X,
          x,
          d,
          !1
        ), fo(e);
        return;
      case "select":
        Ve("invalid", e), o = x = y = null;
        for (d in i)
          if (i.hasOwnProperty(d) && (D = i[d], D != null))
            switch (d) {
              case "value":
                y = D;
                break;
              case "defaultValue":
                x = D;
                break;
              case "multiple":
                o = D;
              default:
                nt(e, t, d, D, i, null);
            }
        t = y, i = x, e.multiple = !!o, t != null ? Ga(e, !!o, t, !1) : i != null && Ga(e, !!o, i, !0);
        return;
      case "textarea":
        Ve("invalid", e), y = d = o = null;
        for (x in i)
          if (i.hasOwnProperty(x) && (D = i[x], D != null))
            switch (x) {
              case "value":
                o = D;
                break;
              case "defaultValue":
                d = D;
                break;
              case "children":
                y = D;
                break;
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(a(91));
                break;
              default:
                nt(e, t, x, D, i, null);
            }
        bh(e, o, d, y), fo(e);
        return;
      case "option":
        for (U in i)
          if (i.hasOwnProperty(U) && (o = i[U], o != null))
            switch (U) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                nt(e, t, U, o, i, null);
            }
        return;
      case "dialog":
        Ve("beforetoggle", e), Ve("toggle", e), Ve("cancel", e), Ve("close", e);
        break;
      case "iframe":
      case "object":
        Ve("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Ss.length; o++)
          Ve(Ss[o], e);
        break;
      case "image":
        Ve("error", e), Ve("load", e);
        break;
      case "details":
        Ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ve("error", e), Ve("load", e);
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
        for (X in i)
          if (i.hasOwnProperty(X) && (o = i[X], o != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, t));
              default:
                nt(e, t, X, o, i, null);
            }
        return;
      default:
        if (Gl(t)) {
          for (re in i)
            i.hasOwnProperty(re) && (o = i[re], o !== void 0 && kd(
              e,
              t,
              re,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (D in i)
      i.hasOwnProperty(D) && (o = i[D], o != null && nt(e, t, D, o, i, null));
  }
  function d1(e, t, i, o) {
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
        var d = null, y = null, x = null, D = null, U = null, X = null, re = null;
        for (W in i) {
          var oe = i[W];
          if (i.hasOwnProperty(W) && oe != null)
            switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                U = oe;
              default:
                o.hasOwnProperty(W) || nt(e, t, W, null, o, oe);
            }
        }
        for (var J in o) {
          var W = o[J];
          if (oe = i[J], o.hasOwnProperty(J) && (W != null || oe != null))
            switch (J) {
              case "type":
                y = W;
                break;
              case "name":
                d = W;
                break;
              case "checked":
                X = W;
                break;
              case "defaultChecked":
                re = W;
                break;
              case "value":
                x = W;
                break;
              case "defaultValue":
                D = W;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (W != null)
                  throw Error(a(137, t));
                break;
              default:
                W !== oe && nt(
                  e,
                  t,
                  J,
                  W,
                  o,
                  oe
                );
            }
        }
        Hl(
          e,
          x,
          D,
          U,
          X,
          re,
          y,
          d
        );
        return;
      case "select":
        W = x = D = J = null;
        for (y in i)
          if (U = i[y], i.hasOwnProperty(y) && U != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                W = U;
              default:
                o.hasOwnProperty(y) || nt(
                  e,
                  t,
                  y,
                  null,
                  o,
                  U
                );
            }
        for (d in o)
          if (y = o[d], U = i[d], o.hasOwnProperty(d) && (y != null || U != null))
            switch (d) {
              case "value":
                J = y;
                break;
              case "defaultValue":
                D = y;
                break;
              case "multiple":
                x = y;
              default:
                y !== U && nt(
                  e,
                  t,
                  d,
                  y,
                  o,
                  U
                );
            }
        t = D, i = x, o = W, J != null ? Ga(e, !!i, J, !1) : !!o != !!i && (t != null ? Ga(e, !!i, t, !0) : Ga(e, !!i, i ? [] : "", !1));
        return;
      case "textarea":
        W = J = null;
        for (D in i)
          if (d = i[D], i.hasOwnProperty(D) && d != null && !o.hasOwnProperty(D))
            switch (D) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(e, t, D, null, o, d);
            }
        for (x in o)
          if (d = o[x], y = i[x], o.hasOwnProperty(x) && (d != null || y != null))
            switch (x) {
              case "value":
                J = d;
                break;
              case "defaultValue":
                W = d;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(a(91));
                break;
              default:
                d !== y && nt(e, t, x, d, o, y);
            }
        _h(e, J, W);
        return;
      case "option":
        for (var Me in i)
          if (J = i[Me], i.hasOwnProperty(Me) && J != null && !o.hasOwnProperty(Me))
            switch (Me) {
              case "selected":
                e.selected = !1;
                break;
              default:
                nt(
                  e,
                  t,
                  Me,
                  null,
                  o,
                  J
                );
            }
        for (U in o)
          if (J = o[U], W = i[U], o.hasOwnProperty(U) && J !== W && (J != null || W != null))
            switch (U) {
              case "selected":
                e.selected = J && typeof J != "function" && typeof J != "symbol";
                break;
              default:
                nt(
                  e,
                  t,
                  U,
                  J,
                  o,
                  W
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
        for (var ke in i)
          J = i[ke], i.hasOwnProperty(ke) && J != null && !o.hasOwnProperty(ke) && nt(e, t, ke, null, o, J);
        for (X in o)
          if (J = o[X], W = i[X], o.hasOwnProperty(X) && J !== W && (J != null || W != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(a(137, t));
                break;
              default:
                nt(
                  e,
                  t,
                  X,
                  J,
                  o,
                  W
                );
            }
        return;
      default:
        if (Gl(t)) {
          for (var rt in i)
            J = i[rt], i.hasOwnProperty(rt) && J !== void 0 && !o.hasOwnProperty(rt) && kd(
              e,
              t,
              rt,
              void 0,
              o,
              J
            );
          for (re in o)
            J = o[re], W = i[re], !o.hasOwnProperty(re) || J === W || J === void 0 && W === void 0 || kd(
              e,
              t,
              re,
              J,
              o,
              W
            );
          return;
        }
    }
    for (var V in i)
      J = i[V], i.hasOwnProperty(V) && J != null && !o.hasOwnProperty(V) && nt(e, t, V, null, o, J);
    for (oe in o)
      J = o[oe], W = i[oe], !o.hasOwnProperty(oe) || J === W || J == null && W == null || nt(e, t, oe, J, o, W);
  }
  var xd = null, Nd = null;
  function ou(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Sg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wg(e, t) {
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
  function Od(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Md = null;
  function f1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Md ? !1 : (Md = e, !0) : (Md = null, !1);
  }
  var Eg = typeof setTimeout == "function" ? setTimeout : void 0, h1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Cg = typeof Promise == "function" ? Promise : void 0, p1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cg < "u" ? function(e) {
    return Cg.resolve(null).then(e).catch(m1);
  } : Eg;
  function m1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hr(e) {
    return e === "head";
  }
  function Ag(e, t) {
    var i = t, o = 0, d = 0;
    do {
      var y = i.nextSibling;
      if (e.removeChild(i), y && y.nodeType === 8)
        if (i = y.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var x = e.ownerDocument;
            if (i & 1 && Es(x.documentElement), i & 2 && Es(x.body), i & 4)
              for (i = x.head, Es(i), x = i.firstChild; x; ) {
                var D = x.nextSibling, U = x.nodeName;
                x[Ii] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && x.rel.toLowerCase() === "stylesheet" || i.removeChild(x), x = D;
              }
          }
          if (d === 0) {
            e.removeChild(y), Ms(t);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = y;
    } while (i);
    Ms(t);
  }
  function Rd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rd(i), Pl(i);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function g1(e, t, i, o) {
    for (; e.nodeType === 1; ) {
      var d = i;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (o) {
        if (!e[Ii])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (y = e.getAttribute("rel"), y === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (y !== d.rel || e.getAttribute("href") !== (d.href == null || d.href === "" ? null : d.href) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin) || e.getAttribute("title") !== (d.title == null ? null : d.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (y = e.getAttribute("src"), (y !== (d.src == null ? null : d.src) || e.getAttribute("type") !== (d.type == null ? null : d.type) || e.getAttribute("crossorigin") !== (d.crossOrigin == null ? null : d.crossOrigin)) && y && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var y = d.name == null ? null : "" + d.name;
        if (d.type === "hidden" && e.getAttribute("name") === y)
          return e;
      } else return e;
      if (e = In(e.nextSibling), e === null) break;
    }
    return null;
  }
  function v1(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = In(e.nextSibling), e === null)) return null;
    return e;
  }
  function jd(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function y1(e, t) {
    var i = e.ownerDocument;
    if (e.data !== "$?" || i.readyState === "complete")
      t();
    else {
      var o = function() {
        t(), i.removeEventListener("DOMContentLoaded", o);
      };
      i.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function In(e) {
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
  var Ld = null;
  function Tg(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function kg(e, t, i) {
    switch (t = ou(i), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(a(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(a(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(a(454));
        return e;
      default:
        throw Error(a(451));
    }
  }
  function Es(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Pl(e);
  }
  var jn = /* @__PURE__ */ new Map(), xg = /* @__PURE__ */ new Set();
  function uu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var gr = B.d;
  B.d = {
    f: _1,
    r: b1,
    D: S1,
    C: w1,
    L: E1,
    m: C1,
    X: T1,
    S: A1,
    M: k1
  };
  function _1() {
    var e = gr.f(), t = Wo();
    return e || t;
  }
  function b1(e) {
    var t = Ba(e);
    t !== null && t.tag === 5 && t.type === "form" ? Fp(t) : gr.r(e);
  }
  var _i = typeof document > "u" ? null : document;
  function Ng(e, t, i) {
    var o = _i;
    if (o && typeof t == "string" && t) {
      var d = Tn(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), xg.has(d) || (xg.add(d), e = { rel: e, crossOrigin: i, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), Bt(t, "link", e), Mt(t), o.head.appendChild(t)));
    }
  }
  function S1(e) {
    gr.D(e), Ng("dns-prefetch", e, null);
  }
  function w1(e, t) {
    gr.C(e, t), Ng("preconnect", e, t);
  }
  function E1(e, t, i) {
    gr.L(e, t, i);
    var o = _i;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + Tn(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + Tn(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + Tn(
        i.imageSizes
      ) + '"]')) : d += '[href="' + Tn(e) + '"]';
      var y = d;
      switch (t) {
        case "style":
          y = bi(e);
          break;
        case "script":
          y = Si(e);
      }
      jn.has(y) || (e = v(
        {
          rel: "preload",
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), jn.set(y, e), o.querySelector(d) !== null || t === "style" && o.querySelector(Cs(y)) || t === "script" && o.querySelector(As(y)) || (t = o.createElement("link"), Bt(t, "link", e), Mt(t), o.head.appendChild(t)));
    }
  }
  function C1(e, t) {
    gr.m(e, t);
    var i = _i;
    if (i && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", d = 'link[rel="modulepreload"][as="' + Tn(o) + '"][href="' + Tn(e) + '"]', y = d;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Si(e);
      }
      if (!jn.has(y) && (e = v({ rel: "modulepreload", href: e }, t), jn.set(y, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(As(y)))
              return;
        }
        o = i.createElement("link"), Bt(o, "link", e), Mt(o), i.head.appendChild(o);
      }
    }
  }
  function A1(e, t, i) {
    gr.S(e, t, i);
    var o = _i;
    if (o && e) {
      var d = Ua(o).hoistableStyles, y = bi(e);
      t = t || "default";
      var x = d.get(y);
      if (!x) {
        var D = { loading: 0, preload: null };
        if (x = o.querySelector(
          Cs(y)
        ))
          D.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = jn.get(y)) && Dd(e, i);
          var U = x = o.createElement("link");
          Mt(U), Bt(U, "link", e), U._p = new Promise(function(X, re) {
            U.onload = X, U.onerror = re;
          }), U.addEventListener("load", function() {
            D.loading |= 1;
          }), U.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, lu(x, t, o);
        }
        x = {
          type: "stylesheet",
          instance: x,
          count: 1,
          state: D
        }, d.set(y, x);
      }
    }
  }
  function T1(e, t) {
    gr.X(e, t);
    var i = _i;
    if (i && e) {
      var o = Ua(i).hoistableScripts, d = Si(e), y = o.get(d);
      y || (y = i.querySelector(As(d)), y || (e = v({ src: e, async: !0 }, t), (t = jn.get(d)) && zd(e, t), y = i.createElement("script"), Mt(y), Bt(y, "link", e), i.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(d, y));
    }
  }
  function k1(e, t) {
    gr.M(e, t);
    var i = _i;
    if (i && e) {
      var o = Ua(i).hoistableScripts, d = Si(e), y = o.get(d);
      y || (y = i.querySelector(As(d)), y || (e = v({ src: e, async: !0, type: "module" }, t), (t = jn.get(d)) && zd(e, t), y = i.createElement("script"), Mt(y), Bt(y, "link", e), i.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, o.set(d, y));
    }
  }
  function Og(e, t, i, o) {
    var d = (d = ee.current) ? uu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = bi(i.href), i = Ua(
          d
        ).hoistableStyles, o = i.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = bi(i.href);
          var y = Ua(
            d
          ).hoistableStyles, x = y.get(e);
          if (x || (d = d.ownerDocument || d, x = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(e, x), (y = d.querySelector(
            Cs(e)
          )) && !y._p && (x.instance = y, x.state.loading = 5), jn.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, jn.set(e, i), y || x1(
            d,
            e,
            i,
            x.state
          ))), t && o === null)
            throw Error(a(528, ""));
          return x;
        }
        if (t && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Si(i), i = Ua(
          d
        ).hoistableScripts, o = i.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(a(444, e));
    }
  }
  function bi(e) {
    return 'href="' + Tn(e) + '"';
  }
  function Cs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Mg(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function x1(e, t, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), Bt(t, "link", i), Mt(t), e.head.appendChild(t));
  }
  function Si(e) {
    return '[src="' + Tn(e) + '"]';
  }
  function As(e) {
    return "script[async]" + e;
  }
  function Rg(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + Tn(i.href) + '"]'
          );
          if (o)
            return t.instance = o, Mt(o), o;
          var d = v({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), Mt(o), Bt(o, "style", d), lu(o, i.precedence, e), t.instance = o;
        case "stylesheet":
          d = bi(i.href);
          var y = e.querySelector(
            Cs(d)
          );
          if (y)
            return t.state.loading |= 4, t.instance = y, Mt(y), y;
          o = Mg(i), (d = jn.get(d)) && Dd(o, d), y = (e.ownerDocument || e).createElement("link"), Mt(y);
          var x = y;
          return x._p = new Promise(function(D, U) {
            x.onload = D, x.onerror = U;
          }), Bt(y, "link", o), t.state.loading |= 4, lu(y, i.precedence, e), t.instance = y;
        case "script":
          return y = Si(i.src), (d = e.querySelector(
            As(y)
          )) ? (t.instance = d, Mt(d), d) : (o = i, (d = jn.get(y)) && (o = v({}, i), zd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), Mt(d), Bt(d, "link", o), e.head.appendChild(d), t.instance = d);
        case "void":
          return null;
        default:
          throw Error(a(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, lu(o, i.precedence, e));
    return t.instance;
  }
  function lu(e, t, i) {
    for (var o = i.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), d = o.length ? o[o.length - 1] : null, y = d, x = 0; x < o.length; x++) {
      var D = o[x];
      if (D.dataset.precedence === t) y = D;
      else if (y !== d) break;
    }
    y ? y.parentNode.insertBefore(e, y.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function Dd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function zd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var cu = null;
  function jg(e, t, i) {
    if (cu === null) {
      var o = /* @__PURE__ */ new Map(), d = cu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = cu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var y = i[d];
      if (!(y[Ii] || y[qt] || e === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var x = y.getAttribute(t) || "";
        x = e + x;
        var D = o.get(x);
        D ? D.push(y) : o.set(x, [y]);
      }
    }
    return o;
  }
  function Lg(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function N1(e, t, i) {
    if (i === 1 || t.itemProp != null) return !1;
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
  function Dg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function O1() {
  }
  function M1(e, t, i) {
    if (Ts === null) throw Error(a(475));
    var o = Ts;
    if (t.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = bi(i.href), y = e.querySelector(
          Cs(d)
        );
        if (y) {
          e = y._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = du.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = y, Mt(y);
          return;
        }
        y = e.ownerDocument || e, i = Mg(i), (d = jn.get(d)) && Dd(i, d), y = y.createElement("link"), Mt(y);
        var x = y;
        x._p = new Promise(function(D, U) {
          x.onload = D, x.onerror = U;
        }), Bt(y, "link", i), t.instance = y;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = du.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function R1() {
    if (Ts === null) throw Error(a(475));
    var e = Ts;
    return e.stylesheets && e.count === 0 && Pd(e, e.stylesheets), 0 < e.count ? function(t) {
      var i = setTimeout(function() {
        if (e.stylesheets && Pd(e, e.stylesheets), e.unsuspend) {
          var o = e.unsuspend;
          e.unsuspend = null, o();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(i);
      };
    } : null;
  }
  function du() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Pd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var fu = null;
  function Pd(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, fu = /* @__PURE__ */ new Map(), t.forEach(j1, e), fu = null, du.call(e));
  }
  function j1(e, t) {
    if (!(t.state.loading & 4)) {
      var i = fu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), fu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), y = 0; y < d.length; y++) {
          var x = d[y];
          (x.nodeName === "LINK" || x.getAttribute("media") !== "not all") && (i.set(x.dataset.precedence, x), o = x);
        }
        o && i.set(null, o);
      }
      d = t.instance, x = d.getAttribute("data-precedence"), y = i.get(x) || o, y === o && i.set(null, d), i.set(x, d), this.count++, o = du.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), y ? y.parentNode.insertBefore(d, y.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ks = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function L1(e, t, i, o, d, y, x, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.hiddenUpdates = jl(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = y, this.onRecoverableError = x, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function zg(e, t, i, o, d, y, x, D, U, X, re, oe) {
    return e = new L1(
      e,
      t,
      i,
      x,
      D,
      U,
      X,
      oe
    ), t = 1, y === !0 && (t |= 24), y = dn(3, null, null, t), e.current = y, y.stateNode = e, t = yc(), t.refCount++, e.pooledCache = t, t.refCount++, y.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: t
    }, wc(y), e;
  }
  function Pg(e) {
    return e ? (e = Ja, e) : Ja;
  }
  function Ig(e, t, i, o, d, y) {
    d = Pg(d), o.context === null ? o.context = d : o.pendingContext = d, o = xr(t), o.payload = { element: i }, y = y === void 0 ? null : y, y !== null && (o.callback = y), i = Nr(e, o, t), i !== null && (gn(i, e, t), rs(i, e, t));
  }
  function Bg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Id(e, t) {
    Bg(e, t), (e = e.alternate) && Bg(e, t);
  }
  function Ug(e) {
    if (e.tag === 13) {
      var t = Ka(e, 67108864);
      t !== null && gn(t, e, 67108864), Id(e, 67108864);
    }
  }
  var hu = !0;
  function D1(e, t, i, o) {
    var d = R.T;
    R.T = null;
    var y = B.p;
    try {
      B.p = 2, Bd(e, t, i, o);
    } finally {
      B.p = y, R.T = d;
    }
  }
  function z1(e, t, i, o) {
    var d = R.T;
    R.T = null;
    var y = B.p;
    try {
      B.p = 8, Bd(e, t, i, o);
    } finally {
      B.p = y, R.T = d;
    }
  }
  function Bd(e, t, i, o) {
    if (hu) {
      var d = Ud(o);
      if (d === null)
        Td(
          e,
          t,
          o,
          pu,
          i
        ), qg(e, o);
      else if (I1(
        d,
        e,
        t,
        i,
        o
      ))
        o.stopPropagation();
      else if (qg(e, o), t & 4 && -1 < P1.indexOf(e)) {
        for (; d !== null; ) {
          var y = Ba(d);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                  var x = Cn(y.pendingLanes);
                  if (x !== 0) {
                    var D = y;
                    for (D.pendingLanes |= 2, D.entangledLanes |= 2; x; ) {
                      var U = 1 << 31 - zt(x);
                      D.entanglements[1] |= U, x &= ~U;
                    }
                    Xn(y), (Je & 6) === 0 && (Ko = Ne() + 500, bs(0));
                  }
                }
                break;
              case 13:
                D = Ka(y, 2), D !== null && gn(D, y, 2), Wo(), Id(y, 2);
            }
          if (y = Ud(o), y === null && Td(
            e,
            t,
            o,
            pu,
            i
          ), y === d) break;
          d = y;
        }
        d !== null && o.stopPropagation();
      } else
        Td(
          e,
          t,
          o,
          null,
          i
        );
    }
  }
  function Ud(e) {
    return e = Vl(e), Hd(e);
  }
  var pu = null;
  function Hd(e) {
    if (pu = null, e = Ia(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (i === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return pu = e, null;
  }
  function Hg(e) {
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
        switch (Be()) {
          case ge:
            return 2;
          case te:
            return 8;
          case ue:
          case ye:
            return 32;
          case _e:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qd = !1, qr = null, Gr = null, Zr = null, xs = /* @__PURE__ */ new Map(), Ns = /* @__PURE__ */ new Map(), Vr = [], P1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function qg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Zr = null;
        break;
      case "pointerover":
      case "pointerout":
        xs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ns.delete(t.pointerId);
    }
  }
  function Os(e, t, i, o, d, y) {
    return e === null || e.nativeEvent !== y ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: y,
      targetContainers: [d]
    }, t !== null && (t = Ba(t), t !== null && Ug(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function I1(e, t, i, o, d) {
    switch (t) {
      case "focusin":
        return qr = Os(
          qr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "dragenter":
        return Gr = Os(
          Gr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return Zr = Os(
          Zr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var y = d.pointerId;
        return xs.set(
          y,
          Os(
            xs.get(y) || null,
            e,
            t,
            i,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return y = d.pointerId, Ns.set(
          y,
          Os(
            Ns.get(y) || null,
            e,
            t,
            i,
            o,
            d
          )
        ), !0;
    }
    return !1;
  }
  function Gg(e) {
    var t = Ia(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = h(i), t !== null) {
            e.blockedOn = t, M_(e.priority, function() {
              if (i.tag === 13) {
                var o = mn();
                o = Ll(o);
                var d = Ka(i, o);
                d !== null && gn(d, i, o), Id(i, o);
              }
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function mu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = Ud(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Zl = o, i.target.dispatchEvent(o), Zl = null;
      } else
        return t = Ba(i), t !== null && Ug(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function Zg(e, t, i) {
    mu(e) && i.delete(t);
  }
  function B1() {
    qd = !1, qr !== null && mu(qr) && (qr = null), Gr !== null && mu(Gr) && (Gr = null), Zr !== null && mu(Zr) && (Zr = null), xs.forEach(Zg), Ns.forEach(Zg);
  }
  function gu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qd || (qd = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      B1
    )));
  }
  var vu = null;
  function Vg(e) {
    vu !== e && (vu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        vu === e && (vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Hd(o || i) === null)
              continue;
            break;
          }
          var y = Ba(i);
          y !== null && (e.splice(t, 3), t -= 3, Hc(
            y,
            {
              pending: !0,
              data: d,
              method: i.method,
              action: o
            },
            o,
            d
          ));
        }
      }
    ));
  }
  function Ms(e) {
    function t(U) {
      return gu(U, e);
    }
    qr !== null && gu(qr, e), Gr !== null && gu(Gr, e), Zr !== null && gu(Zr, e), xs.forEach(t), Ns.forEach(t);
    for (var i = 0; i < Vr.length; i++) {
      var o = Vr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Vr.length && (i = Vr[0], i.blockedOn === null); )
      Gg(i), i.blockedOn === null && Vr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], y = i[o + 1], x = d[Wt] || null;
        if (typeof y == "function")
          x || Vg(i);
        else if (x) {
          var D = null;
          if (y && y.hasAttribute("formAction")) {
            if (d = y, x = y[Wt] || null)
              D = x.formAction;
            else if (Hd(d) !== null) continue;
          } else D = x.action;
          typeof D == "function" ? i[o + 1] = D : (i.splice(o, 3), o -= 3), Vg(i);
        }
      }
  }
  function Gd(e) {
    this._internalRoot = e;
  }
  yu.prototype.render = Gd.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    var i = t.current, o = mn();
    Ig(i, o, e, t, null, null);
  }, yu.prototype.unmount = Gd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ig(e.current, 2, null, e, null, null), Wo(), t[Pa] = null;
    }
  };
  function yu(e) {
    this._internalRoot = e;
  }
  yu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = uh();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Vr.length && t !== 0 && t < Vr[i].priority; i++) ;
      Vr.splice(i, 0, e), i === 0 && Gg(e);
    }
  };
  var $g = r.version;
  if ($g !== "19.1.1")
    throw Error(
      a(
        527,
        $g,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = f(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var U1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_u.isDisabled && _u.supportsFiber)
      try {
        Ot = _u.inject(
          U1
        ), et = _u;
      } catch {
      }
  }
  return Ds.createRoot = function(e, t) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = um, y = lm, x = cm, D = null;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (y = t.onCaughtError), t.onRecoverableError !== void 0 && (x = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = zg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      d,
      y,
      x,
      D,
      null
    ), e[Pa] = t.current, Ad(e), new Gd(t);
  }, Ds.hydrateRoot = function(e, t, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", y = um, x = lm, D = cm, U = null, X = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (y = i.onUncaughtError), i.onCaughtError !== void 0 && (x = i.onCaughtError), i.onRecoverableError !== void 0 && (D = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (U = i.unstable_transitionCallbacks), i.formState !== void 0 && (X = i.formState)), t = zg(
      e,
      1,
      !0,
      t,
      i ?? null,
      o,
      d,
      y,
      x,
      D,
      U,
      X
    ), t.context = Pg(null), i = t.current, o = mn(), o = Ll(o), d = xr(o), d.callback = null, Nr(i, d, o), i = o, t.current.lanes = i, Pi(t, i), Xn(t), e[Pa] = t.current, Ad(e), new yu(t);
  }, Ds.version = "19.1.1", Ds;
}
var ov;
function E2() {
  if (ov) return Yd.exports;
  ov = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yd.exports = w2(), Yd.exports;
}
var C2 = E2();
const uv = /* @__PURE__ */ Hf(C2);
var A2 = Object.defineProperty, T2 = (n, r, s) => r in n ? A2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, lv = (n, r, s) => T2(n, typeof r != "symbol" ? r + "" : r, s);
class f0 {
  constructor(r, s) {
    lv(this, "settingsKey"), lv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
    const { strategy: s = "recursive" } = r, a = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], h = {
      version: {
        changed: !1,
        new: a ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), h;
    const m = {
      ...h,
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
      let f = function(g, v) {
        let E = !1;
        for (const b of Object.keys(v))
          g[b] === void 0 ? (g[b] = v[b], E = !0) : typeof v[b] == "object" && v[b] !== null && (g[b] = g[b] || {}, f(g[b], v[b]) && (E = !0));
        return E;
      };
      a && c.version !== a && (m.version.changed = !0, m.version.new = a, c.version = a), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (f(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !c.version && (c.version = a, m.version.changed = !0, m.version.new = a), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let f = structuredClone(c), g = c.formatVersion;
      try {
        let v;
        do {
          v = !1;
          let E = s.find((b) => b.from === g);
          if (E && E.to > g)
            f = await E.action(f), g = E.to, f.formatVersion = E.to, v = !0;
          else
            for (const b of s)
              if (b.from === "*" && b.to > g && g !== b.to) {
                f = await b.action(f), g = b.to, f.formatVersion = b.to, v = !0;
                break;
              }
        } while (v);
        if (g !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = g;
          const E = this.defaultSettings.version;
          E && (f.version = E);
        }
        if (m.formatVersion.changed) {
          for (const E of Object.keys(c))
            delete c[E];
          Object.assign(c, f), this.saveSettings();
        }
      } catch (v) {
        throw console.error("Failed to apply version changes:", v), new Error(`Version migration failed: ${v instanceof Error ? v.message : v}`, {
          cause: v
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
  return Array.isArray ? Array.isArray(n) : m0(n) === "[object Array]";
}
function k2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function x2(n) {
  return n == null ? "" : k2(n);
}
function Qn(n) {
  return typeof n == "string";
}
function h0(n) {
  return typeof n == "number";
}
function N2(n) {
  return n === !0 || n === !1 || O2(n) && m0(n) == "[object Boolean]";
}
function p0(n) {
  return typeof n == "object";
}
function O2(n) {
  return p0(n) && n !== null;
}
function bn(n) {
  return n != null;
}
function Kd(n) {
  return !n.trim().length;
}
function m0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const M2 = "Incorrect 'index' type", R2 = (n) => `Invalid value for key ${n}`, j2 = (n) => `Pattern length exceeds max of ${n}.`, L2 = (n) => `Missing ${n} property in key`, D2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, cv = Object.prototype.hasOwnProperty;
class z2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = g0(a);
      this._keys.push(u), this._keyMap[u.id] = u, s += u.weight;
    }), this._keys.forEach((a) => {
      a.weight /= s;
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
function g0(n) {
  let r = null, s = null, a = null, u = 1, c = null;
  if (Qn(n) || Sr(n))
    a = n, r = dv(n), s = bf(n);
  else {
    if (!cv.call(n, "name"))
      throw new Error(L2("name"));
    const h = n.name;
    if (a = h, cv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(D2(h));
    r = dv(h), s = bf(h), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: c };
}
function dv(n) {
  return Sr(n) ? n : n.split(".");
}
function bf(n) {
  return Sr(n) ? n.join(".") : n;
}
function P2(n, r) {
  let s = [], a = !1;
  const u = (c, h, m) => {
    if (bn(c))
      if (!h[m])
        s.push(c);
      else {
        let f = h[m];
        const g = c[f];
        if (!bn(g))
          return;
        if (m === h.length - 1 && (Qn(g) || h0(g) || N2(g)))
          s.push(x2(g));
        else if (Sr(g)) {
          a = !0;
          for (let v = 0, E = g.length; v < E; v += 1)
            u(g[v], h, m + 1);
        } else h.length && u(g, h, m + 1);
      }
  };
  return u(n, Qn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const I2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, B2 = {
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
}, U2 = {
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
}, H2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: P2,
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
var De = {
  ...B2,
  ...I2,
  ...U2,
  ...H2
};
const q2 = /[^ ]+/g;
function G2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(q2).length;
      if (s.has(c))
        return s.get(c);
      const h = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(h * a) / a);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class Gf {
  constructor({
    getFn: r = De.getFn,
    fieldNormWeight: s = De.fieldNormWeight
  } = {}) {
    this.norm = G2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((s, a) => {
      this._keysMap[s.id] = a;
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
    for (let s = r, a = this.size(); s < a; s += 1)
      this.records[s].i -= 1;
  }
  getValueForItemAtKeyId(r, s) {
    return r[this._keysMap[s]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, s) {
    if (!bn(r) || Kd(r))
      return;
    let a = {
      v: r,
      i: s,
      n: this.norm.get(r)
    };
    this.records.push(a);
  }
  _addObject(r, s) {
    let a = { i: s, $: {} };
    this.keys.forEach((u, c) => {
      let h = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (bn(h)) {
        if (Sr(h)) {
          let m = [];
          const f = [{ nestedArrIndex: -1, value: h }];
          for (; f.length; ) {
            const { nestedArrIndex: g, value: v } = f.pop();
            if (bn(v))
              if (Qn(v) && !Kd(v)) {
                let E = {
                  v,
                  i: g,
                  n: this.norm.get(v)
                };
                m.push(E);
              } else Sr(v) && v.forEach((E, b) => {
                f.push({
                  nestedArrIndex: b,
                  value: E
                });
              });
          }
          a.$[c] = m;
        } else if (Qn(h) && !Kd(h)) {
          let m = {
            v: h,
            n: this.norm.get(h)
          };
          a.$[c] = m;
        }
      }
    }), this.records.push(a);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function v0(n, r, { getFn: s = De.getFn, fieldNormWeight: a = De.fieldNormWeight } = {}) {
  const u = new Gf({ getFn: s, fieldNormWeight: a });
  return u.setKeys(n.map(g0)), u.setSources(r), u.create(), u;
}
function Z2(n, { getFn: r = De.getFn, fieldNormWeight: s = De.fieldNormWeight } = {}) {
  const { keys: a, records: u } = n, c = new Gf({ getFn: r, fieldNormWeight: s });
  return c.setKeys(a), c.setIndexRecords(u), c;
}
function bu(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = De.distance,
  ignoreLocation: c = De.ignoreLocation
} = {}) {
  const h = r / n.length;
  if (c)
    return h;
  const m = Math.abs(a - s);
  return u ? h + m / u : m ? 1 : h;
}
function V2(n = [], r = De.minMatchCharLength) {
  let s = [], a = -1, u = -1, c = 0;
  for (let h = n.length; c < h; c += 1) {
    let m = n[c];
    m && a === -1 ? a = c : !m && a !== -1 && (u = c - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return n[c - 1] && c - a >= r && s.push([a, c - 1]), s;
}
const Na = 32;
function $2(n, r, s, {
  location: a = De.location,
  distance: u = De.distance,
  threshold: c = De.threshold,
  findAllMatches: h = De.findAllMatches,
  minMatchCharLength: m = De.minMatchCharLength,
  includeMatches: f = De.includeMatches,
  ignoreLocation: g = De.ignoreLocation
} = {}) {
  if (r.length > Na)
    throw new Error(j2(Na));
  const v = r.length, E = n.length, b = Math.max(0, Math.min(a, E));
  let _ = c, p = b;
  const C = m > 1 || f, T = C ? Array(E) : [];
  let j;
  for (; (j = n.indexOf(r, p)) > -1; ) {
    let A = bu(r, {
      currentLocation: j,
      expectedLocation: b,
      distance: u,
      ignoreLocation: g
    });
    if (_ = Math.min(A, _), p = j + v, C) {
      let O = 0;
      for (; O < v; )
        T[j + O] = 1, O += 1;
    }
  }
  p = -1;
  let k = [], P = 1, l = v + E;
  const S = 1 << v - 1;
  for (let A = 0; A < v; A += 1) {
    let O = 0, L = l;
    for (; O < L; )
      bu(r, {
        errors: A,
        currentLocation: b + L,
        expectedLocation: b,
        distance: u,
        ignoreLocation: g
      }) <= _ ? O = L : l = L, L = Math.floor((l - O) / 2 + O);
    l = L;
    let M = Math.max(1, b - L + 1), z = h ? E : Math.min(b + L, E) + v, H = Array(z + 2);
    H[z + 1] = (1 << A) - 1;
    for (let G = z; G >= M; G -= 1) {
      let Q = G - 1, R = s[n.charAt(Q)];
      if (C && (T[Q] = +!!R), H[G] = (H[G + 1] << 1 | 1) & R, A && (H[G] |= (k[G + 1] | k[G]) << 1 | 1 | k[G + 1]), H[G] & S && (P = bu(r, {
        errors: A,
        currentLocation: Q,
        expectedLocation: b,
        distance: u,
        ignoreLocation: g
      }), P <= _)) {
        if (_ = P, p = Q, p <= b)
          break;
        M = Math.max(1, 2 * b - p);
      }
    }
    if (bu(r, {
      errors: A + 1,
      currentLocation: b,
      expectedLocation: b,
      distance: u,
      ignoreLocation: g
    }) > _)
      break;
    k = H;
  }
  const w = {
    isMatch: p >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, P)
  };
  if (C) {
    const A = V2(T, m);
    A.length ? f && (w.indices = A) : w.isMatch = !1;
  }
  return w;
}
function Y2(n) {
  let r = {};
  for (let s = 0, a = n.length; s < a; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const hl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class y0 {
  constructor(r, {
    location: s = De.location,
    threshold: a = De.threshold,
    distance: u = De.distance,
    includeMatches: c = De.includeMatches,
    findAllMatches: h = De.findAllMatches,
    minMatchCharLength: m = De.minMatchCharLength,
    isCaseSensitive: f = De.isCaseSensitive,
    ignoreDiacritics: g = De.ignoreDiacritics,
    ignoreLocation: v = De.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: m,
      isCaseSensitive: f,
      ignoreDiacritics: g,
      ignoreLocation: v
    }, r = f ? r : r.toLowerCase(), r = g ? hl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (_, p) => {
      this.chunks.push({
        pattern: _,
        alphabet: Y2(_),
        startIndex: p
      });
    }, b = this.pattern.length;
    if (b > Na) {
      let _ = 0;
      const p = b % Na, C = b - p;
      for (; _ < C; )
        E(this.pattern.substr(_, Na), _), _ += Na;
      if (p) {
        const T = b - Na;
        E(this.pattern.substr(T), T);
      }
    } else
      E(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: s, ignoreDiacritics: a, includeMatches: u } = this.options;
    if (r = s ? r : r.toLowerCase(), r = a ? hl(r) : r, this.pattern === r) {
      let C = {
        isMatch: !0,
        score: 0
      };
      return u && (C.indices = [[0, r.length - 1]]), C;
    }
    const {
      location: c,
      distance: h,
      threshold: m,
      findAllMatches: f,
      minMatchCharLength: g,
      ignoreLocation: v
    } = this.options;
    let E = [], b = 0, _ = !1;
    this.chunks.forEach(({ pattern: C, alphabet: T, startIndex: j }) => {
      const { isMatch: k, score: P, indices: l } = $2(r, C, T, {
        location: c + j,
        distance: h,
        threshold: m,
        findAllMatches: f,
        minMatchCharLength: g,
        includeMatches: u,
        ignoreLocation: v
      });
      k && (_ = !0), b += P, k && l && (E = [...E, ...l]);
    });
    let p = {
      isMatch: _,
      score: _ ? b / this.chunks.length : 1
    };
    return _ && u && (p.indices = E), p;
  }
}
class ea {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return fv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return fv(r, this.singleRegex);
  }
  search() {
  }
}
function fv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class F2 extends ea {
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
class X2 extends ea {
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
    const a = r.indexOf(this.pattern) === -1;
    return {
      isMatch: a,
      score: a ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class Q2 extends ea {
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
class K2 extends ea {
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
class J2 extends ea {
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
class W2 extends ea {
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
class _0 extends ea {
  constructor(r, {
    location: s = De.location,
    threshold: a = De.threshold,
    distance: u = De.distance,
    includeMatches: c = De.includeMatches,
    findAllMatches: h = De.findAllMatches,
    minMatchCharLength: m = De.minMatchCharLength,
    isCaseSensitive: f = De.isCaseSensitive,
    ignoreDiacritics: g = De.ignoreDiacritics,
    ignoreLocation: v = De.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new y0(r, {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: h,
      minMatchCharLength: m,
      isCaseSensitive: f,
      ignoreDiacritics: g,
      ignoreLocation: v
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
class b0 extends ea {
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
    let s = 0, a;
    const u = [], c = this.pattern.length;
    for (; (a = r.indexOf(this.pattern, s)) > -1; )
      s = a + c, u.push([a, s - 1]);
    const h = !!u.length;
    return {
      isMatch: h,
      score: h ? 0 : 1,
      indices: u
    };
  }
}
const Sf = [
  F2,
  b0,
  Q2,
  K2,
  W2,
  J2,
  X2,
  _0
], hv = Sf.length, e3 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, t3 = "|";
function n3(n, r = {}) {
  return n.split(t3).map((s) => {
    let a = s.trim().split(e3).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, h = a.length; c < h; c += 1) {
      const m = a[c];
      let f = !1, g = -1;
      for (; !f && ++g < hv; ) {
        const v = Sf[g];
        let E = v.isMultiMatch(m);
        E && (u.push(new v(E, r)), f = !0);
      }
      if (!f)
        for (g = -1; ++g < hv; ) {
          const v = Sf[g];
          let E = v.isSingleMatch(m);
          if (E) {
            u.push(new v(E, r));
            break;
          }
        }
    }
    return u;
  });
}
const r3 = /* @__PURE__ */ new Set([_0.type, b0.type]);
class a3 {
  constructor(r, {
    isCaseSensitive: s = De.isCaseSensitive,
    ignoreDiacritics: a = De.ignoreDiacritics,
    includeMatches: u = De.includeMatches,
    minMatchCharLength: c = De.minMatchCharLength,
    ignoreLocation: h = De.ignoreLocation,
    findAllMatches: m = De.findAllMatches,
    location: f = De.location,
    threshold: g = De.threshold,
    distance: v = De.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: a,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: h,
      location: f,
      threshold: g,
      distance: v
    }, r = s ? r : r.toLowerCase(), r = a ? hl(r) : r, this.pattern = r, this.query = n3(this.pattern, this.options);
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
    const { includeMatches: a, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    r = u ? r : r.toLowerCase(), r = c ? hl(r) : r;
    let h = 0, m = [], f = 0;
    for (let g = 0, v = s.length; g < v; g += 1) {
      const E = s[g];
      m.length = 0, h = 0;
      for (let b = 0, _ = E.length; b < _; b += 1) {
        const p = E[b], { isMatch: C, indices: T, score: j } = p.search(r);
        if (C) {
          if (h += 1, f += j, a) {
            const k = p.constructor.type;
            r3.has(k) ? m = [...m, ...T] : m.push(T);
          }
        } else {
          f = 0, h = 0, m.length = 0;
          break;
        }
      }
      if (h) {
        let b = {
          isMatch: !0,
          score: f / h
        };
        return a && (b.indices = m), b;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const wf = [];
function i3(...n) {
  wf.push(...n);
}
function Ef(n, r) {
  for (let s = 0, a = wf.length; s < a; s += 1) {
    let u = wf[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new y0(n, r);
}
const pl = {
  AND: "$and",
  OR: "$or"
}, Cf = {
  PATH: "$path",
  PATTERN: "$val"
}, Af = (n) => !!(n[pl.AND] || n[pl.OR]), s3 = (n) => !!n[Cf.PATH], o3 = (n) => !Sr(n) && p0(n) && !Af(n), pv = (n) => ({
  [pl.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function S0(n, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let c = Object.keys(u);
    const h = s3(u);
    if (!h && c.length > 1 && !Af(u))
      return a(pv(u));
    if (o3(u)) {
      const f = h ? u[Cf.PATH] : c[0], g = h ? u[Cf.PATTERN] : u[f];
      if (!Qn(g))
        throw new Error(R2(f));
      const v = {
        keyId: bf(f),
        pattern: g
      };
      return s && (v.searcher = Ef(g, r)), v;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((f) => {
      const g = u[f];
      Sr(g) && g.forEach((v) => {
        m.children.push(a(v));
      });
    }), m;
  };
  return Af(n) || (n = pv(n)), a(n);
}
function u3(n, { ignoreFieldNorm: r = De.ignoreFieldNorm }) {
  n.forEach((s) => {
    let a = 1;
    s.matches.forEach(({ key: u, norm: c, score: h }) => {
      const m = u ? u.weight : null;
      a *= Math.pow(
        h === 0 && m ? Number.EPSILON : h,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = a;
  });
}
function l3(n, r) {
  const s = n.matches;
  r.matches = [], bn(s) && s.forEach((a) => {
    if (!bn(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: c } = a;
    let h = {
      indices: u,
      value: c
    };
    a.key && (h.key = a.key.src), a.idx > -1 && (h.refIndex = a.idx), r.matches.push(h);
  });
}
function c3(n, r) {
  r.score = n.score;
}
function d3(n, r, {
  includeMatches: s = De.includeMatches,
  includeScore: a = De.includeScore
} = {}) {
  const u = [];
  return s && u.push(l3), a && u.push(c3), n.map((c) => {
    const { idx: h } = c, m = {
      item: r[h],
      refIndex: h
    };
    return u.length && u.forEach((f) => {
      f(c, m);
    }), m;
  });
}
class zi {
  constructor(r, s = {}, a) {
    this.options = { ...De, ...s }, this.options.useExtendedSearch, this._keyStore = new z2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof Gf))
      throw new Error(M2);
    this._myIndex = s || v0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    bn(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const s = [];
    for (let a = 0, u = this._docs.length; a < u; a += 1) {
      const c = this._docs[a];
      r(c, a) && (this.removeAt(a), a -= 1, u -= 1, s.push(c));
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
      includeMatches: a,
      includeScore: u,
      shouldSort: c,
      sortFn: h,
      ignoreFieldNorm: m
    } = this.options;
    let f = Qn(r) ? Qn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return u3(f, { ignoreFieldNorm: m }), c && f.sort(h), h0(s) && s > -1 && (f = f.slice(0, s)), d3(f, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = Ef(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: c, i: h, n: m }) => {
      if (!bn(c))
        return;
      const { isMatch: f, score: g, indices: v } = s.searchIn(c);
      f && u.push({
        item: c,
        idx: h,
        matches: [{ score: g, value: c, norm: m, indices: v }]
      });
    }), u;
  }
  _searchLogical(r) {
    const s = S0(r, this.options), a = (m, f, g) => {
      if (!m.children) {
        const { keyId: E, searcher: b } = m, _ = this._findMatches({
          key: this._keyStore.get(E),
          value: this._myIndex.getValueForItemAtKeyId(f, E),
          searcher: b
        });
        return _ && _.length ? [
          {
            idx: g,
            item: f,
            matches: _
          }
        ] : [];
      }
      const v = [];
      for (let E = 0, b = m.children.length; E < b; E += 1) {
        const _ = m.children[E], p = a(_, f, g);
        if (p.length)
          v.push(...p);
        else if (m.operator === pl.AND)
          return [];
      }
      return v;
    }, u = this._myIndex.records, c = {}, h = [];
    return u.forEach(({ $: m, i: f }) => {
      if (bn(m)) {
        let g = a(s, m, f);
        g.length && (c[f] || (c[f] = { idx: f, item: m, matches: [] }, h.push(c[f])), g.forEach(({ matches: v }) => {
          c[f].matches.push(...v);
        }));
      }
    }), h;
  }
  _searchObjectList(r) {
    const s = Ef(r, this.options), { keys: a, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: h, i: m }) => {
      if (!bn(h))
        return;
      let f = [];
      a.forEach((g, v) => {
        f.push(
          ...this._findMatches({
            key: g,
            value: h[v],
            searcher: s
          })
        );
      }), f.length && c.push({
        idx: m,
        item: h,
        matches: f
      });
    }), c;
  }
  _findMatches({ key: r, value: s, searcher: a }) {
    if (!bn(s))
      return [];
    let u = [];
    if (Sr(s))
      s.forEach(({ v: c, i: h, n: m }) => {
        if (!bn(c))
          return;
        const { isMatch: f, score: g, indices: v } = a.searchIn(c);
        f && u.push({
          score: g,
          key: r,
          value: c,
          idx: h,
          norm: m,
          indices: v
        });
      });
    else {
      const { v: c, n: h } = s, { isMatch: m, score: f, indices: g } = a.searchIn(c);
      m && u.push({ score: f, key: r, value: c, norm: h, indices: g });
    }
    return u;
  }
}
zi.version = "7.1.0";
zi.createIndex = v0;
zi.parseIndex = Z2;
zi.config = De;
zi.parseQuery = S0;
i3(a3);
var f3 = Object.defineProperty, h3 = (n, r, s) => r in n ? f3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, p3 = (n, r, s) => h3(n, r + "", s);
let m3 = class {
  constructor() {
    p3(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var s;
    const a = this.requestMap.get(r);
    if (a) {
      if (a.abortController)
        try {
          a.abortController.abort();
        } catch {
        }
      (s = a.options) != null && s.onFinish && await a.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, s) {
    var a;
    const u = SillyTavern.getContext(), c = u.uuidv4(), h = ((a = r?.custom) == null ? void 0 : a.stream) ?? !1;
    if (this.requestMap.set(c, {
      abortController: s?.abortController,
      isStream: h,
      options: s
    }), h)
      try {
        const m = await u.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        s != null && s.onStart && await s.onStart(c);
        let f;
        for await (const g of m())
          f = g, s != null && s.onEntry && await s.onEntry(c, g);
        s != null && s.onFinish && await s.onFinish(c, f);
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
    for (const [s, a] of this.requestMap)
      r.set(s, a.abortController);
    return r;
  }
};
async function g3(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function Ce(n, r, { escapeHtml: s = !0 } = {}) {
  await g3("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function Jd(n) {
  return V1(n);
}
function mv(n, r) {
  return G1(n, r);
}
function Su(n, r, s) {
  return Z1(n, r, s);
}
function v3(n, r, s) {
  return t2(n, r, s);
}
function y3(n, r) {
  return n2(n, r);
}
function _3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return q1(n, { customStoryString: r, customInstructSettings: s });
}
function Ca(n) {
  return u2(n);
}
function b3() {
  return {
    prompt: Rs[js.prompt],
    interval: Rs[js.interval],
    position: Rs[js.position],
    depth: Rs[js.depth],
    role: Rs[js.role]
  };
}
function S3(n, r) {
  return c2(n, r);
}
function w3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: h,
  type: m,
  quietPrompt: f,
  quietImage: g,
  extensionPrompts: v,
  cyclePrompt: E,
  systemPromptOverride: b,
  jailbreakPromptOverride: _,
  personaDescription: p,
  messages: C,
  messageExamples: T
}, j) {
  return l2(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: a,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: h,
      type: m,
      quietPrompt: f,
      quietImage: g,
      cyclePrompt: E,
      systemPromptOverride: b,
      jailbreakPromptOverride: _,
      personaDescription: p,
      extensionPrompts: v,
      messages: C,
      messageExamples: T
    },
    j
  );
}
function E3(n) {
  return a2(n);
}
function C3(n) {
  return i2(n);
}
function A3(n, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: c,
  depth: h
}) {
  return f2(n, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: c, depth: h });
}
function T3(n, r, { characterOverride: s = null } = {}) {
  return d2(n, r, { characterOverride: s });
}
async function k3(n, r) {
  return await r2(n, r);
}
function gv(n, {
  wiFormat: r
} = {}) {
  return s2(n, { wiFormat: r });
}
function zs(n) {
  return o2(n);
}
function w0(n, {
  manualAvatarKey: r
} = {}) {
  return h2(n, { manualAvatarKey: r });
}
function ml(n, r) {
  return F1(n, r);
}
class x3 {
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
var N3 = Object.defineProperty, O3 = (n, r, s) => r in n ? N3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, wu = (n, r, s) => O3(n, typeof r != "symbol" ? r + "" : r, s);
class M3 {
  constructor(r) {
    wu(this, "messages", []), wu(this, "tokenizer"), wu(this, "maxContext"), wu(this, "currentTokenCount", 0), this.tokenizer = new x3(), this.maxContext = r;
  }
  getTokenCount(r) {
    var s, a;
    return r.content ? ((a = (s = r.source) == null ? void 0 : s.extra) == null ? void 0 : a.token_count) ?? this.tokenizer.encode(r.content).length : 0;
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
    const s = r.filter((m) => m.content), a = s.map((m) => this.getTokenCount(m)), u = a.reduce((m, f) => m + f, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const h = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const f = s[m], g = a[m];
      if (this.currentTokenCount + c + g <= this.maxContext)
        h.unshift(f), c += g;
      else
        break;
    }
    return h.length > 0 && (this.messages.push(...h), this.currentTokenCount += c), h.length === s.length;
  }
  insert(r, s) {
    if (!s.content) return !0;
    const a = this.getTokenCount(s);
    return this.currentTokenCount + a > this.maxContext ? !1 : (this.messages.splice(r, 0, s), this.currentTokenCount += a, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function E0(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: c,
  maxContext: h,
  includeNames: m,
  ignoreCharacterFields: f,
  ignoreAuthorNote: g,
  ignoreWorldInfo: v,
  messageIndexesBetween: E
} = {}) {
  var b, _, p, C, T, j, k, P, l, S, w, A, O, L;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const M = SillyTavern.getContext();
  let { description: z, personality: H, persona: Z, scenario: G, mesExamples: Q, system: R, jailbreak: B } = f ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : M.getCharacterCardFields({
    chid: r
  });
  const K = n === "textgenerationwebui" ? (b = M.getPresetManager("instruct")) == null ? void 0 : b.getCompletionPresetByName(a) : void 0, ie = !!(K != null && K.enabled);
  let I = mv(Q, ie);
  function $() {
    var te, ue;
    if (typeof h == "number")
      return h;
    if (!h || h === "active" || !s)
      return Jd();
    if (typeof h == "number")
      return h;
    let ye;
    if (n === "textgenerationwebui") {
      const _e = (te = M.getPresetManager("textgenerationwebui")) == null ? void 0 : te.getCompletionPresetByName(s);
      ye = _e?.max_length;
    } else {
      const _e = (ue = M.getPresetManager("openai")) == null ? void 0 : ue.getCompletionPresetByName(s);
      ye = _e?.openai_max_context;
    }
    return typeof ye == "number" ? ye : Jd();
  }
  let ne = [];
  const le = $();
  if (le <= 0)
    return { result: [], warnings: ne };
  const fe = new M3(le), Ae = M.ToolManager.isToolCallingSupported(), ee = E?.start ?? 0, we = E != null && E.end ? E.end + 1 : void 0;
  let be = ee === -1 && we === 0 ? [] : M.chat.slice(ee, we).filter((te) => {
    var ue;
    return !te.is_system || Ae && Array.isArray((ue = te.extra) == null ? void 0 : ue.tool_invocations);
  });
  be = await Promise.all(
    be.map(async (te, ue) => {
      var ye, _e;
      let Oe = te.mes, ut = te.is_user ? Xg.USER_INPUT : Xg.AI_OUTPUT, Ot = { isPrompt: !0, depth: be.length - ue - 1 }, et = A3(Oe, ut, Ot);
      return et = await k3(te, et), (ye = te?.extra) != null && ye.append_title && (_e = te?.extra) != null && _e.title && (et = `${et}

${te.extra.title}`), {
        ...te,
        mes: et,
        index: ue
      };
    })
  );
  const $e = be.map((te) => X1 ? `${te.name}: ${te.mes}` : te.mes).reverse(), { worldInfoString: Ge, worldInfoBefore: F, worldInfoAfter: de, worldInfoExamples: ve, worldInfoDepth: me, anBefore: he, anAfter: Ee } = v ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await M.getWorldInfoPrompt($e, le, !1);
  for (const te of ve) {
    const ue = te.content;
    if (ue.length === 0)
      continue;
    const ye = Su(ue, wa, Yr), _e = mv(ye, ie);
    te.position === Q1.before ? I.unshift(..._e) : I.push(..._e);
  }
  function Ne() {
    const te = [];
    for (let ue = be.length - 1; ue >= 0; ue--) {
      const ye = be[ue], _e = ye.name === "System" && !ye.is_user ? "system" : ye.is_user ? "user" : "assistant";
      te.unshift({
        role: _e,
        content: m && _e != "system" ? `${ye.name}: ${ye.mes}` : ye.mes,
        source: ye
      });
    }
    fe.addMany(te);
  }
  if (n === "textgenerationwebui") {
    const te = [...I];
    I && (I = v3(I, wa, Yr));
    const ue = (_ = M.getPresetManager("sysprompt")) == null ? void 0 : _.getCompletionPresetByName(c);
    ue && (R = M.powerUserSettings.prefer_character_prompt && R ? R : Su(ue.content, wa, Yr), R = ie ? y3(
      M.substituteParams(R, wa, Yr, ue.content),
      K
    ) : R);
    const ye = {
      description: z,
      personality: H,
      persona: M.powerUserSettings.persona_description_position == Yg.IN_PROMPT ? Z : "",
      scenario: G,
      system: R,
      char: Yr,
      user: wa,
      wiBefore: F,
      wiAfter: de,
      loreBefore: F,
      loreAfter: de,
      mesExamples: I.join(""),
      mesExamplesRaw: te.join("")
    }, _e = (p = M.getPresetManager("context")) == null ? void 0 : p.getCompletionPresetByName(u);
    let Oe = _3(ye, {
      customInstructSettings: K,
      customStoryString: _e?.story_string
    });
    Oe && fe.add({ role: "system", content: Oe, ignoreInstruct: !0 }), Ne();
  } else {
    let te = function(Yt) {
      const Jt = En.find((za) => za.identifier === Yt);
      if (Jt)
        return Jt;
      const uo = Oe.prompts.find((za) => za.identifier === Yt);
      if (uo)
        return uo;
    }, ue = E3(be), ye = C3(I);
    async function _e() {
      let [Yt, Jt] = await w3(
        {
          name2: Yr,
          charDescription: z,
          charPersonality: H,
          Scenario: G,
          worldInfoBefore: F,
          worldInfoAfter: de,
          extensionPrompts: M.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: R,
          jailbreakPromptOverride: B,
          personaDescription: Z,
          messages: ue,
          messageExamples: ye
        },
        !1
      );
      fe.addMany(Yt);
    }
    if (!s)
      return ne.push("No preset name provided. Using default preset."), await _e(), { result: fe.getMessages(), warnings: ne };
    const Oe = (C = M.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!Oe)
      return console.warn(`Preset not found: ${s}. Using current preset.`), ne.push(`Preset not found: ${s}. Using current preset.`), _e(), { result: fe.getMessages(), warnings: ne };
    let ut = (T = Oe.prompt_order) == null ? void 0 : T.find((Yt) => Yt.character_id === un);
    if (!ut && Oe.prompt_order && Oe.prompt_order.length > 0 && (ut = Oe.prompt_order[0]), !ut)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), ne.push(`No prompt order found for preset: ${s}. Using current preset.`), _e(), { result: fe.getMessages(), warnings: ne };
    const Ot = G && Oe.scenario_format ? M.substituteParams(Oe.scenario_format) : "", et = H && Oe.personality_format ? M.substituteParams(Oe.personality_format) : "", wn = M.substituteParams(Oe.group_nudge_prompt), zt = Oe.impersonation_prompt ? M.substituteParams(Oe.impersonation_prompt) : "", En = [];
    v || En.push(
      {
        role: "system",
        content: gv(F, { wiFormat: Oe.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: gv(de, { wiFormat: Oe.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), f || En.push(
      { role: "system", content: z, identifier: "charDescription" },
      { role: "system", content: et, identifier: "charPersonality" },
      { role: "system", content: Ot, identifier: "scenario" }
    ), En.push(
      { role: "system", content: zt, identifier: "impersonate" },
      { role: "system", content: wn, identifier: "groupNudge" }
    );
    const ra = M.extensionPrompts["1_memory"];
    ra && ra.value && En.push({
      role: Ca(ra.role),
      content: ra.value,
      identifier: "summary",
      position: zs(ra.position)
    });
    const aa = M.extensionPrompts["2_floating_prompt"];
    !g && aa && aa.value && En.push({
      role: Ca(aa.role),
      content: aa.value,
      identifier: "authorsNote",
      position: zs(aa.position)
    });
    const tr = M.extensionPrompts["3_vectors"];
    tr && tr.value && En.push({
      role: "system",
      content: tr.value,
      identifier: "vectorsMemory",
      position: zs(tr.position)
    });
    const Zn = M.extensionPrompts["4_vectors_data_bank"];
    Zn && Zn.value && En.push({
      role: Ca(Zn.role),
      content: Zn.value,
      identifier: "vectorsDataBank",
      position: zs(Zn.position)
    });
    const Cn = M.extensionPrompts.chromadb;
    Cn && Cn.value && En.push({
      role: "system",
      content: Cn.value,
      identifier: "smartContext",
      position: zs(Cn.position)
    }), !f && M.powerUserSettings.persona_description && M.powerUserSettings.persona_description_position === Yg.IN_PROMPT && En.push({
      role: "system",
      content: M.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), ut.order.forEach((Yt) => {
      if (!Yt.enabled)
        return;
      const Jt = te(Yt.identifier);
      if (Jt && Jt.content) {
        fe.add({
          role: Jt.role ?? "system",
          content: M.substituteParams(Jt.content)
        });
        return;
      }
      Yt.identifier === "chatHistory" && Ne();
    });
  }
  const Be = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const te in M.extensionPrompts)
    if (Object.hasOwn(M.extensionPrompts, te)) {
      const ue = M.extensionPrompts[te];
      if (Be.includes(te) || !M.extensionPrompts[te].value || ![Ea.BEFORE_PROMPT, Ea.IN_PROMPT].includes(ue.position) || typeof ue.filter == "function" && !await ue.filter()) continue;
      const ye = {
        role: Ca(ue.role) ?? "system",
        content: ue.value
      };
      if (ue.position === Ea.BEFORE_PROMPT)
        fe.insert(ue.depth, ye);
      else if (ue.position === Ea.IN_PROMPT) {
        const _e = fe.getMessages();
        fe.insert(_e.length - ue.depth, ye);
      }
    }
  for (const te of me) {
    const ue = fe.getMessages();
    fe.insert(ue.length - te.depth, {
      role: Ca(te.role),
      content: te.entries.join(`
`)
    });
  }
  if (!f) {
    const te = S3(Kt, Number(un));
    if (Kt && Array.isArray(te) && te.length > 0)
      te.filter((ue) => ue.text).forEach((ue, ye) => {
        const _e = fe.getMessages();
        fe.insert(_e.length - ue.depth, { role: ue.role, content: ue.text });
      });
    else {
      const ue = Su(
        (S = (l = (P = (k = (j = M.characters[un]) == null ? void 0 : j.data) == null ? void 0 : k.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : S.trim(),
        wa,
        Yr
      ) || "";
      if (ue) {
        const ye = Y1, _e = ((L = (O = (A = (w = M.characters[un]) == null ? void 0 : w.data) == null ? void 0 : A.extensions) == null ? void 0 : O.depth_prompt) == null ? void 0 : L.role) ?? $1, Oe = fe.getMessages();
        fe.insert(Oe.length - ye, {
          role: Ca(_e),
          content: ue
        });
      }
    }
  }
  let ge = -1;
  if (!g) {
    const te = b3();
    if (te.prompt) {
      te.prompt = Su(te.prompt, wa, Yr);
      const ue = { role: Ca(te.role), content: te.prompt };
      switch (te.position) {
        case Ea.IN_PROMPT:
          fe.insert(1, ue), ge = 1;
          break;
        case Ea.IN_CHAT:
          ge = fe.getMessages().length - te.depth, fe.insert(ge, ue);
          break;
        case Ea.BEFORE_PROMPT:
          fe.addFront(ue), ge = 0;
          break;
      }
    }
  }
  return ge >= 0 && (he.length > 0 && (fe.insert(ge, { role: "system", content: he.join(`
`) }), ge++), Ee.length > 0 && fe.insert(ge + 1, { role: "system", content: Ee.join(`
`) })), { result: fe.getMessages(), warnings: ne };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function vv(n, r) {
  var s = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    r && (a = a.filter(function(u) {
      return Object.getOwnPropertyDescriptor(n, u).enumerable;
    })), s.push.apply(s, a);
  }
  return s;
}
function Wn(n) {
  for (var r = 1; r < arguments.length; r++) {
    var s = arguments[r] != null ? arguments[r] : {};
    r % 2 ? vv(Object(s), !0).forEach(function(a) {
      R3(n, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : vv(Object(s)).forEach(function(a) {
      Object.defineProperty(n, a, Object.getOwnPropertyDescriptor(s, a));
    });
  }
  return n;
}
function il(n) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? il = function(r) {
    return typeof r;
  } : il = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, il(n);
}
function R3(n, r, s) {
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
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
    }
    return n;
  }, wr.apply(this, arguments);
}
function j3(n, r) {
  if (n == null) return {};
  var s = {}, a = Object.keys(n), u, c;
  for (c = 0; c < a.length; c++)
    u = a[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function L3(n, r) {
  if (n == null) return {};
  var s = j3(n, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      a = c[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (s[a] = n[a]);
  }
  return s;
}
var D3 = "1.15.6";
function _r(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Er = _r(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ro = _r(/Edge/i), yv = _r(/firefox/i), Qs = _r(/safari/i) && !_r(/chrome/i) && !_r(/android/i), Zf = _r(/iP(ad|od|hone)/i), C0 = _r(/chrome/i) && _r(/android/i), A0 = {
  capture: !1,
  passive: !1
};
function Fe(n, r, s) {
  n.addEventListener(r, s, !Er && A0);
}
function Ye(n, r, s) {
  n.removeEventListener(r, s, !Er && A0);
}
function gl(n, r) {
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
function T0(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function qn(n, r, s, a) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && gl(n, r) : gl(n, r)) || a && n === s)
        return n;
      if (n === s) break;
    } while (n = T0(n));
  }
  return null;
}
var _v = /\s+/g;
function yn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + n.className + " ").replace(_v, " ").replace(" " + r + " ", " ");
      n.className = (a + (s ? " " + r : "")).replace(_v, " ");
    }
}
function Re(n, r, s) {
  var a = n && n.style;
  if (a) {
    if (s === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? s = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (s = n.currentStyle), r === void 0 ? s : s[r];
    !(r in a) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), a[r] = s + (typeof s == "string" ? "" : "px");
  }
}
function ji(n, r) {
  var s = "";
  if (typeof n == "string")
    s = n;
  else
    do {
      var a = Re(n, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function k0(n, r, s) {
  if (n) {
    var a = n.getElementsByTagName(r), u = 0, c = a.length;
    if (s)
      for (; u < c; u++)
        s(a[u], u);
    return a;
  }
  return [];
}
function Kn() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function At(n, r, s, a, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, h, m, f, g, v, E;
    if (n !== window && n.parentNode && n !== Kn() ? (c = n.getBoundingClientRect(), h = c.top, m = c.left, f = c.bottom, g = c.right, v = c.height, E = c.width) : (h = 0, m = 0, f = window.innerHeight, g = window.innerWidth, v = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !Er))
      do
        if (u && u.getBoundingClientRect && (Re(u, "transform") !== "none" || s && Re(u, "position") !== "static")) {
          var b = u.getBoundingClientRect();
          h -= b.top + parseInt(Re(u, "border-top-width")), m -= b.left + parseInt(Re(u, "border-left-width")), f = h + c.height, g = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (a && n !== window) {
      var _ = ji(u || n), p = _ && _.a, C = _ && _.d;
      _ && (h /= C, m /= p, E /= p, v /= C, f = h + v, g = m + E);
    }
    return {
      top: h,
      left: m,
      bottom: f,
      right: g,
      width: E,
      height: v
    };
  }
}
function bv(n, r, s) {
  for (var a = Wr(n, !0), u = At(n)[r]; a; ) {
    var c = At(a)[s], h = void 0;
    if (h = u >= c, !h) return a;
    if (a === Kn()) break;
    a = Wr(a, !1);
  }
  return !1;
}
function Di(n, r, s, a) {
  for (var u = 0, c = 0, h = n.children; c < h.length; ) {
    if (h[c].style.display !== "none" && h[c] !== je.ghost && (a || h[c] !== je.dragged) && qn(h[c], s.draggable, n, !1)) {
      if (u === r)
        return h[c];
      u++;
    }
    c++;
  }
  return null;
}
function Vf(n, r) {
  for (var s = n.lastElementChild; s && (s === je.ghost || Re(s, "display") === "none" || r && !gl(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Ln(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== je.clone && (!r || gl(n, r)) && s++;
  return s;
}
function Sv(n) {
  var r = 0, s = 0, a = Kn();
  if (n)
    do {
      var u = ji(n), c = u.a, h = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * h;
    } while (n !== a && (n = n.parentNode));
  return [r, s];
}
function z3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var a in r)
        if (r.hasOwnProperty(a) && r[a] === n[s][a]) return Number(s);
    }
  return -1;
}
function Wr(n, r) {
  if (!n || !n.getBoundingClientRect) return Kn();
  var s = n, a = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = Re(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Kn();
        if (a || r) return s;
        a = !0;
      }
    }
  while (s = s.parentNode);
  return Kn();
}
function P3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function Wd(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Ks;
function x0(n, r) {
  return function() {
    if (!Ks) {
      var s = arguments, a = this;
      s.length === 1 ? n.call(a, s[0]) : n.apply(a, s), Ks = setTimeout(function() {
        Ks = void 0;
      }, r);
    }
  };
}
function I3() {
  clearTimeout(Ks), Ks = void 0;
}
function N0(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function O0(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function M0(n, r, s) {
  var a = {};
  return Array.from(n.children).forEach(function(u) {
    var c, h, m, f;
    if (!(!qn(u, r.draggable, n, !1) || u.animated || u === s)) {
      var g = At(u);
      a.left = Math.min((c = a.left) !== null && c !== void 0 ? c : 1 / 0, g.left), a.top = Math.min((h = a.top) !== null && h !== void 0 ? h : 1 / 0, g.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, g.right), a.bottom = Math.max((f = a.bottom) !== null && f !== void 0 ? f : -1 / 0, g.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var on = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function B3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(Re(u, "display") === "none" || u === je.ghost)) {
            n.push({
              target: u,
              rect: At(u)
            });
            var c = Wn({}, n[n.length - 1].rect);
            if (u.thisAnimationDuration) {
              var h = ji(u, !0);
              h && (c.top -= h.f, c.left -= h.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(a) {
      n.push(a);
    },
    removeAnimationState: function(a) {
      n.splice(z3(n, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof a == "function" && a();
        return;
      }
      var c = !1, h = 0;
      n.forEach(function(m) {
        var f = 0, g = m.target, v = g.fromRect, E = At(g), b = g.prevFromRect, _ = g.prevToRect, p = m.rect, C = ji(g, !0);
        C && (E.top -= C.f, E.left -= C.e), g.toRect = E, g.thisAnimationDuration && Wd(b, E) && !Wd(v, E) && // Make sure animatingRect is on line between toRect & fromRect
        (p.top - E.top) / (p.left - E.left) === (v.top - E.top) / (v.left - E.left) && (f = H3(p, b, _, u.options)), Wd(E, v) || (g.prevFromRect = v, g.prevToRect = E, f || (f = u.options.animation), u.animate(g, p, E, f)), f && (c = !0, h = Math.max(h, f), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, f), g.thisAnimationDuration = f);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, h) : typeof a == "function" && a(), n = [];
    },
    animate: function(a, u, c, h) {
      if (h) {
        Re(a, "transition", ""), Re(a, "transform", "");
        var m = ji(this.el), f = m && m.a, g = m && m.d, v = (u.left - c.left) / (f || 1), E = (u.top - c.top) / (g || 1);
        a.animatingX = !!v, a.animatingY = !!E, Re(a, "transform", "translate3d(" + v + "px," + E + "px,0)"), this.forRepaintDummy = U3(a), Re(a, "transition", "transform " + h + "ms" + (this.options.easing ? " " + this.options.easing : "")), Re(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          Re(a, "transition", ""), Re(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, h);
      }
    }
  };
}
function U3(n) {
  return n.offsetWidth;
}
function H3(n, r, s, a) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var Ei = [], ef = {
  initializeByDefault: !0
}, ao = {
  mount: function(r) {
    for (var s in ef)
      ef.hasOwnProperty(s) && !(s in r) && (r[s] = ef[s]);
    Ei.forEach(function(a) {
      if (a.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), Ei.push(r);
  },
  pluginEvent: function(r, s, a) {
    var u = this;
    this.eventCanceled = !1, a.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    Ei.forEach(function(h) {
      s[h.pluginName] && (s[h.pluginName][c] && s[h.pluginName][c](Wn({
        sortable: s
      }, a)), s.options[h.pluginName] && s[h.pluginName][r] && s[h.pluginName][r](Wn({
        sortable: s
      }, a)));
    });
  },
  initializePlugins: function(r, s, a, u) {
    Ei.forEach(function(m) {
      var f = m.pluginName;
      if (!(!r.options[f] && !m.initializeByDefault)) {
        var g = new m(r, s, r.options);
        g.sortable = r, g.options = r.options, r[f] = g, wr(a, g.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var h = this.modifyOption(r, c, r.options[c]);
        typeof h < "u" && (r.options[c] = h);
      }
  },
  getEventProperties: function(r, s) {
    var a = {};
    return Ei.forEach(function(u) {
      typeof u.eventProperties == "function" && wr(a, u.eventProperties.call(s[u.pluginName], r));
    }), a;
  },
  modifyOption: function(r, s, a) {
    var u;
    return Ei.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], a));
    }), u;
  }
};
function q3(n) {
  var r = n.sortable, s = n.rootEl, a = n.name, u = n.targetEl, c = n.cloneEl, h = n.toEl, m = n.fromEl, f = n.oldIndex, g = n.newIndex, v = n.oldDraggableIndex, E = n.newDraggableIndex, b = n.originalEvent, _ = n.putSortable, p = n.extraEventProperties;
  if (r = r || s && s[on], !!r) {
    var C, T = r.options, j = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Er && !ro ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = h || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = f, C.newIndex = g, C.oldDraggableIndex = v, C.newDraggableIndex = E, C.originalEvent = b, C.pullMode = _ ? _.lastPutMode : void 0;
    var k = Wn(Wn({}, p), ao.getEventProperties(a, r));
    for (var P in k)
      C[P] = k[P];
    s && s.dispatchEvent(C), T[j] && T[j].call(r, C);
  }
}
var G3 = ["evt"], an = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, c = L3(a, G3);
  ao.pluginEvent.bind(je)(r, s, Wn({
    dragEl: pe,
    parentEl: yt,
    ghostEl: Pe,
    rootEl: ct,
    nextEl: ka,
    lastDownEl: sl,
    cloneEl: pt,
    cloneHidden: Jr,
    dragStarted: Vs,
    putSortable: Ut,
    activeSortable: je.active,
    originalEvent: u,
    oldIndex: Ni,
    oldDraggableIndex: Js,
    newIndex: _n,
    newDraggableIndex: Kr,
    hideGhostForTarget: D0,
    unhideGhostForTarget: z0,
    cloneNowHidden: function() {
      Jr = !0;
    },
    cloneNowShown: function() {
      Jr = !1;
    },
    dispatchSortableEvent: function(m) {
      Xt({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function Xt(n) {
  q3(Wn({
    putSortable: Ut,
    cloneEl: pt,
    targetEl: pe,
    rootEl: ct,
    oldIndex: Ni,
    oldDraggableIndex: Js,
    newIndex: _n,
    newDraggableIndex: Kr
  }, n));
}
var pe, yt, Pe, ct, ka, sl, pt, Jr, Ni, _n, Js, Kr, Eu, Ut, xi = !1, vl = !1, yl = [], Aa, Bn, tf, nf, wv, Ev, Vs, Ci, Ws, eo = !1, Cu = !1, ol, Vt, rf = [], Tf = !1, _l = [], xl = typeof document < "u", Au = Zf, Cv = ro || Er ? "cssFloat" : "float", Z3 = xl && !C0 && !Zf && "draggable" in document.createElement("div"), R0 = (function() {
  if (xl) {
    if (Er)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), j0 = function(r, s) {
  var a = Re(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Di(r, 0, s), h = Di(r, 1, s), m = c && Re(c), f = h && Re(h), g = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + At(c).width, v = f && parseInt(f.marginLeft) + parseInt(f.marginRight) + At(h).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return h && (f.clear === "both" || f.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || g >= u && a[Cv] === "none" || h && a[Cv] === "none" && g + v > u) ? "vertical" : "horizontal";
}, V3 = function(r, s, a) {
  var u = a ? r.left : r.top, c = a ? r.right : r.bottom, h = a ? r.width : r.height, m = a ? s.left : s.top, f = a ? s.right : s.bottom, g = a ? s.width : s.height;
  return u === m || c === f || u + h / 2 === m + g / 2;
}, $3 = function(r, s) {
  var a;
  return yl.some(function(u) {
    var c = u[on].options.emptyInsertThreshold;
    if (!(!c || Vf(u))) {
      var h = At(u), m = r >= h.left - c && r <= h.right + c, f = s >= h.top - c && s <= h.bottom + c;
      if (m && f)
        return a = u;
    }
  }), a;
}, L0 = function(r) {
  function s(c, h) {
    return function(m, f, g, v) {
      var E = m.options.group.name && f.options.group.name && m.options.group.name === f.options.group.name;
      if (c == null && (h || E))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (h && c === "clone")
        return c;
      if (typeof c == "function")
        return s(c(m, f, g, v), h)(m, f, g, v);
      var b = (h ? m : f).options.group.name;
      return c === !0 || typeof c == "string" && c === b || c.join && c.indexOf(b) > -1;
    };
  }
  var a = {}, u = r.group;
  (!u || il(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, D0 = function() {
  !R0 && Pe && Re(Pe, "display", "none");
}, z0 = function() {
  !R0 && Pe && Re(Pe, "display", "");
};
xl && !C0 && document.addEventListener("click", function(n) {
  if (vl)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), vl = !1, !1;
}, !0);
var Ta = function(r) {
  if (pe) {
    r = r.touches ? r.touches[0] : r;
    var s = $3(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[on]._onDragOver(a);
    }
  }
}, Y3 = function(r) {
  pe && pe.parentNode[on]._isOutsideThisEl(r.target);
};
function je(n, r) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = r = wr({}, r), n[on] = this;
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
      return j0(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(h, m) {
      h.setData("Text", m.textContent);
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
    supportPointer: je.supportPointer !== !1 && "PointerEvent" in window && (!Qs || Zf),
    emptyInsertThreshold: 5
  };
  ao.initializePlugins(this, n, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  L0(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : Z3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Fe(n, "pointerdown", this._onTapStart) : (Fe(n, "mousedown", this._onTapStart), Fe(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Fe(n, "dragover", this), Fe(n, "dragenter", this)), yl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, B3());
}
je.prototype = /** @lends Sortable.prototype */
{
  constructor: je,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ci = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, pe) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, c = u.preventOnFilter, h = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, f = (m || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || f, v = u.filter;
      if (t8(a), !pe && !(/mousedown|pointerdown/.test(h) && r.button !== 0 || u.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Qs && f && f.tagName.toUpperCase() === "SELECT") && (f = qn(f, u.draggable, a, !1), !(f && f.animated) && sl !== f)) {
        if (Ni = Ln(f), Js = Ln(f, u.draggable), typeof v == "function") {
          if (v.call(this, r, f, this)) {
            Xt({
              sortable: s,
              rootEl: g,
              name: "filter",
              targetEl: f,
              toEl: a,
              fromEl: a
            }), an("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (v && (v = v.split(",").some(function(E) {
          if (E = qn(g, E.trim(), a, !1), E)
            return Xt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: f,
              fromEl: a,
              toEl: a
            }), an("filter", s, {
              evt: r
            }), !0;
        }), v)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !qn(g, u.handle, a, !1) || this._prepareDragStart(r, m, f);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, c = u.el, h = u.options, m = c.ownerDocument, f;
    if (a && !pe && a.parentNode === c) {
      var g = At(a);
      if (ct = c, pe = a, yt = pe.parentNode, ka = pe.nextSibling, sl = a, Eu = h.group, je.dragged = pe, Aa = {
        target: pe,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, wv = Aa.clientX - g.left, Ev = Aa.clientY - g.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, pe.style["will-change"] = "all", f = function() {
        if (an("delayEnded", u, {
          evt: r
        }), je.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !yv && u.nativeDraggable && (pe.draggable = !0), u._triggerDragStart(r, s), Xt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), yn(pe, h.chosenClass, !0);
      }, h.ignore.split(",").forEach(function(v) {
        k0(pe, v.trim(), af);
      }), Fe(m, "dragover", Ta), Fe(m, "mousemove", Ta), Fe(m, "touchmove", Ta), h.supportPointer ? (Fe(m, "pointerup", u._onDrop), !this.nativeDraggable && Fe(m, "pointercancel", u._onDrop)) : (Fe(m, "mouseup", u._onDrop), Fe(m, "touchend", u._onDrop), Fe(m, "touchcancel", u._onDrop)), yv && this.nativeDraggable && (this.options.touchStartThreshold = 4, pe.draggable = !0), an("delayStart", this, {
        evt: r
      }), h.delay && (!h.delayOnTouchOnly || s) && (!this.nativeDraggable || !(ro || Er))) {
        if (je.eventCanceled) {
          this._onDrop();
          return;
        }
        h.supportPointer ? (Fe(m, "pointerup", u._disableDelayedDrag), Fe(m, "pointercancel", u._disableDelayedDrag)) : (Fe(m, "mouseup", u._disableDelayedDrag), Fe(m, "touchend", u._disableDelayedDrag), Fe(m, "touchcancel", u._disableDelayedDrag)), Fe(m, "mousemove", u._delayedDragTouchMoveHandler), Fe(m, "touchmove", u._delayedDragTouchMoveHandler), h.supportPointer && Fe(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(f, h.delay);
      } else
        f();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    pe && af(pe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Ye(r, "mouseup", this._disableDelayedDrag), Ye(r, "touchend", this._disableDelayedDrag), Ye(r, "touchcancel", this._disableDelayedDrag), Ye(r, "pointerup", this._disableDelayedDrag), Ye(r, "pointercancel", this._disableDelayedDrag), Ye(r, "mousemove", this._delayedDragTouchMoveHandler), Ye(r, "touchmove", this._delayedDragTouchMoveHandler), Ye(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? Fe(document, "pointermove", this._onTouchMove) : s ? Fe(document, "touchmove", this._onTouchMove) : Fe(document, "mousemove", this._onTouchMove) : (Fe(pe, "dragend", this), Fe(ct, "dragstart", this._onDragStart));
    try {
      document.selection ? ul(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (xi = !1, ct && pe) {
      an("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && Fe(document, "dragover", Y3);
      var a = this.options;
      !r && yn(pe, a.dragClass, !1), yn(pe, a.ghostClass, !0), je.active = this, r && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Bn) {
      this._lastX = Bn.clientX, this._lastY = Bn.clientY, D0();
      for (var r = document.elementFromPoint(Bn.clientX, Bn.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), r !== s); )
        s = r;
      if (pe.parentNode[on]._isOutsideThisEl(r), s)
        do {
          if (s[on]) {
            var a = void 0;
            if (a = s[on]._onDragOver({
              clientX: Bn.clientX,
              clientY: Bn.clientY,
              target: r,
              rootEl: s
            }), a && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = T0(s));
      z0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, h = Pe && ji(Pe, !0), m = Pe && h && h.a, f = Pe && h && h.d, g = Au && Vt && Sv(Vt), v = (c.clientX - Aa.clientX + u.x) / (m || 1) + (g ? g[0] - rf[0] : 0) / (m || 1), E = (c.clientY - Aa.clientY + u.y) / (f || 1) + (g ? g[1] - rf[1] : 0) / (f || 1);
      if (!je.active && !xi) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (Pe) {
        h ? (h.e += v - (tf || 0), h.f += E - (nf || 0)) : h = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: v,
          f: E
        };
        var b = "matrix(".concat(h.a, ",").concat(h.b, ",").concat(h.c, ",").concat(h.d, ",").concat(h.e, ",").concat(h.f, ")");
        Re(Pe, "webkitTransform", b), Re(Pe, "mozTransform", b), Re(Pe, "msTransform", b), Re(Pe, "transform", b), tf = v, nf = E, Bn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Pe) {
      var r = this.options.fallbackOnBody ? document.body : ct, s = At(pe, !0, Au, !0, r), a = this.options;
      if (Au) {
        for (Vt = r; Re(Vt, "position") === "static" && Re(Vt, "transform") === "none" && Vt !== document; )
          Vt = Vt.parentNode;
        Vt !== document.body && Vt !== document.documentElement ? (Vt === document && (Vt = Kn()), s.top += Vt.scrollTop, s.left += Vt.scrollLeft) : Vt = Kn(), rf = Sv(Vt);
      }
      Pe = pe.cloneNode(!0), yn(Pe, a.ghostClass, !1), yn(Pe, a.fallbackClass, !0), yn(Pe, a.dragClass, !0), Re(Pe, "transition", ""), Re(Pe, "transform", ""), Re(Pe, "box-sizing", "border-box"), Re(Pe, "margin", 0), Re(Pe, "top", s.top), Re(Pe, "left", s.left), Re(Pe, "width", s.width), Re(Pe, "height", s.height), Re(Pe, "opacity", "0.8"), Re(Pe, "position", Au ? "absolute" : "fixed"), Re(Pe, "zIndex", "100000"), Re(Pe, "pointerEvents", "none"), je.ghost = Pe, r.appendChild(Pe), Re(Pe, "transform-origin", wv / parseInt(Pe.style.width) * 100 + "% " + Ev / parseInt(Pe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var a = this, u = r.dataTransfer, c = a.options;
    if (an("dragStart", this, {
      evt: r
    }), je.eventCanceled) {
      this._onDrop();
      return;
    }
    an("setupClone", this), je.eventCanceled || (pt = O0(pe), pt.removeAttribute("id"), pt.draggable = !1, pt.style["will-change"] = "", this._hideClone(), yn(pt, this.options.chosenClass, !1), je.clone = pt), a.cloneId = ul(function() {
      an("clone", a), !je.eventCanceled && (a.options.removeCloneOnHide || ct.insertBefore(pt, pe), a._hideClone(), Xt({
        sortable: a,
        name: "clone"
      }));
    }), !s && yn(pe, c.dragClass, !0), s ? (vl = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : (Ye(document, "mouseup", a._onDrop), Ye(document, "touchend", a._onDrop), Ye(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(a, u, pe)), Fe(document, "drop", a), Re(pe, "transform", "translateZ(0)")), xi = !0, a._dragStartId = ul(a._dragStarted.bind(a, s, r)), Fe(document, "selectstart", a), Vs = !0, window.getSelection().removeAllRanges(), Qs && Re(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, c, h, m = this.options, f = m.group, g = je.active, v = Eu === f, E = m.sort, b = Ut || g, _, p = this, C = !1;
    if (Tf) return;
    function T(K, ie) {
      an(K, p, Wn({
        evt: r,
        isOwner: v,
        axis: _ ? "vertical" : "horizontal",
        revert: h,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: b,
        target: a,
        completed: k,
        onMove: function($, ne) {
          return Tu(ct, s, pe, u, $, At($), r, ne);
        },
        changed: P
      }, ie));
    }
    function j() {
      T("dragOverAnimationCapture"), p.captureAnimationState(), p !== b && b.captureAnimationState();
    }
    function k(K) {
      return T("dragOverCompleted", {
        insertion: K
      }), K && (v ? g._hideClone() : g._showClone(p), p !== b && (yn(pe, Ut ? Ut.options.ghostClass : g.options.ghostClass, !1), yn(pe, m.ghostClass, !0)), Ut !== p && p !== je.active ? Ut = p : p === je.active && Ut && (Ut = null), b === p && (p._ignoreWhileAnimating = a), p.animateAll(function() {
        T("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (a === pe && !pe.animated || a === s && !a.animated) && (Ci = null), !m.dragoverBubble && !r.rootEl && a !== document && (pe.parentNode[on]._isOutsideThisEl(r.target), !K && Ta(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function P() {
      _n = Ln(pe), Kr = Ln(pe, m.draggable), Xt({
        sortable: p,
        name: "change",
        toEl: s,
        newIndex: _n,
        newDraggableIndex: Kr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = qn(a, m.draggable, s, !0), T("dragOver"), je.eventCanceled) return C;
    if (pe.contains(r.target) || a.animated && a.animatingX && a.animatingY || p._ignoreWhileAnimating === a)
      return k(!1);
    if (vl = !1, g && !m.disabled && (v ? E || (h = yt !== ct) : Ut === this || (this.lastPutMode = Eu.checkPull(this, g, pe, r)) && f.checkPut(this, g, pe, r))) {
      if (_ = this._getDirection(r, a) === "vertical", u = At(pe), T("dragOverValid"), je.eventCanceled) return C;
      if (h)
        return yt = ct, j(), this._hideClone(), T("revert"), je.eventCanceled || (ka ? ct.insertBefore(pe, ka) : ct.appendChild(pe)), k(!0);
      var l = Vf(s, m.draggable);
      if (!l || K3(r, _, this) && !l.animated) {
        if (l === pe)
          return k(!1);
        if (l && s === r.target && (a = l), a && (c = At(a)), Tu(ct, s, pe, u, a, c, r, !!a) !== !1)
          return j(), l && l.nextSibling ? s.insertBefore(pe, l.nextSibling) : s.appendChild(pe), yt = s, P(), k(!0);
      } else if (l && Q3(r, _, this)) {
        var S = Di(s, 0, m, !0);
        if (S === pe)
          return k(!1);
        if (a = S, c = At(a), Tu(ct, s, pe, u, a, c, r, !1) !== !1)
          return j(), s.insertBefore(pe, S), yt = s, P(), k(!0);
      } else if (a.parentNode === s) {
        c = At(a);
        var w = 0, A, O = pe.parentNode !== s, L = !V3(pe.animated && pe.toRect || u, a.animated && a.toRect || c, _), M = _ ? "top" : "left", z = bv(a, "top", "top") || bv(pe, "top", "top"), H = z ? z.scrollTop : void 0;
        Ci !== a && (A = c[M], eo = !1, Cu = !L && m.invertSwap || O), w = J3(r, a, c, _, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Cu, Ci === a);
        var Z;
        if (w !== 0) {
          var G = Ln(pe);
          do
            G -= w, Z = yt.children[G];
          while (Z && (Re(Z, "display") === "none" || Z === Pe));
        }
        if (w === 0 || Z === a)
          return k(!1);
        Ci = a, Ws = w;
        var Q = a.nextElementSibling, R = !1;
        R = w === 1;
        var B = Tu(ct, s, pe, u, a, c, r, R);
        if (B !== !1)
          return (B === 1 || B === -1) && (R = B === 1), Tf = !0, setTimeout(X3, 30), j(), R && !Q ? s.appendChild(pe) : a.parentNode.insertBefore(pe, R ? Q : a), z && N0(z, 0, H - z.scrollTop), yt = pe.parentNode, A !== void 0 && !Cu && (ol = Math.abs(A - At(a)[M])), P(), k(!0);
      }
      if (s.contains(pe))
        return k(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ye(document, "mousemove", this._onTouchMove), Ye(document, "touchmove", this._onTouchMove), Ye(document, "pointermove", this._onTouchMove), Ye(document, "dragover", Ta), Ye(document, "mousemove", Ta), Ye(document, "touchmove", Ta);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Ye(r, "mouseup", this._onDrop), Ye(r, "touchend", this._onDrop), Ye(r, "pointerup", this._onDrop), Ye(r, "pointercancel", this._onDrop), Ye(r, "touchcancel", this._onDrop), Ye(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, a = this.options;
    if (_n = Ln(pe), Kr = Ln(pe, a.draggable), an("drop", this, {
      evt: r
    }), yt = pe && pe.parentNode, _n = Ln(pe), Kr = Ln(pe, a.draggable), je.eventCanceled) {
      this._nulling();
      return;
    }
    xi = !1, Cu = !1, eo = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), kf(this.cloneId), kf(this._dragStartId), this.nativeDraggable && (Ye(document, "drop", this), Ye(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Qs && Re(document.body, "user-select", ""), Re(pe, "transform", ""), r && (Vs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), Pe && Pe.parentNode && Pe.parentNode.removeChild(Pe), (ct === yt || Ut && Ut.lastPutMode !== "clone") && pt && pt.parentNode && pt.parentNode.removeChild(pt), pe && (this.nativeDraggable && Ye(pe, "dragend", this), af(pe), pe.style["will-change"] = "", Vs && !xi && yn(pe, Ut ? Ut.options.ghostClass : this.options.ghostClass, !1), yn(pe, this.options.chosenClass, !1), Xt({
      sortable: this,
      name: "unchoose",
      toEl: yt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ct !== yt ? (_n >= 0 && (Xt({
      rootEl: yt,
      name: "add",
      toEl: yt,
      fromEl: ct,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "remove",
      toEl: yt,
      originalEvent: r
    }), Xt({
      rootEl: yt,
      name: "sort",
      toEl: yt,
      fromEl: ct,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: yt,
      originalEvent: r
    })), Ut && Ut.save()) : _n !== Ni && _n >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: yt,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: yt,
      originalEvent: r
    })), je.active && ((_n == null || _n === -1) && (_n = Ni, Kr = Js), Xt({
      sortable: this,
      name: "end",
      toEl: yt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    an("nulling", this), ct = pe = yt = Pe = ka = pt = sl = Jr = Aa = Bn = Vs = _n = Kr = Ni = Js = Ci = Ws = Ut = Eu = je.dragged = je.ghost = je.clone = je.active = null, _l.forEach(function(r) {
      r.checked = !0;
    }), _l.length = tf = nf = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        pe && (this._onDragOver(r), F3(r));
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
    for (var r = [], s, a = this.el.children, u = 0, c = a.length, h = this.options; u < c; u++)
      s = a[u], qn(s, h.draggable, this.el, !1) && r.push(s.getAttribute(h.dataIdAttr) || e8(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var a = {}, u = this.el;
    this.toArray().forEach(function(c, h) {
      var m = u.children[h];
      qn(m, this.options.draggable, u, !1) && (a[c] = m);
    }, this), s && this.captureAnimationState(), r.forEach(function(c) {
      a[c] && (u.removeChild(a[c]), u.appendChild(a[c]));
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
    return qn(r, s || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, s) {
    var a = this.options;
    if (s === void 0)
      return a[r];
    var u = ao.modifyOption(this, r, s);
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && L0(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    an("destroy", this);
    var r = this.el;
    r[on] = null, Ye(r, "mousedown", this._onTapStart), Ye(r, "touchstart", this._onTapStart), Ye(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Ye(r, "dragover", this), Ye(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), yl.splice(yl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Jr) {
      if (an("hideClone", this), je.eventCanceled) return;
      Re(pt, "display", "none"), this.options.removeCloneOnHide && pt.parentNode && pt.parentNode.removeChild(pt), Jr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Jr) {
      if (an("showClone", this), je.eventCanceled) return;
      pe.parentNode == ct && !this.options.group.revertClone ? ct.insertBefore(pt, pe) : ka ? ct.insertBefore(pt, ka) : ct.appendChild(pt), this.options.group.revertClone && this.animate(pe, pt), Re(pt, "display", ""), Jr = !1;
    }
  }
};
function F3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Tu(n, r, s, a, u, c, h, m) {
  var f, g = n[on], v = g.options.onMove, E;
  return window.CustomEvent && !Er && !ro ? f = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (f = document.createEvent("Event"), f.initEvent("move", !0, !0)), f.to = r, f.from = n, f.dragged = s, f.draggedRect = a, f.related = u || r, f.relatedRect = c || At(r), f.willInsertAfter = m, f.originalEvent = h, n.dispatchEvent(f), v && (E = v.call(g, f, h)), E;
}
function af(n) {
  n.draggable = !1;
}
function X3() {
  Tf = !1;
}
function Q3(n, r, s) {
  var a = At(Di(s.el, 0, s.options, !0)), u = M0(s.el, s.options, Pe), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < a.top && n.clientX < a.right : n.clientY < u.top - c || n.clientY < a.bottom && n.clientX < a.left;
}
function K3(n, r, s) {
  var a = At(Vf(s.el, s.options.draggable)), u = M0(s.el, s.options, Pe), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > a.bottom && n.clientX > a.left : n.clientY > u.bottom + c || n.clientX > a.right && n.clientY > a.top;
}
function J3(n, r, s, a, u, c, h, m) {
  var f = a ? n.clientY : n.clientX, g = a ? s.height : s.width, v = a ? s.top : s.left, E = a ? s.bottom : s.right, b = !1;
  if (!h) {
    if (m && ol < g * u) {
      if (!eo && (Ws === 1 ? f > v + g * c / 2 : f < E - g * c / 2) && (eo = !0), eo)
        b = !0;
      else if (Ws === 1 ? f < v + ol : f > E - ol)
        return -Ws;
    } else if (f > v + g * (1 - u) / 2 && f < E - g * (1 - u) / 2)
      return W3(r);
  }
  return b = b || h, b && (f < v + g * c / 2 || f > E - g * c / 2) ? f > v + g / 2 ? 1 : -1 : 0;
}
function W3(n) {
  return Ln(pe) < Ln(n) ? 1 : -1;
}
function e8(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function t8(n) {
  _l.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && _l.push(a);
  }
}
function ul(n) {
  return setTimeout(n, 0);
}
function kf(n) {
  return clearTimeout(n);
}
xl && Fe(document, "touchmove", function(n) {
  (je.active || xi) && n.cancelable && n.preventDefault();
});
je.utils = {
  on: Fe,
  off: Ye,
  css: Re,
  find: k0,
  is: function(r, s) {
    return !!qn(r, s, r, !1);
  },
  extend: P3,
  throttle: x0,
  closest: qn,
  toggleClass: yn,
  clone: O0,
  index: Ln,
  nextTick: ul,
  cancelNextTick: kf,
  detectDirection: j0,
  getChild: Di,
  expando: on
};
je.get = function(n) {
  return n[on];
};
je.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (je.utils = Wn(Wn({}, je.utils), a.utils)), ao.mount(a);
  });
};
je.create = function(n, r) {
  return new je(n, r);
};
je.version = D3;
var Ct = [], $s, xf, Nf = !1, sf, of, bl, Ys;
function n8() {
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
      var a = s.originalEvent;
      this.sortable.nativeDraggable ? Fe(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Fe(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Fe(document, "touchmove", this._handleFallbackAutoScroll) : Fe(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ye(document, "dragover", this._handleAutoScroll) : (Ye(document, "pointermove", this._handleFallbackAutoScroll), Ye(document, "touchmove", this._handleFallbackAutoScroll), Ye(document, "mousemove", this._handleFallbackAutoScroll)), Av(), ll(), I3();
    },
    nulling: function() {
      bl = xf = $s = Nf = Ys = sf = of = null, Ct.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, h = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, h);
      if (bl = s, a || this.options.forceAutoScrollFallback || ro || Er || Qs) {
        uf(s, this.options, m, a);
        var f = Wr(m, !0);
        Nf && (!Ys || c !== sf || h !== of) && (Ys && Av(), Ys = setInterval(function() {
          var g = Wr(document.elementFromPoint(c, h), !0);
          g !== f && (f = g, ll()), uf(s, u.options, g, a);
        }, 10), sf = c, of = h);
      } else {
        if (!this.options.bubbleScroll || Wr(m, !0) === Kn()) {
          ll();
          return;
        }
        uf(s, this.options, Wr(m, !1), !1);
      }
    }
  }, wr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ll() {
  Ct.forEach(function(n) {
    clearInterval(n.pid);
  }), Ct = [];
}
function Av() {
  clearInterval(Ys);
}
var uf = x0(function(n, r, s, a) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, h = r.scrollSensitivity, m = r.scrollSpeed, f = Kn(), g = !1, v;
    xf !== s && (xf = s, ll(), $s = r.scroll, v = r.scrollFn, $s === !0 && ($s = Wr(s, !0)));
    var E = 0, b = $s;
    do {
      var _ = b, p = At(_), C = p.top, T = p.bottom, j = p.left, k = p.right, P = p.width, l = p.height, S = void 0, w = void 0, A = _.scrollWidth, O = _.scrollHeight, L = Re(_), M = _.scrollLeft, z = _.scrollTop;
      _ === f ? (S = P < A && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < O && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (S = P < A && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < O && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var H = S && (Math.abs(k - u) <= h && M + P < A) - (Math.abs(j - u) <= h && !!M), Z = w && (Math.abs(T - c) <= h && z + l < O) - (Math.abs(C - c) <= h && !!z);
      if (!Ct[E])
        for (var G = 0; G <= E; G++)
          Ct[G] || (Ct[G] = {});
      (Ct[E].vx != H || Ct[E].vy != Z || Ct[E].el !== _) && (Ct[E].el = _, Ct[E].vx = H, Ct[E].vy = Z, clearInterval(Ct[E].pid), (H != 0 || Z != 0) && (g = !0, Ct[E].pid = setInterval((function() {
        a && this.layer === 0 && je.active._onTouchMove(bl);
        var Q = Ct[this.layer].vy ? Ct[this.layer].vy * m : 0, R = Ct[this.layer].vx ? Ct[this.layer].vx * m : 0;
        typeof v == "function" && v.call(je.dragged.parentNode[on], R, Q, n, bl, Ct[this.layer].el) !== "continue" || N0(Ct[this.layer].el, R, Q);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && b !== f && (b = Wr(b, !1)));
    Nf = g;
  }
}, 30), P0 = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, c = r.activeSortable, h = r.dispatchSortableEvent, m = r.hideGhostForTarget, f = r.unhideGhostForTarget;
  if (s) {
    var g = a || c;
    m();
    var v = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(v.clientX, v.clientY);
    f(), g && !g.el.contains(E) && (h("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function $f() {
}
$f.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var u = Di(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: P0
};
wr($f, {
  pluginName: "revertOnSpill"
});
function Yf() {
}
Yf.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: P0
};
wr(Yf, {
  pluginName: "removeOnSpill"
});
je.mount(new n8());
je.mount(Yf, $f);
async function cl(n, r, s) {
  var a, u, c;
  function h(v) {
    return n.includes("all") || n.includes(v);
  }
  const m = SillyTavern.getContext();
  let f = {};
  const g = K1;
  if (h("global") && g != null && g.length)
    for (const v of g) {
      const E = await r8(v);
      E && (f[v] || (f[v] = []), Object.values(E).forEach((b) => {
        f[v].push(b);
      }));
    }
  if (h("chat")) {
    const v = m.chatMetadata[J1];
    if (v && !f[v]) {
      f[v] = [];
      const E = await m.loadWorldInfo(v);
      E && Object.values(E.entries).forEach((b) => {
        f[v].push(b);
      });
    }
  }
  if (h("character") && s) {
    const v = m.characters[s];
    let E = /* @__PURE__ */ new Set();
    const b = (u = (a = v?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    b && E.add(b);
    const _ = w0(s), p = (c = W1.charLore) == null ? void 0 : c.find((C) => C.name === _);
    p && (E = /* @__PURE__ */ new Set([...E, ...p.extraBooks]));
    for (const C of E) {
      const T = await m.loadWorldInfo(C);
      !T || f[C] || (f[C] = [], Object.values(T.entries).forEach((j) => {
        f[C].push(j);
      }));
    }
  }
  if (h("persona")) {
    const v = m.powerUserSettings.persona_description_lorebook;
    if (v && !f[v]) {
      f[v] = [];
      const E = await m.loadWorldInfo(v);
      E && Object.values(E.entries).forEach((b) => {
        f[v].push(b);
      });
    }
  }
  return f;
}
async function r8(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const a8 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, i8 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, s8 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, o8 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, u8 = `If you are creating a new entry you should write it like this:
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
\`\`\``, l8 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, c8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", d8 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", f8 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, h8 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, p8 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, m8 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, I0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", g8 = I0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", v8 = "[" + I0 + "][" + g8 + "]*", y8 = new RegExp("^" + v8 + "$");
function B0(n, r) {
  const s = [];
  let a = r.exec(n);
  for (; a; ) {
    const u = [];
    u.startIndex = r.lastIndex - a[0].length;
    const c = a.length;
    for (let h = 0; h < c; h++)
      u.push(a[h]);
    s.push(u), a = r.exec(n);
  }
  return s;
}
const Ff = function(n) {
  const r = y8.exec(n);
  return !(r === null || typeof r > "u");
};
function _8(n) {
  return typeof n < "u";
}
const b8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function S8(n, r) {
  r = Object.assign({}, b8, r);
  const s = [];
  let a = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = kv(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let h = c;
      if (c++, n[c] === "!") {
        c = xv(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let f = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          f += n[c];
        if (f = f.trim(), f[f.length - 1] === "/" && (f = f.substring(0, f.length - 1), c--), !N8(f)) {
          let E;
          return f.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + f + "' is an invalid name.", St("InvalidTag", E, Qt(n, c));
        }
        const g = C8(n, c);
        if (g === !1)
          return St("InvalidAttr", "Attributes for '" + f + "' have open quote.", Qt(n, c));
        let v = g.value;
        if (c = g.index, v[v.length - 1] === "/") {
          const E = c - v.length;
          v = v.substring(0, v.length - 1);
          const b = Nv(v, r);
          if (b === !0)
            a = !0;
          else
            return St(b.err.code, b.err.msg, Qt(n, E + b.err.line));
        } else if (m)
          if (g.tagClosed) {
            if (v.trim().length > 0)
              return St("InvalidTag", "Closing tag '" + f + "' can't have attributes or invalid starting.", Qt(n, h));
            if (s.length === 0)
              return St("InvalidTag", "Closing tag '" + f + "' has not been opened.", Qt(n, h));
            {
              const E = s.pop();
              if (f !== E.tagName) {
                let b = Qt(n, E.tagStartPos);
                return St(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + b.line + ", col " + b.col + ") instead of closing tag '" + f + "'.",
                  Qt(n, h)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return St("InvalidTag", "Closing tag '" + f + "' doesn't have proper closing.", Qt(n, c));
        else {
          const E = Nv(v, r);
          if (E !== !0)
            return St(E.err.code, E.err.msg, Qt(n, c - v.length + E.err.line));
          if (u === !0)
            return St("InvalidXml", "Multiple possible root nodes found.", Qt(n, c));
          r.unpairedTags.indexOf(f) !== -1 || s.push({ tagName: f, tagStartPos: h }), a = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = xv(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = kv(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = k8(n, c);
            if (E == -1)
              return St("InvalidChar", "char '&' is not expected.", Qt(n, c));
            c = E;
          } else if (u === !0 && !Tv(n[c]))
            return St("InvalidXml", "Extra text at the end", Qt(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Tv(n[c]))
        continue;
      return St("InvalidChar", "char '" + n[c] + "' is not expected.", Qt(n, c));
    }
  if (a) {
    if (s.length == 1)
      return St("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Qt(n, s[0].tagStartPos));
    if (s.length > 0)
      return St("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return St("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Tv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function kv(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const a = n.substr(s, r - s);
      if (r > 5 && a === "xml")
        return St("InvalidXml", "XML declaration allowed only at the start of the document.", Qt(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function xv(n, r) {
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
const w8 = '"', E8 = "'";
function C8(n, r) {
  let s = "", a = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === w8 || n[r] === E8)
      a === "" ? a = n[r] : a !== n[r] || (a = "");
    else if (n[r] === ">" && a === "") {
      u = !0;
      break;
    }
    s += n[r];
  }
  return a !== "" ? !1 : {
    value: s,
    index: r,
    tagClosed: u
  };
}
const A8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Nv(n, r) {
  const s = B0(n, A8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return St("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Ps(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return St("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Ps(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return St("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Ps(s[u]));
    const c = s[u][2];
    if (!x8(c))
      return St("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Ps(s[u]));
    if (!a.hasOwnProperty(c))
      a[c] = 1;
    else
      return St("InvalidAttr", "Attribute '" + c + "' is repeated.", Ps(s[u]));
  }
  return !0;
}
function T8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function k8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, T8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function St(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function x8(n) {
  return Ff(n);
}
function N8(n) {
  return Ff(n);
}
function Qt(n, r) {
  const s = n.substring(0, r).split(/\r?\n/);
  return {
    line: s.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: s[s.length - 1].length + 1
  };
}
function Ps(n) {
  return n.startIndex + n[1].length;
}
const O8 = {
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
}, M8 = function(n) {
  return Object.assign({}, O8, n);
};
class Is {
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
function R8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, c = !1, h = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && D8(n, r)) {
          r += 7;
          let m, f;
          [m, f, r] = j8(n, r + 1), f.indexOf("&") === -1 && (s[B8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: f
          });
        } else if (u && z8(n, r)) r += 8;
        else if (u && P8(n, r)) r += 8;
        else if (u && I8(n, r)) r += 9;
        else if (L8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        a++, h = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, a--) : a--, a === 0)
          break;
      } else n[r] === "[" ? u = !0 : h += n[r];
    if (a !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function j8(n, r) {
  let s = "";
  for (; r < n.length && n[r] !== "'" && n[r] !== '"'; r++)
    s += n[r];
  if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const a = n[r++];
  let u = "";
  for (; r < n.length && n[r] !== a; r++)
    u += n[r];
  return [s, u, r];
}
function L8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function D8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function z8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function P8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function I8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function B8(n) {
  if (Ff(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const U8 = /^[-+]?0x[a-fA-F0-9]+$/, H8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, q8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function G8(n, r = {}) {
  if (r = Object.assign({}, q8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && U8.test(s))
    return V8(s, 16);
  if (s.search(/[eE]/) !== -1) {
    const a = s.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (a) {
      if (r.leadingZeros)
        s = (a[1] || "") + a[3];
      else if (!(a[2] === "0" && a[3][0] === ".")) return n;
      return r.eNotation ? Number(s) : n;
    } else
      return n;
  } else {
    const a = H8.exec(s);
    if (a) {
      const u = a[1], c = a[2];
      let h = Z8(a[3]);
      if (!r.leadingZeros && c.length > 0 && u && s[2] !== ".") return n;
      if (!r.leadingZeros && c.length > 0 && !u && s[1] !== ".") return n;
      if (r.leadingZeros && c === n) return 0;
      {
        const m = Number(s), f = "" + m;
        return f.search(/[eE]/) !== -1 ? r.eNotation ? m : n : s.indexOf(".") !== -1 ? f === "0" && h === "" || f === h || u && f === "-" + h ? m : n : c ? h === f || u + h === f ? m : n : s === f || s === u + f ? m : n;
      }
    } else
      return n;
  }
}
function Z8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function V8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function $8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class Y8 {
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
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (s, a) => String.fromCodePoint(Number.parseInt(a, 16)) }
    }, this.addExternalEntities = F8, this.parseXml = W8, this.parseTextData = X8, this.resolveNameSpace = Q8, this.buildAttributesMap = J8, this.isItStopNode = rS, this.replaceEntitiesValue = tS, this.readStopNodeData = iS, this.saveTextToParentTag = nS, this.addChild = eS, this.ignoreAttributesFn = $8(this.options.ignoreAttributes);
  }
}
function F8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: n[a]
    };
  }
}
function X8(n, r, s, a, u, c, h) {
  if (n !== void 0 && (this.options.trimValues && !a && (n = n.trim()), n.length > 0)) {
    h || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? Mf(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? Mf(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function Q8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const K8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function J8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const a = B0(n, K8), u = a.length, c = {};
    for (let h = 0; h < u; h++) {
      const m = this.resolveNameSpace(a[h][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let f = a[h][4], g = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), f !== void 0) {
          this.options.trimValues && (f = f.trim()), f = this.replaceEntitiesValue(f);
          const v = this.options.attributeValueProcessor(m, f, r);
          v == null ? c[g] = f : typeof v != typeof f || v !== f ? c[g] = v : c[g] = Mf(
            f,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[g] = !0);
    }
    if (!Object.keys(c).length)
      return;
    if (this.options.attributesGroupName) {
      const h = {};
      return h[this.options.attributesGroupName] = c, h;
    }
    return c;
  }
}
const W8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Is("!xml");
  let s = r, a = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Oa(n, ">", c, "Closing Tag is not closed.");
        let f = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = f.indexOf(":");
          E !== -1 && (f = f.substr(E + 1));
        }
        this.options.transformTagName && (f = this.options.transformTagName(f)), s && (a = this.saveTextToParentTag(a, s, u));
        const g = u.substring(u.lastIndexOf(".") + 1);
        if (f && this.options.unpairedTags.indexOf(f) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${f}>`);
        let v = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (v = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : v = u.lastIndexOf("."), u = u.substring(0, v), s = this.tagsNodeStack.pop(), a = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = Of(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const f = new Is(m.tagName);
          f.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (f[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, f, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Oa(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const f = n.substring(c + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: f }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = R8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Oa(n, "]]>", c, "CDATA is not closed.") - 2, f = n.substring(c + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let g = this.parseTextData(f, s.tagname, u, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: f }]) : s.add(this.options.textNodeName, g), c = m + 2;
      } else {
        let m = Of(n, c, this.options.removeNSPrefix), f = m.tagName;
        const g = m.rawTagName;
        let v = m.tagExp, E = m.attrExpPresent, b = m.closeIndex;
        this.options.transformTagName && (f = this.options.transformTagName(f)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
        const _ = s;
        if (_ && this.options.unpairedTags.indexOf(_.tagname) !== -1 && (s = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), f !== r.tagname && (u += u ? "." + f : f), this.isItStopNode(this.options.stopNodes, u, f)) {
          let p = "";
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1)
            f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), u = u.substr(0, u.length - 1), v = f) : v = v.substr(0, v.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(f) !== -1)
            c = m.closeIndex;
          else {
            const T = this.readStopNodeData(n, g, b + 1);
            if (!T) throw new Error(`Unexpected end of ${g}`);
            c = T.i, p = T.tagContent;
          }
          const C = new Is(f);
          f !== v && E && (C[":@"] = this.buildAttributesMap(v, u, f)), p && (p = this.parseTextData(p, f, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, p), this.addChild(s, C, u);
        } else {
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1) {
            f[f.length - 1] === "/" ? (f = f.substr(0, f.length - 1), u = u.substr(0, u.length - 1), v = f) : v = v.substr(0, v.length - 1), this.options.transformTagName && (f = this.options.transformTagName(f));
            const p = new Is(f);
            f !== v && E && (p[":@"] = this.buildAttributesMap(v, u, f)), this.addChild(s, p, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const p = new Is(f);
            this.tagsNodeStack.push(s), f !== v && E && (p[":@"] = this.buildAttributesMap(v, u, f)), this.addChild(s, p, u), s = p;
          }
          a = "", c = b;
        }
      }
    else
      a += n[c];
  return r.child;
};
function eS(n, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), n.addChild(r));
}
const tS = function(n) {
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
function nS(n, r, s, a) {
  return n && (a === void 0 && (a = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function rS(n, r, s) {
  const a = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (a === c || r === c) return !0;
  }
  return !1;
}
function aS(n, r, s = ">") {
  let a, u = "";
  for (let c = r; c < n.length; c++) {
    let h = n[c];
    if (a)
      h === a && (a = "");
    else if (h === '"' || h === "'")
      a = h;
    else if (h === s[0])
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
    else h === "	" && (h = " ");
    u += h;
  }
}
function Oa(n, r, s, a) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Of(n, r, s, a = ">") {
  const u = aS(n, r + 1, a);
  if (!u) return;
  let c = u.data;
  const h = u.index, m = c.search(/\s/);
  let f = c, g = !0;
  m !== -1 && (f = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const v = f;
  if (s) {
    const E = f.indexOf(":");
    E !== -1 && (f = f.substr(E + 1), g = f !== u.data.substr(E + 1));
  }
  return {
    tagName: f,
    tagExp: c,
    closeIndex: h,
    attrExpPresent: g,
    rawTagName: v
  };
}
function iS(n, r, s) {
  const a = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Oa(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(a, s),
            i: c
          };
        s = c;
      } else if (n[s + 1] === "?")
        s = Oa(n, "?>", s + 1, "StopNode is not closed.");
      else if (n.substr(s + 1, 3) === "!--")
        s = Oa(n, "-->", s + 3, "StopNode is not closed.");
      else if (n.substr(s + 1, 2) === "![")
        s = Oa(n, "]]>", s, "StopNode is not closed.") - 2;
      else {
        const c = Of(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function Mf(n, r, s) {
  if (r && typeof n == "string") {
    const a = n.trim();
    return a === "true" ? !0 : a === "false" ? !1 : G8(n, s);
  } else
    return _8(n) ? n : "";
}
function sS(n, r) {
  return U0(n, r);
}
function U0(n, r, s) {
  let a;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const h = n[c], m = oS(h);
    let f = "";
    if (s === void 0 ? f = m : f = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = h[m] : a += "" + h[m];
    else {
      if (m === void 0)
        continue;
      if (h[m]) {
        let g = U0(h[m], r, f);
        const v = lS(g, r);
        h[":@"] ? uS(g, h[":@"], f, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(g)) : r.isArray(m, f, v) ? u[m] = [g] : u[m] = g;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function oS(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function uS(n, r, s, a) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let h = 0; h < c; h++) {
      const m = u[h];
      a.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function lS(n, r) {
  const { textNodeName: s } = r, a = Object.keys(n).length;
  return !!(a === 0 || a === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class cS {
  constructor(r) {
    this.externalEntities = {}, this.options = M8(r);
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
      const c = S8(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const a = new Y8(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : sS(u, this.options);
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
const dS = new cS();
function fS(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function H0(n, r = {}) {
  let s = n;
  const { previousContent: a } = r;
  if (s = s.replace(/```xml/g, "").replace(/```/g, ""), a && (s = a + s.trimEnd()), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const u = {};
  try {
    const c = dS.parse(s);
    if (!c.lorebooks)
      return u;
    const h = c.lorebooks.entry?.content ? [c.lorebooks.entry] : c.lorebooks.entry;
    for (const m of h) {
      const f = m.worldName;
      f && (u[f] || (u[f] = []), u[f].push({
        uid: m.id ?? fS(6),
        key: m.triggers?.split(",").map((g) => g.trim()) ?? [],
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
function hS(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function pS(n, r) {
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
var ku = { exports: {} }, xu = { exports: {} }, Un = {}, sn = {}, Ov;
function ln() {
  if (Ov) return sn;
  Ov = 1, sn.__esModule = !0, sn.extend = u, sn.indexOf = f, sn.escapeExpression = g, sn.isEmpty = v, sn.createFrame = E, sn.blockParams = b, sn.appendContextPath = _;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function a(p) {
    return n[p];
  }
  function u(p) {
    for (var C = 1; C < arguments.length; C++)
      for (var T in arguments[C])
        Object.prototype.hasOwnProperty.call(arguments[C], T) && (p[T] = arguments[C][T]);
    return p;
  }
  var c = Object.prototype.toString;
  sn.toString = c;
  var h = function(C) {
    return typeof C == "function";
  };
  h(/x/) && (sn.isFunction = h = function(p) {
    return typeof p == "function" && c.call(p) === "[object Function]";
  }), sn.isFunction = h;
  var m = Array.isArray || function(p) {
    return p && typeof p == "object" ? c.call(p) === "[object Array]" : !1;
  };
  sn.isArray = m;
  function f(p, C) {
    for (var T = 0, j = p.length; T < j; T++)
      if (p[T] === C)
        return T;
    return -1;
  }
  function g(p) {
    if (typeof p != "string") {
      if (p && p.toHTML)
        return p.toHTML();
      if (p == null)
        return "";
      if (!p)
        return p + "";
      p = "" + p;
    }
    return s.test(p) ? p.replace(r, a) : p;
  }
  function v(p) {
    return !p && p !== 0 ? !0 : !!(m(p) && p.length === 0);
  }
  function E(p) {
    var C = u({}, p);
    return C._parent = p, C;
  }
  function b(p, C) {
    return p.path = C, p;
  }
  function _(p, C) {
    return (p ? p + "." : "") + C;
  }
  return sn;
}
var Nu = { exports: {} }, Mv;
function Gn() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, c) {
      var h = c && c.loc, m = void 0, f = void 0, g = void 0, v = void 0;
      h && (m = h.start.line, f = h.end.line, g = h.start.column, v = h.end.column, u += " - " + m + ":" + g);
      for (var E = Error.prototype.constructor.call(this, u), b = 0; b < s.length; b++)
        this[s[b]] = E[s[b]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
      try {
        h && (this.lineNumber = m, this.endLineNumber = f, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: v,
          enumerable: !0
        })) : (this.column = g, this.endColumn = v));
      } catch {
      }
    }
    a.prototype = new Error(), r.default = a, n.exports = r.default;
  })(Nu, Nu.exports)), Nu.exports;
}
var Bs = {}, Ou = { exports: {} }, Rv;
function mS() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ln();
    r.default = function(a) {
      a.registerHelper("blockHelperMissing", function(u, c) {
        var h = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return h(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(u, c)) : h(this);
        if (c.data && c.ids) {
          var f = s.createFrame(c.data);
          f.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: f };
        }
        return m(u, c);
      });
    }, n.exports = r.default;
  })(Ou, Ou.exports)), Ou.exports;
}
var Mu = { exports: {} }, jv;
function gS() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var a = ln(), u = Gn(), c = s(u);
    r.default = function(h) {
      h.registerHelper("each", function(m, f) {
        if (!f)
          throw new c.default("Must pass iterator to #each");
        var g = f.fn, v = f.inverse, E = 0, b = "", _ = void 0, p = void 0;
        f.data && f.ids && (p = a.appendContextPath(f.data.contextPath, f.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), f.data && (_ = a.createFrame(f.data));
        function C(l, S, w) {
          _ && (_.key = l, _.index = S, _.first = S === 0, _.last = !!w, p && (_.contextPath = p + l)), b = b + g(m[l], {
            data: _,
            blockParams: a.blockParams([m[l], l], [p + l, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var T = m.length; E < T; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var j = [], k = m[Symbol.iterator](), P = k.next(); !P.done; P = k.next())
              j.push(P.value);
            m = j;
            for (var T = m.length; E < T; E++)
              C(E, E, E === m.length - 1);
          } else
            (function() {
              var l = void 0;
              Object.keys(m).forEach(function(S) {
                l !== void 0 && C(l, E - 1), l = S, E++;
              }), l !== void 0 && C(l, E - 1, !0);
            })();
        return E === 0 && (b = v(this)), b;
      });
    }, n.exports = r.default;
  })(Mu, Mu.exports)), Mu.exports;
}
var Ru = { exports: {} }, Lv;
function vS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var a = Gn(), u = s(a);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var ju = { exports: {} }, Dv;
function yS() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var a = ln(), u = Gn(), c = s(u);
    r.default = function(h) {
      h.registerHelper("if", function(m, f) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return a.isFunction(m) && (m = m.call(this)), !f.hash.includeZero && !m || a.isEmpty(m) ? f.inverse(this) : f.fn(this);
      }), h.registerHelper("unless", function(m, f) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return h.helpers.if.call(this, m, {
          fn: f.inverse,
          inverse: f.fn,
          hash: f.hash
        });
      });
    }, n.exports = r.default;
  })(ju, ju.exports)), ju.exports;
}
var Lu = { exports: {} }, zv;
function _S() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          a.push(arguments[c]);
        var h = 1;
        u.hash.level != null ? h = u.hash.level : u.data && u.data.level != null && (h = u.data.level), a[0] = h, s.log.apply(s, a);
      });
    }, n.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var Du = { exports: {} }, Pv;
function bS() {
  return Pv || (Pv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, c) {
        return a && c.lookupProperty(a, u);
      });
    }, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var zu = { exports: {} }, Iv;
function SS() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(h) {
      return h && h.__esModule ? h : { default: h };
    }
    var a = ln(), u = Gn(), c = s(u);
    r.default = function(h) {
      h.registerHelper("with", function(m, f) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        a.isFunction(m) && (m = m.call(this));
        var g = f.fn;
        if (a.isEmpty(m))
          return f.inverse(this);
        var v = f.data;
        return f.data && f.ids && (v = a.createFrame(f.data), v.contextPath = a.appendContextPath(f.data.contextPath, f.ids[0])), g(m, {
          data: v,
          blockParams: a.blockParams([m], [v && v.contextPath])
        });
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Bv;
function q0() {
  if (Bv) return Bs;
  Bv = 1, Bs.__esModule = !0, Bs.registerDefaultHelpers = C, Bs.moveHelperToHooks = T;
  function n(j) {
    return j && j.__esModule ? j : { default: j };
  }
  var r = mS(), s = n(r), a = gS(), u = n(a), c = vS(), h = n(c), m = yS(), f = n(m), g = _S(), v = n(g), E = bS(), b = n(E), _ = SS(), p = n(_);
  function C(j) {
    s.default(j), u.default(j), h.default(j), f.default(j), v.default(j), b.default(j), p.default(j);
  }
  function T(j, k, P) {
    j.helpers[k] && (j.hooks[k] = j.helpers[k], P || delete j.helpers[k]);
  }
  return Bs;
}
var Pu = {}, Iu = { exports: {} }, Uv;
function wS() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ln();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, c, h, m) {
        var f = u;
        return c.partials || (c.partials = {}, f = function(g, v) {
          var E = h.partials;
          h.partials = s.extend({}, E, c.partials);
          var b = u(g, v);
          return h.partials = E, b;
        }), c.partials[m.args[0]] = m.fn, f;
      });
    }, n.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Hv;
function ES() {
  if (Hv) return Pu;
  Hv = 1, Pu.__esModule = !0, Pu.registerDefaultDecorators = a;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = wS(), s = n(r);
  function a(u) {
    s.default(u);
  }
  return Pu;
}
var Bu = { exports: {} }, qv;
function G0() {
  return qv || (qv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ln(), a = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var h = s.indexOf(a.methodMap, c.toLowerCase());
          h >= 0 ? c = h : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = a.lookupLevel(c), typeof console < "u" && a.lookupLevel(a.level) <= c) {
          var h = a.methodMap[c];
          console[h] || (h = "log");
          for (var m = arguments.length, f = Array(m > 1 ? m - 1 : 0), g = 1; g < m; g++)
            f[g - 1] = arguments[g];
          console[h].apply(console, f);
        }
      }
    };
    r.default = a, n.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Ai = {}, Uu = {}, Gv;
function CS() {
  if (Gv) return Uu;
  Gv = 1, Uu.__esModule = !0, Uu.createNewLookupObject = r;
  var n = ln();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Uu;
}
var Zv;
function Z0() {
  if (Zv) return Ai;
  Zv = 1, Ai.__esModule = !0, Ai.createProtoAccessControl = c, Ai.resultIsAllowed = h, Ai.resetLoggedProperties = g;
  function n(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var r = CS(), s = G0(), a = n(s), u = /* @__PURE__ */ Object.create(null);
  function c(v) {
    var E = /* @__PURE__ */ Object.create(null);
    E.constructor = !1, E.__defineGetter__ = !1, E.__defineSetter__ = !1, E.__lookupGetter__ = !1;
    var b = /* @__PURE__ */ Object.create(null);
    return b.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(b, v.allowedProtoProperties),
        defaultValue: v.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(E, v.allowedProtoMethods),
        defaultValue: v.allowProtoMethodsByDefault
      }
    };
  }
  function h(v, E, b) {
    return m(typeof v == "function" ? E.methods : E.properties, b);
  }
  function m(v, E) {
    return v.whitelist[E] !== void 0 ? v.whitelist[E] === !0 : v.defaultValue !== void 0 ? v.defaultValue : (f(E), !1);
  }
  function f(v) {
    u[v] !== !0 && (u[v] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + v + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(u).forEach(function(v) {
      delete u[v];
    });
  }
  return Ai;
}
var Vv;
function Xf() {
  if (Vv) return Un;
  Vv = 1, Un.__esModule = !0, Un.HandlebarsEnvironment = p;
  function n(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = ln(), s = Gn(), a = n(s), u = q0(), c = ES(), h = G0(), m = n(h), f = Z0(), g = "4.7.8";
  Un.VERSION = g;
  var v = 8;
  Un.COMPILER_REVISION = v;
  var E = 7;
  Un.LAST_COMPATIBLE_COMPILER_REVISION = E;
  var b = {
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
  Un.REVISION_CHANGES = b;
  var _ = "[object Object]";
  function p(T, j, k) {
    this.helpers = T || {}, this.partials = j || {}, this.decorators = k || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  p.prototype = {
    constructor: p,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(j, k) {
      if (r.toString.call(j) === _) {
        if (k)
          throw new a.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, j);
      } else
        this.helpers[j] = k;
    },
    unregisterHelper: function(j) {
      delete this.helpers[j];
    },
    registerPartial: function(j, k) {
      if (r.toString.call(j) === _)
        r.extend(this.partials, j);
      else {
        if (typeof k > "u")
          throw new a.default('Attempting to register a partial called "' + j + '" as undefined');
        this.partials[j] = k;
      }
    },
    unregisterPartial: function(j) {
      delete this.partials[j];
    },
    registerDecorator: function(j, k) {
      if (r.toString.call(j) === _) {
        if (k)
          throw new a.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, j);
      } else
        this.decorators[j] = k;
    },
    unregisterDecorator: function(j) {
      delete this.decorators[j];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      f.resetLoggedProperties();
    }
  };
  var C = m.default.log;
  return Un.log = C, Un.createFrame = r.createFrame, Un.logger = m.default, Un;
}
var Hu = { exports: {} }, $v;
function AS() {
  return $v || ($v = 1, (function(n, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var vr = {}, qu = {}, Yv;
function TS() {
  if (Yv) return qu;
  Yv = 1, qu.__esModule = !0, qu.wrapHelper = n;
  function n(r, s) {
    if (typeof r != "function")
      return r;
    var a = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = s(c), r.apply(this, arguments);
    };
    return a;
  }
  return qu;
}
var Fv;
function kS() {
  if (Fv) return vr;
  Fv = 1, vr.__esModule = !0, vr.checkRevision = v, vr.template = E, vr.wrapProgram = b, vr.resolvePartial = _, vr.invokePartial = p, vr.noop = C;
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
  var s = ln(), a = r(s), u = Gn(), c = n(u), h = Xf(), m = q0(), f = TS(), g = Z0();
  function v(l) {
    var S = l && l[0] || 1, w = h.COMPILER_REVISION;
    if (!(S >= h.LAST_COMPATIBLE_COMPILER_REVISION && S <= h.COMPILER_REVISION))
      if (S < h.LAST_COMPATIBLE_COMPILER_REVISION) {
        var A = h.REVISION_CHANGES[w], O = h.REVISION_CHANGES[S];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + A + ") or downgrade your runtime to an older version (" + O + ").");
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
    function A(M, z, H) {
      H.hash && (z = a.extend({}, z, H.hash), H.ids && (H.ids[0] = !0)), M = S.VM.resolvePartial.call(this, M, z, H);
      var Z = a.extend({}, H, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), G = S.VM.invokePartial.call(this, M, z, Z);
      if (G == null && S.compile && (H.partials[H.name] = S.compile(M, l.compilerOptions, S), G = H.partials[H.name](z, Z)), G != null) {
        if (H.indent) {
          for (var Q = G.split(`
`), R = 0, B = Q.length; R < B && !(!Q[R] && R + 1 === B); R++)
            Q[R] = H.indent + Q[R];
          G = Q.join(`
`);
        }
        return G;
      } else
        throw new c.default("The partial " + H.name + " could not be compiled when running in runtime-only mode");
    }
    var O = {
      strict: function(z, H, Z) {
        if (!z || !(H in z))
          throw new c.default('"' + H + '" not defined in ' + z, {
            loc: Z
          });
        return O.lookupProperty(z, H);
      },
      lookupProperty: function(z, H) {
        var Z = z[H];
        if (Z == null || Object.prototype.hasOwnProperty.call(z, H) || g.resultIsAllowed(Z, O.protoAccessControl, H))
          return Z;
      },
      lookup: function(z, H) {
        for (var Z = z.length, G = 0; G < Z; G++) {
          var Q = z[G] && O.lookupProperty(z[G], H);
          if (Q != null)
            return z[G][H];
        }
      },
      lambda: function(z, H) {
        return typeof z == "function" ? z.call(H) : z;
      },
      escapeExpression: a.escapeExpression,
      invokePartial: A,
      fn: function(z) {
        var H = l[z];
        return H.decorator = l[z + "_d"], H;
      },
      programs: [],
      program: function(z, H, Z, G, Q) {
        var R = this.programs[z], B = this.fn(z);
        return H || Q || G || Z ? R = b(this, z, B, H, Z, G, Q) : R || (R = this.programs[z] = b(this, z, B)), R;
      },
      data: function(z, H) {
        for (; z && H--; )
          z = z._parent;
        return z;
      },
      mergeIfNeeded: function(z, H) {
        var Z = z || H;
        return z && H && z !== H && (Z = a.extend({}, H, z)), Z;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: S.VM.noop,
      compilerInfo: l.compiler
    };
    function L(M) {
      var z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], H = z.data;
      L._setup(z), !z.partial && l.useData && (H = T(M, H));
      var Z = void 0, G = l.useBlockParams ? [] : void 0;
      l.useDepths && (z.depths ? Z = M != z.depths[0] ? [M].concat(z.depths) : z.depths : Z = [M]);
      function Q(R) {
        return "" + l.main(O, R, O.helpers, O.partials, H, G, Z);
      }
      return Q = j(l.main, Q, O, z.depths || [], H, G), Q(M, z);
    }
    return L.isTop = !0, L._setup = function(M) {
      if (M.partial)
        O.protoAccessControl = M.protoAccessControl, O.helpers = M.helpers, O.partials = M.partials, O.decorators = M.decorators, O.hooks = M.hooks;
      else {
        var z = a.extend({}, S.helpers, M.helpers);
        k(z, O), O.helpers = z, l.usePartial && (O.partials = O.mergeIfNeeded(M.partials, S.partials)), (l.usePartial || l.useDecorators) && (O.decorators = a.extend({}, S.decorators, M.decorators)), O.hooks = {}, O.protoAccessControl = g.createProtoAccessControl(M);
        var H = M.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(O, "helperMissing", H), m.moveHelperToHooks(O, "blockHelperMissing", H);
      }
    }, L._child = function(M, z, H, Z) {
      if (l.useBlockParams && !H)
        throw new c.default("must pass block params");
      if (l.useDepths && !Z)
        throw new c.default("must pass parent depths");
      return b(O, M, l[M], z, 0, H, Z);
    }, L;
  }
  function b(l, S, w, A, O, L, M) {
    function z(H) {
      var Z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], G = M;
      return M && H != M[0] && !(H === l.nullContext && M[0] === null) && (G = [H].concat(M)), w(l, H, l.helpers, l.partials, Z.data || A, L && [Z.blockParams].concat(L), G);
    }
    return z = j(w, z, l, M, A, L), z.program = S, z.depth = M ? M.length : 0, z.blockParams = O || 0, z;
  }
  function _(l, S, w) {
    return l ? !l.call && !w.name && (w.name = l, l = w.partials[l]) : w.name === "@partial-block" ? l = w.data["partial-block"] : l = w.partials[w.name], l;
  }
  function p(l, S, w) {
    var A = w.data && w.data["partial-block"];
    w.partial = !0, w.ids && (w.data.contextPath = w.ids[0] || w.data.contextPath);
    var O = void 0;
    if (w.fn && w.fn !== C && (function() {
      w.data = h.createFrame(w.data);
      var L = w.fn;
      O = w.data["partial-block"] = function(z) {
        var H = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return H.data = h.createFrame(H.data), H.data["partial-block"] = A, L(z, H);
      }, L.partials && (w.partials = a.extend({}, w.partials, L.partials));
    })(), l === void 0 && O && (l = O), l === void 0)
      throw new c.default("The partial " + w.name + " could not be found");
    if (l instanceof Function)
      return l(S, w);
  }
  function C() {
    return "";
  }
  function T(l, S) {
    return (!S || !("root" in S)) && (S = S ? h.createFrame(S) : {}, S.root = l), S;
  }
  function j(l, S, w, A, O, L) {
    if (l.decorator) {
      var M = {};
      S = l.decorator(S, M, w, A && A[0], O, L, A), a.extend(S, M);
    }
    return S;
  }
  function k(l, S) {
    Object.keys(l).forEach(function(w) {
      var A = l[w];
      l[w] = P(A, S);
    });
  }
  function P(l, S) {
    var w = S.lookupProperty;
    return f.wrapHelper(l, function(A) {
      return a.extend({ lookupProperty: w }, A);
    });
  }
  return vr;
}
var Gu = { exports: {} }, Xv;
function V0() {
  return Xv || (Xv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var a = globalThis.Handlebars;
      s.noConflict = function() {
        return globalThis.Handlebars === s && (globalThis.Handlebars = a), s;
      };
    }, n.exports = r.default;
  })(Gu, Gu.exports)), Gu.exports;
}
var Qv;
function xS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(k) {
      return k && k.__esModule ? k : { default: k };
    }
    function a(k) {
      if (k && k.__esModule)
        return k;
      var P = {};
      if (k != null)
        for (var l in k)
          Object.prototype.hasOwnProperty.call(k, l) && (P[l] = k[l]);
      return P.default = k, P;
    }
    var u = Xf(), c = a(u), h = AS(), m = s(h), f = Gn(), g = s(f), v = ln(), E = a(v), b = kS(), _ = a(b), p = V0(), C = s(p);
    function T() {
      var k = new c.HandlebarsEnvironment();
      return E.extend(k, c), k.SafeString = m.default, k.Exception = g.default, k.Utils = E, k.escapeExpression = E.escapeExpression, k.VM = _, k.template = function(P) {
        return _.template(P, k);
      }, k;
    }
    var j = T();
    j.create = T, C.default(j), j.default = j, r.default = j, n.exports = r.default;
  })(xu, xu.exports)), xu.exports;
}
var Zu = { exports: {} }, Kv;
function $0() {
  return Kv || (Kv = 1, (function(n, r) {
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
var Ti = {}, Vu = { exports: {} }, Jv;
function NS() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, f, g, v, E, b, _) {
          var p = b.length - 1;
          switch (E) {
            case 1:
              return b[p - 1];
            case 2:
              this.$ = v.prepareProgram(b[p]);
              break;
            case 3:
              this.$ = b[p];
              break;
            case 4:
              this.$ = b[p];
              break;
            case 5:
              this.$ = b[p];
              break;
            case 6:
              this.$ = b[p];
              break;
            case 7:
              this.$ = b[p];
              break;
            case 8:
              this.$ = b[p];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: v.stripComment(b[p]),
                strip: v.stripFlags(b[p], b[p]),
                loc: v.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: b[p],
                value: b[p],
                loc: v.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = v.prepareRawBlock(b[p - 2], b[p - 1], b[p], this._$);
              break;
            case 12:
              this.$ = { path: b[p - 3], params: b[p - 2], hash: b[p - 1] };
              break;
            case 13:
              this.$ = v.prepareBlock(b[p - 3], b[p - 2], b[p - 1], b[p], !1, this._$);
              break;
            case 14:
              this.$ = v.prepareBlock(b[p - 3], b[p - 2], b[p - 1], b[p], !0, this._$);
              break;
            case 15:
              this.$ = { open: b[p - 5], path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 16:
              this.$ = { path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 17:
              this.$ = { path: b[p - 4], params: b[p - 3], hash: b[p - 2], blockParams: b[p - 1], strip: v.stripFlags(b[p - 5], b[p]) };
              break;
            case 18:
              this.$ = { strip: v.stripFlags(b[p - 1], b[p - 1]), program: b[p] };
              break;
            case 19:
              var C = v.prepareBlock(b[p - 2], b[p - 1], b[p], b[p], !1, this._$), T = v.prepareProgram([C], b[p - 1].loc);
              T.chained = !0, this.$ = { strip: b[p - 2].strip, program: T, chain: !0 };
              break;
            case 20:
              this.$ = b[p];
              break;
            case 21:
              this.$ = { path: b[p - 1], strip: v.stripFlags(b[p - 2], b[p]) };
              break;
            case 22:
              this.$ = v.prepareMustache(b[p - 3], b[p - 2], b[p - 1], b[p - 4], v.stripFlags(b[p - 4], b[p]), this._$);
              break;
            case 23:
              this.$ = v.prepareMustache(b[p - 3], b[p - 2], b[p - 1], b[p - 4], v.stripFlags(b[p - 4], b[p]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: b[p - 3],
                params: b[p - 2],
                hash: b[p - 1],
                indent: "",
                strip: v.stripFlags(b[p - 4], b[p]),
                loc: v.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = v.preparePartialBlock(b[p - 2], b[p - 1], b[p], this._$);
              break;
            case 26:
              this.$ = { path: b[p - 3], params: b[p - 2], hash: b[p - 1], strip: v.stripFlags(b[p - 4], b[p]) };
              break;
            case 27:
              this.$ = b[p];
              break;
            case 28:
              this.$ = b[p];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: b[p - 3],
                params: b[p - 2],
                hash: b[p - 1],
                loc: v.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: b[p], loc: v.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: v.id(b[p - 2]), value: b[p], loc: v.locInfo(this._$) };
              break;
            case 32:
              this.$ = v.id(b[p - 1]);
              break;
            case 33:
              this.$ = b[p];
              break;
            case 34:
              this.$ = b[p];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: b[p], original: b[p], loc: v.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(b[p]), original: Number(b[p]), loc: v.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: b[p] === "true", original: b[p] === "true", loc: v.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: v.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: v.locInfo(this._$) };
              break;
            case 40:
              this.$ = b[p];
              break;
            case 41:
              this.$ = b[p];
              break;
            case 42:
              this.$ = v.preparePath(!0, b[p], this._$);
              break;
            case 43:
              this.$ = v.preparePath(!1, b[p], this._$);
              break;
            case 44:
              b[p - 2].push({ part: v.id(b[p]), original: b[p], separator: b[p - 1] }), this.$ = b[p - 2];
              break;
            case 45:
              this.$ = [{ part: v.id(b[p]), original: b[p] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              b[p - 1].push(b[p]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              b[p - 1].push(b[p]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              b[p - 1].push(b[p]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              b[p - 1].push(b[p]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              b[p - 1].push(b[p]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              b[p - 1].push(b[p]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              b[p - 1].push(b[p]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              b[p - 1].push(b[p]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              b[p - 1].push(b[p]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              b[p - 1].push(b[p]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              b[p - 1].push(b[p]);
              break;
            case 98:
              this.$ = [b[p]];
              break;
            case 99:
              b[p - 1].push(b[p]);
              break;
            case 100:
              this.$ = [b[p]];
              break;
            case 101:
              b[p - 1].push(b[p]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, f) {
          throw new Error(m);
        },
        parse: function(m) {
          var f = this, g = [0], v = [null], E = [], b = this.table, _ = "", p = 0, C = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var T = this.lexer.yylloc;
          E.push(T);
          var j = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function k() {
            var Z;
            return Z = f.lexer.lex() || 1, typeof Z != "number" && (Z = f.symbols_[Z] || Z), Z;
          }
          for (var P, l, S, w, A = {}, O, L, M, z; ; ) {
            if (l = g[g.length - 1], this.defaultActions[l] ? S = this.defaultActions[l] : ((P === null || typeof P > "u") && (P = k()), S = b[l] && b[l][P]), typeof S > "u" || !S.length || !S[0]) {
              var H = "";
              {
                z = [];
                for (O in b[l]) this.terminals_[O] && O > 2 && z.push("'" + this.terminals_[O] + "'");
                this.lexer.showPosition ? H = "Parse error on line " + (p + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : H = "Parse error on line " + (p + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(H, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: T, expected: z });
              }
            }
            if (S[0] instanceof Array && S.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + P);
            switch (S[0]) {
              case 1:
                g.push(P), v.push(this.lexer.yytext), E.push(this.lexer.yylloc), g.push(S[1]), P = null, C = this.lexer.yyleng, _ = this.lexer.yytext, p = this.lexer.yylineno, T = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[S[1]][1], A.$ = v[v.length - L], A._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, j && (A._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(A, _, C, p, this.yy, S[1], v, E), typeof w < "u")
                  return w;
                L && (g = g.slice(0, -1 * L * 2), v = v.slice(0, -1 * L), E = E.slice(0, -1 * L)), g.push(this.productions_[S[1]][0]), v.push(A.$), E.push(A._$), M = b[g[g.length - 2]][g[g.length - 1]], g.push(M);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var h = {
          EOF: 1,
          parseError: function(f, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(f, g);
            else
              throw new Error(f);
          },
          setInput: function(f) {
            return this._input = f, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var f = this._input[0];
            this.yytext += f, this.yyleng++, this.offset++, this.match += f, this.matched += f;
            var g = f.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), f;
          },
          unput: function(f) {
            var g = f.length, v = f.split(/(?:\r\n?|\n)/g);
            this._input = f + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var E = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), v.length - 1 && (this.yylineno -= v.length - 1);
            var b = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: v ? (v.length === E.length ? this.yylloc.first_column : 0) + E[E.length - v.length].length - v[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [b[0], b[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(f) {
            this.unput(this.match.slice(f));
          },
          pastInput: function() {
            var f = this.matched.substr(0, this.matched.length - this.match.length);
            return (f.length > 20 ? "..." : "") + f.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var f = this.match;
            return f.length < 20 && (f += this._input.substr(0, 20 - f.length)), (f.substr(0, 20) + (f.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var f = this.pastInput(), g = new Array(f.length + 1).join("-");
            return f + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var f, g, v, E, b;
            this._more || (this.yytext = "", this.match = "");
            for (var _ = this._currentRules(), p = 0; p < _.length && (v = this._input.match(this.rules[_[p]]), !(v && (!g || v[0].length > g[0].length) && (g = v, E = p, !this.options.flex))); p++)
              ;
            return g ? (b = g[0].match(/(?:\r\n?|\n).*/g), b && (this.yylineno += b.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: b ? b[b.length - 1].length - b[b.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], f = this.performAction.call(this, this.yy, this, _[E], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), f || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var f = this.next();
            return typeof f < "u" ? f : this.lex();
          },
          begin: function(f) {
            this.conditionStack.push(f);
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
          pushState: function(f) {
            this.begin(f);
          }
        };
        return h.options = {}, h.performAction = function(f, g, v, E) {
          function b(_, p) {
            return g.yytext = g.yytext.substring(_, g.yyleng - p + _);
          }
          switch (v) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (b(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (b(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (b(5, 9), "END_RAW_BLOCK");
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
              this.unput(g.yytext), this.popState(), this.begin("com");
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
              return g.yytext = b(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = b(1, 2).replace(/\\'/g, "'"), 80;
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
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, h.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], h.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, h;
      })();
      a.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = a, a.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var $u = { exports: {} }, Yu = { exports: {} }, Wv;
function Y0() {
  return Wv || (Wv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = Gn(), u = s(a);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(v, E) {
        var b = this.accept(v[E]);
        if (this.mutating) {
          if (b && !c.prototype[b.type])
            throw new u.default('Unexpected node type "' + b.type + '" found when accepting ' + E + " on " + v.type);
          v[E] = b;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(v, E) {
        if (this.acceptKey(v, E), !v[E])
          throw new u.default(v.type + " requires " + E);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(v) {
        for (var E = 0, b = v.length; E < b; E++)
          this.acceptKey(v, E), v[E] || (v.splice(E, 1), E--, b--);
      },
      accept: function(v) {
        if (v) {
          if (!this[v.type])
            throw new u.default("Unknown type: " + v.type, v);
          this.current && this.parents.unshift(this.current), this.current = v;
          var E = this[v.type](v);
          if (this.current = this.parents.shift(), !this.mutating || E)
            return E;
          if (E !== !1)
            return v;
        }
      },
      Program: function(v) {
        this.acceptArray(v.body);
      },
      MustacheStatement: h,
      Decorator: h,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: f,
      PartialBlockStatement: function(v) {
        f.call(this, v), this.acceptKey(v, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: h,
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
      Hash: function(v) {
        this.acceptArray(v.pairs);
      },
      HashPair: function(v) {
        this.acceptRequired(v, "value");
      }
    };
    function h(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function m(g) {
      h.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function f(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = c, n.exports = r.default;
  })(Yu, Yu.exports)), Yu.exports;
}
var ey;
function OS() {
  return ey || (ey = 1, (function(n, r) {
    r.__esModule = !0;
    function s(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var a = Y0(), u = s(a);
    function c() {
      var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = v;
    }
    c.prototype = new u.default(), c.prototype.Program = function(v) {
      var E = !this.options.ignoreStandalone, b = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var _ = v.body, p = 0, C = _.length; p < C; p++) {
        var T = _[p], j = this.accept(T);
        if (j) {
          var k = h(_, p, b), P = m(_, p, b), l = j.openStandalone && k, S = j.closeStandalone && P, w = j.inlineStandalone && k && P;
          j.close && f(_, p, !0), j.open && g(_, p, !0), E && w && (f(_, p), g(_, p) && T.type === "PartialStatement" && (T.indent = /([ \t]+$)/.exec(_[p - 1].original)[1])), E && l && (f((T.program || T.inverse).body), g(_, p)), E && S && (f(_, p), g((T.inverse || T.program).body));
        }
      }
      return v;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(v) {
      this.accept(v.program), this.accept(v.inverse);
      var E = v.program || v.inverse, b = v.program && v.inverse, _ = b, p = b;
      if (b && b.chained)
        for (_ = b.body[0].program; p.chained; )
          p = p.body[p.body.length - 1].program;
      var C = {
        open: v.openStrip.open,
        close: v.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(E.body),
        closeStandalone: h((_ || E).body)
      };
      if (v.openStrip.close && f(E.body, null, !0), b) {
        var T = v.inverseStrip;
        T.open && g(E.body, null, !0), T.close && f(_.body, null, !0), v.closeStrip.open && g(p.body, null, !0), !this.options.ignoreStandalone && h(E.body) && m(_.body) && (g(E.body), f(_.body));
      } else v.closeStrip.open && g(E.body, null, !0);
      return C;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(v) {
      return v.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(v) {
      var E = v.strip || {};
      return {
        inlineStandalone: !0,
        open: E.open,
        close: E.close
      };
    };
    function h(v, E, b) {
      E === void 0 && (E = v.length);
      var _ = v[E - 1], p = v[E - 2];
      if (!_)
        return b;
      if (_.type === "ContentStatement")
        return (p || !b ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(_.original);
    }
    function m(v, E, b) {
      E === void 0 && (E = -1);
      var _ = v[E + 1], p = v[E + 2];
      if (!_)
        return b;
      if (_.type === "ContentStatement")
        return (p || !b ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(_.original);
    }
    function f(v, E, b) {
      var _ = v[E == null ? 0 : E + 1];
      if (!(!_ || _.type !== "ContentStatement" || !b && _.rightStripped)) {
        var p = _.value;
        _.value = _.value.replace(b ? /^\s+/ : /^[ \t]*\r?\n?/, ""), _.rightStripped = _.value !== p;
      }
    }
    function g(v, E, b) {
      var _ = v[E == null ? v.length - 1 : E - 1];
      if (!(!_ || _.type !== "ContentStatement" || !b && _.leftStripped)) {
        var p = _.value;
        return _.value = _.value.replace(b ? /\s+$/ : /[ \t]+$/, ""), _.leftStripped = _.value !== p, _.leftStripped;
      }
    }
    r.default = c, n.exports = r.default;
  })($u, $u.exports)), $u.exports;
}
var vn = {}, ty;
function MS() {
  if (ty) return vn;
  ty = 1, vn.__esModule = !0, vn.SourceLocation = u, vn.id = c, vn.stripFlags = h, vn.stripComment = m, vn.preparePath = f, vn.prepareMustache = g, vn.prepareRawBlock = v, vn.prepareBlock = E, vn.prepareProgram = b, vn.preparePartialBlock = _;
  function n(p) {
    return p && p.__esModule ? p : { default: p };
  }
  var r = Gn(), s = n(r);
  function a(p, C) {
    if (C = C.path ? C.path.original : C, p.path.original !== C) {
      var T = { loc: p.path.loc };
      throw new s.default(p.path.original + " doesn't match " + C, T);
    }
  }
  function u(p, C) {
    this.source = p, this.start = {
      line: C.first_line,
      column: C.first_column
    }, this.end = {
      line: C.last_line,
      column: C.last_column
    };
  }
  function c(p) {
    return /^\[.*\]$/.test(p) ? p.substring(1, p.length - 1) : p;
  }
  function h(p, C) {
    return {
      open: p.charAt(2) === "~",
      close: C.charAt(C.length - 3) === "~"
    };
  }
  function m(p) {
    return p.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function f(p, C, T) {
    T = this.locInfo(T);
    for (var j = p ? "@" : "", k = [], P = 0, l = 0, S = C.length; l < S; l++) {
      var w = C[l].part, A = C[l].original !== w;
      if (j += (C[l].separator || "") + w, !A && (w === ".." || w === "." || w === "this")) {
        if (k.length > 0)
          throw new s.default("Invalid path: " + j, { loc: T });
        w === ".." && P++;
      } else
        k.push(w);
    }
    return {
      type: "PathExpression",
      data: p,
      depth: P,
      parts: k,
      original: j,
      loc: T
    };
  }
  function g(p, C, T, j, k, P) {
    var l = j.charAt(3) || j.charAt(2), S = l !== "{" && l !== "&", w = /\*/.test(j);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: p,
      params: C,
      hash: T,
      escaped: S,
      strip: k,
      loc: this.locInfo(P)
    };
  }
  function v(p, C, T, j) {
    a(p, T), j = this.locInfo(j);
    var k = {
      type: "Program",
      body: C,
      strip: {},
      loc: j
    };
    return {
      type: "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: k,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: j
    };
  }
  function E(p, C, T, j, k, P) {
    j && j.path && a(p, j);
    var l = /\*/.test(p.open);
    C.blockParams = p.blockParams;
    var S = void 0, w = void 0;
    if (T) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", T);
      T.chain && (T.program.body[0].closeStrip = j.strip), w = T.strip, S = T.program;
    }
    return k && (k = S, S = C, C = k), {
      type: l ? "DecoratorBlock" : "BlockStatement",
      path: p.path,
      params: p.params,
      hash: p.hash,
      program: C,
      inverse: S,
      openStrip: p.strip,
      inverseStrip: w,
      closeStrip: j && j.strip,
      loc: this.locInfo(P)
    };
  }
  function b(p, C) {
    if (!C && p.length) {
      var T = p[0].loc, j = p[p.length - 1].loc;
      T && j && (C = {
        source: T.source,
        start: {
          line: T.start.line,
          column: T.start.column
        },
        end: {
          line: j.end.line,
          column: j.end.column
        }
      });
    }
    return {
      type: "Program",
      body: p,
      strip: {},
      loc: C
    };
  }
  function _(p, C, T, j) {
    return a(p, T), {
      type: "PartialBlockStatement",
      name: p.path,
      params: p.params,
      hash: p.hash,
      program: C,
      openStrip: p.strip,
      closeStrip: T && T.strip,
      loc: this.locInfo(j)
    };
  }
  return vn;
}
var ny;
function RS() {
  if (ny) return Ti;
  ny = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = v, Ti.parse = E;
  function n(b) {
    if (b && b.__esModule)
      return b;
    var _ = {};
    if (b != null)
      for (var p in b)
        Object.prototype.hasOwnProperty.call(b, p) && (_[p] = b[p]);
    return _.default = b, _;
  }
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var s = NS(), a = r(s), u = OS(), c = r(u), h = MS(), m = n(h), f = ln();
  Ti.parser = a.default;
  var g = {};
  f.extend(g, m);
  function v(b, _) {
    if (b.type === "Program")
      return b;
    a.default.yy = g, g.locInfo = function(C) {
      return new g.SourceLocation(_ && _.srcName, C);
    };
    var p = a.default.parse(b);
    return p;
  }
  function E(b, _) {
    var p = v(b, _), C = new c.default(_);
    return C.accept(p);
  }
  return Ti;
}
var ki = {}, ry;
function jS() {
  if (ry) return ki;
  ry = 1, ki.__esModule = !0, ki.Compiler = m, ki.precompile = f, ki.compile = g;
  function n(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = Gn(), s = n(r), a = ln(), u = $0(), c = n(u), h = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(_) {
      var p = this.opcodes.length;
      if (_.opcodes.length !== p)
        return !1;
      for (var C = 0; C < p; C++) {
        var T = this.opcodes[C], j = _.opcodes[C];
        if (T.opcode !== j.opcode || !v(T.args, j.args))
          return !1;
      }
      p = this.children.length;
      for (var C = 0; C < p; C++)
        if (!this.children[C].equals(_.children[C]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(_, p) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = p, this.stringParams = p.stringParams, this.trackIds = p.trackIds, p.blockParams = p.blockParams || [], p.knownHelpers = a.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, p.knownHelpers), this.accept(_);
    },
    compileProgram: function(_) {
      var p = new this.compiler(), C = p.compile(_, this.options), T = this.guid++;
      return this.usePartial = this.usePartial || C.usePartial, this.children[T] = C, this.useDepths = this.useDepths || C.useDepths, T;
    },
    accept: function(_) {
      if (!this[_.type])
        throw new s.default("Unknown type: " + _.type, _);
      this.sourceNode.unshift(_);
      var p = this[_.type](_);
      return this.sourceNode.shift(), p;
    },
    Program: function(_) {
      this.options.blockParams.unshift(_.blockParams);
      for (var p = _.body, C = p.length, T = 0; T < C; T++)
        this.accept(p[T]);
      return this.options.blockParams.shift(), this.isSimple = C === 1, this.blockParams = _.blockParams ? _.blockParams.length : 0, this;
    },
    BlockStatement: function(_) {
      E(_);
      var p = _.program, C = _.inverse;
      p = p && this.compileProgram(p), C = C && this.compileProgram(C);
      var T = this.classifySexpr(_);
      T === "helper" ? this.helperSexpr(_, p, C) : T === "simple" ? (this.simpleSexpr(_), this.opcode("pushProgram", p), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("blockValue", _.path.original)) : (this.ambiguousSexpr(_, p, C), this.opcode("pushProgram", p), this.opcode("pushProgram", C), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(_) {
      var p = _.program && this.compileProgram(_.program), C = this.setupFullMustacheParams(_, p, void 0), T = _.path;
      this.useDecorators = !0, this.opcode("registerDecorator", C.length, T.original);
    },
    PartialStatement: function(_) {
      this.usePartial = !0;
      var p = _.program;
      p && (p = this.compileProgram(_.program));
      var C = _.params;
      if (C.length > 1)
        throw new s.default("Unsupported number of partial arguments: " + C.length, _);
      C.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : C.push({ type: "PathExpression", parts: [], depth: 0 }));
      var T = _.name.original, j = _.name.type === "SubExpression";
      j && this.accept(_.name), this.setupFullMustacheParams(_, p, void 0, !0);
      var k = _.indent || "";
      this.options.preventIndent && k && (this.opcode("appendContent", k), k = ""), this.opcode("invokePartial", j, T, k), this.opcode("append");
    },
    PartialBlockStatement: function(_) {
      this.PartialStatement(_);
    },
    MustacheStatement: function(_) {
      this.SubExpression(_), _.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(_) {
      this.DecoratorBlock(_);
    },
    ContentStatement: function(_) {
      _.value && this.opcode("appendContent", _.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(_) {
      E(_);
      var p = this.classifySexpr(_);
      p === "simple" ? this.simpleSexpr(_) : p === "helper" ? this.helperSexpr(_) : this.ambiguousSexpr(_);
    },
    ambiguousSexpr: function(_, p, C) {
      var T = _.path, j = T.parts[0], k = p != null || C != null;
      this.opcode("getContext", T.depth), this.opcode("pushProgram", p), this.opcode("pushProgram", C), T.strict = !0, this.accept(T), this.opcode("invokeAmbiguous", j, k);
    },
    simpleSexpr: function(_) {
      var p = _.path;
      p.strict = !0, this.accept(p), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(_, p, C) {
      var T = this.setupFullMustacheParams(_, p, C), j = _.path, k = j.parts[0];
      if (this.options.knownHelpers[k])
        this.opcode("invokeKnownHelper", T.length, k);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + k, _);
        j.strict = !0, j.falsy = !0, this.accept(j), this.opcode("invokeHelper", T.length, j.original, c.default.helpers.simpleId(j));
      }
    },
    PathExpression: function(_) {
      this.addDepth(_.depth), this.opcode("getContext", _.depth);
      var p = _.parts[0], C = c.default.helpers.scopedId(_), T = !_.depth && !C && this.blockParamIndex(p);
      T ? this.opcode("lookupBlockParam", T, _.parts) : p ? _.data ? (this.options.data = !0, this.opcode("lookupData", _.depth, _.parts, _.strict)) : this.opcode("lookupOnContext", _.parts, _.falsy, _.strict, C) : this.opcode("pushContext");
    },
    StringLiteral: function(_) {
      this.opcode("pushString", _.value);
    },
    NumberLiteral: function(_) {
      this.opcode("pushLiteral", _.value);
    },
    BooleanLiteral: function(_) {
      this.opcode("pushLiteral", _.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(_) {
      var p = _.pairs, C = 0, T = p.length;
      for (this.opcode("pushHash"); C < T; C++)
        this.pushParam(p[C].value);
      for (; C--; )
        this.opcode("assignToHash", p[C].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(_) {
      this.opcodes.push({
        opcode: _,
        args: h.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(_) {
      _ && (this.useDepths = !0);
    },
    classifySexpr: function(_) {
      var p = c.default.helpers.simpleId(_.path), C = p && !!this.blockParamIndex(_.path.parts[0]), T = !C && c.default.helpers.helperExpression(_), j = !C && (T || p);
      if (j && !T) {
        var k = _.path.parts[0], P = this.options;
        P.knownHelpers[k] ? T = !0 : P.knownHelpersOnly && (j = !1);
      }
      return T ? "helper" : j ? "ambiguous" : "simple";
    },
    pushParams: function(_) {
      for (var p = 0, C = _.length; p < C; p++)
        this.pushParam(_[p]);
    },
    pushParam: function(_) {
      var p = _.value != null ? _.value : _.original || "";
      if (this.stringParams)
        p.replace && (p = p.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), _.depth && this.addDepth(_.depth), this.opcode("getContext", _.depth || 0), this.opcode("pushStringParam", p, _.type), _.type === "SubExpression" && this.accept(_);
      else {
        if (this.trackIds) {
          var C = void 0;
          if (_.parts && !c.default.helpers.scopedId(_) && !_.depth && (C = this.blockParamIndex(_.parts[0])), C) {
            var T = _.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", C, T);
          } else
            p = _.original || p, p.replace && (p = p.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", _.type, p);
        }
        this.accept(_);
      }
    },
    setupFullMustacheParams: function(_, p, C, T) {
      var j = _.params;
      return this.pushParams(j), this.opcode("pushProgram", p), this.opcode("pushProgram", C), _.hash ? this.accept(_.hash) : this.opcode("emptyHash", T), j;
    },
    blockParamIndex: function(_) {
      for (var p = 0, C = this.options.blockParams.length; p < C; p++) {
        var T = this.options.blockParams[p], j = T && a.indexOf(T, _);
        if (T && j >= 0)
          return [p, j];
      }
    }
  };
  function f(b, _, p) {
    if (b == null || typeof b != "string" && b.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
    _ = _ || {}, "data" in _ || (_.data = !0), _.compat && (_.useDepths = !0);
    var C = p.parse(b, _), T = new p.Compiler().compile(C, _);
    return new p.JavaScriptCompiler().compile(T, _);
  }
  function g(b, _, p) {
    if (_ === void 0 && (_ = {}), b == null || typeof b != "string" && b.type !== "Program")
      throw new s.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + b);
    _ = a.extend({}, _), "data" in _ || (_.data = !0), _.compat && (_.useDepths = !0);
    var C = void 0;
    function T() {
      var k = p.parse(b, _), P = new p.Compiler().compile(k, _), l = new p.JavaScriptCompiler().compile(P, _, void 0, !0);
      return p.template(l);
    }
    function j(k, P) {
      return C || (C = T()), C.call(this, k, P);
    }
    return j._setup = function(k) {
      return C || (C = T()), C._setup(k);
    }, j._child = function(k, P, l, S) {
      return C || (C = T()), C._child(k, P, l, S);
    }, j;
  }
  function v(b, _) {
    if (b === _)
      return !0;
    if (a.isArray(b) && a.isArray(_) && b.length === _.length) {
      for (var p = 0; p < b.length; p++)
        if (!v(b[p], _[p]))
          return !1;
      return !0;
    }
  }
  function E(b) {
    if (!b.path.parts) {
      var _ = b.path;
      b.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [_.original + ""],
        original: _.original + "",
        loc: _.loc
      };
    }
  }
  return ki;
}
var Fu = { exports: {} }, Xu = { exports: {} }, Us = {}, lf = {}, Qu = {}, Ku = {}, ay;
function LS() {
  if (ay) return Ku;
  ay = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ku.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ku.decode = function(r) {
    var s = 65, a = 90, u = 97, c = 122, h = 48, m = 57, f = 43, g = 47, v = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= c ? r - u + v : h <= r && r <= m ? r - h + E : r == f ? 62 : r == g ? 63 : -1;
  }, Ku;
}
var iy;
function F0() {
  if (iy) return Qu;
  iy = 1;
  var n = LS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function h(m) {
    var f = (m & 1) === 1, g = m >> 1;
    return f ? -g : g;
  }
  return Qu.encode = function(f) {
    var g = "", v, E = c(f);
    do
      v = E & a, E >>>= r, E > 0 && (v |= u), g += n.encode(v);
    while (E > 0);
    return g;
  }, Qu.decode = function(f, g, v) {
    var E = f.length, b = 0, _ = 0, p, C;
    do {
      if (g >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(f.charCodeAt(g++)), C === -1)
        throw new Error("Invalid base64 digit: " + f.charAt(g - 1));
      p = !!(C & u), C &= a, b = b + (C << _), _ += r;
    } while (p);
    v.value = h(b), v.rest = g;
  }, Qu;
}
var cf = {}, sy;
function io() {
  return sy || (sy = 1, (function(n) {
    function r(l, S, w) {
      if (S in l)
        return l[S];
      if (arguments.length === 3)
        return w;
      throw new Error('"' + S + '" is a required argument.');
    }
    n.getArg = r;
    var s = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, a = /^data:.+\,.+$/;
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
    function h(l) {
      var S = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        S = w.path;
      }
      for (var A = n.isAbsolute(S), O = S.split(/\/+/), L, M = 0, z = O.length - 1; z >= 0; z--)
        L = O[z], L === "." ? O.splice(z, 1) : L === ".." ? M++ : M > 0 && (L === "" ? (O.splice(z + 1, M), M = 0) : (O.splice(z, 2), M--));
      return S = O.join("/"), S === "" && (S = A ? "/" : "."), w ? (w.path = S, c(w)) : S;
    }
    n.normalize = h;
    function m(l, S) {
      l === "" && (l = "."), S === "" && (S = ".");
      var w = u(S), A = u(l);
      if (A && (l = A.path || "/"), w && !w.scheme)
        return A && (w.scheme = A.scheme), c(w);
      if (w || S.match(a))
        return S;
      if (A && !A.host && !A.path)
        return A.host = S, c(A);
      var O = S.charAt(0) === "/" ? S : h(l.replace(/\/+$/, "") + "/" + S);
      return A ? (A.path = O, c(A)) : O;
    }
    n.join = m, n.isAbsolute = function(l) {
      return l.charAt(0) === "/" || s.test(l);
    };
    function f(l, S) {
      l === "" && (l = "."), l = l.replace(/\/$/, "");
      for (var w = 0; S.indexOf(l + "/") !== 0; ) {
        var A = l.lastIndexOf("/");
        if (A < 0 || (l = l.slice(0, A), l.match(/^([^\/]+:\/)?\/*$/)))
          return S;
        ++w;
      }
      return Array(w + 1).join("../") + S.substr(l.length + 1);
    }
    n.relative = f;
    var g = (function() {
      var l = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in l);
    })();
    function v(l) {
      return l;
    }
    function E(l) {
      return _(l) ? "$" + l : l;
    }
    n.toSetString = g ? v : E;
    function b(l) {
      return _(l) ? l.slice(1) : l;
    }
    n.fromSetString = g ? v : b;
    function _(l) {
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
    function p(l, S, w) {
      var A = T(l.source, S.source);
      return A !== 0 || (A = l.originalLine - S.originalLine, A !== 0) || (A = l.originalColumn - S.originalColumn, A !== 0 || w) || (A = l.generatedColumn - S.generatedColumn, A !== 0) || (A = l.generatedLine - S.generatedLine, A !== 0) ? A : T(l.name, S.name);
    }
    n.compareByOriginalPositions = p;
    function C(l, S, w) {
      var A = l.generatedLine - S.generatedLine;
      return A !== 0 || (A = l.generatedColumn - S.generatedColumn, A !== 0 || w) || (A = T(l.source, S.source), A !== 0) || (A = l.originalLine - S.originalLine, A !== 0) || (A = l.originalColumn - S.originalColumn, A !== 0) ? A : T(l.name, S.name);
    }
    n.compareByGeneratedPositionsDeflated = C;
    function T(l, S) {
      return l === S ? 0 : l === null ? 1 : S === null ? -1 : l > S ? 1 : -1;
    }
    function j(l, S) {
      var w = l.generatedLine - S.generatedLine;
      return w !== 0 || (w = l.generatedColumn - S.generatedColumn, w !== 0) || (w = T(l.source, S.source), w !== 0) || (w = l.originalLine - S.originalLine, w !== 0) || (w = l.originalColumn - S.originalColumn, w !== 0) ? w : T(l.name, S.name);
    }
    n.compareByGeneratedPositionsInflated = j;
    function k(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = k;
    function P(l, S, w) {
      if (S = S || "", l && (l[l.length - 1] !== "/" && S[0] !== "/" && (l += "/"), S = l + S), w) {
        var A = u(w);
        if (!A)
          throw new Error("sourceMapURL could not be parsed");
        if (A.path) {
          var O = A.path.lastIndexOf("/");
          O >= 0 && (A.path = A.path.substring(0, O + 1));
        }
        S = m(c(A), S);
      }
      return h(S);
    }
    n.computeSourceURL = P;
  })(cf)), cf;
}
var df = {}, oy;
function X0() {
  if (oy) return df;
  oy = 1;
  var n = io(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(c, h) {
    for (var m = new a(), f = 0, g = c.length; f < g; f++)
      m.add(c[f], h);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(c, h) {
    var m = s ? c : n.toSetString(c), f = s ? this.has(c) : r.call(this._set, m), g = this._array.length;
    (!f || h) && this._array.push(c), f || (s ? this._set.set(c, g) : this._set[m] = g);
  }, a.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var h = n.toSetString(c);
    return r.call(this._set, h);
  }, a.prototype.indexOf = function(c) {
    if (s) {
      var h = this._set.get(c);
      if (h >= 0)
        return h;
    } else {
      var m = n.toSetString(c);
      if (r.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, a.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, a.prototype.toArray = function() {
    return this._array.slice();
  }, df.ArraySet = a, df;
}
var ff = {}, uy;
function DS() {
  if (uy) return ff;
  uy = 1;
  var n = io();
  function r(a, u) {
    var c = a.generatedLine, h = u.generatedLine, m = a.generatedColumn, f = u.generatedColumn;
    return h > c || h == c && f >= m || n.compareByGeneratedPositionsInflated(a, u) <= 0;
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
  }, ff.MappingList = s, ff;
}
var ly;
function Q0() {
  if (ly) return lf;
  ly = 1;
  var n = F0(), r = io(), s = X0().ArraySet, a = DS().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(h) {
    var m = h.sourceRoot, f = new u({
      file: h.file,
      sourceRoot: m
    });
    return h.eachMapping(function(g) {
      var v = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (v.source = g.source, m != null && (v.source = r.relative(m, v.source)), v.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (v.name = g.name)), f.addMapping(v);
    }), h.sources.forEach(function(g) {
      var v = g;
      m !== null && (v = r.relative(m, g)), f._sources.has(v) || f._sources.add(v);
      var E = h.sourceContentFor(g);
      E != null && f.setSourceContent(g, E);
    }), f;
  }, u.prototype.addMapping = function(h) {
    var m = r.getArg(h, "generated"), f = r.getArg(h, "original", null), g = r.getArg(h, "source", null), v = r.getArg(h, "name", null);
    this._skipValidation || this._validateMapping(m, f, g, v), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: f != null && f.line,
      originalColumn: f != null && f.column,
      source: g,
      name: v
    });
  }, u.prototype.setSourceContent = function(h, m) {
    var f = h;
    this._sourceRoot != null && (f = r.relative(this._sourceRoot, f)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(f)] = m) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(f)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(h, m, f) {
    var g = m;
    if (m == null) {
      if (h.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = h.file;
    }
    var v = this._sourceRoot;
    v != null && (g = r.relative(v, g));
    var E = new s(), b = new s();
    this._mappings.unsortedForEach(function(_) {
      if (_.source === g && _.originalLine != null) {
        var p = h.originalPositionFor({
          line: _.originalLine,
          column: _.originalColumn
        });
        p.source != null && (_.source = p.source, f != null && (_.source = r.join(f, _.source)), v != null && (_.source = r.relative(v, _.source)), _.originalLine = p.line, _.originalColumn = p.column, p.name != null && (_.name = p.name));
      }
      var C = _.source;
      C != null && !E.has(C) && E.add(C);
      var T = _.name;
      T != null && !b.has(T) && b.add(T);
    }, this), this._sources = E, this._names = b, h.sources.forEach(function(_) {
      var p = h.sourceContentFor(_);
      p != null && (f != null && (_ = r.join(f, _)), v != null && (_ = r.relative(v, _)), this.setSourceContent(_, p));
    }, this);
  }, u.prototype._validateMapping = function(h, m, f, g) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(h && "line" in h && "column" in h && h.line > 0 && h.column >= 0 && !m && !f && !g)) {
      if (h && "line" in h && "column" in h && m && "line" in m && "column" in m && h.line > 0 && h.column >= 0 && m.line > 0 && m.column >= 0 && f)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: h,
        source: f,
        original: m,
        name: g
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var h = 0, m = 1, f = 0, g = 0, v = 0, E = 0, b = "", _, p, C, T, j = this._mappings.toArray(), k = 0, P = j.length; k < P; k++) {
      if (p = j[k], _ = "", p.generatedLine !== m)
        for (h = 0; p.generatedLine !== m; )
          _ += ";", m++;
      else if (k > 0) {
        if (!r.compareByGeneratedPositionsInflated(p, j[k - 1]))
          continue;
        _ += ",";
      }
      _ += n.encode(p.generatedColumn - h), h = p.generatedColumn, p.source != null && (T = this._sources.indexOf(p.source), _ += n.encode(T - E), E = T, _ += n.encode(p.originalLine - 1 - g), g = p.originalLine - 1, _ += n.encode(p.originalColumn - f), f = p.originalColumn, p.name != null && (C = this._names.indexOf(p.name), _ += n.encode(C - v), v = C)), b += _;
    }
    return b;
  }, u.prototype._generateSourcesContent = function(h, m) {
    return h.map(function(f) {
      if (!this._sourcesContents)
        return null;
      m != null && (f = r.relative(m, f));
      var g = r.toSetString(f);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var h = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (h.file = this._file), this._sourceRoot != null && (h.sourceRoot = this._sourceRoot), this._sourcesContents && (h.sourcesContent = this._generateSourcesContent(h.sources, h.sourceRoot)), h;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, lf.SourceMapGenerator = u, lf;
}
var Hs = {}, hf = {}, cy;
function zS() {
  return cy || (cy = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, c, h, m) {
      var f = Math.floor((a - s) / 2) + s, g = h(u, c[f], !0);
      return g === 0 ? f : g > 0 ? a - f > 1 ? r(f, a, u, c, h, m) : m == n.LEAST_UPPER_BOUND ? a < c.length ? a : -1 : f : f - s > 1 ? r(s, f, u, c, h, m) : m == n.LEAST_UPPER_BOUND ? f : s < 0 ? -1 : s;
    }
    n.search = function(a, u, c, h) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        a,
        u,
        c,
        h || n.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(hf)), hf;
}
var pf = {}, dy;
function PS() {
  if (dy) return pf;
  dy = 1;
  function n(a, u, c) {
    var h = a[u];
    a[u] = a[c], a[c] = h;
  }
  function r(a, u) {
    return Math.round(a + Math.random() * (u - a));
  }
  function s(a, u, c, h) {
    if (c < h) {
      var m = r(c, h), f = c - 1;
      n(a, m, h);
      for (var g = a[h], v = c; v < h; v++)
        u(a[v], g) <= 0 && (f += 1, n(a, f, v));
      n(a, f + 1, v);
      var E = f + 1;
      s(a, u, c, E - 1), s(a, u, E + 1, h);
    }
  }
  return pf.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, pf;
}
var fy;
function IS() {
  if (fy) return Hs;
  fy = 1;
  var n = io(), r = zS(), s = X0().ArraySet, a = F0(), u = PS().quickSort;
  function c(g, v) {
    var E = g;
    return typeof g == "string" && (E = n.parseSourceMapInput(g)), E.sections != null ? new f(E, v) : new h(E, v);
  }
  c.fromSourceMap = function(g, v) {
    return h.fromSourceMap(g, v);
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
  }), c.prototype._charIsMappingSeparator = function(v, E) {
    var b = v.charAt(E);
    return b === ";" || b === ",";
  }, c.prototype._parseMappings = function(v, E) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(v, E, b) {
    var _ = E || null, p = b || c.GENERATED_ORDER, C;
    switch (p) {
      case c.GENERATED_ORDER:
        C = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        C = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var T = this.sourceRoot;
    C.map(function(j) {
      var k = j.source === null ? null : this._sources.at(j.source);
      return k = n.computeSourceURL(T, k, this._sourceMapURL), {
        source: k,
        generatedLine: j.generatedLine,
        generatedColumn: j.generatedColumn,
        originalLine: j.originalLine,
        originalColumn: j.originalColumn,
        name: j.name === null ? null : this._names.at(j.name)
      };
    }, this).forEach(v, _);
  }, c.prototype.allGeneratedPositionsFor = function(v) {
    var E = n.getArg(v, "line"), b = {
      source: n.getArg(v, "source"),
      originalLine: E,
      originalColumn: n.getArg(v, "column", 0)
    };
    if (b.source = this._findSourceIndex(b.source), b.source < 0)
      return [];
    var _ = [], p = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (p >= 0) {
      var C = this._originalMappings[p];
      if (v.column === void 0)
        for (var T = C.originalLine; C && C.originalLine === T; )
          _.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++p];
      else
        for (var j = C.originalColumn; C && C.originalLine === E && C.originalColumn == j; )
          _.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++p];
    }
    return _;
  }, Hs.SourceMapConsumer = c;
  function h(g, v) {
    var E = g;
    typeof g == "string" && (E = n.parseSourceMapInput(g));
    var b = n.getArg(E, "version"), _ = n.getArg(E, "sources"), p = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), T = n.getArg(E, "sourcesContent", null), j = n.getArg(E, "mappings"), k = n.getArg(E, "file", null);
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    C && (C = n.normalize(C)), _ = _.map(String).map(n.normalize).map(function(P) {
      return C && n.isAbsolute(C) && n.isAbsolute(P) ? n.relative(C, P) : P;
    }), this._names = s.fromArray(p.map(String), !0), this._sources = s.fromArray(_, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return n.computeSourceURL(C, P, v);
    }), this.sourceRoot = C, this.sourcesContent = T, this._mappings = j, this._sourceMapURL = v, this.file = k;
  }
  h.prototype = Object.create(c.prototype), h.prototype.consumer = c, h.prototype._findSourceIndex = function(g) {
    var v = g;
    if (this.sourceRoot != null && (v = n.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var E;
    for (E = 0; E < this._absoluteSources.length; ++E)
      if (this._absoluteSources[E] == g)
        return E;
    return -1;
  }, h.fromSourceMap = function(v, E) {
    var b = Object.create(h.prototype), _ = b._names = s.fromArray(v._names.toArray(), !0), p = b._sources = s.fromArray(v._sources.toArray(), !0);
    b.sourceRoot = v._sourceRoot, b.sourcesContent = v._generateSourcesContent(
      b._sources.toArray(),
      b.sourceRoot
    ), b.file = v._file, b._sourceMapURL = E, b._absoluteSources = b._sources.toArray().map(function(w) {
      return n.computeSourceURL(b.sourceRoot, w, E);
    });
    for (var C = v._mappings.toArray().slice(), T = b.__generatedMappings = [], j = b.__originalMappings = [], k = 0, P = C.length; k < P; k++) {
      var l = C[k], S = new m();
      S.generatedLine = l.generatedLine, S.generatedColumn = l.generatedColumn, l.source && (S.source = p.indexOf(l.source), S.originalLine = l.originalLine, S.originalColumn = l.originalColumn, l.name && (S.name = _.indexOf(l.name)), j.push(S)), T.push(S);
    }
    return u(b.__originalMappings, n.compareByOriginalPositions), b;
  }, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  h.prototype._parseMappings = function(v, E) {
    for (var b = 1, _ = 0, p = 0, C = 0, T = 0, j = 0, k = v.length, P = 0, l = {}, S = {}, w = [], A = [], O, L, M, z, H; P < k; )
      if (v.charAt(P) === ";")
        b++, P++, _ = 0;
      else if (v.charAt(P) === ",")
        P++;
      else {
        for (O = new m(), O.generatedLine = b, z = P; z < k && !this._charIsMappingSeparator(v, z); z++)
          ;
        if (L = v.slice(P, z), M = l[L], M)
          P += L.length;
        else {
          for (M = []; P < z; )
            a.decode(v, P, S), H = S.value, P = S.rest, M.push(H);
          if (M.length === 2)
            throw new Error("Found a source, but no line and column");
          if (M.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = M;
        }
        O.generatedColumn = _ + M[0], _ = O.generatedColumn, M.length > 1 && (O.source = T + M[1], T += M[1], O.originalLine = p + M[2], p = O.originalLine, O.originalLine += 1, O.originalColumn = C + M[3], C = O.originalColumn, M.length > 4 && (O.name = j + M[4], j += M[4])), A.push(O), typeof O.originalLine == "number" && w.push(O);
      }
    u(A, n.compareByGeneratedPositionsDeflated), this.__generatedMappings = A, u(w, n.compareByOriginalPositions), this.__originalMappings = w;
  }, h.prototype._findMapping = function(v, E, b, _, p, C) {
    if (v[b] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[b]);
    if (v[_] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[_]);
    return r.search(v, E, p, C);
  }, h.prototype.computeColumnSpans = function() {
    for (var v = 0; v < this._generatedMappings.length; ++v) {
      var E = this._generatedMappings[v];
      if (v + 1 < this._generatedMappings.length) {
        var b = this._generatedMappings[v + 1];
        if (E.generatedLine === b.generatedLine) {
          E.lastGeneratedColumn = b.generatedColumn - 1;
          continue;
        }
      }
      E.lastGeneratedColumn = 1 / 0;
    }
  }, h.prototype.originalPositionFor = function(v) {
    var E = {
      generatedLine: n.getArg(v, "line"),
      generatedColumn: n.getArg(v, "column")
    }, b = this._findMapping(
      E,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      n.compareByGeneratedPositionsDeflated,
      n.getArg(v, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (b >= 0) {
      var _ = this._generatedMappings[b];
      if (_.generatedLine === E.generatedLine) {
        var p = n.getArg(_, "source", null);
        p !== null && (p = this._sources.at(p), p = n.computeSourceURL(this.sourceRoot, p, this._sourceMapURL));
        var C = n.getArg(_, "name", null);
        return C !== null && (C = this._names.at(C)), {
          source: p,
          line: n.getArg(_, "originalLine", null),
          column: n.getArg(_, "originalColumn", null),
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
  }, h.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(v) {
      return v == null;
    }) : !1;
  }, h.prototype.sourceContentFor = function(v, E) {
    if (!this.sourcesContent)
      return null;
    var b = this._findSourceIndex(v);
    if (b >= 0)
      return this.sourcesContent[b];
    var _ = v;
    this.sourceRoot != null && (_ = n.relative(this.sourceRoot, _));
    var p;
    if (this.sourceRoot != null && (p = n.urlParse(this.sourceRoot))) {
      var C = _.replace(/^file:\/\//, "");
      if (p.scheme == "file" && this._sources.has(C))
        return this.sourcesContent[this._sources.indexOf(C)];
      if ((!p.path || p.path == "/") && this._sources.has("/" + _))
        return this.sourcesContent[this._sources.indexOf("/" + _)];
    }
    if (E)
      return null;
    throw new Error('"' + _ + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(v) {
    var E = n.getArg(v, "source");
    if (E = this._findSourceIndex(E), E < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var b = {
      source: E,
      originalLine: n.getArg(v, "line"),
      originalColumn: n.getArg(v, "column")
    }, _ = this._findMapping(
      b,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      n.compareByOriginalPositions,
      n.getArg(v, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (_ >= 0) {
      var p = this._originalMappings[_];
      if (p.source === b.source)
        return {
          line: n.getArg(p, "generatedLine", null),
          column: n.getArg(p, "generatedColumn", null),
          lastColumn: n.getArg(p, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Hs.BasicSourceMapConsumer = h;
  function f(g, v) {
    var E = g;
    typeof g == "string" && (E = n.parseSourceMapInput(g));
    var b = n.getArg(E, "version"), _ = n.getArg(E, "sections");
    if (b != this._version)
      throw new Error("Unsupported version: " + b);
    this._sources = new s(), this._names = new s();
    var p = {
      line: -1,
      column: 0
    };
    this._sections = _.map(function(C) {
      if (C.url)
        throw new Error("Support for url field in sections not implemented.");
      var T = n.getArg(C, "offset"), j = n.getArg(T, "line"), k = n.getArg(T, "column");
      if (j < p.line || j === p.line && k < p.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return p = T, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: j + 1,
          generatedColumn: k + 1
        },
        consumer: new c(n.getArg(C, "map"), v)
      };
    });
  }
  return f.prototype = Object.create(c.prototype), f.prototype.constructor = c, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      for (var g = [], v = 0; v < this._sections.length; v++)
        for (var E = 0; E < this._sections[v].consumer.sources.length; E++)
          g.push(this._sections[v].consumer.sources[E]);
      return g;
    }
  }), f.prototype.originalPositionFor = function(v) {
    var E = {
      generatedLine: n.getArg(v, "line"),
      generatedColumn: n.getArg(v, "column")
    }, b = r.search(
      E,
      this._sections,
      function(p, C) {
        var T = p.generatedLine - C.generatedOffset.generatedLine;
        return T || p.generatedColumn - C.generatedOffset.generatedColumn;
      }
    ), _ = this._sections[b];
    return _ ? _.consumer.originalPositionFor({
      line: E.generatedLine - (_.generatedOffset.generatedLine - 1),
      column: E.generatedColumn - (_.generatedOffset.generatedLine === E.generatedLine ? _.generatedOffset.generatedColumn - 1 : 0),
      bias: v.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, f.prototype.sourceContentFor = function(v, E) {
    for (var b = 0; b < this._sections.length; b++) {
      var _ = this._sections[b], p = _.consumer.sourceContentFor(v, !0);
      if (p)
        return p;
    }
    if (E)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(v) {
    for (var E = 0; E < this._sections.length; E++) {
      var b = this._sections[E];
      if (b.consumer._findSourceIndex(n.getArg(v, "source")) !== -1) {
        var _ = b.consumer.generatedPositionFor(v);
        if (_) {
          var p = {
            line: _.line + (b.generatedOffset.generatedLine - 1),
            column: _.column + (b.generatedOffset.generatedLine === _.line ? b.generatedOffset.generatedColumn - 1 : 0)
          };
          return p;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, f.prototype._parseMappings = function(v, E) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var b = 0; b < this._sections.length; b++)
      for (var _ = this._sections[b], p = _.consumer._generatedMappings, C = 0; C < p.length; C++) {
        var T = p[C], j = _.consumer._sources.at(T.source);
        j = n.computeSourceURL(_.consumer.sourceRoot, j, this._sourceMapURL), this._sources.add(j), j = this._sources.indexOf(j);
        var k = null;
        T.name && (k = _.consumer._names.at(T.name), this._names.add(k), k = this._names.indexOf(k));
        var P = {
          source: j,
          generatedLine: T.generatedLine + (_.generatedOffset.generatedLine - 1),
          generatedColumn: T.generatedColumn + (_.generatedOffset.generatedLine === T.generatedLine ? _.generatedOffset.generatedColumn - 1 : 0),
          originalLine: T.originalLine,
          originalColumn: T.originalColumn,
          name: k
        };
        this.__generatedMappings.push(P), typeof P.originalLine == "number" && this.__originalMappings.push(P);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, Hs.IndexedSourceMapConsumer = f, Hs;
}
var mf = {}, hy;
function BS() {
  if (hy) return mf;
  hy = 1;
  var n = Q0().SourceMapGenerator, r = io(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function c(h, m, f, g, v) {
    this.children = [], this.sourceContents = {}, this.line = h ?? null, this.column = m ?? null, this.source = f ?? null, this.name = v ?? null, this[u] = !0, g != null && this.add(g);
  }
  return c.fromStringWithSourceMap = function(m, f, g) {
    var v = new c(), E = m.split(s), b = 0, _ = function() {
      var k = l(), P = l() || "";
      return k + P;
      function l() {
        return b < E.length ? E[b++] : void 0;
      }
    }, p = 1, C = 0, T = null;
    return f.eachMapping(function(k) {
      if (T !== null)
        if (p < k.generatedLine)
          j(T, _()), p++, C = 0;
        else {
          var P = E[b] || "", l = P.substr(0, k.generatedColumn - C);
          E[b] = P.substr(k.generatedColumn - C), C = k.generatedColumn, j(T, l), T = k;
          return;
        }
      for (; p < k.generatedLine; )
        v.add(_()), p++;
      if (C < k.generatedColumn) {
        var P = E[b] || "";
        v.add(P.substr(0, k.generatedColumn)), E[b] = P.substr(k.generatedColumn), C = k.generatedColumn;
      }
      T = k;
    }, this), b < E.length && (T && j(T, _()), v.add(E.splice(b).join(""))), f.sources.forEach(function(k) {
      var P = f.sourceContentFor(k);
      P != null && (g != null && (k = r.join(g, k)), v.setSourceContent(k, P));
    }), v;
    function j(k, P) {
      if (k === null || k.source === void 0)
        v.add(P);
      else {
        var l = g ? r.join(g, k.source) : k.source;
        v.add(new c(
          k.originalLine,
          k.originalColumn,
          l,
          P,
          k.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(f) {
        this.add(f);
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
      for (var f = m.length - 1; f >= 0; f--)
        this.prepend(m[f]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var f, g = 0, v = this.children.length; g < v; g++)
      f = this.children[g], f[u] ? f.walk(m) : f !== "" && m(f, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var f, g, v = this.children.length;
    if (v > 0) {
      for (f = [], g = 0; g < v - 1; g++)
        f.push(this.children[g]), f.push(m);
      f.push(this.children[g]), this.children = f;
    }
    return this;
  }, c.prototype.replaceRight = function(m, f) {
    var g = this.children[this.children.length - 1];
    return g[u] ? g.replaceRight(m, f) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(m, f) : this.children.push("".replace(m, f)), this;
  }, c.prototype.setSourceContent = function(m, f) {
    this.sourceContents[r.toSetString(m)] = f;
  }, c.prototype.walkSourceContents = function(m) {
    for (var f = 0, g = this.children.length; f < g; f++)
      this.children[f][u] && this.children[f].walkSourceContents(m);
    for (var v = Object.keys(this.sourceContents), f = 0, g = v.length; f < g; f++)
      m(r.fromSetString(v[f]), this.sourceContents[v[f]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(f) {
      m += f;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var f = {
      code: "",
      line: 1,
      column: 0
    }, g = new n(m), v = !1, E = null, b = null, _ = null, p = null;
    return this.walk(function(C, T) {
      f.code += C, T.source !== null && T.line !== null && T.column !== null ? ((E !== T.source || b !== T.line || _ !== T.column || p !== T.name) && g.addMapping({
        source: T.source,
        original: {
          line: T.line,
          column: T.column
        },
        generated: {
          line: f.line,
          column: f.column
        },
        name: T.name
      }), E = T.source, b = T.line, _ = T.column, p = T.name, v = !0) : v && (g.addMapping({
        generated: {
          line: f.line,
          column: f.column
        }
      }), E = null, v = !1);
      for (var j = 0, k = C.length; j < k; j++)
        C.charCodeAt(j) === a ? (f.line++, f.column = 0, j + 1 === k ? (E = null, v = !1) : v && g.addMapping({
          source: T.source,
          original: {
            line: T.line,
            column: T.column
          },
          generated: {
            line: f.line,
            column: f.column
          },
          name: T.name
        })) : f.column++;
    }), this.walkSourceContents(function(C, T) {
      g.setSourceContent(C, T);
    }), { code: f.code, map: g };
  }, mf.SourceNode = c, mf;
}
var py;
function US() {
  return py || (py = 1, Us.SourceMapGenerator = Q0().SourceMapGenerator, Us.SourceMapConsumer = IS().SourceMapConsumer, Us.SourceNode = BS().SourceNode), Us;
}
var my;
function HS() {
  return my || (my = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ln(), a = void 0;
    try {
      var u = US();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, f, g, v) {
      this.src = "", v && this.add(v);
    }, a.prototype = {
      add: function(f) {
        s.isArray(f) && (f = f.join("")), this.src += f;
      },
      prepend: function(f) {
        s.isArray(f) && (f = f.join("")), this.src = f + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, f, g) {
      if (s.isArray(m)) {
        for (var v = [], E = 0, b = m.length; E < b; E++)
          v.push(f.wrap(m[E], g));
        return v;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function h(m) {
      this.srcFile = m, this.source = [];
    }
    h.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(f, g) {
        this.source.unshift(this.wrap(f, g));
      },
      push: function(f, g) {
        this.source.push(this.wrap(f, g));
      },
      merge: function() {
        var f = this.empty();
        return this.each(function(g) {
          f.add(["  ", g, `
`]);
        }), f;
      },
      each: function(f) {
        for (var g = 0, v = this.source.length; g < v; g++)
          f(this.source[g]);
      },
      empty: function() {
        var f = this.currentLocation || { start: {} };
        return new a(f.start.line, f.start.column, this.srcFile);
      },
      wrap: function(f) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return f instanceof a ? f : (f = c(f, this, g), new a(g.start.line, g.start.column, this.srcFile, f));
      },
      functionCall: function(f, g, v) {
        return v = this.generateList(v), this.wrap([f, g ? "." + g + "(" : "(", v, ")"]);
      },
      quotedString: function(f) {
        return '"' + (f + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(f) {
        var g = this, v = [];
        Object.keys(f).forEach(function(b) {
          var _ = c(f[b], g);
          _ !== "undefined" && v.push([g.quotedString(b), ":", _]);
        });
        var E = this.generateList(v);
        return E.prepend("{"), E.add("}"), E;
      },
      generateList: function(f) {
        for (var g = this.empty(), v = 0, E = f.length; v < E; v++)
          v && g.add(","), g.add(c(f[v], this));
        return g;
      },
      generateArray: function(f) {
        var g = this.generateList(f);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = h, n.exports = r.default;
  })(Xu, Xu.exports)), Xu.exports;
}
var gy;
function qS() {
  return gy || (gy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var a = Xf(), u = Gn(), c = s(u), h = ln(), m = HS(), f = s(m);
    function g(b) {
      this.value = b;
    }
    function v() {
    }
    v.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(_, p) {
        return this.internalNameLookup(_, p);
      },
      depthedLookup: function(_) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(_), ")"];
      },
      compilerInfo: function() {
        var _ = a.COMPILER_REVISION, p = a.REVISION_CHANGES[_];
        return [_, p];
      },
      appendToBuffer: function(_, p, C) {
        return h.isArray(_) || (_ = [_]), _ = this.source.wrap(_, p), this.environment.isSimple ? ["return ", _, ";"] : C ? ["buffer += ", _, ";"] : (_.appendToBuffer = !0, _);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(_, p) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", _, ",", JSON.stringify(p), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(_, p, C, T) {
        this.environment = _, this.options = p, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !T, this.name = this.environment.name, this.isChild = !!C, this.context = C || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(_, p), this.useDepths = this.useDepths || _.useDepths || _.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || _.useBlockParams;
        var j = _.opcodes, k = void 0, P = void 0, l = void 0, S = void 0;
        for (l = 0, S = j.length; l < S; l++)
          k = j[l], this.source.currentLocation = k.loc, P = P || k.loc, this[k.opcode].apply(this, k.args);
        if (this.source.currentLocation = P, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), T ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var w = this.createFunctionContext(T);
        if (this.isChild)
          return w;
        var A = {
          compiler: this.compilerInfo(),
          main: w
        };
        this.decorators && (A.main_d = this.decorators, A.useDecorators = !0);
        var O = this.context, L = O.programs, M = O.decorators;
        for (l = 0, S = L.length; l < S; l++)
          L[l] && (A[l] = L[l], M[l] && (A[l + "_d"] = M[l], A.useDecorators = !0));
        return this.environment.usePartial && (A.usePartial = !0), this.options.data && (A.useData = !0), this.useDepths && (A.useDepths = !0), this.useBlockParams && (A.useBlockParams = !0), this.options.compat && (A.compat = !0), T ? A.compilerOptions = this.options : (A.compiler = JSON.stringify(A.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, A = this.objectLiteral(A), p.srcName ? (A = A.toStringWithSourceMap({ file: p.destName }), A.map = A.map && A.map.toString()) : A = A.toString()), A;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new f.default(this.options.srcName), this.decorators = new f.default(this.options.srcName);
      },
      createFunctionContext: function(_) {
        var p = this, C = "", T = this.stackVars.concat(this.registers.list);
        T.length > 0 && (C += ", " + T.join(", "));
        var j = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var S = p.aliases[l];
          S.children && S.referenceCount > 1 && (C += ", alias" + ++j + "=" + l, S.children[0] = "alias" + j);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var k = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && k.push("blockParams"), this.useDepths && k.push("depths");
        var P = this.mergeSource(C);
        return _ ? (k.push(P), Function.apply(this, k)) : this.source.wrap(["function(", k.join(","), `) {
  `, P, "}"]);
      },
      mergeSource: function(_) {
        var p = this.environment.isSimple, C = !this.forceBuffer, T = void 0, j = void 0, k = void 0, P = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (k ? l.prepend("  + ") : k = l, P = l) : (k && (j ? k.prepend("buffer += ") : T = !0, P.add(";"), k = P = void 0), j = !0, p || (C = !1));
        }), C ? k ? (k.prepend("return "), P.add(";")) : j || this.source.push('return "";') : (_ += ", buffer = " + (T ? "" : this.initializeBuffer()), k ? (k.prepend("return buffer + "), P.add(";")) : this.source.push("return buffer;")), _ && this.source.prepend("var " + _.substring(2) + (T ? "" : `;
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
      blockValue: function(_) {
        var p = this.aliasable("container.hooks.blockHelperMissing"), C = [this.contextName(0)];
        this.setupHelperArgs(_, 0, C);
        var T = this.popStack();
        C.splice(1, 0, T), this.push(this.source.functionCall(p, "call", C));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var _ = this.aliasable("container.hooks.blockHelperMissing"), p = [this.contextName(0)];
        this.setupHelperArgs("", 0, p, !0), this.flushInline();
        var C = this.topStack();
        p.splice(1, 0, C), this.pushSource(["if (!", this.lastHelper, ") { ", C, " = ", this.source.functionCall(_, "call", p), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(_) {
        this.pendingContent ? _ = this.pendingContent + _ : this.pendingLocation = this.source.currentLocation, this.pendingContent = _;
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
          this.replaceStack(function(p) {
            return [" != null ? ", p, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var _ = this.popStack();
          this.pushSource(["if (", _, " != null) { ", this.appendToBuffer(_, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(_) {
        this.lastContext = _;
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
      lookupOnContext: function(_, p, C, T) {
        var j = 0;
        !T && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(_[j++])) : this.pushContext(), this.resolvePath("context", _, j, p, C);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(_, p) {
        this.useBlockParams = !0, this.push(["blockParams[", _[0], "][", _[1], "]"]), this.resolvePath("context", p, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(_, p, C) {
        _ ? this.pushStackLiteral("container.data(data, " + _ + ")") : this.pushStackLiteral("data"), this.resolvePath("data", p, 0, !0, C);
      },
      resolvePath: function(_, p, C, T, j) {
        var k = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && j, this, p, C, _));
          return;
        }
        for (var P = p.length; C < P; C++)
          this.replaceStack(function(l) {
            var S = k.nameLookup(l, p[C], _);
            return T ? [" && ", S] : [" != null ? ", S, " : ", l];
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
      pushStringParam: function(_, p) {
        this.pushContext(), this.pushString(p), p !== "SubExpression" && (typeof _ == "string" ? this.pushString(_) : this.pushStackLiteral(_));
      },
      emptyHash: function(_) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(_ ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var _ = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(_.ids)), this.stringParams && (this.push(this.objectLiteral(_.contexts)), this.push(this.objectLiteral(_.types))), this.push(this.objectLiteral(_.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(_) {
        this.pushStackLiteral(this.quotedString(_));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(_) {
        this.pushStackLiteral(_);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(_) {
        _ != null ? this.pushStackLiteral(this.programExpression(_)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(_, p) {
        var C = this.nameLookup("decorators", p, "decorator"), T = this.setupHelperArgs(p, _);
        this.decorators.push(["fn = ", this.decorators.functionCall(C, "", ["fn", "props", "container", T]), " || fn;"]);
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
      invokeHelper: function(_, p, C) {
        var T = this.popStack(), j = this.setupHelper(_, p), k = [];
        C && k.push(j.name), k.push(T), this.options.strict || k.push(this.aliasable("container.hooks.helperMissing"));
        var P = ["(", this.itemsSeparatedBy(k, "||"), ")"], l = this.source.functionCall(P, "call", j.callParams);
        this.push(l);
      },
      itemsSeparatedBy: function(_, p) {
        var C = [];
        C.push(_[0]);
        for (var T = 1; T < _.length; T++)
          C.push(p, _[T]);
        return C;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(_, p) {
        var C = this.setupHelper(_, p);
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
      invokeAmbiguous: function(_, p) {
        this.useRegister("helper");
        var C = this.popStack();
        this.emptyHash();
        var T = this.setupHelper(0, _, p), j = this.lastHelper = this.nameLookup("helpers", _, "helper"), k = ["(", "(helper = ", j, " || ", C, ")"];
        this.options.strict || (k[0] = "(helper = ", k.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", k, T.paramsInit ? ["),(", T.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", T.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(_, p, C) {
        var T = [], j = this.setupParams(p, 1, T);
        _ && (p = this.popStack(), delete j.name), C && (j.indent = JSON.stringify(C)), j.helpers = "helpers", j.partials = "partials", j.decorators = "container.decorators", _ ? T.unshift(p) : T.unshift(this.nameLookup("partials", p, "partial")), this.options.compat && (j.depths = "depths"), j = this.objectLiteral(j), T.push(j), this.push(this.source.functionCall("container.invokePartial", "", T));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(_) {
        var p = this.popStack(), C = void 0, T = void 0, j = void 0;
        this.trackIds && (j = this.popStack()), this.stringParams && (T = this.popStack(), C = this.popStack());
        var k = this.hash;
        C && (k.contexts[_] = C), T && (k.types[_] = T), j && (k.ids[_] = j), k.values[_] = p;
      },
      pushId: function(_, p, C) {
        _ === "BlockParam" ? this.pushStackLiteral("blockParams[" + p[0] + "].path[" + p[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : _ === "PathExpression" ? this.pushString(p) : _ === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: v,
      compileChildren: function(_, p) {
        for (var C = _.children, T = void 0, j = void 0, k = 0, P = C.length; k < P; k++) {
          T = C[k], j = new this.compiler();
          var l = this.matchExistingProgram(T);
          if (l == null) {
            this.context.programs.push("");
            var S = this.context.programs.length;
            T.index = S, T.name = "program" + S, this.context.programs[S] = j.compile(T, p, this.context, !this.precompile), this.context.decorators[S] = j.decorators, this.context.environments[S] = T, this.useDepths = this.useDepths || j.useDepths, this.useBlockParams = this.useBlockParams || j.useBlockParams, T.useDepths = this.useDepths, T.useBlockParams = this.useBlockParams;
          } else
            T.index = l.index, T.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams;
        }
      },
      matchExistingProgram: function(_) {
        for (var p = 0, C = this.context.environments.length; p < C; p++) {
          var T = this.context.environments[p];
          if (T && T.equals(_))
            return T;
        }
      },
      programExpression: function(_) {
        var p = this.environment.children[_], C = [p.index, "data", p.blockParams];
        return (this.useBlockParams || this.useDepths) && C.push("blockParams"), this.useDepths && C.push("depths"), "container.program(" + C.join(", ") + ")";
      },
      useRegister: function(_) {
        this.registers[_] || (this.registers[_] = !0, this.registers.list.push(_));
      },
      push: function(_) {
        return _ instanceof g || (_ = this.source.wrap(_)), this.inlineStack.push(_), _;
      },
      pushStackLiteral: function(_) {
        this.push(new g(_));
      },
      pushSource: function(_) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), _ && this.source.push(_);
      },
      replaceStack: function(_) {
        var p = ["("], C = void 0, T = void 0, j = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var k = this.popStack(!0);
        if (k instanceof g)
          C = [k.value], p = ["(", C], j = !0;
        else {
          T = !0;
          var P = this.incrStack();
          p = ["((", this.push(P), " = ", k, ")"], C = this.topStack();
        }
        var l = _.call(this, C);
        j || this.popStack(), T && this.stackSlot--, this.push(p.concat(l, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var _ = this.inlineStack;
        this.inlineStack = [];
        for (var p = 0, C = _.length; p < C; p++) {
          var T = _[p];
          if (T instanceof g)
            this.compileStack.push(T);
          else {
            var j = this.incrStack();
            this.pushSource([j, " = ", T, ";"]), this.compileStack.push(j);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(_) {
        var p = this.isInline(), C = (p ? this.inlineStack : this.compileStack).pop();
        if (!_ && C instanceof g)
          return C.value;
        if (!p) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return C;
      },
      topStack: function() {
        var _ = this.isInline() ? this.inlineStack : this.compileStack, p = _[_.length - 1];
        return p instanceof g ? p.value : p;
      },
      contextName: function(_) {
        return this.useDepths && _ ? "depths[" + _ + "]" : "depth" + _;
      },
      quotedString: function(_) {
        return this.source.quotedString(_);
      },
      objectLiteral: function(_) {
        return this.source.objectLiteral(_);
      },
      aliasable: function(_) {
        var p = this.aliases[_];
        return p ? (p.referenceCount++, p) : (p = this.aliases[_] = this.source.wrap(_), p.aliasable = !0, p.referenceCount = 1, p);
      },
      setupHelper: function(_, p, C) {
        var T = [], j = this.setupHelperArgs(p, _, T, C), k = this.nameLookup("helpers", p, "helper"), P = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: T,
          paramsInit: j,
          name: k,
          callParams: [P].concat(T)
        };
      },
      setupParams: function(_, p, C) {
        var T = {}, j = [], k = [], P = [], l = !C, S = void 0;
        l && (C = []), T.name = this.quotedString(_), T.hash = this.popStack(), this.trackIds && (T.hashIds = this.popStack()), this.stringParams && (T.hashTypes = this.popStack(), T.hashContexts = this.popStack());
        var w = this.popStack(), A = this.popStack();
        (A || w) && (T.fn = A || "container.noop", T.inverse = w || "container.noop");
        for (var O = p; O--; )
          S = this.popStack(), C[O] = S, this.trackIds && (P[O] = this.popStack()), this.stringParams && (k[O] = this.popStack(), j[O] = this.popStack());
        return l && (T.args = this.source.generateArray(C)), this.trackIds && (T.ids = this.source.generateArray(P)), this.stringParams && (T.types = this.source.generateArray(k), T.contexts = this.source.generateArray(j)), this.options.data && (T.data = "data"), this.useBlockParams && (T.blockParams = "blockParams"), T;
      },
      setupHelperArgs: function(_, p, C, T) {
        var j = this.setupParams(_, p, C);
        return j.loc = JSON.stringify(this.source.currentLocation), j = this.objectLiteral(j), T ? (this.useRegister("options"), C.push("options"), ["options=", j]) : C ? (C.push(j), "") : j;
      }
    }, (function() {
      for (var b = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), _ = v.RESERVED_WORDS = {}, p = 0, C = b.length; p < C; p++)
        _[b[p]] = !0;
    })(), v.isValidJavaScriptVariableName = function(b) {
      return !v.RESERVED_WORDS[b] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b);
    };
    function E(b, _, p, C, T) {
      var j = _.popStack(), k = p.length;
      for (b && k--; C < k; C++)
        j = _.nameLookup(j, p[C], T);
      return b ? [_.aliasable("container.strict"), "(", j, ", ", _.quotedString(p[C]), ", ", JSON.stringify(_.source.currentLocation), " )"] : j;
    }
    r.default = v, n.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var vy;
function GS() {
  return vy || (vy = 1, (function(n, r) {
    r.__esModule = !0;
    function s(k) {
      return k && k.__esModule ? k : { default: k };
    }
    var a = xS(), u = s(a), c = $0(), h = s(c), m = RS(), f = jS(), g = qS(), v = s(g), E = Y0(), b = s(E), _ = V0(), p = s(_), C = u.default.create;
    function T() {
      var k = C();
      return k.compile = function(P, l) {
        return f.compile(P, l, k);
      }, k.precompile = function(P, l) {
        return f.precompile(P, l, k);
      }, k.AST = h.default, k.Compiler = f.Compiler, k.JavaScriptCompiler = v.default, k.Parser = m.parser, k.parse = m.parse, k.parseWithoutProcessing = m.parseWithoutProcessing, k;
    }
    var j = T();
    j.create = T, p.default(j), j.Visitor = b.default, j.default = j, r.default = j, n.exports = r.default;
  })(ku, ku.exports)), ku.exports;
}
var Sn = GS();
const Ie = SillyTavern.getContext();
new f0("dumb", {}).getSettings();
async function K0({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: a,
  entriesGroupByWorldName: u,
  promptSettings: c,
  mainContextList: h,
  maxResponseToken: m,
  continueFrom: f
}) {
  if (!n)
    throw new Error("No connection profile selected.");
  const v = SillyTavern.getContext().extensionSettings.connectionManager?.profiles?.find((k) => k.id === n);
  if (!v)
    throw new Error(`Connection profile with ID "${n}" not found.`);
  let E;
  if (v.api && Ie.CONNECT_API_MAP[v.api])
    E = Ie.CONNECT_API_MAP[v.api].selected;
  else {
    console.warn(`[WorldInfoRecommender] Profile "${v.name}" has no API configured, using ST default.`);
    for (const [k, P] of Object.entries(Ie.CONNECT_API_MAP))
      if (P && P.selected) {
        E = P.selected, console.log(`[WorldInfoRecommender] Using fallback API: ${k} -> ${E}`);
        break;
      }
  }
  if (!E)
    throw new Error(`Could not determine API for profile "${v.name}". Please configure an API in Connection Manager or select a valid profile.`);
  const b = {};
  b.user = "{{user}}", b.char = "{{char}}", b.persona = "{{persona}}", b.blackListedEntries = a.blackListedEntries;
  const _ = r.trim();
  f && f.mode === "revise" ? b.userInstructions = "" : b.userInstructions = Sn.compile(_, { noEscape: !0 })(b);
  {
    const k = {};
    Object.entries(u).filter(
      ([P, l]) => l.length > 0 && a.selectedWorldNames.includes(P) && l.some((S) => !S?.disable)
    ).forEach(([P, l]) => {
      let S = l.filter((A) => !A?.disable);
      const w = a.selectedEntryUids?.[P];
      if (w && w.length > 0) {
        const A = new Set(w);
        S = S.filter((O) => A.has(O.uid));
      }
      S.length > 0 && (k[P] = S);
    }), b.currentLorebooks = k;
  }
  {
    const k = {};
    Object.entries(a.suggestedEntries).filter(([P, l]) => l.length > 0).forEach(([P, l]) => {
      k[P] = l.filter(
        (S) => !(P === f?.worldName && S.uid === f.entry.uid && S.comment === f.entry.comment)
      );
    }), b.suggestedLorebooks = k;
  }
  const p = [];
  {
    for (const k of h) {
      if (k.promptName === "chatHistory") {
        p.push(...(await E0(E, s)).result);
        continue;
      }
      const P = c[k.promptName];
      if (!P)
        continue;
      const l = {
        role: k.role,
        content: Sn.compile(P.content, { noEscape: !0 })(b)
      };
      l.content = Ie.substituteParams(l.content), l.content && p.push(l);
    }
    f && (f.mode === "continue" ? p.push({
      role: "assistant",
      content: hS(f.worldName, f.entry)
    }) : f.mode === "revise" && (p.push({
      role: "assistant",
      content: pS(f.worldName, f.entry)
    }), _ && p.push({
      role: "user",
      content: _
    })));
  }
  let C;
  try {
    C = await Ie.ConnectionManagerRequestService.sendRequest(
      n,
      p,
      m
    );
  } catch (k) {
    console.error("[WorldInfoRecommender] Request failed:", k);
    let P = "Request failed";
    throw k.message && (P += `: ${k.message}`), k.status && (P += ` (HTTP ${k.status})`), k.name === "TypeError" && k.message.includes("fetch") && (P += ". This might be a network or CORS issue. Please check your connection profile settings and ensure the API endpoint is accessible."), new Error(P);
  }
  const T = p.find((k) => k.role === "assistant");
  if (!C.content)
    return {};
  let j = H0(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: f && f.mode === "continue" ? T?.content : void 0
  });
  return Object.keys(j).length === 0 ? {} : (Object.entries(j).forEach(([k, P]) => {
    u[k] && P.forEach((l) => {
      const S = u[k]?.find((w) => w.uid === l.uid);
      S && (l.key.length === 0 && (l.key = S.key), l.comment || (l.comment = S.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), j = f ? { [f.worldName]: [j[f.worldName][0]] } : j, j);
}
function ZS(n, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === n.uid);
  let c;
  const h = u !== -1;
  if (h)
    c = a[u];
  else {
    const m = { entries: {} };
    a.forEach((v) => m.entries[v.uid] = v);
    const f = ml(r, m);
    if (!f)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const g = a.length > 0 ? a[a.length - 1] : void 0;
    if (g) {
      const v = f.uid;
      Object.assign(f, g), f.uid = v;
    }
    c = f, a.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: h ? "updated" : "added" };
}
function VS() {
  const n = Ie.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((a) => a.name?.includes(s))?.name
  }));
}
const Oi = "SillyTavern-WorldInfo-Recommender", $S = "0.3.0", YS = "F_1.5", FS = {
  EXTENSION: "worldInfoRecommender"
}, Mi = ["en", "zh-CN"], Ju = [
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
], dt = {
  stDescription: a8,
  currentLorebooks: i8,
  blackListedEntries: s8,
  suggestedLorebooks: o8,
  responseRules: u8,
  taskDescription: l8,
  reviseJsonPrompt: c8,
  reviseXmlPrompt: d8,
  reviseTaskDescription: f8,
  reviseGlobalStateUpdate: m8,
  reviseGlobalStateUpdateAddedModified: h8,
  reviseGlobalStateUpdateRemoved: p8
}, Qf = {
  version: $S,
  formatVersion: YS,
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
      content: dt.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: dt.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: dt.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: dt.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: dt.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: dt.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: dt.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: dt.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: dt.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: dt.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: dt.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: dt.reviseGlobalStateUpdateRemoved,
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
function yy(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let a = !1;
  return s.map((u, c) => {
    const h = u.replace(/^\d+/, "");
    if (h) {
      const m = a ? `${h[0].toUpperCase()}${h.slice(1).toLowerCase()}` : h.toLowerCase();
      return a || (a = !0), m;
    }
    return "";
  }).join("");
}
const st = new f0(FS.EXTENSION, Qf);
async function XS() {
  return new Promise((n, r) => {
    st.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...Qf,
              ...s
            };
            return delete a.stWorldInfoPrompt, delete a.usingDefaultStWorldInfoPrompt, delete a.lorebookDefinitionPrompt, delete a.usingDefaultLorebookDefinitionPrompt, delete a.lorebookRulesPrompt, delete a.usingDefaultLorebookRulesPrompt, delete a.responseRulesPrompt, delete a.usingDefaultResponseRulesPrompt, a;
          }
        },
        {
          from: "F_1.1",
          to: "F_1.2",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.2", a.prompts.taskDescription.content === `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}` ? (a.prompts.taskDescription.content = dt.taskDescription, a.prompts.taskDescription.isDefault = !0) : a.prompts.taskDescription.isDefault = !1, a;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.3", a.defaultPromptEngineeringMode = "native", a.prompts || (a.prompts = {}), a.prompts.reviseJsonPrompt = {
              content: dt.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, a.prompts.reviseXmlPrompt = {
              content: dt.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, a.prompts.reviseTaskDescription = {
              content: dt.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (a.prompts.currentLorebooks.content = dt.currentLorebooks, a.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (a.prompts.blackListedEntries.content = dt.blackListedEntries, a.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (a.prompts.suggestedLorebooks.content = dt.suggestedLorebooks, a.prompts.suggestedLorebooks.isDefault = !0), a;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.4", a.prompts || (a.prompts = {}), a.prompts.reviseGlobalStateUpdate = {
              content: dt.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, a.prompts.reviseGlobalStateUpdateAddedModified = {
              content: dt.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, a.prompts.reviseGlobalStateUpdateRemoved = {
              content: dt.reviseGlobalStateUpdateRemoved,
              isDefault: !0,
              label: "Revise Global State (Removed)"
            }, a;
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.5", (!("language" in a) || !a.language) && (a.language = "en"), a;
          }
        }
      ]
    }).then((s) => {
      n();
    }).catch((s) => {
      console.error(`[${Oi}] Error initializing settings:`, s), Ce("error", `[${Oi}] Failed to initialize settings: ${s.message}`), Ie.Popup.show.confirm(
        `[${Oi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (st.resetSettings(), Ce("success", `[${Oi}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const Le = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ae.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("button", { className: u, ...a, children: n });
}, J0 = ({ label: n, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
  const c = ae.useMemo(() => {
    const h = [];
    return s || (a === "text" || a === "number" || a === "password" || a === "email" || a === "search") && h.push("text_pole"), h.push(r), h.filter(Boolean).join(" ");
  }, [s, r, a]);
  if (a === "checkbox") {
    const h = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: h, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ N.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: a, className: c, ...u });
}, Sl = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ae.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("select", { className: u, ...a, children: n });
}, br = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = ae.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("textarea", { className: u, ...a, children: n });
};
var QS = d0(), Ht = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Ht || {}), Qr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Qr || {});
const KS = SillyTavern.getContext(), Jn = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var h;
  const m = ae.useRef(null), f = ae.useRef(null), [g, v] = ae.useState(!1), [E, b] = ae.useState(null), _ = ae.useRef(KS.uuidv4()), p = ae.useRef({
    id: _.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ae.useEffect(() => {
    const k = m.current;
    if (!k) return;
    const P = (l) => {
      l.preventDefault(), u || C(Qr.CANCELLED);
    };
    return k.addEventListener("cancel", P), p.current.dlg = k, p.current.mainInput = f.current, wi.util.popups.push(p.current), k.showModal || (k.classList.add("poly_dialog"), Kg.registerDialog(k), new ResizeObserver((l) => {
      for (const S of l)
        Kg.reposition(S.target);
    }).observe(k)), k.showModal(), Zd(), () => {
      Qg(wi.util.popups, p.current), Zd(), k.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (k) => {
    var P, l;
    let S = k;
    if (r === Ht.INPUT && (k >= Qr.AFFIRMATIVE ? S = (P = f.current) == null ? void 0 : P.value : k === Qr.NEGATIVE ? S = !1 : k === Qr.CANCELLED ? S = null : S = !1), (l = a.customInputs) != null && l.length) {
      const A = new Map(
        a.customInputs.map((O) => {
          var L;
          const M = (L = m.current) == null ? void 0 : L.querySelector(`#${O.id}`);
          return [M.id, M.checked];
        })
      );
      p.current.inputResults = A;
    }
    if (p.current.result = k, p.current.value = S, a.onClosing && !await a.onClosing(p.current)) {
      v(!0), p.current.value = void 0, p.current.result = void 0, p.current.inputResults = void 0;
      return;
    }
    v(!1), wi.util.lastResult = {
      value: S,
      result: k,
      inputResults: p.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Zd(), p2(w, async () => {
      var A;
      if (w.close(), a.onClose && await a.onClose(p.current), Qg(wi.util.popups, p.current), wi.util.popups.length > 0) {
        const O = (A = document.activeElement) == null ? void 0 : A.closest(".popup"), L = O?.getAttribute("data-id"), M = wi.util.popups.find((z) => z.id === L);
        M && M.lastFocus && M.lastFocus.focus();
      }
      c(S);
    }));
  }, T = (k) => {
    k.target instanceof HTMLElement && k.target !== m.current && (b(k.target), p.current.lastFocus = k.target);
  }, j = async (k) => {
  };
  return QS.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const k = ["popup"];
          return a.wide && k.push("wide_dialogue_popup"), a.wider && k.push("wider_dialogue_popup"), a.large && k.push("large_dialogue_popup"), a.transparent && k.push("transparent_dialogue_popup"), a.allowHorizontalScrolling && k.push("horizontal_scrolling_dialogue_popup"), a.allowVerticalScrolling && k.push("vertical_scrolling_dialogue_popup"), a.animation && k.push(`popup--animation-${a.animation}`), k.join(" ");
        })(),
        "data-id": _.current,
        onKeyDown: j,
        onFocus: T,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: n }),
          r === Ht.INPUT && /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: f,
              className: "popup-input text_pole result-control auto-select",
              rows: a.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          a.customInputs && /* @__PURE__ */ N.jsx("div", { className: "popup-inputs", children: a.customInputs.map((k) => /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: k.id, children: [
            /* @__PURE__ */ N.jsx("input", { type: "checkbox", id: k.id, defaultChecked: k.defaultState }),
            /* @__PURE__ */ N.jsx("span", { "data-i18n": k.label, children: k.label }),
            k.tooltip && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: k.tooltip,
                "data-i18n": `[title]${k.tooltip}`
              }
            )
          ] }, k.id)) }),
          r !== Ht.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (h = a.customButtons) == null ? void 0 : h.map((k, P) => {
              const l = typeof k == "string" ? { text: k, result: P + 2 } : k;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${l.classes ?? ""}`,
                  "data-result": l.result,
                  onClick: () => {
                    var S;
                    (S = l.action) == null || S.call(l), C(l.result ?? P + 2);
                  },
                  "data-i18n": l.text,
                  children: l.text
                },
                P
              );
            }),
            r !== Ht.DISPLAY && a.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Qr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof a.okButton == "string" ? a.okButton : "OK"
              }
            ),
            r !== Ht.DISPLAY && a.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Qr.NEGATIVE),
                "data-result": "0",
                children: typeof a.cancelButton == "string" ? a.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Ht.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Qr.CANCELLED),
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
}, qs = (n, r, s) => {
  if (!n || !n.api)
    return !1;
  const a = s[n.api];
  if (!a || !Object.hasOwn(r, a.selected))
    return !1;
  switch (a.selected) {
    case "openai":
      return !!a.source;
    case "textgenerationwebui":
      return !!a.type;
  }
  return !1;
}, yr = SillyTavern.getContext(), W0 = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: c,
  onDelete: h
}) => {
  const [m, f] = ae.useState(n ?? ""), [g, v] = ae.useState(Date.now()), { isEnabled: E, profiles: b, connectApiMap: _ } = ae.useMemo(() => {
    var T, j;
    return (T = yr.extensionSettings.disabledExtensions) != null && T.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((j = yr.extensionSettings.connectionManager) == null ? void 0 : j.profiles) ?? [],
      connectApiMap: yr.CONNECT_API_MAP
    };
  }, [g]);
  ae.useEffect(() => {
    if (!E) return;
    const T = (P) => {
      qs(P, r, _) && (v(Date.now()), u?.(P));
    }, j = (P, l) => {
      const S = qs(P, r, _), w = qs(l, r, _);
      (S || w) && v(Date.now()), c?.(P, l), m === P.id && !w && (f(""), a?.(void 0));
    }, k = (P) => {
      qs(P, r, _) && (v(Date.now()), h?.(P), m === P.id && (f(""), a?.(void 0)));
    };
    return yr.eventSource.on("CONNECTION_PROFILE_CREATED", T), yr.eventSource.on("CONNECTION_PROFILE_UPDATED", j), yr.eventSource.on("CONNECTION_PROFILE_DELETED", k), () => {
      yr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", T), yr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", j), yr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", k);
    };
  }, [E, m, r, _, a, u, c, h]);
  const p = ae.useMemo(() => {
    if (!E) return [];
    const T = b.filter((k) => qs(k, r, _)), j = {};
    for (const [k, P] of Object.entries(r))
      j[k] = { label: P, profiles: [] };
    for (const k of T) {
      const P = _[k.api];
      j[P.selected] && j[P.selected].profiles.push(k);
    }
    for (const k of Object.values(j))
      k.profiles.sort((P, l) => (P.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(j).filter((k) => k.profiles.length > 0);
  }, [E, b, r, _]), C = ae.useCallback(
    (T) => {
      const j = T.target.value;
      f(j);
      const k = b.find((P) => P.id === j);
      a?.(k);
    },
    [b, a]
  );
  return E ? /* @__PURE__ */ N.jsxs(Sl, { value: m, onChange: C, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: s }),
    p.map((T) => /* @__PURE__ */ N.jsx("optgroup", { label: T.label, children: T.profiles.map((j) => /* @__PURE__ */ N.jsx("option", { value: j.id, children: j.name }, j.id)) }, T.label))
  ] }) : /* @__PURE__ */ N.jsx(Sl, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, JS = fl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: c, onSelectChange: h }) => {
    const {
      id: m,
      label: f,
      enabled: g,
      canDelete: v = !0,
      canToggle: E = !0,
      showSelect: b = !0,
      canSelect: _ = !0,
      selectOptions: p = [],
      selectValue: C
    } = n, T = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, j = { cursor: "pointer", flexShrink: 0 }, k = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ N.jsxs("li", { className: "sortable-list-item", style: T, "data-id": m, children: [
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
          children: f
        }
      ),
      a && b && _ && /* @__PURE__ */ N.jsx(
        Sl,
        {
          value: C,
          onChange: (P) => h(m, P.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: p.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : p.map((P) => /* @__PURE__ */ N.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      a && (!b || !_) && /* @__PURE__ */ N.jsx("span", { style: k }),
      r && E && /* @__PURE__ */ N.jsx(
        Le,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...j,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      r && !E && /* @__PURE__ */ N.jsx("span", { style: k }),
      s && v && /* @__PURE__ */ N.jsx(
        Le,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...j,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      s && !v && /* @__PURE__ */ N.jsx("span", { style: { ...k, marginRight: 0 } })
    ] });
  }
), e_ = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: a = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const h = ae.useRef(null), m = ae.useRef(null);
  ae.useEffect(() => (h.current && (m.current = je.create(h.current, {
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
      const { oldIndex: b, newIndex: _ } = E;
      if (b === void 0 || _ === void 0 || b === _)
        return;
      const p = Array.from(n), [C] = p.splice(b, 1);
      p.splice(_, 0, C), r(p);
    }
  })), () => {
    var E;
    (E = m.current) == null || E.destroy(), m.current = null;
  }), [n, r, c]);
  const f = (E) => {
    r(n.map((b) => b.id === E ? { ...b, enabled: !b.enabled } : b));
  }, g = (E) => {
    r(n.filter((b) => b.id !== E));
  }, v = (E, b) => {
    r(n.map((_) => _.id === E ? { ..._, selectValue: b } : _));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: h, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((E) => /* @__PURE__ */ N.jsx(
    JS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: f,
      onDelete: g,
      onSelectChange: v
    },
    E.id
  )) });
}, t_ = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: h = !1,
  onBeforeSelection: m,
  enableSearch: f = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: v = "No results found",
  searchFuseOptions: E,
  inputClasses: b,
  containerClasses: _
}) => {
  const [p, C] = ae.useState(!1), [T, j] = ae.useState(""), k = ae.useRef(null);
  ae.useEffect(() => {
    const A = (O) => {
      k.current && !k.current.contains(O.target) && C(!1);
    };
    return document.addEventListener("mousedown", A), () => document.removeEventListener("mousedown", A);
  }, []), ae.useEffect(() => {
    p || j("");
  }, [p]);
  const P = ae.useMemo(() => {
    if (!f) return null;
    const A = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new zi(n, A);
  }, [n, f, E]), l = ae.useMemo(() => !f || !T.trim() || !P ? n : P.search(T.trim()).map((A) => A.item), [n, T, f, P]), S = async (A) => {
    let O;
    c ? O = r.includes(A) ? r.filter((L) => L !== A) : [...r, A] : O = r.includes(A) ? [] : [A], !(m && !await Promise.resolve(m(r, O))) && (s(O), u && C(!1));
  }, w = ae.useMemo(() => {
    var A;
    return r.length === 0 ? a : r.length === 1 ? ((A = n.find((O) => O.value === r[0])) == null ? void 0 : A.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, a]);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: k,
      className: `fancy-dropdown-container ${_ ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: h ? 0.6 : 1,
        pointerEvents: h ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !h && C(!p),
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
              /* @__PURE__ */ N.jsx("i", { className: `fas ${p ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        p && /* @__PURE__ */ N.jsxs(
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
              f && /* @__PURE__ */ N.jsx(
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
                    J0,
                    {
                      type: "text",
                      placeholder: g,
                      value: T,
                      onChange: (A) => j(A.target.value),
                      autoFocus: !0,
                      className: b
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((A) => /* @__PURE__ */ N.jsx(
                WS,
                {
                  item: A,
                  isSelected: r.includes(A.value),
                  onClick: S
                },
                A.value
              )) : /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: v
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, WS = fl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [a, u] = ae.useState(!1);
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
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : a ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ N.jsx("span", { children: n.label }),
        r && /* @__PURE__ */ N.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), gf = SillyTavern.getContext(), Rf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: a,
  onChange: u,
  onItemsChange: c,
  enableCreate: h = !1,
  enableRename: m = !1,
  enableDelete: f = !1,
  onCreate: g,
  onRename: v,
  onDelete: E,
  buttons: b
}) => {
  const _ = ae.useMemo(() => r.find((k) => k.value === n), [r, n]), p = ae.useCallback((k) => k ? s.includes(k) : !1, [s]), C = async () => {
    const k = await gf.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!k || k.trim() === "") return;
    const P = k.trim();
    if (r.some((S) => S.value === P)) {
      await Ce("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (g) {
      const S = await Promise.resolve(g(P));
      if (!S.confirmed) return;
      S.value && (typeof S.value == "string" ? l = { value: S.value, label: S.value } : l = S.value);
    }
    c([...r, l]), u(l.value, n);
  }, T = async () => {
    if (!_) {
      await Ce("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (p(_.value)) {
      await Ce("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const k = await gf.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${_.label}":`,
      _.label
    );
    if (!k || k.trim() === "" || k.trim() === _.value) return;
    const P = k.trim();
    if (r.some((w) => w.value === P)) {
      await Ce("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (v) {
      const w = await Promise.resolve(v(_.value, P));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const S = r.map((w) => w.value === _.value ? l : w);
    c(S), u(l.value, n);
  }, j = async () => {
    var k;
    if (!_) {
      await Ce("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (p(_.value)) {
      await Ce("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await gf.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${_.label}"?`
    ) || E && !await Promise.resolve(E(_.value)))
      return;
    const P = r.findIndex((w) => w.value === _.value), l = r.filter((w) => w.value !== _.value);
    c(l);
    let S;
    if (l.length > 0) {
      const w = Math.min(P, l.length - 1);
      S = (k = l[w]) == null ? void 0 : k.value;
    }
    u(S, n);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(Sl, { value: n ?? "", onChange: (k) => u(k.target.value, n), children: r.map((k) => /* @__PURE__ */ N.jsx("option", { value: k.value, children: k.label }, k.value)) }),
    h && /* @__PURE__ */ N.jsx(
      Le,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${a}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${a}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      Le,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${a}`,
        onClick: T,
        disabled: !_,
        "data-i18n": `[title]Rename selected ${a}`
      }
    ),
    f && /* @__PURE__ */ N.jsx(
      Le,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${a}`,
        onClick: j,
        disabled: !_,
        "data-i18n": `[title]Delete selected ${a}`
      }
    ),
    b?.map((k) => /* @__PURE__ */ N.jsx(
      Le,
      {
        className: k.icon,
        title: k.title,
        onClick: k.onClick,
        disabled: k.disabled,
        "data-i18n": k.i18n ? `[title]${k.i18n}` : void 0
      },
      k.key
    ))
  ] });
}, n_ = () => {
  const [, n] = ae.useState(0);
  return ae.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, _y = "en", r_ = {
  en: "English",
  "zh-CN": "中文"
}, ew = Mi.map((n) => ({
  value: n,
  label: r_[n]
})), vf = {
  en: {
    languageLabel: "Language",
    languageDescription: "Choose the language for the extension interface.",
    languageToggleButtonLabel: (n) => `Language: ${n}`,
    languageToggleButtonTooltip: "Switch interface language",
    languageSwitched: (n) => `Language switched to ${n}.`,
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
    languageLabel: "语言",
    languageDescription: "切换界面语言",
    languageToggleButtonLabel: (n) => `语言：${n}`,
    languageToggleButtonTooltip: "切换界面语言",
    languageSwitched: (n) => `已切换为 ${n}`,
    mainContextTitle: "主要上下文模板",
    restoreMainContextTooltip: "恢复默认",
    restoreMainContextConfirmTitle: "恢复默认",
    restoreMainContextConfirmMessage: "确定要恢复默认设置吗？",
    mainContextTemplateLabel: "模板",
    promptTemplatesTitle: "提示词模板",
    restorePromptTooltip: "恢复默认",
    promptLabel: "提示词",
    restorePromptConfirmTitle: "恢复默认",
    restorePromptConfirmMessage: (n) => `确定要恢复“${n}”为默认值吗？`,
    promptEditorPlaceholder: "在此编辑所选系统提示词模板...",
    resetEverythingButton: "重置所有设置",
    resetEverythingConfirmTitle: "全部重置",
    resetEverythingConfirmMessage: "确定要重置所有设置吗？此操作无法撤销。",
    resetEverythingSuccess: "设置已重置，界面已更新。",
    noPromptSelectedWarning: "未选择任何提示词。"
  }
}, by = (n) => Mi.includes(n), yf = SillyTavern.getContext(), tw = () => {
  const n = n_(), r = st.getSettings();
  if (console.log("[WorldInfoRecommender] Settings loaded:", {
    hasSettings: !!r,
    language: r?.language,
    hasPrompts: !!r?.prompts
  }), !r)
    return /* @__PURE__ */ N.jsx("div", { style: { padding: "20px", color: "red" }, children: "Error: Settings not loaded" });
  const s = by(r.language) ? r.language : _y, a = vf[s] ?? vf[_y], [u, c] = ae.useState(Ju[0]), h = ae.useCallback(
    (A) => {
      const O = st.getSettings();
      A(O), st.saveSettings(), n();
    },
    [n]
  ), m = (A) => {
    const O = A.target.value;
    if (!by(O) || O === r.language)
      return;
    h((z) => {
      z.language = O;
    });
    const L = r_[O], M = vf[O] ?? a;
    Ce("info", M.languageSwitched(L));
  }, f = ae.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((A) => ({
      value: A,
      label: A
    })),
    [r.mainContextTemplatePresets]
  ), g = ae.useMemo(
    () => Object.keys(r.prompts).map((A) => {
      const O = r.prompts[A];
      return {
        value: A,
        label: O ? `${O.label} (${A})` : A
      };
    }),
    [r.prompts]
  ), v = ae.useMemo(() => {
    const A = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return A ? A.prompts.map((O) => {
      const L = r.prompts[O.promptName], M = L ? `${L.label} (${O.promptName})` : O.promptName;
      return {
        id: O.promptName,
        label: M,
        enabled: O.enabled,
        selectValue: O.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), E = (A) => {
    h((O) => {
      O.mainContextTemplatePreset = A ?? "default";
    });
  }, b = (A) => {
    h((O) => {
      const L = {}, M = O.mainContextTemplatePresets;
      A.forEach((z) => {
        L[z.value] = M[z.value] ?? structuredClone(M[O.mainContextTemplatePreset] ?? M.default);
      }), O.mainContextTemplatePresets = L;
    });
  }, _ = (A) => {
    h((O) => {
      const L = A.map((z) => ({
        promptName: z.id,
        enabled: z.enabled,
        role: z.selectValue ?? "user"
      })), M = {
        ...O.mainContextTemplatePresets[O.mainContextTemplatePreset],
        prompts: L
      };
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        [O.mainContextTemplatePreset]: M
      };
    });
  }, p = async () => {
    await yf.Popup.show.confirm(
      a.restoreMainContextConfirmTitle,
      a.restoreMainContextConfirmMessage
    ) && h((O) => {
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        default: structuredClone(Qf.mainContextTemplatePresets.default)
      }, O.mainContextTemplatePreset = "default";
    });
  }, C = (A) => {
    h((O) => {
      const L = {}, M = O.prompts, z = Object.keys(M), H = A.map((G) => G.value);
      H.forEach((G) => {
        L[G] = M[G] ?? { content: "", isDefault: !1, label: G };
      }), O.prompts = L;
      const Z = z.filter((G) => !H.includes(G));
      if (Z.length > 0) {
        const G = Object.fromEntries(
          Object.entries(O.mainContextTemplatePresets).map(([Q, R]) => [
            Q,
            {
              ...R,
              prompts: R.prompts.filter((B) => !Z.includes(B.promptName))
            }
          ])
        );
        O.mainContextTemplatePresets = G;
      }
    });
  }, T = (A) => {
    const O = yy(A);
    return O ? r.prompts[O] ? (Ce("error", `Prompt name already exists: ${O}`), { confirmed: !1 }) : (h((L) => {
      L.prompts = {
        ...L.prompts,
        [O]: {
          content: L.prompts[u]?.content ?? "",
          isDefault: !1,
          label: A
        }
      }, L.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(L.mainContextTemplatePresets).map(([M, z]) => [
          M,
          {
            ...z,
            prompts: [...z.prompts, { enabled: !0, promptName: O, role: "user" }]
          }
        ])
      );
    }), c(O), { confirmed: !0, value: O }) : (Ce("error", `Invalid prompt name: ${A}`), { confirmed: !1 });
  }, j = (A, O) => {
    const L = yy(O);
    return L ? r.prompts[L] ? (Ce("error", `Prompt name already exists: ${L}`), { confirmed: !1 }) : (h((M) => {
      const { [A]: z, ...H } = M.prompts;
      M.prompts = {
        ...H,
        [L]: { ...z, label: O }
      }, M.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([Z, G]) => [
          Z,
          {
            ...G,
            prompts: G.prompts.map((Q) => Q.promptName === A ? { ...Q, promptName: L } : Q)
          }
        ])
      );
    }), c(L), { confirmed: !0, value: L }) : (Ce("error", `Invalid prompt name: ${O}`), { confirmed: !1 });
  }, k = (A) => {
    const O = A.target.value;
    h((L) => {
      const M = L.prompts[u];
      M && (L.prompts = {
        ...L.prompts,
        [u]: {
          ...M,
          content: O,
          isDefault: Ju.includes(u) ? dt[u] === O : !1
        }
      });
    });
  }, P = async () => {
    const A = r.prompts[u];
    if (!A) return Ce("warning", a.noPromptSelectedWarning);
    await yf.Popup.show.confirm(
      a.restorePromptConfirmTitle,
      a.restorePromptConfirmMessage(A.label)
    ) && h((L) => {
      L.prompts = {
        ...L.prompts,
        [u]: {
          ...L.prompts[u],
          content: dt[u]
        }
      };
    });
  }, l = async () => {
    await yf.Popup.show.confirm(
      a.resetEverythingConfirmTitle,
      a.resetEverythingConfirmMessage
    ) && (st.resetSettings(), n(), Ce("success", a.resetEverythingSuccess));
  }, S = r.prompts[u]?.content ?? "", w = Ju.includes(u);
  return /* @__PURE__ */ N.jsxs("div", { className: "world-info-recommender-settings", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "settings-language", style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsx("label", { htmlFor: "world-info-recommender-language-select", children: a.languageLabel }),
      /* @__PURE__ */ N.jsx(
        "select",
        {
          id: "world-info-recommender-language-select",
          className: "settings-language__select",
          value: s,
          onChange: m,
          children: ew.map((A) => /* @__PURE__ */ N.jsx("option", { value: A.value, children: A.label }, A.value))
        }
      ),
      /* @__PURE__ */ N.jsx("p", { className: "settings-language__description", children: a.languageDescription })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: a.mainContextTitle }),
        /* @__PURE__ */ N.jsx("div", { className: "title_restorable_actions", children: /* @__PURE__ */ N.jsx(
          Le,
          {
            title: a.restoreMainContextTooltip,
            onClick: p,
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-undo" })
          }
        ) })
      ] }),
      /* @__PURE__ */ N.jsx(
        Rf,
        {
          label: a.mainContextTemplateLabel,
          items: f,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: E,
          onItemsChange: b,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ N.jsx(
        e_,
        {
          items: v,
          onItemsChange: _,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: a.promptTemplatesTitle }),
        w && /* @__PURE__ */ N.jsx(
          Le,
          {
            title: a.restorePromptTooltip,
            onClick: P,
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-undo" })
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Rf,
        {
          label: a.promptLabel,
          items: g,
          value: u,
          readOnlyValues: Ju,
          onChange: (A) => c(A ?? ""),
          onItemsChange: C,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: T,
          onRename: j
        }
      ),
      /* @__PURE__ */ N.jsx(
        br,
        {
          value: S,
          onChange: k,
          placeholder: a.promptEditorPlaceholder,
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(Le, { className: "danger_button", style: { width: "auto" }, onClick: l, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      /* @__PURE__ */ N.jsx("span", { children: a.resetEverythingButton })
    ] }) })
  ] });
};
var dl = { exports: {} }, nw = dl.exports, Sy;
function rw() {
  return Sy || (Sy = 1, (function(n) {
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
        for (var A in S)
          S.hasOwnProperty(A) && (w[A] = S[A].defaultValue);
        return w;
      }
      function s() {
        var l = r(!0), S = {};
        for (var w in l)
          l.hasOwnProperty(w) && (S[w] = !0);
        return S;
      }
      var a = {}, u = {}, c = {}, h = r(!0), m = "vanilla", f = {
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
      a.helper = {}, a.extensions = {}, a.setOption = function(l, S) {
        return h[l] = S, this;
      }, a.getOption = function(l) {
        return h[l];
      }, a.getOptions = function() {
        return h;
      }, a.resetOptions = function() {
        h = r(!0);
      }, a.setFlavor = function(l) {
        if (!f.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        a.resetOptions();
        var S = f[l];
        m = l;
        for (var w in S)
          S.hasOwnProperty(w) && (h[w] = S[w]);
      }, a.getFlavor = function() {
        return m;
      }, a.getFlavorOptions = function(l) {
        if (f.hasOwnProperty(l))
          return f[l];
      }, a.getDefaultOptions = function(l) {
        return r(l);
      }, a.subParser = function(l, S) {
        if (a.helper.isString(l))
          if (typeof S < "u")
            u[l] = S;
          else {
            if (u.hasOwnProperty(l))
              return u[l];
            throw Error("SubParser named " + l + " not registered!");
          }
      }, a.extension = function(l, S) {
        if (!a.helper.isString(l))
          throw Error("Extension 'name' must be a string");
        if (l = a.helper.stdExtName(l), a.helper.isUndefined(S)) {
          if (!c.hasOwnProperty(l))
            throw Error("Extension named " + l + " is not registered!");
          return c[l];
        } else {
          typeof S == "function" && (S = S()), a.helper.isArray(S) || (S = [S]);
          var w = g(S, l);
          if (w.valid)
            c[l] = S;
          else
            throw Error(w.error);
        }
      }, a.getAllExtensions = function() {
        return c;
      }, a.removeExtension = function(l) {
        delete c[l];
      }, a.resetExtensions = function() {
        c = {};
      };
      function g(l, S) {
        var w = S ? "Error in " + S + " extension->" : "Error in unnamed extension", A = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(l) || (l = [l]);
        for (var O = 0; O < l.length; ++O) {
          var L = w + " sub-extension " + O + ": ", M = l[O];
          if (typeof M != "object")
            return A.valid = !1, A.error = L + "must be an object, but " + typeof M + " given", A;
          if (!a.helper.isString(M.type))
            return A.valid = !1, A.error = L + 'property "type" must be a string, but ' + typeof M.type + " given", A;
          var z = M.type = M.type.toLowerCase();
          if (z === "language" && (z = M.type = "lang"), z === "html" && (z = M.type = "output"), z !== "lang" && z !== "output" && z !== "listener")
            return A.valid = !1, A.error = L + "type " + z + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', A;
          if (z === "listener") {
            if (a.helper.isUndefined(M.listeners))
              return A.valid = !1, A.error = L + '. Extensions of type "listener" must have a property called "listeners"', A;
          } else if (a.helper.isUndefined(M.filter) && a.helper.isUndefined(M.regex))
            return A.valid = !1, A.error = L + z + ' extensions must define either a "regex" property or a "filter" method', A;
          if (M.listeners) {
            if (typeof M.listeners != "object")
              return A.valid = !1, A.error = L + '"listeners" property must be an object but ' + typeof M.listeners + " given", A;
            for (var H in M.listeners)
              if (M.listeners.hasOwnProperty(H) && typeof M.listeners[H] != "function")
                return A.valid = !1, A.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + H + " must be a function but " + typeof M.listeners[H] + " given", A;
          }
          if (M.filter) {
            if (typeof M.filter != "function")
              return A.valid = !1, A.error = L + '"filter" must be a function, but ' + typeof M.filter + " given", A;
          } else if (M.regex) {
            if (a.helper.isString(M.regex) && (M.regex = new RegExp(M.regex, "g")), !(M.regex instanceof RegExp))
              return A.valid = !1, A.error = L + '"regex" property must either be a string or a RegExp object, but ' + typeof M.regex + " given", A;
            if (a.helper.isUndefined(M.replace))
              return A.valid = !1, A.error = L + '"regex" extensions must implement a replace string or function', A;
          }
        }
        return A;
      }
      a.validateExtension = function(l) {
        var S = g(l, null);
        return S.valid ? !0 : (console.warn(S.error), !1);
      }, a.hasOwnProperty("helper") || (a.helper = {}), a.helper.isString = function(l) {
        return typeof l == "string" || l instanceof String;
      }, a.helper.isFunction = function(l) {
        var S = {};
        return l && S.toString.call(l) === "[object Function]";
      }, a.helper.isArray = function(l) {
        return Array.isArray(l);
      }, a.helper.isUndefined = function(l) {
        return typeof l > "u";
      }, a.helper.forEach = function(l, S) {
        if (a.helper.isUndefined(l))
          throw new Error("obj param is required");
        if (a.helper.isUndefined(S))
          throw new Error("callback param is required");
        if (!a.helper.isFunction(S))
          throw new Error("callback param must be a function/closure");
        if (typeof l.forEach == "function")
          l.forEach(S);
        else if (a.helper.isArray(l))
          for (var w = 0; w < l.length; w++)
            S(l[w], w, l);
        else if (typeof l == "object")
          for (var A in l)
            l.hasOwnProperty(A) && S(l[A], A, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, a.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function v(l, S) {
        var w = S.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = v, a.helper.escapeCharacters = function(l, S, w) {
        var A = "([" + S.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (A = "\\\\" + A);
        var O = new RegExp(A, "g");
        return l = l.replace(O, v), l;
      }, a.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, S, w, A) {
        var O = A || "", L = O.indexOf("g") > -1, M = new RegExp(S + "|" + w, "g" + O.replace(/g/g, "")), z = new RegExp(S, O.replace(/g/g, "")), H = [], Z, G, Q, R, B;
        do
          for (Z = 0; Q = M.exec(l); )
            if (z.test(Q[0]))
              Z++ || (G = M.lastIndex, R = G - Q[0].length);
            else if (Z && !--Z) {
              B = Q.index + Q[0].length;
              var K = {
                left: { start: R, end: G },
                match: { start: G, end: Q.index },
                right: { start: Q.index, end: B },
                wholeMatch: { start: R, end: B }
              };
              if (H.push(K), !L)
                return H;
            }
        while (Z && (M.lastIndex = G));
        return H;
      };
      a.helper.matchRecursiveRegExp = function(l, S, w, A) {
        for (var O = E(l, S, w, A), L = [], M = 0; M < O.length; ++M)
          L.push([
            l.slice(O[M].wholeMatch.start, O[M].wholeMatch.end),
            l.slice(O[M].match.start, O[M].match.end),
            l.slice(O[M].left.start, O[M].left.end),
            l.slice(O[M].right.start, O[M].right.end)
          ]);
        return L;
      }, a.helper.replaceRecursiveRegExp = function(l, S, w, A, O) {
        if (!a.helper.isFunction(S)) {
          var L = S;
          S = function() {
            return L;
          };
        }
        var M = E(l, w, A, O), z = l, H = M.length;
        if (H > 0) {
          var Z = [];
          M[0].wholeMatch.start !== 0 && Z.push(l.slice(0, M[0].wholeMatch.start));
          for (var G = 0; G < H; ++G)
            Z.push(
              S(
                l.slice(M[G].wholeMatch.start, M[G].wholeMatch.end),
                l.slice(M[G].match.start, M[G].match.end),
                l.slice(M[G].left.start, M[G].left.end),
                l.slice(M[G].right.start, M[G].right.end)
              )
            ), G < H - 1 && Z.push(l.slice(M[G].wholeMatch.end, M[G + 1].wholeMatch.start));
          M[H - 1].wholeMatch.end < l.length && Z.push(l.slice(M[H - 1].wholeMatch.end)), z = Z.join("");
        }
        return z;
      }, a.helper.regexIndexOf = function(l, S, w) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(S instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var A = l.substring(w || 0).search(S);
        return A >= 0 ? A + (w || 0) : A;
      }, a.helper.splitAtIndex = function(l, S) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [l.substring(0, S), l.substring(S)];
      }, a.helper.encodeEmailAddress = function(l) {
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
            var A = Math.random();
            w = A > 0.9 ? S[2](w) : A > 0.45 ? S[1](w) : S[0](w);
          }
          return w;
        }), l;
      }, a.helper.padEnd = function(S, w, A) {
        return w = w >> 0, A = String(A || " "), S.length > w ? String(S) : (w = w - S.length, w > A.length && (A += A.repeat(w / A.length)), String(S) + A.slice(0, w));
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
      }), a.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      }, a.helper.emojis = {
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
      }, a.Converter = function(l) {
        var S = {}, w = [], A = [], O = {}, L = m, M = {
          parsed: {},
          raw: "",
          format: ""
        };
        z();
        function z() {
          l = l || {};
          for (var R in h)
            h.hasOwnProperty(R) && (S[R] = h[R]);
          if (typeof l == "object")
            for (var B in l)
              l.hasOwnProperty(B) && (S[B] = l[B]);
          else
            throw Error("Converter expects the passed parameter to be an object, but " + typeof l + " was passed instead.");
          S.extensions && a.helper.forEach(S.extensions, H);
        }
        function H(R, B) {
          if (B = B || null, a.helper.isString(R))
            if (R = a.helper.stdExtName(R), B = R, a.extensions[R]) {
              console.warn("DEPRECATION WARNING: " + R + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), Z(a.extensions[R], R);
              return;
            } else if (!a.helper.isUndefined(c[R]))
              R = c[R];
            else
              throw Error('Extension "' + R + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof R == "function" && (R = R()), a.helper.isArray(R) || (R = [R]);
          var K = g(R, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ie = 0; ie < R.length; ++ie) {
            switch (R[ie].type) {
              case "lang":
                w.push(R[ie]);
                break;
              case "output":
                A.push(R[ie]);
                break;
            }
            if (R[ie].hasOwnProperty("listeners"))
              for (var I in R[ie].listeners)
                R[ie].listeners.hasOwnProperty(I) && G(I, R[ie].listeners[I]);
          }
        }
        function Z(R, B) {
          typeof R == "function" && (R = R(new a.Converter())), a.helper.isArray(R) || (R = [R]);
          var K = g(R, B);
          if (!K.valid)
            throw Error(K.error);
          for (var ie = 0; ie < R.length; ++ie)
            switch (R[ie].type) {
              case "lang":
                w.push(R[ie]);
                break;
              case "output":
                A.push(R[ie]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function G(R, B) {
          if (!a.helper.isString(R))
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof R + " given");
          if (typeof B != "function")
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof B + " given");
          O.hasOwnProperty(R) || (O[R] = []), O[R].push(B);
        }
        function Q(R) {
          var B = R.match(/^\s*/)[0].length, K = new RegExp("^\\s{0," + B + "}", "gm");
          return R.replace(K, "");
        }
        this._dispatch = function(B, K, ie, I) {
          if (O.hasOwnProperty(B))
            for (var $ = 0; $ < O[B].length; ++$) {
              var ne = O[B][$](B, K, this, ie, I);
              ne && typeof ne < "u" && (K = ne);
            }
          return K;
        }, this.listen = function(R, B) {
          return G(R, B), this;
        }, this.makeHtml = function(R) {
          if (!R)
            return R;
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
            outputModifiers: A,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            }
          };
          return R = R.replace(/¨/g, "¨T"), R = R.replace(/\$/g, "¨D"), R = R.replace(/\r\n/g, `
`), R = R.replace(/\r/g, `
`), R = R.replace(/\u00A0/g, "&nbsp;"), S.smartIndentationFix && (R = Q(R)), R = `

` + R + `

`, R = a.subParser("detab")(R, S, B), R = R.replace(/^[ \t]+$/mg, ""), a.helper.forEach(w, function(K) {
            R = a.subParser("runExtension")(K, R, S, B);
          }), R = a.subParser("metadata")(R, S, B), R = a.subParser("hashPreCodeTags")(R, S, B), R = a.subParser("githubCodeBlocks")(R, S, B), R = a.subParser("hashHTMLBlocks")(R, S, B), R = a.subParser("hashCodeTags")(R, S, B), R = a.subParser("stripLinkDefinitions")(R, S, B), R = a.subParser("blockGamut")(R, S, B), R = a.subParser("unhashHTMLSpans")(R, S, B), R = a.subParser("unescapeSpecialChars")(R, S, B), R = R.replace(/¨D/g, "$$"), R = R.replace(/¨T/g, "¨"), R = a.subParser("completeHTMLDocument")(R, S, B), a.helper.forEach(A, function(K) {
            R = a.subParser("runExtension")(K, R, S, B);
          }), M = B.metadata, R;
        }, this.makeMarkdown = this.makeMd = function(R, B) {
          if (R = R.replace(/\r\n/g, `
`), R = R.replace(/\r/g, `
`), R = R.replace(/>[ \t]+</, ">¨NBSP;<"), !B)
            if (window && window.document)
              B = window.document;
            else
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
          var K = B.createElement("div");
          K.innerHTML = R;
          var ie = {
            preList: fe(K)
          };
          le(K);
          for (var I = K.childNodes, $ = "", ne = 0; ne < I.length; ne++)
            $ += a.subParser("makeMarkdown.node")(I[ne], ie);
          function le(Ae) {
            for (var ee = 0; ee < Ae.childNodes.length; ++ee) {
              var we = Ae.childNodes[ee];
              we.nodeType === 3 ? !/\S/.test(we.nodeValue) && !/^[ ]+$/.test(we.nodeValue) ? (Ae.removeChild(we), --ee) : (we.nodeValue = we.nodeValue.split(`
`).join(" "), we.nodeValue = we.nodeValue.replace(/(\s)+/g, "$1")) : we.nodeType === 1 && le(we);
            }
          }
          function fe(Ae) {
            for (var ee = Ae.querySelectorAll("pre"), we = [], be = 0; be < ee.length; ++be)
              if (ee[be].childElementCount === 1 && ee[be].firstChild.tagName.toLowerCase() === "code") {
                var $e = ee[be].firstChild.innerHTML.trim(), Ge = ee[be].firstChild.getAttribute("data-language") || "";
                if (Ge === "")
                  for (var F = ee[be].firstChild.className.split(" "), de = 0; de < F.length; ++de) {
                    var ve = F[de].match(/^language-(.+)$/);
                    if (ve !== null) {
                      Ge = ve[1];
                      break;
                    }
                  }
                $e = a.helper.unescapeHTMLEntities($e), we.push($e), ee[be].outerHTML = '<precode language="' + Ge + '" precodenum="' + be.toString() + '"></precode>';
              } else
                we.push(ee[be].innerHTML), ee[be].innerHTML = "", ee[be].setAttribute("prenum", be.toString());
            return we;
          }
          return $;
        }, this.setOption = function(R, B) {
          S[R] = B;
        }, this.getOption = function(R) {
          return S[R];
        }, this.getOptions = function() {
          return S;
        }, this.addExtension = function(R, B) {
          B = B || null, H(R, B);
        }, this.useExtension = function(R) {
          H(R);
        }, this.setFlavor = function(R) {
          if (!f.hasOwnProperty(R))
            throw Error(R + " flavor was not found");
          var B = f[R];
          L = R;
          for (var K in B)
            B.hasOwnProperty(K) && (S[K] = B[K]);
        }, this.getFlavor = function() {
          return L;
        }, this.removeExtension = function(R) {
          a.helper.isArray(R) || (R = [R]);
          for (var B = 0; B < R.length; ++B) {
            for (var K = R[B], ie = 0; ie < w.length; ++ie)
              w[ie] === K && w.splice(ie, 1);
            for (var I = 0; I < A.length; ++I)
              A[I] === K && A.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: A
          };
        }, this.getMetadata = function(R) {
          return R ? M.raw : M.parsed;
        }, this.getMetadataFormat = function() {
          return M.format;
        }, this._setMetadataPair = function(R, B) {
          M.parsed[R] = B;
        }, this._setMetadataFormat = function(R) {
          M.format = R;
        }, this._setMetadataRaw = function(R) {
          M.raw = R;
        };
      }, a.subParser("anchors", function(l, S, w) {
        l = w.converter._dispatch("anchors.before", l, S, w);
        var A = function(O, L, M, z, H, Z, G) {
          if (a.helper.isUndefined(G) && (G = ""), M = M.toLowerCase(), O.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            z = "";
          else if (!z)
            if (M || (M = L.toLowerCase().replace(/ ?\n/g, " ")), z = "#" + M, !a.helper.isUndefined(w.gUrls[M]))
              z = w.gUrls[M], a.helper.isUndefined(w.gTitles[M]) || (G = w.gTitles[M]);
            else
              return O;
          z = z.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var Q = '<a href="' + z + '"';
          return G !== "" && G !== null && (G = G.replace(/"/g, "&quot;"), G = G.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), Q += ' title="' + G + '"'), S.openLinksInNewWindow && !/^#/.test(z) && (Q += ' rel="noopener noreferrer" target="¨E95Eblank"'), Q += ">" + L + "</a>", Q;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, A), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          A
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          A
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, A), S.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(O, L, M, z, H) {
          if (M === "\\")
            return L + z;
          if (!a.helper.isString(S.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var Z = S.ghMentionsLink.replace(/\{u}/g, H), G = "";
          return S.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + Z + '"' + G + ">" + z + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, S, w), l;
      });
      var b = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, _ = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, p = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, T = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, j = function(l) {
        return function(S, w, A, O, L, M, z) {
          A = A.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var H = A, Z = "", G = "", Q = w || "", R = z || "";
          return /^www\./i.test(A) && (A = A.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && M && (Z = M), l.openLinksInNewWindow && (G = ' rel="noopener noreferrer" target="¨E95Eblank"'), Q + '<a href="' + A + '"' + G + ">" + H + "</a>" + Z + R;
        };
      }, k = function(l, S) {
        return function(w, A, O) {
          var L = "mailto:";
          return A = A || "", O = a.subParser("unescapeSpecialChars")(O, l, S), l.encodeEmails ? (L = a.helper.encodeEmailAddress(L + O), O = a.helper.encodeEmailAddress(O)) : L = L + O, A + '<a href="' + L + '">' + O + "</a>";
        };
      };
      a.subParser("autoLinks", function(l, S, w) {
        return l = w.converter._dispatch("autoLinks.before", l, S, w), l = l.replace(p, j(S)), l = l.replace(T, k(S, w)), l = w.converter._dispatch("autoLinks.after", l, S, w), l;
      }), a.subParser("simplifiedAutoLinks", function(l, S, w) {
        return S.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, S, w), S.excludeTrailingPunctuationFromURLs ? l = l.replace(_, j(S)) : l = l.replace(b, j(S)), l = l.replace(C, k(S, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, S, w)), l;
      }), a.subParser("blockGamut", function(l, S, w) {
        return l = w.converter._dispatch("blockGamut.before", l, S, w), l = a.subParser("blockQuotes")(l, S, w), l = a.subParser("headers")(l, S, w), l = a.subParser("horizontalRule")(l, S, w), l = a.subParser("lists")(l, S, w), l = a.subParser("codeBlocks")(l, S, w), l = a.subParser("tables")(l, S, w), l = a.subParser("hashHTMLBlocks")(l, S, w), l = a.subParser("paragraphs")(l, S, w), l = w.converter._dispatch("blockGamut.after", l, S, w), l;
      }), a.subParser("blockQuotes", function(l, S, w) {
        l = w.converter._dispatch("blockQuotes.before", l, S, w), l = l + `

`;
        var A = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return S.splitAdjacentBlockquotes && (A = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(A, function(O) {
          return O = O.replace(/^[ \t]*>[ \t]?/gm, ""), O = O.replace(/¨0/g, ""), O = O.replace(/^[ \t]+$/gm, ""), O = a.subParser("githubCodeBlocks")(O, S, w), O = a.subParser("blockGamut")(O, S, w), O = O.replace(/(^|\n)/g, "$1  "), O = O.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, M) {
            var z = M;
            return z = z.replace(/^  /mg, "¨0"), z = z.replace(/¨0/g, ""), z;
          }), a.subParser("hashBlock")(`<blockquote>
` + O + `
</blockquote>`, S, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, S, w), l;
      }), a.subParser("codeBlocks", function(l, S, w) {
        l = w.converter._dispatch("codeBlocks.before", l, S, w), l += "¨0";
        var A = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(A, function(O, L, M) {
          var z = L, H = M, Z = `
`;
          return z = a.subParser("outdent")(z, S, w), z = a.subParser("encodeCode")(z, S, w), z = a.subParser("detab")(z, S, w), z = z.replace(/^\n+/g, ""), z = z.replace(/\n+$/g, ""), S.omitExtraWLInCodeBlocks && (Z = ""), z = "<pre><code>" + z + Z + "</code></pre>", a.subParser("hashBlock")(z, S, w) + H;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, S, w), l;
      }), a.subParser("codeSpans", function(l, S, w) {
        return l = w.converter._dispatch("codeSpans.before", l, S, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(A, O, L, M) {
            var z = M;
            return z = z.replace(/^([ \t]*)/g, ""), z = z.replace(/[ \t]*$/g, ""), z = a.subParser("encodeCode")(z, S, w), z = O + "<code>" + z + "</code>", z = a.subParser("hashHTMLSpans")(z, S, w), z;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, S, w), l;
      }), a.subParser("completeHTMLDocument", function(l, S, w) {
        if (!S.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, S, w);
        var A = "html", O = `<!DOCTYPE HTML>
`, L = "", M = `<meta charset="utf-8">
`, z = "", H = "";
        typeof w.metadata.parsed.doctype < "u" && (O = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, A = w.metadata.parsed.doctype.toString().toLowerCase(), (A === "html" || A === "html5") && (M = '<meta charset="utf-8">'));
        for (var Z in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(Z))
            switch (Z.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                L = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                A === "html" || A === "html5" ? M = '<meta charset="' + w.metadata.parsed.charset + `">
` : M = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                z = ' lang="' + w.metadata.parsed[Z] + '"', H += '<meta name="' + Z + '" content="' + w.metadata.parsed[Z] + `">
`;
                break;
              default:
                H += '<meta name="' + Z + '" content="' + w.metadata.parsed[Z] + `">
`;
            }
        return l = O + "<html" + z + `>
<head>
` + L + M + H + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, S, w), l;
      }), a.subParser("detab", function(l, S, w) {
        return l = w.converter._dispatch("detab.before", l, S, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(A, O) {
          for (var L = O, M = 4 - L.length % 4, z = 0; z < M; z++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, S, w), l;
      }), a.subParser("ellipsis", function(l, S, w) {
        return S.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, S, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, S, w)), l;
      }), a.subParser("emoji", function(l, S, w) {
        if (!S.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, S, w);
        var A = /:([\S]+?):/g;
        return l = l.replace(A, function(O, L) {
          return a.helper.emojis.hasOwnProperty(L) ? a.helper.emojis[L] : O;
        }), l = w.converter._dispatch("emoji.after", l, S, w), l;
      }), a.subParser("encodeAmpsAndAngles", function(l, S, w) {
        return l = w.converter._dispatch("encodeAmpsAndAngles.before", l, S, w), l = l.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), l = l.replace(/<(?![a-z\/?$!])/gi, "&lt;"), l = l.replace(/</g, "&lt;"), l = l.replace(/>/g, "&gt;"), l = w.converter._dispatch("encodeAmpsAndAngles.after", l, S, w), l;
      }), a.subParser("encodeBackslashEscapes", function(l, S, w) {
        return l = w.converter._dispatch("encodeBackslashEscapes.before", l, S, w), l = l.replace(/\\(\\)/g, a.helper.escapeCharactersCallback), l = l.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeBackslashEscapes.after", l, S, w), l;
      }), a.subParser("encodeCode", function(l, S, w) {
        return l = w.converter._dispatch("encodeCode.before", l, S, w), l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("encodeCode.after", l, S, w), l;
      }), a.subParser("escapeSpecialCharsWithinTagAttributes", function(l, S, w) {
        l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", l, S, w);
        var A = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, O = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(A, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = l.replace(O, function(L) {
          return L.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, S, w), l;
      }), a.subParser("githubCodeBlocks", function(l, S, w) {
        return S.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, S, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(A, O, L, M) {
          var z = S.omitExtraWLInCodeBlocks ? "" : `
`;
          return M = a.subParser("encodeCode")(M, S, w), M = a.subParser("detab")(M, S, w), M = M.replace(/^\n+/g, ""), M = M.replace(/\n+$/g, ""), M = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + M + z + "</code></pre>", M = a.subParser("hashBlock")(M, S, w), `

¨G` + (w.ghCodeBlocks.push({ text: A, codeblock: M }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, S, w)) : l;
      }), a.subParser("hashBlock", function(l, S, w) {
        return l = w.converter._dispatch("hashBlock.before", l, S, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, S, w), l;
      }), a.subParser("hashCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, S, w);
        var A = function(O, L, M, z) {
          var H = M + a.subParser("encodeCode")(L, S, w) + z;
          return "¨C" + (w.gHtmlSpans.push(H) - 1) + "C";
        };
        return l = a.helper.replaceRecursiveRegExp(l, A, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, S, w), l;
      }), a.subParser("hashElement", function(l, S, w) {
        return function(A, O) {
          var L = O;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
        };
      }), a.subParser("hashHTMLBlocks", function(l, S, w) {
        l = w.converter._dispatch("hashHTMLBlocks.before", l, S, w);
        var A = [
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
        ], O = function(R, B, K, ie) {
          var I = R;
          return K.search(/\bmarkdown\b/) !== -1 && (I = K + w.converter.makeHtml(B) + ie), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        S.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(R, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < A.length; ++L)
          for (var M, z = new RegExp("^ {0,3}(<" + A[L] + "\\b[^>]*>)", "im"), H = "<" + A[L] + "\\b[^>]*>", Z = "</" + A[L] + ">"; (M = a.helper.regexIndexOf(l, z)) !== -1; ) {
            var G = a.helper.splitAtIndex(l, M), Q = a.helper.replaceRecursiveRegExp(G[1], O, H, Z, "im");
            if (Q === G[1])
              break;
            l = G[0].concat(Q);
          }
        return l = l.replace(
          /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, S, w)
        ), l = a.helper.replaceRecursiveRegExp(l, function(R) {
          return `

¨K` + (w.gHtmlBlocks.push(R) - 1) + `K

`;
        }, "^ {0,3}<!--", "-->", "gm"), l = l.replace(
          /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
          a.subParser("hashElement")(l, S, w)
        ), l = w.converter._dispatch("hashHTMLBlocks.after", l, S, w), l;
      }), a.subParser("hashHTMLSpans", function(l, S, w) {
        l = w.converter._dispatch("hashHTMLSpans.before", l, S, w);
        function A(O) {
          return "¨C" + (w.gHtmlSpans.push(O) - 1) + "C";
        }
        return l = l.replace(/<[^>]+?\/>/gi, function(O) {
          return A(O);
        }), l = l.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(O) {
          return A(O);
        }), l = l.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(O) {
          return A(O);
        }), l = l.replace(/<[^>]+?>/gi, function(O) {
          return A(O);
        }), l = w.converter._dispatch("hashHTMLSpans.after", l, S, w), l;
      }), a.subParser("unhashHTMLSpans", function(l, S, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, S, w);
        for (var A = 0; A < w.gHtmlSpans.length; ++A) {
          for (var O = w.gHtmlSpans[A], L = 0; /¨C(\d+)C/.test(O); ) {
            var M = RegExp.$1;
            if (O = O.replace("¨C" + M + "C", w.gHtmlSpans[M]), L === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++L;
          }
          l = l.replace("¨C" + A + "C", O);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, S, w), l;
      }), a.subParser("hashPreCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, S, w);
        var A = function(O, L, M, z) {
          var H = M + a.subParser("encodeCode")(L, S, w) + z;
          return `

¨G` + (w.ghCodeBlocks.push({ text: O, codeblock: H }) - 1) + `G

`;
        };
        return l = a.helper.replaceRecursiveRegExp(l, A, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, S, w), l;
      }), a.subParser("headers", function(l, S, w) {
        l = w.converter._dispatch("headers.before", l, S, w);
        var A = isNaN(parseInt(S.headerLevelStart)) ? 1 : parseInt(S.headerLevelStart), O = S.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = S.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(O, function(H, Z) {
          var G = a.subParser("spanGamut")(Z, S, w), Q = S.noHeaderId ? "" : ' id="' + z(Z) + '"', R = A, B = "<h" + R + Q + ">" + G + "</h" + R + ">";
          return a.subParser("hashBlock")(B, S, w);
        }), l = l.replace(L, function(H, Z) {
          var G = a.subParser("spanGamut")(Z, S, w), Q = S.noHeaderId ? "" : ' id="' + z(Z) + '"', R = A + 1, B = "<h" + R + Q + ">" + G + "</h" + R + ">";
          return a.subParser("hashBlock")(B, S, w);
        });
        var M = S.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(M, function(H, Z, G) {
          var Q = G;
          S.customizedHeaderId && (Q = G.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var R = a.subParser("spanGamut")(Q, S, w), B = S.noHeaderId ? "" : ' id="' + z(G) + '"', K = A - 1 + Z.length, ie = "<h" + K + B + ">" + R + "</h" + K + ">";
          return a.subParser("hashBlock")(ie, S, w);
        });
        function z(H) {
          var Z, G;
          if (S.customizedHeaderId) {
            var Q = H.match(/\{([^{]+?)}\s*$/);
            Q && Q[1] && (H = Q[1]);
          }
          return Z = H, a.helper.isString(S.prefixHeaderId) ? G = S.prefixHeaderId : S.prefixHeaderId === !0 ? G = "section-" : G = "", S.rawPrefixHeaderId || (Z = G + Z), S.ghCompatibleHeaderId ? Z = Z.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : S.rawHeaderId ? Z = Z.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : Z = Z.replace(/[^\w]/g, "").toLowerCase(), S.rawPrefixHeaderId && (Z = G + Z), w.hashLinkCounts[Z] ? Z = Z + "-" + w.hashLinkCounts[Z]++ : w.hashLinkCounts[Z] = 1, Z;
        }
        return l = w.converter._dispatch("headers.after", l, S, w), l;
      }), a.subParser("horizontalRule", function(l, S, w) {
        l = w.converter._dispatch("horizontalRule.before", l, S, w);
        var A = a.subParser("hashBlock")("<hr />", S, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, A), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, A), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, A), l = w.converter._dispatch("horizontalRule.after", l, S, w), l;
      }), a.subParser("images", function(l, S, w) {
        l = w.converter._dispatch("images.before", l, S, w);
        var A = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, O = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, M = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, z = /!\[([^\[\]]+)]()()()()()/g;
        function H(G, Q, R, B, K, ie, I, $) {
          return B = B.replace(/\s/g, ""), Z(G, Q, R, B, K, ie, I, $);
        }
        function Z(G, Q, R, B, K, ie, I, $) {
          var ne = w.gUrls, le = w.gTitles, fe = w.gDimensions;
          if (R = R.toLowerCase(), $ || ($ = ""), G.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((R === "" || R === null) && (R = Q.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + R, !a.helper.isUndefined(ne[R]))
              B = ne[R], a.helper.isUndefined(le[R]) || ($ = le[R]), a.helper.isUndefined(fe[R]) || (K = fe[R].width, ie = fe[R].height);
            else
              return G;
          Q = Q.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), B = B.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var Ae = '<img src="' + B + '" alt="' + Q + '"';
          return $ && a.helper.isString($) && ($ = $.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), Ae += ' title="' + $ + '"'), K && ie && (K = K === "*" ? "auto" : K, ie = ie === "*" ? "auto" : ie, Ae += ' width="' + K + '"', Ae += ' height="' + ie + '"'), Ae += " />", Ae;
        }
        return l = l.replace(M, Z), l = l.replace(L, H), l = l.replace(O, Z), l = l.replace(A, Z), l = l.replace(z, Z), l = w.converter._dispatch("images.after", l, S, w), l;
      }), a.subParser("italicsAndBold", function(l, S, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, S, w);
        function A(O, L, M) {
          return L + O + M;
        }
        return S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(O, L) {
          return A(L, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(O, L) {
          return A(L, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(O, L) {
          return A(L, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<strong>", "</strong>") : O;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<em>", "</em>") : O;
        })), S.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(O, L, M) {
          return A(M, L + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(O, L, M) {
          return A(M, L + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(O, L, M) {
          return A(M, L + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<strong>", "</strong>") : O;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(O, L) {
          return /\S$/.test(L) ? A(L, "<em>", "</em>") : O;
        })), l = w.converter._dispatch("italicsAndBold.after", l, S, w), l;
      }), a.subParser("lists", function(l, S, w) {
        function A(M, z) {
          w.gListLevel++, M = M.replace(/\n{2,}$/, `
`), M += "¨0";
          var H = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, Z = /\n[ \t]*\n(?!¨0)/.test(M);
          return S.disableForced4SpacesIndentedSublists && (H = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), M = M.replace(H, function(G, Q, R, B, K, ie, I) {
            I = I && I.trim() !== "";
            var $ = a.subParser("outdent")(K, S, w), ne = "";
            return ie && S.tasklists && (ne = ' class="task-list-item" style="list-style-type: none;"', $ = $.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var le = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (le += " checked"), le += ">", le;
            })), $ = $.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(le) {
              return "¨A" + le;
            }), Q || $.search(/\n{2,}/) > -1 ? ($ = a.subParser("githubCodeBlocks")($, S, w), $ = a.subParser("blockGamut")($, S, w)) : ($ = a.subParser("lists")($, S, w), $ = $.replace(/\n$/, ""), $ = a.subParser("hashHTMLBlocks")($, S, w), $ = $.replace(/\n\n+/g, `

`), Z ? $ = a.subParser("paragraphs")($, S, w) : $ = a.subParser("spanGamut")($, S, w)), $ = $.replace("¨A", ""), $ = "<li" + ne + ">" + $ + `</li>
`, $;
          }), M = M.replace(/¨0/g, ""), w.gListLevel--, z && (M = M.replace(/\s+$/, "")), M;
        }
        function O(M, z) {
          if (z === "ol") {
            var H = M.match(/^ *(\d+)\./);
            if (H && H[1] !== "1")
              return ' start="' + H[1] + '"';
          }
          return "";
        }
        function L(M, z, H) {
          var Z = S.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, G = S.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, Q = z === "ul" ? Z : G, R = "";
          if (M.search(Q) !== -1)
            (function K(ie) {
              var I = ie.search(Q), $ = O(M, z);
              I !== -1 ? (R += `

<` + z + $ + `>
` + A(ie.slice(0, I), !!H) + "</" + z + `>
`, z = z === "ul" ? "ol" : "ul", Q = z === "ul" ? Z : G, K(ie.slice(I))) : R += `

<` + z + $ + `>
` + A(ie, !!H) + "</" + z + `>
`;
            })(M);
          else {
            var B = O(M, z);
            R = `

<` + z + B + `>
` + A(M, !!H) + "</" + z + `>
`;
          }
          return R;
        }
        return l = w.converter._dispatch("lists.before", l, S, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(M, z, H) {
            var Z = H.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(z, Z, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(M, z, H, Z) {
            var G = Z.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(H, G, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, S, w), l;
      }), a.subParser("metadata", function(l, S, w) {
        if (!S.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, S, w);
        function A(O) {
          w.metadata.raw = O, O = O.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), O = O.replace(/\n {4}/g, " "), O.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, M, z) {
            return w.metadata.parsed[M] = z, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(O, L, M) {
          return A(M), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(O, L, M) {
          return L && (w.metadata.format = L), A(M), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, S, w), l;
      }), a.subParser("outdent", function(l, S, w) {
        return l = w.converter._dispatch("outdent.before", l, S, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, S, w), l;
      }), a.subParser("paragraphs", function(l, S, w) {
        l = w.converter._dispatch("paragraphs.before", l, S, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var A = l.split(/\n{2,}/g), O = [], L = A.length, M = 0; M < L; M++) {
          var z = A[M];
          z.search(/¨(K|G)(\d+)\1/g) >= 0 ? O.push(z) : z.search(/\S/) >= 0 && (z = a.subParser("spanGamut")(z, S, w), z = z.replace(/^([ \t]*)/g, "<p>"), z += "</p>", O.push(z));
        }
        for (L = O.length, M = 0; M < L; M++) {
          for (var H = "", Z = O[M], G = !1; /¨(K|G)(\d+)\1/.test(Z); ) {
            var Q = RegExp.$1, R = RegExp.$2;
            Q === "K" ? H = w.gHtmlBlocks[R] : G ? H = a.subParser("encodeCode")(w.ghCodeBlocks[R].text, S, w) : H = w.ghCodeBlocks[R].codeblock, H = H.replace(/\$/g, "$$$$"), Z = Z.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, H), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(Z) && (G = !0);
          }
          O[M] = Z;
        }
        return l = O.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, S, w);
      }), a.subParser("runExtension", function(l, S, w, A) {
        if (l.filter)
          S = l.filter(S, A.converter, w);
        else if (l.regex) {
          var O = l.regex;
          O instanceof RegExp || (O = new RegExp(O, "g")), S = S.replace(O, l.replace);
        }
        return S;
      }), a.subParser("spanGamut", function(l, S, w) {
        return l = w.converter._dispatch("spanGamut.before", l, S, w), l = a.subParser("codeSpans")(l, S, w), l = a.subParser("escapeSpecialCharsWithinTagAttributes")(l, S, w), l = a.subParser("encodeBackslashEscapes")(l, S, w), l = a.subParser("images")(l, S, w), l = a.subParser("anchors")(l, S, w), l = a.subParser("autoLinks")(l, S, w), l = a.subParser("simplifiedAutoLinks")(l, S, w), l = a.subParser("emoji")(l, S, w), l = a.subParser("underline")(l, S, w), l = a.subParser("italicsAndBold")(l, S, w), l = a.subParser("strikethrough")(l, S, w), l = a.subParser("ellipsis")(l, S, w), l = a.subParser("hashHTMLSpans")(l, S, w), l = a.subParser("encodeAmpsAndAngles")(l, S, w), S.simpleLineBreaks ? /\n\n¨K/.test(l) || (l = l.replace(/\n+/g, `<br />
`)) : l = l.replace(/  +\n/g, `<br />
`), l = w.converter._dispatch("spanGamut.after", l, S, w), l;
      }), a.subParser("strikethrough", function(l, S, w) {
        function A(O) {
          return S.simplifiedAutoLink && (O = a.subParser("simplifiedAutoLinks")(O, S, w)), "<del>" + O + "</del>";
        }
        return S.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, S, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(O, L) {
          return A(L);
        }), l = w.converter._dispatch("strikethrough.after", l, S, w)), l;
      }), a.subParser("stripLinkDefinitions", function(l, S, w) {
        var A = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, O = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(M, z, H, Z, G, Q, R) {
          return z = z.toLowerCase(), l.toLowerCase().split(z).length - 1 < 2 ? M : (H.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[z] = H.replace(/\s/g, "") : w.gUrls[z] = a.subParser("encodeAmpsAndAngles")(H, S, w), Q ? Q + R : (R && (w.gTitles[z] = R.replace(/"|'/g, "&quot;")), S.parseImgDimensions && Z && G && (w.gDimensions[z] = {
            width: Z,
            height: G
          }), ""));
        };
        return l = l.replace(O, L), l = l.replace(A, L), l = l.replace(/¨0/, ""), l;
      }), a.subParser("tables", function(l, S, w) {
        if (!S.tables)
          return l;
        var A = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, O = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(G) {
          return /^:[ \t]*--*$/.test(G) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(G) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(G) ? ' style="text-align:center;"' : "";
        }
        function M(G, Q) {
          var R = "";
          return G = G.trim(), (S.tablesHeaderId || S.tableHeaderId) && (R = ' id="' + G.replace(/ /g, "_").toLowerCase() + '"'), G = a.subParser("spanGamut")(G, S, w), "<th" + R + Q + ">" + G + `</th>
`;
        }
        function z(G, Q) {
          var R = a.subParser("spanGamut")(G, S, w);
          return "<td" + Q + ">" + R + `</td>
`;
        }
        function H(G, Q) {
          for (var R = `<table>
<thead>
<tr>
`, B = G.length, K = 0; K < B; ++K)
            R += G[K];
          for (R += `</tr>
</thead>
<tbody>
`, K = 0; K < Q.length; ++K) {
            R += `<tr>
`;
            for (var ie = 0; ie < B; ++ie)
              R += Q[K][ie];
            R += `</tr>
`;
          }
          return R += `</tbody>
</table>
`, R;
        }
        function Z(G) {
          var Q, R = G.split(`
`);
          for (Q = 0; Q < R.length; ++Q)
            /^ {0,3}\|/.test(R[Q]) && (R[Q] = R[Q].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(R[Q]) && (R[Q] = R[Q].replace(/\|[ \t]*$/, "")), R[Q] = a.subParser("codeSpans")(R[Q], S, w);
          var B = R[0].split("|").map(function(Ae) {
            return Ae.trim();
          }), K = R[1].split("|").map(function(Ae) {
            return Ae.trim();
          }), ie = [], I = [], $ = [], ne = [];
          for (R.shift(), R.shift(), Q = 0; Q < R.length; ++Q)
            R[Q].trim() !== "" && ie.push(
              R[Q].split("|").map(function(Ae) {
                return Ae.trim();
              })
            );
          if (B.length < K.length)
            return G;
          for (Q = 0; Q < K.length; ++Q)
            $.push(L(K[Q]));
          for (Q = 0; Q < B.length; ++Q)
            a.helper.isUndefined($[Q]) && ($[Q] = ""), I.push(M(B[Q], $[Q]));
          for (Q = 0; Q < ie.length; ++Q) {
            for (var le = [], fe = 0; fe < I.length; ++fe)
              a.helper.isUndefined(ie[Q][fe]), le.push(z(ie[Q][fe], $[fe]));
            ne.push(le);
          }
          return H(I, ne);
        }
        return l = w.converter._dispatch("tables.before", l, S, w), l = l.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), l = l.replace(A, Z), l = l.replace(O, Z), l = w.converter._dispatch("tables.after", l, S, w), l;
      }), a.subParser("underline", function(l, S, w) {
        return S.underline && (l = w.converter._dispatch("underline.before", l, S, w), S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(A, O) {
          return "<u>" + O + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(A, O) {
          return "<u>" + O + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(A, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : A;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(A, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : A;
        })), l = l.replace(/(_)/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, S, w)), l;
      }), a.subParser("unescapeSpecialChars", function(l, S, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, S, w), l = l.replace(/¨E(\d+)E/g, function(A, O) {
          var L = parseInt(O);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, S, w), l;
      }), a.subParser("makeMarkdown.blockquote", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L) {
            var M = a.subParser("makeMarkdown.node")(A[L], S);
            M !== "" && (w += M);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), a.subParser("makeMarkdown.codeBlock", function(l, S) {
        var w = l.getAttribute("language"), A = l.getAttribute("precodenum");
        return "```" + w + `
` + S.preList[A] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(A[L], S);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(l, S, w) {
        var A = new Array(w + 1).join("#"), O = "";
        if (l.hasChildNodes()) {
          O = A + " ";
          for (var L = l.childNodes, M = L.length, z = 0; z < M; ++z)
            O += a.subParser("makeMarkdown.node")(L[z], S);
        }
        return O;
      }), a.subParser("makeMarkdown.hr", function() {
        return "---";
      }), a.subParser("makeMarkdown.image", function(l) {
        var S = "";
        return l.hasAttribute("src") && (S += "![" + l.getAttribute("alt") + "](", S += "<" + l.getAttribute("src") + ">", l.hasAttribute("width") && l.hasAttribute("height") && (S += " =" + l.getAttribute("width") + "x" + l.getAttribute("height")), l.hasAttribute("title") && (S += ' "' + l.getAttribute("title") + '"'), S += ")"), S;
      }), a.subParser("makeMarkdown.links", function(l, S) {
        var w = "";
        if (l.hasChildNodes() && l.hasAttribute("href")) {
          var A = l.childNodes, O = A.length;
          w = "[";
          for (var L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(A[L], S);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(l, S, w) {
        var A = "";
        if (!l.hasChildNodes())
          return "";
        for (var O = l.childNodes, L = O.length, M = l.getAttribute("start") || 1, z = 0; z < L; ++z)
          if (!(typeof O[z].tagName > "u" || O[z].tagName.toLowerCase() !== "li")) {
            var H = "";
            w === "ol" ? H = M.toString() + ". " : H = "- ", A += H + a.subParser("makeMarkdown.listItem")(O[z], S), ++M;
          }
        return A += `
<!-- -->
`, A.trim();
      }), a.subParser("makeMarkdown.listItem", function(l, S) {
        for (var w = "", A = l.childNodes, O = A.length, L = 0; L < O; ++L)
          w += a.subParser("makeMarkdown.node")(A[L], S);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), a.subParser("makeMarkdown.node", function(l, S, w) {
        w = w || !1;
        var A = "";
        if (l.nodeType === 3)
          return a.subParser("makeMarkdown.txt")(l, S);
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
            w || (A = a.subParser("makeMarkdown.header")(l, S, 1) + `

`);
            break;
          case "h2":
            w || (A = a.subParser("makeMarkdown.header")(l, S, 2) + `

`);
            break;
          case "h3":
            w || (A = a.subParser("makeMarkdown.header")(l, S, 3) + `

`);
            break;
          case "h4":
            w || (A = a.subParser("makeMarkdown.header")(l, S, 4) + `

`);
            break;
          case "h5":
            w || (A = a.subParser("makeMarkdown.header")(l, S, 5) + `

`);
            break;
          case "h6":
            w || (A = a.subParser("makeMarkdown.header")(l, S, 6) + `

`);
            break;
          case "p":
            w || (A = a.subParser("makeMarkdown.paragraph")(l, S) + `

`);
            break;
          case "blockquote":
            w || (A = a.subParser("makeMarkdown.blockquote")(l, S) + `

`);
            break;
          case "hr":
            w || (A = a.subParser("makeMarkdown.hr")(l, S) + `

`);
            break;
          case "ol":
            w || (A = a.subParser("makeMarkdown.list")(l, S, "ol") + `

`);
            break;
          case "ul":
            w || (A = a.subParser("makeMarkdown.list")(l, S, "ul") + `

`);
            break;
          case "precode":
            w || (A = a.subParser("makeMarkdown.codeBlock")(l, S) + `

`);
            break;
          case "pre":
            w || (A = a.subParser("makeMarkdown.pre")(l, S) + `

`);
            break;
          case "table":
            w || (A = a.subParser("makeMarkdown.table")(l, S) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            A = a.subParser("makeMarkdown.codeSpan")(l, S);
            break;
          case "em":
          case "i":
            A = a.subParser("makeMarkdown.emphasis")(l, S);
            break;
          case "strong":
          case "b":
            A = a.subParser("makeMarkdown.strong")(l, S);
            break;
          case "del":
            A = a.subParser("makeMarkdown.strikethrough")(l, S);
            break;
          case "a":
            A = a.subParser("makeMarkdown.links")(l, S);
            break;
          case "img":
            A = a.subParser("makeMarkdown.image")(l, S);
            break;
          default:
            A = l.outerHTML + `

`;
        }
        return A;
      }), a.subParser("makeMarkdown.paragraph", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(A[L], S);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(l, S) {
        var w = l.getAttribute("prenum");
        return "<pre>" + S.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(A[L], S);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(A[L], S);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(l, S) {
        var w = "", A = [[], []], O = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), M, z;
        for (M = 0; M < O.length; ++M) {
          var H = a.subParser("makeMarkdown.tableCell")(O[M], S), Z = "---";
          if (O[M].hasAttribute("style")) {
            var G = O[M].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (G) {
              case "text-align:left;":
                Z = ":---";
                break;
              case "text-align:right;":
                Z = "---:";
                break;
              case "text-align:center;":
                Z = ":---:";
                break;
            }
          }
          A[0][M] = H.trim(), A[1][M] = Z;
        }
        for (M = 0; M < L.length; ++M) {
          var Q = A.push([]) - 1, R = L[M].getElementsByTagName("td");
          for (z = 0; z < O.length; ++z) {
            var B = " ";
            typeof R[z] < "u" && (B = a.subParser("makeMarkdown.tableCell")(R[z], S)), A[Q].push(B);
          }
        }
        var K = 3;
        for (M = 0; M < A.length; ++M)
          for (z = 0; z < A[M].length; ++z) {
            var ie = A[M][z].length;
            ie > K && (K = ie);
          }
        for (M = 0; M < A.length; ++M) {
          for (z = 0; z < A[M].length; ++z)
            M === 1 ? A[M][z].slice(-1) === ":" ? A[M][z] = a.helper.padEnd(A[M][z].slice(-1), K - 1, "-") + ":" : A[M][z] = a.helper.padEnd(A[M][z], K, "-") : A[M][z] = a.helper.padEnd(A[M][z], K);
          w += "| " + A[M].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(l, S) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var A = l.childNodes, O = A.length, L = 0; L < O; ++L)
          w += a.subParser("makeMarkdown.node")(A[L], S, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(l) {
        var S = l.nodeValue;
        return S = S.replace(/ +/g, " "), S = S.replace(/¨NBSP;/g, " "), S = a.helper.unescapeHTMLEntities(S), S = S.replace(/([*_~|`])/g, "\\$1"), S = S.replace(/^(\s*)>/g, "\\$1>"), S = S.replace(/^#/gm, "\\#"), S = S.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), S = S.replace(/^( {0,3}\d+)\./gm, "$1\\."), S = S.replace(/^( {0,3})([+-])/gm, "$1\\$2"), S = S.replace(/]([\s]*)\(/g, "\\]$1\\("), S = S.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), S;
      });
      var P = this;
      n.exports ? n.exports = a : P.showdown = a;
    }).call(nw);
  })(dl)), dl.exports;
}
var aw = rw();
const iw = /* @__PURE__ */ Hf(aw);
var ta = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, a) {
      a === void 0 && (a = {});
      var u;
      typeof a == "function" ? (u = a, a = {}) : "callback" in a && (u = a.callback);
      var c = this.castInput(r, a), h = this.castInput(s, a), m = this.removeEmpty(this.tokenize(c, a)), f = this.removeEmpty(this.tokenize(h, a));
      return this.diffWithOptionsObj(m, f, a, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, a, u) {
      var c = this, h, m = function(l) {
        if (l = c.postProcess(l, a), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, f = s.length, g = r.length, v = 1, E = f + g;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var b = (h = a.timeout) !== null && h !== void 0 ? h : 1 / 0, _ = Date.now() + b, p = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(p[0], s, r, 0, a);
      if (p[0].oldPos + 1 >= g && C + 1 >= f)
        return m(this.buildValues(p[0].lastComponent, s, r));
      var T = -1 / 0, j = 1 / 0, k = function() {
        for (var l = Math.max(T, -v); l <= Math.min(j, v); l += 2) {
          var S = void 0, w = p[l - 1], A = p[l + 1];
          w && (p[l - 1] = void 0);
          var O = !1;
          if (A) {
            var L = A.oldPos - l;
            O = A && 0 <= L && L < f;
          }
          var M = w && w.oldPos + 1 < g;
          if (!O && !M) {
            p[l] = void 0;
            continue;
          }
          if (!M || O && w.oldPos < A.oldPos ? S = c.addToPath(A, !0, !1, 0, a) : S = c.addToPath(w, !1, !0, 1, a), C = c.extractCommon(S, s, r, l, a), S.oldPos + 1 >= g && C + 1 >= f)
            return m(c.buildValues(S.lastComponent, s, r)) || !0;
          p[l] = S, S.oldPos + 1 >= g && (j = Math.min(j, l - 1)), C + 1 >= f && (T = Math.max(T, l + 1));
        }
        v++;
      };
      if (u)
        (function l() {
          setTimeout(function() {
            if (v > E || Date.now() > _)
              return u(void 0);
            k() || l();
          }, 0);
        })();
      else
        for (; v <= E && Date.now() <= _; ) {
          var P = k();
          if (P)
            return P;
        }
    }, n.prototype.addToPath = function(r, s, a, u, c) {
      var h = r.lastComponent;
      return h && !c.oneChangePerToken && h.added === s && h.removed === a ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: h.count + 1, added: s, removed: a, previousComponent: h.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: a, previousComponent: h }
      };
    }, n.prototype.extractCommon = function(r, s, a, u, c) {
      for (var h = s.length, m = a.length, f = r.oldPos, g = f - u, v = 0; g + 1 < h && f + 1 < m && this.equals(a[f + 1], s[g + 1], c); )
        g++, f++, v++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return v && !c.oneChangePerToken && (r.lastComponent = { count: v, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = f, g;
    }, n.prototype.equals = function(r, s, a) {
      return a.comparator ? a.comparator(r, s) : r === s || !!a.ignoreCase && r.toLowerCase() === s.toLowerCase();
    }, n.prototype.removeEmpty = function(r) {
      for (var s = [], a = 0; a < r.length; a++)
        r[a] && s.push(r[a]);
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
    }), n.prototype.buildValues = function(r, s, a) {
      for (var u = [], c; r; )
        u.push(r), c = r.previousComponent, delete r.previousComponent, r = c;
      u.reverse();
      for (var h = u.length, m = 0, f = 0, g = 0; m < h; m++) {
        var v = u[m];
        if (v.removed)
          v.value = this.join(a.slice(g, g + v.count)), g += v.count;
        else {
          if (!v.added && this.useLongestToken) {
            var E = s.slice(f, f + v.count);
            E = E.map(function(b, _) {
              var p = a[g + _];
              return p.length > b.length ? p : b;
            }), v.value = this.join(E);
          } else
            v.value = this.join(s.slice(f, f + v.count));
          f += v.count, v.added || (g += v.count);
        }
      }
      return u;
    }, n;
  })()
), sw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), ow = (
  /** @class */
  (function(n) {
    sw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ta)
);
new ow();
function wy(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function Ey(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function jf(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function Lf(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function Gs(n, r) {
  return jf(n, r, "");
}
function Wu(n, r) {
  return Lf(n, r, "");
}
function Cy(n, r) {
  return r.slice(0, uw(n, r));
}
function uw(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var a = r.length;
  n.length < r.length && (a = n.length);
  var u = Array(a), c = 0;
  u[0] = 0;
  for (var h = 1; h < a; h++) {
    for (r[h] == r[c] ? u[h] = u[c] : u[h] = c; c > 0 && r[h] != r[c]; )
      c = u[c];
    r[h] == r[c] && c++;
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
function Fr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var a_ = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), wl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", lw = new RegExp("[".concat(wl, "]+|\\s+|[^").concat(wl, "]"), "ug"), cw = (
  /** @class */
  (function(n) {
    a_(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreCase && (s = s.toLowerCase(), a = a.toLowerCase()), s.trim() === a.trim();
    }, r.prototype.tokenize = function(s, a) {
      a === void 0 && (a = {});
      var u;
      if (a.intlSegmenter) {
        var c = a.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(s), function(f) {
          return f.segment;
        });
      } else
        u = s.match(lw) || [];
      var h = [], m = null;
      return u.forEach(function(f) {
        /\s/.test(f) ? m == null ? h.push(f) : h.push(h.pop() + f) : m != null && /\s/.test(m) ? h[h.length - 1] == m ? h.push(h.pop() + f) : h.push(m + f) : h.push(f), m = f;
      }), h;
    }, r.prototype.join = function(s) {
      return s.map(function(a, u) {
        return u == 0 ? a : a.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, a) {
      if (!s || a.oneChangePerToken)
        return s;
      var u = null, c = null, h = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? h = m : ((c || h) && Ay(u, h, c, m), u = m, c = null, h = null);
      }), (c || h) && Ay(u, h, c, null), s;
    }, r;
  })(ta)
), dw = new cw();
function i_(n, r, s) {
  return dw.diff(n, r, s);
}
function Ay(n, r, s, a) {
  if (r && s) {
    var u = Fr(r.value), c = Zs(r.value), h = Fr(s.value), m = Zs(s.value);
    if (n) {
      var f = wy(u, h);
      n.value = Lf(n.value, h, f), r.value = Gs(r.value, f), s.value = Gs(s.value, f);
    }
    if (a) {
      var g = Ey(c, m);
      a.value = jf(a.value, m, g), r.value = Wu(r.value, g), s.value = Wu(s.value, g);
    }
  } else if (s) {
    if (n) {
      var v = Fr(s.value);
      s.value = s.value.substring(v.length);
    }
    if (a) {
      var v = Fr(a.value);
      a.value = a.value.substring(v.length);
    }
  } else if (n && a) {
    var E = Fr(a.value), b = Fr(r.value), _ = Zs(r.value), p = wy(E, b);
    r.value = Gs(r.value, p);
    var C = Ey(Gs(E, p), _);
    r.value = Wu(r.value, C), a.value = jf(a.value, E, C), n.value = Lf(n.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var T = Fr(a.value), j = Zs(r.value), k = Cy(j, T);
    r.value = Wu(r.value, k);
  } else if (n) {
    var P = Zs(n.value), l = Fr(r.value), k = Cy(P, l);
    r.value = Gs(r.value, k);
  }
}
var fw = (
  /** @class */
  (function(n) {
    a_(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(wl, "]+|[^\\S\\n\\r]+|[^").concat(wl, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(ta)
);
new fw();
var hw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), pw = (
  /** @class */
  (function(n) {
    hw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = s_, s;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), n.prototype.equals.call(this, s, a, u);
    }, r;
  })(ta)
);
new pw();
function s_(n, r) {
  r.stripTrailingCr && (n = n.replace(/\r\n/g, `
`));
  var s = [], a = n.split(/(\n|\r\n)/);
  a[a.length - 1] || a.pop();
  for (var u = 0; u < a.length; u++) {
    var c = a[u];
    u % 2 && !r.newlineIsToken ? s[s.length - 1] += c : s.push(c);
  }
  return s;
}
var mw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), gw = (
  /** @class */
  (function(n) {
    mw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ta)
);
new gw();
var vw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), yw = (
  /** @class */
  (function(n) {
    vw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ta)
);
new yw();
var _w = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), bw = (
  /** @class */
  (function(n) {
    _w(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = s_, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, a) {
      var u = a.undefinedReplacement, c = a.stringifyReplacer, h = c === void 0 ? function(m, f) {
        return typeof f > "u" ? u : f;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Df(s, null, null, h), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(ta)
);
new bw();
function Df(n, r, s, a, u) {
  r = r || [], s = s || [], a && (n = a(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var h;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), h = new Array(n.length), s.push(h), c = 0; c < n.length; c += 1)
      h[c] = Df(n[c], r, s, a, String(c));
    return r.pop(), s.pop(), h;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), h = {}, s.push(h);
    var m = [], f;
    for (f in n)
      Object.prototype.hasOwnProperty.call(n, f) && m.push(f);
    for (m.sort(), c = 0; c < m.length; c += 1)
      f = m[c], h[f] = Df(n[f], r, s, a, f);
    r.pop(), s.pop();
  } else
    h = n;
  return h;
}
var Sw = /* @__PURE__ */ (function() {
  var n = function(r, s) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
      a.__proto__ = u;
    } || function(a, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
    }, n(r, s);
  };
  return function(r, s) {
    if (typeof s != "function" && s !== null)
      throw new TypeError("Class extends value " + String(s) + " is not a constructor or null");
    n(r, s);
    function a() {
      this.constructor = r;
    }
    r.prototype = s === null ? Object.create(s) : (a.prototype = s.prototype, new a());
  };
})(), ww = (
  /** @class */
  (function(n) {
    Sw(r, n);
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
  })(ta)
);
new ww();
const Ty = "en", ky = {
  en: {
    title: "Compare Changes",
    originalTitle: "Original Content",
    newTitle: "New Content (Suggestion)"
  },
  "zh-CN": {
    title: "对比修改",
    originalTitle: "原始内容",
    newTitle: "新内容（建议）"
  }
}, Ew = ({ originalEntry: n, newEntry: r }) => {
  const a = st.getSettings()?.language ?? Ty, u = ky[a] ?? ky[Ty], c = ae.useMemo(() => {
    const h = i_(n.content, r.content);
    let m = "", f = "";
    return h.forEach((g) => {
      const E = `<span style="${g.added ? "color: green; background-color: #e6ffed;" : g.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${g.value}</span>`;
      g.added || (m += E), g.removed || (f += E);
    }), { originalHtml: m, newHtml: f };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: u.title }),
    /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: u.originalTitle }),
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
            dangerouslySetInnerHTML: { __html: c.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: u.newTitle }),
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
            dangerouslySetInnerHTML: { __html: c.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, Cw = SillyTavern.getContext(), xy = "en", Ny = {
  en: {
    title: "Edit Suggestion",
    nameLabel: "Title",
    keywordsLabel: "Keywords (comma-separated)",
    applyRegexTitle: "Apply Regex Scripts",
    regexPlaceholder: "Select regex scripts...",
    simulateButton: "Simulate Regex",
    contentPlaceholder: "Resulting content..."
  },
  "zh-CN": {
    title: "编辑建议条目",
    nameLabel: "标题",
    keywordsLabel: "触发词（以逗号分隔）",
    applyRegexTitle: "应用正则脚本",
    regexPlaceholder: "请选择要应用的正则脚本…",
    simulateButton: "模拟应用正则",
    contentPlaceholder: "最终内容预览…"
  }
}, Aw = ae.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [a, u] = ae.useState([]), [c, h] = ae.useState(n.comment), [m, f] = ae.useState(n.key.join(", ")), [g, v] = ae.useState(n.content), [E, b] = ae.useState([]), p = st.getSettings()?.language ?? xy, C = Ny[p] ?? Ny[xy];
  ae.useEffect(() => {
    const l = Cw.extensionSettings.regex ?? [];
    u(l);
    const S = Object.entries(r).map(([w, A]) => {
      const O = l.find((L) => L.id === w);
      return O ? { id: O.id, label: O.scriptName, enabled: !A?.disabled } : null;
    }).filter((w) => w !== null);
    b(S);
  }, [r]), ae.useImperativeHandle(s, () => ({
    getFormData: () => {
      const l = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((w) => w.trim()).filter(Boolean),
        content: g
      }, S = E.reduce(
        (w, A) => (w[A.id] = { disabled: !A.enabled }, w),
        {}
      );
      return { updatedEntry: l, updatedRegexIds: S };
    }
  }));
  const T = ae.useMemo(
    () => a.map((l) => ({ value: l.id, label: l.scriptName })),
    [a]
  ), j = ae.useMemo(() => E.map((l) => l.id), [E]), k = ae.useCallback(() => {
    let l = n.content;
    const S = E.filter((w) => w.enabled);
    for (const w of S) {
      const A = a.find((O) => O.id === w.id);
      A && (l = T3(A, l));
    }
    v(l);
  }, [E, a, n.content]), P = (l) => {
    const S = l.map((w) => {
      const A = E.find((L) => L.id === w);
      if (A) return A;
      const O = a.find((L) => L.id === w);
      return O ? { id: O.id, label: O.scriptName, enabled: !0 } : null;
    }).filter((w) => w !== null);
    b(S);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: C.title }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: C.nameLabel }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (l) => h(l.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: C.keywordsLabel }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (l) => f(l.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("h4", { children: C.applyRegexTitle }),
      /* @__PURE__ */ N.jsx(
        t_,
        {
          items: T,
          value: j,
          onChange: P,
          multiple: !0,
          enableSearch: !0,
          placeholder: C.regexPlaceholder
        }
      ),
      E.length > 0 && /* @__PURE__ */ N.jsx(
        e_,
        {
          items: E,
          onItemsChange: b,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(Le, { onClick: k, className: "menu_button", children: C.simulateButton }),
    /* @__PURE__ */ N.jsx(
      br,
      {
        value: g,
        onChange: (l) => v(l.target.value),
        rows: 8,
        placeholder: C.contentPlaceholder
      }
    )
  ] });
});
function ce(n, r, s) {
  function a(m, f) {
    var g;
    Object.defineProperty(m, "_zod", {
      value: m._zod ?? {},
      enumerable: !1
    }), (g = m._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), m._zod.traits.add(n), r(m, f);
    for (const v in h.prototype)
      v in m || Object.defineProperty(m, v, { value: h.prototype[v].bind(m) });
    m._zod.constr = h, m._zod.def = f;
  }
  const u = s?.Parent ?? Object;
  class c extends u {
  }
  Object.defineProperty(c, "name", { value: n });
  function h(m) {
    var f;
    const g = s?.Parent ? new c() : this;
    a(g, m), (f = g._zod).deferred ?? (f.deferred = []);
    for (const v of g._zod.deferred)
      v();
    return g;
  }
  return Object.defineProperty(h, "init", { value: a }), Object.defineProperty(h, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(h, "name", { value: n }), h;
}
class Li extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class o_ extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const u_ = {};
function Ra(n) {
  return u_;
}
function l_(n) {
  const r = Object.values(n).filter((a) => typeof a == "number");
  return Object.entries(n).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function zf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Kf(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Jf(n) {
  return n == null;
}
function Wf(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const Oy = Symbol("evaluating");
function ot(n, r, s) {
  let a;
  Object.defineProperty(n, r, {
    get() {
      if (a !== Oy)
        return a === void 0 && (a = Oy, a = s()), a;
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
function La(n, r, s) {
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
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function My(n) {
  return JSON.stringify(n);
}
const c_ = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function El(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const Tw = Kf(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const n = Function;
    return new n(""), !0;
  } catch {
    return !1;
  }
});
function to(n) {
  if (El(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(El(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function d_(n) {
  return to(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const kw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Nl(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function na(n, r, s) {
  const a = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (a._zod.parent = n), a;
}
function ze(n) {
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
function xw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function Nw(n, r) {
  const s = n._zod.def, a = Da(n._zod.def, {
    get shape() {
      const u = {};
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && (u[c] = s.shape[c]);
      }
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return na(n, a);
}
function Ow(n, r) {
  const s = n._zod.def, a = Da(n._zod.def, {
    get shape() {
      const u = { ...n._zod.def.shape };
      for (const c in r) {
        if (!(c in s.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        r[c] && delete u[c];
      }
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return na(n, a);
}
function Mw(n, r) {
  if (!to(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const s = n._zod.def.checks;
  if (s && s.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const u = Da(n._zod.def, {
    get shape() {
      const c = { ...n._zod.def.shape, ...r };
      return La(this, "shape", c), c;
    },
    checks: []
  });
  return na(n, u);
}
function Rw(n, r) {
  if (!to(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const a = { ...n._zod.def.shape, ...r };
      return La(this, "shape", a), a;
    },
    checks: n._zod.def.checks
  };
  return na(n, s);
}
function jw(n, r) {
  const s = Da(n._zod.def, {
    get shape() {
      const a = { ...n._zod.def.shape, ...r._zod.def.shape };
      return La(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return na(n, s);
}
function Lw(n, r, s) {
  const a = Da(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const h in s) {
          if (!(h in u))
            throw new Error(`Unrecognized key: "${h}"`);
          s[h] && (c[h] = n ? new n({
            type: "optional",
            innerType: u[h]
          }) : u[h]);
        }
      else
        for (const h in u)
          c[h] = n ? new n({
            type: "optional",
            innerType: u[h]
          }) : u[h];
      return La(this, "shape", c), c;
    },
    checks: []
  });
  return na(r, a);
}
function Dw(n, r, s) {
  const a = Da(r._zod.def, {
    get shape() {
      const u = r._zod.def.shape, c = { ...u };
      if (s)
        for (const h in s) {
          if (!(h in c))
            throw new Error(`Unrecognized key: "${h}"`);
          s[h] && (c[h] = new n({
            type: "nonoptional",
            innerType: u[h]
          }));
        }
      else
        for (const h in u)
          c[h] = new n({
            type: "nonoptional",
            innerType: u[h]
          });
      return La(this, "shape", c), c;
    },
    checks: []
  });
  return na(r, a);
}
function Ri(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function f_(n, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(n), s;
  });
}
function el(n) {
  return typeof n == "string" ? n : n?.message;
}
function ja(n, r, s) {
  const a = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = el(n.inst?._zod.def?.error?.(n)) ?? el(r?.error?.(n)) ?? el(s.customError?.(n)) ?? el(s.localeError?.(n)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function eh(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function no(...n) {
  const [r, s, a] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: s,
    inst: a
  } : { ...r };
}
const h_ = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, zf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, p_ = ce("$ZodError", h_), m_ = ce("$ZodError", h_, { Parent: Error });
function zw(n, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function Pw(n, r = (s) => s.message) {
  const s = { _errors: [] }, a = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((h) => a({ issues: h }));
      else if (c.code === "invalid_key")
        a({ issues: c.issues });
      else if (c.code === "invalid_element")
        a({ issues: c.issues });
      else if (c.path.length === 0)
        s._errors.push(r(c));
      else {
        let h = s, m = 0;
        for (; m < c.path.length; ) {
          const f = c.path[m];
          m === c.path.length - 1 ? (h[f] = h[f] || { _errors: [] }, h[f]._errors.push(r(c))) : h[f] = h[f] || { _errors: [] }, h = h[f], m++;
        }
      }
  };
  return a(n), s;
}
const th = (n) => (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !1 }) : { async: !1 }, h = r._zod.run({ value: s, issues: [] }, c);
  if (h instanceof Promise)
    throw new Li();
  if (h.issues.length) {
    const m = new (u?.Err ?? n)(h.issues.map((f) => ja(f, c, Ra())));
    throw c_(m, u?.callee), m;
  }
  return h.value;
}, nh = (n) => async (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let h = r._zod.run({ value: s, issues: [] }, c);
  if (h instanceof Promise && (h = await h), h.issues.length) {
    const m = new (u?.Err ?? n)(h.issues.map((f) => ja(f, c, Ra())));
    throw c_(m, u?.callee), m;
  }
  return h.value;
}, Ol = (n) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Li();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? p_)(c.issues.map((h) => ja(h, u, Ra())))
  } : { success: !0, data: c.value };
}, Iw = /* @__PURE__ */ Ol(m_), Ml = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((h) => ja(h, u, Ra())))
  } : { success: !0, data: c.value };
}, Bw = /* @__PURE__ */ Ml(m_), Uw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return th(n)(r, s, u);
}, Hw = (n) => (r, s, a) => th(n)(r, s, a), qw = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return nh(n)(r, s, u);
}, Gw = (n) => async (r, s, a) => nh(n)(r, s, a), Zw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Ol(n)(r, s, u);
}, Vw = (n) => (r, s, a) => Ol(n)(r, s, a), $w = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Ml(n)(r, s, u);
}, Yw = (n) => async (r, s, a) => Ml(n)(r, s, a), Fw = /^[cC][^\s-]{8,}$/, Xw = /^[0-9a-z]+$/, Qw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Kw = /^[0-9a-vA-V]{20}$/, Jw = /^[A-Za-z0-9]{27}$/, Ww = /^[a-zA-Z0-9_-]{21}$/, eE = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, tE = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ry = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, nE = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, rE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function aE() {
  return new RegExp(rE, "u");
}
const iE = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, sE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, oE = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, uE = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lE = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, g_ = /^[A-Za-z0-9_-]*$/, cE = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, dE = /^\+(?:[0-9]){6,14}[0-9]$/, v_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", fE = /* @__PURE__ */ new RegExp(`^${v_}$`);
function y_(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function hE(n) {
  return new RegExp(`^${y_(n)}$`);
}
function pE(n) {
  const r = y_({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${v_}T(?:${a})$`);
}
const mE = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, gE = /^[^A-Z]*$/, vE = /^[^a-z]*$/, er = /* @__PURE__ */ ce("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), yE = /* @__PURE__ */ ce("$ZodCheckMaxLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const h = eh(u);
    a.issues.push({
      origin: h,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), _E = /* @__PURE__ */ ce("$ZodCheckMinLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const h = eh(u);
    a.issues.push({
      origin: h,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), bE = /* @__PURE__ */ ce("$ZodCheckLengthEquals", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Jf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (a) => {
    const u = a.value, c = u.length;
    if (c === r.length)
      return;
    const h = eh(u), m = c > r.length;
    a.issues.push({
      origin: h,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Rl = /* @__PURE__ */ ce("$ZodCheckStringFormat", (n, r) => {
  var s, a;
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
  }) : (a = n._zod).check ?? (a.check = () => {
  });
}), SE = /* @__PURE__ */ ce("$ZodCheckRegex", (n, r) => {
  Rl.init(n, r), n._zod.check = (s) => {
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
}), wE = /* @__PURE__ */ ce("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = gE), Rl.init(n, r);
}), EE = /* @__PURE__ */ ce("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = vE), Rl.init(n, r);
}), CE = /* @__PURE__ */ ce("$ZodCheckIncludes", (n, r) => {
  er.init(n, r);
  const s = Nl(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
  r.pattern = a, n._zod.onattach.push((u) => {
    const c = u._zod.bag;
    c.patterns ?? (c.patterns = /* @__PURE__ */ new Set()), c.patterns.add(a);
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
}), AE = /* @__PURE__ */ ce("$ZodCheckStartsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`^${Nl(r.prefix)}.*`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (a) => {
    a.value.startsWith(r.prefix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), TE = /* @__PURE__ */ ce("$ZodCheckEndsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`.*${Nl(r.suffix)}$`);
  r.pattern ?? (r.pattern = s), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (a) => {
    a.value.endsWith(r.suffix) || a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), kE = /* @__PURE__ */ ce("$ZodCheckOverwrite", (n, r) => {
  er.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class xE {
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
    const a = r.split(`
`).filter((h) => h), u = Math.min(...a.map((h) => h.length - h.trimStart().length)), c = a.map((h) => h.slice(u)).map((h) => " ".repeat(this.indent * 2) + h);
    for (const h of c)
      this.content.push(h);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const NE = {
  major: 4,
  minor: 1,
  patch: 12
}, Nt = /* @__PURE__ */ ce("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = NE;
  const a = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && a.unshift(n);
  for (const u of a)
    for (const c of u._zod.onattach)
      c(n);
  if (a.length === 0)
    (s = n._zod).deferred ?? (s.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const u = (h, m, f) => {
      let g = Ri(h), v;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(h))
            continue;
        } else if (g)
          continue;
        const b = h.issues.length, _ = E._zod.check(h);
        if (_ instanceof Promise && f?.async === !1)
          throw new Li();
        if (v || _ instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await _, h.issues.length !== b && (g || (g = Ri(h, b)));
          });
        else {
          if (h.issues.length === b)
            continue;
          g || (g = Ri(h, b));
        }
      }
      return v ? v.then(() => h) : h;
    }, c = (h, m, f) => {
      if (Ri(h))
        return h.aborted = !0, h;
      const g = u(m, a, f);
      if (g instanceof Promise) {
        if (f.async === !1)
          throw new Li();
        return g.then((v) => n._zod.parse(v, f));
      }
      return n._zod.parse(g, f);
    };
    n._zod.run = (h, m) => {
      if (m.skipChecks)
        return n._zod.parse(h, m);
      if (m.direction === "backward") {
        const g = n._zod.parse({ value: h.value, issues: [] }, { ...m, skipChecks: !0 });
        return g instanceof Promise ? g.then((v) => c(v, h, m)) : c(g, h, m);
      }
      const f = n._zod.parse(h, m);
      if (f instanceof Promise) {
        if (m.async === !1)
          throw new Li();
        return f.then((g) => u(g, a, m));
      }
      return u(f, a, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = Iw(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Bw(n, u).then((h) => h.success ? { value: h.data } : { issues: h.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), rh = /* @__PURE__ */ ce("$ZodString", (n, r) => {
  Nt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? mE(n._zod.bag), n._zod.parse = (s, a) => {
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
}), ft = /* @__PURE__ */ ce("$ZodStringFormat", (n, r) => {
  Rl.init(n, r), rh.init(n, r);
}), OE = /* @__PURE__ */ ce("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = tE), ft.init(n, r);
}), ME = /* @__PURE__ */ ce("$ZodUUID", (n, r) => {
  if (r.version) {
    const a = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (a === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = Ry(a));
  } else
    r.pattern ?? (r.pattern = Ry());
  ft.init(n, r);
}), RE = /* @__PURE__ */ ce("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = nE), ft.init(n, r);
}), jE = /* @__PURE__ */ ce("$ZodURL", (n, r) => {
  ft.init(n, r), n._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: cE.source,
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
      })), r.normalize ? s.value = u.href : s.value = a;
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
}), LE = /* @__PURE__ */ ce("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = aE()), ft.init(n, r);
}), DE = /* @__PURE__ */ ce("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Ww), ft.init(n, r);
}), zE = /* @__PURE__ */ ce("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Fw), ft.init(n, r);
}), PE = /* @__PURE__ */ ce("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = Xw), ft.init(n, r);
}), IE = /* @__PURE__ */ ce("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Qw), ft.init(n, r);
}), BE = /* @__PURE__ */ ce("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Kw), ft.init(n, r);
}), UE = /* @__PURE__ */ ce("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = Jw), ft.init(n, r);
}), HE = /* @__PURE__ */ ce("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = pE(r)), ft.init(n, r);
}), qE = /* @__PURE__ */ ce("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = fE), ft.init(n, r);
}), GE = /* @__PURE__ */ ce("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = hE(r)), ft.init(n, r);
}), ZE = /* @__PURE__ */ ce("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = eE), ft.init(n, r);
}), VE = /* @__PURE__ */ ce("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = iE), ft.init(n, r), n._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), $E = /* @__PURE__ */ ce("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = sE), ft.init(n, r), n._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv6";
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
}), YE = /* @__PURE__ */ ce("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = oE), ft.init(n, r);
}), FE = /* @__PURE__ */ ce("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = uE), ft.init(n, r), n._zod.check = (s) => {
    const a = s.value.split("/");
    try {
      if (a.length !== 2)
        throw new Error();
      const [u, c] = a;
      if (!c)
        throw new Error();
      const h = Number(c);
      if (`${h}` !== c)
        throw new Error();
      if (h < 0 || h > 128)
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
function __(n) {
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
const XE = /* @__PURE__ */ ce("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = lE), ft.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    __(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function QE(n) {
  if (!g_.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return __(s);
}
const KE = /* @__PURE__ */ ce("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = g_), ft.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    QE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), JE = /* @__PURE__ */ ce("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = dE), ft.init(n, r);
});
function WE(n, r = null) {
  try {
    const s = n.split(".");
    if (s.length !== 3)
      return !1;
    const [a] = s;
    if (!a)
      return !1;
    const u = JSON.parse(atob(a));
    return !("typ" in u && u?.typ !== "JWT" || !u.alg || r && (!("alg" in u) || u.alg !== r));
  } catch {
    return !1;
  }
}
const eC = /* @__PURE__ */ ce("$ZodJWT", (n, r) => {
  ft.init(n, r), n._zod.check = (s) => {
    WE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), tC = /* @__PURE__ */ ce("$ZodUnknown", (n, r) => {
  Nt.init(n, r), n._zod.parse = (s) => s;
}), nC = /* @__PURE__ */ ce("$ZodNever", (n, r) => {
  Nt.init(n, r), n._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function jy(n, r, s) {
  n.issues.length && r.issues.push(...f_(s, n.issues)), r.value[s] = n.value;
}
const rC = /* @__PURE__ */ ce("$ZodArray", (n, r) => {
  Nt.init(n, r), n._zod.parse = (s, a) => {
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
    for (let h = 0; h < u.length; h++) {
      const m = u[h], f = r.element._zod.run({
        value: m,
        issues: []
      }, a);
      f instanceof Promise ? c.push(f.then((g) => jy(g, s, h))) : jy(f, s, h);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function Cl(n, r, s, a) {
  n.issues.length && r.issues.push(...f_(s, n.issues)), n.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = n.value;
}
function b_(n) {
  const r = Object.keys(n.shape);
  for (const a of r)
    if (!n.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = xw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function S_(n, r, s, a, u, c) {
  const h = [], m = u.keySet, f = u.catchall._zod, g = f.def.type;
  for (const v of Object.keys(r)) {
    if (m.has(v))
      continue;
    if (g === "never") {
      h.push(v);
      continue;
    }
    const E = f.run({ value: r[v], issues: [] }, a);
    E instanceof Promise ? n.push(E.then((b) => Cl(b, s, v, r))) : Cl(E, s, v, r);
  }
  return h.length && s.issues.push({
    code: "unrecognized_keys",
    keys: h,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const aC = /* @__PURE__ */ ce("$ZodObject", (n, r) => {
  if (Nt.init(n, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const m = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const f = { ...m };
        return Object.defineProperty(r, "shape", {
          value: f
        }), f;
      }
    });
  }
  const a = Kf(() => b_(r));
  ot(n._zod, "propValues", () => {
    const m = r.shape, f = {};
    for (const g in m) {
      const v = m[g]._zod;
      if (v.values) {
        f[g] ?? (f[g] = /* @__PURE__ */ new Set());
        for (const E of v.values)
          f[g].add(E);
      }
    }
    return f;
  });
  const u = El, c = r.catchall;
  let h;
  n._zod.parse = (m, f) => {
    h ?? (h = a.value);
    const g = m.value;
    if (!u(g))
      return m.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: n
      }), m;
    m.value = {};
    const v = [], E = h.shape;
    for (const b of h.keys) {
      const p = E[b]._zod.run({ value: g[b], issues: [] }, f);
      p instanceof Promise ? v.push(p.then((C) => Cl(C, m, b, g))) : Cl(p, m, b, g);
    }
    return c ? S_(v, g, m, f, a.value, n) : v.length ? Promise.all(v).then(() => m) : m;
  };
}), iC = /* @__PURE__ */ ce("$ZodObjectJIT", (n, r) => {
  aC.init(n, r);
  const s = n._zod.parse, a = Kf(() => b_(r)), u = (b) => {
    const _ = new xE(["shape", "payload", "ctx"]), p = a.value, C = (P) => {
      const l = My(P);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    _.write("const input = payload.value;");
    const T = /* @__PURE__ */ Object.create(null);
    let j = 0;
    for (const P of p.keys)
      T[P] = `key_${j++}`;
    _.write("const newResult = {};");
    for (const P of p.keys) {
      const l = T[P], S = My(P);
      _.write(`const ${l} = ${C(P)};`), _.write(`
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
    _.write("payload.value = newResult;"), _.write("return payload;");
    const k = _.compile();
    return (P, l) => k(b, P, l);
  };
  let c;
  const h = El, m = !u_.jitless, g = m && Tw.value, v = r.catchall;
  let E;
  n._zod.parse = (b, _) => {
    E ?? (E = a.value);
    const p = b.value;
    return h(p) ? m && g && _?.async === !1 && _.jitless !== !0 ? (c || (c = u(r.shape)), b = c(b, _), v ? S_([], p, b, _, E, n) : b) : s(b, _) : (b.issues.push({
      expected: "object",
      code: "invalid_type",
      input: p,
      inst: n
    }), b);
  };
});
function Ly(n, r, s, a) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !Ri(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((h) => ja(h, a, Ra())))
  }), r);
}
const sC = /* @__PURE__ */ ce("$ZodUnion", (n, r) => {
  Nt.init(n, r), ot(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), ot(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), ot(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), ot(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => Wf(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return a(u, c);
    let h = !1;
    const m = [];
    for (const f of r.options) {
      const g = f._zod.run({
        value: u.value,
        issues: []
      }, c);
      if (g instanceof Promise)
        m.push(g), h = !0;
      else {
        if (g.issues.length === 0)
          return g;
        m.push(g);
      }
    }
    return h ? Promise.all(m).then((f) => Ly(f, u, n, c)) : Ly(m, u, n, c);
  };
}), oC = /* @__PURE__ */ ce("$ZodIntersection", (n, r) => {
  Nt.init(n, r), n._zod.parse = (s, a) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, a), h = r.right._zod.run({ value: u, issues: [] }, a);
    return c instanceof Promise || h instanceof Promise ? Promise.all([c, h]).then(([f, g]) => Dy(s, f, g)) : Dy(s, c, h);
  };
});
function Pf(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (to(n) && to(r)) {
    const s = Object.keys(r), a = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of a) {
      const h = Pf(n[c], r[c]);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...h.mergeErrorPath]
        };
      u[c] = h.data;
    }
    return { valid: !0, data: u };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const s = [];
    for (let a = 0; a < n.length; a++) {
      const u = n[a], c = r[a], h = Pf(u, c);
      if (!h.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...h.mergeErrorPath]
        };
      s.push(h.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Dy(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), Ri(n))
    return n;
  const a = Pf(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return n.value = a.data, n;
}
const uC = /* @__PURE__ */ ce("$ZodEnum", (n, r) => {
  Nt.init(n, r);
  const s = l_(r.entries), a = new Set(s);
  n._zod.values = a, n._zod.pattern = new RegExp(`^(${s.filter((u) => kw.has(typeof u)).map((u) => typeof u == "string" ? Nl(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const h = u.value;
    return a.has(h) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: h,
      inst: n
    }), u;
  };
}), lC = /* @__PURE__ */ ce("$ZodTransform", (n, r) => {
  Nt.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new o_(n.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((h) => (s.value = h, s));
    if (u instanceof Promise)
      throw new Li();
    return s.value = u, s;
  };
});
function zy(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const cC = /* @__PURE__ */ ce("$ZodOptional", (n, r) => {
  Nt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", ot(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), ot(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Wf(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((c) => zy(c, s.value)) : zy(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), dC = /* @__PURE__ */ ce("$ZodNullable", (n, r) => {
  Nt.init(n, r), ot(n._zod, "optin", () => r.innerType._zod.optin), ot(n._zod, "optout", () => r.innerType._zod.optout), ot(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Wf(s.source)}|null)$`) : void 0;
  }), ot(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), fC = /* @__PURE__ */ ce("$ZodDefault", (n, r) => {
  Nt.init(n, r), n._zod.optin = "optional", ot(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Py(c, r)) : Py(u, r);
  };
});
function Py(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const hC = /* @__PURE__ */ ce("$ZodPrefault", (n, r) => {
  Nt.init(n, r), n._zod.optin = "optional", ot(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), pC = /* @__PURE__ */ ce("$ZodNonOptional", (n, r) => {
  Nt.init(n, r), ot(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), n._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => Iy(c, n)) : Iy(u, n);
  };
});
function Iy(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const mC = /* @__PURE__ */ ce("$ZodCatch", (n, r) => {
  Nt.init(n, r), ot(n._zod, "optin", () => r.innerType._zod.optin), ot(n._zod, "optout", () => r.innerType._zod.optout), ot(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((h) => ja(h, a, Ra()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => ja(c, a, Ra()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), gC = /* @__PURE__ */ ce("$ZodPipe", (n, r) => {
  Nt.init(n, r), ot(n._zod, "values", () => r.in._zod.values), ot(n._zod, "optin", () => r.in._zod.optin), ot(n._zod, "optout", () => r.out._zod.optout), ot(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const c = r.out._zod.run(s, a);
      return c instanceof Promise ? c.then((h) => tl(h, r.in, a)) : tl(c, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => tl(c, r.out, a)) : tl(u, r.out, a);
  };
});
function tl(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const vC = /* @__PURE__ */ ce("$ZodReadonly", (n, r) => {
  Nt.init(n, r), ot(n._zod, "propValues", () => r.innerType._zod.propValues), ot(n._zod, "values", () => r.innerType._zod.values), ot(n._zod, "optin", () => r.innerType._zod.optin), ot(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(By) : By(u);
  };
});
function By(n) {
  return n.value = Object.freeze(n.value), n;
}
const yC = /* @__PURE__ */ ce("$ZodCustom", (n, r) => {
  er.init(n, r), Nt.init(n, r), n._zod.parse = (s, a) => s, n._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((c) => Uy(c, s, a, n));
    Uy(u, s, a, n);
  };
});
function Uy(n, r, s, a) {
  if (!n) {
    const u = {
      code: "custom",
      input: s,
      inst: a,
      // incorporates params.error into issue reporting
      path: [...a._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !a._zod.def.abort
      // params: inst._zod.def.params,
    };
    a._zod.def.params && (u.params = a._zod.def.params), r.issues.push(no(u));
  }
}
class w_ {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...s) {
    const a = s[0];
    if (this._map.set(r, a), a && typeof a == "object" && "id" in a) {
      if (this._idmap.has(a.id))
        throw new Error(`ID ${a.id} already exists in the registry`);
      this._idmap.set(a.id, r);
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
      const a = { ...this.get(s) ?? {} };
      delete a.id;
      const u = { ...a, ...this._map.get(r) };
      return Object.keys(u).length ? u : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function _C() {
  return new w_();
}
const Fs = /* @__PURE__ */ _C();
function bC(n, r) {
  return new n({
    type: "string",
    ...ze(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function Hy(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ze(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ze(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ze(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function OC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function MC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function RC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function jC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function LC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function DC(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function zC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function PC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function IC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function BC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function UC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function HC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ze(r)
  });
}
function qC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ze(r)
  });
}
function GC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...ze(r)
  });
}
function ZC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ze(r)
  });
}
function VC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ze(r)
  });
}
function $C(n) {
  return new n({
    type: "unknown"
  });
}
function YC(n, r) {
  return new n({
    type: "never",
    ...ze(r)
  });
}
function E_(n, r) {
  return new yE({
    check: "max_length",
    ...ze(r),
    maximum: n
  });
}
function Al(n, r) {
  return new _E({
    check: "min_length",
    ...ze(r),
    minimum: n
  });
}
function C_(n, r) {
  return new bE({
    check: "length_equals",
    ...ze(r),
    length: n
  });
}
function FC(n, r) {
  return new SE({
    check: "string_format",
    format: "regex",
    ...ze(r),
    pattern: n
  });
}
function XC(n) {
  return new wE({
    check: "string_format",
    format: "lowercase",
    ...ze(n)
  });
}
function QC(n) {
  return new EE({
    check: "string_format",
    format: "uppercase",
    ...ze(n)
  });
}
function KC(n, r) {
  return new CE({
    check: "string_format",
    format: "includes",
    ...ze(r),
    includes: n
  });
}
function JC(n, r) {
  return new AE({
    check: "string_format",
    format: "starts_with",
    ...ze(r),
    prefix: n
  });
}
function WC(n, r) {
  return new TE({
    check: "string_format",
    format: "ends_with",
    ...ze(r),
    suffix: n
  });
}
function so(n) {
  return new kE({
    check: "overwrite",
    tx: n
  });
}
function e4(n) {
  return so((r) => r.normalize(n));
}
function t4() {
  return so((n) => n.trim());
}
function n4() {
  return so((n) => n.toLowerCase());
}
function r4() {
  return so((n) => n.toUpperCase());
}
function a4(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ze(s)
  });
}
function i4(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...ze(s)
  });
}
function s4(n) {
  const r = o4((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(no(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(no(u));
    }
  }, n(s.value, s)));
  return r;
}
function o4(n, r) {
  const s = new er({
    check: "custom",
    ...ze(r)
  });
  return s._zod.check = n, s;
}
class qy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Fs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, s = { path: [], schemaPath: [] }) {
    var a;
    const u = r._zod.def, c = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, h = this.seen.get(r);
    if (h)
      return h.count++, s.schemaPath.includes(r) && (h.cycle = s.path), h.schema;
    const m = { schema: {}, count: 1, cycle: void 0, path: s.path };
    this.seen.set(r, m);
    const f = r._zod.toJSONSchema?.();
    if (f)
      m.schema = f;
    else {
      const E = {
        ...s,
        schemaPath: [...s.schemaPath, r],
        path: s.path
      }, b = r._zod.parent;
      if (b)
        m.ref = b, this.process(b, E), this.seen.get(b).isParent = !0;
      else {
        const _ = m.schema;
        switch (u.type) {
          case "string": {
            const p = _;
            p.type = "string";
            const { minimum: C, maximum: T, format: j, patterns: k, contentEncoding: P } = r._zod.bag;
            if (typeof C == "number" && (p.minLength = C), typeof T == "number" && (p.maxLength = T), j && (p.format = c[j] ?? j, p.format === "" && delete p.format), P && (p.contentEncoding = P), k && k.size > 0) {
              const l = [...k];
              l.length === 1 ? p.pattern = l[0].source : l.length > 1 && (m.schema.allOf = [
                ...l.map((S) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: S.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const p = _, { minimum: C, maximum: T, format: j, multipleOf: k, exclusiveMaximum: P, exclusiveMinimum: l } = r._zod.bag;
            typeof j == "string" && j.includes("int") ? p.type = "integer" : p.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (p.minimum = l, p.exclusiveMinimum = !0) : p.exclusiveMinimum = l), typeof C == "number" && (p.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete p.minimum : delete p.exclusiveMinimum)), typeof P == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (p.maximum = P, p.exclusiveMaximum = !0) : p.exclusiveMaximum = P), typeof T == "number" && (p.maximum = T, typeof P == "number" && this.target !== "draft-4" && (P <= T ? delete p.maximum : delete p.exclusiveMaximum)), typeof k == "number" && (p.multipleOf = k);
            break;
          }
          case "boolean": {
            const p = _;
            p.type = "boolean";
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
            this.target === "openapi-3.0" ? (_.type = "string", _.nullable = !0, _.enum = [null]) : _.type = "null";
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
            _.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const p = _, { minimum: C, maximum: T } = r._zod.bag;
            typeof C == "number" && (p.minItems = C), typeof T == "number" && (p.maxItems = T), p.type = "array", p.items = this.process(u.element, { ...E, path: [...E.path, "items"] });
            break;
          }
          case "object": {
            const p = _;
            p.type = "object", p.properties = {};
            const C = u.shape;
            for (const k in C)
              p.properties[k] = this.process(C[k], {
                ...E,
                path: [...E.path, "properties", k]
              });
            const T = new Set(Object.keys(C)), j = new Set([...T].filter((k) => {
              const P = u.shape[k]._zod;
              return this.io === "input" ? P.optin === void 0 : P.optout === void 0;
            }));
            j.size > 0 && (p.required = Array.from(j)), u.catchall?._zod.def.type === "never" ? p.additionalProperties = !1 : u.catchall ? u.catchall && (p.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (p.additionalProperties = !1);
            break;
          }
          case "union": {
            const p = _, C = u.options.map((T, j) => this.process(T, {
              ...E,
              path: [...E.path, "anyOf", j]
            }));
            p.anyOf = C;
            break;
          }
          case "intersection": {
            const p = _, C = this.process(u.left, {
              ...E,
              path: [...E.path, "allOf", 0]
            }), T = this.process(u.right, {
              ...E,
              path: [...E.path, "allOf", 1]
            }), j = (P) => "allOf" in P && Object.keys(P).length === 1, k = [
              ...j(C) ? C.allOf : [C],
              ...j(T) ? T.allOf : [T]
            ];
            p.allOf = k;
            break;
          }
          case "tuple": {
            const p = _;
            p.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", T = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", j = u.items.map((S, w) => this.process(S, {
              ...E,
              path: [...E.path, C, w]
            })), k = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, T, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (p.prefixItems = j, k && (p.items = k)) : this.target === "openapi-3.0" ? (p.items = {
              anyOf: j
            }, k && p.items.anyOf.push(k), p.minItems = j.length, k || (p.maxItems = j.length)) : (p.items = j, k && (p.additionalItems = k));
            const { minimum: P, maximum: l } = r._zod.bag;
            typeof P == "number" && (p.minItems = P), typeof l == "number" && (p.maxItems = l);
            break;
          }
          case "record": {
            const p = _;
            p.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (p.propertyNames = this.process(u.keyType, {
              ...E,
              path: [...E.path, "propertyNames"]
            })), p.additionalProperties = this.process(u.valueType, {
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
            const p = _, C = l_(u.entries);
            C.every((T) => typeof T == "number") && (p.type = "number"), C.every((T) => typeof T == "string") && (p.type = "string"), p.enum = C;
            break;
          }
          case "literal": {
            const p = _, C = [];
            for (const T of u.values)
              if (T === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof T == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                C.push(Number(T));
              } else
                C.push(T);
            if (C.length !== 0) if (C.length === 1) {
              const T = C[0];
              p.type = T === null ? "null" : typeof T, this.target === "draft-4" || this.target === "openapi-3.0" ? p.enum = [T] : p.const = T;
            } else
              C.every((T) => typeof T == "number") && (p.type = "number"), C.every((T) => typeof T == "string") && (p.type = "string"), C.every((T) => typeof T == "boolean") && (p.type = "string"), C.every((T) => T === null) && (p.type = "null"), p.enum = C;
            break;
          }
          case "file": {
            const p = _, C = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: T, maximum: j, mime: k } = r._zod.bag;
            T !== void 0 && (C.minLength = T), j !== void 0 && (C.maxLength = j), k ? k.length === 1 ? (C.contentMediaType = k[0], Object.assign(p, C)) : p.anyOf = k.map((P) => ({ ...C, contentMediaType: P })) : Object.assign(p, C);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const p = this.process(u.innerType, E);
            this.target === "openapi-3.0" ? (m.ref = u.innerType, _.nullable = !0) : _.anyOf = [p, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(u.innerType, E), m.ref = u.innerType;
            break;
          }
          case "success": {
            const p = _;
            p.type = "boolean";
            break;
          }
          case "default": {
            this.process(u.innerType, E), m.ref = u.innerType, _.default = JSON.parse(JSON.stringify(u.defaultValue));
            break;
          }
          case "prefault": {
            this.process(u.innerType, E), m.ref = u.innerType, this.io === "input" && (_._prefault = JSON.parse(JSON.stringify(u.defaultValue)));
            break;
          }
          case "catch": {
            this.process(u.innerType, E), m.ref = u.innerType;
            let p;
            try {
              p = u.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            _.default = p;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const p = _, C = r._zod.pattern;
            if (!C)
              throw new Error("Pattern not found in template literal");
            p.type = "string", p.pattern = C.source;
            break;
          }
          case "pipe": {
            const p = this.io === "input" ? u.in._zod.def.type === "transform" ? u.out : u.in : u.out;
            this.process(p, E), m.ref = p;
            break;
          }
          case "readonly": {
            this.process(u.innerType, E), m.ref = u.innerType, _.readOnly = !0;
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
            const p = r._zod.innerType;
            this.process(p, E), m.ref = p;
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
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(m.schema, g), this.io === "input" && xt(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, s) {
    const a = {
      cycles: s?.cycles ?? "ref",
      reused: s?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: s?.external ?? void 0
    }, u = this.seen.get(r);
    if (!u)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const c = (v) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const C = a.external.registry.get(v[0])?.id, T = a.external.uri ?? ((k) => k);
        if (C)
          return { ref: T(C) };
        const j = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = j, { defId: j, ref: `${T("__shared")}#/${E}/${j}` };
      }
      if (v[1] === u)
        return { ref: "#" };
      const _ = `#/${E}/`, p = v[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: p, ref: _ + p };
    }, h = (v) => {
      if (v[1].schema.$ref)
        return;
      const E = v[1], { ref: b, defId: _ } = c(v);
      E.def = { ...E.schema }, _ && (E.defId = _);
      const p = E.schema;
      for (const C in p)
        delete p[C];
      p.$ref = b;
    };
    if (a.cycles === "throw")
      for (const v of this.seen.entries()) {
        const E = v[1];
        if (E.cycle)
          throw new Error(`Cycle detected: #/${E.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const v of this.seen.entries()) {
      const E = v[1];
      if (r === v[0]) {
        h(v);
        continue;
      }
      if (a.external) {
        const _ = a.external.registry.get(v[0])?.id;
        if (r !== v[0] && _) {
          h(v);
          continue;
        }
      }
      if (this.metadataRegistry.get(v[0])?.id) {
        h(v);
        continue;
      }
      if (E.cycle) {
        h(v);
        continue;
      }
      if (E.count > 1 && a.reused === "ref") {
        h(v);
        continue;
      }
    }
    const m = (v, E) => {
      const b = this.seen.get(v), _ = b.def ?? b.schema, p = { ..._ };
      if (b.ref === null)
        return;
      const C = b.ref;
      if (b.ref = null, C) {
        m(C, E);
        const T = this.seen.get(C).schema;
        T.$ref && (E.target === "draft-7" || E.target === "draft-4" || E.target === "openapi-3.0") ? (_.allOf = _.allOf ?? [], _.allOf.push(T)) : (Object.assign(_, T), Object.assign(_, p));
      }
      b.isParent || this.override({
        zodSchema: v,
        jsonSchema: _,
        path: b.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse())
      m(v[0], { target: this.target });
    const f = {};
    if (this.target === "draft-2020-12" ? f.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? f.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? f.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const v = a.external.registry.get(r)?.id;
      if (!v)
        throw new Error("Schema is missing an `id` property");
      f.$id = a.external.uri(v);
    }
    Object.assign(f, u.def);
    const g = a.external?.defs ?? {};
    for (const v of this.seen.entries()) {
      const E = v[1];
      E.def && E.defId && (g[E.defId] = E.def);
    }
    a.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? f.$defs = g : f.definitions = g);
    try {
      return JSON.parse(JSON.stringify(f));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function u4(n, r) {
  if (n instanceof w_) {
    const a = new qy(r), u = {};
    for (const m of n._idmap.entries()) {
      const [f, g] = m;
      a.process(g);
    }
    const c = {}, h = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [f, g] = m;
      c[f] = a.emit(g, {
        ...r,
        external: h
      });
    }
    if (Object.keys(u).length > 0) {
      const m = a.target === "draft-2020-12" ? "$defs" : "definitions";
      c.__shared = {
        [m]: u
      };
    }
    return { schemas: c };
  }
  const s = new qy(r);
  return s.process(n), s.emit(n, r);
}
function xt(n, r) {
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
      return xt(u.element, s);
    case "object": {
      for (const c in u.shape)
        if (xt(u.shape[c], s))
          return !0;
      return !1;
    }
    case "union": {
      for (const c of u.options)
        if (xt(c, s))
          return !0;
      return !1;
    }
    case "intersection":
      return xt(u.left, s) || xt(u.right, s);
    case "tuple": {
      for (const c of u.items)
        if (xt(c, s))
          return !0;
      return !!(u.rest && xt(u.rest, s));
    }
    case "record":
      return xt(u.keyType, s) || xt(u.valueType, s);
    case "map":
      return xt(u.keyType, s) || xt(u.valueType, s);
    case "set":
      return xt(u.valueType, s);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return xt(u.innerType, s);
    case "lazy":
      return xt(u.getter(), s);
    case "default":
      return xt(u.innerType, s);
    case "prefault":
      return xt(u.innerType, s);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return xt(u.in, s) || xt(u.out, s);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${u.type}`);
}
const l4 = /* @__PURE__ */ ce("ZodISODateTime", (n, r) => {
  HE.init(n, r), mt.init(n, r);
});
function c4(n) {
  return qC(l4, n);
}
const d4 = /* @__PURE__ */ ce("ZodISODate", (n, r) => {
  qE.init(n, r), mt.init(n, r);
});
function f4(n) {
  return GC(d4, n);
}
const h4 = /* @__PURE__ */ ce("ZodISOTime", (n, r) => {
  GE.init(n, r), mt.init(n, r);
});
function p4(n) {
  return ZC(h4, n);
}
const m4 = /* @__PURE__ */ ce("ZodISODuration", (n, r) => {
  ZE.init(n, r), mt.init(n, r);
});
function g4(n) {
  return VC(m4, n);
}
const v4 = (n, r) => {
  p_.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => Pw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => zw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, zf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, zf, 2);
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
}, Dn = ce("ZodError", v4, {
  Parent: Error
}), y4 = /* @__PURE__ */ th(Dn), _4 = /* @__PURE__ */ nh(Dn), b4 = /* @__PURE__ */ Ol(Dn), S4 = /* @__PURE__ */ Ml(Dn), w4 = /* @__PURE__ */ Uw(Dn), E4 = /* @__PURE__ */ Hw(Dn), C4 = /* @__PURE__ */ qw(Dn), A4 = /* @__PURE__ */ Gw(Dn), T4 = /* @__PURE__ */ Zw(Dn), k4 = /* @__PURE__ */ Vw(Dn), x4 = /* @__PURE__ */ $w(Dn), N4 = /* @__PURE__ */ Yw(Dn), Dt = /* @__PURE__ */ ce("ZodType", (n, r) => (Nt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Da(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), n.clone = (s, a) => na(n, s, a), n.brand = () => n, n.register = ((s, a) => (s.add(n, a), n)), n.parse = (s, a) => y4(n, s, a, { callee: n.parse }), n.safeParse = (s, a) => b4(n, s, a), n.parseAsync = async (s, a) => _4(n, s, a, { callee: n.parseAsync }), n.safeParseAsync = async (s, a) => S4(n, s, a), n.spa = n.safeParseAsync, n.encode = (s, a) => w4(n, s, a), n.decode = (s, a) => E4(n, s, a), n.encodeAsync = async (s, a) => C4(n, s, a), n.decodeAsync = async (s, a) => A4(n, s, a), n.safeEncode = (s, a) => T4(n, s, a), n.safeDecode = (s, a) => k4(n, s, a), n.safeEncodeAsync = async (s, a) => x4(n, s, a), n.safeDecodeAsync = async (s, a) => N4(n, s, a), n.refine = (s, a) => n.check(yA(s, a)), n.superRefine = (s) => n.check(_A(s)), n.overwrite = (s) => n.check(so(s)), n.optional = () => Vy(n), n.nullable = () => $y(n), n.nullish = () => Vy($y(n)), n.nonoptional = (s) => dA(n, s), n.array = () => Ma(n), n.or = (s) => eA([n, s]), n.and = (s) => nA(n, s), n.transform = (s) => Yy(n, iA(s)), n.default = (s) => uA(n, s), n.prefault = (s) => cA(n, s), n.catch = (s) => hA(n, s), n.pipe = (s) => Yy(n, s), n.readonly = () => gA(n), n.describe = (s) => {
  const a = n.clone();
  return Fs.add(a, { description: s }), a;
}, Object.defineProperty(n, "description", {
  get() {
    return Fs.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...s) => {
  if (s.length === 0)
    return Fs.get(n);
  const a = n.clone();
  return Fs.add(a, s[0]), a;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), A_ = /* @__PURE__ */ ce("_ZodString", (n, r) => {
  rh.init(n, r), Dt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...a) => n.check(FC(...a)), n.includes = (...a) => n.check(KC(...a)), n.startsWith = (...a) => n.check(JC(...a)), n.endsWith = (...a) => n.check(WC(...a)), n.min = (...a) => n.check(Al(...a)), n.max = (...a) => n.check(E_(...a)), n.length = (...a) => n.check(C_(...a)), n.nonempty = (...a) => n.check(Al(1, ...a)), n.lowercase = (a) => n.check(XC(a)), n.uppercase = (a) => n.check(QC(a)), n.trim = () => n.check(t4()), n.normalize = (...a) => n.check(e4(...a)), n.toLowerCase = () => n.check(n4()), n.toUpperCase = () => n.check(r4());
}), O4 = /* @__PURE__ */ ce("ZodString", (n, r) => {
  rh.init(n, r), A_.init(n, r), n.email = (s) => n.check(SC(M4, s)), n.url = (s) => n.check(TC(R4, s)), n.jwt = (s) => n.check(HC(Y4, s)), n.emoji = (s) => n.check(kC(j4, s)), n.guid = (s) => n.check(Hy(Gy, s)), n.uuid = (s) => n.check(wC(nl, s)), n.uuidv4 = (s) => n.check(EC(nl, s)), n.uuidv6 = (s) => n.check(CC(nl, s)), n.uuidv7 = (s) => n.check(AC(nl, s)), n.nanoid = (s) => n.check(xC(L4, s)), n.guid = (s) => n.check(Hy(Gy, s)), n.cuid = (s) => n.check(NC(D4, s)), n.cuid2 = (s) => n.check(OC(z4, s)), n.ulid = (s) => n.check(MC(P4, s)), n.base64 = (s) => n.check(IC(Z4, s)), n.base64url = (s) => n.check(BC(V4, s)), n.xid = (s) => n.check(RC(I4, s)), n.ksuid = (s) => n.check(jC(B4, s)), n.ipv4 = (s) => n.check(LC(U4, s)), n.ipv6 = (s) => n.check(DC(H4, s)), n.cidrv4 = (s) => n.check(zC(q4, s)), n.cidrv6 = (s) => n.check(PC(G4, s)), n.e164 = (s) => n.check(UC($4, s)), n.datetime = (s) => n.check(c4(s)), n.date = (s) => n.check(f4(s)), n.time = (s) => n.check(p4(s)), n.duration = (s) => n.check(g4(s));
});
function $t(n) {
  return bC(O4, n);
}
const mt = /* @__PURE__ */ ce("ZodStringFormat", (n, r) => {
  ft.init(n, r), A_.init(n, r);
}), M4 = /* @__PURE__ */ ce("ZodEmail", (n, r) => {
  RE.init(n, r), mt.init(n, r);
}), Gy = /* @__PURE__ */ ce("ZodGUID", (n, r) => {
  OE.init(n, r), mt.init(n, r);
}), nl = /* @__PURE__ */ ce("ZodUUID", (n, r) => {
  ME.init(n, r), mt.init(n, r);
}), R4 = /* @__PURE__ */ ce("ZodURL", (n, r) => {
  jE.init(n, r), mt.init(n, r);
}), j4 = /* @__PURE__ */ ce("ZodEmoji", (n, r) => {
  LE.init(n, r), mt.init(n, r);
}), L4 = /* @__PURE__ */ ce("ZodNanoID", (n, r) => {
  DE.init(n, r), mt.init(n, r);
}), D4 = /* @__PURE__ */ ce("ZodCUID", (n, r) => {
  zE.init(n, r), mt.init(n, r);
}), z4 = /* @__PURE__ */ ce("ZodCUID2", (n, r) => {
  PE.init(n, r), mt.init(n, r);
}), P4 = /* @__PURE__ */ ce("ZodULID", (n, r) => {
  IE.init(n, r), mt.init(n, r);
}), I4 = /* @__PURE__ */ ce("ZodXID", (n, r) => {
  BE.init(n, r), mt.init(n, r);
}), B4 = /* @__PURE__ */ ce("ZodKSUID", (n, r) => {
  UE.init(n, r), mt.init(n, r);
}), U4 = /* @__PURE__ */ ce("ZodIPv4", (n, r) => {
  VE.init(n, r), mt.init(n, r);
}), H4 = /* @__PURE__ */ ce("ZodIPv6", (n, r) => {
  $E.init(n, r), mt.init(n, r);
}), q4 = /* @__PURE__ */ ce("ZodCIDRv4", (n, r) => {
  YE.init(n, r), mt.init(n, r);
}), G4 = /* @__PURE__ */ ce("ZodCIDRv6", (n, r) => {
  FE.init(n, r), mt.init(n, r);
}), Z4 = /* @__PURE__ */ ce("ZodBase64", (n, r) => {
  XE.init(n, r), mt.init(n, r);
}), V4 = /* @__PURE__ */ ce("ZodBase64URL", (n, r) => {
  KE.init(n, r), mt.init(n, r);
}), $4 = /* @__PURE__ */ ce("ZodE164", (n, r) => {
  JE.init(n, r), mt.init(n, r);
}), Y4 = /* @__PURE__ */ ce("ZodJWT", (n, r) => {
  eC.init(n, r), mt.init(n, r);
}), F4 = /* @__PURE__ */ ce("ZodUnknown", (n, r) => {
  tC.init(n, r), Dt.init(n, r);
});
function Zy() {
  return $C(F4);
}
const X4 = /* @__PURE__ */ ce("ZodNever", (n, r) => {
  nC.init(n, r), Dt.init(n, r);
});
function Q4(n) {
  return YC(X4, n);
}
const K4 = /* @__PURE__ */ ce("ZodArray", (n, r) => {
  rC.init(n, r), Dt.init(n, r), n.element = r.element, n.min = (s, a) => n.check(Al(s, a)), n.nonempty = (s) => n.check(Al(1, s)), n.max = (s, a) => n.check(E_(s, a)), n.length = (s, a) => n.check(C_(s, a)), n.unwrap = () => n.element;
});
function Ma(n, r) {
  return a4(K4, n, r);
}
const J4 = /* @__PURE__ */ ce("ZodObject", (n, r) => {
  iC.init(n, r), Dt.init(n, r), ot(n, "shape", () => r.shape), n.keyof = () => rA(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: Zy() }), n.loose = () => n.clone({ ...n._zod.def, catchall: Zy() }), n.strict = () => n.clone({ ...n._zod.def, catchall: Q4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => Mw(n, s), n.safeExtend = (s) => Rw(n, s), n.merge = (s) => jw(n, s), n.pick = (s) => Nw(n, s), n.omit = (s) => Ow(n, s), n.partial = (...s) => Lw(T_, n, s[0]), n.required = (...s) => Dw(k_, n, s[0]);
});
function oo(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...ze(r)
  };
  return new J4(s);
}
const W4 = /* @__PURE__ */ ce("ZodUnion", (n, r) => {
  sC.init(n, r), Dt.init(n, r), n.options = r.options;
});
function eA(n, r) {
  return new W4({
    type: "union",
    options: n,
    ...ze(r)
  });
}
const tA = /* @__PURE__ */ ce("ZodIntersection", (n, r) => {
  oC.init(n, r), Dt.init(n, r);
});
function nA(n, r) {
  return new tA({
    type: "intersection",
    left: n,
    right: r
  });
}
const If = /* @__PURE__ */ ce("ZodEnum", (n, r) => {
  uC.init(n, r), Dt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (a, u) => {
    const c = {};
    for (const h of a)
      if (s.has(h))
        c[h] = r.entries[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new If({
      ...r,
      checks: [],
      ...ze(u),
      entries: c
    });
  }, n.exclude = (a, u) => {
    const c = { ...r.entries };
    for (const h of a)
      if (s.has(h))
        delete c[h];
      else
        throw new Error(`Key ${h} not found in enum`);
    return new If({
      ...r,
      checks: [],
      ...ze(u),
      entries: c
    });
  };
});
function rA(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((a) => [a, a])) : n;
  return new If({
    type: "enum",
    entries: s,
    ...ze(r)
  });
}
const aA = /* @__PURE__ */ ce("ZodTransform", (n, r) => {
  lC.init(n, r), Dt.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new o_(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(no(c, s.value, r));
      else {
        const h = c;
        h.fatal && (h.continue = !1), h.code ?? (h.code = "custom"), h.input ?? (h.input = s.value), h.inst ?? (h.inst = n), s.issues.push(no(h));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function iA(n) {
  return new aA({
    type: "transform",
    transform: n
  });
}
const T_ = /* @__PURE__ */ ce("ZodOptional", (n, r) => {
  cC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Vy(n) {
  return new T_({
    type: "optional",
    innerType: n
  });
}
const sA = /* @__PURE__ */ ce("ZodNullable", (n, r) => {
  dC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function $y(n) {
  return new sA({
    type: "nullable",
    innerType: n
  });
}
const oA = /* @__PURE__ */ ce("ZodDefault", (n, r) => {
  fC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function uA(n, r) {
  return new oA({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : d_(r);
    }
  });
}
const lA = /* @__PURE__ */ ce("ZodPrefault", (n, r) => {
  hC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function cA(n, r) {
  return new lA({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : d_(r);
    }
  });
}
const k_ = /* @__PURE__ */ ce("ZodNonOptional", (n, r) => {
  pC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function dA(n, r) {
  return new k_({
    type: "nonoptional",
    innerType: n,
    ...ze(r)
  });
}
const fA = /* @__PURE__ */ ce("ZodCatch", (n, r) => {
  mC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function hA(n, r) {
  return new fA({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const pA = /* @__PURE__ */ ce("ZodPipe", (n, r) => {
  gC.init(n, r), Dt.init(n, r), n.in = r.in, n.out = r.out;
});
function Yy(n, r) {
  return new pA({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const mA = /* @__PURE__ */ ce("ZodReadonly", (n, r) => {
  vC.init(n, r), Dt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function gA(n) {
  return new mA({
    type: "readonly",
    innerType: n
  });
}
const vA = /* @__PURE__ */ ce("ZodCustom", (n, r) => {
  yC.init(n, r), Dt.init(n, r);
});
function yA(n, r = {}) {
  return i4(vA, n, r);
}
function _A(n) {
  return s4(n);
}
const Fy = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, Bf = "placeholder-chatHistory", bA = oo({
  justification: $t().describe("A brief, friendly explanation of the changes made."),
  name: $t().describe("The entry's new name/comment."),
  triggers: Ma($t()).describe("The entry's new keywords/triggers."),
  content: $t().describe("The entry's new content.")
}), SA = oo({
  worldName: $t().describe("The name of the world where the new entry should be added."),
  name: $t().describe("The new entry's name/comment."),
  triggers: Ma($t()).describe("The new entry's triggers."),
  content: $t().describe("The new entry's content.")
}), wA = oo({
  worldName: $t().describe("The name of the world containing the entry to change."),
  originalName: $t().describe("The original name/comment of the entry to change, used for identification."),
  newName: $t().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Ma($t()).optional().describe("The entry's new list of triggers."),
  content: $t().optional().describe("The entry's new content.")
}), EA = oo({
  worldName: $t().describe("The name of the world containing the entry to remove."),
  name: $t().describe("The name/comment of the entry to remove.")
}), CA = oo({
  justification: $t().describe("A brief, friendly explanation of all the operations performed."),
  add: Ma(SA).optional().describe("A list of new entries to add."),
  change: Ma(wA).optional().describe("A list of existing entries to change."),
  remove: Ma(EA).optional().describe("A list of existing entries to remove.")
});
function _f(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Uf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Uf(a, r + 1)}${s}</item>
` : `${s}<item>${_f(a)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let a = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? a += `${s}<${u}>
${Uf(c, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${_f(c)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${_f(n)}</value>
`;
}
function AA(n, r) {
  const s = xa(n);
  return r === "xml" ? `<entry>
${Uf(s, 1)}</entry>` : JSON.stringify(s, null, 2);
}
function TA(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function kA(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function xa(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = TA(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const a = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (a) return xa(a);
  switch (kA(n.type)) {
    case "object": {
      const c = {}, h = n.properties || {};
      for (const m of Object.keys(h))
        c[m] = xa(h[m]);
      return n.additionalProperties && typeof n.additionalProperties == "object" && (c.additionalProperty = xa(n.additionalProperties)), c;
    }
    case "array": {
      const c = n.items ?? {};
      return [xa(c)];
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
      return n.properties || n.additionalProperties ? xa({ ...n, type: "object" }) : n.items ? xa({ ...n, type: "array" }) : null;
  }
}
const xA = new m3();
async function Xy(n, r, s, a, u, c) {
  const h = !a.json_schema && !1;
  return new Promise((m, f) => {
    const g = new AbortController(), v = c ?? g.signal;
    c && c.addEventListener("abort", () => g.abort(), { once: !0 }), xA.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: h, signal: v },
        overridePayload: a
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (E, b, _) => v.aborted ? f(new DOMException("Request aborted by user", "AbortError")) : _ ? f(_) : b === void 0 && _ === void 0 ? f(new DOMException("Request aborted by user", "AbortError")) : (b || f(new Error("No data received from LLM")), _ ? f(_) : m(b))
      }
    );
  });
}
async function Qy(n, r, s, a, u, c, h) {
  const m = st.getSettings();
  let f, g;
  const v = u4(s);
  if (u === "native") {
    if (f = await Xy(
      n,
      r,
      c,
      {
        json_schema: { name: a, strict: !0, value: v }
      },
      void 0,
      h
    ), !f?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    g = typeof f.content == "string" ? JSON.parse(f.content) : f.content;
  } else {
    const b = u, _ = AA(v, b), p = JSON.stringify(v, null, 2), C = b === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", T = m.prompts[C]?.content;
    if (!T)
      throw new Error(`Prompt template for mode "${b}" not found.`);
    const j = {
      example_response: _,
      schema: p
    }, P = { role: "system", content: Sn.compile(T, { noEscape: !0, strict: !0 })(j) };
    if (f = await Xy(
      n,
      [...r, P],
      c,
      {},
      void 0,
      h
    ), !f?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    if (b === "xml") {
      const l = H0(f.content), S = Object.values(l).flat();
      if (S.length > 0) {
        const w = S[0];
        g = {
          justification: "Updated via XML.",
          // Justification is hard with XML parsing this way
          name: w.comment,
          triggers: w.key,
          content: w.content
        };
      } else
        throw new Error("Could not find a valid entry in the XML response.");
    } else
      g = JSON.parse(f.content);
  }
  const E = s.safeParse(g);
  if (!E.success) {
    const b = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", g), await Ce("error", b), new Error(b);
  }
  return E.data;
}
const NA = ({ originalContent: n, newContent: r }) => {
  const s = ae.useMemo(() => {
    const a = i_(n, r);
    let u = "", c = "";
    return a.forEach((h) => {
      const m = h.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${h.added ? "color: green; background-color: #e6ffed;" : h.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      h.added || (u += g), h.removed || (c += g);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, x_ = ({ before: n, after: r }) => {
  const s = ae.useMemo(() => {
    const a = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && a.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && a.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && a.push({ label: "Content", before: n.content || "", after: r.content || "" })), a;
  }, [n, r]);
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: s.map(({ label: a, before: u, after: c }) => /* @__PURE__ */ N.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ N.jsx("h4", { children: a }),
    /* @__PURE__ */ N.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ N.jsx("span", { children: "Before" }),
      /* @__PURE__ */ N.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ N.jsx(NA, { originalContent: u, newContent: c })
  ] }, a)) });
}, OA = ({ before: n, after: r }) => {
  const { added: s, removed: a, changed: u } = ae.useMemo(() => {
    const h = n || {}, m = /* @__PURE__ */ new Map();
    Object.entries(h).forEach(([b, _]) => {
      _.forEach((p) => {
        const C = `${b}::${p.uid}`;
        m.set(C, { worldName: b, entry: p });
      });
    });
    const f = [], g = [], v = [], E = Object.entries(r || {}).flatMap(
      ([b, _]) => _.map((p) => ({ worldName: b, entry: p }))
    );
    for (const { worldName: b, entry: _ } of E) {
      const p = `${b}::${_.uid}`;
      if (m.has(p)) {
        const T = m.get(p).entry;
        (T.comment !== _.comment || T.content !== _.content || (T.key || []).join(",") !== (_.key || []).join(",")) && v.push({ worldName: b, before: T, after: _ }), m.delete(p);
      } else
        f.push({ worldName: b, entry: _ });
    }
    return m.forEach(({ worldName: b, entry: _ }) => {
      g.push({ worldName: b, entry: _ });
    }), { added: f, removed: g, changed: v };
  }, [n, r]), c = s.length > 0 || a.length > 0 || u.length > 0;
  return /* @__PURE__ */ N.jsx("div", { className: "global-diff", children: c ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    s.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Added Entries (",
        s.length,
        ")"
      ] }),
      s.map(({ worldName: h, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry added", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            h,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${h}::${m.uid}`))
    ] }),
    a.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Removed Entries (",
        a.length,
        ")"
      ] }),
      a.map(({ worldName: h, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry removed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          m.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(from ",
            h,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "diff-entry-content", children: m.content })
      ] }, `${h}::${m.uid}`))
    ] }),
    u.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Changed Entries (",
        u.length,
        ")"
      ] }),
      u.map(({ worldName: h, before: m, after: f }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry changed", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "diff-entry-header", children: [
          f.comment,
          " ",
          /* @__PURE__ */ N.jsxs("span", { children: [
            "(in ",
            h,
            ")"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx(x_, { before: m, after: f })
      ] }, `${h}::${f.uid}`))
    ] })
  ] }) : /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, ah = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ N.jsx(OA, { before: r, after: s }) : /* @__PURE__ */ N.jsx(x_, { before: r, after: s }) })
] }), Ky = "en", Jy = {
  en: {
    titleCurrent: "Current Entry State",
    titleCompare: "Comparing with Original State",
    compareCheckbox: "Compare with Original",
    fieldName: "Name",
    fieldTriggers: "Triggers",
    fieldContent: "Content",
    emptyValue: "empty"
  },
  "zh-CN": {
    titleCurrent: "当前条目状态",
    titleCompare: "与原始状态对比",
    compareCheckbox: "与原始状态对比",
    fieldName: "名称",
    fieldTriggers: "触发词",
    fieldContent: "内容",
    emptyValue: "空"
  }
}, MA = ({ currentState: n, initialState: r }) => {
  const a = st.getSettings()?.language ?? Ky, u = Jy[a] ?? Jy[Ky], [c, h] = ae.useState(!1), m = ae.useMemo(
    () => [
      { label: u.fieldName, value: n.comment },
      { label: u.fieldTriggers, value: n.key.join(", ") },
      { label: u.fieldContent, value: n.content }
    ],
    [n, u]
  );
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: c ? u.titleCompare : u.titleCurrent }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: c, onChange: (f) => h(f.target.checked) }),
        u.compareCheckbox
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: c ? /* @__PURE__ */ N.jsx(ah, { sessionType: "entry", before: r, after: n }) : m.map(({ label: f, value: g }) => /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ N.jsx("label", { children: f }),
      /* @__PURE__ */ N.jsx("div", { className: "state-value", children: g || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: u.emptyValue }) })
    ] }, f)) })
  ] });
}, Wy = "en", e0 = {
  en: {
    titleCurrent: "Current Suggested Entries",
    titleCompare: "Comparing with Original State",
    compareCheckbox: "Compare with Original",
    noEntries: "No entries in this world.",
    fieldName: "Name",
    fieldTriggers: "Triggers",
    fieldContent: "Content",
    emptyValue: "empty"
  },
  "zh-CN": {
    titleCurrent: "当前建议条目",
    titleCompare: "与原始状态对比",
    compareCheckbox: "与原始状态对比",
    noEntries: "此世界书中无条目。",
    fieldName: "名称",
    fieldTriggers: "触发词",
    fieldContent: "内容",
    emptyValue: "空"
  }
}, RA = ({ currentState: n, initialState: r }) => {
  const a = st.getSettings()?.language ?? Wy, u = e0[a] ?? e0[Wy], [c, h] = ae.useState(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: c ? u.titleCompare : u.titleCurrent }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: c, onChange: (m) => h(m.target.checked) }),
        u.compareCheckbox
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: c ? /* @__PURE__ */ N.jsx(ah, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([m, f]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
      /* @__PURE__ */ N.jsx("h4", { children: m }),
      f.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle-text", children: u.noEntries }) : f.map((g) => /* @__PURE__ */ N.jsxs("div", { className: "state-field-group", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: u.fieldName }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: g.comment || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: u.emptyValue }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: u.fieldTriggers }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: (g.key || []).join(", ") || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: u.emptyValue }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ N.jsx("label", { children: u.fieldContent }),
          /* @__PURE__ */ N.jsx("div", { className: "state-value", children: g.content || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: u.emptyValue }) })
        ] })
      ] }, g.uid))
    ] }, m)) })
  ] });
}, Xr = SillyTavern.getContext(), Tl = "en", kl = {
  en: {
    editStateTitle: "Editing Entry State",
    saveChanges: "Save Changes",
    cancel: "Cancel",
    fieldName: "Name",
    fieldTriggers: "Triggers (comma-separated)",
    fieldContent: "Content",
    viewState: "View State",
    editState: "Edit State",
    backTooltip: "Back to sessions",
    applyTooltip: "Apply Changes and Close",
    apply: "Apply",
    viewInitialContext: "View Initial Context",
    saveAndFork: "Save & Fork",
    editContextTooltip: "Edit Context",
    deleteContextTooltip: "Delete Context",
    editAndForkTooltip: "Edit and Fork",
    compareChangesTooltip: "Compare changes",
    deleteMessageTooltip: "Delete Message",
    regenerate: "Regenerate",
    regenerateTooltip: "Regenerate response",
    cancelRequestTooltip: "Cancel Request",
    inputPlaceholder: "Type your revision instructions...",
    editMessageTitle: "Edit Message",
    editMessageConfirm: "This will fork the conversation from this point, removing all subsequent messages. Continue?",
    deleteMessageTitle: "Delete Message",
    deleteInitialConfirm: "Deleting part of the initial context will clear the entire chat history. Are you sure?",
    deleteMessageConfirm: "This will delete this message and all subsequent messages. Are you sure?",
    manualEditContent: "I made a change manually.",
    messageHistoryUpdated: "Message history has been updated.",
    requestCancelled: "Request was cancelled.",
    requestFailed: (n) => `Request failed: ${n}`,
    noApiSelected: "No API selected for this session. Please configure Connection Manager.",
    profileNoApi: "Profile has no API configured, using ST default.",
    usingFallbackApi: (n, r) => `Using fallback API: ${n} -> ${r}`
  },
  "zh-CN": {
    editStateTitle: "编辑条目状态",
    saveChanges: "保存更改",
    cancel: "取消",
    fieldName: "名称",
    fieldTriggers: "触发词（以逗号分隔）",
    fieldContent: "内容",
    viewState: "查看状态",
    editState: "编辑状态",
    backTooltip: "返回会话列表",
    applyTooltip: "应用更改并关闭",
    apply: "应用",
    viewInitialContext: "查看初始上下文",
    saveAndFork: "保存并分叉",
    editContextTooltip: "编辑上下文",
    deleteContextTooltip: "删除上下文",
    editAndForkTooltip: "编辑并分叉",
    compareChangesTooltip: "对比更改",
    deleteMessageTooltip: "删除消息",
    regenerate: "重新生成",
    regenerateTooltip: "重新生成回复",
    cancelRequestTooltip: "取消请求",
    inputPlaceholder: "输入修改指令...",
    editMessageTitle: "编辑消息",
    editMessageConfirm: "这将从此点分叉对话，移除所有后续消息。是否继续？",
    deleteMessageTitle: "删除消息",
    deleteInitialConfirm: "删除初始上下文的一部分将清空整个聊天记录。确定吗？",
    deleteMessageConfirm: "这将删除此消息及所有后续消息。确定吗？",
    manualEditContent: "我手动进行了修改。",
    messageHistoryUpdated: "消息记录已更新。",
    requestCancelled: "请求已取消。",
    requestFailed: (n) => `请求失败：${n}`,
    noApiSelected: "此会话未选择 API。请配置连接管理器。",
    profileNoApi: "配置文件未配置 API，使用 ST 默认设置。",
    usingFallbackApi: (n, r) => `使用备用 API：${n} -> ${r}`
  }
}, jA = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, LA = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const a of r.remove) {
      const { worldName: u, name: c } = a;
      s[u] && (s[u] = s[u].filter((h) => h.comment !== c));
    }
  if (r.change)
    for (const a of r.change) {
      const { worldName: u, originalName: c } = a, h = s[u]?.find((m) => m.comment === c);
      h ? (a.newName !== void 0 && (h.comment = a.newName), a.triggers !== void 0 && (h.key = a.triggers), a.content !== void 0 && (h.content = a.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), Ce("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const a of r.add) {
      const { worldName: u, name: c, triggers: h, content: m } = a;
      s[u] || (s[u] = []);
      const f = { entries: Object.fromEntries(s[u].map((v) => [v.uid, v])) }, g = ml(u, f);
      g && (g.comment = c, g.key = h, g.content = m, s[u].push(g));
    }
  return s;
}, DA = ({ initialState: n, onSave: r, onClose: s }) => {
  const u = st.getSettings()?.language ?? Tl, c = kl[u] ?? kl[Tl], [h, m] = ae.useState(n.comment), [f, g] = ae.useState(n.key.join(", ")), [v, E] = ae.useState(n.content), b = () => {
    const _ = {
      ...structuredClone(n),
      comment: h,
      key: f.split(",").map((p) => p.trim()).filter(Boolean),
      content: v
    };
    r(_);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: c.editStateTitle }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsxs(Le, { onClick: b, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " ",
          c.saveChanges
        ] }),
        /* @__PURE__ */ N.jsxs(Le, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
          " ",
          c.cancel
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: c.fieldName }),
        /* @__PURE__ */ N.jsx(J0, { type: "text", value: h, onInput: (_) => m(_.currentTarget.value) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: c.fieldTriggers }),
        /* @__PURE__ */ N.jsx(br, { value: f, onChange: (_) => g(_.target.value), rows: 2 })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: c.fieldContent }),
        /* @__PURE__ */ N.jsx(br, { value: v, onChange: (_) => E(_.target.value), rows: 8 })
      ] })
    ] })
  ] });
}, zA = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: c
}) => {
  const m = st.getSettings()?.language ?? Tl, f = kl[m] ?? kl[Tl], [g, v] = ae.useState(n.messages), [E, b] = ae.useState(""), [_, p] = ae.useState(!1), [C, T] = ae.useState(null), [j, k] = ae.useState(!1), [P, l] = ae.useState(!1), [S, w] = ae.useState(null), [A, O] = ae.useState(""), L = ae.useRef(null), M = ae.useRef(null);
  ae.useEffect(() => {
    L.current?.scrollIntoView({ behavior: "smooth" });
  }, [g]);
  const z = ae.useCallback(
    (ee, we, be) => {
      if (JSON.stringify(be) === JSON.stringify(we))
        return ee;
      const $e = st.getSettings();
      let Ge = "";
      if (n.type === "global") {
        const F = $e.prompts.reviseGlobalStateUpdate?.content, de = $e.prompts.reviseGlobalStateUpdateAddedModified?.content, ve = $e.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!F || !de || !ve) return ee;
        const me = be || {}, he = we || {}, Ee = /* @__PURE__ */ new Map();
        Object.entries(me).forEach(([ye, _e]) => {
          _e.forEach((Oe) => {
            Ee.set(`${ye}::${Oe.uid}`, Oe);
          });
        });
        const Ne = /* @__PURE__ */ new Map();
        Object.entries(he).forEach(([ye, _e]) => {
          _e.forEach((Oe) => {
            Ne.set(`${ye}::${Oe.uid}`, Oe);
          });
        });
        const Be = {}, ge = [];
        if (Ne.forEach((ye, _e) => {
          const [Oe] = _e.split("::"), ut = Ee.get(_e);
          let Ot = !1;
          if (!ut)
            Ot = !0;
          else {
            const et = (ye.content || "") !== (ut.content || ""), wn = (ye.comment || "") !== (ut.comment || ""), zt = (ye.key || []).sort().join(",") !== (ut.key || []).sort().join(",");
            (et || wn || zt) && (Ot = !0);
          }
          Ot && (Be[Oe] || (Be[Oe] = []), Be[Oe].push(ye));
        }), Ee.forEach((ye, _e) => {
          if (!Ne.has(_e)) {
            const [Oe] = _e.split("::");
            ge.push({ worldName: Oe, comment: ye.comment });
          }
        }), Object.keys(Be).length === 0 && ge.length === 0)
          return ee;
        const te = Sn.compile(de, { noEscape: !0 })({
          changedLorebooks: Be
        }), ue = Sn.compile(ve, { noEscape: !0 })({ removedEntries: ge });
        Ge = Sn.compile(F, { noEscape: !0 })({
          addedModifiedContent: te,
          removedContent: ue
        });
      } else {
        const F = we;
        Ge = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${F.comment})
Triggers: ${(F.key || []).join(", ")}
Content: ${F.content}`;
      }
      if (Ge = Xr.substituteParams(Ge.trim()), Ge) {
        const F = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ge,
          isStateUpdate: !0
        };
        return [...ee, F];
      }
      return ee;
    },
    [n.type, n.worldName]
  ), H = ae.useCallback(
    async (ee, we, be, $e) => {
      const Ge = st.getSettings();
      if (!n.profileId) {
        Ce("warning", f.noApiSelected);
        return;
      }
      M.current = new AbortController(), be(), p(!0);
      try {
        const F = [], de = Xr.extensionSettings.connectionManager?.profiles?.find(
          (te) => te.id === n.profileId
        );
        let ve;
        if (de?.api && Xr.CONNECT_API_MAP[de.api])
          ve = Xr.CONNECT_API_MAP[de.api].selected;
        else {
          console.warn(`[WorldInfoRecommender] ${f.profileNoApi}`);
          for (const [te, ue] of Object.entries(Xr.CONNECT_API_MAP))
            if (ue && ue.selected) {
              ve = ue.selected, console.log(`[WorldInfoRecommender] ${f.usingFallbackApi(te, ve)}`);
              break;
            }
        }
        if (!ve) {
          Ce("warning", f.noApiSelected);
          return;
        }
        for (const te of ee)
          if (te.id === Bf) {
            if (un === void 0 && !Kt) continue;
            const ue = await E0(ve, c);
            ue.warnings?.length && ue.warnings.forEach((ye) => Ce("warning", ye)), F.push(...ue.result);
          } else
            F.push(te);
        const me = ee.slice(0, ee.length - (we ? 0 : 1)).reverse().find((te) => te.stateSnapshot)?.stateSnapshot ?? u;
        let he = "";
        if (n.type === "global") {
          const te = Ge.prompts.currentLorebooks?.content;
          if (te) {
            const ue = { currentLorebooks: me };
            he = Sn.compile(te, { noEscape: !0 })(ue);
          }
        } else {
          const te = me;
          he = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${te.comment})
Triggers: ${(te.key || []).join(", ")}
Content: ${te.content}`;
        }
        if (he = Xr.substituteParams(he.trim()), he) {
          const te = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: he
          }, ue = F.pop();
          F.push(te), ue && F.push(ue);
        }
        let Ee, Ne;
        if (n.type === "entry") {
          const te = await Qy(
            n.profileId,
            F,
            bA,
            Fy.ENTRY,
            n.promptEngineeringMode,
            Ge.maxResponseToken,
            M.current.signal
          );
          Ee = jA(me, te), Ne = te.justification;
        } else {
          const te = await Qy(
            n.profileId,
            F,
            CA,
            Fy.GLOBAL,
            n.promptEngineeringMode,
            Ge.maxResponseToken,
            M.current.signal
          );
          Ee = LA(me, te), Ne = te.justification;
        }
        const Be = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: Ne,
          stateSnapshot: Ee
        };
        let ge = [...ee, Be];
        ge = z(ge, Ee, me), v(ge), a({ ...n, messages: ge });
      } catch (F) {
        F.name === "AbortError" ? Ce("info", f.requestCancelled) : (console.error("Revise request failed:", F), Ce("error", f.requestFailed(F.message))), $e();
      } finally {
        p(!1), M.current = null;
      }
    },
    [n, a, u, c, z]
  ), Z = ae.useCallback(async () => {
    if (!E.trim() || _) return;
    const ee = { id: `msg-${Date.now()}`, role: "user", content: E.trim() }, we = g;
    await H(
      [...g, ee],
      !1,
      () => {
        v([...g, ee]), b("");
      },
      () => v(we)
    );
  }, [E, _, g, H]), G = ae.useCallback(async () => {
    if (_ || g.length === 0) return;
    const ee = g;
    let we = [...g];
    const be = g.findLastIndex(($e) => !$e.isStateUpdate);
    be > -1 && g[be].role === "assistant" && (we = g.slice(0, be)), await H(
      we,
      !0,
      () => v(we),
      () => v(ee)
    );
  }, [_, g, H]), Q = () => {
    const ee = g.slice().reverse().find((we) => we.stateSnapshot)?.stateSnapshot ?? u;
    s(ee), r();
  }, R = (ee) => {
    const we = g.findIndex((Ge) => Ge.id === ee);
    if (we < 0 || !g[we].stateSnapshot) return;
    const be = g[we].stateSnapshot;
    let $e = u;
    for (let Ge = we - 1; Ge >= 0; Ge--)
      if (g[Ge].stateSnapshot) {
        $e = g[Ge].stateSnapshot;
        break;
      }
    T({ before: $e, after: be });
  }, B = (ee) => {
    w(ee.id), O(ee.content);
  }, K = () => {
    w(null), O("");
  }, ie = async () => {
    if (!S) return;
    const ee = g.findIndex((de) => de.id === S);
    if (ee === -1 || !await Xr.Popup.show.confirm(f.editMessageTitle, f.editMessageConfirm)) return;
    const be = g, $e = g.slice(0, ee), Ge = { ...g[ee], content: A }, F = [...$e, Ge];
    K(), await H(
      F,
      !1,
      () => v(F),
      () => v(be)
    );
  }, I = async (ee) => {
    const we = g.findIndex((F) => F.id === ee);
    if (we === -1) return;
    const be = !!g[we].isInitial;
    if (!await Xr.Popup.show.confirm(
      f.deleteMessageTitle,
      be ? f.deleteInitialConfirm : f.deleteMessageConfirm
    )) return;
    const Ge = be ? g.filter((F) => F.isInitial && F.id !== ee) : g.slice(0, we);
    v(Ge), a({ ...n, messages: Ge }), Ce("info", f.messageHistoryUpdated);
  }, $ = (ee) => {
    const we = g.slice().reverse().find((Ge) => Ge.stateSnapshot)?.stateSnapshot ?? u, be = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: f.manualEditContent,
      stateSnapshot: ee
    };
    let $e = [...g, be];
    $e = z($e, ee, we), v($e), a({ ...n, messages: $e }), l(!1);
  }, ne = g.slice().reverse().find((ee) => ee.stateSnapshot)?.stateSnapshot ?? u, le = g.filter((ee) => !ee.isStateUpdate), fe = le.filter((ee) => ee.isInitial), Ae = le.filter((ee) => !ee.isInitial);
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h2", { children: n.name }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsx(
          W0,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (ee) => a({ ...n, profileId: ee?.id ?? "" })
          }
        ),
        /* @__PURE__ */ N.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (ee) => a({ ...n, promptEngineeringMode: ee.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ N.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(Le, { onClick: () => k(!0), title: f.viewState, children: f.viewState }),
        n.type === "entry" && /* @__PURE__ */ N.jsx(Le, { onClick: () => l(!0), title: f.editState, children: f.editState }),
        /* @__PURE__ */ N.jsx(Le, { onClick: r, title: f.backTooltip, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ N.jsxs(Le, { onClick: Q, title: f.applyTooltip, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " ",
          f.apply
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-messages", children: [
      fe.length > 0 && /* @__PURE__ */ N.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ N.jsx("summary", { children: f.viewInitialContext }),
        /* @__PURE__ */ N.jsx("div", { className: "initial-messages-content", children: fe.map(
          (ee) => S === ee.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ N.jsx(br, { value: A, onChange: (we) => O(we.target.value), rows: 5 }),
            /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ N.jsxs(Le, { onClick: ie, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
                " ",
                f.saveAndFork
              ] }),
              /* @__PURE__ */ N.jsxs(Le, { onClick: K, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
                " ",
                f.cancel
              ] })
            ] })
          ] }, ee.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper initial-context ${ee.role}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${ee.role} initial`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: ee.content }) }),
            !_ && ee.id !== Bf && /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ N.jsx(
                Le,
                {
                  className: "message-action-button",
                  onClick: () => B(ee),
                  title: f.editContextTooltip,
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ N.jsx(
                Le,
                {
                  className: "message-action-button danger_button",
                  onClick: () => I(ee.id),
                  title: f.deleteContextTooltip,
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, ee.id)
        ) })
      ] }),
      Ae.map(
        (ee) => S === ee.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ N.jsx(br, { value: A, onChange: (we) => O(we.target.value), rows: 3 }),
          /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ N.jsxs(Le, { onClick: ie, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
              " ",
              f.saveAndFork
            ] }),
            /* @__PURE__ */ N.jsxs(Le, { onClick: K, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
              " ",
              f.cancel
            ] })
          ] })
        ] }, ee.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper ${ee.role}`, children: [
          /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
            ee.role === "user" && !ee.stateSnapshot && !_ && /* @__PURE__ */ N.jsx(
              Le,
              {
                className: "message-action-button",
                onClick: () => B(ee),
                title: f.editAndForkTooltip,
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            ee.stateSnapshot && !_ && /* @__PURE__ */ N.jsx(
              Le,
              {
                className: "message-action-button",
                onClick: () => R(ee.id),
                title: f.compareChangesTooltip,
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !_ && /* @__PURE__ */ N.jsx(
              Le,
              {
                className: "message-action-button danger_button",
                onClick: () => I(ee.id),
                title: f.deleteMessageTooltip,
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${ee.role}`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: ee.content }) })
        ] }, ee.id)
      ),
      Ae.length > 0 && !_ && /* @__PURE__ */ N.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ N.jsxs(Le, { onClick: G, title: f.regenerateTooltip, children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " ",
        f.regenerate
      ] }) }),
      _ && /* @__PURE__ */ N.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ N.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: () => M.current?.abort(),
            className: "danger_button",
            title: f.cancelRequestTooltip,
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-stop" })
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("div", { ref: L })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ N.jsx(
        br,
        {
          value: E,
          onChange: (ee) => b(ee.target.value),
          placeholder: f.inputPlaceholder,
          rows: 3,
          disabled: _ || !!S,
          onKeyDown: (ee) => {
            ee.key === "Enter" && !ee.shiftKey && (ee.preventDefault(), Z());
          }
        }
      ),
      /* @__PURE__ */ N.jsx(Le, { onClick: Z, disabled: _ || !E.trim() || !!S, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    C && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: /* @__PURE__ */ N.jsx(ah, { sessionType: n.type, before: C.before, after: C.after }),
        onComplete: () => T(null),
        options: { wide: !0, large: !0 }
      }
    ),
    j && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ N.jsx(MA, { currentState: ne, initialState: u }) : /* @__PURE__ */ N.jsx(
          RA,
          {
            currentState: ne,
            initialState: u
          }
        ),
        onComplete: () => k(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    P && n.type === "entry" && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          DA,
          {
            initialState: ne,
            onSave: (ee) => {
              $(ee), l(!1);
            },
            onClose: () => l(!1)
          }
        ),
        onComplete: () => l(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function PA(n, r, s, a, u, c, h) {
  const m = st.getSettings(), f = m.mainContextTemplatePresets[a];
  if (!f)
    throw new Error(`Main context template preset "${a}" not found.`);
  const g = [], v = {
    user: Ie.name1 || "You",
    char: Ie.name2 || "Character",
    persona: Ie.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      v.currentLorebooks = n;
    else {
      const b = {};
      Object.entries(h).filter(([_]) => c.selectedWorldNames.includes(_)).forEach(([_, p]) => {
        const C = new Set(c.selectedEntryUids[_] ?? []), T = C.size > 0 ? p.filter((j) => C.has(j.uid)) : p.filter((j) => !j.disable);
        T.length > 0 && (b[_] = T);
      }), v.currentLorebooks = b;
    }
  if (r === "entry") {
    const b = n;
    v.entryToRevise = {
      worldName: s,
      name: b.comment,
      triggers: (b.key || []).join(", "),
      content: b.content
    };
  }
  for (const b of f.prompts) {
    if (!b.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(b.promptName) || b.promptName === "chatHistory" && u.messages.type === "none" || un === void 0 && !Kt && b.promptName === "chatHistory") continue;
    if (b.promptName === "chatHistory") {
      g.push({
        id: Bf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const _ = m.prompts[b.promptName];
    if (_) {
      let p = Sn.compile(_.content, { noEscape: !0 })(v);
      p = Ie.substituteParams(p), p.trim() && g.push({
        id: `im-${g.length}`,
        role: b.role,
        content: p.trim(),
        isInitial: !0
      });
    }
  }
  const E = m.prompts.reviseTaskDescription?.content;
  if (E) {
    const b = Sn.compile(E, { noEscape: !0 })({
      isEntrySession: r === "entry",
      targetEntryName: r === "entry" ? n.comment : ""
    });
    g.push({
      id: `im-${g.length}`,
      role: "system",
      content: b,
      isInitial: !0
    });
  }
  return g;
}
const rl = SillyTavern.getContext(), t0 = "worldInfoRecommender_reviseSessions", n0 = "en", r0 = {
  en: {
    titleEntry: (n) => `Revise Sessions for "${n}"`,
    titleGlobal: "Global Revise Sessions",
    loading: "Loading sessions...",
    noSessions: "No sessions found. Create one to get started.",
    newSessionButton: "New Session",
    newSessionPopupTitle: "New Session Name",
    newSessionDefaultNameEntry: (n, r) => `Revise "${n}" - ${r}`,
    newSessionDefaultNameGlobal: (n) => `Global Revise - ${n}`,
    deleteConfirmTitle: "Delete Session",
    deleteConfirmMessage: "Are you sure? This cannot be undone.",
    needProfileWarning: "Please select a connection profile in the main popup first.",
    createError: (n) => `Failed to create session: ${n}`
  },
  "zh-CN": {
    titleEntry: (n) => `"${n}" 的修改会话`,
    titleGlobal: "全局修改会话",
    loading: "正在加载会话...",
    noSessions: "未找到会话。请创建一个新会话以开始。",
    newSessionButton: "新建会话",
    newSessionPopupTitle: "新会话名称",
    newSessionDefaultNameEntry: (n, r) => `修改 "${n}" - ${r}`,
    newSessionDefaultNameGlobal: (n) => `全局修改 - ${n}`,
    deleteConfirmTitle: "删除会话",
    deleteConfirmMessage: "确定要删除吗？此操作无法撤销。",
    needProfileWarning: "请先在主弹窗中选择一个连接配置。",
    createError: (n) => `创建会话失败：${n}`
  }
}, N_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: c,
  contextToSend: h
}) => {
  const f = st.getSettings()?.language ?? n0, g = r0[f] ?? r0[n0], [v, E] = ae.useState([]), [b, _] = ae.useState(null), [p, C] = ae.useState(!0), T = ae.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  ae.useEffect(() => {
    const L = JSON.parse(localStorage.getItem(t0) || "[]");
    E(L), C(!1);
  }, []);
  const j = ae.useMemo(() => n.type === "entry" ? v.filter((L) => L.type === "entry" && L.targetEntryIdentifier === T).sort((L, M) => new Date(M.createdAt).getTime() - new Date(L.createdAt).getTime()) : v.filter((L) => L.type === "global").sort((L, M) => new Date(M.createdAt).getTime() - new Date(L.createdAt).getTime()), [v, n.type, T]), k = (L) => {
    localStorage.setItem(t0, JSON.stringify(L)), E(L);
  }, P = async () => {
    const L = (/* @__PURE__ */ new Date()).toLocaleDateString(), M = n.type === "entry" ? g.newSessionDefaultNameEntry(n.entry.comment, L) : g.newSessionDefaultNameGlobal(L), z = await rl.Popup.show.input(g.newSessionPopupTitle, M);
    if (z)
      try {
        const H = st.getSettings();
        if (!H.profileId) {
          Ce("warning", g.needProfileWarning);
          return;
        }
        const Z = await PA(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          H.mainContextTemplatePreset,
          h,
          u,
          c
        ), G = {
          id: `rs-${Date.now()}`,
          name: z,
          type: n.type,
          targetEntryIdentifier: n.type === "entry" ? T : void 0,
          worldName: n.type === "entry" ? n.worldName : void 0,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: Z,
          context: { mainContextTemplatePreset: H.mainContextTemplatePreset },
          profileId: H.profileId,
          promptEngineeringMode: H.defaultPromptEngineeringMode
        };
        _(G);
      } catch (H) {
        const Z = H instanceof Error ? H.message : String(H);
        console.error("Failed to create session:", H), Ce("error", g.createError(Z));
      }
  }, l = (L) => {
    _(L);
  }, S = async (L) => {
    if (await rl.Popup.show.confirm(g.deleteConfirmTitle, g.deleteConfirmMessage)) {
      const z = v.filter((H) => H.id !== L);
      k(z);
    }
  }, w = (L) => {
    const M = v.findIndex((H) => H.id === L.id), z = [...v];
    M !== -1 ? z[M] = L : z.push(L), k(z), _(L);
  }, A = (L) => {
    n.type === "entry" ? a({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: L
    }) : a(L), s();
  };
  if (b) {
    const L = rl.extensionSettings.connectionManager?.profiles?.find(
      (H) => H.id === b.profileId
    ), M = h.messages, z = {
      targetCharacterId: un,
      ignoreCharacterFields: !h.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !h.authorNote,
      includeNames: !!Kt,
      presetName: L?.preset,
      contextName: L?.context,
      instructName: L?.instruct
    };
    if (!un && !Kt)
      z.messageIndexesBetween = { start: -1, end: -1 };
    else
      switch (M.type) {
        case "none":
          z.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case "first":
          z.messageIndexesBetween = { start: 0, end: M.first ?? 10 };
          break;
        case "last": {
          const H = rl.chat?.length ?? 0, Z = M.last ?? 10;
          z.messageIndexesBetween = {
            end: Math.max(0, H - 1),
            start: Math.max(0, H - Z)
          };
          break;
        }
        case "range":
          M.range && (z.messageIndexesBetween = {
            start: M.range.start,
            end: M.range.end
          });
          break;
      }
    return /* @__PURE__ */ N.jsx(
      zA,
      {
        session: b,
        onBack: () => _(null),
        onApply: A,
        onSessionUpdate: w,
        initialState: r,
        chatContextOptions: z
      }
    );
  }
  const O = n.type === "entry" ? g.titleEntry(n.entry.comment) : g.titleGlobal;
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ N.jsx("div", { className: "popup_header", children: /* @__PURE__ */ N.jsx("h2", { children: O }) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-list", children: p ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: g.loading }) : j.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: g.noSessions }) : j.map((L) => /* @__PURE__ */ N.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "session-info", onClick: () => l(L), children: [
        /* @__PURE__ */ N.jsx("span", { className: "session-name", children: L.name }),
        /* @__PURE__ */ N.jsx("span", { className: "session-date", children: new Date(L.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ N.jsx(Le, { className: "danger_button", onClick: () => S(L.id), children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, L.id)) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-actions", children: /* @__PURE__ */ N.jsxs(Le, { onClick: P, className: "menu_button", children: [
      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
      " ",
      g.newSessionButton
    ] }) })
  ] });
}, IA = new iw.Converter(), a0 = "en", i0 = {
  en: {
    addUpdate: "Update",
    addNew: "Add",
    reviseSessionButton: "Revise",
    reviseSessionTooltip: "Revise this entry with a chat-based AI session.",
    continueLabelIdle: "Continue",
    continueLabelBusy: "...",
    continueTooltip: "Continue writing this entry. You can provide instructions in the textbox below.",
    reviseLabelIdle: "Revise",
    reviseLabelBusy: "...",
    reviseTooltip: "Request changes to this entry. Provide instructions in the textbox below.",
    editButton: "Edit",
    compareButton: "Compare",
    blacklistButton: "Blacklist",
    removeButton: "Remove",
    instructionsPlaceholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'."
  },
  "zh-CN": {
    addUpdate: "更新",
    addNew: "添加",
    reviseSessionButton: "对话修改",
    reviseSessionTooltip: "通过与 AI 对话会话来修改此条目。",
    continueLabelIdle: "续写",
    continueLabelBusy: "...",
    continueTooltip: "继续撰写此条目，可在下方输入续写说明。",
    reviseLabelIdle: "修改",
    reviseLabelBusy: "...",
    reviseTooltip: "根据下方说明请求修改此条目。",
    editButton: "手动编辑",
    compareButton: "对比",
    blacklistButton: "拉黑此建议",
    removeButton: "移除",
    instructionsPlaceholder: "在此填写续写或修改说明，然后点击“续写”或“修改”。"
  }
}, BA = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: h,
  onContinue: m,
  onUpdate: f,
  entriesGroupByWorldName: g,
  sessionForContext: v,
  contextToSend: E
}) => {
  const _ = st.getSettings()?.language ?? a0, p = i0[_] ?? i0[a0], [C, T] = ae.useState(() => s.find((le) => le === n) ?? s[0] ?? ""), [j, k] = ae.useState(!1), [P, l] = ae.useState(!1), [S, w] = ae.useState(!1), [A, O] = ae.useState(!1), [L, M] = ae.useState(!1), [z, H] = ae.useState(!1), [Z, G] = ae.useState(""), Q = ae.useRef(null), R = ae.useMemo(
    () => !!g[C]?.find((ne) => ne.uid === r.uid),
    [C, r.uid, g]
  ), B = P || S, K = async () => {
    k(!0), await c(r, n, C), k(!1);
  }, ie = async () => {
    l(!0), await m({ worldName: n, entry: r, prompt: Z, mode: "continue" }), l(!1);
  }, I = async () => {
    w(!0), await m({ worldName: n, entry: r, prompt: Z, mode: "revise" }), w(!1);
  }, $ = (ne) => {
    const le = ne.updatedEntry ? ne.updatedEntry : ne;
    f(n, r, le, u);
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ N.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: C,
            onChange: (ne) => T(ne.target.value),
            children: s.map((ne) => /* @__PURE__ */ N.jsx("option", { value: ne, children: ne }, ne))
          }
        ),
        /* @__PURE__ */ N.jsx(Le, { onClick: K, disabled: j || B, className: "menu_button interactable add", children: R ? p.addUpdate : p.addNew }),
        /* @__PURE__ */ N.jsxs(
          Le,
          {
            onClick: () => H(!0),
            disabled: B,
            className: "menu_button interactable",
            title: p.reviseSessionTooltip,
            children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
              " ",
              p.reviseSessionButton
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: ie,
            disabled: B,
            className: "menu_button interactable continue",
            title: p.continueTooltip,
            children: P ? p.continueLabelBusy : p.continueLabelIdle
          }
        ),
        /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: I,
            disabled: B,
            className: "menu_button interactable revise",
            title: p.reviseTooltip,
            children: S ? p.reviseLabelBusy : p.reviseLabelIdle
          }
        ),
        /* @__PURE__ */ N.jsx(Le, { onClick: () => O(!0), disabled: B, className: "menu_button interactable edit", children: p.editButton }),
        R && /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: () => M(!0),
            disabled: B,
            className: "menu_button interactable compare",
            children: p.compareButton
          }
        ),
        /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: () => h(r, n, !0),
            disabled: B,
            className: "menu_button interactable blacklist",
            children: p.blacklistButton
          }
        ),
        /* @__PURE__ */ N.jsx(
          Le,
          {
            onClick: () => h(r, n, !1),
            disabled: B,
            className: "menu_button interactable remove",
            children: p.removeButton
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ N.jsx("div", { className: "key", children: (r.key || []).join(", ") }),
      /* @__PURE__ */ N.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: IA.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ N.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
        br,
        {
          value: Z,
          onChange: (ne) => G(ne.target.value),
          placeholder: p.instructionsPlaceholder,
          rows: 2,
          style: { width: "100%" }
        }
      ) })
    ] }),
    A && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.CONFIRM,
        content: /* @__PURE__ */ N.jsx(Aw, { ref: Q, entry: r, initialRegexIds: u }),
        onComplete: (ne) => {
          if (ne && Q.current) {
            const { updatedEntry: le, updatedRegexIds: fe } = Q.current.getFormData();
            f(n, r, le, fe);
          }
          O(!1);
        }
      }
    ),
    L && a && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: /* @__PURE__ */ N.jsx(Ew, { originalEntry: a, newEntry: r }),
        onComplete: () => M(!1)
      }
    ),
    z && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          N_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => H(!1),
            onApply: $,
            sessionForContext: v,
            allEntries: g,
            contextToSend: E
          }
        ),
        onComplete: () => H(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, s0 = "en", o0 = {
  en: {
    filterPlaceholder: "Filter by name or lorebook...",
    selectAllFiltered: "Select All (Filtered)",
    deselectAll: "Deselect All",
    noMatches: "No entries match your filter.",
    entryFallback: (n) => `Entry ${n}`
  },
  "zh-CN": {
    filterPlaceholder: "按名称或世界书筛选...",
    selectAllFiltered: "全选 (当前筛选)",
    deselectAll: "取消全选",
    noMatches: "没有匹配的条目。",
    entryFallback: (n) => `条目 ${n}`
  }
}, u0 = ae.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, a) => {
    const c = st.getSettings()?.language ?? s0, h = o0[c] ?? o0[s0], [m, f] = ae.useState(""), [g, v] = ae.useState(() => {
      const C = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([T, j]) => {
        j.forEach((k) => C.add(`${T}::${k}`));
      }), C;
    }), E = ae.useMemo(() => {
      if (!m)
        return n;
      const C = m.toLowerCase(), T = {};
      return Object.entries(n).forEach(([j, k]) => {
        const P = k.filter(
          (l) => l.comment.toLowerCase().includes(C) || j.toLowerCase().includes(C)
        );
        P.length > 0 && (T[j] = P);
      }), T;
    }, [m, n]);
    ae.useImperativeHandle(a, () => ({
      getSelection: () => {
        const C = {};
        return g.forEach((T) => {
          const [j, k] = T.split("::"), P = parseInt(k, 10);
          C[j] || (C[j] = []), C[j].push(P);
        }), C;
      }
    }));
    const b = (C, T) => {
      const j = `${C}::${T}`, k = new Set(g);
      k.has(j) ? k.delete(j) : k.add(j), v(k);
    }, _ = () => {
      const C = /* @__PURE__ */ new Set();
      Object.entries(E).forEach(([T, j]) => {
        j.forEach((k) => C.add(`${T}::${k.uid}`));
      }), v(C);
    }, p = () => {
      v(/* @__PURE__ */ new Set());
    };
    return /* @__PURE__ */ N.jsxs("div", { className: "select-entries-popup", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s }),
      /* @__PURE__ */ N.jsxs("div", { className: "controls", children: [
        /* @__PURE__ */ N.jsx(
          "input",
          {
            type: "text",
            className: "text_pole",
            placeholder: h.filterPlaceholder,
            value: m,
            onChange: (C) => f(C.target.value)
          }
        ),
        /* @__PURE__ */ N.jsx(Le, { onClick: _, children: h.selectAllFiltered }),
        /* @__PURE__ */ N.jsx(Le, { onClick: p, children: h.deselectAll })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "entry-list", children: Object.keys(E).length === 0 ? /* @__PURE__ */ N.jsx("p", { children: h.noMatches }) : Object.entries(E).map(([C, T]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
        /* @__PURE__ */ N.jsx("h4", { children: C }),
        /* @__PURE__ */ N.jsx("ul", { children: T.map((j) => /* @__PURE__ */ N.jsx("li", { children: /* @__PURE__ */ N.jsxs("label", { children: [
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "checkbox",
              checked: g.has(`${C}::${j.uid}`),
              onChange: () => b(C, j.uid)
            }
          ),
          j.comment || h.entryFallback(j.uid)
        ] }) }, j.uid)) })
      ] }, C)) })
    ] });
  }
);
Sn.helpers.join || Sn.registerHelper("join", function(n, r) {
  return Array.isArray(n) ? n.join(typeof r == "string" ? r : ", ") : "";
});
Sn.helpers.is_not_empty || Sn.registerHelper("is_not_empty", function(n, r) {
  return n ? Array.isArray(n) ? n.length > 0 ? r.fn(this) : r.inverse(this) : typeof n == "object" && Object.keys(n).length > 0 ? r.fn(this) : typeof n != "object" && !Array.isArray(n) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const Hn = SillyTavern.getContext(), UA = 3e5, HA = "en", l0 = {
  en: "English",
  "zh-CN": "中文"
}, qA = {
  en: {
    loadingText: "Loading...",
    title: "World Info Recommender",
    connectionProfileTitle: "Connection Profile",
    contextToSendTitle: "Context to Send",
    descriptionCheckbox: "Description of SillyTavern and Lorebook",
    messagesTitle: "Messages to Include",
    messagesDropdown: {
      none: "None",
      all: "All Messages",
      first: "First X Messages",
      last: "Last X Messages",
      range: "Range"
    },
    messagesFirstLabelBeforeInput: "First ",
    messagesFirstLabelAfterInput: " Messages",
    messagesLastLabelBeforeInput: "Last ",
    messagesLastLabelAfterInput: " Messages",
    rangeLabel: "Range: ",
    rangeConnector: " to ",
    messageCountPlaceholders: {
      start: "Start",
      end: "End"
    },
    selectCharacterTitle: "Select Character",
    selectCharacterTooltip: "Select character for your group.",
    charCardLabel: "Char Card",
    authorNoteLabel: "Author Note",
    worldInfoLabel: "World Info",
    lorebooksTitle: "Lorebooks to Include",
    selectEntriesButton: "Select Entries",
    selectEntriesTooltip: "Select specific entries from the chosen lorebooks",
    selectedEntriesSummary: (n) => n > 0 ? `${n} selected` : "All entries included",
    existingSuggestionsLabel: "Existing Suggestions",
    maxContextLabel: "Max Context",
    maxContextOptions: {
      profile: "Use profile preset",
      sampler: "Use active preset in sampler settings",
      custom: "Custom"
    },
    maxContextPlaceholder: "Enter max tokens",
    maxResponseTokensLabel: "Max Response Tokens",
    maxResponseTokensPlaceholder: "Enter max response tokens",
    promptSectionTitle: "Your Prompt",
    promptPresetLabel: "Prompt Preset",
    promptPlaceholder: "e.g., 'Suggest entries for places {{user}} visited.'",
    sendPromptButton: "Send Prompt",
    generatingButton: "Generating...",
    retryButton: "Retry",
    suggestedEntriesTitle: "Suggested Entries",
    addAllButton: "Add All",
    globalReviseButton: "Global Revise",
    globalReviseTooltip: "Revise all selected existing entries and current suggestions in a single chat session",
    importEntryButton: "Import Entry",
    importEntryTooltip: "Import existing entries to continue/revise them",
    resetButton: "Reset",
    emptyStateMessage: "No suggestions yet. Send a prompt to get started!",
    selectEntriesDialogTitle: "Select Entries to Include in Context",
    importEntriesDialogTitle: "Select Entries to Import for Revision",
    languageButtonLabel: (n) => `Language: ${n}`,
    languageButtonTooltip: "Switch interface language"
  },
  "zh-CN": {
    loadingText: "加载中...",
    title: "世界信息推荐器",
    connectionProfileTitle: "连接配置",
    contextToSendTitle: "发送上下文",
    descriptionCheckbox: "SillyTavern 与世界书信息说明",
    messagesTitle: "包含的消息",
    messagesDropdown: {
      none: "不包含",
      all: "全部消息",
      first: "最前 X 条消息",
      last: "最后 X 条消息",
      range: "指定范围"
    },
    messagesFirstLabelBeforeInput: "前",
    messagesFirstLabelAfterInput: " 条消息",
    messagesLastLabelBeforeInput: "后",
    messagesLastLabelAfterInput: " 条消息",
    rangeLabel: "范围：",
    rangeConnector: " 至 ",
    messageCountPlaceholders: {
      start: "起始",
      end: "结束"
    },
    selectCharacterTitle: "选择角色",
    selectCharacterTooltip: "为小队选择角色。",
    charCardLabel: "角色卡片",
    authorNoteLabel: "作者附注",
    worldInfoLabel: "世界信息",
    lorebooksTitle: "包含的世界书",
    selectEntriesButton: "选择条目",
    selectEntriesTooltip: "从已选择的世界书中精确勾选条目",
    selectedEntriesSummary: (n) => n > 0 ? `已选择 ${n} 条` : "包含所有条目",
    existingSuggestionsLabel: "现有建议",
    maxContextLabel: "最大上下文",
    maxContextOptions: {
      profile: "使用配置预设",
      sampler: "使用采样器设置中的活动预设",
      custom: "自定义"
    },
    maxContextPlaceholder: "输入最大上下文长度",
    maxResponseTokensLabel: "最大回复 Token",
    maxResponseTokensPlaceholder: "输入最大回复 Token",
    promptSectionTitle: "你的提示词",
    promptPresetLabel: "提示词预设",
    promptPlaceholder: '例如："为 {{user}} 去过的地方推荐条目"。',
    sendPromptButton: "发送提示词",
    generatingButton: "生成中...",
    retryButton: "重新生成",
    suggestedEntriesTitle: "推荐条目",
    addAllButton: "全部添加",
    globalReviseButton: "全局修改",
    globalReviseTooltip: "在单个会话中修改所有已选条目和当前建议",
    importEntryButton: "导入条目",
    importEntryTooltip: "导入现有条目以继续/修改",
    resetButton: "重置",
    emptyStateMessage: "尚无建议，发送提示词以开始吧！",
    selectEntriesDialogTitle: "选择要写入上下文的条目",
    importEntriesDialogTitle: "选择要导入修改的条目",
    languageButtonLabel: (n) => `界面语言：${n}`,
    languageButtonTooltip: "切换界面语言"
  }
}, c0 = {
  en: {
    needProfile: "Please select a connection profile.",
    needPrompt: "Please enter a prompt.",
    noResults: "No results from AI",
    noEntriesToAdd: "No entries to add.",
    requestTimeout: "Request timed out. Please check your network or proxy settings.",
    addAllConfirmTitle: "Add All",
    addAllConfirmMessage: (n) => `Are you sure you want to add/update all ${n} suggested entries?`,
    resetConfirmTitle: "Reset",
    resetConfirmMessage: "Clear all suggestions and reset lorebook selection?",
    resetSuccess: "Reset successful",
    entryUnchanged: (n) => `No changes detected for "${n}". Entry was not updated.`,
    entryAdded: "Entry added",
    entryUpdated: "Entry updated",
    entryAddFailed: (n) => `Failed to add entry: ${n}`,
    entryProcessFailed: (n) => `Failed to process entry: ${n}`,
    worldSaveFailed: (n) => `Failed to save world: ${n}`,
    addAllResult: (n, r, s) => `Processed: ${n} new, ${r} updated, ${s} unchanged.`,
    languageSwitched: (n) => `Language switched to ${n}.`,
    importSuccess: (n) => `Imported ${n} entries for revision.`,
    globalReviseApplied: "Changes from global revise session applied."
  },
  "zh-CN": {
    needProfile: "请先选择一个连接配置。",
    needPrompt: "请输入提示词。",
    noResults: "AI 没有返回结果",
    noEntriesToAdd: "没有可添加的条目。",
    requestTimeout: "请求超时，请检查网络或代理设置。",
    addAllConfirmTitle: "添加全部",
    addAllConfirmMessage: (n) => `确定要添加或更新全部 ${n} 个推荐条目吗？`,
    resetConfirmTitle: "重置",
    resetConfirmMessage: "确认清空所有建议并重置世界书选择？",
    resetSuccess: "已成功重置",
    entryUnchanged: (n) => `条目“${n}”未检测到变更，未进行更新。`,
    entryAdded: "条目已添加",
    entryUpdated: "条目已更新",
    entryAddFailed: (n) => `添加条目失败：${n}`,
    entryProcessFailed: (n) => `处理条目失败：${n}`,
    worldSaveFailed: (n) => `保存世界书失败：${n}`,
    addAllResult: (n, r, s) => `处理完成：新增 ${n} 条，更新 ${r} 条，未变化 ${s} 条。`,
    languageSwitched: (n) => `界面语言已切换为 ${n}。`,
    importSuccess: (n) => `已导入 ${n} 条条目用于修改。`,
    globalReviseApplied: "全局修改的内容已应用。"
  }
}, al = () => un ? w0(un) : Kt, GA = () => {
  const n = n_(), r = st.getSettings(), s = Mi.includes(r.language) ? r.language : HA, a = qA[s], u = c0[s], c = l0[s], [h, m] = ae.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [f, g] = ae.useState([]), [v, E] = ae.useState({}), [b, _] = ae.useState([]), [p, C] = ae.useState(!0), [T, j] = ae.useState(!1), [k, P] = ae.useState(!1), [l, S] = ae.useState(!1), [w, A] = ae.useState(!1), [O, L] = ae.useState(null), M = ae.useRef(null), z = ae.useRef(null), H = ae.useMemo(() => al() ?? "_global", [un, Kt]);
  ae.useEffect(() => {
    (async () => {
      try {
        C(!0), E({}), g([]), _([]);
        const de = al(), ve = `worldInfoRecommend_${H}`;
        let me = {};
        try {
          me = JSON.parse(localStorage.getItem(ve) ?? "{}");
        } catch (ge) {
          console.error("Failed to parse saved session:", ge);
        }
        const he = {
          suggestedEntries: me.suggestedEntries ?? {},
          blackListedEntries: me.blackListedEntries ?? [],
          selectedWorldNames: me.selectedWorldNames ?? [],
          selectedEntryUids: me.selectedEntryUids ?? {},
          regexIds: me.regexIds ?? {}
        };
        let Ee = {};
        if (de)
          if (Kt) {
            const ge = await cl(["chat", "persona", "global"], !0);
            ge && (Ee = ge);
            const te = Fg.find((ue) => ue.id === Kt);
            if (te)
              for (const ue of te.members) {
                const ye = Hn.characters.findIndex((_e) => _e.avatar === ue);
                if (ye !== -1) {
                  const _e = await cl(["character"], !0, ye);
                  _e && (Ee = { ...Ee, ..._e });
                }
              }
          } else
            Ee = await cl(["all"], !0, un);
        else
          for (const ge of e2) {
            const te = await Hn.loadWorldInfo(ge);
            te && (Ee[ge] = Object.values(te.entries));
          }
        E(Ee);
        const Ne = Object.keys(Ee);
        g(Ne), he.selectedWorldNames.length === 0 && H !== "_global" ? he.selectedWorldNames = [...Ne] : he.selectedWorldNames = he.selectedWorldNames.filter(
          (ge) => Ne.includes(ge)
        );
        const Be = {};
        if (he.selectedEntryUids) {
          for (const [ge, te] of Object.entries(he.selectedEntryUids))
            if (Ee[ge]) {
              const ue = new Set(Ee[ge].map((_e) => _e.uid)), ye = te.filter((_e) => ue.has(_e));
              ye.length > 0 && (Be[ge] = ye);
            }
        }
        if (he.selectedEntryUids = Be, m(he), Kt) {
          const ge = Fg.find((te) => te.id === Kt);
          if (ge?.generation_mode === 0) {
            const te = ge.members.map((ue) => Hn.characters.find((ye) => ye.avatar === ue)).filter((ue) => !!ue);
            _(te);
          }
        }
      } catch (de) {
        console.error("Failed to load data:", de), Ce("error", "Failed to load World Info Recommender data. Check console for details.");
      } finally {
        C(!1);
      }
    })();
  }, [H]), ae.useEffect(() => {
    if (p) return;
    const F = `worldInfoRecommend_${H}`;
    localStorage.setItem(F, JSON.stringify(h));
  }, [h, H, p]);
  const Z = (F, de) => {
    st.getSettings()[F] = de, st.saveSettings(), n();
  }, G = (F, de) => {
    st.getSettings().contextToSend[F] = de, st.saveSettings(), n();
  }, Q = () => {
    const F = Mi.indexOf(s), de = Mi[(F + 1) % Mi.length], ve = l0[de], me = c0[de]?.languageSwitched ?? u.languageSwitched;
    Z("language", de), Ce("info", me(ve));
  }, R = ae.useCallback(
    async (F, de, ve = !1) => {
      const me = structuredClone(v);
      me[de] || (me[de] = []);
      const he = me[de].find((Be) => Be.uid === F.uid), Ee = !!he;
      let Ne;
      if (Ee) {
        if (!F.content && he.content || !F.comment && he.comment)
          return Ce(
            "warning",
            "新条目内容或名称为空，已取消更新以防止数据丢失。请检查 AI 生成结果或切换到 JSON 模式。"
          ), "unchanged";
        const Be = (F.content || "") !== (he.content || ""), ge = (F.comment || "") !== (he.comment || ""), te = (F.key || []).slice().sort().join(",") !== (he.key || []).slice().sort().join(",");
        if (!Be && !ge && !te)
          return "unchanged";
        Ne = he;
      } else {
        const Be = { entries: Object.fromEntries(me[de].map((te) => [te.uid, te])) }, ge = ml(de, Be);
        if (!ge) throw new Error("Failed to create new World Info entry.");
        Ne = ge, me[de].push(Ne);
      }
      if (Object.assign(Ne, {
        key: F.key || [],
        content: F.content || "",
        comment: F.comment || ""
      }), E(me), !ve) {
        const Be = { entries: Object.fromEntries(me[de].map((ge) => [ge.uid, ge])) };
        await Hn.saveWorldInfo(de, Be), Hn.reloadWorldInfoEditor(de, !0);
      }
      return Ee ? "updated" : "added";
    },
    [v]
  ), B = ae.useCallback(
    async (F) => {
      if (!r.profileId) return Ce("warning", u.needProfile);
      const de = F?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!F && !de)
        return Ce("warning", u.needPrompt);
      L(null), j(!0);
      try {
        const ve = Hn.extensionSettings.connectionManager?.profiles?.find(
          (te) => te.id === r.profileId
        );
        if (!ve) throw new Error("Connection profile not found.");
        const me = al(), he = {
          presetName: ve.preset,
          contextName: ve.context,
          instructName: ve.instruct,
          syspromptName: ve.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Kt
        };
        if (!me)
          he.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              he.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              he.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const te = r.contextToSend.messages.last ?? 10, ue = Hn.chat?.length ?? 0;
              he.messageIndexesBetween = {
                end: Math.max(0, ue - 1),
                start: Math.max(0, ue - te)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (he.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const Ee = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Ee.stDescription, (!r.contextToSend.worldInfo || h.selectedWorldNames.length === 0) && delete Ee.currentLorebooks;
        const Ne = Object.values(h.suggestedEntries).some((te) => te.length > 0);
        (!r.contextToSend.suggestedEntries || !Ne) && delete Ee.suggestedLorebooks, h.blackListedEntries.length === 0 && delete Ee.blackListedEntries;
        const Be = F ? { worldName: F.worldName, entry: F.entry, mode: F.mode } : void 0, ge = await new Promise((te, ue) => {
          const ye = window.setTimeout(() => {
            ue(new Error(u.requestTimeout));
          }, UA);
          K0({
            profileId: r.profileId,
            userPrompt: de,
            buildPromptOptions: he,
            session: h,
            entriesGroupByWorldName: v,
            promptSettings: Ee,
            mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((_e) => _e.enabled).map((_e) => ({ promptName: _e.promptName, role: _e.role })),
            maxResponseToken: r.maxResponseToken,
            continueFrom: Be
          }).then((_e) => {
            clearTimeout(ye), te(_e);
          }).catch((_e) => {
            clearTimeout(ye), ue(_e);
          });
        });
        Object.keys(ge).length > 0 ? m(F ? (te) => {
          const ue = structuredClone(te.suggestedEntries), ye = F.worldName, _e = ge[ye]?.[0];
          if (ue[ye] && _e) {
            const Oe = ue[ye].findIndex(
              (ut) => ut.uid === F.entry.uid && ut.comment === F.entry.comment
            );
            Oe !== -1 && (ue[ye][Oe] = _e);
          }
          return { ...te, suggestedEntries: ue };
        } : (te) => {
          const ue = structuredClone(te.suggestedEntries);
          for (const [ye, _e] of Object.entries(ge)) {
            ue[ye] || (ue[ye] = []);
            for (const Oe of _e)
              ue[ye].some((ut) => ut.uid === Oe.uid && ut.comment === Oe.comment) || ue[ye].push(Oe);
          }
          return { ...te, suggestedEntries: ue };
        }) : Ce("warning", u.noResults);
      } catch (ve) {
        console.error("[WorldInfoRecommender] Generation error:", ve);
        let me;
        const he = ve instanceof Error ? ve.message : String(ve);
        he === u.requestTimeout ? me = u.requestTimeout : he.includes("CORS") || he.includes("fetch") ? me = `网络请求失败。可能是 CORS 或网络问题。请检查：1) API 端点是否可访问 2) 连接配置是否正确 3) 是否需要代理设置。详细错误: ${he}` : he.includes("timeout") || he.includes("timed out") ? me = u.requestTimeout : me = `请求失败: ${he}`, L(me), Ce("error", me);
      } finally {
        j(!1);
      }
    },
    [r, h, v, u]
  ), K = ae.useCallback(
    async (F, de, ve) => {
      try {
        const me = await R(F, ve);
        me === "unchanged" ? Ce("info", u.entryUnchanged(F.comment)) : Ce("success", me === "added" ? u.entryAdded : u.entryUpdated), m((he) => {
          const Ee = { ...he.suggestedEntries };
          return Ee[de] && (Ee[de] = Ee[de].filter(
            (Ne) => !(Ne.uid === F.uid && Ne.comment === F.comment)
          )), { ...he, suggestedEntries: Ee };
        });
      } catch (me) {
        console.error(me);
        const he = me?.message ? ` (${me.message})` : "";
        Ce("error", `${u.entryAddFailed(F.comment)}${he}`);
      }
    },
    [R, u]
  ), ie = async () => {
    const F = Object.values(h.suggestedEntries).flat().length;
    if (F === 0) return Ce("warning", u.noEntriesToAdd);
    if (!await Hn.Popup.show.confirm(
      u.addAllConfirmTitle,
      u.addAllConfirmMessage(F)
    )) return;
    j(!0);
    let ve = 0, me = 0, he = 0;
    const Ee = /* @__PURE__ */ new Set(), Ne = [];
    Object.entries(h.suggestedEntries).forEach(([ge, te]) => {
      te.forEach((ue) => {
        const ye = f.includes(ge) ? ge : f[0] ?? "";
        ye && Ne.push({ worldName: ye, entry: ue });
      });
    });
    const Be = structuredClone(v);
    for (const { worldName: ge, entry: te } of Ne)
      try {
        Be[ge] || (Be[ge] = []);
        const ue = Be[ge].find((ut) => ut.uid === te.uid), ye = !!ue;
        let _e, Oe = "unchanged";
        if (ye) {
          const ut = (te.content || "") !== (ue.content || ""), Ot = (te.comment || "") !== (ue.comment || ""), et = (te.key || []).slice().sort().join(",") !== (ue.key || []).slice().sort().join(",");
          (ut || Ot || et) && (_e = ue, Oe = "updated");
        } else {
          const ut = { entries: Object.fromEntries(Be[ge].map((et) => [et.uid, et])) }, Ot = ml(ge, ut);
          if (!Ot) throw new Error("Failed to create new World Info entry.");
          _e = Ot, Be[ge].push(_e), Oe = "added";
        }
        Oe !== "unchanged" && _e && (Object.assign(_e, {
          key: te.key || [],
          content: te.content || "",
          comment: te.comment || ""
        }), Ee.add(ge)), Oe === "added" ? ve++ : Oe === "updated" ? me++ : he++;
      } catch (ue) {
        console.error(ue), Ce("error", u.entryProcessFailed(te.comment));
      }
    E(Be);
    for (const ge of Ee)
      try {
        const te = { entries: Object.fromEntries(Be[ge].map((ue) => [ue.uid, ue])) };
        await Hn.saveWorldInfo(ge, te), Hn.reloadWorldInfoEditor(ge, !0);
      } catch {
        Ce("error", u.worldSaveFailed(ge));
      }
    m((ge) => ({ ...ge, suggestedEntries: {} })), Ce("success", u.addAllResult(ve, me, he)), j(!1);
  }, I = async () => {
    await Hn.Popup.show.confirm(u.resetConfirmTitle, u.resetConfirmMessage) && (m((de) => ({
      ...de,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: al() ? [...f] : [],
      selectedEntryUids: {}
    })), Ce("success", u.resetSuccess));
  }, $ = (F, de, ve) => {
    m((me) => {
      const he = { ...me };
      ve && (he.blackListedEntries = [...he.blackListedEntries, `${de} (${F.comment})`]);
      const Ee = { ...he.suggestedEntries };
      return Ee[de] && (Ee[de] = Ee[de].filter(
        (Ne) => !(Ne.uid === F.uid && Ne.comment === F.comment)
      )), he.suggestedEntries = Ee, he;
    });
  }, ne = (F, de, ve, me) => {
    m((he) => {
      const Ee = { ...he.suggestedEntries };
      if (Ee[F]) {
        const Be = Ee[F].findIndex(
          (ge) => ge.uid === de.uid && ge.comment === de.comment
        );
        if (Be !== -1) {
          const ge = { ...ve };
          de.uid !== void 0 && (ge.uid = de.uid), Ee[F][Be] = ge;
        }
      }
      const Ne = { ...he, suggestedEntries: Ee };
      return me && (Ne.regexIds = me), Ne;
    });
  }, le = ae.useCallback(
    (F) => {
      m((de) => {
        const ve = structuredClone(de.suggestedEntries);
        let me = 0;
        for (const [he, Ee] of Object.entries(F))
          if (v[he]) {
            ve[he] || (ve[he] = []);
            for (const Ne of Ee) {
              if (ve[he].some((te) => te.uid === Ne)) continue;
              const ge = v[he].find((te) => te.uid === Ne);
              ge && (ve[he].push(structuredClone(ge)), me++);
            }
          }
        return me > 0 && Ce("success", u.importSuccess(me)), { ...de, suggestedEntries: ve };
      });
    },
    [v, u]
  ), fe = ae.useMemo(() => {
    const F = {};
    return h.selectedWorldNames.forEach((de) => {
      v[de] && (F[de] = v[de]);
    }), F;
  }, [h.selectedWorldNames, v]), Ae = ae.useMemo(() => {
    const F = JSON.parse(JSON.stringify(fe)), de = /* @__PURE__ */ new Map();
    return Object.entries(h.suggestedEntries).forEach(([ve, me]) => {
      me.forEach((he) => {
        he.uid && de.set(he.uid, { worldName: ve, entry: he });
      });
    }), Object.entries(F).forEach(([, ve]) => {
      ve.forEach((me, he) => {
        me.uid && de.has(me.uid) && (ve[he] = de.get(me.uid).entry, de.delete(me.uid));
      });
    }), de.forEach(({ worldName: ve, entry: me }) => {
      F[ve] || (F[ve] = []), F[ve].some((he) => he.uid === me.uid) || F[ve].push(me);
    }), F;
  }, [fe, h.suggestedEntries]), ee = (F) => {
    const de = /* @__PURE__ */ new Map();
    Object.entries(v).forEach(([me, he]) => {
      he.forEach((Ee) => {
        de.set(`${me}::${Ee.uid}`, Ee);
      });
    });
    const ve = {};
    Object.entries(F).forEach(([me, he]) => {
      he.forEach((Ee) => {
        const Ne = `${me}::${Ee.uid}`, Be = de.get(Ne);
        let ge = !1;
        if (!Be)
          ge = !0;
        else {
          const te = (Ee.content || "") !== (Be.content || ""), ue = (Ee.comment || "") !== (Be.comment || ""), ye = (Ee.key || []).slice().sort().join(",") !== (Be.key || []).slice().sort().join(",");
          (te || ue || ye) && (ge = !0);
        }
        ge && (ve[me] || (ve[me] = []), ve[me].push(Ee));
      });
    }), m((me) => ({ ...me, suggestedEntries: ve })), Ce("success", u.globalReviseApplied);
  }, we = ae.useMemo(
    () => Object.keys(r.promptPresets).map((F) => ({ value: F, label: F })),
    [r.promptPresets]
  ), be = ae.useMemo(
    () => f.map((F) => ({ value: F, label: F })),
    [f]
  ), $e = ae.useMemo(
    () => Object.values(h.selectedEntryUids).reduce((F, de) => F + de.length, 0),
    [h.selectedEntryUids]
  );
  if (p)
    return /* @__PURE__ */ N.jsx("div", { children: a.loadingText });
  const Ge = Object.entries(h.suggestedEntries).flatMap(
    ([F, de]) => de.map((ve) => ({ worldName: F, entry: ve }))
  );
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
        /* @__PURE__ */ N.jsx("h2", { children: a.title }),
        /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs(
          Le,
          {
            className: "menu_button language-toggle",
            onClick: Q,
            title: a.languageButtonTooltip,
            children: [
              /* @__PURE__ */ N.jsx("span", { style: { fontSize: "1.1em", marginRight: "6px" }, children: "🌐" }),
              /* @__PURE__ */ N.jsx("span", { children: a.languageButtonLabel(c) })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: a.connectionProfileTitle }),
            /* @__PURE__ */ N.jsx(
              W0,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (F) => Z("profileId", F?.id)
              }
            )
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: a.contextToSendTitle }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "5px" }, children: [
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.stDescription,
                    onChange: (F) => G("stDescription", F.target.checked)
                  }
                ),
                a.descriptionCheckbox
              ] }),
              H !== "_global" && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.messagesTitle }),
                /* @__PURE__ */ N.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (F) => G("messages", {
                      ...r.contextToSend.messages,
                      type: F.target.value
                    }),
                    children: [
                      /* @__PURE__ */ N.jsx("option", { value: "none", children: a.messagesDropdown.none }),
                      /* @__PURE__ */ N.jsx("option", { value: "all", children: a.messagesDropdown.all }),
                      /* @__PURE__ */ N.jsx("option", { value: "first", children: a.messagesDropdown.first }),
                      /* @__PURE__ */ N.jsx("option", { value: "last", children: a.messagesDropdown.last }),
                      /* @__PURE__ */ N.jsx("option", { value: "range", children: a.messagesDropdown.range })
                    ]
                  }
                ),
                r.contextToSend.messages.type === "first" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  a.messagesFirstLabelBeforeInput,
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.first ?? 10,
                      onChange: (F) => G("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(F.target.value) || 10
                      })
                    }
                  ),
                  a.messagesFirstLabelAfterInput
                ] }) }),
                r.contextToSend.messages.type === "last" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  a.messagesLastLabelBeforeInput,
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      value: r.contextToSend.messages.last ?? 10,
                      onChange: (F) => G("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(F.target.value) || 10
                      })
                    }
                  ),
                  a.messagesLastLabelAfterInput
                ] }) }),
                r.contextToSend.messages.type === "range" && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsxs("label", { children: [
                  a.rangeLabel,
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "0",
                      placeholder: a.messageCountPlaceholders.start,
                      value: r.contextToSend.messages.range?.start ?? 0,
                      onChange: (F) => G("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(F.target.value) || 0
                        }
                      })
                    }
                  ),
                  a.rangeConnector,
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole small message-input",
                      min: "1",
                      placeholder: a.messageCountPlaceholders.end,
                      value: r.contextToSend.messages.range?.end ?? 10,
                      onChange: (F) => G("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(F.target.value) || 10
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
                    onChange: (F) => G("charCard", F.target.checked)
                  }
                ),
                a.charCardLabel
              ] }),
              b.length > 0 && /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.selectCharacterTitle }),
                /* @__PURE__ */ N.jsx("select", { className: "text_pole", title: a.selectCharacterTooltip, children: b.map((F) => /* @__PURE__ */ N.jsx("option", { value: F.avatar, children: F.name }, F.avatar)) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (F) => G("authorNote", F.target.checked)
                  }
                ),
                a.authorNoteLabel
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.worldInfo,
                    onChange: (F) => G("worldInfo", F.target.checked)
                  }
                ),
                a.worldInfoLabel
              ] }),
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.lorebooksTitle }),
                /* @__PURE__ */ N.jsx(
                  t_,
                  {
                    items: be,
                    value: h.selectedWorldNames,
                    onChange: (F) => {
                      m((de) => {
                        const ve = { ...de.selectedEntryUids };
                        return de.selectedWorldNames.filter((he) => !F.includes(he)).forEach((he) => delete ve[he]), { ...de, selectedWorldNames: F, selectedEntryUids: ve };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              h.selectedWorldNames.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ N.jsxs(
                  Le,
                  {
                    className: "menu_button",
                    onClick: () => P(!0),
                    title: a.selectEntriesTooltip,
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-list-check" }),
                      a.selectEntriesButton
                    ]
                  }
                ),
                /* @__PURE__ */ N.jsx("span", { children: a.selectedEntriesSummary($e) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (F) => G("suggestedEntries", F.target.checked)
                  }
                ),
                a.existingSuggestionsLabel
              ] })
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsxs("label", { children: [
              a.maxContextLabel,
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  title: a.maxContextLabel,
                  value: r.maxContextType,
                  onChange: (F) => Z("maxContextType", F.target.value),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "profile", children: a.maxContextOptions.profile }),
                    /* @__PURE__ */ N.jsx("option", { value: "sampler", children: a.maxContextOptions.sampler }),
                    /* @__PURE__ */ N.jsx("option", { value: "custom", children: a.maxContextOptions.custom })
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
                placeholder: a.maxContextPlaceholder,
                value: r.maxContextValue,
                onChange: (F) => Z("maxContextValue", parseInt(F.target.value) || 2048)
              }
            ) }),
            /* @__PURE__ */ N.jsxs("label", { style: { display: "block", marginTop: "10px" }, children: [
              a.maxResponseTokensLabel,
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  min: "1",
                  step: "1",
                  placeholder: a.maxResponseTokensPlaceholder,
                  value: r.maxResponseToken,
                  onChange: (F) => Z("maxResponseToken", parseInt(F.target.value) || 256)
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "wide-column", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: a.promptSectionTitle }),
            /* @__PURE__ */ N.jsx(
              Rf,
              {
                label: a.promptPresetLabel,
                items: we,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (F) => Z("promptPreset", F ?? "default"),
                onItemsChange: (F) => {
                  const de = F.reduce(
                    (ve, me) => (ve[me.value] = r.promptPresets[me.value] ?? { content: "" }, ve),
                    {}
                  );
                  Z("promptPresets", de);
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
                onChange: (F) => {
                  const de = { ...r.promptPresets };
                  de[r.promptPreset] && (de[r.promptPreset].content = F.target.value, Z("promptPresets", de));
                },
                placeholder: a.promptPlaceholder,
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ N.jsx("div", { style: { display: "flex", gap: "8px", alignItems: "center", marginTop: "5px" }, children: O ? /* @__PURE__ */ N.jsxs(
              Le,
              {
                onClick: () => B(),
                disabled: T,
                className: "menu_button interactable",
                title: O,
                children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
                  " ",
                  a.retryButton
                ]
              }
            ) : /* @__PURE__ */ N.jsx(
              Le,
              {
                onClick: () => B(),
                disabled: T,
                className: "menu_button interactable",
                children: T ? a.generatingButton : a.sendPromptButton
              }
            ) }),
            O && /* @__PURE__ */ N.jsx("div", { style: { marginTop: "10px", padding: "10px", backgroundColor: "var(--black30a)", borderRadius: "5px", border: "1px solid var(--red)" }, children: /* @__PURE__ */ N.jsxs("p", { style: { margin: "0", color: "var(--SmartThemeBodyColor)", fontSize: "0.9em", wordBreak: "break-word" }, children: [
              /* @__PURE__ */ N.jsx("strong", { style: { color: "var(--red)" }, children: "错误:" }),
              " ",
              O
            ] }) })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: a.suggestedEntriesTitle }),
            /* @__PURE__ */ N.jsxs("div", { className: "actions", children: [
              /* @__PURE__ */ N.jsx(
                Le,
                {
                  onClick: ie,
                  disabled: T || Ge.length === 0,
                  className: "menu_button interactable",
                  children: a.addAllButton
                }
              ),
              /* @__PURE__ */ N.jsxs(
                Le,
                {
                  onClick: () => A(!0),
                  disabled: T,
                  className: "menu_button interactable",
                  title: a.globalReviseTooltip,
                  children: [
                    /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
                    " ",
                    a.globalReviseButton
                  ]
                }
              ),
              /* @__PURE__ */ N.jsx(
                Le,
                {
                  onClick: () => S(!0),
                  disabled: T,
                  className: "menu_button interactable",
                  title: a.importEntryTooltip,
                  children: a.importEntryButton
                }
              ),
              /* @__PURE__ */ N.jsx(Le, { onClick: I, disabled: T, className: "menu_button interactable", children: a.resetButton })
            ] }),
            /* @__PURE__ */ N.jsxs("div", { children: [
              Ge.length === 0 && /* @__PURE__ */ N.jsx("p", { children: a.emptyStateMessage }),
              Ge.map(({ worldName: F, entry: de }) => /* @__PURE__ */ N.jsx(
                BA,
                {
                  initialWorldName: F,
                  entry: de,
                  allWorldNames: f,
                  existingEntry: v[F]?.find((ve) => ve.uid === de.uid),
                  sessionRegexIds: h.regexIds,
                  onAdd: K,
                  onRemove: $,
                  onContinue: B,
                  onUpdate: ne,
                  entriesGroupByWorldName: v,
                  sessionForContext: h,
                  contextToSend: r.contextToSend
                },
                `${F}-${de.uid}-${de.comment}`
              ))
            ] })
          ] })
        ] })
      ] })
    ] }),
    k && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          u0,
          {
            ref: M,
            entriesByWorldName: fe,
            initialSelectedUids: h.selectedEntryUids,
            title: a.selectEntriesDialogTitle
          }
        ),
        onComplete: (F) => {
          if (F && M.current) {
            const de = M.current.getSelection();
            m((ve) => ({ ...ve, selectedEntryUids: de }));
          }
          P(!1);
        },
        options: { wide: !0 }
      }
    ),
    l && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          u0,
          {
            ref: z,
            entriesByWorldName: v,
            initialSelectedUids: {},
            title: a.importEntriesDialogTitle
          }
        ),
        onComplete: (F) => {
          if (F && z.current) {
            const de = z.current.getSelection();
            le(de);
          }
          S(!1);
        },
        options: { wide: !0 }
      }
    ),
    w && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Ht.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          N_,
          {
            target: { type: "global" },
            initialState: Ae,
            onClose: () => A(!1),
            onApply: ee,
            sessionForContext: h,
            allEntries: v,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => A(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, ZA = () => {
  const [n, r] = ae.useState(!1), s = () => r(!0), a = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, n ? /* @__PURE__ */ N.jsx(
    Jn,
    {
      content: /* @__PURE__ */ N.jsx(GA, {}),
      type: Ht.DISPLAY,
      onComplete: a,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function VA() {
  function n(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
      let c = u.trim();
      c.startsWith("[") && c.endsWith("]") && (c = c.slice(1, -1));
      let h = "", m = !1, f = "";
      for (let g = 0; g < c.length; g++) {
        const v = c[g];
        v === '"' || v === "'" ? g > 0 && c[g - 1] === "\\" ? h = h.slice(0, -1) + v : m ? v === f ? (m = !1, h.trim() && s.push(h.trim()), h = "", f = "") : h += v : (m = !0, f = v) : v === "," && !m ? (h.trim() && s.push(h.trim()), h = "") : h += v;
      }
      h.trim() && s.push(h.trim());
    }
    return s;
  }
  Ie.SlashCommandParser.addCommandObject(
    Ie.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: Ie.ARGUMENT_TYPE.BOOLEAN
    })
  ), Ie.SlashCommandParser.addCommandObject(
    Ie.SlashCommand.fromProps({
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
      returns: Ie.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        Ie.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [Ie.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: VS
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Ie.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: m2.worlds
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [Ie.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [Ie.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [Ie.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [Ie.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [Ie.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [Ie.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [Ie.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Ie.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [Ie.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        Ie.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [Ie.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const a = r.silent ?? !1;
        try {
          const u = st.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, h = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!h)
            throw new Error("Profile argument is required.");
          const f = Ie.extensionSettings?.connectionManager?.profiles?.find(
            (B) => B.id === h || B.name === h
          );
          if (!f)
            throw new Error(`Profile with ID "${h}" not found.`);
          m = f.id;
          const g = n(r.lorebooks);
          let v;
          if (g !== null) {
            v = {};
            for (const B of g) {
              const K = await Ie.loadWorldInfo(B);
              K && (v[B] = Object.values(K.entries));
            }
          } else
            v = await cl(["all"], !0, un);
          const E = Object.keys(v);
          let b;
          if (g !== null) {
            if (b = g.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (a || Ce("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), b.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            b = E;
          b.length === 0 && (a || Ce("warning", "No active lorebooks found to use for context."));
          const _ = n(r["allowed-ops"]), p = _ !== null ? _ : ["add", "update"], C = p.includes("add"), T = p.includes("update"), j = /* @__PURE__ */ new Set(), k = n(r["editable-entries"]);
          k !== null && k.forEach((B) => {
            j.add(B.trim());
          });
          const P = j.size > 0, l = n(r.context), S = { ...u.contextToSend };
          if (l !== null) {
            const B = l.map((K) => K.trim());
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
              const K = B.split(":")[1].split("-");
              S.messages.type = "range", S.messages.range = {
                start: parseInt(K[0]) || 0,
                end: parseInt(K[1]) || 10
              };
            } else
              a || Ce("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
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
            includeNames: !!Kt,
            targetCharacterId: Kt ? un : void 0
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
              const B = S.messages.last ?? 10, K = Ie.chat?.length ?? 0;
              w.messageIndexesBetween = {
                end: Math.max(0, K - 1),
                start: Math.max(0, K - B)
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
          const A = {
            selectedWorldNames: b,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, O = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(u.prompts);
          S.stDescription || delete L.stDescription, (!S.worldInfo || b.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const M = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: A,
            entriesGroupByWorldName: v,
            // Pass the current state
            promptSettings: L,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: O ?? u.maxResponseToken
          };
          a || Ce("info", "Running World Info Recommender...");
          const z = await K0(M);
          if (Object.keys(z).length === 0)
            return a || Ce("info", "AI returned no suggestions."), !0;
          let H = 0, Z = 0, G = 0;
          const Q = /* @__PURE__ */ new Set(), R = structuredClone(v);
          for (const [B, K] of Object.entries(z)) {
            let ie = B;
            if (!b.includes(ie))
              if (E.includes(ie)) {
                a || Ce(
                  "warning",
                  `AI suggested entry for "${ie}", but it wasn't in the specified 'lorebooks'. Skipping ${K.length} entries.`
                ), G += K.length;
                continue;
              } else if (b.length > 0)
                ie = b[0], a || Ce(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${ie}".`
                );
              else {
                a || Ce(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${K.length} entries.`
                ), G += K.length;
                continue;
              }
            for (const I of K) {
              if (R[ie]?.some(
                (ne) => ne.uid === I.uid && ne.comment === I.comment
              )) {
                if (!T) {
                  a || Ce(
                    "info",
                    `Skipping update for "${ie}.${I.comment || I.uid}" (updates disallowed).`
                  ), G++;
                  continue;
                }
                if (P) {
                  const ne = `${ie}.${I.comment}`, le = `${ie}.${I.uid}`;
                  if (!j.has(ne) && !j.has(le)) {
                    a || Ce(
                      "info",
                      `Skipping update for "${ie}.${I.comment || I.uid}" (not in editable-entries).`
                    ), G++;
                    continue;
                  }
                }
              } else if (!C) {
                a || Ce(
                  "info",
                  `Skipping add for "${ie}.${I.comment || "New Entry"}" (adds disallowed).`
                ), G++;
                continue;
              }
              try {
                const { status: ne } = ZS(I, ie, R);
                ne === "added" ? H++ : Z++, Q.add(ie);
              } catch (ne) {
                a || Ce(
                  "error",
                  `Failed to prepare modification for "${ie}.${I.comment || I.uid}": ${ne.message}`
                ), G++;
              }
            }
          }
          if (Q.size > 0) {
            a || Ce("info", `Saving changes to ${Q.size} lorebook(s)...`);
            for (const B of Q) {
              const K = R[B], ie = { entries: {} };
              K.forEach((I) => ie.entries[I.uid] = I), await Ie.saveWorldInfo(B, ie), Ie.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!a) {
            const B = [];
            (H > 0 || Z > 0 || G > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${H}</li>
                  <li><strong>Updated:</strong> ${Z}</li>
                  <li><strong>Skipped:</strong> ${G}</li>
                  </ul>
                </div>
                `), Q.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(Q).map((ie) => `<li>${ie}</li>`).join("")}
                  </ul>
                </div>
                `);
            const K = B.length > 0 ? `
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
            Ce("success", K, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || Ce("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Xs = SillyTavern.getContext();
async function $A() {
  const n = await Xs.renderExtensionTemplateAsync(
    `third-party/${Oi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), uv.createRoot(r).render(
    /* @__PURE__ */ N.jsx(fl.StrictMode, { children: /* @__PURE__ */ N.jsx(tw, {}) })
  ));
  const a = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), uv.createRoot(c).render(
    /* @__PURE__ */ N.jsx(fl.StrictMode, { children: /* @__PURE__ */ N.jsx(ZA, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const f = document.createElement("div");
    f.innerHTML = a.trim();
    const g = f.firstChild;
    g && (m.prepend(g), g.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function YA() {
  return console.log("[WorldInfoRecommender] Checking imports..."), Xs.ConnectionManagerRequestService ? Xs.getCharacterCardFields ? Xs.getWorldInfoPrompt ? Xs.reloadWorldInfoEditor ? (console.log("[WorldInfoRecommender] All imports OK"), !0) : (console.error("[WorldInfoRecommender] Missing: reloadWorldInfoEditor"), !1) : (console.error("[WorldInfoRecommender] Missing: getWorldInfoPrompt"), !1) : (console.error("[WorldInfoRecommender] Missing: getCharacterCardFields"), !1) : (console.error("[WorldInfoRecommender] Missing: ConnectionManagerRequestService"), !1);
}
console.log("[WorldInfoRecommender] Extension script loaded, starting initialization...");
YA() ? (console.log("[WorldInfoRecommender] Starting settings initialization..."), XS().then(() => {
  console.log("[WorldInfoRecommender] Settings initialized, calling init()..."), $A(), console.log("[WorldInfoRecommender] Init complete, initializing commands..."), VA(), console.log("[WorldInfoRecommender] Fully initialized!");
}).catch((n) => {
  console.error("[WorldInfoRecommender] Initialization failed:", n);
})) : (Ce("error", `[${Oi}] Make sure ST is updated.`), console.error("[WorldInfoRecommender] Import check failed!"));
export {
  $A as init
};
