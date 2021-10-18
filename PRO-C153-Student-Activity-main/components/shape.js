AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `ring${i}`
      var posX = (Math.random() * 3000 + (-1000))
      var posY = (Math.random() * 2 + (-1))
      var posZ = (Math.random() * 3000 + (-1000))
      var position = { x: posX, y: posY, z: posZ }
      this.createRings(id, position)
    }
  },
  createRings: function (id, position) {
    var terrain1 = document.querySelector("#terrain")
    var ring = document.createElement("a-entity");
    ring.setAttribute("id", id)
    ring.setAttribute("position", position)
    ring.setAttribute("material", "color", "#ff9100");
    ring.setAttribute("geometry", {
      primitive: "torus", radius: 8
    })
    ring.setAttribute("static-body",{
      shape:"sphere",
      sphereRadius:2,
    })
    ring.setAttribute("game-play",{
     elementId:`#${id}`
    })

    terrain1.appendChild(ring)

  }
})
