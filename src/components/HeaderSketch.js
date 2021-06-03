import React from "react";
import Sketch from "react-p5";
const HeaderSketch = ({ parentRef }) => {
  var stars = [],
    WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight,
    FPS = 24, // Frames per second
    NUM_STARS = WIDTH; // Number of stars

  const setup = (p5, parentRef) => {
    var header = p5.createCanvas(WIDTH, HEIGHT);

    // Push stars to array
    for (var i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: 0,
        y: 0,
        offset: Math.random() * 360,
        // Weight orbit a little to be outside origin
        orbit: (Math.random() + 0.01) * p5.max(WIDTH, HEIGHT),
        radius: Math.random() * 2,
        vx: Math.floor(Math.random() * 10) - 5,
        vy: Math.floor(Math.random() * 10) - 5,
      });
    }

    p5.frameRate(FPS);
    p5.loop();
    header.parent(parentRef);
  };
  const draw = (p5) => {
    p5.background(24, 24, 24);
    p5.push();
    p5.noFill();
    p5.colorMode(p5.RGB, 255, 255, 255, 1);
    p5.stroke(240, 240, 240, 1);
    p5.strokeCap(p5.ROUND);
    p5.strokeWeight(2);
    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];
      p5.ellipse(s.x, s.y, s.radius, 0);
    }
    p5.pop();
    update(p5);
  };

  const update = (p5) => {
    var originX = WIDTH / 2;
    var originY = HEIGHT / 2;

    for (var i = 0, x = stars.length; i < x; i++) {
      var s = stars[i];

      var rad =
        (p5.frameCount * (1 / (s.orbit * 2 + s.offset)) + s.offset) % p5.TAU;
      s.x = originX + p5.cos(rad) * (s.orbit * 2);
      s.y = originY + p5.sin(rad) * s.orbit;
    }
  };

  const windowResized = (p5) => {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    p5.resizeCanvas(WIDTH, HEIGHT);
  };
  return (
    <Sketch
      setup={setup}
      draw={draw}
      update={update}
      windowResized={windowResized}
    />
  );
};

export default HeaderSketch;
