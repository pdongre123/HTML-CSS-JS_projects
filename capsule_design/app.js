!(function () {
  "use strict";
  function t() {
    (e.aspect = window.innerWidth / window.innerHeight),
      e.updateProjectionMatrix(),
      i.setSize(window.innerWidth, window.innerHeight);
  }
  let e, n, i, o, a, r, s, d, E, c;
  const w = 700,
    h = 50,
    l = 0.8,
    u = (function () {
      const t = new THREE.Vector3(),
        e = new THREE.Euler(),
        n = new THREE.Quaternion(),
        i = new THREE.Vector3();
      return function (o) {
        (t.x = (2 * Math.random() - 1) * h),
          (t.y = (2 * Math.random() - 1) * h),
          (t.z = (2 * Math.random() - 1) * h),
          (e.x = 2 * Math.random() * Math.PI),
          (e.y = 2 * Math.random() * Math.PI),
          (e.z = 2 * Math.random() * Math.PI),
          n.setFromEuler(e),
          i.set(1, 1, 1),
          o.compose(t, n, i);
      };
    })();
  !(function () {
    const m = document.createElement("div");
    document.body.appendChild(m),
      (n = new THREE.Scene()),
      (i = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0,
      })).setPixelRatio(window.devicePixelRatio),
      i.setSize(window.innerWidth, window.innerHeight),
      (i.outputEncoding = THREE.sRGBEncoding),
      m.appendChild(i.domElement),
      (e = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        3 * h
      )).position.set(0, 0, h * Math.sqrt(2)),
      e.lookAt(0, 0, 0);
    const H = new THREE.AmbientLight(16777215, 0.3);
    n.add(H);
    const R = new THREE.DirectionalLight(16777215, 1);
    R.position.set(0, 2 * h, 0),
      (R.castShadow = !0),
      n.add(R),
      (r = new THREE.MeshPhongMaterial({
        shininess: 100,
      })),
      (a = new THREE.CapsuleGeometry(l, 3 * l, 8, 20)),
      (s = a.clone()),
      (E = a.clone()),
      (function () {
        const t = (a = a.clone()).attributes.position;
        for (let e = 0; e < t.count; e++)
          t.getY(e) > 0
            ? s.attributes.position.setY(e, 0)
            : E.attributes.position.setY(e, 0);
      })();
    const M = new THREE.Color(),
      p = new THREE.Matrix4();
    (d = new THREE.InstancedMesh(s, r, w)), ((c = d.clone()).geometry = E);
    for (let t = 0; t < w; t++)
      u(p),
        d.setMatrixAt(t, p),
        d.setColorAt(
          t,
          M.setHSL(
            THREE.MathUtils.randInt(0, 100) / 100,
            1,
            THREE.MathUtils.randInt(22, 78) / 100
          )
        ),
        c.setMatrixAt(t, p),
        c.setColorAt(
          t,
          M.setHSL(
            THREE.MathUtils.randInt(0, 100) / 100,
            1,
            THREE.MathUtils.randInt(50, 80) / 100
          )
        );
    (d.castShadow = !0),
      (d.receiveShadow = !0),
      (c.castShadow = !0),
      (c.receiveShadow = !0),
      n.add(d),
      n.add(c),
      ((o = new THREE.OrbitControls(e, i.domElement)).autoRotate = !0),
      (o.autoRotateSpeed = 1),
      (o.enableDamping = !0),
      (o.enablePan = !1),
      (o.minDistance = 0.1),
      (o.maxDistance = h * Math.sqrt(2)),
      (o.minPolarAngle = 0),
      (o.maxPolarAngle = Math.PI / 2),
      o.target.set(0, 0, 0),
      o.update(),
      window.addEventListener("resize", t);
  })(),
    (function t() {
      requestAnimationFrame(t), o.update(), i.render(n, e);
    })();
})();
