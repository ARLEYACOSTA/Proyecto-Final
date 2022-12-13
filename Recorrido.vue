<template>
  <body>
    <div class="container-body22">
      <div id="panoramica"></div>
      <div class="sub_div">
        <button class="ov-btn-grow-ellipse">INICIO</button>
        <button class="ov-btn-grow-ellipse">PRIMER PISO</button>
        <button class="ov-btn-grow-ellipse">SEGUNDO PISO</button>
        <button class="ov-btn-grow-ellipse">TERCER PISO</button>
        <button class="ov-btn-grow-skew">GIMNASIO</button>
        <button class="ov-btn-grow-skew">BIENESTAR</button>
        <button  class="ov-btn-grow-skew">CAFETERIA</button>
      </div>
    </div>
  </body>
</template>
<!-- <script src="../src\ScripRecorrido\js\config.js"></script>
<script src="../src\ScripRecorrido\js\script.js"></script> -->
 

<style scoped>
</style>

<script>
export default {
  mounted() {
    // Pannellum 2.5.6, https://github.com/mpetroff/pannellum
    window.libpannellum = (function (E, g, p) {
      function Ba(K) {
        function ja(a, e) {
          return 1 == a.level && 1 != e.level
            ? -1
            : 1 == e.level && 1 != a.level
            ? 1
            : e.timestamp - a.timestamp;
        }
        function Q(a, e) {
          return a.level != e.level ? a.level - e.level : a.diff - e.diff;
        }
        function ka(a, e, c, g, l, h) {
          this.vertices = a;
          this.side = e;
          this.level = c;
          this.x = g;
          this.y = l;
          this.path = h
            .replace("%s", e)
            .replace("%l", c)
            .replace("%x", g)
            .replace("%y", l);
        }
        function Ja(a, e, g, p, l) {
          var h;
          var d = e.vertices;
          h = la(a, d.slice(0, 3));
          var u = la(a, d.slice(3, 6)),
            x = la(a, d.slice(6, 9)),
            d = la(a, d.slice(9, 12)),
            t = h[0] + u[0] + x[0] + d[0];
          -4 == t || 4 == t
            ? (h = !1)
            : ((t = h[1] + u[1] + x[1] + d[1]),
              (h = -4 == t || 4 == t ? !1 : 4 != h[2] + u[2] + x[2] + d[2]));
          if (h) {
            h = e.vertices;
            u = h[0] + h[3] + h[6] + h[9];
            x = h[1] + h[4] + h[7] + h[10];
            d = h[2] + h[5] + h[8] + h[11];
            t = Math.sqrt(u * u + x * x + d * d);
            d = Math.asin(d / t);
            u = Math.atan2(x, u) - p;
            u += u > Math.PI ? -2 * Math.PI : u < -Math.PI ? 2 * Math.PI : 0;
            u = Math.abs(u);
            e.diff = Math.acos(
              Math.sin(g) * Math.sin(d) +
                Math.cos(g) * Math.cos(d) * Math.cos(u)
            );
            u = !1;
            for (x = 0; x < c.nodeCache.length; x++)
              if (c.nodeCache[x].path == e.path) {
                u = !0;
                c.nodeCache[x].timestamp = c.nodeCacheTimestamp++;
                c.nodeCache[x].diff = e.diff;
                c.currentNodes.push(c.nodeCache[x]);
                break;
              }
            u ||
              ((e.timestamp = c.nodeCacheTimestamp++),
              c.currentNodes.push(e),
              c.nodeCache.push(e));
            if (e.level < c.level) {
              var d = m.cubeResolution * Math.pow(2, e.level - m.maxLevel),
                u = Math.ceil(d * m.invTileResolution) - 1,
                x = (d % m.tileResolution) * 2,
                k = (2 * d) % m.tileResolution;
              0 === k && (k = m.tileResolution);
              0 === x && (x = 2 * m.tileResolution);
              t = 0.5;
              if (e.x == u || e.y == u)
                t = 1 - m.tileResolution / (m.tileResolution + k);
              var y = 1 - t,
                d = [],
                s = t,
                z = t,
                D = t,
                I = y,
                A = y,
                B = y;
              if (k < m.tileResolution)
                if (e.x == u && e.y != u) {
                  if (((A = z = 0.5), "d" == e.side || "u" == e.side))
                    B = D = 0.5;
                } else
                  e.x != u &&
                    e.y == u &&
                    ((I = s = 0.5), "l" == e.side || "r" == e.side) &&
                    (B = D = 0.5);
              x <= m.tileResolution &&
                (e.x == u &&
                  ((s = 0), (I = 1), "l" == e.side || "r" == e.side) &&
                  ((D = 0), (B = 1)),
                e.y == u &&
                  ((z = 0), (A = 1), "d" == e.side || "u" == e.side) &&
                  ((D = 0), (B = 1)));
              k = [
                h[0],
                h[1],
                h[2],
                h[0] * s + h[3] * I,
                h[1] * t + h[4] * y,
                h[2] * D + h[5] * B,
                h[0] * s + h[6] * I,
                h[1] * z + h[7] * A,
                h[2] * D + h[8] * B,
                h[0] * t + h[9] * y,
                h[1] * z + h[10] * A,
                h[2] * D + h[11] * B,
              ];
              k = new ka(k, e.side, e.level + 1, 2 * e.x, 2 * e.y, m.fullpath);
              d.push(k);
              (e.x == u && x <= m.tileResolution) ||
                ((k = [
                  h[0] * s + h[3] * I,
                  h[1] * t + h[4] * y,
                  h[2] * D + h[5] * B,
                  h[3],
                  h[4],
                  h[5],
                  h[3] * t + h[6] * y,
                  h[4] * z + h[7] * A,
                  h[5] * D + h[8] * B,
                  h[0] * s + h[6] * I,
                  h[1] * z + h[7] * A,
                  h[2] * D + h[8] * B,
                ]),
                (k = new ka(
                  k,
                  e.side,
                  e.level + 1,
                  2 * e.x + 1,
                  2 * e.y,
                  m.fullpath
                )),
                d.push(k));
              (e.x == u && x <= m.tileResolution) ||
                (e.y == u && x <= m.tileResolution) ||
                ((k = [
                  h[0] * s + h[6] * I,
                  h[1] * z + h[7] * A,
                  h[2] * D + h[8] * B,
                  h[3] * t + h[6] * y,
                  h[4] * z + h[7] * A,
                  h[5] * D + h[8] * B,
                  h[6],
                  h[7],
                  h[8],
                  h[9] * s + h[6] * I,
                  h[10] * t + h[7] * y,
                  h[11] * D + h[8] * B,
                ]),
                (k = new ka(
                  k,
                  e.side,
                  e.level + 1,
                  2 * e.x + 1,
                  2 * e.y + 1,
                  m.fullpath
                )),
                d.push(k));
              (e.y == u && x <= m.tileResolution) ||
                ((k = [
                  h[0] * t + h[9] * y,
                  h[1] * z + h[10] * A,
                  h[2] * D + h[11] * B,
                  h[0] * s + h[6] * I,
                  h[1] * z + h[7] * A,
                  h[2] * D + h[8] * B,
                  h[9] * s + h[6] * I,
                  h[10] * t + h[7] * y,
                  h[11] * D + h[8] * B,
                  h[9],
                  h[10],
                  h[11],
                ]),
                (k = new ka(
                  k,
                  e.side,
                  e.level + 1,
                  2 * e.x,
                  2 * e.y + 1,
                  m.fullpath
                )),
                d.push(k));
              for (e = 0; e < d.length; e++) Ja(a, d[e], g, p, l);
            }
          }
        }
        function ta() {
          return [
            -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, 1, 1, -1,
            -1, 1, 1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1,
            1, -1, -1, 1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, -1, -1,
            -1, 1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1,
          ];
        }
        function ua(a, e, c) {
          var g = Math.sin(e);
          e = Math.cos(e);
          if ("x" == c)
            return [
              a[0],
              e * a[1] + g * a[2],
              e * a[2] - g * a[1],
              a[3],
              e * a[4] + g * a[5],
              e * a[5] - g * a[4],
              a[6],
              e * a[7] + g * a[8],
              e * a[8] - g * a[7],
            ];
          if ("y" == c)
            return [
              e * a[0] - g * a[2],
              a[1],
              e * a[2] + g * a[0],
              e * a[3] - g * a[5],
              a[4],
              e * a[5] + g * a[3],
              e * a[6] - g * a[8],
              a[7],
              e * a[8] + g * a[6],
            ];
          if ("z" == c)
            return [
              e * a[0] + g * a[1],
              e * a[1] - g * a[0],
              a[2],
              e * a[3] + g * a[4],
              e * a[4] - g * a[3],
              a[5],
              e * a[6] + g * a[7],
              e * a[7] - g * a[6],
              a[8],
            ];
        }
        function ma(a) {
          return [
            a[0],
            a[4],
            a[8],
            a[12],
            a[1],
            a[5],
            a[9],
            a[13],
            a[2],
            a[6],
            a[10],
            a[14],
            a[3],
            a[7],
            a[11],
            a[15],
          ];
        }
        function Ka(a) {
          La(
            a,
            a.path + "." + m.extension,
            function (e, c) {
              a.texture = e;
              a.textureLoaded = c ? 2 : 1;
            },
            va.crossOrigin
          );
        }
        function la(a, e) {
          var c = [
              a[0] * e[0] + a[1] * e[1] + a[2] * e[2],
              a[4] * e[0] + a[5] * e[1] + a[6] * e[2],
              a[11] + a[8] * e[0] + a[9] * e[1] + a[10] * e[2],
              1 / (a[12] * e[0] + a[13] * e[1] + a[14] * e[2]),
            ],
            g = c[0] * c[3],
            l = c[1] * c[3],
            c = c[2] * c[3],
            h = [0, 0, 0];
          -1 > g && (h[0] = -1);
          1 < g && (h[0] = 1);
          -1 > l && (h[1] = -1);
          1 < l && (h[1] = 1);
          if (-1 > c || 1 < c) h[2] = 1;
          return h;
        }
        function Ea() {
          console.log("Reducing canvas size due to error 1286!");
          A.width = Math.round(A.width / 2);
          A.height = Math.round(A.height / 2);
        }
        var A = g.createElement("canvas");
        A.style.width = A.style.height = "100%";
        K.appendChild(A);
        var c, a, U, V, $, R, wa, ga, m, z, F, ca, Fa, Y, na, va;
        this.init = function (L, e, Ca, H, l, h, d, u) {
          function x(a) {
            if (E) {
              var e = a * a * 4,
                h = new Uint8ClampedArray(e),
                c = u.backgroundColor ? u.backgroundColor : [0, 0, 0];
              c[0] *= 255;
              c[1] *= 255;
              c[2] *= 255;
              for (var b = 0; b < e; b++)
                (h[b++] = c[0]), (h[b++] = c[1]), (h[b++] = c[2]);
              a = new ImageData(h, a, a);
              for (t = 0; 6 > t; t++) 0 == m[t].width && (m[t] = a);
            }
          }
          e === p && (e = "equirectangular");
          if ("equirectangular" != e && "cubemap" != e && "multires" != e)
            throw (
              (console.log("Error: invalid image type specified!"),
              { type: "config error" })
            );
          z = e;
          m = L;
          F = Ca;
          va = u || {};
          if (c) {
            U && (a.detachShader(c, U), a.deleteShader(U));
            V && (a.detachShader(c, V), a.deleteShader(V));
            a.bindBuffer(a.ARRAY_BUFFER, null);
            a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null);
            c.texture && a.deleteTexture(c.texture);
            if (c.nodeCache)
              for (L = 0; L < c.nodeCache.length; L++)
                a.deleteTexture(c.nodeCache[L].texture);
            a.deleteProgram(c);
            c = p;
          }
          ga = p;
          var t,
            E = !1,
            y;
          if ("cubemap" == z)
            for (t = 0; 6 > t; t++)
              0 < m[t].width
                ? (y === p && (y = m[t].width),
                  y != m[t].width &&
                    console.log(
                      "Cube faces have inconsistent widths: " +
                        y +
                        " vs. " +
                        m[t].width
                    ))
                : (E = !0);
          ("cubemap" == z &&
            0 !== (y & (y - 1)) &&
            (navigator.userAgent
              .toLowerCase()
              .match(/(iphone|ipod|ipad).* os 8_/) ||
              navigator.userAgent
                .toLowerCase()
                .match(/(iphone|ipod|ipad).* os 9_/) ||
              navigator.userAgent
                .toLowerCase()
                .match(/(iphone|ipod|ipad).* os 10_/) ||
              navigator.userAgent.match(/Trident.*rv[ :]*11\./))) ||
            (a ||
              (a = A.getContext("experimental-webgl", {
                alpha: !1,
                depth: !1,
              })),
            a && 1286 == a.getError() && Ea());
          if (
            !a &&
            (("multires" == z && m.hasOwnProperty("fallbackPath")) ||
              "cubemap" == z) &&
            ("WebkitAppearance" in g.documentElement.style ||
              navigator.userAgent.match(/Trident.*rv[ :]*11\./) ||
              -1 !== navigator.appVersion.indexOf("MSIE 10"))
          ) {
            R && K.removeChild(R);
            R = g.createElement("div");
            R.className = "pnlm-world";
            H = m.basePath ? m.basePath + m.fallbackPath : m.fallbackPath;
            var Q = "frblud".split(""),
              S = 0;
            l = function () {
              var a = g.createElement("canvas");
              a.className = "pnlm-face pnlm-" + Q[this.side] + "face";
              R.appendChild(a);
              var e = a.getContext("2d");
              a.style.width = this.width + 4 + "px";
              a.style.height = this.height + 4 + "px";
              a.width = this.width + 4;
              a.height = this.height + 4;
              e.drawImage(this, 2, 2);
              var h = e.getImageData(0, 0, a.width, a.height),
                c = h.data,
                b,
                d;
              for (b = 2; b < a.width - 2; b++)
                for (d = 0; 4 > d; d++)
                  (c[4 * (b + a.width) + d] = c[4 * (b + 2 * a.width) + d]),
                    (c[4 * (b + a.width * (a.height - 2)) + d] =
                      c[4 * (b + a.width * (a.height - 3)) + d]);
              for (b = 2; b < a.height - 2; b++)
                for (d = 0; 4 > d; d++)
                  (c[4 * (b * a.width + 1) + d] = c[4 * (b * a.width + 2) + d]),
                    (c[4 * ((b + 1) * a.width - 2) + d] =
                      c[4 * ((b + 1) * a.width - 3) + d]);
              for (d = 0; 4 > d; d++)
                (c[4 * (a.width + 1) + d] = c[4 * (2 * a.width + 2) + d]),
                  (c[4 * (2 * a.width - 2) + d] = c[4 * (3 * a.width - 3) + d]),
                  (c[4 * (a.width * (a.height - 2) + 1) + d] =
                    c[4 * (a.width * (a.height - 3) + 2) + d]),
                  (c[4 * (a.width * (a.height - 1) - 2) + d] =
                    c[4 * (a.width * (a.height - 2) - 3) + d]);
              for (b = 1; b < a.width - 1; b++)
                for (d = 0; 4 > d; d++)
                  (c[4 * b + d] = c[4 * (b + a.width) + d]),
                    (c[4 * (b + a.width * (a.height - 1)) + d] =
                      c[4 * (b + a.width * (a.height - 2)) + d]);
              for (b = 1; b < a.height - 1; b++)
                for (d = 0; 4 > d; d++)
                  (c[b * a.width * 4 + d] = c[4 * (b * a.width + 1) + d]),
                    (c[4 * ((b + 1) * a.width - 1) + d] =
                      c[4 * ((b + 1) * a.width - 2) + d]);
              for (d = 0; 4 > d; d++)
                (c[d] = c[4 * (a.width + 1) + d]),
                  (c[4 * (a.width - 1) + d] = c[4 * (2 * a.width - 2) + d]),
                  (c[a.width * (a.height - 1) * 4 + d] =
                    c[4 * (a.width * (a.height - 2) + 1) + d]),
                  (c[4 * (a.width * a.height - 1) + d] =
                    c[4 * (a.width * (a.height - 1) - 2) + d]);
              e.putImageData(h, 0, 0);
              D.call(this);
            };
            var D = function () {
                0 < this.width
                  ? ($ === p && ($ = this.width),
                    $ != this.width &&
                      console.log(
                        "Fallback faces have inconsistent widths: " +
                          $ +
                          " vs. " +
                          this.width
                      ))
                  : (E = !0);
                S++;
                6 == S && (($ = this.width), K.appendChild(R), d());
              },
              E = !1;
            for (t = 0; 6 > t; t++)
              (h = new Image()),
                (h.crossOrigin = va.crossOrigin ? va.crossOrigin : "anonymous"),
                (h.side = t),
                (h.onload = l),
                (h.onerror = D),
                (h.src =
                  "multires" == z
                    ? H.replace("%s", Q[t]) + "." + m.extension
                    : m[t].src);
            x($);
          } else {
            if (!a)
              throw (
                (console.log("Error: no WebGL support detected!"),
                { type: "no webgl" })
              );
            "cubemap" == z && x(y);
            m.fullpath = m.basePath ? m.basePath + m.path : m.path;
            m.invTileResolution = 1 / m.tileResolution;
            L = ta();
            wa = [];
            for (t = 0; 6 > t; t++)
              (wa[t] = L.slice(12 * t, 12 * t + 12)), (L = ta());
            L = 0;
            if ("equirectangular" == z) {
              if (
                ((L = a.getParameter(a.MAX_TEXTURE_SIZE)),
                Math.max(m.width / 2, m.height) > L)
              )
                throw (
                  (console.log(
                    "Error: The image is too big; it's " +
                      m.width +
                      "px wide, but this device's maximum supported size is " +
                      2 * L +
                      "px."
                  ),
                  { type: "webgl size error", width: m.width, maxWidth: 2 * L })
                );
            } else if (
              "cubemap" == z &&
              y > a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE)
            )
              throw (
                (console.log(
                  "Error: The image is too big; it's " +
                    y +
                    "px wide, but this device's maximum supported size is " +
                    L +
                    "px."
                ),
                { type: "webgl size error", width: y, maxWidth: L })
              );
            u === p ||
              (u.horizonPitch === p && u.horizonRoll === p) ||
              (ga = [
                u.horizonPitch == p ? 0 : u.horizonPitch,
                u.horizonRoll == p ? 0 : u.horizonRoll,
              ]);
            y = a.TEXTURE_2D;
            a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight);
            a.getShaderPrecisionFormat &&
              (e = a.getShaderPrecisionFormat(
                a.FRAGMENT_SHADER,
                a.HIGH_FLOAT
              )) &&
              1 > e.precision &&
              (oa = oa.replace("highp", "mediump"));
            U = a.createShader(a.VERTEX_SHADER);
            e = s;
            "multires" == z && (e = k);
            a.shaderSource(U, e);
            a.compileShader(U);
            V = a.createShader(a.FRAGMENT_SHADER);
            e = pa;
            "cubemap" == z
              ? ((y = a.TEXTURE_CUBE_MAP), (e = qa))
              : "multires" == z && (e = bb);
            a.shaderSource(V, e);
            a.compileShader(V);
            c = a.createProgram();
            a.attachShader(c, U);
            a.attachShader(c, V);
            a.linkProgram(c);
            a.getShaderParameter(U, a.COMPILE_STATUS) ||
              console.log(a.getShaderInfoLog(U));
            a.getShaderParameter(V, a.COMPILE_STATUS) ||
              console.log(a.getShaderInfoLog(V));
            a.getProgramParameter(c, a.LINK_STATUS) ||
              console.log(a.getProgramInfoLog(c));
            a.useProgram(c);
            c.drawInProgress = !1;
            e = u.backgroundColor ? u.backgroundColor : [0, 0, 0];
            a.clearColor(e[0], e[1], e[2], 1);
            a.clear(a.COLOR_BUFFER_BIT);
            c.texCoordLocation = a.getAttribLocation(c, "a_texCoord");
            a.enableVertexAttribArray(c.texCoordLocation);
            "multires" != z
              ? (ca || (ca = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, ca),
                a.bufferData(
                  a.ARRAY_BUFFER,
                  new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]),
                  a.STATIC_DRAW
                ),
                a.vertexAttribPointer(c.texCoordLocation, 2, a.FLOAT, !1, 0, 0),
                (c.aspectRatio = a.getUniformLocation(c, "u_aspectRatio")),
                a.uniform1f(
                  c.aspectRatio,
                  a.drawingBufferWidth / a.drawingBufferHeight
                ),
                (c.psi = a.getUniformLocation(c, "u_psi")),
                (c.theta = a.getUniformLocation(c, "u_theta")),
                (c.f = a.getUniformLocation(c, "u_f")),
                (c.h = a.getUniformLocation(c, "u_h")),
                (c.v = a.getUniformLocation(c, "u_v")),
                (c.vo = a.getUniformLocation(c, "u_vo")),
                (c.rot = a.getUniformLocation(c, "u_rot")),
                a.uniform1f(c.h, H / (2 * Math.PI)),
                a.uniform1f(c.v, l / Math.PI),
                a.uniform1f(c.vo, (h / Math.PI) * 2),
                "equirectangular" == z &&
                  ((c.backgroundColor = a.getUniformLocation(
                    c,
                    "u_backgroundColor"
                  )),
                  a.uniform4fv(c.backgroundColor, e.concat([1]))),
                (c.texture = a.createTexture()),
                a.bindTexture(y, c.texture),
                "cubemap" == z
                  ? (a.texImage2D(
                      a.TEXTURE_CUBE_MAP_POSITIVE_X,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[1]
                    ),
                    a.texImage2D(
                      a.TEXTURE_CUBE_MAP_NEGATIVE_X,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[3]
                    ),
                    a.texImage2D(
                      a.TEXTURE_CUBE_MAP_POSITIVE_Y,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[4]
                    ),
                    a.texImage2D(
                      a.TEXTURE_CUBE_MAP_NEGATIVE_Y,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[5]
                    ),
                    a.texImage2D(
                      a.TEXTURE_CUBE_MAP_POSITIVE_Z,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[0]
                    ),
                    a.texImage2D(
                      a.TEXTURE_CUBE_MAP_NEGATIVE_Z,
                      0,
                      a.RGB,
                      a.RGB,
                      a.UNSIGNED_BYTE,
                      m[2]
                    ))
                  : m.width <= L
                  ? (a.uniform1i(a.getUniformLocation(c, "u_splitImage"), 0),
                    a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, m))
                  : (a.uniform1i(a.getUniformLocation(c, "u_splitImage"), 1),
                    (H = g.createElement("canvas")),
                    (H.width = m.width / 2),
                    (H.height = m.height),
                    (H = H.getContext("2d")),
                    H.drawImage(m, 0, 0),
                    (l = H.getImageData(0, 0, m.width / 2, m.height)),
                    a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l),
                    (c.texture2 = a.createTexture()),
                    a.activeTexture(a.TEXTURE1),
                    a.bindTexture(y, c.texture2),
                    a.uniform1i(a.getUniformLocation(c, "u_image1"), 1),
                    H.drawImage(m, -m.width / 2, 0),
                    (l = H.getImageData(0, 0, m.width / 2, m.height)),
                    a.texImage2D(y, 0, a.RGB, a.RGB, a.UNSIGNED_BYTE, l),
                    a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                    a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                    a.texParameteri(y, a.TEXTURE_MIN_FILTER, a.LINEAR),
                    a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR),
                    a.activeTexture(a.TEXTURE0)),
                a.texParameteri(y, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE),
                a.texParameteri(y, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE),
                a.texParameteri(y, a.TEXTURE_MIN_FILTER, a.LINEAR),
                a.texParameteri(y, a.TEXTURE_MAG_FILTER, a.LINEAR))
              : ((c.vertPosLocation = a.getAttribLocation(c, "a_vertCoord")),
                a.enableVertexAttribArray(c.vertPosLocation),
                Fa || (Fa = a.createBuffer()),
                Y || (Y = a.createBuffer()),
                na || (na = a.createBuffer()),
                a.bindBuffer(a.ARRAY_BUFFER, Y),
                a.bufferData(
                  a.ARRAY_BUFFER,
                  new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                  a.STATIC_DRAW
                ),
                a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, na),
                a.bufferData(
                  a.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array([0, 1, 2, 0, 2, 3]),
                  a.STATIC_DRAW
                ),
                (c.perspUniform = a.getUniformLocation(c, "u_perspMatrix")),
                (c.cubeUniform = a.getUniformLocation(c, "u_cubeMatrix")),
                (c.level = -1),
                (c.currentNodes = []),
                (c.nodeCache = []),
                (c.nodeCacheTimestamp = 0));
            H = a.getError();
            if (0 !== H)
              throw (
                (console.log("Error: Something went wrong with WebGL!", H),
                { type: "webgl error" })
              );
            d();
          }
        };
        this.destroy = function () {
          K !== p &&
            (A !== p && K.contains(A) && K.removeChild(A),
            R !== p && K.contains(R) && K.removeChild(R));
          if (a) {
            var c = a.getExtension("WEBGL_lose_context");
            c && c.loseContext();
          }
        };
        this.resize = function () {
          var g = E.devicePixelRatio || 1;
          A.width = A.clientWidth * g;
          A.height = A.clientHeight * g;
          a &&
            (1286 == a.getError() && Ea(),
            a.viewport(0, 0, a.drawingBufferWidth, a.drawingBufferHeight),
            "multires" != z &&
              a.uniform1f(c.aspectRatio, A.clientWidth / A.clientHeight));
        };
        this.resize();
        this.setPose = function (a, c) {
          ga = [a, c];
        };
        this.render = function (g, e, k, s) {
          var l,
            h = 0;
          s === p && (s = {});
          s.roll && (h = s.roll);
          if (ga !== p) {
            l = ga[0];
            var d = ga[1],
              u = g,
              x = e,
              t =
                Math.cos(d) * Math.sin(g) * Math.sin(l) +
                Math.cos(g) *
                  (Math.cos(l) * Math.cos(e) +
                    Math.sin(d) * Math.sin(l) * Math.sin(e)),
              E =
                -Math.sin(g) * Math.sin(d) +
                Math.cos(g) * Math.cos(d) * Math.sin(e);
            g =
              Math.cos(d) * Math.cos(l) * Math.sin(g) +
              Math.cos(g) *
                (-Math.cos(e) * Math.sin(l) +
                  Math.cos(l) * Math.sin(d) * Math.sin(e));
            g = Math.asin(Math.max(Math.min(g, 1), -1));
            e = Math.atan2(E, t);
            l = [
              Math.cos(u) *
                (Math.sin(d) * Math.sin(l) * Math.cos(x) -
                  Math.cos(l) * Math.sin(x)),
              Math.cos(u) * Math.cos(d) * Math.cos(x),
              Math.cos(u) *
                (Math.cos(l) * Math.sin(d) * Math.cos(x) +
                  Math.sin(x) * Math.sin(l)),
            ];
            d = [-Math.cos(g) * Math.sin(e), Math.cos(g) * Math.cos(e)];
            d = Math.acos(
              Math.max(
                Math.min(
                  (l[0] * d[0] + l[1] * d[1]) /
                    (Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]) *
                      Math.sqrt(d[0] * d[0] + d[1] * d[1])),
                  1
                ),
                -1
              )
            );
            0 > l[2] && (d = 2 * Math.PI - d);
            h += d;
          }
          if (a || ("multires" != z && "cubemap" != z)) {
            if ("multires" != z)
              (k =
                2 *
                Math.atan(
                  Math.tan(0.5 * k) /
                    (a.drawingBufferWidth / a.drawingBufferHeight)
                )),
                (k = 1 / Math.tan(0.5 * k)),
                a.uniform1f(c.psi, e),
                a.uniform1f(c.theta, g),
                a.uniform1f(c.rot, h),
                a.uniform1f(c.f, k),
                !0 === F &&
                  "equirectangular" == z &&
                  (a.bindTexture(a.TEXTURE_2D, c.texture),
                  a.texImage2D(
                    a.TEXTURE_2D,
                    0,
                    a.RGB,
                    a.RGB,
                    a.UNSIGNED_BYTE,
                    m
                  )),
                a.drawArrays(a.TRIANGLES, 0, 6);
            else {
              l = a.drawingBufferWidth / a.drawingBufferHeight;
              d =
                2 *
                Math.atan(
                  (Math.tan(k / 2) * a.drawingBufferHeight) /
                    a.drawingBufferWidth
                );
              d = 1 / Math.tan(d / 2);
              l = [
                d / l,
                0,
                0,
                0,
                0,
                d,
                0,
                0,
                0,
                0,
                100.1 / -99.9,
                20 / -99.9,
                0,
                0,
                -1,
                0,
              ];
              for (
                d = 1;
                d < m.maxLevel &&
                a.drawingBufferWidth >
                  m.tileResolution *
                    Math.pow(2, d - 1) *
                    Math.tan(k / 2) *
                    0.707;

              )
                d++;
              c.level = d;
              d = [1, 0, 0, 0, 1, 0, 0, 0, 1];
              d = ua(d, -h, "z");
              d = ua(d, -g, "x");
              d = ua(d, e, "y");
              d = [
                d[0],
                d[1],
                d[2],
                0,
                d[3],
                d[4],
                d[5],
                0,
                d[6],
                d[7],
                d[8],
                0,
                0,
                0,
                0,
                1,
              ];
              a.uniformMatrix4fv(c.perspUniform, !1, new Float32Array(ma(l)));
              a.uniformMatrix4fv(c.cubeUniform, !1, new Float32Array(ma(d)));
              h = [
                l[0] * d[0],
                l[0] * d[1],
                l[0] * d[2],
                0,
                l[5] * d[4],
                l[5] * d[5],
                l[5] * d[6],
                0,
                l[10] * d[8],
                l[10] * d[9],
                l[10] * d[10],
                l[11],
                -d[8],
                -d[9],
                -d[10],
                0,
              ];
              c.nodeCache.sort(ja);
              if (
                200 < c.nodeCache.length &&
                c.nodeCache.length > c.currentNodes.length + 50
              )
                for (
                  l = c.nodeCache.splice(200, c.nodeCache.length - 200), d = 0;
                  d < l.length;
                  d++
                )
                  a.deleteTexture(l[d].texture);
              c.currentNodes = [];
              d = "fbudlr".split("");
              for (l = 0; 6 > l; l++)
                (u = new ka(wa[l], d[l], 1, 0, 0, m.fullpath)),
                  Ja(h, u, g, e, k);
              c.currentNodes.sort(Q);
              for (g = S.length - 1; 0 <= g; g--)
                -1 === c.currentNodes.indexOf(S[g].node) &&
                  ((S[g].node.textureLoad = !1), S.splice(g, 1));
              if (0 === S.length)
                for (g = 0; g < c.currentNodes.length; g++)
                  if (((e = c.currentNodes[g]), !e.texture && !e.textureLoad)) {
                    e.textureLoad = !0;
                    setTimeout(Ka, 0, e);
                    break;
                  }
              if (!c.drawInProgress) {
                c.drawInProgress = !0;
                a.clear(a.COLOR_BUFFER_BIT);
                for (g = 0; g < c.currentNodes.length; g++)
                  1 < c.currentNodes[g].textureLoaded &&
                    (a.bindBuffer(a.ARRAY_BUFFER, Fa),
                    a.bufferData(
                      a.ARRAY_BUFFER,
                      new Float32Array(c.currentNodes[g].vertices),
                      a.STATIC_DRAW
                    ),
                    a.vertexAttribPointer(
                      c.vertPosLocation,
                      3,
                      a.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    a.bindBuffer(a.ARRAY_BUFFER, Y),
                    a.vertexAttribPointer(
                      c.texCoordLocation,
                      2,
                      a.FLOAT,
                      !1,
                      0,
                      0
                    ),
                    a.bindTexture(a.TEXTURE_2D, c.currentNodes[g].texture),
                    a.drawElements(a.TRIANGLES, 6, a.UNSIGNED_SHORT, 0));
                c.drawInProgress = !1;
              }
            }
            if (s.returnImage !== p) return A.toDataURL("image/png");
          } else
            for (
              l = $ / 2,
                s = {
                  f:
                    "translate3d(-" +
                    (l + 2) +
                    "px, -" +
                    (l + 2) +
                    "px, -" +
                    l +
                    "px)",
                  b:
                    "translate3d(" +
                    (l + 2) +
                    "px, -" +
                    (l + 2) +
                    "px, " +
                    l +
                    "px) rotateX(180deg) rotateZ(180deg)",
                  u:
                    "translate3d(-" +
                    (l + 2) +
                    "px, -" +
                    l +
                    "px, " +
                    (l + 2) +
                    "px) rotateX(270deg)",
                  d:
                    "translate3d(-" +
                    (l + 2) +
                    "px, " +
                    l +
                    "px, -" +
                    (l + 2) +
                    "px) rotateX(90deg)",
                  l:
                    "translate3d(-" +
                    l +
                    "px, -" +
                    (l + 2) +
                    "px, " +
                    (l + 2) +
                    "px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",
                  r:
                    "translate3d(" +
                    l +
                    "px, -" +
                    (l + 2) +
                    "px, -" +
                    (l + 2) +
                    "px) rotateY(270deg)",
                },
                k = 1 / Math.tan(k / 2),
                k = (k * A.clientWidth) / 2 + "px",
                e =
                  "perspective(" +
                  k +
                  ") translateZ(" +
                  k +
                  ") rotateX(" +
                  g +
                  "rad) rotateY(" +
                  e +
                  "rad) ",
                k = Object.keys(s),
                g = 0;
              6 > g;
              g++
            )
              if ((h = R.querySelector(".pnlm-" + k[g] + "face")))
                (h.style.webkitTransform = e + s[k[g]]),
                  (h.style.transform = e + s[k[g]]);
        };
        this.isLoading = function () {
          if (a && "multires" == z)
            for (var g = 0; g < c.currentNodes.length; g++)
              if (!c.currentNodes[g].textureLoaded) return !0;
          return !1;
        };
        this.getCanvas = function () {
          return A;
        };
        var S = [],
          La = (function () {
            function c() {
              var d = this;
              this.texture = this.callback = null;
              this.image = new Image();
              this.image.crossOrigin = l ? l : "anonymous";
              var e = function () {
                if (0 < d.image.width && 0 < d.image.height) {
                  var c = d.image;
                  a.bindTexture(a.TEXTURE_2D, d.texture);
                  a.texImage2D(
                    a.TEXTURE_2D,
                    0,
                    a.RGB,
                    a.RGB,
                    a.UNSIGNED_BYTE,
                    c
                  );
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);
                  a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);
                  a.texParameteri(
                    a.TEXTURE_2D,
                    a.TEXTURE_WRAP_S,
                    a.CLAMP_TO_EDGE
                  );
                  a.texParameteri(
                    a.TEXTURE_2D,
                    a.TEXTURE_WRAP_T,
                    a.CLAMP_TO_EDGE
                  );
                  a.bindTexture(a.TEXTURE_2D, null);
                  d.callback(d.texture, !0);
                } else d.callback(d.texture, !1);
                S.length
                  ? ((c = S.shift()),
                    d.loadTexture(c.src, c.texture, c.callback))
                  : (k[g++] = d);
              };
              this.image.addEventListener("load", e);
              this.image.addEventListener("error", e);
            }
            function e(a, c, e, g) {
              this.node = a;
              this.src = c;
              this.texture = e;
              this.callback = g;
            }
            var g = 4,
              k = {},
              l;
            c.prototype.loadTexture = function (a, c, e) {
              this.texture = c;
              this.callback = e;
              this.image.src = a;
            };
            for (var h = 0; h < g; h++) k[h] = new c();
            return function (c, h, m, p) {
              l = p;
              p = a.createTexture();
              g ? k[--g].loadTexture(h, p, m) : S.push(new e(c, h, p, m));
              return p;
            };
          })();
      }
      var s =
          "attribute vec2 a_texCoord;varying vec2 v_texCoord;void main() {gl_Position = vec4(a_texCoord, 0.0, 1.0);v_texCoord = a_texCoord;}",
        k =
          "attribute vec3 a_vertCoord;attribute vec2 a_texCoord;uniform mat4 u_cubeMatrix;uniform mat4 u_perspMatrix;varying mediump vec2 v_texCoord;void main(void) {gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);v_texCoord = a_texCoord;}",
        oa =
          "precision highp float;\nuniform float u_aspectRatio;\nuniform float u_psi;\nuniform float u_theta;\nuniform float u_f;\nuniform float u_h;\nuniform float u_v;\nuniform float u_vo;\nuniform float u_rot;\nconst float PI = 3.14159265358979323846264;\nuniform sampler2D u_image0;\nuniform sampler2D u_image1;\nuniform bool u_splitImage;\nuniform samplerCube u_imageCube;\nvarying vec2 v_texCoord;\nuniform vec4 u_backgroundColor;\nvoid main() {\nfloat x = v_texCoord.x * u_aspectRatio;\nfloat y = v_texCoord.y;\nfloat sinrot = sin(u_rot);\nfloat cosrot = cos(u_rot);\nfloat rot_x = x * cosrot - y * sinrot;\nfloat rot_y = x * sinrot + y * cosrot;\nfloat sintheta = sin(u_theta);\nfloat costheta = cos(u_theta);\nfloat a = u_f * costheta - rot_y * sintheta;\nfloat root = sqrt(rot_x * rot_x + a * a);\nfloat lambda = atan(rot_x / root, a / root) + u_psi;\nfloat phi = atan((rot_y * costheta + u_f * sintheta) / root);",
        qa =
          oa +
          "float cosphi = cos(phi);\ngl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));\n}",
        pa =
          oa +
          "lambda = mod(lambda + PI, PI * 2.0) - PI;\nvec2 coord = vec2(lambda / PI, phi / (PI / 2.0));\nif(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)\ngl_FragColor = u_backgroundColor;\nelse {\nif(u_splitImage) {\nif(coord.x < 0.0)\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\nelse\ngl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n} else {\ngl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));\n}\n}\n}",
        bb =
          "varying mediump vec2 v_texCoord;uniform sampler2D u_sampler;void main(void) {gl_FragColor = texture2D(u_sampler, v_texCoord);}";
      return {
        renderer: function (g, k, p, s) {
          return new Ba(g, k, p, s);
        },
      };
    })(window, document);
    window.pannellum = (function (E, g, p) {
      function Ba(s, k) {
        function oa() {
          var a = g.createElement("div");
          a.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e";
          if (1 == a.getElementsByTagName("i").length) K();
          else {
            ra = b.hfov;
            Ga = b.pitch;
            var f;
            if ("cubemap" == b.type) {
              P = [];
              for (a = 0; 6 > a; a++)
                P.push(new Image()), (P[a].crossOrigin = b.crossOrigin);
              q.load.lbox.style.display = "block";
              q.load.lbar.style.display = "none";
            } else if ("multires" == b.type)
              (a = JSON.parse(JSON.stringify(b.multiRes))),
                b.basePath &&
                b.multiRes.basePath &&
                !/^(?:[a-z]+:)?\/\//i.test(b.multiRes.basePath)
                  ? (a.basePath = b.basePath + b.multiRes.basePath)
                  : b.multiRes.basePath
                  ? (a.basePath = b.multiRes.basePath)
                  : b.basePath && (a.basePath = b.basePath),
                (P = a);
            else if (!0 === b.dynamic) P = b.panorama;
            else {
              if (b.panorama === p) {
                K(b.strings.noPanoramaError);
                return;
              }
              P = new Image();
            }
            if ("cubemap" == b.type)
              for (
                var n = 6,
                  c = function () {
                    n--;
                    0 === n && pa();
                  },
                  d = function (a) {
                    var ea = g.createElement("a");
                    ea.href = a.target.src;
                    ea.textContent = ea.href;
                    K(b.strings.fileAccessError.replace("%s", ea.outerHTML));
                  },
                  a = 0;
                a < P.length;
                a++
              )
                (f = b.cubeMap[a]),
                  "null" == f
                    ? (console.log(
                        "Will use background instead of missing cubemap face " +
                          a
                      ),
                      c())
                    : (b.basePath && !qa(f) && (f = b.basePath + f),
                      (P[a].onload = c),
                      (P[a].onerror = d),
                      (P[a].src = I(f)));
            else if ("multires" == b.type) pa();
            else if (
              ((f = ""), b.basePath && (f = b.basePath), !0 !== b.dynamic)
            ) {
              f = qa(b.panorama) ? b.panorama : f + b.panorama;
              P.onload = function () {
                E.URL.revokeObjectURL(this.src);
                pa();
              };
              var e = new XMLHttpRequest();
              e.onloadend = function () {
                if (200 != e.status) {
                  var a = g.createElement("a");
                  a.href = f;
                  a.textContent = a.href;
                  K(b.strings.fileAccessError.replace("%s", a.outerHTML));
                }
                Ba(this.response);
                q.load.msg.innerHTML = "";
              };
              e.onprogress = function (a) {
                if (a.lengthComputable) {
                  q.load.lbarFill.style.width =
                    (a.loaded / a.total) * 100 + "%";
                  var b, ea;
                  1e6 < a.total
                    ? ((b = "MB"),
                      (ea = (a.loaded / 1e6).toFixed(2)),
                      (a = (a.total / 1e6).toFixed(2)))
                    : 1e3 < a.total
                    ? ((b = "kB"),
                      (ea = (a.loaded / 1e3).toFixed(1)),
                      (a = (a.total / 1e3).toFixed(1)))
                    : ((b = "B"), (ea = a.loaded), (a = a.total));
                  q.load.msg.innerHTML = ea + " / " + a + " " + b;
                } else
                  (q.load.lbox.style.display = "block"),
                    (q.load.lbar.style.display = "none");
              };
              try {
                e.open("GET", f, !0);
              } catch (h) {
                K(b.strings.malformedURLError);
              }
              e.responseType = "blob";
              e.setRequestHeader("Accept", "image/*,*/*;q=0.9");
              e.withCredentials = "use-credentials" === b.crossOrigin;
              e.send();
            }
            b.draggable && J.classList.add("pnlm-grab");
            J.classList.remove("pnlm-grabbing");
            Ma = !0 === b.dynamicUpdate;
            b.dynamic && Ma && ((P = b.panorama), pa());
          }
        }
        function qa(a) {
          return (
            /^(?:[a-z]+:)?\/\//i.test(a) ||
            "/" == a[0] ||
            "blob:" == a.slice(0, 5)
          );
        }
        function pa() {
          C || (C = new libpannellum.renderer(M));
          Sa ||
            ((Sa = !0),
            W.addEventListener("mousedown", ka, !1),
            g.addEventListener("mousemove", ua, !1),
            g.addEventListener("mouseup", ma, !1),
            b.mouseZoom &&
              (J.addEventListener("mousewheel", U, !1),
              J.addEventListener("DOMMouseScroll", U, !1)),
            b.doubleClickZoom && W.addEventListener("dblclick", Ja, !1),
            s.addEventListener("mozfullscreenchange", d, !1),
            s.addEventListener("webkitfullscreenchange", d, !1),
            s.addEventListener("msfullscreenchange", d, !1),
            s.addEventListener("fullscreenchange", d, !1),
            E.addEventListener("resize", z, !1),
            E.addEventListener("orientationchange", z, !1),
            b.disableKeyboardCtrl ||
              (s.addEventListener("keydown", V, !1),
              s.addEventListener("keyup", R, !1),
              s.addEventListener("blur", $, !1)),
            g.addEventListener("mouseleave", ma, !1),
            "" === g.documentElement.style.pointerAction &&
            "" === g.documentElement.style.touchAction
              ? (W.addEventListener("pointerdown", A, !1),
                W.addEventListener("pointermove", c, !1),
                W.addEventListener("pointerup", a, !1),
                W.addEventListener("pointerleave", a, !1))
              : (W.addEventListener("touchstart", Ka, !1),
                W.addEventListener("touchmove", la, !1),
                W.addEventListener("touchend", Ea, !1)),
            E.navigator.pointerEnabled && (s.style.touchAction = "none"));
          va();
          x(b.hfov);
          setTimeout(function () {}, 500);
        }
        function Ba(a) {
          var f = new FileReader();
          f.addEventListener("loadend", function () {
            var n = f.result;
            if (
              navigator.userAgent
                .toLowerCase()
                .match(/(iphone|ipod|ipad).* os 8_/)
            ) {
              var c = n.indexOf("\u00ff\u00c2");
              (0 > c || 65536 < c) && K(b.strings.iOS8WebGLError);
            }
            c = n.indexOf("<x:xmpmeta");
            if (-1 < c && !0 !== b.ignoreGPanoXMP) {
              var d = n.substring(c, n.indexOf("</x:xmpmeta>") + 12),
                e = function (a) {
                  var b;
                  0 <= d.indexOf(a + '="')
                    ? ((b = d.substring(d.indexOf(a + '="') + a.length + 2)),
                      (b = b.substring(0, b.indexOf('"'))))
                    : 0 <= d.indexOf(a + ">") &&
                      ((b = d.substring(d.indexOf(a + ">") + a.length + 1)),
                      (b = b.substring(0, b.indexOf("<"))));
                  return b !== p ? Number(b) : null;
                },
                n = e("GPano:FullPanoWidthPixels"),
                c = e("GPano:CroppedAreaImageWidthPixels"),
                g = e("GPano:FullPanoHeightPixels"),
                h = e("GPano:CroppedAreaImageHeightPixels"),
                l = e("GPano:CroppedAreaTopPixels"),
                k = e("GPano:PoseHeadingDegrees"),
                m = e("GPano:PosePitchDegrees"),
                e = e("GPano:PoseRollDegrees");
              null !== n &&
                null !== c &&
                null !== g &&
                null !== h &&
                null !== l &&
                (0 > aa.indexOf("haov") && (b.haov = (c / n) * 360),
                0 > aa.indexOf("vaov") && (b.vaov = (h / g) * 180),
                0 > aa.indexOf("vOffset") &&
                  (b.vOffset = -180 * ((l + h / 2) / g - 0.5)),
                null !== k &&
                  0 > aa.indexOf("northOffset") &&
                  ((b.northOffset = k), !1 !== b.compass && (b.compass = !0)),
                null !== m &&
                  null !== e &&
                  (0 > aa.indexOf("horizonPitch") && (b.horizonPitch = m),
                  0 > aa.indexOf("horizonRoll") && (b.horizonRoll = e)));
            }
            P.src = E.URL.createObjectURL(a);
          });
          f.readAsBinaryString !== p
            ? f.readAsBinaryString(a)
            : f.readAsText(a);
        }
        function K(a) {
          a === p && (a = b.strings.genericWebGLError);
          q.errorMsg.innerHTML = "<p>" + a + "</p>";
          v.load.style.display = "none";
          q.load.box.style.display = "none";
          q.errorMsg.style.display = "table";
          Na = !0;
          G = p;
          M.style.display = "none";
          B("error", a);
        }
        function ja(a) {
          var b = Q(a);
          fa.style.left = b.x + "px";
          fa.style.top = b.y + "px";
          clearTimeout(ja.t1);
          clearTimeout(ja.t2);
          fa.style.display = "block";
          fa.style.opacity = 1;
          ja.t1 = setTimeout(function () {
            fa.style.opacity = 0;
          }, 2e3);
          ja.t2 = setTimeout(function () {
            fa.style.display = "none";
          }, 2500);
          a.preventDefault();
        }
        function Q(a) {
          var b = s.getBoundingClientRect(),
            n = {};
          n.x = (a.clientX || a.pageX) - b.left;
          n.y = (a.clientY || a.pageY) - b.top;
          return n;
        }
        function ka(a) {
          a.preventDefault();
          s.focus();
          if (G && b.draggable) {
            var f = Q(a);
            if (b.hotSpotDebug) {
              var n = ta(a);
              console.log(
                "Pitch: " +
                  n[0] +
                  ", Yaw: " +
                  n[1] +
                  ", Center Pitch: " +
                  b.pitch +
                  ", Center Yaw: " +
                  b.yaw +
                  ", HFOV: " +
                  b.hfov
              );
            }
            t();
            Da();
            b.roll = 0;
            w.hfov = 0;
            ha = !0;
            N = Date.now();
            xa = f.x;
            ya = f.y;
            Oa = b.yaw;
            Pa = b.pitch;
            J.classList.add("pnlm-grabbing");
            J.classList.remove("pnlm-grab");
            B("mousedown", a);
            F();
          }
        }
        function Ja(a) {
          b.minHfov === b.hfov
            ? da.setHfov(ra, 1e3)
            : ((a = ta(a)), da.lookAt(a[0], a[1], b.minHfov, 1e3));
        }
        function ta(a) {
          var f = Q(a);
          a = C.getCanvas();
          var n = a.clientWidth,
            c = a.clientHeight;
          a = (f.x / n) * 2 - 1;
          var c = ((1 - (f.y / c) * 2) * c) / n,
            e = 1 / Math.tan((b.hfov * Math.PI) / 360),
            d = Math.sin((b.pitch * Math.PI) / 180),
            g = Math.cos((b.pitch * Math.PI) / 180),
            f = e * g - c * d,
            n = Math.sqrt(a * a + f * f),
            c = (180 * Math.atan((c * g + e * d) / n)) / Math.PI;
          a = (180 * Math.atan2(a / n, f / n)) / Math.PI + b.yaw;
          -180 > a && (a += 360);
          180 < a && (a -= 360);
          return [c, a];
        }
        function ua(a) {
          if (ha && G) {
            N = Date.now();
            var f = C.getCanvas(),
              n = f.clientWidth,
              f = f.clientHeight;
            a = Q(a);
            var c =
              (((180 *
                (Math.atan((xa / n) * 2 - 1) - Math.atan((a.x / n) * 2 - 1))) /
                Math.PI) *
                b.hfov) /
                90 +
              Oa;
            w.yaw = ((c - b.yaw) % 360) * 0.2;
            b.yaw = c;
            n =
              (360 * Math.atan((Math.tan((b.hfov / 360) * Math.PI) * f) / n)) /
              Math.PI;
            n =
              (((180 *
                (Math.atan((a.y / f) * 2 - 1) - Math.atan((ya / f) * 2 - 1))) /
                Math.PI) *
                n) /
                90 +
              Pa;
            w.pitch = 0.2 * (n - b.pitch);
            b.pitch = n;
          }
        }
        function ma(a) {
          ha &&
            ((ha = !1),
            15 < Date.now() - N && (w.pitch = w.yaw = 0),
            J.classList.add("pnlm-grab"),
            J.classList.remove("pnlm-grabbing"),
            (N = Date.now()),
            B("mouseup", a));
        }
        function Ka(a) {
          if (G && b.draggable) {
            t();
            Da();
            b.roll = 0;
            w.hfov = 0;
            var f = Q(a.targetTouches[0]);
            xa = f.x;
            ya = f.y;
            if (2 == a.targetTouches.length) {
              var n = Q(a.targetTouches[1]);
              xa += 0.5 * (n.x - f.x);
              ya += 0.5 * (n.y - f.y);
              Ha = Math.sqrt(
                (f.x - n.x) * (f.x - n.x) + (f.y - n.y) * (f.y - n.y)
              );
            }
            ha = !0;
            N = Date.now();
            Oa = b.yaw;
            Pa = b.pitch;
            B("touchstart", a);
            F();
          }
        }
        function la(a) {
          if (
            b.draggable &&
            (a.preventDefault(), G && (N = Date.now()), ha && G)
          ) {
            var f = Q(a.targetTouches[0]),
              n = f.x,
              c = f.y;
            2 == a.targetTouches.length &&
              -1 != Ha &&
              ((a = Q(a.targetTouches[1])),
              (n += 0.5 * (a.x - f.x)),
              (c += 0.5 * (a.y - f.y)),
              (f = Math.sqrt(
                (f.x - a.x) * (f.x - a.x) + (f.y - a.y) * (f.y - a.y)
              )),
              x(b.hfov + 0.1 * (Ha - f)),
              (Ha = f));
            f = (b.hfov / 360) * b.touchPanSpeedCoeffFactor;
            n = (xa - n) * f + Oa;
            w.yaw = ((n - b.yaw) % 360) * 0.2;
            b.yaw = n;
            c = (c - ya) * f + Pa;
            w.pitch = 0.2 * (c - b.pitch);
            b.pitch = c;
          }
        }
        function Ea() {
          ha = !1;
          150 < Date.now() - N && (w.pitch = w.yaw = 0);
          Ha = -1;
          N = Date.now();
          B("touchend", event);
        }
        function A(a) {
          "touch" == a.pointerType &&
            G &&
            b.draggable &&
            (ia.push(a.pointerId),
            za.push({ clientX: a.clientX, clientY: a.clientY }),
            (a.targetTouches = za),
            Ka(a),
            a.preventDefault());
        }
        function c(a) {
          if ("touch" == a.pointerType && b.draggable)
            for (var f = 0; f < ia.length; f++)
              if (a.pointerId == ia[f]) {
                za[f].clientX = a.clientX;
                za[f].clientY = a.clientY;
                a.targetTouches = za;
                la(a);
                a.preventDefault();
                break;
              }
        }
        function a(a) {
          if ("touch" == a.pointerType) {
            for (var b = !1, n = 0; n < ia.length; n++)
              a.pointerId == ia[n] && (ia[n] = p), ia[n] && (b = !0);
            b || ((ia = []), (za = []), Ea());
            a.preventDefault();
          }
        }
        function U(a) {
          G &&
            ("fullscreenonly" != b.mouseZoom || Aa) &&
            (a.preventDefault(),
            t(),
            (N = Date.now()),
            a.wheelDeltaY
              ? (x(b.hfov - 0.05 * a.wheelDeltaY),
                (w.hfov = 0 > a.wheelDelta ? 1 : -1))
              : a.wheelDelta
              ? (x(b.hfov - 0.05 * a.wheelDelta),
                (w.hfov = 0 > a.wheelDelta ? 1 : -1))
              : a.detail &&
                (x(b.hfov + 1.5 * a.detail), (w.hfov = 0 < a.detail ? 1 : -1)),
            F());
        }
        function V(a) {
          t();
          N = Date.now();
          Da();
          b.roll = 0;
          var f = a.which || a.keycode;
          0 > b.capturedKeyNumbers.indexOf(f) ||
            (a.preventDefault(), 27 == f ? Aa && h() : wa(f, !0));
        }
        function $() {
          for (var a = 0; 10 > a; a++) r[a] = !1;
        }
        function R(a) {
          var f = a.which || a.keycode;
          0 > b.capturedKeyNumbers.indexOf(f) ||
            (a.preventDefault(), wa(f, !1));
        }
        function wa(a, b) {
          var n = !1;
          switch (a) {
            case 109:
            case 189:
            case 17:
            case 173:
              r[0] != b && (n = !0);
              r[0] = b;
              break;
            case 107:
            case 187:
            case 16:
            case 61:
              r[1] != b && (n = !0);
              r[1] = b;
              break;
            case 38:
              r[2] != b && (n = !0);
              r[2] = b;
              break;
            case 87:
              r[6] != b && (n = !0);
              r[6] = b;
              break;
            case 40:
              r[3] != b && (n = !0);
              r[3] = b;
              break;
            case 83:
              r[7] != b && (n = !0);
              r[7] = b;
              break;
            case 37:
              r[4] != b && (n = !0);
              r[4] = b;
              break;
            case 65:
              r[8] != b && (n = !0);
              r[8] = b;
              break;
            case 39:
              r[5] != b && (n = !0);
              r[5] = b;
              break;
            case 68:
              r[9] != b && (n = !0), (r[9] = b);
          }
          n &&
            b &&
            ((ba =
              "undefined" !== typeof performance && performance.now()
                ? performance.now()
                : Date.now()),
            F());
        }
        function ga() {
          if (G) {
            var a = !1,
              f = b.pitch,
              n = b.yaw,
              c = b.hfov,
              e;
            e =
              "undefined" !== typeof performance && performance.now()
                ? performance.now()
                : Date.now();
            ba === p && (ba = e);
            var d = ((e - ba) * b.hfov) / 1700,
              d = Math.min(d, 1);
            r[0] &&
              !0 === b.keyboardZoom &&
              (x(b.hfov + (0.8 * w.hfov + 0.5) * d), (a = !0));
            r[1] &&
              !0 === b.keyboardZoom &&
              (x(b.hfov + (0.8 * w.hfov - 0.2) * d), (a = !0));
            if (r[2] || r[6]) (b.pitch += (0.8 * w.pitch + 0.2) * d), (a = !0);
            if (r[3] || r[7]) (b.pitch += (0.8 * w.pitch - 0.2) * d), (a = !0);
            if (r[4] || r[8]) (b.yaw += (0.8 * w.yaw - 0.2) * d), (a = !0);
            if (r[5] || r[9]) (b.yaw += (0.8 * w.yaw + 0.2) * d), (a = !0);
            a && (N = Date.now());
            if (b.autoRotate) {
              if (0.001 < e - ba) {
                var a = (e - ba) / 1e3,
                  g = ((w.yaw / a) * d - 0.2 * b.autoRotate) * a,
                  g =
                    (0 < -b.autoRotate ? 1 : -1) *
                    Math.min(Math.abs(b.autoRotate * a), Math.abs(g));
                b.yaw += g;
              }
              b.autoRotateStopDelay &&
                ((b.autoRotateStopDelay -= e - ba),
                0 >= b.autoRotateStopDelay &&
                  ((b.autoRotateStopDelay = !1),
                  (Z = b.autoRotate),
                  (b.autoRotate = 0)));
            }
            O.pitch && (m("pitch"), (f = b.pitch));
            O.yaw && (m("yaw"), (n = b.yaw));
            O.hfov && (m("hfov"), (c = b.hfov));
            0 < d &&
              !b.autoRotate &&
              ((a = 1 - b.friction),
              r[4] || r[5] || r[8] || r[9] || O.yaw || (b.yaw += w.yaw * d * a),
              r[2] ||
                r[3] ||
                r[6] ||
                r[7] ||
                O.pitch ||
                (b.pitch += w.pitch * d * a),
              r[0] || r[1] || O.hfov || x(b.hfov + w.hfov * d * a));
            ba = e;
            0 < d &&
              ((w.yaw = 0.8 * w.yaw + ((b.yaw - n) / d) * 0.2),
              (w.pitch = 0.8 * w.pitch + ((b.pitch - f) / d) * 0.2),
              (w.hfov = 0.8 * w.hfov + ((b.hfov - c) / d) * 0.2),
              (f = b.autoRotate ? Math.abs(b.autoRotate) : 5),
              (w.yaw = Math.min(f, Math.max(w.yaw, -f))),
              (w.pitch = Math.min(f, Math.max(w.pitch, -f))),
              (w.hfov = Math.min(f, Math.max(w.hfov, -f))));
            r[0] && r[1] && (w.hfov = 0);
            (r[2] || r[6]) && (r[3] || r[7]) && (w.pitch = 0);
            (r[4] || r[8]) && (r[5] || r[9]) && (w.yaw = 0);
          }
        }
        function m(a) {
          var f = O[a],
            n = Math.min(
              1,
              Math.max((Date.now() - f.startTime) / 1e3 / (f.duration / 1e3), 0)
            ),
            n =
              f.startPosition +
              b.animationTimingFunction(n) * (f.endPosition - f.startPosition);
          if (
            (f.endPosition > f.startPosition && n >= f.endPosition) ||
            (f.endPosition < f.startPosition && n <= f.endPosition) ||
            f.endPosition === f.startPosition
          )
            (n = f.endPosition), (w[a] = 0), delete O[a];
          b[a] = n;
        }
        function z() {
          d("resize");
        }
        function F() {
          Ta || ((Ta = !0), ca());
        }
        function ca() {
          if (!Za)
            if ((Fa(), Qa && clearTimeout(Qa), ha || !0 === X))
              requestAnimationFrame(ca);
            else if (
              r[0] ||
              r[1] ||
              r[2] ||
              r[3] ||
              r[4] ||
              r[5] ||
              r[6] ||
              r[7] ||
              r[8] ||
              r[9] ||
              b.autoRotate ||
              O.pitch ||
              O.yaw ||
              O.hfov ||
              0.01 < Math.abs(w.yaw) ||
              0.01 < Math.abs(w.pitch) ||
              0.01 < Math.abs(w.hfov)
            )
              ga(),
                0 <= b.autoRotateInactivityDelay &&
                  Z &&
                  Date.now() - N > b.autoRotateInactivityDelay &&
                  !b.autoRotate &&
                  ((b.autoRotate = Z), da.lookAt(Ga, p, ra, 3e3)),
                requestAnimationFrame(ca);
            else if (C && (C.isLoading() || (!0 === b.dynamic && Ma)))
              requestAnimationFrame(ca);
            else {
              B("animatefinished", {
                pitch: da.getPitch(),
                yaw: da.getYaw(),
                hfov: da.getHfov(),
              });
              Ta = !1;
              ba = p;
              var a = b.autoRotateInactivityDelay - (Date.now() - N);
              0 < a
                ? (Qa = setTimeout(function () {
                    b.autoRotate = Z;
                    da.lookAt(Ga, p, ra, 3e3);
                    F();
                  }, a))
                : 0 <= b.autoRotateInactivityDelay &&
                  Z &&
                  ((b.autoRotate = Z), da.lookAt(Ga, p, ra, 3e3), F());
            }
        }
        function Fa() {
          var a;
          if (G) {
            var f = C.getCanvas();
            !1 !== b.autoRotate &&
              (360 < b.yaw ? (b.yaw -= 360) : -360 > b.yaw && (b.yaw += 360));
            a = b.yaw;
            var n = 0;
            if (b.avoidShowingBackground) {
              var c = b.hfov / 2,
                d =
                  (180 *
                    Math.atan2(
                      Math.tan((c / 180) * Math.PI),
                      f.width / f.height
                    )) /
                  Math.PI;
              b.vaov > b.haov
                ? Math.min(
                    Math.cos(((b.pitch - c) / 180) * Math.PI),
                    Math.cos(((b.pitch + c) / 180) * Math.PI)
                  )
                : (n =
                    c *
                    (1 -
                      Math.min(
                        Math.cos(((b.pitch - d) / 180) * Math.PI),
                        Math.cos(((b.pitch + d) / 180) * Math.PI)
                      )));
            }
            var c = b.maxYaw - b.minYaw,
              d = -180,
              e = 180;
            360 > c &&
              ((d = b.minYaw + b.hfov / 2 + n),
              (e = b.maxYaw - b.hfov / 2 - n),
              c < b.hfov && (d = e = (d + e) / 2),
              (b.yaw = Math.max(d, Math.min(e, b.yaw))));
            !1 === b.autoRotate &&
              (360 < b.yaw ? (b.yaw -= 360) : -360 > b.yaw && (b.yaw += 360));
            !1 !== b.autoRotate &&
              a != b.yaw &&
              ba !== p &&
              (b.autoRotate *= -1);
            a =
              ((2 *
                Math.atan(
                  Math.tan((b.hfov / 180) * Math.PI * 0.5) /
                    (f.width / f.height)
                )) /
                Math.PI) *
              180;
            f = b.minPitch + a / 2;
            n = b.maxPitch - a / 2;
            b.maxPitch - b.minPitch < a && (f = n = (f + n) / 2);
            isNaN(f) && (f = -90);
            isNaN(n) && (n = 90);
            b.pitch = Math.max(f, Math.min(n, b.pitch));
            C.render(
              (b.pitch * Math.PI) / 180,
              (b.yaw * Math.PI) / 180,
              (b.hfov * Math.PI) / 180,
              { roll: (b.roll * Math.PI) / 180 }
            );
            b.hotSpots.forEach(Ca);
            b.compass &&
              ((Ia.style.transform =
                "rotate(" + (-b.yaw - b.northOffset) + "deg)"),
              (Ia.style.webkitTransform =
                "rotate(" + (-b.yaw - b.northOffset) + "deg)"));
          }
        }
        function Y(a, b, c, d) {
          this.w = a;
          this.x = b;
          this.y = c;
          this.z = d;
        }
        function na(a) {
          var f;
          f = a.alpha;
          var c = a.beta;
          a = a.gamma;
          c = [
            c ? (c * Math.PI) / 180 / 2 : 0,
            a ? (a * Math.PI) / 180 / 2 : 0,
            f ? (f * Math.PI) / 180 / 2 : 0,
          ];
          f = [Math.cos(c[0]), Math.cos(c[1]), Math.cos(c[2])];
          c = [Math.sin(c[0]), Math.sin(c[1]), Math.sin(c[2])];
          f = new Y(
            f[0] * f[1] * f[2] - c[0] * c[1] * c[2],
            c[0] * f[1] * f[2] - f[0] * c[1] * c[2],
            f[0] * c[1] * f[2] + c[0] * f[1] * c[2],
            f[0] * f[1] * c[2] + c[0] * c[1] * f[2]
          );
          f = f.multiply(new Y(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0));
          c = E.orientation ? (-E.orientation * Math.PI) / 180 / 2 : 0;
          f = f
            .multiply(new Y(Math.cos(c), 0, -Math.sin(c), 0))
            .toEulerAngles();
          "number" == typeof X && 10 > X
            ? (X += 1)
            : 10 === X
            ? (($a = (f[2] / Math.PI) * 180 + b.yaw),
              (X = !0),
              requestAnimationFrame(ca))
            : ((b.pitch = (f[0] / Math.PI) * 180),
              (b.roll = (-f[1] / Math.PI) * 180),
              (b.yaw = (-f[2] / Math.PI) * 180 + $a));
        }
        function va() {
          try {
            var a = {};
            b.horizonPitch !== p &&
              (a.horizonPitch = (b.horizonPitch * Math.PI) / 180);
            b.horizonRoll !== p &&
              (a.horizonRoll = (b.horizonRoll * Math.PI) / 180);
            b.backgroundColor !== p && (a.backgroundColor = b.backgroundColor);
            C.init(
              P,
              b.type,
              b.dynamic,
              (b.haov * Math.PI) / 180,
              (b.vaov * Math.PI) / 180,
              (b.vOffset * Math.PI) / 180,
              S,
              a
            );
            !0 !== b.dynamic && (P = p);
          } catch (f) {
            if ("webgl error" == f.type || "no webgl" == f.type) K();
            else if ("webgl size error" == f.type)
              K(
                b.strings.textureSizeError
                  .replace("%s", f.width)
                  .replace("%s", f.maxWidth)
              );
            else throw (K(b.strings.unknownError), f);
          }
        }
        function S() {
          if (b.sceneFadeDuration && C.fadeImg !== p) {
            C.fadeImg.style.opacity = 0;
            var a = C.fadeImg;
            delete C.fadeImg;
            setTimeout(function () {
              M.removeChild(a);
              B("scenechangefadedone");
            }, b.sceneFadeDuration);
          }
          Ia.style.display = b.compass ? "inline" : "none";
          L();
          q.load.box.style.display = "none";
          sa !== p && (M.removeChild(sa), (sa = p));
          G = !0;
          B("load");
          F();
        }
        function La(a) {
          a.pitch = Number(a.pitch) || 0;
          a.yaw = Number(a.yaw) || 0;
          var f = g.createElement("div");
          f.className = "pnlm-hotspot-base";
          f.className = a.cssClass
            ? f.className + (" " + a.cssClass)
            : f.className + (" pnlm-hotspot pnlm-sprite pnlm-" + D(a.type));
          var c = g.createElement("span");
          a.text && (c.innerHTML = D(a.text));
          var d;
          if (a.video) {
            d = g.createElement("video");
            var e = a.video;
            b.basePath && !qa(e) && (e = b.basePath + e);
            d.src = I(e);
            d.controls = !0;
            d.style.width = a.width + "px";
            M.appendChild(f);
            c.appendChild(d);
          } else if (a.image) {
            e = a.image;
            b.basePath && !qa(e) && (e = b.basePath + e);
            d = g.createElement("a");
            d.href = I(a.URL ? a.URL : e, !0);
            d.target = "_blank";
            c.appendChild(d);
            var h = g.createElement("img");
            h.src = I(e);
            h.style.width = a.width + "px";
            h.style.paddingTop = "5px";
            M.appendChild(f);
            d.appendChild(h);
            c.style.maxWidth = "initial";
          } else if (a.URL) {
            d = g.createElement("a");
            d.href = I(a.URL, !0);
            if (a.attributes)
              for (e in a.attributes) d.setAttribute(e, a.attributes[e]);
            else d.target = "_blank";
            M.appendChild(d);
            f.className += " pnlm-pointer";
            c.className += " pnlm-pointer";
            d.appendChild(f);
          } else
            a.sceneId &&
              ((f.onclick = f.ontouchend =
                function () {
                  f.clicked ||
                    ((f.clicked = !0),
                    y(a.sceneId, a.targetPitch, a.targetYaw, a.targetHfov));
                  return !1;
                }),
              (f.className += " pnlm-pointer"),
              (c.className += " pnlm-pointer")),
              M.appendChild(f);
          if (a.createTooltipFunc) a.createTooltipFunc(f, a.createTooltipArgs);
          else if (a.text || a.video || a.image)
            f.classList.add("pnlm-tooltip"),
              f.appendChild(c),
              (c.style.width = c.scrollWidth - 20 + "px"),
              (c.style.marginLeft =
                -(c.scrollWidth - f.offsetWidth) / 2 + "px"),
              (c.style.marginTop = -c.scrollHeight - 12 + "px");
          a.clickHandlerFunc &&
            (f.addEventListener(
              "click",
              function (b) {
                a.clickHandlerFunc(b, a.clickHandlerArgs);
              },
              "false"
            ),
            (f.className += " pnlm-pointer"),
            (c.className += " pnlm-pointer"));
          a.div = f;
        }
        function L() {
          Ua ||
            (b.hotSpots
              ? ((b.hotSpots = b.hotSpots.sort(function (a, b) {
                  return a.pitch < b.pitch;
                })),
                b.hotSpots.forEach(La))
              : (b.hotSpots = []),
            (Ua = !0),
            b.hotSpots.forEach(Ca));
        }
        function e() {
          var a = b.hotSpots;
          Ua = !1;
          delete b.hotSpots;
          if (a)
            for (var f = 0; f < a.length; f++) {
              var c = a[f].div;
              if (c) {
                for (; c.parentNode && c.parentNode != M; ) c = c.parentNode;
                M.removeChild(c);
              }
              delete a[f].div;
            }
        }
        function Ca(a) {
          var f = Math.sin((a.pitch * Math.PI) / 180),
            c = Math.cos((a.pitch * Math.PI) / 180),
            d = Math.sin((b.pitch * Math.PI) / 180),
            e = Math.cos((b.pitch * Math.PI) / 180),
            g = Math.cos(((-a.yaw + b.yaw) * Math.PI) / 180),
            h = f * d + c * g * e;
          if (
            (90 >= a.yaw && -90 < a.yaw && 0 >= h) ||
            ((90 < a.yaw || -90 >= a.yaw) && 0 >= h)
          )
            a.div.style.visibility = "hidden";
          else {
            var l = Math.sin(((-a.yaw + b.yaw) * Math.PI) / 180),
              k = Math.tan((b.hfov * Math.PI) / 360);
            a.div.style.visibility = "visible";
            var m = C.getCanvas(),
              p = m.clientWidth,
              m = m.clientHeight,
              f = [
                ((-p / k) * l * c) / h / 2,
                ((-p / k) * (f * e - c * g * d)) / h / 2,
              ],
              c = Math.sin((b.roll * Math.PI) / 180),
              d = Math.cos((b.roll * Math.PI) / 180),
              f = [f[0] * d - f[1] * c, f[0] * c + f[1] * d];
            f[0] += (p - a.div.offsetWidth) / 2;
            f[1] += (m - a.div.offsetHeight) / 2;
            p =
              "translate(" +
              f[0] +
              "px, " +
              f[1] +
              "px) translateZ(9999px) rotate(" +
              b.roll +
              "deg)";
            a.scale && (p += " scale(" + ra / b.hfov / h + ")");
            a.div.style.webkitTransform = p;
            a.div.style.MozTransform = p;
            a.div.style.transform = p;
          }
        }
        function H(a) {
          b = {};
          var f,
            c,
            d = "haov vaov vOffset northOffset horizonPitch horizonRoll".split(
              " "
            );
          aa = [];
          for (f in Va) Va.hasOwnProperty(f) && (b[f] = Va[f]);
          for (f in k.default)
            if (k.default.hasOwnProperty(f))
              if ("strings" == f)
                for (c in k.default.strings)
                  k.default.strings.hasOwnProperty(c) &&
                    (b.strings[c] = D(k.default.strings[c]));
              else (b[f] = k.default[f]), 0 <= d.indexOf(f) && aa.push(f);
          if (null !== a && "" !== a && k.scenes && k.scenes[a]) {
            var e = k.scenes[a];
            for (f in e)
              if (e.hasOwnProperty(f))
                if ("strings" == f)
                  for (c in e.strings)
                    e.strings.hasOwnProperty(c) &&
                      (b.strings[c] = D(e.strings[c]));
                else (b[f] = e[f]), 0 <= d.indexOf(f) && aa.push(f);
            b.scene = a;
          }
          for (f in k)
            if (k.hasOwnProperty(f))
              if ("strings" == f)
                for (c in k.strings)
                  k.strings.hasOwnProperty(c) &&
                    (b.strings[c] = D(k.strings[c]));
              else (b[f] = k[f]), 0 <= d.indexOf(f) && aa.push(f);
        }
        function l(a) {
          if ((a = a ? a : !1) && "preview" in b) {
            var c = b.preview;
            b.basePath && !qa(c) && (c = b.basePath + c);
            sa = g.createElement("div");
            sa.className = "pnlm-preview-img";
            sa.style.backgroundImage =
              "url('" + I(c).replace(/"/g, "%22").replace(/'/g, "%27") + "')";
            M.appendChild(sa);
          }
          var c = b.title,
            d = b.author;
          a &&
            ("previewTitle" in b && (b.title = b.previewTitle),
            "previewAuthor" in b && (b.author = b.previewAuthor));
          b.hasOwnProperty("title") || (q.title.innerHTML = "");
          b.hasOwnProperty("author") || (q.author.innerHTML = "");
          b.hasOwnProperty("title") ||
            b.hasOwnProperty("author") ||
            (q.container.style.display = "none");
          v.load.innerHTML = "<p>" + b.strings.loadButtonLabel + "</p>";
          q.load.boxp.innerHTML = b.strings.loadingLabel;
          for (var e in b)
            if (b.hasOwnProperty(e))
              switch (e) {
                case "title":
                  q.title.innerHTML = D(b[e]);
                  q.container.style.display = "inline";
                  break;
                case "author":
                  var h = D(b[e]);
                  b.authorURL &&
                    ((h = g.createElement("a")),
                    (h.href = I(b.authorURL, !0)),
                    (h.target = "_blank"),
                    (h.innerHTML = D(b[e])),
                    (h = h.outerHTML));
                  q.author.innerHTML = b.strings.bylineLabel.replace("%s", h);
                  q.container.style.display = "inline";
                  break;
                case "fallback":
                  h = g.createElement("a");
                  h.href = I(b[e], !0);
                  h.target = "_blank";
                  h.textContent =
                    "Click here to view this panorama in an alternative viewer.";
                  var k = g.createElement("p");
                  k.textContent = "Your browser does not support WebGL.";
                  k.appendChild(g.createElement("br"));
                  k.appendChild(h);
                  q.errorMsg.innerHTML = "";
                  q.errorMsg.appendChild(k);
                  break;
                case "hfov":
                  x(Number(b[e]));
                  break;
                case "autoLoad":
                  !0 === b[e] &&
                    C === p &&
                    ((q.load.box.style.display = "inline"),
                    (v.load.style.display = "none"),
                    oa());
                  break;
                case "showZoomCtrl":
                  v.zoom.style.display =
                    b[e] && !1 != b.showControls ? "block" : "none";
                  break;
                case "showFullscreenCtrl":
                  v.fullscreen.style.display =
                    b[e] &&
                    !1 != b.showControls &&
                    ("fullscreen" in g ||
                      "mozFullScreen" in g ||
                      "webkitIsFullScreen" in g ||
                      "msFullscreenElement" in g)
                      ? "block"
                      : "none";
                  break;
                case "hotSpotDebug":
                  Wa.style.display = b[e] ? "block" : "none";
                  break;
                case "showControls":
                  b[e] ||
                    ((v.orientation.style.display = "none"),
                    (v.zoom.style.display = "none"),
                    (v.fullscreen.style.display = "none"));
                  break;
                case "orientationOnByDefault":
                  b[e] && Ra();
              }
          a &&
            (c ? (b.title = c) : delete b.title,
            d ? (b.author = d) : delete b.author);
        }
        function h() {
          if (G && !Na)
            if (Aa)
              g.exitFullscreen
                ? g.exitFullscreen()
                : g.mozCancelFullScreen
                ? g.mozCancelFullScreen()
                : g.webkitCancelFullScreen
                ? g.webkitCancelFullScreen()
                : g.msExitFullscreen && g.msExitFullscreen();
            else
              try {
                s.requestFullscreen
                  ? s.requestFullscreen()
                  : s.mozRequestFullScreen
                  ? s.mozRequestFullScreen()
                  : s.msRequestFullscreen
                  ? s.msRequestFullscreen()
                  : s.webkitRequestFullScreen();
              } catch (a) {}
        }
        function d(a) {
          g.fullscreenElement ||
          g.fullscreen ||
          g.mozFullScreen ||
          g.webkitIsFullScreen ||
          g.msFullscreenElement
            ? (v.fullscreen.classList.add(
                "pnlm-fullscreen-toggle-button-active"
              ),
              (Aa = !0))
            : (v.fullscreen.classList.remove(
                "pnlm-fullscreen-toggle-button-active"
              ),
              (Aa = !1));
          "resize" !== a && B("fullscreenchange", Aa);
          C.resize();
          x(b.hfov);
          F();
        }
        function u(a) {
          var c = b.minHfov;
          "multires" == b.type &&
            C &&
            !b.multiResMinHfov &&
            (c = Math.min(
              c,
              C.getCanvas().width / ((b.multiRes.cubeResolution / 90) * 0.9)
            ));
          if (c > b.maxHfov)
            return (
              console.log("HFOV bounds do not make sense (minHfov > maxHfov)."),
              b.hfov
            );
          var d = b.hfov,
            d = a < c ? c : a > b.maxHfov ? b.maxHfov : a;
          b.avoidShowingBackground &&
            C &&
            ((a = C.getCanvas()),
            (d = Math.min(
              d,
              (360 *
                Math.atan(
                  (Math.tan(((b.maxPitch - b.minPitch) / 360) * Math.PI) /
                    a.height) *
                    a.width
                )) /
                Math.PI
            )));
          return d;
        }
        function x(a) {
          b.hfov = u(a);
          B("zoomchange", b.hfov);
        }
        function t() {
          O = {};
          Z = b.autoRotate ? b.autoRotate : Z;
          b.autoRotate = !1;
        }
        function Ya() {
          Na &&
            ((q.load.box.style.display = "none"),
            (q.errorMsg.style.display = "none"),
            (Na = !1),
            (M.style.display = "block"),
            B("errorcleared"));
          G = !1;
          v.load.style.display = "none";
          q.load.box.style.display = "inline";
          oa();
        }
        function y(a, c, d, h, g) {
          G || (g = !0);
          G = !1;
          O = {};
          var m, q;
          if (
            b.sceneFadeDuration &&
            !g &&
            ((m = C.render(
              (b.pitch * Math.PI) / 180,
              (b.yaw * Math.PI) / 180,
              (b.hfov * Math.PI) / 180,
              { returnImage: !0 }
            )),
            m !== p)
          ) {
            g = new Image();
            g.className = "pnlm-fade-img";
            g.style.transition = "opacity " + b.sceneFadeDuration / 1e3 + "s";
            g.style.width = "100%";
            g.style.height = "100%";
            g.onload = function () {
              y(a, c, d, h, !0);
            };
            g.src = m;
            M.appendChild(g);
            C.fadeImg = g;
            return;
          }
          g = "same" === c ? b.pitch : c;
          m =
            "same" === d
              ? b.yaw
              : "sameAzimuth" === d
              ? b.yaw + (b.northOffset || 0) - (k.scenes[a].northOffset || 0)
              : d;
          q = "same" === h ? b.hfov : h;
          e();
          H(a);
          w.yaw = w.pitch = w.hfov = 0;
          l();
          g !== p && (b.pitch = g);
          m !== p && (b.yaw = m);
          q !== p && (b.hfov = q);
          B("scenechange", a);
          Ya();
        }
        function Da() {
          E.removeEventListener("deviceorientation", na);
          v.orientation.classList.remove("pnlm-orientation-button-active");
          X = !1;
        }
        function Ra() {
          "function" === typeof DeviceMotionEvent.requestPermission
            ? DeviceOrientationEvent.requestPermission().then(function (a) {
                "granted" == a &&
                  ((X = 1),
                  E.addEventListener("deviceorientation", na),
                  v.orientation.classList.add(
                    "pnlm-orientation-button-active"
                  ));
              })
            : ((X = 1),
              E.addEventListener("deviceorientation", na),
              v.orientation.classList.add("pnlm-orientation-button-active"));
        }
        function D(a) {
          return k.escapeHTML
            ? String(a)
                .split(/&/g)
                .join("&amp;")
                .split('"')
                .join("&quot;")
                .split("'")
                .join("&#39;")
                .split("<")
                .join("&lt;")
                .split(">")
                .join("&gt;")
                .split("/")
                .join("&#x2f;")
                .split("\n")
                .join("<br>")
            : String(a).split("\n").join("<br>");
        }
        function I(a, b) {
          try {
            var c = decodeURIComponent(ab(a))
              .replace(/[^\w:]/g, "")
              .toLowerCase();
          } catch (d) {
            return "about:blank";
          }
          return 0 === c.indexOf("javascript:") || 0 === c.indexOf("vbscript:")
            ? (console.log("Script URL removed."), "about:blank")
            : b && 0 === c.indexOf("data:")
            ? (console.log("Data URI removed from link."), "about:blank")
            : a;
        }
        function ab(a) {
          return a.replace(
            /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
            function (a, b) {
              b = b.toLowerCase();
              return "colon" === b
                ? ":"
                : "#" === b.charAt(0)
                ? "x" === b.charAt(1)
                  ? String.fromCharCode(parseInt(b.substring(2), 16))
                  : String.fromCharCode(+b.substring(1))
                : "";
            }
          );
        }
        function B(a) {
          if (a in T)
            for (var b = T[a].length; 0 < b; b--)
              T[a][T[a].length - b].apply(null, [].slice.call(arguments, 1));
        }
        var da = this,
          b,
          C,
          sa,
          ha = !1,
          N = Date.now(),
          xa = 0,
          ya = 0,
          Ha = -1,
          Oa = 0,
          Pa = 0,
          r = Array(10),
          Aa = !1,
          G,
          Na = !1,
          Sa = !1,
          P,
          ba,
          w = { yaw: 0, pitch: 0, hfov: 0 },
          Ta = !1,
          X = !1,
          $a = 0,
          Qa,
          Z = 0,
          ra,
          Ga,
          O = {},
          T = {},
          aa = [],
          Ma = !1,
          Ua = !1,
          Za = !1,
          Va = {
            hfov: 100,
            minHfov: 50,
            multiResMinHfov: !1,
            maxHfov: 120,
            pitch: 0,
            minPitch: p,
            maxPitch: p,
            yaw: 0,
            minYaw: -180,
            maxYaw: 180,
            roll: 0,
            haov: 360,
            vaov: 180,
            vOffset: 0,
            autoRotate: !1,
            autoRotateInactivityDelay: -1,
            autoRotateStopDelay: p,
            type: "equirectangular",
            northOffset: 0,
            showFullscreenCtrl: !0,
            dynamic: !1,
            dynamicUpdate: !1,
            doubleClickZoom: !0,
            keyboardZoom: !0,
            mouseZoom: !0,
            showZoomCtrl: !0,
            autoLoad: !1,
            showControls: !0,
            orientationOnByDefault: !1,
            hotSpotDebug: !1,
            backgroundColor: [0, 0, 0],
            avoidShowingBackground: !1,
            animationTimingFunction: function (a) {
              return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a;
            },
            draggable: !0,
            disableKeyboardCtrl: !1,
            crossOrigin: "anonymous",
            touchPanSpeedCoeffFactor: 1,
            capturedKeyNumbers: [
              16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173,
              187, 189,
            ],
            friction: 0.15,
            strings: {
              loadButtonLabel: "Iniciar <br>Recorrido",
              loadingLabel: "Cargando...",
              bylineLabel: "by %s",
              noPanoramaError: "No panorama image was specified.",
              fileAccessError: "The file %s could not be accessed.",
              malformedURLError:
                "There is something wrong with the panorama URL.",
              iOS8WebGLError:
                "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
              genericWebGLError:
                "Your browser does not have the necessary WebGL support to display this panorama.",
              textureSizeError:
                "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
              unknownError: "Unknown error. Check developer console.",
            },
          };
        s = "string" === typeof s ? g.getElementById(s) : s;
        s.classList.add("pnlm-container");
        s.tabIndex = 0;
        var J = g.createElement("div");
        J.className = "pnlm-ui";
        s.appendChild(J);
        var M = g.createElement("div");
        M.className = "pnlm-render-container";
        s.appendChild(M);
        var W = g.createElement("div");
        W.className = "pnlm-dragfix";
        J.appendChild(W);
        var fa = g.createElement("span");
        fa.className = "pnlm-about-msg";
        fa.innerHTML =
          '<a href="https://pannellum.org/" target="_blank">Pannellum</a> 2.5.6';
        J.appendChild(fa);
        W.addEventListener("contextmenu", ja);
        var q = {},
          Wa = g.createElement("div");
        Wa.className = "pnlm-sprite pnlm-hot-spot-debug-indicator";
        J.appendChild(Wa);
        q.container = g.createElement("div");
        q.container.className = "pnlm-panorama-info";
        q.title = g.createElement("div");
        q.title.className = "pnlm-title-box";
        q.container.appendChild(q.title);
        q.author = g.createElement("div");
        q.author.className = "pnlm-author-box";
        q.container.appendChild(q.author);
        J.appendChild(q.container);
        q.load = {};
        q.load.box = g.createElement("div");
        q.load.box.className = "pnlm-load-box";
        q.load.boxp = g.createElement("p");
        q.load.box.appendChild(q.load.boxp);
        q.load.lbox = g.createElement("div");
        q.load.lbox.className = "pnlm-lbox";
        q.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
        q.load.box.appendChild(q.load.lbox);
        q.load.lbar = g.createElement("div");
        q.load.lbar.className = "pnlm-lbar";
        q.load.lbarFill = g.createElement("div");
        q.load.lbarFill.className = "pnlm-lbar-fill";
        q.load.lbar.appendChild(q.load.lbarFill);
        q.load.box.appendChild(q.load.lbar);
        q.load.msg = g.createElement("p");
        q.load.msg.className = "pnlm-lmsg";
        q.load.box.appendChild(q.load.msg);
        J.appendChild(q.load.box);
        q.errorMsg = g.createElement("div");
        q.errorMsg.className = "pnlm-error-msg pnlm-info-box";
        J.appendChild(q.errorMsg);
        var v = {};
        v.container = g.createElement("div");
        v.container.className = "pnlm-controls-container";
        J.appendChild(v.container);
        v.load = g.createElement("div");
        v.load.className = "pnlm-load-button";
        v.load.addEventListener("click", function () {
          l();
          Ya();
        });
        J.appendChild(v.load);
        v.zoom = g.createElement("div");
        v.zoom.className = "pnlm-zoom-controls pnlm-controls";
        v.zoomIn = g.createElement("div");
        v.zoomIn.className = "pnlm-zoom-in pnlm-sprite pnlm-control";
        v.zoomIn.addEventListener("click", function () {
          G && (x(b.hfov - 5), F());
        });
        v.zoom.appendChild(v.zoomIn);
        v.zoomOut = g.createElement("div");
        v.zoomOut.className = "pnlm-zoom-out pnlm-sprite pnlm-control";
        v.zoomOut.addEventListener("click", function () {
          G && (x(b.hfov + 5), F());
        });
        v.zoom.appendChild(v.zoomOut);
        v.container.appendChild(v.zoom);
        v.fullscreen = g.createElement("div");
        v.fullscreen.addEventListener("click", h);
        v.fullscreen.className =
          "pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";
        (g.fullscreenEnabled ||
          g.mozFullScreenEnabled ||
          g.webkitFullscreenEnabled ||
          g.msFullscreenEnabled) &&
          v.container.appendChild(v.fullscreen);
        v.orientation = g.createElement("div");
        v.orientation.addEventListener("click", function (a) {
          X ? Da() : Ra();
        });
        v.orientation.addEventListener("mousedown", function (a) {
          a.stopPropagation();
        });
        v.orientation.addEventListener("touchstart", function (a) {
          a.stopPropagation();
        });
        v.orientation.addEventListener("pointerdown", function (a) {
          a.stopPropagation();
        });
        v.orientation.className =
          "pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";
        var Xa = !1;
        E.DeviceOrientationEvent &&
          "https:" == location.protocol &&
          0 <= navigator.userAgent.toLowerCase().indexOf("mobi") &&
          (v.container.appendChild(v.orientation), (Xa = !0));
        var Ia = g.createElement("div");
        Ia.className = "pnlm-compass pnlm-controls pnlm-control";
        J.appendChild(Ia);
        k.firstScene
          ? H(k.firstScene)
          : k.default && k.default.firstScene
          ? H(k.default.firstScene)
          : H(null);
        l(!0);
        var ia = [],
          za = [];
        Y.prototype.multiply = function (a) {
          return new Y(
            this.w * a.w - this.x * a.x - this.y * a.y - this.z * a.z,
            this.x * a.w + this.w * a.x + this.y * a.z - this.z * a.y,
            this.y * a.w + this.w * a.y + this.z * a.x - this.x * a.z,
            this.z * a.w + this.w * a.z + this.x * a.y - this.y * a.x
          );
        };
        Y.prototype.toEulerAngles = function () {
          var a = Math.atan2(
              2 * (this.w * this.x + this.y * this.z),
              1 - 2 * (this.x * this.x + this.y * this.y)
            ),
            b = Math.asin(2 * (this.w * this.y - this.z * this.x)),
            c = Math.atan2(
              2 * (this.w * this.z + this.x * this.y),
              1 - 2 * (this.y * this.y + this.z * this.z)
            );
          return [a, b, c];
        };
        this.isLoaded = function () {
          return Boolean(G);
        };
        this.getPitch = function () {
          return b.pitch;
        };
        this.setPitch = function (a, c, d, e) {
          N = Date.now();
          if (1e-6 >= Math.abs(a - b.pitch))
            return "function" == typeof d && d(e), this;
          (c = c == p ? 1e3 : Number(c))
            ? ((O.pitch = {
                startTime: Date.now(),
                startPosition: b.pitch,
                endPosition: a,
                duration: c,
              }),
              "function" == typeof d &&
                setTimeout(function () {
                  d(e);
                }, c))
            : (b.pitch = a);
          F();
          return this;
        };
        this.getPitchBounds = function () {
          return [b.minPitch, b.maxPitch];
        };
        this.setPitchBounds = function (a) {
          b.minPitch = Math.max(-90, Math.min(a[0], 90));
          b.maxPitch = Math.max(-90, Math.min(a[1], 90));
          return this;
        };
        this.getYaw = function () {
          return ((b.yaw + 540) % 360) - 180;
        };
        this.setYaw = function (a, c, d, e) {
          N = Date.now();
          if (1e-6 >= Math.abs(a - b.yaw))
            return "function" == typeof d && d(e), this;
          c = c == p ? 1e3 : Number(c);
          a = ((a + 180) % 360) - 180;
          c
            ? (180 < b.yaw - a ? (a += 360) : 180 < a - b.yaw && (a -= 360),
              (O.yaw = {
                startTime: Date.now(),
                startPosition: b.yaw,
                endPosition: a,
                duration: c,
              }),
              "function" == typeof d &&
                setTimeout(function () {
                  d(e);
                }, c))
            : (b.yaw = a);
          F();
          return this;
        };
        this.getYawBounds = function () {
          return [b.minYaw, b.maxYaw];
        };
        this.setYawBounds = function (a) {
          b.minYaw = Math.max(-360, Math.min(a[0], 360));
          b.maxYaw = Math.max(-360, Math.min(a[1], 360));
          return this;
        };
        this.getHfov = function () {
          return b.hfov;
        };
        this.setHfov = function (a, c, d, e) {
          N = Date.now();
          if (1e-6 >= Math.abs(a - b.hfov))
            return "function" == typeof d && d(e), this;
          (c = c == p ? 1e3 : Number(c))
            ? ((O.hfov = {
                startTime: Date.now(),
                startPosition: b.hfov,
                endPosition: u(a),
                duration: c,
              }),
              "function" == typeof d &&
                setTimeout(function () {
                  d(e);
                }, c))
            : x(a);
          F();
          return this;
        };
        this.getHfovBounds = function () {
          return [b.minHfov, b.maxHfov];
        };
        this.setHfovBounds = function (a) {
          b.minHfov = Math.max(0, a[0]);
          b.maxHfov = Math.max(0, a[1]);
          return this;
        };
        this.lookAt = function (a, c, d, e, g, h) {
          e = e == p ? 1e3 : Number(e);
          a !== p &&
            1e-6 < Math.abs(a - b.pitch) &&
            (this.setPitch(a, e, g, h), (g = p));
          c !== p &&
            1e-6 < Math.abs(c - b.yaw) &&
            (this.setYaw(c, e, g, h), (g = p));
          d !== p &&
            1e-6 < Math.abs(d - b.hfov) &&
            (this.setHfov(d, e, g, h), (g = p));
          "function" == typeof g && g(h);
          return this;
        };
        this.getNorthOffset = function () {
          return b.northOffset;
        };
        this.setNorthOffset = function (a) {
          b.northOffset = Math.min(360, Math.max(0, a));
          F();
          return this;
        };
        this.getHorizonRoll = function () {
          return b.horizonRoll;
        };
        this.setHorizonRoll = function (a) {
          b.horizonRoll = Math.min(90, Math.max(-90, a));
          C.setPose(
            (b.horizonPitch * Math.PI) / 180,
            (b.horizonRoll * Math.PI) / 180
          );
          F();
          return this;
        };
        this.getHorizonPitch = function () {
          return b.horizonPitch;
        };
        this.setHorizonPitch = function (a) {
          b.horizonPitch = Math.min(90, Math.max(-90, a));
          C.setPose(
            (b.horizonPitch * Math.PI) / 180,
            (b.horizonRoll * Math.PI) / 180
          );
          F();
          return this;
        };
        this.startAutoRotate = function (a, c) {
          a = a || Z || 1;
          c = c === p ? Ga : c;
          b.autoRotate = a;
          da.lookAt(c, p, ra, 3e3);
          F();
          return this;
        };
        this.stopAutoRotate = function () {
          Z = b.autoRotate ? b.autoRotate : Z;
          b.autoRotate = !1;
          b.autoRotateInactivityDelay = -1;
          return this;
        };
        this.stopMovement = function () {
          t();
          w = { yaw: 0, pitch: 0, hfov: 0 };
        };
        this.getRenderer = function () {
          return C;
        };
        this.setUpdate = function (a) {
          Ma = !0 === a;
          C === p ? pa() : F();
          return this;
        };
        this.mouseEventToCoords = function (a) {
          return ta(a);
        };
        this.loadScene = function (a, b, c, d) {
          !1 !== G && y(a, b, c, d);
          return this;
        };
        this.getScene = function () {
          return b.scene;
        };
        this.addScene = function (a, b) {
          k.scenes[a] = b;
          return this;
        };
        this.removeScene = function (a) {
          if (b.scene === a || !k.scenes.hasOwnProperty(a)) return !1;
          delete k.scenes[a];
          return !0;
        };
        this.toggleFullscreen = function () {
          h();
          return this;
        };
        this.getConfig = function () {
          return b;
        };
        this.getContainer = function () {
          return s;
        };
        this.addHotSpot = function (a, c) {
          if (c === p && b.scene === p) b.hotSpots.push(a);
          else {
            var d = c !== p ? c : b.scene;
            if (k.scenes.hasOwnProperty(d))
              k.scenes[d].hasOwnProperty("hotSpots") ||
                ((k.scenes[d].hotSpots = []),
                d == b.scene && (b.hotSpots = k.scenes[d].hotSpots)),
                k.scenes[d].hotSpots.push(a);
            else throw "Invalid scene ID!";
          }
          if (c === p || b.scene == c) La(a), G && Ca(a);
          return this;
        };
        this.removeHotSpot = function (a, c) {
          if (c === p || b.scene == c) {
            if (!b.hotSpots) return !1;
            for (var d = 0; d < b.hotSpots.length; d++)
              if (
                b.hotSpots[d].hasOwnProperty("id") &&
                b.hotSpots[d].id === a
              ) {
                for (var e = b.hotSpots[d].div; e.parentNode != M; )
                  e = e.parentNode;
                M.removeChild(e);
                delete b.hotSpots[d].div;
                b.hotSpots.splice(d, 1);
                return !0;
              }
          } else if (k.scenes.hasOwnProperty(c)) {
            if (!k.scenes[c].hasOwnProperty("hotSpots")) return !1;
            for (d = 0; d < k.scenes[c].hotSpots.length; d++)
              if (
                k.scenes[c].hotSpots[d].hasOwnProperty("id") &&
                k.scenes[c].hotSpots[d].id === a
              )
                return k.scenes[c].hotSpots.splice(d, 1), !0;
          } else return !1;
        };
        this.resize = function () {
          C && z();
        };
        this.isLoaded = function () {
          return G;
        };
        this.isOrientationSupported = function () {
          return Xa || !1;
        };
        this.stopOrientation = function () {
          Da();
        };
        this.startOrientation = function () {
          Xa && Ra();
        };
        this.isOrientationActive = function () {
          return Boolean(X);
        };
        this.on = function (a, b) {
          T[a] = T[a] || [];
          T[a].push(b);
          return this;
        };
        this.off = function (a, b) {
          if (!a) return (T = {}), this;
          if (b) {
            var c = T[a].indexOf(b);
            0 <= c && T[a].splice(c, 1);
            0 == T[a].length && delete T[a];
          } else delete T[a];
          return this;
        };
        this.destroy = function () {
          Za = !0;
          clearTimeout(Qa);
          C && C.destroy();
          Sa &&
            (g.removeEventListener("mousemove", ua, !1),
            g.removeEventListener("mouseup", ma, !1),
            s.removeEventListener("mozfullscreenchange", d, !1),
            s.removeEventListener("webkitfullscreenchange", d, !1),
            s.removeEventListener("msfullscreenchange", d, !1),
            s.removeEventListener("fullscreenchange", d, !1),
            E.removeEventListener("resize", z, !1),
            E.removeEventListener("orientationchange", z, !1),
            s.removeEventListener("keydown", V, !1),
            s.removeEventListener("keyup", R, !1),
            s.removeEventListener("blur", $, !1),
            g.removeEventListener("mouseleave", ma, !1));
          s.innerHTML = "";
          s.classList.remove("pnlm-container");
        };
      }
      return {
        viewer: function (g, k) {
          return new Ba(g, k);
        },
      };
    })(window, document);
     
    ///////////////////////////////SCRIPTC DEL RECORRIDO DE LAS FOTOS/////////////////////////

    // this.$router.push("/recorrido");
    //CONFIGURACION VISTA 360

    pannellum.viewer("panoramica", {
      autoLoad: true,
      autoRotate: -4,
      showControls: false,
      compass: false,

      //"orientationOnByDefault": true,

      default: {
        firstScene: "entrada1",

        sceneFadeDuration: 1000,
      },
    
      scenes: {
        entrada1: {
          //"title": "Entrada",
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Posición inicial izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_104137_00_003.jpg",
          hotSpots: [
            {
              //FLECHA ARRIBA
              pitch: -15,
              yaw: 150, //Posición flecha izquierda o derecha
              type: "scene",
              text: "Terraza oeste",
              sceneId: "entrada2", //Escalera_rampa_3psio
              cssClass: "flecha-l", //Cuatro tamaños de flechas: flecha-xl, flecha-l, flecha-m, flecha-s, flecha-xs
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 210, //Grados izquierda o derecha de la proxima imagen
            },

            
          ],
        },

        entrada2: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_104246_00_004.jpg",
          hotSpots: [
            {
              // Ir Adelante
              pitch: -8,
              yaw: 220,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada02",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 180, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: -4,
              yaw: 30,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
            {
              //PUNTO INFORMACIÓN
              pitch: 0,
              yaw: 190,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "Portería, se encuentra un celador y una enfermera, quien es la encargada de hacer cumplir el protocolo de bioseguridad, una vez hecho esto las personas podrán ingresar al centro.",
            },
          ],
        },
        entrada02: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135935_00_merged.jpg",
          hotSpots: [
            {
              pitch: -8,
              yaw: 220,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 220, //Grados izquierda o derecha de la proxima imagen
            },
            {
              pitch: -4,
              yaw: -3,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada2",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada3: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_110600_00_merged.jpg",
          hotSpots: [
            {
              pitch: -12,
              yaw: 30,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada02",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir al parqueadero
              pitch: -18,
              yaw: -80,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada4",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Adelante
              pitch: -3,
              yaw: 182,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada5", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: 0,
              yaw: -80,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "Parqueadero motos. Aquí los aprendices pueden parquear sus motocicletas",
            },
          ],
        },
        ///PRIMER PARQUEADEREO MOTO
        entrada4: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_110821_00_merged.jpg",
          hotSpots: [
            {
              pitch: 2,
              yaw: 0,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 180, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada5: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_110926_00_merged.jpg",
          hotSpots: [
            {
              pitch: -4,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada6",
              cssClass: "flecha-s",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 190, //Grados izquierda o derecha de la proxima imagen
            },

            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada3", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada6: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_111039_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -20,
              yaw: -29,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada5",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -210, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: 203,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada7", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 200, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada7: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_111136_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -20,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada6",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -40, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -180,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada8", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 180, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada8: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_111428_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada7",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 0, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -188,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada9", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada9: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135500_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -8,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 170, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -15,
              yaw: 206,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada8", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 360, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir Atras
              pitch: 0,
              yaw: -80,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "Parqueadero Carros. Aquí tanto los aprendices como los ejecutivos pueden parquear sus automoviles",
            },
          ],
        },
        entrada10: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_111621_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -35,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada9",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -185,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 130, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS parqueadero carro
              pitch: -6,
              yaw: 65,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada010",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 120, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        /// PARQUEADERO CARROS 2
        entrada010: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112156_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -182,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 145, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada11: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112340_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -13,
              yaw: -20,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada10",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -14,
              yaw: -175,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada12", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 210, //Grados izquierda o derecha de la proxima imagen
            },
            ///IR AL BIENESTAR DEL APRENDIZ
            {
              pitch: -6,
              yaw: 78,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //PENDIENTE
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 155, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        entrada12: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112504_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 80,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -14,
              yaw: -94,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada13", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -180, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE ADMINISTRACION
            {
              pitch: 0,
              yaw: 170,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "OFICINA ADMINISTRATIVA. Esta se encarga de dirigir, coordinar, controlar y ejecutar los procesos para la administración y prestación de servicios generales",
            },
          ],
        },
        entrada13: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112546_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -13,
              yaw: 96,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada12",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 100, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -14,
              yaw: -74,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -130, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE COORDINACION ACADEMICA
            {
              pitch: 5,
              yaw: 147,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "COODINACIÓN ACADEMICA. Esta se encarga de dirigir, coordinar, controlar y ejecutar los procesos para la administración y prestación de servicios generales",
            },
          ],
        },
        entrada14: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112712_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -13,
              yaw: 78,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada13",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 105, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -14,
              yaw: -92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            // LADO DE LA CANCHA DE VOLI
            {
              pitch: -10,
              yaw: -187,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE BAÑOS
            {
              pitch: 3,
              yaw: -165,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "EL CTA SENA TIENE BAÑOS TANTO COMO PARA HOMBRES COMO PARA MUJERES Y PARA PERSONAS DISCAPACITADAS.",
            },
          ],
        },
        entrada15: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_112846_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -14,
              yaw: -114,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 95, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -13,
              yaw: 60,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ESCALERAS
              pitch: -5,
              yaw: -200,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada015", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE BEBEDERO DE AGUA
            {
              pitch: -10,
              yaw: -40,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "BEBEDERO DE AGUA POTABLE",
            },
          ],
        },
        // ESCALERAS 1
        entrada015: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121148_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS PRIMER PISO ENTRADA 15
            {
              pitch: -33,
              yaw: -165,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: -10,
              yaw: -195,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_2_piso", //crear........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 200, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // AMBIENTE CONVENCIONAL #101
        entrada16: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_114750_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS ENTRADA 15
            {
              pitch: -14,
              yaw: -122,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada15", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -130, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE 17
            {
              pitch: -8,
              yaw: 65,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir AL AMBIENTE
            {
              pitch: -20,
              yaw: -20,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada016",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE AMBIENTE CONVENCIONA
            {
              pitch: 17,
              yaw: 7,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL #101",
            },
          ],
        },
        entrada016: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_113131_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // AMBIENTE MECANICA CERA
        entrada17: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_113333_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS ENTRADA 16
            {
              pitch: -10,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada16", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -90, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -13,
              yaw: -86,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -105, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE MECANICA
              pitch: -20,
              yaw: 176,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada017",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE AMBIENTE CONVENCIONA
            {
              pitch: 13.5,
              yaw: 212.5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "TALLER DE MECANICA. En el área del taller de mecánica tiene todo lo necesario para que los aprendices puedan adquirir sus conocimientos en el área automotriz",
            },
          ],
        },
        //    AMBIENTE MECANICA
        entrada017: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_114633_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -140,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -100, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        /////////////////////////////////
        // RAMPA ESACLERAS PRIMER PISO
        entrada18: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_113452_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS ENTRADA 17
            {
              pitch: -10,
              yaw: 88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada17", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 100, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE ENTRADA 19
            {
              pitch: -13,
              yaw: -88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir A LAS ESCALERAS
            {
              pitch: -5,
              yaw: 179,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "escalera2",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir AL GYM
            {
              pitch: -9,
              yaw: 162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir A LA RAMPA
            {
              pitch: -1,
              yaw: -2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "rampa",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // ESCALERAS 2
        escalera2: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115435_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -25,
              yaw: -28,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ADELANTE
              pitch: 2,
              yaw: -1,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera", //crear..
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // RAMPA
        rampa: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115626_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -10,
              yaw: 0,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -50, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE SEGUNDO PISO
            {
              pitch: -20,
              yaw: -26,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera", //crear.......
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -30, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // AMBIENTE CONVENCIONAL 102
        entrada19: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_113616_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE AMBIENTE CONSTRUCCION
            {
              pitch: -10,
              yaw: 85,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS ESCALERAS RAMPA PRIMER PISO
            {
              pitch: -30,
              yaw: -96,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir AL AMBIENTE LADO RAMPA
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada019",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE AMBIENTE CONVENCIONA 102
            {
              pitch: 14,
              yaw: 11.5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL #102",
            },
          ],
        },
        //    AMBIENTE LADO RAMPA
        entrada019: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115100_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -179,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 60, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //AMBIENTE DE CONSTRUCCIÓN
        entrada20: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115209_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -6,
              yaw: 79,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada21", //crear.........
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS AMBIENTE 19
            {
              pitch: -10,
              yaw: -105,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada19",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -80, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir AL AMBIENTE CONSTRUCION
            {
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada020",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 200, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE TALLER DE CONSTRUCCIÓN
            {
              pitch: 11,
              yaw: 27.5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "TALLER DE CONSTRUCCIÓN",
            },
          ],
        },
        //   DENTRO DE  AMBIENTE CONSTRUCION
        entrada020: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115240_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -79,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 60, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //CAFETERIA
        entrada21: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_142303_00_merged.jpg",
          hotSpots: [
            // ESQUINA DE TORRE DE ALTURA
            {
              pitch: -8,
              yaw: -146.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "torrealtura",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 180, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir Atras AMBIENTE DE CONSTRUCCION
            {
              pitch: -15,
              yaw: 138,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada20",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -80, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE CAFETERIA
            {
              pitch: 4,
              yaw: 11,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "CAFETERIA",
            },
            // INFORMACION DE GASTRONOMIA
            {
              pitch: 4,
              yaw: -6,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "ÁREA DE GASTRONOMIA. Este ambiente tiene la finalidad de preparar a los aprendices para la construcción de platos teniendo en cuenta culturas, texturas y sabores.",
            },
          ],
        },
        // TORRE DE ALTURAS
        torrealtura: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_134609_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE  CERA GYM
            {
              pitch: -10,
              yaw: -116,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -50, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS CAFETERIA
            {
              pitch: -10,
              yaw: -205,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada21",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE TORRE DE ALTURAS
            {
              pitch: 2,
              yaw: 9,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "TORRE DE ALTURA.Esta área tiene como fin brindar capacitación y entrenamiento en protección contra caídas para trabajo en alturas tiene a disposición diferentes programas de formación cumpliendo con las necesidades de capacitación de las organizaciones.",
            },
          ],
        },
        // CERA GYM
        ceragym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_134801_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS TORRE DE ALTURAS
            {
              pitch: -6,
              yaw: 92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "torrealtura", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE ENTRADA GYM
            {
              pitch: -10,
              yaw: -88,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -50, //Grados izquierda o derecha de la proxima imagen
            },
            // ANDEN GYM SALA DE INSTRUCTORES
            {
              pitch: -5,
              yaw: 0.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "sala_instrutores",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //    SALA DE INSTRUTORES
        sala_instrutores: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_134838_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -8,
              yaw: -145,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -50, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE SALA DE INSTRUCTORES
            {
              pitch: 13,
              yaw: 0,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "SALA DE INSTRUCTORES",
            },
          ],
        },
        // GYM
        Gym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_134435_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS -CERA GYM -SALA DE INSTRUTORES AND -TORRE
            {
              pitch: -10,
              yaw: 93.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -8,
              yaw: -86.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRO DEL GYM
            {
              pitch: -20,
              yaw: -6,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entradaGym",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // REGRESAR A LA ENTRADA-18 (RAMPA)
            {
              pitch: -10,
              yaw: -190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada18",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -40, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE GIMNASIO
            {
              pitch: 8,
              yaw: 16,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "GIMNASIO. Es un lugar que permite practicar deportes o hacer ejercicio en un recinto cerrado con varias máquinas y artículos deportivos a disposición de quienes lo visiten",
            },
          ],
        },
        //   DENTRO DEL GYMMM
        entradaGym: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_142551_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -145, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        // CERA GYM
        ceragym1: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135056_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -6,
              yaw: 63.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS GYM
            {
              pitch: -7,
              yaw: -115,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Gym",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 50, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // LADO DE LA CANCHA DE VOLI
              pitch: -10,
              yaw: -190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha_voli",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // REGRESAR A LA ENTRADA-12
              pitch: -10,
              yaw: -18,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada14",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -60, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE CUARTO DE BOMBA
            {
              pitch: 1,
              yaw: 215,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "CUARTO DE BOMBA",
            },
          ],
        },
        cancha_voli: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135001_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -8,
              yaw: 92,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30, //Grados izquierda o derecha de la proxima imagen
            },
            //IR ALA CANCHA
            {
              pitch: -7,
              yaw: -5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 260, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE CANCHA DE VOLIBOL
            {
              pitch: 4,
              yaw: -5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "CANCHA DE VOLIBOL",
            },
            // INFORMACION DE PLANTA ELECTRICA
            {
              pitch: 4,
              yaw: -95,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "PLANTA ELÉCTRICA",
            },
          ],
        },
        cancha: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_142659_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -7,
              yaw: -115,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "cancha_voli",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        // BIENESTAR DEL APRENDIZ

        bienestar: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_111701_00_merged.jpg",
          hotSpots: [
            // IR A LA ENTRADA-10
            {
              pitch: -5,
              yaw: -135,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada11", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -200, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS CERA GYM
            {
              pitch: -5,
              yaw: -188.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "ceragym1",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -80, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir A LA OFICINA BIENESTAR
            {
              pitch: -12,
              yaw: 112,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Oficina_bienestar",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir AL ARBOL
            {
              pitch: -9,
              yaw: -10,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -60, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE BIENESTAR
            {
              pitch: 4,
              yaw: 105,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "AGROPECUARIA INDUSTRIAL Y BIENESTAR DEL APRENDIZ",
            },
          ],
        },

        //   PUERTA BIENESTAR
        Oficina_bienestar: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135251_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -16,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE BIENESTAR
            {
              pitch: 10,
              yaw: 7,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "BIENESTAR DEL APRENDIZ",
            },
          ],
        },
        // ARBOL & CENDERO

        Arbol_Cendero: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135551_00_merged.jpg",
          hotSpots: [
            // Ir  ATRAS BIENESTAR
            {
              pitch: -6,
              yaw: 75.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "bienestar", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 170, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE
            {
              pitch: -8,
              yaw: -110,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            // CENDERO PARQUEADERO MOTOS SOLO DOCENTES
            {
              pitch: -7,
              yaw: -10.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Cendero",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE PARQUEADERO SOLO EJECUTIVOS
            {
              pitch: 1,
              yaw: -16.9,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs:
                "PARQUEADERO DE MOTOS SOLO PARA PERSONAL EJECUTIVO Y CONTRATISTAS",
            },
          ],
        },

        //   IR AL ARBOL
        Arbol: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135350_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -210,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //   IR AL CENDERO

        Cendero: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_135646_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -6,
              yaw: -228,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Arbol_Cendero", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            {
              //PUNTO INFORMACIÓN
              pitch: 0,
              yaw: -14,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "INICIO DEL CENDERO.",
            },
          ],
        },

        /////////////////////////////// PRIMERA PLANTA (PISO)) TERMINADA (O) //////////7////////////////

        /////////////////////////////// SEGUNDA PLANTA (PISO) INICIO DESDE ESCALERAS Y RAMPA //////////7////////////////

        // ESCALERA & RAMPA SEGUNDO PISO
        Rampa_Escalera: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115709_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS RAMPA
            {
              pitch: -11,
              yaw: -72,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "rampa",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS ESCALERAS
            {
              pitch: -26.5,
              yaw: 114,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "escalera2", //crear.........0000000000000000000000000000000000000000000000000021874545646464
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE ESCALERAS 3 PISO
            {
              pitch: -8,
              yaw: 135,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Esca_3piso", //crear.........0000000000000000000000000000000000000000000000000021874545646464
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE RAMPA AL 3 PISO
            {
              pitch: -26.5,
              yaw: -122,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_3piso", //crear...........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS AMBIENTE SISTEMAS
            {
              pitch: -15,
              yaw: -162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_sistemas",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -180, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE AMBIENTE PRIVADO CENTRO DE ADMIN DE CABLEADO ///////////////
            {
              pitch: -12,
              yaw: 15.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_Cableado",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -60, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////////// ESCALERAS 3 PISO //////////////////////////////////
        Esca_3piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115845_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -29,
              yaw: -28,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELANTE TERCER PISO
            {
              pitch: 2,
              yaw: 2,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_rampa_3psio", //crear..
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        ////////////////////////////////////////// RAMPA 3 PISO //////////////////////////////////
        Rampa_3piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_125228_00_merged.jpg",
          hotSpots: [
            {
              // Ir ADELANTE
              pitch: -5,
              yaw: 16,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_rampa_3psio",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            {
              // Ir ATRAS
              pitch: -15,
              yaw: 34,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera", //crear.......
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        ////////////////// AMBIENTE SISTEMAS SEGUNDO PISO //////////////////
        Ambiente_sistemas: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_115946_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS ESCALERAS RAMPA SEGUNDO PISO
            {
              pitch: -11,
              yaw: 33,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE DE SISTEMAS
            {
              pitch: -24,
              yaw: 136,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Sistemas_",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // IR AL AMBIENTE 206 DESPUES DEL DE SISTEMAS ////////////////////////////////
            {
              pitch: -14,
              yaw: 212,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambient_206",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL TALLER DE REDES Y FIBRA OPTICA
            {
              pitch: 10,
              yaw: 173,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "TALLER DE REDES Y FIBRA OPTICA",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE SISTEMAS
        Sistemas_: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120050_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -22,
              yaw: -132,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_sistemas", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -140, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        Ambient_206: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120201_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS AMBIENTE DE SISTEMAS
            {
              pitch: -11,
              yaw: 73.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_sistemas",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 60, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 206
            {
              pitch: -20,
              yaw: 172,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_206_2pso",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 206
            {
              pitch: 10.5,
              yaw: 197.5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 206",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 206
        Ambiente_206_2pso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120341_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -22,
              yaw: 95.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambient_206", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 95, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////////// AMBIENTE DE CABLEADO ADMIN SEGUNDO PISO //////////////////////////////////
        Ambiente_Cableado: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120624_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS RAMPA ESCALERAS 2 PISO////////////////////////////////
            {
              pitch: -20,
              yaw: 84,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_Escalera",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -195, //Grados izquierda o derecha de la proxima imagen
            },
            //////////////////////////// IR ADELANTE AMBIEMTE 205
            {
              pitch: -10,
              yaw: -91,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_205",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 80, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 205
            {
              pitch: 19,
              yaw: 37,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "CENTRO DE ADMINISTRACIÓN DE CABLEADO",
            },
          ],
        },
        //////////////////////////////////// AMBIENTE 203 SEGUNDO PISO //////////////////////////////////
        Ambiente_205: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120743_00_merged.jpg",
          hotSpots: [
            // Ir ADELAANTE AMBIENTE 202
            {
              pitch: -11,
              yaw: 58,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_204",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 90, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 203
            {
              pitch: -20,
              yaw: 155,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_205",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -5, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS AMBIENTE CABLEADO 2 PISO////////////////////////////////
            {
              pitch: -10,
              yaw: -124,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_Cableado",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 40, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 205
            {
              pitch: 11.5,
              yaw: 180,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 205",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 203
        Dentro_Ambiente_205: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120839_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -22,
              yaw: 102,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_205", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 90, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////////// AMBIENTE 204 SEGUNDO PISO //////////////////////////////////
        Ambiente_204: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_120959_00_merged.jpg",
          hotSpots: [
            // Ir A LAS ESCALERAS PRIMERA PISO
            {
              pitch: -20,
              yaw: 18,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_2_piso",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir A LAS ESCALERAS TERCER PISO
            {
              pitch: 2,
              yaw: -12,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_3_piso", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 120, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ADELAANTE AMBIENTE 202
            {
              pitch: -10,
              yaw: 58,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Baño_2piso", ///0000000000000000
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 110, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 204
            {
              pitch: -20,
              yaw: 155,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_204",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 170, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS AMBIENTE 203 2 PISO////////////////////////////////
            {
              pitch: -10,
              yaw: -120,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_205",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 204
            {
              pitch: 13.5,
              yaw: 185,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 204",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 204
        Dentro_Ambiente_204: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -90,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_204", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////////// ESCALERAS SEGUNDO PISO //////////////////
        Escalera_2_piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121119_00_merged.jpg",
          hotSpots: [
            //Ir A LAS ESCALERAS PRIMERA PISO
            {
              pitch: -35,
              yaw: -10,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "entrada015",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -180, //Grados izquierda o derecha de la proxima imagen
            },
            {
              pitch: -30,
              yaw: 190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_204",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////////// ESCALERAS TERCER PISO ////////////////////////////
        ////////////////////////////////////TERCER PISO //////////////////

        ////////////////// PENDIENTE
        Escalera_3_piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122039_00_merged.jpg",
          hotSpots: [
            //Ir AL AMBIENTE 305
            {
              pitch: -25,
              yaw: -15,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_305",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },

            // IR AL AMBIENTE 304
            {
              pitch: -10,
              yaw: 175,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_304_3pso",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS AMBIENTE 204 2 PISO////////////////////////////////
            {
              pitch: -27,
              yaw: 98,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_204",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////// PASILLO BAÑOS SEGUNDO PISO
        Baño_2piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121221_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -11,
              yaw: 82,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Laboratorio_Fisicoquimicos",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },
            // MOSTRA BAÑOS SEGUNDO PISO /////////////////////////////
            {
              pitch: -20,
              yaw: 172,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Baño_segund_piso",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS ESCALERAS
            {
              pitch: -11,
              yaw: -96.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_204",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -180, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////// BAÑOS DEL SEGUNDO PISO
        Baño_segund_piso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_123613_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -20,
              yaw: 89.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Baño_2piso", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 100, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DE BAÑOS HOMBRES
            {
              pitch: 7,
              yaw: 53,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "BAÑOS PARA HOMBRES",
            },
            // INFORMACION DE BAÑOS MUJERES
            {
              pitch: 8,
              yaw: -39,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "BAÑOS PARA MUJERES",
            },
            // INFORMACION DE BAÑOS DISCAPACITADOS
            {
              pitch: 8,
              yaw: 23,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "BAÑOS PARA DISCAPACITADOS",
            },
          ],
        },
        //////////////////////////// Laboratorio Fisicoquimicos SEGUNDO PISO
        Laboratorio_Fisicoquimicos: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121317_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -11,
              yaw: 112,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_203",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS BAÑOS SEGUNDO PISO
            {
              pitch: -11,
              yaw: -69.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Baño_2piso",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DEL LABORATORIO FISIOQUIMICO
            {
              pitch: 11.5,
              yaw: 165,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "LABORATIO FÍSICO-QUÍMICO",
            },
          ],
        },
        //////////////////////////////// AMBIENTE 203 SEGUNDO PISO //////////////////
        Ambiente_203: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121354_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -11,
              yaw: 111,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_202",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 203 SEGUNDO PISO /////////////////////////////
            {
              pitch: -20,
              yaw: 186,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_203",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 170, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS Laboratorio Fisicoquimicos
            {
              pitch: -11,
              yaw: -69.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Laboratorio_Fisicoquimicos",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -110, //Grados izquierda o derecha de la proxima imagen
            },
            // INFORMACION DEL AMBIENTE CONVENCIONAL 203
            {
              pitch: 12.5,
              yaw: 150,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 203",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 203
        Dentro_Ambiente_203: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -90,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_203", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 100, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
        //////////////////////////////// AMBIENTE 203 SEGUNDO PISO //////////////////
        Ambiente_202: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121613_00_merged.jpg",
          hotSpots: [
            // Ir  ATRAS AMBIENTE 203
            {
              pitch: -11,
              yaw: 115,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_203",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120, //Grados izquierda o derecha de la proxima imagen
            },
            // IR AL AMBIENTE 201 SEGUNDO PISO /////////////////////////////
            {
              pitch: -15,
              yaw: 16,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_del_Ambiente_202",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -50, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir AL AMBIENTE 202 SEGUNDO PISO //////////////
            {
              pitch: -28.5,
              yaw: -32,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_del_Ambiente_201",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 202
            {
              pitch: 13.5,
              yaw: -8,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 202",
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 201
            {
              pitch: 10.5,
              yaw: -33,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 201",
            },
          ],
        },
        ////////////////// DENTRO DEL AMBIENTE 202 SEGUNDO PISO /////////////////////////////
        Dentro_del_Ambiente_201: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121736_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -14,
              yaw: -101,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_202", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 50, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        ////////////////// DENTRO DEL AMBIENTE 201 SEGUNDO PISO /////////////////////////////
        Dentro_del_Ambiente_202: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121652_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 98,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_202", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -10, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        ////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////// TERCER PISO //////////////////
        ///////////////////////
        //////////////////////////////// AMBIENTE 301 al 304 //////////////////

        Ambiente_304_3pso: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122124_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -11,
              yaw: 113.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_303",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 203 SEGUNDO PISO /////////////////////////////
            {
              pitch: -18,
              yaw: 194,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_304",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 130, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS TERCER PISO //////////////////
            {
              pitch: -11,
              yaw: -69.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_3_piso",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 304
            {
              pitch: 11.5,
              yaw: 170,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 304",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 304
        Dentro_Ambiente_304: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -90,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_304_3pso", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 130, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 303

        Ambiente_303: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122145_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -11,
              yaw: 113.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_302",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 303 SEGUNDO PISO /////////////////////////////
            {
              pitch: -18,
              yaw: 190,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_303",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 130, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS TERCER PISO //////////////////
            {
              pitch: -11,
              yaw: -69.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_304_3pso",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -90, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 303
            {
              pitch: 12.5,
              yaw: 155,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 303",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 303
        Dentro_Ambiente_303: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122503_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -15,
              yaw: -90,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_303", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -200, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 302

        Ambiente_302: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122214_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE
            {
              pitch: -30,
              yaw: 105,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_301",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 0, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 302 SEGUNDO PISO /////////////////////////////
            {
              pitch: -18,
              yaw: 183,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_302",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 0, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS TERCER PISO //////////////////
            {
              pitch: -11,
              yaw: -73.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_303",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -100, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 302
            {
              pitch: 11,
              yaw: 155,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 302",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 302
        Dentro_Ambiente_302: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_122623_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -15,
              yaw: 22,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_302", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 70, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 301

        Ambiente_301: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_123142_00_merged.jpg",
          hotSpots: [
            // ENTRAR AL AMBIENTE 301 SEGUNDO PISO /////////////////////////////
            {
              pitch: -20,
              yaw: 18,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_301",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 110, //Grados izquierda o derecha de la proxima imagen
            },

            // Ir ATRAS TERCER PISO //////////////////
            {
              pitch: -15,
              yaw: 118.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_302",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -60, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 301
            {
              pitch: 13.5,
              yaw: -5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 301",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 302
        Dentro_Ambiente_301: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_123454_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -30,
              yaw: -82,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_301", //crear.........
              cssClass: "flecha-l",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 80, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// TERCER PISO //////////////////
        ///////////////////////
        //////////////////////////////// AMBIENTE 305 AL 307 //////////////////

        Ambiente_305: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_123823_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS
            {
              pitch: -25,
              yaw: 58,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_3_piso",
              cssClass: "flecha-l",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -210, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 305
            {
              pitch: -20,
              yaw: 162,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_305",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },

            // IR AL AMBIENTE 306 ////////////////////////////////
            {
              pitch: -14,
              yaw: 238,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_306",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 305
            {
              pitch: 9,
              yaw: 186,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 305",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 305
        Dentro_Ambiente_305: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -89.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_305", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 305 AL 307 //////////////////

        Ambiente_306: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_123923_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS AMBIENTE 305
            {
              pitch: -14,
              yaw: -118,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_305",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 306
            {
              pitch: -20,
              yaw: -17,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_306",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },

            // IR AL AMBIENTE 307 ////////////////////////////////
            {
              pitch: -7,
              yaw: 60.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_307",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 30,
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 306
            {
              pitch: 11.5,
              yaw: 8,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 306",
            },
          ],
        },

        ////// //////////// DENTRO DEL AMBIENTE DE 306
        Dentro_Ambiente_306: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -89.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_306", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 307 //////////////////

        Ambiente_307: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124010_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS AMBIENTE 306
            {
              pitch: -14,
              yaw: -112,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_306",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -80, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 307
            {
              pitch: -20,
              yaw: -12,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_307",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },

            // IR AL AMBIENTE 308 ////////////////////////////////
            {
              pitch: -7,
              yaw: 67,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Oficina_sistemas",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20,
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 307
            {
              pitch: 11.5,
              yaw: 13,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 307",
            },
          ],
        },

        ////// //////////// DENTRO DEL AMBIENTE DE 307
        Dentro_Ambiente_307: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -89.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_307", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 140, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// OFICIA DE SISTEMAS //////////////////

        Oficina_sistemas: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124054_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS AMBIENTE 307
            {
              pitch: -14,
              yaw: -116.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_307",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -100, //Grados izquierda o derecha de la  proxima
            },
            // IR ADELANTE  ////////////////////////////////
            {
              pitch: -7,
              yaw: 62,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_rampa_3psio",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -120,
            },
            //INFORMACIÓN DE OFICINA DE SISTEMAS
            {
              pitch: 12.5,
              yaw: 6,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "OFICIONA DE SISTEMAS",
            },
          ],
        },

        ////////////////////// RAMPA ESCALERAS TERCER PISO ///////////////

        Escalera_rampa_3psio: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124153_00_merged.jpg",
          hotSpots: [
            // Ir ATRAS OFICIA DE SISTEMA
            {
              pitch: -8,
              yaw: 85.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Oficina_sistemas", //crear........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -80, //Grados izquierda o derecha de la proxima imagen
            },

            // Ir ADELANTE AMBIENTE 308
            {
              pitch: -15,
              yaw: -94,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_308", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -160, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS ESCALERAS 2 PSIO
            {
              pitch: -26,
              yaw: -182,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Esca_3piso",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
            // Ir ATRAS RAMPA SEGUNDO PISO ////////////////////////////
            {
              pitch: -9,
              yaw: -3,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Rampa_3piso",
              cssClass: "flecha-xs",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 20, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 308 //////////////////

        Ambiente_308: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124254_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE AMBIENTE Taller_Redes_Fibra_Optica
            {
              pitch: -14,
              yaw: -130.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Taller_Redes",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE 310
            {
              pitch: -20,
              yaw: 149,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_308",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },

            // IR ATRAS ESCALERAS RAMPA 3 PSIO
            {
              pitch: -25,
              yaw: 51,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Escalera_rampa_3psio",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 50,
            },
            //INFORMACIÓN DEL AMBIENTE CONVENCIONAL 308
            {
              pitch: 12.5,
              yaw: 174,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE CONVENCIONAL 308",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 308
        Dentro_Ambiente_308: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_121444_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -10,
              yaw: -89.7,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_308", //crear.........
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 100, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE Taller de REdes //////////////////

        Taller_Redes: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124347_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE AMBIENTE 309
            {
              pitch: -14,
              yaw: -130.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_Mantenimiento",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE Dentro_Redes_optica
            {
              pitch: -20,
              yaw: 149,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Redes_optica",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 160, //Grados izquierda o derecha de la proxima imagen
            },

            // IR ATRAS AMBIENTE 308
            {
              pitch: -25,
              yaw: 51,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_308",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 50,
            },
            //INFORMACIÓN DEL TALLER DE REDES
            {
              pitch: 12.5,
              yaw: 177,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "TALLER DE REDES",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE Dentro REdes Optica
        Dentro_Redes_optica: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124448_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -74,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Taller_Mantenimiento", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -170, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE MANTENIMIENTO //////////////////

        Ambiente_Mantenimiento: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124617_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE AMBIENTE 309
            {
              pitch: -14,
              yaw: -123,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_309_Robotica",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -150, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE MATENENIMIENTO
            {
              pitch: -20,
              yaw: 156,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_mantenimiento",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 200, //Grados izquierda o derecha de la proxima imagen
            },

            // IR ATRAS AMBIENTE 308
            {
              pitch: -15,
              yaw: 55,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Taller_Redes",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 50,
            },
            //INFORMACIÓN DEL TALLER DE MANTENIMIENTO DE PC
            {
              pitch: 13,
              yaw: 184,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "TALLER DE MANTENIMIENTO DE PC",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 308
        Dentro_mantenimiento: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124448_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -74,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_Mantenimiento", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -135, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 309 ROBOTICA //////////////////

        Ambiente_309_Robotica: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124715_00_merged.jpg",
          hotSpots: [
            // Ir ADELANTE AMBIENTE 309
            {
              pitch: -14,
              yaw: -128.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_310",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -170, //Grados izquierda o derecha de la proxima imagen
            },
            // ENTRAR AL AMBIENTE MATENENIMIENTO
            {
              pitch: -20,
              yaw: 148.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Robotica",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 150, //Grados izquierda o derecha de la proxima imagen
            },

            // IR ATRAS AMBIENTE 308
            {
              pitch: -15,
              yaw: 50,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_Mantenimiento",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 70,
            },
            //INFORMACIÓN DEL AMBIENTE 309 FORMACIÓN DE PROYECTOS
            {
              pitch: 14,
              yaw: 176,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE 309 FORMACIÓN DE PROYECTOS",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 309 ROBOTICA
        Dentro_Robotica: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124844_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: -80,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_309_Robotica", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -155, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },

        //////////////////////////////// AMBIENTE 310  //////////////////

        Ambiente_310: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_124933_00_merged.jpg",
          hotSpots: [
            // ENTRAR AL AMBIENTE MATENENIMIENTO
            {
              pitch: -20,
              yaw: 148.5,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Dentro_Ambiente_310",
              cssClass: "flecha-m",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: -20, //Grados izquierda o derecha de la proxima imagen
            },

            // IR ATRAS AMBIENTE 308
            {
              pitch: -15,
              yaw: 50,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_309_Robotica",
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 70,
            },
            //INFORMACIÓN DEL AMBIENTE 309 FORMACIÓN POR EMPRESAS
            {
              pitch: 14,
              yaw: 179.5,
              cssClass: "info_personalizada",
              createTooltipFunc: puntoInformacion,
              createTooltipArgs: "AMBIENTE 309 FORMACIÓN POR EMPRESAS",
            },
          ],
        },
        ////// //////////// DENTRO DEL AMBIENTE DE 310
        Dentro_Ambiente_310: {
          hfov: 150, //zoom inicial
          minHfov: 100, //zoom maximo
          yaw: 150, //Grados izquierda o derecha
          type: "equirectangular",
          panorama: "src/assets/Proyecto/RECORRIDO/images/IMG_20221112_125048_00_merged.jpg",
          hotSpots: [
            {
              // Ir ATRAS
              pitch: -13,
              yaw: 95,
              type: "scene",
              text: "Vista centrar terraza",
              sceneId: "Ambiente_310", //crear.........
              cssClass: "flecha-s",
              createTooltipFunc: flechaEscena,
              createTooltipArgs: "",
              targetYaw: 90, //Grados izquierda o derecha de la proxima imagen
            },
          ],
        },
      },
    });

    //PUNTO DE INFORMACIÓN PERSONALIZADO

    function puntoInformacion(hotSpotDiv, args) {
      hotSpotDiv.classList.add("letrero_personalizado");
      var span = document.createElement("span");
      span.innerHTML = args;
      hotSpotDiv.appendChild(span);
      span.style.width = span.scrollWidth - 20 + "px";
      span.style.marginLeft =
        -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
      span.style.marginTop = -span.scrollHeight - 12 + "px";
    }

    function flechaEscena(hotSpotDiv, args) {
      hotSpotDiv.classList.add("flecha_personalizada");
      var span = document.createElement("span");
      span.innerHTML = args;
      hotSpotDiv.appendChild(span);
      span.style.width = span.scrollWidth - 20 + "px";
      span.style.marginLeft =
        -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + "px";
      span.style.marginTop = -span.scrollHeight - 12 + "px";
    }
  },
};
</script>




