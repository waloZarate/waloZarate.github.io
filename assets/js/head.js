var site = site || {};                    // Create namespace
site.window = $(window);                       
site.document = $(document);              
site.Width = site.window.width();            
site.Height = site.window.height();

var Background = function() {             

};

Background.headparticle = function() {   

   if ( !Modernizr.webgl ) {
      alert('Your browser dosent support WebGL');
   }

   var camera, scene, renderer;
   var mouseX = 0, mouseY = 0;
   var p;

   var windowHalfX = site.Width / 2;
   var windowHalfY = site.Height / 2;

   Background.camera = new THREE.PerspectiveCamera( 75, site.Width / site.Height, 1, 2000 );    // Create camera
   Background.camera.position.z = 300;                                                // Set camera position

   // scene
   Background.scene = new THREE.Scene();                                   // Create scene

   // texture
   var manager = new THREE.LoadingManager();                   // Create manager
   manager.onProgress = function ( item, loaded, total ) {        // Create manager
      //console.log('webgl, twice??');                         
      //console.log( item, loaded, total );
   };


   // particles
   var p_geom = new THREE.Geometry();                       // Create geometry
   var p_material = new THREE.ParticleBasicMaterial({       // Create material
      color: 0xFFFFFF,                                      // Set color
      size: 1.5                                             // Set size                     
   });

   // model
   var loader = new THREE.OBJLoader( manager );                            // Create loader
   loader.load( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/40480/head.obj', function ( object ) {        

      object.traverse( function ( child ) {                   // Traverse

         if ( child instanceof THREE.Mesh ) {               // If mesh

            // child.material.map = texture;

            var scale = 8;                  // Set scale    

            $(child.geometry.vertices).each(function() {             // For each vertex
               p_geom.vertices.push(new THREE.Vector3(this.x * scale, this.y * scale, this.z * scale));
            })
         }
      });

      Background.scene.add(p)
   });

   p = new THREE.ParticleSystem(
      p_geom,
      p_material
   );

   Background.renderer = new THREE.WebGLRenderer({ alpha: true });               
   Background.renderer.setSize( site.Width, site.Height );
   Background.renderer.setClearColor(0x000000, 0);

   $('.particlehead').append(Background.renderer.domElement);
   $('.particlehead').on('mousemove', onDocumentMouseMove);
   site.window.on('resize', onWindowResize);

   function onWindowResize() {                     
      windowHalfX = site.Width / 2;
      windowHalfY = site.Height / 2;
      //console.log(windowHalfX);

      Background.camera.aspect = site.Width / site.Height;
      Background.camera.updateProjectionMatrix();

      Background.renderer.setSize( site.Width, site.Height );
   }

   function onDocumentMouseMove( event ) {                  
      mouseX = ( event.clientX - windowHalfX ) / 1;            
      mouseY = ( event.clientY - windowHalfY ) / 1;
   }

   Background.animate = function() { 

      Background.ticker = TweenMax.ticker;
      Background.ticker.addEventListener("tick", Background.animate);

      render();
   }

   function render() {
      Background.camera.position.x += ( (mouseX * .5) - Background.camera.position.x ) * .08;
      Background.camera.position.y += ( -(mouseY * .5) - Background.camera.position.y ) * .08;

      Background.camera.lookAt( Background.scene.position );

      Background.renderer.render( Background.scene, Background.camera );
   }

   render();

   Background.animate();
};


Background.headparticle();