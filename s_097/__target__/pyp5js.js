'use strict';import"./org.transcrypt.__runtime__.js";var __name__="pyp5js";export var P5=null;export var global_p5_injection=function(p5_sketch){var decorator=function(f){var wrapper=function(){P5=p5_sketch;return f()};return wrapper};return decorator};export var start_p5=function(setup_func,draw_func){var sketch_setup=function(p5_sketch){p5_sketch.setup=global_p5_injection(p5_sketch)(setup_func);p5_sketch.draw=global_p5_injection(p5_sketch)(draw_func)};return new p5(sketch_setup,"sketch-holder")};

//# sourceMappingURL=pyp5js.map