uniform float time;
varying float pulse;
varying vec2 vUv;

void main () {
    float sinePulse = (1.+sin(vUv.x*50. - time)) * .5;
    gl_FragColor = vec4(sinePulse, 0., 0., 1.);
}