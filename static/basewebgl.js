//开启Three.js渲染器
 var renderer;//声明全局变量（对象）
 var scene;
		var table = [
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"仿真平台", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"营销GIS", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"综合查询", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"集中ERP", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"TMS系统", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
				"电子商务", "50%", "30%", "Url正常", "ORACLE正常","JVM OK","ping 1MS","流量:100M","丢包率:1%","相应时间:10ms","位置:1DS1",
			];
 function initThree(id,color,alpha) {
    var obj = document.getElementById(id);
    width = document.getElementById(id).clientWidth;//获取画布「canvas3d」的宽
    height = document.getElementById(id).offsetHeight;//获取画布「canvas3d」的高

    //renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});//生成渲染器对象（属性：抗锯齿效果为设置有效）
	renderer = new THREE.CSS3DRenderer({antialias:true,alpha:true});
	renderer.setSize( width, height );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'mainField' ).appendChild( renderer.domElement );

 }
   //设置相机
  var camera;
  function initCamera(pos,up,lookAt,fov,aspect,znear,zfar) {

    camera = new THREE.PerspectiveCamera( fov, aspect, znear , zfar );//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
    camera.position.x = pos.x;//0;//设置相机的位置坐标
    camera.position.y = pos.y;//50;//设置相机的位置坐标
    camera.position.z = pos.z;//100;//设置相机的位置坐标
    camera.up.x = up.x;//0;//设置相机的上为「x」轴方向
    camera.up.y = up.y;//1;//设置相机的上为「y」轴方向
    camera.up.z = up.z;//0;//设置相机的上为「z」轴方向
    camera.lookAt( lookAt );//设置视野的中心坐标
  }
   //设置场景
  var scene;
  function initScene() {
    scene = new THREE.Scene();
      var offsetY = 500;
    var blockwidth = 150;
    var blockheight = 240;
    var allwidth = 150 * 13 + 40 * 12;
    var nIndex = 0;
    for ( var i = 0; i < table.length; i += 11 ) {

        var element = document.createElement( 'div' );
        element.className = 'element';
        element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

        var symbol = document.createElement( 'div' );
        symbol.className = 'symbol';
        symbol.textContent = table[ i ];
        element.appendChild( symbol );

        var object = new THREE.CSS3DObject( element );
        object.position.x = (nIndex%13 - 6) * 190;
        object.position.y = - ( Math.floor(nIndex/13) * 240 ) + offsetY;
        object.position.z = 0;
        scene.add( object );


        var elementpt = document.createElement( 'div' );
        elementpt.className = 'elementpt';
        elementpt.style.backgroundColor = 'rgba(255,0,0,' + ( Math.random() * 0.5 + 0.25 ) + ')';

        var objectpt = new THREE.CSS3DObject( elementpt );
        object.position.x = (nIndex%13 - 6) * 190;
        objectpt.position.y = - ( Math.floor(nIndex/13) * 240 ) + offsetY;
        objectpt.position.z = 0;
        scene.add( objectpt );

        nIndex ++;
    }

    var InfoElement = document.createElement('div');
    InfoElement.className = 'infoelement';
    InfoElement.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
    var object = new THREE.CSS3DObject( InfoElement );
    object.position.x = 6 * 190 + 75 + 40 + 570/2;
    object.position.y = 300;
    object.position.z = 0;
    scene.add( object );
//    renderer = new THREE.CSS3DRenderer({antialias:true,alpha:true});
//    renderer.setSize(width, height );//指定渲染器的高宽（和画布框大小一致）
//    renderer.domElement.style.position = 'absolute';
//    document.getElementById('mainField').appendChild(renderer.domElement);//追加 【canvas】 元素到 【canvas3d】 元素中。
//    renderer.setClearColor(0x00000000, 1.0);//设置canvas背景色(clearColor)

//
//
//    var element = document.createElement( 'div' );
//	element.className = 'element';
//	element.style.backgroundColor = 'rgba(0,127,127,128)';
//
//	var symbol = document.createElement( 'div' );
//    symbol.className = 'symbol';
//    symbol.textContent = '仿真平台';
//    element.appendChild( symbol );
//    var number = document.createElement( 'div' );
//    number.className = 'number';
//    number.textContent = 10;
//    element.appendChild( number );
//
//    var object = new THREE.CSS3DObject( element );
//    object.position.x = 0;
//    object.position.y = 0;
//    object.position.z = 0;
    scene.add( object );
  }

  //设置光源
//  var light;
//  function initLight() {
//    light = new THREE.DirectionalLight(0xff0000, 1.0, 0);//设置平行光源
//    light.position.set( 200, 200, 200 );//设置光源向量
//    scene.add(light);// 追加光源到场景
//  }
   //设置物体
  var sphere;
  function initObject(){
    sphere = new THREE.Mesh(
         new THREE.SphereGeometry(20,20),                //width,height,depth
         new THREE.MeshLambertMaterial({color: 0xff0000}) //材质设定
    );
    scene.add(sphere);
    sphere.position.set(0,0,0);
  }
  //执行
  function threeStart() {
    initThree('mainField',0x00000000,0.5);
    initCamera({x:0,y:0,z:1500},{x:0,y:1,z:0},{x:0,y:0,z:0},45,width/height,1,5000);
    initScene();
    //initLight();
    //initObject();
    //renderer.clear();
    renderer.render(scene, camera);
  }
function render()
{
renderer.render(scene, camera);
}