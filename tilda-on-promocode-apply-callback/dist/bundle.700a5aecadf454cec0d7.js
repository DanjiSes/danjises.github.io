(() => {
  function r(r, e) {
    var n;
    if ("undefined" == typeof Symbol || null == r[Symbol.iterator]) {
      if (
        Array.isArray(r) ||
        (n = (function (r, e) {
          if (r) {
            if ("string" == typeof r) return t(r, e);
            var n = Object.prototype.toString.call(r).slice(8, -1);
            return (
              "Object" === n && r.constructor && (n = r.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(r)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? t(r, e)
                : void 0
            );
          }
        })(r)) ||
        (e && r && "number" == typeof r.length)
      ) {
        n && (r = n);
        var o = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] };
          },
          e: function (r) {
            throw r;
          },
          f: a,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      u = !0,
      l = !1;
    return {
      s: function () {
        n = r[Symbol.iterator]();
      },
      n: function () {
        var r = n.next();
        return (u = r.done), r;
      },
      e: function (r) {
        (l = !0), (i = r);
      },
      f: function () {
        try {
          u || null == n.return || n.return();
        } finally {
          if (l) throw i;
        }
      },
    };
  }
  function t(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
    return n;
  }
  var e = document.querySelector(".t706__cartwin-content form");
  new MutationObserver(function (t, e) {
    var n,
      o = r(t);
    try {
      for (o.s(); !(n = o.n()).done; ) {
        var a = n.value;
        if ("childList" === a.type) {
          var i,
            u = r(a.removedNodes);
          try {
            for (u.s(); !(i = u.n()).done; )
              if (i.value.className.includes("t-inputpromocode")) {
                var l = window.__shPromocodeCallback;
                if (!l)
                  throw new Error(
                    "Переменная window.__shPromocodeCallback не найденна"
                  );
                return l();
              }
          } catch (r) {
            u.e(r);
          } finally {
            u.f();
          }
        }
      }
    } catch (r) {
      o.e(r);
    } finally {
      o.f();
    }
  }).observe(e, { attributes: !1, childList: !0, subtree: !0 });
})();
