(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    function h(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function k(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: h(a)
        }
    }

    function l(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }
    var m = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        n;
    if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
    else {
        var p;
        a: {
            var q = {
                    a: !0
                },
                r = {};
            try {
                r.__proto__ = q;
                p = r.a;
                break a
            } catch (a) {}
            p = !1
        }
        n = p ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var t = n;

    function u(a, b) {
        a.prototype = m(b.prototype);
        a.prototype.constructor = a;
        if (t) t(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.o = b.prototype
    }
    var v = this || self;

    function w(a) {
        w[" "](a);
        return a
    }
    w[" "] = function() {};

    function x(a) {
        for (var b = v, c = 0; b && 40 > c++;) {
            var d = !1;
            try {
                var e;
                if (e = !!b && null != b.location.href) b: {
                    try {
                        w(b.foo);
                        e = !0;
                        break b
                    } catch (g) {}
                    e = !1
                }
                d = e
            } catch (g) {
                d = !1
            }
            if (d && a(b)) break;
            a: {
                try {
                    var f = b.parent;
                    if (f && f != b) {
                        b = f;
                        break a
                    }
                } catch (g) {}
                b = null
            }
        }
    };

    function y(a) {
        var b = this;
        this.h = !1;
        this.g = [];
        a(function(c) {
            z(b, c)
        })
    }

    function z(a, b) {
        if (!a.h)
            if (b instanceof y) b.then(function(c) {
                z(a, c)
            });
            else {
                a.h = !0;
                a.i = b;
                for (b = 0; b < a.g.length; ++b) A(a, a.g[b]);
                a.g = []
            }
    }

    function A(a, b) {
        a.h ? b(a.i) : a.g.push(b)
    }
    y.prototype.then = function(a) {
        var b = this;
        return new y(function(c) {
            A(b, function(d) {
                c(a(d))
            })
        })
    };

    function B() {
        return new y(function(a) {
            return a(void 0)
        })
    };

    function C(a) {
        if (!a) throw Error("functionToExecute must not be truthy.");
    };

    function D() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.3-google_20200427")
    }

    function E() {
        for (var a = ["1", "3", "3"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };

    function F(a, b, c, d) {
        this.h = a;
        this.method = b;
        this.version = c;
        this.g = d
    }

    function G(a) {
        return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
    }

    function H(a) {
        return new F(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
    }

    function I(a) {
        var b = {};
        b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
        void 0 !== a.g && (b.omid_message_args = a.g);
        return b
    };

    function J(a) {
        this.h = a
    };

    function K(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function L() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function M(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        N(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(b instanceof Array ? b : l(k(b)))));
        }, function() {
            return console.error.apply(console, b instanceof Array ? b : l(k(b)))
        })
    }

    function N(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var P = eval("this"),
        Q = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof P && P) return P;
            throw Error("Could not determine global object context.");
        }();

    function R(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };

    function S(a) {
        this.h = a;
        this.handleExportedMessage = S.prototype.i.bind(this)
    }
    u(S, J);
    S.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(I(a), this)
    };
    S.prototype.i = function(a, b) {
        G(a) && this.g && this.g(H(a), b)
    };

    function T(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function U(a) {
        if (a === Q) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };

    function V(a, b) {
        this.h = b = void 0 === b ? Q : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                G(e) && d.source && c.g && c.g(H(e), d.source)
            }
        })
    }
    u(V, J);
    V.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(I(a), "*")
    };
    var aa = ["omid", "v1_VerificationServiceCommunication"],
        ba = ["omidVerificationProperties", "serviceWindow"];

    function W(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };

    function X(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = T(b) ? b : Q;
            var c = void 0 === c ? R : c;
            a = [];
            var d = W(b, ba);
            d && a.push(d);
            a.push(T(b) ? b.top : Q);
            a: {
                a = k(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!U(e)) try {
                            var g = W(e, aa);
                            if (g) {
                                var O = new S(g);
                                break b
                            }
                        } catch (ja) {}
                        O = f(e) ? new V(d, e) : null
                    }
                    if (d = O) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.g = a) this.g.g = this.l.bind(this);
        else if (c = (c = Q.omid3p) && "function" === typeof c.registerSessionObserver && "function" ===
            typeof c.addEventListener ? c : null) this.omid3p = c;
        this.h = {};
        this.i = (c = Q.omidVerificationProperties) ? c.injectionId : void 0
    }
    X.prototype.registerSessionObserver = function(a, b) {
        C(a);
        this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.i) : this.j("addSessionListener", a, b, this.i)
    };
    X.prototype.addEventListener = function(a, b) {
        if (!a) throw Error("Value for eventType is undefined, null or blank.");
        if ("string" !== typeof a && !(a instanceof String)) throw Error("Value for eventType is not a string.");
        if ("" === a.trim()) throw Error("Value for eventType is empty string.");
        C(b);
        this.omid3p ? this.omid3p.addEventListener(a, b) : this.j("addEventListener", b, a)
    };
    X.prototype.l = function(a) {
        var b = a.method,
            c = a.h;
        a = a.g;
        if ("response" === b && this.h[c]) {
            var d = D() && E() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.h[c].apply(this, d)
        }
        "error" === b && window.console && M(a)
    };
    X.prototype.j = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        this.g && (e = L(), b && (this.h[e] = b), d = D() && E() ? d : JSON.stringify(d), this.g.sendMessage(new F(e, "VerificationService." + a, "1.3.3-google_20200427", d)))
    };
    var Y = void 0;
    if (Y = void 0 === Y ? "undefined" === typeof omidExports ? null : omidExports : Y) {
        var Z = ["OmidVerificationClient"];
        Z.slice(0, Z.length - 1).reduce(K, Y)[Z[Z.length - 1]] = X
    };

    function ca() {
        var a = null;
        x(function(b) {
            return (b = b.mraid) && b.IS_GMA_SDK ? (a = b, !0) : !1
        });
        return a
    }

    function da() {
        return new y(function(a) {
            v.document.readyState && "complete" === v.document.readyState ? a() : v.addEventListener("load", a)
        })
    }

    function ea() {
        return new y(function(a) {
            var b = ca();
            b && ("loading" === b.getState() ? b.addEventListener("ready", function() {
                a(b)
            }) : a(b))
        })
    }

    function fa() {
        var a = this.j = new X;
        this.l = !(!a.g && !a.omid3p);
        this.h = null;
        this.i = this.l ? 4 : 1;
        this.m = this.l;
        this.g = {}
    }

    function ha() {
        return new y(function(a) {
            da().then(function() {
                ea().then(function(b) {
                    function c(d, e) {
                        0 < e.width && 0 < e.height && (a(), b.removeEventListener("exposureChange", c))
                    }
                    b.addEventListener("exposureChange", c)
                })
            })
        })
    }

    function ia(a) {
        a.m ? (a.h = new y(function(b) {
            var c = new y(function(e) {
                    a.j.registerSessionObserver(function(f) {
                        "sessionStart" == f.type && (f = f.data, e("app" == f.context.environment), f.context.omidNativeInfo && (a.g.sdk = f.context.omidNativeInfo.partnerName))
                    })
                }),
                d = new y(function(e) {
                    a.j.addEventListener("geometryChange", function(f) {
                        f = f.data;
                        var g = f.adView.reasons;
                        if (g = !g || -1 == g.indexOf("hidden")) f = f.adView, f = f.onScreenContainerGeometry || f.onScreenGeometry, g = !!(f && f.width && f.height);
                        g && (a.i = 3, e())
                    })
                });
            c.then(function(e) {
                e ?
                    (d.then(function() {
                        a.g.src = 1;
                        b(a.g)
                    }), ha().then(function() {
                        a.g.src = 2;
                        a.i = 3;
                        b(a.g)
                    })) : (a.i = 1, b())
            })
        }), a.h.then(function() {
            a.m = !1
        })) : a.h = B()
    };
    window.omrhp = function(a) {
        var b = new fa;
        b.h || ia(b);
        b.h.then(a)
    };
}).call(this);
