! function(e) {
    "use strict";
    let n;
    ! function(e) {
        e.TRACKING_ACCEPTED = "trackingConsentAccepted", e.TRACKING_DECLINED = "trackingConsentDeclined", e.MARKETING_ACCEPTED = "firstPartyMarketingConsentAccepted", e.SALE_OF_DATA_ACCEPTED = "thirdPartyMarketingConsentAccepted", e.ANALYTICS_ACCEPTED = "analyticsConsentAccepted", e.PREFERENCES_ACCEPTED = "preferencesConsentAccepted", e.MARKETING_DECLINED = "firstPartyMarketingConsentDeclined", e.SALE_OF_DATA_DECLINED = "thirdPartyMarketingConsentDeclined", e.ANALYTICS_DECLINED = "analyticsConsentDeclined", e.PREFERENCES_DECLINED = "preferencesConsentDeclined", e.CONSENT_COLLECTED = "visitorConsentCollected", e.CONSENT_TRACKING_API_LOADED = "consentTrackingApiLoaded"
    }(n || (n = {}));
    let t, o, r, c, i, s, a;
    ! function(e) {
        e.ACCEPTED = "yes", e.DECLINED = "no", e.NO_INTERACTION = "no_interaction", e.NO_VALUE = ""
    }(t || (t = {})),
    function(e) {
        e.NO_VALUE = "", e.ACCEPTED = "1", e.DECLINED = "0"
    }(o || (o = {})),
    function(e) {
        e.GDPR = "GDPR", e.CCPA = "CCPA", e.NO_VALUE = ""
    }(r || (r = {})),
    function(e) {
        e.PREFERENCES = "p", e.ANALYTICS = "a", e.MARKETING = "m", e.SALE_OF_DATA = "t"
    }(c || (c = {})),
    function(e) {
        e.MARKETING = "m", e.ANALYTICS = "a", e.PREFERENCES = "p", e.SALE_OF_DATA = "s"
    }(i || (i = {})),
    function(e) {
        e.MARKETING = "marketing", e.ANALYTICS = "analytics", e.PREFERENCES = "preferences", e.SALE_OF_DATA = "sale_of_data", e.EMAIL = "email"
    }(s || (s = {})),
    function(e) {
        e.HEADLESS_STOREFRONT = "headlessStorefront", e.ROOT_DOMAIN = "rootDomain", e.CHECKOUT_ROOT_DOMAIN = "checkoutRootDomain", e.STOREFRONT_ROOT_DOMAIN = "storefrontRootDomain", e.STOREFRONT_ACCESS_TOKEN = "storefrontAccessToken"
    }(a || (a = {}));
    const u = ["v", "con", "reg"];

    function l(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            n && (o = o.filter((function(n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), t.push.apply(t, o)
        }
        return t
    }

    function E(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {};
            n % 2 ? l(Object(t), !0).forEach((function(n) {
                A(e, n, t[n])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            }))
        }
        return e
    }

    function A(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    let f = {};

    function C(e) {
        const n = document.cookie ? document.cookie.split("; ") : [];
        f[e] = void 0;
        for (let t = 0; t < n.length; t++) {
            const [o, r] = n[t].split("=");
            if (e === decodeURIComponent(o)) return f[e] = JSON.parse(decodeURIComponent(r)), f[e]
        }
    }

    function d(e, n) {
        if (null === n) return;
        f[e] = void 0;
        let t, o, r = document.head.querySelector("meta[name=".concat(n, "]"));
        if (r instanceof HTMLMetaElement) {
            t = r.content;
            try {
                const e = t.replace(/1/g, "true").replace(/0/g, "false"),
                    n = e.split(";").map(e => e.trim()).map(e => e.split("=").map(e => e.trim()));
                if (o = Object.fromEntries(n), o.purposes) {
                    const e = o.purposes.split(/(true|false)/).filter(Boolean),
                        n = {};
                    for (let t = 0; t < e.length; t += 2) n[e[t]] = JSON.parse(e[t + 1]);
                    o.purposes = n
                }
                for (let [e, n] of Object.entries(o)) "true" === n && (o[e] = !0), "false" === n && (o[e] = !1)
            } catch (e) {
                return
            }
            return f[e] = o, o
        }
    }

    function p(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return e in f || C(e) || d(e, n), f[e]
    }

    function T(e) {
        return e === encodeURIComponent(decodeURIComponent(e))
    }

    function N(e, n, t, o) {
        if (!T(o)) throw new TypeError("Cookie value is not correctly URI encoded.");
        if (!T(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
        let r = "".concat(e, "=").concat(o);
        r += "; path=/", r += "; domain=".concat(n), r += "; expires=".concat(new Date((new Date).getTime() + t).toUTCString()), r += "; secure", document.cookie = r, f[e] = JSON.parse(decodeURIComponent(o))
    }

    function _() {
        const e = p("_tracking_consent");
        if (void 0 !== e && ! function(e) {
                if ("2.1" !== e.v) return !0;
                return ! function(e, n) {
                    const t = n.slice().sort();
                    return e.length === n.length && e.slice().sort().every((e, n) => e === t[n])
                }(Object.keys(e).filter(e => "region" !== e && "lim" !== e), u)
            }(e)) return e
    }

    function O() {
        try {
            let e = _();
            if (!e) return;
            return e
        } catch (e) {
            return
        }
    }

    function D() {
        return {
            m: I(i.MARKETING),
            a: I(i.ANALYTICS),
            p: I(i.PREFERENCES),
            s: I(i.SALE_OF_DATA)
        }
    }

    function g() {
        return D()[i.SALE_OF_DATA]
    }

    function R() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return null === e && (e = O()), void 0 === e
    }

    function S(e) {
        switch (e) {
            case o.ACCEPTED:
                return t.ACCEPTED;
            case o.DECLINED:
                return t.DECLINED;
            default:
                return t.NO_VALUE
        }
    }

    function y(e) {
        switch (e) {
            case i.ANALYTICS:
                return s.ANALYTICS;
            case i.MARKETING:
                return s.MARKETING;
            case i.PREFERENCES:
                return s.PREFERENCES;
            case i.SALE_OF_DATA:
                return s.SALE_OF_DATA
        }
    }

    function I(e) {
        const n = O();
        if (!n) return o.NO_VALUE;
        const t = n.con.CMP;
        return t ? t[e] : o.NO_VALUE
    }

    function h() {
        return p("_cmp_a", "shopify-cmp-metadata")
    }

    function w(e) {
        const n = h();
        if (!n) return !0;
        const t = n.purposes[e];
        return "boolean" != typeof t || t
    }

    function L() {
        return w(c.PREFERENCES)
    }

    function m() {
        return w(c.ANALYTICS)
    }

    function P() {
        return w(c.MARKETING)
    }

    function b() {
        return w(c.SALE_OF_DATA)
    }

    function k() {
        const e = h();
        return !!e && ("boolean" == typeof e.display_banner && e.display_banner)
    }

    function v() {
        const e = h();
        return e && e.sale_of_data_region || !1
    }

    function M(e) {
        void 0 !== e.consent ? j({
            [c.PREFERENCES]: e.consent,
            [c.ANALYTICS]: e.consent,
            [c.MARKETING]: e.consent,
            [c.SALE_OF_DATA]: e.consent
        }) : void 0 !== e.granular_consent && j({
            [c.PREFERENCES]: L(),
            [c.ANALYTICS]: m(),
            [c.MARKETING]: P(),
            [c.SALE_OF_DATA]: b()
        })
    }

    function F(e, n) {
        document.dispatchEvent(new CustomEvent(e, {
            detail: n || {}
        }))
    }

    function j(e) {
        const t = e[c.MARKETING],
            o = e[c.SALE_OF_DATA],
            r = e[c.ANALYTICS],
            i = e[c.PREFERENCES];
        !0 === t ? F(n.MARKETING_ACCEPTED) : !1 === t && F(n.MARKETING_DECLINED), !0 === o ? F(n.SALE_OF_DATA_ACCEPTED) : !1 === o && F(n.SALE_OF_DATA_DECLINED), !0 === r ? F(n.ANALYTICS_ACCEPTED) : !1 === r && F(n.ANALYTICS_DECLINED), !0 === i ? F(n.PREFERENCES_ACCEPTED) : !1 === i && F(n.PREFERENCES_DECLINED);
        const s = function(e) {
            return {
                marketingAllowed: e[c.MARKETING],
                saleOfDataAllowed: e[c.SALE_OF_DATA],
                analyticsAllowed: e[c.ANALYTICS],
                preferencesAllowed: e[c.PREFERENCES],
                firstPartyMarketingAllowed: e[c.MARKETING],
                thirdPartyMarketingAllowed: e[c.SALE_OF_DATA]
            }
        }(e);
        F(n.CONSENT_COLLECTED, s);
        const a = [r, i, t, o];
        a.every(e => !0 === e) && F(n.TRACKING_ACCEPTED), a.every(e => !1 === e) && F(n.TRACKING_DECLINED)
    }

    function G(e, n) {
        const t = new XMLHttpRequest,
            o = JSON.stringify(e);
        t.open("POST", "/set_tracking_consent.json", !0), t.setRequestHeader("Content-Type", "application/json"), t.onreadystatechange = function() {
            if (4 !== t.readyState) return;
            f = {};
            const o = function(e) {
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return {
                        error: "Unknown error"
                    }
                }
            }(t.responseText);
            var r;
            0 === (r = t.status) || 200 >= r && r < 400 ? (M(e), n(null, o)) : n(o)
        }, t.send(o)
    }

    function K(e) {
        const n = JSON.stringify({
            marketing: e.marketing,
            analytics: e.analytics,
            preferences: e.preferences,
            saleOfData: e.sale_of_data
        }).replace(/"/g, "");
        return {
            query: "query { consentManagement { cookies(visitorConsent: ".concat(n, ") { answersCookie trackingConsentCookie } } }"),
            variables: {}
        }
    }

    function U(e, n) {
        const t = e.granular_consent,
            o = {
                headers: {
                    "content-type": "application/json",
                    "x-shopify-storefront-access-token": t.storefrontAccessToken
                },
                body: JSON.stringify(K(t)),
                method: "POST"
            };
        fetch("https://".concat(t.checkoutRootDomain, "/api/unstable/graphql.json"), o).then(e => {
            if (e.ok) return e.json();
            throw new Error("Server error")
        }).then(o => {
            const r = "." + (t.checkoutRootDomain || window.location.hostname),
                c = "." + (t.storefrontRootDomain || window.location.hostname),
                i = o.data.consentManagement.cookies.trackingConsentCookie,
                s = o.data.consentManagement.cookies.answersCookie;
            N("_tracking_consent", r, 31536e6, i), N("_cmp_a", r, 31536e6, s), c !== r && (N("_tracking_consent", c, 31536e6, i), N("_cmp_a", c, 31536e6, s)), M(e), n(null, o)
        }).catch(e => {
            n({
                error: "Error while setting headless consent: " + e.message
            })
        })
    }

    function Y(e, n) {
        if (R() && console.warn("Shop is not configured to block privacy regulation in online store settings."), function(e) {
                if ("boolean" != typeof e && "object" != typeof e) throw TypeError("setTrackingConsent must be called with a boolean or object consent value");
                if ("object" == typeof e) {
                    const n = Object.keys(e);
                    if (0 === n.length) throw TypeError("The submitted consent object is empty.");
                    const t = [s.MARKETING, s.ANALYTICS, s.PREFERENCES, s.SALE_OF_DATA, s.EMAIL, a.ROOT_DOMAIN, a.CHECKOUT_ROOT_DOMAIN, a.STOREFRONT_ROOT_DOMAIN, a.STOREFRONT_ACCESS_TOKEN, a.HEADLESS_STOREFRONT];
                    for (const e of n)
                        if (!t.includes(e)) throw TypeError("The submitted consent object should only contain the following keys: ".concat(t.join(", "), ". Extraneous key: ").concat(e, "."))
                }
            }(e), "function" != typeof n) throw TypeError("setTrackingConsent must be called with a callback function");
        if ("object" == typeof e) {
            const t = J(e.analytics),
                o = x(e.analytics);
            return (e.storefrontAccessToken ? U : G)(E(E({
                granular_consent: e
            }, null !== t && {
                referrer: t
            }), null !== o && {
                landing_page: o
            }), n)
        } {
            const t = J(e),
                o = x(e);
            return G(E(E({
                consent: e
            }, null !== t && {
                referrer: t
            }), null !== o && {
                landing_page: o
            }), n)
        }
    }

    function V(e, n) {
        if ("boolean" != typeof e) throw TypeError("setCCPAConsent must be called with a boolean consent value");
        if ("function" != typeof n) throw TypeError("setCCPAConsent must be called with a callback function");
        return G({
            ccpa_consent: e
        }, n)
    }

    function B() {
        if (R()) return t.NO_VALUE;
        const e = D();
        return e[i.MARKETING] === o.ACCEPTED && e[i.ANALYTICS] === o.ACCEPTED ? t.ACCEPTED : e[i.MARKETING] === o.DECLINED || e[i.ANALYTICS] === o.DECLINED ? t.DECLINED : t.NO_INTERACTION
    }

    function q() {
        const e = function() {
            const e = O();
            return R(e) ? r.NO_VALUE : e.reg
        }();
        return e in r ? e : r.NO_VALUE
    }

    function H() {
        return console.warn("getShopPrefs is deprecated and will be removed."), {
            limit: []
        }
    }

    function J(e) {
        return e ? X() ? document.referrer : "" : null
    }

    function x(e) {
        return e ? X() ? window.location.pathname + window.location.search : "/" : null
    }

    function X() {
        if ("" === document.referrer) return !0;
        const e = document.createElement("a");
        return e.href = document.referrer, window.location.hostname != e.hostname
    }

    function z() {
        return console.warn("isRegulationEnforced is deprecated and will be removed."), !0
    }

    function Q() {
        return !!R() || P() && m()
    }

    function W() {
        return v() ? "string" == typeof navigator.globalPrivacyControl ? "1" !== navigator.globalPrivacyControl : "boolean" == typeof navigator.globalPrivacyControl ? !navigator.globalPrivacyControl : null : null
    }

    function Z() {
        return console.warn("userDataCanBeSold is deprecated and will be replaced with saleOfDataAllowed."), b()
    }

    function $() {
        return k() && B() === t.NO_INTERACTION
    }

    function ee() {
        return !1 === W() ? t.DECLINED : (e = g(), R() ? t.NO_VALUE : e === o.NO_VALUE ? t.NO_INTERACTION : S(e));
        var e
    }

    function ne() {
        return console.warn("shouldShowCCPABanner is deprecated and will be removed."), v() && ee() === t.NO_INTERACTION
    }

    function te() {
        return !0
    }

    function oe(e, n, t) {
        try {
            var o;
            ! function(e) {
                const n = new XMLHttpRequest;
                n.open("POST", "https://notify.bugsnag.com/", !0), n.setRequestHeader("Content-Type", "application/json"), n.setRequestHeader("Bugsnag-Api-Key", "95ba910bcec4542ef2a0b64cd7ca666c"), n.setRequestHeader("Bugsnag-Payload-Version", "5");
                const t = function(e) {
                    const n = function(e) {
                            return e.stackTrace || e.stack || e.description || e.name
                        }(e.error),
                        [t, o] = (n || "unknown error").split("\n")[0].split(":");
                    return JSON.stringify({
                        payloadVersion: 5,
                        notifier: {
                            name: "ConsentTrackingAPI",
                            version: "latest",
                            url: "-"
                        },
                        events: [{
                            exceptions: [{
                                errorClass: (t || "").trim(),
                                message: (o || "").trim(),
                                stacktrace: [{
                                    file: "consent-tracking-api.js",
                                    lineNumber: "1",
                                    method: n
                                }],
                                type: "browserjs"
                            }],
                            context: e.context || "general",
                            app: {
                                id: "ConsentTrackingAPI",
                                version: "latest"
                            },
                            metaData: {
                                request: {
                                    shopId: e.shopId,
                                    shopUrl: window.location.href
                                },
                                device: {
                                    userAgent: window.navigator.userAgent
                                },
                                "Additional Notes": e.notes
                            },
                            unhandled: !1
                        }]
                    })
                }(e);
                n.send(t)
            }({
                error: e,
                context: n,
                shopId: ce() || (null === (o = window.Shopify) || void 0 === o ? void 0 : o.shop),
                notes: t
            })
        } catch (e) {}
    }

    function re(e) {
        return function() {
            try {
                return e(...arguments)
            } catch (e) {
                throw oe(e), e
            }
        }
    }

    function ce() {
        try {
            const e = document.getElementById("shopify-features").textContent;
            return JSON.parse(e).shopId
        } catch (e) {
            return null
        }
    }

    function ie() {
        return P()
    }

    function se() {
        return b()
    }

    function ae() {
        const e = {},
            n = D();
        for (const t of Object.keys(n)) e[y(t)] = S(n[t]);
        return e
    }

    function ue(e, n) {
        return "object" == typeof e && e.headlessStorefront && !e.storefrontAccessToken ? function(e, n) {
            function t(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.NO_VALUE;
                return !0 === e ? o.ACCEPTED : !1 === e ? o.DECLINED : n
            }
            const c = {
                    [i.ANALYTICS]: t(e[s.ANALYTICS], o.DECLINED),
                    [i.MARKETING]: t(e[s.MARKETING], o.DECLINED),
                    [i.PREFERENCES]: t(e[s.PREFERENCES], o.DECLINED),
                    [i.SALE_OF_DATA]: t(e[s.SALE_OF_DATA])
                },
                a = {
                    v: "2.1",
                    reg: r.NO_VALUE,
                    con: {
                        CMP: c
                    }
                },
                u = encodeURIComponent(JSON.stringify(a));
            N("_tracking_consent", e.rootDomain, 31536e6, u), n(null)
        }(e, n) : Y(e, n)
    }
    const le = e => {
        let {
            useBugsnagReporting: n
        } = e;
        g() != o.DECLINED && !1 === W() && V(!1, () => !1);
        const t = {
            getTrackingConsent: B,
            setTrackingConsent: ue,
            userCanBeTracked: Q,
            getRegulation: q,
            isRegulationEnforced: z,
            getShopPrefs: H,
            shouldShowGDPRBanner: $,
            userDataCanBeSold: Z,
            setCCPAConsent: V,
            getCCPAConsent: ee,
            shouldShowCCPABanner: ne,
            doesMerchantSupportGranularConsent: te,
            analyticsProcessingAllowed: m,
            preferencesProcessingAllowed: L,
            marketingAllowed: ie,
            firstPartyMarketingAllowed: ie,
            saleOfDataAllowed: se,
            thirdPartyMarketingAllowed: se,
            currentVisitorConsent: ae,
            shouldShowBanner: k,
            saleOfDataRegion: v,
            unstable: {
                analyticsProcessingAllowed: m,
                preferencesProcessingAllowed: L,
                marketingAllowed: ie,
                saleOfDataAllowed: se,
                currentVisitorConsent: ae,
                shouldShowBanner: k,
                saleOfDataRegion: v
            }
        };
        if (!n) return t;
        const r = ["unstable"];
        for (const e in t) t.hasOwnProperty(e) && (t[e] = r.includes(e) ? t[e] : re(t[e]));
        return t
    };

    function Ee() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            useBugsnagReporting: !1
        };
        return le(e)
    }

    function Ae() {
        window.Shopify.customerPrivacy = window.Shopify.trackingConsent = Ee({
            useBugsnagReporting: !0
        }), F(n.CONSENT_TRACKING_API_LOADED)
    }
    window.Shopify = window.Shopify ? window.Shopify : {}, Ae(), e.default = Ee, e.setGlobalObject = Ae, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}({});
//# sourceMappingURL=consent-tracking-api.js.map