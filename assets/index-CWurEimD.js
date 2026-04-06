var yh = e => {
    throw TypeError(e)
};
var $l = (e, t, n) => t.has(e) || yh("Cannot " + n);
var N = (e, t, n) => ($l(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    J = (e, t, n) => t.has(e) ? yh("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
    G = (e, t, n, r) => ($l(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    je = (e, t, n) => ($l(e, t, "access private method"), n);
var ys = (e, t, n, r) => ({
    set _(o) {
        G(e, t, o, n)
    },
    get _() {
        return N(e, t, r)
    }
});

function Q1(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();

function _g(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Vg = {
        exports: {}
    },
    Ja = {},
    Fg = {
        exports: {}
    },
    X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ns = Symbol.for("react.element"),
    Y1 = Symbol.for("react.portal"),
    X1 = Symbol.for("react.fragment"),
    q1 = Symbol.for("react.strict_mode"),
    Z1 = Symbol.for("react.profiler"),
    J1 = Symbol.for("react.provider"),
    eS = Symbol.for("react.context"),
    tS = Symbol.for("react.forward_ref"),
    nS = Symbol.for("react.suspense"),
    rS = Symbol.for("react.memo"),
    oS = Symbol.for("react.lazy"),
    vh = Symbol.iterator;

function iS(e) {
    return e === null || typeof e != "object" ? null : (e = vh && e[vh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var zg = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Bg = Object.assign,
    $g = {};

function Bo(e, t, n) {
    this.props = e, this.context = t, this.refs = $g, this.updater = n || zg
}
Bo.prototype.isReactComponent = {};
Bo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Bo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Ug() {}
Ug.prototype = Bo.prototype;

function wd(e, t, n) {
    this.props = e, this.context = t, this.refs = $g, this.updater = n || zg
}
var xd = wd.prototype = new Ug;
xd.constructor = wd;
Bg(xd, Bo.prototype);
xd.isPureReactComponent = !0;
var wh = Array.isArray,
    Hg = Object.prototype.hasOwnProperty,
    Sd = {
        current: null
    },
    Wg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Kg(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Hg.call(t, r) && !Wg.hasOwnProperty(r) && (o[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) o.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
    return {
        $$typeof: ns,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: Sd.current
    }
}

function sS(e, t) {
    return {
        $$typeof: ns,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Cd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ns
}

function aS(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var xh = /\/+/g;

function Ul(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? aS("" + e.key) : t.toString(36)
}

function Hs(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (i) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ns:
                case Y1:
                    s = !0
            }
    }
    if (s) return s = e, o = o(s), e = r === "" ? "." + Ul(s, 0) : r, wh(o) ? (n = "", e != null && (n = e.replace(xh, "$&/") + "/"), Hs(o, t, n, "", function(u) {
        return u
    })) : o != null && (Cd(o) && (o = sS(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(xh, "$&/") + "/") + e)), t.push(o)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", wh(e))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Ul(i, a);
            s += Hs(i, t, n, l, o)
        } else if (l = iS(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + Ul(i, a++), s += Hs(i, t, n, l, o);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function vs(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return Hs(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}

function lS(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Ge = {
        current: null
    },
    Ws = {
        transition: null
    },
    uS = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: Ws,
        ReactCurrentOwner: Sd
    };

function Gg() {
    throw Error("act(...) is not supported in production builds of React.")
}
X.Children = {
    map: vs,
    forEach: function(e, t, n) {
        vs(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return vs(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return vs(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Cd(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
X.Component = Bo;
X.Fragment = X1;
X.Profiler = Z1;
X.PureComponent = wd;
X.StrictMode = q1;
X.Suspense = nS;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uS;
X.act = Gg;
X.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Bg({}, e.props),
        o = e.key,
        i = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, s = Sd.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) Hg.call(t, l) && !Wg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ns,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: s
    }
};
X.createContext = function(e) {
    return e = {
        $$typeof: eS,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: J1,
        _context: e
    }, e.Consumer = e
};
X.createElement = Kg;
X.createFactory = function(e) {
    var t = Kg.bind(null, e);
    return t.type = e, t
};
X.createRef = function() {
    return {
        current: null
    }
};
X.forwardRef = function(e) {
    return {
        $$typeof: tS,
        render: e
    }
};
X.isValidElement = Cd;
X.lazy = function(e) {
    return {
        $$typeof: oS,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: lS
    }
};
X.memo = function(e, t) {
    return {
        $$typeof: rS,
        type: e,
        compare: t === void 0 ? null : t
    }
};
X.startTransition = function(e) {
    var t = Ws.transition;
    Ws.transition = {};
    try {
        e()
    } finally {
        Ws.transition = t
    }
};
X.unstable_act = Gg;
X.useCallback = function(e, t) {
    return Ge.current.useCallback(e, t)
};
X.useContext = function(e) {
    return Ge.current.useContext(e)
};
X.useDebugValue = function() {};
X.useDeferredValue = function(e) {
    return Ge.current.useDeferredValue(e)
};
X.useEffect = function(e, t) {
    return Ge.current.useEffect(e, t)
};
X.useId = function() {
    return Ge.current.useId()
};
X.useImperativeHandle = function(e, t, n) {
    return Ge.current.useImperativeHandle(e, t, n)
};
X.useInsertionEffect = function(e, t) {
    return Ge.current.useInsertionEffect(e, t)
};
X.useLayoutEffect = function(e, t) {
    return Ge.current.useLayoutEffect(e, t)
};
X.useMemo = function(e, t) {
    return Ge.current.useMemo(e, t)
};
X.useReducer = function(e, t, n) {
    return Ge.current.useReducer(e, t, n)
};
X.useRef = function(e) {
    return Ge.current.useRef(e)
};
X.useState = function(e) {
    return Ge.current.useState(e)
};
X.useSyncExternalStore = function(e, t, n) {
    return Ge.current.useSyncExternalStore(e, t, n)
};
X.useTransition = function() {
    return Ge.current.useTransition()
};
X.version = "18.3.1";
Fg.exports = X;
var x = Fg.exports;
const M = _g(x),
    Ed = Q1({
        __proto__: null,
        default: M
    }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cS = x,
    dS = Symbol.for("react.element"),
    fS = Symbol.for("react.fragment"),
    hS = Object.prototype.hasOwnProperty,
    pS = cS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    mS = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Qg(e, t, n) {
    var r, o = {},
        i = null,
        s = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) hS.call(t, r) && !mS.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: dS,
        type: e,
        key: i,
        ref: s,
        props: o,
        _owner: pS.current
    }
}
Ja.Fragment = fS;
Ja.jsx = Qg;
Ja.jsxs = Qg;
Vg.exports = Ja;
var C = Vg.exports,
    Yg = {
        exports: {}
    },
    ct = {},
    Xg = {
        exports: {}
    },
    qg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, R) {
        var I = P.length;
        P.push(R);
        e: for (; 0 < I;) {
            var $ = I - 1 >>> 1,
                B = P[$];
            if (0 < o(B, R)) P[$] = R, P[I] = B, I = $;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var R = P[0],
            I = P.pop();
        if (I !== R) {
            P[0] = I;
            e: for (var $ = 0, B = P.length, Y = B >>> 1; $ < Y;) {
                var q = 2 * ($ + 1) - 1,
                    xe = P[q],
                    Le = q + 1,
                    ee = P[Le];
                if (0 > o(xe, I)) Le < B && 0 > o(ee, xe) ? (P[$] = ee, P[Le] = I, $ = Le) : (P[$] = xe, P[q] = I, $ = q);
                else if (Le < B && 0 > o(ee, I)) P[$] = ee, P[Le] = I, $ = Le;
                else break e
            }
        }
        return R
    }

    function o(P, R) {
        var I = P.sortIndex - R.sortIndex;
        return I !== 0 ? I : P.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function() {
            return s.now() - a
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        h = !1,
        v = !1,
        g = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function y(P) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= P) r(u), R.sortIndex = R.expirationTime, t(l, R);
            else break;
            R = n(u)
        }
    }

    function S(P) {
        if (g = !1, y(P), !v)
            if (n(l) !== null) v = !0, z(E);
            else {
                var R = n(u);
                R !== null && W(S, R.startTime - P)
            }
    }

    function E(P, R) {
        v = !1, g && (g = !1, m(k), k = -1), h = !0;
        var I = f;
        try {
            for (y(R), d = n(l); d !== null && (!(d.expirationTime > R) || P && !_());) {
                var $ = d.callback;
                if (typeof $ == "function") {
                    d.callback = null, f = d.priorityLevel;
                    var B = $(d.expirationTime <= R);
                    R = e.unstable_now(), typeof B == "function" ? d.callback = B : d === n(l) && r(l), y(R)
                } else r(l);
                d = n(l)
            }
            if (d !== null) var Y = !0;
            else {
                var q = n(u);
                q !== null && W(S, q.startTime - R), Y = !1
            }
            return Y
        } finally {
            d = null, f = I, h = !1
        }
    }
    var T = !1,
        b = null,
        k = -1,
        D = 5,
        A = -1;

    function _() {
        return !(e.unstable_now() - A < D)
    }

    function j() {
        if (b !== null) {
            var P = e.unstable_now();
            A = P;
            var R = !0;
            try {
                R = b(!0, P)
            } finally {
                R ? U() : (T = !1, b = null)
            }
        } else T = !1
    }
    var U;
    if (typeof p == "function") U = function() {
        p(j)
    };
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel,
            H = L.port2;
        L.port1.onmessage = j, U = function() {
            H.postMessage(null)
        }
    } else U = function() {
        w(j, 0)
    };

    function z(P) {
        b = P, T || (T = !0, U())
    }

    function W(P, R) {
        k = w(function() {
            P(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        v || h || (v = !0, z(E))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return f
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(P) {
        switch (f) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = f
        }
        var I = f;
        f = R;
        try {
            return P()
        } finally {
            f = I
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, R) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var I = f;
        f = P;
        try {
            return R()
        } finally {
            f = I
        }
    }, e.unstable_scheduleCallback = function(P, R, I) {
        var $ = e.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? $ + I : $) : I = $, P) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return B = I + B, P = {
            id: c++,
            callback: R,
            priorityLevel: P,
            startTime: I,
            expirationTime: B,
            sortIndex: -1
        }, I > $ ? (P.sortIndex = I, t(u, P), n(l) === null && P === n(u) && (g ? (m(k), k = -1) : g = !0, W(S, I - $))) : (P.sortIndex = B, t(l, P), v || h || (v = !0, z(E))), P
    }, e.unstable_shouldYield = _, e.unstable_wrapCallback = function(P) {
        var R = f;
        return function() {
            var I = f;
            f = R;
            try {
                return P.apply(this, arguments)
            } finally {
                f = I
            }
        }
    }
})(qg);
Xg.exports = qg;
var gS = Xg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yS = x,
    lt = gS;

function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Zg = new Set,
    Ri = {};

function zr(e, t) {
    Ro(e, t), Ro(e + "Capture", t)
}

function Ro(e, t) {
    for (Ri[e] = t, e = 0; e < t.length; e++) Zg.add(t[e])
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Fu = Object.prototype.hasOwnProperty,
    vS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Sh = {},
    Ch = {};

function wS(e) {
    return Fu.call(Ch, e) ? !0 : Fu.call(Sh, e) ? !1 : vS.test(e) ? Ch[e] = !0 : (Sh[e] = !0, !1)
}

function xS(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function SS(e, t, n, r) {
    if (t === null || typeof t > "u" || xS(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Qe(e, t, n, r, o, i, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Oe[e] = new Qe(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Oe[t] = new Qe(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Oe[e] = new Qe(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Oe[e] = new Qe(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Oe[e] = new Qe(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Oe[e] = new Qe(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Oe[e] = new Qe(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Oe[e] = new Qe(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Oe[e] = new Qe(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Td = /[\-:]([a-z])/g;

function bd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Td, bd);
    Oe[t] = new Qe(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Td, bd);
    Oe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Td, bd);
    Oe[t] = new Qe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Oe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Oe.xlinkHref = new Qe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Oe[e] = new Qe(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function kd(e, t, n, r) {
    var o = Oe.hasOwnProperty(t) ? Oe[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (SS(t, n, o, r) && (n = null), r || o === null ? wS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Sn = yS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ws = Symbol.for("react.element"),
    Xr = Symbol.for("react.portal"),
    qr = Symbol.for("react.fragment"),
    Pd = Symbol.for("react.strict_mode"),
    zu = Symbol.for("react.profiler"),
    Jg = Symbol.for("react.provider"),
    ey = Symbol.for("react.context"),
    Ad = Symbol.for("react.forward_ref"),
    Bu = Symbol.for("react.suspense"),
    $u = Symbol.for("react.suspense_list"),
    Rd = Symbol.for("react.memo"),
    Ln = Symbol.for("react.lazy"),
    ty = Symbol.for("react.offscreen"),
    Eh = Symbol.iterator;

function Jo(e) {
    return e === null || typeof e != "object" ? null : (e = Eh && e[Eh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var me = Object.assign,
    Hl;

function ci(e) {
    if (Hl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Hl = t && t[1] || ""
    }
    return `
` + Hl + e
}
var Wl = !1;

function Kl(e, t) {
    if (!e || Wl) return "";
    Wl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (o[s] !== i[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if (s--, a--, 0 > a || o[s] !== i[a]) {
                                var l = `
` + o[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            }
                    while (1 <= s && 0 <= a);
                    break
                }
        }
    } finally {
        Wl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ci(e) : ""
}

function CS(e) {
    switch (e.tag) {
        case 5:
            return ci(e.type);
        case 16:
            return ci("Lazy");
        case 13:
            return ci("Suspense");
        case 19:
            return ci("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Kl(e.type, !1), e;
        case 11:
            return e = Kl(e.type.render, !1), e;
        case 1:
            return e = Kl(e.type, !0), e;
        default:
            return ""
    }
}

function Uu(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case qr:
            return "Fragment";
        case Xr:
            return "Portal";
        case zu:
            return "Profiler";
        case Pd:
            return "StrictMode";
        case Bu:
            return "Suspense";
        case $u:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ey:
            return (e.displayName || "Context") + ".Consumer";
        case Jg:
            return (e._context.displayName || "Context") + ".Provider";
        case Ad:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Rd:
            return t = e.displayName || null, t !== null ? t : Uu(e.type) || "Memo";
        case Ln:
            t = e._payload, e = e._init;
            try {
                return Uu(e(t))
            } catch {}
    }
    return null
}

function ES(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Uu(t);
        case 8:
            return t === Pd ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function tr(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ny(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function TS(e) {
    var t = ny(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(s) {
                r = "" + s, i.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function xs(e) {
    e._valueTracker || (e._valueTracker = TS(e))
}

function ry(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ny(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function fa(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Hu(e, t) {
    var n = t.checked;
    return me({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Th(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = tr(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function oy(e, t) {
    t = t.checked, t != null && kd(e, "checked", t, !1)
}

function Wu(e, t) {
    oy(e, t);
    var n = tr(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Ku(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ku(e, t.type, tr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function bh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Ku(e, t, n) {
    (t !== "number" || fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var di = Array.isArray;

function fo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + tr(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0, r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}

function Gu(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return me({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function kh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(O(92));
            if (di(n)) {
                if (1 < n.length) throw Error(O(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: tr(n)
    }
}

function iy(e, t) {
    var n = tr(t.value),
        r = tr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Ph(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function sy(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Qu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? sy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Ss, ay = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Ss = Ss || document.createElement("div"), Ss.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ss.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Ni(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var mi = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    bS = ["Webkit", "ms", "Moz", "O"];
Object.keys(mi).forEach(function(e) {
    bS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), mi[t] = mi[e]
    })
});

function ly(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || mi.hasOwnProperty(e) && mi[e] ? ("" + t).trim() : t + "px"
}

function uy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = ly(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
var kS = me({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Yu(e, t) {
    if (t) {
        if (kS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(O(62))
    }
}

function Xu(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
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
            return !0
    }
}
var qu = null;

function Nd(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Zu = null,
    ho = null,
    po = null;

function Ah(e) {
    if (e = is(e)) {
        if (typeof Zu != "function") throw Error(O(280));
        var t = e.stateNode;
        t && (t = ol(t), Zu(e.stateNode, e.type, t))
    }
}

function cy(e) {
    ho ? po ? po.push(e) : po = [e] : ho = e
}

function dy() {
    if (ho) {
        var e = ho,
            t = po;
        if (po = ho = null, Ah(e), t)
            for (e = 0; e < t.length; e++) Ah(t[e])
    }
}

function fy(e, t) {
    return e(t)
}

function hy() {}
var Gl = !1;

function py(e, t, n) {
    if (Gl) return e(t, n);
    Gl = !0;
    try {
        return fy(e, t, n)
    } finally {
        Gl = !1, (ho !== null || po !== null) && (hy(), dy())
    }
}

function Mi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ol(n);
    if (r === null) return null;
    n = r[t];
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n
}
var Ju = !1;
if (mn) try {
    var ei = {};
    Object.defineProperty(ei, "passive", {
        get: function() {
            Ju = !0
        }
    }), window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei)
} catch {
    Ju = !1
}

function PS(e, t, n, r, o, i, s, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var gi = !1,
    ha = null,
    pa = !1,
    ec = null,
    AS = {
        onError: function(e) {
            gi = !0, ha = e
        }
    };

function RS(e, t, n, r, o, i, s, a, l) {
    gi = !1, ha = null, PS.apply(AS, arguments)
}

function NS(e, t, n, r, o, i, s, a, l) {
    if (RS.apply(this, arguments), gi) {
        if (gi) {
            var u = ha;
            gi = !1, ha = null
        } else throw Error(O(198));
        pa || (pa = !0, ec = u)
    }
}

function Br(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function my(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Rh(e) {
    if (Br(e) !== e) throw Error(O(188))
}

function MS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Br(e), t === null) throw Error(O(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null) break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n) return Rh(o), e;
                if (i === r) return Rh(o), t;
                i = i.sibling
            }
            throw Error(O(188))
        }
        if (n.return !== r.return) n = o, r = i;
        else {
            for (var s = !1, a = o.child; a;) {
                if (a === n) {
                    s = !0, n = o, r = i;
                    break
                }
                if (a === r) {
                    s = !0, r = o, n = i;
                    break
                }
                a = a.sibling
            }
            if (!s) {
                for (a = i.child; a;) {
                    if (a === n) {
                        s = !0, n = i, r = o;
                        break
                    }
                    if (a === r) {
                        s = !0, r = i, n = o;
                        break
                    }
                    a = a.sibling
                }
                if (!s) throw Error(O(189))
            }
        }
        if (n.alternate !== r) throw Error(O(190))
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t
}

function gy(e) {
    return e = MS(e), e !== null ? yy(e) : null
}

function yy(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = yy(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var vy = lt.unstable_scheduleCallback,
    Nh = lt.unstable_cancelCallback,
    DS = lt.unstable_shouldYield,
    OS = lt.unstable_requestPaint,
    ve = lt.unstable_now,
    LS = lt.unstable_getCurrentPriorityLevel,
    Md = lt.unstable_ImmediatePriority,
    wy = lt.unstable_UserBlockingPriority,
    ma = lt.unstable_NormalPriority,
    jS = lt.unstable_LowPriority,
    xy = lt.unstable_IdlePriority,
    el = null,
    qt = null;

function IS(e) {
    if (qt && typeof qt.onCommitFiberRoot == "function") try {
        qt.onCommitFiberRoot(el, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : FS,
    _S = Math.log,
    VS = Math.LN2;

function FS(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_S(e) / VS | 0) | 0
}
var Cs = 64,
    Es = 4194304;

function fi(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ga(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~o;
        a !== 0 ? r = fi(a) : (i &= s, i !== 0 && (r = fi(i)))
    } else s = n & ~o, s !== 0 ? r = fi(s) : i !== 0 && (r = fi(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - jt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r
}

function zS(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function BS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var s = 31 - jt(i),
            a = 1 << s,
            l = o[s];
        l === -1 ? (!(a & n) || a & r) && (o[s] = zS(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
    }
}

function tc(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Sy() {
    var e = Cs;
    return Cs <<= 1, !(Cs & 4194240) && (Cs = 64), e
}

function Ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function rs(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - jt(t), e[t] = n
}

function $S(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - jt(n),
            i = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
    }
}

function Dd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - jt(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var ne = 0;

function Cy(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ey, Od, Ty, by, ky, nc = !1,
    Ts = [],
    Gn = null,
    Qn = null,
    Yn = null,
    Di = new Map,
    Oi = new Map,
    In = [],
    US = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Mh(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Gn = null;
            break;
        case "dragenter":
        case "dragleave":
            Qn = null;
            break;
        case "mouseover":
        case "mouseout":
            Yn = null;
            break;
        case "pointerover":
        case "pointerout":
            Di.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Oi.delete(t.pointerId)
    }
}

function ti(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = is(t), t !== null && Od(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function HS(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Gn = ti(Gn, e, t, n, r, o), !0;
        case "dragenter":
            return Qn = ti(Qn, e, t, n, r, o), !0;
        case "mouseover":
            return Yn = ti(Yn, e, t, n, r, o), !0;
        case "pointerover":
            var i = o.pointerId;
            return Di.set(i, ti(Di.get(i) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return i = o.pointerId, Oi.set(i, ti(Oi.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}

function Py(e) {
    var t = wr(e.target);
    if (t !== null) {
        var n = Br(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = my(n), t !== null) {
                    e.blockedOn = t, ky(e.priority, function() {
                        Ty(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ks(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = rc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            qu = r, n.target.dispatchEvent(r), qu = null
        } else return t = is(n), t !== null && Od(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Dh(e, t, n) {
    Ks(e) && n.delete(t)
}

function WS() {
    nc = !1, Gn !== null && Ks(Gn) && (Gn = null), Qn !== null && Ks(Qn) && (Qn = null), Yn !== null && Ks(Yn) && (Yn = null), Di.forEach(Dh), Oi.forEach(Dh)
}

function ni(e, t) {
    e.blockedOn === t && (e.blockedOn = null, nc || (nc = !0, lt.unstable_scheduleCallback(lt.unstable_NormalPriority, WS)))
}

function Li(e) {
    function t(o) {
        return ni(o, e)
    }
    if (0 < Ts.length) {
        ni(Ts[0], e);
        for (var n = 1; n < Ts.length; n++) {
            var r = Ts[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Gn !== null && ni(Gn, e), Qn !== null && ni(Qn, e), Yn !== null && ni(Yn, e), Di.forEach(t), Oi.forEach(t), n = 0; n < In.length; n++) r = In[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < In.length && (n = In[0], n.blockedOn === null);) Py(n), n.blockedOn === null && In.shift()
}
var mo = Sn.ReactCurrentBatchConfig,
    ya = !0;

function KS(e, t, n, r) {
    var o = ne,
        i = mo.transition;
    mo.transition = null;
    try {
        ne = 1, Ld(e, t, n, r)
    } finally {
        ne = o, mo.transition = i
    }
}

function GS(e, t, n, r) {
    var o = ne,
        i = mo.transition;
    mo.transition = null;
    try {
        ne = 4, Ld(e, t, n, r)
    } finally {
        ne = o, mo.transition = i
    }
}

function Ld(e, t, n, r) {
    if (ya) {
        var o = rc(e, t, n, r);
        if (o === null) ou(e, t, r, va, n), Mh(e, r);
        else if (HS(o, e, t, n, r)) r.stopPropagation();
        else if (Mh(e, r), t & 4 && -1 < US.indexOf(e)) {
            for (; o !== null;) {
                var i = is(o);
                if (i !== null && Ey(i), i = rc(e, t, n, r), i === null && ou(e, t, r, va, n), i === o) break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else ou(e, t, r, null, n)
    }
}
var va = null;

function rc(e, t, n, r) {
    if (va = null, e = Nd(r), e = wr(e), e !== null)
        if (t = Br(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = my(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return va = e, null
}

function Ay(e) {
    switch (e) {
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
            return 1;
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
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (LS()) {
                case Md:
                    return 1;
                case wy:
                    return 4;
                case ma:
                case jS:
                    return 16;
                case xy:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Un = null,
    jd = null,
    Gs = null;

function Ry() {
    if (Gs) return Gs;
    var e, t = jd,
        n = t.length,
        r, o = "value" in Un ? Un.value : Un.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
    return Gs = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Qs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function bs() {
    return !0
}

function Oh() {
    return !1
}

function dt(e) {
    function t(n, r, o, i, s) {
        this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bs : Oh, this.isPropagationStopped = Oh, this
    }
    return me(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bs)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bs)
        },
        persist: function() {},
        isPersistent: bs
    }), t
}
var $o = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Id = dt($o),
    os = me({}, $o, {
        view: 0,
        detail: 0
    }),
    QS = dt(os),
    Yl, Xl, ri, tl = me({}, os, {
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
        getModifierState: _d,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ri && (ri && e.type === "mousemove" ? (Yl = e.screenX - ri.screenX, Xl = e.screenY - ri.screenY) : Xl = Yl = 0, ri = e), Yl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Xl
        }
    }),
    Lh = dt(tl),
    YS = me({}, tl, {
        dataTransfer: 0
    }),
    XS = dt(YS),
    qS = me({}, os, {
        relatedTarget: 0
    }),
    ql = dt(qS),
    ZS = me({}, $o, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    JS = dt(ZS),
    eC = me({}, $o, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    tC = dt(eC),
    nC = me({}, $o, {
        data: 0
    }),
    jh = dt(nC),
    rC = {
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
    },
    oC = {
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
    },
    iC = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function sC(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = iC[e]) ? !!t[e] : !1
}

function _d() {
    return sC
}
var aC = me({}, os, {
        key: function(e) {
            if (e.key) {
                var t = rC[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? oC[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: _d,
        charCode: function(e) {
            return e.type === "keypress" ? Qs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    lC = dt(aC),
    uC = me({}, tl, {
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
    }),
    Ih = dt(uC),
    cC = me({}, os, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _d
    }),
    dC = dt(cC),
    fC = me({}, $o, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    hC = dt(fC),
    pC = me({}, tl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    mC = dt(pC),
    gC = [9, 13, 27, 32],
    Vd = mn && "CompositionEvent" in window,
    yi = null;
mn && "documentMode" in document && (yi = document.documentMode);
var yC = mn && "TextEvent" in window && !yi,
    Ny = mn && (!Vd || yi && 8 < yi && 11 >= yi),
    _h = " ",
    Vh = !1;

function My(e, t) {
    switch (e) {
        case "keyup":
            return gC.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Dy(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Zr = !1;

function vC(e, t) {
    switch (e) {
        case "compositionend":
            return Dy(t);
        case "keypress":
            return t.which !== 32 ? null : (Vh = !0, _h);
        case "textInput":
            return e = t.data, e === _h && Vh ? null : e;
        default:
            return null
    }
}

function wC(e, t) {
    if (Zr) return e === "compositionend" || !Vd && My(e, t) ? (e = Ry(), Gs = jd = Un = null, Zr = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Ny && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var xC = {
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

function Fh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xC[e.type] : t === "textarea"
}

function Oy(e, t, n, r) {
    cy(r), t = wa(t, "onChange"), 0 < t.length && (n = new Id("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var vi = null,
    ji = null;

function SC(e) {
    Hy(e, 0)
}

function nl(e) {
    var t = to(e);
    if (ry(t)) return e
}

function CC(e, t) {
    if (e === "change") return t
}
var Ly = !1;
if (mn) {
    var Zl;
    if (mn) {
        var Jl = "oninput" in document;
        if (!Jl) {
            var zh = document.createElement("div");
            zh.setAttribute("oninput", "return;"), Jl = typeof zh.oninput == "function"
        }
        Zl = Jl
    } else Zl = !1;
    Ly = Zl && (!document.documentMode || 9 < document.documentMode)
}

function Bh() {
    vi && (vi.detachEvent("onpropertychange", jy), ji = vi = null)
}

function jy(e) {
    if (e.propertyName === "value" && nl(ji)) {
        var t = [];
        Oy(t, ji, e, Nd(e)), py(SC, t)
    }
}

function EC(e, t, n) {
    e === "focusin" ? (Bh(), vi = t, ji = n, vi.attachEvent("onpropertychange", jy)) : e === "focusout" && Bh()
}

function TC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return nl(ji)
}

function bC(e, t) {
    if (e === "click") return nl(t)
}

function kC(e, t) {
    if (e === "input" || e === "change") return nl(t)
}

function PC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Vt = typeof Object.is == "function" ? Object.is : PC;

function Ii(e, t) {
    if (Vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Fu.call(t, o) || !Vt(e[o], t[o])) return !1
    }
    return !0
}

function $h(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Uh(e, t) {
    var n = $h(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = $h(n)
    }
}

function Iy(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Iy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function _y() {
    for (var e = window, t = fa(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = fa(e.document)
    }
    return t
}

function Fd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function AC(e) {
    var t = _y(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Iy(n.ownerDocument.documentElement, n)) {
        if (r !== null && Fd(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Uh(n, i);
                var s = Uh(n, r);
                o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var RC = mn && "documentMode" in document && 11 >= document.documentMode,
    Jr = null,
    oc = null,
    wi = null,
    ic = !1;

function Hh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ic || Jr == null || Jr !== fa(r) || (r = Jr, "selectionStart" in r && Fd(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), wi && Ii(wi, r) || (wi = r, r = wa(oc, "onSelect"), 0 < r.length && (t = new Id("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Jr)))
}

function ks(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var eo = {
        animationend: ks("Animation", "AnimationEnd"),
        animationiteration: ks("Animation", "AnimationIteration"),
        animationstart: ks("Animation", "AnimationStart"),
        transitionend: ks("Transition", "TransitionEnd")
    },
    eu = {},
    Vy = {};
mn && (Vy = document.createElement("div").style, "AnimationEvent" in window || (delete eo.animationend.animation, delete eo.animationiteration.animation, delete eo.animationstart.animation), "TransitionEvent" in window || delete eo.transitionend.transition);

function rl(e) {
    if (eu[e]) return eu[e];
    if (!eo[e]) return e;
    var t = eo[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Vy) return eu[e] = t[n];
    return e
}
var Fy = rl("animationend"),
    zy = rl("animationiteration"),
    By = rl("animationstart"),
    $y = rl("transitionend"),
    Uy = new Map,
    Wh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function lr(e, t) {
    Uy.set(e, t), zr(t, [e])
}
for (var tu = 0; tu < Wh.length; tu++) {
    var nu = Wh[tu],
        NC = nu.toLowerCase(),
        MC = nu[0].toUpperCase() + nu.slice(1);
    lr(NC, "on" + MC)
}
lr(Fy, "onAnimationEnd");
lr(zy, "onAnimationIteration");
lr(By, "onAnimationStart");
lr("dblclick", "onDoubleClick");
lr("focusin", "onFocus");
lr("focusout", "onBlur");
lr($y, "onTransitionEnd");
Ro("onMouseEnter", ["mouseout", "mouseover"]);
Ro("onMouseLeave", ["mouseout", "mouseover"]);
Ro("onPointerEnter", ["pointerout", "pointerover"]);
Ro("onPointerLeave", ["pointerout", "pointerover"]);
zr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    DC = new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));

function Kh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, NS(r, t, void 0, e), e.currentTarget = null
}

function Hy(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
                    Kh(o, a, u), i = l
                } else
                    for (s = 0; s < r.length; s++) {
                        if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
                        Kh(o, a, u), i = l
                    }
        }
    }
    if (pa) throw e = ec, pa = !1, ec = null, e
}

function ae(e, t) {
    var n = t[cc];
    n === void 0 && (n = t[cc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Wy(t, e, 2, !1), n.add(r))
}

function ru(e, t, n) {
    var r = 0;
    t && (r |= 4), Wy(n, e, r, t)
}
var Ps = "_reactListening" + Math.random().toString(36).slice(2);

function _i(e) {
    if (!e[Ps]) {
        e[Ps] = !0, Zg.forEach(function(n) {
            n !== "selectionchange" && (DC.has(n) || ru(n, !1, e), ru(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ps] || (t[Ps] = !0, ru("selectionchange", !1, t))
    }
}

function Wy(e, t, n, r) {
    switch (Ay(t)) {
        case 1:
            var o = KS;
            break;
        case 4:
            o = GS;
            break;
        default:
            o = Ld
    }
    n = o.bind(null, t, n, e), o = void 0, !Ju || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function ou(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var a = r.stateNode.containerInfo;
            if (a === o || a.nodeType === 8 && a.parentNode === o) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
                    s = s.return
                }
            for (; a !== null;) {
                if (s = wr(a), s === null) return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = i = s;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    py(function() {
        var u = i,
            c = Nd(n),
            d = [];
        e: {
            var f = Uy.get(e);
            if (f !== void 0) {
                var h = Id,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (Qs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = lC;
                        break;
                    case "focusin":
                        v = "focus", h = ql;
                        break;
                    case "focusout":
                        v = "blur", h = ql;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = ql;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = Lh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = XS;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = dC;
                        break;
                    case Fy:
                    case zy:
                    case By:
                        h = JS;
                        break;
                    case $y:
                        h = hC;
                        break;
                    case "scroll":
                        h = QS;
                        break;
                    case "wheel":
                        h = mC;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = tC;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Ih
                }
                var g = (t & 4) !== 0,
                    w = !g && e === "scroll",
                    m = g ? f !== null ? f + "Capture" : null : f;
                g = [];
                for (var p = u, y; p !== null;) {
                    y = p;
                    var S = y.stateNode;
                    if (y.tag === 5 && S !== null && (y = S, m !== null && (S = Mi(p, m), S != null && g.push(Vi(p, S, y)))), w) break;
                    p = p.return
                }
                0 < g.length && (f = new h(f, v, null, n, c), d.push({
                    event: f,
                    listeners: g
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== qu && (v = n.relatedTarget || n.fromElement) && (wr(v) || v[gn])) break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (v = n.relatedTarget || n.toElement, h = u, v = v ? wr(v) : null, v !== null && (w = Br(v), v !== w || v.tag !== 5 && v.tag !== 6) && (v = null)) : (h = null, v = u), h !== v)) {
                    if (g = Lh, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (g = Ih, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), w = h == null ? f : to(h), y = v == null ? f : to(v), f = new g(S, p + "leave", h, n, c), f.target = w, f.relatedTarget = y, S = null, wr(c) === u && (g = new g(m, p + "enter", v, n, c), g.target = y, g.relatedTarget = w, S = g), w = S, h && v) t: {
                        for (g = h, m = v, p = 0, y = g; y; y = Qr(y)) p++;
                        for (y = 0, S = m; S; S = Qr(S)) y++;
                        for (; 0 < p - y;) g = Qr(g),
                        p--;
                        for (; 0 < y - p;) m = Qr(m),
                        y--;
                        for (; p--;) {
                            if (g === m || m !== null && g === m.alternate) break t;
                            g = Qr(g), m = Qr(m)
                        }
                        g = null
                    }
                    else g = null;
                    h !== null && Gh(d, f, h, g, !1), v !== null && w !== null && Gh(d, w, v, g, !0)
                }
            }
            e: {
                if (f = u ? to(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file") var E = CC;
                else if (Fh(f))
                    if (Ly) E = kC;
                    else {
                        E = TC;
                        var T = EC
                    }
                else(h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (E = bC);
                if (E && (E = E(e, u))) {
                    Oy(d, E, n, c);
                    break e
                }
                T && T(e, f, u),
                e === "focusout" && (T = f._wrapperState) && T.controlled && f.type === "number" && Ku(f, "number", f.value)
            }
            switch (T = u ? to(u) : window, e) {
                case "focusin":
                    (Fh(T) || T.contentEditable === "true") && (Jr = T, oc = u, wi = null);
                    break;
                case "focusout":
                    wi = oc = Jr = null;
                    break;
                case "mousedown":
                    ic = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ic = !1, Hh(d, n, c);
                    break;
                case "selectionchange":
                    if (RC) break;
                case "keydown":
                case "keyup":
                    Hh(d, n, c)
            }
            var b;
            if (Vd) e: {
                switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                }
                k = void 0
            }
            else Zr ? My(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");k && (Ny && n.locale !== "ko" && (Zr || k !== "onCompositionStart" ? k === "onCompositionEnd" && Zr && (b = Ry()) : (Un = c, jd = "value" in Un ? Un.value : Un.textContent, Zr = !0)), T = wa(u, k), 0 < T.length && (k = new jh(k, e, null, n, c), d.push({
                event: k,
                listeners: T
            }), b ? k.data = b : (b = Dy(n), b !== null && (k.data = b)))),
            (b = yC ? vC(e, n) : wC(e, n)) && (u = wa(u, "onBeforeInput"), 0 < u.length && (c = new jh("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = b))
        }
        Hy(d, t)
    })
}

function Vi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function wa(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = Mi(e, n), i != null && r.unshift(Vi(e, i, o)), i = Mi(e, t), i != null && r.push(Vi(e, i, o))), e = e.return
    }
    return r
}

function Qr(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Gh(e, t, n, r, o) {
    for (var i = t._reactName, s = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, o ? (l = Mi(n, i), l != null && s.unshift(Vi(n, l, a))) : o || (l = Mi(n, i), l != null && s.push(Vi(n, l, a)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var OC = /\r\n?/g,
    LC = /\u0000|\uFFFD/g;

function Qh(e) {
    return (typeof e == "string" ? e : "" + e).replace(OC, `
`).replace(LC, "")
}

function As(e, t, n) {
    if (t = Qh(t), Qh(e) !== t && n) throw Error(O(425))
}

function xa() {}
var sc = null,
    ac = null;

function lc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var uc = typeof setTimeout == "function" ? setTimeout : void 0,
    jC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Yh = typeof Promise == "function" ? Promise : void 0,
    IC = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yh < "u" ? function(e) {
        return Yh.resolve(null).then(e).catch(_C)
    } : uc;

function _C(e) {
    setTimeout(function() {
        throw e
    })
}

function iu(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o), Li(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Li(t)
}

function Xn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Xh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Uo = Math.random().toString(36).slice(2),
    Yt = "__reactFiber$" + Uo,
    Fi = "__reactProps$" + Uo,
    gn = "__reactContainer$" + Uo,
    cc = "__reactEvents$" + Uo,
    VC = "__reactListeners$" + Uo,
    FC = "__reactHandles$" + Uo;

function wr(e) {
    var t = e[Yt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[gn] || n[Yt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Xh(e); e !== null;) {
                    if (n = e[Yt]) return n;
                    e = Xh(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function is(e) {
    return e = e[Yt] || e[gn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function to(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33))
}

function ol(e) {
    return e[Fi] || null
}
var dc = [],
    no = -1;

function ur(e) {
    return {
        current: e
    }
}

function ue(e) {
    0 > no || (e.current = dc[no], dc[no] = null, no--)
}

function ie(e, t) {
    no++, dc[no] = e.current, e.current = t
}
var nr = {},
    ze = ur(nr),
    Ze = ur(!1),
    Lr = nr;

function No(e, t) {
    var n = e.type.contextTypes;
    if (!n) return nr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n) o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Je(e) {
    return e = e.childContextTypes, e != null
}

function Sa() {
    ue(Ze), ue(ze)
}

function qh(e, t, n) {
    if (ze.current !== nr) throw Error(O(168));
    ie(ze, t), ie(Ze, n)
}

function Ky(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t)) throw Error(O(108, ES(e) || "Unknown", o));
    return me({}, n, r)
}

function Ca(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || nr, Lr = ze.current, ie(ze, e), ie(Ze, Ze.current), !0
}

function Zh(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(O(169));
    n ? (e = Ky(e, t, Lr), r.__reactInternalMemoizedMergedChildContext = e, ue(Ze), ue(ze), ie(ze, e)) : ue(Ze), ie(Ze, n)
}
var cn = null,
    il = !1,
    su = !1;

function Gy(e) {
    cn === null ? cn = [e] : cn.push(e)
}

function zC(e) {
    il = !0, Gy(e)
}

function cr() {
    if (!su && cn !== null) {
        su = !0;
        var e = 0,
            t = ne;
        try {
            var n = cn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            cn = null, il = !1
        } catch (o) {
            throw cn !== null && (cn = cn.slice(e + 1)), vy(Md, cr), o
        } finally {
            ne = t, su = !1
        }
    }
    return null
}
var ro = [],
    oo = 0,
    Ea = null,
    Ta = 0,
    pt = [],
    mt = 0,
    jr = null,
    fn = 1,
    hn = "";

function gr(e, t) {
    ro[oo++] = Ta, ro[oo++] = Ea, Ea = e, Ta = t
}

function Qy(e, t, n) {
    pt[mt++] = fn, pt[mt++] = hn, pt[mt++] = jr, jr = e;
    var r = fn;
    e = hn;
    var o = 32 - jt(r) - 1;
    r &= ~(1 << o), n += 1;
    var i = 32 - jt(t) + o;
    if (30 < i) {
        var s = o - o % 5;
        i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, fn = 1 << 32 - jt(t) + o | n << o | r, hn = i + e
    } else fn = 1 << i | n << o | r, hn = e
}

function zd(e) {
    e.return !== null && (gr(e, 1), Qy(e, 1, 0))
}

function Bd(e) {
    for (; e === Ea;) Ea = ro[--oo], ro[oo] = null, Ta = ro[--oo], ro[oo] = null;
    for (; e === jr;) jr = pt[--mt], pt[mt] = null, hn = pt[--mt], pt[mt] = null, fn = pt[--mt], pt[mt] = null
}
var st = null,
    it = null,
    de = !1,
    Lt = null;

function Yy(e, t) {
    var n = gt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Jh(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, st = e, it = Xn(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, st = e, it = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jr !== null ? {
                id: fn,
                overflow: hn
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = gt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, st = e, it = null, !0) : !1;
        default:
            return !1
    }
}

function fc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function hc(e) {
    if (de) {
        var t = it;
        if (t) {
            var n = t;
            if (!Jh(e, t)) {
                if (fc(e)) throw Error(O(418));
                t = Xn(n.nextSibling);
                var r = st;
                t && Jh(e, t) ? Yy(r, n) : (e.flags = e.flags & -4097 | 2, de = !1, st = e)
            }
        } else {
            if (fc(e)) throw Error(O(418));
            e.flags = e.flags & -4097 | 2, de = !1, st = e
        }
    }
}

function ep(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    st = e
}

function Rs(e) {
    if (e !== st) return !1;
    if (!de) return ep(e), de = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !lc(e.type, e.memoizedProps)), t && (t = it)) {
        if (fc(e)) throw Xy(), Error(O(418));
        for (; t;) Yy(e, t), t = Xn(t.nextSibling)
    }
    if (ep(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            it = Xn(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            it = null
        }
    } else it = st ? Xn(e.stateNode.nextSibling) : null;
    return !0
}

function Xy() {
    for (var e = it; e;) e = Xn(e.nextSibling)
}

function Mo() {
    it = st = null, de = !1
}

function $d(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}
var BC = Sn.ReactCurrentBatchConfig;

function oi(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(O(309));
                var r = n.stateNode
            }
            if (!r) throw Error(O(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
                var a = o.refs;
                s === null ? delete a[i] : a[i] = s
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(O(284));
        if (!n._owner) throw Error(O(290, e))
    }
    return e
}

function Ns(e, t) {
    throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function tp(e) {
    var t = e._init;
    return t(e._payload)
}

function qy(e) {
    function t(m, p) {
        if (e) {
            var y = m.deletions;
            y === null ? (m.deletions = [p], m.flags |= 16) : y.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function o(m, p) {
        return m = er(m, p), m.index = 0, m.sibling = null, m
    }

    function i(m, p, y) {
        return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < p ? (m.flags |= 2, p) : y) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, p, y, S) {
        return p === null || p.tag !== 6 ? (p = hu(y, m.mode, S), p.return = m, p) : (p = o(p, y), p.return = m, p)
    }

    function l(m, p, y, S) {
        var E = y.type;
        return E === qr ? c(m, p, y.props.children, S, y.key) : p !== null && (p.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ln && tp(E) === p.type) ? (S = o(p, y.props), S.ref = oi(m, p, y), S.return = m, S) : (S = ta(y.type, y.key, y.props, null, m.mode, S), S.ref = oi(m, p, y), S.return = m, S)
    }

    function u(m, p, y, S) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? (p = pu(y, m.mode, S), p.return = m, p) : (p = o(p, y.children || []), p.return = m, p)
    }

    function c(m, p, y, S, E) {
        return p === null || p.tag !== 7 ? (p = Mr(y, m.mode, S, E), p.return = m, p) : (p = o(p, y), p.return = m, p)
    }

    function d(m, p, y) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = hu("" + p, m.mode, y), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ws:
                    return y = ta(p.type, p.key, p.props, null, m.mode, y), y.ref = oi(m, null, p), y.return = m, y;
                case Xr:
                    return p = pu(p, m.mode, y), p.return = m, p;
                case Ln:
                    var S = p._init;
                    return d(m, S(p._payload), y)
            }
            if (di(p) || Jo(p)) return p = Mr(p, m.mode, y, null), p.return = m, p;
            Ns(m, p)
        }
        return null
    }

    function f(m, p, y, S) {
        var E = p !== null ? p.key : null;
        if (typeof y == "string" && y !== "" || typeof y == "number") return E !== null ? null : a(m, p, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ws:
                    return y.key === E ? l(m, p, y, S) : null;
                case Xr:
                    return y.key === E ? u(m, p, y, S) : null;
                case Ln:
                    return E = y._init, f(m, p, E(y._payload), S)
            }
            if (di(y) || Jo(y)) return E !== null ? null : c(m, p, y, S, null);
            Ns(m, y)
        }
        return null
    }

    function h(m, p, y, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number") return m = m.get(y) || null, a(p, m, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case ws:
                    return m = m.get(S.key === null ? y : S.key) || null, l(p, m, S, E);
                case Xr:
                    return m = m.get(S.key === null ? y : S.key) || null, u(p, m, S, E);
                case Ln:
                    var T = S._init;
                    return h(m, p, y, T(S._payload), E)
            }
            if (di(S) || Jo(S)) return m = m.get(y) || null, c(p, m, S, E, null);
            Ns(p, S)
        }
        return null
    }

    function v(m, p, y, S) {
        for (var E = null, T = null, b = p, k = p = 0, D = null; b !== null && k < y.length; k++) {
            b.index > k ? (D = b, b = null) : D = b.sibling;
            var A = f(m, b, y[k], S);
            if (A === null) {
                b === null && (b = D);
                break
            }
            e && b && A.alternate === null && t(m, b), p = i(A, p, k), T === null ? E = A : T.sibling = A, T = A, b = D
        }
        if (k === y.length) return n(m, b), de && gr(m, k), E;
        if (b === null) {
            for (; k < y.length; k++) b = d(m, y[k], S), b !== null && (p = i(b, p, k), T === null ? E = b : T.sibling = b, T = b);
            return de && gr(m, k), E
        }
        for (b = r(m, b); k < y.length; k++) D = h(b, m, k, y[k], S), D !== null && (e && D.alternate !== null && b.delete(D.key === null ? k : D.key), p = i(D, p, k), T === null ? E = D : T.sibling = D, T = D);
        return e && b.forEach(function(_) {
            return t(m, _)
        }), de && gr(m, k), E
    }

    function g(m, p, y, S) {
        var E = Jo(y);
        if (typeof E != "function") throw Error(O(150));
        if (y = E.call(y), y == null) throw Error(O(151));
        for (var T = E = null, b = p, k = p = 0, D = null, A = y.next(); b !== null && !A.done; k++, A = y.next()) {
            b.index > k ? (D = b, b = null) : D = b.sibling;
            var _ = f(m, b, A.value, S);
            if (_ === null) {
                b === null && (b = D);
                break
            }
            e && b && _.alternate === null && t(m, b), p = i(_, p, k), T === null ? E = _ : T.sibling = _, T = _, b = D
        }
        if (A.done) return n(m, b), de && gr(m, k), E;
        if (b === null) {
            for (; !A.done; k++, A = y.next()) A = d(m, A.value, S), A !== null && (p = i(A, p, k), T === null ? E = A : T.sibling = A, T = A);
            return de && gr(m, k), E
        }
        for (b = r(m, b); !A.done; k++, A = y.next()) A = h(b, m, k, A.value, S), A !== null && (e && A.alternate !== null && b.delete(A.key === null ? k : A.key), p = i(A, p, k), T === null ? E = A : T.sibling = A, T = A);
        return e && b.forEach(function(j) {
            return t(m, j)
        }), de && gr(m, k), E
    }

    function w(m, p, y, S) {
        if (typeof y == "object" && y !== null && y.type === qr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case ws:
                    e: {
                        for (var E = y.key, T = p; T !== null;) {
                            if (T.key === E) {
                                if (E = y.type, E === qr) {
                                    if (T.tag === 7) {
                                        n(m, T.sibling), p = o(T, y.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (T.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Ln && tp(E) === T.type) {
                                    n(m, T.sibling), p = o(T, y.props), p.ref = oi(m, T, y), p.return = m, m = p;
                                    break e
                                }
                                n(m, T);
                                break
                            } else t(m, T);
                            T = T.sibling
                        }
                        y.type === qr ? (p = Mr(y.props.children, m.mode, S, y.key), p.return = m, m = p) : (S = ta(y.type, y.key, y.props, null, m.mode, S), S.ref = oi(m, p, y), S.return = m, m = S)
                    }
                    return s(m);
                case Xr:
                    e: {
                        for (T = y.key; p !== null;) {
                            if (p.key === T)
                                if (p.tag === 4 && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                                    n(m, p.sibling), p = o(p, y.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = pu(y, m.mode, S),
                        p.return = m,
                        m = p
                    }
                    return s(m);
                case Ln:
                    return T = y._init, w(m, p, T(y._payload), S)
            }
            if (di(y)) return v(m, p, y, S);
            if (Jo(y)) return g(m, p, y, S);
            Ns(m, y)
        }
        return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, p !== null && p.tag === 6 ? (n(m, p.sibling), p = o(p, y), p.return = m, m = p) : (n(m, p), p = hu(y, m.mode, S), p.return = m, m = p), s(m)) : n(m, p)
    }
    return w
}
var Do = qy(!0),
    Zy = qy(!1),
    ba = ur(null),
    ka = null,
    io = null,
    Ud = null;

function Hd() {
    Ud = io = ka = null
}

function Wd(e) {
    var t = ba.current;
    ue(ba), e._currentValue = t
}

function pc(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function go(e, t) {
    ka = e, Ud = io = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), e.firstContext = null)
}

function xt(e) {
    var t = e._currentValue;
    if (Ud !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, io === null) {
            if (ka === null) throw Error(O(308));
            io = e, ka.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else io = io.next = e;
    return t
}
var xr = null;

function Kd(e) {
    xr === null ? xr = [e] : xr.push(e)
}

function Jy(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Kd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, yn(e, r)
}

function yn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var jn = !1;

function Gd(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ev(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function pn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function qn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, Z & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, yn(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, Kd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, yn(e, n)
}

function Ys(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Dd(e, n)
    }
}

function np(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = s : i = i.next = s, n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Pa(e, t, n, r) {
    var o = e.updateQueue;
    jn = !1;
    var i = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        a = o.shared.pending;
    if (a !== null) {
        o.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, s === null ? i = u : s.next = u, s = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        s = 0, c = u = l = null, a = i;
        do {
            var f = a.lane,
                h = a.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e,
                        g = a;
                    switch (f = t, h = n, g.tag) {
                        case 1:
                            if (v = g.payload, typeof v == "function") {
                                d = v.call(h, d, f);
                                break e
                            }
                            d = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = g.payload, f = typeof v == "function" ? v.call(h, d, f) : v, f == null) break e;
                            d = me({}, d, f);
                            break e;
                        case 2:
                            jn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [a] : f.push(a))
            } else h = {
                eventTime: h,
                lane: f,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, c === null ? (u = c = h, l = d) : c = c.next = h, s |= f;
            if (a = a.next, a === null) {
                if (a = o.shared.pending, a === null) break;
                f = a, a = f.next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
            }
        } while (!0);
        if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do s |= o.lane, o = o.next; while (o !== t)
        } else i === null && (o.shared.lanes = 0);
        _r |= s, e.lanes = s, e.memoizedState = d
    }
}

function rp(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function") throw Error(O(191, o));
                o.call(r)
            }
        }
}
var ss = {},
    Zt = ur(ss),
    zi = ur(ss),
    Bi = ur(ss);

function Sr(e) {
    if (e === ss) throw Error(O(174));
    return e
}

function Qd(e, t) {
    switch (ie(Bi, t), ie(zi, e), ie(Zt, ss), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qu(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qu(t, e)
    }
    ue(Zt), ie(Zt, t)
}

function Oo() {
    ue(Zt), ue(zi), ue(Bi)
}

function tv(e) {
    Sr(Bi.current);
    var t = Sr(Zt.current),
        n = Qu(t, e.type);
    t !== n && (ie(zi, e), ie(Zt, n))
}

function Yd(e) {
    zi.current === e && (ue(Zt), ue(zi))
}
var he = ur(0);

function Aa(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var au = [];

function Xd() {
    for (var e = 0; e < au.length; e++) au[e]._workInProgressVersionPrimary = null;
    au.length = 0
}
var Xs = Sn.ReactCurrentDispatcher,
    lu = Sn.ReactCurrentBatchConfig,
    Ir = 0,
    pe = null,
    Te = null,
    Pe = null,
    Ra = !1,
    xi = !1,
    $i = 0,
    $C = 0;

function Ie() {
    throw Error(O(321))
}

function qd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Vt(e[n], t[n])) return !1;
    return !0
}

function Zd(e, t, n, r, o, i) {
    if (Ir = i, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Xs.current = e === null || e.memoizedState === null ? KC : GC, e = n(r, o), xi) {
        i = 0;
        do {
            if (xi = !1, $i = 0, 25 <= i) throw Error(O(301));
            i += 1, Pe = Te = null, t.updateQueue = null, Xs.current = QC, e = n(r, o)
        } while (xi)
    }
    if (Xs.current = Na, t = Te !== null && Te.next !== null, Ir = 0, Pe = Te = pe = null, Ra = !1, t) throw Error(O(300));
    return e
}

function Jd() {
    var e = $i !== 0;
    return $i = 0, e
}

function Ut() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Pe === null ? pe.memoizedState = Pe = e : Pe = Pe.next = e, Pe
}

function St() {
    if (Te === null) {
        var e = pe.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Te.next;
    var t = Pe === null ? pe.memoizedState : Pe.next;
    if (t !== null) Pe = t, Te = e;
    else {
        if (e === null) throw Error(O(310));
        Te = e, e = {
            memoizedState: Te.memoizedState,
            baseState: Te.baseState,
            baseQueue: Te.baseQueue,
            queue: Te.queue,
            next: null
        }, Pe === null ? pe.memoizedState = Pe = e : Pe = Pe.next = e
    }
    return Pe
}

function Ui(e, t) {
    return typeof t == "function" ? t(e) : t
}

function uu(e) {
    var t = St(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = Te,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var s = o.next;
            o.next = i.next, i.next = s
        }
        r.baseQueue = o = i, n.pending = null
    }
    if (o !== null) {
        i = o.next, r = r.baseState;
        var a = s = null,
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((Ir & c) === c) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = d, s = r) : l = l.next = d, pe.lanes |= c, _r |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? s = r : l.next = a, Vt(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane, pe.lanes |= i, _r |= i, o = o.next; while (o !== e)
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function cu(e) {
    var t = St(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = o = o.next;
        do i = e(i, s.action), s = s.next; while (s !== o);
        Vt(i, t.memoizedState) || (qe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function nv() {}

function rv(e, t) {
    var n = pe,
        r = St(),
        o = t(),
        i = !Vt(r.memoizedState, o);
    if (i && (r.memoizedState = o, qe = !0), r = r.queue, ef(sv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Pe !== null && Pe.memoizedState.tag & 1) {
        if (n.flags |= 2048, Hi(9, iv.bind(null, n, r, o, t), void 0, null), Ae === null) throw Error(O(349));
        Ir & 30 || ov(n, t, o)
    }
    return o
}

function ov(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function iv(e, t, n, r) {
    t.value = n, t.getSnapshot = r, av(t) && lv(e)
}

function sv(e, t, n) {
    return n(function() {
        av(t) && lv(e)
    })
}

function av(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Vt(e, n)
    } catch {
        return !0
    }
}

function lv(e) {
    var t = yn(e, 1);
    t !== null && It(t, e, 1, -1)
}

function op(e) {
    var t = Ut();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ui,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = WC.bind(null, pe, e), [t.memoizedState, e]
}

function Hi(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = pe.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, pe.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function uv() {
    return St().memoizedState
}

function qs(e, t, n, r) {
    var o = Ut();
    pe.flags |= e, o.memoizedState = Hi(1 | t, n, void 0, r === void 0 ? null : r)
}

function sl(e, t, n, r) {
    var o = St();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Te !== null) {
        var s = Te.memoizedState;
        if (i = s.destroy, r !== null && qd(r, s.deps)) {
            o.memoizedState = Hi(t, n, i, r);
            return
        }
    }
    pe.flags |= e, o.memoizedState = Hi(1 | t, n, i, r)
}

function ip(e, t) {
    return qs(8390656, 8, e, t)
}

function ef(e, t) {
    return sl(2048, 8, e, t)
}

function cv(e, t) {
    return sl(4, 2, e, t)
}

function dv(e, t) {
    return sl(4, 4, e, t)
}

function fv(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function hv(e, t, n) {
    return n = n != null ? n.concat([e]) : null, sl(4, 4, fv.bind(null, t, e), n)
}

function tf() {}

function pv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qd(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function mv(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && qd(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function gv(e, t, n) {
    return Ir & 21 ? (Vt(n, t) || (n = Sy(), pe.lanes |= n, _r |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n)
}

function UC(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = lu.transition;
    lu.transition = {};
    try {
        e(!1), t()
    } finally {
        ne = n, lu.transition = r
    }
}

function yv() {
    return St().memoizedState
}

function HC(e, t, n) {
    var r = Jn(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, vv(e)) wv(t, n);
    else if (n = Jy(e, t, n, r), n !== null) {
        var o = Ke();
        It(n, e, r, o), xv(n, t, r)
    }
}

function WC(e, t, n) {
    var r = Jn(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (vv(e)) wv(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var s = t.lastRenderedState,
                a = i(s, n);
            if (o.hasEagerState = !0, o.eagerState = a, Vt(a, s)) {
                var l = t.interleaved;
                l === null ? (o.next = o, Kd(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
                return
            }
        } catch {} finally {}
        n = Jy(e, t, o, r), n !== null && (o = Ke(), It(n, e, r, o), xv(n, t, r))
    }
}

function vv(e) {
    var t = e.alternate;
    return e === pe || t !== null && t === pe
}

function wv(e, t) {
    xi = Ra = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function xv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Dd(e, n)
    }
}
var Na = {
        readContext: xt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1
    },
    KC = {
        readContext: xt,
        useCallback: function(e, t) {
            return Ut().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: xt,
        useEffect: ip,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, qs(4194308, 4, fv.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return qs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return qs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ut();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ut();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = HC.bind(null, pe, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ut();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: op,
        useDebugValue: tf,
        useDeferredValue: function(e) {
            return Ut().memoizedState = e
        },
        useTransition: function() {
            var e = op(!1),
                t = e[0];
            return e = UC.bind(null, e[1]), Ut().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = pe,
                o = Ut();
            if (de) {
                if (n === void 0) throw Error(O(407));
                n = n()
            } else {
                if (n = t(), Ae === null) throw Error(O(349));
                Ir & 30 || ov(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, ip(sv.bind(null, r, i, e), [e]), r.flags |= 2048, Hi(9, iv.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ut(),
                t = Ae.identifierPrefix;
            if (de) {
                var n = hn,
                    r = fn;
                n = (r & ~(1 << 32 - jt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = $i++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = $C++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    GC = {
        readContext: xt,
        useCallback: pv,
        useContext: xt,
        useEffect: ef,
        useImperativeHandle: hv,
        useInsertionEffect: cv,
        useLayoutEffect: dv,
        useMemo: mv,
        useReducer: uu,
        useRef: uv,
        useState: function() {
            return uu(Ui)
        },
        useDebugValue: tf,
        useDeferredValue: function(e) {
            var t = St();
            return gv(t, Te.memoizedState, e)
        },
        useTransition: function() {
            var e = uu(Ui)[0],
                t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: nv,
        useSyncExternalStore: rv,
        useId: yv,
        unstable_isNewReconciler: !1
    },
    QC = {
        readContext: xt,
        useCallback: pv,
        useContext: xt,
        useEffect: ef,
        useImperativeHandle: hv,
        useInsertionEffect: cv,
        useLayoutEffect: dv,
        useMemo: mv,
        useReducer: cu,
        useRef: uv,
        useState: function() {
            return cu(Ui)
        },
        useDebugValue: tf,
        useDeferredValue: function(e) {
            var t = St();
            return Te === null ? t.memoizedState = e : gv(t, Te.memoizedState, e)
        },
        useTransition: function() {
            var e = cu(Ui)[0],
                t = St().memoizedState;
            return [e, t]
        },
        useMutableSource: nv,
        useSyncExternalStore: rv,
        useId: yv,
        unstable_isNewReconciler: !1
    };

function Rt(e, t) {
    if (e && e.defaultProps) {
        t = me({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function mc(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : me({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Br(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = Jn(e),
            i = pn(r, o);
        i.payload = t, n != null && (i.callback = n), t = qn(e, i, o), t !== null && (It(t, e, o, r), Ys(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = Jn(e),
            i = pn(r, o);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = qn(e, i, o), t !== null && (It(t, e, o, r), Ys(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ke(),
            r = Jn(e),
            o = pn(n, r);
        o.tag = 2, t != null && (o.callback = t), t = qn(e, o, r), t !== null && (It(t, e, r, n), Ys(t, e, r))
    }
};

function sp(e, t, n, r, o, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ii(n, r) || !Ii(o, i) : !0
}

function Sv(e, t, n) {
    var r = !1,
        o = nr,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = xt(i) : (o = Je(t) ? Lr : ze.current, r = t.contextTypes, i = (r = r != null) ? No(e, o) : nr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function ap(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null)
}

function gc(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Gd(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = xt(i) : (i = Je(t) ? Lr : ze.current, o.context = No(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (mc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && al.enqueueReplaceState(o, o.state, null), Pa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Lo(e, t) {
    try {
        var n = "",
            r = t;
        do n += CS(r), r = r.return; while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function du(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function yc(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var YC = typeof WeakMap == "function" ? WeakMap : Map;

function Cv(e, t, n) {
    n = pn(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Da || (Da = !0, Pc = r), yc(e, t)
    }, n
}

function Ev(e, t, n) {
    n = pn(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }, n.callback = function() {
            yc(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        yc(e, t), typeof r != "function" && (Zn === null ? Zn = new Set([this]) : Zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function lp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new YC;
        var o = new Set;
        r.set(t, o)
    } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = uE.bind(null, e, t, n), t.then(e, e))
}

function up(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function cp(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = pn(-1, 1), t.tag = 2, qn(n, t, 1))), n.lanes |= 1), e)
}
var XC = Sn.ReactCurrentOwner,
    qe = !1;

function $e(e, t, n, r) {
    t.child = e === null ? Zy(t, null, n, r) : Do(t, e.child, n, r)
}

function dp(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return go(t, o), r = Zd(e, t, n, r, i, o), n = Jd(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, vn(e, t, o)) : (de && n && zd(t), t.flags |= 1, $e(e, t, r, o), t.child)
}

function fp(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !cf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Tv(e, t, i, r, o)) : (e = ta(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & o)) {
        var s = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Ii, n(s, r) && e.ref === t.ref) return vn(e, t, o)
    }
    return t.flags |= 1, e = er(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Tv(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Ii(i, r) && e.ref === t.ref)
            if (qe = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (qe = !0);
            else return t.lanes = e.lanes, vn(e, t, o)
    }
    return vc(e, t, n, r, o)
}

function bv(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, ie(ao, rt), rt |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, ie(ao, rt), rt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, ie(ao, rt), rt |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ie(ao, rt), rt |= r;
    return $e(e, t, o, n), t.child
}

function kv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function vc(e, t, n, r, o) {
    var i = Je(n) ? Lr : ze.current;
    return i = No(t, i), go(t, o), n = Zd(e, t, n, r, i, o), r = Jd(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, vn(e, t, o)) : (de && r && zd(t), t.flags |= 1, $e(e, t, n, o), t.child)
}

function hp(e, t, n, r, o) {
    if (Je(n)) {
        var i = !0;
        Ca(t)
    } else i = !1;
    if (go(t, o), t.stateNode === null) Zs(e, t), Sv(t, n, r), gc(t, n, r, o), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var l = s.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = xt(u) : (u = Je(n) ? Lr : ze.current, u = No(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && ap(t, s, r, u), jn = !1;
        var f = t.memoizedState;
        s.state = f, Pa(t, r, s, o), l = t.memoizedState, a !== r || f !== l || Ze.current || jn ? (typeof c == "function" && (mc(t, n, c, r), l = t.memoizedState), (a = jn || sp(t, n, a, r, f, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, ev(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Rt(t.type, a), s.props = u, d = t.pendingProps, f = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = xt(l) : (l = Je(n) ? Lr : ze.current, l = No(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || f !== l) && ap(t, s, r, l), jn = !1, f = t.memoizedState, s.state = f, Pa(t, r, s, o);
        var v = t.memoizedState;
        a !== d || f !== v || Ze.current || jn ? (typeof h == "function" && (mc(t, n, h, r), v = t.memoizedState), (u = jn || sp(t, n, u, r, f, v, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return wc(e, t, n, r, i, o)
}

function wc(e, t, n, r, o, i) {
    kv(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Zh(t, n, !1), vn(e, t, i);
    r = t.stateNode, XC.current = t;
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = Do(t, e.child, null, i), t.child = Do(t, null, a, i)) : $e(e, t, a, i), t.memoizedState = r.state, o && Zh(t, n, !0), t.child
}

function Pv(e) {
    var t = e.stateNode;
    t.pendingContext ? qh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qh(e, t.context, !1), Qd(e, t.containerInfo)
}

function pp(e, t, n, r, o) {
    return Mo(), $d(o), t.flags |= 256, $e(e, t, n, r), t.child
}
var xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Sc(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Av(e, t, n) {
    var r = t.pendingProps,
        o = he.current,
        i = !1,
        s = (t.flags & 128) !== 0,
        a;
    if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ie(he, o & 1), e === null) return hc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = cl(s, r, 0, null), e = Mr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Sc(n), t.memoizedState = xc, e) : nf(t, s));
    if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return qC(e, t, s, r, a, o, n);
    if (i) {
        i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = er(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = er(a, i) : (i = Mr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Sc(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = xc, r
    }
    return i = e.child, e = i.sibling, r = er(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function nf(e, t) {
    return t = cl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ms(e, t, n, r) {
    return r !== null && $d(r), Do(t, e.child, null, n), e = nf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function qC(e, t, n, r, o, i, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = du(Error(O(422))), Ms(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = cl({
        mode: "visible",
        children: r.children
    }, o, 0, null), i = Mr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Do(t, e.child, null, s), t.child.memoizedState = Sc(s), t.memoizedState = xc, i);
    if (!(t.mode & 1)) return Ms(e, t, s, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
        return r = a, i = Error(O(419)), r = du(i, r, void 0), Ms(e, t, s, r)
    }
    if (a = (s & e.childLanes) !== 0, qe || a) {
        if (r = Ae, r !== null) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0
            }
            o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, yn(e, o), It(r, e, o, -1))
        }
        return uf(), r = du(Error(O(421))), Ms(e, t, s, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = cE.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, it = Xn(o.nextSibling), st = t, de = !0, Lt = null, e !== null && (pt[mt++] = fn, pt[mt++] = hn, pt[mt++] = jr, fn = e.id, hn = e.overflow, jr = t), t = nf(t, r.children), t.flags |= 4096, t)
}

function mp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), pc(e.return, t, n)
}

function fu(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function Rv(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if ($e(e, t, r.children, n), r = he.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && mp(e, n, t);
            else if (e.tag === 19) mp(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (ie(he, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && Aa(e) === null && (o = n), n = n.sibling;
            n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), fu(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Aa(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            fu(t, !0, n, null, i);
            break;
        case "together":
            fu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Zs(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function vn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _r |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child, n = er(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = er(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function ZC(e, t, n) {
    switch (t.tag) {
        case 3:
            Pv(t), Mo();
            break;
        case 5:
            tv(t);
            break;
        case 1:
            Je(t.type) && Ca(t);
            break;
        case 4:
            Qd(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            ie(ba, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ie(he, he.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Av(e, t, n) : (ie(he, he.current & 1), e = vn(e, t, n), e !== null ? e.sibling : null);
            ie(he, he.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Rv(e, t, n);
                t.flags |= 128
            }
            if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ie(he, he.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, bv(e, t, n)
    }
    return vn(e, t, n)
}
var Nv, Cc, Mv, Dv;
Nv = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Cc = function() {};
Mv = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Sr(Zt.current);
        var i = null;
        switch (n) {
            case "input":
                o = Hu(e, o), r = Hu(e, r), i = [];
                break;
            case "select":
                o = me({}, o, {
                    value: void 0
                }), r = me({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                o = Gu(e, o), r = Gu(e, r), i = [];
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = xa)
        }
        Yu(n, r);
        var s;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var a = o[u];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ri.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
                    } else n || (i || (i = []), i.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ri.hasOwnProperty(u) ? (l != null && u === "onScroll" && ae("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Dv = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ii(e, t) {
    if (!de) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else
        for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function JC(e, t, n) {
    var r = t.pendingProps;
    switch (Bd(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return _e(t), null;
        case 1:
            return Je(t.type) && Sa(), _e(t), null;
        case 3:
            return r = t.stateNode, Oo(), ue(Ze), ue(ze), Xd(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Lt !== null && (Nc(Lt), Lt = null))), Cc(e, t), _e(t), null;
        case 5:
            Yd(t);
            var o = Sr(Bi.current);
            if (n = t.type, e !== null && t.stateNode != null) Mv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(O(166));
                    return _e(t), null
                }
                if (e = Sr(Zt.current), Rs(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Yt] = t, r[Fi] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            ae("cancel", r), ae("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            ae("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < hi.length; o++) ae(hi[o], r);
                            break;
                        case "source":
                            ae("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            ae("error", r), ae("load", r);
                            break;
                        case "details":
                            ae("toggle", r);
                            break;
                        case "input":
                            Th(r, i), ae("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, ae("invalid", r);
                            break;
                        case "textarea":
                            kh(r, i), ae("invalid", r)
                    }
                    Yu(n, i), o = null;
                    for (var s in i)
                        if (i.hasOwnProperty(s)) {
                            var a = i[s];
                            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && As(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && As(r.textContent, a, e), o = ["children", "" + a]) : Ri.hasOwnProperty(s) && a != null && s === "onScroll" && ae("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            xs(r), bh(r, i, !0);
                            break;
                        case "textarea":
                            xs(r), Ph(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = xa)
                    }
                    r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = sy(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Yt] = t, e[Fi] = r, Nv(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Xu(n, r), n) {
                            case "dialog":
                                ae("cancel", e), ae("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                ae("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < hi.length; o++) ae(hi[o], e);
                                o = r;
                                break;
                            case "source":
                                ae("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                ae("error", e), ae("load", e), o = r;
                                break;
                            case "details":
                                ae("toggle", e), o = r;
                                break;
                            case "input":
                                Th(e, r), o = Hu(e, r), ae("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = me({}, r, {
                                    value: void 0
                                }), ae("invalid", e);
                                break;
                            case "textarea":
                                kh(e, r), o = Gu(e, r), ae("invalid", e);
                                break;
                            default:
                                o = r
                        }
                        Yu(n, o),
                        a = o;
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style" ? uy(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && ay(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Ni(e, l) : typeof l == "number" && Ni(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ri.hasOwnProperty(i) ? l != null && i === "onScroll" && ae("scroll", e) : l != null && kd(e, i, l, s))
                            }
                        switch (n) {
                            case "input":
                                xs(e), bh(e, r, !1);
                                break;
                            case "textarea":
                                xs(e), Ph(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + tr(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? fo(e, !!r.multiple, i, !1) : r.defaultValue != null && fo(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = xa)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return _e(t), null;
        case 6:
            if (e && t.stateNode != null) Dv(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
                if (n = Sr(Bi.current), Sr(Zt.current), Rs(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Yt] = t, (i = r.nodeValue !== n) && (e = st, e !== null)) switch (e.tag) {
                        case 3:
                            As(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && As(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Yt] = t, t.stateNode = r
            }
            return _e(t), null;
        case 13:
            if (ue(he), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (de && it !== null && t.mode & 1 && !(t.flags & 128)) Xy(), Mo(), t.flags |= 98560, i = !1;
                else if (i = Rs(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(O(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
                        i[Yt] = t
                    } else Mo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    _e(t), i = !1
                } else Lt !== null && (Nc(Lt), Lt = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || he.current & 1 ? be === 0 && (be = 3) : uf())), t.updateQueue !== null && (t.flags |= 4), _e(t), null);
        case 4:
            return Oo(), Cc(e, t), e === null && _i(t.stateNode.containerInfo), _e(t), null;
        case 10:
            return Wd(t.type._context), _e(t), null;
        case 17:
            return Je(t.type) && Sa(), _e(t), null;
        case 19:
            if (ue(he), i = t.memoizedState, i === null) return _e(t), null;
            if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
                if (r) ii(i, !1);
                else {
                    if (be !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Aa(e), s !== null) {
                                for (t.flags |= 128, ii(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return ie(he, he.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && ve() > jo && (t.flags |= 128, r = !0, ii(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Aa(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ii(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !de) return _e(t), null
                    } else 2 * ve() - i.renderingStartTime > jo && n !== 1073741824 && (t.flags |= 128, r = !0, ii(i, !1), t.lanes = 4194304);
                i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ve(), t.sibling = null, n = he.current, ie(he, r ? n & 1 | 2 : n & 1), t) : (_e(t), null);
        case 22:
        case 23:
            return lf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? rt & 1073741824 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(O(156, t.tag))
}

function eE(e, t) {
    switch (Bd(t), t.tag) {
        case 1:
            return Je(t.type) && Sa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Oo(), ue(Ze), ue(ze), Xd(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Yd(t), null;
        case 13:
            if (ue(he), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(O(340));
                Mo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ue(he), null;
        case 4:
            return Oo(), null;
        case 10:
            return Wd(t.type._context), null;
        case 22:
        case 23:
            return lf(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Ds = !1,
    Fe = !1,
    tE = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;

function so(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ye(e, t, r)
        } else n.current = null
}

function Ec(e, t, n) {
    try {
        n()
    } catch (r) {
        ye(e, t, r)
    }
}
var gp = !1;

function nE(e, t) {
    if (sc = ya, e = _y(), Fd(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    c = 0,
                    d = e,
                    f = null;
                t: for (;;) {
                    for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (h = d.firstChild) !== null;) f = d, d = h;
                    for (;;) {
                        if (d === e) break t;
                        if (f === n && ++u === o && (a = s), f === i && ++c === r && (l = s), (h = d.nextSibling) !== null) break;
                        d = f, f = d.parentNode
                    }
                    d = h
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ac = {
            focusedElem: e,
            selectionRange: n
        }, ya = !1, V = t; V !== null;)
        if (t = V, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, V = e;
        else
            for (; V !== null;) {
                t = V;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var g = v.memoizedProps,
                                    w = v.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Rt(t.type, g), w);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var y = t.stateNode.containerInfo;
                            y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(O(163))
                    }
                } catch (S) {
                    ye(t, t.return, S)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, V = e;
                    break
                }
                V = t.return
            }
    return v = gp, gp = !1, v
}

function Si(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0, i !== void 0 && Ec(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}

function ll(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Tc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ov(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ov(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Yt], delete t[Fi], delete t[cc], delete t[VC], delete t[FC])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Lv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function yp(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Lv(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function bc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xa));
    else if (r !== 4 && (e = e.child, e !== null))
        for (bc(e, t, n), e = e.sibling; e !== null;) bc(e, t, n), e = e.sibling
}

function kc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (kc(e, t, n), e = e.sibling; e !== null;) kc(e, t, n), e = e.sibling
}
var Re = null,
    Ot = !1;

function An(e, t, n) {
    for (n = n.child; n !== null;) jv(e, t, n), n = n.sibling
}

function jv(e, t, n) {
    if (qt && typeof qt.onCommitFiberUnmount == "function") try {
        qt.onCommitFiberUnmount(el, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Fe || so(n, t);
        case 6:
            var r = Re,
                o = Ot;
            Re = null, An(e, t, n), Re = r, Ot = o, Re !== null && (Ot ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
            break;
        case 18:
            Re !== null && (Ot ? (e = Re, n = n.stateNode, e.nodeType === 8 ? iu(e.parentNode, n) : e.nodeType === 1 && iu(e, n), Li(e)) : iu(Re, n.stateNode));
            break;
        case 4:
            r = Re, o = Ot, Re = n.stateNode.containerInfo, Ot = !0, An(e, t, n), Re = r, Ot = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Fe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                o = r = r.next;
                do {
                    var i = o,
                        s = i.destroy;
                    i = i.tag, s !== void 0 && (i & 2 || i & 4) && Ec(n, t, s), o = o.next
                } while (o !== r)
            }
            An(e, t, n);
            break;
        case 1:
            if (!Fe && (so(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                ye(n, t, a)
            }
            An(e, t, n);
            break;
        case 21:
            An(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Fe = (r = Fe) || n.memoizedState !== null, An(e, t, n), Fe = r) : An(e, t, n);
            break;
        default:
            An(e, t, n)
    }
}

function vp(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new tE), t.forEach(function(r) {
            var o = dE.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}

function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    s = t,
                    a = s;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            Re = a.stateNode, Ot = !1;
                            break e;
                        case 3:
                            Re = a.stateNode.containerInfo, Ot = !0;
                            break e;
                        case 4:
                            Re = a.stateNode.containerInfo, Ot = !0;
                            break e
                    }
                    a = a.return
                }
                if (Re === null) throw Error(O(160));
                jv(i, s, o), Re = null, Ot = !1;
                var l = o.alternate;
                l !== null && (l.return = null), o.return = null
            } catch (u) {
                ye(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Iv(t, e), t = t.sibling
}

function Iv(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (bt(t, e), $t(e), r & 4) {
                try {
                    Si(3, e, e.return), ll(3, e)
                } catch (g) {
                    ye(e, e.return, g)
                }
                try {
                    Si(5, e, e.return)
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            break;
        case 1:
            bt(t, e), $t(e), r & 512 && n !== null && so(n, n.return);
            break;
        case 5:
            if (bt(t, e), $t(e), r & 512 && n !== null && so(n, n.return), e.flags & 32) {
                var o = e.stateNode;
                try {
                    Ni(o, "")
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            if (r & 4 && (o = e.stateNode, o != null)) {
                var i = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && i.type === "radio" && i.name != null && oy(o, i), Xu(a, s);
                    var u = Xu(a, i);
                    for (s = 0; s < l.length; s += 2) {
                        var c = l[s],
                            d = l[s + 1];
                        c === "style" ? uy(o, d) : c === "dangerouslySetInnerHTML" ? ay(o, d) : c === "children" ? Ni(o, d) : kd(o, c, d, u)
                    }
                    switch (a) {
                        case "input":
                            Wu(o, i);
                            break;
                        case "textarea":
                            iy(o, i);
                            break;
                        case "select":
                            var f = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!i.multiple;
                            var h = i.value;
                            h != null ? fo(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? fo(o, !!i.multiple, i.defaultValue, !0) : fo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Fi] = i
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            break;
        case 6:
            if (bt(t, e), $t(e), r & 4) {
                if (e.stateNode === null) throw Error(O(162));
                o = e.stateNode, i = e.memoizedProps;
                try {
                    o.nodeValue = i
                } catch (g) {
                    ye(e, e.return, g)
                }
            }
            break;
        case 3:
            if (bt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Li(t.containerInfo)
            } catch (g) {
                ye(e, e.return, g)
            }
            break;
        case 4:
            bt(t, e), $t(e);
            break;
        case 13:
            bt(t, e), $t(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (sf = ve())), r & 4 && vp(e);
            break;
        case 22:
            if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Fe = (u = Fe) || c, bt(t, e), Fe = u) : bt(t, e), $t(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
                    for (V = e, c = e.child; c !== null;) {
                        for (d = V = c; V !== null;) {
                            switch (f = V, h = f.child, f.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Si(4, f, f.return);
                                    break;
                                case 1:
                                    so(f, f.return);
                                    var v = f.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = f, n = f.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (g) {
                                            ye(r, n, g)
                                        }
                                    }
                                    break;
                                case 5:
                                    so(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        xp(d);
                                        continue
                                    }
                            }
                            h !== null ? (h.return = f, V = h) : xp(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e;;) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d;
                            try {
                                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = ly("display", s))
                            } catch (g) {
                                ye(e, e.return, g)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null) try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (g) {
                            ye(e, e.return, g)
                        }
                    } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                        d.child.return = d, d = d.child;
                        continue
                    }
                    if (d === e) break e;
                    for (; d.sibling === null;) {
                        if (d.return === null || d.return === e) break e;
                        c === d && (c = null), d = d.return
                    }
                    c === d && (c = null), d.sibling.return = d.return, d = d.sibling
                }
            }
            break;
        case 19:
            bt(t, e), $t(e), r & 4 && vp(e);
            break;
        case 21:
            break;
        default:
            bt(t, e), $t(e)
    }
}

function $t(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Lv(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(O(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (Ni(o, ""), r.flags &= -33);
                    var i = yp(e);
                    kc(e, i, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = yp(e);
                    bc(e, a, s);
                    break;
                default:
                    throw Error(O(161))
            }
        }
        catch (l) {
            ye(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function rE(e, t, n) {
    V = e, _v(e)
}

function _v(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null;) {
        var o = V,
            i = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || Ds;
            if (!s) {
                var a = o.alternate,
                    l = a !== null && a.memoizedState !== null || Fe;
                a = Ds;
                var u = Fe;
                if (Ds = s, (Fe = l) && !u)
                    for (V = o; V !== null;) s = V, l = s.child, s.tag === 22 && s.memoizedState !== null ? Sp(o) : l !== null ? (l.return = s, V = l) : Sp(o);
                for (; i !== null;) V = i, _v(i), i = i.sibling;
                V = o, Ds = a, Fe = u
            }
            wp(e)
        } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, V = i) : wp(e)
    }
}

function wp(e) {
    for (; V !== null;) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Fe || ll(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Fe)
                            if (n === null) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : Rt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && rp(t, i, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            rp(t, s, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Li(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(O(163))
                }
                Fe || t.flags & 512 && Tc(t)
            } catch (f) {
                ye(t, t.return, f)
            }
        }
        if (t === e) {
            V = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function xp(e) {
    for (; V !== null;) {
        var t = V;
        if (t === e) {
            V = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, V = n;
            break
        }
        V = t.return
    }
}

function Sp(e) {
    for (; V !== null;) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ll(4, t)
                    } catch (l) {
                        ye(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            ye(t, o, l)
                        }
                    }
                    var i = t.return;
                    try {
                        Tc(t)
                    } catch (l) {
                        ye(t, i, l)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Tc(t)
                    } catch (l) {
                        ye(t, s, l)
                    }
            }
        } catch (l) {
            ye(t, t.return, l)
        }
        if (t === e) {
            V = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, V = a;
            break
        }
        V = t.return
    }
}
var oE = Math.ceil,
    Ma = Sn.ReactCurrentDispatcher,
    rf = Sn.ReactCurrentOwner,
    vt = Sn.ReactCurrentBatchConfig,
    Z = 0,
    Ae = null,
    Ce = null,
    De = 0,
    rt = 0,
    ao = ur(0),
    be = 0,
    Wi = null,
    _r = 0,
    ul = 0,
    of = 0,
    Ci = null,
    Xe = null,
    sf = 0,
    jo = 1 / 0,
    un = null,
    Da = !1,
    Pc = null,
    Zn = null,
    Os = !1,
    Hn = null,
    Oa = 0,
    Ei = 0,
    Ac = null,
    Js = -1,
    ea = 0;

function Ke() {
    return Z & 6 ? ve() : Js !== -1 ? Js : Js = ve()
}

function Jn(e) {
    return e.mode & 1 ? Z & 2 && De !== 0 ? De & -De : BC.transition !== null ? (ea === 0 && (ea = Sy()), ea) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ay(e.type)), e) : 1
}

function It(e, t, n, r) {
    if (50 < Ei) throw Ei = 0, Ac = null, Error(O(185));
    rs(e, n, r), (!(Z & 2) || e !== Ae) && (e === Ae && (!(Z & 2) && (ul |= n), be === 4 && _n(e, De)), et(e, r), n === 1 && Z === 0 && !(t.mode & 1) && (jo = ve() + 500, il && cr()))
}

function et(e, t) {
    var n = e.callbackNode;
    BS(e, t);
    var r = ga(e, e === Ae ? De : 0);
    if (r === 0) n !== null && Nh(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Nh(n), t === 1) e.tag === 0 ? zC(Cp.bind(null, e)) : Gy(Cp.bind(null, e)), IC(function() {
            !(Z & 6) && cr()
        }), n = null;
        else {
            switch (Cy(r)) {
                case 1:
                    n = Md;
                    break;
                case 4:
                    n = wy;
                    break;
                case 16:
                    n = ma;
                    break;
                case 536870912:
                    n = xy;
                    break;
                default:
                    n = ma
            }
            n = Wv(n, Vv.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Vv(e, t) {
    if (Js = -1, ea = 0, Z & 6) throw Error(O(327));
    var n = e.callbackNode;
    if (yo() && e.callbackNode !== n) return null;
    var r = ga(e, e === Ae ? De : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = La(e, r);
    else {
        t = r;
        var o = Z;
        Z |= 2;
        var i = zv();
        (Ae !== e || De !== t) && (un = null, jo = ve() + 500, Nr(e, t));
        do try {
            aE();
            break
        } catch (a) {
            Fv(e, a)
        }
        while (!0);
        Hd(), Ma.current = i, Z = o, Ce !== null ? t = 0 : (Ae = null, De = 0, t = be)
    }
    if (t !== 0) {
        if (t === 2 && (o = tc(e), o !== 0 && (r = o, t = Rc(e, o))), t === 1) throw n = Wi, Nr(e, 0), _n(e, r), et(e, ve()), n;
        if (t === 6) _n(e, r);
        else {
            if (o = e.current.alternate, !(r & 30) && !iE(o) && (t = La(e, r), t === 2 && (i = tc(e), i !== 0 && (r = i, t = Rc(e, i))), t === 1)) throw n = Wi, Nr(e, 0), _n(e, r), et(e, ve()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    yr(e, Xe, un);
                    break;
                case 3:
                    if (_n(e, r), (r & 130023424) === r && (t = sf + 500 - ve(), 10 < t)) {
                        if (ga(e, 0) !== 0) break;
                        if (o = e.suspendedLanes, (o & r) !== r) {
                            Ke(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = uc(yr.bind(null, e, Xe, un), t);
                        break
                    }
                    yr(e, Xe, un);
                    break;
                case 4:
                    if (_n(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var s = 31 - jt(r);
                        i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
                    }
                    if (r = o, r = ve() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * oE(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = uc(yr.bind(null, e, Xe, un), r);
                        break
                    }
                    yr(e, Xe, un);
                    break;
                case 5:
                    yr(e, Xe, un);
                    break;
                default:
                    throw Error(O(329))
            }
        }
    }
    return et(e, ve()), e.callbackNode === n ? Vv.bind(null, e) : null
}

function Rc(e, t) {
    var n = Ci;
    return e.current.memoizedState.isDehydrated && (Nr(e, t).flags |= 256), e = La(e, t), e !== 2 && (t = Xe, Xe = n, t !== null && Nc(t)), e
}

function Nc(e) {
    Xe === null ? Xe = e : Xe.push.apply(Xe, e)
}

function iE(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Vt(i(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function _n(e, t) {
    for (t &= ~ of , t &= ~ul, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - jt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Cp(e) {
    if (Z & 6) throw Error(O(327));
    yo();
    var t = ga(e, 0);
    if (!(t & 1)) return et(e, ve()), null;
    var n = La(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = tc(e);
        r !== 0 && (t = r, n = Rc(e, r))
    }
    if (n === 1) throw n = Wi, Nr(e, 0), _n(e, t), et(e, ve()), n;
    if (n === 6) throw Error(O(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, yr(e, Xe, un), et(e, ve()), null
}

function af(e, t) {
    var n = Z;
    Z |= 1;
    try {
        return e(t)
    } finally {
        Z = n, Z === 0 && (jo = ve() + 500, il && cr())
    }
}

function Vr(e) {
    Hn !== null && Hn.tag === 0 && !(Z & 6) && yo();
    var t = Z;
    Z |= 1;
    var n = vt.transition,
        r = ne;
    try {
        if (vt.transition = null, ne = 1, e) return e()
    } finally {
        ne = r, vt.transition = n, Z = t, !(Z & 6) && cr()
    }
}

function lf() {
    rt = ao.current, ue(ao)
}

function Nr(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, jC(n)), Ce !== null)
        for (n = Ce.return; n !== null;) {
            var r = n;
            switch (Bd(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Sa();
                    break;
                case 3:
                    Oo(), ue(Ze), ue(ze), Xd();
                    break;
                case 5:
                    Yd(r);
                    break;
                case 4:
                    Oo();
                    break;
                case 13:
                    ue(he);
                    break;
                case 19:
                    ue(he);
                    break;
                case 10:
                    Wd(r.type._context);
                    break;
                case 22:
                case 23:
                    lf()
            }
            n = n.return
        }
    if (Ae = e, Ce = e = er(e.current, null), De = rt = t, be = 0, Wi = null, of = ul = _r = 0, Xe = Ci = null, xr !== null) {
        for (t = 0; t < xr.length; t++)
            if (n = xr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var s = i.next;
                    i.next = o, r.next = s
                }
                n.pending = r
            }
        xr = null
    }
    return e
}

function Fv(e, t) {
    do {
        var n = Ce;
        try {
            if (Hd(), Xs.current = Na, Ra) {
                for (var r = pe.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null), r = r.next
                }
                Ra = !1
            }
            if (Ir = 0, Pe = Te = pe = null, xi = !1, $i = 0, rf.current = null, n === null || n.return === null) {
                be = 1, Wi = t, Ce = null;
                break
            }
            e: {
                var i = e,
                    s = n.return,
                    a = n,
                    l = t;
                if (t = De, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = a,
                        d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var h = up(s);
                    if (h !== null) {
                        h.flags &= -257, cp(h, s, a, i, t), h.mode & 1 && lp(i, u, t), t = h, l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var g = new Set;
                            g.add(l), t.updateQueue = g
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            lp(i, u, t), uf();
                            break e
                        }
                        l = Error(O(426))
                    }
                } else if (de && a.mode & 1) {
                    var w = up(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), cp(w, s, a, i, t), $d(Lo(l, a));
                        break e
                    }
                }
                i = l = Lo(l, a),
                be !== 4 && (be = 2),
                Ci === null ? Ci = [i] : Ci.push(i),
                i = s;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var m = Cv(i, l, t);
                            np(i, m);
                            break e;
                        case 1:
                            a = l;
                            var p = i.type,
                                y = i.stateNode;
                            if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Zn === null || !Zn.has(y)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var S = Ev(i, a, t);
                                np(i, S);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            $v(n)
        } catch (E) {
            t = E, Ce === n && n !== null && (Ce = n = n.return);
            continue
        }
        break
    } while (!0)
}

function zv() {
    var e = Ma.current;
    return Ma.current = Na, e === null ? Na : e
}

function uf() {
    (be === 0 || be === 3 || be === 2) && (be = 4), Ae === null || !(_r & 268435455) && !(ul & 268435455) || _n(Ae, De)
}

function La(e, t) {
    var n = Z;
    Z |= 2;
    var r = zv();
    (Ae !== e || De !== t) && (un = null, Nr(e, t));
    do try {
        sE();
        break
    } catch (o) {
        Fv(e, o)
    }
    while (!0);
    if (Hd(), Z = n, Ma.current = r, Ce !== null) throw Error(O(261));
    return Ae = null, De = 0, be
}

function sE() {
    for (; Ce !== null;) Bv(Ce)
}

function aE() {
    for (; Ce !== null && !DS();) Bv(Ce)
}

function Bv(e) {
    var t = Hv(e.alternate, e, rt);
    e.memoizedProps = e.pendingProps, t === null ? $v(e) : Ce = t, rf.current = null
}

function $v(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = eE(n, t), n !== null) {
                n.flags &= 32767, Ce = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                be = 6, Ce = null;
                return
            }
        } else if (n = JC(n, t, rt), n !== null) {
            Ce = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ce = t;
            return
        }
        Ce = t = e
    } while (t !== null);
    be === 0 && (be = 5)
}

function yr(e, t, n) {
    var r = ne,
        o = vt.transition;
    try {
        vt.transition = null, ne = 1, lE(e, t, n, r)
    } finally {
        vt.transition = o, ne = r
    }
    return null
}

function lE(e, t, n, r) {
    do yo(); while (Hn !== null);
    if (Z & 6) throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if ($S(e, i), e === Ae && (Ce = Ae = null, De = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Os || (Os = !0, Wv(ma, function() {
            return yo(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = vt.transition, vt.transition = null;
        var s = ne;
        ne = 1;
        var a = Z;
        Z |= 4, rf.current = null, nE(e, n), Iv(n, e), AC(ac), ya = !!sc, ac = sc = null, e.current = n, rE(n), OS(), Z = a, ne = s, vt.transition = i
    } else e.current = n;
    if (Os && (Os = !1, Hn = e, Oa = o), i = e.pendingLanes, i === 0 && (Zn = null), IS(n.stateNode), et(e, ve()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (Da) throw Da = !1, e = Pc, Pc = null, e;
    return Oa & 1 && e.tag !== 0 && yo(), i = e.pendingLanes, i & 1 ? e === Ac ? Ei++ : (Ei = 0, Ac = e) : Ei = 0, cr(), null
}

function yo() {
    if (Hn !== null) {
        var e = Cy(Oa),
            t = vt.transition,
            n = ne;
        try {
            if (vt.transition = null, ne = 16 > e ? 16 : e, Hn === null) var r = !1;
            else {
                if (e = Hn, Hn = null, Oa = 0, Z & 6) throw Error(O(331));
                var o = Z;
                for (Z |= 4, V = e.current; V !== null;) {
                    var i = V,
                        s = i.child;
                    if (V.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null;) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Si(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null) d.return = c, V = d;
                                    else
                                        for (; V !== null;) {
                                            c = V;
                                            var f = c.sibling,
                                                h = c.return;
                                            if (Ov(c), c === u) {
                                                V = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h, V = f;
                                                break
                                            }
                                            V = h
                                        }
                                }
                            }
                            var v = i.alternate;
                            if (v !== null) {
                                var g = v.child;
                                if (g !== null) {
                                    v.child = null;
                                    do {
                                        var w = g.sibling;
                                        g.sibling = null, g = w
                                    } while (g !== null)
                                }
                            }
                            V = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && s !== null) s.return = i, V = s;
                    else e: for (; V !== null;) {
                        if (i = V, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Si(9, i, i.return)
                        }
                        var m = i.sibling;
                        if (m !== null) {
                            m.return = i.return, V = m;
                            break e
                        }
                        V = i.return
                    }
                }
                var p = e.current;
                for (V = p; V !== null;) {
                    s = V;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null) y.return = s, V = y;
                    else e: for (s = p; V !== null;) {
                        if (a = V, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ll(9, a)
                            }
                        } catch (E) {
                            ye(a, a.return, E)
                        }
                        if (a === s) {
                            V = null;
                            break e
                        }
                        var S = a.sibling;
                        if (S !== null) {
                            S.return = a.return, V = S;
                            break e
                        }
                        V = a.return
                    }
                }
                if (Z = o, cr(), qt && typeof qt.onPostCommitFiberRoot == "function") try {
                    qt.onPostCommitFiberRoot(el, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n, vt.transition = t
        }
    }
    return !1
}

function Ep(e, t, n) {
    t = Lo(n, t), t = Cv(e, t, 1), e = qn(e, t, 1), t = Ke(), e !== null && (rs(e, 1, t), et(e, t))
}

function ye(e, t, n) {
    if (e.tag === 3) Ep(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ep(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zn === null || !Zn.has(r))) {
                    e = Lo(n, e), e = Ev(t, e, 1), t = qn(t, e, 1), e = Ke(), t !== null && (rs(t, 1, e), et(t, e));
                    break
                }
            }
            t = t.return
        }
}

function uE(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ke(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (De & n) === n && (be === 4 || be === 3 && (De & 130023424) === De && 500 > ve() - sf ? Nr(e, 0) : of |= n), et(e, t)
}

function Uv(e, t) {
    t === 0 && (e.mode & 1 ? (t = Es, Es <<= 1, !(Es & 130023424) && (Es = 4194304)) : t = 1);
    var n = Ke();
    e = yn(e, t), e !== null && (rs(e, t, n), et(e, n))
}

function cE(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Uv(e, n)
}

function dE(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(O(314))
    }
    r !== null && r.delete(t), Uv(e, n)
}
var Hv;
Hv = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return qe = !1, ZC(e, t, n);
            qe = !!(e.flags & 131072)
        }
    else qe = !1, de && t.flags & 1048576 && Qy(t, Ta, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Zs(e, t), e = t.pendingProps;
            var o = No(t, ze.current);
            go(t, n), o = Zd(null, t, r, e, o, n);
            var i = Jd();
            return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (i = !0, Ca(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Gd(t), o.updater = al, t.stateNode = o, o._reactInternals = t, gc(t, r, e, n), t = wc(null, t, r, !0, i, n)) : (t.tag = 0, de && i && zd(t), $e(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Zs(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hE(r), e = Rt(r, e), o) {
                    case 0:
                        t = vc(null, t, r, e, n);
                        break e;
                    case 1:
                        t = hp(null, t, r, e, n);
                        break e;
                    case 11:
                        t = dp(null, t, r, e, n);
                        break e;
                    case 14:
                        t = fp(null, t, r, Rt(r.type, e), n);
                        break e
                }
                throw Error(O(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), vc(e, t, r, o, n);
        case 1:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), hp(e, t, r, o, n);
        case 3:
            e: {
                if (Pv(t), e === null) throw Error(O(387));r = t.pendingProps,
                i = t.memoizedState,
                o = i.element,
                ev(e, t),
                Pa(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        o = Lo(Error(O(423)), t), t = pp(e, t, r, n, o);
                        break e
                    } else if (r !== o) {
                    o = Lo(Error(O(424)), t), t = pp(e, t, r, n, o);
                    break e
                } else
                    for (it = Xn(t.stateNode.containerInfo.firstChild), st = t, de = !0, Lt = null, n = Zy(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Mo(), r === o) {
                        t = vn(e, t, n);
                        break e
                    }
                    $e(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return tv(t), e === null && hc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, lc(r, o) ? s = null : i !== null && lc(r, i) && (t.flags |= 32), kv(e, t), $e(e, t, s, n), t.child;
        case 6:
            return e === null && hc(t), null;
        case 13:
            return Av(e, t, n);
        case 4:
            return Qd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Do(t, null, r, n) : $e(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), dp(e, t, r, o, n);
        case 7:
            return $e(e, t, t.pendingProps, n), t.child;
        case 8:
            return $e(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return $e(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ie(ba, r._currentValue), r._currentValue = s, i !== null)
                    if (Vt(i.value, s)) {
                        if (i.children === o.children && !Ze.current) {
                            t = vn(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var a = i.dependencies;
                            if (a !== null) {
                                s = i.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            l = pn(-1, n & -n), l.tag = 2;
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                                            }
                                        }
                                        i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), pc(i.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (s = i.return, s === null) throw Error(O(341));
                                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), pc(s, n, t), s = i.sibling
                            } else s = i.child;
                            if (s !== null) s.return = i;
                            else
                                for (s = i; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (i = s.sibling, i !== null) {
                                        i.return = s.return, s = i;
                                        break
                                    }
                                    s = s.return
                                }
                            i = s
                        }
                $e(e, t, o.children, n),
                t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, go(t, n), o = xt(o), r = r(o), t.flags |= 1, $e(e, t, r, n), t.child;
        case 14:
            return r = t.type, o = Rt(r, t.pendingProps), o = Rt(r.type, o), fp(e, t, r, o, n);
        case 15:
            return Tv(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Rt(r, o), Zs(e, t), t.tag = 1, Je(r) ? (e = !0, Ca(t)) : e = !1, go(t, n), Sv(t, r, o), gc(t, r, o, n), wc(null, t, r, !0, e, n);
        case 19:
            return Rv(e, t, n);
        case 22:
            return bv(e, t, n)
    }
    throw Error(O(156, t.tag))
};

function Wv(e, t) {
    return vy(e, t)
}

function fE(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function gt(e, t, n, r) {
    return new fE(e, t, n, r)
}

function cf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function hE(e) {
    if (typeof e == "function") return cf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Ad) return 11;
        if (e === Rd) return 14
    }
    return 2
}

function er(e, t) {
    var n = e.alternate;
    return n === null ? (n = gt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ta(e, t, n, r, o, i) {
    var s = 2;
    if (r = e, typeof e == "function") cf(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case qr:
            return Mr(n.children, o, i, t);
        case Pd:
            s = 8, o |= 8;
            break;
        case zu:
            return e = gt(12, n, t, o | 2), e.elementType = zu, e.lanes = i, e;
        case Bu:
            return e = gt(13, n, t, o), e.elementType = Bu, e.lanes = i, e;
        case $u:
            return e = gt(19, n, t, o), e.elementType = $u, e.lanes = i, e;
        case ty:
            return cl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Jg:
                    s = 10;
                    break e;
                case ey:
                    s = 9;
                    break e;
                case Ad:
                    s = 11;
                    break e;
                case Rd:
                    s = 14;
                    break e;
                case Ln:
                    s = 16, r = null;
                    break e
            }
            throw Error(O(130, e == null ? e : typeof e, ""))
    }
    return t = gt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function Mr(e, t, n, r) {
    return e = gt(7, e, r, t), e.lanes = n, e
}

function cl(e, t, n, r) {
    return e = gt(22, e, r, t), e.elementType = ty, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function hu(e, t, n) {
    return e = gt(6, e, null, t), e.lanes = n, e
}

function pu(e, t, n) {
    return t = gt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function pE(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function df(e, t, n, r, o, i, s, a, l) {
    return e = new pE(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = gt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Gd(i), e
}

function mE(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Xr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Kv(e) {
    if (!e) return nr;
    e = e._reactInternals;
    e: {
        if (Br(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Je(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(O(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n)) return Ky(e, n, t)
    }
    return t
}

function Gv(e, t, n, r, o, i, s, a, l) {
    return e = df(n, r, !0, e, o, i, s, a, l), e.context = Kv(null), n = e.current, r = Ke(), o = Jn(n), i = pn(r, o), i.callback = t ?? null, qn(n, i, o), e.current.lanes = o, rs(e, o, r), et(e, r), e
}

function dl(e, t, n, r) {
    var o = t.current,
        i = Ke(),
        s = Jn(o);
    return n = Kv(n), t.context === null ? t.context = n : t.pendingContext = n, t = pn(i, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = qn(o, t, s), e !== null && (It(e, o, s, i), Ys(e, o, s)), s
}

function ja(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Tp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ff(e, t) {
    Tp(e, t), (e = e.alternate) && Tp(e, t)
}

function gE() {
    return null
}
var Qv = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function hf(e) {
    this._internalRoot = e
}
fl.prototype.render = hf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    dl(e, t, null, null)
};
fl.prototype.unmount = hf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vr(function() {
            dl(null, e, null, null)
        }), t[gn] = null
    }
};

function fl(e) {
    this._internalRoot = e
}
fl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = by();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < In.length && t !== 0 && t < In[n].priority; n++);
        In.splice(n, 0, e), n === 0 && Py(e)
    }
};

function pf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function bp() {}

function yE(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = ja(s);
                i.call(u)
            }
        }
        var s = Gv(t, r, e, 0, null, !1, !1, "", bp);
        return e._reactRootContainer = s, e[gn] = s.current, _i(e.nodeType === 8 ? e.parentNode : e), Vr(), s
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ja(l);
            a.call(u)
        }
    }
    var l = df(e, 0, !1, null, null, !1, !1, "", bp);
    return e._reactRootContainer = l, e[gn] = l.current, _i(e.nodeType === 8 ? e.parentNode : e), Vr(function() {
        dl(t, l, n, r)
    }), l
}

function pl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var s = i;
        if (typeof o == "function") {
            var a = o;
            o = function() {
                var l = ja(s);
                a.call(l)
            }
        }
        dl(t, s, e, o)
    } else s = yE(n, t, e, o, r);
    return ja(s)
}
Ey = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = fi(t.pendingLanes);
                n !== 0 && (Dd(t, n | 1), et(t, ve()), !(Z & 6) && (jo = ve() + 500, cr()))
            }
            break;
        case 13:
            Vr(function() {
                var r = yn(e, 1);
                if (r !== null) {
                    var o = Ke();
                    It(r, e, 1, o)
                }
            }), ff(e, 1)
    }
};
Od = function(e) {
    if (e.tag === 13) {
        var t = yn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            It(t, e, 134217728, n)
        }
        ff(e, 134217728)
    }
};
Ty = function(e) {
    if (e.tag === 13) {
        var t = Jn(e),
            n = yn(e, t);
        if (n !== null) {
            var r = Ke();
            It(n, e, t, r)
        }
        ff(e, t)
    }
};
by = function() {
    return ne
};
ky = function(e, t) {
    var n = ne;
    try {
        return ne = e, t()
    } finally {
        ne = n
    }
};
Zu = function(e, t, n) {
    switch (t) {
        case "input":
            if (Wu(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = ol(r);
                        if (!o) throw Error(O(90));
                        ry(r), Wu(r, o)
                    }
                }
            }
            break;
        case "textarea":
            iy(e, n);
            break;
        case "select":
            t = n.value, t != null && fo(e, !!n.multiple, t, !1)
    }
};
fy = af;
hy = Vr;
var vE = {
        usingClientEntryPoint: !1,
        Events: [is, to, ol, cy, dy, af]
    },
    si = {
        findFiberByHostInstance: wr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    wE = {
        bundleType: si.bundleType,
        version: si.version,
        rendererPackageName: si.rendererPackageName,
        rendererConfig: si.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Sn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = gy(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: si.findFiberByHostInstance || gE,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ls.isDisabled && Ls.supportsFiber) try {
        el = Ls.inject(wE), qt = Ls
    } catch {}
}
ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vE;
ct.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!pf(t)) throw Error(O(200));
    return mE(e, t, null, n)
};
ct.createRoot = function(e, t) {
    if (!pf(e)) throw Error(O(299));
    var n = !1,
        r = "",
        o = Qv;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = df(e, 1, !1, null, null, n, !1, r, o), e[gn] = t.current, _i(e.nodeType === 8 ? e.parentNode : e), new hf(t)
};
ct.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
    return e = gy(t), e = e === null ? null : e.stateNode, e
};
ct.flushSync = function(e) {
    return Vr(e)
};
ct.hydrate = function(e, t, n) {
    if (!hl(t)) throw Error(O(200));
    return pl(null, e, t, !0, n)
};
ct.hydrateRoot = function(e, t, n) {
    if (!pf(e)) throw Error(O(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        s = Qv;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Gv(t, null, e, 1, n ?? null, o, !1, i, s), e[gn] = t.current, _i(e), r)
        for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new fl(t)
};
ct.render = function(e, t, n) {
    if (!hl(t)) throw Error(O(200));
    return pl(null, e, t, !1, n)
};
ct.unmountComponentAtNode = function(e) {
    if (!hl(e)) throw Error(O(40));
    return e._reactRootContainer ? (Vr(function() {
        pl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[gn] = null
        })
    }), !0) : !1
};
ct.unstable_batchedUpdates = af;
ct.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hl(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return pl(e, t, n, !1, r)
};
ct.version = "18.3.1-next-f1338f8080-20240426";

function Yv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)
    } catch (e) {
        console.error(e)
    }
}
Yv(), Yg.exports = ct;
var as = Yg.exports;
const Xv = _g(as);
var qv, kp = as;
qv = kp.createRoot, kp.hydrateRoot;
var ml = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    gl = typeof window > "u" || "Deno" in globalThis;

function Nt() {}

function xE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function SE(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function CE(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function Mc(e, t) {
    return typeof e == "function" ? e(t) : e
}

function EE(e, t) {
    return typeof e == "function" ? e(t) : e
}

function Pp(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: o,
        predicate: i,
        queryKey: s,
        stale: a
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== mf(s, t.options)) return !1
        } else if (!Gi(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l) return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || o && o !== t.state.fetchStatus || i && !i(t))
}

function Ap(e, t) {
    const {
        exact: n,
        status: r,
        predicate: o,
        mutationKey: i
    } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Ki(t.options.mutationKey) !== Ki(i)) return !1
        } else if (!Gi(t.options.mutationKey, i)) return !1
    }
    return !(r && t.state.status !== r || o && !o(t))
}

function mf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Ki)(e)
}

function Ki(e) {
    return JSON.stringify(e, (t, n) => Dc(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n)
}

function Gi(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => Gi(e[n], t[n])) : !1
}

function Zv(e, t) {
    if (e === t) return e;
    const n = Rp(e) && Rp(t);
    if (n || Dc(e) && Dc(t)) {
        const r = n ? e : Object.keys(e),
            o = r.length,
            i = n ? t : Object.keys(t),
            s = i.length,
            a = n ? [] : {},
            l = new Set(r);
        let u = 0;
        for (let c = 0; c < s; c++) {
            const d = n ? c : i[c];
            (!n && l.has(d) || n) && e[d] === void 0 && t[d] === void 0 ? (a[d] = void 0, u++) : (a[d] = Zv(e[d], t[d]), a[d] === e[d] && e[d] !== void 0 && u++)
        }
        return o === s && u === o ? e : a
    }
    return t
}

function Rp(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Dc(e) {
    if (!Np(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Np(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}

function Np(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function TE(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function bE(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? Zv(e, t) : t
}

function kE(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function PE(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var gf = Symbol();

function Jv(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === gf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Tr, Vn, So, Rg, AE = (Rg = class extends ml {
        constructor() {
            super();
            J(this, Tr);
            J(this, Vn);
            J(this, So);
            G(this, So, t => {
                if (!gl && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, Vn) || this.setEventListener(N(this, So))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = N(this, Vn)) == null || t.call(this), G(this, Vn, void 0))
        }
        setEventListener(t) {
            var n;
            G(this, So, t), (n = N(this, Vn)) == null || n.call(this), G(this, Vn, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            N(this, Tr) !== t && (G(this, Tr, t), this.onFocus())
        }
        onFocus() {
            const t = this.isFocused();
            this.listeners.forEach(n => {
                n(t)
            })
        }
        isFocused() {
            var t;
            return typeof N(this, Tr) == "boolean" ? N(this, Tr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Tr = new WeakMap, Vn = new WeakMap, So = new WeakMap, Rg),
    e0 = new AE,
    Co, Fn, Eo, Ng, RE = (Ng = class extends ml {
        constructor() {
            super();
            J(this, Co, !0);
            J(this, Fn);
            J(this, Eo);
            G(this, Eo, t => {
                if (!gl && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            N(this, Fn) || this.setEventListener(N(this, Eo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = N(this, Fn)) == null || t.call(this), G(this, Fn, void 0))
        }
        setEventListener(t) {
            var n;
            G(this, Eo, t), (n = N(this, Fn)) == null || n.call(this), G(this, Fn, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            N(this, Co) !== t && (G(this, Co, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return N(this, Co)
        }
    }, Co = new WeakMap, Fn = new WeakMap, Eo = new WeakMap, Ng),
    Ia = new RE;

function NE() {
    let e, t;
    const n = new Promise((o, i) => {
        e = o, t = i
    });
    n.status = "pending", n.catch(() => {});

    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject
    }
    return n.resolve = o => {
        r({
            status: "fulfilled",
            value: o
        }), e(o)
    }, n.reject = o => {
        r({
            status: "rejected",
            reason: o
        }), t(o)
    }, n
}

function ME(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function t0(e) {
    return (e ?? "online") === "online" ? Ia.isOnline() : !0
}
var n0 = class extends Error {
    constructor(e) {
        super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function mu(e) {
    return e instanceof n0
}

function r0(e) {
    let t = !1,
        n = 0,
        r = !1,
        o;
    const i = NE(),
        s = g => {
            var w;
            r || (f(new n0(g)), (w = e.abort) == null || w.call(e))
        },
        a = () => {
            t = !0
        },
        l = () => {
            t = !1
        },
        u = () => e0.isFocused() && (e.networkMode === "always" || Ia.isOnline()) && e.canRun(),
        c = () => t0(e.networkMode) && e.canRun(),
        d = g => {
            var w;
            r || (r = !0, (w = e.onSuccess) == null || w.call(e, g), o == null || o(), i.resolve(g))
        },
        f = g => {
            var w;
            r || (r = !0, (w = e.onError) == null || w.call(e, g), o == null || o(), i.reject(g))
        },
        h = () => new Promise(g => {
            var w;
            o = m => {
                (r || u()) && g(m)
            }, (w = e.onPause) == null || w.call(e)
        }).then(() => {
            var g;
            o = void 0, r || (g = e.onContinue) == null || g.call(e)
        }),
        v = () => {
            if (r) return;
            let g;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                g = w ?? e.fn()
            } catch (m) {
                g = Promise.reject(m)
            }
            Promise.resolve(g).then(d).catch(m => {
                var T;
                if (r) return;
                const p = e.retry ?? (gl ? 0 : 3),
                    y = e.retryDelay ?? ME,
                    S = typeof y == "function" ? y(n, m) : y,
                    E = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
                if (t || !E) {
                    f(m);
                    return
                }
                n++, (T = e.onFail) == null || T.call(e, n, m), TE(S).then(() => u() ? void 0 : h()).then(() => {
                    t ? f(m) : v()
                })
            })
        };
    return {
        promise: i,
        cancel: s,
        continue: () => (o == null || o(), i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? v() : h().then(v), i)
    }
}
var DE = e => setTimeout(e, 0);

function OE() {
    let e = [],
        t = 0,
        n = a => {
            a()
        },
        r = a => {
            a()
        },
        o = DE;
    const i = a => {
            t ? e.push(a) : o(() => {
                n(a)
            })
        },
        s = () => {
            const a = e;
            e = [], a.length && o(() => {
                r(() => {
                    a.forEach(l => {
                        n(l)
                    })
                })
            })
        };
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--, t || s()
            }
            return l
        },
        batchCalls: a => (...l) => {
            i(() => {
                a(...l)
            })
        },
        schedule: i,
        setNotifyFunction: a => {
            n = a
        },
        setBatchNotifyFunction: a => {
            r = a
        },
        setScheduler: a => {
            o = a
        }
    }
}
var Ue = OE(),
    br, Mg, o0 = (Mg = class {
        constructor() {
            J(this, br)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), SE(this.gcTime) && G(this, br, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (gl ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            N(this, br) && (clearTimeout(N(this, br)), G(this, br, void 0))
        }
    }, br = new WeakMap, Mg),
    To, kr, ht, Pr, Ve, es, Ar, Mt, ln, Dg, LE = (Dg = class extends o0 {
        constructor(t) {
            super();
            J(this, Mt);
            J(this, To);
            J(this, kr);
            J(this, ht);
            J(this, Pr);
            J(this, Ve);
            J(this, es);
            J(this, Ar);
            G(this, Ar, !1), G(this, es, t.defaultOptions), this.setOptions(t.options), this.observers = [], G(this, Pr, t.client), G(this, ht, N(this, Pr).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, G(this, To, IE(this.options)), this.state = t.state ?? N(this, To), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get promise() {
            var t;
            return (t = N(this, Ve)) == null ? void 0 : t.promise
        }
        setOptions(t) {
            this.options = { ...N(this, es),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && N(this, ht).remove(this)
        }
        setData(t, n) {
            const r = bE(this.state.data, t, this.options);
            return je(this, Mt, ln).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            je(this, Mt, ln).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r, o;
            const n = (r = N(this, Ve)) == null ? void 0 : r.promise;
            return (o = N(this, Ve)) == null || o.cancel(t), n ? n.then(Nt).catch(Nt) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(N(this, To))
        }
        isActive() {
            return this.observers.some(t => EE(t.options.enabled, this) !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === gf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some(t => Mc(t.options.staleTime, this) === "static") : !1
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
        }
        isStaleByTime(t = 0) {
            return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !CE(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = N(this, Ve)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = this.observers.find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = N(this, Ve)) == null || n.continue()
        }
        addObserver(t) {
            this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), N(this, ht).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t), this.observers.length || (N(this, Ve) && (N(this, Ar) ? N(this, Ve).cancel({
                revert: !0
            }) : N(this, Ve).cancelRetry()), this.scheduleGc()), N(this, ht).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        invalidate() {
            this.state.isInvalidated || je(this, Mt, ln).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var u, c, d;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (N(this, Ve)) return N(this, Ve).continueRetry(), N(this, Ve).promise
            }
            if (t && this.setOptions(t), !this.options.queryFn) {
                const f = this.observers.find(h => h.options.queryFn);
                f && this.setOptions(f.options)
            }
            const r = new AbortController,
                o = f => {
                    Object.defineProperty(f, "signal", {
                        enumerable: !0,
                        get: () => (G(this, Ar, !0), r.signal)
                    })
                },
                i = () => {
                    const f = Jv(this.options, n),
                        v = (() => {
                            const g = {
                                client: N(this, Pr),
                                queryKey: this.queryKey,
                                meta: this.meta
                            };
                            return o(g), g
                        })();
                    return G(this, Ar, !1), this.options.persister ? this.options.persister(f, v, this) : f(v)
                },
                a = (() => {
                    const f = {
                        fetchOptions: n,
                        options: this.options,
                        queryKey: this.queryKey,
                        client: N(this, Pr),
                        state: this.state,
                        fetchFn: i
                    };
                    return o(f), f
                })();
            (u = this.options.behavior) == null || u.onFetch(a, this), G(this, kr, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) && je(this, Mt, ln).call(this, {
                type: "fetch",
                meta: (d = a.fetchOptions) == null ? void 0 : d.meta
            });
            const l = f => {
                var h, v, g, w;
                mu(f) && f.silent || je(this, Mt, ln).call(this, {
                    type: "error",
                    error: f
                }), mu(f) || ((v = (h = N(this, ht).config).onError) == null || v.call(h, f, this), (w = (g = N(this, ht).config).onSettled) == null || w.call(g, this.state.data, f, this)), this.scheduleGc()
            };
            return G(this, Ve, r0({
                initialPromise: n == null ? void 0 : n.initialPromise,
                fn: a.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: f => {
                    var h, v, g, w;
                    if (f === void 0) {
                        l(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    try {
                        this.setData(f)
                    } catch (m) {
                        l(m);
                        return
                    }(v = (h = N(this, ht).config).onSuccess) == null || v.call(h, f, this), (w = (g = N(this, ht).config).onSettled) == null || w.call(g, f, this.state.error, this), this.scheduleGc()
                },
                onError: l,
                onFail: (f, h) => {
                    je(this, Mt, ln).call(this, {
                        type: "failed",
                        failureCount: f,
                        error: h
                    })
                },
                onPause: () => {
                    je(this, Mt, ln).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    je(this, Mt, ln).call(this, {
                        type: "continue"
                    })
                },
                retry: a.options.retry,
                retryDelay: a.options.retryDelay,
                networkMode: a.options.networkMode,
                canRun: () => !0
            })), N(this, Ve).start()
        }
    }, To = new WeakMap, kr = new WeakMap, ht = new WeakMap, Pr = new WeakMap, Ve = new WeakMap, es = new WeakMap, Ar = new WeakMap, Mt = new WeakSet, ln = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        fetchFailureCount: t.failureCount,
                        fetchFailureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return { ...r,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return { ...r,
                        ...jE(r.data, this.options),
                        fetchMeta: t.meta ?? null
                    };
                case "success":
                    return G(this, kr, void 0), { ...r,
                        data: t.data,
                        dataUpdateCount: r.dataUpdateCount + 1,
                        dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: !1,
                        status: "success",
                        ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const o = t.error;
                    return mu(o) && o.revert && N(this, kr) ? { ...N(this, kr),
                        fetchStatus: "idle"
                    } : { ...r,
                        error: o,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: o,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return { ...r,
                        isInvalidated: !0
                    };
                case "setState":
                    return { ...r,
                        ...t.state
                    }
            }
        };
        this.state = n(this.state), Ue.batch(() => {
            this.observers.forEach(r => {
                r.onQueryUpdate()
            }), N(this, ht).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Dg);

function jE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: t0(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}

function IE(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Wt, Og, _E = (Og = class extends ml {
        constructor(t = {}) {
            super();
            J(this, Wt);
            this.config = t, G(this, Wt, new Map)
        }
        build(t, n, r) {
            const o = n.queryKey,
                i = n.queryHash ?? mf(o, n);
            let s = this.get(i);
            return s || (s = new LE({
                client: t,
                queryKey: o,
                queryHash: i,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(o)
            }), this.add(s)), s
        }
        add(t) {
            N(this, Wt).has(t.queryHash) || (N(this, Wt).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = N(this, Wt).get(t.queryHash);
            n && (t.destroy(), n === t && N(this, Wt).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            Ue.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return N(this, Wt).get(t)
        }
        getAll() {
            return [...N(this, Wt).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => Pp(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => Pp(t, r)) : n
        }
        notify(t) {
            Ue.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            Ue.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            Ue.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, Wt = new WeakMap, Og),
    Kt, Be, Rr, Gt, Mn, Lg, VE = (Lg = class extends o0 {
        constructor(t) {
            super();
            J(this, Gt);
            J(this, Kt);
            J(this, Be);
            J(this, Rr);
            this.mutationId = t.mutationId, G(this, Be, t.mutationCache), G(this, Kt, []), this.state = t.state || FE(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = t, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            N(this, Kt).includes(t) || (N(this, Kt).push(t), this.clearGcTimeout(), N(this, Be).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            G(this, Kt, N(this, Kt).filter(n => n !== t)), this.scheduleGc(), N(this, Be).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            N(this, Kt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Be).remove(this))
        }
        continue () {
            var t;
            return ((t = N(this, Rr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, s, a, l, u, c, d, f, h, v, g, w, m, p, y, S, E, T, b, k;
            const n = () => {
                je(this, Gt, Mn).call(this, {
                    type: "continue"
                })
            };
            G(this, Rr, r0({
                fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                onFail: (D, A) => {
                    je(this, Gt, Mn).call(this, {
                        type: "failed",
                        failureCount: D,
                        error: A
                    })
                },
                onPause: () => {
                    je(this, Gt, Mn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: n,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => N(this, Be).canRun(this)
            }));
            const r = this.state.status === "pending",
                o = !N(this, Rr).canStart();
            try {
                if (r) n();
                else {
                    je(this, Gt, Mn).call(this, {
                        type: "pending",
                        variables: t,
                        isPaused: o
                    }), await ((s = (i = N(this, Be).config).onMutate) == null ? void 0 : s.call(i, t, this));
                    const A = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                    A !== this.state.context && je(this, Gt, Mn).call(this, {
                        type: "pending",
                        context: A,
                        variables: t,
                        isPaused: o
                    })
                }
                const D = await N(this, Rr).start();
                return await ((c = (u = N(this, Be).config).onSuccess) == null ? void 0 : c.call(u, D, t, this.state.context, this)), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, D, t, this.state.context)), await ((v = (h = N(this, Be).config).onSettled) == null ? void 0 : v.call(h, D, null, this.state.variables, this.state.context, this)), await ((w = (g = this.options).onSettled) == null ? void 0 : w.call(g, D, null, t, this.state.context)), je(this, Gt, Mn).call(this, {
                    type: "success",
                    data: D
                }), D
            } catch (D) {
                try {
                    throw await ((p = (m = N(this, Be).config).onError) == null ? void 0 : p.call(m, D, t, this.state.context, this)), await ((S = (y = this.options).onError) == null ? void 0 : S.call(y, D, t, this.state.context)), await ((T = (E = N(this, Be).config).onSettled) == null ? void 0 : T.call(E, void 0, D, this.state.variables, this.state.context, this)), await ((k = (b = this.options).onSettled) == null ? void 0 : k.call(b, void 0, D, t, this.state.context)), D
                } finally {
                    je(this, Gt, Mn).call(this, {
                        type: "error",
                        error: D
                    })
                }
            } finally {
                N(this, Be).runNext(this)
            }
        }
    }, Kt = new WeakMap, Be = new WeakMap, Rr = new WeakMap, Gt = new WeakSet, Mn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return { ...r,
                        failureCount: t.failureCount,
                        failureReason: t.error
                    };
                case "pause":
                    return { ...r,
                        isPaused: !0
                    };
                case "continue":
                    return { ...r,
                        isPaused: !1
                    };
                case "pending":
                    return { ...r,
                        context: t.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: t.isPaused,
                        status: "pending",
                        variables: t.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return { ...r,
                        data: t.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: !1
                    };
                case "error":
                    return { ...r,
                        data: void 0,
                        error: t.error,
                        failureCount: r.failureCount + 1,
                        failureReason: t.error,
                        isPaused: !1,
                        status: "error"
                    }
            }
        };
        this.state = n(this.state), Ue.batch(() => {
            N(this, Kt).forEach(r => {
                r.onMutationUpdate(t)
            }), N(this, Be).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Lg);

function FE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var dn, Dt, ts, jg, zE = (jg = class extends ml {
    constructor(t = {}) {
        super();
        J(this, dn);
        J(this, Dt);
        J(this, ts);
        this.config = t, G(this, dn, new Set), G(this, Dt, new Map), G(this, ts, 0)
    }
    build(t, n, r) {
        const o = new VE({
            mutationCache: this,
            mutationId: ++ys(this, ts)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(o), o
    }
    add(t) {
        N(this, dn).add(t);
        const n = js(t);
        if (typeof n == "string") {
            const r = N(this, Dt).get(n);
            r ? r.push(t) : N(this, Dt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, dn).delete(t)) {
            const n = js(t);
            if (typeof n == "string") {
                const r = N(this, Dt).get(n);
                if (r)
                    if (r.length > 1) {
                        const o = r.indexOf(t);
                        o !== -1 && r.splice(o, 1)
                    } else r[0] === t && N(this, Dt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = js(t);
        if (typeof n == "string") {
            const r = N(this, Dt).get(n),
                o = r == null ? void 0 : r.find(i => i.state.status === "pending");
            return !o || o === t
        } else return !0
    }
    runNext(t) {
        var r;
        const n = js(t);
        if (typeof n == "string") {
            const o = (r = N(this, Dt).get(n)) == null ? void 0 : r.find(i => i !== t && i.state.isPaused);
            return (o == null ? void 0 : o.continue()) ?? Promise.resolve()
        } else return Promise.resolve()
    }
    clear() {
        Ue.batch(() => {
            N(this, dn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }), N(this, dn).clear(), N(this, Dt).clear()
        })
    }
    getAll() {
        return Array.from(N(this, dn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => Ap(n, r))
    }
    findAll(t = {}) {
        return this.getAll().filter(n => Ap(t, n))
    }
    notify(t) {
        Ue.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ue.batch(() => Promise.all(t.map(n => n.continue().catch(Nt))))
    }
}, dn = new WeakMap, Dt = new WeakMap, ts = new WeakMap, jg);

function js(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}

function Mp(e) {
    return {
        onFetch: (t, n) => {
            var c, d, f, h, v;
            const r = t.options,
                o = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction,
                i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
                s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
            let a = {
                    pages: [],
                    pageParams: []
                },
                l = 0;
            const u = async () => {
                let g = !1;
                const w = y => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? g = !0 : t.signal.addEventListener("abort", () => {
                                g = !0
                            }), t.signal)
                        })
                    },
                    m = Jv(t.options, t.fetchOptions),
                    p = async (y, S, E) => {
                        if (g) return Promise.reject();
                        if (S == null && y.pages.length) return Promise.resolve(y);
                        const b = (() => {
                                const _ = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: S,
                                    direction: E ? "backward" : "forward",
                                    meta: t.options.meta
                                };
                                return w(_), _
                            })(),
                            k = await m(b),
                            {
                                maxPages: D
                            } = t.options,
                            A = E ? PE : kE;
                        return {
                            pages: A(y.pages, k, D),
                            pageParams: A(y.pageParams, S, D)
                        }
                    };
                if (o && i.length) {
                    const y = o === "backward",
                        S = y ? BE : Dp,
                        E = {
                            pages: i,
                            pageParams: s
                        },
                        T = S(r, E);
                    a = await p(E, T, y)
                } else {
                    const y = e ?? i.length;
                    do {
                        const S = l === 0 ? s[0] ?? r.initialPageParam : Dp(r, a);
                        if (l > 0 && S == null) break;
                        a = await p(a, S), l++
                    } while (l < y)
                }
                return a
            };
            t.options.persister ? t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null ? void 0 : w.call(g, u, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = u
        }
    }
}

function Dp(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}

function BE(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ge, zn, Bn, bo, ko, $n, Po, Ao, Ig, $E = (Ig = class {
        constructor(e = {}) {
            J(this, ge);
            J(this, zn);
            J(this, Bn);
            J(this, bo);
            J(this, ko);
            J(this, $n);
            J(this, Po);
            J(this, Ao);
            G(this, ge, e.queryCache || new _E), G(this, zn, e.mutationCache || new zE), G(this, Bn, e.defaultOptions || {}), G(this, bo, new Map), G(this, ko, new Map), G(this, $n, 0)
        }
        mount() {
            ys(this, $n)._++, N(this, $n) === 1 && (G(this, Po, e0.subscribe(async e => {
                e && (await this.resumePausedMutations(), N(this, ge).onFocus())
            })), G(this, Ao, Ia.subscribe(async e => {
                e && (await this.resumePausedMutations(), N(this, ge).onOnline())
            })))
        }
        unmount() {
            var e, t;
            ys(this, $n)._--, N(this, $n) === 0 && ((e = N(this, Po)) == null || e.call(this), G(this, Po, void 0), (t = N(this, Ao)) == null || t.call(this), G(this, Ao, void 0))
        }
        isFetching(e) {
            return N(this, ge).findAll({ ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return N(this, zn).findAll({ ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = N(this, ge).get(t.queryHash)) == null ? void 0 : n.state.data
        }
        ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
                n = N(this, ge).build(this, t),
                r = n.state.data;
            return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Mc(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r))
        }
        getQueriesData(e) {
            return N(this, ge).findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({
                    queryKey: e
                }),
                o = N(this, ge).get(r.queryHash),
                i = o == null ? void 0 : o.state.data,
                s = xE(t, i);
            if (s !== void 0) return N(this, ge).build(this, r).setData(s, { ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return Ue.batch(() => N(this, ge).findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({
                queryKey: e
            });
            return (n = N(this, ge).get(t.queryHash)) == null ? void 0 : n.state
        }
        removeQueries(e) {
            const t = N(this, ge);
            Ue.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = N(this, ge);
            return Ue.batch(() => (n.findAll(e).forEach(r => {
                r.reset()
            }), this.refetchQueries({
                type: "active",
                ...e
            }, t)))
        }
        cancelQueries(e, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = Ue.batch(() => N(this, ge).findAll(e).map(o => o.cancel(n)));
            return Promise.all(r).then(Nt).catch(Nt)
        }
        invalidateQueries(e, t = {}) {
            return Ue.batch(() => (N(this, ge).findAll(e).forEach(n => {
                n.invalidate()
            }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({ ...e,
                type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
            }, t)))
        }
        refetchQueries(e, t = {}) {
            const n = { ...t,
                    cancelRefetch: t.cancelRefetch ?? !0
                },
                r = Ue.batch(() => N(this, ge).findAll(e).filter(o => !o.isDisabled() && !o.isStatic()).map(o => {
                    let i = o.fetch(void 0, n);
                    return n.throwOnError || (i = i.catch(Nt)), o.state.fetchStatus === "paused" ? Promise.resolve() : i
                }));
            return Promise.all(r).then(Nt)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = N(this, ge).build(this, t);
            return n.isStaleByTime(Mc(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(Nt).catch(Nt)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Mp(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(Nt).catch(Nt)
        }
        ensureInfiniteQueryData(e) {
            return e.behavior = Mp(e.pages), this.ensureQueryData(e)
        }
        resumePausedMutations() {
            return Ia.isOnline() ? N(this, zn).resumePausedMutations() : Promise.resolve()
        }
        getQueryCache() {
            return N(this, ge)
        }
        getMutationCache() {
            return N(this, zn)
        }
        getDefaultOptions() {
            return N(this, Bn)
        }
        setDefaultOptions(e) {
            G(this, Bn, e)
        }
        setQueryDefaults(e, t) {
            N(this, bo).set(Ki(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...N(this, bo).values()],
                n = {};
            return t.forEach(r => {
                Gi(e, r.queryKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        setMutationDefaults(e, t) {
            N(this, ko).set(Ki(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...N(this, ko).values()],
                n = {};
            return t.forEach(r => {
                Gi(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
            }), n
        }
        defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = { ...N(this, Bn).queries,
                ...this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = mf(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === gf && (t.enabled = !1), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : { ...N(this, Bn).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            N(this, ge).clear(), N(this, zn).clear()
        }
    }, ge = new WeakMap, zn = new WeakMap, Bn = new WeakMap, bo = new WeakMap, ko = new WeakMap, $n = new WeakMap, Po = new WeakMap, Ao = new WeakMap, Ig),
    UE = x.createContext(void 0),
    HE = ({
        client: e,
        children: t
    }) => (x.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), C.jsx(UE.Provider, {
        value: e,
        children: t
    }));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _a() {
    return _a = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, _a.apply(this, arguments)
}
var Wn;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Wn || (Wn = {}));
const Op = "popstate";

function WE(e) {
    e === void 0 && (e = {});

    function t(r, o) {
        let {
            pathname: i,
            search: s,
            hash: a
        } = r.location;
        return Oc("", {
            pathname: i,
            search: s,
            hash: a
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }

    function n(r, o) {
        return typeof o == "string" ? o : s0(o)
    }
    return GE(t, n, null, e)
}

function nt(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function i0(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function KE() {
    return Math.random().toString(36).substr(2, 8)
}

function Lp(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function Oc(e, t, n, r) {
    return n === void 0 && (n = null), _a({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? yl(t) : t, {
        state: n,
        key: t && t.key || r || KE()
    })
}

function s0(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function yl(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function GE(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: o = document.defaultView,
        v5Compat: i = !1
    } = r, s = o.history, a = Wn.Pop, l = null, u = c();
    u == null && (u = 0, s.replaceState(_a({}, s.state, {
        idx: u
    }), ""));

    function c() {
        return (s.state || {
            idx: null
        }).idx
    }

    function d() {
        a = Wn.Pop;
        let w = c(),
            m = w == null ? null : w - u;
        u = w, l && l({
            action: a,
            location: g.location,
            delta: m
        })
    }

    function f(w, m) {
        a = Wn.Push;
        let p = Oc(g.location, w, m);
        u = c() + 1;
        let y = Lp(p, u),
            S = g.createHref(p);
        try {
            s.pushState(y, "", S)
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            o.location.assign(S)
        }
        i && l && l({
            action: a,
            location: g.location,
            delta: 1
        })
    }

    function h(w, m) {
        a = Wn.Replace;
        let p = Oc(g.location, w, m);
        u = c();
        let y = Lp(p, u),
            S = g.createHref(p);
        s.replaceState(y, "", S), i && l && l({
            action: a,
            location: g.location,
            delta: 0
        })
    }

    function v(w) {
        let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
            p = typeof w == "string" ? w : s0(w);
        return p = p.replace(/ $/, "%20"), nt(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }
    let g = {
        get action() {
            return a
        },
        get location() {
            return e(o, s)
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return o.addEventListener(Op, d), l = w, () => {
                o.removeEventListener(Op, d), l = null
            }
        },
        createHref(w) {
            return t(o, w)
        },
        createURL: v,
        encodeLocation(w) {
            let m = v(w);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: f,
        replace: h,
        go(w) {
            return s.go(w)
        }
    };
    return g
}
var jp;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(jp || (jp = {}));

function QE(e, t, n) {
    return n === void 0 && (n = "/"), YE(e, t, n, !1)
}

function YE(e, t, n, r) {
    let o = typeof t == "string" ? yl(t) : t,
        i = u0(o.pathname || "/", n);
    if (i == null) return null;
    let s = a0(e);
    XE(s);
    let a = null;
    for (let l = 0; a == null && l < s.length; ++l) {
        let u = aT(i);
        a = iT(s[l], u, r)
    }
    return a
}

function a0(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (i, s, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        l.relativePath.startsWith("/") && (nt(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
        let u = vo([r, l.relativePath]),
            c = n.concat(l);
        i.children && i.children.length > 0 && (nt(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), a0(i.children, t, c, u)), !(i.path == null && !i.index) && t.push({
            path: u,
            score: rT(u, i.index),
            routesMeta: c
        })
    };
    return e.forEach((i, s) => {
        var a;
        if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, s);
        else
            for (let l of l0(i.path)) o(i, s, l)
    }), t
}

function l0(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [i, ""] : [i];
    let s = l0(r.join("/")),
        a = [];
    return a.push(...s.map(l => l === "" ? i : [i, l].join("/"))), o && a.push(...s), a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}

function XE(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : oT(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const qE = /^:[\w-]+$/,
    ZE = 3,
    JE = 2,
    eT = 1,
    tT = 10,
    nT = -2,
    Ip = e => e === "*";

function rT(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(Ip) && (r += nT), t && (r += JE), n.filter(o => !Ip(o)).reduce((o, i) => o + (qE.test(i) ? ZE : i === "" ? eT : tT), r)
}

function oT(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function iT(e, t, n) {
    let {
        routesMeta: r
    } = e, o = {}, i = "/", s = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            d = _p({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: u
            }, c),
            f = l.route;
        if (!d && u && n && !r[r.length - 1].route.index && (d = _p({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: !1
            }, c)), !d) return null;
        Object.assign(o, d.params), s.push({
            params: o,
            pathname: vo([i, d.pathname]),
            pathnameBase: lT(vo([i, d.pathnameBase])),
            route: f
        }), d.pathnameBase !== "/" && (i = vo([i, d.pathnameBase]))
    }
    return s
}

function _p(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = sT(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let i = o[0],
        s = i.replace(/(.)\/+$/, "$1"),
        a = o.slice(1);
    return {
        params: r.reduce((u, c, d) => {
            let {
                paramName: f,
                isOptional: h
            } = c;
            if (f === "*") {
                let g = a[d] || "";
                s = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1")
            }
            const v = a[d];
            return h && !v ? u[f] = void 0 : u[f] = (v || "").replace(/%2F/g, "/"), u
        }, {}),
        pathname: i,
        pathnameBase: s,
        pattern: e
    }
}

function sT(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), i0(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, a, l) => (r.push({
            paramName: a,
            isOptional: l != null
        }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r]
}

function aT(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return i0(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function u0(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
const vo = e => e.join("/").replace(/\/\/+/g, "/"),
    lT = e => e.replace(/\/+$/, "").replace(/^\/*/, "/");

function uT(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const c0 = ["post", "put", "patch", "delete"];
new Set(c0);
const cT = ["get", ...c0];
new Set(cT);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Va() {
    return Va = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, Va.apply(this, arguments)
}
const dT = x.createContext(null),
    fT = x.createContext(null),
    d0 = x.createContext(null),
    vl = x.createContext(null),
    wl = x.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    f0 = x.createContext(null);

function yf() {
    return x.useContext(vl) != null
}

function h0() {
    return yf() || nt(!1), x.useContext(vl).location
}

function hT(e, t) {
    return pT(e, t)
}

function pT(e, t, n, r) {
    yf() || nt(!1);
    let {
        navigator: o
    } = x.useContext(d0), {
        matches: i
    } = x.useContext(wl), s = i[i.length - 1], a = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let u = h0(),
        c;
    if (t) {
        var d;
        let w = typeof t == "string" ? yl(t) : t;
        l === "/" || (d = w.pathname) != null && d.startsWith(l) || nt(!1), c = w
    } else c = u;
    let f = c.pathname || "/",
        h = f;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let v = QE(e, {
            pathname: h
        }),
        g = wT(v && v.map(w => Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: vo([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
            pathnameBase: w.pathnameBase === "/" ? l : vo([l, o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
        })), i, n, r);
    return t && g ? x.createElement(vl.Provider, {
        value: {
            location: Va({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, c),
            navigationType: Wn.Pop
        }
    }, g) : g
}

function mT() {
    let e = ET(),
        t = uT(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unexpected Application Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: o
    }, n) : null, null)
}
const gT = x.createElement(mT, null);
class yT extends x.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? x.createElement(wl.Provider, {
            value: this.props.routeContext
        }, x.createElement(f0.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function vT(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, o = x.useContext(dT);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), x.createElement(wl.Provider, {
        value: t
    }, r)
}

function wT(e, t, n, r) {
    var o;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
        else return null
    }
    let s = e,
        a = (o = n) == null ? void 0 : o.errors;
    if (a != null) {
        let c = s.findIndex(d => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0);
        c >= 0 || nt(!1), s = s.slice(0, Math.min(s.length, c + 1))
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < s.length; c++) {
            let d = s[c];
            if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c), d.route.id) {
                let {
                    loaderData: f,
                    errors: h
                } = n, v = d.route.loader && f[d.route.id] === void 0 && (!h || h[d.route.id] === void 0);
                if (d.route.lazy || v) {
                    l = !0, u >= 0 ? s = s.slice(0, u + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((c, d, f) => {
        let h, v = !1,
            g = null,
            w = null;
        n && (h = a && d.route.id ? a[d.route.id] : void 0, g = d.route.errorElement || gT, l && (u < 0 && f === 0 ? (v = !0, w = null) : u === f && (v = !0, w = d.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, f + 1)),
            p = () => {
                let y;
                return h ? y = g : v ? y = w : d.route.Component ? y = x.createElement(d.route.Component, null) : d.route.element ? y = d.route.element : y = c, x.createElement(vT, {
                    match: d,
                    routeContext: {
                        outlet: c,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: y
                })
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0) ? x.createElement(yT, {
            location: n.location,
            revalidation: n.revalidation,
            component: g,
            error: h,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var Lc = function(e) {
    return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
}(Lc || {});

function xT(e) {
    let t = x.useContext(fT);
    return t || nt(!1), t
}

function ST(e) {
    let t = x.useContext(wl);
    return t || nt(!1), t
}

function CT(e) {
    let t = ST(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || nt(!1), n.route.id
}

function ET() {
    var e;
    let t = x.useContext(f0),
        n = xT(Lc.UseRouteError),
        r = CT(Lc.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function TT(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath
}

function jc(e) {
    nt(!1)
}

function bT(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Wn.Pop,
        navigator: i,
        static: s = !1,
        future: a
    } = e;
    yf() && nt(!1);
    let l = t.replace(/^\/*/, "/"),
        u = x.useMemo(() => ({
            basename: l,
            navigator: i,
            static: s,
            future: Va({
                v7_relativeSplatPath: !1
            }, a)
        }), [l, a, i, s]);
    typeof r == "string" && (r = yl(r));
    let {
        pathname: c = "/",
        search: d = "",
        hash: f = "",
        state: h = null,
        key: v = "default"
    } = r, g = x.useMemo(() => {
        let w = u0(c, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: d,
                hash: f,
                state: h,
                key: v
            },
            navigationType: o
        }
    }, [l, c, d, f, h, v, o]);
    return g == null ? null : x.createElement(d0.Provider, {
        value: u
    }, x.createElement(vl.Provider, {
        children: n,
        value: g
    }))
}

function kT(e) {
    let {
        children: t,
        location: n
    } = e;
    return hT(Ic(t), n)
}
new Promise(() => {});

function Ic(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r, o) => {
        if (!x.isValidElement(r)) return;
        let i = [...t, o];
        if (r.type === x.Fragment) {
            n.push.apply(n, Ic(r.props.children, i));
            return
        }
        r.type !== jc && nt(!1), !r.props.index || !r.props.children || nt(!1);
        let s = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ic(r.props.children, i)), n.push(s)
    }), n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const PT = "6";
try {
    window.__reactRouterVersion = PT
} catch {}
const AT = "startTransition",
    Vp = Ed[AT];

function RT(e) {
    let {
        basename: t,
        children: n,
        future: r,
        window: o
    } = e, i = x.useRef();
    i.current == null && (i.current = WE({
        window: o,
        v5Compat: !0
    }));
    let s = i.current,
        [a, l] = x.useState({
            action: s.action,
            location: s.location
        }),
        {
            v7_startTransition: u
        } = r || {},
        c = x.useCallback(d => {
            u && Vp ? Vp(() => l(d)) : l(d)
        }, [l, u]);
    return x.useLayoutEffect(() => s.listen(c), [s, c]), x.useEffect(() => TT(r), [r]), x.createElement(bT, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: s,
        future: r
    })
}
var Fp;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(Fp || (Fp = {}));
var zp;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(zp || (zp = {}));
var Bp = ["light", "dark"],
    NT = "(prefers-color-scheme: dark)",
    MT = x.createContext(void 0),
    DT = {
        setTheme: e => {},
        themes: []
    },
    OT = () => {
        var e;
        return (e = x.useContext(MT)) != null ? e : DT
    };
x.memo(({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: a,
    nonce: l
}) => {
    let u = i === "system",
        c = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(v=>`'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
        d = o ? Bp.includes(i) && i ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
        f = (v, g = !1, w = !0) => {
            let m = s ? s[v] : v,
                p = g ? v + "|| ''" : `'${m}'`,
                y = "";
            return o && w && !g && Bp.includes(v) && (y += `d.style.colorScheme = '${v}';`), n === "class" ? g || m ? y += `c.add(${p})` : y += "null" : m && (y += `d[s](n,${p})`), y
        },
        h = e ? `!function(){${c}${f(e)}}()` : r ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${NT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}${u?"":"else{"+f(i,!1,!1)+"}"}${d}}catch(e){}}()` : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${f(s?"x[e]":"e",!0)}}else{${f(i,!1,!1)};}${d}}catch(t){}}();`;
    return x.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: h
        }
    })
});
var LT = e => {
        switch (e) {
            case "success":
                return _T;
            case "info":
                return FT;
            case "warning":
                return VT;
            case "error":
                return zT;
            default:
                return null
        }
    },
    jT = Array(12).fill(0),
    IT = ({
        visible: e,
        className: t
    }) => M.createElement("div", {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e
    }, M.createElement("div", {
        className: "sonner-spinner"
    }, jT.map((n, r) => M.createElement("div", {
        className: "sonner-loading-bar",
        key: `spinner-bar-${r}`
    })))),
    _T = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
        clipRule: "evenodd"
    })),
    VT = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
        clipRule: "evenodd"
    })),
    FT = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
        clipRule: "evenodd"
    })),
    zT = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        height: "20",
        width: "20"
    }, M.createElement("path", {
        fillRule: "evenodd",
        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
        clipRule: "evenodd"
    })),
    BT = M.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "12",
        height: "12",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    }, M.createElement("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
    }), M.createElement("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
    })),
    $T = () => {
        let [e, t] = M.useState(document.hidden);
        return M.useEffect(() => {
            let n = () => {
                t(document.hidden)
            };
            return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n)
        }, []), e
    },
    _c = 1,
    UT = class {
        constructor() {
            this.subscribe = e => (this.subscribers.push(e), () => {
                let t = this.subscribers.indexOf(e);
                this.subscribers.splice(t, 1)
            }), this.publish = e => {
                this.subscribers.forEach(t => t(e))
            }, this.addToast = e => {
                this.publish(e), this.toasts = [...this.toasts, e]
            }, this.create = e => {
                var t;
                let {
                    message: n,
                    ...r
                } = e, o = typeof(e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : _c++, i = this.toasts.find(a => a.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
                return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), i ? this.toasts = this.toasts.map(a => a.id === o ? (this.publish({ ...a,
                    ...e,
                    id: o,
                    title: n
                }), { ...a,
                    ...e,
                    id: o,
                    dismissible: s,
                    title: n
                }) : a) : this.addToast({
                    title: n,
                    ...r,
                    dismissible: s,
                    id: o
                }), o
            }, this.dismiss = e => (this.dismissedToasts.add(e), e || this.toasts.forEach(t => {
                this.subscribers.forEach(n => n({
                    id: t.id,
                    dismiss: !0
                }))
            }), this.subscribers.forEach(t => t({
                id: e,
                dismiss: !0
            })), e), this.message = (e, t) => this.create({ ...t,
                message: e
            }), this.error = (e, t) => this.create({ ...t,
                message: e,
                type: "error"
            }), this.success = (e, t) => this.create({ ...t,
                type: "success",
                message: e
            }), this.info = (e, t) => this.create({ ...t,
                type: "info",
                message: e
            }), this.warning = (e, t) => this.create({ ...t,
                type: "warning",
                message: e
            }), this.loading = (e, t) => this.create({ ...t,
                type: "loading",
                message: e
            }), this.promise = (e, t) => {
                if (!t) return;
                let n;
                t.loading !== void 0 && (n = this.create({ ...t,
                    promise: e,
                    type: "loading",
                    message: t.loading,
                    description: typeof t.description != "function" ? t.description : void 0
                }));
                let r = e instanceof Promise ? e : e(),
                    o = n !== void 0,
                    i, s = r.then(async l => {
                        if (i = ["resolve", l], M.isValidElement(l)) o = !1, this.create({
                            id: n,
                            type: "default",
                            message: l
                        });
                        else if (WT(l) && !l.ok) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error,
                                c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        } else if (t.success !== void 0) {
                            o = !1;
                            let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "success",
                                message: u,
                                description: c
                            })
                        }
                    }).catch(async l => {
                        if (i = ["reject", l], t.error !== void 0) {
                            o = !1;
                            let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                c = typeof t.description == "function" ? await t.description(l) : t.description;
                            this.create({
                                id: n,
                                type: "error",
                                message: u,
                                description: c
                            })
                        }
                    }).finally(() => {
                        var l;
                        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t)
                    }),
                    a = () => new Promise((l, u) => s.then(() => i[0] === "reject" ? u(i[1]) : l(i[1])).catch(u));
                return typeof n != "string" && typeof n != "number" ? {
                    unwrap: a
                } : Object.assign(n, {
                    unwrap: a
                })
            }, this.custom = (e, t) => {
                let n = (t == null ? void 0 : t.id) || _c++;
                return this.create({
                    jsx: e(n),
                    id: n,
                    ...t
                }), n
            }, this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
        }
    },
    Ye = new UT,
    HT = (e, t) => {
        let n = (t == null ? void 0 : t.id) || _c++;
        return Ye.addToast({
            title: e,
            ...t,
            id: n
        }), n
    },
    WT = e => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number",
    KT = HT,
    GT = () => Ye.toasts,
    QT = () => Ye.getActiveToasts();
Object.assign(KT, {
    success: Ye.success,
    info: Ye.info,
    warning: Ye.warning,
    error: Ye.error,
    custom: Ye.custom,
    message: Ye.message,
    promise: Ye.promise,
    dismiss: Ye.dismiss,
    loading: Ye.loading
}, {
    getHistory: GT,
    getToasts: QT
});

function YT(e, {
    insertAt: t
} = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
YT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);

function Is(e) {
    return e.label !== void 0
}
var XT = 3,
    qT = "32px",
    ZT = "16px",
    $p = 4e3,
    JT = 356,
    eb = 14,
    tb = 20,
    nb = 200;

function kt(...e) {
    return e.filter(Boolean).join(" ")
}

function rb(e) {
    let [t, n] = e.split("-"), r = [];
    return t && r.push(t), n && r.push(n), r
}
var ob = e => {
    var t, n, r, o, i, s, a, l, u, c, d;
    let {
        invert: f,
        toast: h,
        unstyled: v,
        interacting: g,
        setHeights: w,
        visibleToasts: m,
        heights: p,
        index: y,
        toasts: S,
        expanded: E,
        removeToast: T,
        defaultRichColors: b,
        closeButton: k,
        style: D,
        cancelButtonStyle: A,
        actionButtonStyle: _,
        className: j = "",
        descriptionClassName: U = "",
        duration: L,
        position: H,
        gap: z,
        loadingIcon: W,
        expandByDefault: P,
        classNames: R,
        icons: I,
        closeButtonAriaLabel: $ = "Close toast",
        pauseWhenPageIsHidden: B
    } = e, [Y, q] = M.useState(null), [xe, Le] = M.useState(null), [ee, $r] = M.useState(!1), [Cn, fr] = M.useState(!1), [En, Ur] = M.useState(!1), [Tn, ps] = M.useState(!1), [Vl, ms] = M.useState(!1), [Fl, qo] = M.useState(0), [Hr, dh] = M.useState(0), Zo = M.useRef(h.duration || L || $p), fh = M.useRef(null), hr = M.useRef(null), F1 = y === 0, z1 = y + 1 <= m, ft = h.type, Wr = h.dismissible !== !1, B1 = h.className || "", $1 = h.descriptionClassName || "", gs = M.useMemo(() => p.findIndex(K => K.toastId === h.id) || 0, [p, h.id]), U1 = M.useMemo(() => {
        var K;
        return (K = h.closeButton) != null ? K : k
    }, [h.closeButton, k]), hh = M.useMemo(() => h.duration || L || $p, [h.duration, L]), zl = M.useRef(0), Kr = M.useRef(0), ph = M.useRef(0), Gr = M.useRef(null), [H1, W1] = H.split("-"), mh = M.useMemo(() => p.reduce((K, re, ce) => ce >= gs ? K : K + re.height, 0), [p, gs]), gh = $T(), K1 = h.invert || f, Bl = ft === "loading";
    Kr.current = M.useMemo(() => gs * z + mh, [gs, mh]), M.useEffect(() => {
        Zo.current = hh
    }, [hh]), M.useEffect(() => {
        $r(!0)
    }, []), M.useEffect(() => {
        let K = hr.current;
        if (K) {
            let re = K.getBoundingClientRect().height;
            return dh(re), w(ce => [{
                toastId: h.id,
                height: re,
                position: h.position
            }, ...ce]), () => w(ce => ce.filter(Ct => Ct.toastId !== h.id))
        }
    }, [w, h.id]), M.useLayoutEffect(() => {
        if (!ee) return;
        let K = hr.current,
            re = K.style.height;
        K.style.height = "auto";
        let ce = K.getBoundingClientRect().height;
        K.style.height = re, dh(ce), w(Ct => Ct.find(Et => Et.toastId === h.id) ? Ct.map(Et => Et.toastId === h.id ? { ...Et,
            height: ce
        } : Et) : [{
            toastId: h.id,
            height: ce,
            position: h.position
        }, ...Ct])
    }, [ee, h.title, h.description, w, h.id]);
    let bn = M.useCallback(() => {
        fr(!0), qo(Kr.current), w(K => K.filter(re => re.toastId !== h.id)), setTimeout(() => {
            T(h)
        }, nb)
    }, [h, T, w, Kr]);
    M.useEffect(() => {
        if (h.promise && ft === "loading" || h.duration === 1 / 0 || h.type === "loading") return;
        let K;
        return E || g || B && gh ? (() => {
            if (ph.current < zl.current) {
                let re = new Date().getTime() - zl.current;
                Zo.current = Zo.current - re
            }
            ph.current = new Date().getTime()
        })() : Zo.current !== 1 / 0 && (zl.current = new Date().getTime(), K = setTimeout(() => {
            var re;
            (re = h.onAutoClose) == null || re.call(h, h), bn()
        }, Zo.current)), () => clearTimeout(K)
    }, [E, g, h, ft, B, gh, bn]), M.useEffect(() => {
        h.delete && bn()
    }, [bn, h.delete]);

    function G1() {
        var K, re, ce;
        return I != null && I.loading ? M.createElement("div", {
            className: kt(R == null ? void 0 : R.loader, (K = h == null ? void 0 : h.classNames) == null ? void 0 : K.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, I.loading) : W ? M.createElement("div", {
            className: kt(R == null ? void 0 : R.loader, (re = h == null ? void 0 : h.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": ft === "loading"
        }, W) : M.createElement(IT, {
            className: kt(R == null ? void 0 : R.loader, (ce = h == null ? void 0 : h.classNames) == null ? void 0 : ce.loader),
            visible: ft === "loading"
        })
    }
    return M.createElement("li", {
        tabIndex: 0,
        ref: hr,
        className: kt(j, B1, R == null ? void 0 : R.toast, (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[ft], (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ft]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = h.richColors) != null ? r : b,
        "data-styled": !(h.jsx || h.unstyled || v),
        "data-mounted": ee,
        "data-promise": !!h.promise,
        "data-swiped": Vl,
        "data-removed": Cn,
        "data-visible": z1,
        "data-y-position": H1,
        "data-x-position": W1,
        "data-index": y,
        "data-front": F1,
        "data-swiping": En,
        "data-dismissible": Wr,
        "data-type": ft,
        "data-invert": K1,
        "data-swipe-out": Tn,
        "data-swipe-direction": xe,
        "data-expanded": !!(E || P && ee),
        style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${Cn?Fl:Kr.current}px`,
            "--initial-height": P ? "auto" : `${Hr}px`,
            ...D,
            ...h.style
        },
        onDragEnd: () => {
            Ur(!1), q(null), Gr.current = null
        },
        onPointerDown: K => {
            Bl || !Wr || (fh.current = new Date, qo(Kr.current), K.target.setPointerCapture(K.pointerId), K.target.tagName !== "BUTTON" && (Ur(!0), Gr.current = {
                x: K.clientX,
                y: K.clientY
            }))
        },
        onPointerUp: () => {
            var K, re, ce, Ct;
            if (Tn || !Wr) return;
            Gr.current = null;
            let Et = Number(((K = hr.current) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                kn = Number(((re = hr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                pr = new Date().getTime() - ((ce = fh.current) == null ? void 0 : ce.getTime()),
                Tt = Y === "x" ? Et : kn,
                Pn = Math.abs(Tt) / pr;
            if (Math.abs(Tt) >= tb || Pn > .11) {
                qo(Kr.current), (Ct = h.onDismiss) == null || Ct.call(h, h), Le(Y === "x" ? Et > 0 ? "right" : "left" : kn > 0 ? "down" : "up"), bn(), ps(!0), ms(!1);
                return
            }
            Ur(!1), q(null)
        },
        onPointerMove: K => {
            var re, ce, Ct, Et;
            if (!Gr.current || !Wr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0) return;
            let kn = K.clientY - Gr.current.y,
                pr = K.clientX - Gr.current.x,
                Tt = (ce = e.swipeDirections) != null ? ce : rb(H);
            !Y && (Math.abs(pr) > 1 || Math.abs(kn) > 1) && q(Math.abs(pr) > Math.abs(kn) ? "x" : "y");
            let Pn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Tt.includes("top") || Tt.includes("bottom")) && (Tt.includes("top") && kn < 0 || Tt.includes("bottom") && kn > 0) && (Pn.y = kn) : Y === "x" && (Tt.includes("left") || Tt.includes("right")) && (Tt.includes("left") && pr < 0 || Tt.includes("right") && pr > 0) && (Pn.x = pr), (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && ms(!0), (Ct = hr.current) == null || Ct.style.setProperty("--swipe-amount-x", `${Pn.x}px`), (Et = hr.current) == null || Et.style.setProperty("--swipe-amount-y", `${Pn.y}px`)
        }
    }, U1 && !h.jsx ? M.createElement("button", {
        "aria-label": $,
        "data-disabled": Bl,
        "data-close-button": !0,
        onClick: Bl || !Wr ? () => {} : () => {
            var K;
            bn(), (K = h.onDismiss) == null || K.call(h, h)
        },
        className: kt(R == null ? void 0 : R.closeButton, (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.closeButton)
    }, (i = I == null ? void 0 : I.close) != null ? i : BT) : null, h.jsx || x.isValidElement(h.title) ? h.jsx ? h.jsx : typeof h.title == "function" ? h.title() : h.title : M.createElement(M.Fragment, null, ft || h.icon || h.promise ? M.createElement("div", {
        "data-icon": "",
        className: kt(R == null ? void 0 : R.icon, (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.icon)
    }, h.promise || h.type === "loading" && !h.icon ? h.icon || G1() : null, h.type !== "loading" ? h.icon || (I == null ? void 0 : I[ft]) || LT(ft) : null) : null, M.createElement("div", {
        "data-content": "",
        className: kt(R == null ? void 0 : R.content, (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content)
    }, M.createElement("div", {
        "data-title": "",
        className: kt(R == null ? void 0 : R.title, (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title)
    }, typeof h.title == "function" ? h.title() : h.title), h.description ? M.createElement("div", {
        "data-description": "",
        className: kt(U, $1, R == null ? void 0 : R.description, (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description)
    }, typeof h.description == "function" ? h.description() : h.description) : null), x.isValidElement(h.cancel) ? h.cancel : h.cancel && Is(h.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: h.cancelButtonStyle || A,
        onClick: K => {
            var re, ce;
            Is(h.cancel) && Wr && ((ce = (re = h.cancel).onClick) == null || ce.call(re, K), bn())
        },
        className: kt(R == null ? void 0 : R.cancelButton, (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton)
    }, h.cancel.label) : null, x.isValidElement(h.action) ? h.action : h.action && Is(h.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: h.actionButtonStyle || _,
        onClick: K => {
            var re, ce;
            Is(h.action) && ((ce = (re = h.action).onClick) == null || ce.call(re, K), !K.defaultPrevented && bn())
        },
        className: kt(R == null ? void 0 : R.actionButton, (d = h == null ? void 0 : h.classNames) == null ? void 0 : d.actionButton)
    }, h.action.label) : null))
};

function Up() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}

function ib(e, t) {
    let n = {};
    return [e, t].forEach((r, o) => {
        let i = o === 1,
            s = i ? "--mobile-offset" : "--offset",
            a = i ? ZT : qT;

        function l(u) {
            ["top", "right", "bottom", "left"].forEach(c => {
                n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u
            })
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(u => {
            r[u] === void 0 ? n[`${s}-${u}`] = a : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]
        }) : l(a)
    }), n
}
var sb = x.forwardRef(function(e, t) {
    let {
        invert: n,
        position: r = "bottom-right",
        hotkey: o = ["altKey", "KeyT"],
        expand: i,
        closeButton: s,
        className: a,
        offset: l,
        mobileOffset: u,
        theme: c = "light",
        richColors: d,
        duration: f,
        style: h,
        visibleToasts: v = XT,
        toastOptions: g,
        dir: w = Up(),
        gap: m = eb,
        loadingIcon: p,
        icons: y,
        containerAriaLabel: S = "Notifications",
        pauseWhenPageIsHidden: E
    } = e, [T, b] = M.useState([]), k = M.useMemo(() => Array.from(new Set([r].concat(T.filter(B => B.position).map(B => B.position)))), [T, r]), [D, A] = M.useState([]), [_, j] = M.useState(!1), [U, L] = M.useState(!1), [H, z] = M.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = M.useRef(null), P = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R = M.useRef(null), I = M.useRef(!1), $ = M.useCallback(B => {
        b(Y => {
            var q;
            return (q = Y.find(xe => xe.id === B.id)) != null && q.delete || Ye.dismiss(B.id), Y.filter(({
                id: xe
            }) => xe !== B.id)
        })
    }, []);
    return M.useEffect(() => Ye.subscribe(B => {
        if (B.dismiss) {
            b(Y => Y.map(q => q.id === B.id ? { ...q,
                delete: !0
            } : q));
            return
        }
        setTimeout(() => {
            Xv.flushSync(() => {
                b(Y => {
                    let q = Y.findIndex(xe => xe.id === B.id);
                    return q !== -1 ? [...Y.slice(0, q), { ...Y[q],
                        ...B
                    }, ...Y.slice(q + 1)] : [B, ...Y]
                })
            })
        })
    }), []), M.useEffect(() => {
        if (c !== "system") {
            z(c);
            return
        }
        if (c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window > "u") return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({
                matches: Y
            }) => {
                z(Y ? "dark" : "light")
            })
        } catch {
            B.addListener(({
                matches: q
            }) => {
                try {
                    z(q ? "dark" : "light")
                } catch (xe) {
                    console.error(xe)
                }
            })
        }
    }, [c]), M.useEffect(() => {
        T.length <= 1 && j(!1)
    }, [T]), M.useEffect(() => {
        let B = Y => {
            var q, xe;
            o.every(Le => Y[Le] || Y.code === Le) && (j(!0), (q = W.current) == null || q.focus()), Y.code === "Escape" && (document.activeElement === W.current || (xe = W.current) != null && xe.contains(document.activeElement)) && j(!1)
        };
        return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B)
    }, [o]), M.useEffect(() => {
        if (W.current) return () => {
            R.current && (R.current.focus({
                preventScroll: !0
            }), R.current = null, I.current = !1)
        }
    }, [W.current]), M.createElement("section", {
        ref: t,
        "aria-label": `${S} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, k.map((B, Y) => {
        var q;
        let [xe, Le] = B.split("-");
        return T.length ? M.createElement("ol", {
            key: B,
            dir: w === "auto" ? Up() : w,
            tabIndex: -1,
            ref: W,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": H,
            "data-y-position": xe,
            "data-lifted": _ && T.length > 1 && !i,
            "data-x-position": Le,
            style: {
                "--front-toast-height": `${((q=D[0])==null?void 0:q.height)||0}px`,
                "--width": `${JT}px`,
                "--gap": `${m}px`,
                ...h,
                ...ib(l, u)
            },
            onBlur: ee => {
                I.current && !ee.currentTarget.contains(ee.relatedTarget) && (I.current = !1, R.current && (R.current.focus({
                    preventScroll: !0
                }), R.current = null))
            },
            onFocus: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || I.current || (I.current = !0, R.current = ee.relatedTarget)
            },
            onMouseEnter: () => j(!0),
            onMouseMove: () => j(!0),
            onMouseLeave: () => {
                U || j(!1)
            },
            onDragEnd: () => j(!1),
            onPointerDown: ee => {
                ee.target instanceof HTMLElement && ee.target.dataset.dismissible === "false" || L(!0)
            },
            onPointerUp: () => L(!1)
        }, T.filter(ee => !ee.position && Y === 0 || ee.position === B).map((ee, $r) => {
            var Cn, fr;
            return M.createElement(ob, {
                key: ee.id,
                icons: y,
                index: $r,
                toast: ee,
                defaultRichColors: d,
                duration: (Cn = g == null ? void 0 : g.duration) != null ? Cn : f,
                className: g == null ? void 0 : g.className,
                descriptionClassName: g == null ? void 0 : g.descriptionClassName,
                invert: n,
                visibleToasts: v,
                closeButton: (fr = g == null ? void 0 : g.closeButton) != null ? fr : s,
                interacting: U,
                position: B,
                style: g == null ? void 0 : g.style,
                unstyled: g == null ? void 0 : g.unstyled,
                classNames: g == null ? void 0 : g.classNames,
                cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                removeToast: $,
                toasts: T.filter(En => En.position == ee.position),
                heights: D.filter(En => En.position == ee.position),
                setHeights: A,
                expandByDefault: i,
                gap: m,
                loadingIcon: p,
                expanded: _,
                pauseWhenPageIsHidden: E,
                swipeDirections: e.swipeDirections
            })
        })) : null
    }))
});
const ab = ({ ...e
    }) => {
        const {
            theme: t = "system"
        } = OT();
        return C.jsx(sb, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                }
            },
            ...e
        })
    },
    lb = 1,
    ub = 1e6;
let gu = 0;

function cb() {
    return gu = (gu + 1) % Number.MAX_SAFE_INTEGER, gu.toString()
}
const yu = new Map,
    Hp = e => {
        if (yu.has(e)) return;
        const t = setTimeout(() => {
            yu.delete(e), Ti({
                type: "REMOVE_TOAST",
                toastId: e
            })
        }, ub);
        yu.set(e, t)
    },
    db = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e,
                    toasts: [t.toast, ...e.toasts].slice(0, lb)
                };
            case "UPDATE_TOAST":
                return { ...e,
                    toasts: e.toasts.map(n => n.id === t.toast.id ? { ...n,
                        ...t.toast
                    } : n)
                };
            case "DISMISS_TOAST":
                {
                    const {
                        toastId: n
                    } = t;
                    return n ? Hp(n) : e.toasts.forEach(r => {
                        Hp(r.id)
                    }),
                    { ...e,
                        toasts: e.toasts.map(r => r.id === n || n === void 0 ? { ...r,
                            open: !1
                        } : r)
                    }
                }
            case "REMOVE_TOAST":
                return t.toastId === void 0 ? { ...e,
                    toasts: []
                } : { ...e,
                    toasts: e.toasts.filter(n => n.id !== t.toastId)
                }
        }
    },
    na = [];
let ra = {
    toasts: []
};

function Ti(e) {
    ra = db(ra, e), na.forEach(t => {
        t(ra)
    })
}

function fb({ ...e
}) {
    const t = cb(),
        n = o => Ti({
            type: "UPDATE_TOAST",
            toast: { ...o,
                id: t
            }
        }),
        r = () => Ti({
            type: "DISMISS_TOAST",
            toastId: t
        });
    return Ti({
        type: "ADD_TOAST",
        toast: { ...e,
            id: t,
            open: !0,
            onOpenChange: o => {
                o || r()
            }
        }
    }), {
        id: t,
        dismiss: r,
        update: n
    }
}

function hb() {
    const [e, t] = x.useState(ra);
    return x.useEffect(() => (na.push(t), () => {
        const n = na.indexOf(t);
        n > -1 && na.splice(n, 1)
    }), [e]), { ...e,
        toast: fb,
        dismiss: n => Ti({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}

function we(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Wp(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function p0(...e) {
    return t => {
        let n = !1;
        const r = e.map(o => {
            const i = Wp(o, t);
            return !n && typeof i == "function" && (n = !0), i
        });
        if (n) return () => {
            for (let o = 0; o < r.length; o++) {
                const i = r[o];
                typeof i == "function" ? i() : Wp(e[o], null)
            }
        }
    }
}

function ut(...e) {
    return x.useCallback(p0(...e), e)
}

function Ho(e, t = []) {
    let n = [];

    function r(i, s) {
        const a = x.createContext(s),
            l = n.length;
        n = [...n, s];
        const u = d => {
            var m;
            const {
                scope: f,
                children: h,
                ...v
            } = d, g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a, w = x.useMemo(() => v, Object.values(v));
            return C.jsx(g.Provider, {
                value: w,
                children: h
            })
        };
        u.displayName = i + "Provider";

        function c(d, f) {
            var g;
            const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
                v = x.useContext(h);
            if (v) return v;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return [u, c]
    }
    const o = () => {
        const i = n.map(s => x.createContext(s));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return x.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return o.scopeName = e, [r, pb(o, ...t)]
}

function pb(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const s = r.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const d = l(i)[`__scope${u}`];
                return { ...a,
                    ...d
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${t.scopeName}`]: s
            }), [s])
        }
    };
    return n.scopeName = t.scopeName, n
}

function Vc(e) {
    const t = mb(e),
        n = x.forwardRef((r, o) => {
            const {
                children: i,
                ...s
            } = r, a = x.Children.toArray(i), l = a.find(yb);
            if (l) {
                const u = l.props.children,
                    c = a.map(d => d === l ? x.Children.count(u) > 1 ? x.Children.only(null) : x.isValidElement(u) ? u.props.children : null : d);
                return C.jsx(t, { ...s,
                    ref: o,
                    children: x.isValidElement(u) ? x.cloneElement(u, void 0, c) : null
                })
            }
            return C.jsx(t, { ...s,
                ref: o,
                children: i
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function mb(e) {
    const t = x.forwardRef((n, r) => {
        const {
            children: o,
            ...i
        } = n;
        if (x.isValidElement(o)) {
            const s = wb(o),
                a = vb(i, o.props);
            return o.type !== x.Fragment && (a.ref = r ? p0(r, s) : s), x.cloneElement(o, a)
        }
        return x.Children.count(o) > 1 ? x.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var m0 = Symbol("radix.slottable");

function gb(e) {
    const t = ({
        children: n
    }) => C.jsx(C.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`, t.__radixId = m0, t
}

function yb(e) {
    return x.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === m0
}

function vb(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...a) => {
            const l = i(...a);
            return o(...a), l
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function wb(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function g0(e) {
    const t = e + "CollectionProvider",
        [n, r] = Ho(t),
        [o, i] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        s = g => {
            const {
                scope: w,
                children: m
            } = g, p = M.useRef(null), y = M.useRef(new Map).current;
            return C.jsx(o, {
                scope: w,
                itemMap: y,
                collectionRef: p,
                children: m
            })
        };
    s.displayName = t;
    const a = e + "CollectionSlot",
        l = Vc(a),
        u = M.forwardRef((g, w) => {
            const {
                scope: m,
                children: p
            } = g, y = i(a, m), S = ut(w, y.collectionRef);
            return C.jsx(l, {
                ref: S,
                children: p
            })
        });
    u.displayName = a;
    const c = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = Vc(c),
        h = M.forwardRef((g, w) => {
            const {
                scope: m,
                children: p,
                ...y
            } = g, S = M.useRef(null), E = ut(w, S), T = i(c, m);
            return M.useEffect(() => (T.itemMap.set(S, {
                ref: S,
                ...y
            }), () => void T.itemMap.delete(S))), C.jsx(f, {
                [d]: "",
                ref: E,
                children: p
            })
        });
    h.displayName = c;

    function v(g) {
        const w = i(e + "CollectionConsumer", g);
        return M.useCallback(() => {
            const p = w.collectionRef.current;
            if (!p) return [];
            const y = Array.from(p.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort((T, b) => y.indexOf(T.ref.current) - y.indexOf(b.ref.current))
        }, [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: s,
        Slot: u,
        ItemSlot: h
    }, v, r]
}
var xb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    ke = xb.reduce((e, t) => {
        const n = Vc(`Primitive.${t}`),
            r = x.forwardRef((o, i) => {
                const {
                    asChild: s,
                    ...a
                } = o, l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), C.jsx(l, { ...a,
                    ref: i
                })
            });
        return r.displayName = `Primitive.${t}`, { ...e,
            [t]: r
        }
    }, {});

function y0(e, t) {
    e && as.flushSync(() => e.dispatchEvent(t))
}

function rr(e) {
    const t = x.useRef(e);
    return x.useEffect(() => {
        t.current = e
    }), x.useMemo(() => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }, [])
}

function Sb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e);
    x.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [n, t])
}
var Cb = "DismissableLayer",
    Fc = "dismissableLayer.update",
    Eb = "dismissableLayer.pointerDownOutside",
    Tb = "dismissableLayer.focusOutside",
    Kp, v0 = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    vf = x.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: o,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: a,
            ...l
        } = e, u = x.useContext(v0), [c, d] = x.useState(null), f = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = x.useState({}), v = ut(t, b => d(b)), g = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = g.indexOf(w), p = c ? g.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, S = p >= m, E = kb(b => {
            const k = b.target,
                D = [...u.branches].some(A => A.contains(k));
            !S || D || (o == null || o(b), s == null || s(b), b.defaultPrevented || a == null || a())
        }, f), T = Pb(b => {
            const k = b.target;
            [...u.branches].some(A => A.contains(k)) || (i == null || i(b), s == null || s(b), b.defaultPrevented || a == null || a())
        }, f);
        return Sb(b => {
            p === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && a && (b.preventDefault(), a()))
        }, f), x.useEffect(() => {
            if (c) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Kp = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), Gp(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Kp)
            }
        }, [c, f, n, u]), x.useEffect(() => () => {
            c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Gp())
        }, [c, u]), x.useEffect(() => {
            const b = () => h({});
            return document.addEventListener(Fc, b), () => document.removeEventListener(Fc, b)
        }, []), C.jsx(ke.div, { ...l,
            ref: v,
            style: {
                pointerEvents: y ? S ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: we(e.onFocusCapture, T.onFocusCapture),
            onBlurCapture: we(e.onBlurCapture, T.onBlurCapture),
            onPointerDownCapture: we(e.onPointerDownCapture, E.onPointerDownCapture)
        })
    });
vf.displayName = Cb;
var bb = "DismissableLayerBranch",
    w0 = x.forwardRef((e, t) => {
        const n = x.useContext(v0),
            r = x.useRef(null),
            o = ut(t, r);
        return x.useEffect(() => {
            const i = r.current;
            if (i) return n.branches.add(i), () => {
                n.branches.delete(i)
            }
        }, [n.branches]), C.jsx(ke.div, { ...e,
            ref: o
        })
    });
w0.displayName = bb;

function kb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e),
        r = x.useRef(!1),
        o = x.useRef(() => {});
    return x.useEffect(() => {
        const i = a => {
                if (a.target && !r.current) {
                    let l = function() {
                        x0(Eb, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            s = window.setTimeout(() => {
                t.addEventListener("pointerdown", i)
            }, 0);
        return () => {
            window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Pb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = rr(e),
        r = x.useRef(!1);
    return x.useEffect(() => {
        const o = i => {
            i.target && !r.current && x0(Tb, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Gp() {
    const e = new CustomEvent(Fc);
    document.dispatchEvent(e)
}

function x0(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        i = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? y0(o, i) : o.dispatchEvent(i)
}
var Ab = vf,
    Rb = w0,
    tn = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    Nb = "Portal",
    S0 = x.forwardRef((e, t) => {
        var a;
        const {
            container: n,
            ...r
        } = e, [o, i] = x.useState(!1);
        tn(() => i(!0), []);
        const s = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
        return s ? Xv.createPortal(C.jsx(ke.div, { ...r,
            ref: t
        }), s) : null
    });
S0.displayName = Nb;

function Mb(e, t) {
    return x.useReducer((n, r) => t[n][r] ?? n, e)
}
var xl = e => {
    const {
        present: t,
        children: n
    } = e, r = Db(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : x.Children.only(n), i = ut(r.ref, Ob(o));
    return typeof n == "function" || r.isPresent ? x.cloneElement(o, {
        ref: i
    }) : null
};
xl.displayName = "Presence";

function Db(e) {
    const [t, n] = x.useState(), r = x.useRef(null), o = x.useRef(e), i = x.useRef("none"), s = e ? "mounted" : "unmounted", [a, l] = Mb(s, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const u = _s(r.current);
        i.current = a === "mounted" ? u : "none"
    }, [a]), tn(() => {
        const u = r.current,
            c = o.current;
        if (c !== e) {
            const f = i.current,
                h = _s(u);
            e ? l("MOUNT") : h === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, l]), tn(() => {
        if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window,
                d = h => {
                    const g = _s(r.current).includes(h.animationName);
                    if (h.target === t && g && (l("ANIMATION_END"), !o.current)) {
                        const w = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = c.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                        })
                    }
                },
                f = h => {
                    h.target === t && (i.current = _s(r.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
                c.clearTimeout(u), t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: x.useCallback(u => {
            r.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function _s(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}

function Ob(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Lb = Ed[" useInsertionEffect ".trim().toString()] || tn;

function Sl({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    const [o, i, s] = jb({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : o; {
        const c = x.useRef(e !== void 0);
        x.useEffect(() => {
            const d = c.current;
            d !== a && console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), c.current = a
        }, [a, r])
    }
    const u = x.useCallback(c => {
        var d;
        if (a) {
            const f = Ib(c) ? c(e) : c;
            f !== e && ((d = s.current) == null || d.call(s, f))
        } else i(c)
    }, [a, e, i, s]);
    return [l, u]
}

function jb({
    defaultProp: e,
    onChange: t
}) {
    const [n, r] = x.useState(e), o = x.useRef(n), i = x.useRef(t);
    return Lb(() => {
        i.current = t
    }, [t]), x.useEffect(() => {
        var s;
        o.current !== n && ((s = i.current) == null || s.call(i, n), o.current = n)
    }, [n, o]), [n, r, i]
}

function Ib(e) {
    return typeof e == "function"
}
var _b = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    Vb = "VisuallyHidden",
    Cl = x.forwardRef((e, t) => C.jsx(ke.span, { ...e,
        ref: t,
        style: { ..._b,
            ...e.style
        }
    }));
Cl.displayName = Vb;
var Fb = Cl,
    wf = "ToastProvider",
    [xf, zb, Bb] = g0("Toast"),
    [C0, CO] = Ho("Toast", [Bb]),
    [$b, El] = C0(wf),
    E0 = e => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: o = "right",
            swipeThreshold: i = 50,
            children: s
        } = e, [a, l] = x.useState(null), [u, c] = x.useState(0), d = x.useRef(!1), f = x.useRef(!1);
        return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${wf}\`. Expected non-empty \`string\`.`), C.jsx(xf.Provider, {
            scope: t,
            children: C.jsx($b, {
                scope: t,
                label: n,
                duration: r,
                swipeDirection: o,
                swipeThreshold: i,
                toastCount: u,
                viewport: a,
                onViewportChange: l,
                onToastAdd: x.useCallback(() => c(h => h + 1), []),
                onToastRemove: x.useCallback(() => c(h => h - 1), []),
                isFocusedToastEscapeKeyDownRef: d,
                isClosePausedRef: f,
                children: s
            })
        })
    };
E0.displayName = wf;
var T0 = "ToastViewport",
    Ub = ["F8"],
    zc = "toast.viewportPause",
    Bc = "toast.viewportResume",
    b0 = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = Ub,
            label: o = "Notifications ({hotkey})",
            ...i
        } = e, s = El(T0, n), a = zb(n), l = x.useRef(null), u = x.useRef(null), c = x.useRef(null), d = x.useRef(null), f = ut(t, d, s.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), v = s.toastCount > 0;
        x.useEffect(() => {
            const w = m => {
                var y;
                r.length !== 0 && r.every(S => m[S] || m.code === S) && ((y = d.current) == null || y.focus())
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w)
        }, [r]), x.useEffect(() => {
            const w = l.current,
                m = d.current;
            if (v && w && m) {
                const p = () => {
                        if (!s.isClosePausedRef.current) {
                            const T = new CustomEvent(zc);
                            m.dispatchEvent(T), s.isClosePausedRef.current = !0
                        }
                    },
                    y = () => {
                        if (s.isClosePausedRef.current) {
                            const T = new CustomEvent(Bc);
                            m.dispatchEvent(T), s.isClosePausedRef.current = !1
                        }
                    },
                    S = T => {
                        !w.contains(T.relatedTarget) && y()
                    },
                    E = () => {
                        w.contains(document.activeElement) || y()
                    };
                return w.addEventListener("focusin", p), w.addEventListener("focusout", S), w.addEventListener("pointermove", p), w.addEventListener("pointerleave", E), window.addEventListener("blur", p), window.addEventListener("focus", y), () => {
                    w.removeEventListener("focusin", p), w.removeEventListener("focusout", S), w.removeEventListener("pointermove", p), w.removeEventListener("pointerleave", E), window.removeEventListener("blur", p), window.removeEventListener("focus", y)
                }
            }
        }, [v, s.isClosePausedRef]);
        const g = x.useCallback(({
            tabbingDirection: w
        }) => {
            const p = a().map(y => {
                const S = y.ref.current,
                    E = [S, ...nk(S)];
                return w === "forwards" ? E : E.reverse()
            });
            return (w === "forwards" ? p.reverse() : p).flat()
        }, [a]);
        return x.useEffect(() => {
            const w = d.current;
            if (w) {
                const m = p => {
                    var E, T, b;
                    const y = p.altKey || p.ctrlKey || p.metaKey;
                    if (p.key === "Tab" && !y) {
                        const k = document.activeElement,
                            D = p.shiftKey;
                        if (p.target === w && D) {
                            (E = u.current) == null || E.focus();
                            return
                        }
                        const j = g({
                                tabbingDirection: D ? "backwards" : "forwards"
                            }),
                            U = j.findIndex(L => L === k);
                        vu(j.slice(U + 1)) ? p.preventDefault() : D ? (T = u.current) == null || T.focus() : (b = c.current) == null || b.focus()
                    }
                };
                return w.addEventListener("keydown", m), () => w.removeEventListener("keydown", m)
            }
        }, [a, g]), C.jsxs(Rb, {
            ref: l,
            role: "region",
            "aria-label": o.replace("{hotkey}", h),
            tabIndex: -1,
            style: {
                pointerEvents: v ? void 0 : "none"
            },
            children: [v && C.jsx($c, {
                ref: u,
                onFocusFromOutsideViewport: () => {
                    const w = g({
                        tabbingDirection: "forwards"
                    });
                    vu(w)
                }
            }), C.jsx(xf.Slot, {
                scope: n,
                children: C.jsx(ke.ol, {
                    tabIndex: -1,
                    ...i,
                    ref: f
                })
            }), v && C.jsx($c, {
                ref: c,
                onFocusFromOutsideViewport: () => {
                    const w = g({
                        tabbingDirection: "backwards"
                    });
                    vu(w)
                }
            })]
        })
    });
b0.displayName = T0;
var k0 = "ToastFocusProxy",
    $c = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            onFocusFromOutsideViewport: r,
            ...o
        } = e, i = El(k0, n);
        return C.jsx(Cl, {
            "aria-hidden": !0,
            tabIndex: 0,
            ...o,
            ref: t,
            style: {
                position: "fixed"
            },
            onFocus: s => {
                var u;
                const a = s.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r()
            }
        })
    });
$c.displayName = k0;
var ls = "Toast",
    Hb = "toast.swipeStart",
    Wb = "toast.swipeMove",
    Kb = "toast.swipeCancel",
    Gb = "toast.swipeEnd",
    P0 = x.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: o,
            onOpenChange: i,
            ...s
        } = e, [a, l] = Sl({
            prop: r,
            defaultProp: o ?? !0,
            onChange: i,
            caller: ls
        });
        return C.jsx(xl, {
            present: n || a,
            children: C.jsx(Xb, {
                open: a,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: rr(e.onPause),
                onResume: rr(e.onResume),
                onSwipeStart: we(e.onSwipeStart, u => {
                    u.currentTarget.setAttribute("data-swipe", "start")
                }),
                onSwipeMove: we(e.onSwipeMove, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`)
                }),
                onSwipeCancel: we(e.onSwipeCancel, u => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
                }),
                onSwipeEnd: we(e.onSwipeEnd, u => {
                    const {
                        x: c,
                        y: d
                    } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1)
                })
            })
        })
    });
P0.displayName = ls;
var [Qb, Yb] = C0(ls, {
    onClose() {}
}), Xb = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
    } = e, g = El(ls, n), [w, m] = x.useState(null), p = ut(t, L => m(L)), y = x.useRef(null), S = x.useRef(null), E = o || g.duration, T = x.useRef(0), b = x.useRef(E), k = x.useRef(0), {
        onToastAdd: D,
        onToastRemove: A
    } = g, _ = rr(() => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((H = g.viewport) == null || H.focus()), s()
    }), j = x.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(k.current), T.current = new Date().getTime(), k.current = window.setTimeout(_, L))
    }, [_]);
    x.useEffect(() => {
        const L = g.viewport;
        if (L) {
            const H = () => {
                    j(b.current), u == null || u()
                },
                z = () => {
                    const W = new Date().getTime() - T.current;
                    b.current = b.current - W, window.clearTimeout(k.current), l == null || l()
                };
            return L.addEventListener(zc, z), L.addEventListener(Bc, H), () => {
                L.removeEventListener(zc, z), L.removeEventListener(Bc, H)
            }
        }
    }, [g.viewport, E, l, u, j]), x.useEffect(() => {
        i && !g.isClosePausedRef.current && j(E)
    }, [i, E, g.isClosePausedRef, j]), x.useEffect(() => (D(), () => A()), [D, A]);
    const U = x.useMemo(() => w ? L0(w) : null, [w]);
    return g.viewport ? C.jsxs(C.Fragment, {
        children: [U && C.jsx(qb, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: U
        }), C.jsx(Qb, {
            scope: n,
            onClose: _,
            children: as.createPortal(C.jsx(xf.ItemSlot, {
                scope: n,
                children: C.jsx(Ab, {
                    asChild: !0,
                    onEscapeKeyDown: we(a, () => {
                        g.isFocusedToastEscapeKeyDownRef.current || _(), g.isFocusedToastEscapeKeyDownRef.current = !1
                    }),
                    children: C.jsx(ke.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": i ? "open" : "closed",
                        "data-swipe-direction": g.swipeDirection,
                        ...v,
                        ref: p,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: we(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent), L.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0, _()))
                        }),
                        onPointerDown: we(e.onPointerDown, L => {
                            L.button === 0 && (y.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }),
                        onPointerMove: we(e.onPointerMove, L => {
                            if (!y.current) return;
                            const H = L.clientX - y.current.x,
                                z = L.clientY - y.current.y,
                                W = !!S.current,
                                P = ["left", "right"].includes(g.swipeDirection),
                                R = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max,
                                I = P ? R(0, H) : 0,
                                $ = P ? 0 : R(0, z),
                                B = L.pointerType === "touch" ? 10 : 2,
                                Y = {
                                    x: I,
                                    y: $
                                },
                                q = {
                                    originalEvent: L,
                                    delta: Y
                                };
                            W ? (S.current = Y, Vs(Wb, d, q, {
                                discrete: !1
                            })) : Qp(Y, g.swipeDirection, B) ? (S.current = Y, Vs(Hb, c, q, {
                                discrete: !1
                            }), L.target.setPointerCapture(L.pointerId)) : (Math.abs(H) > B || Math.abs(z) > B) && (y.current = null)
                        }),
                        onPointerUp: we(e.onPointerUp, L => {
                            const H = S.current,
                                z = L.target;
                            if (z.hasPointerCapture(L.pointerId) && z.releasePointerCapture(L.pointerId), S.current = null, y.current = null, H) {
                                const W = L.currentTarget,
                                    P = {
                                        originalEvent: L,
                                        delta: H
                                    };
                                Qp(H, g.swipeDirection, g.swipeThreshold) ? Vs(Gb, h, P, {
                                    discrete: !0
                                }) : Vs(Kb, f, P, {
                                    discrete: !0
                                }), W.addEventListener("click", R => R.preventDefault(), {
                                    once: !0
                                })
                            }
                        })
                    })
                })
            }), g.viewport)
        })]
    }) : null
}), qb = e => {
    const {
        __scopeToast: t,
        children: n,
        ...r
    } = e, o = El(ls, t), [i, s] = x.useState(!1), [a, l] = x.useState(!1);
    return ek(() => s(!0)), x.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u)
    }, []), a ? null : C.jsx(S0, {
        asChild: !0,
        children: C.jsx(Cl, { ...r,
            children: i && C.jsxs(C.Fragment, {
                children: [o.label, " ", n]
            })
        })
    })
}, Zb = "ToastTitle", A0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        ...r
    } = e;
    return C.jsx(ke.div, { ...r,
        ref: t
    })
});
A0.displayName = Zb;
var Jb = "ToastDescription",
    R0 = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e;
        return C.jsx(ke.div, { ...r,
            ref: t
        })
    });
R0.displayName = Jb;
var N0 = "ToastAction",
    M0 = x.forwardRef((e, t) => {
        const {
            altText: n,
            ...r
        } = e;
        return n.trim() ? C.jsx(O0, {
            altText: n,
            asChild: !0,
            children: C.jsx(Sf, { ...r,
                ref: t
            })
        }) : (console.error(`Invalid prop \`altText\` supplied to \`${N0}\`. Expected non-empty \`string\`.`), null)
    });
M0.displayName = N0;
var D0 = "ToastClose",
    Sf = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            ...r
        } = e, o = Yb(D0, n);
        return C.jsx(O0, {
            asChild: !0,
            children: C.jsx(ke.button, {
                type: "button",
                ...r,
                ref: t,
                onClick: we(e.onClick, o.onClose)
            })
        })
    });
Sf.displayName = D0;
var O0 = x.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        altText: r,
        ...o
    } = e;
    return C.jsx(ke.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t
    })
});

function L0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), tk(r)) {
            const o = r.ariaHidden || r.hidden || r.style.display === "none",
                i = r.dataset.radixToastAnnounceExclude === "";
            if (!o)
                if (i) {
                    const s = r.dataset.radixToastAnnounceAlt;
                    s && t.push(s)
                } else t.push(...L0(r))
        }
    }), t
}

function Vs(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.currentTarget,
        i = new CustomEvent(e, {
            bubbles: !0,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? y0(o, i) : o.dispatchEvent(i)
}
var Qp = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        i = r > o;
    return t === "left" || t === "right" ? i && r > n : !i && o > n
};

function ek(e = () => {}) {
    const t = rr(e);
    tn(() => {
        let n = 0,
            r = 0;
        return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
            window.cancelAnimationFrame(n), window.cancelAnimationFrame(r)
        }
    }, [t])
}

function tk(e) {
    return e.nodeType === e.ELEMENT_NODE
}

function nk(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function vu(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(), document.activeElement !== t))
}
var rk = E0,
    j0 = b0,
    I0 = P0,
    _0 = A0,
    V0 = R0,
    F0 = M0,
    z0 = Sf;

function B0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = B0(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function $0() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = B0(e)) && (r && (r += " "), r += t);
    return r
}
const Yp = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    Xp = $0,
    ok = (e, t) => n => {
        var r;
        if ((t == null ? void 0 : t.variants) == null) return Xp(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: i
        } = t, s = Object.keys(o).map(u => {
            const c = n == null ? void 0 : n[u],
                d = i == null ? void 0 : i[u];
            if (c === null) return null;
            const f = Yp(c) || Yp(d);
            return o[u][f]
        }), a = n && Object.entries(n).reduce((u, c) => {
            let [d, f] = c;
            return f === void 0 || (u[d] = f), u
        }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
            let {
                class: d,
                className: f,
                ...h
            } = c;
            return Object.entries(h).every(v => {
                let [g, w] = v;
                return Array.isArray(w) ? w.includes({ ...i,
                    ...a
                }[g]) : { ...i,
                    ...a
                }[g] === w
            }) ? [...u, d, f] : u
        }, []);
        return Xp(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    U0 = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sk = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = x.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: s,
    ...a
}, l) => x.createElement("svg", {
    ref: l,
    ...sk,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: U0("lucide", o),
    ...a
}, [...s.map(([u, c]) => x.createElement(u, c)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cf = (e, t) => {
    const n = x.forwardRef(({
        className: r,
        ...o
    }, i) => x.createElement(ak, {
        ref: i,
        iconNode: t,
        className: U0(`lucide-${ik(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`, n
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = Cf("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = Cf("Copy", [
    ["rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea"
    }],
    ["path", {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf"
    }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = Cf("X", [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ]),
    Ef = "-",
    ck = e => {
        const t = fk(e),
            {
                conflictingClassGroups: n,
                conflictingClassGroupModifiers: r
            } = e;
        return {
            getClassGroupId: s => {
                const a = s.split(Ef);
                return a[0] === "" && a.length !== 1 && a.shift(), W0(a, t) || dk(s)
            },
            getConflictingClassGroupIds: (s, a) => {
                const l = n[s] || [];
                return a && r[s] ? [...l, ...r[s]] : l
            }
        }
    },
    W0 = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? W0(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const i = e.join(Ef);
        return (s = t.validators.find(({
            validator: a
        }) => a(i))) == null ? void 0 : s.classGroupId
    },
    qp = /^\[(.+)\]$/,
    dk = e => {
        if (qp.test(e)) {
            const t = qp.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n
        }
    },
    fk = e => {
        const {
            theme: t,
            prefix: n
        } = e, r = {
            nextPart: new Map,
            validators: []
        };
        return pk(Object.entries(e.classGroups), n).forEach(([i, s]) => {
            Uc(s, r, i, t)
        }), r
    },
    Uc = (e, t, n, r) => {
        e.forEach(o => {
            if (typeof o == "string") {
                const i = o === "" ? t : Zp(t, o);
                i.classGroupId = n;
                return
            }
            if (typeof o == "function") {
                if (hk(o)) {
                    Uc(o(r), t, n, r);
                    return
                }
                t.validators.push({
                    validator: o,
                    classGroupId: n
                });
                return
            }
            Object.entries(o).forEach(([i, s]) => {
                Uc(s, Zp(t, i), n, r)
            })
        })
    },
    Zp = (e, t) => {
        let n = e;
        return t.split(Ef).forEach(r => {
            n.nextPart.has(r) || n.nextPart.set(r, {
                nextPart: new Map,
                validators: []
            }), n = n.nextPart.get(r)
        }), n
    },
    hk = e => e.isThemeGetter,
    pk = (e, t) => t ? e.map(([n, r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, a]) => [t + s, a])) : i);
        return [n, o]
    }) : e,
    mk = e => {
        if (e < 1) return {
            get: () => {},
            set: () => {}
        };
        let t = 0,
            n = new Map,
            r = new Map;
        const o = (i, s) => {
            n.set(i, s), t++, t > e && (t = 0, r = n, n = new Map)
        };
        return {
            get(i) {
                let s = n.get(i);
                if (s !== void 0) return s;
                if ((s = r.get(i)) !== void 0) return o(i, s), s
            },
            set(i, s) {
                n.has(i) ? n.set(i, s) : o(i, s)
            }
        }
    },
    K0 = "!",
    gk = e => {
        const {
            separator: t,
            experimentalParseClassName: n
        } = e, r = t.length === 1, o = t[0], i = t.length, s = a => {
            const l = [];
            let u = 0,
                c = 0,
                d;
            for (let w = 0; w < a.length; w++) {
                let m = a[w];
                if (u === 0) {
                    if (m === o && (r || a.slice(w, w + i) === t)) {
                        l.push(a.slice(c, w)), c = w + i;
                        continue
                    }
                    if (m === "/") {
                        d = w;
                        continue
                    }
                }
                m === "[" ? u++ : m === "]" && u--
            }
            const f = l.length === 0 ? a : a.substring(c),
                h = f.startsWith(K0),
                v = h ? f.substring(1) : f,
                g = d && d > c ? d - c : void 0;
            return {
                modifiers: l,
                hasImportantModifier: h,
                baseClassName: v,
                maybePostfixModifierPosition: g
            }
        };
        return n ? a => n({
            className: a,
            parseClassName: s
        }) : s
    },
    yk = e => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return e.forEach(r => {
            r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r)
        }), t.push(...n.sort()), t
    },
    vk = e => ({
        cache: mk(e.cacheSize),
        parseClassName: gk(e),
        ...ck(e)
    }),
    wk = /\s+/,
    xk = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: o
        } = t, i = [], s = e.trim().split(wk);
        let a = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const u = s[l],
                {
                    modifiers: c,
                    hasImportantModifier: d,
                    baseClassName: f,
                    maybePostfixModifierPosition: h
                } = n(u);
            let v = !!h,
                g = r(v ? f.substring(0, h) : f);
            if (!g) {
                if (!v) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                if (g = r(f), !g) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue
                }
                v = !1
            }
            const w = yk(c).join(":"),
                m = d ? w + K0 : w,
                p = m + g;
            if (i.includes(p)) continue;
            i.push(p);
            const y = o(g, v);
            for (let S = 0; S < y.length; ++S) {
                const E = y[S];
                i.push(m + E)
            }
            a = u + (a.length > 0 ? " " + a : a)
        }
        return a
    };

function Sk() {
    let e = 0,
        t, n, r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = G0(t)) && (r && (r += " "), r += n);
    return r
}
const G0 = e => {
    if (typeof e == "string") return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = G0(e[r])) && (n && (n += " "), n += t);
    return n
};

function Ck(e, ...t) {
    let n, r, o, i = s;

    function s(l) {
        const u = t.reduce((c, d) => d(c), e());
        return n = vk(u), r = n.cache.get, o = n.cache.set, i = a, a(l)
    }

    function a(l) {
        const u = r(l);
        if (u) return u;
        const c = xk(l, n);
        return o(l, c), c
    }
    return function() {
        return i(Sk.apply(null, arguments))
    }
}
const se = e => {
        const t = n => n[e] || [];
        return t.isThemeGetter = !0, t
    },
    Q0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Ek = /^\d+\/\d+$/,
    Tk = new Set(["px", "full", "screen"]),
    bk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    kk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    Pk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Ak = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Rk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    an = e => wo(e) || Tk.has(e) || Ek.test(e),
    Rn = e => Wo(e, "length", _k),
    wo = e => !!e && !Number.isNaN(Number(e)),
    wu = e => Wo(e, "number", wo),
    ai = e => !!e && Number.isInteger(Number(e)),
    Nk = e => e.endsWith("%") && wo(e.slice(0, -1)),
    Q = e => Q0.test(e),
    Nn = e => bk.test(e),
    Mk = new Set(["length", "size", "percentage"]),
    Dk = e => Wo(e, Mk, Y0),
    Ok = e => Wo(e, "position", Y0),
    Lk = new Set(["image", "url"]),
    jk = e => Wo(e, Lk, Fk),
    Ik = e => Wo(e, "", Vk),
    li = () => !0,
    Wo = (e, t, n) => {
        const r = Q0.exec(e);
        return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
    },
    _k = e => kk.test(e) && !Pk.test(e),
    Y0 = () => !1,
    Vk = e => Ak.test(e),
    Fk = e => Rk.test(e),
    zk = () => {
        const e = se("colors"),
            t = se("spacing"),
            n = se("blur"),
            r = se("brightness"),
            o = se("borderColor"),
            i = se("borderRadius"),
            s = se("borderSpacing"),
            a = se("borderWidth"),
            l = se("contrast"),
            u = se("grayscale"),
            c = se("hueRotate"),
            d = se("invert"),
            f = se("gap"),
            h = se("gradientColorStops"),
            v = se("gradientColorStopPositions"),
            g = se("inset"),
            w = se("margin"),
            m = se("opacity"),
            p = se("padding"),
            y = se("saturate"),
            S = se("scale"),
            E = se("sepia"),
            T = se("skew"),
            b = se("space"),
            k = se("translate"),
            D = () => ["auto", "contain", "none"],
            A = () => ["auto", "hidden", "clip", "visible", "scroll"],
            _ = () => ["auto", Q, t],
            j = () => [Q, t],
            U = () => ["", an, Rn],
            L = () => ["auto", wo, Q],
            H = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
            z = () => ["solid", "dashed", "dotted", "double", "none"],
            W = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            R = () => ["", "0", Q],
            I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            $ = () => [wo, Q];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [li],
                spacing: [an, Rn],
                blur: ["none", "", Nn, Q],
                brightness: $(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Nn, Q],
                borderSpacing: j(),
                borderWidth: U(),
                contrast: $(),
                grayscale: R(),
                hueRotate: $(),
                invert: R(),
                gap: j(),
                gradientColorStops: [e],
                gradientColorStopPositions: [Nk, Rn],
                inset: _(),
                margin: _(),
                opacity: $(),
                padding: j(),
                saturate: $(),
                scale: $(),
                sepia: R(),
                skew: $(),
                space: j(),
                translate: j()
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", "video", Q]
                }],
                container: ["container"],
                columns: [{
                    columns: [Nn]
                }],
                "break-after": [{
                    "break-after": I()
                }],
                "break-before": [{
                    "break-before": I()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: [...H(), Q]
                }],
                overflow: [{
                    overflow: A()
                }],
                "overflow-x": [{
                    "overflow-x": A()
                }],
                "overflow-y": [{
                    "overflow-y": A()
                }],
                overscroll: [{
                    overscroll: D()
                }],
                "overscroll-x": [{
                    "overscroll-x": D()
                }],
                "overscroll-y": [{
                    "overscroll-y": D()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: [g]
                }],
                "inset-x": [{
                    "inset-x": [g]
                }],
                "inset-y": [{
                    "inset-y": [g]
                }],
                start: [{
                    start: [g]
                }],
                end: [{
                    end: [g]
                }],
                top: [{
                    top: [g]
                }],
                right: [{
                    right: [g]
                }],
                bottom: [{
                    bottom: [g]
                }],
                left: [{
                    left: [g]
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: ["auto", ai, Q]
                }],
                basis: [{
                    basis: _()
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["wrap", "wrap-reverse", "nowrap"]
                }],
                flex: [{
                    flex: ["1", "auto", "initial", "none", Q]
                }],
                grow: [{
                    grow: R()
                }],
                shrink: [{
                    shrink: R()
                }],
                order: [{
                    order: ["first", "last", "none", ai, Q]
                }],
                "grid-cols": [{
                    "grid-cols": [li]
                }],
                "col-start-end": [{
                    col: ["auto", {
                        span: ["full", ai, Q]
                    }, Q]
                }],
                "col-start": [{
                    "col-start": L()
                }],
                "col-end": [{
                    "col-end": L()
                }],
                "grid-rows": [{
                    "grid-rows": [li]
                }],
                "row-start-end": [{
                    row: ["auto", {
                        span: [ai, Q]
                    }, Q]
                }],
                "row-start": [{
                    "row-start": L()
                }],
                "row-end": [{
                    "row-end": L()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ["auto", "min", "max", "fr", Q]
                }],
                "auto-rows": [{
                    "auto-rows": ["auto", "min", "max", "fr", Q]
                }],
                gap: [{
                    gap: [f]
                }],
                "gap-x": [{
                    "gap-x": [f]
                }],
                "gap-y": [{
                    "gap-y": [f]
                }],
                "justify-content": [{
                    justify: ["normal", ...P()]
                }],
                "justify-items": [{
                    "justify-items": ["start", "end", "center", "stretch"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", "start", "end", "center", "stretch"]
                }],
                "align-content": [{
                    content: ["normal", ...P(), "baseline"]
                }],
                "align-items": [{
                    items: ["start", "end", "center", "baseline", "stretch"]
                }],
                "align-self": [{
                    self: ["auto", "start", "end", "center", "stretch", "baseline"]
                }],
                "place-content": [{
                    "place-content": [...P(), "baseline"]
                }],
                "place-items": [{
                    "place-items": ["start", "end", "center", "baseline", "stretch"]
                }],
                "place-self": [{
                    "place-self": ["auto", "start", "end", "center", "stretch"]
                }],
                p: [{
                    p: [p]
                }],
                px: [{
                    px: [p]
                }],
                py: [{
                    py: [p]
                }],
                ps: [{
                    ps: [p]
                }],
                pe: [{
                    pe: [p]
                }],
                pt: [{
                    pt: [p]
                }],
                pr: [{
                    pr: [p]
                }],
                pb: [{
                    pb: [p]
                }],
                pl: [{
                    pl: [p]
                }],
                m: [{
                    m: [w]
                }],
                mx: [{
                    mx: [w]
                }],
                my: [{
                    my: [w]
                }],
                ms: [{
                    ms: [w]
                }],
                me: [{
                    me: [w]
                }],
                mt: [{
                    mt: [w]
                }],
                mr: [{
                    mr: [w]
                }],
                mb: [{
                    mb: [w]
                }],
                ml: [{
                    ml: [w]
                }],
                "space-x": [{
                    "space-x": [b]
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": [b]
                }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{
                    w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, t]
                }],
                "min-w": [{
                    "min-w": [Q, t, "min", "max", "fit"]
                }],
                "max-w": [{
                    "max-w": [Q, t, "none", "full", "min", "max", "fit", "prose", {
                        screen: [Nn]
                    }, Nn]
                }],
                h: [{
                    h: [Q, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "min-h": [{
                    "min-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                "max-h": [{
                    "max-h": [Q, t, "min", "max", "fit", "svh", "lvh", "dvh"]
                }],
                size: [{
                    size: [Q, t, "auto", "min", "max", "fit"]
                }],
                "font-size": [{
                    text: ["base", Nn, Rn]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", wu]
                }],
                "font-family": [{
                    font: [li]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
                }],
                "line-clamp": [{
                    "line-clamp": ["none", wo, wu]
                }],
                leading: [{
                    leading: ["none", "tight", "snug", "normal", "relaxed", "loose", an, Q]
                }],
                "list-image": [{
                    "list-image": ["none", Q]
                }],
                "list-style-type": [{
                    list: ["none", "disc", "decimal", Q]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "placeholder-color": [{
                    placeholder: [e]
                }],
                "placeholder-opacity": [{
                    "placeholder-opacity": [m]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "text-color": [{
                    text: [e]
                }],
                "text-opacity": [{
                    "text-opacity": [m]
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...z(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: ["auto", "from-font", an, Rn]
                }],
                "underline-offset": [{
                    "underline-offset": ["auto", an, Q]
                }],
                "text-decoration-color": [{
                    decoration: [e]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: j()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", Q]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-opacity": [{
                    "bg-opacity": [m]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: [...H(), Ok]
                }],
                "bg-repeat": [{
                    bg: ["no-repeat", {
                        repeat: ["", "x", "y", "round", "space"]
                    }]
                }],
                "bg-size": [{
                    bg: ["auto", "cover", "contain", Dk]
                }],
                "bg-image": [{
                    bg: ["none", {
                        "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, jk]
                }],
                "bg-color": [{
                    bg: [e]
                }],
                "gradient-from-pos": [{
                    from: [v]
                }],
                "gradient-via-pos": [{
                    via: [v]
                }],
                "gradient-to-pos": [{
                    to: [v]
                }],
                "gradient-from": [{
                    from: [h]
                }],
                "gradient-via": [{
                    via: [h]
                }],
                "gradient-to": [{
                    to: [h]
                }],
                rounded: [{
                    rounded: [i]
                }],
                "rounded-s": [{
                    "rounded-s": [i]
                }],
                "rounded-e": [{
                    "rounded-e": [i]
                }],
                "rounded-t": [{
                    "rounded-t": [i]
                }],
                "rounded-r": [{
                    "rounded-r": [i]
                }],
                "rounded-b": [{
                    "rounded-b": [i]
                }],
                "rounded-l": [{
                    "rounded-l": [i]
                }],
                "rounded-ss": [{
                    "rounded-ss": [i]
                }],
                "rounded-se": [{
                    "rounded-se": [i]
                }],
                "rounded-ee": [{
                    "rounded-ee": [i]
                }],
                "rounded-es": [{
                    "rounded-es": [i]
                }],
                "rounded-tl": [{
                    "rounded-tl": [i]
                }],
                "rounded-tr": [{
                    "rounded-tr": [i]
                }],
                "rounded-br": [{
                    "rounded-br": [i]
                }],
                "rounded-bl": [{
                    "rounded-bl": [i]
                }],
                "border-w": [{
                    border: [a]
                }],
                "border-w-x": [{
                    "border-x": [a]
                }],
                "border-w-y": [{
                    "border-y": [a]
                }],
                "border-w-s": [{
                    "border-s": [a]
                }],
                "border-w-e": [{
                    "border-e": [a]
                }],
                "border-w-t": [{
                    "border-t": [a]
                }],
                "border-w-r": [{
                    "border-r": [a]
                }],
                "border-w-b": [{
                    "border-b": [a]
                }],
                "border-w-l": [{
                    "border-l": [a]
                }],
                "border-opacity": [{
                    "border-opacity": [m]
                }],
                "border-style": [{
                    border: [...z(), "hidden"]
                }],
                "divide-x": [{
                    "divide-x": [a]
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": [a]
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{
                    "divide-opacity": [m]
                }],
                "divide-style": [{
                    divide: z()
                }],
                "border-color": [{
                    border: [o]
                }],
                "border-color-x": [{
                    "border-x": [o]
                }],
                "border-color-y": [{
                    "border-y": [o]
                }],
                "border-color-s": [{
                    "border-s": [o]
                }],
                "border-color-e": [{
                    "border-e": [o]
                }],
                "border-color-t": [{
                    "border-t": [o]
                }],
                "border-color-r": [{
                    "border-r": [o]
                }],
                "border-color-b": [{
                    "border-b": [o]
                }],
                "border-color-l": [{
                    "border-l": [o]
                }],
                "divide-color": [{
                    divide: [o]
                }],
                "outline-style": [{
                    outline: ["", ...z()]
                }],
                "outline-offset": [{
                    "outline-offset": [an, Q]
                }],
                "outline-w": [{
                    outline: [an, Rn]
                }],
                "outline-color": [{
                    outline: [e]
                }],
                "ring-w": [{
                    ring: U()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: [e]
                }],
                "ring-opacity": [{
                    "ring-opacity": [m]
                }],
                "ring-offset-w": [{
                    "ring-offset": [an, Rn]
                }],
                "ring-offset-color": [{
                    "ring-offset": [e]
                }],
                shadow: [{
                    shadow: ["", "inner", "none", Nn, Ik]
                }],
                "shadow-color": [{
                    shadow: [li]
                }],
                opacity: [{
                    opacity: [m]
                }],
                "mix-blend": [{
                    "mix-blend": [...W(), "plus-lighter", "plus-darker"]
                }],
                "bg-blend": [{
                    "bg-blend": W()
                }],
                filter: [{
                    filter: ["", "none"]
                }],
                blur: [{
                    blur: [n]
                }],
                brightness: [{
                    brightness: [r]
                }],
                contrast: [{
                    contrast: [l]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", Nn, Q]
                }],
                grayscale: [{
                    grayscale: [u]
                }],
                "hue-rotate": [{
                    "hue-rotate": [c]
                }],
                invert: [{
                    invert: [d]
                }],
                saturate: [{
                    saturate: [y]
                }],
                sepia: [{
                    sepia: [E]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none"]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": [n]
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [r]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [l]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": [u]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [c]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": [d]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [m]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [y]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": [E]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": [s]
                }],
                "border-spacing-x": [{
                    "border-spacing-x": [s]
                }],
                "border-spacing-y": [{
                    "border-spacing-y": [s]
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
                }],
                duration: [{
                    duration: $()
                }],
                ease: [{
                    ease: ["linear", "in", "out", "in-out", Q]
                }],
                delay: [{
                    delay: $()
                }],
                animate: [{
                    animate: ["none", "spin", "ping", "pulse", "bounce", Q]
                }],
                transform: [{
                    transform: ["", "gpu", "none"]
                }],
                scale: [{
                    scale: [S]
                }],
                "scale-x": [{
                    "scale-x": [S]
                }],
                "scale-y": [{
                    "scale-y": [S]
                }],
                rotate: [{
                    rotate: [ai, Q]
                }],
                "translate-x": [{
                    "translate-x": [k]
                }],
                "translate-y": [{
                    "translate-y": [k]
                }],
                "skew-x": [{
                    "skew-x": [T]
                }],
                "skew-y": [{
                    "skew-y": [T]
                }],
                "transform-origin": [{
                    origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
                }],
                accent: [{
                    accent: ["auto", e]
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
                }],
                "caret-color": [{
                    caret: [e]
                }],
                "pointer-events": [{
                    "pointer-events": ["none", "auto"]
                }],
                resize: [{
                    resize: ["none", "y", "x", ""]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": j()
                }],
                "scroll-mx": [{
                    "scroll-mx": j()
                }],
                "scroll-my": [{
                    "scroll-my": j()
                }],
                "scroll-ms": [{
                    "scroll-ms": j()
                }],
                "scroll-me": [{
                    "scroll-me": j()
                }],
                "scroll-mt": [{
                    "scroll-mt": j()
                }],
                "scroll-mr": [{
                    "scroll-mr": j()
                }],
                "scroll-mb": [{
                    "scroll-mb": j()
                }],
                "scroll-ml": [{
                    "scroll-ml": j()
                }],
                "scroll-p": [{
                    "scroll-p": j()
                }],
                "scroll-px": [{
                    "scroll-px": j()
                }],
                "scroll-py": [{
                    "scroll-py": j()
                }],
                "scroll-ps": [{
                    "scroll-ps": j()
                }],
                "scroll-pe": [{
                    "scroll-pe": j()
                }],
                "scroll-pt": [{
                    "scroll-pt": j()
                }],
                "scroll-pr": [{
                    "scroll-pr": j()
                }],
                "scroll-pb": [{
                    "scroll-pb": j()
                }],
                "scroll-pl": [{
                    "scroll-pl": j()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", Q]
                }],
                fill: [{
                    fill: [e, "none"]
                }],
                "stroke-w": [{
                    stroke: [an, Rn, wu]
                }],
                stroke: [{
                    stroke: [e, "none"]
                }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            }
        }
    },
    Bk = Ck(zk);

function on(...e) {
    return Bk($0(e))
}
const $k = rk,
    X0 = x.forwardRef(({
        className: e,
        ...t
    }, n) => C.jsx(j0, {
        ref: n,
        className: on("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
        ...t
    }));
X0.displayName = j0.displayName;
const Uk = ok("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    q0 = x.forwardRef(({
        className: e,
        variant: t,
        ...n
    }, r) => C.jsx(I0, {
        ref: r,
        className: on(Uk({
            variant: t
        }), e),
        ...n
    }));
q0.displayName = I0.displayName;
const Hk = x.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(F0, {
    ref: n,
    className: on("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
Hk.displayName = F0.displayName;
const Z0 = x.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(z0, {
    ref: n,
    className: on("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: C.jsx(uk, {
        className: "h-4 w-4"
    })
}));
Z0.displayName = z0.displayName;
const J0 = x.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(_0, {
    ref: n,
    className: on("text-sm font-semibold", e),
    ...t
}));
J0.displayName = _0.displayName;
const ew = x.forwardRef(({
    className: e,
    ...t
}, n) => C.jsx(V0, {
    ref: n,
    className: on("text-sm opacity-90", e),
    ...t
}));
ew.displayName = V0.displayName;

function Wk() {
    const {
        toasts: e
    } = hb();
    return C.jsxs($k, {
        children: [e.map(function({
            id: t,
            title: n,
            description: r,
            action: o,
            ...i
        }) {
            return C.jsxs(q0, { ...i,
                children: [C.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && C.jsx(J0, {
                        children: n
                    }), r && C.jsx(ew, {
                        children: r
                    })]
                }), o, C.jsx(Z0, {})]
            }, t)
        }), C.jsx(X0, {})]
    })
}
var Kk = Ed[" useId ".trim().toString()] || (() => {}),
    Gk = 0;

function tw(e) {
    const [t, n] = x.useState(Kk());
    return tn(() => {
        n(r => r ?? String(Gk++))
    }, [e]), t ? `radix-${t}` : ""
}
const Qk = ["top", "right", "bottom", "left"],
    or = Math.min,
    ot = Math.max,
    Fa = Math.round,
    Fs = Math.floor,
    Jt = e => ({
        x: e,
        y: e
    }),
    Yk = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Xk = {
        start: "end",
        end: "start"
    };

function Hc(e, t, n) {
    return ot(e, or(t, n))
}

function wn(e, t) {
    return typeof e == "function" ? e(t) : e
}

function xn(e) {
    return e.split("-")[0]
}

function Ko(e) {
    return e.split("-")[1]
}

function Tf(e) {
    return e === "x" ? "y" : "x"
}

function bf(e) {
    return e === "y" ? "height" : "width"
}
const qk = new Set(["top", "bottom"]);

function Xt(e) {
    return qk.has(xn(e)) ? "y" : "x"
}

function kf(e) {
    return Tf(Xt(e))
}

function Zk(e, t, n) {
    n === void 0 && (n = !1);
    const r = Ko(e),
        o = kf(e),
        i = bf(o);
    let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (s = za(s)), [s, za(s)]
}

function Jk(e) {
    const t = za(e);
    return [Wc(e), t, Wc(t)]
}

function Wc(e) {
    return e.replace(/start|end/g, t => Xk[t])
}
const Jp = ["left", "right"],
    em = ["right", "left"],
    eP = ["top", "bottom"],
    tP = ["bottom", "top"];

function nP(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? em : Jp : t ? Jp : em;
        case "left":
        case "right":
            return t ? eP : tP;
        default:
            return []
    }
}

function rP(e, t, n, r) {
    const o = Ko(e);
    let i = nP(xn(e), n === "start", r);
    return o && (i = i.map(s => s + "-" + o), t && (i = i.concat(i.map(Wc)))), i
}

function za(e) {
    return e.replace(/left|right|bottom|top/g, t => Yk[t])
}

function oP(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function nw(e) {
    return typeof e != "number" ? oP(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function Ba(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function tm(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const i = Xt(t),
        s = kf(t),
        a = bf(s),
        l = xn(t),
        u = i === "y",
        c = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        f = r[a] / 2 - o[a] / 2;
    let h;
    switch (l) {
        case "top":
            h = {
                x: c,
                y: r.y - o.height
            };
            break;
        case "bottom":
            h = {
                x: c,
                y: r.y + r.height
            };
            break;
        case "right":
            h = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            h = {
                x: r.x - o.width,
                y: d
            };
            break;
        default:
            h = {
                x: r.x,
                y: r.y
            }
    }
    switch (Ko(t)) {
        case "start":
            h[s] -= f * (n && u ? -1 : 1);
            break;
        case "end":
            h[s] += f * (n && u ? -1 : 1);
            break
    }
    return h
}
const iP = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: i = [],
        platform: s
    } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let u = await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: c,
            y: d
        } = tm(u, r, l),
        f = r,
        h = {},
        v = 0;
    for (let g = 0; g < a.length; g++) {
        const {
            name: w,
            fn: m
        } = a[g], {
            x: p,
            y,
            data: S,
            reset: E
        } = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: o,
            middlewareData: h,
            rects: u,
            platform: s,
            elements: {
                reference: e,
                floating: t
            }
        });
        c = p ?? c, d = y ?? d, h = { ...h,
            [w]: { ...h[w],
                ...S
            }
        }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (f = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects), {
            x: c,
            y: d
        } = tm(u, f, l)), g = -1)
    }
    return {
        x: c,
        y: d,
        placement: f,
        strategy: o,
        middlewareData: h
    }
};
async function Qi(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: i,
        rects: s,
        elements: a,
        strategy: l
    } = e, {
        boundary: u = "clippingAncestors",
        rootBoundary: c = "viewport",
        elementContext: d = "floating",
        altBoundary: f = !1,
        padding: h = 0
    } = wn(t, e), v = nw(h), w = a[f ? d === "floating" ? "reference" : "floating" : d], m = Ba(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null || n ? w : w.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
        boundary: u,
        rootBoundary: c,
        strategy: l
    })), p = d === "floating" ? {
        x: r,
        y: o,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), S = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = Ba(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: p,
        offsetParent: y,
        strategy: l
    }) : p);
    return {
        top: (m.top - E.top + v.top) / S.y,
        bottom: (E.bottom - m.bottom + v.bottom) / S.y,
        left: (m.left - E.left + v.left) / S.x,
        right: (E.right - m.right + v.right) / S.x
    }
}
const sP = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                platform: s,
                elements: a,
                middlewareData: l
            } = t, {
                element: u,
                padding: c = 0
            } = wn(e, t) || {};
            if (u == null) return {};
            const d = nw(c),
                f = {
                    x: n,
                    y: r
                },
                h = kf(o),
                v = bf(h),
                g = await s.getDimensions(u),
                w = h === "y",
                m = w ? "top" : "left",
                p = w ? "bottom" : "right",
                y = w ? "clientHeight" : "clientWidth",
                S = i.reference[v] + i.reference[h] - f[h] - i.floating[v],
                E = f[h] - i.reference[h],
                T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
            let b = T ? T[y] : 0;
            (!b || !await (s.isElement == null ? void 0 : s.isElement(T))) && (b = a.floating[y] || i.floating[v]);
            const k = S / 2 - E / 2,
                D = b / 2 - g[v] / 2 - 1,
                A = or(d[m], D),
                _ = or(d[p], D),
                j = A,
                U = b - g[v] - _,
                L = b / 2 - g[v] / 2 + k,
                H = Hc(j, L, U),
                z = !l.arrow && Ko(o) != null && L !== H && i.reference[v] / 2 - (L < j ? A : _) - g[v] / 2 < 0,
                W = z ? L < j ? L - j : L - U : 0;
            return {
                [h]: f[h] + W,
                data: {
                    [h]: H,
                    centerOffset: L - H - W,
                    ...z && {
                        alignmentOffset: W
                    }
                },
                reset: z
            }
        }
    }),
    aP = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: i,
                    rects: s,
                    initialPlacement: a,
                    platform: l,
                    elements: u
                } = t, {
                    mainAxis: c = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: f,
                    fallbackStrategy: h = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: g = !0,
                    ...w
                } = wn(e, t);
                if ((n = i.arrow) != null && n.alignmentOffset) return {};
                const m = xn(o),
                    p = Xt(a),
                    y = xn(a) === a,
                    S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                    E = f || (y || !g ? [za(a)] : Jk(a)),
                    T = v !== "none";
                !f && T && E.push(...rP(a, g, v, S));
                const b = [a, ...E],
                    k = await Qi(t, w),
                    D = [];
                let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                if (c && D.push(k[m]), d) {
                    const L = Zk(o, s, S);
                    D.push(k[L[0]], k[L[1]])
                }
                if (A = [...A, {
                        placement: o,
                        overflows: D
                    }], !D.every(L => L <= 0)) {
                    var _, j;
                    const L = (((_ = i.flip) == null ? void 0 : _.index) || 0) + 1,
                        H = b[L];
                    if (H && (!(d === "alignment" ? p !== Xt(H) : !1) || A.every(P => P.overflows[0] > 0 && Xt(P.placement) === p))) return {
                        data: {
                            index: L,
                            overflows: A
                        },
                        reset: {
                            placement: H
                        }
                    };
                    let z = (j = A.filter(W => W.overflows[0] <= 0).sort((W, P) => W.overflows[1] - P.overflows[1])[0]) == null ? void 0 : j.placement;
                    if (!z) switch (h) {
                        case "bestFit":
                            {
                                var U;
                                const W = (U = A.filter(P => {
                                    if (T) {
                                        const R = Xt(P.placement);
                                        return R === p || R === "y"
                                    }
                                    return !0
                                }).map(P => [P.placement, P.overflows.filter(R => R > 0).reduce((R, I) => R + I, 0)]).sort((P, R) => P[1] - R[1])[0]) == null ? void 0 : U[0];W && (z = W);
                                break
                            }
                        case "initialPlacement":
                            z = a;
                            break
                    }
                    if (o !== z) return {
                        reset: {
                            placement: z
                        }
                    }
                }
                return {}
            }
        }
    };

function nm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function rm(e) {
    return Qk.some(t => e[t] >= 0)
}
const lP = function(e) {
        return e === void 0 && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
                const {
                    rects: n
                } = t, {
                    strategy: r = "referenceHidden",
                    ...o
                } = wn(e, t);
                switch (r) {
                    case "referenceHidden":
                        {
                            const i = await Qi(t, { ...o,
                                    elementContext: "reference"
                                }),
                                s = nm(i, n.reference);
                            return {
                                data: {
                                    referenceHiddenOffsets: s,
                                    referenceHidden: rm(s)
                                }
                            }
                        }
                    case "escaped":
                        {
                            const i = await Qi(t, { ...o,
                                    altBoundary: !0
                                }),
                                s = nm(i, n.floating);
                            return {
                                data: {
                                    escapedOffsets: s,
                                    escaped: rm(s)
                                }
                            }
                        }
                    default:
                        return {}
                }
            }
        }
    },
    rw = new Set(["left", "top"]);
async function uP(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = xn(n), a = Ko(n), l = Xt(n) === "y", u = rw.has(s) ? -1 : 1, c = i && l ? -1 : 1, d = wn(t, e);
    let {
        mainAxis: f,
        crossAxis: h,
        alignmentAxis: v
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
        x: h * c,
        y: f * u
    } : {
        x: f * u,
        y: h * c
    }
}
const cP = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: i,
                    placement: s,
                    middlewareData: a
                } = t, l = await uP(t, e);
                return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + l.x,
                    y: i + l.y,
                    data: { ...l,
                        placement: s
                    }
                }
            }
        }
    },
    dP = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: a = {
                        fn: w => {
                            let {
                                x: m,
                                y: p
                            } = w;
                            return {
                                x: m,
                                y: p
                            }
                        }
                    },
                    ...l
                } = wn(e, t), u = {
                    x: n,
                    y: r
                }, c = await Qi(t, l), d = Xt(xn(o)), f = Tf(d);
                let h = u[f],
                    v = u[d];
                if (i) {
                    const w = f === "y" ? "top" : "left",
                        m = f === "y" ? "bottom" : "right",
                        p = h + c[w],
                        y = h - c[m];
                    h = Hc(p, h, y)
                }
                if (s) {
                    const w = d === "y" ? "top" : "left",
                        m = d === "y" ? "bottom" : "right",
                        p = v + c[w],
                        y = v - c[m];
                    v = Hc(p, v, y)
                }
                const g = a.fn({ ...t,
                    [f]: h,
                    [d]: v
                });
                return { ...g,
                    data: {
                        x: g.x - n,
                        y: g.y - r,
                        enabled: {
                            [f]: i,
                            [d]: s
                        }
                    }
                }
            }
        }
    },
    fP = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: i,
                    middlewareData: s
                } = t, {
                    offset: a = 0,
                    mainAxis: l = !0,
                    crossAxis: u = !0
                } = wn(e, t), c = {
                    x: n,
                    y: r
                }, d = Xt(o), f = Tf(d);
                let h = c[f],
                    v = c[d];
                const g = wn(a, t),
                    w = typeof g == "number" ? {
                        mainAxis: g,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...g
                    };
                if (l) {
                    const y = f === "y" ? "height" : "width",
                        S = i.reference[f] - i.floating[y] + w.mainAxis,
                        E = i.reference[f] + i.reference[y] - w.mainAxis;
                    h < S ? h = S : h > E && (h = E)
                }
                if (u) {
                    var m, p;
                    const y = f === "y" ? "width" : "height",
                        S = rw.has(xn(o)),
                        E = i.reference[d] - i.floating[y] + (S && ((m = s.offset) == null ? void 0 : m[d]) || 0) + (S ? 0 : w.crossAxis),
                        T = i.reference[d] + i.reference[y] + (S ? 0 : ((p = s.offset) == null ? void 0 : p[d]) || 0) - (S ? w.crossAxis : 0);
                    v < E ? v = E : v > T && (v = T)
                }
                return {
                    [f]: h,
                    [d]: v
                }
            }
        }
    },
    hP = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    rects: i,
                    platform: s,
                    elements: a
                } = t, {
                    apply: l = () => {},
                    ...u
                } = wn(e, t), c = await Qi(t, u), d = xn(o), f = Ko(o), h = Xt(o) === "y", {
                    width: v,
                    height: g
                } = i.floating;
                let w, m;
                d === "top" || d === "bottom" ? (w = d, m = f === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (m = d, w = f === "end" ? "top" : "bottom");
                const p = g - c.top - c.bottom,
                    y = v - c.left - c.right,
                    S = or(g - c[w], p),
                    E = or(v - c[m], y),
                    T = !t.middlewareData.shift;
                let b = S,
                    k = E;
                if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = y), (r = t.middlewareData.shift) != null && r.enabled.y && (b = p), T && !f) {
                    const A = ot(c.left, 0),
                        _ = ot(c.right, 0),
                        j = ot(c.top, 0),
                        U = ot(c.bottom, 0);
                    h ? k = v - 2 * (A !== 0 || _ !== 0 ? A + _ : ot(c.left, c.right)) : b = g - 2 * (j !== 0 || U !== 0 ? j + U : ot(c.top, c.bottom))
                }
                await l({ ...t,
                    availableWidth: k,
                    availableHeight: b
                });
                const D = await s.getDimensions(a.floating);
                return v !== D.width || g !== D.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Tl() {
    return typeof window < "u"
}

function Go(e) {
    return ow(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function sn(e) {
    var t;
    return (t = (ow(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function ow(e) {
    return Tl() ? e instanceof Node || e instanceof at(e).Node : !1
}

function Ft(e) {
    return Tl() ? e instanceof Element || e instanceof at(e).Element : !1
}

function nn(e) {
    return Tl() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1
}

function om(e) {
    return !Tl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot
}
const pP = new Set(["inline", "contents"]);

function us(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = zt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !pP.has(o)
}
const mP = new Set(["table", "td", "th"]);

function gP(e) {
    return mP.has(Go(e))
}
const yP = [":popover-open", ":modal"];

function bl(e) {
    return yP.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}
const vP = ["transform", "translate", "scale", "rotate", "perspective"],
    wP = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    xP = ["paint", "layout", "strict", "content"];

function Pf(e) {
    const t = Af(),
        n = Ft(e) ? zt(e) : e;
    return vP.some(r => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || wP.some(r => (n.willChange || "").includes(r)) || xP.some(r => (n.contain || "").includes(r))
}

function SP(e) {
    let t = ir(e);
    for (; nn(t) && !Io(t);) {
        if (Pf(t)) return t;
        if (bl(t)) return null;
        t = ir(t)
    }
    return null
}

function Af() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const CP = new Set(["html", "body", "#document"]);

function Io(e) {
    return CP.has(Go(e))
}

function zt(e) {
    return at(e).getComputedStyle(e)
}

function kl(e) {
    return Ft(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}

function ir(e) {
    if (Go(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || om(e) && e.host || sn(e);
    return om(t) ? t.host : t
}

function iw(e) {
    const t = ir(e);
    return Io(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nn(t) && us(t) ? t : iw(t)
}

function Yi(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = iw(e),
        i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = at(o);
    if (i) {
        const a = Kc(s);
        return t.concat(s, s.visualViewport || [], us(o) ? o : [], a && n ? Yi(a) : [])
    }
    return t.concat(o, Yi(o, [], n))
}

function Kc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}

function sw(e) {
    const t = zt(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = nn(e),
        i = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        a = Fa(n) !== i || Fa(r) !== s;
    return a && (n = i, r = s), {
        width: n,
        height: r,
        $: a
    }
}

function Rf(e) {
    return Ft(e) ? e : e.contextElement
}

function xo(e) {
    const t = Rf(e);
    if (!nn(t)) return Jt(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: i
        } = sw(t);
    let s = (i ? Fa(n.width) : n.width) / r,
        a = (i ? Fa(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
        x: s,
        y: a
    }
}
const EP = Jt(0);

function aw(e) {
    const t = at(e);
    return !Af() || !t.visualViewport ? EP : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function TP(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== at(e) ? !1 : t
}

function Fr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        i = Rf(e);
    let s = Jt(1);
    t && (r ? Ft(r) && (s = xo(r)) : s = xo(e));
    const a = TP(i, n, r) ? aw(i) : Jt(0);
    let l = (o.left + a.x) / s.x,
        u = (o.top + a.y) / s.y,
        c = o.width / s.x,
        d = o.height / s.y;
    if (i) {
        const f = at(i),
            h = r && Ft(r) ? at(r) : r;
        let v = f,
            g = Kc(v);
        for (; g && r && h !== v;) {
            const w = xo(g),
                m = g.getBoundingClientRect(),
                p = zt(g),
                y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x,
                S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
            l *= w.x, u *= w.y, c *= w.x, d *= w.y, l += y, u += S, v = at(g), g = Kc(v)
        }
    }
    return Ba({
        width: c,
        height: d,
        x: l,
        y: u
    })
}

function Nf(e, t) {
    const n = kl(e).scrollLeft;
    return t ? t.left + n : Fr(sn(e)).left + n
}

function lw(e, t, n) {
    n === void 0 && (n = !1);
    const r = e.getBoundingClientRect(),
        o = r.left + t.scrollLeft - (n ? 0 : Nf(e, r)),
        i = r.top + t.scrollTop;
    return {
        x: o,
        y: i
    }
}

function bP(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const i = o === "fixed",
        s = sn(r),
        a = t ? bl(t.floating) : !1;
    if (r === s || a && i) return n;
    let l = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = Jt(1);
    const c = Jt(0),
        d = nn(r);
    if ((d || !d && !i) && ((Go(r) !== "body" || us(s)) && (l = kl(r)), nn(r))) {
        const h = Fr(r);
        u = xo(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop
    }
    const f = s && !d && !i ? lw(s, l, !0) : Jt(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
    }
}

function kP(e) {
    return Array.from(e.getClientRects())
}

function PP(e) {
    const t = sn(e),
        n = kl(e),
        r = e.ownerDocument.body,
        o = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Nf(e);
    const a = -n.scrollTop;
    return zt(r).direction === "rtl" && (s += ot(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: i,
        x: s,
        y: a
    }
}

function AP(e, t) {
    const n = at(e),
        r = sn(e),
        o = n.visualViewport;
    let i = r.clientWidth,
        s = r.clientHeight,
        a = 0,
        l = 0;
    if (o) {
        i = o.width, s = o.height;
        const u = Af();
        (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop)
    }
    return {
        width: i,
        height: s,
        x: a,
        y: l
    }
}
const RP = new Set(["absolute", "fixed"]);

function NP(e, t) {
    const n = Fr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        i = nn(e) ? xo(e) : Jt(1),
        s = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = o * i.x,
        u = r * i.y;
    return {
        width: s,
        height: a,
        x: l,
        y: u
    }
}

function im(e, t, n) {
    let r;
    if (t === "viewport") r = AP(e, n);
    else if (t === "document") r = PP(sn(e));
    else if (Ft(t)) r = NP(t, n);
    else {
        const o = aw(e);
        r = {
            x: t.x - o.x,
            y: t.y - o.y,
            width: t.width,
            height: t.height
        }
    }
    return Ba(r)
}

function uw(e, t) {
    const n = ir(e);
    return n === t || !Ft(n) || Io(n) ? !1 : zt(n).position === "fixed" || uw(n, t)
}

function MP(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Yi(e, [], !1).filter(a => Ft(a) && Go(a) !== "body"),
        o = null;
    const i = zt(e).position === "fixed";
    let s = i ? ir(e) : e;
    for (; Ft(s) && !Io(s);) {
        const a = zt(s),
            l = Pf(s);
        !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && RP.has(o.position) || us(s) && !l && uw(e, s)) ? r = r.filter(c => c !== s) : o = a, s = ir(s)
    }
    return t.set(e, r), r
}

function DP(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const s = [...n === "clippingAncestors" ? bl(t) ? [] : MP(t, this._c) : [].concat(n), r],
        a = s[0],
        l = s.reduce((u, c) => {
            const d = im(t, c, o);
            return u.top = ot(d.top, u.top), u.right = or(d.right, u.right), u.bottom = or(d.bottom, u.bottom), u.left = ot(d.left, u.left), u
        }, im(t, a, o));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}

function OP(e) {
    const {
        width: t,
        height: n
    } = sw(e);
    return {
        width: t,
        height: n
    }
}

function LP(e, t, n) {
    const r = nn(t),
        o = sn(t),
        i = n === "fixed",
        s = Fr(e, !0, i, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = Jt(0);

    function u() {
        l.x = Nf(o)
    }
    if (r || !r && !i)
        if ((Go(t) !== "body" || us(o)) && (a = kl(t)), r) {
            const h = Fr(t, !0, i, t);
            l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop
        } else o && u();
    i && !r && o && u();
    const c = o && !r && !i ? lw(o, a) : Jt(0),
        d = s.left + a.scrollLeft - l.x - c.x,
        f = s.top + a.scrollTop - l.y - c.y;
    return {
        x: d,
        y: f,
        width: s.width,
        height: s.height
    }
}

function xu(e) {
    return zt(e).position === "static"
}

function sm(e, t) {
    if (!nn(e) || zt(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return sn(e) === n && (n = n.ownerDocument.body), n
}

function cw(e, t) {
    const n = at(e);
    if (bl(e)) return n;
    if (!nn(e)) {
        let o = ir(e);
        for (; o && !Io(o);) {
            if (Ft(o) && !xu(o)) return o;
            o = ir(o)
        }
        return n
    }
    let r = sm(e, t);
    for (; r && gP(r) && xu(r);) r = sm(r, t);
    return r && Io(r) && xu(r) && !Pf(r) ? n : r || SP(e) || n
}
const jP = async function(e) {
    const t = this.getOffsetParent || cw,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: LP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function IP(e) {
    return zt(e).direction === "rtl"
}
const _P = {
    convertOffsetParentRelativeRectToViewportRelativeRect: bP,
    getDocumentElement: sn,
    getClippingRect: DP,
    getOffsetParent: cw,
    getElementRects: jP,
    getClientRects: kP,
    getDimensions: OP,
    getScale: xo,
    isElement: Ft,
    isRTL: IP
};

function dw(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}

function VP(e, t) {
    let n = null,
        r;
    const o = sn(e);

    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), n = null
    }

    function s(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), i();
        const u = e.getBoundingClientRect(),
            {
                left: c,
                top: d,
                width: f,
                height: h
            } = u;
        if (a || t(), !f || !h) return;
        const v = Fs(d),
            g = Fs(o.clientWidth - (c + f)),
            w = Fs(o.clientHeight - (d + h)),
            m = Fs(c),
            y = {
                rootMargin: -v + "px " + -g + "px " + -w + "px " + -m + "px",
                threshold: ot(0, or(1, l)) || 1
            };
        let S = !0;

        function E(T) {
            const b = T[0].intersectionRatio;
            if (b !== l) {
                if (!S) return s();
                b ? s(!1, b) : r = setTimeout(() => {
                    s(!1, 1e-7)
                }, 1e3)
            }
            b === 1 && !dw(u, e.getBoundingClientRect()) && s(), S = !1
        }
        try {
            n = new IntersectionObserver(E, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(E, y)
        }
        n.observe(e)
    }
    return s(!0), i
}

function FP(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: i = !0,
        elementResize: s = typeof ResizeObserver == "function",
        layoutShift: a = typeof IntersectionObserver == "function",
        animationFrame: l = !1
    } = r, u = Rf(e), c = o || i ? [...u ? Yi(u) : [], ...Yi(t)] : [];
    c.forEach(m => {
        o && m.addEventListener("scroll", n, {
            passive: !0
        }), i && m.addEventListener("resize", n)
    });
    const d = u && a ? VP(u, n) : null;
    let f = -1,
        h = null;
    s && (h = new ResizeObserver(m => {
        let [p] = m;
        p && p.target === u && h && (h.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
            var y;
            (y = h) == null || y.observe(t)
        })), n()
    }), u && !l && h.observe(u), h.observe(t));
    let v, g = l ? Fr(e) : null;
    l && w();

    function w() {
        const m = Fr(e);
        g && !dw(g, m) && n(), g = m, v = requestAnimationFrame(w)
    }
    return n(), () => {
        var m;
        c.forEach(p => {
            o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n)
        }), d == null || d(), (m = h) == null || m.disconnect(), h = null, l && cancelAnimationFrame(v)
    }
}
const zP = cP,
    BP = dP,
    $P = aP,
    UP = hP,
    HP = lP,
    am = sP,
    WP = fP,
    KP = (e, t, n) => {
        const r = new Map,
            o = {
                platform: _P,
                ...n
            },
            i = { ...o.platform,
                _c: r
            };
        return iP(e, t, { ...o,
            platform: i
        })
    };
var GP = typeof document < "u",
    QP = function() {},
    oa = GP ? x.useLayoutEffect : QP;

function $a(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!$a(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !$a(e[i], t[i])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function fw(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function lm(e, t) {
    const n = fw(e);
    return Math.round(t * n) / n
}

function Su(e) {
    const t = x.useRef(e);
    return oa(() => {
        t.current = e
    }), t
}

function YP(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: i,
            floating: s
        } = {},
        transform: a = !0,
        whileElementsMounted: l,
        open: u
    } = e, [c, d] = x.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [f, h] = x.useState(r);
    $a(f, r) || h(r);
    const [v, g] = x.useState(null), [w, m] = x.useState(null), p = x.useCallback(P => {
        P !== T.current && (T.current = P, g(P))
    }, []), y = x.useCallback(P => {
        P !== b.current && (b.current = P, m(P))
    }, []), S = i || v, E = s || w, T = x.useRef(null), b = x.useRef(null), k = x.useRef(c), D = l != null, A = Su(l), _ = Su(o), j = Su(u), U = x.useCallback(() => {
        if (!T.current || !b.current) return;
        const P = {
            placement: t,
            strategy: n,
            middleware: f
        };
        _.current && (P.platform = _.current), KP(T.current, b.current, P).then(R => {
            const I = { ...R,
                isPositioned: j.current !== !1
            };
            L.current && !$a(k.current, I) && (k.current = I, as.flushSync(() => {
                d(I)
            }))
        })
    }, [f, t, n, _, j]);
    oa(() => {
        u === !1 && k.current.isPositioned && (k.current.isPositioned = !1, d(P => ({ ...P,
            isPositioned: !1
        })))
    }, [u]);
    const L = x.useRef(!1);
    oa(() => (L.current = !0, () => {
        L.current = !1
    }), []), oa(() => {
        if (S && (T.current = S), E && (b.current = E), S && E) {
            if (A.current) return A.current(S, E, U);
            U()
        }
    }, [S, E, U, A, D]);
    const H = x.useMemo(() => ({
            reference: T,
            floating: b,
            setReference: p,
            setFloating: y
        }), [p, y]),
        z = x.useMemo(() => ({
            reference: S,
            floating: E
        }), [S, E]),
        W = x.useMemo(() => {
            const P = {
                position: n,
                left: 0,
                top: 0
            };
            if (!z.floating) return P;
            const R = lm(z.floating, c.x),
                I = lm(z.floating, c.y);
            return a ? { ...P,
                transform: "translate(" + R + "px, " + I + "px)",
                ...fw(z.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: R,
                top: I
            }
        }, [n, a, z.floating, c.x, c.y]);
    return x.useMemo(() => ({ ...c,
        update: U,
        refs: H,
        elements: z,
        floatingStyles: W
    }), [c, U, H, z, W])
}
const XP = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? am({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? am({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    qP = (e, t) => ({ ...zP(e),
        options: [e, t]
    }),
    ZP = (e, t) => ({ ...BP(e),
        options: [e, t]
    }),
    JP = (e, t) => ({ ...WP(e),
        options: [e, t]
    }),
    eA = (e, t) => ({ ...$P(e),
        options: [e, t]
    }),
    tA = (e, t) => ({ ...UP(e),
        options: [e, t]
    }),
    nA = (e, t) => ({ ...HP(e),
        options: [e, t]
    }),
    rA = (e, t) => ({ ...XP(e),
        options: [e, t]
    });
var oA = "Arrow",
    hw = x.forwardRef((e, t) => {
        const {
            children: n,
            width: r = 10,
            height: o = 5,
            ...i
        } = e;
        return C.jsx(ke.svg, { ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : C.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
hw.displayName = oA;
var iA = hw;

function sA(e) {
    const [t, n] = x.useState(void 0);
    return tn(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const i = o[0];
                let s, a;
                if ("borderBoxSize" in i) {
                    const l = i.borderBoxSize,
                        u = Array.isArray(l) ? l[0] : l;
                    s = u.inlineSize, a = u.blockSize
                } else s = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: s,
                    height: a
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var pw = "Popper",
    [mw, gw] = Ho(pw),
    [EO, yw] = mw(pw),
    vw = "PopperAnchor",
    ww = x.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, i = yw(vw, n), s = x.useRef(null), a = ut(t, s);
        return x.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || s.current)
        }), r ? null : C.jsx(ke.div, { ...o,
            ref: a
        })
    });
ww.displayName = vw;
var Mf = "PopperContent",
    [aA, lA] = mw(Mf),
    xw = x.forwardRef((e, t) => {
        var ee, $r, Cn, fr, En, Ur;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: o = 0,
            align: i = "center",
            alignOffset: s = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: v,
            ...g
        } = e, w = yw(Mf, n), [m, p] = x.useState(null), y = ut(t, Tn => p(Tn)), [S, E] = x.useState(null), T = sA(S), b = (T == null ? void 0 : T.width) ?? 0,
k = (T == null ? void 0 : T.height) ?? 0, D = r + (i !== "center" ? "-" + i : ""), A = typeof c == "number" ? c : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...c
        }, _ = Array.isArray(u) ? u : [u], j = _.length > 0, U = {
            padding: A,
            boundary: _.filter(cA),
            altBoundary: j
        }, {
            refs: L,
            floatingStyles: H,
            placement: z,
            isPositioned: W,
            middlewareData: P
        } = YP({
            strategy: "fixed",
            placement: D,
            whileElementsMounted: (...Tn) => FP(...Tn, {
                animationFrame: h === "always"
            }),
            elements: {
                reference: w.anchor
            },
            middleware: [qP({
                mainAxis: o + k,
                alignmentAxis: s
            }), l && ZP({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === "partial" ? JP() : void 0,
                ...U
            }), l && eA({ ...U
            }), tA({ ...U,
                apply: ({
                    elements: Tn,
                    rects: ps,
                    availableWidth: Vl,
                    availableHeight: ms
                }) => {
                    const {
                        width: Fl,
                        height: qo
                    } = ps.reference, Hr = Tn.floating.style;
                    Hr.setProperty("--radix-popper-available-width", `${Vl}px`), Hr.setProperty("--radix-popper-available-height", `${ms}px`), Hr.setProperty("--radix-popper-anchor-width", `${Fl}px`), Hr.setProperty("--radix-popper-anchor-height", `${qo}px`)
                }
            }), S && rA({
                element: S,
                padding: a
            }), dA({
                arrowWidth: b,
                arrowHeight: k
            }), f && nA({
                strategy: "referenceHidden",
                ...U
            })]
        }), [R, I] = Ew(z), $ = rr(v);
        tn(() => {
            W && ($ == null || $())
        }, [W, $]);
        const B = (ee = P.arrow) == null ? void 0 : ee.x,
            Y = ($r = P.arrow) == null ? void 0 : $r.y,
            q = ((Cn = P.arrow) == null ? void 0 : Cn.centerOffset) !== 0,
            [xe, Le] = x.useState();
        return tn(() => {
            m && Le(window.getComputedStyle(m).zIndex)
        }, [m]), C.jsx("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...H,
                transform: W ? H.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: xe,
                "--radix-popper-transform-origin": [(fr = P.transformOrigin) == null ? void 0 : fr.x, (En = P.transformOrigin) == null ? void 0 : En.y].join(" "),
                ...((Ur = P.hide) == null ? void 0 : Ur.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: C.jsx(aA, {
                scope: n,
                placedSide: R,
                onArrowChange: E,
                arrowX: B,
                arrowY: Y,
                shouldHideArrow: q,
                children: C.jsx(ke.div, {
                    "data-side": R,
                    "data-align": I,
                    ...g,
                    ref: y,
                    style: { ...g.style,
                        animation: W ? void 0 : "none"
                    }
                })
            })
        })
    });
xw.displayName = Mf;
var Sw = "PopperArrow",
    uA = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    Cw = x.forwardRef(function(t, n) {
        const {
            __scopePopper: r,
            ...o
        } = t, i = lA(Sw, r), s = uA[i.placedSide];
        return C.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [s]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0
            },
            children: C.jsx(iA, { ...o,
                ref: n,
                style: { ...o.style,
                    display: "block"
                }
            })
        })
    });
Cw.displayName = Sw;

function cA(e) {
    return e !== null
}
var dA = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, m, p;
        const {
            placement: n,
            rects: r,
            middlewareData: o
        } = t, s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, c] = Ew(n), d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[c], f = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
h = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let v = "",
            g = "";
        return u === "bottom" ? (v = s ? d : `${f}px`, g = `${-l}px`) : u === "top" ? (v = s ? d : `${f}px`, g = `${r.floating.height+l}px`) : u === "right" ? (v = `${-l}px`, g = s ? d : `${h}px`) : u === "left" && (v = `${r.floating.width+l}px`, g = s ? d : `${h}px`), {
            data: {
                x: v,
                y: g
            }
        }
    }
});

function Ew(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
var fA = ww,
    hA = xw,
    pA = Cw,
    [Pl, TO] = Ho("Tooltip", [gw]),
    Df = gw(),
    Tw = "TooltipProvider",
    mA = 700,
    um = "tooltip.open",
    [gA, bw] = Pl(Tw),
    kw = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = mA,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: i
        } = e, s = x.useRef(!0), a = x.useRef(!1), l = x.useRef(0);
        return x.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u)
        }, []), C.jsx(gA, {
            scope: t,
            isOpenDelayedRef: s,
            delayDuration: n,
            onOpen: x.useCallback(() => {
                window.clearTimeout(l.current), s.current = !1
            }, []),
            onClose: x.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => s.current = !0, r)
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: x.useCallback(u => {
                a.current = u
            }, []),
            disableHoverableContent: o,
            children: i
        })
    };
kw.displayName = Tw;
var Pw = "Tooltip",
    [bO, Al] = Pl(Pw),
    Gc = "TooltipTrigger",
    yA = x.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Al(Gc, n), i = bw(Gc, n), s = Df(n), a = x.useRef(null), l = ut(t, a, o.onTriggerChange), u = x.useRef(!1), c = x.useRef(!1), d = x.useCallback(() => u.current = !1, []);
        return x.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), C.jsx(fA, {
            asChild: !0,
            ...s,
            children: C.jsx(ke.button, {
                "aria-describedby": o.open ? o.contentId : void 0,
                "data-state": o.stateAttribute,
                ...r,
                ref: l,
                onPointerMove: we(e.onPointerMove, f => {
                    f.pointerType !== "touch" && !c.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), c.current = !0)
                }),
                onPointerLeave: we(e.onPointerLeave, () => {
                    o.onTriggerLeave(), c.current = !1
                }),
                onPointerDown: we(e.onPointerDown, () => {
                    o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", d, {
                        once: !0
                    })
                }),
                onFocus: we(e.onFocus, () => {
                    u.current || o.onOpen()
                }),
                onBlur: we(e.onBlur, o.onClose),
                onClick: we(e.onClick, o.onClose)
            })
        })
    });
yA.displayName = Gc;
var vA = "TooltipPortal",
    [kO, wA] = Pl(vA, {
        forceMount: void 0
    }),
    _o = "TooltipContent",
    Aw = x.forwardRef((e, t) => {
        const n = wA(_o, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...i
            } = e,
            s = Al(_o, e.__scopeTooltip);
        return C.jsx(xl, {
            present: r || s.open,
            children: s.disableHoverableContent ? C.jsx(Rw, {
                side: o,
                ...i,
                ref: t
            }) : C.jsx(xA, {
                side: o,
                ...i,
                ref: t
            })
        })
    }),
    xA = x.forwardRef((e, t) => {
        const n = Al(_o, e.__scopeTooltip),
            r = bw(_o, e.__scopeTooltip),
            o = x.useRef(null),
            i = ut(t, o),
            [s, a] = x.useState(null),
            {
                trigger: l,
                onClose: u
            } = n,
            c = o.current,
            {
                onPointerInTransitChange: d
            } = r,
            f = x.useCallback(() => {
                a(null), d(!1)
            }, [d]),
            h = x.useCallback((v, g) => {
                const w = v.currentTarget,
                    m = {
                        x: v.clientX,
                        y: v.clientY
                    },
                    p = bA(m, w.getBoundingClientRect()),
                    y = kA(m, p),
                    S = PA(g.getBoundingClientRect()),
                    E = RA([...y, ...S]);
                a(E), d(!0)
            }, [d]);
        return x.useEffect(() => () => f(), [f]), x.useEffect(() => {
            if (l && c) {
                const v = w => h(w, c),
                    g = w => h(w, l);
                return l.addEventListener("pointerleave", v), c.addEventListener("pointerleave", g), () => {
                    l.removeEventListener("pointerleave", v), c.removeEventListener("pointerleave", g)
                }
            }
        }, [l, c, h, f]), x.useEffect(() => {
            if (s) {
                const v = g => {
                    const w = g.target,
                        m = {
                            x: g.clientX,
                            y: g.clientY
                        },
                        p = (l == null ? void 0 : l.contains(w)) || (c == null ? void 0 : c.contains(w)),
                        y = !AA(m, s);
                    p ? f() : y && (f(), u())
                };
                return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v)
            }
        }, [l, c, s, u, f]), C.jsx(Rw, { ...e,
            ref: i
        })
    }),
    [SA, CA] = Pl(Pw, {
        isInside: !1
    }),
    EA = gb("TooltipContent"),
    Rw = x.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            ...a
        } = e, l = Al(_o, n), u = Df(n), {
            onClose: c
        } = l;
        return x.useEffect(() => (document.addEventListener(um, c), () => document.removeEventListener(um, c)), [c]), x.useEffect(() => {
            if (l.trigger) {
                const d = f => {
                    const h = f.target;
                    h != null && h.contains(l.trigger) && c()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [l.trigger, c]), C.jsx(vf, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: c,
            children: C.jsxs(hA, {
                "data-state": l.stateAttribute,
                ...u,
                ...a,
                ref: t,
                style: { ...a.style,
                    "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                },
                children: [C.jsx(EA, {
                    children: r
                }), C.jsx(SA, {
                    scope: n,
                    isInside: !0,
                    children: C.jsx(Fb, {
                        id: l.contentId,
                        role: "tooltip",
                        children: o || r
                    })
                })]
            })
        })
    });
Aw.displayName = _o;
var Nw = "TooltipArrow",
    TA = x.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Df(n);
        return CA(Nw, n).isInside ? null : C.jsx(pA, { ...o,
            ...r,
            ref: t
        })
    });
TA.displayName = Nw;

function bA(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, i)) {
        case i:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function kA(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function PA(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function AA(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
        const a = t[i],
            l = t[s],
            u = a.x,
            c = a.y,
            d = l.x,
            f = l.y;
        c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (o = !o)
    }
    return o
}

function RA(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), NA(t)
}

function NA(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const i = t[t.length - 1],
                s = t[t.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const i = n[n.length - 1],
                s = n[n.length - 2];
            if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var MA = kw,
    Mw = Aw;
const DA = MA,
    OA = x.forwardRef(({
        className: e,
        sideOffset: t = 4,
        ...n
    }, r) => C.jsx(Mw, {
        ref: r,
        sideOffset: t,
        className: on("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    }));
OA.displayName = Mw.displayName;
const Dw = x.createContext({});

function LA(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const jA = typeof window < "u",
    IA = jA ? x.useLayoutEffect : x.useEffect,
    Of = x.createContext(null);

function Lf(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function Ua(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const rn = (e, t, n) => n > t ? t : n < e ? e : n;
let Rl = () => {},
    Vo = () => {};
const sr = {},
    Ow = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function Lw(e) {
    return typeof e == "object" && e !== null
}
const jw = e => /^0[^.\s]+$/u.test(e);

function Iw(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const wt = e => e,
    _A = (e, t) => n => t(e(n)),
    cs = (...e) => e.reduce(_A),
    Xi = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    };
class jf {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Lf(this.subscriptions, t), () => Ua(this.subscriptions, t)
    }
    notify(t, n, r) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const s = this.subscriptions[i];
                    s && s(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const tt = e => e * 1e3,
    yt = e => e / 1e3;

function _w(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Vw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    VA = 1e-7,
    FA = 12;

function zA(e, t, n, r, o) {
    let i, s, a = 0;
    do s = t + (n - t) / 2, i = Vw(s, r, o) - e, i > 0 ? n = s : t = s; while (Math.abs(i) > VA && ++a < FA);
    return s
}

function ds(e, t, n, r) {
    if (e === t && n === r) return wt;
    const o = i => zA(i, 0, 1, e, n);
    return i => i === 0 || i === 1 ? i : Vw(o(i), t, r)
}
const Fw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    zw = e => t => 1 - e(1 - t),
    Bw = ds(.33, 1.53, .69, .99),
    If = zw(Bw),
    $w = Fw(If),
    Uw = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * If(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    _f = e => 1 - Math.sin(Math.acos(e)),
    Hw = zw(_f),
    Ww = Fw(_f),
    BA = ds(.42, 0, 1, 1),
    $A = ds(0, 0, .58, 1),
    Kw = ds(.42, 0, .58, 1),
    UA = e => Array.isArray(e) && typeof e[0] != "number",
    Gw = e => Array.isArray(e) && typeof e[0] == "number",
    cm = {
        linear: wt,
        easeIn: BA,
        easeInOut: Kw,
        easeOut: $A,
        circIn: _f,
        circInOut: Ww,
        circOut: Hw,
        backIn: If,
        backInOut: $w,
        backOut: Bw,
        anticipate: Uw
    },
    HA = e => typeof e == "string",
    dm = e => {
        if (Gw(e)) {
            Vo(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            const [t, n, r, o] = e;
            return ds(t, n, r, o)
        } else if (HA(e)) return Vo(cm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), cm[e];
        return e
    },
    zs = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    fm = {
        value: null,
        addProjectionMetrics: null
    };

function WA(e, t) {
    let n = new Set,
        r = new Set,
        o = !1,
        i = !1;
    const s = new WeakSet;
    let a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = 0;

    function u(d) {
        s.has(d) && (c.schedule(d), e()), l++, d(a)
    }
    const c = {
        schedule: (d, f = !1, h = !1) => {
            const g = h && o ? n : r;
            return f && s.add(d), g.add(d), d
        },
        cancel: d => {
            r.delete(d), s.delete(d)
        },
        process: d => {
            if (a = d, o) {
                i = !0;
                return
            }
            o = !0;
            const f = n;
            n = r, r = f, n.forEach(u), t && fm.value && fm.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, i && (i = !1, c.process(d))
        }
    };
    return c
}
const KA = 40;

function Qw(e, t) {
    let n = !1,
        r = !0;
    const o = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        i = () => n = !0,
        s = zs.reduce((y, S) => (y[S] = WA(i, t ? S : void 0), y), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: c,
            update: d,
            preRender: f,
            render: h,
            postRender: v
        } = s,
        g = () => {
            const y = sr.useManualTiming,
                S = y ? o.timestamp : performance.now();
            n = !1, y || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(S - o.timestamp, KA), 1)), o.timestamp = S, o.isProcessing = !0, a.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), h.process(o), v.process(o), o.isProcessing = !1, n && t && (r = !1, e(g))
        },
        w = () => {
            n = !0, r = !0, o.isProcessing || e(g)
        };
    return {
        schedule: zs.reduce((y, S) => {
            const E = s[S];
            return y[S] = (T, b = !1, k = !1) => (n || w(), E.schedule(T, b, k)), y
        }, {}),
        cancel: y => {
            for (let S = 0; S < zs.length; S++) s[zs[S]].cancel(y)
        },
        state: o,
        steps: s
    }
}
const {
    schedule: oe,
    cancel: ar,
    state: Ne,
    steps: Cu
} = Qw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wt, !0);
let ia;

function GA() {
    ia = void 0
}
const He = {
        now: () => (ia === void 0 && He.set(Ne.isProcessing || sr.useManualTiming ? Ne.timestamp : performance.now()), ia),
        set: e => {
            ia = e, queueMicrotask(GA)
        }
    },
    Yw = e => t => typeof t == "string" && t.startsWith(e),
    Xw = Yw("--"),
    QA = Yw("var(--"),
    Vf = e => QA(e) ? YA.test(e.split("/*")[0].trim()) : !1,
    YA = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

function hm(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Qo = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    qi = { ...Qo,
        transform: e => rn(0, 1, e)
    },
    Bs = { ...Qo,
        default: 1
    },
    bi = e => Math.round(e * 1e5) / 1e5,
    Ff = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function XA(e) {
    return e == null
}
const qA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    zf = (e, t) => n => !!(typeof n == "string" && qA.test(n) && n.startsWith(e) || t && !XA(n) && Object.prototype.hasOwnProperty.call(n, t)),
    qw = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [o, i, s, a] = r.match(Ff);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(s),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    ZA = e => rn(0, 255, e),
    Eu = { ...Qo,
        transform: e => Math.round(ZA(e))
    },
    Cr = {
        test: zf("rgb", "red"),
        parse: qw("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Eu.transform(e) + ", " + Eu.transform(t) + ", " + Eu.transform(n) + ", " + bi(qi.transform(r)) + ")"
    };

function JA(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Qc = {
        test: zf("#"),
        parse: JA,
        transform: Cr.transform
    },
    fs = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    Dn = fs("deg"),
    en = fs("%"),
    F = fs("px"),
    eR = fs("vh"),
    tR = fs("vw"),
    pm = { ...en,
        parse: e => en.parse(e) / 100,
        transform: e => en.transform(e * 100)
    },
    lo = {
        test: zf("hsl", "hue"),
        parse: qw("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + en.transform(bi(t)) + ", " + en.transform(bi(n)) + ", " + bi(qi.transform(r)) + ")"
    },
    Se = {
        test: e => Cr.test(e) || Qc.test(e) || lo.test(e),
        parse: e => Cr.test(e) ? Cr.parse(e) : lo.test(e) ? lo.parse(e) : Qc.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Cr.transform(e) : lo.transform(e),
        getAnimatableNone: e => {
            const t = Se.parse(e);
            return t.alpha = 0, Se.transform(t)
        }
    },
    nR = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function rR(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(Ff)) == null ? void 0 : t.length) || 0) + (((n = e.match(nR)) == null ? void 0 : n.length) || 0) > 0
}
const Zw = "number",
    Jw = "color",
    oR = "var",
    iR = "var(",
    mm = "${}",
    sR = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Fo(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        o = [];
    let i = 0;
    const a = t.replace(sR, l => (Se.test(l) ? (r.color.push(i), o.push(Jw), n.push(Se.parse(l))) : l.startsWith(iR) ? (r.var.push(i), o.push(oR), n.push(l)) : (r.number.push(i), o.push(Zw), n.push(parseFloat(l))), ++i, mm)).split(mm);
    return {
        values: n,
        split: a,
        indexes: r,
        types: o
    }
}

function aR(e) {
    return Fo(e).values
}

function ex({
    split: e,
    types: t
}) {
    const n = e.length;
    return r => {
        let o = "";
        for (let i = 0; i < n; i++)
            if (o += e[i], r[i] !== void 0) {
                const s = t[i];
                s === Zw ? o += bi(r[i]) : s === Jw ? o += Se.transform(r[i]) : o += r[i]
            }
        return o
    }
}

function lR(e) {
    return ex(Fo(e))
}
const uR = e => typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e,
    cR = (e, t) => typeof e == "number" ? t != null && t.trim().endsWith("/") ? e : 0 : uR(e);

function dR(e) {
    const t = Fo(e);
    return ex(t)(t.values.map((r, o) => cR(r, t.split[o])))
}
const _t = {
    test: rR,
    parse: aR,
    createTransformer: lR,
    getAnimatableNone: dR
};

function Tu(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function fR({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let o = 0,
        i = 0,
        s = 0;
    if (!t) o = i = s = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        o = Tu(l, a, e + 1 / 3), i = Tu(l, a, e), s = Tu(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(s * 255),
        alpha: r
    }
}

function Ha(e, t) {
    return n => n > 0 ? t : e
}
const le = (e, t, n) => e + (t - e) * n,
    bu = (e, t, n) => {
        const r = e * e,
            o = n * (t * t - r) + r;
        return o < 0 ? 0 : Math.sqrt(o)
    },
    hR = [Qc, Cr, lo],
    pR = e => hR.find(t => t.test(e));

function gm(e) {
    const t = pR(e);
    if (Rl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
    let n = t.parse(e);
    return t === lo && (n = fR(n)), n
}
const ym = (e, t) => {
        const n = gm(e),
            r = gm(t);
        if (!n || !r) return Ha(e, t);
        const o = { ...n
        };
        return i => (o.red = bu(n.red, r.red, i), o.green = bu(n.green, r.green, i), o.blue = bu(n.blue, r.blue, i), o.alpha = le(n.alpha, r.alpha, i), Cr.transform(o))
    },
    Yc = new Set(["none", "hidden"]);

function mR(e, t) {
    return Yc.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function gR(e, t) {
    return n => le(e, t, n)
}

function Bf(e) {
    return typeof e == "number" ? gR : typeof e == "string" ? Vf(e) ? Ha : Se.test(e) ? ym : wR : Array.isArray(e) ? tx : typeof e == "object" ? Se.test(e) ? ym : yR : Ha
}

function tx(e, t) {
    const n = [...e],
        r = n.length,
        o = e.map((i, s) => Bf(i)(i, t[s]));
    return i => {
        for (let s = 0; s < r; s++) n[s] = o[s](i);
        return n
    }
}

function yR(e, t) {
    const n = { ...e,
            ...t
        },
        r = {};
    for (const o in n) e[o] !== void 0 && t[o] !== void 0 && (r[o] = Bf(e[o])(e[o], t[o]));
    return o => {
        for (const i in r) n[i] = r[i](o);
        return n
    }
}

function vR(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let o = 0; o < t.values.length; o++) {
        const i = t.types[o],
            s = e.indexes[i][r[i]],
            a = e.values[s] ?? 0;
        n[o] = a, r[i]++
    }
    return n
}
const wR = (e, t) => {
    const n = _t.createTransformer(t),
        r = Fo(e),
        o = Fo(t);
    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Yc.has(e) && !o.values.length || Yc.has(t) && !r.values.length ? mR(e, t) : cs(tx(vR(r, o), o.values), n) : (Rl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Ha(e, t))
};

function nx(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? le(e, t, n) : Bf(e)(e, t)
}
const xR = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: (n = !0) => oe.update(t, n),
            stop: () => ar(t),
            now: () => Ne.isProcessing ? Ne.timestamp : He.now()
        }
    },
    rx = (e, t, n = 10) => {
        let r = "";
        const o = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < o; i++) r += Math.round(e(i / (o - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    Wa = 2e4;

function $f(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Wa;) t += n, r = e.next(t);
    return t >= Wa ? 1 / 0 : t
}

function SR(e, t = 100, n) {
    const r = n({ ...e,
            keyframes: [0, t]
        }),
        o = Math.min($f(r), Wa);
    return {
        type: "keyframes",
        ease: i => r.next(o * i).value / t,
        duration: yt(o)
    }
}
const fe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};

function Xc(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const CR = 12;

function ER(e, t, n) {
    let r = n;
    for (let o = 1; o < CR; o++) r = r - e(r) / t(r);
    return r
}
const ku = .001;

function TR({
    duration: e = fe.duration,
    bounce: t = fe.bounce,
    velocity: n = fe.velocity,
    mass: r = fe.mass
}) {
    let o, i;
    Rl(e <= tt(fe.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let s = 1 - t;
    s = rn(fe.minDamping, fe.maxDamping, s), e = rn(fe.minDuration, fe.maxDuration, yt(e)), s < 1 ? (o = u => {
        const c = u * s,
            d = c * e,
            f = c - n,
            h = Xc(u, s),
            v = Math.exp(-d);
        return ku - f / h * v
    }, i = u => {
        const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = Xc(Math.pow(u, 2), s);
        return (-o(u) + ku > 0 ? -1 : 1) * ((f - h) * v) / g
    }) : (o = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -ku + c * d
    }, i = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const a = 5 / e,
        l = ER(o, i, a);
    if (e = tt(e), isNaN(l)) return {
        stiffness: fe.stiffness,
        damping: fe.damping,
        duration: e
    }; {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: s * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const bR = ["duration", "bounce"],
    kR = ["stiffness", "damping", "mass"];

function vm(e, t) {
    return t.some(n => e[n] !== void 0)
}

function PR(e) {
    let t = {
        velocity: fe.velocity,
        stiffness: fe.stiffness,
        damping: fe.damping,
        mass: fe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!vm(e, kR) && vm(e, bR))
        if (t.velocity = 0, e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                o = r * r,
                i = 2 * rn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(o);
            t = { ...t,
                mass: fe.mass,
                stiffness: o,
                damping: i
            }
        } else {
            const n = TR({ ...e,
                velocity: 0
            });
            t = { ...t,
                ...n,
                mass: fe.mass
            }, t.isResolvedFromDuration = !0
        }
    return t
}

function Ka(e = fe.visualDuration, t = fe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: o
    } = n;
    const i = n.keyframes[0],
        s = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: i
        },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: d,
            velocity: f,
            isResolvedFromDuration: h
        } = PR({ ...n,
            velocity: -yt(n.velocity || 0)
        }),
        v = f || 0,
        g = u / (2 * Math.sqrt(l * c)),
        w = s - i,
        m = yt(Math.sqrt(l / c)),
        p = Math.abs(w) < 5;
    r || (r = p ? fe.restSpeed.granular : fe.restSpeed.default), o || (o = p ? fe.restDelta.granular : fe.restDelta.default);
    let y, S, E, T, b, k;
    if (g < 1) E = Xc(m, g), T = (v + g * m * w) / E, y = A => {
        const _ = Math.exp(-g * m * A);
        return s - _ * (T * Math.sin(E * A) + w * Math.cos(E * A))
    }, b = g * m * T + w * E, k = g * m * w - T * E, S = A => Math.exp(-g * m * A) * (b * Math.sin(E * A) + k * Math.cos(E * A));
    else if (g === 1) {
        y = _ => s - Math.exp(-m * _) * (w + (v + m * w) * _);
        const A = v + m * w;
        S = _ => Math.exp(-m * _) * (m * A * _ - v)
    } else {
        const A = m * Math.sqrt(g * g - 1);
        y = L => {
            const H = Math.exp(-g * m * L),
                z = Math.min(A * L, 300);
            return s - H * ((v + g * m * w) * Math.sinh(z) + A * w * Math.cosh(z)) / A
        };
        const _ = (v + g * m * w) / A,
            j = g * m * _ - w * A,
            U = g * m * w - _ * A;
        S = L => {
            const H = Math.exp(-g * m * L),
                z = Math.min(A * L, 300);
            return H * (j * Math.sinh(z) + U * Math.cosh(z))
        }
    }
    const D = {
        calculatedDuration: h && d || null,
        velocity: A => tt(S(A)),
        next: A => {
            if (!h && g < 1) {
                const j = Math.exp(-g * m * A),
                    U = Math.sin(E * A),
                    L = Math.cos(E * A),
                    H = s - j * (T * U + w * L),
                    z = tt(j * (b * U + k * L));
                return a.done = Math.abs(z) <= r && Math.abs(s - H) <= o, a.value = a.done ? s : H, a
            }
            const _ = y(A);
            if (h) a.done = A >= d;
            else {
                const j = tt(S(A));
                a.done = Math.abs(j) <= r && Math.abs(s - _) <= o
            }
            return a.value = a.done ? s : _, a
        },
        toString: () => {
            const A = Math.min($f(D), Wa),
                _ = rx(j => D.next(A * j).value, A, 30);
            return A + "ms " + _
        },
        toTransition: () => {}
    };
    return D
}
Ka.applyToOptions = e => {
    const t = SR(e, 100, Ka);
    return e.ease = t.ease, e.duration = tt(t.duration), e.type = "keyframes", e
};
const AR = 5;

function ox(e, t, n) {
    const r = Math.max(t - AR, 0);
    return _w(n - e(r), t - r)
}

function qc({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: o = 10,
    bounceStiffness: i = 500,
    modifyTarget: s,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: c
}) {
    const d = e[0],
        f = {
            done: !1,
            value: d
        },
        h = k => a !== void 0 && k < a || l !== void 0 && k > l,
        v = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let g = n * t;
    const w = d + g,
        m = s === void 0 ? w : s(w);
    m !== w && (g = m - d);
    const p = k => -g * Math.exp(-k / r),
        y = k => m + p(k),
        S = k => {
            const D = p(k),
                A = y(k);
            f.done = Math.abs(D) <= u, f.value = f.done ? m : A
        };
    let E, T;
    const b = k => {
        h(f.value) && (E = k, T = Ka({
            keyframes: [f.value, v(f.value)],
            velocity: ox(y, k, f.value),
            damping: o,
            stiffness: i,
            restDelta: u,
            restSpeed: c
        }))
    };
    return b(0), {
        calculatedDuration: null,
        next: k => {
            let D = !1;
            return !T && E === void 0 && (D = !0, S(k), b(k)), E !== void 0 && k >= E ? T.next(k - E) : (!D && S(k), f)
        }
    }
}

function RR(e, t, n) {
    const r = [],
        o = n || sr.mix || nx,
        i = e.length - 1;
    for (let s = 0; s < i; s++) {
        let a = o(e[s], e[s + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[s] || wt : t;
            a = cs(l, a)
        }
        r.push(a)
    }
    return r
}

function NR(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: o
} = {}) {
    const i = e.length;
    if (Vo(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1) return () => t[0];
    if (i === 2 && t[0] === t[1]) return () => t[1];
    const s = e[0] === e[1];
    e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = RR(t, r, o),
        l = a.length,
        u = c => {
            if (s && c < e[0]) return t[0];
            let d = 0;
            if (l > 1)
                for (; d < e.length - 2 && !(c < e[d + 1]); d++);
            const f = Xi(e[d], e[d + 1], c);
            return a[d](f)
        };
    return n ? c => u(rn(e[0], e[i - 1], c)) : u
}

function MR(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const o = Xi(0, t, r);
        e.push(le(n, 1, o))
    }
}

function DR(e) {
    const t = [0];
    return MR(t, e.length - 1), t
}

function OR(e, t) {
    return e.map(n => n * t)
}

function LR(e, t) {
    return e.map(() => t || Kw).splice(0, e.length - 1)
}

function ki({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const o = UA(r) ? r.map(dm) : dm(r),
        i = {
            done: !1,
            value: t[0]
        },
        s = OR(n && n.length === t.length ? n : DR(t), e),
        a = NR(s, t, {
            ease: Array.isArray(o) ? o : LR(t, o)
        });
    return {
        calculatedDuration: e,
        next: l => (i.value = a(l), i.done = l >= e, i)
    }
}
const jR = e => e !== null;

function Nl(e, {
    repeat: t,
    repeatType: n = "loop"
}, r, o = 1) {
    const i = e.filter(jR),
        a = o < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !a || r === void 0 ? i[a] : r
}
const IR = {
    decay: qc,
    inertia: qc,
    tween: ki,
    keyframes: ki,
    spring: Ka
};

function ix(e) {
    typeof e.type == "string" && (e.type = IR[e.type])
}
class Uf {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const _R = e => e / 100;
class Ga extends Uf {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
            done: !1,
            value: void 0
        }, this.stop = () => {
            var r, o;
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== He.now() && this.tick(He.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (o = (r = this.options).onStop) == null || o.call(r))
        }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: t
        } = this;
        ix(t);
        const {
            type: n = ki,
            repeat: r = 0,
            repeatDelay: o = 0,
            repeatType: i,
            velocity: s = 0
        } = t;
        let {
            keyframes: a
        } = t;
        const l = n || ki;
        l !== ki && typeof a[0] != "number" && (this.mixKeyframes = cs(_R, nx(a[0], a[1])), a = [0, 100]);
        const u = l({ ...t,
            keyframes: a
        });
        i === "mirror" && (this.mirroredGenerator = l({ ...t,
            keyframes: [...a].reverse(),
            velocity: -s
        })), u.calculatedDuration === null && (u.calculatedDuration = $f(u));
        const {
            calculatedDuration: c
        } = u;
        this.calculatedDuration = c, this.resolvedDuration = c + o, this.totalDuration = this.resolvedDuration * (r + 1) - o, this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: o,
            mixKeyframes: i,
            mirroredGenerator: s,
            resolvedDuration: a,
            calculatedDuration: l
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: u = 0,
            keyframes: c,
            repeat: d,
            repeatType: f,
            repeatDelay: h,
            type: v,
            onUpdate: g,
            finalKeyframe: w
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - o / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            p = this.playbackSpeed >= 0 ? m < 0 : m > o;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let y = this.currentTime,
            S = r;
        if (d) {
            const k = Math.min(this.currentTime, o) / a;
            let D = Math.floor(k),
                A = k % 1;
            !A && k >= 1 && (A = 1), A === 1 && D--, D = Math.min(D, d + 1), !!(D % 2) && (f === "reverse" ? (A = 1 - A, h && (A -= h / a)) : f === "mirror" && (S = s)), y = rn(0, 1, A) * a
        }
        let E;
        p ? (this.delayState.value = c[0], E = this.delayState) : E = S.next(y), i && !p && (E.value = i(E.value));
        let {
            done: T
        } = E;
        !p && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return b && v !== qc && (E.value = Nl(c, this.options, w, this.speed)), g && g(E.value), b && this.finish(), E
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return yt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(this.currentTime)
    }
    set time(t) {
        t = tt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
    }
    getGeneratorVelocity() {
        const t = this.currentTime;
        if (t <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(t);
        const n = this.generator.next(t).value;
        return ox(r => this.generator.next(r).value, t, n)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        n && this.driver && this.updateTime(He.now()), this.playbackSpeed = t, n && this.driver && (this.time = yt(this.currentTime))
    }
    play() {
        var o, i;
        if (this.isStopped) return;
        const {
            driver: t = xR,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t(s => this.tick(s))), (i = (o = this.options).onPlay) == null || i.call(o);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(He.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
    }
}

function VR(e) {
    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
const Er = e => e * 180 / Math.PI,
    Zc = e => {
        const t = Er(Math.atan2(e[1], e[0]));
        return Jc(t)
    },
    FR = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Zc,
        rotateZ: Zc,
        skewX: e => Er(Math.atan(e[1])),
        skewY: e => Er(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Jc = e => (e = e % 360, e < 0 && (e += 360), e),
    wm = Zc,
    xm = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Sm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    zR = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: xm,
        scaleY: Sm,
        scale: e => (xm(e) + Sm(e)) / 2,
        rotateX: e => Jc(Er(Math.atan2(e[6], e[5]))),
        rotateY: e => Jc(Er(Math.atan2(-e[2], e[0]))),
        rotateZ: wm,
        rotate: wm,
        skewX: e => Er(Math.atan(e[4])),
        skewY: e => Er(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function ed(e) {
    return e.includes("scale") ? 1 : 0
}

function td(e, t) {
    if (!e || e === "none") return ed(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, o;
    if (n) r = zR, o = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = FR, o = a
    }
    if (!o) return ed(t);
    const i = r[t],
        s = o[1].split(",").map($R);
    return typeof i == "function" ? i(s) : s[i]
}
const BR = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return td(n, t)
};

function $R(e) {
    return parseFloat(e.trim())
}
const Yo = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Xo = new Set(Yo),
    Cm = e => e === Qo || e === F,
    UR = new Set(["x", "y", "z"]),
    HR = Yo.filter(e => !UR.has(e));

function WR(e) {
    const t = [];
    return HR.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const Kn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0",
        boxSizing: r
    }) => {
        const o = e.max - e.min;
        return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n)
    },
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0",
        boxSizing: r
    }) => {
        const o = e.max - e.min;
        return r === "border-box" ? o : o - parseFloat(t) - parseFloat(n)
    },
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => td(t, "x"),
    y: (e, {
        transform: t
    }) => td(t, "y")
};
Kn.translateX = Kn.x;
Kn.translateY = Kn.y;
const Dr = new Set;
let nd = !1,
    rd = !1,
    od = !1;

function sx() {
    if (rd) {
        const e = Array.from(Dr).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const o = WR(r);
            o.length && (n.set(r, o), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const o = n.get(r);
            o && o.forEach(([i, s]) => {
                var a;
                (a = r.getValue(i)) == null || a.set(s)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    rd = !1, nd = !1, Dr.forEach(e => e.complete(od)), Dr.clear()
}

function ax() {
    Dr.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (rd = !0)
    })
}

function KR() {
    od = !0, ax(), sx(), od = !1
}
class Hf {
    constructor(t, n, r, o, i, s = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = i, this.isAsync = s
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (Dr.add(this), nd || (nd = !0, oe.read(ax), oe.resolveKeyframes(sx))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: o
        } = this;
        if (t[0] === null) {
            const i = o == null ? void 0 : o.get(),
                s = t[t.length - 1];
            if (i !== void 0) t[0] = i;
            else if (r && n) {
                const a = r.readValue(n, s);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = s), o && i === void 0 && o.set(t[0])
        }
        VR(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Dr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Dr.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const GR = e => e.startsWith("--");

function lx(e, t, n) {
    GR(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const QR = {};

function ux(e, t) {
    const n = Iw(e);
    return () => QR[t] ?? n()
}
const YR = ux(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    cx = ux(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    pi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Em = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: pi([0, .65, .55, 1]),
        circOut: pi([.55, 0, 1, .45]),
        backIn: pi([.31, .01, .66, -.59]),
        backOut: pi([.33, 1.53, .69, .99])
    };

function dx(e, t) {
    if (e) return typeof e == "function" ? cx() ? rx(e, t) : "ease-out" : Gw(e) ? pi(e) : Array.isArray(e) ? e.map(n => dx(n, t) || Em.easeOut) : Em[e]
}

function XR(e, t, n, {
    delay: r = 0,
    duration: o = 300,
    repeat: i = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l
} = {}, u = void 0) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const d = dx(a, o);
    Array.isArray(d) && (c.easing = d);
    const f = {
        delay: r,
        duration: o,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: s === "reverse" ? "alternate" : "normal"
    };
    return u && (f.pseudoElement = u), e.animate(c, f)
}

function fx(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function qR({
    type: e,
    ...t
}) {
    return fx(e) && cx() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
}
class hx extends Uf {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
        const {
            element: n,
            name: r,
            keyframes: o,
            pseudoElement: i,
            allowFlatten: s = !1,
            finalKeyframe: a,
            onComplete: l
        } = t;
        this.isPseudoElement = !!i, this.allowFlatten = s, this.options = t, Vo(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const u = qR(t);
        this.animation = XR(n, r, o, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !i) {
                const c = Nl(o, this.options, a, this.speed);
                this.updateMotionValue && this.updateMotionValue(c), lx(n, r, c), this.animation.cancel()
            }
            l == null || l(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, o;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((o = (r = this.animation).commitStyles) == null || o.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return yt(Number(t))
    }
    get iterationDuration() {
        const {
            delay: t = 0
        } = this.options || {};
        return this.duration + yt(t)
    }
    get time() {
        return yt(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        const n = this.finishedTime !== null;
        this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = tt(t), n && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({
        timeline: t,
        rangeStart: n,
        rangeEnd: r,
        observe: o
    }) {
        var i;
        return this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, t && YR() ? (this.animation.timeline = t, n && (this.animation.rangeStart = n), r && (this.animation.rangeEnd = r), wt) : o(this)
    }
}
const px = {
    anticipate: Uw,
    backInOut: $w,
    circInOut: Ww
};

function ZR(e) {
    return e in px
}

function JR(e) {
    typeof e.ease == "string" && ZR(e.ease) && (e.ease = px[e.ease])
}
const Pu = 10;
class eN extends hx {
    constructor(t) {
        JR(t), ix(t), super(t), t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime), this.options = t
    }
    updateMotionValue(t) {
        const {
            motionValue: n,
            onUpdate: r,
            onComplete: o,
            element: i,
            ...s
        } = this.options;
        if (!n) return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new Ga({ ...s,
                autoplay: !1
            }),
            l = Math.max(Pu, He.now() - this.startTime),
            u = rn(0, Pu, l - Pu),
            c = a.sample(l).value,
            {
                name: d
            } = this.options;
        i && d && lx(i, d, c), n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u), a.stop()
    }
}
const Tm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (_t.test(e) || e === "0") && !e.startsWith("url("));

function tN(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function nN(e, t, n, r) {
    const o = e[0];
    if (o === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
        s = Tm(o, t),
        a = Tm(i, t);
    return Rl(s === a, `You are trying to animate ${t} from "${o}" to "${i}". "${s?i:o}" is not an animatable value.`, "value-not-animatable"), !s || !a ? !1 : tN(e) || (n === "spring" || fx(n)) && r
}

function id(e) {
    e.duration = 0, e.type = "keyframes"
}
const mx = new Set(["opacity", "clipPath", "filter", "transform"]),
    rN = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;

function oN(e) {
    for (let t = 0; t < e.length; t++)
        if (typeof e[t] == "string" && rN.test(e[t])) return !0;
    return !1
}
const iN = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
    sN = Iw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function aN(e) {
    var d;
    const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: o,
        damping: i,
        type: s,
        keyframes: a
    } = e;
    if (!(((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current) instanceof HTMLElement)) return !1;
    const {
        onUpdate: u,
        transformTemplate: c
    } = t.owner.getProps();
    return sN() && n && (mx.has(n) || iN.has(n) && oN(a)) && (n !== "transform" || !c) && !u && !r && o !== "mirror" && i !== 0 && s !== "inertia"
}
const lN = 40;
class uN extends Uf {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: o = 0,
        repeatDelay: i = 0,
        repeatType: s = "loop",
        keyframes: a,
        name: l,
        motionValue: u,
        element: c,
        ...d
    }) {
        var v;
        super(), this.stop = () => {
            var g, w;
            this._animation && (this._animation.stop(), (g = this.stopTimeline) == null || g.call(this)), (w = this.keyframeResolver) == null || w.cancel()
        }, this.createdAt = He.now();
        const f = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: o,
                repeatDelay: i,
                repeatType: s,
                name: l,
                motionValue: u,
                element: c,
                ...d
            },
            h = (c == null ? void 0 : c.KeyframeResolver) || Hf;
        this.keyframeResolver = new h(a, (g, w, m) => this.onKeyframesResolved(g, w, f, !m), l, u, c), (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, o) {
        var m, p;
        this.keyframeResolver = void 0;
        const {
            name: i,
            type: s,
            velocity: a,
            delay: l,
            isHandoff: u,
            onUpdate: c
        } = r;
        this.resolvedAt = He.now();
        let d = !0;
        nN(t, i, s, a) || (d = !1, (sr.instantAnimations || !l) && (c == null || c(Nl(t, r, n))), t[0] = t[t.length - 1], id(r), r.repeat = 0);
        const h = {
                startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > lN ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t
            },
            v = d && !u && aN(h),
            g = (p = (m = h.motionValue) == null ? void 0 : m.owner) == null ? void 0 : p.current;
        let w;
        if (v) try {
            w = new eN({ ...h,
                element: g
            })
        } catch {
            w = new Ga(h)
        } else w = new Ga(h);
        w.finished.then(() => {
            this.notifyFinished()
        }).catch(wt), this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then(() => {})
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(), KR()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
    }
}

function gx(e, t, n, r = 0, o = 1) {
    const i = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t),
        s = e.size,
        a = (s - 1) * r;
    return typeof n == "function" ? n(i, s) : o === 1 ? i * r : a - i * r
}
const cN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function dN(e) {
    const t = cN.exec(e);
    if (!t) return [, ];
    const [, n, r, o] = t;
    return [`--${n??r}`, o]
}
const fN = 4;

function yx(e, t, n = 1) {
    Vo(n <= fN, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r, o] = dN(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const s = i.trim();
        return Ow(s) ? parseFloat(s) : s
    }
    return Vf(o) ? yx(o, t, n + 1) : o
}
const hN = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    pN = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    mN = {
        type: "keyframes",
        duration: .8
    },
    gN = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    yN = (e, {
        keyframes: t
    }) => t.length > 2 ? mN : Xo.has(e) ? e.startsWith("scale") ? pN(t[1]) : hN : gN;

function vx(e, t) {
    if (e != null && e.inherit && t) {
        const {
            inherit: n,
            ...r
        } = e;
        return { ...t,
            ...r
        }
    }
    return e
}

function Wf(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? vx(n, e) : n
}
const vN = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);

function wN(e) {
    for (const t in e)
        if (!vN.has(t)) return !0;
    return !1
}
const Kf = (e, t, n, r = {}, o, i) => s => {
    const a = Wf(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - tt(l);
    const c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: f => {
            t.set(f), a.onUpdate && a.onUpdate(f)
        },
        onComplete: () => {
            s(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: i ? void 0 : o
    };
    wN(a) || Object.assign(c, yN(e, c)), c.duration && (c.duration = tt(c.duration)), c.repeatDelay && (c.repeatDelay = tt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (id(c), c.delay === 0 && (d = !0)), (sr.instantAnimations || sr.skipAnimations || o != null && o.shouldSkipAnimations) && (d = !0, id(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !i && t.get() !== void 0) {
        const f = Nl(c.keyframes, a);
        if (f !== void 0) {
            oe.update(() => {
                c.onUpdate(f), c.onComplete()
            });
            return
        }
    }
    return a.isSync ? new Ga(c) : new uN(c)
};

function bm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Gf(e, t, n, r) {
    if (typeof t == "function") {
        const [o, i] = bm(r);
        t = t(n !== void 0 ? n : e.custom, o, i)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [o, i] = bm(r);
        t = t(n !== void 0 ? n : e.custom, o, i)
    }
    return t
}

function Or(e, t, n) {
    const r = e.getProps();
    return Gf(r, t, n !== void 0 ? n : r.custom, e)
}
const wx = new Set(["width", "height", "top", "left", "right", "bottom", ...Yo]),
    km = 30,
    xN = e => !isNaN(parseFloat(e));
class SN {
    constructor(t, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            var i;
            const o = He.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
                for (const s of this.dependents) s.dirty()
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = He.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = xN(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new jf);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), oe.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = He.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > km) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, km);
        return _w(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function zo(e, t) {
    return new SN(e, t)
}
const sd = e => Array.isArray(e);

function CN(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zo(n))
}

function EN(e) {
    return sd(e) ? e[e.length - 1] || 0 : e
}

function TN(e, t) {
    const n = Or(e, t);
    let {
        transitionEnd: r = {},
        transition: o = {},
        ...i
    } = n || {};
    i = { ...i,
        ...r
    };
    for (const s in i) {
        const a = EN(i[s]);
        CN(e, s, a)
    }
}
const Me = e => !!(e && e.getVelocity);

function bN(e) {
    return !!(Me(e) && e.add)
}

function ad(e, t) {
    const n = e.getValue("willChange");
    if (bN(n)) return n.add(t);
    if (!n && sr.WillChange) {
        const r = new sr.WillChange("auto");
        e.addValue("willChange", r), r.add(t)
    }
}

function Qf(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const kN = "framerAppearId",
    xx = "data-" + Qf(kN);

function Sx(e) {
    return e.props[xx]
}

function PN({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function Cx(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: o
} = {}) {
    let {
        transition: i,
        transitionEnd: s,
        ...a
    } = t;
    const l = e.getDefaultTransition();
    i = i ? vx(i, l) : l;
    const u = i == null ? void 0 : i.reduceMotion;
    r && (i = r);
    const c = [],
        d = o && e.animationState && e.animationState.getState()[o];
    for (const f in a) {
        const h = e.getValue(f, e.latestValues[f] ?? null),
            v = a[f];
        if (v === void 0 || d && PN(d, f)) continue;
        const g = {
                delay: n,
                ...Wf(i || {}, f)
            },
            w = h.get();
        if (w !== void 0 && !h.isAnimating() && !Array.isArray(v) && v === w && !g.velocity) {
            oe.update(() => h.set(v));
            continue
        }
        let m = !1;
        if (window.MotionHandoffAnimation) {
            const S = Sx(e);
            if (S) {
                const E = window.MotionHandoffAnimation(S, f, oe);
                E !== null && (g.startTime = E, m = !0)
            }
        }
        ad(e, f);
        const p = u ?? e.shouldReduceMotion;
        h.start(Kf(f, h, v, p && wx.has(f) ? {
            type: !1
        } : g, e, m));
        const y = h.animation;
        y && c.push(y)
    }
    if (s) {
        const f = () => oe.update(() => {
            s && TN(e, s)
        });
        c.length ? Promise.all(c).then(f) : f()
    }
    return c
}

function ld(e, t, n = {}) {
    var l;
    const r = Or(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {
        transition: o = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (o = n.transitionOverride);
    const i = r ? () => Promise.all(Cx(e, r, n)) : () => Promise.resolve(),
        s = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: c = 0,
                staggerChildren: d,
                staggerDirection: f
            } = o;
            return AN(e, t, u, c, d, f, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = o;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [i, s] : [s, i];
        return u().then(() => c())
    } else return Promise.all([i(), s(n.delay)])
}

function AN(e, t, n = 0, r = 0, o = 0, i = 1, s) {
    const a = [];
    for (const l of e.variantChildren) l.notify("AnimationStart", t), a.push(ld(l, t, { ...s,
        delay: n + (typeof r == "function" ? 0 : r) + gx(e.variantChildren, l, r, o, i)
    }).then(() => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}

function RN(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => ld(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string") r = ld(e, t, n);
    else {
        const o = typeof t == "function" ? Or(e, t, n.custom) : t;
        r = Promise.all(Cx(e, o, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}
const NN = {
        test: e => e === "auto",
        parse: e => e
    },
    Ex = e => t => t.test(e),
    Tx = [Qo, F, en, Dn, tR, eR, NN],
    Pm = e => Tx.find(Ex(e));

function MN(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || jw(e) : !0
}
const DN = new Set(["brightness", "contrast", "saturate", "opacity"]);

function ON(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Ff) || [];
    if (!r) return e;
    const o = n.replace(r, "");
    let i = DN.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")"
}
const LN = /\b([a-z-]*)\(.*?\)/gu,
    ud = { ..._t,
        getAnimatableNone: e => {
            const t = e.match(LN);
            return t ? t.map(ON).join(" ") : e
        }
    },
    cd = { ..._t,
        getAnimatableNone: e => {
            const t = _t.parse(e);
            return _t.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? { ...r,
                alpha: 1
            } : r))
        }
    },
    Am = { ...Qo,
        transform: Math.round
    },
    jN = {
        rotate: Dn,
        rotateX: Dn,
        rotateY: Dn,
        rotateZ: Dn,
        scale: Bs,
        scaleX: Bs,
        scaleY: Bs,
        scaleZ: Bs,
        skew: Dn,
        skewX: Dn,
        skewY: Dn,
        distance: F,
        translateX: F,
        translateY: F,
        translateZ: F,
        x: F,
        y: F,
        z: F,
        perspective: F,
        transformPerspective: F,
        opacity: qi,
        originX: pm,
        originY: pm,
        originZ: F
    },
    Yf = {
        borderWidth: F,
        borderTopWidth: F,
        borderRightWidth: F,
        borderBottomWidth: F,
        borderLeftWidth: F,
        borderRadius: F,
        borderTopLeftRadius: F,
        borderTopRightRadius: F,
        borderBottomRightRadius: F,
        borderBottomLeftRadius: F,
        width: F,
        maxWidth: F,
        height: F,
        maxHeight: F,
        top: F,
        right: F,
        bottom: F,
        left: F,
        inset: F,
        insetBlock: F,
        insetBlockStart: F,
        insetBlockEnd: F,
        insetInline: F,
        insetInlineStart: F,
        insetInlineEnd: F,
        padding: F,
        paddingTop: F,
        paddingRight: F,
        paddingBottom: F,
        paddingLeft: F,
        paddingBlock: F,
        paddingBlockStart: F,
        paddingBlockEnd: F,
        paddingInline: F,
        paddingInlineStart: F,
        paddingInlineEnd: F,
        margin: F,
        marginTop: F,
        marginRight: F,
        marginBottom: F,
        marginLeft: F,
        marginBlock: F,
        marginBlockStart: F,
        marginBlockEnd: F,
        marginInline: F,
        marginInlineStart: F,
        marginInlineEnd: F,
        fontSize: F,
        backgroundPositionX: F,
        backgroundPositionY: F,
        ...jN,
        zIndex: Am,
        fillOpacity: qi,
        strokeOpacity: qi,
        numOctaves: Am
    },
    IN = { ...Yf,
        color: Se,
        backgroundColor: Se,
        outlineColor: Se,
        fill: Se,
        stroke: Se,
        borderColor: Se,
        borderTopColor: Se,
        borderRightColor: Se,
        borderBottomColor: Se,
        borderLeftColor: Se,
        filter: ud,
        WebkitFilter: ud,
        mask: cd,
        WebkitMask: cd
    },
    bx = e => IN[e],
    _N = new Set([ud, cd]);

function kx(e, t) {
    let n = bx(e);
    return _N.has(n) || (n = _t), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const VN = new Set(["auto", "none", "0"]);

function FN(e, t, n) {
    let r = 0,
        o;
    for (; r < e.length && !o;) {
        const i = e[r];
        typeof i == "string" && !VN.has(i) && Fo(i).values.length && (o = e[r]), r++
    }
    if (o && n)
        for (const i of t) e[i] = kx(n, o)
}
class zN extends Hf {
    constructor(t, n, r, o, i) {
        super(t, n, r, o, i, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let d = t[c];
            if (typeof d == "string" && (d = d.trim(), Vf(d))) {
                const f = yx(d, n.current);
                f !== void 0 && (t[c] = f), c === t.length - 1 && (this.finalKeyframe = d)
            }
        }
        if (this.resolveNoneKeyframes(), !wx.has(r) || t.length !== 2) return;
        const [o, i] = t, s = Pm(o), a = Pm(i), l = hm(o), u = hm(i);
        if (l !== u && Kn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (s !== a)
            if (Cm(s) && Cm(a))
                for (let c = 0; c < t.length; c++) {
                    const d = t[c];
                    typeof d == "string" && (t[c] = parseFloat(d))
                } else Kn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let o = 0; o < t.length; o++)(t[o] === null || MN(t[o])) && r.push(o);
        r.length && FN(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const o = n[n.length - 1];
        o !== void 0 && t.getValue(r, o).jump(o, !1)
    }
    measureEndState() {
        var a;
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current) return;
        const o = t.getValue(n);
        o && o.jump(this.measuredOrigin, !1);
        const i = r.length - 1,
            s = r[i];
        r[i] = Kn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
            t.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function Px(e, t, n) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const o = document.querySelectorAll(e);
        return o ? Array.from(o) : []
    }
    return Array.from(e).filter(r => r != null)
}
const Ax = (e, t) => t && typeof e == "number" ? t.transform(e) : e;

function BN(e) {
    return Lw(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
}
const {
    schedule: Xf,
    cancel: PO
} = Qw(queueMicrotask, !1), At = {
    x: !1,
    y: !1
};

function Rx() {
    return At.x || At.y
}

function $N(e) {
    return e === "x" || e === "y" ? At[e] ? null : (At[e] = !0, () => {
        At[e] = !1
    }) : At.x || At.y ? null : (At.x = At.y = !0, () => {
        At.x = At.y = !1
    })
}

function Nx(e, t) {
    const n = Px(e),
        r = new AbortController,
        o = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, o, () => r.abort()]
}

function UN(e) {
    return !(e.pointerType === "touch" || Rx())
}

function HN(e, t, n = {}) {
    const [r, o, i] = Nx(e, n);
    return r.forEach(s => {
        let a = !1,
            l = !1,
            u;
        const c = () => {
                s.removeEventListener("pointerleave", v)
            },
            d = w => {
                u && (u(w), u = void 0), c()
            },
            f = w => {
                a = !1, window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), l && (l = !1, d(w))
            },
            h = () => {
                a = !0, window.addEventListener("pointerup", f, o), window.addEventListener("pointercancel", f, o)
            },
            v = w => {
                if (w.pointerType !== "touch") {
                    if (a) {
                        l = !0;
                        return
                    }
                    d(w)
                }
            },
            g = w => {
                if (!UN(w)) return;
                l = !1;
                const m = t(s, w);
                typeof m == "function" && (u = m, s.addEventListener("pointerleave", v, o))
            };
        s.addEventListener("pointerenter", g, o), s.addEventListener("pointerdown", h, o)
    }), i
}
const Mx = (e, t) => t ? e === t ? !0 : Mx(e, t.parentElement) : !1,
    qf = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    WN = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function KN(e) {
    return WN.has(e.tagName) || e.isContentEditable === !0
}
const GN = new Set(["INPUT", "SELECT", "TEXTAREA"]);

function QN(e) {
    return GN.has(e.tagName) || e.isContentEditable === !0
}
const sa = new WeakSet;

function Rm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Au(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const YN = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Rm(() => {
        if (sa.has(n)) return;
        Au(n, "down");
        const o = Rm(() => {
                Au(n, "up")
            }),
            i = () => Au(n, "cancel");
        n.addEventListener("keyup", o, t), n.addEventListener("blur", i, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function Nm(e) {
    return qf(e) && !Rx()
}
const Mm = new WeakSet;

function XN(e, t, n = {}) {
    const [r, o, i] = Nx(e, n), s = a => {
        const l = a.currentTarget;
        if (!Nm(a) || Mm.has(a)) return;
        sa.add(l), n.stopPropagation && Mm.add(a);
        const u = t(l, a),
            c = (h, v) => {
                window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), sa.has(l) && sa.delete(l), Nm(h) && typeof u == "function" && u(h, {
                    success: v
                })
            },
            d = h => {
                c(h, l === window || l === document || n.useGlobalTarget || Mx(l, h.target))
            },
            f = h => {
                c(h, !1)
            };
        window.addEventListener("pointerup", d, o), window.addEventListener("pointercancel", f, o)
    };
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, o), BN(a) && (a.addEventListener("focus", u => YN(u, o)), !KN(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), i
}

function Zf(e) {
    return Lw(e) && "ownerSVGElement" in e
}
const aa = new WeakMap;
let On;
const Dx = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : Zf(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
    qN = Dx("inline", "width", "offsetWidth"),
    ZN = Dx("block", "height", "offsetHeight");

function JN({
    target: e,
    borderBoxSize: t
}) {
    var n;
    (n = aa.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return qN(e, t)
            },
            get height() {
                return ZN(e, t)
            }
        })
    })
}

function eM(e) {
    e.forEach(JN)
}

function tM() {
    typeof ResizeObserver > "u" || (On = new ResizeObserver(eM))
}

function nM(e, t) {
    On || tM();
    const n = Px(e);
    return n.forEach(r => {
        let o = aa.get(r);
        o || (o = new Set, aa.set(r, o)), o.add(t), On == null || On.observe(r)
    }), () => {
        n.forEach(r => {
            const o = aa.get(r);
            o == null || o.delete(t), o != null && o.size || On == null || On.unobserve(r)
        })
    }
}
const la = new Set;
let uo;

function rM() {
    uo = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        la.forEach(t => t(e))
    }, window.addEventListener("resize", uo)
}

function oM(e) {
    return la.add(e), uo || rM(), () => {
        la.delete(e), !la.size && typeof uo == "function" && (window.removeEventListener("resize", uo), uo = void 0)
    }
}

function Dm(e, t) {
    return typeof e == "function" ? oM(e) : nM(e, t)
}

function iM(e) {
    return Zf(e) && e.tagName === "svg"
}
const sM = [...Tx, Se, _t],
    aM = e => sM.find(Ex(e)),
    Om = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    co = () => ({
        x: Om(),
        y: Om()
    }),
    Lm = () => ({
        min: 0,
        max: 0
    }),
    Ee = () => ({
        x: Lm(),
        y: Lm()
    }),
    lM = new WeakMap;

function Ml(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Zi(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Jf = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    eh = ["initial", ...Jf];

function Dl(e) {
    return Ml(e.animate) || eh.some(t => Zi(e[t]))
}

function Ox(e) {
    return !!(Dl(e) || e.variants)
}

function uM(e, t, n) {
    for (const r in t) {
        const o = t[r],
            i = n[r];
        if (Me(o)) e.addValue(r, o);
        else if (Me(i)) e.addValue(r, zo(o, {
            owner: e
        }));
        else if (i !== o)
            if (e.hasValue(r)) {
                const s = e.getValue(r);
                s.liveStyle === !0 ? s.jump(o) : s.hasAnimated || s.set(o)
            } else {
                const s = e.getStaticValue(r);
                e.addValue(r, zo(s !== void 0 ? s : o, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const dd = {
        current: null
    },
    Lx = {
        current: !1
    },
    cM = typeof window < "u";

function dM() {
    if (Lx.current = !0, !!cM)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => dd.current = e.matches;
            e.addEventListener("change", t), t()
        } else dd.current = !1
}
const jm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let Qa = {};

function jx(e) {
    Qa = e
}

function fM() {
    return Qa
}
class hM {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: o,
        skipAnimations: i,
        blockInitialAnimation: s,
        visualState: a
    }, l = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Hf, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = He.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, oe.render(this.render, !1, !0))
        };
        const {
            latestValues: u,
            renderState: c
        } = a;
        this.latestValues = u, this.baseTarget = { ...u
        }, this.initialValues = n.initial ? { ...u
        } : {}, this.renderState = c, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.skipAnimationsConfig = i, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = Dl(n), this.isVariantNode = Ox(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const v = f[h];
            u[h] !== void 0 && Me(v) && v.set(u[h])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const o in this.initialValues)(n = this.values.get(o)) == null || n.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
        this.current = t, lM.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, i) => this.bindToMotionValue(i, o)), this.reducedMotionConfig === "POLICE" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Lx.current || dM(), this.shouldReduceMotion = dd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (r = this.parent) == null || r.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(), ar(this.notifyUpdate), ar(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), n.accelerate && mx.has(t) && this.current instanceof HTMLElement) {
            const {
                factory: s,
                keyframes: a,
                times: l,
                ease: u,
                duration: c
            } = n.accelerate, d = new hx({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: u,
                duration: tt(c)
            }), f = s(d);
            this.valueSubscriptions.set(t, () => {
                f(), d.cancel()
            });
            return
        }
        const r = Xo.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const o = n.on("change", s => {
            this.latestValues[t] = s, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let i;
        typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            o(), i && i(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Qa) {
            const n = Qa[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: o
            } = n;
            if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(), i.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ee()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < jm.length; r++) {
            const o = jm[r];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
            const i = "on" + o,
                s = t[i];
            s && (this.propEventSubscriptions[o] = this.on(o, s))
        }
        this.prevMotionValues = uM(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = zo(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (Ow(r) || jw(r)) ? r = parseFloat(r) : !aM(r) && _t.test(n) && (r = kx(t, n)), this.setBaseTarget(t, Me(r) ? r.get() : r)), Me(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var i;
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const s = Gf(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
            s && (r = s[t])
        }
        if (n && r !== void 0) return r;
        const o = this.getBaseTargetFromProps(this.props, t);
        return o !== void 0 && !Me(o) ? o : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new jf), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        Xf.render(this.render)
    }
}
class Ix extends hM {
    constructor() {
        super(...arguments), this.KeyframeResolver = zN
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        Me(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}
class dr {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}

function _x({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function pM({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function mM(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function Ru(e) {
    return e === void 0 || e === 1
}

function fd({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !Ru(e) || !Ru(t) || !Ru(n)
}

function vr(e) {
    return fd(e) || Vx(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function Vx(e) {
    return Im(e.x) || Im(e.y)
}

function Im(e) {
    return e && e !== "0%"
}

function Ya(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o
}

function _m(e, t, n, r, o) {
    return o !== void 0 && (e = Ya(e, o, r)), Ya(e, n, r) + t
}

function hd(e, t = 0, n = 1, r, o) {
    e.min = _m(e.min, t, n, r, o), e.max = _m(e.max, t, n, r, o)
}

function Fx(e, {
    x: t,
    y: n
}) {
    hd(e.x, t.translate, t.scale, t.originPoint), hd(e.y, n.translate, n.scale, n.originPoint)
}
const Vm = .999999999999,
    Fm = 1.0000000000001;

function gM(e, t, n, r = !1) {
    var a;
    const o = n.length;
    if (!o) return;
    t.x = t.y = 1;
    let i, s;
    for (let l = 0; l < o; l++) {
        i = n[l], s = i.projectionDelta;
        const {
            visualElement: u
        } = i.options;
        u && u.props.style && u.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && (Qt(e.x, -i.scroll.offset.x), Qt(e.y, -i.scroll.offset.y)), s && (t.x *= s.x.scale, t.y *= s.y.scale, Fx(e, s)), r && vr(i.latestValues) && ua(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox))
    }
    t.x < Fm && t.x > Vm && (t.x = 1), t.y < Fm && t.y > Vm && (t.y = 1)
}

function Qt(e, t) {
    e.min += t, e.max += t
}

function zm(e, t, n, r, o = .5) {
    const i = le(e.min, e.max, o);
    hd(e, t, n, i, r)
}

function Bm(e, t) {
    return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e
}

function ua(e, t, n) {
    const r = n ?? e;
    zm(e.x, Bm(t.x, r.x), t.scaleX, t.scale, t.originX), zm(e.y, Bm(t.y, r.y), t.scaleY, t.scale, t.originY)
}

function zx(e, t) {
    return _x(mM(e.getBoundingClientRect(), t))
}

function yM(e, t, n) {
    const r = zx(e, n),
        {
            scroll: o
        } = t;
    return o && (Qt(r.x, o.offset.x), Qt(r.y, o.offset.y)), r
}
const vM = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    wM = Yo.length;

function xM(e, t, n) {
    let r = "",
        o = !0;
    for (let i = 0; i < wM; i++) {
        const s = Yo[i],
            a = e[s];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number") l = a === (s.startsWith("scale") ? 1 : 0);
        else {
            const u = parseFloat(a);
            l = s.startsWith("scale") ? u === 1 : u === 0
        }
        if (!l || n) {
            const u = Ax(a, Yf[s]);
            if (!l) {
                o = !1;
                const c = vM[s] || s;
                r += `${c}(${u}) `
            }
            n && (t[s] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r
}

function th(e, t, n) {
    const {
        style: r,
        vars: o,
        transformOrigin: i
    } = e;
    let s = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (Xo.has(l)) {
            s = !0;
            continue
        } else if (Xw(l)) {
            o[l] = u;
            continue
        } else {
            const c = Ax(u, Yf[l]);
            l.startsWith("origin") ? (a = !0, i[l] = c) : r[l] = c
        }
    }
    if (t.transform || (s || n ? r.transform = xM(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: c = 0
        } = i;
        r.transformOrigin = `${l} ${u} ${c}`
    }
}

function Bx(e, {
    style: t,
    vars: n
}, r, o) {
    const i = e.style;
    let s;
    for (s in t) i[s] = t[s];
    o == null || o.applyProjectionStyles(i, r);
    for (s in n) i.setProperty(s, n[s])
}

function $m(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ui = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (F.test(e)) e = parseFloat(e);
                else return e;
            const n = $m(e, t.target.x),
                r = $m(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    SM = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                o = _t.parse(e);
            if (o.length > 5) return r;
            const i = _t.createTransformer(e),
                s = typeof o[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            o[0 + s] /= a, o[1 + s] /= l;
            const u = le(a, l, .5);
            return typeof o[2 + s] == "number" && (o[2 + s] /= u), typeof o[3 + s] == "number" && (o[3 + s] /= u), i(o)
        }
    },
    pd = {
        borderRadius: { ...ui,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: ui,
        borderTopRightRadius: ui,
        borderBottomLeftRadius: ui,
        borderBottomRightRadius: ui,
        boxShadow: SM
    };

function $x(e, {
    layout: t,
    layoutId: n
}) {
    return Xo.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!pd[e] || e === "opacity")
}

function nh(e, t, n) {
    var s;
    const r = e.style,
        o = t == null ? void 0 : t.style,
        i = {};
    if (!r) return i;
    for (const a in r)(Me(r[a]) || o && Me(o[a]) || $x(a, e) || ((s = n == null ? void 0 : n.getValue(a)) == null ? void 0 : s.liveStyle) !== void 0) && (i[a] = r[a]);
    return i
}

function CM(e) {
    return window.getComputedStyle(e)
}
class EM extends Ix {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = Bx
    }
    readValueFromInstance(t, n) {
        var r;
        if (Xo.has(n)) return (r = this.projection) != null && r.isProjecting ? ed(n) : BR(t, n); {
            const o = CM(t),
                i = (Xw(n) ? o.getPropertyValue(n) : o[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return zx(t, n)
    }
    build(t, n, r) {
        th(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return nh(t, n, r)
    }
}
const TM = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    bM = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function kM(e, t, n = 1, r = 0, o = !0) {
    e.pathLength = 1;
    const i = o ? TM : bM;
    e[i.offset] = `${-r}`, e[i.array] = `${t} ${n}`
}
const PM = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

function Ux(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: o,
    pathSpacing: i = 1,
    pathOffset: s = 0,
    ...a
}, l, u, c) {
    if (th(e, a, u), l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: d,
        style: f
    } = e;
    d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete d.transformBox);
    for (const h of PM) d[h] !== void 0 && (f[h] = d[h], delete d[h]);
    t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), o !== void 0 && kM(d, o, i, s, !1)
}
const Hx = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
    Wx = e => typeof e == "string" && e.toLowerCase() === "svg";

function AM(e, t, n, r) {
    Bx(e, t, void 0, r);
    for (const o in t.attrs) e.setAttribute(Hx.has(o) ? o : Qf(o), t.attrs[o])
}

function Kx(e, t, n) {
    const r = nh(e, t, n);
    for (const o in e)
        if (Me(e[o]) || Me(t[o])) {
            const i = Yo.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            r[i] = e[o]
        }
    return r
}
class RM extends Ix {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ee
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Xo.has(n)) {
            const r = bx(n);
            return r && r.default || 0
        }
        return n = Hx.has(n) ? n : Qf(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Kx(t, n, r)
    }
    build(t, n, r) {
        Ux(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, o) {
        AM(t, n, r, o)
    }
    mount(t) {
        this.isSVGTag = Wx(t.tagName), super.mount(t)
    }
}
const NM = eh.length;

function Gx(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Gx(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < NM; n++) {
        const r = eh[n],
            o = e.props[r];
        (Zi(o) || o === !1) && (t[r] = o)
    }
    return t
}

function Qx(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const MM = [...Jf].reverse(),
    DM = Jf.length;

function OM(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => RN(e, n, r)))
}

function LM(e) {
    let t = OM(e),
        n = Um(),
        r = !0,
        o = !1;
    const i = u => (c, d) => {
        var h;
        const f = Or(e, d, u === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: v,
                transitionEnd: g,
                ...w
            } = f;
            c = { ...c,
                ...w,
                ...g
            }
        }
        return c
    };

    function s(u) {
        t = u(e)
    }

    function a(u) {
        const {
            props: c
        } = e, d = Gx(e.parent) || {}, f = [], h = new Set;
        let v = {},
            g = 1 / 0;
        for (let m = 0; m < DM; m++) {
            const p = MM[m],
                y = n[p],
                S = c[p] !== void 0 ? c[p] : d[p],
                E = Zi(S),
                T = p === u ? y.isActive : null;
            T === !1 && (g = m);
            let b = S === d[p] && S !== c[p] && E;
            if (b && (r || o) && e.manuallyAnimateOnMount && (b = !1), y.protectedKeys = { ...v
                }, !y.isActive && T === null || !S && !y.prevProp || Ml(S) || typeof S == "boolean") continue;
            if (p === "exit" && y.isActive && T !== !0) {
                y.prevResolvedValues && (v = { ...v,
                    ...y.prevResolvedValues
                });
                continue
            }
            const k = jM(y.prevProp, S);
            let D = k || p === u && y.isActive && !b && E || m > g && E,
                A = !1;
            const _ = Array.isArray(S) ? S : [S];
            let j = _.reduce(i(p), {});
            T === !1 && (j = {});
            const {
                prevResolvedValues: U = {}
            } = y, L = { ...U,
                ...j
            }, H = P => {
                D = !0, h.has(P) && (A = !0, h.delete(P)), y.needsAnimating[P] = !0;
                const R = e.getValue(P);
                R && (R.liveStyle = !1)
            };
            for (const P in L) {
                const R = j[P],
                    I = U[P];
                if (v.hasOwnProperty(P)) continue;
                let $ = !1;
                sd(R) && sd(I) ? $ = !Qx(R, I) : $ = R !== I, $ ? R != null ? H(P) : h.add(P) : R !== void 0 && h.has(P) ? H(P) : y.protectedKeys[P] = !0
            }
            y.prevProp = S, y.prevResolvedValues = j, y.isActive && (v = { ...v,
                ...j
            }), (r || o) && e.blockInitialAnimation && (D = !1);
            const z = b && k;
            D && (!z || A) && f.push(..._.map(P => {
                const R = {
                    type: p
                };
                if (typeof P == "string" && (r || o) && !z && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: I
                    } = e, $ = Or(I, P);
                    if (I.enteringChildren && $) {
                        const {
                            delayChildren: B
                        } = $.transition || {};
                        R.delay = gx(I.enteringChildren, e, B)
                    }
                }
                return {
                    animation: P,
                    options: R
                }
            }))
        }
        if (h.size) {
            const m = {};
            if (typeof c.initial != "boolean") {
                const p = Or(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                p && p.transition && (m.transition = p.transition)
            }
            h.forEach(p => {
                const y = e.getBaseTarget(p),
                    S = e.getValue(p);
                S && (S.liveStyle = !0), m[p] = y ?? null
            }), f.push({
                animation: m
            })
        }
        let w = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (w = !1), r = !1, o = !1, w ? t(f) : Promise.resolve()
    }

    function l(u, c) {
        var f;
        if (n[u].isActive === c) return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var v;
            return (v = h.animationState) == null ? void 0 : v.setActive(u, c)
        }), n[u].isActive = c;
        const d = a(u);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = Um(), o = !0
        }
    }
}

function jM(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Qx(t, e) : !1
}

function mr(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function Um() {
    return {
        animate: mr(!0),
        whileInView: mr(),
        whileHover: mr(),
        whileTap: mr(),
        whileDrag: mr(),
        whileFocus: mr(),
        exit: mr()
    }
}

function md(e, t) {
    e.min = t.min, e.max = t.max
}

function Pt(e, t) {
    md(e.x, t.x), md(e.y, t.y)
}

function Hm(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}
const Yx = 1e-4,
    IM = 1 - Yx,
    _M = 1 + Yx,
    Xx = .01,
    VM = 0 - Xx,
    FM = 0 + Xx;

function We(e) {
    return e.max - e.min
}

function zM(e, t, n) {
    return Math.abs(e - t) <= n
}

function Wm(e, t, n, r = .5) {
    e.origin = r, e.originPoint = le(t.min, t.max, e.origin), e.scale = We(n) / We(t), e.translate = le(n.min, n.max, e.origin) - e.originPoint, (e.scale >= IM && e.scale <= _M || isNaN(e.scale)) && (e.scale = 1), (e.translate >= VM && e.translate <= FM || isNaN(e.translate)) && (e.translate = 0)
}

function Pi(e, t, n, r) {
    Wm(e.x, t.x, n.x, r ? r.originX : void 0), Wm(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Km(e, t, n, r = 0) {
    const o = r ? le(n.min, n.max, r) : n.min;
    e.min = o + t.min, e.max = e.min + We(t)
}

function BM(e, t, n, r) {
    Km(e.x, t.x, n.x, r == null ? void 0 : r.x), Km(e.y, t.y, n.y, r == null ? void 0 : r.y)
}

function Gm(e, t, n, r = 0) {
    const o = r ? le(n.min, n.max, r) : n.min;
    e.min = t.min - o, e.max = e.min + We(t)
}

function Xa(e, t, n, r) {
    Gm(e.x, t.x, n.x, r == null ? void 0 : r.x), Gm(e.y, t.y, n.y, r == null ? void 0 : r.y)
}

function Qm(e, t, n, r, o) {
    return e -= t, e = Ya(e, 1 / n, r), o !== void 0 && (e = Ya(e, 1 / o, r)), e
}

function $M(e, t = 0, n = 1, r = .5, o, i = e, s = e) {
    if (en.test(t) && (t = parseFloat(t), t = le(s.min, s.max, t / 100) - s.min), typeof t != "number") return;
    let a = le(i.min, i.max, r);
    e === i && (a -= t), e.min = Qm(e.min, t, n, a, o), e.max = Qm(e.max, t, n, a, o)
}

function Ym(e, t, [n, r, o], i, s) {
    $M(e, t[n], t[r], t[o], t.scale, i, s)
}
const UM = ["x", "scaleX", "originX"],
    HM = ["y", "scaleY", "originY"];

function Xm(e, t, n, r) {
    Ym(e.x, t, UM, n ? n.x : void 0, r ? r.x : void 0), Ym(e.y, t, HM, n ? n.y : void 0, r ? r.y : void 0)
}

function qm(e) {
    return e.translate === 0 && e.scale === 1
}

function qx(e) {
    return qm(e.x) && qm(e.y)
}

function Zm(e, t) {
    return e.min === t.min && e.max === t.max
}

function WM(e, t) {
    return Zm(e.x, t.x) && Zm(e.y, t.y)
}

function Jm(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function Zx(e, t) {
    return Jm(e.x, t.x) && Jm(e.y, t.y)
}

function eg(e) {
    return We(e.x) / We(e.y)
}

function tg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}

function Ht(e) {
    return [e("x"), e("y")]
}

function KM(e, t, n) {
    let r = "";
    const o = e.x.translate / t.x,
        i = e.y.translate / t.y,
        s = (n == null ? void 0 : n.z) || 0;
    if ((o || i || s) && (r = `translate3d(${o}px, ${i}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: c,
            rotateX: d,
            rotateY: f,
            skewX: h,
            skewY: v
        } = n;
        u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), h && (r += `skewX(${h}deg) `), v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const Jx = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    GM = Jx.length,
    ng = e => typeof e == "string" ? parseFloat(e) : e,
    rg = e => typeof e == "number" || F.test(e);

function QM(e, t, n, r, o, i) {
    o ? (e.opacity = le(0, n.opacity ?? 1, YM(r)), e.opacityExit = le(t.opacity ?? 1, 0, XM(r))) : i && (e.opacity = le(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let s = 0; s < GM; s++) {
        const a = Jx[s];
        let l = og(t, a),
            u = og(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || rg(l) === rg(u) ? (e[a] = Math.max(le(ng(l), ng(u), r), 0), (en.test(u) || en.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = le(t.rotate || 0, n.rotate || 0, r))
}

function og(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const YM = e1(0, .5, Hw),
    XM = e1(.5, .95, wt);

function e1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Xi(e, t, r))
}

function qM(e, t, n) {
    const r = Me(e) ? e : zo(e);
    return r.start(Kf("", r, t, n)), r.animation
}

function Ji(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
const ZM = (e, t) => e.depth - t.depth;
class JM {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Lf(this.children, t), this.isDirty = !0
    }
    remove(t) {
        Ua(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(ZM), this.isDirty = !1, this.children.forEach(t)
    }
}

function e2(e, t) {
    const n = He.now(),
        r = ({
            timestamp: o
        }) => {
            const i = o - n;
            i >= t && (ar(r), e(i - t))
        };
    return oe.setup(r, !0), () => ar(r)
}

function ca(e) {
    return Me(e) ? e.get() : e
}
class t2 {
    constructor() {
        this.members = []
    }
    add(t) {
        Lf(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead) continue;
            const o = r.instance;
            (!o || o.isConnected === !1) && !r.snapshot && (Ua(this.members, r), r.unmount())
        }
        t.scheduleRender()
    }
    remove(t) {
        if (Ua(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        var n;
        for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
            const o = this.members[r];
            if (o.isPresent !== !1 && ((n = o.instance) == null ? void 0 : n.isConnected) !== !1) return this.promote(o), !0
        }
        return !1
    }
    promote(t, n) {
        var o;
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.updateSnapshot(), t.scheduleRender();
            const {
                layoutDependency: i
            } = r.options, {
                layoutDependency: s
            } = t.options;
            (i === void 0 || i !== s) && (t.resumeFrom = r, n && (r.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (o = t.root) != null && o.isUpdating && (t.isLayoutDirty = !0)), t.options.crossfade === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            var n, r, o, i, s;
            (r = (n = t.options).onExitComplete) == null || r.call(n), (s = (o = t.resumingFrom) == null ? void 0 : (i = o.options).onExitComplete) == null || s.call(i)
        })
    }
    scheduleRender() {
        this.members.forEach(t => t.instance && t.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var t;
        (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0)
    }
}
const da = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    },
    Nu = ["", "X", "Y", "Z"],
    n2 = 1e3;
let r2 = 0;

function Mu(e, t, n, r) {
    const {
        latestValues: o
    } = t;
    o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function t1(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = Sx(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: o,
            layoutId: i
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || i))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && t1(r)
}

function n1({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: o
}) {
    return class {
        constructor(s = {}, a = t == null ? void 0 : t()) {
            this.id = r2++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(s2), this.nodes.forEach(f2), this.nodes.forEach(h2), this.nodes.forEach(a2)
            }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = s, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new JM)
        }
        addEventListener(s, a) {
            return this.eventHandlers.has(s) || this.eventHandlers.set(s, new jf), this.eventHandlers.get(s).add(a)
        }
        notifyListeners(s, ...a) {
            const l = this.eventHandlers.get(s);
            l && l.notify(...a)
        }
        hasListeners(s) {
            return this.eventHandlers.has(s)
        }
        mount(s) {
            if (this.instance) return;
            this.isSVG = Zf(s) && !iM(s), this.instance = s;
            const {
                layoutId: a,
                layout: l,
                visualElement: u
            } = this.options;
            if (u && !u.current && u.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
                let c, d = 0;
                const f = () => this.root.updateBlockedByResize = !1;
                oe.read(() => {
                    d = window.innerWidth
                }), e(s, () => {
                    const h = window.innerWidth;
                    h !== d && (d = h, this.root.updateBlockedByResize = !0, c && c(), c = e2(f, 250), da.hasAnimatedSinceResize && (da.hasAnimatedSinceResize = !1, this.nodes.forEach(ag)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({
                delta: c,
                hasLayoutChanged: d,
                hasRelativeLayoutChanged: f,
                layout: h
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || v2,
                    {
                        onLayoutAnimationStart: g,
                        onLayoutAnimationComplete: w
                    } = u.getProps(),
                    m = !this.targetLayout || !Zx(this.targetLayout, h),
                    p = !d && f;
                if (this.options.layoutRoot || this.resumeFrom || p || d && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const y = { ...Wf(v, "layout"),
                        onPlay: g,
                        onComplete: w
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(c, p)
                } else d || ag(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = h
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const s = this.getStack();
            s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), ar(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(p2), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: s
            } = this.options;
            return s && s.getProps().transformTemplate
        }
        willUpdate(s = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && t1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0, (typeof d.latestValues.x == "string" || typeof d.latestValues.y == "string") && (d.isLayoutDirty = !0), d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                const l = this.updateBlockedByResize;
                this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), l && this.nodes.forEach(u2), this.nodes.forEach(ig);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(sg);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(c2), this.nodes.forEach(d2), this.nodes.forEach(o2), this.nodes.forEach(i2)) : this.nodes.forEach(sg), this.clearAllSnapshots();
            const a = He.now();
            Ne.delta = rn(0, 1e3 / 60, a - Ne.timestamp), Ne.timestamp = a, Ne.isProcessing = !0, Cu.update.process(Ne), Cu.preRender.process(Ne), Cu.render.process(Ne), Ne.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, Xf.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(l2), this.sharedNodes.forEach(m2)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            oe.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !We(this.snapshot.measuredBox.x) && !We(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const s = this.layout;
            this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = Ee()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0)
        }
        updateScroll(s = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (a = !1), a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: s,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!o) return;
            const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !qx(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            s && this.instance && (a || vr(this.latestValues) || c) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(s = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return s && (l = this.removeTransform(l)), w2(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: s
            } = this.options;
            if (!s) return Ee();
            const a = s.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(x2))) {
                const {
                    scroll: c
                } = this.root;
                c && (Qt(a.x, c.offset.x), Qt(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(s) {
            var l;
            const a = Ee();
            if (Pt(a, s), (l = this.scroll) != null && l.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    {
                        scroll: d,
                        options: f
                    } = c;
                c !== this.root && d && f.layoutScroll && (d.wasRoot && Pt(a, s), Qt(a.x, d.offset.x), Qt(a.y, d.offset.y))
            }
            return a
        }
        applyTransform(s, a = !1, l) {
            var c, d;
            const u = l || Ee();
            Pt(u, s);
            for (let f = 0; f < this.path.length; f++) {
                const h = this.path[f];
                !a && h.options.layoutScroll && h.scroll && h !== h.root && (Qt(u.x, -h.scroll.offset.x), Qt(u.y, -h.scroll.offset.y)), vr(h.latestValues) && ua(u, h.latestValues, (c = h.layout) == null ? void 0 : c.layoutBox)
            }
            return vr(this.latestValues) && ua(u, this.latestValues, (d = this.layout) == null ? void 0 : d.layoutBox), u
        }
        removeTransform(s) {
            var l;
            const a = Ee();
            Pt(a, s);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!vr(c.latestValues)) continue;
                let d;
                c.instance && (fd(c.latestValues) && c.updateSnapshot(), d = Ee(), Pt(d, c.measurePageBox())), Xm(a, c.latestValues, (l = c.snapshot) == null ? void 0 : l.layoutBox, d)
            }
            return vr(this.latestValues) && Xm(a, this.latestValues), a
        }
        setTargetDelta(s) {
            this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(s) {
            this.options = { ...this.options,
                ...s,
                crossfade: s.crossfade !== void 0 ? s.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ne.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(s = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(s || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: c,
                layoutId: d
            } = this.options;
            if (!this.layout || !(c || d)) return;
            this.resolvedRelativeTargetAt = Ne.timestamp;
            const f = this.getClosestProjectingParent();
            f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ee(), this.targetWithTransforms = Ee()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), BM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Pt(this.target, this.layout.layoutBox), Fx(this.target, this.targetDelta)) : Pt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || fd(this.parent.latestValues) || Vx(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(s, a, l) {
            this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ee(), this.relativeTargetOrigin = Ee(), Xa(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0), Pt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var v;
            const s = this.getLead(),
                a = !!this.resumingFrom || this !== s;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Ne.timestamp && (l = !1), l) return;
            const {
                layout: u,
                layoutId: c
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
            Pt(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x,
                f = this.treeScale.y;
            gM(this.layoutCorrected, this.treeScale, this.path, a), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = Ee());
            const {
                target: h
            } = s;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hm(this.prevProjectionDelta.x, this.projectionDelta.x), Hm(this.prevProjectionDelta.y, this.projectionDelta.y)), Pi(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !tg(this.projectionDelta.x, this.prevProjectionDelta.x) || !tg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(s = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), s) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = co(), this.projectionDelta = co(), this.projectionDeltaWithTransform = co()
        }
        setAnimationOrigin(s, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                c = { ...this.latestValues
                },
                d = co();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const f = Ee(),
                h = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                g = h !== v,
                w = this.getStack(),
                m = !w || w.members.length <= 1,
                p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(y2));
            this.animationProgress = 0;
            let y;
            this.mixTargetDelta = S => {
                const E = S / 1e3;
                lg(d.x, s.x, E), lg(d.y, s.y, E), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xa(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), g2(this.relativeTarget, this.relativeTargetOrigin, f, E), y && WM(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Ee()), Pt(y, this.relativeTarget)), g && (this.animationValues = c, QM(c, u, this.latestValues, E, p, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(s) {
            var a, l, u;
            this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (ar(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
                da.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = zo(0)), this.motionValue.jump(0, !1), this.currentAnimation = qM(this.motionValue, [0, 1e3], { ...s,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: c => {
                        this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        s.onComplete && s.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const s = this.getStack();
            s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(n2), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const s = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: c
            } = s;
            if (!(!a || !l || !u)) {
                if (this !== s && this.layout && u && r1(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || Ee();
                    const d = We(this.layout.layoutBox.x);
                    l.x.min = s.target.x.min, l.x.max = l.x.min + d;
                    const f = We(this.layout.layoutBox.y);
                    l.y.min = s.target.y.min, l.y.max = l.y.min + f
                }
                Pt(a, l), ua(a, c), Pi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c)
            }
        }
        registerSharedNode(s, a) {
            this.sharedNodes.has(s) || this.sharedNodes.set(s, new t2), this.sharedNodes.get(s).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const s = this.getStack();
            return s ? s.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: s
            } = this.options;
            return s ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: s
            } = this.options;
            return s ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: s
            } = this.options;
            if (s) return this.root.sharedNodes.get(s)
        }
        promote({
            needsReset: s,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), s && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const s = this.getStack();
            return s ? s.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: s
            } = this.options;
            if (!s) return;
            let a = !1;
            const {
                latestValues: l
            } = s;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && Mu("z", s, u, this.animationValues);
            for (let c = 0; c < Nu.length; c++) Mu(`rotate${Nu[c]}`, s, u, this.animationValues), Mu(`skew${Nu[c]}`, s, u, this.animationValues);
            s.render();
            for (const c in u) s.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            s.scheduleRender()
        }
        applyProjectionStyles(s, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                s.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = ca(a == null ? void 0 : a.pointerEvents) || "", s.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = ca(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !vr(this.latestValues) && (s.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            s.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let d = KM(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (d = l(c, d)), s.transform = d;
            const {
                x: f,
                y: h
            } = this.projectionDelta;
            s.transformOrigin = `${f.origin*100}% ${h.origin*100}% 0`, u.animationValues ? s.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : s.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
            for (const v in pd) {
                if (c[v] === void 0) continue;
                const {
                    correct: g,
                    applyTo: w,
                    isCSSVariable: m
                } = pd[v], p = d === "none" ? c[v] : g(c[v], u);
                if (w) {
                    const y = w.length;
                    for (let S = 0; S < y; S++) s[w[S]] = p
                } else m ? this.options.visualElement.renderState.vars[v] = p : s[v] = p
            }
            this.options.layoutId && (s.pointerEvents = u === this ? ca(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(s => {
                var a;
                return (a = s.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(ig), this.root.sharedNodes.clear()
        }
    }
}

function o2(e) {
    e.updateLayout()
}

function i2(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: o
        } = e.layout, {
            animationType: i
        } = e.options, s = t.source !== e.layout.source;
        if (i === "size") Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d],
                h = We(f);
            f.min = r[d].min, f.max = f.min + h
        });
        else if (i === "x" || i === "y") {
            const d = i === "x" ? "y" : "x";
            md(s ? t.measuredBox[d] : t.layoutBox[d], r[d])
        } else r1(i, t.layoutBox, r) && Ht(d => {
            const f = s ? t.measuredBox[d] : t.layoutBox[d],
                h = We(r[d]);
            f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + h)
        });
        const a = co();
        Pi(a, r, t.layoutBox);
        const l = co();
        s ? Pi(l, e.applyTransform(o, !0), t.measuredBox) : Pi(l, r, t.layoutBox);
        const u = !qx(a);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {
                    snapshot: f,
                    layout: h
                } = d;
                if (f && h) {
                    const v = e.options.layoutAnchor || void 0,
                        g = Ee();
                    Xa(g, t.layoutBox, f.layoutBox, v);
                    const w = Ee();
                    Xa(w, r, h.layoutBox, v), Zx(g, w) || (c = !0), d.options.layoutRoot && (e.relativeTarget = w, e.relativeTargetOrigin = g, e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function s2(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function a2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function l2(e) {
    e.clearSnapshot()
}

function ig(e) {
    e.clearMeasurements()
}

function u2(e) {
    e.isLayoutDirty = !0, e.updateLayout()
}

function sg(e) {
    e.isLayoutDirty = !1
}

function c2(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout, e.isLayoutDirty = !0)
}

function d2(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function ag(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function f2(e) {
    e.resolveTargetDelta()
}

function h2(e) {
    e.calcProjection()
}

function p2(e) {
    e.resetSkewAndRotation()
}

function m2(e) {
    e.removeLeadSnapshot()
}

function lg(e, t, n) {
    e.translate = le(t.translate, 0, n), e.scale = le(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function ug(e, t, n, r) {
    e.min = le(t.min, n.min, r), e.max = le(t.max, n.max, r)
}

function g2(e, t, n, r) {
    ug(e.x, t.x, n.x, r), ug(e.y, t.y, n.y, r)
}

function y2(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const v2 = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    cg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    dg = cg("applewebkit/") && !cg("chrome/") ? Math.round : wt;

function fg(e) {
    e.min = dg(e.min), e.max = dg(e.max)
}

function w2(e) {
    fg(e.x), fg(e.y)
}

function r1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !zM(eg(t), eg(n), .2)
}

function x2(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const S2 = n1({
        attachResizeListener: (e, t) => Ji(e, "resize", t),
        measureScroll: () => {
            var e, t;
            return {
                x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
                y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
            }
        },
        checkIsScrollRoot: () => !0
    }),
    Du = {
        current: void 0
    },
    o1 = n1({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Du.current) {
                const e = new S2({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Du.current = e
            }
            return Du.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    i1 = x.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "POLICE"
    });

function C2(e = !0) {
    const t = x.useContext(Of);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: o
    } = t, i = x.useId();
    x.useEffect(() => {
        if (e) return o(i)
    }, [e]);
    const s = x.useCallback(() => e && r && r(i), [i, r, e]);
    return !n && r ? [!1, s] : [!0]
}
const s1 = x.createContext({
        strict: !1
    }),
    hg = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    };
let pg = !1;

function E2() {
    if (pg) return;
    const e = {};
    for (const t in hg) e[t] = {
        isEnabled: n => hg[t].some(r => !!n[r])
    };
    jx(e), pg = !0
}

function a1() {
    return E2(), fM()
}

function T2(e) {
    const t = a1();
    for (const n in e) t[n] = { ...t[n],
        ...e[n]
    };
    jx(t)
}
const b2 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

function qa(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || b2.has(e)
}
let l1 = e => !qa(e);

function k2(e) {
    typeof e == "function" && (l1 = t => t.startsWith("on") ? !qa(t) : e(t))
}
try {
    k2(require("@emotion/is-prop-valid").default)
} catch {}

function P2(e, t, n) {
    const r = {};
    for (const o in e) o === "values" && typeof e.values == "object" || Me(e[o]) || (l1(o) || n === !0 && qa(o) || !t && !qa(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
const Ol = x.createContext({});

function A2(e, t) {
    if (Dl(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Zi(n) ? n : void 0,
            animate: Zi(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function R2(e) {
    const {
        initial: t,
        animate: n
    } = A2(e, x.useContext(Ol));
    return x.useMemo(() => ({
        initial: t,
        animate: n
    }), [mg(t), mg(n)])
}

function mg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const rh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function u1(e, t, n) {
    for (const r in t) !Me(t[r]) && !$x(r, n) && (e[r] = t[r])
}

function N2({
    transformTemplate: e
}, t) {
    return x.useMemo(() => {
        const n = rh();
        return th(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function M2(e, t) {
    const n = e.style || {},
        r = {};
    return u1(r, n, e), Object.assign(r, N2(e, t)), r
}

function D2(e, t) {
    const n = {},
        r = M2(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const c1 = () => ({ ...rh(),
    attrs: {}
});

function O2(e, t, n, r) {
    const o = x.useMemo(() => {
        const i = c1();
        return Ux(i, t, Wx(r), e.transformTemplate, e.style), { ...i.attrs,
            style: { ...i.style
            }
        }
    }, [t]);
    if (e.style) {
        const i = {};
        u1(i, e.style, e), o.style = { ...i,
            ...o.style
        }
    }
    return o
}
const L2 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function oh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(L2.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function j2(e, t, n, {
    latestValues: r
}, o, i = !1, s) {
    const l = (s ?? oh(e) ? O2 : D2)(t, r, o, e),
        u = P2(t, typeof e == "string", i),
        c = e !== x.Fragment ? { ...u,
            ...l,
            ref: n
        } : {},
        {
            children: d
        } = t,
        f = x.useMemo(() => Me(d) ? d.get() : d, [d]);
    return x.createElement(e, { ...c,
        children: f
    })
}

function I2({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, o) {
    return {
        latestValues: _2(n, r, o, e),
        renderState: t()
    }
}

function _2(e, t, n, r) {
    const o = {},
        i = r(e, {});
    for (const f in i) o[f] = ca(i[f]);
    let {
        initial: s,
        animate: a
    } = e;
    const l = Dl(e),
        u = Ox(e);
    t && u && !l && e.inherit !== !1 && (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || s === !1;
    const d = c ? a : s;
    if (d && typeof d != "boolean" && !Ml(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
            const v = Gf(e, f[h]);
            if (v) {
                const {
                    transitionEnd: g,
                    transition: w,
                    ...m
                } = v;
                for (const p in m) {
                    let y = m[p];
                    if (Array.isArray(y)) {
                        const S = c ? y.length - 1 : 0;
                        y = y[S]
                    }
                    y !== null && (o[p] = y)
                }
                for (const p in g) o[p] = g[p]
            }
        }
    }
    return o
}
const d1 = e => (t, n) => {
        const r = x.useContext(Ol),
            o = x.useContext(Of),
            i = () => I2(e, t, r, o);
        return n ? i() : LA(i)
    },
    V2 = d1({
        scrapeMotionValuesFromProps: nh,
        createRenderState: rh
    }),
    F2 = d1({
        scrapeMotionValuesFromProps: Kx,
        createRenderState: c1
    }),
    z2 = Symbol.for("motionComponentSymbol");

function B2(e, t, n) {
    const r = x.useRef(n);
    x.useInsertionEffect(() => {
        r.current = n
    });
    const o = x.useRef(null);
    return x.useCallback(i => {
        var a;
        i && ((a = e.onMount) == null || a.call(e, i));
        const s = r.current;
        if (typeof s == "function")
            if (i) {
                const l = s(i);
                typeof l == "function" && (o.current = l)
            } else o.current ? (o.current(), o.current = null) : s(i);
        else s && (s.current = i);
        t && (i ? t.mount(i) : t.unmount())
    }, [t])
}
const f1 = x.createContext({});

function Yr(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function $2(e, t, n, r, o, i) {
    var y, S;
    const {
        visualElement: s
    } = x.useContext(Ol), a = x.useContext(s1), l = x.useContext(Of), u = x.useContext(i1), c = u.reducedMotion, d = u.skipAnimations, f = x.useRef(null), h = x.useRef(!1);
    r = r || a.renderer, !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: c,
        skipAnimations: d,
        isSVG: i
    }), h.current && f.current && (f.current.manuallyAnimateOnMount = !0));
    const v = f.current,
        g = x.useContext(f1);
    v && !v.projection && o && (v.type === "html" || v.type === "svg") && U2(f.current, n, o, g);
    const w = x.useRef(!1);
    x.useInsertionEffect(() => {
        v && w.current && v.update(n, l)
    });
    const m = n[xx],
        p = x.useRef(!!m && typeof window < "u" && !((y = window.MotionHandoffIsComplete) != null && y.call(window, m)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, m)));
    return IA(() => {
        h.current = !0, v && (w.current = !0, window.MotionIsMounted = !0, v.updateFeatures(), v.scheduleRenderMicrotask(), p.current && v.animationState && v.animationState.animateChanges())
    }), x.useEffect(() => {
        v && (!p.current && v.animationState && v.animationState.animateChanges(), p.current && (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null || E.call(window, m)
        }), p.current = !1), v.enteringChildren = void 0)
    }), v
}

function U2(e, t, n, r) {
    const {
        layoutId: o,
        layout: i,
        drag: s,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: c,
        layoutCrossfade: d
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : h1(e.parent)), e.projection.setOptions({
        layoutId: o,
        layout: i,
        alwaysMeasureLayout: !!s || a && Yr(a),
        visualElement: e,
        animationType: typeof i == "string" ? i : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: c
    })
}

function h1(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : h1(e.parent)
}

function Ou(e, {
    forwardMotionProps: t = !1,
    type: n
} = {}, r, o) {
    r && T2(r);
    const i = n ? n === "svg" : oh(e),
        s = i ? F2 : V2;

    function a(u, c) {
        let d;
        const f = { ...x.useContext(i1),
                ...u,
                layoutId: H2(u)
            },
            {
                isStatic: h
            } = f,
            v = R2(u),
            g = s(u, h);
        if (!h && typeof window < "u") {
            W2();
            const w = K2(f);
            d = w.MeasureLayout, v.visualElement = $2(e, g, f, o, w.ProjectionNode, i)
        }
        return C.jsxs(Ol.Provider, {
            value: v,
            children: [d && v.visualElement ? C.jsx(d, {
                visualElement: v.visualElement,
                ...f
            }) : null, j2(e, u, B2(g, v.visualElement, c), g, h, t, i)]
        })
    }
    a.displayName = `motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;
    const l = x.forwardRef(a);
    return l[z2] = e, l
}

function H2({
    layoutId: e
}) {
    const t = x.useContext(Dw).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function W2(e, t) {
    x.useContext(s1).strict
}

function K2(e) {
    const t = a1(),
        {
            drag: n,
            layout: r
        } = t;
    if (!n && !r) return {};
    const o = { ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? o.MeasureLayout : void 0,
        ProjectionNode: o.ProjectionNode
    }
}

function G2(e, t) {
    if (typeof Proxy > "u") return Ou;
    const n = new Map,
        r = (i, s) => Ou(i, s, e, t),
        o = (i, s) => r(i, s);
    return new Proxy(o, {
        get: (i, s) => s === "create" ? r : (n.has(s) || n.set(s, Ou(s, void 0, e, t)), n.get(s))
    })
}
const Q2 = (e, t) => t.isSVG ?? oh(e) ? new RM(t) : new EM(t, {
    allowProjection: e !== x.Fragment
});
class Y2 extends dr {
    constructor(t) {
        super(t), t.animationState || (t.animationState = LM(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        Ml(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
    }
}
let X2 = 0;
class q2 extends dr {
    constructor() {
        super(...arguments), this.id = X2++, this.isExitComplete = !1
    }
    update() {
        var i;
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        if (t && r === !1) {
            if (this.isExitComplete) {
                const {
                    initial: s,
                    custom: a
                } = this.node.getProps();
                if (typeof s == "string") {
                    const l = Or(this.node, s, a);
                    if (l) {
                        const {
                            transition: u,
                            transitionEnd: c,
                            ...d
                        } = l;
                        for (const f in d)(i = this.node.getValue(f)) == null || i.jump(d[f])
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges()
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const o = this.node.animationState.setActive("exit", !t);
        n && !t && o.then(() => {
            this.isExitComplete = !0, n(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const Z2 = {
    animation: {
        Feature: Y2
    },
    exit: {
        Feature: q2
    }
};

function hs(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const J2 = e => t => qf(t) && e(t, hs(t));

function Ai(e, t, n, r) {
    return Ji(e, t, J2(n), r)
}
const p1 = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    gg = (e, t) => Math.abs(e - t);

function eD(e, t) {
    const n = gg(e.x, t.x),
        r = gg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const yg = new Set(["auto", "scroll"]);
class m1 {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: o = window,
        dragSnapToOrigin: i = !1,
        distanceThreshold: s = 3,
        element: a
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = h => {
                this.handleScroll(h.target)
            }, this.onWindowScroll = () => {
                this.handleScroll(window)
            }, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                this.lastRawMoveEventInfo && (this.lastMoveEventInfo = $s(this.lastRawMoveEventInfo, this.transformPagePoint));
                const h = Lu(this.lastMoveEventInfo, this.history),
                    v = this.startEvent !== null,
                    g = eD(h.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!v && !g) return;
                const {
                    point: w
                } = h, {
                    timestamp: m
                } = Ne;
                this.history.push({ ...w,
                    timestamp: m
                });
                const {
                    onStart: p,
                    onMove: y
                } = this.handlers;
                v || (p && p(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, v) => {
                this.lastMoveEvent = h, this.lastRawMoveEventInfo = v, this.lastMoveEventInfo = $s(v, this.transformPagePoint), oe.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, v) => {
                this.end();
                const {
                    onEnd: g,
                    onSessionEnd: w,
                    resumeAnimation: m
                } = this.handlers;
                if ((this.dragSnapToOrigin || !this.startEvent) && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const p = Lu(h.type === "pointercancel" ? this.lastMoveEventInfo : $s(v, this.transformPagePoint), this.history);
                this.startEvent && g && g(h, p), w && w(h, p)
            }, !qf(t)) return;
        this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = o || window;
        const l = hs(t),
            u = $s(l, this.transformPagePoint),
            {
                point: c
            } = u,
            {
                timestamp: d
            } = Ne;
        this.history = [{ ...c,
            timestamp: d
        }];
        const {
            onSessionStart: f
        } = n;
        f && f(t, Lu(u, this.history)), this.removeListeners = cs(Ai(this.contextWindow, "pointermove", this.handlePointerMove), Ai(this.contextWindow, "pointerup", this.handlePointerUp), Ai(this.contextWindow, "pointercancel", this.handlePointerUp)), a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n;) {
            const r = getComputedStyle(n);
            (yg.has(r.overflowX) || yg.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }), n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }), window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n) return;
        const r = t === window,
            o = r ? {
                x: window.scrollX,
                y: window.scrollY
            } : {
                x: t.scrollLeft,
                y: t.scrollTop
            },
            i = {
                x: o.x - n.x,
                y: o.y - n.y
            };
        i.x === 0 && i.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(t, o), oe.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), ar(this.updatePoint)
    }
}

function $s(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function vg(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Lu({
    point: e
}, t) {
    return {
        point: e,
        delta: vg(e, g1(t)),
        offset: vg(e, tD(t)),
        velocity: nD(t, .1)
    }
}

function tD(e) {
    return e[0]
}

function g1(e) {
    return e[e.length - 1]
}

function nD(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const o = g1(e);
    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > tt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    r === e[0] && e.length > 2 && o.timestamp - r.timestamp > tt(t) * 2 && (r = e[1]);
    const i = yt(o.timestamp - r.timestamp);
    if (i === 0) return {
        x: 0,
        y: 0
    };
    const s = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
}

function rD(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? le(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? le(n, e, r.max) : Math.min(e, n)), e
}

function wg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function oD(e, {
    top: t,
    left: n,
    bottom: r,
    right: o
}) {
    return {
        x: wg(e.x, n, o),
        y: wg(e.y, t, r)
    }
}

function xg(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function iD(e, t) {
    return {
        x: xg(e.x, t.x),
        y: xg(e.y, t.y)
    }
}

function sD(e, t) {
    let n = .5;
    const r = We(e),
        o = We(t);
    return o > r ? n = Xi(t.min, t.max - r, e.min) : r > o && (n = Xi(e.min, e.max - o, t.min)), rn(0, 1, n)
}

function aD(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const gd = .35;

function lD(e = gd) {
    return e === !1 ? e = 0 : e === !0 && (e = gd), {
        x: Sg(e, "left", "right"),
        y: Sg(e, "top", "bottom")
    }
}

function Sg(e, t, n) {
    return {
        min: Cg(e, t),
        max: Cg(e, n)
    }
}

function Cg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const uD = new WeakMap;
class cD {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ee(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: o
        } = this.visualElement;
        if (o && o.isPresent === !1) return;
        const i = d => {
                n && this.snapToCursor(hs(d).point), this.stopAnimation()
            },
            s = (d, f) => {
                const {
                    drag: h,
                    dragPropagation: v,
                    onDragStart: g
                } = this.getProps();
                if (h && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = $N(h), !this.openDragLock)) return;
                this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ht(m => {
                    let p = this.getAxisMotionValue(m).get() || 0;
                    if (en.test(p)) {
                        const {
                            projection: y
                        } = this.visualElement;
                        if (y && y.layout) {
                            const S = y.layout.layoutBox[m];
                            S && (p = We(S) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[m] = p
                }), g && oe.update(() => g(d, f), !1, !0), ad(this.visualElement, "transform");
                const {
                    animationState: w
                } = this.visualElement;
                w && w.setActive("whileDrag", !0)
            },
            a = (d, f) => {
                this.latestPointerEvent = d, this.latestPanInfo = f;
                const {
                    dragPropagation: h,
                    dragDirectionLock: v,
                    onDirectionLock: g,
                    onDrag: w
                } = this.getProps();
                if (!h && !this.openDragLock) return;
                const {
                    offset: m
                } = f;
                if (v && this.currentDirection === null) {
                    this.currentDirection = fD(m), this.currentDirection !== null && g && g(this.currentDirection);
                    return
                }
                this.updateAxis("x", f.point, m), this.updateAxis("y", f.point, m), this.visualElement.render(), w && oe.update(() => w(d, f), !1, !0)
            },
            l = (d, f) => {
                this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            u = () => {
                const {
                    dragSnapToOrigin: d
                } = this.getProps();
                (d || this.constraints) && this.startAnimation({
                    x: 0,
                    y: 0
                })
            },
            {
                dragSnapToOrigin: c
            } = this.getProps();
        this.panSession = new m1(t, {
            onSessionStart: i,
            onStart: s,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: p1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            o = n || this.latestPanInfo,
            i = this.isDragging;
        if (this.cancel(), !i || !o || !r) return;
        const {
            velocity: s
        } = o;
        this.startAnimation(s);
        const {
            onDragEnd: a
        } = this.getProps();
        a && oe.postRender(() => a(r, o))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.endPanSession();
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(), this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {
            drag: o
        } = this.getProps();
        if (!r || !Us(t, o, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let s = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (s = rD(s, this.constraints[t], this.elastic[t])), i.set(s)
    }
    resolveConstraints() {
        var i;
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, o = this.constraints;
        t && Yr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = oD(r.layoutBox, t) : this.constraints = !1, this.elastic = lD(n), o !== this.constraints && !Yr(t) && r && this.constraints && !this.hasMutatedConstraints && Ht(s => {
            this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = aD(r.layoutBox[s], this.constraints[s]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !Yr(t)) return !1;
        const r = t.current;
        Vo(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {
            projection: o
        } = this.visualElement;
        if (!o || !o.layout) return !1;
        const i = yM(r, o.root, this.visualElement.getTransformPagePoint());
        let s = iD(o.layout.layoutBox, i);
        if (n) {
            const a = n(pM(s));
            this.hasMutatedConstraints = !!a, a && (s = _x(a))
        }
        return s
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: o,
            dragTransition: i,
            dragSnapToOrigin: s,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = Ht(c => {
            if (!Us(c, n, this.currentDirection)) return;
            let d = l && l[c] || {};
            (s === !0 || s === c) && (d = {
                min: 0,
                max: 0
            });
            const f = o ? 200 : 1e6,
                h = o ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[c] : 0,
                    bounceStiffness: f,
                    bounceDamping: h,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...i,
                    ...d
                };
            return this.startAxisValueAnimation(c, v)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return ad(this.visualElement, t), r.start(Kf(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Ht(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            o = r[n];
        return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Ht(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Us(n, r, this.currentDirection)) return;
            const {
                projection: o
            } = this.visualElement, i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {
                    min: s,
                    max: a
                } = o.layout.layoutBox[n], l = i.get() || 0;
                i.set(t[n] - le(s, a, .5) + l)
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!Yr(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Ht(s => {
            const a = this.getAxisMotionValue(s);
            if (a && this.constraints !== !1) {
                const l = a.get();
                o[s] = sD({
                    min: l,
                    max: l
                }, this.constraints[s])
            }
        });
        const {
            transformTemplate: i
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Ht(s => {
            if (!Us(s, t, null)) return;
            const a = this.getAxisMotionValue(s),
                {
                    min: l,
                    max: u
                } = this.constraints[s];
            a.set(le(l, u, o[s]))
        }), this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current) return;
        uD.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = Ai(t, "pointerdown", u => {
                const {
                    drag: c,
                    dragListener: d = !0
                } = this.getProps(), f = u.target, h = f !== t && QN(f);
                c && d && !h && this.start(u)
            });
        let r;
        const o = () => {
                const {
                    dragConstraints: u
                } = this.getProps();
                Yr(u) && u.current && (this.constraints = this.resolveRefConstraints(), r || (r = dD(t, u.current, () => this.scalePositionWithinConstraints())))
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", o);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), oe.read(o);
        const a = Ji(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({
                delta: u,
                hasLayoutChanged: c
            }) => {
                this.isDragging && c && (Ht(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            a(), n(), s(), l && l(), r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: o = !1,
                dragConstraints: i = !1,
                dragElastic: s = gd,
                dragMomentum: a = !0
            } = t;
        return { ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: a
        }
    }
}

function Eg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}

function dD(e, t, n) {
    const r = Dm(e, Eg(n)),
        o = Dm(t, Eg(n));
    return () => {
        r(), o()
    }
}

function Us(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function fD(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class hD extends dr {
    constructor(t) {
        super(t), this.removeGroupControls = wt, this.removeListeners = wt, this.controls = new cD(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || wt
    }
    update() {
        const {
            dragControls: t
        } = this.node.getProps(), {
            dragControls: n
        } = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
    }
}
const ju = e => (t, n) => {
    e && oe.update(() => e(t, n), !1, !0)
};
class pD extends dr {
    constructor() {
        super(...arguments), this.removePointerDownListener = wt
    }
    onPointerDown(t) {
        this.session = new m1(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: p1(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: o
        } = this.node.getProps();
        return {
            onSessionStart: ju(t),
            onStart: ju(n),
            onMove: ju(r),
            onEnd: (i, s) => {
                delete this.session, o && oe.postRender(() => o(i, s))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ai(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
let Iu = !1;
class mD extends x.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: o
        } = this.props, {
            projection: i
        } = t;
        i && (n.group && n.group.add(i), r && r.register && o && r.register(i), Iu && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({ ...i.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })), da.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: o,
            isPresent: i
        } = this.props, {
            projection: s
        } = r;
        return s && (s.isPresent = i, t.layoutDependency !== n && s.setOptions({ ...s.options,
            layoutDependency: n
        }), Iu = !0, o || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? s.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? s.promote() : s.relegate() || oe.postRender(() => {
            const a = s.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            visualElement: t,
            layoutAnchor: n
        } = this.props, {
            projection: r
        } = t;
        r && (r.options.layoutAnchor = n, r.root.didUpdate(), Xf.postRender(() => {
            !r.currentAnimation && r.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: o
        } = t;
        Iu = !0, o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function y1(e) {
    const [t, n] = C2(), r = x.useContext(Dw);
    return C.jsx(mD, { ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(f1),
        isPresent: t,
        safeToRemove: n
    })
}
const gD = {
    pan: {
        Feature: pD
    },
    drag: {
        Feature: hD,
        ProjectionNode: o1,
        MeasureLayout: y1
    }
};

function Tg(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const o = "onHover" + n,
        i = r[o];
    i && oe.postRender(() => i(t, hs(t)))
}
class yD extends dr {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = HN(t, (n, r) => (Tg(this.node, r, "Start"), o => Tg(this.node, o, "End"))))
    }
    unmount() {}
}
class vD extends dr {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = cs(Ji(this.node.current, "focus", () => this.onFocus()), Ji(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function bg(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const o = "onTap" + (n === "End" ? "" : n),
        i = r[o];
    i && oe.postRender(() => i(t, hs(t)))
}
class wD extends dr {
    mount() {
        const {
            current: t
        } = this.node;
        if (!t) return;
        const {
            globalTapTarget: n,
            propagate: r
        } = this.node.props;
        this.unmount = XN(t, (o, i) => (bg(this.node, i, "Start"), (s, {
            success: a
        }) => bg(this.node, s, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const yd = new WeakMap,
    _u = new WeakMap,
    xD = e => {
        const t = yd.get(e.target);
        t && t(e)
    },
    SD = e => {
        e.forEach(xD)
    };

function CD({
    root: e,
    ...t
}) {
    const n = e || document;
    _u.has(n) || _u.set(n, {});
    const r = _u.get(n),
        o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(SD, {
        root: e,
        ...t
    })), r[o]
}

function ED(e, t, n) {
    const r = CD(t);
    return yd.set(e, n), r.observe(e), () => {
        yd.delete(e), r.unobserve(e)
    }
}
const TD = {
    some: 0,
    all: 1
};
class bD extends dr {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        var l;
        (l = this.stopObserver) == null || l.call(this);
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: o = "some",
            once: i
        } = t, s = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof o == "number" ? o : TD[o]
        }, a = u => {
            const {
                isIntersecting: c
            } = u;
            if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView)) return;
            c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), h = c ? d : f;
            h && h(u)
        };
        this.stopObserver = ED(this.node.current, s, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(kD(t, n)) && this.startObserver()
    }
    unmount() {
        var t;
        (t = this.stopObserver) == null || t.call(this), this.hasEnteredView = !1, this.isInView = !1
    }
}

function kD({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const PD = {
        inView: {
            Feature: bD
        },
        tap: {
            Feature: wD
        },
        focus: {
            Feature: vD
        },
        hover: {
            Feature: yD
        }
    },
    AD = {
        layout: {
            ProjectionNode: o1,
            MeasureLayout: y1
        }
    },
    RD = { ...Z2,
        ...PD,
        ...gD,
        ...AD
    },
    te = G2(RD, Q2),
    Ll = "/assets/11.png",
    ND = "/assets/cmc-logo-7_jnq_k0.png",
    MD = "/assets/telegram-logo-aJ2tVLpg.png",
    DD = "/assets/coingecko-logo-BVbqMT_s.png",
    Vu = "0x2E1F4D0CC87a195957D1dD8E663451147Db3324b",
    OD = ({
        style: e
    }) => C.jsx(te.div, {
        className: "absolute text-white text-xl pointer-events-none select-none",
        style: e,
        animate: {
            opacity: [0, 1, 0],
            scale: [.5, 1, .5]
        },
        transition: {
            duration: 2,
            repeat: 1 / 0,
            delay: Math.random() * 3
        },
        children: "✦"
    }),
    LD = () => {
        const [e, t] = x.useState(!1), n = () => {
            navigator.clipboard.writeText(Vu), t(!0), setTimeout(() => t(!1), 2e3)
        }, r = Array.from({
            length: 15
        }, (o, i) => ({
            top: `${Math.random()*100}%`,
            left: `${Math.random()*100}%`,
            fontSize: `${12+Math.random()*16}px`
        }));
        return C.jsxs("section", {
            className: "relative min-h-screen flex flex-col items-center justify-center px-4 hero-bg",
            children: [r.map((o, i) => C.jsx(OD, {
                style: o
            }, i)), C.jsxs(te.div, {
                className: "absolute top-4 flex gap-3 z-20",
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                children: [C.jsx("a", {
                    href: "https://t.me/mamesuke",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-md",
                    children: C.jsx("img", {
                        src: MD,
                        alt: "Telegram",
                        className: "w-full h-full object-cover"
                    })
                }), C.jsx("a", {
                    href: "https://x.com/mamesuke_eth?s=21",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-background text-lg hover:scale-110 transition-transform shadow-md font-bold",
                    children: "𝕏"
                }), C.jsx("a", {
                    href: "https://coinmarketcap.com/currencies/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-md",
                    children: C.jsx("img", {
                        src: ND,
                        alt: "CoinMarketCap",
                        className: "w-full h-full object-cover"
                    })
                }), C.jsx("a", {
                    href: "https://www.coingecko.com/en/coins/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "w-10 h-10 rounded-full overflow-hidden hover:scale-110 transition-transform shadow-md",
                    children: C.jsx("img", {
                        src: DD,
                        alt: "CoinGecko",
                        className: "w-full h-full object-cover"
                    })
                })]
            }), C.jsxs("div", {
                className: "relative z-10 flex flex-col items-center text-center max-w-2xl mt-16",
                children: [C.jsx(te.img, {
                    src: Ll,
                    alt: "Mamesuke | The Japanese Police Dog",
                    width: 160,
                    height: 160,
                    className: "mb-4 animate-glow-float rounded-full border-4 border-primary/30",
                    initial: {
                        scale: 0,
                        rotate: -180
                    },
                    animate: {
                        scale: 1,
                        rotate: 0
                    },
                    transition: {
                        type: "spring",
                        duration: 1
                    }
                }), C.jsx(te.div, {
                    className: "bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-4 shadow-lg",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .3
                    },
                    children: C.jsx("h1", {
                        className: "text-5xl md:text-7xl hokk-gradient-text tracking-wider",
                        style: {
                            fontFamily: "'Shojumaru', cursive"
                        },
                        children: "Mamesuke"
                    })
                }), C.jsx(te.div, {
                    className: "bg-card/90 backdrop-blur-sm rounded-xl px-6 py-3 mb-3 shadow-md",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .5
                    },
                    children: C.jsx("p", {
                        className: "text-2xl md:text-3xl font-display text-foreground tracking-widest",
                        children: "JAPANESE POLICE DOG"
                    })
                }), C.jsx(te.div, {
                    className: "bg-card/80 backdrop-blur-sm rounded-xl px-6 py-3 mb-6 shadow-md max-w-md",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: .6
                    },
                    children: C.jsx("p", {
                        className: "text-foreground/70 font-body text-sm",
                        children: "Mamesuke is a 5-year-old Shiba Inu serving as an honorary Police Inspector at the Yokkaichi Minami Police Station in Japan, promoting community safety, traffic safety, and fraud prevention since 2023."
                    })
                }), C.jsxs(te.div, {
                    className: "flex flex-wrap justify-center gap-3",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: .7
                    },
                    children: [C.jsx("a", {
                        href: `https://app.uniswap.org/swap?outputCurrency=${Vu}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hokk-btn-primary text-sm",
                        children: "Buy on Uniswap"
                    }), C.jsx("a", {
                        href: `https://dexscreener.com/ethereum/${Vu}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hokk-btn-primary text-sm",
                        children: "Dexscreener"
                    }), C.jsxs("button", {
                        onClick: n,
                        className: "hokk-btn-primary text-sm flex items-center gap-1",
                        children: [C.jsx(H0, {
                            className: "w-3 h-3"
                        }), e ? "Copied!" : "Copy Contract"]
                    }), C.jsx("a", {
                        href: "https://coinmarketcap.com/currencies/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hokk-btn-primary text-sm",
                        children: "CoinMarketCap"
                    }), C.jsx("a", {
                        href: "https://www.coingecko.com/en/coins/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hokk-btn-primary text-sm",
                        children: "CoinGecko"
                    })]
                })]
            })]
        })
    },
    jD = () => C.jsx("img", {
        src: Ll,
        alt: "Mamesuke",
        className: "inline-block w-6 h-6 rounded-full align-middle"
    }),
    kg = ({
        text: e = "Mamesuke | The Japanese Police Dog"
    }) => {
        const t = Array(20).fill(e);
        return C.jsx("div", {
            className: "w-full overflow-hidden bg-primary/10 border-y border-primary/20 py-3",
            children: C.jsx("div", {
                className: "animate-marquee whitespace-nowrap flex items-center",
                children: t.map((n, r) => C.jsxs("span", {
                    className: "mx-4 text-primary font-display text-lg tracking-wider flex items-center gap-2",
                    children: [n, " ", C.jsx(jD, {})]
                }, r))
            })
        })
    },
    ID = [{
        tag: "Duty",
        title: "The Beginning",
        desc: "In the heart of Japan, a loyal Shiba Inu named Mamesuke stepped forward. Chosen not by rank, but by spirit, he became an honorary Police Inspector — a symbol of trust between people and protection.",
        emoji: "⚔️"
    }, {
        tag: "Service",
        title: "The Mission",
        desc: "With calm eyes and a friendly presence, Mamesuke took to the streets. From guiding children to promoting traffic safety, he turned everyday moments into lessons of awareness and care.",
        emoji: "🚓"
    }, {
        tag: "Commitment",
        title: "The Responsibility",
        desc: "Challenges arose — from rising fraud to growing safety concerns. Yet Mamesuke stood firm, reminding communities that vigilance and unity are the true shields of society.",
        emoji: "🔥"
    }, {
        tag: "Legacy",
        title: "The Continuation",
        desc: "Recognized for his impact, Mamesuke was reappointed on April 3, 2026. Not just a mascot, but a living symbol — proving that even the smallest guardian can inspire lasting change.",
        emoji: "🏅"
    }],
    _D = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-4",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "🐕 THE EPIC SAGA"
            }), C.jsx(te.p, {
                className: "text-center text-muted-foreground font-body mb-12 max-w-lg mx-auto",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                children: "Every guardian begins with purpose. Every act builds trust."
            }), C.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: ID.map((e, t) => C.jsxs(te.div, {
                    className: "hokk-card flex flex-col",
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    children: [C.jsx("div", {
                        className: "text-4xl mb-3",
                        children: e.emoji === "hokk" ? C.jsx("img", {
                            src: Ll,
                            alt: "HOKK",
                            className: "w-10 h-10 rounded-full"
                        }) : e.emoji
                    }), C.jsx("span", {
                        className: "text-xs font-body font-semibold text-primary uppercase tracking-widest mb-1",
                        children: e.tag
                    }), C.jsx("h3", {
                        className: "text-3xl font-display text-foreground mb-2",
                        children: e.title
                    }), C.jsx("p", {
                        className: "text-muted-foreground font-body text-sm leading-relaxed",
                        children: e.desc
                    })]
                }, e.title))
            })]
        })
    }),
    VD = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text mb-4",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "🐾 WHY MAMESUKE?"
            }), C.jsx(te.p, {
                className: "text-muted-foreground font-body max-w-2xl mx-auto mb-10",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                children: "Mamesuke represents more than a role — he embodies community, trust, and protection. A bridge between people and safety, his story continues to inspire a safer, stronger future."
            }), C.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [{
                    emoji: "🐕",
                    title: " Mamesuke",
                    desc: "The loyal guardian of the community"
                }, {
                    emoji: "💎",
                    title: "Trusted Protector",
                    desc: "A symbol of safety and trust, Mamesuke stands with the people — promoting awareness, protection, and unity in every step."
                }, {
                    emoji: "👑",
                    title: "Honorary Inspector",
                    desc: "Serving as a Police Inspector since 2023, Mamesuke proves that true authority comes from respect, care, and dedication."
                }].map((e, t) => C.jsxs(te.div, {
                    className: "hokk-card text-center flex flex-col items-center",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    children: [C.jsx("div", {
                        className: "text-4xl mb-3",
                        children: e.emoji === "hokk" ? C.jsx("img", {
                            src: Ll,
                            alt: "HOKK",
                            className: "w-10 h-10 rounded-full"
                        }) : e.emoji
                    }), C.jsx("h3", {
                        className: "text-2xl font-display text-foreground mb-1",
                        children: e.title
                    }), C.jsx("p", {
                        className: "text-muted-foreground font-body text-sm",
                        children: e.desc
                    })]
                }, e.title))
            })]
        })
    }),
    Pg = "0x2E1F4D0CC87a195957D1dD8E663451147Db3324b",
    FD = [{
        label: "Total Supply",
        value: "1 QUAD",
        sub: "Fixed supply, no inflation"
    }, {
        label: "Liquidity",
        value: "BURNED",
        sub: "Permanently locked forever"
    }, {
        label: "Contract",
        value: "RENOUNCED",
        sub: "Fully decentralized ownership"
    }, {
        label: "Security",
        value: "VERIFIED",
        sub: "Audited and battle-tested"
    }],
    zD = () => {
        const [e, t] = x.useState(!1), n = () => {
            navigator.clipboard.writeText(Pg), t(!0), setTimeout(() => t(!1), 2e3)
        };
        return C.jsx("section", {
            className: "py-20 px-4",
            children: C.jsxs("div", {
                className: "max-w-5xl mx-auto text-center",
                children: [C.jsx(te.h2, {
                    className: "text-5xl md:text-6xl font-display hokk-gradient-text mb-4",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    children: "TOKENOMICS"
                }), C.jsx(te.p, {
                    className: "text-muted-foreground font-body mb-12 max-w-lg mx-auto",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    children: "Built for the community, secured for eternity. No tricks, no traps — just pure Japaneseary economics."
                }), C.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: FD.map((r, o) => C.jsxs(te.div, {
                        className: "hokk-card text-center",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: o * .1
                        },
                        children: [C.jsx("p", {
                            className: "text-xs font-body text-muted-foreground uppercase tracking-wider mb-2",
                            children: r.label
                        }), C.jsx("p", {
                            className: "text-2xl font-display hokk-gradient-text",
                            children: r.value
                        }), C.jsx("p", {
                            className: "text-xs text-muted-foreground font-body mt-1",
                            children: r.sub
                        })]
                    }, r.label))
                }), C.jsxs(te.div, {
                    className: "mt-10 hokk-card inline-block",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    children: [C.jsx("p", {
                        className: "text-xs text-muted-foreground font-body mb-2 uppercase tracking-wider",
                        children: "Contract Address"
                    }), C.jsx("p", {
                        className: "font-mono text-xs md:text-sm text-foreground/80 mb-3 break-all",
                        children: Pg
                    }), C.jsxs("button", {
                        onClick: n,
                        className: "hokk-btn-primary text-sm flex items-center gap-2 mx-auto",
                        children: [C.jsx(H0, {
                            className: "w-3 h-3"
                        }), e ? "Copied!" : "Copy Contract Address"]
                    })]
                }), C.jsx(te.p, {
                    className: "mt-8 text-muted-foreground font-body text-sm max-w-2xl mx-auto leading-relaxed",
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: !0
                    },
                    children: "Every great Japanese follows a code. HOKK's tokenomics embody the warrior spirit: transparent, immutable, and community-first."
                })]
            })
        })
    },
    BD = [{
        num: "01",
        title: "Get a Wallet",
        desc: "Download MetaMask or any ERC-20 compatible wallet. Fund it with ETH from an exchange like Coinbase or Binance."
    }, {
        num: "02",
        title: "Go to Uniswap",
        desc: "Head to app.uniswap.org, connect your wallet, and paste the Mamesuke contract address."
    }, {
        num: "03",
        title: "Swap ETH for 🐕 Mamesuke",
        desc: "Set your slippage, enter the amount of ETH, and swap. Welcome to the pack!"
    }, {
        num: "04",
        title: "HODL & Chill",
        desc: "Join the Telegram and Twitter community. Diamond hands only. Let the pack ride. 💎"
    }],
    $D = "0x2E1F4D0CC87a195957D1dD8E663451147Db3324b",
    UD = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-12",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "HOW TO BUY 🛒"
            }), C.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: BD.map((e, t) => C.jsxs(te.div, {
                    className: "hokk-card",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .1
                    },
                    children: [C.jsx("span", {
                        className: "text-4xl font-display text-primary/30",
                        children: e.num
                    }), C.jsx("h3", {
                        className: "text-2xl font-display text-foreground mt-2 mb-2",
                        children: e.title
                    }), C.jsx("p", {
                        className: "text-muted-foreground font-body text-sm",
                        children: e.desc
                    })]
                }, e.num))
            }), C.jsx(te.div, {
                className: "mt-10 text-center",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                children: C.jsx("a", {
                    href: `https://app.uniswap.org/swap?outputCurrency=${$D}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "hokk-btn-primary text-xl px-10 py-4 font-display tracking-wide",
                    children: "🦄 SWAP ON UNISWAP"
                })
            })]
        })
    }),
    Ag = "0x2E1F4D0CC87a195957D1dD8E663451147Db3324b",
    HD = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "DEX SCREENER LIVE 📡"
            }), C.jsx(te.div, {
                className: "rounded-2xl overflow-hidden border border-border shadow-lg",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: C.jsx("iframe", {
                    src: `https://dexscreener.com/ethereum/${Ag}?embed=1&theme=dark`,
                    className: "w-full h-[600px] border-0",
                    title: "DEX Screener",
                    loading: "lazy"
                })
            }), C.jsx("div", {
                className: "text-center mt-4",
                children: C.jsxs("a", {
                    href: `https://dexscreener.com/ethereum/${Ag}`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground hover:text-primary transition-colors font-body text-sm",
                    children: ["Tracked by ", C.jsx("span", {
                        className: "font-semibold",
                        children: "DEXSCREENER"
                    })]
                })
            })]
        })
    }),
    WD = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-8",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "GECKO TERMINAL CHART 🦎"
            }), C.jsx(te.div, {
                className: "rounded-2xl overflow-hidden border border-border shadow-lg",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: C.jsx("iframe", {
                    src: "https://www.geckoterminal.com/eth/pools/?embed=1&info=0&swaps=0",
                    className: "w-full h-[600px] border-0",
                    title: "GeckoTerminal Chart",
                    loading: "lazy"
                })
            })]
        })
    }),
    KD = ["assets/13.jpg", "assets/14.jpg", "assets/15.jpg", "assets/16.jpg", "assets/17.jpg", "assets/18.jpg", "assets/19.jpg", "assets/20.jpg", "assets/21.jpg", "assets/22.jpg", "assets/23.jpg", "https://www.hokk.io/comfy-pepe.png"],
    GD = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-5xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-4",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "JOIN THE Japanese POLICE"
            }), C.jsx(te.p, {
                className: "text-center text-muted-foreground font-body mb-12",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: !0
                },
                children: "Become part of the community"
            }), C.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
                children: KD.map((e, t) => C.jsx(te.div, {
                    className: "rounded-2xl overflow-hidden bg-card shadow-md border border-border aspect-square",
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    whileInView: {
                        opacity: 1,
                        scale: 1
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        delay: t * .03
                    },
                    whileHover: {
                        scale: 1.05,
                        rotate: 1
                    },
                    children: C.jsx("img", {
                        src: e,
                        alt: `Mamesuke Community  ${t+1}`,
                        className: "w-full h-full object-cover",
                        loading: "lazy"
                    })
                }, t))
            })]
        })
    });
var jl = "Collapsible",
    [QD, v1] = Ho(jl),
    [YD, ih] = QD(jl),
    w1 = x.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            open: r,
            defaultOpen: o,
            disabled: i,
            onOpenChange: s,
            ...a
        } = e, [l, u] = Sl({
            prop: r,
            defaultProp: o ?? !1,
            onChange: s,
            caller: jl
        });
        return C.jsx(YD, {
            scope: n,
            disabled: i,
            contentId: tw(),
            open: l,
            onOpenToggle: x.useCallback(() => u(c => !c), [u]),
            children: C.jsx(ke.div, {
                "data-state": ah(l),
                "data-disabled": i ? "" : void 0,
                ...a,
                ref: t
            })
        })
    });
w1.displayName = jl;
var x1 = "CollapsibleTrigger",
    S1 = x.forwardRef((e, t) => {
        const {
            __scopeCollapsible: n,
            ...r
        } = e, o = ih(x1, n);
        return C.jsx(ke.button, {
            type: "button",
            "aria-controls": o.contentId,
            "aria-expanded": o.open || !1,
            "data-state": ah(o.open),
            "data-disabled": o.disabled ? "" : void 0,
            disabled: o.disabled,
            ...r,
            ref: t,
            onClick: we(e.onClick, o.onOpenToggle)
        })
    });
S1.displayName = x1;
var sh = "CollapsibleContent",
    C1 = x.forwardRef((e, t) => {
        const {
            forceMount: n,
            ...r
        } = e, o = ih(sh, e.__scopeCollapsible);
        return C.jsx(xl, {
            present: n || o.open,
            children: ({
                present: i
            }) => C.jsx(XD, { ...r,
                ref: t,
                present: i
            })
        })
    });
C1.displayName = sh;
var XD = x.forwardRef((e, t) => {
    const {
        __scopeCollapsible: n,
        present: r,
        children: o,
        ...i
    } = e, s = ih(sh, n), [a, l] = x.useState(r), u = x.useRef(null), c = ut(t, u), d = x.useRef(0), f = d.current, h = x.useRef(0), v = h.current, g = s.open || a, w = x.useRef(g), m = x.useRef(void 0);
    return x.useEffect(() => {
        const p = requestAnimationFrame(() => w.current = !1);
        return () => cancelAnimationFrame(p)
    }, []), tn(() => {
        const p = u.current;
        if (p) {
            m.current = m.current || {
                transitionDuration: p.style.transitionDuration,
                animationName: p.style.animationName
            }, p.style.transitionDuration = "0s", p.style.animationName = "none";
            const y = p.getBoundingClientRect();
            d.current = y.height, h.current = y.width, w.current || (p.style.transitionDuration = m.current.transitionDuration, p.style.animationName = m.current.animationName), l(r)
        }
    }, [s.open, r]), C.jsx(ke.div, {
        "data-state": ah(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        id: s.contentId,
        hidden: !g,
        ...i,
        ref: c,
        style: {
            "--radix-collapsible-content-height": f ? `${f}px` : void 0,
            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
            ...e.style
        },
        children: g && o
    })
});

function ah(e) {
    return e ? "open" : "closed"
}
var qD = w1,
    ZD = S1,
    JD = C1,
    eO = x.createContext(void 0);

function tO(e) {
    const t = x.useContext(eO);
    return e || t || "ltr"
}
var Bt = "Accordion",
    nO = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [lh, rO, oO] = g0(Bt),
    [Il, RO] = Ho(Bt, [oO, v1]),
    uh = v1(),
    E1 = M.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e, o = r, i = r;
        return C.jsx(lh.Provider, {
            scope: e.__scopeAccordion,
            children: n === "multiple" ? C.jsx(lO, { ...i,
                ref: t
            }) : C.jsx(aO, { ...o,
                ref: t
            })
        })
    });
E1.displayName = Bt;
var [T1, iO] = Il(Bt), [b1, sO] = Il(Bt, {
    collapsible: !1
}), aO = M.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        collapsible: i = !1,
        ...s
    } = e, [a, l] = Sl({
        prop: n,
        defaultProp: r ?? "",
        onChange: o,
        caller: Bt
    });
    return C.jsx(T1, {
        scope: e.__scopeAccordion,
        value: M.useMemo(() => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: M.useCallback(() => i && l(""), [i, l]),
        children: C.jsx(b1, {
            scope: e.__scopeAccordion,
            collapsible: i,
            children: C.jsx(k1, { ...s,
                ref: t
            })
        })
    })
}), lO = M.forwardRef((e, t) => {
    const {
        value: n,
        defaultValue: r,
        onValueChange: o = () => {},
        ...i
    } = e, [s, a] = Sl({
        prop: n,
        defaultProp: r ?? [],
        onChange: o,
        caller: Bt
    }), l = M.useCallback(c => a((d = []) => [...d, c]), [a]), u = M.useCallback(c => a((d = []) => d.filter(f => f !== c)), [a]);
    return C.jsx(T1, {
        scope: e.__scopeAccordion,
        value: s,
        onItemOpen: l,
        onItemClose: u,
        children: C.jsx(b1, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: C.jsx(k1, { ...i,
                ref: t
            })
        })
    })
}), [uO, _l] = Il(Bt), k1 = M.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        disabled: r,
        dir: o,
        orientation: i = "vertical",
        ...s
    } = e, a = M.useRef(null), l = ut(a, t), u = rO(n), d = tO(o) === "ltr", f = we(e.onKeyDown, h => {
        var k;
        if (!nO.includes(h.key)) return;
        const v = h.target,
            g = u().filter(D => {
                var A;
                return !((A = D.ref.current) != null && A.disabled)
            }),
            w = g.findIndex(D => D.ref.current === v),
            m = g.length;
        if (w === -1) return;
        h.preventDefault();
        let p = w;
        const y = 0,
            S = m - 1,
            E = () => {
                p = w + 1, p > S && (p = y)
            },
            T = () => {
                p = w - 1, p < y && (p = S)
            };
        switch (h.key) {
            case "Home":
                p = y;
                break;
            case "End":
                p = S;
                break;
            case "ArrowRight":
                i === "horizontal" && (d ? E() : T());
                break;
            case "ArrowDown":
                i === "vertical" && E();
                break;
            case "ArrowLeft":
                i === "horizontal" && (d ? T() : E());
                break;
            case "ArrowUp":
                i === "vertical" && T();
                break
        }
        const b = p % m;
        (k = g[b].ref.current) == null || k.focus()
    });
    return C.jsx(uO, {
        scope: n,
        disabled: r,
        direction: o,
        orientation: i,
        children: C.jsx(lh.Slot, {
            scope: n,
            children: C.jsx(ke.div, { ...s,
                "data-orientation": i,
                ref: l,
                onKeyDown: r ? void 0 : f
            })
        })
    })
}), Za = "AccordionItem", [cO, ch] = Il(Za), P1 = M.forwardRef((e, t) => {
    const {
        __scopeAccordion: n,
        value: r,
        ...o
    } = e, i = _l(Za, n), s = iO(Za, n), a = uh(n), l = tw(), u = r && s.value.includes(r) || !1, c = i.disabled || e.disabled;
    return C.jsx(cO, {
        scope: n,
        open: u,
        disabled: c,
        triggerId: l,
        children: C.jsx(qD, {
            "data-orientation": i.orientation,
            "data-state": O1(u),
            ...a,
            ...o,
            ref: t,
            disabled: c,
            open: u,
            onOpenChange: d => {
                d ? s.onItemOpen(r) : s.onItemClose(r)
            }
        })
    })
});
P1.displayName = Za;
var A1 = "AccordionHeader",
    R1 = M.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = _l(Bt, n), i = ch(A1, n);
        return C.jsx(ke.h3, {
            "data-orientation": o.orientation,
            "data-state": O1(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            ...r,
            ref: t
        })
    });
R1.displayName = A1;
var vd = "AccordionTrigger",
    N1 = M.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = _l(Bt, n), i = ch(vd, n), s = sO(vd, n), a = uh(n);
        return C.jsx(lh.ItemSlot, {
            scope: n,
            children: C.jsx(ZD, {
                "aria-disabled": i.open && !s.collapsible || void 0,
                "data-orientation": o.orientation,
                id: i.triggerId,
                ...a,
                ...r,
                ref: t
            })
        })
    });
N1.displayName = vd;
var M1 = "AccordionContent",
    D1 = M.forwardRef((e, t) => {
        const {
            __scopeAccordion: n,
            ...r
        } = e, o = _l(Bt, n), i = ch(M1, n), s = uh(n);
        return C.jsx(JD, {
            role: "region",
            "aria-labelledby": i.triggerId,
            "data-orientation": o.orientation,
            ...s,
            ...r,
            ref: t,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
D1.displayName = M1;

function O1(e) {
    return e ? "open" : "closed"
}
var dO = E1,
    fO = P1,
    hO = R1,
    L1 = N1,
    j1 = D1;
const pO = dO,
    I1 = x.forwardRef(({
        className: e,
        ...t
    }, n) => C.jsx(fO, {
        ref: n,
        className: on("border-b", e),
        ...t
    }));
I1.displayName = "AccordionItem";
const _1 = x.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => C.jsx(hO, {
    className: "flex",
    children: C.jsxs(L1, {
        ref: r,
        className: on("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, C.jsx(lk, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
_1.displayName = L1.displayName;
const V1 = x.forwardRef(({
    className: e,
    children: t,
    ...n
}, r) => C.jsx(j1, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: C.jsx("div", {
        className: on("pb-4 pt-0", e),
        children: t
    })
}));
V1.displayName = j1.displayName;
const mO = [{
    q: "Who is Mamesuke?",
    a: "Mamesuke is a 5-year-old Shiba Inu serving as an honorary Police Inspector at the Yokkaichi Minami Police Station in Japan. He represents community trust, safety awareness, and public engagement."
  },
  {
    q: "What does Mamesuke do?",
    a: "Mamesuke promotes community safety, traffic awareness, and fraud prevention. He participates in school patrols, public campaigns, and awareness events to help educate citizens."
  },
  {
    q: "When did Mamesuke become an inspector?",
    a: "Mamesuke was appointed as an honorary Police Inspector in 2023 and has continued serving the community since then."
  },
  {
    q: "Is Mamesuke still active?",
    a: "Yes! Due to his positive impact, Mamesuke was reappointed for another year on April 3, 2026, continuing his mission to spread safety and awareness."
  }, {
        q: "What chain is 🐕 Mamesuke on?",
        a: "🐕 Mamesuke is on the Ethereum (ETH) blockchain as an ERC-20 token."
    }],
    gO = () => C.jsx("section", {
        className: "py-20 px-4",
        children: C.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [C.jsx(te.h2, {
                className: "text-5xl md:text-6xl font-display hokk-gradient-text text-center mb-12",
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                children: "FAQ ❓"
            }), C.jsx(pO, {
                type: "single",
                collapsible: !0,
                className: "space-y-3",
                children: mO.map((e, t) => C.jsxs(I1, {
                    value: `faq-${t}`,
                    className: "hokk-card px-6 border-none",
                    children: [C.jsx(_1, {
                        className: "font-display text-xl text-foreground hover:no-underline",
                        children: e.q
                    }), C.jsx(V1, {
                        className: "text-muted-foreground font-body",
                        children: e.a
                    })]
                }, t))
            })]
        })
    }),
    yO = () => C.jsxs("div", {
        className: "min-h-screen bg-background",
        children: [C.jsx(LD, {}), C.jsx(kg, {
            text: "Japanese POLICE DOG"
        }), C.jsx(_D, {}), C.jsx(VD, {}), C.jsx(zD, {}), C.jsx(kg, {
            text: "🐕 Mamesuke"
        }), C.jsx(UD, {}), C.jsx(GD, {}), C.jsx(HD, {}), C.jsx(WD, {}), C.jsx(gO, {}), C.jsxs("footer", {
            className: "py-10 text-center border-t border-border",
            children: [C.jsx("p", {
                className: "text-muted-foreground font-body text-sm",
                children: "🐕 Mamesuke is a community-driven memecoin. Not financial advice. DYOR."
            }), C.jsxs("div", {
                className: "flex justify-center gap-6 mt-4",
                children: [C.jsx("a", {
                    href: "https://x.com/mamesuke_eth?s=21",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground hover:text-primary transition-colors font-body text-sm",
                    children: "Twitter"
                }), C.jsx("a", {
                    href: "https://t.me/mamesuke",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground hover:text-primary transition-colors font-body text-sm",
                    children: "Telegram"
                }), C.jsx("a", {
                    href: "https://dexscreener.com/ethereum/0x2E1F4D0CC87a195957D1dD8E663451147Db3324b",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-muted-foreground hover:text-primary transition-colors font-body text-sm",
                    children: "DexScreener"
                })]
            })]
        })]
    }),
    vO = () => {
        const e = h0();
        return x.useEffect(() => {
            console.error("404 Error: User attempted to access non-existent route:", e.pathname)
        }, [e.pathname]), C.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-muted",
            children: C.jsxs("div", {
                className: "text-center",
                children: [C.jsx("h1", {
                    className: "mb-4 text-4xl font-bold",
                    children: "404"
                }), C.jsx("p", {
                    className: "mb-4 text-xl text-muted-foreground",
                    children: "Oops! Page not found"
                }), C.jsx("a", {
                    href: "/",
                    className: "text-primary underline hover:text-primary/90",
                    children: "Return to Home"
                })]
            })
        })
    },
    wO = new $E,
    xO = () => C.jsx(HE, {
        client: wO,
        children: C.jsxs(DA, {
            children: [C.jsx(Wk, {}), C.jsx(ab, {}), C.jsx(RT, {
                children: C.jsxs(kT, {
                    children: [C.jsx(jc, {
                        path: "/",
                        element: C.jsx(yO, {})
                    }), C.jsx(jc, {
                        path: "*",
                        element: C.jsx(vO, {})
                    })]
                })
            })]
        })
    });
qv(document.getElementById("root")).render(C.jsx(xO, {}));