
var elem = document.getElementById("app");
var container = document.createElement("div");
container.setAttribute('class', 'container');
elem.appendChild(container)

for (var i = 0; i < 2; i++) {

    var div = document.createElement("div");
    container.appendChild(div);

    // var img = document.createElement("img");
    // img.setAttribute('src', 'img/' + i.toString() + ".jpg");
    // div.appendChild(img);

    // var width = window.innerWidth;
    // var height = window.innerHeight;
    var width = 250;
    var height = 150;

    var scene = new THREE.Scene();

    var geometry = new THREE.SphereGeometry(5, 60, 40);
    geometry.scale(- 1, 1, 1);

    // var material = new THREE.MeshBasicMaterial({
    //     map: THREE.ImageUtils.loadTexture('img/' + i.toString() + '.jpg')
    // });

    var loader = new THREE.TextureLoader();
    var texture = loader.load('img/' + i.toString() + '.jpg');
    var material = new THREE.MeshBasicMaterial({
        map: texture
    });

    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    var camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.set(0, 0, 0.1);
    camera.lookAt(sphere.position);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor({ color: 0x000000 });
    div.appendChild(renderer.domElement);
    renderer.render(scene, camera);

    var controls = new THREE.OrbitControls(camera,renderer.domElement);
    
      function render(){
        requestAnimationFrame(render);
        sphere.rotation.y += 0.05 * Math.PI/180;
        //画面リサイズ対応
        window.addEventListener( 'resize', onWindowResize, false );
        renderer.render(scene,camera);
        controls.update();
      }
      render();
    
    
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
      }
    
}

function fileListDirectory(files) {
    console.log(files.length);
    for (i = 0; i < files.length; i++) {
        console.log(files[i].name);
    }
}



