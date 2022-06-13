import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="soon-animation"
export default class extends Controller {
  static values = { enemy: String, root: String }
  static targets = ["svg"]
  connect() {
    // on connecting play the animations
  //this.sandbox = new GlslCanvas(this)
    const name = this.enemyValue;
    console.log(this.rootValue);
    const sandbox = new GlslCanvas(this.svgTarget);
    const frag = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform float u_time;
    uniform vec2 resolution;
    uniform vec2 mouse;
    uniform vec3 spectrum;

    uniform sampler2D image;


    varying vec3 v_normal;
    varying vec2 v_texcoord;

    #define NUM_OCTAVES 5

    float rand(vec2 n) {
        return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
    }

    float noise(vec2 p){
        vec2 ip = floor(p);
        vec2 u = fract(p);
        u = u*u*(3.0-2.0*u);

        float res = mix(
            mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
            mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
        return res*res;
    }

    float fbm(vec2 x) {
        float v = 0.0;
        float a = 0.5;
        vec2 shift = vec2(100);
        // Rotate to reduce axial bias
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
        for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
        }
        return v;
    }


    void main(void)
    {
        vec2 uv =  v_texcoord;

        float strength = smoothstep(0.86, 0.9, uv.y);

        vec2 surface = strength * vec2(
        mix(-0.3, 0.3, fbm(2.5 * uv - 0.5 * u_time)),
        mix(-0.3, 0.3, fbm(2.5 * uv + 0.5 *  u_time))
        );

        uv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333);


        vec4 color = texture2D(image,uv);

        gl_FragColor = color;
    }
    `;
    sandbox.load(frag);
    sandbox.setUniform("image", this.rootValue)
    // /app/views/svgs/_svg.html.erb
  }
}
