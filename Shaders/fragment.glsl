uniform float time;
uniform sampler2D uTexture;

varying float pulse;
varying vec2 vUv;
varying vec3 vNormal;

void main () {
    // Through vUv make gradient
    // gl_FragColor = vec4(vUv, 0., 1.);
    
    // For stripe pattern
    // float sinePulse = (1.+sin(vUv.x*50. - time)) * .5;
    // gl_FragColor = vec4(sinePulse, 0., 0., 1.);
    
    // For Texture
    // vec4 image = texture(uTexture, vUv + .01*sin(vUv*10. + time));
    // gl_FragColor = image;
    gl_FragColor = vec4(pulse, 0., 0., 1.);
}