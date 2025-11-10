import { renderStoryString as A1, persona_description_positions as Vg } from "../../../../power-user.js";
import { parseMesExamples as T1, baseChatReplace as x1, chat_metadata as Rs, getMaxContextSize as N1, name1 as Sa, name2 as Yr, this_chid as sn, extension_prompt_types as wa, depth_prompt_role_default as O1, depth_prompt_depth_default as M1 } from "../../../../../script.js";
import { createWorldInfoEntry as R1, world_info_include_names as j1, wi_anchor_position as D1, selected_world_info as L1, METADATA_KEY as z1, world_info as P1, world_names as I1 } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as B1, formatInstructModeSystemPrompt as U1 } from "../../../../instruct-mode.js";
import { appendFileContent as H1 } from "../../../../chats.js";
import { setOpenAIMessages as q1, setOpenAIMessageExamples as Z1, formatWorldInfo as G1, getPromptPosition as V1, getPromptRole as $1, prepareOpenAIMessages as Y1 } from "../../../../openai.js";
import { metadata_keys as js } from "../../../../authors-note.js";
import { getGroupDepthPrompts as F1, selected_group as Xt, groups as $g } from "../../../../group-chats.js";
import { runRegexScript as X1, getRegexedString as Q1, regex_placement as Yg } from "../../../regex/engine.js";
import { getCharaFilename as K1, removeFromArray as Fg, runAfterAnimation as J1 } from "../../../../utils.js";
import { commonEnumProviders as W1 } from "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Si, fixToastrForDialogs as Hd } from "../../../../popup.js";
import Xg from "../../../../../lib/dialog-polyfill.esm.js";
function If(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var qd = { exports: {} }, Ds = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qg;
function e2() {
  if (Qg) return Ds;
  Qg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, u, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), u.key !== void 0 && (f = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: n,
      type: a,
      key: f,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return Ds.Fragment = r, Ds.jsx = s, Ds.jsxs = s, Ds;
}
var Kg;
function t2() {
  return Kg || (Kg = 1, qd.exports = e2()), qd.exports;
}
var N = t2(), Zd = { exports: {} }, Be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jg;
function n2() {
  if (Jg) return Be;
  Jg = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), f = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.iterator;
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
  function A(I, $, oe) {
    this.props = I, this.context = $, this.refs = C, this.updater = oe || b;
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
  function M() {
  }
  M.prototype = A.prototype;
  function x(I, $, oe) {
    this.props = I, this.context = $, this.refs = C, this.updater = oe || b;
  }
  var P = x.prototype = new M();
  P.constructor = x, h(P, A.prototype), P.isPureReactComponent = !0;
  var l = Array.isArray, S = { H: null, A: null, T: null, S: null, V: null }, w = Object.prototype.hasOwnProperty;
  function k(I, $, oe, V, ae, _e) {
    return oe = _e.ref, {
      $$typeof: n,
      type: I,
      key: $,
      ref: oe !== void 0 ? oe : null,
      props: _e
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
  function L(I) {
    return typeof I == "object" && I !== null && I.$$typeof === n;
  }
  function j(I) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + I.replace(/[=:]/g, function(oe) {
      return $[oe];
    });
  }
  var z = /\/+/g;
  function H(I, $) {
    return typeof I == "object" && I !== null && I.key != null ? j("" + I.key) : $.toString(36);
  }
  function Y() {
  }
  function Z(I) {
    switch (I.status) {
      case "fulfilled":
        return I.value;
      case "rejected":
        throw I.reason;
      default:
        switch (typeof I.status == "string" ? I.then(Y, Y) : (I.status = "pending", I.then(
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
  function Q(I, $, oe, V, ae) {
    var _e = typeof I;
    (_e === "undefined" || _e === "boolean") && (I = null);
    var ce = !1;
    if (I === null) ce = !0;
    else
      switch (_e) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (I.$$typeof) {
            case n:
            case r:
              ce = !0;
              break;
            case g:
              return ce = I._init, Q(
                ce(I._payload),
                $,
                oe,
                V,
                ae
              );
          }
      }
    if (ce)
      return ae = ae(I), ce = V === "" ? "." + H(I, 0) : V, l(ae) ? (oe = "", ce != null && (oe = ce.replace(z, "$&/") + "/"), Q(ae, $, oe, "", function(ee) {
        return ee;
      })) : ae != null && (L(ae) && (ae = O(
        ae,
        oe + (ae.key == null || I && I.key === ae.key ? "" : ("" + ae.key).replace(
          z,
          "$&/"
        ) + "/") + ce
      )), $.push(ae)), 1;
    ce = 0;
    var Ee = V === "" ? "." : V + ":";
    if (l(I))
      for (var me = 0; me < I.length; me++)
        V = I[me], _e = Ee + H(V, me), ce += Q(
          V,
          $,
          oe,
          _e,
          ae
        );
    else if (me = y(I), typeof me == "function")
      for (I = me.call(I), me = 0; !(V = I.next()).done; )
        V = V.value, _e = Ee + H(V, me++), ce += Q(
          V,
          $,
          oe,
          _e,
          ae
        );
    else if (_e === "object") {
      if (typeof I.then == "function")
        return Q(
          Z(I),
          $,
          oe,
          V,
          ae
        );
      throw $ = String(I), Error(
        "Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(I).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function R(I, $, oe) {
    if (I == null) return I;
    var V = [], ae = 0;
    return Q(I, V, "", "", function(_e) {
      return $.call(oe, _e, ae++);
    }), V;
  }
  function B(I) {
    if (I._status === -1) {
      var $ = I._result;
      $ = $(), $.then(
        function(oe) {
          (I._status === 0 || I._status === -1) && (I._status = 1, I._result = oe);
        },
        function(oe) {
          (I._status === 0 || I._status === -1) && (I._status = 2, I._result = oe);
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
  function te() {
  }
  return Be.Children = {
    map: R,
    forEach: function(I, $, oe) {
      R(
        I,
        function() {
          $.apply(this, arguments);
        },
        oe
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
  }, Be.Component = A, Be.Fragment = s, Be.Profiler = u, Be.PureComponent = x, Be.StrictMode = a, Be.Suspense = p, Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, Be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(I) {
      return S.H.useMemoCache(I);
    }
  }, Be.cache = function(I) {
    return function() {
      return I.apply(null, arguments);
    };
  }, Be.cloneElement = function(I, $, oe) {
    if (I == null)
      throw Error(
        "The argument must be a React element, but you passed " + I + "."
      );
    var V = h({}, I.props), ae = I.key, _e = void 0;
    if ($ != null)
      for (ce in $.ref !== void 0 && (_e = void 0), $.key !== void 0 && (ae = "" + $.key), $)
        !w.call($, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && $.ref === void 0 || (V[ce] = $[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) V.children = oe;
    else if (1 < ce) {
      for (var Ee = Array(ce), me = 0; me < ce; me++)
        Ee[me] = arguments[me + 2];
      V.children = Ee;
    }
    return k(I.type, ae, void 0, void 0, _e, V);
  }, Be.createContext = function(I) {
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
  }, Be.createElement = function(I, $, oe) {
    var V, ae = {}, _e = null;
    if ($ != null)
      for (V in $.key !== void 0 && (_e = "" + $.key), $)
        w.call($, V) && V !== "key" && V !== "__self" && V !== "__source" && (ae[V] = $[V]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = oe;
    else if (1 < ce) {
      for (var Ee = Array(ce), me = 0; me < ce; me++)
        Ee[me] = arguments[me + 2];
      ae.children = Ee;
    }
    if (I && I.defaultProps)
      for (V in ce = I.defaultProps, ce)
        ae[V] === void 0 && (ae[V] = ce[V]);
    return k(I, _e, void 0, void 0, null, ae);
  }, Be.createRef = function() {
    return { current: null };
  }, Be.forwardRef = function(I) {
    return { $$typeof: m, render: I };
  }, Be.isValidElement = L, Be.lazy = function(I) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: I },
      _init: B
    };
  }, Be.memo = function(I, $) {
    return {
      $$typeof: _,
      type: I,
      compare: $ === void 0 ? null : $
    };
  }, Be.startTransition = function(I) {
    var $ = S.T, oe = {};
    S.T = oe;
    try {
      var V = I(), ae = S.S;
      ae !== null && ae(oe, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(te, K);
    } catch (_e) {
      K(_e);
    } finally {
      S.T = $;
    }
  }, Be.unstable_useCacheRefresh = function() {
    return S.H.useCacheRefresh();
  }, Be.use = function(I) {
    return S.H.use(I);
  }, Be.useActionState = function(I, $, oe) {
    return S.H.useActionState(I, $, oe);
  }, Be.useCallback = function(I, $) {
    return S.H.useCallback(I, $);
  }, Be.useContext = function(I) {
    return S.H.useContext(I);
  }, Be.useDebugValue = function() {
  }, Be.useDeferredValue = function(I, $) {
    return S.H.useDeferredValue(I, $);
  }, Be.useEffect = function(I, $, oe) {
    var V = S.H;
    if (typeof oe == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return V.useEffect(I, $);
  }, Be.useId = function() {
    return S.H.useId();
  }, Be.useImperativeHandle = function(I, $, oe) {
    return S.H.useImperativeHandle(I, $, oe);
  }, Be.useInsertionEffect = function(I, $) {
    return S.H.useInsertionEffect(I, $);
  }, Be.useLayoutEffect = function(I, $) {
    return S.H.useLayoutEffect(I, $);
  }, Be.useMemo = function(I, $) {
    return S.H.useMemo(I, $);
  }, Be.useOptimistic = function(I, $) {
    return S.H.useOptimistic(I, $);
  }, Be.useReducer = function(I, $, oe) {
    return S.H.useReducer(I, $, oe);
  }, Be.useRef = function(I) {
    return S.H.useRef(I);
  }, Be.useState = function(I) {
    return S.H.useState(I);
  }, Be.useSyncExternalStore = function(I, $, oe) {
    return S.H.useSyncExternalStore(
      I,
      $,
      oe
    );
  }, Be.useTransition = function() {
    return S.H.useTransition();
  }, Be.version = "19.1.1", Be;
}
var Wg;
function Bf() {
  return Wg || (Wg = 1, Zd.exports = n2()), Zd.exports;
}
var re = Bf();
const fl = /* @__PURE__ */ If(re);
var Gd = { exports: {} }, Ls = {}, Vd = { exports: {} }, $d = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ev;
function r2() {
  return ev || (ev = 1, (function(n) {
    function r(R, B) {
      var K = R.length;
      R.push(B);
      e: for (; 0 < K; ) {
        var te = K - 1 >>> 1, I = R[te];
        if (0 < u(I, B))
          R[te] = B, R[K] = I, K = te;
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
        e: for (var te = 0, I = R.length, $ = I >>> 1; te < $; ) {
          var oe = 2 * (te + 1) - 1, V = R[oe], ae = oe + 1, _e = R[ae];
          if (0 > u(V, K))
            ae < I && 0 > u(_e, V) ? (R[te] = _e, R[ae] = K, te = ae) : (R[te] = V, R[oe] = K, te = oe);
          else if (ae < I && 0 > u(_e, K))
            R[te] = _e, R[ae] = K, te = ae;
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
      var f = Date, m = f.now();
      n.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], _ = [], g = 1, E = null, y = 3, b = !1, h = !1, C = !1, A = !1, M = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
    function l(R) {
      for (var B = s(_); B !== null; ) {
        if (B.callback === null) a(_);
        else if (B.startTime <= R)
          a(_), B.sortIndex = B.expirationTime, r(p, B);
        else break;
        B = s(_);
      }
    }
    function S(R) {
      if (C = !1, l(R), !h)
        if (s(p) !== null)
          h = !0, w || (w = !0, H());
        else {
          var B = s(_);
          B !== null && Q(S, B.startTime - R);
        }
    }
    var w = !1, k = -1, O = 5, L = -1;
    function j() {
      return A ? !0 : !(n.unstable_now() - L < O);
    }
    function z() {
      if (A = !1, w) {
        var R = n.unstable_now();
        L = R;
        var B = !0;
        try {
          e: {
            h = !1, C && (C = !1, x(k), k = -1), b = !0;
            var K = y;
            try {
              t: {
                for (l(R), E = s(p); E !== null && !(E.expirationTime > R && j()); ) {
                  var te = E.callback;
                  if (typeof te == "function") {
                    E.callback = null, y = E.priorityLevel;
                    var I = te(
                      E.expirationTime <= R
                    );
                    if (R = n.unstable_now(), typeof I == "function") {
                      E.callback = I, l(R), B = !0;
                      break t;
                    }
                    E === s(p) && a(p), l(R);
                  } else a(p);
                  E = s(p);
                }
                if (E !== null) B = !0;
                else {
                  var $ = s(_);
                  $ !== null && Q(
                    S,
                    $.startTime - R
                  ), B = !1;
                }
              }
              break e;
            } finally {
              E = null, y = K, b = !1;
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
      var Y = new MessageChannel(), Z = Y.port2;
      Y.port1.onmessage = z, H = function() {
        Z.postMessage(null);
      };
    } else
      H = function() {
        M(z, 0);
      };
    function Q(R, B) {
      k = M(function() {
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
      return y;
    }, n.unstable_next = function(R) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = y;
      }
      var K = y;
      y = B;
      try {
        return R();
      } finally {
        y = K;
      }
    }, n.unstable_requestPaint = function() {
      A = !0;
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
      var K = y;
      y = R;
      try {
        return B();
      } finally {
        y = K;
      }
    }, n.unstable_scheduleCallback = function(R, B, K) {
      var te = n.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? te + K : te) : K = te, R) {
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
        id: g++,
        callback: B,
        priorityLevel: R,
        startTime: K,
        expirationTime: I,
        sortIndex: -1
      }, K > te ? (R.sortIndex = K, r(_, R), s(p) === null && R === s(_) && (C ? (x(k), k = -1) : C = !0, Q(S, K - te))) : (R.sortIndex = I, r(p, R), h || b || (h = !0, w || (w = !0, H()))), R;
    }, n.unstable_shouldYield = j, n.unstable_wrapCallback = function(R) {
      var B = y;
      return function() {
        var K = y;
        y = B;
        try {
          return R.apply(this, arguments);
        } finally {
          y = K;
        }
      };
    };
  })($d)), $d;
}
var tv;
function a2() {
  return tv || (tv = 1, Vd.exports = r2()), Vd.exports;
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
var nv;
function i2() {
  if (nv) return Ht;
  nv = 1;
  var n = Bf();
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
  return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, Ht.createPortal = function(p, _) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
      throw Error(r(299));
    return c(p, _, null, g);
  }, Ht.flushSync = function(p) {
    var _ = f.T, g = a.p;
    try {
      if (f.T = null, a.p = 2, p) return p();
    } finally {
      f.T = _, a.p = g, a.d.f();
    }
  }, Ht.preconnect = function(p, _) {
    typeof p == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, a.d.C(p, _));
  }, Ht.prefetchDNS = function(p) {
    typeof p == "string" && a.d.D(p);
  }, Ht.preinit = function(p, _) {
    if (typeof p == "string" && _ && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin), y = typeof _.integrity == "string" ? _.integrity : void 0, b = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      g === "style" ? a.d.S(
        p,
        typeof _.precedence == "string" ? _.precedence : void 0,
        {
          crossOrigin: E,
          integrity: y,
          fetchPriority: b
        }
      ) : g === "script" && a.d.X(p, {
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
          a.d.M(p, {
            crossOrigin: g,
            integrity: typeof _.integrity == "string" ? _.integrity : void 0,
            nonce: typeof _.nonce == "string" ? _.nonce : void 0
          });
        }
      } else _ == null && a.d.M(p);
  }, Ht.preload = function(p, _) {
    if (typeof p == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var g = _.as, E = m(g, _.crossOrigin);
      a.d.L(p, g, {
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
        a.d.m(p, {
          as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
          crossOrigin: g,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0
        });
      } else a.d.m(p);
  }, Ht.requestFormReset = function(p) {
    a.d.r(p);
  }, Ht.unstable_batchedUpdates = function(p, _) {
    return p(_);
  }, Ht.useFormState = function(p, _, g) {
    return f.H.useFormState(p, _, g);
  }, Ht.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ht.version = "19.1.1", Ht;
}
var rv;
function X0() {
  if (rv) return Yd.exports;
  rv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yd.exports = i2(), Yd.exports;
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
var av;
function s2() {
  if (av) return Ls;
  av = 1;
  var n = a2(), r = Bf(), s = X0();
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
  function f(e) {
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
  function p(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var i = e, o = t; ; ) {
      var d = i.return;
      if (d === null) break;
      var v = d.alternate;
      if (v === null) {
        if (o = d.return, o !== null) {
          i = o;
          continue;
        }
        break;
      }
      if (d.child === v.child) {
        for (v = d.child; v; ) {
          if (v === i) return m(d), e;
          if (v === o) return m(d), t;
          v = v.sibling;
        }
        throw Error(a(188));
      }
      if (i.return !== o.return) i = d, o = v;
      else {
        for (var T = !1, D = d.child; D; ) {
          if (D === i) {
            T = !0, i = d, o = v;
            break;
          }
          if (D === o) {
            T = !0, o = d, i = v;
            break;
          }
          D = D.sibling;
        }
        if (!T) {
          for (D = v.child; D; ) {
            if (D === i) {
              T = !0, i = v, o = d;
              break;
            }
            if (D === o) {
              T = !0, o = v, i = d;
              break;
            }
            D = D.sibling;
          }
          if (!T) throw Error(a(189));
        }
      }
      if (i.alternate !== o) throw Error(a(190));
    }
    if (i.tag !== 3) throw Error(a(188));
    return i.stateNode.current === i ? e : t;
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
  var g = Object.assign, E = Symbol.for("react.element"), y = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), x = Symbol.for("react.consumer"), P = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), L = Symbol.for("react.activity"), j = Symbol.for("react.memo_cache_sentinel"), z = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Symbol.for("react.client.reference");
  function Z(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Y ? null : e.displayName || e.name || null;
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
      case L:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case b:
          return "Portal";
        case P:
          return (e.displayName || "Context") + ".Provider";
        case x:
          return (e._context.displayName || "Context") + ".Consumer";
        case l:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case k:
          return t = e.displayName || null, t !== null ? t : Z(e.type) || "Memo";
        case O:
          t = e._payload, e = e._init;
          try {
            return Z(e(t));
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
  }, te = [], I = -1;
  function $(e) {
    return { current: e };
  }
  function oe(e) {
    0 > I || (e.current = te[I], te[I] = null, I--);
  }
  function V(e, t) {
    I++, te[I] = e.current, e.current = t;
  }
  var ae = $(null), _e = $(null), ce = $(null), Ee = $(null);
  function me(e, t) {
    switch (V(ce, t), V(_e, e), V(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? _g(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = _g(t), e = bg(t, e);
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
    oe(ae), V(ae, e);
  }
  function ee() {
    oe(ae), oe(_e), oe(ce);
  }
  function le(e) {
    e.memoizedState !== null && V(Ee, e);
    var t = ae.current, i = bg(t, e.type);
    t !== i && (V(_e, e), V(ae, i));
  }
  function ge(e) {
    _e.current === e && (oe(ae), oe(_e)), Ee.current === e && (oe(Ee), Ts._currentValue = K);
  }
  var pe = Object.prototype.hasOwnProperty, ve = n.unstable_scheduleCallback, we = n.unstable_cancelCallback, Ue = n.unstable_shouldYield, Ne = n.unstable_requestPaint, fe = n.unstable_now, be = n.unstable_getCurrentPriorityLevel, Ae = n.unstable_ImmediatePriority, de = n.unstable_UserBlockingPriority, ye = n.unstable_NormalPriority, Ie = n.unstable_LowPriority, He = n.unstable_IdlePriority, rt = n.log, qn = n.unstable_setDisableYieldValue, jn = null, gt = null;
  function Zn(e) {
    if (typeof rt == "function" && qn(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(jn, e);
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
  function Vt(e, t, i) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var d = 0, v = e.suspendedLanes, T = e.pingedLanes;
    e = e.warmLanes;
    var D = o & 134217727;
    return D !== 0 ? (o = D & ~v, o !== 0 ? d = Sn(o) : (T &= D, T !== 0 ? d = Sn(T) : i || (i = D & ~e, i !== 0 && (d = Sn(i))))) : (D = o & ~v, D !== 0 ? d = Sn(D) : T !== 0 ? d = Sn(T) : i || (i = o & ~e, i !== 0 && (d = Sn(i)))), d === 0 ? 0 : t !== 0 && t !== d && (t & v) === 0 && (v = d & -d, i = t & -t, v >= i || v === 32 && (i & 4194048) !== 0) ? t : d;
  }
  function Qt(e, t) {
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
  function La() {
    var e = tr;
    return tr <<= 1, (tr & 4194048) === 0 && (tr = 256), e;
  }
  function rh() {
    var e = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), e;
  }
  function Ol(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Pi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function p_(e, t, i, o, d, v) {
    var T = e.pendingLanes;
    e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= i, e.entangledLanes &= i, e.errorRecoveryDisabledLanes &= i, e.shellSuspendCounter = 0;
    var D = e.entanglements, U = e.expirationTimes, X = e.hiddenUpdates;
    for (i = T & ~i; 0 < i; ) {
      var ne = 31 - Gt(i), se = 1 << ne;
      D[ne] = 0, U[ne] = -1;
      var J = X[ne];
      if (J !== null)
        for (X[ne] = null, ne = 0; ne < J.length; ne++) {
          var W = J[ne];
          W !== null && (W.lane &= -536870913);
        }
      i &= ~se;
    }
    o !== 0 && ah(e, o, 0), v !== 0 && d === 0 && e.tag !== 0 && (e.suspendedLanes |= v & ~(T & ~t));
  }
  function ah(e, t, i) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | i & 4194090;
  }
  function ih(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var o = 31 - Gt(i), d = 1 << o;
      d & t | e[o] & t && (e[o] |= t), i &= ~d;
    }
  }
  function Ml(e) {
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
  function Rl(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function sh() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Bg(e.type));
  }
  function m_(e, t) {
    var i = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = i;
    }
  }
  var Cr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Cr, Kt = "__reactProps$" + Cr, za = "__reactContainer$" + Cr, jl = "__reactEvents$" + Cr, g_ = "__reactListeners$" + Cr, v_ = "__reactHandles$" + Cr, oh = "__reactResources$" + Cr, Ii = "__reactMarker$" + Cr;
  function Dl(e) {
    delete e[Bt], delete e[Kt], delete e[jl], delete e[g_], delete e[v_];
  }
  function Pa(e) {
    var t = e[Bt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[za] || i[Bt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null)
          for (e = Cg(e); e !== null; ) {
            if (i = e[Bt]) return i;
            e = Cg(e);
          }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function Ia(e) {
    if (e = e[Bt] || e[za]) {
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
  function Ba(e) {
    var t = e[oh];
    return t || (t = e[oh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function xt(e) {
    e[Ii] = !0;
  }
  var uh = /* @__PURE__ */ new Set(), lh = {};
  function aa(e, t) {
    Ua(e, t), Ua(e + "Capture", t);
  }
  function Ua(e, t) {
    for (lh[e] = t, e = 0; e < t.length; e++)
      uh.add(t[e]);
  }
  var y_ = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ch = {}, dh = {};
  function __(e) {
    return pe.call(dh, e) ? !0 : pe.call(ch, e) ? !1 : y_.test(e) ? dh[e] = !0 : (ch[e] = !0, !1);
  }
  function lo(e, t, i) {
    if (__(t))
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
  var Ll, fh;
  function Ha(e) {
    if (Ll === void 0)
      try {
        throw Error();
      } catch (i) {
        var t = i.stack.trim().match(/\n( *(at )?)/);
        Ll = t && t[1] || "", fh = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ll + e + fh;
  }
  var zl = !1;
  function Pl(e, t) {
    if (!e || zl) return "";
    zl = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var se = function() {
                throw Error();
              };
              if (Object.defineProperty(se.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(se, []);
                } catch (W) {
                  var J = W;
                }
                Reflect.construct(e, [], se);
              } else {
                try {
                  se.call();
                } catch (W) {
                  J = W;
                }
                e.call(se.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (W) {
                J = W;
              }
              (se = e()) && typeof se.catch == "function" && se.catch(function() {
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
      var v = o.DetermineComponentFrameRoot(), T = v[0], D = v[1];
      if (T && D) {
        var U = T.split(`
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
                  var ne = `
` + U[o].replace(" at new ", " at ");
                  return e.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", e.displayName)), ne;
                }
              while (1 <= o && 0 <= d);
            break;
          }
      }
    } finally {
      zl = !1, Error.prepareStackTrace = i;
    }
    return (i = e ? e.displayName || e.name : "") ? Ha(i) : "";
  }
  function b_(e) {
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
        return Pl(e.type, !1);
      case 11:
        return Pl(e.type.render, !1);
      case 1:
        return Pl(e.type, !0);
      case 31:
        return Ha("Activity");
      default:
        return "";
    }
  }
  function hh(e) {
    try {
      var t = "";
      do
        t += b_(e), e = e.return;
      while (e);
      return t;
    } catch (i) {
      return `
Error generating stack: ` + i.message + `
` + i.stack;
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
  function ph(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function S_(e) {
    var t = ph(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), o = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var d = i.get, v = i.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return d.call(this);
        },
        set: function(T) {
          o = "" + T, v.call(this, T);
        }
      }), Object.defineProperty(e, t, {
        enumerable: i.enumerable
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
  function fo(e) {
    e._valueTracker || (e._valueTracker = S_(e));
  }
  function mh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), o = "";
    return e && (o = ph(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== i ? (t.setValue(e), !0) : !1;
  }
  function ho(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var w_ = /[\n"\\]/g;
  function En(e) {
    return e.replace(
      w_,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Il(e, t, i, o, d, v, T, D) {
    e.name = "", T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.type = T : e.removeAttribute("type"), t != null ? T === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wn(t)) : e.value !== "" + wn(t) && (e.value = "" + wn(t)) : T !== "submit" && T !== "reset" || e.removeAttribute("value"), t != null ? Bl(e, T, wn(t)) : i != null ? Bl(e, T, wn(i)) : o != null && e.removeAttribute("value"), d == null && v != null && (e.defaultChecked = !!v), d != null && (e.checked = d && typeof d != "function" && typeof d != "symbol"), D != null && typeof D != "function" && typeof D != "symbol" && typeof D != "boolean" ? e.name = "" + wn(D) : e.removeAttribute("name");
  }
  function gh(e, t, i, o, d, v, T, D) {
    if (v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.type = v), t != null || i != null) {
      if (!(v !== "submit" && v !== "reset" || t != null))
        return;
      i = i != null ? "" + wn(i) : "", t = t != null ? "" + wn(t) : i, D || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? d, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = D ? e.checked : !!o, e.defaultChecked = !!o, T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" && (e.name = T);
  }
  function Bl(e, t, i) {
    t === "number" && ho(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i);
  }
  function qa(e, t, i, o) {
    if (e = e.options, t) {
      t = {};
      for (var d = 0; d < i.length; d++)
        t["$" + i[d]] = !0;
      for (i = 0; i < e.length; i++)
        d = t.hasOwnProperty("$" + e[i].value), e[i].selected !== d && (e[i].selected = d), d && o && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + wn(i), t = null, d = 0; d < e.length; d++) {
        if (e[d].value === i) {
          e[d].selected = !0, o && (e[d].defaultSelected = !0);
          return;
        }
        t !== null || e[d].disabled || (t = e[d]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function vh(e, t, i) {
    if (t != null && (t = "" + wn(t), t !== e.value && (e.value = t), i == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = i != null ? "" + wn(i) : "";
  }
  function yh(e, t, i, o) {
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
    i = wn(t), e.defaultValue = i, o = e.textContent, o === i && o !== "" && o !== null && (e.value = o);
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
  var E_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _h(e, t, i) {
    var o = t.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, i) : typeof i != "number" || i === 0 || E_.has(t) ? t === "float" ? e.cssFloat = i : e[t] = ("" + i).trim() : e[t] = i + "px";
  }
  function bh(e, t, i) {
    if (t != null && typeof t != "object")
      throw Error(a(62));
    if (e = e.style, i != null) {
      for (var o in i)
        !i.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var d in t)
        o = t[d], t.hasOwnProperty(d) && i[d] !== o && _h(e, d, o);
    } else
      for (var v in t)
        t.hasOwnProperty(v) && _h(e, v, t[v]);
  }
  function Ul(e) {
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
  var C_ = /* @__PURE__ */ new Map([
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
  ]), k_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function po(e) {
    return k_.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Hl = null;
  function ql(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ga = null, Va = null;
  function Sh(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var i = e[Kt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Il(
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
              'input[name="' + En(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < i.length; t++) {
              var o = i[t];
              if (o !== e && o.form === e.form) {
                var d = o[Kt] || null;
                if (!d) throw Error(a(90));
                Il(
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
              o = i[t], o.form === e.form && mh(o);
          }
          break e;
        case "textarea":
          vh(e, i.value, i.defaultValue);
          break e;
        case "select":
          t = i.value, t != null && qa(e, !!i.multiple, t, !1);
      }
    }
  }
  var Zl = !1;
  function wh(e, t, i) {
    if (Zl) return e(t, i);
    Zl = !0;
    try {
      var o = e(t);
      return o;
    } finally {
      if (Zl = !1, (Ga !== null || Va !== null) && (Wo(), Ga && (t = Ga, e = Va, Va = Ga = null, Sh(t), e)))
        for (t = 0; t < e.length; t++) Sh(e[t]);
    }
  }
  function Ui(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var o = i[Kt] || null;
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
  var rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gl = !1;
  if (rr)
    try {
      var Hi = {};
      Object.defineProperty(Hi, "passive", {
        get: function() {
          Gl = !0;
        }
      }), window.addEventListener("test", Hi, Hi), window.removeEventListener("test", Hi, Hi);
    } catch {
      Gl = !1;
    }
  var kr = null, Vl = null, mo = null;
  function Eh() {
    if (mo) return mo;
    var e, t = Vl, i = t.length, o, d = "value" in kr ? kr.value : kr.textContent, v = d.length;
    for (e = 0; e < i && t[e] === d[e]; e++) ;
    var T = i - e;
    for (o = 1; o <= T && t[i - o] === d[v - o]; o++) ;
    return mo = d.slice(e, 1 < o ? 1 - o : void 0);
  }
  function go(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vo() {
    return !0;
  }
  function Ch() {
    return !1;
  }
  function Jt(e) {
    function t(i, o, d, v, T) {
      this._reactName = i, this._targetInst = d, this.type = o, this.nativeEvent = v, this.target = T, this.currentTarget = null;
      for (var D in e)
        e.hasOwnProperty(D) && (i = e[D], this[D] = i ? i(v) : v[D]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? vo : Ch, this.isPropagationStopped = Ch, this;
    }
    return g(t.prototype, {
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
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yo = Jt(ia), qi = g({}, ia, { view: 0, detail: 0 }), A_ = Jt(qi), $l, Yl, Zi, _o = g({}, qi, {
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
      return "movementX" in e ? e.movementX : (e !== Zi && (Zi && e.type === "mousemove" ? ($l = e.screenX - Zi.screenX, Yl = e.screenY - Zi.screenY) : Yl = $l = 0, Zi = e), $l);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yl;
    }
  }), kh = Jt(_o), T_ = g({}, _o, { dataTransfer: 0 }), x_ = Jt(T_), N_ = g({}, qi, { relatedTarget: 0 }), Fl = Jt(N_), O_ = g({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M_ = Jt(O_), R_ = g({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), j_ = Jt(R_), D_ = g({}, ia, { data: 0 }), Ah = Jt(D_), L_ = {
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
  }, z_ = {
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
  }, P_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function I_(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = P_[e]) ? !!t[e] : !1;
  }
  function Xl() {
    return I_;
  }
  var B_ = g({}, qi, {
    key: function(e) {
      if (e.key) {
        var t = L_[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = go(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? z_[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? go(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? go(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), U_ = Jt(B_), H_ = g({}, _o, {
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
  }), Th = Jt(H_), q_ = g({}, qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xl
  }), Z_ = Jt(q_), G_ = g({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V_ = Jt(G_), $_ = g({}, _o, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Y_ = Jt($_), F_ = g({}, ia, {
    newState: 0,
    oldState: 0
  }), X_ = Jt(F_), Q_ = [9, 13, 27, 32], Ql = rr && "CompositionEvent" in window, Gi = null;
  rr && "documentMode" in document && (Gi = document.documentMode);
  var K_ = rr && "TextEvent" in window && !Gi, xh = rr && (!Ql || Gi && 8 < Gi && 11 >= Gi), Nh = " ", Oh = !1;
  function Mh(e, t) {
    switch (e) {
      case "keyup":
        return Q_.indexOf(t.keyCode) !== -1;
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
  function Rh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function J_(e, t) {
    switch (e) {
      case "compositionend":
        return Rh(t);
      case "keypress":
        return t.which !== 32 ? null : (Oh = !0, Nh);
      case "textInput":
        return e = t.data, e === Nh && Oh ? null : e;
      default:
        return null;
    }
  }
  function W_(e, t) {
    if ($a)
      return e === "compositionend" || !Ql && Mh(e, t) ? (e = Eh(), mo = Vl = kr = null, $a = !1, e) : null;
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
        return xh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var eb = {
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
  function jh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!eb[e.type] : t === "textarea";
  }
  function Dh(e, t, i, o) {
    Ga ? Va ? Va.push(o) : Va = [o] : Ga = o, t = iu(t, "onChange"), 0 < t.length && (i = new yo(
      "onChange",
      "change",
      null,
      i,
      o
    ), e.push({ event: i, listeners: t }));
  }
  var Vi = null, $i = null;
  function tb(e) {
    pg(e, 0);
  }
  function bo(e) {
    var t = Bi(e);
    if (mh(t)) return e;
  }
  function Lh(e, t) {
    if (e === "change") return t;
  }
  var zh = !1;
  if (rr) {
    var Kl;
    if (rr) {
      var Jl = "oninput" in document;
      if (!Jl) {
        var Ph = document.createElement("div");
        Ph.setAttribute("oninput", "return;"), Jl = typeof Ph.oninput == "function";
      }
      Kl = Jl;
    } else Kl = !1;
    zh = Kl && (!document.documentMode || 9 < document.documentMode);
  }
  function Ih() {
    Vi && (Vi.detachEvent("onpropertychange", Bh), $i = Vi = null);
  }
  function Bh(e) {
    if (e.propertyName === "value" && bo($i)) {
      var t = [];
      Dh(
        t,
        $i,
        e,
        ql(e)
      ), wh(tb, t);
    }
  }
  function nb(e, t, i) {
    e === "focusin" ? (Ih(), Vi = t, $i = i, Vi.attachEvent("onpropertychange", Bh)) : e === "focusout" && Ih();
  }
  function rb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bo($i);
  }
  function ab(e, t) {
    if (e === "click") return bo(t);
  }
  function ib(e, t) {
    if (e === "input" || e === "change")
      return bo(t);
  }
  function sb(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var un = typeof Object.is == "function" ? Object.is : sb;
  function Yi(e, t) {
    if (un(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var i = Object.keys(e), o = Object.keys(t);
    if (i.length !== o.length) return !1;
    for (o = 0; o < i.length; o++) {
      var d = i[o];
      if (!pe.call(t, d) || !un(e[d], t[d]))
        return !1;
    }
    return !0;
  }
  function Uh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hh(e, t) {
    var i = Uh(e);
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
      i = Uh(i);
    }
  }
  function qh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zh(e) {
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
  function Wl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ob = rr && "documentMode" in document && 11 >= document.documentMode, Ya = null, ec = null, Fi = null, tc = !1;
  function Gh(e, t, i) {
    var o = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    tc || Ya == null || Ya !== ho(o) || (o = Ya, "selectionStart" in o && Wl(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Fi && Yi(Fi, o) || (Fi = o, o = iu(ec, "onSelect"), 0 < o.length && (t = new yo(
      "onSelect",
      "select",
      null,
      t,
      i
    ), e.push({ event: t, listeners: o }), t.target = Ya)));
  }
  function sa(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var Fa = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionrun: sa("Transition", "TransitionRun"),
    transitionstart: sa("Transition", "TransitionStart"),
    transitioncancel: sa("Transition", "TransitionCancel"),
    transitionend: sa("Transition", "TransitionEnd")
  }, nc = {}, Vh = {};
  rr && (Vh = document.createElement("div").style, "AnimationEvent" in window || (delete Fa.animationend.animation, delete Fa.animationiteration.animation, delete Fa.animationstart.animation), "TransitionEvent" in window || delete Fa.transitionend.transition);
  function oa(e) {
    if (nc[e]) return nc[e];
    if (!Fa[e]) return e;
    var t = Fa[e], i;
    for (i in t)
      if (t.hasOwnProperty(i) && i in Vh)
        return nc[e] = t[i];
    return e;
  }
  var $h = oa("animationend"), Yh = oa("animationiteration"), Fh = oa("animationstart"), ub = oa("transitionrun"), lb = oa("transitionstart"), cb = oa("transitioncancel"), Xh = oa("transitionend"), Qh = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Dn(e, t) {
    Qh.set(e, t), aa(t, [e]);
  }
  var Kh = /* @__PURE__ */ new WeakMap();
  function Cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var i = Kh.get(e);
      return i !== void 0 ? i : (t = {
        value: e,
        source: t,
        stack: hh(t)
      }, Kh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: hh(t)
    };
  }
  var kn = [], Xa = 0, ac = 0;
  function So() {
    for (var e = Xa, t = ac = Xa = 0; t < e; ) {
      var i = kn[t];
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
      v !== 0 && Jh(i, d, v);
    }
  }
  function wo(e, t, i, o) {
    kn[Xa++] = e, kn[Xa++] = t, kn[Xa++] = i, kn[Xa++] = o, ac |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function ic(e, t, i, o) {
    return wo(e, t, i, o), Eo(e);
  }
  function Qa(e, t) {
    return wo(e, null, null, t), Eo(e);
  }
  function Jh(e, t, i) {
    e.lanes |= i;
    var o = e.alternate;
    o !== null && (o.lanes |= i);
    for (var d = !1, v = e.return; v !== null; )
      v.childLanes |= i, o = v.alternate, o !== null && (o.childLanes |= i), v.tag === 22 && (e = v.stateNode, e === null || e._visibility & 1 || (d = !0)), e = v, v = v.return;
    return e.tag === 3 ? (v = e.stateNode, d && t !== null && (d = 31 - Gt(i), e = v.hiddenUpdates, o = e[d], o === null ? e[d] = [t] : o.push(t), t.lane = i | 536870912), v) : null;
  }
  function Eo(e) {
    if (50 < _s)
      throw _s = 0, dd = null, Error(a(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ka = {};
  function db(e, t, i, o) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ln(e, t, i, o) {
    return new db(e, t, i, o);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ar(e, t) {
    var i = e.alternate;
    return i === null ? (i = ln(
      e.tag,
      t,
      e.key,
      e.mode
    ), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 65011712, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i.refCleanup = e.refCleanup, i;
  }
  function Wh(e, t) {
    e.flags &= 65011714;
    var i = e.alternate;
    return i === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = i.childLanes, e.lanes = i.lanes, e.child = i.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = i.memoizedProps, e.memoizedState = i.memoizedState, e.updateQueue = i.updateQueue, e.type = i.type, t = i.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Co(e, t, i, o, d, v) {
    var T = 0;
    if (o = e, typeof e == "function") sc(e) && (T = 1);
    else if (typeof e == "string")
      T = h1(
        e,
        i,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case L:
          return e = ln(31, i, t, d), e.elementType = L, e.lanes = v, e;
        case h:
          return ua(i.children, d, v, t);
        case C:
          T = 8, d |= 24;
          break;
        case A:
          return e = ln(12, i, t, d | 2), e.elementType = A, e.lanes = v, e;
        case S:
          return e = ln(13, i, t, d), e.elementType = S, e.lanes = v, e;
        case w:
          return e = ln(19, i, t, d), e.elementType = w, e.lanes = v, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case M:
              case P:
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
          T = 29, i = Error(
            a(130, e === null ? "null" : typeof e, "")
          ), o = null;
      }
    return t = ln(T, i, t, d), t.elementType = e, t.type = o, t.lanes = v, t;
  }
  function ua(e, t, i, o) {
    return e = ln(7, e, o, t), e.lanes = i, e;
  }
  function oc(e, t, i) {
    return e = ln(6, e, null, t), e.lanes = i, e;
  }
  function uc(e, t, i) {
    return t = ln(
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
  var Ja = [], Wa = 0, ko = null, Ao = 0, An = [], Tn = 0, la = null, ir = 1, sr = "";
  function ca(e, t) {
    Ja[Wa++] = Ao, Ja[Wa++] = ko, ko = e, Ao = t;
  }
  function ep(e, t, i) {
    An[Tn++] = ir, An[Tn++] = sr, An[Tn++] = la, la = e;
    var o = ir;
    e = sr;
    var d = 32 - Gt(o) - 1;
    o &= ~(1 << d), i += 1;
    var v = 32 - Gt(t) + d;
    if (30 < v) {
      var T = d - d % 5;
      v = (o & (1 << T) - 1).toString(32), o >>= T, d -= T, ir = 1 << 32 - Gt(t) + d | i << d | o, sr = v + e;
    } else
      ir = 1 << v | i << d | o, sr = e;
  }
  function lc(e) {
    e.return !== null && (ca(e, 1), ep(e, 1, 0));
  }
  function cc(e) {
    for (; e === ko; )
      ko = Ja[--Wa], Ja[Wa] = null, Ao = Ja[--Wa], Ja[Wa] = null;
    for (; e === la; )
      la = An[--Tn], An[Tn] = null, sr = An[--Tn], An[Tn] = null, ir = An[--Tn], An[Tn] = null;
  }
  var $t = null, ht = null, Qe = !1, da = null, Vn = !1, dc = Error(a(519));
  function fa(e) {
    var t = Error(a(418, ""));
    throw Ki(Cn(t, e)), dc;
  }
  function tp(e) {
    var t = e.stateNode, i = e.type, o = e.memoizedProps;
    switch (t[Bt] = e, t[Kt] = o, i) {
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
        Ve("invalid", t), gh(
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
        Ve("invalid", t), yh(t, o.value, o.defaultValue, o.children), fo(t);
    }
    i = o.children, typeof i != "string" && typeof i != "number" && typeof i != "bigint" || t.textContent === "" + i || o.suppressHydrationWarning === !0 || yg(t.textContent, i) ? (o.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)), o.onScroll != null && Ve("scroll", t), o.onScrollEnd != null && Ve("scrollend", t), o.onClick != null && (t.onclick = su), t = !0) : t = !1, t || fa(e);
  }
  function np(e) {
    for ($t = e.return; $t; )
      switch ($t.tag) {
        case 5:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          $t = $t.return;
      }
  }
  function Xi(e) {
    if (e !== $t) return !1;
    if (!Qe) return np(e), Qe = !0, !1;
    var t = e.tag, i;
    if ((i = t !== 3 && t !== 27) && ((i = t === 5) && (i = e.type, i = !(i !== "form" && i !== "button") || Td(e.type, e.memoizedProps)), i = !i), i && ht && fa(e), np(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (i = e.data, i === "/$") {
              if (t === 0) {
                ht = zn(e.nextSibling);
                break e;
              }
              t--;
            } else
              i !== "$" && i !== "$!" && i !== "$?" || t++;
          e = e.nextSibling;
        }
        ht = null;
      }
    } else
      t === 27 ? (t = ht, Hr(e.type) ? (e = Md, Md = null, ht = e) : ht = t) : ht = $t ? zn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qi() {
    ht = $t = null, Qe = !1;
  }
  function rp() {
    var e = da;
    return e !== null && (tn === null ? tn = e : tn.push.apply(
      tn,
      e
    ), da = null), e;
  }
  function Ki(e) {
    da === null ? da = [e] : da.push(e);
  }
  var fc = $(null), ha = null, or = null;
  function Ar(e, t, i) {
    V(fc, t._currentValue), t._currentValue = i;
  }
  function ur(e) {
    e._currentValue = fc.current, oe(fc);
  }
  function hc(e, t, i) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function pc(e, t, i, o) {
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
              v.lanes |= i, D = v.alternate, D !== null && (D.lanes |= i), hc(
                v.return,
                i,
                e
              ), o || (T = null);
              break e;
            }
          v = D.next;
        }
      } else if (d.tag === 18) {
        if (T = d.return, T === null) throw Error(a(341));
        T.lanes |= i, v = T.alternate, v !== null && (v.lanes |= i), hc(T, i, e), T = null;
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
  function Ji(e, t, i, o) {
    e = null;
    for (var d = t, v = !1; d !== null; ) {
      if (!v) {
        if ((d.flags & 524288) !== 0) v = !0;
        else if ((d.flags & 262144) !== 0) break;
      }
      if (d.tag === 10) {
        var T = d.alternate;
        if (T === null) throw Error(a(387));
        if (T = T.memoizedProps, T !== null) {
          var D = d.type;
          un(d.pendingProps.value, T.value) || (e !== null ? e.push(D) : e = [D]);
        }
      } else if (d === Ee.current) {
        if (T = d.alternate, T === null) throw Error(a(387));
        T.memoizedState.memoizedState !== d.memoizedState.memoizedState && (e !== null ? e.push(Ts) : e = [Ts]);
      }
      d = d.return;
    }
    e !== null && pc(
      t,
      e,
      i,
      o
    ), t.flags |= 262144;
  }
  function To(e) {
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
    return ap(ha, e);
  }
  function xo(e, t) {
    return ha === null && pa(e), ap(e, t);
  }
  function ap(e, t) {
    var i = t._currentValue;
    if (t = { context: t, memoizedValue: i, next: null }, or === null) {
      if (e === null) throw Error(a(308));
      or = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else or = or.next = t;
    return i;
  }
  var fb = typeof AbortController < "u" ? AbortController : function() {
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
  }, hb = n.unstable_scheduleCallback, pb = n.unstable_NormalPriority, Ct = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new fb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wi(e) {
    e.refCount--, e.refCount === 0 && hb(pb, function() {
      e.controller.abort();
    });
  }
  var es = null, gc = 0, ei = 0, ti = null;
  function mb(e, t) {
    if (es === null) {
      var i = es = [];
      gc = 0, ei = yd(), ti = {
        status: "pending",
        value: void 0,
        then: function(o) {
          i.push(o);
        }
      };
    }
    return gc++, t.then(ip, ip), t;
  }
  function ip() {
    if (--gc === 0 && es !== null) {
      ti !== null && (ti.status = "fulfilled");
      var e = es;
      es = null, ei = 0, ti = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function gb(e, t) {
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
  var sp = R.S;
  R.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && mb(e, t), sp !== null && sp(e, t);
  };
  var ma = $(null);
  function vc() {
    var e = ma.current;
    return e !== null ? e : at.pooledCache;
  }
  function No(e, t) {
    t === null ? V(ma, ma.current) : V(ma, t.pool);
  }
  function op() {
    var e = vc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var ts = Error(a(460)), up = Error(a(474)), Oo = Error(a(542)), yc = { then: function() {
  } };
  function lp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Mo() {
  }
  function cp(e, t, i) {
    switch (i = e[i], i === void 0 ? e.push(t) : i !== t && (t.then(Mo, Mo), t = i), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, fp(e), e;
      default:
        if (typeof t.status == "string") t.then(Mo, Mo);
        else {
          if (e = at, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, fp(e), e;
        }
        throw ns = t, ts;
    }
  }
  var ns = null;
  function dp() {
    if (ns === null) throw Error(a(459));
    var e = ns;
    return ns = null, e;
  }
  function fp(e) {
    if (e === ts || e === Oo)
      throw Error(a(483));
  }
  var Tr = !1;
  function _c(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function bc(e, t) {
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
    if (o = o.shared, (Ke & 2) !== 0) {
      var d = o.pending;
      return d === null ? t.next = t : (t.next = d.next, d.next = t), o.pending = t, t = Eo(e), Jh(e, null, i), t;
    }
    return wo(e, o, t, i), Eo(e);
  }
  function rs(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, ih(e, i);
    }
  }
  function Sc(e, t) {
    var i = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, i === o)) {
      var d = null, v = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var T = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          };
          v === null ? d = v = T : v = v.next = T, i = i.next;
        } while (i !== null);
        v === null ? d = v = t : v = v.next = t;
      } else d = v = t;
      i = {
        baseState: o.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: v,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  var wc = !1;
  function as() {
    if (wc) {
      var e = ti;
      if (e !== null) throw e;
    }
  }
  function is(e, t, i, o) {
    wc = !1;
    var d = e.updateQueue;
    Tr = !1;
    var v = d.firstBaseUpdate, T = d.lastBaseUpdate, D = d.shared.pending;
    if (D !== null) {
      d.shared.pending = null;
      var U = D, X = U.next;
      U.next = null, T === null ? v = X : T.next = X, T = U;
      var ne = e.alternate;
      ne !== null && (ne = ne.updateQueue, D = ne.lastBaseUpdate, D !== T && (D === null ? ne.firstBaseUpdate = X : D.next = X, ne.lastBaseUpdate = U));
    }
    if (v !== null) {
      var se = d.baseState;
      T = 0, ne = X = U = null, D = v;
      do {
        var J = D.lane & -536870913, W = J !== D.lane;
        if (W ? (Fe & J) === J : (o & J) === J) {
          J !== 0 && J === ei && (wc = !0), ne !== null && (ne = ne.next = {
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: null,
            next: null
          });
          e: {
            var Oe = e, Te = D;
            J = t;
            var tt = i;
            switch (Te.tag) {
              case 1:
                if (Oe = Te.payload, typeof Oe == "function") {
                  se = Oe.call(tt, se, J);
                  break e;
                }
                se = Oe;
                break e;
              case 3:
                Oe.flags = Oe.flags & -65537 | 128;
              case 0:
                if (Oe = Te.payload, J = typeof Oe == "function" ? Oe.call(tt, se, J) : Oe, J == null) break e;
                se = g({}, se, J);
                break e;
              case 2:
                Tr = !0;
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
          }, ne === null ? (X = ne = W, U = se) : ne = ne.next = W, T |= J;
        if (D = D.next, D === null) {
          if (D = d.shared.pending, D === null)
            break;
          W = D, D = W.next, W.next = null, d.lastBaseUpdate = W, d.shared.pending = null;
        }
      } while (!0);
      ne === null && (U = se), d.baseState = U, d.firstBaseUpdate = X, d.lastBaseUpdate = ne, v === null && (d.shared.lanes = 0), Pr |= T, e.lanes = T, e.memoizedState = se;
    }
  }
  function hp(e, t) {
    if (typeof e != "function")
      throw Error(a(191, e));
    e.call(t);
  }
  function pp(e, t) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++)
        hp(i[e], t);
  }
  var ni = $(null), Ro = $(0);
  function mp(e, t) {
    e = mr, V(Ro, e), V(ni, t), mr = e | t.baseLanes;
  }
  function Ec() {
    V(Ro, mr), V(ni, ni.current);
  }
  function Cc() {
    mr = Ro.current, oe(ni), oe(Ro);
  }
  var Or = 0, qe = null, We = null, bt = null, jo = !1, ri = !1, ga = !1, Do = 0, ss = 0, ai = null, vb = 0;
  function vt() {
    throw Error(a(321));
  }
  function kc(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++)
      if (!un(e[i], t[i])) return !1;
    return !0;
  }
  function Ac(e, t, i, o, d, v) {
    return Or = v, qe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? Jp : Wp, ga = !1, v = i(o, d), ga = !1, ri && (v = vp(
      t,
      i,
      o,
      d
    )), gp(e), v;
  }
  function gp(e) {
    R.H = Uo;
    var t = We !== null && We.next !== null;
    if (Or = 0, bt = We = qe = null, jo = !1, ss = 0, ai = null, t) throw Error(a(300));
    e === null || Nt || (e = e.dependencies, e !== null && To(e) && (Nt = !0));
  }
  function vp(e, t, i, o) {
    qe = e;
    var d = 0;
    do {
      if (ri && (ai = null), ss = 0, ri = !1, 25 <= d) throw Error(a(301));
      if (d += 1, bt = We = null, e.updateQueue != null) {
        var v = e.updateQueue;
        v.lastEffect = null, v.events = null, v.stores = null, v.memoCache != null && (v.memoCache.index = 0);
      }
      R.H = Cb, v = t(i, o);
    } while (ri);
    return v;
  }
  function yb() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? os(t) : t, e = e.useState()[0], (We !== null ? We.memoizedState : null) !== e && (qe.flags |= 1024), t;
  }
  function Tc() {
    var e = Do !== 0;
    return Do = 0, e;
  }
  function xc(e, t, i) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i;
  }
  function Nc(e) {
    if (jo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      jo = !1;
    }
    Or = 0, bt = We = qe = null, ri = !1, ss = Do = 0, ai = null;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? qe.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function St() {
    if (We === null) {
      var e = qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = We.next;
    var t = bt === null ? qe.memoizedState : bt.next;
    if (t !== null)
      bt = t, We = e;
    else {
      if (e === null)
        throw qe.alternate === null ? Error(a(467)) : Error(a(310));
      We = e, e = {
        memoizedState: We.memoizedState,
        baseState: We.baseState,
        baseQueue: We.baseQueue,
        queue: We.queue,
        next: null
      }, bt === null ? qe.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function Oc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(e) {
    var t = ss;
    return ss += 1, ai === null && (ai = []), e = cp(ai, e, t), t = qe, (bt === null ? t.memoizedState : bt.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? Jp : Wp), e;
  }
  function Lo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return os(e);
      if (e.$$typeof === P) return Ut(e);
    }
    throw Error(a(438, String(e)));
  }
  function Mc(e) {
    var t = null, i = qe.updateQueue;
    if (i !== null && (t = i.memoCache), t == null) {
      var o = qe.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(d) {
          return d.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), i === null && (i = Oc(), qe.updateQueue = i), i.memoCache = t, i = t.data[t.index], i === void 0)
      for (i = t.data[t.index] = Array(e), o = 0; o < e; o++)
        i[o] = j;
    return t.index++, i;
  }
  function lr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function zo(e) {
    var t = St();
    return Rc(t, We, e);
  }
  function Rc(e, t, i) {
    var o = e.queue;
    if (o === null) throw Error(a(311));
    o.lastRenderedReducer = i;
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
      var D = T = null, U = null, X = t, ne = !1;
      do {
        var se = X.lane & -536870913;
        if (se !== X.lane ? (Fe & se) === se : (Or & se) === se) {
          var J = X.revertLane;
          if (J === 0)
            U !== null && (U = U.next = {
              lane: 0,
              revertLane: 0,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }), se === ei && (ne = !0);
          else if ((Or & J) === J) {
            X = X.next, J === ei && (ne = !0);
            continue;
          } else
            se = {
              lane: 0,
              revertLane: X.revertLane,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }, U === null ? (D = U = se, T = v) : U = U.next = se, qe.lanes |= J, Pr |= J;
          se = X.action, ga && i(v, se), v = X.hasEagerState ? X.eagerState : i(v, se);
        } else
          J = {
            lane: se,
            revertLane: X.revertLane,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }, U === null ? (D = U = J, T = v) : U = U.next = J, qe.lanes |= se, Pr |= se;
        X = X.next;
      } while (X !== null && X !== t);
      if (U === null ? T = v : U.next = D, !un(v, e.memoizedState) && (Nt = !0, ne && (i = ti, i !== null)))
        throw i;
      e.memoizedState = v, e.baseState = T, e.baseQueue = U, o.lastRenderedState = v;
    }
    return d === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function jc(e) {
    var t = St(), i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = e;
    var o = i.dispatch, d = i.pending, v = t.memoizedState;
    if (d !== null) {
      i.pending = null;
      var T = d = d.next;
      do
        v = e(v, T.action), T = T.next;
      while (T !== d);
      un(v, t.memoizedState) || (Nt = !0), t.memoizedState = v, t.baseQueue === null && (t.baseState = v), i.lastRenderedState = v;
    }
    return [v, o];
  }
  function yp(e, t, i) {
    var o = qe, d = St(), v = Qe;
    if (v) {
      if (i === void 0) throw Error(a(407));
      i = i();
    } else i = t();
    var T = !un(
      (We || d).memoizedState,
      i
    );
    T && (d.memoizedState = i, Nt = !0), d = d.queue;
    var D = Sp.bind(null, o, d, e);
    if (us(2048, 8, D, [e]), d.getSnapshot !== t || T || bt !== null && bt.memoizedState.tag & 1) {
      if (o.flags |= 2048, ii(
        9,
        Po(),
        bp.bind(
          null,
          o,
          d,
          i,
          t
        ),
        null
      ), at === null) throw Error(a(349));
      v || (Or & 124) !== 0 || _p(o, t, i);
    }
    return i;
  }
  function _p(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = qe.updateQueue, t === null ? (t = Oc(), qe.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function bp(e, t, i, o) {
    t.value = i, t.getSnapshot = o, wp(t) && Ep(e);
  }
  function Sp(e, t, i) {
    return i(function() {
      wp(t) && Ep(e);
    });
  }
  function wp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !un(e, i);
    } catch {
      return !0;
    }
  }
  function Ep(e) {
    var t = Qa(e, 2);
    t !== null && pn(t, e, 2);
  }
  function Dc(e) {
    var t = Wt();
    if (typeof e == "function") {
      var i = e;
      if (e = i(), ga) {
        Zn(!0);
        try {
          i();
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
  function Cp(e, t, i, o) {
    return e.baseState = i, Rc(
      e,
      We,
      typeof o == "function" ? o : lr
    );
  }
  function _b(e, t, i, o, d) {
    if (Bo(e)) throw Error(a(485));
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
      R.T !== null ? i(!0) : v.isTransition = !1, o(v), i = t.pending, i === null ? (v.next = t.pending = v, kp(t, v)) : (v.next = i.next, t.pending = i.next = v);
    }
  }
  function kp(e, t) {
    var i = t.action, o = t.payload, d = e.state;
    if (t.isTransition) {
      var v = R.T, T = {};
      R.T = T;
      try {
        var D = i(d, o), U = R.S;
        U !== null && U(T, D), Ap(e, t, D);
      } catch (X) {
        Lc(e, t, X);
      } finally {
        R.T = v;
      }
    } else
      try {
        v = i(d, o), Ap(e, t, v);
      } catch (X) {
        Lc(e, t, X);
      }
  }
  function Ap(e, t, i) {
    i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(
      function(o) {
        Tp(e, t, o);
      },
      function(o) {
        return Lc(e, t, o);
      }
    ) : Tp(e, t, i);
  }
  function Tp(e, t, i) {
    t.status = "fulfilled", t.value = i, xp(t), e.state = i, t = e.pending, t !== null && (i = t.next, i === t ? e.pending = null : (i = i.next, t.next = i, kp(e, i)));
  }
  function Lc(e, t, i) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = i, xp(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function xp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Np(e, t) {
    return t;
  }
  function Op(e, t) {
    if (Qe) {
      var i = at.formState;
      if (i !== null) {
        e: {
          var o = qe;
          if (Qe) {
            if (ht) {
              t: {
                for (var d = ht, v = Vn; d.nodeType !== 8; ) {
                  if (!v) {
                    d = null;
                    break t;
                  }
                  if (d = zn(
                    d.nextSibling
                  ), d === null) {
                    d = null;
                    break t;
                  }
                }
                v = d.data, d = v === "F!" || v === "F" ? d : null;
              }
              if (d) {
                ht = zn(
                  d.nextSibling
                ), o = d.data === "F!";
                break e;
              }
            }
            fa(o);
          }
          o = !1;
        }
        o && (t = i[0]);
      }
    }
    return i = Wt(), i.memoizedState = i.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Np,
      lastRenderedState: t
    }, i.queue = o, i = Xp.bind(
      null,
      qe,
      o
    ), o.dispatch = i, o = Dc(!1), v = Uc.bind(
      null,
      qe,
      !1,
      o.queue
    ), o = Wt(), d = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = d, i = _b.bind(
      null,
      qe,
      d,
      v,
      i
    ), d.dispatch = i, o.memoizedState = e, [t, i, !1];
  }
  function Mp(e) {
    var t = St();
    return Rp(t, We, e);
  }
  function Rp(e, t, i) {
    if (t = Rc(
      e,
      t,
      Np
    )[0], e = zo(lr)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var o = os(t);
      } catch (T) {
        throw T === ts ? Oo : T;
      }
    else o = t;
    t = St();
    var d = t.queue, v = d.dispatch;
    return i !== t.memoizedState && (qe.flags |= 2048, ii(
      9,
      Po(),
      bb.bind(null, d, i),
      null
    )), [o, v, e];
  }
  function bb(e, t) {
    e.action = t;
  }
  function jp(e) {
    var t = St(), i = We;
    if (i !== null)
      return Rp(t, i, e);
    St(), t = t.memoizedState, i = St();
    var o = i.queue.dispatch;
    return i.memoizedState = e, [t, o, !1];
  }
  function ii(e, t, i, o) {
    return e = { tag: e, create: i, deps: o, inst: t, next: null }, t = qe.updateQueue, t === null && (t = Oc(), qe.updateQueue = t), i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (o = i.next, i.next = e, e.next = o, t.lastEffect = e), e;
  }
  function Po() {
    return { destroy: void 0, resource: void 0 };
  }
  function Dp() {
    return St().memoizedState;
  }
  function Io(e, t, i, o) {
    var d = Wt();
    o = o === void 0 ? null : o, qe.flags |= e, d.memoizedState = ii(
      1 | t,
      Po(),
      i,
      o
    );
  }
  function us(e, t, i, o) {
    var d = St();
    o = o === void 0 ? null : o;
    var v = d.memoizedState.inst;
    We !== null && o !== null && kc(o, We.memoizedState.deps) ? d.memoizedState = ii(t, v, i, o) : (qe.flags |= e, d.memoizedState = ii(
      1 | t,
      v,
      i,
      o
    ));
  }
  function Lp(e, t) {
    Io(8390656, 8, e, t);
  }
  function zp(e, t) {
    us(2048, 8, e, t);
  }
  function Pp(e, t) {
    return us(4, 2, e, t);
  }
  function Ip(e, t) {
    return us(4, 4, e, t);
  }
  function Bp(e, t) {
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
  function Up(e, t, i) {
    i = i != null ? i.concat([e]) : null, us(4, 4, Bp.bind(null, t, e), i);
  }
  function zc() {
  }
  function Hp(e, t) {
    var i = St();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    return t !== null && kc(t, o[1]) ? o[0] : (i.memoizedState = [e, t], e);
  }
  function qp(e, t) {
    var i = St();
    t = t === void 0 ? null : t;
    var o = i.memoizedState;
    if (t !== null && kc(t, o[1]))
      return o[0];
    if (o = e(), ga) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return i.memoizedState = [o, t], o;
  }
  function Pc(e, t, i) {
    return i === void 0 || (Or & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = i, e = Vm(), qe.lanes |= e, Pr |= e, i);
  }
  function Zp(e, t, i, o) {
    return un(i, t) ? i : ni.current !== null ? (e = Pc(e, i, o), un(e, t) || (Nt = !0), e) : (Or & 42) === 0 ? (Nt = !0, e.memoizedState = i) : (e = Vm(), qe.lanes |= e, Pr |= e, t);
  }
  function Gp(e, t, i, o, d) {
    var v = B.p;
    B.p = v !== 0 && 8 > v ? v : 8;
    var T = R.T, D = {};
    R.T = D, Uc(e, !1, t, i);
    try {
      var U = d(), X = R.S;
      if (X !== null && X(D, U), U !== null && typeof U == "object" && typeof U.then == "function") {
        var ne = gb(
          U,
          o
        );
        ls(
          e,
          t,
          ne,
          hn(e)
        );
      } else
        ls(
          e,
          t,
          o,
          hn(e)
        );
    } catch (se) {
      ls(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: se },
        hn()
      );
    } finally {
      B.p = v, R.T = T;
    }
  }
  function Sb() {
  }
  function Ic(e, t, i, o) {
    if (e.tag !== 5) throw Error(a(476));
    var d = Vp(e).queue;
    Gp(
      e,
      d,
      t,
      K,
      i === null ? Sb : function() {
        return $p(e), i(o);
      }
    );
  }
  function Vp(e) {
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
  function $p(e) {
    var t = Vp(e).next.queue;
    ls(e, t, {}, hn());
  }
  function Bc() {
    return Ut(Ts);
  }
  function Yp() {
    return St().memoizedState;
  }
  function Fp() {
    return St().memoizedState;
  }
  function wb(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var i = hn();
          e = xr(i);
          var o = Nr(t, e, i);
          o !== null && (pn(o, t, i), rs(o, t, i)), t = { cache: mc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Eb(e, t, i) {
    var o = hn();
    i = {
      lane: o,
      revertLane: 0,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bo(e) ? Qp(t, i) : (i = ic(e, t, i, o), i !== null && (pn(i, e, o), Kp(i, t, o)));
  }
  function Xp(e, t, i) {
    var o = hn();
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
    if (Bo(e)) Qp(t, d);
    else {
      var v = e.alternate;
      if (e.lanes === 0 && (v === null || v.lanes === 0) && (v = t.lastRenderedReducer, v !== null))
        try {
          var T = t.lastRenderedState, D = v(T, i);
          if (d.hasEagerState = !0, d.eagerState = D, un(D, T))
            return wo(e, t, d, 0), at === null && So(), !1;
        } catch {
        } finally {
        }
      if (i = ic(e, t, d, o), i !== null)
        return pn(i, e, o), Kp(i, t, o), !0;
    }
    return !1;
  }
  function Uc(e, t, i, o) {
    if (o = {
      lane: 2,
      revertLane: yd(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bo(e)) {
      if (t) throw Error(a(479));
    } else
      t = ic(
        e,
        i,
        o,
        2
      ), t !== null && pn(t, e, 2);
  }
  function Bo(e) {
    var t = e.alternate;
    return e === qe || t !== null && t === qe;
  }
  function Qp(e, t) {
    ri = jo = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function Kp(e, t, i) {
    if ((i & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, i |= o, t.lanes = i, ih(e, i);
    }
  }
  var Uo = {
    readContext: Ut,
    use: Lo,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
    useHostTransitionStatus: vt,
    useFormState: vt,
    useActionState: vt,
    useOptimistic: vt,
    useMemoCache: vt,
    useCacheRefresh: vt
  }, Jp = {
    readContext: Ut,
    use: Lo,
    useCallback: function(e, t) {
      return Wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ut,
    useEffect: Lp,
    useImperativeHandle: function(e, t, i) {
      i = i != null ? i.concat([e]) : null, Io(
        4194308,
        4,
        Bp.bind(null, t, e),
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
      var i = Wt();
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
      return i.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, i) {
      var o = Wt();
      if (i !== void 0) {
        var d = i(t);
        if (ga) {
          Zn(!0);
          try {
            i(t);
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
      }, o.queue = e, e = e.dispatch = Eb.bind(
        null,
        qe,
        e
      ), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = Wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Dc(e);
      var t = e.queue, i = Xp.bind(null, qe, t);
      return t.dispatch = i, [e.memoizedState, i];
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var i = Wt();
      return Pc(i, e, t);
    },
    useTransition: function() {
      var e = Dc(!1);
      return e = Gp.bind(
        null,
        qe,
        e.queue,
        !0,
        !1
      ), Wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, i) {
      var o = qe, d = Wt();
      if (Qe) {
        if (i === void 0)
          throw Error(a(407));
        i = i();
      } else {
        if (i = t(), at === null)
          throw Error(a(349));
        (Fe & 124) !== 0 || _p(o, t, i);
      }
      d.memoizedState = i;
      var v = { value: i, getSnapshot: t };
      return d.queue = v, Lp(Sp.bind(null, o, v, e), [
        e
      ]), o.flags |= 2048, ii(
        9,
        Po(),
        bp.bind(
          null,
          o,
          v,
          i,
          t
        ),
        null
      ), i;
    },
    useId: function() {
      var e = Wt(), t = at.identifierPrefix;
      if (Qe) {
        var i = sr, o = ir;
        i = (o & ~(1 << 32 - Gt(o) - 1)).toString(32) + i, t = "«" + t + "R" + i, i = Do++, 0 < i && (t += "H" + i.toString(32)), t += "»";
      } else
        i = vb++, t = "«" + t + "r" + i.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Bc,
    useFormState: Op,
    useActionState: Op,
    useOptimistic: function(e) {
      var t = Wt();
      t.memoizedState = t.baseState = e;
      var i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = i, t = Uc.bind(
        null,
        qe,
        !0,
        i
      ), i.dispatch = t, [e, t];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return Wt().memoizedState = wb.bind(
        null,
        qe
      );
    }
  }, Wp = {
    readContext: Ut,
    use: Lo,
    useCallback: Hp,
    useContext: Ut,
    useEffect: zp,
    useImperativeHandle: Up,
    useInsertionEffect: Pp,
    useLayoutEffect: Ip,
    useMemo: qp,
    useReducer: zo,
    useRef: Dp,
    useState: function() {
      return zo(lr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var i = St();
      return Zp(
        i,
        We.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = zo(lr)[0], t = St().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: yp,
    useId: Yp,
    useHostTransitionStatus: Bc,
    useFormState: Mp,
    useActionState: Mp,
    useOptimistic: function(e, t) {
      var i = St();
      return Cp(i, We, e, t);
    },
    useMemoCache: Mc,
    useCacheRefresh: Fp
  }, Cb = {
    readContext: Ut,
    use: Lo,
    useCallback: Hp,
    useContext: Ut,
    useEffect: zp,
    useImperativeHandle: Up,
    useInsertionEffect: Pp,
    useLayoutEffect: Ip,
    useMemo: qp,
    useReducer: jc,
    useRef: Dp,
    useState: function() {
      return jc(lr);
    },
    useDebugValue: zc,
    useDeferredValue: function(e, t) {
      var i = St();
      return We === null ? Pc(i, e, t) : Zp(
        i,
        We.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = jc(lr)[0], t = St().memoizedState;
      return [
        typeof e == "boolean" ? e : os(e),
        t
      ];
    },
    useSyncExternalStore: yp,
    useId: Yp,
    useHostTransitionStatus: Bc,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(e, t) {
      var i = St();
      return We !== null ? Cp(i, We, e, t) : (i.baseState = e, [e, i.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: Fp
  }, si = null, cs = 0;
  function Ho(e) {
    var t = cs;
    return cs += 1, si === null && (si = []), cp(si, e, t);
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
  function em(e) {
    var t = e._init;
    return t(e._payload);
  }
  function tm(e) {
    function t(G, q) {
      if (e) {
        var F = G.deletions;
        F === null ? (G.deletions = [q], G.flags |= 16) : F.push(q);
      }
    }
    function i(G, q) {
      if (!e) return null;
      for (; q !== null; )
        t(G, q), q = q.sibling;
      return null;
    }
    function o(G) {
      for (var q = /* @__PURE__ */ new Map(); G !== null; )
        G.key !== null ? q.set(G.key, G) : q.set(G.index, G), G = G.sibling;
      return q;
    }
    function d(G, q) {
      return G = ar(G, q), G.index = 0, G.sibling = null, G;
    }
    function v(G, q, F) {
      return G.index = F, e ? (F = G.alternate, F !== null ? (F = F.index, F < q ? (G.flags |= 67108866, q) : F) : (G.flags |= 67108866, q)) : (G.flags |= 1048576, q);
    }
    function T(G) {
      return e && G.alternate === null && (G.flags |= 67108866), G;
    }
    function D(G, q, F, ie) {
      return q === null || q.tag !== 6 ? (q = oc(F, G.mode, ie), q.return = G, q) : (q = d(q, F), q.return = G, q);
    }
    function U(G, q, F, ie) {
      var Se = F.type;
      return Se === h ? ne(
        G,
        q,
        F.props.children,
        ie,
        F.key
      ) : q !== null && (q.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === O && em(Se) === q.type) ? (q = d(q, F.props), ds(q, F), q.return = G, q) : (q = Co(
        F.type,
        F.key,
        F.props,
        null,
        G.mode,
        ie
      ), ds(q, F), q.return = G, q);
    }
    function X(G, q, F, ie) {
      return q === null || q.tag !== 4 || q.stateNode.containerInfo !== F.containerInfo || q.stateNode.implementation !== F.implementation ? (q = uc(F, G.mode, ie), q.return = G, q) : (q = d(q, F.children || []), q.return = G, q);
    }
    function ne(G, q, F, ie, Se) {
      return q === null || q.tag !== 7 ? (q = ua(
        F,
        G.mode,
        ie,
        Se
      ), q.return = G, q) : (q = d(q, F), q.return = G, q);
    }
    function se(G, q, F) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return q = oc(
          "" + q,
          G.mode,
          F
        ), q.return = G, q;
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case y:
            return F = Co(
              q.type,
              q.key,
              q.props,
              null,
              G.mode,
              F
            ), ds(F, q), F.return = G, F;
          case b:
            return q = uc(
              q,
              G.mode,
              F
            ), q.return = G, q;
          case O:
            var ie = q._init;
            return q = ie(q._payload), se(G, q, F);
        }
        if (Q(q) || H(q))
          return q = ua(
            q,
            G.mode,
            F,
            null
          ), q.return = G, q;
        if (typeof q.then == "function")
          return se(G, Ho(q), F);
        if (q.$$typeof === P)
          return se(
            G,
            xo(G, q),
            F
          );
        qo(G, q);
      }
      return null;
    }
    function J(G, q, F, ie) {
      var Se = q !== null ? q.key : null;
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return Se !== null ? null : D(G, q, "" + F, ie);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            return F.key === Se ? U(G, q, F, ie) : null;
          case b:
            return F.key === Se ? X(G, q, F, ie) : null;
          case O:
            return Se = F._init, F = Se(F._payload), J(G, q, F, ie);
        }
        if (Q(F) || H(F))
          return Se !== null ? null : ne(G, q, F, ie, null);
        if (typeof F.then == "function")
          return J(
            G,
            q,
            Ho(F),
            ie
          );
        if (F.$$typeof === P)
          return J(
            G,
            q,
            xo(G, F),
            ie
          );
        qo(G, F);
      }
      return null;
    }
    function W(G, q, F, ie, Se) {
      if (typeof ie == "string" && ie !== "" || typeof ie == "number" || typeof ie == "bigint")
        return G = G.get(F) || null, D(q, G, "" + ie, Se);
      if (typeof ie == "object" && ie !== null) {
        switch (ie.$$typeof) {
          case y:
            return G = G.get(
              ie.key === null ? F : ie.key
            ) || null, U(q, G, ie, Se);
          case b:
            return G = G.get(
              ie.key === null ? F : ie.key
            ) || null, X(q, G, ie, Se);
          case O:
            var Ze = ie._init;
            return ie = Ze(ie._payload), W(
              G,
              q,
              F,
              ie,
              Se
            );
        }
        if (Q(ie) || H(ie))
          return G = G.get(F) || null, ne(q, G, ie, Se, null);
        if (typeof ie.then == "function")
          return W(
            G,
            q,
            F,
            Ho(ie),
            Se
          );
        if (ie.$$typeof === P)
          return W(
            G,
            q,
            F,
            xo(q, ie),
            Se
          );
        qo(q, ie);
      }
      return null;
    }
    function Oe(G, q, F, ie) {
      for (var Se = null, Ze = null, Ce = q, xe = q = 0, Mt = null; Ce !== null && xe < F.length; xe++) {
        Ce.index > xe ? (Mt = Ce, Ce = null) : Mt = Ce.sibling;
        var Xe = J(
          G,
          Ce,
          F[xe],
          ie
        );
        if (Xe === null) {
          Ce === null && (Ce = Mt);
          break;
        }
        e && Ce && Xe.alternate === null && t(G, Ce), q = v(Xe, q, xe), Ze === null ? Se = Xe : Ze.sibling = Xe, Ze = Xe, Ce = Mt;
      }
      if (xe === F.length)
        return i(G, Ce), Qe && ca(G, xe), Se;
      if (Ce === null) {
        for (; xe < F.length; xe++)
          Ce = se(G, F[xe], ie), Ce !== null && (q = v(
            Ce,
            q,
            xe
          ), Ze === null ? Se = Ce : Ze.sibling = Ce, Ze = Ce);
        return Qe && ca(G, xe), Se;
      }
      for (Ce = o(Ce); xe < F.length; xe++)
        Mt = W(
          Ce,
          G,
          xe,
          F[xe],
          ie
        ), Mt !== null && (e && Mt.alternate !== null && Ce.delete(
          Mt.key === null ? xe : Mt.key
        ), q = v(
          Mt,
          q,
          xe
        ), Ze === null ? Se = Mt : Ze.sibling = Mt, Ze = Mt);
      return e && Ce.forEach(function($r) {
        return t(G, $r);
      }), Qe && ca(G, xe), Se;
    }
    function Te(G, q, F, ie) {
      if (F == null) throw Error(a(151));
      for (var Se = null, Ze = null, Ce = q, xe = q = 0, Mt = null, Xe = F.next(); Ce !== null && !Xe.done; xe++, Xe = F.next()) {
        Ce.index > xe ? (Mt = Ce, Ce = null) : Mt = Ce.sibling;
        var $r = J(G, Ce, Xe.value, ie);
        if ($r === null) {
          Ce === null && (Ce = Mt);
          break;
        }
        e && Ce && $r.alternate === null && t(G, Ce), q = v($r, q, xe), Ze === null ? Se = $r : Ze.sibling = $r, Ze = $r, Ce = Mt;
      }
      if (Xe.done)
        return i(G, Ce), Qe && ca(G, xe), Se;
      if (Ce === null) {
        for (; !Xe.done; xe++, Xe = F.next())
          Xe = se(G, Xe.value, ie), Xe !== null && (q = v(Xe, q, xe), Ze === null ? Se = Xe : Ze.sibling = Xe, Ze = Xe);
        return Qe && ca(G, xe), Se;
      }
      for (Ce = o(Ce); !Xe.done; xe++, Xe = F.next())
        Xe = W(Ce, G, xe, Xe.value, ie), Xe !== null && (e && Xe.alternate !== null && Ce.delete(Xe.key === null ? xe : Xe.key), q = v(Xe, q, xe), Ze === null ? Se = Xe : Ze.sibling = Xe, Ze = Xe);
      return e && Ce.forEach(function(k1) {
        return t(G, k1);
      }), Qe && ca(G, xe), Se;
    }
    function tt(G, q, F, ie) {
      if (typeof F == "object" && F !== null && F.type === h && F.key === null && (F = F.props.children), typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case y:
            e: {
              for (var Se = F.key; q !== null; ) {
                if (q.key === Se) {
                  if (Se = F.type, Se === h) {
                    if (q.tag === 7) {
                      i(
                        G,
                        q.sibling
                      ), ie = d(
                        q,
                        F.props.children
                      ), ie.return = G, G = ie;
                      break e;
                    }
                  } else if (q.elementType === Se || typeof Se == "object" && Se !== null && Se.$$typeof === O && em(Se) === q.type) {
                    i(
                      G,
                      q.sibling
                    ), ie = d(q, F.props), ds(ie, F), ie.return = G, G = ie;
                    break e;
                  }
                  i(G, q);
                  break;
                } else t(G, q);
                q = q.sibling;
              }
              F.type === h ? (ie = ua(
                F.props.children,
                G.mode,
                ie,
                F.key
              ), ie.return = G, G = ie) : (ie = Co(
                F.type,
                F.key,
                F.props,
                null,
                G.mode,
                ie
              ), ds(ie, F), ie.return = G, G = ie);
            }
            return T(G);
          case b:
            e: {
              for (Se = F.key; q !== null; ) {
                if (q.key === Se)
                  if (q.tag === 4 && q.stateNode.containerInfo === F.containerInfo && q.stateNode.implementation === F.implementation) {
                    i(
                      G,
                      q.sibling
                    ), ie = d(q, F.children || []), ie.return = G, G = ie;
                    break e;
                  } else {
                    i(G, q);
                    break;
                  }
                else t(G, q);
                q = q.sibling;
              }
              ie = uc(F, G.mode, ie), ie.return = G, G = ie;
            }
            return T(G);
          case O:
            return Se = F._init, F = Se(F._payload), tt(
              G,
              q,
              F,
              ie
            );
        }
        if (Q(F))
          return Oe(
            G,
            q,
            F,
            ie
          );
        if (H(F)) {
          if (Se = H(F), typeof Se != "function") throw Error(a(150));
          return F = Se.call(F), Te(
            G,
            q,
            F,
            ie
          );
        }
        if (typeof F.then == "function")
          return tt(
            G,
            q,
            Ho(F),
            ie
          );
        if (F.$$typeof === P)
          return tt(
            G,
            q,
            xo(G, F),
            ie
          );
        qo(G, F);
      }
      return typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint" ? (F = "" + F, q !== null && q.tag === 6 ? (i(G, q.sibling), ie = d(q, F), ie.return = G, G = ie) : (i(G, q), ie = oc(F, G.mode, ie), ie.return = G, G = ie), T(G)) : i(G, q);
    }
    return function(G, q, F, ie) {
      try {
        cs = 0;
        var Se = tt(
          G,
          q,
          F,
          ie
        );
        return si = null, Se;
      } catch (Ce) {
        if (Ce === ts || Ce === Oo) throw Ce;
        var Ze = ln(29, Ce, null, G.mode);
        return Ze.lanes = ie, Ze.return = G, Ze;
      } finally {
      }
    };
  }
  var oi = tm(!0), nm = tm(!1), xn = $(null), $n = null;
  function Mr(e) {
    var t = e.alternate;
    V(kt, kt.current & 1), V(xn, e), $n === null && (t === null || ni.current !== null || t.memoizedState !== null) && ($n = e);
  }
  function rm(e) {
    if (e.tag === 22) {
      if (V(kt, kt.current), V(xn, e), $n === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && ($n = e);
      }
    } else Rr();
  }
  function Rr() {
    V(kt, kt.current), V(xn, xn.current);
  }
  function cr(e) {
    oe(xn), $n === e && ($n = null), oe(kt);
  }
  var kt = $(0);
  function Zo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || Od(i)))
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
  function Hc(e, t, i, o) {
    t = e.memoizedState, i = i(o, t), i = i == null ? t : g({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var qc = {
    enqueueSetState: function(e, t, i) {
      e = e._reactInternals;
      var o = hn(), d = xr(o);
      d.payload = t, i != null && (d.callback = i), t = Nr(e, d, o), t !== null && (pn(t, e, o), rs(t, e, o));
    },
    enqueueReplaceState: function(e, t, i) {
      e = e._reactInternals;
      var o = hn(), d = xr(o);
      d.tag = 1, d.payload = t, i != null && (d.callback = i), t = Nr(e, d, o), t !== null && (pn(t, e, o), rs(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var i = hn(), o = xr(i);
      o.tag = 2, t != null && (o.callback = t), t = Nr(e, o, i), t !== null && (pn(t, e, i), rs(t, e, i));
    }
  };
  function am(e, t, i, o, d, v, T) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, v, T) : t.prototype && t.prototype.isPureReactComponent ? !Yi(i, o) || !Yi(d, v) : !0;
  }
  function im(e, t, i, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, o), t.state !== e && qc.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t) {
    var i = t;
    if ("ref" in t) {
      i = {};
      for (var o in t)
        o !== "ref" && (i[o] = t[o]);
    }
    if (e = e.defaultProps) {
      i === t && (i = g({}, i));
      for (var d in e)
        i[d] === void 0 && (i[d] = e[d]);
    }
    return i;
  }
  var Go = typeof reportError == "function" ? reportError : function(e) {
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
  function sm(e) {
    Go(e);
  }
  function om(e) {
    console.error(e);
  }
  function um(e) {
    Go(e);
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
  function lm(e, t, i) {
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
  function Zc(e, t, i) {
    return i = xr(i), i.tag = 3, i.payload = { element: null }, i.callback = function() {
      Vo(e, t);
    }, i;
  }
  function cm(e) {
    return e = xr(e), e.tag = 3, e;
  }
  function dm(e, t, i, o) {
    var d = i.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var v = o.value;
      e.payload = function() {
        return d(v);
      }, e.callback = function() {
        lm(t, i, o);
      };
    }
    var T = i.stateNode;
    T !== null && typeof T.componentDidCatch == "function" && (e.callback = function() {
      lm(t, i, o), typeof d != "function" && (Ir === null ? Ir = /* @__PURE__ */ new Set([this]) : Ir.add(this));
      var D = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: D !== null ? D : ""
      });
    });
  }
  function kb(e, t, i, o, d) {
    if (i.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = i.alternate, t !== null && Ji(
        t,
        i,
        d,
        !0
      ), i = xn.current, i !== null) {
        switch (i.tag) {
          case 13:
            return $n === null ? hd() : i.alternate === null && pt === 0 && (pt = 3), i.flags &= -257, i.flags |= 65536, i.lanes = d, o === yc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? i.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), md(e, o, d)), !1;
          case 22:
            return i.flags |= 65536, o === yc ? i.flags |= 16384 : (t = i.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, i.updateQueue = t) : (i = t.retryQueue, i === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : i.add(o)), md(e, o, d)), !1;
        }
        throw Error(a(435, i.tag));
      }
      return md(e, o, d), hd(), !1;
    }
    if (Qe)
      return t = xn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = d, o !== dc && (e = Error(a(422), { cause: o }), Ki(Cn(e, i)))) : (o !== dc && (t = Error(a(423), {
        cause: o
      }), Ki(
        Cn(t, i)
      )), e = e.current.alternate, e.flags |= 65536, d &= -d, e.lanes |= d, o = Cn(o, i), d = Zc(
        e.stateNode,
        o,
        d
      ), Sc(e, d), pt !== 4 && (pt = 2)), !1;
    var v = Error(a(520), { cause: o });
    if (v = Cn(v, i), ys === null ? ys = [v] : ys.push(v), pt !== 4 && (pt = 2), t === null) return !0;
    o = Cn(o, i), i = t;
    do {
      switch (i.tag) {
        case 3:
          return i.flags |= 65536, e = d & -d, i.lanes |= e, e = Zc(i.stateNode, o, e), Sc(i, e), !1;
        case 1:
          if (t = i.type, v = i.stateNode, (i.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Ir === null || !Ir.has(v))))
            return i.flags |= 65536, d &= -d, i.lanes |= d, d = cm(d), dm(
              d,
              e,
              i,
              o
            ), Sc(i, d), !1;
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var fm = Error(a(461)), Nt = !1;
  function jt(e, t, i, o) {
    t.child = e === null ? nm(t, null, i, o) : oi(
      t,
      e.child,
      i,
      o
    );
  }
  function hm(e, t, i, o, d) {
    i = i.render;
    var v = t.ref;
    if ("ref" in o) {
      var T = {};
      for (var D in o)
        D !== "ref" && (T[D] = o[D]);
    } else T = o;
    return pa(t), o = Ac(
      e,
      t,
      i,
      T,
      v,
      d
    ), D = Tc(), e !== null && !Nt ? (xc(e, t, d), dr(e, t, d)) : (Qe && D && lc(t), t.flags |= 1, jt(e, t, o, d), t.child);
  }
  function pm(e, t, i, o, d) {
    if (e === null) {
      var v = i.type;
      return typeof v == "function" && !sc(v) && v.defaultProps === void 0 && i.compare === null ? (t.tag = 15, t.type = v, mm(
        e,
        t,
        v,
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
    if (v = e.child, !Kc(e, d)) {
      var T = v.memoizedProps;
      if (i = i.compare, i = i !== null ? i : Yi, i(T, o) && e.ref === t.ref)
        return dr(e, t, d);
    }
    return t.flags |= 1, e = ar(v, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function mm(e, t, i, o, d) {
    if (e !== null) {
      var v = e.memoizedProps;
      if (Yi(v, o) && e.ref === t.ref)
        if (Nt = !1, t.pendingProps = o = v, Kc(e, d))
          (e.flags & 131072) !== 0 && (Nt = !0);
        else
          return t.lanes = e.lanes, dr(e, t, d);
    }
    return Gc(
      e,
      t,
      i,
      o,
      d
    );
  }
  function gm(e, t, i) {
    var o = t.pendingProps, d = o.children, v = e !== null ? e.memoizedState : null;
    if (o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (o = v !== null ? v.baseLanes | i : i, e !== null) {
          for (d = t.child = e.child, v = 0; d !== null; )
            v = v | d.lanes | d.childLanes, d = d.sibling;
          t.childLanes = v & ~o;
        } else t.childLanes = 0, t.child = null;
        return vm(
          e,
          t,
          o,
          i
        );
      }
      if ((i & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && No(
          t,
          v !== null ? v.cachePool : null
        ), v !== null ? mp(t, v) : Ec(), rm(t);
      else
        return t.lanes = t.childLanes = 536870912, vm(
          e,
          t,
          v !== null ? v.baseLanes | i : i,
          i
        );
    } else
      v !== null ? (No(t, v.cachePool), mp(t, v), Rr(), t.memoizedState = null) : (e !== null && No(t, null), Ec(), Rr());
    return jt(e, t, d, i), t.child;
  }
  function vm(e, t, i, o) {
    var d = vc();
    return d = d === null ? null : { parent: Ct._currentValue, pool: d }, t.memoizedState = {
      baseLanes: i,
      cachePool: d
    }, e !== null && No(t, null), Ec(), rm(t), e !== null && Ji(e, t, o, !0), null;
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
  function Gc(e, t, i, o, d) {
    return pa(t), i = Ac(
      e,
      t,
      i,
      o,
      void 0,
      d
    ), o = Tc(), e !== null && !Nt ? (xc(e, t, d), dr(e, t, d)) : (Qe && o && lc(t), t.flags |= 1, jt(e, t, i, d), t.child);
  }
  function ym(e, t, i, o, d, v) {
    return pa(t), t.updateQueue = null, i = vp(
      t,
      o,
      i,
      d
    ), gp(e), o = Tc(), e !== null && !Nt ? (xc(e, t, v), dr(e, t, v)) : (Qe && o && lc(t), t.flags |= 1, jt(e, t, i, v), t.child);
  }
  function _m(e, t, i, o, d) {
    if (pa(t), t.stateNode === null) {
      var v = Ka, T = i.contextType;
      typeof T == "object" && T !== null && (v = Ut(T)), v = new i(o, v), t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, v.updater = qc, t.stateNode = v, v._reactInternals = t, v = t.stateNode, v.props = o, v.state = t.memoizedState, v.refs = {}, _c(t), T = i.contextType, v.context = typeof T == "object" && T !== null ? Ut(T) : Ka, v.state = t.memoizedState, T = i.getDerivedStateFromProps, typeof T == "function" && (Hc(
        t,
        i,
        T,
        o
      ), v.state = t.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof v.getSnapshotBeforeUpdate == "function" || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (T = v.state, typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount(), T !== v.state && qc.enqueueReplaceState(v, v.state, null), is(t, o, v, d), as(), v.state = t.memoizedState), typeof v.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      v = t.stateNode;
      var D = t.memoizedProps, U = va(i, D);
      v.props = U;
      var X = v.context, ne = i.contextType;
      T = Ka, typeof ne == "object" && ne !== null && (T = Ut(ne));
      var se = i.getDerivedStateFromProps;
      ne = typeof se == "function" || typeof v.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, ne || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (D || X !== T) && im(
        t,
        v,
        o,
        T
      ), Tr = !1;
      var J = t.memoizedState;
      v.state = J, is(t, o, v, d), as(), X = t.memoizedState, D || J !== X || Tr ? (typeof se == "function" && (Hc(
        t,
        i,
        se,
        o
      ), X = t.memoizedState), (U = Tr || am(
        t,
        i,
        U,
        o,
        J,
        X,
        T
      )) ? (ne || typeof v.UNSAFE_componentWillMount != "function" && typeof v.componentWillMount != "function" || (typeof v.componentWillMount == "function" && v.componentWillMount(), typeof v.UNSAFE_componentWillMount == "function" && v.UNSAFE_componentWillMount()), typeof v.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = X), v.props = o, v.state = X, v.context = T, o = U) : (typeof v.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      v = t.stateNode, bc(e, t), T = t.memoizedProps, ne = va(i, T), v.props = ne, se = t.pendingProps, J = v.context, X = i.contextType, U = Ka, typeof X == "object" && X !== null && (U = Ut(X)), D = i.getDerivedStateFromProps, (X = typeof D == "function" || typeof v.getSnapshotBeforeUpdate == "function") || typeof v.UNSAFE_componentWillReceiveProps != "function" && typeof v.componentWillReceiveProps != "function" || (T !== se || J !== U) && im(
        t,
        v,
        o,
        U
      ), Tr = !1, J = t.memoizedState, v.state = J, is(t, o, v, d), as();
      var W = t.memoizedState;
      T !== se || J !== W || Tr || e !== null && e.dependencies !== null && To(e.dependencies) ? (typeof D == "function" && (Hc(
        t,
        i,
        D,
        o
      ), W = t.memoizedState), (ne = Tr || am(
        t,
        i,
        ne,
        o,
        J,
        W,
        U
      ) || e !== null && e.dependencies !== null && To(e.dependencies)) ? (X || typeof v.UNSAFE_componentWillUpdate != "function" && typeof v.componentWillUpdate != "function" || (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, W, U), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(
        o,
        W,
        U
      )), typeof v.componentDidUpdate == "function" && (t.flags |= 4), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof v.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = W), v.props = o, v.state = W, v.context = U, o = ne) : (typeof v.componentDidUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 4), typeof v.getSnapshotBeforeUpdate != "function" || T === e.memoizedProps && J === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return v = o, $o(e, t), o = (t.flags & 128) !== 0, v || o ? (v = t.stateNode, i = o && typeof i.getDerivedStateFromError != "function" ? null : v.render(), t.flags |= 1, e !== null && o ? (t.child = oi(
      t,
      e.child,
      null,
      d
    ), t.child = oi(
      t,
      null,
      i,
      d
    )) : jt(e, t, i, d), t.memoizedState = v.state, e = t.child) : e = dr(
      e,
      t,
      d
    ), e;
  }
  function bm(e, t, i, o) {
    return Qi(), t.flags |= 256, jt(e, t, i, o), t.child;
  }
  var Vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $c(e) {
    return { baseLanes: e, cachePool: op() };
  }
  function Yc(e, t, i) {
    return e = e !== null ? e.childLanes & ~i : 0, t && (e |= Nn), e;
  }
  function Sm(e, t, i) {
    var o = t.pendingProps, d = !1, v = (t.flags & 128) !== 0, T;
    if ((T = v) || (T = e !== null && e.memoizedState === null ? !1 : (kt.current & 2) !== 0), T && (d = !0, t.flags &= -129), T = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Qe) {
        if (d ? Mr(t) : Rr(), Qe) {
          var D = ht, U;
          if (U = D) {
            e: {
              for (U = D, D = Vn; U.nodeType !== 8; ) {
                if (!D) {
                  D = null;
                  break e;
                }
                if (U = zn(
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
            ), U.stateNode = D, U.return = t, t.child = U, $t = t, ht = null, U = !0) : U = !1;
          }
          U || fa(t);
        }
        if (D = t.memoizedState, D !== null && (D = D.dehydrated, D !== null))
          return Od(D) ? t.lanes = 32 : t.lanes = 536870912, null;
        cr(t);
      }
      return D = o.children, o = o.fallback, d ? (Rr(), d = t.mode, D = Yo(
        { mode: "hidden", children: D },
        d
      ), o = ua(
        o,
        d,
        i,
        null
      ), D.return = t, o.return = t, D.sibling = o, t.child = D, d = t.child, d.memoizedState = $c(i), d.childLanes = Yc(
        e,
        T,
        i
      ), t.memoizedState = Vc, o) : (Mr(t), Fc(t, D));
    }
    if (U = e.memoizedState, U !== null && (D = U.dehydrated, D !== null)) {
      if (v)
        t.flags & 256 ? (Mr(t), t.flags &= -257, t = Xc(
          e,
          t,
          i
        )) : t.memoizedState !== null ? (Rr(), t.child = e.child, t.flags |= 128, t = null) : (Rr(), d = o.fallback, D = t.mode, o = Yo(
          { mode: "visible", children: o.children },
          D
        ), d = ua(
          d,
          D,
          i,
          null
        ), d.flags |= 2, o.return = t, d.return = t, o.sibling = d, t.child = o, oi(
          t,
          e.child,
          null,
          i
        ), o = t.child, o.memoizedState = $c(i), o.childLanes = Yc(
          e,
          T,
          i
        ), t.memoizedState = Vc, t = d);
      else if (Mr(t), Od(D)) {
        if (T = D.nextSibling && D.nextSibling.dataset, T) var X = T.dgst;
        T = X, o = Error(a(419)), o.stack = "", o.digest = T, Ki({ value: o, source: null, stack: null }), t = Xc(
          e,
          t,
          i
        );
      } else if (Nt || Ji(e, t, i, !1), T = (i & e.childLanes) !== 0, Nt || T) {
        if (T = at, T !== null && (o = i & -i, o = (o & 42) !== 0 ? 1 : Ml(o), o = (o & (T.suspendedLanes | i)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
          throw U.retryLane = o, Qa(e, o), pn(T, e, o), fm;
        D.data === "$?" || hd(), t = Xc(
          e,
          t,
          i
        );
      } else
        D.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, ht = zn(
          D.nextSibling
        ), $t = t, Qe = !0, da = null, Vn = !1, e !== null && (An[Tn++] = ir, An[Tn++] = sr, An[Tn++] = la, ir = e.id, sr = e.overflow, la = t), t = Fc(
          t,
          o.children
        ), t.flags |= 4096);
      return t;
    }
    return d ? (Rr(), d = o.fallback, D = t.mode, U = e.child, X = U.sibling, o = ar(U, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = U.subtreeFlags & 65011712, X !== null ? d = ar(X, d) : (d = ua(
      d,
      D,
      i,
      null
    ), d.flags |= 2), d.return = t, o.return = t, o.sibling = d, t.child = o, o = d, d = t.child, D = e.child.memoizedState, D === null ? D = $c(i) : (U = D.cachePool, U !== null ? (X = Ct._currentValue, U = U.parent !== X ? { parent: X, pool: X } : U) : U = op(), D = {
      baseLanes: D.baseLanes | i,
      cachePool: U
    }), d.memoizedState = D, d.childLanes = Yc(
      e,
      T,
      i
    ), t.memoizedState = Vc, o) : (Mr(t), i = e.child, e = i.sibling, i = ar(i, {
      mode: "visible",
      children: o.children
    }), i.return = t, i.sibling = null, e !== null && (T = t.deletions, T === null ? (t.deletions = [e], t.flags |= 16) : T.push(e)), t.child = i, t.memoizedState = null, i);
  }
  function Fc(e, t) {
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
  function Xc(e, t, i) {
    return oi(t, e.child, null, i), e = Fc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function wm(e, t, i) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), hc(e.return, t, i);
  }
  function Qc(e, t, i, o, d) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: i,
      tailMode: d
    } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = i, v.tailMode = d);
  }
  function Em(e, t, i) {
    var o = t.pendingProps, d = o.revealOrder, v = o.tail;
    if (jt(e, t, o.children, i), o = kt.current, (o & 2) !== 0)
      o = o & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && wm(e, i, t);
          else if (e.tag === 19)
            wm(e, i, t);
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
    switch (V(kt, o), d) {
      case "forwards":
        for (i = t.child, d = null; i !== null; )
          e = i.alternate, e !== null && Zo(e) === null && (d = i), i = i.sibling;
        i = d, i === null ? (d = t.child, t.child = null) : (d = i.sibling, i.sibling = null), Qc(
          t,
          !1,
          d,
          i,
          v
        );
        break;
      case "backwards":
        for (i = null, d = t.child, t.child = null; d !== null; ) {
          if (e = d.alternate, e !== null && Zo(e) === null) {
            t.child = d;
            break;
          }
          e = d.sibling, d.sibling = i, i = d, d = e;
        }
        Qc(
          t,
          !0,
          i,
          null,
          v
        );
        break;
      case "together":
        Qc(t, !1, null, null, void 0);
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
  function Kc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && To(e)));
  }
  function Ab(e, t, i) {
    switch (t.tag) {
      case 3:
        me(t, t.stateNode.containerInfo), Ar(t, Ct, e.memoizedState.cache), Qi();
        break;
      case 27:
      case 5:
        le(t);
        break;
      case 4:
        me(t, t.stateNode.containerInfo);
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
          return o.dehydrated !== null ? (Mr(t), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? Sm(e, t, i) : (Mr(t), e = dr(
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
            return Em(
              e,
              t,
              i
            );
          t.flags |= 128;
        }
        if (d = t.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), V(kt, kt.current), o) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, gm(e, t, i);
      case 24:
        Ar(t, Ct, e.memoizedState.cache);
    }
    return dr(e, t, i);
  }
  function Cm(e, t, i) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Nt = !0;
      else {
        if (!Kc(e, i) && (t.flags & 128) === 0)
          return Nt = !1, Ab(
            e,
            t,
            i
          );
        Nt = (e.flags & 131072) !== 0;
      }
    else
      Nt = !1, Qe && (t.flags & 1048576) !== 0 && ep(t, Ao, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var o = t.elementType, d = o._init;
          if (o = d(o._payload), t.type = o, typeof o == "function")
            sc(o) ? (e = va(o, e), t.tag = 1, t = _m(
              null,
              t,
              o,
              e,
              i
            )) : (t.tag = 0, t = Gc(
              null,
              t,
              o,
              e,
              i
            ));
          else {
            if (o != null) {
              if (d = o.$$typeof, d === l) {
                t.tag = 11, t = hm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              } else if (d === k) {
                t.tag = 14, t = pm(
                  null,
                  t,
                  o,
                  e,
                  i
                );
                break e;
              }
            }
            throw t = Z(o) || o, Error(a(306, t, ""));
          }
        }
        return t;
      case 0:
        return Gc(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 1:
        return o = t.type, d = va(
          o,
          t.pendingProps
        ), _m(
          e,
          t,
          o,
          d,
          i
        );
      case 3:
        e: {
          if (me(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(a(387));
          o = t.pendingProps;
          var v = t.memoizedState;
          d = v.element, bc(e, t), is(t, o, null, i);
          var T = t.memoizedState;
          if (o = T.cache, Ar(t, Ct, o), o !== v.cache && pc(
            t,
            [Ct],
            i,
            !0
          ), as(), o = T.element, v.isDehydrated)
            if (v = {
              element: o,
              isDehydrated: !1,
              cache: T.cache
            }, t.updateQueue.baseState = v, t.memoizedState = v, t.flags & 256) {
              t = bm(
                e,
                t,
                o,
                i
              );
              break e;
            } else if (o !== d) {
              d = Cn(
                Error(a(424)),
                t
              ), Ki(d), t = bm(
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
              for (ht = zn(e.firstChild), $t = t, Qe = !0, da = null, Vn = !0, i = nm(
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
            jt(
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
        return $o(e, t), e === null ? (i = xg(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = i : Qe || (i = t.type, e = t.pendingProps, o = ou(
          ce.current
        ).createElement(i), o[Bt] = t, o[Kt] = e, Lt(o, i, e), xt(o), t.stateNode = o) : t.memoizedState = xg(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return le(t), e === null && Qe && (o = t.stateNode = kg(
          t.type,
          t.pendingProps,
          ce.current
        ), $t = t, Vn = !0, d = ht, Hr(t.type) ? (Md = d, ht = zn(
          o.firstChild
        )) : ht = d), jt(
          e,
          t,
          t.pendingProps.children,
          i
        ), $o(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Qe && ((d = o = ht) && (o = e1(
          o,
          t.type,
          t.pendingProps,
          Vn
        ), o !== null ? (t.stateNode = o, $t = t, ht = zn(
          o.firstChild
        ), Vn = !1, d = !0) : d = !1), d || fa(t)), le(t), d = t.type, v = t.pendingProps, T = e !== null ? e.memoizedProps : null, o = v.children, Td(d, v) ? o = null : T !== null && Td(d, T) && (t.flags |= 32), t.memoizedState !== null && (d = Ac(
          e,
          t,
          yb,
          null,
          null,
          i
        ), Ts._currentValue = d), $o(e, t), jt(e, t, o, i), t.child;
      case 6:
        return e === null && Qe && ((e = i = ht) && (i = t1(
          i,
          t.pendingProps,
          Vn
        ), i !== null ? (t.stateNode = i, $t = t, ht = null, e = !0) : e = !1), e || fa(t)), null;
      case 13:
        return Sm(e, t, i);
      case 4:
        return me(
          t,
          t.stateNode.containerInfo
        ), o = t.pendingProps, e === null ? t.child = oi(
          t,
          null,
          o,
          i
        ) : jt(
          e,
          t,
          o,
          i
        ), t.child;
      case 11:
        return hm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 7:
        return jt(
          e,
          t,
          t.pendingProps,
          i
        ), t.child;
      case 8:
        return jt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 12:
        return jt(
          e,
          t,
          t.pendingProps.children,
          i
        ), t.child;
      case 10:
        return o = t.pendingProps, Ar(t, t.type, o.value), jt(
          e,
          t,
          o.children,
          i
        ), t.child;
      case 9:
        return d = t.type._context, o = t.pendingProps.children, pa(t), d = Ut(d), o = o(d), t.flags |= 1, jt(e, t, o, i), t.child;
      case 14:
        return pm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 15:
        return mm(
          e,
          t,
          t.type,
          t.pendingProps,
          i
        );
      case 19:
        return Em(e, t, i);
      case 31:
        return o = t.pendingProps, i = t.mode, o = {
          mode: o.mode,
          children: o.children
        }, e === null ? (i = Yo(
          o,
          i
        ), i.ref = t.ref, t.child = i, i.return = t, t = i) : (i = ar(e.child, o), i.ref = t.ref, t.child = i, i.return = t, t = i), t;
      case 22:
        return gm(e, t, i);
      case 24:
        return pa(t), o = Ut(Ct), e === null ? (d = vc(), d === null && (d = at, v = mc(), d.pooledCache = v, v.refCount++, v !== null && (d.pooledCacheLanes |= i), d = v), t.memoizedState = {
          parent: o,
          cache: d
        }, _c(t), Ar(t, Ct, d)) : ((e.lanes & i) !== 0 && (bc(e, t), is(t, null, null, i), as()), d = e.memoizedState, v = t.memoizedState, d.parent !== o ? (d = { parent: o, cache: o }, t.memoizedState = d, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = d), Ar(t, Ct, o)) : (o = v.cache, Ar(t, Ct, o), o !== d.cache && pc(
          t,
          [Ct],
          i,
          !0
        ))), jt(
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
    else if (e.flags |= 16777216, !jg(t)) {
      if (t = xn.current, t !== null && ((Fe & 4194048) === Fe ? $n !== null : (Fe & 62914560) !== Fe && (Fe & 536870912) === 0 || t !== $n))
        throw ns = yc, up;
      e.flags |= 8192;
    }
  }
  function Fo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? rh() : 536870912, e.lanes |= t, di |= t);
  }
  function fs(e, t) {
    if (!Qe)
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
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, o = 0;
    if (t)
      for (var d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags & 65011712, o |= d.flags & 65011712, d.return = e, d = d.sibling;
    else
      for (d = e.child; d !== null; )
        i |= d.lanes | d.childLanes, o |= d.subtreeFlags, o |= d.flags, d.return = e, d = d.sibling;
    return e.subtreeFlags |= o, e.childLanes = i, t;
  }
  function Tb(e, t, i) {
    var o = t.pendingProps;
    switch (cc(t), t.tag) {
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
        return ct(t), null;
      case 1:
        return ct(t), null;
      case 3:
        return i = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), ur(Ct), ee(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (e === null || e.child === null) && (Xi(t) ? fr(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, rp())), ct(t), null;
      case 26:
        return i = t.memoizedState, e === null ? (fr(t), i !== null ? (ct(t), km(t, i)) : (ct(t), t.flags &= -16777217)) : i ? i !== e.memoizedState ? (fr(t), ct(t), km(t, i)) : (ct(t), t.flags &= -16777217) : (e.memoizedProps !== o && fr(t), ct(t), t.flags &= -16777217), null;
      case 27:
        ge(t), i = ce.current;
        var d = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ct(t), null;
          }
          e = ae.current, Xi(t) ? tp(t) : (e = kg(d, o, i), t.stateNode = e, fr(t));
        }
        return ct(t), null;
      case 5:
        if (ge(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (!o) {
            if (t.stateNode === null)
              throw Error(a(166));
            return ct(t), null;
          }
          if (e = ae.current, Xi(t))
            tp(t);
          else {
            switch (d = ou(
              ce.current
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
            e: switch (Lt(e, i, o), i) {
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
        return ct(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== o && fr(t);
        else {
          if (typeof o != "string" && t.stateNode === null)
            throw Error(a(166));
          if (e = ce.current, Xi(t)) {
            if (e = t.stateNode, i = t.memoizedProps, o = null, d = $t, d !== null)
              switch (d.tag) {
                case 27:
                case 5:
                  o = d.memoizedProps;
              }
            e[Bt] = t, e = !!(e.nodeValue === i || o !== null && o.suppressHydrationWarning === !0 || yg(e.nodeValue, i)), e || fa(t);
          } else
            e = ou(e).createTextNode(
              o
            ), e[Bt] = t, t.stateNode = e;
        }
        return ct(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (d = Xi(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(a(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(a(317));
              d[Bt] = t;
            } else
              Qi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ct(t), d = !1;
          } else
            d = rp(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = d), d = !0;
          if (!d)
            return t.flags & 256 ? (cr(t), t) : (cr(t), null);
        }
        if (cr(t), (t.flags & 128) !== 0)
          return t.lanes = i, t;
        if (i = o !== null, e = e !== null && e.memoizedState !== null, i) {
          o = t.child, d = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (d = o.alternate.memoizedState.cachePool.pool);
          var v = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (v = o.memoizedState.cachePool.pool), v !== d && (o.flags |= 2048);
        }
        return i !== e && i && (t.child.flags |= 8192), Fo(t, t.updateQueue), ct(t), null;
      case 4:
        return ee(), e === null && wd(t.stateNode.containerInfo), ct(t), null;
      case 10:
        return ur(t.type), ct(t), null;
      case 19:
        if (oe(kt), d = t.memoizedState, d === null) return ct(t), null;
        if (o = (t.flags & 128) !== 0, v = d.rendering, v === null)
          if (o) fs(d, !1);
          else {
            if (pt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (v = Zo(e), v !== null) {
                  for (t.flags |= 128, fs(d, !1), e = v.updateQueue, t.updateQueue = e, Fo(t, e), t.subtreeFlags = 0, e = i, i = t.child; i !== null; )
                    Wh(i, e), i = i.sibling;
                  return V(
                    kt,
                    kt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            d.tail !== null && fe() > Ko && (t.flags |= 128, o = !0, fs(d, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Zo(v), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, Fo(t, e), fs(d, !0), d.tail === null && d.tailMode === "hidden" && !v.alternate && !Qe)
                return ct(t), null;
            } else
              2 * fe() - d.renderingStartTime > Ko && i !== 536870912 && (t.flags |= 128, o = !0, fs(d, !1), t.lanes = 4194304);
          d.isBackwards ? (v.sibling = t.child, t.child = v) : (e = d.last, e !== null ? e.sibling = v : t.child = v, d.last = v);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = fe(), t.sibling = null, e = kt.current, V(kt, o ? e & 1 | 2 : e & 1), t) : (ct(t), null);
      case 22:
      case 23:
        return cr(t), Cc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (i & 536870912) !== 0 && (t.flags & 128) === 0 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t), i = t.updateQueue, i !== null && Fo(t, i.retryQueue), i = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== i && (t.flags |= 2048), e !== null && oe(ma), null;
      case 24:
        return i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), ur(Ct), ct(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function xb(e, t) {
    switch (cc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ur(Ct), ee(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ge(t), null;
      case 13:
        if (cr(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(a(340));
          Qi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return oe(kt), null;
      case 4:
        return ee(), null;
      case 10:
        return ur(t.type), null;
      case 22:
      case 23:
        return cr(t), Cc(), e !== null && oe(ma), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ur(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Am(e, t) {
    switch (cc(t), t.tag) {
      case 3:
        ur(Ct), ee();
        break;
      case 26:
      case 27:
      case 5:
        ge(t);
        break;
      case 4:
        ee();
        break;
      case 13:
        cr(t);
        break;
      case 19:
        oe(kt);
        break;
      case 10:
        ur(t.type);
        break;
      case 22:
      case 23:
        cr(t), Cc(), e !== null && oe(ma);
        break;
      case 24:
        ur(Ct);
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
            var v = i.create, T = i.inst;
            o = v(), T.destroy = o;
          }
          i = i.next;
        } while (i !== d);
      }
    } catch (D) {
      nt(t, t.return, D);
    }
  }
  function jr(e, t, i) {
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
              var U = i, X = D;
              try {
                X();
              } catch (ne) {
                nt(
                  d,
                  U,
                  ne
                );
              }
            }
          }
          o = o.next;
        } while (o !== v);
      }
    } catch (ne) {
      nt(t, t.return, ne);
    }
  }
  function Tm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var i = e.stateNode;
      try {
        pp(t, i);
      } catch (o) {
        nt(e, e.return, o);
      }
    }
  }
  function xm(e, t, i) {
    i.props = va(
      e.type,
      e.memoizedProps
    ), i.state = e.memoizedState;
    try {
      i.componentWillUnmount();
    } catch (o) {
      nt(e, t, o);
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
      nt(e, t, d);
    }
  }
  function Yn(e, t) {
    var i = e.ref, o = e.refCleanup;
    if (i !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (d) {
          nt(e, t, d);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (d) {
          nt(e, t, d);
        }
      else i.current = null;
  }
  function Nm(e) {
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
      nt(e, e.return, d);
    }
  }
  function Jc(e, t, i) {
    try {
      var o = e.stateNode;
      Xb(o, e.type, i, t), o[Kt] = t;
    } catch (d) {
      nt(e, e.return, d);
    }
  }
  function Om(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Om(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ed(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, t) : (t = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i, t.appendChild(e), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = su));
    else if (o !== 4 && (o === 27 && Hr(e.type) && (i = e.stateNode, t = null), e = e.child, e !== null))
      for (ed(e, t, i), e = e.sibling; e !== null; )
        ed(e, t, i), e = e.sibling;
  }
  function Xo(e, t, i) {
    var o = e.tag;
    if (o === 5 || o === 6)
      e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (o !== 4 && (o === 27 && Hr(e.type) && (i = e.stateNode), e = e.child, e !== null))
      for (Xo(e, t, i), e = e.sibling; e !== null; )
        Xo(e, t, i), e = e.sibling;
  }
  function Mm(e) {
    var t = e.stateNode, i = e.memoizedProps;
    try {
      for (var o = e.type, d = t.attributes; d.length; )
        t.removeAttributeNode(d[0]);
      Lt(t, o, i), t[Bt] = e, t[Kt] = i;
    } catch (v) {
      nt(e, e.return, v);
    }
  }
  var hr = !1, yt = !1, td = !1, Rm = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
  function Nb(e, t) {
    if (e = e.containerInfo, kd = hu, e = Zh(e), Wl(e)) {
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
            var d = o.anchorOffset, v = o.focusNode;
            o = o.focusOffset;
            try {
              i.nodeType, v.nodeType;
            } catch {
              i = null;
              break e;
            }
            var T = 0, D = -1, U = -1, X = 0, ne = 0, se = e, J = null;
            t: for (; ; ) {
              for (var W; se !== i || d !== 0 && se.nodeType !== 3 || (D = T + d), se !== v || o !== 0 && se.nodeType !== 3 || (U = T + o), se.nodeType === 3 && (T += se.nodeValue.length), (W = se.firstChild) !== null; )
                J = se, se = W;
              for (; ; ) {
                if (se === e) break t;
                if (J === i && ++X === d && (D = T), J === v && ++ne === o && (U = T), (W = se.nextSibling) !== null) break;
                se = J, J = se.parentNode;
              }
              se = W;
            }
            i = D === -1 || U === -1 ? null : { start: D, end: U };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Ad = { focusedElem: e, selectionRange: i }, hu = !1, Ot = t; Ot !== null; )
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
                e = void 0, i = t, d = v.memoizedProps, v = v.memoizedState, o = i.stateNode;
                try {
                  var Oe = va(
                    i.type,
                    d,
                    i.elementType === i.type
                  );
                  e = o.getSnapshotBeforeUpdate(
                    Oe,
                    v
                  ), o.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Te) {
                  nt(
                    i,
                    i.return,
                    Te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, i = e.nodeType, i === 9)
                  Nd(e);
                else if (i === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Nd(e);
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
            e.return = t.return, Ot = e;
            break;
          }
          Ot = t.return;
        }
  }
  function jm(e, t, i) {
    var o = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        Dr(e, i), o & 4 && hs(5, i);
        break;
      case 1:
        if (Dr(e, i), o & 4)
          if (e = i.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (T) {
              nt(i, i.return, T);
            }
          else {
            var d = va(
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
            } catch (T) {
              nt(
                i,
                i.return,
                T
              );
            }
          }
        o & 64 && Tm(i), o & 512 && ps(i, i.return);
        break;
      case 3:
        if (Dr(e, i), o & 64 && (e = i.updateQueue, e !== null)) {
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
            pp(e, t);
          } catch (T) {
            nt(i, i.return, T);
          }
        }
        break;
      case 27:
        t === null && o & 4 && Mm(i);
      case 26:
      case 5:
        Dr(e, i), t === null && o & 4 && Nm(i), o & 512 && ps(i, i.return);
        break;
      case 12:
        Dr(e, i);
        break;
      case 13:
        Dr(e, i), o & 4 && zm(e, i), o & 64 && (e = i.memoizedState, e !== null && (e = e.dehydrated, e !== null && (i = Ib.bind(
          null,
          i
        ), n1(e, i))));
        break;
      case 22:
        if (o = i.memoizedState !== null || hr, !o) {
          t = t !== null && t.memoizedState !== null || yt, d = hr;
          var v = yt;
          hr = o, (yt = t) && !v ? Lr(
            e,
            i,
            (i.subtreeFlags & 8772) !== 0
          ) : Dr(e, i), hr = d, yt = v;
        }
        break;
      case 30:
        break;
      default:
        Dr(e, i);
    }
  }
  function Dm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Dl(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var st = null, en = !1;
  function pr(e, t, i) {
    for (i = i.child; i !== null; )
      Lm(e, t, i), i = i.sibling;
  }
  function Lm(e, t, i) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(jn, i);
      } catch {
      }
    switch (i.tag) {
      case 26:
        yt || Yn(i, t), pr(
          e,
          t,
          i
        ), i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode, i.parentNode.removeChild(i));
        break;
      case 27:
        yt || Yn(i, t);
        var o = st, d = en;
        Hr(i.type) && (st = i.stateNode, en = !1), pr(
          e,
          t,
          i
        ), Es(i.stateNode), st = o, en = d;
        break;
      case 5:
        yt || Yn(i, t);
      case 6:
        if (o = st, d = en, st = null, pr(
          e,
          t,
          i
        ), st = o, en = d, st !== null)
          if (en)
            try {
              (st.nodeType === 9 ? st.body : st.nodeName === "HTML" ? st.ownerDocument.body : st).removeChild(i.stateNode);
            } catch (v) {
              nt(
                i,
                t,
                v
              );
            }
          else
            try {
              st.removeChild(i.stateNode);
            } catch (v) {
              nt(
                i,
                t,
                v
              );
            }
        break;
      case 18:
        st !== null && (en ? (e = st, Eg(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          i.stateNode
        ), Ms(e)) : Eg(st, i.stateNode));
        break;
      case 4:
        o = st, d = en, st = i.stateNode.containerInfo, en = !0, pr(
          e,
          t,
          i
        ), st = o, en = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yt || jr(2, i, t), yt || jr(4, i, t), pr(
          e,
          t,
          i
        );
        break;
      case 1:
        yt || (Yn(i, t), o = i.stateNode, typeof o.componentWillUnmount == "function" && xm(
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
        yt = (o = yt) || i.memoizedState !== null, pr(
          e,
          t,
          i
        ), yt = o;
        break;
      default:
        pr(
          e,
          t,
          i
        );
    }
  }
  function zm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ms(e);
      } catch (i) {
        nt(t, t.return, i);
      }
  }
  function Ob(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Rm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Rm()), t;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function nd(e, t) {
    var i = Ob(e);
    t.forEach(function(o) {
      var d = Bb.bind(null, e, o);
      i.has(o) || (i.add(o), o.then(d, d));
    });
  }
  function cn(e, t) {
    var i = t.deletions;
    if (i !== null)
      for (var o = 0; o < i.length; o++) {
        var d = i[o], v = e, T = t, D = T;
        e: for (; D !== null; ) {
          switch (D.tag) {
            case 27:
              if (Hr(D.type)) {
                st = D.stateNode, en = !1;
                break e;
              }
              break;
            case 5:
              st = D.stateNode, en = !1;
              break e;
            case 3:
            case 4:
              st = D.stateNode.containerInfo, en = !0;
              break e;
          }
          D = D.return;
        }
        if (st === null) throw Error(a(160));
        Lm(v, T, d), st = null, en = !1, v = d.alternate, v !== null && (v.return = null), d.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Pm(t, e), t = t.sibling;
  }
  var Ln = null;
  function Pm(e, t) {
    var i = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        cn(t, e), dn(e), o & 4 && (jr(3, e, e.return), hs(3, e), jr(5, e, e.return));
        break;
      case 1:
        cn(t, e), dn(e), o & 512 && (yt || i === null || Yn(i, i.return)), o & 64 && hr && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (i = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = i === null ? o : i.concat(o))));
        break;
      case 26:
        var d = Ln;
        if (cn(t, e), dn(e), o & 512 && (yt || i === null || Yn(i, i.return)), o & 4) {
          var v = i !== null ? i.memoizedState : null;
          if (o = e.memoizedState, i === null)
            if (o === null)
              if (e.stateNode === null) {
                e: {
                  o = e.type, i = e.memoizedProps, d = d.ownerDocument || d;
                  t: switch (o) {
                    case "title":
                      v = d.getElementsByTagName("title")[0], (!v || v[Ii] || v[Bt] || v.namespaceURI === "http://www.w3.org/2000/svg" || v.hasAttribute("itemprop")) && (v = d.createElement(o), d.head.insertBefore(
                        v,
                        d.querySelector("head > title")
                      )), Lt(v, o, i), v[Bt] = e, xt(v), o = v;
                      break e;
                    case "link":
                      var T = Mg(
                        "link",
                        "href",
                        d
                      ).get(o + (i.href || ""));
                      if (T) {
                        for (var D = 0; D < T.length; D++)
                          if (v = T[D], v.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && v.getAttribute("rel") === (i.rel == null ? null : i.rel) && v.getAttribute("title") === (i.title == null ? null : i.title) && v.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      v = d.createElement(o), Lt(v, o, i), d.head.appendChild(v);
                      break;
                    case "meta":
                      if (T = Mg(
                        "meta",
                        "content",
                        d
                      ).get(o + (i.content || ""))) {
                        for (D = 0; D < T.length; D++)
                          if (v = T[D], v.getAttribute("content") === (i.content == null ? null : "" + i.content) && v.getAttribute("name") === (i.name == null ? null : i.name) && v.getAttribute("property") === (i.property == null ? null : i.property) && v.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && v.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                            T.splice(D, 1);
                            break t;
                          }
                      }
                      v = d.createElement(o), Lt(v, o, i), d.head.appendChild(v);
                      break;
                    default:
                      throw Error(a(468, o));
                  }
                  v[Bt] = e, xt(v), o = v;
                }
                e.stateNode = o;
              } else
                Rg(
                  d,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Og(
                d,
                o,
                e.memoizedProps
              );
          else
            v !== o ? (v === null ? i.stateNode !== null && (i = i.stateNode, i.parentNode.removeChild(i)) : v.count--, o === null ? Rg(
              d,
              e.type,
              e.stateNode
            ) : Og(
              d,
              o,
              e.memoizedProps
            )) : o === null && e.stateNode !== null && Jc(
              e,
              e.memoizedProps,
              i.memoizedProps
            );
        }
        break;
      case 27:
        cn(t, e), dn(e), o & 512 && (yt || i === null || Yn(i, i.return)), i !== null && o & 4 && Jc(
          e,
          e.memoizedProps,
          i.memoizedProps
        );
        break;
      case 5:
        if (cn(t, e), dn(e), o & 512 && (yt || i === null || Yn(i, i.return)), e.flags & 32) {
          d = e.stateNode;
          try {
            Za(d, "");
          } catch (W) {
            nt(e, e.return, W);
          }
        }
        o & 4 && e.stateNode != null && (d = e.memoizedProps, Jc(
          e,
          d,
          i !== null ? i.memoizedProps : d
        )), o & 1024 && (td = !0);
        break;
      case 6:
        if (cn(t, e), dn(e), o & 4) {
          if (e.stateNode === null)
            throw Error(a(162));
          o = e.memoizedProps, i = e.stateNode;
          try {
            i.nodeValue = o;
          } catch (W) {
            nt(e, e.return, W);
          }
        }
        break;
      case 3:
        if (cu = null, d = Ln, Ln = uu(t.containerInfo), cn(t, e), Ln = d, dn(e), o & 4 && i !== null && i.memoizedState.isDehydrated)
          try {
            Ms(t.containerInfo);
          } catch (W) {
            nt(e, e.return, W);
          }
        td && (td = !1, Im(e));
        break;
      case 4:
        o = Ln, Ln = uu(
          e.stateNode.containerInfo
        ), cn(t, e), dn(e), Ln = o;
        break;
      case 12:
        cn(t, e), dn(e);
        break;
      case 13:
        cn(t, e), dn(e), e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (ud = fe()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, nd(e, o)));
        break;
      case 22:
        d = e.memoizedState !== null;
        var U = i !== null && i.memoizedState !== null, X = hr, ne = yt;
        if (hr = X || d, yt = ne || U, cn(t, e), yt = ne, hr = X, dn(e), o & 8192)
          e: for (t = e.stateNode, t._visibility = d ? t._visibility & -2 : t._visibility | 1, d && (i === null || U || hr || yt || ya(e)), i = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (i === null) {
                U = i = t;
                try {
                  if (v = U.stateNode, d)
                    T = v.style, typeof T.setProperty == "function" ? T.setProperty("display", "none", "important") : T.display = "none";
                  else {
                    D = U.stateNode;
                    var se = U.memoizedProps.style, J = se != null && se.hasOwnProperty("display") ? se.display : null;
                    D.style.display = J == null || typeof J == "boolean" ? "" : ("" + J).trim();
                  }
                } catch (W) {
                  nt(U, U.return, W);
                }
              }
            } else if (t.tag === 6) {
              if (i === null) {
                U = t;
                try {
                  U.stateNode.nodeValue = d ? "" : U.memoizedProps;
                } catch (W) {
                  nt(U, U.return, W);
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
        o & 4 && (o = e.updateQueue, o !== null && (i = o.retryQueue, i !== null && (o.retryQueue = null, nd(e, i))));
        break;
      case 19:
        cn(t, e), dn(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, nd(e, o)));
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
        for (var i, o = e.return; o !== null; ) {
          if (Om(o)) {
            i = o;
            break;
          }
          o = o.return;
        }
        if (i == null) throw Error(a(160));
        switch (i.tag) {
          case 27:
            var d = i.stateNode, v = Wc(e);
            Xo(e, v, d);
            break;
          case 5:
            var T = i.stateNode;
            i.flags & 32 && (Za(T, ""), i.flags &= -33);
            var D = Wc(e);
            Xo(e, D, T);
            break;
          case 3:
          case 4:
            var U = i.stateNode.containerInfo, X = Wc(e);
            ed(
              e,
              X,
              U
            );
            break;
          default:
            throw Error(a(161));
        }
      } catch (ne) {
        nt(e, e.return, ne);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Im(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Im(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Dr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        jm(e, t.alternate, t), t = t.sibling;
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
          Yn(t, t.return);
          var i = t.stateNode;
          typeof i.componentWillUnmount == "function" && xm(
            t,
            t.return,
            i
          ), ya(t);
          break;
        case 27:
          Es(t.stateNode);
        case 26:
        case 5:
          Yn(t, t.return), ya(t);
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
  function Lr(e, t, i) {
    for (i = i && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, d = e, v = t, T = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Lr(
            d,
            v,
            i
          ), hs(4, v);
          break;
        case 1:
          if (Lr(
            d,
            v,
            i
          ), o = v, d = o.stateNode, typeof d.componentDidMount == "function")
            try {
              d.componentDidMount();
            } catch (X) {
              nt(o, o.return, X);
            }
          if (o = v, d = o.updateQueue, d !== null) {
            var D = o.stateNode;
            try {
              var U = d.shared.hiddenCallbacks;
              if (U !== null)
                for (d.shared.hiddenCallbacks = null, d = 0; d < U.length; d++)
                  hp(U[d], D);
            } catch (X) {
              nt(o, o.return, X);
            }
          }
          i && T & 64 && Tm(v), ps(v, v.return);
          break;
        case 27:
          Mm(v);
        case 26:
        case 5:
          Lr(
            d,
            v,
            i
          ), i && o === null && T & 4 && Nm(v), ps(v, v.return);
          break;
        case 12:
          Lr(
            d,
            v,
            i
          );
          break;
        case 13:
          Lr(
            d,
            v,
            i
          ), i && T & 4 && zm(d, v);
          break;
        case 22:
          v.memoizedState === null && Lr(
            d,
            v,
            i
          ), ps(v, v.return);
          break;
        case 30:
          break;
        default:
          Lr(
            d,
            v,
            i
          );
      }
      t = t.sibling;
    }
  }
  function rd(e, t) {
    var i = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== i && (e != null && e.refCount++, i != null && Wi(i));
  }
  function ad(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Wi(e));
  }
  function Fn(e, t, i, o) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Bm(
          e,
          t,
          i,
          o
        ), t = t.sibling;
  }
  function Bm(e, t, i, o) {
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
            var v = t.memoizedProps, T = v.id, D = v.onPostCommit;
            typeof D == "function" && D(
              T,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (U) {
            nt(t, t.return, U);
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
        v = t.stateNode, T = t.alternate, t.memoizedState !== null ? v._visibility & 2 ? Fn(
          e,
          t,
          i,
          o
        ) : ms(e, t) : v._visibility & 2 ? Fn(
          e,
          t,
          i,
          o
        ) : (v._visibility |= 2, ui(
          e,
          t,
          i,
          o,
          (t.subtreeFlags & 10256) !== 0
        )), d & 2048 && rd(T, t);
        break;
      case 24:
        Fn(
          e,
          t,
          i,
          o
        ), d & 2048 && ad(t.alternate, t);
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
  function ui(e, t, i, o, d) {
    for (d = d && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var v = e, T = t, D = i, U = o, X = T.flags;
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
          ), hs(8, T);
          break;
        case 23:
          break;
        case 22:
          var ne = T.stateNode;
          T.memoizedState !== null ? ne._visibility & 2 ? ui(
            v,
            T,
            D,
            U,
            d
          ) : ms(
            v,
            T
          ) : (ne._visibility |= 2, ui(
            v,
            T,
            D,
            U,
            d
          )), d && X & 2048 && rd(
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
          ), d && X & 2048 && ad(T.alternate, T);
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
  function ms(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var i = e, o = t, d = o.flags;
        switch (o.tag) {
          case 22:
            ms(i, o), d & 2048 && rd(
              o.alternate,
              o
            );
            break;
          case 24:
            ms(i, o), d & 2048 && ad(o.alternate, o);
            break;
          default:
            ms(i, o);
        }
        t = t.sibling;
      }
  }
  var gs = 8192;
  function li(e) {
    if (e.subtreeFlags & gs)
      for (e = e.child; e !== null; )
        Um(e), e = e.sibling;
  }
  function Um(e) {
    switch (e.tag) {
      case 26:
        li(e), e.flags & gs && e.memoizedState !== null && m1(
          Ln,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        li(e);
        break;
      case 3:
      case 4:
        var t = Ln;
        Ln = uu(e.stateNode.containerInfo), li(e), Ln = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = gs, gs = 16777216, li(e), gs = t) : li(e));
        break;
      default:
        li(e);
    }
  }
  function Hm(e) {
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
          Ot = o, Zm(
            o,
            e
          );
        }
      Hm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        qm(e), e = e.sibling;
  }
  function qm(e) {
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
          Ot = o, Zm(
            o,
            e
          );
        }
      Hm(e);
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
  function Zm(e, t) {
    for (; Ot !== null; ) {
      var i = Ot;
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
      if (o = i.child, o !== null) o.return = i, Ot = o;
      else
        e: for (i = e; Ot !== null; ) {
          o = Ot;
          var d = o.sibling, v = o.return;
          if (Dm(o), o === i) {
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
  var Mb = {
    getCacheForType: function(e) {
      var t = Ut(Ct), i = t.data.get(e);
      return i === void 0 && (i = e(), t.data.set(e, i)), i;
    }
  }, Rb = typeof WeakMap == "function" ? WeakMap : Map, Ke = 0, at = null, Ge = null, Fe = 0, Je = 0, fn = null, zr = !1, ci = !1, id = !1, mr = 0, pt = 0, Pr = 0, _a = 0, sd = 0, Nn = 0, di = 0, ys = null, tn = null, od = !1, ud = 0, Ko = 1 / 0, Jo = null, Ir = null, Dt = 0, Br = null, fi = null, hi = 0, ld = 0, cd = null, Gm = null, _s = 0, dd = null;
  function hn() {
    if ((Ke & 2) !== 0 && Fe !== 0)
      return Fe & -Fe;
    if (R.T !== null) {
      var e = ei;
      return e !== 0 ? e : yd();
    }
    return sh();
  }
  function Vm() {
    Nn === 0 && (Nn = (Fe & 536870912) === 0 || Qe ? La() : 536870912);
    var e = xn.current;
    return e !== null && (e.flags |= 32), Nn;
  }
  function pn(e, t, i) {
    (e === at && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null) && (pi(e, 0), Ur(
      e,
      Fe,
      Nn,
      !1
    )), Pi(e, i), ((Ke & 2) === 0 || e !== at) && (e === at && ((Ke & 2) === 0 && (_a |= i), pt === 4 && Ur(
      e,
      Fe,
      Nn,
      !1
    )), Xn(e));
  }
  function $m(e, t, i) {
    if ((Ke & 6) !== 0) throw Error(a(327));
    var o = !i && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Qt(e, t), d = o ? Lb(e, t) : pd(e, t, !0), v = o;
    do {
      if (d === 0) {
        ci && !o && Ur(e, t, 0, !1);
        break;
      } else {
        if (i = e.current.alternate, v && !jb(i)) {
          d = pd(e, t, !1), v = !1;
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
              d = ys;
              var U = D.current.memoizedState.isDehydrated;
              if (U && (pi(D, T).flags |= 256), T = pd(
                D,
                T,
                !1
              ), T !== 2) {
                if (id && !U) {
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
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ur(
                o,
                t,
                Nn,
                !zr
              );
              break e;
            case 2:
              tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((t & 62914560) === t && (d = ud + 300 - fe(), 10 < d)) {
            if (Ur(
              o,
              t,
              Nn,
              !zr
            ), Vt(o, 0, !0) !== 0) break e;
            o.timeoutHandle = Sg(
              Ym.bind(
                null,
                o,
                i,
                tn,
                Jo,
                od,
                t,
                Nn,
                _a,
                di,
                zr,
                v,
                2,
                -0,
                0
              ),
              d
            );
            break e;
          }
          Ym(
            o,
            i,
            tn,
            Jo,
            od,
            t,
            Nn,
            _a,
            di,
            zr,
            v,
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
  function Ym(e, t, i, o, d, v, T, D, U, X, ne, se, J, W) {
    if (e.timeoutHandle = -1, se = t.subtreeFlags, (se & 8192 || (se & 16785408) === 16785408) && (As = { stylesheets: null, count: 0, unsuspend: p1 }, Um(t), se = g1(), se !== null)) {
      e.cancelPendingCommit = se(
        eg.bind(
          null,
          e,
          t,
          v,
          i,
          o,
          d,
          T,
          D,
          U,
          ne,
          1,
          J,
          W
        )
      ), Ur(e, v, T, !X);
      return;
    }
    eg(
      e,
      t,
      v,
      i,
      o,
      d,
      T,
      D,
      U
    );
  }
  function jb(e) {
    for (var t = e; ; ) {
      var i = t.tag;
      if ((i === 0 || i === 11 || i === 15) && t.flags & 16384 && (i = t.updateQueue, i !== null && (i = i.stores, i !== null)))
        for (var o = 0; o < i.length; o++) {
          var d = i[o], v = d.getSnapshot;
          d = d.value;
          try {
            if (!un(v(), d)) return !1;
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
    t &= ~sd, t &= ~_a, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var d = t; 0 < d; ) {
      var v = 31 - Gt(d), T = 1 << v;
      o[v] = -1, d &= ~T;
    }
    i !== 0 && ah(e, i, t);
  }
  function Wo() {
    return (Ke & 6) === 0 ? (bs(0), !1) : !0;
  }
  function fd() {
    if (Ge !== null) {
      if (Je === 0)
        var e = Ge.return;
      else
        e = Ge, or = ha = null, Nc(e), si = null, cs = 0, e = Ge;
      for (; e !== null; )
        Am(e.alternate, e), e = e.return;
      Ge = null;
    }
  }
  function pi(e, t) {
    var i = e.timeoutHandle;
    i !== -1 && (e.timeoutHandle = -1, Kb(i)), i = e.cancelPendingCommit, i !== null && (e.cancelPendingCommit = null, i()), fd(), at = e, Ge = i = ar(e.current, null), Fe = t, Je = 0, fn = null, zr = !1, ci = Qt(e, t), id = !1, di = Nn = sd = _a = Pr = pt = 0, tn = ys = null, od = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0)
      for (e = e.entanglements, o &= t; 0 < o; ) {
        var d = 31 - Gt(o), v = 1 << d;
        t |= e[d], o &= ~v;
      }
    return mr = t, So(), i;
  }
  function Fm(e, t) {
    qe = null, R.H = Uo, t === ts || t === Oo ? (t = dp(), Je = 3) : t === up ? (t = dp(), Je = 4) : Je = t === fm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, fn = t, Ge === null && (pt = 1, Vo(
      e,
      Cn(t, e.current)
    ));
  }
  function Xm() {
    var e = R.H;
    return R.H = Uo, e === null ? Uo : e;
  }
  function Qm() {
    var e = R.A;
    return R.A = Mb, e;
  }
  function hd() {
    pt = 4, zr || (Fe & 4194048) !== Fe && xn.current !== null || (ci = !0), (Pr & 134217727) === 0 && (_a & 134217727) === 0 || at === null || Ur(
      at,
      Fe,
      Nn,
      !1
    );
  }
  function pd(e, t, i) {
    var o = Ke;
    Ke |= 2;
    var d = Xm(), v = Qm();
    (at !== e || Fe !== t) && (Jo = null, pi(e, t)), t = !1;
    var T = pt;
    e: do
      try {
        if (Je !== 0 && Ge !== null) {
          var D = Ge, U = fn;
          switch (Je) {
            case 8:
              fd(), T = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              xn.current === null && (t = !0);
              var X = Je;
              if (Je = 0, fn = null, mi(e, D, U, X), i && ci) {
                T = 0;
                break e;
              }
              break;
            default:
              X = Je, Je = 0, fn = null, mi(e, D, U, X);
          }
        }
        Db(), T = pt;
        break;
      } catch (ne) {
        Fm(e, ne);
      }
    while (!0);
    return t && e.shellSuspendCounter++, or = ha = null, Ke = o, R.H = d, R.A = v, Ge === null && (at = null, Fe = 0, So()), T;
  }
  function Db() {
    for (; Ge !== null; ) Km(Ge);
  }
  function Lb(e, t) {
    var i = Ke;
    Ke |= 2;
    var o = Xm(), d = Qm();
    at !== e || Fe !== t ? (Jo = null, Ko = fe() + 500, pi(e, t)) : ci = Qt(
      e,
      t
    );
    e: do
      try {
        if (Je !== 0 && Ge !== null) {
          t = Ge;
          var v = fn;
          t: switch (Je) {
            case 1:
              Je = 0, fn = null, mi(e, t, v, 1);
              break;
            case 2:
            case 9:
              if (lp(v)) {
                Je = 0, fn = null, Jm(t);
                break;
              }
              t = function() {
                Je !== 2 && Je !== 9 || at !== e || (Je = 7), Xn(e);
              }, v.then(t, t);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              lp(v) ? (Je = 0, fn = null, Jm(t)) : (Je = 0, fn = null, mi(e, t, v, 7));
              break;
            case 5:
              var T = null;
              switch (Ge.tag) {
                case 26:
                  T = Ge.memoizedState;
                case 5:
                case 27:
                  var D = Ge;
                  if (!T || jg(T)) {
                    Je = 0, fn = null;
                    var U = D.sibling;
                    if (U !== null) Ge = U;
                    else {
                      var X = D.return;
                      X !== null ? (Ge = X, eu(X)) : Ge = null;
                    }
                    break t;
                  }
              }
              Je = 0, fn = null, mi(e, t, v, 5);
              break;
            case 6:
              Je = 0, fn = null, mi(e, t, v, 6);
              break;
            case 8:
              fd(), pt = 6;
              break e;
            default:
              throw Error(a(462));
          }
        }
        zb();
        break;
      } catch (ne) {
        Fm(e, ne);
      }
    while (!0);
    return or = ha = null, R.H = o, R.A = d, Ke = i, Ge !== null ? 0 : (at = null, Fe = 0, So(), pt);
  }
  function zb() {
    for (; Ge !== null && !Ue(); )
      Km(Ge);
  }
  function Km(e) {
    var t = Cm(e.alternate, e, mr);
    e.memoizedProps = e.pendingProps, t === null ? eu(e) : Ge = t;
  }
  function Jm(e) {
    var t = e, i = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ym(
          i,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Fe
        );
        break;
      case 11:
        t = ym(
          i,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Fe
        );
        break;
      case 5:
        Nc(t);
      default:
        Am(i, t), t = Ge = Wh(t, mr), t = Cm(i, t, mr);
    }
    e.memoizedProps = e.pendingProps, t === null ? eu(e) : Ge = t;
  }
  function mi(e, t, i, o) {
    or = ha = null, Nc(t), si = null, cs = 0;
    var d = t.return;
    try {
      if (kb(
        e,
        d,
        t,
        i,
        Fe
      )) {
        pt = 1, Vo(
          e,
          Cn(i, e.current)
        ), Ge = null;
        return;
      }
    } catch (v) {
      if (d !== null) throw Ge = d, v;
      pt = 1, Vo(
        e,
        Cn(i, e.current)
      ), Ge = null;
      return;
    }
    t.flags & 32768 ? (Qe || o === 1 ? e = !0 : ci || (Fe & 536870912) !== 0 ? e = !1 : (zr = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = xn.current, o !== null && o.tag === 13 && (o.flags |= 16384))), Wm(t, e)) : eu(t);
  }
  function eu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Wm(
          t,
          zr
        );
        return;
      }
      e = t.return;
      var i = Tb(
        t.alternate,
        t,
        mr
      );
      if (i !== null) {
        Ge = i;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ge = t;
        return;
      }
      Ge = t = e;
    } while (t !== null);
    pt === 0 && (pt = 5);
  }
  function Wm(e, t) {
    do {
      var i = xb(e.alternate, e);
      if (i !== null) {
        i.flags &= 32767, Ge = i;
        return;
      }
      if (i = e.return, i !== null && (i.flags |= 32768, i.subtreeFlags = 0, i.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ge = e;
        return;
      }
      Ge = e = i;
    } while (e !== null);
    pt = 6, Ge = null;
  }
  function eg(e, t, i, o, d, v, T, D, U) {
    e.cancelPendingCommit = null;
    do
      tu();
    while (Dt !== 0);
    if ((Ke & 6) !== 0) throw Error(a(327));
    if (t !== null) {
      if (t === e.current) throw Error(a(177));
      if (v = t.lanes | t.childLanes, v |= ac, p_(
        e,
        i,
        v,
        T,
        D,
        U
      ), e === at && (Ge = at = null, Fe = 0), fi = t, Br = e, hi = i, ld = v, cd = d, Gm = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ub(ye, function() {
        return ig(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = R.T, R.T = null, d = B.p, B.p = 2, T = Ke, Ke |= 4;
        try {
          Nb(e, t, i);
        } finally {
          Ke = T, B.p = d, R.T = o;
        }
      }
      Dt = 1, tg(), ng(), rg();
    }
  }
  function tg() {
    if (Dt === 1) {
      Dt = 0;
      var e = Br, t = fi, i = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || i) {
        i = R.T, R.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ke;
        Ke |= 4;
        try {
          Pm(t, e);
          var v = Ad, T = Zh(e.containerInfo), D = v.focusedElem, U = v.selectionRange;
          if (T !== D && D && D.ownerDocument && qh(
            D.ownerDocument.documentElement,
            D
          )) {
            if (U !== null && Wl(D)) {
              var X = U.start, ne = U.end;
              if (ne === void 0 && (ne = X), "selectionStart" in D)
                D.selectionStart = X, D.selectionEnd = Math.min(
                  ne,
                  D.value.length
                );
              else {
                var se = D.ownerDocument || document, J = se && se.defaultView || window;
                if (J.getSelection) {
                  var W = J.getSelection(), Oe = D.textContent.length, Te = Math.min(U.start, Oe), tt = U.end === void 0 ? Te : Math.min(U.end, Oe);
                  !W.extend && Te > tt && (T = tt, tt = Te, Te = T);
                  var G = Hh(
                    D,
                    Te
                  ), q = Hh(
                    D,
                    tt
                  );
                  if (G && q && (W.rangeCount !== 1 || W.anchorNode !== G.node || W.anchorOffset !== G.offset || W.focusNode !== q.node || W.focusOffset !== q.offset)) {
                    var F = se.createRange();
                    F.setStart(G.node, G.offset), W.removeAllRanges(), Te > tt ? (W.addRange(F), W.extend(q.node, q.offset)) : (F.setEnd(q.node, q.offset), W.addRange(F));
                  }
                }
              }
            }
            for (se = [], W = D; W = W.parentNode; )
              W.nodeType === 1 && se.push({
                element: W,
                left: W.scrollLeft,
                top: W.scrollTop
              });
            for (typeof D.focus == "function" && D.focus(), D = 0; D < se.length; D++) {
              var ie = se[D];
              ie.element.scrollLeft = ie.left, ie.element.scrollTop = ie.top;
            }
          }
          hu = !!kd, Ad = kd = null;
        } finally {
          Ke = d, B.p = o, R.T = i;
        }
      }
      e.current = t, Dt = 2;
    }
  }
  function ng() {
    if (Dt === 2) {
      Dt = 0;
      var e = Br, t = fi, i = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || i) {
        i = R.T, R.T = null;
        var o = B.p;
        B.p = 2;
        var d = Ke;
        Ke |= 4;
        try {
          jm(e, t.alternate, t);
        } finally {
          Ke = d, B.p = o, R.T = i;
        }
      }
      Dt = 3;
    }
  }
  function rg() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, Ne();
      var e = Br, t = fi, i = hi, o = Gm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, fi = Br = null, ag(e, e.pendingLanes));
      var d = e.pendingLanes;
      if (d === 0 && (Ir = null), Rl(i), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            jn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        t = R.T, d = B.p, B.p = 2, R.T = null;
        try {
          for (var v = e.onRecoverableError, T = 0; T < o.length; T++) {
            var D = o[T];
            v(D.value, {
              componentStack: D.stack
            });
          }
        } finally {
          R.T = t, B.p = d;
        }
      }
      (hi & 3) !== 0 && tu(), Xn(e), d = e.pendingLanes, (i & 4194090) !== 0 && (d & 42) !== 0 ? e === dd ? _s++ : (_s = 0, dd = e) : _s = 0, bs(0);
    }
  }
  function ag(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Wi(t)));
  }
  function tu(e) {
    return tg(), ng(), rg(), ig();
  }
  function ig() {
    if (Dt !== 5) return !1;
    var e = Br, t = ld;
    ld = 0;
    var i = Rl(hi), o = R.T, d = B.p;
    try {
      B.p = 32 > i ? 32 : i, R.T = null, i = cd, cd = null;
      var v = Br, T = hi;
      if (Dt = 0, fi = Br = null, hi = 0, (Ke & 6) !== 0) throw Error(a(331));
      var D = Ke;
      if (Ke |= 4, qm(v.current), Bm(
        v,
        v.current,
        T,
        i
      ), Ke = D, bs(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(jn, v);
        } catch {
        }
      return !0;
    } finally {
      B.p = d, R.T = o, ag(e, t);
    }
  }
  function sg(e, t, i) {
    t = Cn(i, t), t = Zc(e.stateNode, t, 2), e = Nr(e, t, 2), e !== null && (Pi(e, 2), Xn(e));
  }
  function nt(e, t, i) {
    if (e.tag === 3)
      sg(e, e, i);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          sg(
            t,
            e,
            i
          );
          break;
        } else if (t.tag === 1) {
          var o = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ir === null || !Ir.has(o))) {
            e = Cn(i, e), i = cm(2), o = Nr(t, i, 2), o !== null && (dm(
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
  function md(e, t, i) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new Rb();
      var d = /* @__PURE__ */ new Set();
      o.set(t, d);
    } else
      d = o.get(t), d === void 0 && (d = /* @__PURE__ */ new Set(), o.set(t, d));
    d.has(i) || (id = !0, d.add(i), e = Pb.bind(null, e, t, i), t.then(e, e));
  }
  function Pb(e, t, i) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & i, e.warmLanes &= ~i, at === e && (Fe & i) === i && (pt === 4 || pt === 3 && (Fe & 62914560) === Fe && 300 > fe() - ud ? (Ke & 2) === 0 && pi(e, 0) : sd |= i, di === Fe && (di = 0)), Xn(e);
  }
  function og(e, t) {
    t === 0 && (t = rh()), e = Qa(e, t), e !== null && (Pi(e, t), Xn(e));
  }
  function Ib(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), og(e, i);
  }
  function Bb(e, t) {
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
    o !== null && o.delete(t), og(e, i);
  }
  function Ub(e, t) {
    return ve(e, t);
  }
  var nu = null, gi = null, gd = !1, ru = !1, vd = !1, ba = 0;
  function Xn(e) {
    e !== gi && e.next === null && (gi === null ? nu = gi = e : gi = gi.next = e), ru = !0, gd || (gd = !0, qb());
  }
  function bs(e, t) {
    if (!vd && ru) {
      vd = !0;
      do
        for (var i = !1, o = nu; o !== null; ) {
          if (e !== 0) {
            var d = o.pendingLanes;
            if (d === 0) var v = 0;
            else {
              var T = o.suspendedLanes, D = o.pingedLanes;
              v = (1 << 31 - Gt(42 | e) + 1) - 1, v &= d & ~(T & ~D), v = v & 201326741 ? v & 201326741 | 1 : v ? v | 2 : 0;
            }
            v !== 0 && (i = !0, dg(o, v));
          } else
            v = Fe, v = Vt(
              o,
              o === at ? v : 0,
              o.cancelPendingCommit !== null || o.timeoutHandle !== -1
            ), (v & 3) === 0 || Qt(o, v) || (i = !0, dg(o, v));
          o = o.next;
        }
      while (i);
      vd = !1;
    }
  }
  function Hb() {
    ug();
  }
  function ug() {
    ru = gd = !1;
    var e = 0;
    ba !== 0 && (Qb() && (e = ba), ba = 0);
    for (var t = fe(), i = null, o = nu; o !== null; ) {
      var d = o.next, v = lg(o, t);
      v === 0 ? (o.next = null, i === null ? nu = d : i.next = d, d === null && (gi = i)) : (i = o, (e !== 0 || (v & 3) !== 0) && (ru = !0)), o = d;
    }
    bs(e);
  }
  function lg(e, t) {
    for (var i = e.suspendedLanes, o = e.pingedLanes, d = e.expirationTimes, v = e.pendingLanes & -62914561; 0 < v; ) {
      var T = 31 - Gt(v), D = 1 << T, U = d[T];
      U === -1 ? ((D & i) === 0 || (D & o) !== 0) && (d[T] = uo(D, t)) : U <= t && (e.expiredLanes |= D), v &= ~D;
    }
    if (t = at, i = Fe, i = Vt(
      e,
      e === t ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o = e.callbackNode, i === 0 || e === t && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null)
      return o !== null && o !== null && we(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((i & 3) === 0 || Qt(e, i)) {
      if (t = i & -i, t === e.callbackPriority) return t;
      switch (o !== null && we(o), Rl(i)) {
        case 2:
        case 8:
          i = de;
          break;
        case 32:
          i = ye;
          break;
        case 268435456:
          i = He;
          break;
        default:
          i = ye;
      }
      return o = cg.bind(null, e), i = ve(i, o), e.callbackPriority = t, e.callbackNode = i, t;
    }
    return o !== null && o !== null && we(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function cg(e, t) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var i = e.callbackNode;
    if (tu() && e.callbackNode !== i)
      return null;
    var o = Fe;
    return o = Vt(
      e,
      e === at ? o : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), o === 0 ? null : ($m(e, o, t), lg(e, fe()), e.callbackNode != null && e.callbackNode === i ? cg.bind(null, e) : null);
  }
  function dg(e, t) {
    if (tu()) return null;
    $m(e, t, !0);
  }
  function qb() {
    Jb(function() {
      (Ke & 6) !== 0 ? ve(
        Ae,
        Hb
      ) : ug();
    });
  }
  function yd() {
    return ba === 0 && (ba = La()), ba;
  }
  function fg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : po("" + e);
  }
  function hg(e, t) {
    var i = t.ownerDocument.createElement("input");
    return i.name = t.name, i.value = t.value, e.id && i.setAttribute("form", e.id), t.parentNode.insertBefore(i, t), e = new FormData(e), i.parentNode.removeChild(i), e;
  }
  function Zb(e, t, i, o, d) {
    if (t === "submit" && i && i.stateNode === d) {
      var v = fg(
        (d[Kt] || null).action
      ), T = o.submitter;
      T && (t = (t = T[Kt] || null) ? fg(t.formAction) : T.getAttribute("formAction"), t !== null && (v = t, T = null));
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
                if (ba !== 0) {
                  var U = T ? hg(d, T) : new FormData(d);
                  Ic(
                    i,
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
                typeof v == "function" && (D.preventDefault(), U = T ? hg(d, T) : new FormData(d), Ic(
                  i,
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
  for (var _d = 0; _d < rc.length; _d++) {
    var bd = rc[_d], Gb = bd.toLowerCase(), Vb = bd[0].toUpperCase() + bd.slice(1);
    Dn(
      Gb,
      "on" + Vb
    );
  }
  Dn($h, "onAnimationEnd"), Dn(Yh, "onAnimationIteration"), Dn(Fh, "onAnimationStart"), Dn("dblclick", "onDoubleClick"), Dn("focusin", "onFocus"), Dn("focusout", "onBlur"), Dn(ub, "onTransitionRun"), Dn(lb, "onTransitionStart"), Dn(cb, "onTransitionCancel"), Dn(Xh, "onTransitionEnd"), Ua("onMouseEnter", ["mouseout", "mouseover"]), Ua("onMouseLeave", ["mouseout", "mouseover"]), Ua("onPointerEnter", ["pointerout", "pointerover"]), Ua("onPointerLeave", ["pointerout", "pointerover"]), aa(
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
  var Ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $b = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss)
  );
  function pg(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var o = e[i], d = o.event;
      o = o.listeners;
      e: {
        var v = void 0;
        if (t)
          for (var T = o.length - 1; 0 <= T; T--) {
            var D = o[T], U = D.instance, X = D.currentTarget;
            if (D = D.listener, U !== v && d.isPropagationStopped())
              break e;
            v = D, d.currentTarget = X;
            try {
              v(d);
            } catch (ne) {
              Go(ne);
            }
            d.currentTarget = null, v = U;
          }
        else
          for (T = 0; T < o.length; T++) {
            if (D = o[T], U = D.instance, X = D.currentTarget, D = D.listener, U !== v && d.isPropagationStopped())
              break e;
            v = D, d.currentTarget = X;
            try {
              v(d);
            } catch (ne) {
              Go(ne);
            }
            d.currentTarget = null, v = U;
          }
      }
    }
  }
  function Ve(e, t) {
    var i = t[jl];
    i === void 0 && (i = t[jl] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    i.has(o) || (mg(t, e, 2, !1), i.add(o));
  }
  function Sd(e, t, i) {
    var o = 0;
    t && (o |= 4), mg(
      i,
      e,
      o,
      t
    );
  }
  var au = "_reactListening" + Math.random().toString(36).slice(2);
  function wd(e) {
    if (!e[au]) {
      e[au] = !0, uh.forEach(function(i) {
        i !== "selectionchange" && ($b.has(i) || Sd(i, !1, e), Sd(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[au] || (t[au] = !0, Sd("selectionchange", !1, t));
    }
  }
  function mg(e, t, i, o) {
    switch (Bg(t)) {
      case 2:
        var d = _1;
        break;
      case 8:
        d = b1;
        break;
      default:
        d = zd;
    }
    i = d.bind(
      null,
      t,
      i,
      e
    ), d = void 0, !Gl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (d = !0), o ? d !== void 0 ? e.addEventListener(t, i, {
      capture: !0,
      passive: d
    }) : e.addEventListener(t, i, !0) : d !== void 0 ? e.addEventListener(t, i, {
      passive: d
    }) : e.addEventListener(t, i, !1);
  }
  function Ed(e, t, i, o, d) {
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
    wh(function() {
      var X = v, ne = ql(i), se = [];
      e: {
        var J = Qh.get(e);
        if (J !== void 0) {
          var W = yo, Oe = e;
          switch (e) {
            case "keypress":
              if (go(i) === 0) break e;
            case "keydown":
            case "keyup":
              W = U_;
              break;
            case "focusin":
              Oe = "focus", W = Fl;
              break;
            case "focusout":
              Oe = "blur", W = Fl;
              break;
            case "beforeblur":
            case "afterblur":
              W = Fl;
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
              W = x_;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Z_;
              break;
            case $h:
            case Yh:
            case Fh:
              W = M_;
              break;
            case Xh:
              W = V_;
              break;
            case "scroll":
            case "scrollend":
              W = A_;
              break;
            case "wheel":
              W = Y_;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = j_;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Th;
              break;
            case "toggle":
            case "beforetoggle":
              W = X_;
          }
          var Te = (t & 4) !== 0, tt = !Te && (e === "scroll" || e === "scrollend"), G = Te ? J !== null ? J + "Capture" : null : J;
          Te = [];
          for (var q = X, F; q !== null; ) {
            var ie = q;
            if (F = ie.stateNode, ie = ie.tag, ie !== 5 && ie !== 26 && ie !== 27 || F === null || G === null || (ie = Ui(q, G), ie != null && Te.push(
              ws(q, ie, F)
            )), tt) break;
            q = q.return;
          }
          0 < Te.length && (J = new W(
            J,
            Oe,
            null,
            i,
            ne
          ), se.push({ event: J, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (J = e === "mouseover" || e === "pointerover", W = e === "mouseout" || e === "pointerout", J && i !== Hl && (Oe = i.relatedTarget || i.fromElement) && (Pa(Oe) || Oe[za]))
            break e;
          if ((W || J) && (J = ne.window === ne ? ne : (J = ne.ownerDocument) ? J.defaultView || J.parentWindow : window, W ? (Oe = i.relatedTarget || i.toElement, W = X, Oe = Oe ? Pa(Oe) : null, Oe !== null && (tt = c(Oe), Te = Oe.tag, Oe !== tt || Te !== 5 && Te !== 27 && Te !== 6) && (Oe = null)) : (W = null, Oe = X), W !== Oe)) {
            if (Te = kh, ie = "onMouseLeave", G = "onMouseEnter", q = "mouse", (e === "pointerout" || e === "pointerover") && (Te = Th, ie = "onPointerLeave", G = "onPointerEnter", q = "pointer"), tt = W == null ? J : Bi(W), F = Oe == null ? J : Bi(Oe), J = new Te(
              ie,
              q + "leave",
              W,
              i,
              ne
            ), J.target = tt, J.relatedTarget = F, ie = null, Pa(ne) === X && (Te = new Te(
              G,
              q + "enter",
              Oe,
              i,
              ne
            ), Te.target = F, Te.relatedTarget = tt, ie = Te), tt = ie, W && Oe)
              t: {
                for (Te = W, G = Oe, q = 0, F = Te; F; F = vi(F))
                  q++;
                for (F = 0, ie = G; ie; ie = vi(ie))
                  F++;
                for (; 0 < q - F; )
                  Te = vi(Te), q--;
                for (; 0 < F - q; )
                  G = vi(G), F--;
                for (; q--; ) {
                  if (Te === G || G !== null && Te === G.alternate)
                    break t;
                  Te = vi(Te), G = vi(G);
                }
                Te = null;
              }
            else Te = null;
            W !== null && gg(
              se,
              J,
              W,
              Te,
              !1
            ), Oe !== null && tt !== null && gg(
              se,
              tt,
              Oe,
              Te,
              !0
            );
          }
        }
        e: {
          if (J = X ? Bi(X) : window, W = J.nodeName && J.nodeName.toLowerCase(), W === "select" || W === "input" && J.type === "file")
            var Se = Lh;
          else if (jh(J))
            if (zh)
              Se = ib;
            else {
              Se = rb;
              var Ze = nb;
            }
          else
            W = J.nodeName, !W || W.toLowerCase() !== "input" || J.type !== "checkbox" && J.type !== "radio" ? X && Ul(X.elementType) && (Se = Lh) : Se = ab;
          if (Se && (Se = Se(e, X))) {
            Dh(
              se,
              Se,
              i,
              ne
            );
            break e;
          }
          Ze && Ze(e, J, X), e === "focusout" && X && J.type === "number" && X.memoizedProps.value != null && Bl(J, "number", J.value);
        }
        switch (Ze = X ? Bi(X) : window, e) {
          case "focusin":
            (jh(Ze) || Ze.contentEditable === "true") && (Ya = Ze, ec = X, Fi = null);
            break;
          case "focusout":
            Fi = ec = Ya = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, Gh(se, i, ne);
            break;
          case "selectionchange":
            if (ob) break;
          case "keydown":
          case "keyup":
            Gh(se, i, ne);
        }
        var Ce;
        if (Ql)
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
          $a ? Mh(e, i) && (xe = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (xe = "onCompositionStart");
        xe && (xh && i.locale !== "ko" && ($a || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && $a && (Ce = Eh()) : (kr = ne, Vl = "value" in kr ? kr.value : kr.textContent, $a = !0)), Ze = iu(X, xe), 0 < Ze.length && (xe = new Ah(
          xe,
          e,
          null,
          i,
          ne
        ), se.push({ event: xe, listeners: Ze }), Ce ? xe.data = Ce : (Ce = Rh(i), Ce !== null && (xe.data = Ce)))), (Ce = K_ ? J_(e, i) : W_(e, i)) && (xe = iu(X, "onBeforeInput"), 0 < xe.length && (Ze = new Ah(
          "onBeforeInput",
          "beforeinput",
          null,
          i,
          ne
        ), se.push({
          event: Ze,
          listeners: xe
        }), Ze.data = Ce)), Zb(
          se,
          e,
          X,
          i,
          ne
        );
      }
      pg(se, t);
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
      var d = e, v = d.stateNode;
      if (d = d.tag, d !== 5 && d !== 26 && d !== 27 || v === null || (d = Ui(e, i), d != null && o.unshift(
        ws(e, d, v)
      ), d = Ui(e, t), d != null && o.push(
        ws(e, d, v)
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
  function gg(e, t, i, o, d) {
    for (var v = t._reactName, T = []; i !== null && i !== o; ) {
      var D = i, U = D.alternate, X = D.stateNode;
      if (D = D.tag, U !== null && U === o) break;
      D !== 5 && D !== 26 && D !== 27 || X === null || (U = X, d ? (X = Ui(i, v), X != null && T.unshift(
        ws(i, X, U)
      )) : d || (X = Ui(i, v), X != null && T.push(
        ws(i, X, U)
      ))), i = i.return;
    }
    T.length !== 0 && e.push({ event: t, listeners: T });
  }
  var Yb = /\r\n?/g, Fb = /\u0000|\uFFFD/g;
  function vg(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yb, `
`).replace(Fb, "");
  }
  function yg(e, t) {
    return t = vg(t), vg(e) === t;
  }
  function su() {
  }
  function et(e, t, i, o, d, v) {
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
        bh(e, o, v);
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
          typeof v == "function" && (i === "formAction" ? (t !== "input" && et(e, t, "name", d.name, d, null), et(
            e,
            t,
            "formEncType",
            d.formEncType,
            d,
            null
          ), et(
            e,
            t,
            "formMethod",
            d.formMethod,
            d,
            null
          ), et(
            e,
            t,
            "formTarget",
            d.formTarget,
            d,
            null
          )) : (et(e, t, "encType", d.encType, d, null), et(e, t, "method", d.method, d, null), et(e, t, "target", d.target, d, null)));
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
        (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = C_.get(i) || i, lo(e, i, o));
    }
  }
  function Cd(e, t, i, o, d, v) {
    switch (i) {
      case "style":
        bh(e, o, v);
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
        if (!lh.hasOwnProperty(i))
          e: {
            if (i[0] === "o" && i[1] === "n" && (d = i.endsWith("Capture"), t = i.slice(2, d ? i.length - 7 : void 0), v = e[Kt] || null, v = v != null ? v[i] : null, typeof v == "function" && e.removeEventListener(t, v, d), typeof o == "function")) {
              typeof v != "function" && v !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)), e.addEventListener(t, o, d);
              break e;
            }
            i in e ? e[i] = o : o === !0 ? e.setAttribute(i, "") : lo(e, i, o);
          }
    }
  }
  function Lt(e, t, i) {
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
        var o = !1, d = !1, v;
        for (v in i)
          if (i.hasOwnProperty(v)) {
            var T = i[v];
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
                  throw Error(a(137, t));
                default:
                  et(e, t, v, T, i, null);
              }
          }
        d && et(e, t, "srcSet", i.srcSet, i, null), o && et(e, t, "src", i.src, i, null);
        return;
      case "input":
        Ve("invalid", e);
        var D = v = T = d = null, U = null, X = null;
        for (o in i)
          if (i.hasOwnProperty(o)) {
            var ne = i[o];
            if (ne != null)
              switch (o) {
                case "name":
                  d = ne;
                  break;
                case "type":
                  T = ne;
                  break;
                case "checked":
                  U = ne;
                  break;
                case "defaultChecked":
                  X = ne;
                  break;
                case "value":
                  v = ne;
                  break;
                case "defaultValue":
                  D = ne;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (ne != null)
                    throw Error(a(137, t));
                  break;
                default:
                  et(e, t, o, ne, i, null);
              }
          }
        gh(
          e,
          v,
          D,
          U,
          X,
          T,
          d,
          !1
        ), fo(e);
        return;
      case "select":
        Ve("invalid", e), o = T = v = null;
        for (d in i)
          if (i.hasOwnProperty(d) && (D = i[d], D != null))
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
                et(e, t, d, D, i, null);
            }
        t = v, i = T, e.multiple = !!o, t != null ? qa(e, !!o, t, !1) : i != null && qa(e, !!o, i, !0);
        return;
      case "textarea":
        Ve("invalid", e), v = d = o = null;
        for (T in i)
          if (i.hasOwnProperty(T) && (D = i[T], D != null))
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
                if (D != null) throw Error(a(91));
                break;
              default:
                et(e, t, T, D, i, null);
            }
        yh(e, o, d, v), fo(e);
        return;
      case "option":
        for (U in i)
          if (i.hasOwnProperty(U) && (o = i[U], o != null))
            switch (U) {
              case "selected":
                e.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                et(e, t, U, o, i, null);
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
                et(e, t, X, o, i, null);
            }
        return;
      default:
        if (Ul(t)) {
          for (ne in i)
            i.hasOwnProperty(ne) && (o = i[ne], o !== void 0 && Cd(
              e,
              t,
              ne,
              o,
              i,
              void 0
            ));
          return;
        }
    }
    for (D in i)
      i.hasOwnProperty(D) && (o = i[D], o != null && et(e, t, D, o, i, null));
  }
  function Xb(e, t, i, o) {
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
        var d = null, v = null, T = null, D = null, U = null, X = null, ne = null;
        for (W in i) {
          var se = i[W];
          if (i.hasOwnProperty(W) && se != null)
            switch (W) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                U = se;
              default:
                o.hasOwnProperty(W) || et(e, t, W, null, o, se);
            }
        }
        for (var J in o) {
          var W = o[J];
          if (se = i[J], o.hasOwnProperty(J) && (W != null || se != null))
            switch (J) {
              case "type":
                v = W;
                break;
              case "name":
                d = W;
                break;
              case "checked":
                X = W;
                break;
              case "defaultChecked":
                ne = W;
                break;
              case "value":
                T = W;
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
                W !== se && et(
                  e,
                  t,
                  J,
                  W,
                  o,
                  se
                );
            }
        }
        Il(
          e,
          T,
          D,
          U,
          X,
          ne,
          v,
          d
        );
        return;
      case "select":
        W = T = D = J = null;
        for (v in i)
          if (U = i[v], i.hasOwnProperty(v) && U != null)
            switch (v) {
              case "value":
                break;
              case "multiple":
                W = U;
              default:
                o.hasOwnProperty(v) || et(
                  e,
                  t,
                  v,
                  null,
                  o,
                  U
                );
            }
        for (d in o)
          if (v = o[d], U = i[d], o.hasOwnProperty(d) && (v != null || U != null))
            switch (d) {
              case "value":
                J = v;
                break;
              case "defaultValue":
                D = v;
                break;
              case "multiple":
                T = v;
              default:
                v !== U && et(
                  e,
                  t,
                  d,
                  v,
                  o,
                  U
                );
            }
        t = D, i = T, o = W, J != null ? qa(e, !!i, J, !1) : !!o != !!i && (t != null ? qa(e, !!i, t, !0) : qa(e, !!i, i ? [] : "", !1));
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
                et(e, t, D, null, o, d);
            }
        for (T in o)
          if (d = o[T], v = i[T], o.hasOwnProperty(T) && (d != null || v != null))
            switch (T) {
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
                d !== v && et(e, t, T, d, o, v);
            }
        vh(e, J, W);
        return;
      case "option":
        for (var Oe in i)
          if (J = i[Oe], i.hasOwnProperty(Oe) && J != null && !o.hasOwnProperty(Oe))
            switch (Oe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                et(
                  e,
                  t,
                  Oe,
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
                et(
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
        for (var Te in i)
          J = i[Te], i.hasOwnProperty(Te) && J != null && !o.hasOwnProperty(Te) && et(e, t, Te, null, o, J);
        for (X in o)
          if (J = o[X], W = i[X], o.hasOwnProperty(X) && J !== W && (J != null || W != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (J != null)
                  throw Error(a(137, t));
                break;
              default:
                et(
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
        if (Ul(t)) {
          for (var tt in i)
            J = i[tt], i.hasOwnProperty(tt) && J !== void 0 && !o.hasOwnProperty(tt) && Cd(
              e,
              t,
              tt,
              void 0,
              o,
              J
            );
          for (ne in o)
            J = o[ne], W = i[ne], !o.hasOwnProperty(ne) || J === W || J === void 0 && W === void 0 || Cd(
              e,
              t,
              ne,
              J,
              o,
              W
            );
          return;
        }
    }
    for (var G in i)
      J = i[G], i.hasOwnProperty(G) && J != null && !o.hasOwnProperty(G) && et(e, t, G, null, o, J);
    for (se in o)
      J = o[se], W = i[se], !o.hasOwnProperty(se) || J === W || J == null && W == null || et(e, t, se, J, o, W);
  }
  var kd = null, Ad = null;
  function ou(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function _g(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function bg(e, t) {
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
  function Td(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var xd = null;
  function Qb() {
    var e = window.event;
    return e && e.type === "popstate" ? e === xd ? !1 : (xd = e, !0) : (xd = null, !1);
  }
  var Sg = typeof setTimeout == "function" ? setTimeout : void 0, Kb = typeof clearTimeout == "function" ? clearTimeout : void 0, wg = typeof Promise == "function" ? Promise : void 0, Jb = typeof queueMicrotask == "function" ? queueMicrotask : typeof wg < "u" ? function(e) {
    return wg.resolve(null).then(e).catch(Wb);
  } : Sg;
  function Wb(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hr(e) {
    return e === "head";
  }
  function Eg(e, t) {
    var i = t, o = 0, d = 0;
    do {
      var v = i.nextSibling;
      if (e.removeChild(i), v && v.nodeType === 8)
        if (i = v.data, i === "/$") {
          if (0 < o && 8 > o) {
            i = o;
            var T = e.ownerDocument;
            if (i & 1 && Es(T.documentElement), i & 2 && Es(T.body), i & 4)
              for (i = T.head, Es(i), T = i.firstChild; T; ) {
                var D = T.nextSibling, U = T.nodeName;
                T[Ii] || U === "SCRIPT" || U === "STYLE" || U === "LINK" && T.rel.toLowerCase() === "stylesheet" || i.removeChild(T), T = D;
              }
          }
          if (d === 0) {
            e.removeChild(v), Ms(t);
            return;
          }
          d--;
        } else
          i === "$" || i === "$?" || i === "$!" ? d++ : o = i.charCodeAt(0) - 48;
      else o = 0;
      i = v;
    } while (i);
    Ms(t);
  }
  function Nd(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var i = t;
      switch (t = t.nextSibling, i.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nd(i), Dl(i);
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
  function e1(e, t, i, o) {
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
      if (e = zn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function t1(e, t, i) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = zn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Od(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function n1(e, t) {
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
  function zn(e) {
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
  var Md = null;
  function Cg(e) {
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
    Dl(e);
  }
  var On = /* @__PURE__ */ new Map(), Ag = /* @__PURE__ */ new Set();
  function uu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var gr = B.d;
  B.d = {
    f: r1,
    r: a1,
    D: i1,
    C: s1,
    L: o1,
    m: u1,
    X: c1,
    S: l1,
    M: d1
  };
  function r1() {
    var e = gr.f(), t = Wo();
    return e || t;
  }
  function a1(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === "form" ? $p(t) : gr.r(e);
  }
  var yi = typeof document > "u" ? null : document;
  function Tg(e, t, i) {
    var o = yi;
    if (o && typeof t == "string" && t) {
      var d = En(t);
      d = 'link[rel="' + e + '"][href="' + d + '"]', typeof i == "string" && (d += '[crossorigin="' + i + '"]'), Ag.has(d) || (Ag.add(d), e = { rel: e, crossOrigin: i, href: t }, o.querySelector(d) === null && (t = o.createElement("link"), Lt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function i1(e) {
    gr.D(e), Tg("dns-prefetch", e, null);
  }
  function s1(e, t) {
    gr.C(e, t), Tg("preconnect", e, t);
  }
  function o1(e, t, i) {
    gr.L(e, t, i);
    var o = yi;
    if (o && e && t) {
      var d = 'link[rel="preload"][as="' + En(t) + '"]';
      t === "image" && i && i.imageSrcSet ? (d += '[imagesrcset="' + En(
        i.imageSrcSet
      ) + '"]', typeof i.imageSizes == "string" && (d += '[imagesizes="' + En(
        i.imageSizes
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
          href: t === "image" && i && i.imageSrcSet ? void 0 : e,
          as: t
        },
        i
      ), On.set(v, e), o.querySelector(d) !== null || t === "style" && o.querySelector(Cs(v)) || t === "script" && o.querySelector(ks(v)) || (t = o.createElement("link"), Lt(t, "link", e), xt(t), o.head.appendChild(t)));
    }
  }
  function u1(e, t) {
    gr.m(e, t);
    var i = yi;
    if (i && e) {
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
      if (!On.has(v) && (e = g({ rel: "modulepreload", href: e }, t), On.set(v, e), i.querySelector(d) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(ks(v)))
              return;
        }
        o = i.createElement("link"), Lt(o, "link", e), xt(o), i.head.appendChild(o);
      }
    }
  }
  function l1(e, t, i) {
    gr.S(e, t, i);
    var o = yi;
    if (o && e) {
      var d = Ba(o).hoistableStyles, v = _i(e);
      t = t || "default";
      var T = d.get(v);
      if (!T) {
        var D = { loading: 0, preload: null };
        if (T = o.querySelector(
          Cs(v)
        ))
          D.loading = 5;
        else {
          e = g(
            { rel: "stylesheet", href: e, "data-precedence": t },
            i
          ), (i = On.get(v)) && Rd(e, i);
          var U = T = o.createElement("link");
          xt(U), Lt(U, "link", e), U._p = new Promise(function(X, ne) {
            U.onload = X, U.onerror = ne;
          }), U.addEventListener("load", function() {
            D.loading |= 1;
          }), U.addEventListener("error", function() {
            D.loading |= 2;
          }), D.loading |= 4, lu(T, t, o);
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
  function c1(e, t) {
    gr.X(e, t);
    var i = yi;
    if (i && e) {
      var o = Ba(i).hoistableScripts, d = bi(e), v = o.get(d);
      v || (v = i.querySelector(ks(d)), v || (e = g({ src: e, async: !0 }, t), (t = On.get(d)) && jd(e, t), v = i.createElement("script"), xt(v), Lt(v, "link", e), i.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(d, v));
    }
  }
  function d1(e, t) {
    gr.M(e, t);
    var i = yi;
    if (i && e) {
      var o = Ba(i).hoistableScripts, d = bi(e), v = o.get(d);
      v || (v = i.querySelector(ks(d)), v || (e = g({ src: e, async: !0, type: "module" }, t), (t = On.get(d)) && jd(e, t), v = i.createElement("script"), xt(v), Lt(v, "link", e), i.head.appendChild(v)), v = {
        type: "script",
        instance: v,
        count: 1,
        state: null
      }, o.set(d, v));
    }
  }
  function xg(e, t, i, o) {
    var d = (d = ce.current) ? uu(d) : null;
    if (!d) throw Error(a(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string" ? (t = _i(i.href), i = Ba(
          d
        ).hoistableStyles, o = i.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, i.set(t, o)), o) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
          e = _i(i.href);
          var v = Ba(
            d
          ).hoistableStyles, T = v.get(e);
          if (T || (d = d.ownerDocument || d, T = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, v.set(e, T), (v = d.querySelector(
            Cs(e)
          )) && !v._p && (T.instance = v, T.state.loading = 5), On.has(e) || (i = {
            rel: "preload",
            as: "style",
            href: i.href,
            crossOrigin: i.crossOrigin,
            integrity: i.integrity,
            media: i.media,
            hrefLang: i.hrefLang,
            referrerPolicy: i.referrerPolicy
          }, On.set(e, i), v || f1(
            d,
            e,
            i,
            T.state
          ))), t && o === null)
            throw Error(a(528, ""));
          return T;
        }
        if (t && o !== null)
          throw Error(a(529, ""));
        return null;
      case "script":
        return t = i.async, i = i.src, typeof i == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = bi(i), i = Ba(
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
  function _i(e) {
    return 'href="' + En(e) + '"';
  }
  function Cs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ng(e) {
    return g({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function f1(e, t, i, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), Lt(t, "link", i), xt(t), e.head.appendChild(t));
  }
  function bi(e) {
    return '[src="' + En(e) + '"]';
  }
  function ks(e) {
    return "script[async]" + e;
  }
  function Og(e, t, i) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var o = e.querySelector(
            'style[data-href~="' + En(i.href) + '"]'
          );
          if (o)
            return t.instance = o, xt(o), o;
          var d = g({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null
          });
          return o = (e.ownerDocument || e).createElement(
            "style"
          ), xt(o), Lt(o, "style", d), lu(o, i.precedence, e), t.instance = o;
        case "stylesheet":
          d = _i(i.href);
          var v = e.querySelector(
            Cs(d)
          );
          if (v)
            return t.state.loading |= 4, t.instance = v, xt(v), v;
          o = Ng(i), (d = On.get(d)) && Rd(o, d), v = (e.ownerDocument || e).createElement("link"), xt(v);
          var T = v;
          return T._p = new Promise(function(D, U) {
            T.onload = D, T.onerror = U;
          }), Lt(v, "link", o), t.state.loading |= 4, lu(v, i.precedence, e), t.instance = v;
        case "script":
          return v = bi(i.src), (d = e.querySelector(
            ks(v)
          )) ? (t.instance = d, xt(d), d) : (o = i, (d = On.get(v)) && (o = g({}, i), jd(o, d)), e = e.ownerDocument || e, d = e.createElement("script"), xt(d), Lt(d, "link", o), e.head.appendChild(d), t.instance = d);
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
    ), d = o.length ? o[o.length - 1] : null, v = d, T = 0; T < o.length; T++) {
      var D = o[T];
      if (D.dataset.precedence === t) v = D;
      else if (v !== d) break;
    }
    v ? v.parentNode.insertBefore(e, v.nextSibling) : (t = i.nodeType === 9 ? i.head : i, t.insertBefore(e, t.firstChild));
  }
  function Rd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function jd(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var cu = null;
  function Mg(e, t, i) {
    if (cu === null) {
      var o = /* @__PURE__ */ new Map(), d = cu = /* @__PURE__ */ new Map();
      d.set(i, o);
    } else
      d = cu, o = d.get(i), o || (o = /* @__PURE__ */ new Map(), d.set(i, o));
    if (o.has(e)) return o;
    for (o.set(e, null), i = i.getElementsByTagName(e), d = 0; d < i.length; d++) {
      var v = i[d];
      if (!(v[Ii] || v[Bt] || e === "link" && v.getAttribute("rel") === "stylesheet") && v.namespaceURI !== "http://www.w3.org/2000/svg") {
        var T = v.getAttribute(t) || "";
        T = e + T;
        var D = o.get(T);
        D ? D.push(v) : o.set(T, [v]);
      }
    }
    return o;
  }
  function Rg(e, t, i) {
    e = e.ownerDocument || e, e.head.insertBefore(
      i,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function h1(e, t, i) {
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
  function jg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var As = null;
  function p1() {
  }
  function m1(e, t, i) {
    if (As === null) throw Error(a(475));
    var o = As;
    if (t.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var d = _i(i.href), v = e.querySelector(
          Cs(d)
        );
        if (v) {
          e = v._p, e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++, o = du.bind(o), e.then(o, o)), t.state.loading |= 4, t.instance = v, xt(v);
          return;
        }
        v = e.ownerDocument || e, i = Ng(i), (d = On.get(d)) && Rd(i, d), v = v.createElement("link"), xt(v);
        var T = v;
        T._p = new Promise(function(D, U) {
          T.onload = D, T.onerror = U;
        }), Lt(v, "link", i), t.instance = v;
      }
      o.stylesheets === null && (o.stylesheets = /* @__PURE__ */ new Map()), o.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++, t = du.bind(o), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function g1() {
    if (As === null) throw Error(a(475));
    var e = As;
    return e.stylesheets && e.count === 0 && Dd(e, e.stylesheets), 0 < e.count ? function(t) {
      var i = setTimeout(function() {
        if (e.stylesheets && Dd(e, e.stylesheets), e.unsuspend) {
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
      if (this.stylesheets) Dd(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var fu = null;
  function Dd(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, fu = /* @__PURE__ */ new Map(), t.forEach(v1, e), fu = null, du.call(e));
  }
  function v1(e, t) {
    if (!(t.state.loading & 4)) {
      var i = fu.get(e);
      if (i) var o = i.get(null);
      else {
        i = /* @__PURE__ */ new Map(), fu.set(e, i);
        for (var d = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), v = 0; v < d.length; v++) {
          var T = d[v];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") && (i.set(T.dataset.precedence, T), o = T);
        }
        o && i.set(null, o);
      }
      d = t.instance, T = d.getAttribute("data-precedence"), v = i.get(T) || o, v === o && i.set(null, d), i.set(T, d), this.count++, o = du.bind(this), d.addEventListener("load", o), d.addEventListener("error", o), v ? v.parentNode.insertBefore(d, v.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(d, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ts = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: K,
    _currentValue2: K,
    _threadCount: 0
  };
  function y1(e, t, i, o, d, v, T, D) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ol(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.hiddenUpdates = Ol(null), this.identifierPrefix = o, this.onUncaughtError = d, this.onCaughtError = v, this.onRecoverableError = T, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = D, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Dg(e, t, i, o, d, v, T, D, U, X, ne, se) {
    return e = new y1(
      e,
      t,
      i,
      T,
      D,
      U,
      X,
      se
    ), t = 1, v === !0 && (t |= 24), v = ln(3, null, null, t), e.current = v, v.stateNode = e, t = mc(), t.refCount++, e.pooledCache = t, t.refCount++, v.memoizedState = {
      element: o,
      isDehydrated: i,
      cache: t
    }, _c(v), e;
  }
  function Lg(e) {
    return e ? (e = Ka, e) : Ka;
  }
  function zg(e, t, i, o, d, v) {
    d = Lg(d), o.context === null ? o.context = d : o.pendingContext = d, o = xr(t), o.payload = { element: i }, v = v === void 0 ? null : v, v !== null && (o.callback = v), i = Nr(e, o, t), i !== null && (pn(i, e, t), rs(i, e, t));
  }
  function Pg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Ld(e, t) {
    Pg(e, t), (e = e.alternate) && Pg(e, t);
  }
  function Ig(e) {
    if (e.tag === 13) {
      var t = Qa(e, 67108864);
      t !== null && pn(t, e, 67108864), Ld(e, 67108864);
    }
  }
  var hu = !0;
  function _1(e, t, i, o) {
    var d = R.T;
    R.T = null;
    var v = B.p;
    try {
      B.p = 2, zd(e, t, i, o);
    } finally {
      B.p = v, R.T = d;
    }
  }
  function b1(e, t, i, o) {
    var d = R.T;
    R.T = null;
    var v = B.p;
    try {
      B.p = 8, zd(e, t, i, o);
    } finally {
      B.p = v, R.T = d;
    }
  }
  function zd(e, t, i, o) {
    if (hu) {
      var d = Pd(o);
      if (d === null)
        Ed(
          e,
          t,
          o,
          pu,
          i
        ), Ug(e, o);
      else if (w1(
        d,
        e,
        t,
        i,
        o
      ))
        o.stopPropagation();
      else if (Ug(e, o), t & 4 && -1 < S1.indexOf(e)) {
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
                    Xn(v), (Ke & 6) === 0 && (Ko = fe() + 500, bs(0));
                  }
                }
                break;
              case 13:
                D = Qa(v, 2), D !== null && pn(D, v, 2), Wo(), Ld(v, 2);
            }
          if (v = Pd(o), v === null && Ed(
            e,
            t,
            o,
            pu,
            i
          ), v === d) break;
          d = v;
        }
        d !== null && o.stopPropagation();
      } else
        Ed(
          e,
          t,
          o,
          null,
          i
        );
    }
  }
  function Pd(e) {
    return e = ql(e), Id(e);
  }
  var pu = null;
  function Id(e) {
    if (pu = null, e = Pa(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var i = t.tag;
        if (i === 13) {
          if (e = f(t), e !== null) return e;
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
  function Bg(e) {
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
        switch (be()) {
          case Ae:
            return 2;
          case de:
            return 8;
          case ye:
          case Ie:
            return 32;
          case He:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Bd = !1, qr = null, Zr = null, Gr = null, xs = /* @__PURE__ */ new Map(), Ns = /* @__PURE__ */ new Map(), Vr = [], S1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ug(e, t) {
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
        xs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ns.delete(t.pointerId);
    }
  }
  function Os(e, t, i, o, d, v) {
    return e === null || e.nativeEvent !== v ? (e = {
      blockedOn: t,
      domEventName: i,
      eventSystemFlags: o,
      nativeEvent: v,
      targetContainers: [d]
    }, t !== null && (t = Ia(t), t !== null && Ig(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, d !== null && t.indexOf(d) === -1 && t.push(d), e);
  }
  function w1(e, t, i, o, d) {
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
        return Zr = Os(
          Zr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "mouseover":
        return Gr = Os(
          Gr,
          e,
          t,
          i,
          o,
          d
        ), !0;
      case "pointerover":
        var v = d.pointerId;
        return xs.set(
          v,
          Os(
            xs.get(v) || null,
            e,
            t,
            i,
            o,
            d
          )
        ), !0;
      case "gotpointercapture":
        return v = d.pointerId, Ns.set(
          v,
          Os(
            Ns.get(v) || null,
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
  function Hg(e) {
    var t = Pa(e.target);
    if (t !== null) {
      var i = c(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = f(i), t !== null) {
            e.blockedOn = t, m_(e.priority, function() {
              if (i.tag === 13) {
                var o = hn();
                o = Ml(o);
                var d = Qa(i, o);
                d !== null && pn(d, i, o), Ld(i, o);
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
      var i = Pd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var o = new i.constructor(
          i.type,
          i
        );
        Hl = o, i.target.dispatchEvent(o), Hl = null;
      } else
        return t = Ia(i), t !== null && Ig(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function qg(e, t, i) {
    mu(e) && i.delete(t);
  }
  function E1() {
    Bd = !1, qr !== null && mu(qr) && (qr = null), Zr !== null && mu(Zr) && (Zr = null), Gr !== null && mu(Gr) && (Gr = null), xs.forEach(qg), Ns.forEach(qg);
  }
  function gu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Bd || (Bd = !0, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      E1
    )));
  }
  var vu = null;
  function Zg(e) {
    vu !== e && (vu = e, n.unstable_scheduleCallback(
      n.unstable_NormalPriority,
      function() {
        vu === e && (vu = null);
        for (var t = 0; t < e.length; t += 3) {
          var i = e[t], o = e[t + 1], d = e[t + 2];
          if (typeof o != "function") {
            if (Id(o || i) === null)
              continue;
            break;
          }
          var v = Ia(i);
          v !== null && (e.splice(t, 3), t -= 3, Ic(
            v,
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
    qr !== null && gu(qr, e), Zr !== null && gu(Zr, e), Gr !== null && gu(Gr, e), xs.forEach(t), Ns.forEach(t);
    for (var i = 0; i < Vr.length; i++) {
      var o = Vr[i];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < Vr.length && (i = Vr[0], i.blockedOn === null); )
      Hg(i), i.blockedOn === null && Vr.shift();
    if (i = (e.ownerDocument || e).$$reactFormReplay, i != null)
      for (o = 0; o < i.length; o += 3) {
        var d = i[o], v = i[o + 1], T = d[Kt] || null;
        if (typeof v == "function")
          T || Zg(i);
        else if (T) {
          var D = null;
          if (v && v.hasAttribute("formAction")) {
            if (d = v, T = v[Kt] || null)
              D = T.formAction;
            else if (Id(d) !== null) continue;
          } else D = T.action;
          typeof D == "function" ? i[o + 1] = D : (i.splice(o, 3), o -= 3), Zg(i);
        }
      }
  }
  function Ud(e) {
    this._internalRoot = e;
  }
  yu.prototype.render = Ud.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    var i = t.current, o = hn();
    zg(i, o, e, t, null, null);
  }, yu.prototype.unmount = Ud.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zg(e.current, 2, null, e, null, null), Wo(), t[za] = null;
    }
  };
  function yu(e) {
    this._internalRoot = e;
  }
  yu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = sh();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < Vr.length && t !== 0 && t < Vr[i].priority; i++) ;
      Vr.splice(i, 0, e), i === 0 && Hg(e);
    }
  };
  var Gg = r.version;
  if (Gg !== "19.1.1")
    throw Error(
      a(
        527,
        Gg,
        "19.1.1"
      )
    );
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = p(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var C1 = {
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
        jn = _u.inject(
          C1
        ), gt = _u;
      } catch {
      }
  }
  return Ls.createRoot = function(e, t) {
    if (!u(e)) throw Error(a(299));
    var i = !1, o = "", d = sm, v = om, T = um, D = null;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (d = t.onUncaughtError), t.onCaughtError !== void 0 && (v = t.onCaughtError), t.onRecoverableError !== void 0 && (T = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (D = t.unstable_transitionCallbacks)), t = Dg(
      e,
      1,
      !1,
      null,
      null,
      i,
      o,
      d,
      v,
      T,
      D,
      null
    ), e[za] = t.current, wd(e), new Ud(t);
  }, Ls.hydrateRoot = function(e, t, i) {
    if (!u(e)) throw Error(a(299));
    var o = !1, d = "", v = sm, T = om, D = um, U = null, X = null;
    return i != null && (i.unstable_strictMode === !0 && (o = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onUncaughtError !== void 0 && (v = i.onUncaughtError), i.onCaughtError !== void 0 && (T = i.onCaughtError), i.onRecoverableError !== void 0 && (D = i.onRecoverableError), i.unstable_transitionCallbacks !== void 0 && (U = i.unstable_transitionCallbacks), i.formState !== void 0 && (X = i.formState)), t = Dg(
      e,
      1,
      !0,
      t,
      i ?? null,
      o,
      d,
      v,
      T,
      D,
      U,
      X
    ), t.context = Lg(null), i = t.current, o = hn(), o = Ml(o), d = xr(o), d.callback = null, Nr(i, d, o), i = o, t.current.lanes = i, Pi(t, i), Xn(t), e[za] = t.current, wd(e), new yu(t);
  }, Ls.version = "19.1.1", Ls;
}
var iv;
function o2() {
  if (iv) return Gd.exports;
  iv = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Gd.exports = s2(), Gd.exports;
}
var u2 = o2();
const sv = /* @__PURE__ */ If(u2);
var l2 = Object.defineProperty, c2 = (n, r, s) => r in n ? l2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, ov = (n, r, s) => c2(n, typeof r != "symbol" ? r + "" : r, s);
class Q0 {
  constructor(r, s) {
    ov(this, "settingsKey"), ov(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = s;
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
    const { strategy: s = "recursive" } = r, a = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
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
      a && c.version !== a && (m.version.changed = !0, m.version.new = a, c.version = a), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (p(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(s)) {
      a && !c.version && (c.version = a, m.version.changed = !0, m.version.new = a), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
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
  return Array.isArray ? Array.isArray(n) : W0(n) === "[object Array]";
}
function d2(n) {
  if (typeof n == "string")
    return n;
  let r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function f2(n) {
  return n == null ? "" : d2(n);
}
function Qn(n) {
  return typeof n == "string";
}
function K0(n) {
  return typeof n == "number";
}
function h2(n) {
  return n === !0 || n === !1 || p2(n) && W0(n) == "[object Boolean]";
}
function J0(n) {
  return typeof n == "object";
}
function p2(n) {
  return J0(n) && n !== null;
}
function yn(n) {
  return n != null;
}
function Fd(n) {
  return !n.trim().length;
}
function W0(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const m2 = "Incorrect 'index' type", g2 = (n) => `Invalid value for key ${n}`, v2 = (n) => `Pattern length exceeds max of ${n}.`, y2 = (n) => `Missing ${n} property in key`, _2 = (n) => `Property 'weight' in key '${n}' must be a positive integer`, uv = Object.prototype.hasOwnProperty;
class b2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let s = 0;
    r.forEach((a) => {
      let u = ey(a);
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
function ey(n) {
  let r = null, s = null, a = null, u = 1, c = null;
  if (Qn(n) || Sr(n))
    a = n, r = lv(n), s = vf(n);
  else {
    if (!uv.call(n, "name"))
      throw new Error(y2("name"));
    const f = n.name;
    if (a = f, uv.call(n, "weight") && (u = n.weight, u <= 0))
      throw new Error(_2(f));
    r = lv(f), s = vf(f), c = n.getFn;
  }
  return { path: r, id: s, weight: u, src: a, getFn: c };
}
function lv(n) {
  return Sr(n) ? n : n.split(".");
}
function vf(n) {
  return Sr(n) ? n.join(".") : n;
}
function S2(n, r) {
  let s = [], a = !1;
  const u = (c, f, m) => {
    if (yn(c))
      if (!f[m])
        s.push(c);
      else {
        let p = f[m];
        const _ = c[p];
        if (!yn(_))
          return;
        if (m === f.length - 1 && (Qn(_) || K0(_) || h2(_)))
          s.push(f2(_));
        else if (Sr(_)) {
          a = !0;
          for (let g = 0, E = _.length; g < E; g += 1)
            u(_[g], f, m + 1);
        } else f.length && u(_, f, m + 1);
      }
  };
  return u(n, Qn(r) ? r.split(".") : r, 0), a ? s : s[0];
}
const w2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, E2 = {
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
}, C2 = {
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
}, k2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: S2,
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
var je = {
  ...E2,
  ...w2,
  ...C2,
  ...k2
};
const A2 = /[^ ]+/g;
function T2(n = 1, r = 3) {
  const s = /* @__PURE__ */ new Map(), a = Math.pow(10, r);
  return {
    get(u) {
      const c = u.match(A2).length;
      if (s.has(c))
        return s.get(c);
      const f = 1 / Math.pow(c, 0.5 * n), m = parseFloat(Math.round(f * a) / a);
      return s.set(c, m), m;
    },
    clear() {
      s.clear();
    }
  };
}
class Uf {
  constructor({
    getFn: r = je.getFn,
    fieldNormWeight: s = je.fieldNormWeight
  } = {}) {
    this.norm = T2(s, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
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
    if (!yn(r) || Fd(r))
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
      let f = u.getFn ? u.getFn(r) : this.getFn(r, u.path);
      if (yn(f)) {
        if (Sr(f)) {
          let m = [];
          const p = [{ nestedArrIndex: -1, value: f }];
          for (; p.length; ) {
            const { nestedArrIndex: _, value: g } = p.pop();
            if (yn(g))
              if (Qn(g) && !Fd(g)) {
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
          a.$[c] = m;
        } else if (Qn(f) && !Fd(f)) {
          let m = {
            v: f,
            n: this.norm.get(f)
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
function ty(n, r, { getFn: s = je.getFn, fieldNormWeight: a = je.fieldNormWeight } = {}) {
  const u = new Uf({ getFn: s, fieldNormWeight: a });
  return u.setKeys(n.map(ey)), u.setSources(r), u.create(), u;
}
function x2(n, { getFn: r = je.getFn, fieldNormWeight: s = je.fieldNormWeight } = {}) {
  const { keys: a, records: u } = n, c = new Uf({ getFn: r, fieldNormWeight: s });
  return c.setKeys(a), c.setIndexRecords(u), c;
}
function bu(n, {
  errors: r = 0,
  currentLocation: s = 0,
  expectedLocation: a = 0,
  distance: u = je.distance,
  ignoreLocation: c = je.ignoreLocation
} = {}) {
  const f = r / n.length;
  if (c)
    return f;
  const m = Math.abs(a - s);
  return u ? f + m / u : m ? 1 : f;
}
function N2(n = [], r = je.minMatchCharLength) {
  let s = [], a = -1, u = -1, c = 0;
  for (let f = n.length; c < f; c += 1) {
    let m = n[c];
    m && a === -1 ? a = c : !m && a !== -1 && (u = c - 1, u - a + 1 >= r && s.push([a, u]), a = -1);
  }
  return n[c - 1] && c - a >= r && s.push([a, c - 1]), s;
}
const xa = 32;
function O2(n, r, s, {
  location: a = je.location,
  distance: u = je.distance,
  threshold: c = je.threshold,
  findAllMatches: f = je.findAllMatches,
  minMatchCharLength: m = je.minMatchCharLength,
  includeMatches: p = je.includeMatches,
  ignoreLocation: _ = je.ignoreLocation
} = {}) {
  if (r.length > xa)
    throw new Error(v2(xa));
  const g = r.length, E = n.length, y = Math.max(0, Math.min(a, E));
  let b = c, h = y;
  const C = m > 1 || p, A = C ? Array(E) : [];
  let M;
  for (; (M = n.indexOf(r, h)) > -1; ) {
    let k = bu(r, {
      currentLocation: M,
      expectedLocation: y,
      distance: u,
      ignoreLocation: _
    });
    if (b = Math.min(k, b), h = M + g, C) {
      let O = 0;
      for (; O < g; )
        A[M + O] = 1, O += 1;
    }
  }
  h = -1;
  let x = [], P = 1, l = g + E;
  const S = 1 << g - 1;
  for (let k = 0; k < g; k += 1) {
    let O = 0, L = l;
    for (; O < L; )
      bu(r, {
        errors: k,
        currentLocation: y + L,
        expectedLocation: y,
        distance: u,
        ignoreLocation: _
      }) <= b ? O = L : l = L, L = Math.floor((l - O) / 2 + O);
    l = L;
    let j = Math.max(1, y - L + 1), z = f ? E : Math.min(y + L, E) + g, H = Array(z + 2);
    H[z + 1] = (1 << k) - 1;
    for (let Z = z; Z >= j; Z -= 1) {
      let Q = Z - 1, R = s[n.charAt(Q)];
      if (C && (A[Q] = +!!R), H[Z] = (H[Z + 1] << 1 | 1) & R, k && (H[Z] |= (x[Z + 1] | x[Z]) << 1 | 1 | x[Z + 1]), H[Z] & S && (P = bu(r, {
        errors: k,
        currentLocation: Q,
        expectedLocation: y,
        distance: u,
        ignoreLocation: _
      }), P <= b)) {
        if (b = P, h = Q, h <= y)
          break;
        j = Math.max(1, 2 * y - h);
      }
    }
    if (bu(r, {
      errors: k + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: u,
      ignoreLocation: _
    }) > b)
      break;
    x = H;
  }
  const w = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, P)
  };
  if (C) {
    const k = N2(A, m);
    k.length ? p && (w.indices = k) : w.isMatch = !1;
  }
  return w;
}
function M2(n) {
  let r = {};
  for (let s = 0, a = n.length; s < a; s += 1) {
    const u = n.charAt(s);
    r[u] = (r[u] || 0) | 1 << a - s - 1;
  }
  return r;
}
const hl = String.prototype.normalize ? ((n) => n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n) => n);
class ny {
  constructor(r, {
    location: s = je.location,
    threshold: a = je.threshold,
    distance: u = je.distance,
    includeMatches: c = je.includeMatches,
    findAllMatches: f = je.findAllMatches,
    minMatchCharLength: m = je.minMatchCharLength,
    isCaseSensitive: p = je.isCaseSensitive,
    ignoreDiacritics: _ = je.ignoreDiacritics,
    ignoreLocation: g = je.ignoreLocation
  } = {}) {
    if (this.options = {
      location: s,
      threshold: a,
      distance: u,
      includeMatches: c,
      findAllMatches: f,
      minMatchCharLength: m,
      isCaseSensitive: p,
      ignoreDiacritics: _,
      ignoreLocation: g
    }, r = p ? r : r.toLowerCase(), r = _ ? hl(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const E = (b, h) => {
      this.chunks.push({
        pattern: b,
        alphabet: M2(b),
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
      distance: f,
      threshold: m,
      findAllMatches: p,
      minMatchCharLength: _,
      ignoreLocation: g
    } = this.options;
    let E = [], y = 0, b = !1;
    this.chunks.forEach(({ pattern: C, alphabet: A, startIndex: M }) => {
      const { isMatch: x, score: P, indices: l } = O2(r, C, A, {
        location: c + M,
        distance: f,
        threshold: m,
        findAllMatches: p,
        minMatchCharLength: _,
        includeMatches: u,
        ignoreLocation: g
      });
      x && (b = !0), y += P, x && l && (E = [...E, ...l]);
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
    return cv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return cv(r, this.singleRegex);
  }
  search() {
  }
}
function cv(n, r) {
  const s = n.match(r);
  return s ? s[1] : null;
}
class R2 extends Wr {
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
class j2 extends Wr {
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
class D2 extends Wr {
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
class L2 extends Wr {
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
class z2 extends Wr {
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
class P2 extends Wr {
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
class ry extends Wr {
  constructor(r, {
    location: s = je.location,
    threshold: a = je.threshold,
    distance: u = je.distance,
    includeMatches: c = je.includeMatches,
    findAllMatches: f = je.findAllMatches,
    minMatchCharLength: m = je.minMatchCharLength,
    isCaseSensitive: p = je.isCaseSensitive,
    ignoreDiacritics: _ = je.ignoreDiacritics,
    ignoreLocation: g = je.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new ny(r, {
      location: s,
      threshold: a,
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
class ay extends Wr {
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
    const f = !!u.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: u
    };
  }
}
const yf = [
  R2,
  ay,
  D2,
  L2,
  P2,
  z2,
  j2,
  ry
], dv = yf.length, I2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, B2 = "|";
function U2(n, r = {}) {
  return n.split(B2).map((s) => {
    let a = s.trim().split(I2).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, f = a.length; c < f; c += 1) {
      const m = a[c];
      let p = !1, _ = -1;
      for (; !p && ++_ < dv; ) {
        const g = yf[_];
        let E = g.isMultiMatch(m);
        E && (u.push(new g(E, r)), p = !0);
      }
      if (!p)
        for (_ = -1; ++_ < dv; ) {
          const g = yf[_];
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
const H2 = /* @__PURE__ */ new Set([ry.type, ay.type]);
class q2 {
  constructor(r, {
    isCaseSensitive: s = je.isCaseSensitive,
    ignoreDiacritics: a = je.ignoreDiacritics,
    includeMatches: u = je.includeMatches,
    minMatchCharLength: c = je.minMatchCharLength,
    ignoreLocation: f = je.ignoreLocation,
    findAllMatches: m = je.findAllMatches,
    location: p = je.location,
    threshold: _ = je.threshold,
    distance: g = je.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: s,
      ignoreDiacritics: a,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: f,
      location: p,
      threshold: _,
      distance: g
    }, r = s ? r : r.toLowerCase(), r = a ? hl(r) : r, this.pattern = r, this.query = U2(this.pattern, this.options);
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
    let f = 0, m = [], p = 0;
    for (let _ = 0, g = s.length; _ < g; _ += 1) {
      const E = s[_];
      m.length = 0, f = 0;
      for (let y = 0, b = E.length; y < b; y += 1) {
        const h = E[y], { isMatch: C, indices: A, score: M } = h.search(r);
        if (C) {
          if (f += 1, p += M, a) {
            const x = h.constructor.type;
            H2.has(x) ? m = [...m, ...A] : m.push(A);
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
        return a && (y.indices = m), y;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const _f = [];
function Z2(...n) {
  _f.push(...n);
}
function bf(n, r) {
  for (let s = 0, a = _f.length; s < a; s += 1) {
    let u = _f[s];
    if (u.condition(n, r))
      return new u(n, r);
  }
  return new ny(n, r);
}
const pl = {
  AND: "$and",
  OR: "$or"
}, Sf = {
  PATH: "$path",
  PATTERN: "$val"
}, wf = (n) => !!(n[pl.AND] || n[pl.OR]), G2 = (n) => !!n[Sf.PATH], V2 = (n) => !Sr(n) && J0(n) && !wf(n), fv = (n) => ({
  [pl.AND]: Object.keys(n).map((r) => ({
    [r]: n[r]
  }))
});
function iy(n, r, { auto: s = !0 } = {}) {
  const a = (u) => {
    let c = Object.keys(u);
    const f = G2(u);
    if (!f && c.length > 1 && !wf(u))
      return a(fv(u));
    if (V2(u)) {
      const p = f ? u[Sf.PATH] : c[0], _ = f ? u[Sf.PATTERN] : u[p];
      if (!Qn(_))
        throw new Error(g2(p));
      const g = {
        keyId: vf(p),
        pattern: _
      };
      return s && (g.searcher = bf(_, r)), g;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((p) => {
      const _ = u[p];
      Sr(_) && _.forEach((g) => {
        m.children.push(a(g));
      });
    }), m;
  };
  return wf(n) || (n = fv(n)), a(n);
}
function $2(n, { ignoreFieldNorm: r = je.ignoreFieldNorm }) {
  n.forEach((s) => {
    let a = 1;
    s.matches.forEach(({ key: u, norm: c, score: f }) => {
      const m = u ? u.weight : null;
      a *= Math.pow(
        f === 0 && m ? Number.EPSILON : f,
        (m || 1) * (r ? 1 : c)
      );
    }), s.score = a;
  });
}
function Y2(n, r) {
  const s = n.matches;
  r.matches = [], yn(s) && s.forEach((a) => {
    if (!yn(a.indices) || !a.indices.length)
      return;
    const { indices: u, value: c } = a;
    let f = {
      indices: u,
      value: c
    };
    a.key && (f.key = a.key.src), a.idx > -1 && (f.refIndex = a.idx), r.matches.push(f);
  });
}
function F2(n, r) {
  r.score = n.score;
}
function X2(n, r, {
  includeMatches: s = je.includeMatches,
  includeScore: a = je.includeScore
} = {}) {
  const u = [];
  return s && u.push(Y2), a && u.push(F2), n.map((c) => {
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
  constructor(r, s = {}, a) {
    this.options = { ...je, ...s }, this.options.useExtendedSearch, this._keyStore = new b2(this.options.keys), this.setCollection(r, a);
  }
  setCollection(r, s) {
    if (this._docs = r, s && !(s instanceof Uf))
      throw new Error(m2);
    this._myIndex = s || ty(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    yn(r) && (this._docs.push(r), this._myIndex.add(r));
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
      sortFn: f,
      ignoreFieldNorm: m
    } = this.options;
    let p = Qn(r) ? Qn(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return $2(p, { ignoreFieldNorm: m }), c && p.sort(f), K0(s) && s > -1 && (p = p.slice(0, s)), X2(p, this._docs, {
      includeMatches: a,
      includeScore: u
    });
  }
  _searchStringList(r) {
    const s = bf(r, this.options), { records: a } = this._myIndex, u = [];
    return a.forEach(({ v: c, i: f, n: m }) => {
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
    const s = iy(r, this.options), a = (m, p, _) => {
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
        const b = m.children[E], h = a(b, p, _);
        if (h.length)
          g.push(...h);
        else if (m.operator === pl.AND)
          return [];
      }
      return g;
    }, u = this._myIndex.records, c = {}, f = [];
    return u.forEach(({ $: m, i: p }) => {
      if (yn(m)) {
        let _ = a(s, m, p);
        _.length && (c[p] || (c[p] = { idx: p, item: m, matches: [] }, f.push(c[p])), _.forEach(({ matches: g }) => {
          c[p].matches.push(...g);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const s = bf(r, this.options), { keys: a, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: f, i: m }) => {
      if (!yn(f))
        return;
      let p = [];
      a.forEach((_, g) => {
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
  _findMatches({ key: r, value: s, searcher: a }) {
    if (!yn(s))
      return [];
    let u = [];
    if (Sr(s))
      s.forEach(({ v: c, i: f, n: m }) => {
        if (!yn(c))
          return;
        const { isMatch: p, score: _, indices: g } = a.searchIn(c);
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
      const { v: c, n: f } = s, { isMatch: m, score: p, indices: _ } = a.searchIn(c);
      m && u.push({ score: p, key: r, value: c, norm: f, indices: _ });
    }
    return u;
  }
}
zi.version = "7.1.0";
zi.createIndex = ty;
zi.parseIndex = x2;
zi.config = je;
zi.parseQuery = iy;
Z2(q2);
var Q2 = Object.defineProperty, K2 = (n, r, s) => r in n ? Q2(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, J2 = (n, r, s) => K2(n, r + "", s);
let W2 = class {
  constructor() {
    J2(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
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
    const u = SillyTavern.getContext(), c = u.uuidv4(), f = ((a = r?.custom) == null ? void 0 : a.stream) ?? !1;
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
    for (const [s, a] of this.requestMap)
      r.set(s, a.abortController);
    return r;
  }
};
async function e3(n, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[n].callback(...r);
}
async function ke(n, r, { escapeHtml: s = !0 } = {}) {
  await e3("echo", { severity: n, escapeHtml: (!!s).toString() }, r);
}
function Xd(n) {
  return N1(n);
}
function hv(n, r) {
  return T1(n, r);
}
function Su(n, r, s) {
  return x1(n, r, s);
}
function t3(n, r, s) {
  return B1(n, r, s);
}
function n3(n, r) {
  return U1(n, r);
}
function r3(n, {
  customStoryString: r,
  customInstructSettings: s
} = {}) {
  return A1(n, { customStoryString: r, customInstructSettings: s });
}
function Ea(n) {
  return $1(n);
}
function a3() {
  return {
    prompt: Rs[js.prompt],
    interval: Rs[js.interval],
    position: Rs[js.position],
    depth: Rs[js.depth],
    role: Rs[js.role]
  };
}
function i3(n, r) {
  return F1(n, r);
}
function s3({
  name2: n,
  charDescription: r,
  charPersonality: s,
  Scenario: a,
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
}, M) {
  return Y1(
    {
      name2: n,
      charDescription: r,
      charPersonality: s,
      Scenario: a,
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
    M
  );
}
function o3(n) {
  return q1(n);
}
function u3(n) {
  return Z1(n);
}
function l3(n, r, {
  characterOverride: s,
  isMarkdown: a,
  isPrompt: u,
  isEdit: c,
  depth: f
}) {
  return Q1(n, r, { characterOverride: s, isMarkdown: a, isPrompt: u, isEdit: c, depth: f });
}
function c3(n, r, { characterOverride: s = null } = {}) {
  return X1(n, r, { characterOverride: s });
}
async function d3(n, r) {
  return await H1(n, r);
}
function pv(n, {
  wiFormat: r
} = {}) {
  return G1(n, { wiFormat: r });
}
function zs(n) {
  return V1(n);
}
function sy(n, {
  manualAvatarKey: r
} = {}) {
  return K1(n, { manualAvatarKey: r });
}
function Hf(n, r) {
  return R1(n, r);
}
class f3 {
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
var h3 = Object.defineProperty, p3 = (n, r, s) => r in n ? h3(n, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : n[r] = s, wu = (n, r, s) => p3(n, typeof r != "symbol" ? r + "" : r, s);
class m3 {
  constructor(r) {
    wu(this, "messages", []), wu(this, "tokenizer"), wu(this, "maxContext"), wu(this, "currentTokenCount", 0), this.tokenizer = new f3(), this.maxContext = r;
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
    const s = r.filter((m) => m.content), a = s.map((m) => this.getTokenCount(m)), u = a.reduce((m, p) => m + p, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...s), this.currentTokenCount += u, !0;
    let c = 0;
    const f = [];
    for (let m = s.length - 1; m >= 0; m--) {
      const p = s[m], _ = a[m];
      if (this.currentTokenCount + c + _ <= this.maxContext)
        f.unshift(p), c += _;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += c), f.length === s.length;
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
async function oy(n, {
  targetCharacterId: r,
  presetName: s,
  instructName: a,
  contextName: u,
  syspromptName: c,
  maxContext: f,
  includeNames: m,
  ignoreCharacterFields: p,
  ignoreAuthorNote: _,
  ignoreWorldInfo: g,
  messageIndexesBetween: E
} = {}) {
  var y, b, h, C, A, M, x, P, l, S, w, k, O, L;
  if (!["textgenerationwebui", "openai"].includes(n))
    throw new Error("Unsupported API");
  const j = SillyTavern.getContext();
  let { description: z, personality: H, persona: Y, scenario: Z, mesExamples: Q, system: R, jailbreak: B } = p ? {
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
  const K = n === "textgenerationwebui" ? (y = j.getPresetManager("instruct")) == null ? void 0 : y.getCompletionPresetByName(a) : void 0, te = !!(K != null && K.enabled);
  let I = hv(Q, te);
  function $() {
    var de, ye;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !s)
      return Xd();
    if (typeof f == "number")
      return f;
    let Ie;
    if (n === "textgenerationwebui") {
      const He = (de = j.getPresetManager("textgenerationwebui")) == null ? void 0 : de.getCompletionPresetByName(s);
      Ie = He?.max_length;
    } else {
      const He = (ye = j.getPresetManager("openai")) == null ? void 0 : ye.getCompletionPresetByName(s);
      Ie = He?.openai_max_context;
    }
    return typeof Ie == "number" ? Ie : Xd();
  }
  let oe = [];
  const V = $();
  if (V <= 0)
    return { result: [], warnings: oe };
  const ae = new m3(V), _e = j.ToolManager.isToolCallingSupported(), ce = E?.start ?? 0, Ee = E != null && E.end ? E.end + 1 : void 0;
  let me = ce === -1 && Ee === 0 ? [] : j.chat.slice(ce, Ee).filter((de) => {
    var ye;
    return !de.is_system || _e && Array.isArray((ye = de.extra) == null ? void 0 : ye.tool_invocations);
  });
  me = await Promise.all(
    me.map(async (de, ye) => {
      var Ie, He;
      let rt = de.mes, qn = de.is_user ? Yg.USER_INPUT : Yg.AI_OUTPUT, jn = { isPrompt: !0, depth: me.length - ye - 1 }, gt = l3(rt, qn, jn);
      return gt = await d3(de, gt), (Ie = de?.extra) != null && Ie.append_title && (He = de?.extra) != null && He.title && (gt = `${gt}

${de.extra.title}`), {
        ...de,
        mes: gt,
        index: ye
      };
    })
  );
  const ee = me.map((de) => j1 ? `${de.name}: ${de.mes}` : de.mes).reverse(), { worldInfoString: le, worldInfoBefore: ge, worldInfoAfter: pe, worldInfoExamples: ve, worldInfoDepth: we, anBefore: Ue, anAfter: Ne } = g ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await j.getWorldInfoPrompt(ee, V, !1);
  for (const de of ve) {
    const ye = de.content;
    if (ye.length === 0)
      continue;
    const Ie = Su(ye, Sa, Yr), He = hv(Ie, te);
    de.position === D1.before ? I.unshift(...He) : I.push(...He);
  }
  function fe() {
    const de = [];
    for (let ye = me.length - 1; ye >= 0; ye--) {
      const Ie = me[ye], He = Ie.name === "System" && !Ie.is_user ? "system" : Ie.is_user ? "user" : "assistant";
      de.unshift({
        role: He,
        content: m && He != "system" ? `${Ie.name}: ${Ie.mes}` : Ie.mes,
        source: Ie
      });
    }
    ae.addMany(de);
  }
  if (n === "textgenerationwebui") {
    const de = [...I];
    I && (I = t3(I, Sa, Yr));
    const ye = (b = j.getPresetManager("sysprompt")) == null ? void 0 : b.getCompletionPresetByName(c);
    ye && (R = j.powerUserSettings.prefer_character_prompt && R ? R : Su(ye.content, Sa, Yr), R = te ? n3(
      j.substituteParams(R, Sa, Yr, ye.content),
      K
    ) : R);
    const Ie = {
      description: z,
      personality: H,
      persona: j.powerUserSettings.persona_description_position == Vg.IN_PROMPT ? Y : "",
      scenario: Z,
      system: R,
      char: Yr,
      user: Sa,
      wiBefore: ge,
      wiAfter: pe,
      loreBefore: ge,
      loreAfter: pe,
      mesExamples: I.join(""),
      mesExamplesRaw: de.join("")
    }, He = (h = j.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let rt = r3(Ie, {
      customInstructSettings: K,
      customStoryString: He?.story_string
    });
    rt && ae.add({ role: "system", content: rt, ignoreInstruct: !0 }), fe();
  } else {
    let de = function(Vt) {
      const Qt = bn.find((La) => La.identifier === Vt);
      if (Qt)
        return Qt;
      const uo = rt.prompts.find((La) => La.identifier === Vt);
      if (uo)
        return uo;
    }, ye = o3(me), Ie = u3(I);
    async function He() {
      let [Vt, Qt] = await s3(
        {
          name2: Yr,
          charDescription: z,
          charPersonality: H,
          Scenario: Z,
          worldInfoBefore: ge,
          worldInfoAfter: pe,
          extensionPrompts: j.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: R,
          jailbreakPromptOverride: B,
          personaDescription: Y,
          messages: ye,
          messageExamples: Ie
        },
        !1
      );
      ae.addMany(Vt);
    }
    if (!s)
      return oe.push("No preset name provided. Using default preset."), await He(), { result: ae.getMessages(), warnings: oe };
    const rt = (C = j.getPresetManager("openai")) == null ? void 0 : C.getCompletionPresetByName(s);
    if (!rt)
      return console.warn(`Preset not found: ${s}. Using current preset.`), oe.push(`Preset not found: ${s}. Using current preset.`), He(), { result: ae.getMessages(), warnings: oe };
    let qn = (A = rt.prompt_order) == null ? void 0 : A.find((Vt) => Vt.character_id === sn);
    if (!qn && rt.prompt_order && rt.prompt_order.length > 0 && (qn = rt.prompt_order[0]), !qn)
      return console.warn(`No prompt order found for preset: ${s}. Using current preset.`), oe.push(`No prompt order found for preset: ${s}. Using current preset.`), He(), { result: ae.getMessages(), warnings: oe };
    const jn = Z && rt.scenario_format ? j.substituteParams(rt.scenario_format) : "", gt = H && rt.personality_format ? j.substituteParams(rt.personality_format) : "", Zn = j.substituteParams(rt.group_nudge_prompt), Gt = rt.impersonation_prompt ? j.substituteParams(rt.impersonation_prompt) : "", bn = [];
    g || bn.push(
      {
        role: "system",
        content: pv(ge, { wiFormat: rt.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: pv(pe, { wiFormat: rt.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), p || bn.push(
      { role: "system", content: z, identifier: "charDescription" },
      { role: "system", content: gt, identifier: "charPersonality" },
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
    }), !p && j.powerUserSettings.persona_description && j.powerUserSettings.persona_description_position === Vg.IN_PROMPT && bn.push({
      role: "system",
      content: j.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), qn.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Qt = de(Vt.identifier);
      if (Qt && Qt.content) {
        ae.add({
          role: Qt.role ?? "system",
          content: j.substituteParams(Qt.content)
        });
        return;
      }
      Vt.identifier === "chatHistory" && fe();
    });
  }
  const be = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const de in j.extensionPrompts)
    if (Object.hasOwn(j.extensionPrompts, de)) {
      const ye = j.extensionPrompts[de];
      if (be.includes(de) || !j.extensionPrompts[de].value || ![wa.BEFORE_PROMPT, wa.IN_PROMPT].includes(ye.position) || typeof ye.filter == "function" && !await ye.filter()) continue;
      const Ie = {
        role: Ea(ye.role) ?? "system",
        content: ye.value
      };
      if (ye.position === wa.BEFORE_PROMPT)
        ae.insert(ye.depth, Ie);
      else if (ye.position === wa.IN_PROMPT) {
        const He = ae.getMessages();
        ae.insert(He.length - ye.depth, Ie);
      }
    }
  for (const de of we) {
    const ye = ae.getMessages();
    ae.insert(ye.length - de.depth, {
      role: Ea(de.role),
      content: de.entries.join(`
`)
    });
  }
  if (!p) {
    const de = i3(Xt, Number(sn));
    if (Xt && Array.isArray(de) && de.length > 0)
      de.filter((ye) => ye.text).forEach((ye, Ie) => {
        const He = ae.getMessages();
        ae.insert(He.length - ye.depth, { role: ye.role, content: ye.text });
      });
    else {
      const ye = Su(
        (S = (l = (P = (x = (M = j.characters[sn]) == null ? void 0 : M.data) == null ? void 0 : x.extensions) == null ? void 0 : P.depth_prompt) == null ? void 0 : l.prompt) == null ? void 0 : S.trim(),
        Sa,
        Yr
      ) || "";
      if (ye) {
        const Ie = M1, He = ((L = (O = (k = (w = j.characters[sn]) == null ? void 0 : w.data) == null ? void 0 : k.extensions) == null ? void 0 : O.depth_prompt) == null ? void 0 : L.role) ?? O1, rt = ae.getMessages();
        ae.insert(rt.length - Ie, {
          role: Ea(He),
          content: ye
        });
      }
    }
  }
  let Ae = -1;
  if (!_) {
    const de = a3();
    if (de.prompt) {
      de.prompt = Su(de.prompt, Sa, Yr);
      const ye = { role: Ea(de.role), content: de.prompt };
      switch (de.position) {
        case wa.IN_PROMPT:
          ae.insert(1, ye), Ae = 1;
          break;
        case wa.IN_CHAT:
          Ae = ae.getMessages().length - de.depth, ae.insert(Ae, ye);
          break;
        case wa.BEFORE_PROMPT:
          ae.addFront(ye), Ae = 0;
          break;
      }
    }
  }
  return Ae >= 0 && (Ue.length > 0 && (ae.insert(Ae, { role: "system", content: Ue.join(`
`) }), Ae++), Ne.length > 0 && ae.insert(Ae + 1, { role: "system", content: Ne.join(`
`) })), { result: ae.getMessages(), warnings: oe };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function mv(n, r) {
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
    r % 2 ? mv(Object(s), !0).forEach(function(a) {
      g3(n, a, s[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : mv(Object(s)).forEach(function(a) {
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
function g3(n, r, s) {
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
function v3(n, r) {
  if (n == null) return {};
  var s = {}, a = Object.keys(n), u, c;
  for (c = 0; c < a.length; c++)
    u = a[c], !(r.indexOf(u) >= 0) && (s[u] = n[u]);
  return s;
}
function y3(n, r) {
  if (n == null) return {};
  var s = v3(n, r), a, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(n);
    for (u = 0; u < c.length; u++)
      a = c[u], !(r.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(n, a) && (s[a] = n[a]);
  }
  return s;
}
var _3 = "1.15.6";
function _r(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Er = _r(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ro = _r(/Edge/i), gv = _r(/firefox/i), Qs = _r(/safari/i) && !_r(/chrome/i) && !_r(/android/i), qf = _r(/iP(ad|od|hone)/i), uy = _r(/chrome/i) && _r(/android/i), ly = {
  capture: !1,
  passive: !1
};
function Ye(n, r, s) {
  n.addEventListener(r, s, !Er && ly);
}
function $e(n, r, s) {
  n.removeEventListener(r, s, !Er && ly);
}
function ml(n, r) {
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
function cy(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Un(n, r, s, a) {
  if (n) {
    s = s || document;
    do {
      if (r != null && (r[0] === ">" ? n.parentNode === s && ml(n, r) : ml(n, r)) || a && n === s)
        return n;
      if (n === s) break;
    } while (n = cy(n));
  }
  return null;
}
var vv = /\s+/g;
function gn(n, r, s) {
  if (n && r)
    if (n.classList)
      n.classList[s ? "add" : "remove"](r);
    else {
      var a = (" " + n.className + " ").replace(vv, " ").replace(" " + r + " ", " ");
      n.className = (a + (s ? " " + r : "")).replace(vv, " ");
    }
}
function Me(n, r, s) {
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
      var a = Me(n, "transform");
      a && a !== "none" && (s = a + " " + s);
    } while (!r && (n = n.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(s);
}
function dy(n, r, s) {
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
function Et(n, r, s, a, u) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var c, f, m, p, _, g, E;
    if (n !== window && n.parentNode && n !== Kn() ? (c = n.getBoundingClientRect(), f = c.top, m = c.left, p = c.bottom, _ = c.right, g = c.height, E = c.width) : (f = 0, m = 0, p = window.innerHeight, _ = window.innerWidth, g = window.innerHeight, E = window.innerWidth), (r || s) && n !== window && (u = u || n.parentNode, !Er))
      do
        if (u && u.getBoundingClientRect && (Me(u, "transform") !== "none" || s && Me(u, "position") !== "static")) {
          var y = u.getBoundingClientRect();
          f -= y.top + parseInt(Me(u, "border-top-width")), m -= y.left + parseInt(Me(u, "border-left-width")), p = f + c.height, _ = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (a && n !== window) {
      var b = ji(u || n), h = b && b.a, C = b && b.d;
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
function yv(n, r, s) {
  for (var a = Jr(n, !0), u = Et(n)[r]; a; ) {
    var c = Et(a)[s], f = void 0;
    if (f = u >= c, !f) return a;
    if (a === Kn()) break;
    a = Jr(a, !1);
  }
  return !1;
}
function Li(n, r, s, a) {
  for (var u = 0, c = 0, f = n.children; c < f.length; ) {
    if (f[c].style.display !== "none" && f[c] !== Re.ghost && (a || f[c] !== Re.dragged) && Un(f[c], s.draggable, n, !1)) {
      if (u === r)
        return f[c];
      u++;
    }
    c++;
  }
  return null;
}
function Zf(n, r) {
  for (var s = n.lastElementChild; s && (s === Re.ghost || Me(s, "display") === "none" || r && !ml(s, r)); )
    s = s.previousElementSibling;
  return s || null;
}
function Mn(n, r) {
  var s = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== Re.clone && (!r || ml(n, r)) && s++;
  return s;
}
function _v(n) {
  var r = 0, s = 0, a = Kn();
  if (n)
    do {
      var u = ji(n), c = u.a, f = u.d;
      r += n.scrollLeft * c, s += n.scrollTop * f;
    } while (n !== a && (n = n.parentNode));
  return [r, s];
}
function b3(n, r) {
  for (var s in n)
    if (n.hasOwnProperty(s)) {
      for (var a in r)
        if (r.hasOwnProperty(a) && r[a] === n[s][a]) return Number(s);
    }
  return -1;
}
function Jr(n, r) {
  if (!n || !n.getBoundingClientRect) return Kn();
  var s = n, a = !1;
  do
    if (s.clientWidth < s.scrollWidth || s.clientHeight < s.scrollHeight) {
      var u = Me(s);
      if (s.clientWidth < s.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || s.clientHeight < s.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!s.getBoundingClientRect || s === document.body) return Kn();
        if (a || r) return s;
        a = !0;
      }
    }
  while (s = s.parentNode);
  return Kn();
}
function S3(n, r) {
  if (n && r)
    for (var s in r)
      r.hasOwnProperty(s) && (n[s] = r[s]);
  return n;
}
function Qd(n, r) {
  return Math.round(n.top) === Math.round(r.top) && Math.round(n.left) === Math.round(r.left) && Math.round(n.height) === Math.round(r.height) && Math.round(n.width) === Math.round(r.width);
}
var Ks;
function fy(n, r) {
  return function() {
    if (!Ks) {
      var s = arguments, a = this;
      s.length === 1 ? n.call(a, s[0]) : n.apply(a, s), Ks = setTimeout(function() {
        Ks = void 0;
      }, r);
    }
  };
}
function w3() {
  clearTimeout(Ks), Ks = void 0;
}
function hy(n, r, s) {
  n.scrollLeft += r, n.scrollTop += s;
}
function py(n) {
  var r = window.Polymer, s = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(n).cloneNode(!0) : s ? s(n).clone(!0)[0] : n.cloneNode(!0);
}
function my(n, r, s) {
  var a = {};
  return Array.from(n.children).forEach(function(u) {
    var c, f, m, p;
    if (!(!Un(u, r.draggable, n, !1) || u.animated || u === s)) {
      var _ = Et(u);
      a.left = Math.min((c = a.left) !== null && c !== void 0 ? c : 1 / 0, _.left), a.top = Math.min((f = a.top) !== null && f !== void 0 ? f : 1 / 0, _.top), a.right = Math.max((m = a.right) !== null && m !== void 0 ? m : -1 / 0, _.right), a.bottom = Math.max((p = a.bottom) !== null && p !== void 0 ? p : -1 / 0, _.bottom);
    }
  }), a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
var an = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function E3() {
  var n = [], r;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var a = [].slice.call(this.el.children);
        a.forEach(function(u) {
          if (!(Me(u, "display") === "none" || u === Re.ghost)) {
            n.push({
              target: u,
              rect: Et(u)
            });
            var c = Wn({}, n[n.length - 1].rect);
            if (u.thisAnimationDuration) {
              var f = ji(u, !0);
              f && (c.top -= f.f, c.left -= f.e);
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
      n.splice(b3(n, {
        target: a
      }), 1);
    },
    animateAll: function(a) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof a == "function" && a();
        return;
      }
      var c = !1, f = 0;
      n.forEach(function(m) {
        var p = 0, _ = m.target, g = _.fromRect, E = Et(_), y = _.prevFromRect, b = _.prevToRect, h = m.rect, C = ji(_, !0);
        C && (E.top -= C.f, E.left -= C.e), _.toRect = E, _.thisAnimationDuration && Qd(y, E) && !Qd(g, E) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - E.top) / (h.left - E.left) === (g.top - E.top) / (g.left - E.left) && (p = k3(h, y, b, u.options)), Qd(E, g) || (_.prevFromRect = g, _.prevToRect = E, p || (p = u.options.animation), u.animate(_, h, E, p)), p && (c = !0, f = Math.max(f, p), clearTimeout(_.animationResetTimer), _.animationResetTimer = setTimeout(function() {
          _.animationTime = 0, _.prevFromRect = null, _.fromRect = null, _.prevToRect = null, _.thisAnimationDuration = null;
        }, p), _.thisAnimationDuration = p);
      }), clearTimeout(r), c ? r = setTimeout(function() {
        typeof a == "function" && a();
      }, f) : typeof a == "function" && a(), n = [];
    },
    animate: function(a, u, c, f) {
      if (f) {
        Me(a, "transition", ""), Me(a, "transform", "");
        var m = ji(this.el), p = m && m.a, _ = m && m.d, g = (u.left - c.left) / (p || 1), E = (u.top - c.top) / (_ || 1);
        a.animatingX = !!g, a.animatingY = !!E, Me(a, "transform", "translate3d(" + g + "px," + E + "px,0)"), this.forRepaintDummy = C3(a), Me(a, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Me(a, "transform", "translate3d(0,0,0)"), typeof a.animated == "number" && clearTimeout(a.animated), a.animated = setTimeout(function() {
          Me(a, "transition", ""), Me(a, "transform", ""), a.animated = !1, a.animatingX = !1, a.animatingY = !1;
        }, f);
      }
    }
  };
}
function C3(n) {
  return n.offsetWidth;
}
function k3(n, r, s, a) {
  return Math.sqrt(Math.pow(r.top - n.top, 2) + Math.pow(r.left - n.left, 2)) / Math.sqrt(Math.pow(r.top - s.top, 2) + Math.pow(r.left - s.left, 2)) * a.animation;
}
var wi = [], Kd = {
  initializeByDefault: !0
}, ao = {
  mount: function(r) {
    for (var s in Kd)
      Kd.hasOwnProperty(s) && !(s in r) && (r[s] = Kd[s]);
    wi.forEach(function(a) {
      if (a.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, s, a) {
    var u = this;
    this.eventCanceled = !1, a.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = r + "Global";
    wi.forEach(function(f) {
      s[f.pluginName] && (s[f.pluginName][c] && s[f.pluginName][c](Wn({
        sortable: s
      }, a)), s.options[f.pluginName] && s[f.pluginName][r] && s[f.pluginName][r](Wn({
        sortable: s
      }, a)));
    });
  },
  initializePlugins: function(r, s, a, u) {
    wi.forEach(function(m) {
      var p = m.pluginName;
      if (!(!r.options[p] && !m.initializeByDefault)) {
        var _ = new m(r, s, r.options);
        _.sortable = r, _.options = r.options, r[p] = _, wr(a, _.defaults);
      }
    });
    for (var c in r.options)
      if (r.options.hasOwnProperty(c)) {
        var f = this.modifyOption(r, c, r.options[c]);
        typeof f < "u" && (r.options[c] = f);
      }
  },
  getEventProperties: function(r, s) {
    var a = {};
    return wi.forEach(function(u) {
      typeof u.eventProperties == "function" && wr(a, u.eventProperties.call(s[u.pluginName], r));
    }), a;
  },
  modifyOption: function(r, s, a) {
    var u;
    return wi.forEach(function(c) {
      r[c.pluginName] && c.optionListeners && typeof c.optionListeners[s] == "function" && (u = c.optionListeners[s].call(r[c.pluginName], a));
    }), u;
  }
};
function A3(n) {
  var r = n.sortable, s = n.rootEl, a = n.name, u = n.targetEl, c = n.cloneEl, f = n.toEl, m = n.fromEl, p = n.oldIndex, _ = n.newIndex, g = n.oldDraggableIndex, E = n.newDraggableIndex, y = n.originalEvent, b = n.putSortable, h = n.extraEventProperties;
  if (r = r || s && s[an], !!r) {
    var C, A = r.options, M = "on" + a.charAt(0).toUpperCase() + a.substr(1);
    window.CustomEvent && !Er && !ro ? C = new CustomEvent(a, {
      bubbles: !0,
      cancelable: !0
    }) : (C = document.createEvent("Event"), C.initEvent(a, !0, !0)), C.to = f || s, C.from = m || s, C.item = u || s, C.clone = c, C.oldIndex = p, C.newIndex = _, C.oldDraggableIndex = g, C.newDraggableIndex = E, C.originalEvent = y, C.pullMode = b ? b.lastPutMode : void 0;
    var x = Wn(Wn({}, h), ao.getEventProperties(a, r));
    for (var P in x)
      C[P] = x[P];
    s && s.dispatchEvent(C), A[M] && A[M].call(r, C);
  }
}
var T3 = ["evt"], nn = function(r, s) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = a.evt, c = y3(a, T3);
  ao.pluginEvent.bind(Re)(r, s, Wn({
    dragEl: he,
    parentEl: mt,
    ghostEl: ze,
    rootEl: ot,
    nextEl: Aa,
    lastDownEl: sl,
    cloneEl: dt,
    cloneHidden: Kr,
    dragStarted: Vs,
    putSortable: zt,
    activeSortable: Re.active,
    originalEvent: u,
    oldIndex: Ni,
    oldDraggableIndex: Js,
    newIndex: vn,
    newDraggableIndex: Qr,
    hideGhostForTarget: _y,
    unhideGhostForTarget: by,
    cloneNowHidden: function() {
      Kr = !0;
    },
    cloneNowShown: function() {
      Kr = !1;
    },
    dispatchSortableEvent: function(m) {
      Yt({
        sortable: s,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function Yt(n) {
  A3(Wn({
    putSortable: zt,
    cloneEl: dt,
    targetEl: he,
    rootEl: ot,
    oldIndex: Ni,
    oldDraggableIndex: Js,
    newIndex: vn,
    newDraggableIndex: Qr
  }, n));
}
var he, mt, ze, ot, Aa, sl, dt, Kr, Ni, vn, Js, Qr, Eu, zt, xi = !1, gl = !1, vl = [], Ca, Pn, Jd, Wd, bv, Sv, Vs, Ei, Ws, eo = !1, Cu = !1, ol, qt, ef = [], Ef = !1, yl = [], kl = typeof document < "u", ku = qf, wv = ro || Er ? "cssFloat" : "float", x3 = kl && !uy && !qf && "draggable" in document.createElement("div"), gy = (function() {
  if (kl) {
    if (Er)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
})(), vy = function(r, s) {
  var a = Me(r), u = parseInt(a.width) - parseInt(a.paddingLeft) - parseInt(a.paddingRight) - parseInt(a.borderLeftWidth) - parseInt(a.borderRightWidth), c = Li(r, 0, s), f = Li(r, 1, s), m = c && Me(c), p = f && Me(f), _ = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Et(c).width, g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + Et(f).width;
  if (a.display === "flex")
    return a.flexDirection === "column" || a.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (a.display === "grid")
    return a.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var E = m.float === "left" ? "left" : "right";
    return f && (p.clear === "both" || p.clear === E) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || _ >= u && a[wv] === "none" || f && a[wv] === "none" && _ + g > u) ? "vertical" : "horizontal";
}, N3 = function(r, s, a) {
  var u = a ? r.left : r.top, c = a ? r.right : r.bottom, f = a ? r.width : r.height, m = a ? s.left : s.top, p = a ? s.right : s.bottom, _ = a ? s.width : s.height;
  return u === m || c === p || u + f / 2 === m + _ / 2;
}, O3 = function(r, s) {
  var a;
  return vl.some(function(u) {
    var c = u[an].options.emptyInsertThreshold;
    if (!(!c || Zf(u))) {
      var f = Et(u), m = r >= f.left - c && r <= f.right + c, p = s >= f.top - c && s <= f.bottom + c;
      if (m && p)
        return a = u;
    }
  }), a;
}, yy = function(r) {
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
  var a = {}, u = r.group;
  (!u || il(u) != "object") && (u = {
    name: u
  }), a.name = u.name, a.checkPull = s(u.pull, !0), a.checkPut = s(u.put), a.revertClone = u.revertClone, r.group = a;
}, _y = function() {
  !gy && ze && Me(ze, "display", "none");
}, by = function() {
  !gy && ze && Me(ze, "display", "");
};
kl && !uy && document.addEventListener("click", function(n) {
  if (gl)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), gl = !1, !1;
}, !0);
var ka = function(r) {
  if (he) {
    r = r.touches ? r.touches[0] : r;
    var s = O3(r.clientX, r.clientY);
    if (s) {
      var a = {};
      for (var u in r)
        r.hasOwnProperty(u) && (a[u] = r[u]);
      a.target = a.rootEl = s, a.preventDefault = void 0, a.stopPropagation = void 0, s[an]._onDragOver(a);
    }
  }
}, M3 = function(r) {
  he && he.parentNode[an]._isOutsideThisEl(r.target);
};
function Re(n, r) {
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
      return vy(n, this.options);
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
    supportPointer: Re.supportPointer !== !1 && "PointerEvent" in window && (!Qs || qf),
    emptyInsertThreshold: 5
  };
  ao.initializePlugins(this, n, s);
  for (var a in s)
    !(a in r) && (r[a] = s[a]);
  yy(r);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : x3, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ye(n, "pointerdown", this._onTapStart) : (Ye(n, "mousedown", this._onTapStart), Ye(n, "touchstart", this._onTapStart)), this.nativeDraggable && (Ye(n, "dragover", this), Ye(n, "dragenter", this)), vl.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, E3());
}
Re.prototype = /** @lends Sortable.prototype */
{
  constructor: Re,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ei = null);
  },
  _getDirection: function(r, s) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, s, he) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var s = this, a = this.el, u = this.options, c = u.preventOnFilter, f = r.type, m = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, p = (m || r).target, _ = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || p, g = u.filter;
      if (B3(a), !he && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || u.disabled) && !_.isContentEditable && !(!this.nativeDraggable && Qs && p && p.tagName.toUpperCase() === "SELECT") && (p = Un(p, u.draggable, a, !1), !(p && p.animated) && sl !== p)) {
        if (Ni = Mn(p), Js = Mn(p, u.draggable), typeof g == "function") {
          if (g.call(this, r, p, this)) {
            Yt({
              sortable: s,
              rootEl: _,
              name: "filter",
              targetEl: p,
              toEl: a,
              fromEl: a
            }), nn("filter", s, {
              evt: r
            }), c && r.preventDefault();
            return;
          }
        } else if (g && (g = g.split(",").some(function(E) {
          if (E = Un(_, E.trim(), a, !1), E)
            return Yt({
              sortable: s,
              rootEl: E,
              name: "filter",
              targetEl: p,
              fromEl: a,
              toEl: a
            }), nn("filter", s, {
              evt: r
            }), !0;
        }), g)) {
          c && r.preventDefault();
          return;
        }
        u.handle && !Un(_, u.handle, a, !1) || this._prepareDragStart(r, m, p);
      }
    }
  },
  _prepareDragStart: function(r, s, a) {
    var u = this, c = u.el, f = u.options, m = c.ownerDocument, p;
    if (a && !he && a.parentNode === c) {
      var _ = Et(a);
      if (ot = c, he = a, mt = he.parentNode, Aa = he.nextSibling, sl = a, Eu = f.group, Re.dragged = he, Ca = {
        target: he,
        clientX: (s || r).clientX,
        clientY: (s || r).clientY
      }, bv = Ca.clientX - _.left, Sv = Ca.clientY - _.top, this._lastX = (s || r).clientX, this._lastY = (s || r).clientY, he.style["will-change"] = "all", p = function() {
        if (nn("delayEnded", u, {
          evt: r
        }), Re.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !gv && u.nativeDraggable && (he.draggable = !0), u._triggerDragStart(r, s), Yt({
          sortable: u,
          name: "choose",
          originalEvent: r
        }), gn(he, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(g) {
        dy(he, g.trim(), tf);
      }), Ye(m, "dragover", ka), Ye(m, "mousemove", ka), Ye(m, "touchmove", ka), f.supportPointer ? (Ye(m, "pointerup", u._onDrop), !this.nativeDraggable && Ye(m, "pointercancel", u._onDrop)) : (Ye(m, "mouseup", u._onDrop), Ye(m, "touchend", u._onDrop), Ye(m, "touchcancel", u._onDrop)), gv && this.nativeDraggable && (this.options.touchStartThreshold = 4, he.draggable = !0), nn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || s) && (!this.nativeDraggable || !(ro || Er))) {
        if (Re.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ye(m, "pointerup", u._disableDelayedDrag), Ye(m, "pointercancel", u._disableDelayedDrag)) : (Ye(m, "mouseup", u._disableDelayedDrag), Ye(m, "touchend", u._disableDelayedDrag), Ye(m, "touchcancel", u._disableDelayedDrag)), Ye(m, "mousemove", u._delayedDragTouchMoveHandler), Ye(m, "touchmove", u._delayedDragTouchMoveHandler), f.supportPointer && Ye(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(p, f.delay);
      } else
        p();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var s = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    he && tf(he), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    $e(r, "mouseup", this._disableDelayedDrag), $e(r, "touchend", this._disableDelayedDrag), $e(r, "touchcancel", this._disableDelayedDrag), $e(r, "pointerup", this._disableDelayedDrag), $e(r, "pointercancel", this._disableDelayedDrag), $e(r, "mousemove", this._delayedDragTouchMoveHandler), $e(r, "touchmove", this._delayedDragTouchMoveHandler), $e(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, s) {
    s = s || r.pointerType == "touch" && r, !this.nativeDraggable || s ? this.options.supportPointer ? Ye(document, "pointermove", this._onTouchMove) : s ? Ye(document, "touchmove", this._onTouchMove) : Ye(document, "mousemove", this._onTouchMove) : (Ye(he, "dragend", this), Ye(ot, "dragstart", this._onDragStart));
    try {
      document.selection ? ul(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, s) {
    if (xi = !1, ot && he) {
      nn("dragStarted", this, {
        evt: s
      }), this.nativeDraggable && Ye(document, "dragover", M3);
      var a = this.options;
      !r && gn(he, a.dragClass, !1), gn(he, a.ghostClass, !0), Re.active = this, r && this._appendGhost(), Yt({
        sortable: this,
        name: "start",
        originalEvent: s
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Pn) {
      this._lastX = Pn.clientX, this._lastY = Pn.clientY, _y();
      for (var r = document.elementFromPoint(Pn.clientX, Pn.clientY), s = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), r !== s); )
        s = r;
      if (he.parentNode[an]._isOutsideThisEl(r), s)
        do {
          if (s[an]) {
            var a = void 0;
            if (a = s[an]._onDragOver({
              clientX: Pn.clientX,
              clientY: Pn.clientY,
              target: r,
              rootEl: s
            }), a && !this.options.dragoverBubble)
              break;
          }
          r = s;
        } while (s = cy(s));
      by();
    }
  },
  _onTouchMove: function(r) {
    if (Ca) {
      var s = this.options, a = s.fallbackTolerance, u = s.fallbackOffset, c = r.touches ? r.touches[0] : r, f = ze && ji(ze, !0), m = ze && f && f.a, p = ze && f && f.d, _ = ku && qt && _v(qt), g = (c.clientX - Ca.clientX + u.x) / (m || 1) + (_ ? _[0] - ef[0] : 0) / (m || 1), E = (c.clientY - Ca.clientY + u.y) / (p || 1) + (_ ? _[1] - ef[1] : 0) / (p || 1);
      if (!Re.active && !xi) {
        if (a && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < a)
          return;
        this._onDragStart(r, !0);
      }
      if (ze) {
        f ? (f.e += g - (Jd || 0), f.f += E - (Wd || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: g,
          f: E
        };
        var y = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Me(ze, "webkitTransform", y), Me(ze, "mozTransform", y), Me(ze, "msTransform", y), Me(ze, "transform", y), Jd = g, Wd = E, Pn = c;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ze) {
      var r = this.options.fallbackOnBody ? document.body : ot, s = Et(he, !0, ku, !0, r), a = this.options;
      if (ku) {
        for (qt = r; Me(qt, "position") === "static" && Me(qt, "transform") === "none" && qt !== document; )
          qt = qt.parentNode;
        qt !== document.body && qt !== document.documentElement ? (qt === document && (qt = Kn()), s.top += qt.scrollTop, s.left += qt.scrollLeft) : qt = Kn(), ef = _v(qt);
      }
      ze = he.cloneNode(!0), gn(ze, a.ghostClass, !1), gn(ze, a.fallbackClass, !0), gn(ze, a.dragClass, !0), Me(ze, "transition", ""), Me(ze, "transform", ""), Me(ze, "box-sizing", "border-box"), Me(ze, "margin", 0), Me(ze, "top", s.top), Me(ze, "left", s.left), Me(ze, "width", s.width), Me(ze, "height", s.height), Me(ze, "opacity", "0.8"), Me(ze, "position", ku ? "absolute" : "fixed"), Me(ze, "zIndex", "100000"), Me(ze, "pointerEvents", "none"), Re.ghost = ze, r.appendChild(ze), Me(ze, "transform-origin", bv / parseInt(ze.style.width) * 100 + "% " + Sv / parseInt(ze.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, s) {
    var a = this, u = r.dataTransfer, c = a.options;
    if (nn("dragStart", this, {
      evt: r
    }), Re.eventCanceled) {
      this._onDrop();
      return;
    }
    nn("setupClone", this), Re.eventCanceled || (dt = py(he), dt.removeAttribute("id"), dt.draggable = !1, dt.style["will-change"] = "", this._hideClone(), gn(dt, this.options.chosenClass, !1), Re.clone = dt), a.cloneId = ul(function() {
      nn("clone", a), !Re.eventCanceled && (a.options.removeCloneOnHide || ot.insertBefore(dt, he), a._hideClone(), Yt({
        sortable: a,
        name: "clone"
      }));
    }), !s && gn(he, c.dragClass, !0), s ? (gl = !0, a._loopId = setInterval(a._emulateDragOver, 50)) : ($e(document, "mouseup", a._onDrop), $e(document, "touchend", a._onDrop), $e(document, "touchcancel", a._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(a, u, he)), Ye(document, "drop", a), Me(he, "transform", "translateZ(0)")), xi = !0, a._dragStartId = ul(a._dragStarted.bind(a, s, r)), Ye(document, "selectstart", a), Vs = !0, window.getSelection().removeAllRanges(), Qs && Me(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var s = this.el, a = r.target, u, c, f, m = this.options, p = m.group, _ = Re.active, g = Eu === p, E = m.sort, y = zt || _, b, h = this, C = !1;
    if (Ef) return;
    function A(K, te) {
      nn(K, h, Wn({
        evt: r,
        isOwner: g,
        axis: b ? "vertical" : "horizontal",
        revert: f,
        dragRect: u,
        targetRect: c,
        canSort: E,
        fromSortable: y,
        target: a,
        completed: x,
        onMove: function($, oe) {
          return Au(ot, s, he, u, $, Et($), r, oe);
        },
        changed: P
      }, te));
    }
    function M() {
      A("dragOverAnimationCapture"), h.captureAnimationState(), h !== y && y.captureAnimationState();
    }
    function x(K) {
      return A("dragOverCompleted", {
        insertion: K
      }), K && (g ? _._hideClone() : _._showClone(h), h !== y && (gn(he, zt ? zt.options.ghostClass : _.options.ghostClass, !1), gn(he, m.ghostClass, !0)), zt !== h && h !== Re.active ? zt = h : h === Re.active && zt && (zt = null), y === h && (h._ignoreWhileAnimating = a), h.animateAll(function() {
        A("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (a === he && !he.animated || a === s && !a.animated) && (Ei = null), !m.dragoverBubble && !r.rootEl && a !== document && (he.parentNode[an]._isOutsideThisEl(r.target), !K && ka(r)), !m.dragoverBubble && r.stopPropagation && r.stopPropagation(), C = !0;
    }
    function P() {
      vn = Mn(he), Qr = Mn(he, m.draggable), Yt({
        sortable: h,
        name: "change",
        toEl: s,
        newIndex: vn,
        newDraggableIndex: Qr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), a = Un(a, m.draggable, s, !0), A("dragOver"), Re.eventCanceled) return C;
    if (he.contains(r.target) || a.animated && a.animatingX && a.animatingY || h._ignoreWhileAnimating === a)
      return x(!1);
    if (gl = !1, _ && !m.disabled && (g ? E || (f = mt !== ot) : zt === this || (this.lastPutMode = Eu.checkPull(this, _, he, r)) && p.checkPut(this, _, he, r))) {
      if (b = this._getDirection(r, a) === "vertical", u = Et(he), A("dragOverValid"), Re.eventCanceled) return C;
      if (f)
        return mt = ot, M(), this._hideClone(), A("revert"), Re.eventCanceled || (Aa ? ot.insertBefore(he, Aa) : ot.appendChild(he)), x(!0);
      var l = Zf(s, m.draggable);
      if (!l || L3(r, b, this) && !l.animated) {
        if (l === he)
          return x(!1);
        if (l && s === r.target && (a = l), a && (c = Et(a)), Au(ot, s, he, u, a, c, r, !!a) !== !1)
          return M(), l && l.nextSibling ? s.insertBefore(he, l.nextSibling) : s.appendChild(he), mt = s, P(), x(!0);
      } else if (l && D3(r, b, this)) {
        var S = Li(s, 0, m, !0);
        if (S === he)
          return x(!1);
        if (a = S, c = Et(a), Au(ot, s, he, u, a, c, r, !1) !== !1)
          return M(), s.insertBefore(he, S), mt = s, P(), x(!0);
      } else if (a.parentNode === s) {
        c = Et(a);
        var w = 0, k, O = he.parentNode !== s, L = !N3(he.animated && he.toRect || u, a.animated && a.toRect || c, b), j = b ? "top" : "left", z = yv(a, "top", "top") || yv(he, "top", "top"), H = z ? z.scrollTop : void 0;
        Ei !== a && (k = c[j], eo = !1, Cu = !L && m.invertSwap || O), w = z3(r, a, c, b, L ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, Cu, Ei === a);
        var Y;
        if (w !== 0) {
          var Z = Mn(he);
          do
            Z -= w, Y = mt.children[Z];
          while (Y && (Me(Y, "display") === "none" || Y === ze));
        }
        if (w === 0 || Y === a)
          return x(!1);
        Ei = a, Ws = w;
        var Q = a.nextElementSibling, R = !1;
        R = w === 1;
        var B = Au(ot, s, he, u, a, c, r, R);
        if (B !== !1)
          return (B === 1 || B === -1) && (R = B === 1), Ef = !0, setTimeout(j3, 30), M(), R && !Q ? s.appendChild(he) : a.parentNode.insertBefore(he, R ? Q : a), z && hy(z, 0, H - z.scrollTop), mt = he.parentNode, k !== void 0 && !Cu && (ol = Math.abs(k - Et(a)[j])), P(), x(!0);
      }
      if (s.contains(he))
        return x(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    $e(document, "mousemove", this._onTouchMove), $e(document, "touchmove", this._onTouchMove), $e(document, "pointermove", this._onTouchMove), $e(document, "dragover", ka), $e(document, "mousemove", ka), $e(document, "touchmove", ka);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    $e(r, "mouseup", this._onDrop), $e(r, "touchend", this._onDrop), $e(r, "pointerup", this._onDrop), $e(r, "pointercancel", this._onDrop), $e(r, "touchcancel", this._onDrop), $e(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var s = this.el, a = this.options;
    if (vn = Mn(he), Qr = Mn(he, a.draggable), nn("drop", this, {
      evt: r
    }), mt = he && he.parentNode, vn = Mn(he), Qr = Mn(he, a.draggable), Re.eventCanceled) {
      this._nulling();
      return;
    }
    xi = !1, Cu = !1, eo = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Cf(this.cloneId), Cf(this._dragStartId), this.nativeDraggable && ($e(document, "drop", this), $e(s, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Qs && Me(document.body, "user-select", ""), Me(he, "transform", ""), r && (Vs && (r.cancelable && r.preventDefault(), !a.dropBubble && r.stopPropagation()), ze && ze.parentNode && ze.parentNode.removeChild(ze), (ot === mt || zt && zt.lastPutMode !== "clone") && dt && dt.parentNode && dt.parentNode.removeChild(dt), he && (this.nativeDraggable && $e(he, "dragend", this), tf(he), he.style["will-change"] = "", Vs && !xi && gn(he, zt ? zt.options.ghostClass : this.options.ghostClass, !1), gn(he, this.options.chosenClass, !1), Yt({
      sortable: this,
      name: "unchoose",
      toEl: mt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), ot !== mt ? (vn >= 0 && (Yt({
      rootEl: mt,
      name: "add",
      toEl: mt,
      fromEl: ot,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "remove",
      toEl: mt,
      originalEvent: r
    }), Yt({
      rootEl: mt,
      name: "sort",
      toEl: mt,
      fromEl: ot,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: mt,
      originalEvent: r
    })), zt && zt.save()) : vn !== Ni && vn >= 0 && (Yt({
      sortable: this,
      name: "update",
      toEl: mt,
      originalEvent: r
    }), Yt({
      sortable: this,
      name: "sort",
      toEl: mt,
      originalEvent: r
    })), Re.active && ((vn == null || vn === -1) && (vn = Ni, Qr = Js), Yt({
      sortable: this,
      name: "end",
      toEl: mt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    nn("nulling", this), ot = he = mt = ze = Aa = dt = sl = Kr = Ca = Pn = Vs = vn = Qr = Ni = Js = Ei = Ws = zt = Eu = Re.dragged = Re.ghost = Re.clone = Re.active = null, yl.forEach(function(r) {
      r.checked = !0;
    }), yl.length = Jd = Wd = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        he && (this._onDragOver(r), R3(r));
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
    for (var r = [], s, a = this.el.children, u = 0, c = a.length, f = this.options; u < c; u++)
      s = a[u], Un(s, f.draggable, this.el, !1) && r.push(s.getAttribute(f.dataIdAttr) || I3(s));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, s) {
    var a = {}, u = this.el;
    this.toArray().forEach(function(c, f) {
      var m = u.children[f];
      Un(m, this.options.draggable, u, !1) && (a[c] = m);
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
    return Un(r, s || this.options.draggable, this.el, !1);
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
    typeof u < "u" ? a[r] = u : a[r] = s, r === "group" && yy(a);
  },
  /**
   * Destroy
   */
  destroy: function() {
    nn("destroy", this);
    var r = this.el;
    r[an] = null, $e(r, "mousedown", this._onTapStart), $e(r, "touchstart", this._onTapStart), $e(r, "pointerdown", this._onTapStart), this.nativeDraggable && ($e(r, "dragover", this), $e(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(s) {
      s.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), vl.splice(vl.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!Kr) {
      if (nn("hideClone", this), Re.eventCanceled) return;
      Me(dt, "display", "none"), this.options.removeCloneOnHide && dt.parentNode && dt.parentNode.removeChild(dt), Kr = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Kr) {
      if (nn("showClone", this), Re.eventCanceled) return;
      he.parentNode == ot && !this.options.group.revertClone ? ot.insertBefore(dt, he) : Aa ? ot.insertBefore(dt, Aa) : ot.appendChild(dt), this.options.group.revertClone && this.animate(he, dt), Me(dt, "display", ""), Kr = !1;
    }
  }
};
function R3(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function Au(n, r, s, a, u, c, f, m) {
  var p, _ = n[an], g = _.options.onMove, E;
  return window.CustomEvent && !Er && !ro ? p = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (p = document.createEvent("Event"), p.initEvent("move", !0, !0)), p.to = r, p.from = n, p.dragged = s, p.draggedRect = a, p.related = u || r, p.relatedRect = c || Et(r), p.willInsertAfter = m, p.originalEvent = f, n.dispatchEvent(p), g && (E = g.call(_, p, f)), E;
}
function tf(n) {
  n.draggable = !1;
}
function j3() {
  Ef = !1;
}
function D3(n, r, s) {
  var a = Et(Li(s.el, 0, s.options, !0)), u = my(s.el, s.options, ze), c = 10;
  return r ? n.clientX < u.left - c || n.clientY < a.top && n.clientX < a.right : n.clientY < u.top - c || n.clientY < a.bottom && n.clientX < a.left;
}
function L3(n, r, s) {
  var a = Et(Zf(s.el, s.options.draggable)), u = my(s.el, s.options, ze), c = 10;
  return r ? n.clientX > u.right + c || n.clientY > a.bottom && n.clientX > a.left : n.clientY > u.bottom + c || n.clientX > a.right && n.clientY > a.top;
}
function z3(n, r, s, a, u, c, f, m) {
  var p = a ? n.clientY : n.clientX, _ = a ? s.height : s.width, g = a ? s.top : s.left, E = a ? s.bottom : s.right, y = !1;
  if (!f) {
    if (m && ol < _ * u) {
      if (!eo && (Ws === 1 ? p > g + _ * c / 2 : p < E - _ * c / 2) && (eo = !0), eo)
        y = !0;
      else if (Ws === 1 ? p < g + ol : p > E - ol)
        return -Ws;
    } else if (p > g + _ * (1 - u) / 2 && p < E - _ * (1 - u) / 2)
      return P3(r);
  }
  return y = y || f, y && (p < g + _ * c / 2 || p > E - _ * c / 2) ? p > g + _ / 2 ? 1 : -1 : 0;
}
function P3(n) {
  return Mn(he) < Mn(n) ? 1 : -1;
}
function I3(n) {
  for (var r = n.tagName + n.className + n.src + n.href + n.textContent, s = r.length, a = 0; s--; )
    a += r.charCodeAt(s);
  return a.toString(36);
}
function B3(n) {
  yl.length = 0;
  for (var r = n.getElementsByTagName("input"), s = r.length; s--; ) {
    var a = r[s];
    a.checked && yl.push(a);
  }
}
function ul(n) {
  return setTimeout(n, 0);
}
function Cf(n) {
  return clearTimeout(n);
}
kl && Ye(document, "touchmove", function(n) {
  (Re.active || xi) && n.cancelable && n.preventDefault();
});
Re.utils = {
  on: Ye,
  off: $e,
  css: Me,
  find: dy,
  is: function(r, s) {
    return !!Un(r, s, r, !1);
  },
  extend: S3,
  throttle: fy,
  closest: Un,
  toggleClass: gn,
  clone: py,
  index: Mn,
  nextTick: ul,
  cancelNextTick: Cf,
  detectDirection: vy,
  getChild: Li,
  expando: an
};
Re.get = function(n) {
  return n[an];
};
Re.mount = function() {
  for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
    r[s] = arguments[s];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(a) {
    if (!a.prototype || !a.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(a));
    a.utils && (Re.utils = Wn(Wn({}, Re.utils), a.utils)), ao.mount(a);
  });
};
Re.create = function(n, r) {
  return new Re(n, r);
};
Re.version = _3;
var wt = [], $s, kf, Af = !1, nf, rf, _l, Ys;
function U3() {
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
      this.sortable.nativeDraggable ? Ye(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ye(document, "pointermove", this._handleFallbackAutoScroll) : a.touches ? Ye(document, "touchmove", this._handleFallbackAutoScroll) : Ye(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(s) {
      var a = s.originalEvent;
      !this.options.dragOverBubble && !a.rootEl && this._handleAutoScroll(a);
    },
    drop: function() {
      this.sortable.nativeDraggable ? $e(document, "dragover", this._handleAutoScroll) : ($e(document, "pointermove", this._handleFallbackAutoScroll), $e(document, "touchmove", this._handleFallbackAutoScroll), $e(document, "mousemove", this._handleFallbackAutoScroll)), Ev(), ll(), w3();
    },
    nulling: function() {
      _l = kf = $s = Af = Ys = nf = rf = null, wt.length = 0;
    },
    _handleFallbackAutoScroll: function(s) {
      this._handleAutoScroll(s, !0);
    },
    _handleAutoScroll: function(s, a) {
      var u = this, c = (s.touches ? s.touches[0] : s).clientX, f = (s.touches ? s.touches[0] : s).clientY, m = document.elementFromPoint(c, f);
      if (_l = s, a || this.options.forceAutoScrollFallback || ro || Er || Qs) {
        af(s, this.options, m, a);
        var p = Jr(m, !0);
        Af && (!Ys || c !== nf || f !== rf) && (Ys && Ev(), Ys = setInterval(function() {
          var _ = Jr(document.elementFromPoint(c, f), !0);
          _ !== p && (p = _, ll()), af(s, u.options, _, a);
        }, 10), nf = c, rf = f);
      } else {
        if (!this.options.bubbleScroll || Jr(m, !0) === Kn()) {
          ll();
          return;
        }
        af(s, this.options, Jr(m, !1), !1);
      }
    }
  }, wr(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ll() {
  wt.forEach(function(n) {
    clearInterval(n.pid);
  }), wt = [];
}
function Ev() {
  clearInterval(Ys);
}
var af = fy(function(n, r, s, a) {
  if (r.scroll) {
    var u = (n.touches ? n.touches[0] : n).clientX, c = (n.touches ? n.touches[0] : n).clientY, f = r.scrollSensitivity, m = r.scrollSpeed, p = Kn(), _ = !1, g;
    kf !== s && (kf = s, ll(), $s = r.scroll, g = r.scrollFn, $s === !0 && ($s = Jr(s, !0)));
    var E = 0, y = $s;
    do {
      var b = y, h = Et(b), C = h.top, A = h.bottom, M = h.left, x = h.right, P = h.width, l = h.height, S = void 0, w = void 0, k = b.scrollWidth, O = b.scrollHeight, L = Me(b), j = b.scrollLeft, z = b.scrollTop;
      b === p ? (S = P < k && (L.overflowX === "auto" || L.overflowX === "scroll" || L.overflowX === "visible"), w = l < O && (L.overflowY === "auto" || L.overflowY === "scroll" || L.overflowY === "visible")) : (S = P < k && (L.overflowX === "auto" || L.overflowX === "scroll"), w = l < O && (L.overflowY === "auto" || L.overflowY === "scroll"));
      var H = S && (Math.abs(x - u) <= f && j + P < k) - (Math.abs(M - u) <= f && !!j), Y = w && (Math.abs(A - c) <= f && z + l < O) - (Math.abs(C - c) <= f && !!z);
      if (!wt[E])
        for (var Z = 0; Z <= E; Z++)
          wt[Z] || (wt[Z] = {});
      (wt[E].vx != H || wt[E].vy != Y || wt[E].el !== b) && (wt[E].el = b, wt[E].vx = H, wt[E].vy = Y, clearInterval(wt[E].pid), (H != 0 || Y != 0) && (_ = !0, wt[E].pid = setInterval((function() {
        a && this.layer === 0 && Re.active._onTouchMove(_l);
        var Q = wt[this.layer].vy ? wt[this.layer].vy * m : 0, R = wt[this.layer].vx ? wt[this.layer].vx * m : 0;
        typeof g == "function" && g.call(Re.dragged.parentNode[an], R, Q, n, _l, wt[this.layer].el) !== "continue" || hy(wt[this.layer].el, R, Q);
      }).bind({
        layer: E
      }), 24))), E++;
    } while (r.bubbleScroll && y !== p && (y = Jr(y, !1)));
    Af = _;
  }
}, 30), Sy = function(r) {
  var s = r.originalEvent, a = r.putSortable, u = r.dragEl, c = r.activeSortable, f = r.dispatchSortableEvent, m = r.hideGhostForTarget, p = r.unhideGhostForTarget;
  if (s) {
    var _ = a || c;
    m();
    var g = s.changedTouches && s.changedTouches.length ? s.changedTouches[0] : s, E = document.elementFromPoint(g.clientX, g.clientY);
    p(), _ && !_.el.contains(E) && (f("spill"), this.onSpill({
      dragEl: u,
      putSortable: a
    }));
  }
};
function Gf() {
}
Gf.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var s = r.oldDraggableIndex;
    this.startIndex = s;
  },
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable;
    this.sortable.captureAnimationState(), a && a.captureAnimationState();
    var u = Li(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(s, u) : this.sortable.el.appendChild(s), this.sortable.animateAll(), a && a.animateAll();
  },
  drop: Sy
};
wr(Gf, {
  pluginName: "revertOnSpill"
});
function Vf() {
}
Vf.prototype = {
  onSpill: function(r) {
    var s = r.dragEl, a = r.putSortable, u = a || this.sortable;
    u.captureAnimationState(), s.parentNode && s.parentNode.removeChild(s), u.animateAll();
  },
  drop: Sy
};
wr(Vf, {
  pluginName: "removeOnSpill"
});
Re.mount(new U3());
Re.mount(Vf, Gf);
async function cl(n, r, s) {
  var a, u, c;
  function f(g) {
    return n.includes("all") || n.includes(g);
  }
  const m = SillyTavern.getContext();
  let p = {};
  const _ = L1;
  if (f("global") && _ != null && _.length)
    for (const g of _) {
      const E = await H3(g);
      E && (p[g] || (p[g] = []), Object.values(E).forEach((y) => {
        p[g].push(y);
      }));
    }
  if (f("chat")) {
    const g = m.chatMetadata[z1];
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
    const y = (u = (a = g?.data) == null ? void 0 : a.extensions) == null ? void 0 : u.world;
    y && E.add(y);
    const b = sy(s), h = (c = P1.charLore) == null ? void 0 : c.find((C) => C.name === b);
    h && (E = /* @__PURE__ */ new Set([...E, ...h.extraBooks]));
    for (const C of E) {
      const A = await m.loadWorldInfo(C);
      !A || p[C] || (p[C] = [], Object.values(A.entries).forEach((M) => {
        p[C].push(M);
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
async function H3(n) {
  const r = await SillyTavern.getContext().loadWorldInfo(n);
  return r ? Object.values(r.entries) : null;
}
const q3 = `=== SILLYTAVERN===

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

Lorebooks are essential for long-term storytelling with AI.`, Z3 = `{{#is_not_empty currentLorebooks}}
## CURRENT LOREBOOKS
{{#each currentLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, G3 = `{{#is_not_empty blackListedEntries}}
## BLACKLISTED ENTRIES
{{#each blackListedEntries}}
- {{this}}
{{/each}}
{{/is_not_empty}}`, V3 = `{{#is_not_empty suggestedLorebooks}}
## SUGGESTED LOREBOOKS
{{#each suggestedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, $3 = `If you are creating a new entry you should write it like this:
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
\`\`\``, Y3 = `## Rules
- Don't suggest already existing or suggested entries.
{{#if userInstructions}}

## Your Task
{{userInstructions}}{{/if}}`, F3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", X3 = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\n...\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```xml\n{{example_response}}\n```", Q3 = `You are an expert lorebook writer assisting a user. Your task is to respond with the modified lorebook data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isEntrySession}}the entry "{{targetEntryName}}".{{else}}the entire set of lorebook entries provided in the context.{{/if}}

The initial lorebook state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, K3 = `{{#is_not_empty changedLorebooks}}
## LOREBOOK UPDATES (Added/Modified)
{{#each changedLorebooks}}
## WORLD NAME: {{@key}}
  {{#each this as |entry|}}
### (NAME: {{#if entry.comment}}{{entry.comment}}{{else}}*No name*{{/if}}) (ID: {{entry.uid}})
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}
  {{/each}}
{{/each}}
{{/is_not_empty}}`, J3 = `{{#is_not_empty removedEntries}}
## LOREBOOK UPDATES (Removed)
The following entries were removed and will no longer be part of the context:
{{#each removedEntries}}
- **{{this.comment}}** (from {{this.worldName}})
{{/each}}
{{/is_not_empty}}`, W3 = `The following changes were applied to the lorebooks based on the last turn. Unlisted entries are unchanged.
{{{addedModifiedContent}}}
{{{removedContent}}}`, wy = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", e8 = wy + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", t8 = "[" + wy + "][" + e8 + "]*", n8 = new RegExp("^" + t8 + "$");
function Ey(n, r) {
  const s = [];
  let a = r.exec(n);
  for (; a; ) {
    const u = [];
    u.startIndex = r.lastIndex - a[0].length;
    const c = a.length;
    for (let f = 0; f < c; f++)
      u.push(a[f]);
    s.push(u), a = r.exec(n);
  }
  return s;
}
const $f = function(n) {
  const r = n8.exec(n);
  return !(r === null || typeof r > "u");
};
function r8(n) {
  return typeof n < "u";
}
const a8 = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function i8(n, r) {
  r = Object.assign({}, a8, r);
  const s = [];
  let a = !1, u = !1;
  n[0] === "\uFEFF" && (n = n.substr(1));
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<" && n[c + 1] === "?") {
      if (c += 2, c = kv(n, c), c.err) return c;
    } else if (n[c] === "<") {
      let f = c;
      if (c++, n[c] === "!") {
        c = Av(n, c);
        continue;
      } else {
        let m = !1;
        n[c] === "/" && (m = !0, c++);
        let p = "";
        for (; c < n.length && n[c] !== ">" && n[c] !== " " && n[c] !== "	" && n[c] !== `
` && n[c] !== "\r"; c++)
          p += n[c];
        if (p = p.trim(), p[p.length - 1] === "/" && (p = p.substring(0, p.length - 1), c--), !h8(p)) {
          let E;
          return p.trim().length === 0 ? E = "Invalid space after '<'." : E = "Tag '" + p + "' is an invalid name.", _t("InvalidTag", E, Ft(n, c));
        }
        const _ = u8(n, c);
        if (_ === !1)
          return _t("InvalidAttr", "Attributes for '" + p + "' have open quote.", Ft(n, c));
        let g = _.value;
        if (c = _.index, g[g.length - 1] === "/") {
          const E = c - g.length;
          g = g.substring(0, g.length - 1);
          const y = Tv(g, r);
          if (y === !0)
            a = !0;
          else
            return _t(y.err.code, y.err.msg, Ft(n, E + y.err.line));
        } else if (m)
          if (_.tagClosed) {
            if (g.trim().length > 0)
              return _t("InvalidTag", "Closing tag '" + p + "' can't have attributes or invalid starting.", Ft(n, f));
            if (s.length === 0)
              return _t("InvalidTag", "Closing tag '" + p + "' has not been opened.", Ft(n, f));
            {
              const E = s.pop();
              if (p !== E.tagName) {
                let y = Ft(n, E.tagStartPos);
                return _t(
                  "InvalidTag",
                  "Expected closing tag '" + E.tagName + "' (opened in line " + y.line + ", col " + y.col + ") instead of closing tag '" + p + "'.",
                  Ft(n, f)
                );
              }
              s.length == 0 && (u = !0);
            }
          } else return _t("InvalidTag", "Closing tag '" + p + "' doesn't have proper closing.", Ft(n, c));
        else {
          const E = Tv(g, r);
          if (E !== !0)
            return _t(E.err.code, E.err.msg, Ft(n, c - g.length + E.err.line));
          if (u === !0)
            return _t("InvalidXml", "Multiple possible root nodes found.", Ft(n, c));
          r.unpairedTags.indexOf(p) !== -1 || s.push({ tagName: p, tagStartPos: f }), a = !0;
        }
        for (c++; c < n.length; c++)
          if (n[c] === "<")
            if (n[c + 1] === "!") {
              c++, c = Av(n, c);
              continue;
            } else if (n[c + 1] === "?") {
              if (c = kv(n, ++c), c.err) return c;
            } else
              break;
          else if (n[c] === "&") {
            const E = d8(n, c);
            if (E == -1)
              return _t("InvalidChar", "char '&' is not expected.", Ft(n, c));
            c = E;
          } else if (u === !0 && !Cv(n[c]))
            return _t("InvalidXml", "Extra text at the end", Ft(n, c));
        n[c] === "<" && c--;
      }
    } else {
      if (Cv(n[c]))
        continue;
      return _t("InvalidChar", "char '" + n[c] + "' is not expected.", Ft(n, c));
    }
  if (a) {
    if (s.length == 1)
      return _t("InvalidTag", "Unclosed tag '" + s[0].tagName + "'.", Ft(n, s[0].tagStartPos));
    if (s.length > 0)
      return _t("InvalidXml", "Invalid '" + JSON.stringify(s.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return _t("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Cv(n) {
  return n === " " || n === "	" || n === `
` || n === "\r";
}
function kv(n, r) {
  const s = r;
  for (; r < n.length; r++)
    if (n[r] == "?" || n[r] == " ") {
      const a = n.substr(s, r - s);
      if (r > 5 && a === "xml")
        return _t("InvalidXml", "XML declaration allowed only at the start of the document.", Ft(n, r));
      if (n[r] == "?" && n[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Av(n, r) {
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
const s8 = '"', o8 = "'";
function u8(n, r) {
  let s = "", a = "", u = !1;
  for (; r < n.length; r++) {
    if (n[r] === s8 || n[r] === o8)
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
const l8 = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Tv(n, r) {
  const s = Ey(n, l8), a = {};
  for (let u = 0; u < s.length; u++) {
    if (s[u][1].length === 0)
      return _t("InvalidAttr", "Attribute '" + s[u][2] + "' has no space in starting.", Ps(s[u]));
    if (s[u][3] !== void 0 && s[u][4] === void 0)
      return _t("InvalidAttr", "Attribute '" + s[u][2] + "' is without value.", Ps(s[u]));
    if (s[u][3] === void 0 && !r.allowBooleanAttributes)
      return _t("InvalidAttr", "boolean attribute '" + s[u][2] + "' is not allowed.", Ps(s[u]));
    const c = s[u][2];
    if (!f8(c))
      return _t("InvalidAttr", "Attribute '" + c + "' is an invalid name.", Ps(s[u]));
    if (!a.hasOwnProperty(c))
      a[c] = 1;
    else
      return _t("InvalidAttr", "Attribute '" + c + "' is repeated.", Ps(s[u]));
  }
  return !0;
}
function c8(n, r) {
  let s = /\d/;
  for (n[r] === "x" && (r++, s = /[\da-fA-F]/); r < n.length; r++) {
    if (n[r] === ";")
      return r;
    if (!n[r].match(s))
      break;
  }
  return -1;
}
function d8(n, r) {
  if (r++, n[r] === ";")
    return -1;
  if (n[r] === "#")
    return r++, c8(n, r);
  let s = 0;
  for (; r < n.length; r++, s++)
    if (!(n[r].match(/\w/) && s < 20)) {
      if (n[r] === ";")
        break;
      return -1;
    }
  return r;
}
function _t(n, r, s) {
  return {
    err: {
      code: n,
      msg: r,
      line: s.line || s,
      col: s.col
    }
  };
}
function f8(n) {
  return $f(n);
}
function h8(n) {
  return $f(n);
}
function Ft(n, r) {
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
const p8 = {
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
}, m8 = function(n) {
  return Object.assign({}, p8, n);
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
function g8(n, r) {
  const s = {};
  if (n[r + 3] === "O" && n[r + 4] === "C" && n[r + 5] === "T" && n[r + 6] === "Y" && n[r + 7] === "P" && n[r + 8] === "E") {
    r = r + 9;
    let a = 1, u = !1, c = !1, f = "";
    for (; r < n.length; r++)
      if (n[r] === "<" && !c) {
        if (u && _8(n, r)) {
          r += 7;
          let m, p;
          [m, p, r] = v8(n, r + 1), p.indexOf("&") === -1 && (s[E8(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: p
          });
        } else if (u && b8(n, r)) r += 8;
        else if (u && S8(n, r)) r += 8;
        else if (u && w8(n, r)) r += 9;
        else if (y8) c = !0;
        else throw new Error("Invalid DOCTYPE");
        a++, f = "";
      } else if (n[r] === ">") {
        if (c ? n[r - 1] === "-" && n[r - 2] === "-" && (c = !1, a--) : a--, a === 0)
          break;
      } else n[r] === "[" ? u = !0 : f += n[r];
    if (a !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: s, i: r };
}
function v8(n, r) {
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
function y8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "-" && n[r + 3] === "-";
}
function _8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "N" && n[r + 4] === "T" && n[r + 5] === "I" && n[r + 6] === "T" && n[r + 7] === "Y";
}
function b8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "E" && n[r + 3] === "L" && n[r + 4] === "E" && n[r + 5] === "M" && n[r + 6] === "E" && n[r + 7] === "N" && n[r + 8] === "T";
}
function S8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "A" && n[r + 3] === "T" && n[r + 4] === "T" && n[r + 5] === "L" && n[r + 6] === "I" && n[r + 7] === "S" && n[r + 8] === "T";
}
function w8(n, r) {
  return n[r + 1] === "!" && n[r + 2] === "N" && n[r + 3] === "O" && n[r + 4] === "T" && n[r + 5] === "A" && n[r + 6] === "T" && n[r + 7] === "I" && n[r + 8] === "O" && n[r + 9] === "N";
}
function E8(n) {
  if ($f(n))
    return n;
  throw new Error(`Invalid entity name ${n}`);
}
const C8 = /^[-+]?0x[a-fA-F0-9]+$/, k8 = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, A8 = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function T8(n, r = {}) {
  if (r = Object.assign({}, A8, r), !n || typeof n != "string") return n;
  let s = n.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(s)) return n;
  if (n === "0") return 0;
  if (r.hex && C8.test(s))
    return N8(s, 16);
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
    const a = k8.exec(s);
    if (a) {
      const u = a[1], c = a[2];
      let f = x8(a[3]);
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
function x8(n) {
  return n && n.indexOf(".") !== -1 && (n = n.replace(/0+$/, ""), n === "." ? n = "0" : n[0] === "." ? n = "0" + n : n[n.length - 1] === "." && (n = n.substr(0, n.length - 1))), n;
}
function N8(n, r) {
  if (parseInt) return parseInt(n, r);
  if (Number.parseInt) return Number.parseInt(n, r);
  if (window && window.parseInt) return window.parseInt(n, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function O8(n) {
  return typeof n == "function" ? n : Array.isArray(n) ? (r) => {
    for (const s of n)
      if (typeof s == "string" && r === s || s instanceof RegExp && s.test(r))
        return !0;
  } : () => !1;
}
class M8 {
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
    }, this.addExternalEntities = R8, this.parseXml = P8, this.parseTextData = j8, this.resolveNameSpace = D8, this.buildAttributesMap = z8, this.isItStopNode = H8, this.replaceEntitiesValue = B8, this.readStopNodeData = Z8, this.saveTextToParentTag = U8, this.addChild = I8, this.ignoreAttributesFn = O8(this.options.ignoreAttributes);
  }
}
function R8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    this.lastEntities[a] = {
      regex: new RegExp("&" + a + ";", "g"),
      val: n[a]
    };
  }
}
function j8(n, r, s, a, u, c, f) {
  if (n !== void 0 && (this.options.trimValues && !a && (n = n.trim()), n.length > 0)) {
    f || (n = this.replaceEntitiesValue(n));
    const m = this.options.tagValueProcessor(r, n, s, u, c);
    return m == null ? n : typeof m != typeof n || m !== n ? m : this.options.trimValues ? xf(n, this.options.parseTagValue, this.options.numberParseOptions) : n.trim() === n ? xf(n, this.options.parseTagValue, this.options.numberParseOptions) : n;
  }
}
function D8(n) {
  if (this.options.removeNSPrefix) {
    const r = n.split(":"), s = n.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (n = s + r[1]);
  }
  return n;
}
const L8 = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function z8(n, r, s) {
  if (this.options.ignoreAttributes !== !0 && typeof n == "string") {
    const a = Ey(n, L8), u = a.length, c = {};
    for (let f = 0; f < u; f++) {
      const m = this.resolveNameSpace(a[f][1]);
      if (this.ignoreAttributesFn(m, r))
        continue;
      let p = a[f][4], _ = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (_ = this.options.transformAttributeName(_)), _ === "__proto__" && (_ = "#__proto__"), p !== void 0) {
          this.options.trimValues && (p = p.trim()), p = this.replaceEntitiesValue(p);
          const g = this.options.attributeValueProcessor(m, p, r);
          g == null ? c[_] = p : typeof g != typeof p || g !== p ? c[_] = g : c[_] = xf(
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
const P8 = function(n) {
  n = n.replace(/\r\n?/g, `
`);
  const r = new Is("!xml");
  let s = r, a = "", u = "";
  for (let c = 0; c < n.length; c++)
    if (n[c] === "<")
      if (n[c + 1] === "/") {
        const m = Na(n, ">", c, "Closing Tag is not closed.");
        let p = n.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const E = p.indexOf(":");
          E !== -1 && (p = p.substr(E + 1));
        }
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && (a = this.saveTextToParentTag(a, s, u));
        const _ = u.substring(u.lastIndexOf(".") + 1);
        if (p && this.options.unpairedTags.indexOf(p) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${p}>`);
        let g = 0;
        _ && this.options.unpairedTags.indexOf(_) !== -1 ? (g = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : g = u.lastIndexOf("."), u = u.substring(0, g), s = this.tagsNodeStack.pop(), a = "", c = m;
      } else if (n[c + 1] === "?") {
        let m = Tf(n, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (a = this.saveTextToParentTag(a, s, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const p = new Is(m.tagName);
          p.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (p[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(s, p, u);
        }
        c = m.closeIndex + 1;
      } else if (n.substr(c + 1, 3) === "!--") {
        const m = Na(n, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const p = n.substring(c + 4, m - 2);
          a = this.saveTextToParentTag(a, s, u), s.add(this.options.commentPropName, [{ [this.options.textNodeName]: p }]);
        }
        c = m;
      } else if (n.substr(c + 1, 2) === "!D") {
        const m = g8(n, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (n.substr(c + 1, 2) === "![") {
        const m = Na(n, "]]>", c, "CDATA is not closed.") - 2, p = n.substring(c + 9, m);
        a = this.saveTextToParentTag(a, s, u);
        let _ = this.parseTextData(p, s.tagname, u, !0, !1, !0, !0);
        _ == null && (_ = ""), this.options.cdataPropName ? s.add(this.options.cdataPropName, [{ [this.options.textNodeName]: p }]) : s.add(this.options.textNodeName, _), c = m + 2;
      } else {
        let m = Tf(n, c, this.options.removeNSPrefix), p = m.tagName;
        const _ = m.rawTagName;
        let g = m.tagExp, E = m.attrExpPresent, y = m.closeIndex;
        this.options.transformTagName && (p = this.options.transformTagName(p)), s && a && s.tagname !== "!xml" && (a = this.saveTextToParentTag(a, s, u, !1));
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
          const C = new Is(p);
          p !== g && E && (C[":@"] = this.buildAttributesMap(g, u, p)), h && (h = this.parseTextData(h, p, u, !0, E, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), C.add(this.options.textNodeName, h), this.addChild(s, C, u);
        } else {
          if (g.length > 0 && g.lastIndexOf("/") === g.length - 1) {
            p[p.length - 1] === "/" ? (p = p.substr(0, p.length - 1), u = u.substr(0, u.length - 1), g = p) : g = g.substr(0, g.length - 1), this.options.transformTagName && (p = this.options.transformTagName(p));
            const h = new Is(p);
            p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new Is(p);
            this.tagsNodeStack.push(s), p !== g && E && (h[":@"] = this.buildAttributesMap(g, u, p)), this.addChild(s, h, u), s = h;
          }
          a = "", c = y;
        }
      }
    else
      a += n[c];
  return r.child;
};
function I8(n, r, s) {
  const a = this.options.updateTag(r.tagname, s, r[":@"]);
  a === !1 || (typeof a == "string" && (r.tagname = a), n.addChild(r));
}
const B8 = function(n) {
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
function U8(n, r, s, a) {
  return n && (a === void 0 && (a = r.child.length === 0), n = this.parseTextData(
    n,
    r.tagname,
    s,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    a
  ), n !== void 0 && n !== "" && r.add(this.options.textNodeName, n), n = ""), n;
}
function H8(n, r, s) {
  const a = "*." + s;
  for (const u in n) {
    const c = n[u];
    if (a === c || r === c) return !0;
  }
  return !1;
}
function q8(n, r, s = ">") {
  let a, u = "";
  for (let c = r; c < n.length; c++) {
    let f = n[c];
    if (a)
      f === a && (a = "");
    else if (f === '"' || f === "'")
      a = f;
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
function Na(n, r, s, a) {
  const u = n.indexOf(r, s);
  if (u === -1)
    throw new Error(a);
  return u + r.length - 1;
}
function Tf(n, r, s, a = ">") {
  const u = q8(n, r + 1, a);
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
function Z8(n, r, s) {
  const a = s;
  let u = 1;
  for (; s < n.length; s++)
    if (n[s] === "<")
      if (n[s + 1] === "/") {
        const c = Na(n, ">", s, `${r} is not closed`);
        if (n.substring(s + 2, c).trim() === r && (u--, u === 0))
          return {
            tagContent: n.substring(a, s),
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
        const c = Tf(n, s, ">");
        c && ((c && c.tagName) === r && c.tagExp[c.tagExp.length - 1] !== "/" && u++, s = c.closeIndex);
      }
}
function xf(n, r, s) {
  if (r && typeof n == "string") {
    const a = n.trim();
    return a === "true" ? !0 : a === "false" ? !1 : T8(n, s);
  } else
    return r8(n) ? n : "";
}
function G8(n, r) {
  return Cy(n, r);
}
function Cy(n, r, s) {
  let a;
  const u = {};
  for (let c = 0; c < n.length; c++) {
    const f = n[c], m = V8(f);
    let p = "";
    if (s === void 0 ? p = m : p = s + "." + m, m === r.textNodeName)
      a === void 0 ? a = f[m] : a += "" + f[m];
    else {
      if (m === void 0)
        continue;
      if (f[m]) {
        let _ = Cy(f[m], r, p);
        const g = Y8(_, r);
        f[":@"] ? $8(_, f[":@"], p, r) : Object.keys(_).length === 1 && _[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? _ = _[r.textNodeName] : Object.keys(_).length === 0 && (r.alwaysCreateTextNode ? _[r.textNodeName] = "" : _ = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(_)) : r.isArray(m, p, g) ? u[m] = [_] : u[m] = _;
      }
    }
  }
  return typeof a == "string" ? a.length > 0 && (u[r.textNodeName] = a) : a !== void 0 && (u[r.textNodeName] = a), u;
}
function V8(n) {
  const r = Object.keys(n);
  for (let s = 0; s < r.length; s++) {
    const a = r[s];
    if (a !== ":@") return a;
  }
}
function $8(n, r, s, a) {
  if (r) {
    const u = Object.keys(r), c = u.length;
    for (let f = 0; f < c; f++) {
      const m = u[f];
      a.isArray(m, s + "." + m, !0, !0) ? n[m] = [r[m]] : n[m] = r[m];
    }
  }
}
function Y8(n, r) {
  const { textNodeName: s } = r, a = Object.keys(n).length;
  return !!(a === 0 || a === 1 && (n[s] || typeof n[s] == "boolean" || n[s] === 0));
}
class F8 {
  constructor(r) {
    this.externalEntities = {}, this.options = m8(r);
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
      const c = i8(r, s);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const a = new M8(this.options);
    a.addExternalEntities(this.externalEntities);
    const u = a.parseXml(r);
    return this.options.preserveOrder || u === void 0 ? u : G8(u, this.options);
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
const X8 = new F8();
function Q8(n) {
  const r = Math.pow(10, n - 1), s = Math.pow(10, n) - 1;
  return Math.floor(Math.random() * (s - r + 1)) + r;
}
function ky(n, r = {}) {
  let s = n;
  const { previousContent: a } = r;
  if (s = s.replace(/```xml/g, "").replace(/```/g, ""), a && (s = a + s.trimEnd()), s.includes("<entry>") && !s.includes("</entry>"))
    throw new Error("Incomplete XML: Missing </entry> tag");
  if (s.includes("<content>") && !s.includes("</content>"))
    throw new Error("Incomplete XML: Missing </content> tag");
  const u = {};
  try {
    const c = X8.parse(s);
    if (!c.lorebooks)
      return u;
    const f = c.lorebooks.entry?.content ? [c.lorebooks.entry] : c.lorebooks.entry;
    for (const m of f) {
      const p = m.worldName;
      p && (u[p] || (u[p] = []), u[p].push({
        uid: m.id ?? Q8(6),
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
function K8(n, r) {
  return `
<lorebooks>
  <entry>
    <worldName>${n}</worldName>
    <id>${r.uid}</id>
    <name>${r.comment}</name>
    <triggers>${r.key.join(",")}</triggers>
    <content>${r.content}`;
}
function J8(n, r) {
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
var Tu = { exports: {} }, xu = { exports: {} }, In = {}, rn = {}, xv;
function on() {
  if (xv) return rn;
  xv = 1, rn.__esModule = !0, rn.extend = u, rn.indexOf = p, rn.escapeExpression = _, rn.isEmpty = g, rn.createFrame = E, rn.blockParams = y, rn.appendContextPath = b;
  var n = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, s = /[&<>"'`=]/;
  function a(h) {
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
    for (var A = 0, M = h.length; A < M; A++)
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
    return s.test(h) ? h.replace(r, a) : h;
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
var Nu = { exports: {} }, Nv;
function Hn() {
  return Nv || (Nv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function a(u, c) {
      var f = c && c.loc, m = void 0, p = void 0, _ = void 0, g = void 0;
      f && (m = f.start.line, p = f.end.line, _ = f.start.column, g = f.end.column, u += " - " + m + ":" + _);
      for (var E = Error.prototype.constructor.call(this, u), y = 0; y < s.length; y++)
        this[s[y]] = E[s[y]];
      Error.captureStackTrace && Error.captureStackTrace(this, a);
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
    a.prototype = new Error(), r.default = a, n.exports = r.default;
  })(Nu, Nu.exports)), Nu.exports;
}
var Bs = {}, Ou = { exports: {} }, Ov;
function W8() {
  return Ov || (Ov = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(a) {
      a.registerHelper("blockHelperMissing", function(u, c) {
        var f = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return f(this);
        if (s.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(u, c)) : f(this);
        if (c.data && c.ids) {
          var p = s.createFrame(c.data);
          p.contextPath = s.appendContextPath(c.data.contextPath, c.name), c = { data: p };
        }
        return m(u, c);
      });
    }, n.exports = r.default;
  })(Ou, Ou.exports)), Ou.exports;
}
var Mu = { exports: {} }, Mv;
function eS() {
  return Mv || (Mv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("each", function(m, p) {
        if (!p)
          throw new c.default("Must pass iterator to #each");
        var _ = p.fn, g = p.inverse, E = 0, y = "", b = void 0, h = void 0;
        p.data && p.ids && (h = a.appendContextPath(p.data.contextPath, p.ids[0]) + "."), a.isFunction(m) && (m = m.call(this)), p.data && (b = a.createFrame(p.data));
        function C(l, S, w) {
          b && (b.key = l, b.index = S, b.first = S === 0, b.last = !!w, h && (b.contextPath = h + l)), y = y + _(m[l], {
            data: b,
            blockParams: a.blockParams([m[l], l], [h + l, null])
          });
        }
        if (m && typeof m == "object")
          if (a.isArray(m))
            for (var A = m.length; E < A; E++)
              E in m && C(E, E, E === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var M = [], x = m[Symbol.iterator](), P = x.next(); !P.done; P = x.next())
              M.push(P.value);
            m = M;
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
  })(Mu, Mu.exports)), Mu.exports;
}
var Ru = { exports: {} }, Rv;
function tS() {
  return Rv || (Rv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var a = Hn(), u = s(a);
    r.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, n.exports = r.default;
  })(Ru, Ru.exports)), Ru.exports;
}
var ju = { exports: {} }, jv;
function nS() {
  return jv || (jv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("if", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return a.isFunction(m) && (m = m.call(this)), !p.hash.includeZero && !m || a.isEmpty(m) ? p.inverse(this) : p.fn(this);
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
  })(ju, ju.exports)), ju.exports;
}
var Du = { exports: {} }, Dv;
function rS() {
  return Dv || (Dv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("log", function() {
        for (var a = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          a.push(arguments[c]);
        var f = 1;
        u.hash.level != null ? f = u.hash.level : u.data && u.data.level != null && (f = u.data.level), a[0] = f, s.log.apply(s, a);
      });
    }, n.exports = r.default;
  })(Du, Du.exports)), Du.exports;
}
var Lu = { exports: {} }, Lv;
function aS() {
  return Lv || (Lv = 1, (function(n, r) {
    r.__esModule = !0, r.default = function(s) {
      s.registerHelper("lookup", function(a, u, c) {
        return a && c.lookupProperty(a, u);
      });
    }, n.exports = r.default;
  })(Lu, Lu.exports)), Lu.exports;
}
var zu = { exports: {} }, zv;
function iS() {
  return zv || (zv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var a = on(), u = Hn(), c = s(u);
    r.default = function(f) {
      f.registerHelper("with", function(m, p) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        a.isFunction(m) && (m = m.call(this));
        var _ = p.fn;
        if (a.isEmpty(m))
          return p.inverse(this);
        var g = p.data;
        return p.data && p.ids && (g = a.createFrame(p.data), g.contextPath = a.appendContextPath(p.data.contextPath, p.ids[0])), _(m, {
          data: g,
          blockParams: a.blockParams([m], [g && g.contextPath])
        });
      });
    }, n.exports = r.default;
  })(zu, zu.exports)), zu.exports;
}
var Pv;
function Ay() {
  if (Pv) return Bs;
  Pv = 1, Bs.__esModule = !0, Bs.registerDefaultHelpers = C, Bs.moveHelperToHooks = A;
  function n(M) {
    return M && M.__esModule ? M : { default: M };
  }
  var r = W8(), s = n(r), a = eS(), u = n(a), c = tS(), f = n(c), m = nS(), p = n(m), _ = rS(), g = n(_), E = aS(), y = n(E), b = iS(), h = n(b);
  function C(M) {
    s.default(M), u.default(M), f.default(M), p.default(M), g.default(M), y.default(M), h.default(M);
  }
  function A(M, x, P) {
    M.helpers[x] && (M.hooks[x] = M.helpers[x], P || delete M.helpers[x]);
  }
  return Bs;
}
var Pu = {}, Iu = { exports: {} }, Iv;
function sS() {
  return Iv || (Iv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on();
    r.default = function(a) {
      a.registerDecorator("inline", function(u, c, f, m) {
        var p = u;
        return c.partials || (c.partials = {}, p = function(_, g) {
          var E = f.partials;
          f.partials = s.extend({}, E, c.partials);
          var y = u(_, g);
          return f.partials = E, y;
        }), c.partials[m.args[0]] = m.fn, p;
      });
    }, n.exports = r.default;
  })(Iu, Iu.exports)), Iu.exports;
}
var Bv;
function oS() {
  if (Bv) return Pu;
  Bv = 1, Pu.__esModule = !0, Pu.registerDefaultDecorators = a;
  function n(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var r = sS(), s = n(r);
  function a(u) {
    s.default(u);
  }
  return Pu;
}
var Bu = { exports: {} }, Uv;
function Ty() {
  return Uv || (Uv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), a = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var f = s.indexOf(a.methodMap, c.toLowerCase());
          f >= 0 ? c = f : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = a.lookupLevel(c), typeof console < "u" && a.lookupLevel(a.level) <= c) {
          var f = a.methodMap[c];
          console[f] || (f = "log");
          for (var m = arguments.length, p = Array(m > 1 ? m - 1 : 0), _ = 1; _ < m; _++)
            p[_ - 1] = arguments[_];
          console[f].apply(console, p);
        }
      }
    };
    r.default = a, n.exports = r.default;
  })(Bu, Bu.exports)), Bu.exports;
}
var Ci = {}, Uu = {}, Hv;
function uS() {
  if (Hv) return Uu;
  Hv = 1, Uu.__esModule = !0, Uu.createNewLookupObject = r;
  var n = on();
  function r() {
    for (var s = arguments.length, a = Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return n.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(a));
  }
  return Uu;
}
var qv;
function xy() {
  if (qv) return Ci;
  qv = 1, Ci.__esModule = !0, Ci.createProtoAccessControl = c, Ci.resultIsAllowed = f, Ci.resetLoggedProperties = _;
  function n(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = uS(), s = Ty(), a = n(s), u = /* @__PURE__ */ Object.create(null);
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
    u[g] !== !0 && (u[g] = !0, a.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + g + `" because it is not an "own property" of its parent.
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
var Zv;
function Yf() {
  if (Zv) return In;
  Zv = 1, In.__esModule = !0, In.HandlebarsEnvironment = h;
  function n(A) {
    return A && A.__esModule ? A : { default: A };
  }
  var r = on(), s = Hn(), a = n(s), u = Ay(), c = oS(), f = Ty(), m = n(f), p = xy(), _ = "4.7.8";
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
  function h(A, M, x) {
    this.helpers = A || {}, this.partials = M || {}, this.decorators = x || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(M, x) {
      if (r.toString.call(M) === b) {
        if (x)
          throw new a.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, M);
      } else
        this.helpers[M] = x;
    },
    unregisterHelper: function(M) {
      delete this.helpers[M];
    },
    registerPartial: function(M, x) {
      if (r.toString.call(M) === b)
        r.extend(this.partials, M);
      else {
        if (typeof x > "u")
          throw new a.default('Attempting to register a partial called "' + M + '" as undefined');
        this.partials[M] = x;
      }
    },
    unregisterPartial: function(M) {
      delete this.partials[M];
    },
    registerDecorator: function(M, x) {
      if (r.toString.call(M) === b) {
        if (x)
          throw new a.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, M);
      } else
        this.decorators[M] = x;
    },
    unregisterDecorator: function(M) {
      delete this.decorators[M];
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
var Hu = { exports: {} }, Gv;
function lS() {
  return Gv || (Gv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(a) {
      this.string = a;
    }
    s.prototype.toString = s.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = s, n.exports = r.default;
  })(Hu, Hu.exports)), Hu.exports;
}
var vr = {}, qu = {}, Vv;
function cS() {
  if (Vv) return qu;
  Vv = 1, qu.__esModule = !0, qu.wrapHelper = n;
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
var $v;
function dS() {
  if ($v) return vr;
  $v = 1, vr.__esModule = !0, vr.checkRevision = g, vr.template = E, vr.wrapProgram = y, vr.resolvePartial = b, vr.invokePartial = h, vr.noop = C;
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
  var s = on(), a = r(s), u = Hn(), c = n(u), f = Yf(), m = Ay(), p = cS(), _ = xy();
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
    function k(j, z, H) {
      H.hash && (z = a.extend({}, z, H.hash), H.ids && (H.ids[0] = !0)), j = S.VM.resolvePartial.call(this, j, z, H);
      var Y = a.extend({}, H, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), Z = S.VM.invokePartial.call(this, j, z, Y);
      if (Z == null && S.compile && (H.partials[H.name] = S.compile(j, l.compilerOptions, S), Z = H.partials[H.name](z, Y)), Z != null) {
        if (H.indent) {
          for (var Q = Z.split(`
`), R = 0, B = Q.length; R < B && !(!Q[R] && R + 1 === B); R++)
            Q[R] = H.indent + Q[R];
          Z = Q.join(`
`);
        }
        return Z;
      } else
        throw new c.default("The partial " + H.name + " could not be compiled when running in runtime-only mode");
    }
    var O = {
      strict: function(z, H, Y) {
        if (!z || !(H in z))
          throw new c.default('"' + H + '" not defined in ' + z, {
            loc: Y
          });
        return O.lookupProperty(z, H);
      },
      lookupProperty: function(z, H) {
        var Y = z[H];
        if (Y == null || Object.prototype.hasOwnProperty.call(z, H) || _.resultIsAllowed(Y, O.protoAccessControl, H))
          return Y;
      },
      lookup: function(z, H) {
        for (var Y = z.length, Z = 0; Z < Y; Z++) {
          var Q = z[Z] && O.lookupProperty(z[Z], H);
          if (Q != null)
            return z[Z][H];
        }
      },
      lambda: function(z, H) {
        return typeof z == "function" ? z.call(H) : z;
      },
      escapeExpression: a.escapeExpression,
      invokePartial: k,
      fn: function(z) {
        var H = l[z];
        return H.decorator = l[z + "_d"], H;
      },
      programs: [],
      program: function(z, H, Y, Z, Q) {
        var R = this.programs[z], B = this.fn(z);
        return H || Q || Z || Y ? R = y(this, z, B, H, Y, Z, Q) : R || (R = this.programs[z] = y(this, z, B)), R;
      },
      data: function(z, H) {
        for (; z && H--; )
          z = z._parent;
        return z;
      },
      mergeIfNeeded: function(z, H) {
        var Y = z || H;
        return z && H && z !== H && (Y = a.extend({}, H, z)), Y;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: S.VM.noop,
      compilerInfo: l.compiler
    };
    function L(j) {
      var z = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], H = z.data;
      L._setup(z), !z.partial && l.useData && (H = A(j, H));
      var Y = void 0, Z = l.useBlockParams ? [] : void 0;
      l.useDepths && (z.depths ? Y = j != z.depths[0] ? [j].concat(z.depths) : z.depths : Y = [j]);
      function Q(R) {
        return "" + l.main(O, R, O.helpers, O.partials, H, Z, Y);
      }
      return Q = M(l.main, Q, O, z.depths || [], H, Z), Q(j, z);
    }
    return L.isTop = !0, L._setup = function(j) {
      if (j.partial)
        O.protoAccessControl = j.protoAccessControl, O.helpers = j.helpers, O.partials = j.partials, O.decorators = j.decorators, O.hooks = j.hooks;
      else {
        var z = a.extend({}, S.helpers, j.helpers);
        x(z, O), O.helpers = z, l.usePartial && (O.partials = O.mergeIfNeeded(j.partials, S.partials)), (l.usePartial || l.useDecorators) && (O.decorators = a.extend({}, S.decorators, j.decorators)), O.hooks = {}, O.protoAccessControl = _.createProtoAccessControl(j);
        var H = j.allowCallsToHelperMissing || w;
        m.moveHelperToHooks(O, "helperMissing", H), m.moveHelperToHooks(O, "blockHelperMissing", H);
      }
    }, L._child = function(j, z, H, Y) {
      if (l.useBlockParams && !H)
        throw new c.default("must pass block params");
      if (l.useDepths && !Y)
        throw new c.default("must pass parent depths");
      return y(O, j, l[j], z, 0, H, Y);
    }, L;
  }
  function y(l, S, w, k, O, L, j) {
    function z(H) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Z = j;
      return j && H != j[0] && !(H === l.nullContext && j[0] === null) && (Z = [H].concat(j)), w(l, H, l.helpers, l.partials, Y.data || k, L && [Y.blockParams].concat(L), Z);
    }
    return z = M(w, z, l, j, k, L), z.program = S, z.depth = j ? j.length : 0, z.blockParams = O || 0, z;
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
      var L = w.fn;
      O = w.data["partial-block"] = function(z) {
        var H = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return H.data = f.createFrame(H.data), H.data["partial-block"] = k, L(z, H);
      }, L.partials && (w.partials = a.extend({}, w.partials, L.partials));
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
  function M(l, S, w, k, O, L) {
    if (l.decorator) {
      var j = {};
      S = l.decorator(S, j, w, k && k[0], O, L, k), a.extend(S, j);
    }
    return S;
  }
  function x(l, S) {
    Object.keys(l).forEach(function(w) {
      var k = l[w];
      l[w] = P(k, S);
    });
  }
  function P(l, S) {
    var w = S.lookupProperty;
    return p.wrapHelper(l, function(k) {
      return a.extend({ lookupProperty: w }, k);
    });
  }
  return vr;
}
var Zu = { exports: {} }, Yv;
function Ny() {
  return Yv || (Yv = 1, (function(n, r) {
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
  })(Zu, Zu.exports)), Zu.exports;
}
var Fv;
function fS() {
  return Fv || (Fv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    function a(x) {
      if (x && x.__esModule)
        return x;
      var P = {};
      if (x != null)
        for (var l in x)
          Object.prototype.hasOwnProperty.call(x, l) && (P[l] = x[l]);
      return P.default = x, P;
    }
    var u = Yf(), c = a(u), f = lS(), m = s(f), p = Hn(), _ = s(p), g = on(), E = a(g), y = dS(), b = a(y), h = Ny(), C = s(h);
    function A() {
      var x = new c.HandlebarsEnvironment();
      return E.extend(x, c), x.SafeString = m.default, x.Exception = _.default, x.Utils = E, x.escapeExpression = E.escapeExpression, x.VM = b, x.template = function(P) {
        return b.template(P, x);
      }, x;
    }
    var M = A();
    M.create = A, C.default(M), M.default = M, r.default = M, n.exports = r.default;
  })(xu, xu.exports)), xu.exports;
}
var Gu = { exports: {} }, Xv;
function Oy() {
  return Xv || (Xv = 1, (function(n, r) {
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
  })(Gu, Gu.exports)), Gu.exports;
}
var ki = {}, Vu = { exports: {} }, Qv;
function hS() {
  return Qv || (Qv = 1, (function(n, r) {
    r.__esModule = !0;
    var s = (function() {
      var a = {
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
          var M = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function x() {
            var Y;
            return Y = p.lexer.lex() || 1, typeof Y != "number" && (Y = p.symbols_[Y] || Y), Y;
          }
          for (var P, l, S, w, k = {}, O, L, j, z; ; ) {
            if (l = _[_.length - 1], this.defaultActions[l] ? S = this.defaultActions[l] : ((P === null || typeof P > "u") && (P = x()), S = y[l] && y[l][P]), typeof S > "u" || !S.length || !S[0]) {
              var H = "";
              {
                z = [];
                for (O in y[l]) this.terminals_[O] && O > 2 && z.push("'" + this.terminals_[O] + "'");
                this.lexer.showPosition ? H = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + z.join(", ") + ", got '" + (this.terminals_[P] || P) + "'" : H = "Parse error on line " + (h + 1) + ": Unexpected " + (P == 1 ? "end of input" : "'" + (this.terminals_[P] || P) + "'"), this.parseError(H, { text: this.lexer.match, token: this.terminals_[P] || P, line: this.lexer.yylineno, loc: A, expected: z });
              }
            }
            if (S[0] instanceof Array && S.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + l + ", token: " + P);
            switch (S[0]) {
              case 1:
                _.push(P), g.push(this.lexer.yytext), E.push(this.lexer.yylloc), _.push(S[1]), P = null, C = this.lexer.yyleng, b = this.lexer.yytext, h = this.lexer.yylineno, A = this.lexer.yylloc;
                break;
              case 2:
                if (L = this.productions_[S[1]][1], k.$ = g[g.length - L], k._$ = { first_line: E[E.length - (L || 1)].first_line, last_line: E[E.length - 1].last_line, first_column: E[E.length - (L || 1)].first_column, last_column: E[E.length - 1].last_column }, M && (k._$.range = [E[E.length - (L || 1)].range[0], E[E.length - 1].range[1]]), w = this.performAction.call(k, b, C, h, this.yy, S[1], g, E), typeof w < "u")
                  return w;
                L && (_ = _.slice(0, -1 * L * 2), g = g.slice(0, -1 * L), E = E.slice(0, -1 * L)), _.push(this.productions_[S[1]][0]), g.push(k.$), E.push(k._$), j = y[_[_.length - 2]][_[_.length - 1]], _.push(j);
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
      a.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = a, a.Parser = c, new c();
    })();
    r.default = s, n.exports = r.default;
  })(Vu, Vu.exports)), Vu.exports;
}
var $u = { exports: {} }, Yu = { exports: {} }, Kv;
function My() {
  return Kv || (Kv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(_) {
      return _ && _.__esModule ? _ : { default: _ };
    }
    var a = Hn(), u = s(a);
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
var Jv;
function pS() {
  return Jv || (Jv = 1, (function(n, r) {
    r.__esModule = !0;
    function s(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var a = My(), u = s(a);
    function c() {
      var g = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = g;
    }
    c.prototype = new u.default(), c.prototype.Program = function(g) {
      var E = !this.options.ignoreStandalone, y = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var b = g.body, h = 0, C = b.length; h < C; h++) {
        var A = b[h], M = this.accept(A);
        if (M) {
          var x = f(b, h, y), P = m(b, h, y), l = M.openStandalone && x, S = M.closeStandalone && P, w = M.inlineStandalone && x && P;
          M.close && p(b, h, !0), M.open && _(b, h, !0), E && w && (p(b, h), _(b, h) && A.type === "PartialStatement" && (A.indent = /([ \t]+$)/.exec(b[h - 1].original)[1])), E && l && (p((A.program || A.inverse).body), _(b, h)), E && S && (p(b, h), _((A.inverse || A.program).body));
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
  })($u, $u.exports)), $u.exports;
}
var mn = {}, Wv;
function mS() {
  if (Wv) return mn;
  Wv = 1, mn.__esModule = !0, mn.SourceLocation = u, mn.id = c, mn.stripFlags = f, mn.stripComment = m, mn.preparePath = p, mn.prepareMustache = _, mn.prepareRawBlock = g, mn.prepareBlock = E, mn.prepareProgram = y, mn.preparePartialBlock = b;
  function n(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var r = Hn(), s = n(r);
  function a(h, C) {
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
    for (var M = h ? "@" : "", x = [], P = 0, l = 0, S = C.length; l < S; l++) {
      var w = C[l].part, k = C[l].original !== w;
      if (M += (C[l].separator || "") + w, !k && (w === ".." || w === "." || w === "this")) {
        if (x.length > 0)
          throw new s.default("Invalid path: " + M, { loc: A });
        w === ".." && P++;
      } else
        x.push(w);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: P,
      parts: x,
      original: M,
      loc: A
    };
  }
  function _(h, C, A, M, x, P) {
    var l = M.charAt(3) || M.charAt(2), S = l !== "{" && l !== "&", w = /\*/.test(M);
    return {
      type: w ? "Decorator" : "MustacheStatement",
      path: h,
      params: C,
      hash: A,
      escaped: S,
      strip: x,
      loc: this.locInfo(P)
    };
  }
  function g(h, C, A, M) {
    a(h, A), M = this.locInfo(M);
    var x = {
      type: "Program",
      body: C,
      strip: {},
      loc: M
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
      loc: M
    };
  }
  function E(h, C, A, M, x, P) {
    M && M.path && a(h, M);
    var l = /\*/.test(h.open);
    C.blockParams = h.blockParams;
    var S = void 0, w = void 0;
    if (A) {
      if (l)
        throw new s.default("Unexpected inverse block on decorator", A);
      A.chain && (A.program.body[0].closeStrip = M.strip), w = A.strip, S = A.program;
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
      closeStrip: M && M.strip,
      loc: this.locInfo(P)
    };
  }
  function y(h, C) {
    if (!C && h.length) {
      var A = h[0].loc, M = h[h.length - 1].loc;
      A && M && (C = {
        source: A.source,
        start: {
          line: A.start.line,
          column: A.start.column
        },
        end: {
          line: M.end.line,
          column: M.end.column
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
  function b(h, C, A, M) {
    return a(h, A), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: C,
      openStrip: h.strip,
      closeStrip: A && A.strip,
      loc: this.locInfo(M)
    };
  }
  return mn;
}
var e0;
function gS() {
  if (e0) return ki;
  e0 = 1, ki.__esModule = !0, ki.parseWithoutProcessing = g, ki.parse = E;
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
  var s = hS(), a = r(s), u = pS(), c = r(u), f = mS(), m = n(f), p = on();
  ki.parser = a.default;
  var _ = {};
  p.extend(_, m);
  function g(y, b) {
    if (y.type === "Program")
      return y;
    a.default.yy = _, _.locInfo = function(C) {
      return new _.SourceLocation(b && b.srcName, C);
    };
    var h = a.default.parse(y);
    return h;
  }
  function E(y, b) {
    var h = g(y, b), C = new c.default(b);
    return C.accept(h);
  }
  return ki;
}
var Ai = {}, t0;
function vS() {
  if (t0) return Ai;
  t0 = 1, Ai.__esModule = !0, Ai.Compiler = m, Ai.precompile = p, Ai.compile = _;
  function n(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var r = Hn(), s = n(r), a = on(), u = Oy(), c = n(u), f = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(b) {
      var h = this.opcodes.length;
      if (b.opcodes.length !== h)
        return !1;
      for (var C = 0; C < h; C++) {
        var A = this.opcodes[C], M = b.opcodes[C];
        if (A.opcode !== M.opcode || !g(A.args, M.args))
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
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = a.extend(/* @__PURE__ */ Object.create(null), {
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
      var A = b.name.original, M = b.name.type === "SubExpression";
      M && this.accept(b.name), this.setupFullMustacheParams(b, h, void 0, !0);
      var x = b.indent || "";
      this.options.preventIndent && x && (this.opcode("appendContent", x), x = ""), this.opcode("invokePartial", M, A, x), this.opcode("append");
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
      var A = b.path, M = A.parts[0], x = h != null || C != null;
      this.opcode("getContext", A.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", C), A.strict = !0, this.accept(A), this.opcode("invokeAmbiguous", M, x);
    },
    simpleSexpr: function(b) {
      var h = b.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(b, h, C) {
      var A = this.setupFullMustacheParams(b, h, C), M = b.path, x = M.parts[0];
      if (this.options.knownHelpers[x])
        this.opcode("invokeKnownHelper", A.length, x);
      else {
        if (this.options.knownHelpersOnly)
          throw new s.default("You specified knownHelpersOnly, but used the unknown helper " + x, b);
        M.strict = !0, M.falsy = !0, this.accept(M), this.opcode("invokeHelper", A.length, M.original, c.default.helpers.simpleId(M));
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
      var h = c.default.helpers.simpleId(b.path), C = h && !!this.blockParamIndex(b.path.parts[0]), A = !C && c.default.helpers.helperExpression(b), M = !C && (A || h);
      if (M && !A) {
        var x = b.path.parts[0], P = this.options;
        P.knownHelpers[x] ? A = !0 : P.knownHelpersOnly && (M = !1);
      }
      return A ? "helper" : M ? "ambiguous" : "simple";
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
      var M = b.params;
      return this.pushParams(M), this.opcode("pushProgram", h), this.opcode("pushProgram", C), b.hash ? this.accept(b.hash) : this.opcode("emptyHash", A), M;
    },
    blockParamIndex: function(b) {
      for (var h = 0, C = this.options.blockParams.length; h < C; h++) {
        var A = this.options.blockParams[h], M = A && a.indexOf(A, b);
        if (A && M >= 0)
          return [h, M];
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
    b = a.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
    var C = void 0;
    function A() {
      var x = h.parse(y, b), P = new h.Compiler().compile(x, b), l = new h.JavaScriptCompiler().compile(P, b, void 0, !0);
      return h.template(l);
    }
    function M(x, P) {
      return C || (C = A()), C.call(this, x, P);
    }
    return M._setup = function(x) {
      return C || (C = A()), C._setup(x);
    }, M._child = function(x, P, l, S) {
      return C || (C = A()), C._child(x, P, l, S);
    }, M;
  }
  function g(y, b) {
    if (y === b)
      return !0;
    if (a.isArray(y) && a.isArray(b) && y.length === b.length) {
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
var Fu = { exports: {} }, Xu = { exports: {} }, Us = {}, sf = {}, Qu = {}, Ku = {}, n0;
function yS() {
  if (n0) return Ku;
  n0 = 1;
  var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ku.encode = function(r) {
    if (0 <= r && r < n.length)
      return n[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ku.decode = function(r) {
    var s = 65, a = 90, u = 97, c = 122, f = 48, m = 57, p = 43, _ = 47, g = 26, E = 52;
    return s <= r && r <= a ? r - s : u <= r && r <= c ? r - u + g : f <= r && r <= m ? r - f + E : r == p ? 62 : r == _ ? 63 : -1;
  }, Ku;
}
var r0;
function Ry() {
  if (r0) return Qu;
  r0 = 1;
  var n = yS(), r = 5, s = 1 << r, a = s - 1, u = s;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function f(m) {
    var p = (m & 1) === 1, _ = m >> 1;
    return p ? -_ : _;
  }
  return Qu.encode = function(p) {
    var _ = "", g, E = c(p);
    do
      g = E & a, E >>>= r, E > 0 && (g |= u), _ += n.encode(g);
    while (E > 0);
    return _;
  }, Qu.decode = function(p, _, g) {
    var E = p.length, y = 0, b = 0, h, C;
    do {
      if (_ >= E)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (C = n.decode(p.charCodeAt(_++)), C === -1)
        throw new Error("Invalid base64 digit: " + p.charAt(_ - 1));
      h = !!(C & u), C &= a, y = y + (C << b), b += r;
    } while (h);
    g.value = f(y), g.rest = _;
  }, Qu;
}
var of = {}, a0;
function io() {
  return a0 || (a0 = 1, (function(n) {
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
    function f(l) {
      var S = l, w = u(l);
      if (w) {
        if (!w.path)
          return l;
        S = w.path;
      }
      for (var k = n.isAbsolute(S), O = S.split(/\/+/), L, j = 0, z = O.length - 1; z >= 0; z--)
        L = O[z], L === "." ? O.splice(z, 1) : L === ".." ? j++ : j > 0 && (L === "" ? (O.splice(z + 1, j), j = 0) : (O.splice(z, 2), j--));
      return S = O.join("/"), S === "" && (S = k ? "/" : "."), w ? (w.path = S, c(w)) : S;
    }
    n.normalize = f;
    function m(l, S) {
      l === "" && (l = "."), S === "" && (S = ".");
      var w = u(S), k = u(l);
      if (k && (l = k.path || "/"), w && !w.scheme)
        return k && (w.scheme = k.scheme), c(w);
      if (w || S.match(a))
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
    function M(l, S) {
      var w = l.generatedLine - S.generatedLine;
      return w !== 0 || (w = l.generatedColumn - S.generatedColumn, w !== 0) || (w = A(l.source, S.source), w !== 0) || (w = l.originalLine - S.originalLine, w !== 0) || (w = l.originalColumn - S.originalColumn, w !== 0) ? w : A(l.name, S.name);
    }
    n.compareByGeneratedPositionsInflated = M;
    function x(l) {
      return JSON.parse(l.replace(/^\)]}'[^\n]*\n/, ""));
    }
    n.parseSourceMapInput = x;
    function P(l, S, w) {
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
    n.computeSourceURL = P;
  })(of)), of;
}
var uf = {}, i0;
function jy() {
  if (i0) return uf;
  i0 = 1;
  var n = io(), r = Object.prototype.hasOwnProperty, s = typeof Map < "u";
  function a() {
    this._array = [], this._set = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return a.fromArray = function(c, f) {
    for (var m = new a(), p = 0, _ = c.length; p < _; p++)
      m.add(c[p], f);
    return m;
  }, a.prototype.size = function() {
    return s ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, a.prototype.add = function(c, f) {
    var m = s ? c : n.toSetString(c), p = s ? this.has(c) : r.call(this._set, m), _ = this._array.length;
    (!p || f) && this._array.push(c), p || (s ? this._set.set(c, _) : this._set[m] = _);
  }, a.prototype.has = function(c) {
    if (s)
      return this._set.has(c);
    var f = n.toSetString(c);
    return r.call(this._set, f);
  }, a.prototype.indexOf = function(c) {
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
  }, a.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, a.prototype.toArray = function() {
    return this._array.slice();
  }, uf.ArraySet = a, uf;
}
var lf = {}, s0;
function _S() {
  if (s0) return lf;
  s0 = 1;
  var n = io();
  function r(a, u) {
    var c = a.generatedLine, f = u.generatedLine, m = a.generatedColumn, p = u.generatedColumn;
    return f > c || f == c && p >= m || n.compareByGeneratedPositionsInflated(a, u) <= 0;
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
  }, lf.MappingList = s, lf;
}
var o0;
function Dy() {
  if (o0) return sf;
  o0 = 1;
  var n = Ry(), r = io(), s = jy().ArraySet, a = _S().MappingList;
  function u(c) {
    c || (c = {}), this._file = r.getArg(c, "file", null), this._sourceRoot = r.getArg(c, "sourceRoot", null), this._skipValidation = r.getArg(c, "skipValidation", !1), this._sources = new s(), this._names = new s(), this._mappings = new a(), this._sourcesContents = null;
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
    for (var f = 0, m = 1, p = 0, _ = 0, g = 0, E = 0, y = "", b, h, C, A, M = this._mappings.toArray(), x = 0, P = M.length; x < P; x++) {
      if (h = M[x], b = "", h.generatedLine !== m)
        for (f = 0; h.generatedLine !== m; )
          b += ";", m++;
      else if (x > 0) {
        if (!r.compareByGeneratedPositionsInflated(h, M[x - 1]))
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
  }, sf.SourceMapGenerator = u, sf;
}
var Hs = {}, cf = {}, u0;
function bS() {
  return u0 || (u0 = 1, (function(n) {
    n.GREATEST_LOWER_BOUND = 1, n.LEAST_UPPER_BOUND = 2;
    function r(s, a, u, c, f, m) {
      var p = Math.floor((a - s) / 2) + s, _ = f(u, c[p], !0);
      return _ === 0 ? p : _ > 0 ? a - p > 1 ? r(p, a, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? a < c.length ? a : -1 : p : p - s > 1 ? r(s, p, u, c, f, m) : m == n.LEAST_UPPER_BOUND ? p : s < 0 ? -1 : s;
    }
    n.search = function(a, u, c, f) {
      if (u.length === 0)
        return -1;
      var m = r(
        -1,
        u.length,
        a,
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
  })(cf)), cf;
}
var df = {}, l0;
function SS() {
  if (l0) return df;
  l0 = 1;
  function n(a, u, c) {
    var f = a[u];
    a[u] = a[c], a[c] = f;
  }
  function r(a, u) {
    return Math.round(a + Math.random() * (u - a));
  }
  function s(a, u, c, f) {
    if (c < f) {
      var m = r(c, f), p = c - 1;
      n(a, m, f);
      for (var _ = a[f], g = c; g < f; g++)
        u(a[g], _) <= 0 && (p += 1, n(a, p, g));
      n(a, p + 1, g);
      var E = p + 1;
      s(a, u, c, E - 1), s(a, u, E + 1, f);
    }
  }
  return df.quickSort = function(a, u) {
    s(a, u, 0, a.length - 1);
  }, df;
}
var c0;
function wS() {
  if (c0) return Hs;
  c0 = 1;
  var n = io(), r = bS(), s = jy().ArraySet, a = Ry(), u = SS().quickSort;
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
    C.map(function(M) {
      var x = M.source === null ? null : this._sources.at(M.source);
      return x = n.computeSourceURL(A, x, this._sourceMapURL), {
        source: x,
        generatedLine: M.generatedLine,
        generatedColumn: M.generatedColumn,
        originalLine: M.originalLine,
        originalColumn: M.originalColumn,
        name: M.name === null ? null : this._names.at(M.name)
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
        for (var M = C.originalColumn; C && C.originalLine === E && C.originalColumn == M; )
          b.push({
            line: n.getArg(C, "generatedLine", null),
            column: n.getArg(C, "generatedColumn", null),
            lastColumn: n.getArg(C, "lastGeneratedColumn", null)
          }), C = this._originalMappings[++h];
    }
    return b;
  }, Hs.SourceMapConsumer = c;
  function f(_, g) {
    var E = _;
    typeof _ == "string" && (E = n.parseSourceMapInput(_));
    var y = n.getArg(E, "version"), b = n.getArg(E, "sources"), h = n.getArg(E, "names", []), C = n.getArg(E, "sourceRoot", null), A = n.getArg(E, "sourcesContent", null), M = n.getArg(E, "mappings"), x = n.getArg(E, "file", null);
    if (y != this._version)
      throw new Error("Unsupported version: " + y);
    C && (C = n.normalize(C)), b = b.map(String).map(n.normalize).map(function(P) {
      return C && n.isAbsolute(C) && n.isAbsolute(P) ? n.relative(C, P) : P;
    }), this._names = s.fromArray(h.map(String), !0), this._sources = s.fromArray(b, !0), this._absoluteSources = this._sources.toArray().map(function(P) {
      return n.computeSourceURL(C, P, g);
    }), this.sourceRoot = C, this.sourcesContent = A, this._mappings = M, this._sourceMapURL = g, this.file = x;
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
    for (var C = g._mappings.toArray().slice(), A = y.__generatedMappings = [], M = y.__originalMappings = [], x = 0, P = C.length; x < P; x++) {
      var l = C[x], S = new m();
      S.generatedLine = l.generatedLine, S.generatedColumn = l.generatedColumn, l.source && (S.source = h.indexOf(l.source), S.originalLine = l.originalLine, S.originalColumn = l.originalColumn, l.name && (S.name = b.indexOf(l.name)), M.push(S)), A.push(S);
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
    for (var y = 1, b = 0, h = 0, C = 0, A = 0, M = 0, x = g.length, P = 0, l = {}, S = {}, w = [], k = [], O, L, j, z, H; P < x; )
      if (g.charAt(P) === ";")
        y++, P++, b = 0;
      else if (g.charAt(P) === ",")
        P++;
      else {
        for (O = new m(), O.generatedLine = y, z = P; z < x && !this._charIsMappingSeparator(g, z); z++)
          ;
        if (L = g.slice(P, z), j = l[L], j)
          P += L.length;
        else {
          for (j = []; P < z; )
            a.decode(g, P, S), H = S.value, P = S.rest, j.push(H);
          if (j.length === 2)
            throw new Error("Found a source, but no line and column");
          if (j.length === 3)
            throw new Error("Found a source and line, but no column");
          l[L] = j;
        }
        O.generatedColumn = b + j[0], b = O.generatedColumn, j.length > 1 && (O.source = A + j[1], A += j[1], O.originalLine = h + j[2], h = O.originalLine, O.originalLine += 1, O.originalColumn = C + j[3], C = O.originalColumn, j.length > 4 && (O.name = M + j[4], M += j[4])), k.push(O), typeof O.originalLine == "number" && w.push(O);
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
  }, Hs.BasicSourceMapConsumer = f;
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
      var A = n.getArg(C, "offset"), M = n.getArg(A, "line"), x = n.getArg(A, "column");
      if (M < h.line || M === h.line && x < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = A, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: M + 1,
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
        var A = h[C], M = b.consumer._sources.at(A.source);
        M = n.computeSourceURL(b.consumer.sourceRoot, M, this._sourceMapURL), this._sources.add(M), M = this._sources.indexOf(M);
        var x = null;
        A.name && (x = b.consumer._names.at(A.name), this._names.add(x), x = this._names.indexOf(x));
        var P = {
          source: M,
          generatedLine: A.generatedLine + (b.generatedOffset.generatedLine - 1),
          generatedColumn: A.generatedColumn + (b.generatedOffset.generatedLine === A.generatedLine ? b.generatedOffset.generatedColumn - 1 : 0),
          originalLine: A.originalLine,
          originalColumn: A.originalColumn,
          name: x
        };
        this.__generatedMappings.push(P), typeof P.originalLine == "number" && this.__originalMappings.push(P);
      }
    u(this.__generatedMappings, n.compareByGeneratedPositionsDeflated), u(this.__originalMappings, n.compareByOriginalPositions);
  }, Hs.IndexedSourceMapConsumer = p, Hs;
}
var ff = {}, d0;
function ES() {
  if (d0) return ff;
  d0 = 1;
  var n = Dy().SourceMapGenerator, r = io(), s = /(\r?\n)/, a = 10, u = "$$$isSourceNode$$$";
  function c(f, m, p, _, g) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = m ?? null, this.source = p ?? null, this.name = g ?? null, this[u] = !0, _ != null && this.add(_);
  }
  return c.fromStringWithSourceMap = function(m, p, _) {
    var g = new c(), E = m.split(s), y = 0, b = function() {
      var x = l(), P = l() || "";
      return x + P;
      function l() {
        return y < E.length ? E[y++] : void 0;
      }
    }, h = 1, C = 0, A = null;
    return p.eachMapping(function(x) {
      if (A !== null)
        if (h < x.generatedLine)
          M(A, b()), h++, C = 0;
        else {
          var P = E[y] || "", l = P.substr(0, x.generatedColumn - C);
          E[y] = P.substr(x.generatedColumn - C), C = x.generatedColumn, M(A, l), A = x;
          return;
        }
      for (; h < x.generatedLine; )
        g.add(b()), h++;
      if (C < x.generatedColumn) {
        var P = E[y] || "";
        g.add(P.substr(0, x.generatedColumn)), E[y] = P.substr(x.generatedColumn), C = x.generatedColumn;
      }
      A = x;
    }, this), y < E.length && (A && M(A, b()), g.add(E.splice(y).join(""))), p.sources.forEach(function(x) {
      var P = p.sourceContentFor(x);
      P != null && (_ != null && (x = r.join(_, x)), g.setSourceContent(x, P));
    }), g;
    function M(x, P) {
      if (x === null || x.source === void 0)
        g.add(P);
      else {
        var l = _ ? r.join(_, x.source) : x.source;
        g.add(new c(
          x.originalLine,
          x.originalColumn,
          l,
          P,
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
      for (var M = 0, x = C.length; M < x; M++)
        C.charCodeAt(M) === a ? (p.line++, p.column = 0, M + 1 === x ? (E = null, g = !1) : g && _.addMapping({
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
  }, ff.SourceNode = c, ff;
}
var f0;
function CS() {
  return f0 || (f0 = 1, Us.SourceMapGenerator = Dy().SourceMapGenerator, Us.SourceMapConsumer = wS().SourceMapConsumer, Us.SourceNode = ES().SourceNode), Us;
}
var h0;
function kS() {
  return h0 || (h0 = 1, (function(n, r) {
    r.__esModule = !0;
    var s = on(), a = void 0;
    try {
      var u = CS();
      a = u.SourceNode;
    } catch {
    }
    a || (a = function(m, p, _, g) {
      this.src = "", g && this.add(g);
    }, a.prototype = {
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
        return new a(p.start.line, p.start.column, this.srcFile);
      },
      wrap: function(p) {
        var _ = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return p instanceof a ? p : (p = c(p, this, _), new a(_.start.line, _.start.column, this.srcFile, p));
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
var p0;
function AS() {
  return p0 || (p0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var a = Yf(), u = Hn(), c = s(u), f = on(), m = kS(), p = s(m);
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
        var b = a.COMPILER_REVISION, h = a.REVISION_CHANGES[b];
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
        var M = b.opcodes, x = void 0, P = void 0, l = void 0, S = void 0;
        for (l = 0, S = M.length; l < S; l++)
          x = M[l], this.source.currentLocation = x.loc, P = P || x.loc, this[x.opcode].apply(this, x.args);
        if (this.source.currentLocation = P, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
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
        var O = this.context, L = O.programs, j = O.decorators;
        for (l = 0, S = L.length; l < S; l++)
          L[l] && (k[l] = L[l], j[l] && (k[l + "_d"] = j[l], k.useDecorators = !0));
        return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.useBlockParams && (k.useBlockParams = !0), this.options.compat && (k.compat = !0), A ? k.compilerOptions = this.options : (k.compiler = JSON.stringify(k.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, k = this.objectLiteral(k), h.srcName ? (k = k.toStringWithSourceMap({ file: h.destName }), k.map = k.map && k.map.toString()) : k = k.toString()), k;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new p.default(this.options.srcName), this.decorators = new p.default(this.options.srcName);
      },
      createFunctionContext: function(b) {
        var h = this, C = "", A = this.stackVars.concat(this.registers.list);
        A.length > 0 && (C += ", " + A.join(", "));
        var M = 0;
        Object.keys(this.aliases).forEach(function(l) {
          var S = h.aliases[l];
          S.children && S.referenceCount > 1 && (C += ", alias" + ++M + "=" + l, S.children[0] = "alias" + M);
        }), this.lookupPropertyFunctionIsUsed && (C += ", " + this.lookupPropertyFunctionVarDeclaration());
        var x = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths");
        var P = this.mergeSource(C);
        return b ? (x.push(P), Function.apply(this, x)) : this.source.wrap(["function(", x.join(","), `) {
  `, P, "}"]);
      },
      mergeSource: function(b) {
        var h = this.environment.isSimple, C = !this.forceBuffer, A = void 0, M = void 0, x = void 0, P = void 0;
        return this.source.each(function(l) {
          l.appendToBuffer ? (x ? l.prepend("  + ") : x = l, P = l) : (x && (M ? x.prepend("buffer += ") : A = !0, P.add(";"), x = P = void 0), M = !0, h || (C = !1));
        }), C ? x ? (x.prepend("return "), P.add(";")) : M || this.source.push('return "";') : (b += ", buffer = " + (A ? "" : this.initializeBuffer()), x ? (x.prepend("return buffer + "), P.add(";")) : this.source.push("return buffer;")), b && this.source.prepend("var " + b.substring(2) + (A ? "" : `;
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
        var M = 0;
        !A && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(b[M++])) : this.pushContext(), this.resolvePath("context", b, M, h, C);
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
      resolvePath: function(b, h, C, A, M) {
        var x = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(E(this.options.strict && M, this, h, C, b));
          return;
        }
        for (var P = h.length; C < P; C++)
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
        var A = this.popStack(), M = this.setupHelper(b, h), x = [];
        C && x.push(M.name), x.push(A), this.options.strict || x.push(this.aliasable("container.hooks.helperMissing"));
        var P = ["(", this.itemsSeparatedBy(x, "||"), ")"], l = this.source.functionCall(P, "call", M.callParams);
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
        var A = this.setupHelper(0, b, h), M = this.lastHelper = this.nameLookup("helpers", b, "helper"), x = ["(", "(helper = ", M, " || ", C, ")"];
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
        var A = [], M = this.setupParams(h, 1, A);
        b && (h = this.popStack(), delete M.name), C && (M.indent = JSON.stringify(C)), M.helpers = "helpers", M.partials = "partials", M.decorators = "container.decorators", b ? A.unshift(h) : A.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (M.depths = "depths"), M = this.objectLiteral(M), A.push(M), this.push(this.source.functionCall("container.invokePartial", "", A));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(b) {
        var h = this.popStack(), C = void 0, A = void 0, M = void 0;
        this.trackIds && (M = this.popStack()), this.stringParams && (A = this.popStack(), C = this.popStack());
        var x = this.hash;
        C && (x.contexts[b] = C), A && (x.types[b] = A), M && (x.ids[b] = M), x.values[b] = h;
      },
      pushId: function(b, h, C) {
        b === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (C ? " + " + JSON.stringify("." + C) : "")) : b === "PathExpression" ? this.pushString(h) : b === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: g,
      compileChildren: function(b, h) {
        for (var C = b.children, A = void 0, M = void 0, x = 0, P = C.length; x < P; x++) {
          A = C[x], M = new this.compiler();
          var l = this.matchExistingProgram(A);
          if (l == null) {
            this.context.programs.push("");
            var S = this.context.programs.length;
            A.index = S, A.name = "program" + S, this.context.programs[S] = M.compile(A, h, this.context, !this.precompile), this.context.decorators[S] = M.decorators, this.context.environments[S] = A, this.useDepths = this.useDepths || M.useDepths, this.useBlockParams = this.useBlockParams || M.useBlockParams, A.useDepths = this.useDepths, A.useBlockParams = this.useBlockParams;
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
        var h = ["("], C = void 0, A = void 0, M = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var x = this.popStack(!0);
        if (x instanceof _)
          C = [x.value], h = ["(", C], M = !0;
        else {
          A = !0;
          var P = this.incrStack();
          h = ["((", this.push(P), " = ", x, ")"], C = this.topStack();
        }
        var l = b.call(this, C);
        M || this.popStack(), A && this.stackSlot--, this.push(h.concat(l, ")"));
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
            var M = this.incrStack();
            this.pushSource([M, " = ", A, ";"]), this.compileStack.push(M);
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
        var A = [], M = this.setupHelperArgs(h, b, A, C), x = this.nameLookup("helpers", h, "helper"), P = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: A,
          paramsInit: M,
          name: x,
          callParams: [P].concat(A)
        };
      },
      setupParams: function(b, h, C) {
        var A = {}, M = [], x = [], P = [], l = !C, S = void 0;
        l && (C = []), A.name = this.quotedString(b), A.hash = this.popStack(), this.trackIds && (A.hashIds = this.popStack()), this.stringParams && (A.hashTypes = this.popStack(), A.hashContexts = this.popStack());
        var w = this.popStack(), k = this.popStack();
        (k || w) && (A.fn = k || "container.noop", A.inverse = w || "container.noop");
        for (var O = h; O--; )
          S = this.popStack(), C[O] = S, this.trackIds && (P[O] = this.popStack()), this.stringParams && (x[O] = this.popStack(), M[O] = this.popStack());
        return l && (A.args = this.source.generateArray(C)), this.trackIds && (A.ids = this.source.generateArray(P)), this.stringParams && (A.types = this.source.generateArray(x), A.contexts = this.source.generateArray(M)), this.options.data && (A.data = "data"), this.useBlockParams && (A.blockParams = "blockParams"), A;
      },
      setupHelperArgs: function(b, h, C, A) {
        var M = this.setupParams(b, h, C);
        return M.loc = JSON.stringify(this.source.currentLocation), M = this.objectLiteral(M), A ? (this.useRegister("options"), C.push("options"), ["options=", M]) : C ? (C.push(M), "") : M;
      }
    }, (function() {
      for (var y = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = g.RESERVED_WORDS = {}, h = 0, C = y.length; h < C; h++)
        b[y[h]] = !0;
    })(), g.isValidJavaScriptVariableName = function(y) {
      return !g.RESERVED_WORDS[y] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(y);
    };
    function E(y, b, h, C, A) {
      var M = b.popStack(), x = h.length;
      for (y && x--; C < x; C++)
        M = b.nameLookup(M, h[C], A);
      return y ? [b.aliasable("container.strict"), "(", M, ", ", b.quotedString(h[C]), ", ", JSON.stringify(b.source.currentLocation), " )"] : M;
    }
    r.default = g, n.exports = r.default;
  })(Fu, Fu.exports)), Fu.exports;
}
var m0;
function TS() {
  return m0 || (m0 = 1, (function(n, r) {
    r.__esModule = !0;
    function s(x) {
      return x && x.__esModule ? x : { default: x };
    }
    var a = fS(), u = s(a), c = Oy(), f = s(c), m = gS(), p = vS(), _ = AS(), g = s(_), E = My(), y = s(E), b = Ny(), h = s(b), C = u.default.create;
    function A() {
      var x = C();
      return x.compile = function(P, l) {
        return p.compile(P, l, x);
      }, x.precompile = function(P, l) {
        return p.precompile(P, l, x);
      }, x.AST = f.default, x.Compiler = p.Compiler, x.JavaScriptCompiler = g.default, x.Parser = m.parser, x.parse = m.parse, x.parseWithoutProcessing = m.parseWithoutProcessing, x;
    }
    var M = A();
    M.create = A, h.default(M), M.Visitor = y.default, M.default = M, r.default = M, n.exports = r.default;
  })(Tu, Tu.exports)), Tu.exports;
}
var _n = TS();
const Pe = SillyTavern.getContext();
new Q0("dumb", {}).getSettings();
async function Ly({
  profileId: n,
  userPrompt: r,
  buildPromptOptions: s,
  session: a,
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
  const E = g.api ? Pe.CONNECT_API_MAP[g.api].selected : void 0;
  if (!E)
    throw new Error(`Could not determine API for profile "${g.name}".`);
  const y = {};
  y.user = "{{user}}", y.char = "{{char}}", y.persona = "{{persona}}", y.blackListedEntries = a.blackListedEntries;
  const b = r.trim();
  p && p.mode === "revise" ? y.userInstructions = "" : y.userInstructions = _n.compile(b, { noEscape: !0 })(y);
  {
    const x = {};
    Object.entries(u).filter(
      ([P, l]) => l.length > 0 && a.selectedWorldNames.includes(P) && l.some((S) => !S?.disable)
    ).forEach(([P, l]) => {
      let S = l.filter((k) => !k?.disable);
      const w = a.selectedEntryUids?.[P];
      if (w && w.length > 0) {
        const k = new Set(w);
        S = S.filter((O) => k.has(O.uid));
      }
      S.length > 0 && (x[P] = S);
    }), y.currentLorebooks = x;
  }
  {
    const x = {};
    Object.entries(a.suggestedEntries).filter(([P, l]) => l.length > 0).forEach(([P, l]) => {
      x[P] = l.filter(
        (S) => !(P === p?.worldName && S.uid === p.entry.uid && S.comment === p.entry.comment)
      );
    }), y.suggestedLorebooks = x;
  }
  const h = [];
  {
    for (const x of f) {
      if (x.promptName === "chatHistory") {
        h.push(...(await oy(E, s)).result);
        continue;
      }
      const P = c[x.promptName];
      if (!P)
        continue;
      const l = {
        role: x.role,
        content: _n.compile(P.content, { noEscape: !0 })(y)
      };
      l.content = Pe.substituteParams(l.content), l.content && h.push(l);
    }
    p && (p.mode === "continue" ? h.push({
      role: "assistant",
      content: K8(p.worldName, p.entry)
    }) : p.mode === "revise" && (h.push({
      role: "assistant",
      content: J8(p.worldName, p.entry)
    }), b && h.push({
      role: "user",
      content: b
    })));
  }
  const C = await Pe.ConnectionManagerRequestService.sendRequest(
    n,
    h,
    m
  ), A = h.find((x) => x.role === "assistant");
  if (!C.content)
    return {};
  let M = ky(C.content, {
    // Only merge with previous content if we are in 'continue' mode.
    previousContent: p && p.mode === "continue" ? A?.content : void 0
  });
  return Object.keys(M).length === 0 ? {} : (Object.entries(M).forEach(([x, P]) => {
    u[x] && P.forEach((l) => {
      const S = u[x]?.find((w) => w.uid === l.uid);
      S && (l.key.length === 0 && (l.key = S.key), l.comment || (l.comment = S.comment)), (l.comment === null || l.comment === void 0) && (l.comment = "");
    });
  }), M = p ? { [p.worldName]: [M[p.worldName][0]] } : M, M);
}
function xS(n, r, s) {
  s[r] || (s[r] = []);
  const a = s[r], u = a.findIndex((m) => m.uid === n.uid);
  let c;
  const f = u !== -1;
  if (f)
    c = a[u];
  else {
    const m = { entries: {} };
    a.forEach((g) => m.entries[g.uid] = g);
    const p = Hf(r, m);
    if (!p)
      throw new Error(`Failed to create a new entry structure in world "${r}"`);
    const _ = a.length > 0 ? a[a.length - 1] : void 0;
    if (_) {
      const g = p.uid;
      Object.assign(p, _), p.uid = g;
    }
    c = p, a.push(c);
  }
  return c.key = n.key, c.content = n.content, c.comment = n.comment, { modifiedEntry: c, status: f ? "updated" : "added" };
}
function NS() {
  const n = Pe.extensionSettings?.connectionManager?.profiles ?? [];
  return n.map((r) => ({
    value: r.name ?? r.id,
    valueProvider: (s) => n.find((a) => a.name?.includes(s))?.name
  }));
}
const Oi = "SillyTavern-WorldInfo-Recommender", OS = "0.3.0", MS = "F_1.5", RS = {
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
], ut = {
  stDescription: q3,
  currentLorebooks: Z3,
  blackListedEntries: G3,
  suggestedLorebooks: V3,
  responseRules: $3,
  taskDescription: Y3,
  reviseJsonPrompt: F3,
  reviseXmlPrompt: X3,
  reviseTaskDescription: Q3,
  reviseGlobalStateUpdate: W3,
  reviseGlobalStateUpdateAddedModified: K3,
  reviseGlobalStateUpdateRemoved: J3
}, Ff = {
  version: OS,
  formatVersion: MS,
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
      content: ut.stDescription,
      isDefault: !0
    },
    currentLorebooks: {
      label: "Current Lorebooks",
      content: ut.currentLorebooks,
      isDefault: !0
    },
    blackListedEntries: {
      label: "Blacklisted Entries",
      content: ut.blackListedEntries,
      isDefault: !0
    },
    suggestedLorebooks: {
      label: "Suggested Lorebooks",
      content: ut.suggestedLorebooks,
      isDefault: !0
    },
    responseRules: {
      label: "Response Rules",
      content: ut.responseRules,
      isDefault: !0
    },
    taskDescription: {
      label: "Task Description",
      content: ut.taskDescription,
      isDefault: !0
    },
    reviseJsonPrompt: {
      content: ut.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: ut.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: ut.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    },
    reviseGlobalStateUpdate: {
      content: ut.reviseGlobalStateUpdate,
      isDefault: !0,
      label: "Revise Global State Update (Wrapper)"
    },
    reviseGlobalStateUpdateAddedModified: {
      content: ut.reviseGlobalStateUpdateAddedModified,
      isDefault: !0,
      label: "Revise Global State (Added/Modified)"
    },
    reviseGlobalStateUpdateRemoved: {
      content: ut.reviseGlobalStateUpdateRemoved,
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
function g0(n) {
  const s = n.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let a = !1;
  return s.map((u, c) => {
    const f = u.replace(/^\d+/, "");
    if (f) {
      const m = a ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return a || (a = !0), m;
    }
    return "";
  }).join("");
}
const It = new Q0(RS.EXTENSION, Ff);
async function jS() {
  return new Promise((n, r) => {
    It.initializeSettings({
      strategy: [
        {
          from: "F_1.0",
          to: "F_1.1",
          action(s) {
            const a = {
              ...Ff,
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
{{userInstructions}}` ? (a.prompts.taskDescription.content = ut.taskDescription, a.prompts.taskDescription.isDefault = !0) : a.prompts.taskDescription.isDefault = !1, a;
          }
        },
        {
          from: "F_1.2",
          to: "F_1.3",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.3", a.defaultPromptEngineeringMode = "native", a.prompts || (a.prompts = {}), a.prompts.reviseJsonPrompt = {
              content: ut.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, a.prompts.reviseXmlPrompt = {
              content: ut.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, a.prompts.reviseTaskDescription = {
              content: ut.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, s.prompts.currentLorebooks.isDefault && (a.prompts.currentLorebooks.content = ut.currentLorebooks, a.prompts.currentLorebooks.isDefault = !0), s.prompts.blackListedEntries.isDefault && (a.prompts.blackListedEntries.content = ut.blackListedEntries, a.prompts.blackListedEntries.isDefault = !0), s.prompts.suggestedLorebooks.isDefault && (a.prompts.suggestedLorebooks.content = ut.suggestedLorebooks, a.prompts.suggestedLorebooks.isDefault = !0), a;
          }
        },
        {
          from: "F_1.3",
          to: "F_1.4",
          action(s) {
            const a = { ...s };
            return a.formatVersion = "F_1.4", a.prompts || (a.prompts = {}), a.prompts.reviseGlobalStateUpdate = {
              content: ut.reviseGlobalStateUpdate,
              isDefault: !0,
              label: "Revise Global State Update (Wrapper)"
            }, a.prompts.reviseGlobalStateUpdateAddedModified = {
              content: ut.reviseGlobalStateUpdateAddedModified,
              isDefault: !0,
              label: "Revise Global State (Added/Modified)"
            }, a.prompts.reviseGlobalStateUpdateRemoved = {
              content: ut.reviseGlobalStateUpdateRemoved,
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
      console.error(`[${Oi}] Error initializing settings:`, s), ke("error", `[${Oi}] Failed to initialize settings: ${s.message}`), Pe.Popup.show.confirm(
        `[${Oi}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((a) => {
        a && (It.resetSettings(), ke("success", `[${Oi}] Settings reset. Reloading may be required.`), n());
      });
    });
  });
}
const De = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = re.useMemo(() => {
    const c = [];
    return s || c.push("menu_button", "interactable"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("button", { className: u, ...a, children: n });
}, zy = ({ label: n, className: r, overrideDefaults: s = !1, type: a = "text", ...u }) => {
  const c = re.useMemo(() => {
    const f = [];
    return s || (a === "text" || a === "number" || a === "password" || a === "email" || a === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [s, r, a]);
  if (a === "checkbox") {
    const f = s ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: f, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...u }),
      n && /* @__PURE__ */ N.jsx("span", { children: n })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: a, className: c, ...u });
}, bl = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = re.useMemo(() => {
    const c = [];
    return s || c.push("text_pole"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("select", { className: u, ...a, children: n });
}, br = ({ children: n, className: r, overrideDefaults: s = !1, ...a }) => {
  const u = re.useMemo(() => {
    const c = [];
    return s || c.push("text_pole", "textarea_compact"), c.push(r), c.filter(Boolean).join(" ");
  }, [s, r]);
  return /* @__PURE__ */ N.jsx("textarea", { className: u, ...a, children: n });
};
var DS = X0(), Pt = /* @__PURE__ */ ((n) => (n[n.TEXT = 1] = "TEXT", n[n.CONFIRM = 2] = "CONFIRM", n[n.INPUT = 3] = "INPUT", n[n.DISPLAY = 4] = "DISPLAY", n))(Pt || {}), Xr = /* @__PURE__ */ ((n) => (n[n.AFFIRMATIVE = 1] = "AFFIRMATIVE", n[n.NEGATIVE = 0] = "NEGATIVE", n[n.CANCELLED = null] = "CANCELLED", n))(Xr || {});
const LS = SillyTavern.getContext(), Jn = ({
  content: n,
  type: r,
  inputValue: s = "",
  options: a = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var f;
  const m = re.useRef(null), p = re.useRef(null), [_, g] = re.useState(!1), [E, y] = re.useState(null), b = re.useRef(LS.uuidv4()), h = re.useRef({
    id: b.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  re.useEffect(() => {
    const x = m.current;
    if (!x) return;
    const P = (l) => {
      l.preventDefault(), u || C(Xr.CANCELLED);
    };
    return x.addEventListener("cancel", P), h.current.dlg = x, h.current.mainInput = p.current, Si.util.popups.push(h.current), x.showModal || (x.classList.add("poly_dialog"), Xg.registerDialog(x), new ResizeObserver((l) => {
      for (const S of l)
        Xg.reposition(S.target);
    }).observe(x)), x.showModal(), Hd(), () => {
      Fg(Si.util.popups, h.current), Hd(), x.removeEventListener("cancel", P);
    };
  }, []);
  const C = async (x) => {
    var P, l;
    let S = x;
    if (r === Pt.INPUT && (x >= Xr.AFFIRMATIVE ? S = (P = p.current) == null ? void 0 : P.value : x === Xr.NEGATIVE ? S = !1 : x === Xr.CANCELLED ? S = null : S = !1), (l = a.customInputs) != null && l.length) {
      const k = new Map(
        a.customInputs.map((O) => {
          var L;
          const j = (L = m.current) == null ? void 0 : L.querySelector(`#${O.id}`);
          return [j.id, j.checked];
        })
      );
      h.current.inputResults = k;
    }
    if (h.current.result = x, h.current.value = S, a.onClosing && !await a.onClosing(h.current)) {
      g(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    g(!1), Si.util.lastResult = {
      value: S,
      result: x,
      inputResults: h.current.inputResults
    };
    const w = m.current;
    w && (w.setAttribute("closing", ""), Hd(), J1(w, async () => {
      var k;
      if (w.close(), a.onClose && await a.onClose(h.current), Fg(Si.util.popups, h.current), Si.util.popups.length > 0) {
        const O = (k = document.activeElement) == null ? void 0 : k.closest(".popup"), L = O?.getAttribute("data-id"), j = Si.util.popups.find((z) => z.id === L);
        j && j.lastFocus && j.lastFocus.focus();
      }
      c(S);
    }));
  }, A = (x) => {
    x.target instanceof HTMLElement && x.target !== m.current && (y(x.target), h.current.lastFocus = x.target);
  }, M = async (x) => {
  };
  return DS.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const x = ["popup"];
          return a.wide && x.push("wide_dialogue_popup"), a.wider && x.push("wider_dialogue_popup"), a.large && x.push("large_dialogue_popup"), a.transparent && x.push("transparent_dialogue_popup"), a.allowHorizontalScrolling && x.push("horizontal_scrolling_dialogue_popup"), a.allowVerticalScrolling && x.push("vertical_scrolling_dialogue_popup"), a.animation && x.push(`popup--animation-${a.animation}`), x.join(" ");
        })(),
        "data-id": b.current,
        onKeyDown: M,
        onFocus: A,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: n }),
          r === Pt.INPUT && /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: p,
              className: "popup-input text_pole result-control auto-select",
              rows: a.rows ?? 1,
              defaultValue: s,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          a.customInputs && /* @__PURE__ */ N.jsx("div", { className: "popup-inputs", children: a.customInputs.map((x) => /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: x.id, children: [
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
            (f = a.customButtons) == null ? void 0 : f.map((x, P) => {
              const l = typeof x == "string" ? { text: x, result: P + 2 } : x;
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
            r !== Pt.DISPLAY && a.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => C(Xr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof a.okButton == "string" ? a.okButton : "OK"
              }
            ),
            r !== Pt.DISPLAY && a.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => C(Xr.NEGATIVE),
                "data-result": "0",
                children: typeof a.cancelButton == "string" ? a.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Pt.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => C(Xr.CANCELLED),
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
}, yr = SillyTavern.getContext(), Py = ({
  initialSelectedProfileId: n,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: s = "Select a Connection Profile",
  onChange: a,
  onCreate: u,
  onUpdate: c,
  onDelete: f
}) => {
  const [m, p] = re.useState(n ?? ""), [_, g] = re.useState(Date.now()), { isEnabled: E, profiles: y, connectApiMap: b } = re.useMemo(() => {
    var A, M;
    return (A = yr.extensionSettings.disabledExtensions) != null && A.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((M = yr.extensionSettings.connectionManager) == null ? void 0 : M.profiles) ?? [],
      connectApiMap: yr.CONNECT_API_MAP
    };
  }, [_]);
  re.useEffect(() => {
    if (!E) return;
    const A = (P) => {
      qs(P, r, b) && (g(Date.now()), u?.(P));
    }, M = (P, l) => {
      const S = qs(P, r, b), w = qs(l, r, b);
      (S || w) && g(Date.now()), c?.(P, l), m === P.id && !w && (p(""), a?.(void 0));
    }, x = (P) => {
      qs(P, r, b) && (g(Date.now()), f?.(P), m === P.id && (p(""), a?.(void 0)));
    };
    return yr.eventSource.on("CONNECTION_PROFILE_CREATED", A), yr.eventSource.on("CONNECTION_PROFILE_UPDATED", M), yr.eventSource.on("CONNECTION_PROFILE_DELETED", x), () => {
      yr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", A), yr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", M), yr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", x);
    };
  }, [E, m, r, b, a, u, c, f]);
  const h = re.useMemo(() => {
    if (!E) return [];
    const A = y.filter((x) => qs(x, r, b)), M = {};
    for (const [x, P] of Object.entries(r))
      M[x] = { label: P, profiles: [] };
    for (const x of A) {
      const P = b[x.api];
      M[P.selected] && M[P.selected].profiles.push(x);
    }
    for (const x of Object.values(M))
      x.profiles.sort((P, l) => (P.name ?? "").localeCompare(l.name ?? ""));
    return Object.values(M).filter((x) => x.profiles.length > 0);
  }, [E, y, r, b]), C = re.useCallback(
    (A) => {
      const M = A.target.value;
      p(M);
      const x = y.find((P) => P.id === M);
      a?.(x);
    },
    [y, a]
  );
  return E ? /* @__PURE__ */ N.jsxs(bl, { value: m, onChange: C, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: s }),
    h.map((A) => /* @__PURE__ */ N.jsx("optgroup", { label: A.label, children: A.profiles.map((M) => /* @__PURE__ */ N.jsx("option", { value: M.id, children: M.name }, M.id)) }, A.label))
  ] }) : /* @__PURE__ */ N.jsx(bl, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, zS = fl.memo(
  ({ item: n, showToggleButton: r, showDeleteButton: s, showSelectInput: a, onToggle: u, onDelete: c, onSelectChange: f }) => {
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
    }, M = { cursor: "pointer", flexShrink: 0 }, x = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
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
      a && y && b && /* @__PURE__ */ N.jsx(
        bl,
        {
          value: C,
          onChange: (P) => f(m, P.target.value),
          disabled: !_,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((P) => /* @__PURE__ */ N.jsx("option", { value: P.value, children: P.label }, P.value))
        }
      ),
      a && (!y || !b) && /* @__PURE__ */ N.jsx("span", { style: x }),
      r && E && /* @__PURE__ */ N.jsx(
        De,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${_ ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...M,
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
        De,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...M,
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
), Iy = ({
  items: n,
  onItemsChange: r,
  showToggleButton: s = !1,
  showDeleteButton: a = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const f = re.useRef(null), m = re.useRef(null);
  re.useEffect(() => (f.current && (m.current = Re.create(f.current, {
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
    zS,
    {
      item: E,
      showToggleButton: s,
      showDeleteButton: a,
      showSelectInput: u,
      onToggle: p,
      onDelete: _,
      onSelectChange: g
    },
    E.id
  )) });
}, By = ({
  items: n,
  value: r,
  onChange: s,
  placeholder: a = "Select items...",
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
  const [h, C] = re.useState(!1), [A, M] = re.useState(""), x = re.useRef(null);
  re.useEffect(() => {
    const k = (O) => {
      x.current && !x.current.contains(O.target) && C(!1);
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, []), re.useEffect(() => {
    h || M("");
  }, [h]);
  const P = re.useMemo(() => {
    if (!p) return null;
    const k = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...E
    };
    return new zi(n, k);
  }, [n, p, E]), l = re.useMemo(() => !p || !A.trim() || !P ? n : P.search(A.trim()).map((k) => k.item), [n, A, p, P]), S = async (k) => {
    let O;
    c ? O = r.includes(k) ? r.filter((L) => L !== k) : [...r, k] : O = r.includes(k) ? [] : [k], !(m && !await Promise.resolve(m(r, O))) && (s(O), u && C(!1));
  }, w = re.useMemo(() => {
    var k;
    return r.length === 0 ? a : r.length === 1 ? ((k = n.find((O) => O.value === r[0])) == null ? void 0 : k.label) ?? r[0] : `${r.length} items selected`;
  }, [r, n, a]);
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
                    zy,
                    {
                      type: "text",
                      placeholder: _,
                      value: A,
                      onChange: (k) => M(k.target.value),
                      autoFocus: !0,
                      className: y
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: l.length > 0 ? l.map((k) => /* @__PURE__ */ N.jsx(
                PS,
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
}, PS = fl.memo(({ item: n, isSelected: r, onClick: s }) => {
  const [a, u] = re.useState(!1);
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
}), hf = SillyTavern.getContext(), Nf = ({
  value: n,
  items: r,
  readOnlyValues: s = [],
  label: a,
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
  const b = re.useMemo(() => r.find((x) => x.value === n), [r, n]), h = re.useCallback((x) => x ? s.includes(x) : !1, [s]), C = async () => {
    const x = await hf.Popup.show.input(
      `Create a new ${a}`,
      `Please enter a name for the new ${a}:`,
      ""
    );
    if (!x || x.trim() === "") return;
    const P = x.trim();
    if (r.some((S) => S.value === P)) {
      await ke("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (_) {
      const S = await Promise.resolve(_(P));
      if (!S.confirmed) return;
      S.value && (typeof S.value == "string" ? l = { value: S.value, label: S.value } : l = S.value);
    }
    c([...r, l]), u(l.value, n);
  }, A = async () => {
    if (!b) {
      await ke("warning", `Please select a ${a} to rename.`);
      return;
    }
    if (h(b.value)) {
      await ke("warning", `This ${a} cannot be renamed as it is read-only.`);
      return;
    }
    const x = await hf.Popup.show.input(
      `Rename ${a}`,
      `Please enter a new name for "${b.label}":`,
      b.label
    );
    if (!x || x.trim() === "" || x.trim() === b.value) return;
    const P = x.trim();
    if (r.some((w) => w.value === P)) {
      await ke("warning", `A ${a} with this name already exists.`);
      return;
    }
    let l = { value: P, label: P };
    if (g) {
      const w = await Promise.resolve(g(b.value, P));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? l = { value: w.value, label: w.value } : l = w.value);
    }
    const S = r.map((w) => w.value === b.value ? l : w);
    c(S), u(l.value, n);
  }, M = async () => {
    var x;
    if (!b) {
      await ke("warning", `Please select a ${a} to delete.`);
      return;
    }
    if (h(b.value)) {
      await ke("warning", `This ${a} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await hf.Popup.show.confirm(
      `Delete ${a}`,
      `Are you sure you want to delete "${b.label}"?`
    ) || E && !await Promise.resolve(E(b.value)))
      return;
    const P = r.findIndex((w) => w.value === b.value), l = r.filter((w) => w.value !== b.value);
    c(l);
    let S;
    if (l.length > 0) {
      const w = Math.min(P, l.length - 1);
      S = (x = l[w]) == null ? void 0 : x.value;
    }
    u(S, n);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(bl, { value: n ?? "", onChange: (x) => u(x.target.value, n), children: r.map((x) => /* @__PURE__ */ N.jsx("option", { value: x.value, children: x.label }, x.value)) }),
    f && /* @__PURE__ */ N.jsx(
      De,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${a}`,
        onClick: C,
        "data-i18n": `[title]Create a new ${a}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      De,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${a}`,
        onClick: A,
        disabled: !b,
        "data-i18n": `[title]Rename selected ${a}`
      }
    ),
    p && /* @__PURE__ */ N.jsx(
      De,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${a}`,
        onClick: M,
        disabled: !b,
        "data-i18n": `[title]Delete selected ${a}`
      }
    ),
    y?.map((x) => /* @__PURE__ */ N.jsx(
      De,
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
}, Uy = () => {
  const [, n] = re.useState(0);
  return re.useCallback(() => {
    n((s) => s + 1);
  }, []);
}, v0 = "en", Hy = {
  en: "English",
  "zh-CN": "中文"
}, IS = Mi.map((n) => ({
  value: n,
  label: Hy[n]
})), pf = {
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
    languageLabel: "界面语言",
    languageDescription: "选择扩展界面显示的语言。",
    languageToggleButtonLabel: (n) => `界面语言：${n}`,
    languageToggleButtonTooltip: "切换界面语言",
    languageSwitched: (n) => `界面语言已切换为 ${n}。`,
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
}, y0 = (n) => Mi.includes(n), mf = SillyTavern.getContext(), BS = () => {
  const n = Uy(), r = It.getSettings();
  if (console.log("[WorldInfoRecommender] Settings loaded:", {
    hasSettings: !!r,
    language: r?.language,
    hasPrompts: !!r?.prompts
  }), !r)
    return /* @__PURE__ */ N.jsx("div", { style: { padding: "20px", color: "red" }, children: "Error: Settings not loaded" });
  const s = y0(r.language) ? r.language : v0, a = pf[s] ?? pf[v0], [u, c] = re.useState(Ju[0]), f = re.useCallback(
    (k) => {
      const O = It.getSettings();
      k(O), It.saveSettings(), n();
    },
    [n]
  ), m = (k) => {
    const O = k.target.value;
    if (!y0(O) || O === r.language)
      return;
    f((z) => {
      z.language = O;
    });
    const L = Hy[O], j = pf[O] ?? a;
    ke("info", j.languageSwitched(L));
  }, p = re.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((k) => ({
      value: k,
      label: k
    })),
    [r.mainContextTemplatePresets]
  ), _ = re.useMemo(
    () => Object.keys(r.prompts).map((k) => {
      const O = r.prompts[k];
      return {
        value: k,
        label: O ? `${O.label} (${k})` : k
      };
    }),
    [r.prompts]
  ), g = re.useMemo(() => {
    const k = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return k ? k.prompts.map((O) => {
      const L = r.prompts[O.promptName], j = L ? `${L.label} (${O.promptName})` : O.promptName;
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
      const L = {}, j = O.mainContextTemplatePresets;
      k.forEach((z) => {
        L[z.value] = j[z.value] ?? structuredClone(j[O.mainContextTemplatePreset] ?? j.default);
      }), O.mainContextTemplatePresets = L;
    });
  }, b = (k) => {
    f((O) => {
      const L = k.map((z) => ({
        promptName: z.id,
        enabled: z.enabled,
        role: z.selectValue ?? "user"
      })), j = {
        ...O.mainContextTemplatePresets[O.mainContextTemplatePreset],
        prompts: L
      };
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        [O.mainContextTemplatePreset]: j
      };
    });
  }, h = async () => {
    await mf.Popup.show.confirm(
      a.restoreMainContextConfirmTitle,
      a.restoreMainContextConfirmMessage
    ) && f((O) => {
      O.mainContextTemplatePresets = {
        ...O.mainContextTemplatePresets,
        default: structuredClone(Ff.mainContextTemplatePresets.default)
      }, O.mainContextTemplatePreset = "default";
    });
  }, C = (k) => {
    f((O) => {
      const L = {}, j = O.prompts, z = Object.keys(j), H = k.map((Z) => Z.value);
      H.forEach((Z) => {
        L[Z] = j[Z] ?? { content: "", isDefault: !1, label: Z };
      }), O.prompts = L;
      const Y = z.filter((Z) => !H.includes(Z));
      if (Y.length > 0) {
        const Z = Object.fromEntries(
          Object.entries(O.mainContextTemplatePresets).map(([Q, R]) => [
            Q,
            {
              ...R,
              prompts: R.prompts.filter((B) => !Y.includes(B.promptName))
            }
          ])
        );
        O.mainContextTemplatePresets = Z;
      }
    });
  }, A = (k) => {
    const O = g0(k);
    return O ? r.prompts[O] ? (ke("error", `Prompt name already exists: ${O}`), { confirmed: !1 }) : (f((L) => {
      L.prompts = {
        ...L.prompts,
        [O]: {
          content: L.prompts[u]?.content ?? "",
          isDefault: !1,
          label: k
        }
      }, L.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(L.mainContextTemplatePresets).map(([j, z]) => [
          j,
          {
            ...z,
            prompts: [...z.prompts, { enabled: !0, promptName: O, role: "user" }]
          }
        ])
      );
    }), c(O), { confirmed: !0, value: O }) : (ke("error", `Invalid prompt name: ${k}`), { confirmed: !1 });
  }, M = (k, O) => {
    const L = g0(O);
    return L ? r.prompts[L] ? (ke("error", `Prompt name already exists: ${L}`), { confirmed: !1 }) : (f((j) => {
      const { [k]: z, ...H } = j.prompts;
      j.prompts = {
        ...H,
        [L]: { ...z, label: O }
      }, j.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(j.mainContextTemplatePresets).map(([Y, Z]) => [
          Y,
          {
            ...Z,
            prompts: Z.prompts.map((Q) => Q.promptName === k ? { ...Q, promptName: L } : Q)
          }
        ])
      );
    }), c(L), { confirmed: !0, value: L }) : (ke("error", `Invalid prompt name: ${O}`), { confirmed: !1 });
  }, x = (k) => {
    const O = k.target.value;
    f((L) => {
      const j = L.prompts[u];
      j && (L.prompts = {
        ...L.prompts,
        [u]: {
          ...j,
          content: O,
          isDefault: Ju.includes(u) ? ut[u] === O : !1
        }
      });
    });
  }, P = async () => {
    const k = r.prompts[u];
    if (!k) return ke("warning", a.noPromptSelectedWarning);
    await mf.Popup.show.confirm(
      a.restorePromptConfirmTitle,
      a.restorePromptConfirmMessage(k.label)
    ) && f((L) => {
      L.prompts = {
        ...L.prompts,
        [u]: {
          ...L.prompts[u],
          content: ut[u]
        }
      };
    });
  }, l = async () => {
    await mf.Popup.show.confirm(
      a.resetEverythingConfirmTitle,
      a.resetEverythingConfirmMessage
    ) && (It.resetSettings(), n(), ke("success", a.resetEverythingSuccess));
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
          children: IS.map((k) => /* @__PURE__ */ N.jsx("option", { value: k.value, children: k.label }, k.value))
        }
      ),
      /* @__PURE__ */ N.jsx("p", { className: "settings-language__description", children: a.languageDescription })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: a.mainContextTitle }),
        /* @__PURE__ */ N.jsx("div", { className: "title_restorable_actions", children: /* @__PURE__ */ N.jsx(
          De,
          {
            title: a.restoreMainContextTooltip,
            onClick: h,
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-undo" })
          }
        ) })
      ] }),
      /* @__PURE__ */ N.jsx(
        Nf,
        {
          label: a.mainContextTemplateLabel,
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
        Iy,
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
        /* @__PURE__ */ N.jsx("span", { children: a.promptTemplatesTitle }),
        w && /* @__PURE__ */ N.jsx(
          De,
          {
            title: a.restorePromptTooltip,
            onClick: P,
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-undo" })
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Nf,
        {
          label: a.promptLabel,
          items: _,
          value: u,
          readOnlyValues: Ju,
          onChange: (k) => c(k ?? ""),
          onItemsChange: C,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0,
          onCreate: A,
          onRename: M
        }
      ),
      /* @__PURE__ */ N.jsx(
        br,
        {
          value: S,
          onChange: x,
          placeholder: a.promptEditorPlaceholder,
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(De, { className: "danger_button", style: { width: "auto" }, onClick: l, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      /* @__PURE__ */ N.jsx("span", { children: a.resetEverythingButton })
    ] }) })
  ] });
};
var dl = { exports: {} }, US = dl.exports, _0;
function HS() {
  return _0 || (_0 = 1, (function(n) {
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
      var a = {}, u = {}, c = {}, f = r(!0), m = "vanilla", p = {
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
        return f[l] = S, this;
      }, a.getOption = function(l) {
        return f[l];
      }, a.getOptions = function() {
        return f;
      }, a.resetOptions = function() {
        f = r(!0);
      }, a.setFlavor = function(l) {
        if (!p.hasOwnProperty(l))
          throw Error(l + " flavor was not found");
        a.resetOptions();
        var S = p[l];
        m = l;
        for (var w in S)
          S.hasOwnProperty(w) && (f[w] = S[w]);
      }, a.getFlavor = function() {
        return m;
      }, a.getFlavorOptions = function(l) {
        if (p.hasOwnProperty(l))
          return p[l];
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
          var w = _(S, l);
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
      function _(l, S) {
        var w = S ? "Error in " + S + " extension->" : "Error in unnamed extension", k = {
          valid: !0,
          error: ""
        };
        a.helper.isArray(l) || (l = [l]);
        for (var O = 0; O < l.length; ++O) {
          var L = w + " sub-extension " + O + ": ", j = l[O];
          if (typeof j != "object")
            return k.valid = !1, k.error = L + "must be an object, but " + typeof j + " given", k;
          if (!a.helper.isString(j.type))
            return k.valid = !1, k.error = L + 'property "type" must be a string, but ' + typeof j.type + " given", k;
          var z = j.type = j.type.toLowerCase();
          if (z === "language" && (z = j.type = "lang"), z === "html" && (z = j.type = "output"), z !== "lang" && z !== "output" && z !== "listener")
            return k.valid = !1, k.error = L + "type " + z + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', k;
          if (z === "listener") {
            if (a.helper.isUndefined(j.listeners))
              return k.valid = !1, k.error = L + '. Extensions of type "listener" must have a property called "listeners"', k;
          } else if (a.helper.isUndefined(j.filter) && a.helper.isUndefined(j.regex))
            return k.valid = !1, k.error = L + z + ' extensions must define either a "regex" property or a "filter" method', k;
          if (j.listeners) {
            if (typeof j.listeners != "object")
              return k.valid = !1, k.error = L + '"listeners" property must be an object but ' + typeof j.listeners + " given", k;
            for (var H in j.listeners)
              if (j.listeners.hasOwnProperty(H) && typeof j.listeners[H] != "function")
                return k.valid = !1, k.error = L + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + H + " must be a function but " + typeof j.listeners[H] + " given", k;
          }
          if (j.filter) {
            if (typeof j.filter != "function")
              return k.valid = !1, k.error = L + '"filter" must be a function, but ' + typeof j.filter + " given", k;
          } else if (j.regex) {
            if (a.helper.isString(j.regex) && (j.regex = new RegExp(j.regex, "g")), !(j.regex instanceof RegExp))
              return k.valid = !1, k.error = L + '"regex" property must either be a string or a RegExp object, but ' + typeof j.regex + " given", k;
            if (a.helper.isUndefined(j.replace))
              return k.valid = !1, k.error = L + '"regex" extensions must implement a replace string or function', k;
          }
        }
        return k;
      }
      a.validateExtension = function(l) {
        var S = _(l, null);
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
          for (var k in l)
            l.hasOwnProperty(k) && S(l[k], k, l);
        else
          throw new Error("obj does not seem to be an array or an iterable object");
      }, a.helper.stdExtName = function(l) {
        return l.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
      };
      function g(l, S) {
        var w = S.charCodeAt(0);
        return "¨E" + w + "E";
      }
      a.helper.escapeCharactersCallback = g, a.helper.escapeCharacters = function(l, S, w) {
        var k = "([" + S.replace(/([\[\]\\])/g, "\\$1") + "])";
        w && (k = "\\\\" + k);
        var O = new RegExp(k, "g");
        return l = l.replace(O, g), l;
      }, a.helper.unescapeHTMLEntities = function(l) {
        return l.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
      };
      var E = function(l, S, w, k) {
        var O = k || "", L = O.indexOf("g") > -1, j = new RegExp(S + "|" + w, "g" + O.replace(/g/g, "")), z = new RegExp(S, O.replace(/g/g, "")), H = [], Y, Z, Q, R, B;
        do
          for (Y = 0; Q = j.exec(l); )
            if (z.test(Q[0]))
              Y++ || (Z = j.lastIndex, R = Z - Q[0].length);
            else if (Y && !--Y) {
              B = Q.index + Q[0].length;
              var K = {
                left: { start: R, end: Z },
                match: { start: Z, end: Q.index },
                right: { start: Q.index, end: B },
                wholeMatch: { start: R, end: B }
              };
              if (H.push(K), !L)
                return H;
            }
        while (Y && (j.lastIndex = Z));
        return H;
      };
      a.helper.matchRecursiveRegExp = function(l, S, w, k) {
        for (var O = E(l, S, w, k), L = [], j = 0; j < O.length; ++j)
          L.push([
            l.slice(O[j].wholeMatch.start, O[j].wholeMatch.end),
            l.slice(O[j].match.start, O[j].match.end),
            l.slice(O[j].left.start, O[j].left.end),
            l.slice(O[j].right.start, O[j].right.end)
          ]);
        return L;
      }, a.helper.replaceRecursiveRegExp = function(l, S, w, k, O) {
        if (!a.helper.isFunction(S)) {
          var L = S;
          S = function() {
            return L;
          };
        }
        var j = E(l, w, k, O), z = l, H = j.length;
        if (H > 0) {
          var Y = [];
          j[0].wholeMatch.start !== 0 && Y.push(l.slice(0, j[0].wholeMatch.start));
          for (var Z = 0; Z < H; ++Z)
            Y.push(
              S(
                l.slice(j[Z].wholeMatch.start, j[Z].wholeMatch.end),
                l.slice(j[Z].match.start, j[Z].match.end),
                l.slice(j[Z].left.start, j[Z].left.end),
                l.slice(j[Z].right.start, j[Z].right.end)
              )
            ), Z < H - 1 && Y.push(l.slice(j[Z].wholeMatch.end, j[Z + 1].wholeMatch.start));
          j[H - 1].wholeMatch.end < l.length && Y.push(l.slice(j[H - 1].wholeMatch.end)), z = Y.join("");
        }
        return z;
      }, a.helper.regexIndexOf = function(l, S, w) {
        if (!a.helper.isString(l))
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (!(S instanceof RegExp))
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var k = l.substring(w || 0).search(S);
        return k >= 0 ? k + (w || 0) : k;
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
            var k = Math.random();
            w = k > 0.9 ? S[2](w) : k > 0.45 ? S[1](w) : S[0](w);
          }
          return w;
        }), l;
      }, a.helper.padEnd = function(S, w, k) {
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
        var S = {}, w = [], k = [], O = {}, L = m, j = {
          parsed: {},
          raw: "",
          format: ""
        };
        z();
        function z() {
          l = l || {};
          for (var R in f)
            f.hasOwnProperty(R) && (S[R] = f[R]);
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
              console.warn("DEPRECATION WARNING: " + R + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), Y(a.extensions[R], R);
              return;
            } else if (!a.helper.isUndefined(c[R]))
              R = c[R];
            else
              throw Error('Extension "' + R + '" could not be loaded. It was either not found or is not a valid extension.');
          typeof R == "function" && (R = R()), a.helper.isArray(R) || (R = [R]);
          var K = _(R, B);
          if (!K.valid)
            throw Error(K.error);
          for (var te = 0; te < R.length; ++te) {
            switch (R[te].type) {
              case "lang":
                w.push(R[te]);
                break;
              case "output":
                k.push(R[te]);
                break;
            }
            if (R[te].hasOwnProperty("listeners"))
              for (var I in R[te].listeners)
                R[te].listeners.hasOwnProperty(I) && Z(I, R[te].listeners[I]);
          }
        }
        function Y(R, B) {
          typeof R == "function" && (R = R(new a.Converter())), a.helper.isArray(R) || (R = [R]);
          var K = _(R, B);
          if (!K.valid)
            throw Error(K.error);
          for (var te = 0; te < R.length; ++te)
            switch (R[te].type) {
              case "lang":
                w.push(R[te]);
                break;
              case "output":
                k.push(R[te]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
        }
        function Z(R, B) {
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
        this._dispatch = function(B, K, te, I) {
          if (O.hasOwnProperty(B))
            for (var $ = 0; $ < O[B].length; ++$) {
              var oe = O[B][$](B, K, this, te, I);
              oe && typeof oe < "u" && (K = oe);
            }
          return K;
        }, this.listen = function(R, B) {
          return Z(R, B), this;
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
            outputModifiers: k,
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
          }), R = a.subParser("metadata")(R, S, B), R = a.subParser("hashPreCodeTags")(R, S, B), R = a.subParser("githubCodeBlocks")(R, S, B), R = a.subParser("hashHTMLBlocks")(R, S, B), R = a.subParser("hashCodeTags")(R, S, B), R = a.subParser("stripLinkDefinitions")(R, S, B), R = a.subParser("blockGamut")(R, S, B), R = a.subParser("unhashHTMLSpans")(R, S, B), R = a.subParser("unescapeSpecialChars")(R, S, B), R = R.replace(/¨D/g, "$$"), R = R.replace(/¨T/g, "¨"), R = a.subParser("completeHTMLDocument")(R, S, B), a.helper.forEach(k, function(K) {
            R = a.subParser("runExtension")(K, R, S, B);
          }), j = B.metadata, R;
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
          var te = {
            preList: ae(K)
          };
          V(K);
          for (var I = K.childNodes, $ = "", oe = 0; oe < I.length; oe++)
            $ += a.subParser("makeMarkdown.node")(I[oe], te);
          function V(_e) {
            for (var ce = 0; ce < _e.childNodes.length; ++ce) {
              var Ee = _e.childNodes[ce];
              Ee.nodeType === 3 ? !/\S/.test(Ee.nodeValue) && !/^[ ]+$/.test(Ee.nodeValue) ? (_e.removeChild(Ee), --ce) : (Ee.nodeValue = Ee.nodeValue.split(`
`).join(" "), Ee.nodeValue = Ee.nodeValue.replace(/(\s)+/g, "$1")) : Ee.nodeType === 1 && V(Ee);
            }
          }
          function ae(_e) {
            for (var ce = _e.querySelectorAll("pre"), Ee = [], me = 0; me < ce.length; ++me)
              if (ce[me].childElementCount === 1 && ce[me].firstChild.tagName.toLowerCase() === "code") {
                var ee = ce[me].firstChild.innerHTML.trim(), le = ce[me].firstChild.getAttribute("data-language") || "";
                if (le === "")
                  for (var ge = ce[me].firstChild.className.split(" "), pe = 0; pe < ge.length; ++pe) {
                    var ve = ge[pe].match(/^language-(.+)$/);
                    if (ve !== null) {
                      le = ve[1];
                      break;
                    }
                  }
                ee = a.helper.unescapeHTMLEntities(ee), Ee.push(ee), ce[me].outerHTML = '<precode language="' + le + '" precodenum="' + me.toString() + '"></precode>';
              } else
                Ee.push(ce[me].innerHTML), ce[me].innerHTML = "", ce[me].setAttribute("prenum", me.toString());
            return Ee;
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
          if (!p.hasOwnProperty(R))
            throw Error(R + " flavor was not found");
          var B = p[R];
          L = R;
          for (var K in B)
            B.hasOwnProperty(K) && (S[K] = B[K]);
        }, this.getFlavor = function() {
          return L;
        }, this.removeExtension = function(R) {
          a.helper.isArray(R) || (R = [R]);
          for (var B = 0; B < R.length; ++B) {
            for (var K = R[B], te = 0; te < w.length; ++te)
              w[te] === K && w.splice(te, 1);
            for (var I = 0; I < k.length; ++I)
              k[I] === K && k.splice(I, 1);
          }
        }, this.getAllExtensions = function() {
          return {
            language: w,
            output: k
          };
        }, this.getMetadata = function(R) {
          return R ? j.raw : j.parsed;
        }, this.getMetadataFormat = function() {
          return j.format;
        }, this._setMetadataPair = function(R, B) {
          j.parsed[R] = B;
        }, this._setMetadataFormat = function(R) {
          j.format = R;
        }, this._setMetadataRaw = function(R) {
          j.raw = R;
        };
      }, a.subParser("anchors", function(l, S, w) {
        l = w.converter._dispatch("anchors.before", l, S, w);
        var k = function(O, L, j, z, H, Y, Z) {
          if (a.helper.isUndefined(Z) && (Z = ""), j = j.toLowerCase(), O.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            z = "";
          else if (!z)
            if (j || (j = L.toLowerCase().replace(/ ?\n/g, " ")), z = "#" + j, !a.helper.isUndefined(w.gUrls[j]))
              z = w.gUrls[j], a.helper.isUndefined(w.gTitles[j]) || (Z = w.gTitles[j]);
            else
              return O;
          z = z.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var Q = '<a href="' + z + '"';
          return Z !== "" && Z !== null && (Z = Z.replace(/"/g, "&quot;"), Z = Z.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), Q += ' title="' + Z + '"'), S.openLinksInNewWindow && !/^#/.test(z) && (Q += ' rel="noopener noreferrer" target="¨E95Eblank"'), Q += ">" + L + "</a>", Q;
        };
        return l = l.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, k), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(
          /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
          k
        ), l = l.replace(/\[([^\[\]]+)]()()()()()/g, k), S.ghMentions && (l = l.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(O, L, j, z, H) {
          if (j === "\\")
            return L + z;
          if (!a.helper.isString(S.ghMentionsLink))
            throw new Error("ghMentionsLink option must be a string");
          var Y = S.ghMentionsLink.replace(/\{u}/g, H), Z = "";
          return S.openLinksInNewWindow && (Z = ' rel="noopener noreferrer" target="¨E95Eblank"'), L + '<a href="' + Y + '"' + Z + ">" + z + "</a>";
        })), l = w.converter._dispatch("anchors.after", l, S, w), l;
      });
      var y = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, b = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, h = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, C = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, A = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, M = function(l) {
        return function(S, w, k, O, L, j, z) {
          k = k.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var H = k, Y = "", Z = "", Q = w || "", R = z || "";
          return /^www\./i.test(k) && (k = k.replace(/^www\./i, "http://www.")), l.excludeTrailingPunctuationFromURLs && j && (Y = j), l.openLinksInNewWindow && (Z = ' rel="noopener noreferrer" target="¨E95Eblank"'), Q + '<a href="' + k + '"' + Z + ">" + H + "</a>" + Y + R;
        };
      }, x = function(l, S) {
        return function(w, k, O) {
          var L = "mailto:";
          return k = k || "", O = a.subParser("unescapeSpecialChars")(O, l, S), l.encodeEmails ? (L = a.helper.encodeEmailAddress(L + O), O = a.helper.encodeEmailAddress(O)) : L = L + O, k + '<a href="' + L + '">' + O + "</a>";
        };
      };
      a.subParser("autoLinks", function(l, S, w) {
        return l = w.converter._dispatch("autoLinks.before", l, S, w), l = l.replace(h, M(S)), l = l.replace(A, x(S, w)), l = w.converter._dispatch("autoLinks.after", l, S, w), l;
      }), a.subParser("simplifiedAutoLinks", function(l, S, w) {
        return S.simplifiedAutoLink && (l = w.converter._dispatch("simplifiedAutoLinks.before", l, S, w), S.excludeTrailingPunctuationFromURLs ? l = l.replace(b, M(S)) : l = l.replace(y, M(S)), l = l.replace(C, x(S, w)), l = w.converter._dispatch("simplifiedAutoLinks.after", l, S, w)), l;
      }), a.subParser("blockGamut", function(l, S, w) {
        return l = w.converter._dispatch("blockGamut.before", l, S, w), l = a.subParser("blockQuotes")(l, S, w), l = a.subParser("headers")(l, S, w), l = a.subParser("horizontalRule")(l, S, w), l = a.subParser("lists")(l, S, w), l = a.subParser("codeBlocks")(l, S, w), l = a.subParser("tables")(l, S, w), l = a.subParser("hashHTMLBlocks")(l, S, w), l = a.subParser("paragraphs")(l, S, w), l = w.converter._dispatch("blockGamut.after", l, S, w), l;
      }), a.subParser("blockQuotes", function(l, S, w) {
        l = w.converter._dispatch("blockQuotes.before", l, S, w), l = l + `

`;
        var k = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return S.splitAdjacentBlockquotes && (k = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), l = l.replace(k, function(O) {
          return O = O.replace(/^[ \t]*>[ \t]?/gm, ""), O = O.replace(/¨0/g, ""), O = O.replace(/^[ \t]+$/gm, ""), O = a.subParser("githubCodeBlocks")(O, S, w), O = a.subParser("blockGamut")(O, S, w), O = O.replace(/(^|\n)/g, "$1  "), O = O.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(L, j) {
            var z = j;
            return z = z.replace(/^  /mg, "¨0"), z = z.replace(/¨0/g, ""), z;
          }), a.subParser("hashBlock")(`<blockquote>
` + O + `
</blockquote>`, S, w);
        }), l = w.converter._dispatch("blockQuotes.after", l, S, w), l;
      }), a.subParser("codeBlocks", function(l, S, w) {
        l = w.converter._dispatch("codeBlocks.before", l, S, w), l += "¨0";
        var k = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
        return l = l.replace(k, function(O, L, j) {
          var z = L, H = j, Y = `
`;
          return z = a.subParser("outdent")(z, S, w), z = a.subParser("encodeCode")(z, S, w), z = a.subParser("detab")(z, S, w), z = z.replace(/^\n+/g, ""), z = z.replace(/\n+$/g, ""), S.omitExtraWLInCodeBlocks && (Y = ""), z = "<pre><code>" + z + Y + "</code></pre>", a.subParser("hashBlock")(z, S, w) + H;
        }), l = l.replace(/¨0/, ""), l = w.converter._dispatch("codeBlocks.after", l, S, w), l;
      }), a.subParser("codeSpans", function(l, S, w) {
        return l = w.converter._dispatch("codeSpans.before", l, S, w), typeof l > "u" && (l = ""), l = l.replace(
          /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
          function(k, O, L, j) {
            var z = j;
            return z = z.replace(/^([ \t]*)/g, ""), z = z.replace(/[ \t]*$/g, ""), z = a.subParser("encodeCode")(z, S, w), z = O + "<code>" + z + "</code>", z = a.subParser("hashHTMLSpans")(z, S, w), z;
          }
        ), l = w.converter._dispatch("codeSpans.after", l, S, w), l;
      }), a.subParser("completeHTMLDocument", function(l, S, w) {
        if (!S.completeHTMLDocument)
          return l;
        l = w.converter._dispatch("completeHTMLDocument.before", l, S, w);
        var k = "html", O = `<!DOCTYPE HTML>
`, L = "", j = `<meta charset="utf-8">
`, z = "", H = "";
        typeof w.metadata.parsed.doctype < "u" && (O = "<!DOCTYPE " + w.metadata.parsed.doctype + `>
`, k = w.metadata.parsed.doctype.toString().toLowerCase(), (k === "html" || k === "html5") && (j = '<meta charset="utf-8">'));
        for (var Y in w.metadata.parsed)
          if (w.metadata.parsed.hasOwnProperty(Y))
            switch (Y.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                L = "<title>" + w.metadata.parsed.title + `</title>
`;
                break;
              case "charset":
                k === "html" || k === "html5" ? j = '<meta charset="' + w.metadata.parsed.charset + `">
` : j = '<meta name="charset" content="' + w.metadata.parsed.charset + `">
`;
                break;
              case "language":
              case "lang":
                z = ' lang="' + w.metadata.parsed[Y] + '"', H += '<meta name="' + Y + '" content="' + w.metadata.parsed[Y] + `">
`;
                break;
              default:
                H += '<meta name="' + Y + '" content="' + w.metadata.parsed[Y] + `">
`;
            }
        return l = O + "<html" + z + `>
<head>
` + L + j + H + `</head>
<body>
` + l.trim() + `
</body>
</html>`, l = w.converter._dispatch("completeHTMLDocument.after", l, S, w), l;
      }), a.subParser("detab", function(l, S, w) {
        return l = w.converter._dispatch("detab.before", l, S, w), l = l.replace(/\t(?=\t)/g, "    "), l = l.replace(/\t/g, "¨A¨B"), l = l.replace(/¨B(.+?)¨A/g, function(k, O) {
          for (var L = O, j = 4 - L.length % 4, z = 0; z < j; z++)
            L += " ";
          return L;
        }), l = l.replace(/¨A/g, "    "), l = l.replace(/¨B/g, ""), l = w.converter._dispatch("detab.after", l, S, w), l;
      }), a.subParser("ellipsis", function(l, S, w) {
        return S.ellipsis && (l = w.converter._dispatch("ellipsis.before", l, S, w), l = l.replace(/\.\.\./g, "…"), l = w.converter._dispatch("ellipsis.after", l, S, w)), l;
      }), a.subParser("emoji", function(l, S, w) {
        if (!S.emoji)
          return l;
        l = w.converter._dispatch("emoji.before", l, S, w);
        var k = /:([\S]+?):/g;
        return l = l.replace(k, function(O, L) {
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
        var k = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, O = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        return l = l.replace(k, function(L) {
          return L.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = l.replace(O, function(L) {
          return L.replace(/([\\`*_~=|])/g, a.helper.escapeCharactersCallback);
        }), l = w.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", l, S, w), l;
      }), a.subParser("githubCodeBlocks", function(l, S, w) {
        return S.ghCodeBlocks ? (l = w.converter._dispatch("githubCodeBlocks.before", l, S, w), l += "¨0", l = l.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(k, O, L, j) {
          var z = S.omitExtraWLInCodeBlocks ? "" : `
`;
          return j = a.subParser("encodeCode")(j, S, w), j = a.subParser("detab")(j, S, w), j = j.replace(/^\n+/g, ""), j = j.replace(/\n+$/g, ""), j = "<pre><code" + (L ? ' class="' + L + " language-" + L + '"' : "") + ">" + j + z + "</code></pre>", j = a.subParser("hashBlock")(j, S, w), `

¨G` + (w.ghCodeBlocks.push({ text: k, codeblock: j }) - 1) + `G

`;
        }), l = l.replace(/¨0/, ""), w.converter._dispatch("githubCodeBlocks.after", l, S, w)) : l;
      }), a.subParser("hashBlock", function(l, S, w) {
        return l = w.converter._dispatch("hashBlock.before", l, S, w), l = l.replace(/(^\n+|\n+$)/g, ""), l = `

¨K` + (w.gHtmlBlocks.push(l) - 1) + `K

`, l = w.converter._dispatch("hashBlock.after", l, S, w), l;
      }), a.subParser("hashCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashCodeTags.before", l, S, w);
        var k = function(O, L, j, z) {
          var H = j + a.subParser("encodeCode")(L, S, w) + z;
          return "¨C" + (w.gHtmlSpans.push(H) - 1) + "C";
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "<code\\b[^>]*>", "</code>", "gim"), l = w.converter._dispatch("hashCodeTags.after", l, S, w), l;
      }), a.subParser("hashElement", function(l, S, w) {
        return function(k, O) {
          var L = O;
          return L = L.replace(/\n\n/g, `
`), L = L.replace(/^\n/, ""), L = L.replace(/\n+$/g, ""), L = `

¨K` + (w.gHtmlBlocks.push(L) - 1) + `K

`, L;
        };
      }), a.subParser("hashHTMLBlocks", function(l, S, w) {
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
        ], O = function(R, B, K, te) {
          var I = R;
          return K.search(/\bmarkdown\b/) !== -1 && (I = K + w.converter.makeHtml(B) + te), `

¨K` + (w.gHtmlBlocks.push(I) - 1) + `K

`;
        };
        S.backslashEscapesHTMLTags && (l = l.replace(/\\<(\/?[^>]+?)>/g, function(R, B) {
          return "&lt;" + B + "&gt;";
        }));
        for (var L = 0; L < k.length; ++L)
          for (var j, z = new RegExp("^ {0,3}(<" + k[L] + "\\b[^>]*>)", "im"), H = "<" + k[L] + "\\b[^>]*>", Y = "</" + k[L] + ">"; (j = a.helper.regexIndexOf(l, z)) !== -1; ) {
            var Z = a.helper.splitAtIndex(l, j), Q = a.helper.replaceRecursiveRegExp(Z[1], O, H, Y, "im");
            if (Q === Z[1])
              break;
            l = Z[0].concat(Q);
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
      }), a.subParser("unhashHTMLSpans", function(l, S, w) {
        l = w.converter._dispatch("unhashHTMLSpans.before", l, S, w);
        for (var k = 0; k < w.gHtmlSpans.length; ++k) {
          for (var O = w.gHtmlSpans[k], L = 0; /¨C(\d+)C/.test(O); ) {
            var j = RegExp.$1;
            if (O = O.replace("¨C" + j + "C", w.gHtmlSpans[j]), L === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++L;
          }
          l = l.replace("¨C" + k + "C", O);
        }
        return l = w.converter._dispatch("unhashHTMLSpans.after", l, S, w), l;
      }), a.subParser("hashPreCodeTags", function(l, S, w) {
        l = w.converter._dispatch("hashPreCodeTags.before", l, S, w);
        var k = function(O, L, j, z) {
          var H = j + a.subParser("encodeCode")(L, S, w) + z;
          return `

¨G` + (w.ghCodeBlocks.push({ text: O, codeblock: H }) - 1) + `G

`;
        };
        return l = a.helper.replaceRecursiveRegExp(l, k, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), l = w.converter._dispatch("hashPreCodeTags.after", l, S, w), l;
      }), a.subParser("headers", function(l, S, w) {
        l = w.converter._dispatch("headers.before", l, S, w);
        var k = isNaN(parseInt(S.headerLevelStart)) ? 1 : parseInt(S.headerLevelStart), O = S.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, L = S.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        l = l.replace(O, function(H, Y) {
          var Z = a.subParser("spanGamut")(Y, S, w), Q = S.noHeaderId ? "" : ' id="' + z(Y) + '"', R = k, B = "<h" + R + Q + ">" + Z + "</h" + R + ">";
          return a.subParser("hashBlock")(B, S, w);
        }), l = l.replace(L, function(H, Y) {
          var Z = a.subParser("spanGamut")(Y, S, w), Q = S.noHeaderId ? "" : ' id="' + z(Y) + '"', R = k + 1, B = "<h" + R + Q + ">" + Z + "</h" + R + ">";
          return a.subParser("hashBlock")(B, S, w);
        });
        var j = S.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        l = l.replace(j, function(H, Y, Z) {
          var Q = Z;
          S.customizedHeaderId && (Q = Z.replace(/\s?\{([^{]+?)}\s*$/, ""));
          var R = a.subParser("spanGamut")(Q, S, w), B = S.noHeaderId ? "" : ' id="' + z(Z) + '"', K = k - 1 + Y.length, te = "<h" + K + B + ">" + R + "</h" + K + ">";
          return a.subParser("hashBlock")(te, S, w);
        });
        function z(H) {
          var Y, Z;
          if (S.customizedHeaderId) {
            var Q = H.match(/\{([^{]+?)}\s*$/);
            Q && Q[1] && (H = Q[1]);
          }
          return Y = H, a.helper.isString(S.prefixHeaderId) ? Z = S.prefixHeaderId : S.prefixHeaderId === !0 ? Z = "section-" : Z = "", S.rawPrefixHeaderId || (Y = Z + Y), S.ghCompatibleHeaderId ? Y = Y.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : S.rawHeaderId ? Y = Y.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : Y = Y.replace(/[^\w]/g, "").toLowerCase(), S.rawPrefixHeaderId && (Y = Z + Y), w.hashLinkCounts[Y] ? Y = Y + "-" + w.hashLinkCounts[Y]++ : w.hashLinkCounts[Y] = 1, Y;
        }
        return l = w.converter._dispatch("headers.after", l, S, w), l;
      }), a.subParser("horizontalRule", function(l, S, w) {
        l = w.converter._dispatch("horizontalRule.before", l, S, w);
        var k = a.subParser("hashBlock")("<hr />", S, w);
        return l = l.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, k), l = l.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, k), l = w.converter._dispatch("horizontalRule.after", l, S, w), l;
      }), a.subParser("images", function(l, S, w) {
        l = w.converter._dispatch("images.before", l, S, w);
        var k = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, O = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, L = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, j = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, z = /!\[([^\[\]]+)]()()()()()/g;
        function H(Z, Q, R, B, K, te, I, $) {
          return B = B.replace(/\s/g, ""), Y(Z, Q, R, B, K, te, I, $);
        }
        function Y(Z, Q, R, B, K, te, I, $) {
          var oe = w.gUrls, V = w.gTitles, ae = w.gDimensions;
          if (R = R.toLowerCase(), $ || ($ = ""), Z.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
            B = "";
          else if (B === "" || B === null)
            if ((R === "" || R === null) && (R = Q.toLowerCase().replace(/ ?\n/g, " ")), B = "#" + R, !a.helper.isUndefined(oe[R]))
              B = oe[R], a.helper.isUndefined(V[R]) || ($ = V[R]), a.helper.isUndefined(ae[R]) || (K = ae[R].width, te = ae[R].height);
            else
              return Z;
          Q = Q.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), B = B.replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback);
          var _e = '<img src="' + B + '" alt="' + Q + '"';
          return $ && a.helper.isString($) && ($ = $.replace(/"/g, "&quot;").replace(a.helper.regexes.asteriskDashAndColon, a.helper.escapeCharactersCallback), _e += ' title="' + $ + '"'), K && te && (K = K === "*" ? "auto" : K, te = te === "*" ? "auto" : te, _e += ' width="' + K + '"', _e += ' height="' + te + '"'), _e += " />", _e;
        }
        return l = l.replace(j, Y), l = l.replace(L, H), l = l.replace(O, Y), l = l.replace(k, Y), l = l.replace(z, Y), l = w.converter._dispatch("images.after", l, S, w), l;
      }), a.subParser("italicsAndBold", function(l, S, w) {
        l = w.converter._dispatch("italicsAndBold.before", l, S, w);
        function k(O, L, j) {
          return L + O + j;
        }
        return S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(O, L) {
          return k(L, "<strong><em>", "</em></strong>");
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(O, L) {
          return k(L, "<strong>", "</strong>");
        }), l = l.replace(/\b_(\S[\s\S]*?)_\b/g, function(O, L) {
          return k(L, "<em>", "</em>");
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : O;
        }), l = l.replace(/_([^\s_][\s\S]*?)_/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : O;
        })), S.literalMidWordAsterisks ? (l = l.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(O, L, j) {
          return k(j, L + "<strong><em>", "</em></strong>");
        }), l = l.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(O, L, j) {
          return k(j, L + "<strong>", "</strong>");
        }), l = l.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(O, L, j) {
          return k(j, L + "<em>", "</em>");
        })) : (l = l.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<strong><em>", "</em></strong>") : O;
        }), l = l.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<strong>", "</strong>") : O;
        }), l = l.replace(/\*([^\s*][\s\S]*?)\*/g, function(O, L) {
          return /\S$/.test(L) ? k(L, "<em>", "</em>") : O;
        })), l = w.converter._dispatch("italicsAndBold.after", l, S, w), l;
      }), a.subParser("lists", function(l, S, w) {
        function k(j, z) {
          w.gListLevel++, j = j.replace(/\n{2,}$/, `
`), j += "¨0";
          var H = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, Y = /\n[ \t]*\n(?!¨0)/.test(j);
          return S.disableForced4SpacesIndentedSublists && (H = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), j = j.replace(H, function(Z, Q, R, B, K, te, I) {
            I = I && I.trim() !== "";
            var $ = a.subParser("outdent")(K, S, w), oe = "";
            return te && S.tasklists && (oe = ' class="task-list-item" style="list-style-type: none;"', $ = $.replace(/^[ \t]*\[(x|X| )?]/m, function() {
              var V = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
              return I && (V += " checked"), V += ">", V;
            })), $ = $.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(V) {
              return "¨A" + V;
            }), Q || $.search(/\n{2,}/) > -1 ? ($ = a.subParser("githubCodeBlocks")($, S, w), $ = a.subParser("blockGamut")($, S, w)) : ($ = a.subParser("lists")($, S, w), $ = $.replace(/\n$/, ""), $ = a.subParser("hashHTMLBlocks")($, S, w), $ = $.replace(/\n\n+/g, `

`), Y ? $ = a.subParser("paragraphs")($, S, w) : $ = a.subParser("spanGamut")($, S, w)), $ = $.replace("¨A", ""), $ = "<li" + oe + ">" + $ + `</li>
`, $;
          }), j = j.replace(/¨0/g, ""), w.gListLevel--, z && (j = j.replace(/\s+$/, "")), j;
        }
        function O(j, z) {
          if (z === "ol") {
            var H = j.match(/^ *(\d+)\./);
            if (H && H[1] !== "1")
              return ' start="' + H[1] + '"';
          }
          return "";
        }
        function L(j, z, H) {
          var Y = S.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, Z = S.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, Q = z === "ul" ? Y : Z, R = "";
          if (j.search(Q) !== -1)
            (function K(te) {
              var I = te.search(Q), $ = O(j, z);
              I !== -1 ? (R += `

<` + z + $ + `>
` + k(te.slice(0, I), !!H) + "</" + z + `>
`, z = z === "ul" ? "ol" : "ul", Q = z === "ul" ? Y : Z, K(te.slice(I))) : R += `

<` + z + $ + `>
` + k(te, !!H) + "</" + z + `>
`;
            })(j);
          else {
            var B = O(j, z);
            R = `

<` + z + B + `>
` + k(j, !!H) + "</" + z + `>
`;
          }
          return R;
        }
        return l = w.converter._dispatch("lists.before", l, S, w), l += "¨0", w.gListLevel ? l = l.replace(
          /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, z, H) {
            var Y = H.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(z, Y, !0);
          }
        ) : l = l.replace(
          /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
          function(j, z, H, Y) {
            var Z = Y.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return L(H, Z, !1);
          }
        ), l = l.replace(/¨0/, ""), l = w.converter._dispatch("lists.after", l, S, w), l;
      }), a.subParser("metadata", function(l, S, w) {
        if (!S.metadata)
          return l;
        l = w.converter._dispatch("metadata.before", l, S, w);
        function k(O) {
          w.metadata.raw = O, O = O.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), O = O.replace(/\n {4}/g, " "), O.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(L, j, z) {
            return w.metadata.parsed[j] = z, "";
          });
        }
        return l = l.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(O, L, j) {
          return k(j), "¨M";
        }), l = l.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(O, L, j) {
          return L && (w.metadata.format = L), k(j), "¨M";
        }), l = l.replace(/¨M/g, ""), l = w.converter._dispatch("metadata.after", l, S, w), l;
      }), a.subParser("outdent", function(l, S, w) {
        return l = w.converter._dispatch("outdent.before", l, S, w), l = l.replace(/^(\t|[ ]{1,4})/gm, "¨0"), l = l.replace(/¨0/g, ""), l = w.converter._dispatch("outdent.after", l, S, w), l;
      }), a.subParser("paragraphs", function(l, S, w) {
        l = w.converter._dispatch("paragraphs.before", l, S, w), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, "");
        for (var k = l.split(/\n{2,}/g), O = [], L = k.length, j = 0; j < L; j++) {
          var z = k[j];
          z.search(/¨(K|G)(\d+)\1/g) >= 0 ? O.push(z) : z.search(/\S/) >= 0 && (z = a.subParser("spanGamut")(z, S, w), z = z.replace(/^([ \t]*)/g, "<p>"), z += "</p>", O.push(z));
        }
        for (L = O.length, j = 0; j < L; j++) {
          for (var H = "", Y = O[j], Z = !1; /¨(K|G)(\d+)\1/.test(Y); ) {
            var Q = RegExp.$1, R = RegExp.$2;
            Q === "K" ? H = w.gHtmlBlocks[R] : Z ? H = a.subParser("encodeCode")(w.ghCodeBlocks[R].text, S, w) : H = w.ghCodeBlocks[R].codeblock, H = H.replace(/\$/g, "$$$$"), Y = Y.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, H), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(Y) && (Z = !0);
          }
          O[j] = Y;
        }
        return l = O.join(`
`), l = l.replace(/^\n+/g, ""), l = l.replace(/\n+$/g, ""), w.converter._dispatch("paragraphs.after", l, S, w);
      }), a.subParser("runExtension", function(l, S, w, k) {
        if (l.filter)
          S = l.filter(S, k.converter, w);
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
        function k(O) {
          return S.simplifiedAutoLink && (O = a.subParser("simplifiedAutoLinks")(O, S, w)), "<del>" + O + "</del>";
        }
        return S.strikethrough && (l = w.converter._dispatch("strikethrough.before", l, S, w), l = l.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(O, L) {
          return k(L);
        }), l = w.converter._dispatch("strikethrough.after", l, S, w)), l;
      }), a.subParser("stripLinkDefinitions", function(l, S, w) {
        var k = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, O = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
        l += "¨0";
        var L = function(j, z, H, Y, Z, Q, R) {
          return z = z.toLowerCase(), l.toLowerCase().split(z).length - 1 < 2 ? j : (H.match(/^data:.+?\/.+?;base64,/) ? w.gUrls[z] = H.replace(/\s/g, "") : w.gUrls[z] = a.subParser("encodeAmpsAndAngles")(H, S, w), Q ? Q + R : (R && (w.gTitles[z] = R.replace(/"|'/g, "&quot;")), S.parseImgDimensions && Y && Z && (w.gDimensions[z] = {
            width: Y,
            height: Z
          }), ""));
        };
        return l = l.replace(O, L), l = l.replace(k, L), l = l.replace(/¨0/, ""), l;
      }), a.subParser("tables", function(l, S, w) {
        if (!S.tables)
          return l;
        var k = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, O = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
        function L(Z) {
          return /^:[ \t]*--*$/.test(Z) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(Z) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(Z) ? ' style="text-align:center;"' : "";
        }
        function j(Z, Q) {
          var R = "";
          return Z = Z.trim(), (S.tablesHeaderId || S.tableHeaderId) && (R = ' id="' + Z.replace(/ /g, "_").toLowerCase() + '"'), Z = a.subParser("spanGamut")(Z, S, w), "<th" + R + Q + ">" + Z + `</th>
`;
        }
        function z(Z, Q) {
          var R = a.subParser("spanGamut")(Z, S, w);
          return "<td" + Q + ">" + R + `</td>
`;
        }
        function H(Z, Q) {
          for (var R = `<table>
<thead>
<tr>
`, B = Z.length, K = 0; K < B; ++K)
            R += Z[K];
          for (R += `</tr>
</thead>
<tbody>
`, K = 0; K < Q.length; ++K) {
            R += `<tr>
`;
            for (var te = 0; te < B; ++te)
              R += Q[K][te];
            R += `</tr>
`;
          }
          return R += `</tbody>
</table>
`, R;
        }
        function Y(Z) {
          var Q, R = Z.split(`
`);
          for (Q = 0; Q < R.length; ++Q)
            /^ {0,3}\|/.test(R[Q]) && (R[Q] = R[Q].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(R[Q]) && (R[Q] = R[Q].replace(/\|[ \t]*$/, "")), R[Q] = a.subParser("codeSpans")(R[Q], S, w);
          var B = R[0].split("|").map(function(_e) {
            return _e.trim();
          }), K = R[1].split("|").map(function(_e) {
            return _e.trim();
          }), te = [], I = [], $ = [], oe = [];
          for (R.shift(), R.shift(), Q = 0; Q < R.length; ++Q)
            R[Q].trim() !== "" && te.push(
              R[Q].split("|").map(function(_e) {
                return _e.trim();
              })
            );
          if (B.length < K.length)
            return Z;
          for (Q = 0; Q < K.length; ++Q)
            $.push(L(K[Q]));
          for (Q = 0; Q < B.length; ++Q)
            a.helper.isUndefined($[Q]) && ($[Q] = ""), I.push(j(B[Q], $[Q]));
          for (Q = 0; Q < te.length; ++Q) {
            for (var V = [], ae = 0; ae < I.length; ++ae)
              a.helper.isUndefined(te[Q][ae]), V.push(z(te[Q][ae], $[ae]));
            oe.push(V);
          }
          return H(I, oe);
        }
        return l = w.converter._dispatch("tables.before", l, S, w), l = l.replace(/\\(\|)/g, a.helper.escapeCharactersCallback), l = l.replace(k, Y), l = l.replace(O, Y), l = w.converter._dispatch("tables.after", l, S, w), l;
      }), a.subParser("underline", function(l, S, w) {
        return S.underline && (l = w.converter._dispatch("underline.before", l, S, w), S.literalMidWordUnderscores ? (l = l.replace(/\b___(\S[\s\S]*?)___\b/g, function(k, O) {
          return "<u>" + O + "</u>";
        }), l = l.replace(/\b__(\S[\s\S]*?)__\b/g, function(k, O) {
          return "<u>" + O + "</u>";
        })) : (l = l.replace(/___(\S[\s\S]*?)___/g, function(k, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : k;
        }), l = l.replace(/__(\S[\s\S]*?)__/g, function(k, O) {
          return /\S$/.test(O) ? "<u>" + O + "</u>" : k;
        })), l = l.replace(/(_)/g, a.helper.escapeCharactersCallback), l = w.converter._dispatch("underline.after", l, S, w)), l;
      }), a.subParser("unescapeSpecialChars", function(l, S, w) {
        return l = w.converter._dispatch("unescapeSpecialChars.before", l, S, w), l = l.replace(/¨E(\d+)E/g, function(k, O) {
          var L = parseInt(O);
          return String.fromCharCode(L);
        }), l = w.converter._dispatch("unescapeSpecialChars.after", l, S, w), l;
      }), a.subParser("makeMarkdown.blockquote", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L) {
            var j = a.subParser("makeMarkdown.node")(k[L], S);
            j !== "" && (w += j);
          }
        return w = w.trim(), w = "> " + w.split(`
`).join(`
> `), w;
      }), a.subParser("makeMarkdown.codeBlock", function(l, S) {
        var w = l.getAttribute("language"), k = l.getAttribute("precodenum");
        return "```" + w + `
` + S.preList[k] + "\n```";
      }), a.subParser("makeMarkdown.codeSpan", function(l) {
        return "`" + l.innerHTML + "`";
      }), a.subParser("makeMarkdown.emphasis", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "*";
          for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], S);
          w += "*";
        }
        return w;
      }), a.subParser("makeMarkdown.header", function(l, S, w) {
        var k = new Array(w + 1).join("#"), O = "";
        if (l.hasChildNodes()) {
          O = k + " ";
          for (var L = l.childNodes, j = L.length, z = 0; z < j; ++z)
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
          var k = l.childNodes, O = k.length;
          w = "[";
          for (var L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], S);
          w += "](", w += "<" + l.getAttribute("href") + ">", l.hasAttribute("title") && (w += ' "' + l.getAttribute("title") + '"'), w += ")";
        }
        return w;
      }), a.subParser("makeMarkdown.list", function(l, S, w) {
        var k = "";
        if (!l.hasChildNodes())
          return "";
        for (var O = l.childNodes, L = O.length, j = l.getAttribute("start") || 1, z = 0; z < L; ++z)
          if (!(typeof O[z].tagName > "u" || O[z].tagName.toLowerCase() !== "li")) {
            var H = "";
            w === "ol" ? H = j.toString() + ". " : H = "- ", k += H + a.subParser("makeMarkdown.listItem")(O[z], S), ++j;
          }
        return k += `
<!-- -->
`, k.trim();
      }), a.subParser("makeMarkdown.listItem", function(l, S) {
        for (var w = "", k = l.childNodes, O = k.length, L = 0; L < O; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], S);
        return /\n$/.test(w) ? w = w.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : w += `
`, w;
      }), a.subParser("makeMarkdown.node", function(l, S, w) {
        w = w || !1;
        var k = "";
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
            w || (k = a.subParser("makeMarkdown.header")(l, S, 1) + `

`);
            break;
          case "h2":
            w || (k = a.subParser("makeMarkdown.header")(l, S, 2) + `

`);
            break;
          case "h3":
            w || (k = a.subParser("makeMarkdown.header")(l, S, 3) + `

`);
            break;
          case "h4":
            w || (k = a.subParser("makeMarkdown.header")(l, S, 4) + `

`);
            break;
          case "h5":
            w || (k = a.subParser("makeMarkdown.header")(l, S, 5) + `

`);
            break;
          case "h6":
            w || (k = a.subParser("makeMarkdown.header")(l, S, 6) + `

`);
            break;
          case "p":
            w || (k = a.subParser("makeMarkdown.paragraph")(l, S) + `

`);
            break;
          case "blockquote":
            w || (k = a.subParser("makeMarkdown.blockquote")(l, S) + `

`);
            break;
          case "hr":
            w || (k = a.subParser("makeMarkdown.hr")(l, S) + `

`);
            break;
          case "ol":
            w || (k = a.subParser("makeMarkdown.list")(l, S, "ol") + `

`);
            break;
          case "ul":
            w || (k = a.subParser("makeMarkdown.list")(l, S, "ul") + `

`);
            break;
          case "precode":
            w || (k = a.subParser("makeMarkdown.codeBlock")(l, S) + `

`);
            break;
          case "pre":
            w || (k = a.subParser("makeMarkdown.pre")(l, S) + `

`);
            break;
          case "table":
            w || (k = a.subParser("makeMarkdown.table")(l, S) + `

`);
            break;
          //
          // SPANS
          //
          case "code":
            k = a.subParser("makeMarkdown.codeSpan")(l, S);
            break;
          case "em":
          case "i":
            k = a.subParser("makeMarkdown.emphasis")(l, S);
            break;
          case "strong":
          case "b":
            k = a.subParser("makeMarkdown.strong")(l, S);
            break;
          case "del":
            k = a.subParser("makeMarkdown.strikethrough")(l, S);
            break;
          case "a":
            k = a.subParser("makeMarkdown.links")(l, S);
            break;
          case "img":
            k = a.subParser("makeMarkdown.image")(l, S);
            break;
          default:
            k = l.outerHTML + `

`;
        }
        return k;
      }), a.subParser("makeMarkdown.paragraph", function(l, S) {
        var w = "";
        if (l.hasChildNodes())
          for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], S);
        return w = w.trim(), w;
      }), a.subParser("makeMarkdown.pre", function(l, S) {
        var w = l.getAttribute("prenum");
        return "<pre>" + S.preList[w] + "</pre>";
      }), a.subParser("makeMarkdown.strikethrough", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "~~";
          for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], S);
          w += "~~";
        }
        return w;
      }), a.subParser("makeMarkdown.strong", function(l, S) {
        var w = "";
        if (l.hasChildNodes()) {
          w += "**";
          for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L)
            w += a.subParser("makeMarkdown.node")(k[L], S);
          w += "**";
        }
        return w;
      }), a.subParser("makeMarkdown.table", function(l, S) {
        var w = "", k = [[], []], O = l.querySelectorAll("thead>tr>th"), L = l.querySelectorAll("tbody>tr"), j, z;
        for (j = 0; j < O.length; ++j) {
          var H = a.subParser("makeMarkdown.tableCell")(O[j], S), Y = "---";
          if (O[j].hasAttribute("style")) {
            var Z = O[j].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (Z) {
              case "text-align:left;":
                Y = ":---";
                break;
              case "text-align:right;":
                Y = "---:";
                break;
              case "text-align:center;":
                Y = ":---:";
                break;
            }
          }
          k[0][j] = H.trim(), k[1][j] = Y;
        }
        for (j = 0; j < L.length; ++j) {
          var Q = k.push([]) - 1, R = L[j].getElementsByTagName("td");
          for (z = 0; z < O.length; ++z) {
            var B = " ";
            typeof R[z] < "u" && (B = a.subParser("makeMarkdown.tableCell")(R[z], S)), k[Q].push(B);
          }
        }
        var K = 3;
        for (j = 0; j < k.length; ++j)
          for (z = 0; z < k[j].length; ++z) {
            var te = k[j][z].length;
            te > K && (K = te);
          }
        for (j = 0; j < k.length; ++j) {
          for (z = 0; z < k[j].length; ++z)
            j === 1 ? k[j][z].slice(-1) === ":" ? k[j][z] = a.helper.padEnd(k[j][z].slice(-1), K - 1, "-") + ":" : k[j][z] = a.helper.padEnd(k[j][z], K, "-") : k[j][z] = a.helper.padEnd(k[j][z], K);
          w += "| " + k[j].join(" | ") + ` |
`;
        }
        return w.trim();
      }), a.subParser("makeMarkdown.tableCell", function(l, S) {
        var w = "";
        if (!l.hasChildNodes())
          return "";
        for (var k = l.childNodes, O = k.length, L = 0; L < O; ++L)
          w += a.subParser("makeMarkdown.node")(k[L], S, !0);
        return w.trim();
      }), a.subParser("makeMarkdown.txt", function(l) {
        var S = l.nodeValue;
        return S = S.replace(/ +/g, " "), S = S.replace(/¨NBSP;/g, " "), S = a.helper.unescapeHTMLEntities(S), S = S.replace(/([*_~|`])/g, "\\$1"), S = S.replace(/^(\s*)>/g, "\\$1>"), S = S.replace(/^#/gm, "\\#"), S = S.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), S = S.replace(/^( {0,3}\d+)\./gm, "$1\\."), S = S.replace(/^( {0,3})([+-])/gm, "$1\\$2"), S = S.replace(/]([\s]*)\(/g, "\\]$1\\("), S = S.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), S;
      });
      var P = this;
      n.exports ? n.exports = a : P.showdown = a;
    }).call(US);
  })(dl)), dl.exports;
}
var qS = HS();
const ZS = /* @__PURE__ */ If(qS);
var ea = (
  /** @class */
  (function() {
    function n() {
    }
    return n.prototype.diff = function(r, s, a) {
      a === void 0 && (a = {});
      var u;
      typeof a == "function" ? (u = a, a = {}) : "callback" in a && (u = a.callback);
      var c = this.castInput(r, a), f = this.castInput(s, a), m = this.removeEmpty(this.tokenize(c, a)), p = this.removeEmpty(this.tokenize(f, a));
      return this.diffWithOptionsObj(m, p, a, u);
    }, n.prototype.diffWithOptionsObj = function(r, s, a, u) {
      var c = this, f, m = function(l) {
        if (l = c.postProcess(l, a), u) {
          setTimeout(function() {
            u(l);
          }, 0);
          return;
        } else
          return l;
      }, p = s.length, _ = r.length, g = 1, E = p + _;
      a.maxEditLength != null && (E = Math.min(E, a.maxEditLength));
      var y = (f = a.timeout) !== null && f !== void 0 ? f : 1 / 0, b = Date.now() + y, h = [{ oldPos: -1, lastComponent: void 0 }], C = this.extractCommon(h[0], s, r, 0, a);
      if (h[0].oldPos + 1 >= _ && C + 1 >= p)
        return m(this.buildValues(h[0].lastComponent, s, r));
      var A = -1 / 0, M = 1 / 0, x = function() {
        for (var l = Math.max(A, -g); l <= Math.min(M, g); l += 2) {
          var S = void 0, w = h[l - 1], k = h[l + 1];
          w && (h[l - 1] = void 0);
          var O = !1;
          if (k) {
            var L = k.oldPos - l;
            O = k && 0 <= L && L < p;
          }
          var j = w && w.oldPos + 1 < _;
          if (!O && !j) {
            h[l] = void 0;
            continue;
          }
          if (!j || O && w.oldPos < k.oldPos ? S = c.addToPath(k, !0, !1, 0, a) : S = c.addToPath(w, !1, !0, 1, a), C = c.extractCommon(S, s, r, l, a), S.oldPos + 1 >= _ && C + 1 >= p)
            return m(c.buildValues(S.lastComponent, s, r)) || !0;
          h[l] = S, S.oldPos + 1 >= _ && (M = Math.min(M, l - 1)), C + 1 >= p && (A = Math.max(A, l + 1));
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
          var P = x();
          if (P)
            return P;
        }
    }, n.prototype.addToPath = function(r, s, a, u, c) {
      var f = r.lastComponent;
      return f && !c.oneChangePerToken && f.added === s && f.removed === a ? {
        oldPos: r.oldPos + u,
        lastComponent: { count: f.count + 1, added: s, removed: a, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + u,
        lastComponent: { count: 1, added: s, removed: a, previousComponent: f }
      };
    }, n.prototype.extractCommon = function(r, s, a, u, c) {
      for (var f = s.length, m = a.length, p = r.oldPos, _ = p - u, g = 0; _ + 1 < f && p + 1 < m && this.equals(a[p + 1], s[_ + 1], c); )
        _++, p++, g++, c.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return g && !c.oneChangePerToken && (r.lastComponent = { count: g, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = p, _;
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
      for (var f = u.length, m = 0, p = 0, _ = 0; m < f; m++) {
        var g = u[m];
        if (g.removed)
          g.value = this.join(a.slice(_, _ + g.count)), _ += g.count;
        else {
          if (!g.added && this.useLongestToken) {
            var E = s.slice(p, p + g.count);
            E = E.map(function(y, b) {
              var h = a[_ + b];
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
), GS = /* @__PURE__ */ (function() {
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
})(), VS = (
  /** @class */
  (function(n) {
    GS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r;
  })(ea)
);
new VS();
function b0(n, r) {
  var s;
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[s] != r[s])
      return n.slice(0, s);
  return n.slice(0, s);
}
function S0(n, r) {
  var s;
  if (!n || !r || n[n.length - 1] != r[r.length - 1])
    return "";
  for (s = 0; s < n.length && s < r.length; s++)
    if (n[n.length - (s + 1)] != r[r.length - (s + 1)])
      return n.slice(-s);
  return n.slice(-s);
}
function Of(n, r, s) {
  if (n.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return s + n.slice(r.length);
}
function Mf(n, r, s) {
  if (!r)
    return n + s;
  if (n.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(n), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return n.slice(0, -r.length) + s;
}
function Zs(n, r) {
  return Of(n, r, "");
}
function Wu(n, r) {
  return Mf(n, r, "");
}
function w0(n, r) {
  return r.slice(0, $S(n, r));
}
function $S(n, r) {
  var s = 0;
  n.length > r.length && (s = n.length - r.length);
  var a = r.length;
  n.length < r.length && (a = n.length);
  var u = Array(a), c = 0;
  u[0] = 0;
  for (var f = 1; f < a; f++) {
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
function Gs(n) {
  var r;
  for (r = n.length - 1; r >= 0 && n[r].match(/\s/); r--)
    ;
  return n.substring(r + 1);
}
function Fr(n) {
  var r = n.match(/^\s*/);
  return r ? r[0] : "";
}
var qy = /* @__PURE__ */ (function() {
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
})(), Sl = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", YS = new RegExp("[".concat(Sl, "]+|\\s+|[^").concat(Sl, "]"), "ug"), FS = (
  /** @class */
  (function(n) {
    qy(r, n);
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
        u = Array.from(c.segment(s), function(p) {
          return p.segment;
        });
      } else
        u = s.match(YS) || [];
      var f = [], m = null;
      return u.forEach(function(p) {
        /\s/.test(p) ? m == null ? f.push(p) : f.push(f.pop() + p) : m != null && /\s/.test(m) ? f[f.length - 1] == m ? f.push(f.pop() + p) : f.push(m + p) : f.push(p), m = p;
      }), f;
    }, r.prototype.join = function(s) {
      return s.map(function(a, u) {
        return u == 0 ? a : a.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(s, a) {
      if (!s || a.oneChangePerToken)
        return s;
      var u = null, c = null, f = null;
      return s.forEach(function(m) {
        m.added ? c = m : m.removed ? f = m : ((c || f) && E0(u, f, c, m), u = m, c = null, f = null);
      }), (c || f) && E0(u, f, c, null), s;
    }, r;
  })(ea)
), XS = new FS();
function Zy(n, r, s) {
  return XS.diff(n, r, s);
}
function E0(n, r, s, a) {
  if (r && s) {
    var u = Fr(r.value), c = Gs(r.value), f = Fr(s.value), m = Gs(s.value);
    if (n) {
      var p = b0(u, f);
      n.value = Mf(n.value, f, p), r.value = Zs(r.value, p), s.value = Zs(s.value, p);
    }
    if (a) {
      var _ = S0(c, m);
      a.value = Of(a.value, m, _), r.value = Wu(r.value, _), s.value = Wu(s.value, _);
    }
  } else if (s) {
    if (n) {
      var g = Fr(s.value);
      s.value = s.value.substring(g.length);
    }
    if (a) {
      var g = Fr(a.value);
      a.value = a.value.substring(g.length);
    }
  } else if (n && a) {
    var E = Fr(a.value), y = Fr(r.value), b = Gs(r.value), h = b0(E, y);
    r.value = Zs(r.value, h);
    var C = S0(Zs(E, h), b);
    r.value = Wu(r.value, C), a.value = Of(a.value, E, C), n.value = Mf(n.value, E, E.slice(0, E.length - C.length));
  } else if (a) {
    var A = Fr(a.value), M = Gs(r.value), x = w0(M, A);
    r.value = Wu(r.value, x);
  } else if (n) {
    var P = Gs(n.value), l = Fr(r.value), x = w0(P, l);
    r.value = Zs(r.value, x);
  }
}
var QS = (
  /** @class */
  (function(n) {
    qy(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      var a = new RegExp("(\\r?\\n)|[".concat(Sl, "]+|[^\\S\\n\\r]+|[^").concat(Sl, "]"), "ug");
      return s.match(a) || [];
    }, r;
  })(ea)
);
new QS();
var KS = /* @__PURE__ */ (function() {
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
})(), JS = (
  /** @class */
  (function(n) {
    KS(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Gy, s;
    }
    return r.prototype.equals = function(s, a, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim()), (!u.newlineIsToken || !a.includes(`
`)) && (a = a.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (s.endsWith(`
`) && (s = s.slice(0, -1)), a.endsWith(`
`) && (a = a.slice(0, -1))), n.prototype.equals.call(this, s, a, u);
    }, r;
  })(ea)
);
new JS();
function Gy(n, r) {
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
var WS = /* @__PURE__ */ (function() {
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
})(), ew = (
  /** @class */
  (function(n) {
    WS(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(ea)
);
new ew();
var tw = /* @__PURE__ */ (function() {
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
})(), nw = (
  /** @class */
  (function(n) {
    tw(r, n);
    function r() {
      return n !== null && n.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(s) {
      return s.split(/([{}:;,]|\s+)/);
    }, r;
  })(ea)
);
new nw();
var rw = /* @__PURE__ */ (function() {
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
})(), aw = (
  /** @class */
  (function(n) {
    rw(r, n);
    function r() {
      var s = n !== null && n.apply(this, arguments) || this;
      return s.tokenize = Gy, s;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(s, a) {
      var u = a.undefinedReplacement, c = a.stringifyReplacer, f = c === void 0 ? function(m, p) {
        return typeof p > "u" ? u : p;
      } : c;
      return typeof s == "string" ? s : JSON.stringify(Rf(s, null, null, f), null, "  ");
    }, r.prototype.equals = function(s, a, u) {
      return n.prototype.equals.call(this, s.replace(/,([\r\n])/g, "$1"), a.replace(/,([\r\n])/g, "$1"), u);
    }, r;
  })(ea)
);
new aw();
function Rf(n, r, s, a, u) {
  r = r || [], s = s || [], a && (n = a(u === void 0 ? "" : u, n));
  var c;
  for (c = 0; c < r.length; c += 1)
    if (r[c] === n)
      return s[c];
  var f;
  if (Object.prototype.toString.call(n) === "[object Array]") {
    for (r.push(n), f = new Array(n.length), s.push(f), c = 0; c < n.length; c += 1)
      f[c] = Rf(n[c], r, s, a, String(c));
    return r.pop(), s.pop(), f;
  }
  if (n && n.toJSON && (n = n.toJSON()), typeof n == "object" && n !== null) {
    r.push(n), f = {}, s.push(f);
    var m = [], p;
    for (p in n)
      Object.prototype.hasOwnProperty.call(n, p) && m.push(p);
    for (m.sort(), c = 0; c < m.length; c += 1)
      p = m[c], f[p] = Rf(n[p], r, s, a, p);
    r.pop(), s.pop();
  } else
    f = n;
  return f;
}
var iw = /* @__PURE__ */ (function() {
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
})(), sw = (
  /** @class */
  (function(n) {
    iw(r, n);
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
new sw();
const ow = ({ originalEntry: n, newEntry: r }) => {
  const s = re.useMemo(() => {
    const a = Zy(n.content, r.content);
    let u = "", c = "";
    return a.forEach((f) => {
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
}, uw = SillyTavern.getContext(), lw = re.forwardRef(({ entry: n, initialRegexIds: r }, s) => {
  const [a, u] = re.useState([]), [c, f] = re.useState(n.comment), [m, p] = re.useState(n.key.join(", ")), [_, g] = re.useState(n.content), [E, y] = re.useState([]);
  re.useEffect(() => {
    const M = uw.extensionSettings.regex ?? [];
    u(M);
    const x = Object.entries(r).map(([P, l]) => {
      const S = M.find((w) => w.id === P);
      return S ? { id: S.id, label: S.scriptName, enabled: !l?.disabled } : null;
    }).filter((P) => P !== null);
    y(x);
  }, [r]), re.useImperativeHandle(s, () => ({
    getFormData: () => {
      const M = {
        ...n,
        comment: c.trim(),
        key: m.split(",").map((P) => P.trim()).filter(Boolean),
        content: _
      }, x = E.reduce(
        (P, l) => (P[l.id] = { disabled: !l.enabled }, P),
        {}
      );
      return { updatedEntry: M, updatedRegexIds: x };
    }
  }));
  const b = re.useMemo(
    () => a.map((M) => ({ value: M.id, label: M.scriptName })),
    [a]
  ), h = re.useMemo(() => E.map((M) => M.id), [E]), C = re.useCallback(() => {
    let M = n.content;
    const x = E.filter((P) => P.enabled);
    for (const P of x) {
      const l = a.find((S) => S.id === P.id);
      l && (M = c3(l, M));
    }
    g(M);
  }, [E, a, n.content]), A = (M) => {
    const x = M.map((P) => {
      const l = E.find((w) => w.id === P);
      if (l) return l;
      const S = a.find((w) => w.id === P);
      return S ? { id: S.id, label: S.scriptName, enabled: !0 } : null;
    }).filter((P) => P !== null);
    y(x);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "edit-popup", style: { padding: "10px", display: "flex", flexDirection: "column", gap: "15px" }, children: [
    /* @__PURE__ */ N.jsx("h3", { children: "Edit Suggestion" }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Title" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: c, onChange: (M) => f(M.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("label", { children: "Keywords (comma-separated)" }),
      /* @__PURE__ */ N.jsx("input", { type: "text", className: "text_pole", value: m, onChange: (M) => p(M.target.value) })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsx("h4", { children: "Apply Regex Scripts" }),
      /* @__PURE__ */ N.jsx(
        By,
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
        Iy,
        {
          items: E,
          onItemsChange: y,
          showToggleButton: !0,
          showDeleteButton: !0,
          sortableJsOptions: { style: { marginTop: "10px" } }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx(De, { onClick: C, className: "menu_button", children: "Simulate Regex" }),
    /* @__PURE__ */ N.jsx(
      br,
      {
        value: _,
        onChange: (M) => g(M.target.value),
        rows: 8,
        placeholder: "Resulting content..."
      }
    )
  ] });
});
function ue(n, r, s) {
  function a(m, p) {
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
    a(_, m), (p = _._zod).deferred ?? (p.deferred = []);
    for (const g of _._zod.deferred)
      g();
    return _;
  }
  return Object.defineProperty(f, "init", { value: a }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (m) => s?.Parent && m instanceof s.Parent ? !0 : m?._zod?.traits?.has(n)
  }), Object.defineProperty(f, "name", { value: n }), f;
}
class Di extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Vy extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const $y = {};
function Ma(n) {
  return $y;
}
function Yy(n) {
  const r = Object.values(n).filter((a) => typeof a == "number");
  return Object.entries(n).filter(([a, u]) => r.indexOf(+a) === -1).map(([a, u]) => u);
}
function jf(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Xf(n) {
  return {
    get value() {
      {
        const r = n();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function Qf(n) {
  return n == null;
}
function Kf(n) {
  const r = n.startsWith("^") ? 1 : 0, s = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, s);
}
const C0 = Symbol("evaluating");
function it(n, r, s) {
  let a;
  Object.defineProperty(n, r, {
    get() {
      if (a !== C0)
        return a === void 0 && (a = C0, a = s()), a;
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
    const a = Object.getOwnPropertyDescriptors(s);
    Object.assign(r, a);
  }
  return Object.defineProperties({}, r);
}
function k0(n) {
  return JSON.stringify(n);
}
const Fy = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function wl(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
const cw = Xf(() => {
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
  if (wl(n) === !1)
    return !1;
  const r = n.constructor;
  if (r === void 0)
    return !0;
  const s = r.prototype;
  return !(wl(s) === !1 || Object.prototype.hasOwnProperty.call(s, "isPrototypeOf") === !1);
}
function Xy(n) {
  return to(n) ? { ...n } : Array.isArray(n) ? [...n] : n;
}
const dw = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Al(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ta(n, r, s) {
  const a = new n._zod.constr(r ?? n._zod.def);
  return (!r || s?.parent) && (a._zod.parent = n), a;
}
function Le(n) {
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
function fw(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
function hw(n, r) {
  const s = n._zod.def, a = Da(n._zod.def, {
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
  return ta(n, a);
}
function pw(n, r) {
  const s = n._zod.def, a = Da(n._zod.def, {
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
  return ta(n, a);
}
function mw(n, r) {
  if (!to(r))
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
function gw(n, r) {
  if (!to(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const s = {
    ...n._zod.def,
    get shape() {
      const a = { ...n._zod.def.shape, ...r };
      return ja(this, "shape", a), a;
    },
    checks: n._zod.def.checks
  };
  return ta(n, s);
}
function vw(n, r) {
  const s = Da(n._zod.def, {
    get shape() {
      const a = { ...n._zod.def.shape, ...r._zod.def.shape };
      return ja(this, "shape", a), a;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ta(n, s);
}
function yw(n, r, s) {
  const a = Da(r._zod.def, {
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
  return ta(r, a);
}
function _w(n, r, s) {
  const a = Da(r._zod.def, {
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
  return ta(r, a);
}
function Ri(n, r = 0) {
  if (n.aborted === !0)
    return !0;
  for (let s = r; s < n.issues.length; s++)
    if (n.issues[s]?.continue !== !0)
      return !0;
  return !1;
}
function Qy(n, r) {
  return r.map((s) => {
    var a;
    return (a = s).path ?? (a.path = []), s.path.unshift(n), s;
  });
}
function el(n) {
  return typeof n == "string" ? n : n?.message;
}
function Ra(n, r, s) {
  const a = { ...n, path: n.path ?? [] };
  if (!n.message) {
    const u = el(n.inst?._zod.def?.error?.(n)) ?? el(r?.error?.(n)) ?? el(s.customError?.(n)) ?? el(s.localeError?.(n)) ?? "Invalid input";
    a.message = u;
  }
  return delete a.inst, delete a.continue, r?.reportInput || delete a.input, a;
}
function Jf(n) {
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
const Ky = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), n.message = JSON.stringify(r, jf, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, Jy = ue("$ZodError", Ky), Wy = ue("$ZodError", Ky, { Parent: Error });
function bw(n, r = (s) => s.message) {
  const s = {}, a = [];
  for (const u of n.issues)
    u.path.length > 0 ? (s[u.path[0]] = s[u.path[0]] || [], s[u.path[0]].push(r(u))) : a.push(r(u));
  return { formErrors: a, fieldErrors: s };
}
function Sw(n, r = (s) => s.message) {
  const s = { _errors: [] }, a = (u) => {
    for (const c of u.issues)
      if (c.code === "invalid_union" && c.errors.length)
        c.errors.map((f) => a({ issues: f }));
      else if (c.code === "invalid_key")
        a({ issues: c.issues });
      else if (c.code === "invalid_element")
        a({ issues: c.issues });
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
  return a(n), s;
}
const Wf = (n) => (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise)
    throw new Di();
  if (f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Fy(m, u?.callee), m;
  }
  return f.value;
}, eh = (n) => async (r, s, a, u) => {
  const c = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: s, issues: [] }, c);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const m = new (u?.Err ?? n)(f.issues.map((p) => Ra(p, c, Ma())));
    throw Fy(m, u?.callee), m;
  }
  return f.value;
}, Tl = (n) => (r, s, a) => {
  const u = a ? { ...a, async: !1 } : { async: !1 }, c = r._zod.run({ value: s, issues: [] }, u);
  if (c instanceof Promise)
    throw new Di();
  return c.issues.length ? {
    success: !1,
    error: new (n ?? Jy)(c.issues.map((f) => Ra(f, u, Ma())))
  } : { success: !0, data: c.value };
}, ww = /* @__PURE__ */ Tl(Wy), xl = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { async: !0 }) : { async: !0 };
  let c = r._zod.run({ value: s, issues: [] }, u);
  return c instanceof Promise && (c = await c), c.issues.length ? {
    success: !1,
    error: new n(c.issues.map((f) => Ra(f, u, Ma())))
  } : { success: !0, data: c.value };
}, Ew = /* @__PURE__ */ xl(Wy), Cw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Wf(n)(r, s, u);
}, kw = (n) => (r, s, a) => Wf(n)(r, s, a), Aw = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return eh(n)(r, s, u);
}, Tw = (n) => async (r, s, a) => eh(n)(r, s, a), xw = (n) => (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return Tl(n)(r, s, u);
}, Nw = (n) => (r, s, a) => Tl(n)(r, s, a), Ow = (n) => async (r, s, a) => {
  const u = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return xl(n)(r, s, u);
}, Mw = (n) => async (r, s, a) => xl(n)(r, s, a), Rw = /^[cC][^\s-]{8,}$/, jw = /^[0-9a-z]+$/, Dw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Lw = /^[0-9a-vA-V]{20}$/, zw = /^[A-Za-z0-9]{27}$/, Pw = /^[a-zA-Z0-9_-]{21}$/, Iw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Bw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, A0 = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Uw = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Hw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function qw() {
  return new RegExp(Hw, "u");
}
const Zw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Gw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Vw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $w = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Yw = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, e_ = /^[A-Za-z0-9_-]*$/, Fw = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Xw = /^\+(?:[0-9]){6,14}[0-9]$/, t_ = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Qw = /* @__PURE__ */ new RegExp(`^${t_}$`);
function n_(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Kw(n) {
  return new RegExp(`^${n_(n)}$`);
}
function Jw(n) {
  const r = n_({ precision: n.precision }), s = ["Z"];
  n.local && s.push(""), n.offset && s.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${r}(?:${s.join("|")})`;
  return new RegExp(`^${t_}T(?:${a})$`);
}
const Ww = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, eE = /^[^A-Z]*$/, tE = /^[^a-z]*$/, er = /* @__PURE__ */ ue("$ZodCheck", (n, r) => {
  var s;
  n._zod ?? (n._zod = {}), n._zod.def = r, (s = n._zod).onattach ?? (s.onattach = []);
}), nE = /* @__PURE__ */ ue("$ZodCheckMaxLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Qf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < u && (a._zod.bag.maximum = r.maximum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length <= r.maximum)
      return;
    const f = Jf(u);
    a.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), rE = /* @__PURE__ */ ue("$ZodCheckMinLength", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Qf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > u && (a._zod.bag.minimum = r.minimum);
  }), n._zod.check = (a) => {
    const u = a.value;
    if (u.length >= r.minimum)
      return;
    const f = Jf(u);
    a.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: u,
      inst: n,
      continue: !r.abort
    });
  };
}), aE = /* @__PURE__ */ ue("$ZodCheckLengthEquals", (n, r) => {
  var s;
  er.init(n, r), (s = n._zod.def).when ?? (s.when = (a) => {
    const u = a.value;
    return !Qf(u) && u.length !== void 0;
  }), n._zod.onattach.push((a) => {
    const u = a._zod.bag;
    u.minimum = r.length, u.maximum = r.length, u.length = r.length;
  }), n._zod.check = (a) => {
    const u = a.value, c = u.length;
    if (c === r.length)
      return;
    const f = Jf(u), m = c > r.length;
    a.issues.push({
      origin: f,
      ...m ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: a.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Nl = /* @__PURE__ */ ue("$ZodCheckStringFormat", (n, r) => {
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
}), iE = /* @__PURE__ */ ue("$ZodCheckRegex", (n, r) => {
  Nl.init(n, r), n._zod.check = (s) => {
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
}), sE = /* @__PURE__ */ ue("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = eE), Nl.init(n, r);
}), oE = /* @__PURE__ */ ue("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = tE), Nl.init(n, r);
}), uE = /* @__PURE__ */ ue("$ZodCheckIncludes", (n, r) => {
  er.init(n, r);
  const s = Al(r.includes), a = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${s}` : s);
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
}), lE = /* @__PURE__ */ ue("$ZodCheckStartsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`^${Al(r.prefix)}.*`);
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
}), cE = /* @__PURE__ */ ue("$ZodCheckEndsWith", (n, r) => {
  er.init(n, r);
  const s = new RegExp(`.*${Al(r.suffix)}$`);
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
}), dE = /* @__PURE__ */ ue("$ZodCheckOverwrite", (n, r) => {
  er.init(n, r), n._zod.check = (s) => {
    s.value = r.tx(s.value);
  };
});
class fE {
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
`).filter((f) => f), u = Math.min(...a.map((f) => f.length - f.trimStart().length)), c = a.map((f) => f.slice(u)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const r = Function, s = this?.args, u = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new r(...s, u.join(`
`));
  }
}
const hE = {
  major: 4,
  minor: 1,
  patch: 12
}, Tt = /* @__PURE__ */ ue("$ZodType", (n, r) => {
  var s;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = hE;
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
    const u = (f, m, p) => {
      let _ = Ri(f), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (!E._zod.def.when(f))
            continue;
        } else if (_)
          continue;
        const y = f.issues.length, b = E._zod.check(f);
        if (b instanceof Promise && p?.async === !1)
          throw new Di();
        if (g || b instanceof Promise)
          g = (g ?? Promise.resolve()).then(async () => {
            await b, f.issues.length !== y && (_ || (_ = Ri(f, y)));
          });
        else {
          if (f.issues.length === y)
            continue;
          _ || (_ = Ri(f, y));
        }
      }
      return g ? g.then(() => f) : f;
    }, c = (f, m, p) => {
      if (Ri(f))
        return f.aborted = !0, f;
      const _ = u(m, a, p);
      if (_ instanceof Promise) {
        if (p.async === !1)
          throw new Di();
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
          throw new Di();
        return p.then((_) => u(_, a, m));
      }
      return u(p, a, m);
    };
  }
  n["~standard"] = {
    validate: (u) => {
      try {
        const c = ww(n, u);
        return c.success ? { value: c.data } : { issues: c.error?.issues };
      } catch {
        return Ew(n, u).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), th = /* @__PURE__ */ ue("$ZodString", (n, r) => {
  Tt.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Ww(n._zod.bag), n._zod.parse = (s, a) => {
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
}), lt = /* @__PURE__ */ ue("$ZodStringFormat", (n, r) => {
  Nl.init(n, r), th.init(n, r);
}), pE = /* @__PURE__ */ ue("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = Bw), lt.init(n, r);
}), mE = /* @__PURE__ */ ue("$ZodUUID", (n, r) => {
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
    r.pattern ?? (r.pattern = A0(a));
  } else
    r.pattern ?? (r.pattern = A0());
  lt.init(n, r);
}), gE = /* @__PURE__ */ ue("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = Uw), lt.init(n, r);
}), vE = /* @__PURE__ */ ue("$ZodURL", (n, r) => {
  lt.init(n, r), n._zod.check = (s) => {
    try {
      const a = s.value.trim(), u = new URL(a);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(u.hostname) || s.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Fw.source,
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
}), yE = /* @__PURE__ */ ue("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = qw()), lt.init(n, r);
}), _E = /* @__PURE__ */ ue("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = Pw), lt.init(n, r);
}), bE = /* @__PURE__ */ ue("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = Rw), lt.init(n, r);
}), SE = /* @__PURE__ */ ue("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = jw), lt.init(n, r);
}), wE = /* @__PURE__ */ ue("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = Dw), lt.init(n, r);
}), EE = /* @__PURE__ */ ue("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = Lw), lt.init(n, r);
}), CE = /* @__PURE__ */ ue("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = zw), lt.init(n, r);
}), kE = /* @__PURE__ */ ue("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Jw(r)), lt.init(n, r);
}), AE = /* @__PURE__ */ ue("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Qw), lt.init(n, r);
}), TE = /* @__PURE__ */ ue("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = Kw(r)), lt.init(n, r);
}), xE = /* @__PURE__ */ ue("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = Iw), lt.init(n, r);
}), NE = /* @__PURE__ */ ue("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = Zw), lt.init(n, r), n._zod.onattach.push((s) => {
    const a = s._zod.bag;
    a.format = "ipv4";
  });
}), OE = /* @__PURE__ */ ue("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = Gw), lt.init(n, r), n._zod.onattach.push((s) => {
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
}), ME = /* @__PURE__ */ ue("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Vw), lt.init(n, r);
}), RE = /* @__PURE__ */ ue("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = $w), lt.init(n, r), n._zod.check = (s) => {
    const a = s.value.split("/");
    try {
      if (a.length !== 2)
        throw new Error();
      const [u, c] = a;
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
function r_(n) {
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
const jE = /* @__PURE__ */ ue("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Yw), lt.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (s) => {
    r_(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function DE(n) {
  if (!e_.test(n))
    return !1;
  const r = n.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), s = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return r_(s);
}
const LE = /* @__PURE__ */ ue("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = e_), lt.init(n, r), n._zod.onattach.push((s) => {
    s._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (s) => {
    DE(s.value) || s.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), zE = /* @__PURE__ */ ue("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = Xw), lt.init(n, r);
});
function PE(n, r = null) {
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
const IE = /* @__PURE__ */ ue("$ZodJWT", (n, r) => {
  lt.init(n, r), n._zod.check = (s) => {
    PE(s.value, r.alg) || s.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), BE = /* @__PURE__ */ ue("$ZodUnknown", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s) => s;
}), UE = /* @__PURE__ */ ue("$ZodNever", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, a) => (s.issues.push({
    expected: "never",
    code: "invalid_type",
    input: s.value,
    inst: n
  }), s);
});
function T0(n, r, s) {
  n.issues.length && r.issues.push(...Qy(s, n.issues)), r.value[s] = n.value;
}
const HE = /* @__PURE__ */ ue("$ZodArray", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, a) => {
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
      }, a);
      p instanceof Promise ? c.push(p.then((_) => T0(_, s, f))) : T0(p, s, f);
    }
    return c.length ? Promise.all(c).then(() => s) : s;
  };
});
function El(n, r, s, a) {
  n.issues.length && r.issues.push(...Qy(s, n.issues)), n.value === void 0 ? s in a && (r.value[s] = void 0) : r.value[s] = n.value;
}
function a_(n) {
  const r = Object.keys(n.shape);
  for (const a of r)
    if (!n.shape?.[a]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${a}": expected a Zod schema`);
  const s = fw(n.shape);
  return {
    ...n,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(s)
  };
}
function i_(n, r, s, a, u, c) {
  const f = [], m = u.keySet, p = u.catchall._zod, _ = p.def.type;
  for (const g of Object.keys(r)) {
    if (m.has(g))
      continue;
    if (_ === "never") {
      f.push(g);
      continue;
    }
    const E = p.run({ value: r[g], issues: [] }, a);
    E instanceof Promise ? n.push(E.then((y) => El(y, s, g, r))) : El(E, s, g, r);
  }
  return f.length && s.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: c
  }), n.length ? Promise.all(n).then(() => s) : s;
}
const qE = /* @__PURE__ */ ue("$ZodObject", (n, r) => {
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
  const a = Xf(() => a_(r));
  it(n._zod, "propValues", () => {
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
  const u = wl, c = r.catchall;
  let f;
  n._zod.parse = (m, p) => {
    f ?? (f = a.value);
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
      h instanceof Promise ? g.push(h.then((C) => El(C, m, y, _))) : El(h, m, y, _);
    }
    return c ? i_(g, _, m, p, a.value, n) : g.length ? Promise.all(g).then(() => m) : m;
  };
}), ZE = /* @__PURE__ */ ue("$ZodObjectJIT", (n, r) => {
  qE.init(n, r);
  const s = n._zod.parse, a = Xf(() => a_(r)), u = (y) => {
    const b = new fE(["shape", "payload", "ctx"]), h = a.value, C = (P) => {
      const l = k0(P);
      return `shape[${l}]._zod.run({ value: input[${l}], issues: [] }, ctx)`;
    };
    b.write("const input = payload.value;");
    const A = /* @__PURE__ */ Object.create(null);
    let M = 0;
    for (const P of h.keys)
      A[P] = `key_${M++}`;
    b.write("const newResult = {};");
    for (const P of h.keys) {
      const l = A[P], S = k0(P);
      b.write(`const ${l} = ${C(P)};`), b.write(`
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
    return (P, l) => x(y, P, l);
  };
  let c;
  const f = wl, m = !$y.jitless, _ = m && cw.value, g = r.catchall;
  let E;
  n._zod.parse = (y, b) => {
    E ?? (E = a.value);
    const h = y.value;
    return f(h) ? m && _ && b?.async === !1 && b.jitless !== !0 ? (c || (c = u(r.shape)), y = c(y, b), g ? i_([], h, y, b, E, n) : y) : s(y, b) : (y.issues.push({
      expected: "object",
      code: "invalid_type",
      input: h,
      inst: n
    }), y);
  };
});
function x0(n, r, s, a) {
  for (const c of n)
    if (c.issues.length === 0)
      return r.value = c.value, r;
  const u = n.filter((c) => !Ri(c));
  return u.length === 1 ? (r.value = u[0].value, u[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: s,
    errors: n.map((c) => c.issues.map((f) => Ra(f, a, Ma())))
  }), r);
}
const GE = /* @__PURE__ */ ue("$ZodUnion", (n, r) => {
  Tt.init(n, r), it(n._zod, "optin", () => r.options.some((u) => u._zod.optin === "optional") ? "optional" : void 0), it(n._zod, "optout", () => r.options.some((u) => u._zod.optout === "optional") ? "optional" : void 0), it(n._zod, "values", () => {
    if (r.options.every((u) => u._zod.values))
      return new Set(r.options.flatMap((u) => Array.from(u._zod.values)));
  }), it(n._zod, "pattern", () => {
    if (r.options.every((u) => u._zod.pattern)) {
      const u = r.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${u.map((c) => Kf(c.source)).join("|")})$`);
    }
  });
  const s = r.options.length === 1, a = r.options[0]._zod.run;
  n._zod.parse = (u, c) => {
    if (s)
      return a(u, c);
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
    return f ? Promise.all(m).then((p) => x0(p, u, n, c)) : x0(m, u, n, c);
  };
}), VE = /* @__PURE__ */ ue("$ZodIntersection", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, a) => {
    const u = s.value, c = r.left._zod.run({ value: u, issues: [] }, a), f = r.right._zod.run({ value: u, issues: [] }, a);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([p, _]) => N0(s, p, _)) : N0(s, c, f);
  };
});
function Df(n, r) {
  if (n === r)
    return { valid: !0, data: n };
  if (n instanceof Date && r instanceof Date && +n == +r)
    return { valid: !0, data: n };
  if (to(n) && to(r)) {
    const s = Object.keys(r), a = Object.keys(n).filter((c) => s.indexOf(c) !== -1), u = { ...n, ...r };
    for (const c of a) {
      const f = Df(n[c], r[c]);
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
    for (let a = 0; a < n.length; a++) {
      const u = n[a], c = r[a], f = Df(u, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...f.mergeErrorPath]
        };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function N0(n, r, s) {
  if (r.issues.length && n.issues.push(...r.issues), s.issues.length && n.issues.push(...s.issues), Ri(n))
    return n;
  const a = Df(r.value, s.value);
  if (!a.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
  return n.value = a.data, n;
}
const $E = /* @__PURE__ */ ue("$ZodEnum", (n, r) => {
  Tt.init(n, r);
  const s = Yy(r.entries), a = new Set(s);
  n._zod.values = a, n._zod.pattern = new RegExp(`^(${s.filter((u) => dw.has(typeof u)).map((u) => typeof u == "string" ? Al(u) : u.toString()).join("|")})$`), n._zod.parse = (u, c) => {
    const f = u.value;
    return a.has(f) || u.issues.push({
      code: "invalid_value",
      values: s,
      input: f,
      inst: n
    }), u;
  };
}), YE = /* @__PURE__ */ ue("$ZodTransform", (n, r) => {
  Tt.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new Vy(n.constructor.name);
    const u = r.transform(s.value, s);
    if (a.async)
      return (u instanceof Promise ? u : Promise.resolve(u)).then((f) => (s.value = f, s));
    if (u instanceof Promise)
      throw new Di();
    return s.value = u, s;
  };
});
function O0(n, r) {
  return n.issues.length && r === void 0 ? { issues: [], value: void 0 } : n;
}
const FE = /* @__PURE__ */ ue("$ZodOptional", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", it(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), it(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Kf(s.source)})?$`) : void 0;
  }), n._zod.parse = (s, a) => {
    if (r.innerType._zod.optin === "optional") {
      const u = r.innerType._zod.run(s, a);
      return u instanceof Promise ? u.then((c) => O0(c, s.value)) : O0(u, s.value);
    }
    return s.value === void 0 ? s : r.innerType._zod.run(s, a);
  };
}), XE = /* @__PURE__ */ ue("$ZodNullable", (n, r) => {
  Tt.init(n, r), it(n._zod, "optin", () => r.innerType._zod.optin), it(n._zod, "optout", () => r.innerType._zod.optout), it(n._zod, "pattern", () => {
    const s = r.innerType._zod.pattern;
    return s ? new RegExp(`^(${Kf(s.source)}|null)$`) : void 0;
  }), it(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (s, a) => s.value === null ? s : r.innerType._zod.run(s, a);
}), QE = /* @__PURE__ */ ue("$ZodDefault", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", it(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    if (s.value === void 0)
      return s.value = r.defaultValue, s;
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => M0(c, r)) : M0(u, r);
  };
});
function M0(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
const KE = /* @__PURE__ */ ue("$ZodPrefault", (n, r) => {
  Tt.init(n, r), n._zod.optin = "optional", it(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => (a.direction === "backward" || s.value === void 0 && (s.value = r.defaultValue), r.innerType._zod.run(s, a));
}), JE = /* @__PURE__ */ ue("$ZodNonOptional", (n, r) => {
  Tt.init(n, r), it(n._zod, "values", () => {
    const s = r.innerType._zod.values;
    return s ? new Set([...s].filter((a) => a !== void 0)) : void 0;
  }), n._zod.parse = (s, a) => {
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => R0(c, n)) : R0(u, n);
  };
});
function R0(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
const WE = /* @__PURE__ */ ue("$ZodCatch", (n, r) => {
  Tt.init(n, r), it(n._zod, "optin", () => r.innerType._zod.optin), it(n._zod, "optout", () => r.innerType._zod.optout), it(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => (s.value = c.value, c.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: c.issues.map((f) => Ra(f, a, Ma()))
      },
      input: s.value
    }), s.issues = []), s)) : (s.value = u.value, u.issues.length && (s.value = r.catchValue({
      ...s,
      error: {
        issues: u.issues.map((c) => Ra(c, a, Ma()))
      },
      input: s.value
    }), s.issues = []), s);
  };
}), eC = /* @__PURE__ */ ue("$ZodPipe", (n, r) => {
  Tt.init(n, r), it(n._zod, "values", () => r.in._zod.values), it(n._zod, "optin", () => r.in._zod.optin), it(n._zod, "optout", () => r.out._zod.optout), it(n._zod, "propValues", () => r.in._zod.propValues), n._zod.parse = (s, a) => {
    if (a.direction === "backward") {
      const c = r.out._zod.run(s, a);
      return c instanceof Promise ? c.then((f) => tl(f, r.in, a)) : tl(c, r.in, a);
    }
    const u = r.in._zod.run(s, a);
    return u instanceof Promise ? u.then((c) => tl(c, r.out, a)) : tl(u, r.out, a);
  };
});
function tl(n, r, s) {
  return n.issues.length ? (n.aborted = !0, n) : r._zod.run({ value: n.value, issues: n.issues }, s);
}
const tC = /* @__PURE__ */ ue("$ZodReadonly", (n, r) => {
  Tt.init(n, r), it(n._zod, "propValues", () => r.innerType._zod.propValues), it(n._zod, "values", () => r.innerType._zod.values), it(n._zod, "optin", () => r.innerType._zod.optin), it(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      return r.innerType._zod.run(s, a);
    const u = r.innerType._zod.run(s, a);
    return u instanceof Promise ? u.then(j0) : j0(u);
  };
});
function j0(n) {
  return n.value = Object.freeze(n.value), n;
}
const nC = /* @__PURE__ */ ue("$ZodCustom", (n, r) => {
  er.init(n, r), Tt.init(n, r), n._zod.parse = (s, a) => s, n._zod.check = (s) => {
    const a = s.value, u = r.fn(a);
    if (u instanceof Promise)
      return u.then((c) => D0(c, s, a, n));
    D0(u, s, a, n);
  };
});
function D0(n, r, s, a) {
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
class s_ {
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
function rC() {
  return new s_();
}
const Fs = /* @__PURE__ */ rC();
function aC(n, r) {
  return new n({
    type: "string",
    ...Le(r)
  });
}
function iC(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function L0(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function sC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function oC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Le(r)
  });
}
function uC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Le(r)
  });
}
function lC(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Le(r)
  });
}
function cC(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function dC(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function fC(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function hC(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function pC(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function mC(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function gC(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function vC(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function yC(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function _C(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function bC(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function SC(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function wC(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function EC(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function CC(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function kC(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Le(r)
  });
}
function AC(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Le(r)
  });
}
function TC(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...Le(r)
  });
}
function xC(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Le(r)
  });
}
function NC(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Le(r)
  });
}
function OC(n) {
  return new n({
    type: "unknown"
  });
}
function MC(n, r) {
  return new n({
    type: "never",
    ...Le(r)
  });
}
function o_(n, r) {
  return new nE({
    check: "max_length",
    ...Le(r),
    maximum: n
  });
}
function Cl(n, r) {
  return new rE({
    check: "min_length",
    ...Le(r),
    minimum: n
  });
}
function u_(n, r) {
  return new aE({
    check: "length_equals",
    ...Le(r),
    length: n
  });
}
function RC(n, r) {
  return new iE({
    check: "string_format",
    format: "regex",
    ...Le(r),
    pattern: n
  });
}
function jC(n) {
  return new sE({
    check: "string_format",
    format: "lowercase",
    ...Le(n)
  });
}
function DC(n) {
  return new oE({
    check: "string_format",
    format: "uppercase",
    ...Le(n)
  });
}
function LC(n, r) {
  return new uE({
    check: "string_format",
    format: "includes",
    ...Le(r),
    includes: n
  });
}
function zC(n, r) {
  return new lE({
    check: "string_format",
    format: "starts_with",
    ...Le(r),
    prefix: n
  });
}
function PC(n, r) {
  return new cE({
    check: "string_format",
    format: "ends_with",
    ...Le(r),
    suffix: n
  });
}
function so(n) {
  return new dE({
    check: "overwrite",
    tx: n
  });
}
function IC(n) {
  return so((r) => r.normalize(n));
}
function BC() {
  return so((n) => n.trim());
}
function UC() {
  return so((n) => n.toLowerCase());
}
function HC() {
  return so((n) => n.toUpperCase());
}
function qC(n, r, s) {
  return new n({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...Le(s)
  });
}
function ZC(n, r, s) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...Le(s)
  });
}
function GC(n) {
  const r = VC((s) => (s.addIssue = (a) => {
    if (typeof a == "string")
      s.issues.push(no(a, s.value, r._zod.def));
    else {
      const u = a;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = s.value), u.inst ?? (u.inst = r), u.continue ?? (u.continue = !r._zod.def.abort), s.issues.push(no(u));
    }
  }, n(s.value, s)));
  return r;
}
function VC(n, r) {
  const s = new er({
    check: "custom",
    ...Le(r)
  });
  return s._zod.check = n, s;
}
class z0 {
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
            const { minimum: C, maximum: A, format: M, patterns: x, contentEncoding: P } = r._zod.bag;
            if (typeof C == "number" && (h.minLength = C), typeof A == "number" && (h.maxLength = A), M && (h.format = c[M] ?? M, h.format === "" && delete h.format), P && (h.contentEncoding = P), x && x.size > 0) {
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
            const h = b, { minimum: C, maximum: A, format: M, multipleOf: x, exclusiveMaximum: P, exclusiveMinimum: l } = r._zod.bag;
            typeof M == "string" && M.includes("int") ? h.type = "integer" : h.type = "number", typeof l == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.minimum = l, h.exclusiveMinimum = !0) : h.exclusiveMinimum = l), typeof C == "number" && (h.minimum = C, typeof l == "number" && this.target !== "draft-4" && (l >= C ? delete h.minimum : delete h.exclusiveMinimum)), typeof P == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (h.maximum = P, h.exclusiveMaximum = !0) : h.exclusiveMaximum = P), typeof A == "number" && (h.maximum = A, typeof P == "number" && this.target !== "draft-4" && (P <= A ? delete h.maximum : delete h.exclusiveMaximum)), typeof x == "number" && (h.multipleOf = x);
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
            const A = new Set(Object.keys(C)), M = new Set([...A].filter((x) => {
              const P = u.shape[x]._zod;
              return this.io === "input" ? P.optin === void 0 : P.optout === void 0;
            }));
            M.size > 0 && (h.required = Array.from(M)), u.catchall?._zod.def.type === "never" ? h.additionalProperties = !1 : u.catchall ? u.catchall && (h.additionalProperties = this.process(u.catchall, {
              ...E,
              path: [...E.path, "additionalProperties"]
            })) : this.io === "output" && (h.additionalProperties = !1);
            break;
          }
          case "union": {
            const h = b, C = u.options.map((A, M) => this.process(A, {
              ...E,
              path: [...E.path, "anyOf", M]
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
            }), M = (P) => "allOf" in P && Object.keys(P).length === 1, x = [
              ...M(C) ? C.allOf : [C],
              ...M(A) ? A.allOf : [A]
            ];
            h.allOf = x;
            break;
          }
          case "tuple": {
            const h = b;
            h.type = "array";
            const C = this.target === "draft-2020-12" ? "prefixItems" : "items", A = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", M = u.items.map((S, w) => this.process(S, {
              ...E,
              path: [...E.path, C, w]
            })), x = u.rest ? this.process(u.rest, {
              ...E,
              path: [...E.path, A, ...this.target === "openapi-3.0" ? [u.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (h.prefixItems = M, x && (h.items = x)) : this.target === "openapi-3.0" ? (h.items = {
              anyOf: M
            }, x && h.items.anyOf.push(x), h.minItems = M.length, x || (h.maxItems = M.length)) : (h.items = M, x && (h.additionalItems = x));
            const { minimum: P, maximum: l } = r._zod.bag;
            typeof P == "number" && (h.minItems = P), typeof l == "number" && (h.maxItems = l);
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
            const h = b, C = Yy(u.entries);
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
            }, { minimum: A, maximum: M, mime: x } = r._zod.bag;
            A !== void 0 && (C.minLength = A), M !== void 0 && (C.maxLength = M), x ? x.length === 1 ? (C.contentMediaType = x[0], Object.assign(h, C)) : h.anyOf = x.map((P) => ({ ...C, contentMediaType: P })) : Object.assign(h, C);
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
    return _ && Object.assign(m.schema, _), this.io === "input" && At(r) && (delete m.schema.examples, delete m.schema.default), this.io === "input" && m.schema._prefault && ((a = m.schema).default ?? (a.default = m.schema._prefault)), delete m.schema._prefault, this.seen.get(r).schema;
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
    const c = (g) => {
      const E = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (a.external) {
        const C = a.external.registry.get(g[0])?.id, A = a.external.uri ?? ((x) => x);
        if (C)
          return { ref: A(C) };
        const M = g[1].defId ?? g[1].schema.id ?? `schema${this.counter++}`;
        return g[1].defId = M, { defId: M, ref: `${A("__shared")}#/${E}/${M}` };
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
    if (a.cycles === "throw")
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
      if (a.external) {
        const b = a.external.registry.get(g[0])?.id;
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
      if (E.count > 1 && a.reused === "ref") {
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
    if (this.target === "draft-2020-12" ? p.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? p.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? p.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), a.external?.uri) {
      const g = a.external.registry.get(r)?.id;
      if (!g)
        throw new Error("Schema is missing an `id` property");
      p.$id = a.external.uri(g);
    }
    Object.assign(p, u.def);
    const _ = a.external?.defs ?? {};
    for (const g of this.seen.entries()) {
      const E = g[1];
      E.def && E.defId && (_[E.defId] = E.def);
    }
    a.external || Object.keys(_).length > 0 && (this.target === "draft-2020-12" ? p.$defs = _ : p.definitions = _);
    try {
      return JSON.parse(JSON.stringify(p));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function $C(n, r) {
  if (n instanceof s_) {
    const a = new z0(r), u = {};
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      a.process(_);
    }
    const c = {}, f = {
      registry: n,
      uri: r?.uri,
      defs: u
    };
    for (const m of n._idmap.entries()) {
      const [p, _] = m;
      c[p] = a.emit(_, {
        ...r,
        external: f
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
const YC = /* @__PURE__ */ ue("ZodISODateTime", (n, r) => {
  kE.init(n, r), ft.init(n, r);
});
function FC(n) {
  return AC(YC, n);
}
const XC = /* @__PURE__ */ ue("ZodISODate", (n, r) => {
  AE.init(n, r), ft.init(n, r);
});
function QC(n) {
  return TC(XC, n);
}
const KC = /* @__PURE__ */ ue("ZodISOTime", (n, r) => {
  TE.init(n, r), ft.init(n, r);
});
function JC(n) {
  return xC(KC, n);
}
const WC = /* @__PURE__ */ ue("ZodISODuration", (n, r) => {
  xE.init(n, r), ft.init(n, r);
});
function e4(n) {
  return NC(WC, n);
}
const t4 = (n, r) => {
  Jy.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: {
      value: (s) => Sw(n, s)
      // enumerable: false,
    },
    flatten: {
      value: (s) => bw(n, s)
      // enumerable: false,
    },
    addIssue: {
      value: (s) => {
        n.issues.push(s), n.message = JSON.stringify(n.issues, jf, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (s) => {
        n.issues.push(...s), n.message = JSON.stringify(n.issues, jf, 2);
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
}, Rn = ue("ZodError", t4, {
  Parent: Error
}), n4 = /* @__PURE__ */ Wf(Rn), r4 = /* @__PURE__ */ eh(Rn), a4 = /* @__PURE__ */ Tl(Rn), i4 = /* @__PURE__ */ xl(Rn), s4 = /* @__PURE__ */ Cw(Rn), o4 = /* @__PURE__ */ kw(Rn), u4 = /* @__PURE__ */ Aw(Rn), l4 = /* @__PURE__ */ Tw(Rn), c4 = /* @__PURE__ */ xw(Rn), d4 = /* @__PURE__ */ Nw(Rn), f4 = /* @__PURE__ */ Ow(Rn), h4 = /* @__PURE__ */ Mw(Rn), Rt = /* @__PURE__ */ ue("ZodType", (n, r) => (Tt.init(n, r), n.def = r, n.type = r.type, Object.defineProperty(n, "_def", { value: r }), n.check = (...s) => n.clone(Da(r, {
  checks: [
    ...r.checks ?? [],
    ...s.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
  ]
})), n.clone = (s, a) => ta(n, s, a), n.brand = () => n, n.register = ((s, a) => (s.add(n, a), n)), n.parse = (s, a) => n4(n, s, a, { callee: n.parse }), n.safeParse = (s, a) => a4(n, s, a), n.parseAsync = async (s, a) => r4(n, s, a, { callee: n.parseAsync }), n.safeParseAsync = async (s, a) => i4(n, s, a), n.spa = n.safeParseAsync, n.encode = (s, a) => s4(n, s, a), n.decode = (s, a) => o4(n, s, a), n.encodeAsync = async (s, a) => u4(n, s, a), n.decodeAsync = async (s, a) => l4(n, s, a), n.safeEncode = (s, a) => c4(n, s, a), n.safeDecode = (s, a) => d4(n, s, a), n.safeEncodeAsync = async (s, a) => f4(n, s, a), n.safeDecodeAsync = async (s, a) => h4(n, s, a), n.refine = (s, a) => n.check(nk(s, a)), n.superRefine = (s) => n.check(rk(s)), n.overwrite = (s) => n.check(so(s)), n.optional = () => B0(n), n.nullable = () => U0(n), n.nullish = () => B0(U0(n)), n.nonoptional = (s) => X4(n, s), n.array = () => Oa(n), n.or = (s) => I4([n, s]), n.and = (s) => U4(n, s), n.transform = (s) => H0(n, Z4(s)), n.default = (s) => $4(n, s), n.prefault = (s) => F4(n, s), n.catch = (s) => K4(n, s), n.pipe = (s) => H0(n, s), n.readonly = () => ek(n), n.describe = (s) => {
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
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), l_ = /* @__PURE__ */ ue("_ZodString", (n, r) => {
  th.init(n, r), Rt.init(n, r);
  const s = n._zod.bag;
  n.format = s.format ?? null, n.minLength = s.minimum ?? null, n.maxLength = s.maximum ?? null, n.regex = (...a) => n.check(RC(...a)), n.includes = (...a) => n.check(LC(...a)), n.startsWith = (...a) => n.check(zC(...a)), n.endsWith = (...a) => n.check(PC(...a)), n.min = (...a) => n.check(Cl(...a)), n.max = (...a) => n.check(o_(...a)), n.length = (...a) => n.check(u_(...a)), n.nonempty = (...a) => n.check(Cl(1, ...a)), n.lowercase = (a) => n.check(jC(a)), n.uppercase = (a) => n.check(DC(a)), n.trim = () => n.check(BC()), n.normalize = (...a) => n.check(IC(...a)), n.toLowerCase = () => n.check(UC()), n.toUpperCase = () => n.check(HC());
}), p4 = /* @__PURE__ */ ue("ZodString", (n, r) => {
  th.init(n, r), l_.init(n, r), n.email = (s) => n.check(iC(m4, s)), n.url = (s) => n.check(cC(g4, s)), n.jwt = (s) => n.check(kC(M4, s)), n.emoji = (s) => n.check(dC(v4, s)), n.guid = (s) => n.check(L0(P0, s)), n.uuid = (s) => n.check(sC(nl, s)), n.uuidv4 = (s) => n.check(oC(nl, s)), n.uuidv6 = (s) => n.check(uC(nl, s)), n.uuidv7 = (s) => n.check(lC(nl, s)), n.nanoid = (s) => n.check(fC(y4, s)), n.guid = (s) => n.check(L0(P0, s)), n.cuid = (s) => n.check(hC(_4, s)), n.cuid2 = (s) => n.check(pC(b4, s)), n.ulid = (s) => n.check(mC(S4, s)), n.base64 = (s) => n.check(wC(x4, s)), n.base64url = (s) => n.check(EC(N4, s)), n.xid = (s) => n.check(gC(w4, s)), n.ksuid = (s) => n.check(vC(E4, s)), n.ipv4 = (s) => n.check(yC(C4, s)), n.ipv6 = (s) => n.check(_C(k4, s)), n.cidrv4 = (s) => n.check(bC(A4, s)), n.cidrv6 = (s) => n.check(SC(T4, s)), n.e164 = (s) => n.check(CC(O4, s)), n.datetime = (s) => n.check(FC(s)), n.date = (s) => n.check(QC(s)), n.time = (s) => n.check(JC(s)), n.duration = (s) => n.check(e4(s));
});
function Zt(n) {
  return aC(p4, n);
}
const ft = /* @__PURE__ */ ue("ZodStringFormat", (n, r) => {
  lt.init(n, r), l_.init(n, r);
}), m4 = /* @__PURE__ */ ue("ZodEmail", (n, r) => {
  gE.init(n, r), ft.init(n, r);
}), P0 = /* @__PURE__ */ ue("ZodGUID", (n, r) => {
  pE.init(n, r), ft.init(n, r);
}), nl = /* @__PURE__ */ ue("ZodUUID", (n, r) => {
  mE.init(n, r), ft.init(n, r);
}), g4 = /* @__PURE__ */ ue("ZodURL", (n, r) => {
  vE.init(n, r), ft.init(n, r);
}), v4 = /* @__PURE__ */ ue("ZodEmoji", (n, r) => {
  yE.init(n, r), ft.init(n, r);
}), y4 = /* @__PURE__ */ ue("ZodNanoID", (n, r) => {
  _E.init(n, r), ft.init(n, r);
}), _4 = /* @__PURE__ */ ue("ZodCUID", (n, r) => {
  bE.init(n, r), ft.init(n, r);
}), b4 = /* @__PURE__ */ ue("ZodCUID2", (n, r) => {
  SE.init(n, r), ft.init(n, r);
}), S4 = /* @__PURE__ */ ue("ZodULID", (n, r) => {
  wE.init(n, r), ft.init(n, r);
}), w4 = /* @__PURE__ */ ue("ZodXID", (n, r) => {
  EE.init(n, r), ft.init(n, r);
}), E4 = /* @__PURE__ */ ue("ZodKSUID", (n, r) => {
  CE.init(n, r), ft.init(n, r);
}), C4 = /* @__PURE__ */ ue("ZodIPv4", (n, r) => {
  NE.init(n, r), ft.init(n, r);
}), k4 = /* @__PURE__ */ ue("ZodIPv6", (n, r) => {
  OE.init(n, r), ft.init(n, r);
}), A4 = /* @__PURE__ */ ue("ZodCIDRv4", (n, r) => {
  ME.init(n, r), ft.init(n, r);
}), T4 = /* @__PURE__ */ ue("ZodCIDRv6", (n, r) => {
  RE.init(n, r), ft.init(n, r);
}), x4 = /* @__PURE__ */ ue("ZodBase64", (n, r) => {
  jE.init(n, r), ft.init(n, r);
}), N4 = /* @__PURE__ */ ue("ZodBase64URL", (n, r) => {
  LE.init(n, r), ft.init(n, r);
}), O4 = /* @__PURE__ */ ue("ZodE164", (n, r) => {
  zE.init(n, r), ft.init(n, r);
}), M4 = /* @__PURE__ */ ue("ZodJWT", (n, r) => {
  IE.init(n, r), ft.init(n, r);
}), R4 = /* @__PURE__ */ ue("ZodUnknown", (n, r) => {
  BE.init(n, r), Rt.init(n, r);
});
function I0() {
  return OC(R4);
}
const j4 = /* @__PURE__ */ ue("ZodNever", (n, r) => {
  UE.init(n, r), Rt.init(n, r);
});
function D4(n) {
  return MC(j4, n);
}
const L4 = /* @__PURE__ */ ue("ZodArray", (n, r) => {
  HE.init(n, r), Rt.init(n, r), n.element = r.element, n.min = (s, a) => n.check(Cl(s, a)), n.nonempty = (s) => n.check(Cl(1, s)), n.max = (s, a) => n.check(o_(s, a)), n.length = (s, a) => n.check(u_(s, a)), n.unwrap = () => n.element;
});
function Oa(n, r) {
  return qC(L4, n, r);
}
const z4 = /* @__PURE__ */ ue("ZodObject", (n, r) => {
  ZE.init(n, r), Rt.init(n, r), it(n, "shape", () => r.shape), n.keyof = () => H4(Object.keys(n._zod.def.shape)), n.catchall = (s) => n.clone({ ...n._zod.def, catchall: s }), n.passthrough = () => n.clone({ ...n._zod.def, catchall: I0() }), n.loose = () => n.clone({ ...n._zod.def, catchall: I0() }), n.strict = () => n.clone({ ...n._zod.def, catchall: D4() }), n.strip = () => n.clone({ ...n._zod.def, catchall: void 0 }), n.extend = (s) => mw(n, s), n.safeExtend = (s) => gw(n, s), n.merge = (s) => vw(n, s), n.pick = (s) => hw(n, s), n.omit = (s) => pw(n, s), n.partial = (...s) => yw(c_, n, s[0]), n.required = (...s) => _w(d_, n, s[0]);
});
function oo(n, r) {
  const s = {
    type: "object",
    shape: n ?? {},
    ...Le(r)
  };
  return new z4(s);
}
const P4 = /* @__PURE__ */ ue("ZodUnion", (n, r) => {
  GE.init(n, r), Rt.init(n, r), n.options = r.options;
});
function I4(n, r) {
  return new P4({
    type: "union",
    options: n,
    ...Le(r)
  });
}
const B4 = /* @__PURE__ */ ue("ZodIntersection", (n, r) => {
  VE.init(n, r), Rt.init(n, r);
});
function U4(n, r) {
  return new B4({
    type: "intersection",
    left: n,
    right: r
  });
}
const Lf = /* @__PURE__ */ ue("ZodEnum", (n, r) => {
  $E.init(n, r), Rt.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const s = new Set(Object.keys(r.entries));
  n.extract = (a, u) => {
    const c = {};
    for (const f of a)
      if (s.has(f))
        c[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Lf({
      ...r,
      checks: [],
      ...Le(u),
      entries: c
    });
  }, n.exclude = (a, u) => {
    const c = { ...r.entries };
    for (const f of a)
      if (s.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Lf({
      ...r,
      checks: [],
      ...Le(u),
      entries: c
    });
  };
});
function H4(n, r) {
  const s = Array.isArray(n) ? Object.fromEntries(n.map((a) => [a, a])) : n;
  return new Lf({
    type: "enum",
    entries: s,
    ...Le(r)
  });
}
const q4 = /* @__PURE__ */ ue("ZodTransform", (n, r) => {
  YE.init(n, r), Rt.init(n, r), n._zod.parse = (s, a) => {
    if (a.direction === "backward")
      throw new Vy(n.constructor.name);
    s.addIssue = (c) => {
      if (typeof c == "string")
        s.issues.push(no(c, s.value, r));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = s.value), f.inst ?? (f.inst = n), s.issues.push(no(f));
      }
    };
    const u = r.transform(s.value, s);
    return u instanceof Promise ? u.then((c) => (s.value = c, s)) : (s.value = u, s);
  };
});
function Z4(n) {
  return new q4({
    type: "transform",
    transform: n
  });
}
const c_ = /* @__PURE__ */ ue("ZodOptional", (n, r) => {
  FE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function B0(n) {
  return new c_({
    type: "optional",
    innerType: n
  });
}
const G4 = /* @__PURE__ */ ue("ZodNullable", (n, r) => {
  XE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function U0(n) {
  return new G4({
    type: "nullable",
    innerType: n
  });
}
const V4 = /* @__PURE__ */ ue("ZodDefault", (n, r) => {
  QE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function $4(n, r) {
  return new V4({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : Xy(r);
    }
  });
}
const Y4 = /* @__PURE__ */ ue("ZodPrefault", (n, r) => {
  KE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function F4(n, r) {
  return new Y4({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : Xy(r);
    }
  });
}
const d_ = /* @__PURE__ */ ue("ZodNonOptional", (n, r) => {
  JE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function X4(n, r) {
  return new d_({
    type: "nonoptional",
    innerType: n,
    ...Le(r)
  });
}
const Q4 = /* @__PURE__ */ ue("ZodCatch", (n, r) => {
  WE.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function K4(n, r) {
  return new Q4({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const J4 = /* @__PURE__ */ ue("ZodPipe", (n, r) => {
  eC.init(n, r), Rt.init(n, r), n.in = r.in, n.out = r.out;
});
function H0(n, r) {
  return new J4({
    type: "pipe",
    in: n,
    out: r
    // ...util.normalizeParams(params),
  });
}
const W4 = /* @__PURE__ */ ue("ZodReadonly", (n, r) => {
  tC.init(n, r), Rt.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function ek(n) {
  return new W4({
    type: "readonly",
    innerType: n
  });
}
const tk = /* @__PURE__ */ ue("ZodCustom", (n, r) => {
  nC.init(n, r), Rt.init(n, r);
});
function nk(n, r = {}) {
  return ZC(tk, n, r);
}
function rk(n) {
  return GC(n);
}
const q0 = {
  ENTRY: "EntryRevision",
  GLOBAL: "GlobalRevision"
}, zf = "placeholder-chatHistory", ak = oo({
  justification: Zt().describe("A brief, friendly explanation of the changes made."),
  name: Zt().describe("The entry's new name/comment."),
  triggers: Oa(Zt()).describe("The entry's new keywords/triggers."),
  content: Zt().describe("The entry's new content.")
}), ik = oo({
  worldName: Zt().describe("The name of the world where the new entry should be added."),
  name: Zt().describe("The new entry's name/comment."),
  triggers: Oa(Zt()).describe("The new entry's triggers."),
  content: Zt().describe("The new entry's content.")
}), sk = oo({
  worldName: Zt().describe("The name of the world containing the entry to change."),
  originalName: Zt().describe("The original name/comment of the entry to change, used for identification."),
  newName: Zt().optional().describe("The entry's new name/comment. If omitted, the name is not changed."),
  triggers: Oa(Zt()).optional().describe("The entry's new list of triggers."),
  content: Zt().optional().describe("The entry's new content.")
}), ok = oo({
  worldName: Zt().describe("The name of the world containing the entry to remove."),
  name: Zt().describe("The name/comment of the entry to remove.")
}), uk = oo({
  justification: Zt().describe("A brief, friendly explanation of all the operations performed."),
  add: Oa(ik).optional().describe("A list of new entries to add."),
  change: Oa(sk).optional().describe("A list of existing entries to change."),
  remove: Oa(ok).optional().describe("A list of existing entries to remove.")
});
function gf(n) {
  return String(n).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Pf(n, r = 0) {
  const s = "  ".repeat(r);
  if (Array.isArray(n))
    return n.map((a) => a !== null && typeof a == "object" ? `${s}<item>
${Pf(a, r + 1)}${s}</item>
` : `${s}<item>${gf(a)}</item>
`).join("");
  if (n !== null && typeof n == "object") {
    let a = "";
    for (const u of Object.keys(n)) {
      const c = n[u];
      c !== null && typeof c == "object" ? a += `${s}<${u}>
${Pf(c, r + 1)}${s}</${u}>
` : a += `${s}<${u}>${gf(c)}</${u}>
`;
    }
    return a;
  }
  return `${s}<value>${gf(n)}</value>
`;
}
function lk(n, r) {
  const s = Ta(n);
  return r === "xml" ? `<entry>
${Pf(s, 1)}</entry>` : JSON.stringify(s, null, 2);
}
function ck(...n) {
  for (const r of n) if (r !== void 0) return r;
}
function dk(n) {
  return Array.isArray(n) ? n.find((r) => r !== "null") ?? n[0] : n;
}
function Ta(n) {
  if (!n || typeof n != "object") return null;
  const r = Array.isArray(n.examples) ? n.examples[0] : void 0, s = ck(n.example, r, n.default);
  if (s !== void 0) return s;
  if (n.const !== void 0) return n.const;
  if (Array.isArray(n.enum) && n.enum.length) return n.enum[0];
  const a = Array.isArray(n.anyOf) ? n.anyOf[0] : Array.isArray(n.oneOf) ? n.oneOf[0] : void 0;
  if (a) return Ta(a);
  switch (dk(n.type)) {
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
const fk = new W2();
async function Z0(n, r, s, a, u, c) {
  const f = !a.json_schema && !1;
  return new Promise((m, p) => {
    const _ = new AbortController(), g = c ?? _.signal;
    c && c.addEventListener("abort", () => _.abort(), { once: !0 }), fk.generateRequest(
      {
        profileId: n,
        prompt: r,
        maxTokens: s,
        custom: { stream: f, signal: g },
        overridePayload: a
      },
      {
        abortController: _,
        onEntry: void 0,
        onFinish: (E, y, b) => g.aborted ? p(new DOMException("Request aborted by user", "AbortError")) : b ? p(b) : y === void 0 && b === void 0 ? p(new DOMException("Request aborted by user", "AbortError")) : (y || p(new Error("No data received from LLM")), b ? p(b) : m(y))
      }
    );
  });
}
async function G0(n, r, s, a, u, c, f) {
  const m = It.getSettings();
  let p, _;
  const g = $C(s);
  if (u === "native") {
    if (p = await Z0(
      n,
      r,
      c,
      {
        json_schema: { name: a, strict: !0, value: g }
      },
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    _ = typeof p.content == "string" ? JSON.parse(p.content) : p.content;
  } else {
    const y = u, b = lk(g, y), h = JSON.stringify(g, null, 2), C = y === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", A = m.prompts[C]?.content;
    if (!A)
      throw new Error(`Prompt template for mode "${y}" not found.`);
    const M = {
      example_response: b,
      schema: h
    }, P = { role: "system", content: _n.compile(A, { noEscape: !0, strict: !0 })(M) };
    if (p = await Z0(
      n,
      [...r, P],
      c,
      {},
      void 0,
      f
    ), !p?.content)
      throw new Error(`Structured request for ${a} failed to return content.`);
    if (y === "xml") {
      const l = ky(p.content), S = Object.values(l).flat();
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
    const y = `Model response failed schema validation for ${a}. Check console for details.`;
    throw console.error("Zod validation failed:", E.error.issues), console.error("Raw content parsed:", _), await ke("error", y), new Error(y);
  }
  return E.data;
}
const hk = ({ originalContent: n, newContent: r }) => {
  const s = re.useMemo(() => {
    const a = Zy(n, r);
    let u = "", c = "";
    return a.forEach((f) => {
      const m = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), _ = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m}</span>`;
      f.added || (u += _), f.removed || (c += _);
    }), { originalHtml: u, newHtml: c };
  }, [n, r]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.originalHtml } }),
    /* @__PURE__ */ N.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: s.newHtml } })
  ] });
}, f_ = ({ before: n, after: r }) => {
  const s = re.useMemo(() => {
    const a = [];
    return !n || !r || ((n.comment || "") !== (r.comment || "") && a.push({ label: "Name", before: n.comment || "", after: r.comment || "" }), (n.key || []).join(", ") !== (r.key || []).join(", ") && a.push({ label: "Triggers", before: (n.key || []).join(", "), after: (r.key || []).join(", ") }), (n.content || "") !== (r.content || "") && a.push({ label: "Content", before: n.content || "", after: r.content || "" })), a;
  }, [n, r]);
  return /* @__PURE__ */ N.jsx(N.Fragment, { children: s.map(({ label: a, before: u, after: c }) => /* @__PURE__ */ N.jsxs("div", { className: "compare-state-item", children: [
    /* @__PURE__ */ N.jsx("h4", { children: a }),
    /* @__PURE__ */ N.jsxs("div", { className: "compare-state-header", children: [
      /* @__PURE__ */ N.jsx("span", { children: "Before" }),
      /* @__PURE__ */ N.jsx("span", { children: "After" })
    ] }),
    /* @__PURE__ */ N.jsx(hk, { originalContent: u, newContent: c })
  ] }, a)) });
}, pk = ({ before: n, after: r }) => {
  const { added: s, removed: a, changed: u } = re.useMemo(() => {
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
  }, [n, r]), c = s.length > 0 || a.length > 0 || u.length > 0;
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
    a.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "diff-section", children: [
      /* @__PURE__ */ N.jsxs("h4", { children: [
        "Removed Entries (",
        a.length,
        ")"
      ] }),
      a.map(({ worldName: f, entry: m }) => /* @__PURE__ */ N.jsxs("div", { className: "diff-entry removed", children: [
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
        /* @__PURE__ */ N.jsx(f_, { before: m, after: p })
      ] }, `${f}::${p.uid}`))
    ] })
  ] }) : /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the entries for this step." }) });
}, nh = ({ sessionType: n, before: r, after: s }) => !r && !s ? /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No state information available for this step." })
] }) : /* @__PURE__ */ N.jsxs("div", { className: "compare-state-popup", children: [
  /* @__PURE__ */ N.jsx("h3", { children: "Changes in this step" }),
  /* @__PURE__ */ N.jsx("div", { className: "compare-state-list", children: n === "global" ? /* @__PURE__ */ N.jsx(pk, { before: r, after: s }) : /* @__PURE__ */ N.jsx(f_, { before: r, after: s }) })
] }), mk = ({ currentState: n, initialState: r }) => {
  const [s, a] = re.useState(!1), u = re.useMemo(
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
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (c) => a(c.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(nh, { sessionType: "entry", before: r, after: n }) : u.map(({ label: c, value: f }) => /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
      /* @__PURE__ */ N.jsx("label", { children: c }),
      /* @__PURE__ */ N.jsx("div", { className: "state-value", children: f || /* @__PURE__ */ N.jsx("span", { className: "subtle-text", children: "empty" }) })
    ] }, c)) })
  ] });
}, gk = ({ currentState: n, initialState: r }) => {
  const [s, a] = re.useState(!1);
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup global-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: s ? "Comparing with Original State" : "Current Suggested Entries" }),
      /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ N.jsx("input", { type: "checkbox", checked: s, onChange: (u) => a(u.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ N.jsx("div", { className: "current-state-content", children: s ? /* @__PURE__ */ N.jsx(nh, { sessionType: "global", before: r, after: n }) : Object.entries(n).map(([u, c]) => /* @__PURE__ */ N.jsxs("div", { className: "world-group", children: [
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
}, Ti = SillyTavern.getContext(), vk = (n, r) => {
  const s = structuredClone(n);
  return s.comment = r.name, s.key = r.triggers, s.content = r.content, s;
}, yk = (n, r) => {
  const s = structuredClone(n);
  if (r.remove)
    for (const a of r.remove) {
      const { worldName: u, name: c } = a;
      s[u] && (s[u] = s[u].filter((f) => f.comment !== c));
    }
  if (r.change)
    for (const a of r.change) {
      const { worldName: u, originalName: c } = a, f = s[u]?.find((m) => m.comment === c);
      f ? (a.newName !== void 0 && (f.comment = a.newName), a.triggers !== void 0 && (f.key = a.triggers), a.content !== void 0 && (f.content = a.content)) : (console.warn(`[WREC] Could not find entry to change: "${c}" in world "${u}"`), ke("warning", `Could not find entry to change: "${c}" in world "${u}"`));
    }
  if (r.add)
    for (const a of r.add) {
      const { worldName: u, name: c, triggers: f, content: m } = a;
      s[u] || (s[u] = []);
      const p = { entries: Object.fromEntries(s[u].map((g) => [g.uid, g])) }, _ = Hf(u, p);
      _ && (_.comment = c, _.key = f, _.content = m, s[u].push(_));
    }
  return s;
}, _k = ({ initialState: n, onSave: r, onClose: s }) => {
  const [a, u] = re.useState(n.comment), [c, f] = re.useState(n.key.join(", ")), [m, p] = re.useState(n.content), _ = () => {
    const g = {
      ...structuredClone(n),
      comment: a,
      key: c.split(",").map((E) => E.trim()).filter(Boolean),
      content: m
    };
    r(g);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h3", { children: "Editing Entry State" }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsxs(De, { onClick: _, children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ N.jsxs(De, { onClick: s, className: "danger_button", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ N.jsx("label", { children: "Name" }),
        /* @__PURE__ */ N.jsx(zy, { type: "text", value: a, onInput: (g) => u(g.currentTarget.value) })
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
}, bk = ({
  session: n,
  onBack: r,
  onApply: s,
  onSessionUpdate: a,
  initialState: u,
  chatContextOptions: c
}) => {
  const [f, m] = re.useState(n.messages), [p, _] = re.useState(""), [g, E] = re.useState(!1), [y, b] = re.useState(null), [h, C] = re.useState(!1), [A, M] = re.useState(!1), [x, P] = re.useState(null), [l, S] = re.useState(""), w = re.useRef(null), k = re.useRef(null);
  re.useEffect(() => {
    w.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const O = re.useCallback(
    (V, ae, _e) => {
      if (JSON.stringify(_e) === JSON.stringify(ae))
        return V;
      const ce = It.getSettings();
      let Ee = "";
      if (n.type === "global") {
        const me = ce.prompts.reviseGlobalStateUpdate?.content, ee = ce.prompts.reviseGlobalStateUpdateAddedModified?.content, le = ce.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!me || !ee || !le) return V;
        const ge = _e || {}, pe = ae || {}, ve = /* @__PURE__ */ new Map();
        Object.entries(ge).forEach(([Ae, de]) => {
          de.forEach((ye) => {
            ve.set(`${Ae}::${ye.uid}`, ye);
          });
        });
        const we = /* @__PURE__ */ new Map();
        Object.entries(pe).forEach(([Ae, de]) => {
          de.forEach((ye) => {
            we.set(`${Ae}::${ye.uid}`, ye);
          });
        });
        const Ue = {}, Ne = [];
        if (we.forEach((Ae, de) => {
          const [ye] = de.split("::"), Ie = ve.get(de);
          let He = !1;
          if (!Ie)
            He = !0;
          else {
            const rt = (Ae.content || "") !== (Ie.content || ""), qn = (Ae.comment || "") !== (Ie.comment || ""), jn = (Ae.key || []).sort().join(",") !== (Ie.key || []).sort().join(",");
            (rt || qn || jn) && (He = !0);
          }
          He && (Ue[ye] || (Ue[ye] = []), Ue[ye].push(Ae));
        }), ve.forEach((Ae, de) => {
          if (!we.has(de)) {
            const [ye] = de.split("::");
            Ne.push({ worldName: ye, comment: Ae.comment });
          }
        }), Object.keys(Ue).length === 0 && Ne.length === 0)
          return V;
        const fe = _n.compile(ee, { noEscape: !0 })({
          changedLorebooks: Ue
        }), be = _n.compile(le, { noEscape: !0 })({ removedEntries: Ne });
        Ee = _n.compile(me, { noEscape: !0 })({
          addedModifiedContent: fe,
          removedContent: be
        });
      } else {
        const me = ae;
        Ee = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${me.comment})
Triggers: ${(me.key || []).join(", ")}
Content: ${me.content}`;
      }
      if (Ee = Ti.substituteParams(Ee.trim()), Ee) {
        const me = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Ee,
          isStateUpdate: !0
        };
        return [...V, me];
      }
      return V;
    },
    [n.type, n.worldName]
  ), L = re.useCallback(
    async (V, ae, _e, ce) => {
      const Ee = It.getSettings();
      if (!n.profileId) {
        ke("warning", "Please select a connection profile for this session.");
        return;
      }
      k.current = new AbortController(), _e(), E(!0);
      try {
        const me = [], ee = Ti.extensionSettings.connectionManager?.profiles?.find(
          (fe) => fe.id === n.profileId
        ), le = ee?.api ? Ti.CONNECT_API_MAP[ee.api].selected : void 0;
        if (!le) {
          ke("warning", "No API selected for this session.");
          return;
        }
        for (const fe of V)
          if (fe.id === zf) {
            if (sn === void 0 && !Xt) continue;
            const be = await oy(le, c);
            be.warnings?.length && be.warnings.forEach((Ae) => ke("warning", Ae)), me.push(...be.result);
          } else
            me.push(fe);
        const ge = V.slice(0, V.length - (ae ? 0 : 1)).reverse().find((fe) => fe.stateSnapshot)?.stateSnapshot ?? u;
        let pe = "";
        if (n.type === "global") {
          const fe = Ee.prompts.currentLorebooks?.content;
          if (fe) {
            const be = { currentLorebooks: ge };
            pe = _n.compile(fe, { noEscape: !0 })(be);
          }
        } else {
          const fe = ge;
          pe = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.

## WORLD NAME: ${n.worldName}
### (NAME: ${fe.comment})
Triggers: ${(fe.key || []).join(", ")}
Content: ${fe.content}`;
        }
        if (pe = Ti.substituteParams(pe.trim()), pe) {
          const fe = {
            id: `temp-state-${Date.now()}`,
            role: "system",
            content: pe
          }, be = me.pop();
          me.push(fe), be && me.push(be);
        }
        let ve, we;
        if (n.type === "entry") {
          const fe = await G0(
            n.profileId,
            me,
            ak,
            q0.ENTRY,
            n.promptEngineeringMode,
            Ee.maxResponseToken,
            k.current.signal
          );
          ve = vk(ge, fe), we = fe.justification;
        } else {
          const fe = await G0(
            n.profileId,
            me,
            uk,
            q0.GLOBAL,
            n.promptEngineeringMode,
            Ee.maxResponseToken,
            k.current.signal
          );
          ve = yk(ge, fe), we = fe.justification;
        }
        const Ue = {
          id: `msg-${Date.now()}-ai`,
          role: "assistant",
          content: we,
          stateSnapshot: ve
        };
        let Ne = [...V, Ue];
        Ne = O(Ne, ve, ge), m(Ne), a({ ...n, messages: Ne });
      } catch (me) {
        me.name === "AbortError" ? ke("info", "Request was cancelled.") : (console.error("Revise request failed:", me), ke("error", `Request failed: ${me.message}`)), ce();
      } finally {
        E(!1), k.current = null;
      }
    },
    [n, a, u, c, O]
  ), j = re.useCallback(async () => {
    if (!p.trim() || g) return;
    const V = { id: `msg-${Date.now()}`, role: "user", content: p.trim() }, ae = f;
    await L(
      [...f, V],
      !1,
      () => {
        m([...f, V]), _("");
      },
      () => m(ae)
    );
  }, [p, g, f, L]), z = re.useCallback(async () => {
    if (g || f.length === 0) return;
    const V = f;
    let ae = [...f];
    const _e = f.findLastIndex((ce) => !ce.isStateUpdate);
    _e > -1 && f[_e].role === "assistant" && (ae = f.slice(0, _e)), await L(
      ae,
      !0,
      () => m(ae),
      () => m(V)
    );
  }, [g, f, L]), H = () => {
    const V = f.slice().reverse().find((ae) => ae.stateSnapshot)?.stateSnapshot ?? u;
    s(V), r();
  }, Y = (V) => {
    const ae = f.findIndex((Ee) => Ee.id === V);
    if (ae < 0 || !f[ae].stateSnapshot) return;
    const _e = f[ae].stateSnapshot;
    let ce = u;
    for (let Ee = ae - 1; Ee >= 0; Ee--)
      if (f[Ee].stateSnapshot) {
        ce = f[Ee].stateSnapshot;
        break;
      }
    b({ before: ce, after: _e });
  }, Z = (V) => {
    P(V.id), S(V.content);
  }, Q = () => {
    P(null), S("");
  }, R = async () => {
    if (!x) return;
    const V = f.findIndex((ee) => ee.id === x);
    if (V === -1 || !await Ti.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const _e = f, ce = f.slice(0, V), Ee = { ...f[V], content: l }, me = [...ce, Ee];
    Q(), await L(
      me,
      !1,
      () => m(me),
      () => m(_e)
    );
  }, B = async (V) => {
    const ae = f.findIndex((me) => me.id === V);
    if (ae === -1) return;
    const _e = !!f[ae].isInitial;
    if (!await Ti.Popup.show.confirm(
      "Delete Message",
      _e ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    const Ee = _e ? f.filter((me) => me.isInitial && me.id !== V) : f.slice(0, ae);
    m(Ee), a({ ...n, messages: Ee }), ke("info", "Message history has been updated.");
  }, K = (V) => {
    const ae = f.slice().reverse().find((Ee) => Ee.stateSnapshot)?.stateSnapshot ?? u, _e = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change manually.",
      stateSnapshot: V
    };
    let ce = [...f, _e];
    ce = O(ce, V, ae), m(ce), a({ ...n, messages: ce }), M(!1);
  }, te = f.slice().reverse().find((V) => V.stateSnapshot)?.stateSnapshot ?? u, I = f.filter((V) => !V.isStateUpdate), $ = I.filter((V) => V.isInitial), oe = I.filter((V) => !V.isInitial);
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ N.jsx("h2", { children: n.name }),
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ N.jsx(
          Py,
          {
            initialSelectedProfileId: n.profileId,
            onChange: (V) => a({ ...n, profileId: V?.id ?? "" })
          }
        ),
        /* @__PURE__ */ N.jsxs(
          "select",
          {
            className: "text_pole",
            value: n.promptEngineeringMode,
            onChange: (V) => a({ ...n, promptEngineeringMode: V.target.value }),
            title: "Prompt Engineering Mode",
            children: [
              /* @__PURE__ */ N.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(De, { onClick: () => C(!0), title: "View current state", children: "View State" }),
        n.type === "entry" && /* @__PURE__ */ N.jsx(De, { onClick: () => M(!0), title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ N.jsx(De, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ N.jsxs(De, { onClick: H, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "chat-messages", children: [
      $.length > 0 && /* @__PURE__ */ N.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ N.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ N.jsx("div", { className: "initial-messages-content", children: $.map(
          (V) => x === V.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ N.jsx(br, { value: l, onChange: (ae) => S(ae.target.value), rows: 5 }),
            /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ N.jsxs(De, { onClick: R, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ N.jsxs(De, { onClick: Q, children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, V.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper initial-context ${V.role}`, children: [
            /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${V.role} initial`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: V.content }) }),
            !g && V.id !== zf && /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ N.jsx(
                De,
                {
                  className: "message-action-button",
                  onClick: () => Z(V),
                  title: "Edit Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
                }
              ),
              /* @__PURE__ */ N.jsx(
                De,
                {
                  className: "message-action-button danger_button",
                  onClick: () => B(V.id),
                  title: "Delete Context",
                  children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
                }
              )
            ] })
          ] }, V.id)
        ) })
      ] }),
      oe.map(
        (V) => x === V.id ? /* @__PURE__ */ N.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ N.jsx(br, { value: l, onChange: (ae) => S(ae.target.value), rows: 3 }),
          /* @__PURE__ */ N.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ N.jsxs(De, { onClick: R, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ N.jsxs(De, { onClick: Q, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, V.id) : /* @__PURE__ */ N.jsxs("div", { className: `message-bubble-wrapper ${V.role}`, children: [
          /* @__PURE__ */ N.jsxs("div", { className: "message-actions", children: [
            V.role === "user" && !V.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              De,
              {
                className: "message-action-button",
                onClick: () => Z(V),
                title: "Edit and Fork",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pencil" })
              }
            ),
            V.stateSnapshot && !g && /* @__PURE__ */ N.jsx(
              De,
              {
                className: "message-action-button",
                onClick: () => Y(V.id),
                title: "Compare changes",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" })
              }
            ),
            !g && /* @__PURE__ */ N.jsx(
              De,
              {
                className: "message-action-button danger_button",
                onClick: () => B(V.id),
                title: "Delete Message",
                children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
              }
            )
          ] }),
          /* @__PURE__ */ N.jsx("div", { className: `message-bubble ${V.role}`, children: /* @__PURE__ */ N.jsx("div", { className: "message-content", children: V.content }) })
        ] }, V.id)
      ),
      oe.length > 0 && !g && /* @__PURE__ */ N.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ N.jsxs(De, { onClick: z, title: "Regenerate response", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate"
      ] }) }),
      g && /* @__PURE__ */ N.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ N.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ N.jsx(
          De,
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
          onChange: (V) => _(V.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: g || !!x,
          onKeyDown: (V) => {
            V.key === "Enter" && !V.shiftKey && (V.preventDefault(), j());
          }
        }
      ),
      /* @__PURE__ */ N.jsx(De, { onClick: j, disabled: g || !p.trim() || !!x, children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-paper-plane" }) })
    ] }),
    y && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(nh, { sessionType: n.type, before: y.before, after: y.after }),
        onComplete: () => b(null),
        options: { wide: !0, large: !0 }
      }
    ),
    h && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: n.type === "entry" ? /* @__PURE__ */ N.jsx(mk, { currentState: te, initialState: u }) : /* @__PURE__ */ N.jsx(
          gk,
          {
            currentState: te,
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
          _k,
          {
            initialState: te,
            onSave: (V) => {
              K(V), M(!1);
            },
            onClose: () => M(!1)
          }
        ),
        onComplete: () => M(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function Sk(n, r, s, a, u, c, f) {
  const m = It.getSettings(), p = m.mainContextTemplatePresets[a];
  if (!p)
    throw new Error(`Main context template preset "${a}" not found.`);
  const _ = [], g = {
    user: Pe.name1 || "You",
    char: Pe.name2 || "Character",
    persona: Pe.powerUserSettings.persona_description,
    blackListedEntries: c.blackListedEntries
  };
  if (u.worldInfo)
    if (r === "global")
      g.currentLorebooks = n;
    else {
      const y = {};
      Object.entries(f).filter(([b]) => c.selectedWorldNames.includes(b)).forEach(([b, h]) => {
        const C = new Set(c.selectedEntryUids[b] ?? []), A = C.size > 0 ? h.filter((M) => C.has(M.uid)) : h.filter((M) => !M.disable);
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
    if (!y.enabled || ["taskDescription", "responseRules", "currentLorebooks"].includes(y.promptName) || y.promptName === "chatHistory" && u.messages.type === "none" || sn === void 0 && !Xt && y.promptName === "chatHistory") continue;
    if (y.promptName === "chatHistory") {
      _.push({
        id: zf,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    const b = m.prompts[y.promptName];
    if (b) {
      let h = _n.compile(b.content, { noEscape: !0 })(g);
      h = Pe.substituteParams(h), h.trim() && _.push({
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
const rl = SillyTavern.getContext(), V0 = "worldInfoRecommender_reviseSessions", h_ = ({
  target: n,
  initialState: r,
  onClose: s,
  onApply: a,
  sessionForContext: u,
  allEntries: c,
  contextToSend: f
}) => {
  const [m, p] = re.useState([]), [_, g] = re.useState(null), [E, y] = re.useState(!0), b = re.useMemo(() => n.type === "entry" ? `${n.worldName}::${n.entry.uid}::${n.entry.comment}` : "global", [n]);
  re.useEffect(() => {
    const w = JSON.parse(localStorage.getItem(V0) || "[]");
    p(w), y(!1);
  }, []);
  const h = re.useMemo(() => n.type === "entry" ? m.filter((w) => w.type === "entry" && w.targetEntryIdentifier === b).sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()) : m.filter((w) => w.type === "global").sort((w, k) => new Date(k.createdAt).getTime() - new Date(w.createdAt).getTime()), [m, n.type, b]), C = (w) => {
    localStorage.setItem(V0, JSON.stringify(w)), p(w);
  }, A = async () => {
    const w = await rl.Popup.show.input(
      "New Session Name",
      n.type === "entry" ? `Revise "${n.entry.comment}" - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}` : `Global Revise - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (w)
      try {
        const k = It.getSettings();
        if (!k.profileId) {
          ke("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const O = await Sk(
          r,
          n.type,
          n.type === "entry" ? n.worldName : void 0,
          k.mainContextTemplatePreset,
          f,
          u,
          c
        ), L = {
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
        g(L);
      } catch (k) {
        const O = k instanceof Error ? k.message : String(k);
        console.error("Failed to create session:", k), ke("error", `Failed to create session: ${O}`);
      }
  }, M = (w) => {
    g(w);
  }, x = async (w) => {
    if (await rl.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const O = m.filter((L) => L.id !== w);
      C(O);
    }
  }, P = (w) => {
    const k = m.findIndex((L) => L.id === w.id), O = [...m];
    k !== -1 ? O[k] = w : O.push(w), C(O), g(w);
  }, l = (w) => {
    n.type === "entry" ? a({
      worldName: n.worldName,
      originalEntry: r,
      updatedEntry: w
    }) : a(w), s();
  };
  if (_) {
    const w = rl.extensionSettings.connectionManager?.profiles?.find(
      (L) => L.id === _.profileId
    ), k = f.messages, O = {
      targetCharacterId: sn,
      ignoreCharacterFields: !f.charCard,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !f.authorNote,
      includeNames: !!Xt,
      presetName: w?.preset,
      contextName: w?.context,
      instructName: w?.instruct
    };
    if (!sn && !Xt)
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
          const L = rl.chat?.length ?? 0, j = k.last ?? 10;
          O.messageIndexesBetween = {
            end: Math.max(0, L - 1),
            start: Math.max(0, L - j)
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
      bk,
      {
        session: _,
        onBack: () => g(null),
        onApply: l,
        onSessionUpdate: P,
        initialState: r,
        chatContextOptions: O
      }
    );
  }
  const S = n.type === "entry" ? `Revise Sessions for "${n.entry.comment}"` : "Global Revise Sessions";
  return /* @__PURE__ */ N.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ N.jsx("div", { className: "popup_header", children: /* @__PURE__ */ N.jsx("h2", { children: S }) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-list", children: E ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : h.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create one to get started." }) : h.map((w) => /* @__PURE__ */ N.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "session-info", onClick: () => M(w), children: [
        /* @__PURE__ */ N.jsx("span", { className: "session-name", children: w.name }),
        /* @__PURE__ */ N.jsx("span", { className: "session-date", children: new Date(w.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ N.jsx(De, { className: "danger_button", onClick: () => x(w.id), children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, w.id)) }),
    /* @__PURE__ */ N.jsx("div", { className: "session-actions", children: /* @__PURE__ */ N.jsxs(De, { onClick: A, className: "menu_button", children: [
      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, wk = new ZS.Converter(), Ek = ({
  initialWorldName: n,
  entry: r,
  allWorldNames: s,
  existingEntry: a,
  sessionRegexIds: u,
  onAdd: c,
  onRemove: f,
  onContinue: m,
  onUpdate: p,
  entriesGroupByWorldName: _,
  sessionForContext: g,
  contextToSend: E
}) => {
  const [y, b] = re.useState(() => s.find((I) => I === n) ?? s[0] ?? ""), [h, C] = re.useState(!1), [A, M] = re.useState(!1), [x, P] = re.useState(!1), [l, S] = re.useState(!1), [w, k] = re.useState(!1), [O, L] = re.useState(!1), [j, z] = re.useState(""), H = re.useRef(null), Y = re.useMemo(
    () => !!_[y]?.find((te) => te.uid === r.uid && te.comment === r.comment),
    [y, r.uid, r.comment, _]
  ), Z = A || x, Q = async () => {
    C(!0), await c(r, n, y);
  }, R = async () => {
    M(!0), await m({ worldName: n, entry: r, prompt: j, mode: "continue" }), M(!1);
  }, B = async () => {
    P(!0), await m({ worldName: n, entry: r, prompt: j, mode: "revise" }), P(!1);
  }, K = (te) => {
    p(n, r, te, u);
  };
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "entry", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "menu", children: [
        /* @__PURE__ */ N.jsx(
          "select",
          {
            className: "world-select text_pole",
            value: y,
            onChange: (te) => b(te.target.value),
            children: s.map((te) => /* @__PURE__ */ N.jsx("option", { value: te, children: te }, te))
          }
        ),
        /* @__PURE__ */ N.jsx(De, { onClick: Q, disabled: h || Z, className: "menu_button interactable add", children: Y ? "Update" : "Add" }),
        /* @__PURE__ */ N.jsxs(
          De,
          {
            onClick: () => L(!0),
            disabled: Z,
            className: "menu_button interactable",
            title: "Revise this entry with a chat-based AI session.",
            children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-comments" }),
              " Revise"
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          De,
          {
            onClick: R,
            disabled: Z,
            className: "menu_button interactable continue",
            title: "Continue writing this entry. You can provide instructions in the textbox below.",
            children: A ? "..." : "Continue"
          }
        ),
        /* @__PURE__ */ N.jsx(
          De,
          {
            onClick: B,
            disabled: Z,
            className: "menu_button interactable revise",
            title: "Request changes to this entry. Provide instructions in the textbox below.",
            children: x ? "..." : "Revise"
          }
        ),
        /* @__PURE__ */ N.jsx(De, { onClick: () => S(!0), disabled: Z, className: "menu_button interactable edit", children: "Edit" }),
        Y && /* @__PURE__ */ N.jsx(
          De,
          {
            onClick: () => k(!0),
            disabled: Z,
            className: "menu_button interactable compare",
            children: "Compare"
          }
        ),
        /* @__PURE__ */ N.jsx(
          De,
          {
            onClick: () => f(r, n, !0),
            disabled: Z,
            className: "menu_button interactable blacklist",
            children: "Blacklist"
          }
        ),
        /* @__PURE__ */ N.jsx(
          De,
          {
            onClick: () => f(r, n, !1),
            disabled: Z,
            className: "menu_button interactable remove",
            children: "Remove"
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx("h4", { className: "comment", children: r.comment }),
      /* @__PURE__ */ N.jsx("div", { className: "key", children: r.key.join(", ") }),
      /* @__PURE__ */ N.jsx("p", { className: "content", dangerouslySetInnerHTML: { __html: wk.makeHtml(r.content ?? "") } }),
      /* @__PURE__ */ N.jsx("div", { className: "continue-prompt-section", style: { marginTop: "10px" }, children: /* @__PURE__ */ N.jsx(
        br,
        {
          value: j,
          onChange: (te) => z(te.target.value),
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
        content: /* @__PURE__ */ N.jsx(lw, { ref: H, entry: r, initialRegexIds: u }),
        onComplete: (te) => {
          if (te && H.current) {
            const { updatedEntry: I, updatedRegexIds: $ } = H.current.getFormData();
            p(n, r, I, $);
          }
          S(!1);
        }
      }
    ),
    w && a && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(ow, { originalEntry: a, newEntry: r }),
        onComplete: () => k(!1)
      }
    ),
    O && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          h_,
          {
            target: { type: "entry", worldName: n, entry: r },
            initialState: r,
            onClose: () => L(!1),
            onApply: K,
            sessionForContext: g,
            allEntries: _,
            contextToSend: E
          }
        ),
        onComplete: () => L(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, $0 = re.forwardRef(
  ({ entriesByWorldName: n, initialSelectedUids: r, title: s }, a) => {
    const [u, c] = re.useState(""), [f, m] = re.useState(() => {
      const y = /* @__PURE__ */ new Set();
      return Object.entries(r).forEach(([b, h]) => {
        h.forEach((C) => y.add(`${b}::${C}`));
      }), y;
    }), p = re.useMemo(() => {
      if (!u)
        return n;
      const y = u.toLowerCase(), b = {};
      return Object.entries(n).forEach(([h, C]) => {
        const A = C.filter(
          (M) => M.comment.toLowerCase().includes(y) || h.toLowerCase().includes(y)
        );
        A.length > 0 && (b[h] = A);
      }), b;
    }, [u, n]);
    re.useImperativeHandle(a, () => ({
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
        /* @__PURE__ */ N.jsx(De, { onClick: g, children: "Select All (Filtered)" }),
        /* @__PURE__ */ N.jsx(De, { onClick: E, children: "Deselect All" })
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
const Bn = SillyTavern.getContext(), Ck = "en", Y0 = {
  en: "English",
  "zh-CN": "中文"
}, kk = {
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
    promptPlaceholder: "例如：“为 {{user}} 去过的地方推荐条目”。",
    sendPromptButton: "发送提示词",
    generatingButton: "生成中...",
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
}, F0 = {
  en: {
    needProfile: "Please select a connection profile.",
    needPrompt: "Please enter a prompt.",
    noResults: "No results from AI",
    noEntriesToAdd: "No entries to add.",
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
}, al = () => sn ? sy(sn) : Xt, Ak = () => {
  const n = Uy(), r = It.getSettings(), s = Mi.includes(r.language) ? r.language : Ck, a = kk[s], u = F0[s], c = Y0[s], [f, m] = re.useState({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {}
  }), [p, _] = re.useState([]), [g, E] = re.useState({}), [y, b] = re.useState([]), [h, C] = re.useState(!0), [A, M] = re.useState(!1), [x, P] = re.useState(!1), [l, S] = re.useState(!1), [w, k] = re.useState(!1), O = re.useRef(null), L = re.useRef(null), j = re.useMemo(() => al() ?? "_global", [sn, Xt]);
  re.useEffect(() => {
    (async () => {
      C(!0), E({}), _([]), b([]);
      const le = al(), ge = `worldInfoRecommend_${j}`, pe = JSON.parse(localStorage.getItem(ge) ?? "{}"), ve = {
        suggestedEntries: pe.suggestedEntries ?? {},
        blackListedEntries: pe.blackListedEntries ?? [],
        selectedWorldNames: pe.selectedWorldNames ?? [],
        selectedEntryUids: pe.selectedEntryUids ?? {},
        regexIds: pe.regexIds ?? {}
      };
      let we = {};
      if (le)
        if (Xt) {
          const fe = await cl(["chat", "persona", "global"]);
          fe && (we = fe);
          const be = $g.find((Ae) => Ae.id === Xt);
          if (be)
            for (const Ae of be.members) {
              const de = Bn.characters.findIndex((ye) => ye.avatar === Ae);
              if (de !== -1) {
                const ye = await cl(["character"], !0, de);
                ye && (we = { ...we, ...ye });
              }
            }
        } else
          we = await cl(["all"], !0, sn);
      else
        for (const fe of I1) {
          const be = await Bn.loadWorldInfo(fe);
          be && (we[fe] = Object.values(be.entries));
        }
      E(we);
      const Ue = Object.keys(we);
      _(Ue), ve.selectedWorldNames.length === 0 && j !== "_global" ? ve.selectedWorldNames = [...Ue] : ve.selectedWorldNames = ve.selectedWorldNames.filter(
        (fe) => Ue.includes(fe)
      );
      const Ne = {};
      if (ve.selectedEntryUids) {
        for (const [fe, be] of Object.entries(ve.selectedEntryUids))
          if (we[fe]) {
            const Ae = new Set(we[fe].map((ye) => ye.uid)), de = be.filter((ye) => Ae.has(ye));
            de.length > 0 && (Ne[fe] = de);
          }
      }
      if (ve.selectedEntryUids = Ne, m(ve), Xt) {
        const fe = $g.find((be) => be.id === Xt);
        if (fe?.generation_mode === 0) {
          const be = fe.members.map((Ae) => Bn.characters.find((de) => de.avatar === Ae)).filter((Ae) => !!Ae);
          b(be);
        }
      }
      C(!1);
    })();
  }, [j]), re.useEffect(() => {
    if (h) return;
    const ee = `worldInfoRecommend_${j}`;
    localStorage.setItem(ee, JSON.stringify(f));
  }, [f, j, h]);
  const z = (ee, le) => {
    It.getSettings()[ee] = le, It.saveSettings(), n();
  }, H = (ee, le) => {
    It.getSettings().contextToSend[ee] = le, It.saveSettings(), n();
  }, Y = () => {
    const ee = Mi.indexOf(s), le = Mi[(ee + 1) % Mi.length], ge = Y0[le], pe = F0[le]?.languageSwitched ?? u.languageSwitched;
    z("language", le), ke("info", pe(ge));
  }, Z = re.useCallback(
    async (ee, le, ge = !1) => {
      const pe = structuredClone(g);
      pe[le] || (pe[le] = []);
      const ve = pe[le].find((Ne) => Ne.uid === ee.uid), we = !!ve;
      let Ue;
      if (we) {
        const Ne = (ee.content || "") !== (ve.content || ""), fe = (ee.comment || "") !== (ve.comment || ""), be = (ee.key || []).slice().sort().join(",") !== (ve.key || []).slice().sort().join(",");
        if (!Ne && !fe && !be)
          return "unchanged";
        Ue = ve;
      } else {
        const Ne = { entries: Object.fromEntries(pe[le].map((be) => [be.uid, be])) }, fe = Hf(le, Ne);
        if (!fe) throw new Error("Failed to create new World Info entry.");
        Ue = fe, pe[le].push(Ue);
      }
      if (Object.assign(Ue, { key: ee.key, content: ee.content, comment: ee.comment }), E(pe), !ge) {
        const Ne = { entries: Object.fromEntries(pe[le].map((fe) => [fe.uid, fe])) };
        await Bn.saveWorldInfo(le, Ne), Bn.reloadWorldInfoEditor(le, !0);
      }
      return we ? "updated" : "added";
    },
    [g]
  ), Q = re.useCallback(
    async (ee) => {
      if (!r.profileId) return ke("warning", u.needProfile);
      const le = ee?.prompt ?? r.promptPresets[r.promptPreset].content;
      if (!ee && !le)
        return ke("warning", u.needPrompt);
      M(!0);
      try {
        const ge = Bn.extensionSettings.connectionManager?.profiles?.find(
          (be) => be.id === r.profileId
        );
        if (!ge) throw new Error("Connection profile not found.");
        const pe = al(), ve = {
          presetName: ge.preset,
          contextName: ge.context,
          instructName: ge.instruct,
          syspromptName: ge.sysprompt,
          ignoreCharacterFields: !r.contextToSend.charCard,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !r.contextToSend.authorNote,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Xt
        };
        if (!pe)
          ve.messageIndexesBetween = { start: -1, end: -1 };
        else
          switch (r.contextToSend.messages.type) {
            case "none":
              ve.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case "first":
              ve.messageIndexesBetween = { start: 0, end: r.contextToSend.messages.first ?? 10 };
              break;
            case "last": {
              const be = r.contextToSend.messages.last ?? 10, Ae = Bn.chat?.length ?? 0;
              ve.messageIndexesBetween = {
                end: Math.max(0, Ae - 1),
                start: Math.max(0, Ae - be)
              };
              break;
            }
            case "range":
              r.contextToSend.messages.range && (ve.messageIndexesBetween = r.contextToSend.messages.range);
              break;
          }
        const we = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete we.stDescription, (!r.contextToSend.worldInfo || f.selectedWorldNames.length === 0) && delete we.currentLorebooks;
        const Ue = Object.values(f.suggestedEntries).some((be) => be.length > 0);
        (!r.contextToSend.suggestedEntries || !Ue) && delete we.suggestedLorebooks, f.blackListedEntries.length === 0 && delete we.blackListedEntries;
        const Ne = ee ? { worldName: ee.worldName, entry: ee.entry, mode: ee.mode } : void 0, fe = await Ly({
          profileId: r.profileId,
          userPrompt: le,
          buildPromptOptions: ve,
          session: f,
          entriesGroupByWorldName: g,
          promptSettings: we,
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter((be) => be.enabled).map((be) => ({ promptName: be.promptName, role: be.role })),
          maxResponseToken: r.maxResponseToken,
          continueFrom: Ne
        });
        Object.keys(fe).length > 0 ? m(ee ? (be) => {
          const Ae = structuredClone(be.suggestedEntries), de = ee.worldName, ye = fe[de]?.[0];
          if (Ae[de] && ye) {
            const Ie = Ae[de].findIndex(
              (He) => He.uid === ee.entry.uid && He.comment === ee.entry.comment
            );
            Ie !== -1 && (Ae[de][Ie] = ye);
          }
          return { ...be, suggestedEntries: Ae };
        } : (be) => {
          const Ae = structuredClone(be.suggestedEntries);
          for (const [de, ye] of Object.entries(fe)) {
            Ae[de] || (Ae[de] = []);
            for (const Ie of ye)
              Ae[de].some((He) => He.uid === Ie.uid && He.comment === Ie.comment) || Ae[de].push(Ie);
          }
          return { ...be, suggestedEntries: Ae };
        }) : ke("warning", u.noResults);
      } catch (ge) {
        console.error(ge), ke("error", ge instanceof Error ? ge.message : String(ge));
      } finally {
        M(!1);
      }
    },
    [r, f, g, u]
  ), R = re.useCallback(
    async (ee, le, ge) => {
      try {
        const pe = await Z(ee, ge);
        pe === "unchanged" ? ke("info", u.entryUnchanged(ee.comment)) : ke("success", pe === "added" ? u.entryAdded : u.entryUpdated), m((ve) => {
          const we = { ...ve.suggestedEntries };
          return we[le] && (we[le] = we[le].filter(
            (Ue) => !(Ue.uid === ee.uid && Ue.comment === ee.comment)
          )), { ...ve, suggestedEntries: we };
        });
      } catch (pe) {
        console.error(pe);
        const ve = pe?.message ? ` (${pe.message})` : "";
        ke("error", `${u.entryAddFailed(ee.comment)}${ve}`);
      }
    },
    [Z, u]
  ), B = async () => {
    const ee = Object.values(f.suggestedEntries).flat().length;
    if (ee === 0) return ke("warning", u.noEntriesToAdd);
    if (!await Bn.Popup.show.confirm(
      u.addAllConfirmTitle,
      u.addAllConfirmMessage(ee)
    )) return;
    M(!0);
    let ge = 0, pe = 0, ve = 0;
    const we = /* @__PURE__ */ new Set(), Ue = [];
    Object.entries(f.suggestedEntries).forEach(([Ne, fe]) => {
      fe.forEach((be) => {
        const Ae = p.includes(Ne) ? Ne : p[0] ?? "";
        Ae && Ue.push({ worldName: Ae, entry: be });
      });
    });
    for (const { worldName: Ne, entry: fe } of Ue)
      try {
        const be = await Z(fe, Ne, !0);
        be === "added" ? ge++ : be === "updated" ? pe++ : ve++, be !== "unchanged" && we.add(Ne);
      } catch {
        ke("error", u.entryProcessFailed(fe.comment));
      }
    for (const Ne of we)
      try {
        const fe = { entries: Object.fromEntries(g[Ne].map((be) => [be.uid, be])) };
        await Bn.saveWorldInfo(Ne, fe), Bn.reloadWorldInfoEditor(Ne, !0);
      } catch {
        ke("error", u.worldSaveFailed(Ne));
      }
    m((Ne) => ({ ...Ne, suggestedEntries: {} })), ke("success", u.addAllResult(ge, pe, ve)), M(!1);
  }, K = async () => {
    await Bn.Popup.show.confirm(u.resetConfirmTitle, u.resetConfirmMessage) && (m((le) => ({
      ...le,
      suggestedEntries: {},
      blackListedEntries: [],
      selectedWorldNames: al() ? [...p] : [],
      selectedEntryUids: {}
    })), ke("success", u.resetSuccess));
  }, te = (ee, le, ge) => {
    m((pe) => {
      const ve = { ...pe };
      ge && (ve.blackListedEntries = [...ve.blackListedEntries, `${le} (${ee.comment})`]);
      const we = { ...ve.suggestedEntries };
      return we[le] && (we[le] = we[le].filter(
        (Ue) => !(Ue.uid === ee.uid && Ue.comment === ee.comment)
      )), ve.suggestedEntries = we, ve;
    });
  }, I = (ee, le, ge, pe) => {
    m((ve) => {
      const we = { ...ve.suggestedEntries };
      if (we[ee]) {
        const Ne = we[ee].findIndex(
          (fe) => fe.uid === le.uid && fe.comment === le.comment
        );
        Ne !== -1 && (we[ee][Ne] = ge);
      }
      const Ue = { ...ve, suggestedEntries: we };
      return pe && (Ue.regexIds = pe), Ue;
    });
  }, $ = re.useCallback(
    (ee) => {
      m((le) => {
        const ge = structuredClone(le.suggestedEntries);
        let pe = 0;
        for (const [ve, we] of Object.entries(ee))
          if (g[ve]) {
            ge[ve] || (ge[ve] = []);
            for (const Ue of we) {
              if (ge[ve].some((be) => be.uid === Ue)) continue;
              const fe = g[ve].find((be) => be.uid === Ue);
              fe && (ge[ve].push(structuredClone(fe)), pe++);
            }
          }
        return pe > 0 && ke("success", u.importSuccess(pe)), { ...le, suggestedEntries: ge };
      });
    },
    [g, u]
  ), oe = re.useMemo(() => {
    const ee = {};
    return f.selectedWorldNames.forEach((le) => {
      g[le] && (ee[le] = g[le]);
    }), ee;
  }, [f.selectedWorldNames, g]), V = re.useMemo(() => {
    const ee = JSON.parse(JSON.stringify(oe)), le = /* @__PURE__ */ new Map();
    return Object.entries(f.suggestedEntries).forEach(([ge, pe]) => {
      pe.forEach((ve) => {
        ve.uid && le.set(ve.uid, { worldName: ge, entry: ve });
      });
    }), Object.entries(ee).forEach(([, ge]) => {
      ge.forEach((pe, ve) => {
        pe.uid && le.has(pe.uid) && (ge[ve] = le.get(pe.uid).entry, le.delete(pe.uid));
      });
    }), le.forEach(({ worldName: ge, entry: pe }) => {
      ee[ge] || (ee[ge] = []), ee[ge].some((ve) => ve.uid === pe.uid) || ee[ge].push(pe);
    }), ee;
  }, [oe, f.suggestedEntries]), ae = (ee) => {
    const le = /* @__PURE__ */ new Map();
    Object.entries(g).forEach(([pe, ve]) => {
      ve.forEach((we) => {
        le.set(`${pe}::${we.uid}`, we);
      });
    });
    const ge = {};
    Object.entries(ee).forEach(([pe, ve]) => {
      ve.forEach((we) => {
        const Ue = `${pe}::${we.uid}`, Ne = le.get(Ue);
        let fe = !1;
        if (!Ne)
          fe = !0;
        else {
          const be = (we.content || "") !== (Ne.content || ""), Ae = (we.comment || "") !== (Ne.comment || ""), de = (we.key || []).slice().sort().join(",") !== (Ne.key || []).slice().sort().join(",");
          (be || Ae || de) && (fe = !0);
        }
        fe && (ge[pe] || (ge[pe] = []), ge[pe].push(we));
      });
    }), m((pe) => ({ ...pe, suggestedEntries: ge })), ke("success", u.globalReviseApplied);
  }, _e = re.useMemo(
    () => Object.keys(r.promptPresets).map((ee) => ({ value: ee, label: ee })),
    [r.promptPresets]
  ), ce = re.useMemo(
    () => p.map((ee) => ({ value: ee, label: ee })),
    [p]
  ), Ee = re.useMemo(
    () => Object.values(f.selectedEntryUids).reduce((ee, le) => ee + le.length, 0),
    [f.selectedEntryUids]
  );
  if (h)
    return /* @__PURE__ */ N.jsx("div", { children: a.loadingText });
  const me = Object.entries(f.suggestedEntries).flatMap(
    ([ee, le]) => le.map((ge) => ({ worldName: ee, entry: ge }))
  );
  return /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
    /* @__PURE__ */ N.jsxs("div", { id: "worldInfoRecommenderPopup", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "popup_header", children: [
        /* @__PURE__ */ N.jsx("h2", { children: a.title }),
        /* @__PURE__ */ N.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ N.jsxs(
          De,
          {
            className: "menu_button language-toggle",
            onClick: Y,
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
              Py,
              {
                initialSelectedProfileId: r.profileId,
                onChange: (ee) => z("profileId", ee?.id)
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
                    onChange: (ee) => H("stDescription", ee.target.checked)
                  }
                ),
                a.descriptionCheckbox
              ] }),
              j !== "_global" && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.messagesTitle }),
                /* @__PURE__ */ N.jsxs(
                  "select",
                  {
                    className: "text_pole",
                    value: r.contextToSend.messages.type,
                    onChange: (ee) => H("messages", {
                      ...r.contextToSend.messages,
                      type: ee.target.value
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
                      onChange: (ee) => H("messages", {
                        ...r.contextToSend.messages,
                        first: parseInt(ee.target.value) || 10
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
                      onChange: (ee) => H("messages", {
                        ...r.contextToSend.messages,
                        last: parseInt(ee.target.value) || 10
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
                      onChange: (ee) => H("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          start: parseInt(ee.target.value) || 0
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
                      onChange: (ee) => H("messages", {
                        ...r.contextToSend.messages,
                        range: {
                          ...r.contextToSend.messages.range,
                          end: parseInt(ee.target.value) || 10
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
                    onChange: (ee) => H("charCard", ee.target.checked)
                  }
                ),
                a.charCardLabel
              ] }),
              y.length > 0 && /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.selectCharacterTitle }),
                /* @__PURE__ */ N.jsx("select", { className: "text_pole", title: a.selectCharacterTooltip, children: y.map((ee) => /* @__PURE__ */ N.jsx("option", { value: ee.avatar, children: ee.name }, ee.avatar)) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.authorNote,
                    onChange: (ee) => H("authorNote", ee.target.checked)
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
                    onChange: (ee) => H("worldInfo", ee.target.checked)
                  }
                ),
                a.worldInfoLabel
              ] }),
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("h4", { children: a.lorebooksTitle }),
                /* @__PURE__ */ N.jsx(
                  By,
                  {
                    items: ce,
                    value: f.selectedWorldNames,
                    onChange: (ee) => {
                      m((le) => {
                        const ge = { ...le.selectedEntryUids };
                        return le.selectedWorldNames.filter((ve) => !ee.includes(ve)).forEach((ve) => delete ge[ve]), { ...le, selectedWorldNames: ee, selectedEntryUids: ge };
                      });
                    },
                    multiple: !0,
                    enableSearch: !0
                  }
                )
              ] }),
              f.selectedWorldNames.length > 0 && /* @__PURE__ */ N.jsxs("div", { className: "entry-selection-control", children: [
                /* @__PURE__ */ N.jsxs(
                  De,
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
                /* @__PURE__ */ N.jsx("span", { children: a.selectedEntriesSummary(Ee) })
              ] }),
              /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: r.contextToSend.suggestedEntries,
                    onChange: (ee) => H("suggestedEntries", ee.target.checked)
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
                  onChange: (ee) => z("maxContextType", ee.target.value),
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
                onChange: (ee) => z("maxContextValue", parseInt(ee.target.value) || 2048)
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
                  onChange: (ee) => z("maxResponseToken", parseInt(ee.target.value) || 256)
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
            /* @__PURE__ */ N.jsx("h3", { children: a.promptSectionTitle }),
            /* @__PURE__ */ N.jsx(
              Nf,
              {
                label: a.promptPresetLabel,
                items: _e,
                value: r.promptPreset,
                readOnlyValues: ["default"],
                onChange: (ee) => z("promptPreset", ee ?? "default"),
                onItemsChange: (ee) => {
                  const le = ee.reduce(
                    (ge, pe) => (ge[pe.value] = r.promptPresets[pe.value] ?? { content: "" }, ge),
                    {}
                  );
                  z("promptPresets", le);
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
                onChange: (ee) => {
                  const le = { ...r.promptPresets };
                  le[r.promptPreset] && (le[r.promptPreset].content = ee.target.value, z("promptPresets", le));
                },
                placeholder: a.promptPlaceholder,
                rows: 4,
                style: { marginTop: "5px", width: "100%" }
              }
            ),
            /* @__PURE__ */ N.jsx(
              De,
              {
                onClick: () => Q(),
                disabled: A,
                className: "menu_button interactable",
                style: { marginTop: "5px" },
                children: A ? a.generatingButton : a.sendPromptButton
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "wide-column", children: /* @__PURE__ */ N.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ N.jsx("h3", { children: a.suggestedEntriesTitle }),
          /* @__PURE__ */ N.jsxs("div", { className: "actions", children: [
            /* @__PURE__ */ N.jsx(
              De,
              {
                onClick: B,
                disabled: A || me.length === 0,
                className: "menu_button interactable",
                children: a.addAllButton
              }
            ),
            /* @__PURE__ */ N.jsxs(
              De,
              {
                onClick: () => k(!0),
                disabled: A,
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
              De,
              {
                onClick: () => S(!0),
                disabled: A,
                className: "menu_button interactable",
                title: a.importEntryTooltip,
                children: a.importEntryButton
              }
            ),
            /* @__PURE__ */ N.jsx(De, { onClick: K, disabled: A, className: "menu_button interactable", children: a.resetButton })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { children: [
            me.length === 0 && /* @__PURE__ */ N.jsx("p", { children: a.emptyStateMessage }),
            me.map(({ worldName: ee, entry: le }) => /* @__PURE__ */ N.jsx(
              Ek,
              {
                initialWorldName: ee,
                entry: le,
                allWorldNames: p,
                existingEntry: g[ee]?.find((ge) => ge.uid === le.uid),
                sessionRegexIds: f.regexIds,
                onAdd: R,
                onRemove: te,
                onContinue: Q,
                onUpdate: I,
                entriesGroupByWorldName: g,
                sessionForContext: f,
                contextToSend: r.contextToSend
              },
              `${ee}-${le.uid}-${le.comment}`
            ))
          ] })
        ] }) })
      ] })
    ] }),
    x && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          $0,
          {
            ref: O,
            entriesByWorldName: oe,
            initialSelectedUids: f.selectedEntryUids,
            title: a.selectEntriesDialogTitle
          }
        ),
        onComplete: (ee) => {
          if (ee && O.current) {
            const le = O.current.getSelection();
            m((ge) => ({ ...ge, selectedEntryUids: le }));
          }
          P(!1);
        },
        options: { wide: !0 }
      }
    ),
    l && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.CONFIRM,
        content: /* @__PURE__ */ N.jsx(
          $0,
          {
            ref: L,
            entriesByWorldName: g,
            initialSelectedUids: {},
            title: a.importEntriesDialogTitle
          }
        ),
        onComplete: (ee) => {
          if (ee && L.current) {
            const le = L.current.getSelection();
            $(le);
          }
          S(!1);
        },
        options: { wide: !0 }
      }
    ),
    w && /* @__PURE__ */ N.jsx(
      Jn,
      {
        type: Pt.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          h_,
          {
            target: { type: "global" },
            initialState: V,
            onClose: () => k(!1),
            onApply: ae,
            sessionForContext: f,
            allEntries: g,
            contextToSend: r.contextToSend
          }
        ),
        onComplete: () => k(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, Tk = () => {
  const [n, r] = re.useState(!1), s = () => r(!0), a = () => r(!1);
  return window.openWorldInfoRecommenderPopup = s, n ? /* @__PURE__ */ N.jsx(
    Jn,
    {
      content: /* @__PURE__ */ N.jsx(Ak, {}),
      type: Pt.DISPLAY,
      onComplete: a,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
};
function xk() {
  function n(r) {
    if (!r)
      return null;
    const s = [], a = Array.isArray(r) ? r : [r];
    for (const u of a) {
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
  Pe.SlashCommandParser.addCommandObject(
    Pe.SlashCommand.fromProps({
      name: "world-info-recommender-popup-open",
      helpString: "Open World Info Recommender popup",
      unnamedArgumentList: [],
      callback: async (r, s) => (window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup(), !1),
      returns: Pe.ARGUMENT_TYPE.BOOLEAN
    })
  ), Pe.SlashCommandParser.addCommandObject(
    Pe.SlashCommand.fromProps({
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
      returns: Pe.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        Pe.SlashCommandNamedArgument.fromProps({
          name: "profile",
          description: "Connection Profile ID/name to use for the AI request.",
          typeList: [Pe.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          enumProvider: NS
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "lorebooks",
          description: "List of lorebook names to include as context (defaults to active).",
          typeList: [Pe.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          enumProvider: W1.worlds
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "allowed-ops",
          description: "Operations allowed: 'add', 'update'.",
          typeList: [Pe.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          defaultValue: "[add,update]",
          enumList: ["add", "update"]
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "editable-entries",
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [Pe.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "context",
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [Pe.ARGUMENT_TYPE.LIST],
          isRequired: !1,
          acceptsMultiple: !0,
          // Default is handled by falling back to settings
          enumList: ["stDescription", "messages", "charCard", "authorNote", "worldInfo"]
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "messages",
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [Pe.ARGUMENT_TYPE.STRING],
          isRequired: !1
          // Default is handled by falling back to settings
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "max-context",
          description: "Override context token limit.",
          typeList: [Pe.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "max-response",
          description: "Override response token limit.",
          typeList: [Pe.ARGUMENT_TYPE.NUMBER],
          isRequired: !1
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "main-context-template",
          description: "Override main context template preset.",
          typeList: [Pe.ARGUMENT_TYPE.STRING],
          isRequired: !1
        }),
        Pe.SlashCommandNamedArgument.fromProps({
          name: "silent",
          description: "Suppress success/error messages.",
          typeList: [Pe.ARGUMENT_TYPE.BOOLEAN],
          isRequired: !1,
          defaultValue: !1
        })
      ],
      unnamedArgumentList: [
        Pe.SlashCommandArgument.fromProps({
          description: "The prompt/task for the AI.",
          typeList: [Pe.ARGUMENT_TYPE.STRING],
          isRequired: !0,
          acceptsMultiple: !0
          // Allows prompts with spaces
        })
      ],
      // The callback function to execute
      callback: async (r, s) => {
        const a = r.silent ?? !1;
        try {
          const u = It.getSettings(), c = Array.isArray(s) ? s.join(" ") : s, f = r.profile;
          let m;
          if (!c)
            throw new Error("Prompt argument is required.");
          if (!f)
            throw new Error("Profile argument is required.");
          const p = Pe.extensionSettings?.connectionManager?.profiles?.find(
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
              const K = await Pe.loadWorldInfo(B);
              K && (g[B] = Object.values(K.entries));
            }
          } else
            g = await cl(["all"], !0, sn);
          const E = Object.keys(g);
          let y;
          if (_ !== null) {
            if (y = _.map((B) => B.trim()).filter((B) => E.includes(B) ? !0 : (a || ke("warning", `Specified lorebook "${B}" is not active or does not exist. Ignoring.`), !1)), y.length === 0)
              throw new Error("No valid lorebooks specified or active.");
          } else
            y = E;
          y.length === 0 && (a || ke("warning", "No active lorebooks found to use for context."));
          const b = n(r["allowed-ops"]), h = b !== null ? b : ["add", "update"], C = h.includes("add"), A = h.includes("update"), M = /* @__PURE__ */ new Set(), x = n(r["editable-entries"]);
          x !== null && x.forEach((B) => {
            M.add(B.trim());
          });
          const P = M.size > 0, l = n(r.context), S = { ...u.contextToSend };
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
              a || ke("warning", `Invalid 'messages' argument format: "${r.messages}". Using default.`);
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
            includeNames: !!Xt,
            targetCharacterId: Xt ? sn : void 0
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
              const B = S.messages.last ?? 10, K = Pe.chat?.length ?? 0;
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
          const k = {
            selectedWorldNames: y,
            suggestedEntries: {},
            // Start with no pre-existing suggestions
            blackListedEntries: [],
            // Start with no blacklist
            regexIds: {},
            // Start with no regexes
            selectedEntryUids: {}
          }, O = r["max-response"] ? parseInt(r["max-response"]) : void 0, L = structuredClone(u.prompts);
          S.stDescription || delete L.stDescription, (!S.worldInfo || y.length === 0) && delete L.currentLorebooks, delete L.suggestedLorebooks;
          const j = {
            profileId: m,
            userPrompt: c,
            buildPromptOptions: w,
            session: k,
            entriesGroupByWorldName: g,
            // Pass the current state
            promptSettings: L,
            mainContextList: u.mainContextTemplatePresets[r["main-context-template"] ?? u.mainContextTemplatePreset].prompts.filter((B) => B.enabled).map((B) => ({
              promptName: B.promptName,
              role: B.role
            })),
            maxResponseToken: O ?? u.maxResponseToken
          };
          a || ke("info", "Running World Info Recommender...");
          const z = await Ly(j);
          if (Object.keys(z).length === 0)
            return a || ke("info", "AI returned no suggestions."), !0;
          let H = 0, Y = 0, Z = 0;
          const Q = /* @__PURE__ */ new Set(), R = structuredClone(g);
          for (const [B, K] of Object.entries(z)) {
            let te = B;
            if (!y.includes(te))
              if (E.includes(te)) {
                a || ke(
                  "warning",
                  `AI suggested entry for "${te}", but it wasn't in the specified 'lorebooks'. Skipping ${K.length} entries.`
                ), Z += K.length;
                continue;
              } else if (y.length > 0)
                te = y[0], a || ke(
                  "warning",
                  `AI suggested entry for non-existent/inactive world "${B}". Attempting to place in "${te}".`
                );
              else {
                a || ke(
                  "error",
                  `AI suggested entry for "${B}", but no valid target lorebook available. Skipping ${K.length} entries.`
                ), Z += K.length;
                continue;
              }
            for (const I of K) {
              if (R[te]?.some(
                (oe) => oe.uid === I.uid && oe.comment === I.comment
              )) {
                if (!A) {
                  a || ke(
                    "info",
                    `Skipping update for "${te}.${I.comment || I.uid}" (updates disallowed).`
                  ), Z++;
                  continue;
                }
                if (P) {
                  const oe = `${te}.${I.comment}`, V = `${te}.${I.uid}`;
                  if (!M.has(oe) && !M.has(V)) {
                    a || ke(
                      "info",
                      `Skipping update for "${te}.${I.comment || I.uid}" (not in editable-entries).`
                    ), Z++;
                    continue;
                  }
                }
              } else if (!C) {
                a || ke(
                  "info",
                  `Skipping add for "${te}.${I.comment || "New Entry"}" (adds disallowed).`
                ), Z++;
                continue;
              }
              try {
                const { status: oe } = xS(I, te, R);
                oe === "added" ? H++ : Y++, Q.add(te);
              } catch (oe) {
                a || ke(
                  "error",
                  `Failed to prepare modification for "${te}.${I.comment || I.uid}": ${oe.message}`
                ), Z++;
              }
            }
          }
          if (Q.size > 0) {
            a || ke("info", `Saving changes to ${Q.size} lorebook(s)...`);
            for (const B of Q) {
              const K = R[B], te = { entries: {} };
              K.forEach((I) => te.entries[I.uid] = I), await Pe.saveWorldInfo(B, te), Pe.reloadWorldInfoEditor(B, !0);
            }
          }
          if (!a) {
            const B = [];
            (H > 0 || Y > 0 || Z > 0) && B.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${H}</li>
                  <li><strong>Updated:</strong> ${Y}</li>
                  <li><strong>Skipped:</strong> ${Z}</li>
                  </ul>
                </div>
                `), Q.size > 0 && B.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(Q).map((te) => `<li>${te}</li>`).join("")}
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
            ke("success", K, { escapeHtml: !1 });
          }
          return !0;
        } catch (u) {
          return console.error("Error running world-info-recommender-run command:", u), a || ke("error", `World Info Recommender command failed: ${u.message}`), !1;
        }
      }
    })
  );
}
const Xs = SillyTavern.getContext();
async function Nk() {
  const n = await Xs.renderExtensionTemplateAsync(
    `third-party/${Oi}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", n);
  const r = document.createElement("div"), s = document.querySelector(
    ".worldInfoRecommender_settings .inline-drawer-content"
  );
  s && (s.prepend(r), sv.createRoot(r).render(
    /* @__PURE__ */ N.jsx(fl.StrictMode, { children: /* @__PURE__ */ N.jsx(BS, {}) })
  ));
  const a = '<div class="menu_button fa-brands fa-wpexplorer interactable worldInfoRecommender-icon" title="World Info Recommender"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), sv.createRoot(c).render(
    /* @__PURE__ */ N.jsx(fl.StrictMode, { children: /* @__PURE__ */ N.jsx(Tk, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const p = document.createElement("div");
    p.innerHTML = a.trim();
    const _ = p.firstChild;
    _ && (m.prepend(_), _.addEventListener("click", () => {
      window.openWorldInfoRecommenderPopup && window.openWorldInfoRecommenderPopup();
    }));
  });
}
function Ok() {
  return console.log("[WorldInfoRecommender] Checking imports..."), Xs.ConnectionManagerRequestService ? Xs.getCharacterCardFields ? Xs.getWorldInfoPrompt ? Xs.reloadWorldInfoEditor ? (console.log("[WorldInfoRecommender] All imports OK"), !0) : (console.error("[WorldInfoRecommender] Missing: reloadWorldInfoEditor"), !1) : (console.error("[WorldInfoRecommender] Missing: getWorldInfoPrompt"), !1) : (console.error("[WorldInfoRecommender] Missing: getCharacterCardFields"), !1) : (console.error("[WorldInfoRecommender] Missing: ConnectionManagerRequestService"), !1);
}
console.log("[WorldInfoRecommender] Extension script loaded, starting initialization...");
Ok() ? (console.log("[WorldInfoRecommender] Starting settings initialization..."), jS().then(() => {
  console.log("[WorldInfoRecommender] Settings initialized, calling init()..."), Nk(), console.log("[WorldInfoRecommender] Init complete, initializing commands..."), xk(), console.log("[WorldInfoRecommender] Fully initialized!");
}).catch((n) => {
  console.error("[WorldInfoRecommender] Initialization failed:", n);
})) : (ke("error", `[${Oi}] Make sure ST is updated.`), console.error("[WorldInfoRecommender] Import check failed!"));
export {
  Nk as init
};
