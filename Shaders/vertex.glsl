uniform float time;

varying float pulse;
varying vec2 vUv;

void main () {
    vUv = uv;
    vec3 newPosition = position;
    // newPosition.x *= 2.;
    // newPosition.z = .1*sin(position.x*30. + time);
    newPosition.z = .05*sin(length(position)*30. + time);
    pulse = 20.*newPosition.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}