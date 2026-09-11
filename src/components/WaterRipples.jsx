import React, { useEffect, useRef } from "react";

export default function WaterRipples() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ripple simulation buffer setup
    const step = 4; // grid resolution
    const cols = Math.floor(width / step);
    const rows = Math.floor(height / step);
    const size = cols * rows;

    let buffer1 = new Float32Array(size);
    let buffer2 = new Float32Array(size);
    const damping = 0.985;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Add ripple drop at screen coordinates
    const addDrop = (x, y, radius, strength) => {
      const col = Math.floor(x / step);
      const row = Math.floor(y / step);
      const r = Math.floor(radius / step);

      for (let j = -r; j <= r; j++) {
        for (let i = -r; i <= r; i++) {
          const curCol = col + i;
          const curRow = row + j;
          if (curCol > 1 && curCol < cols - 2 && curRow > 1 && curRow < rows - 2) {
            const dist = Math.sqrt(i * i + j * j);
            if (dist <= r) {
              const val = Math.cos((dist / r) * (Math.PI / 2)) * strength;
              buffer1[curRow * cols + curCol] += val;
            }
          }
        }
      }
    };

    let lastX = 0;
    let lastY = 0;
    let isMoving = false;

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);

      // Spawn water wave with strength proportional to mouse speed
      addDrop(x, y, Math.max(16, speed * 1.5), Math.max(12, speed * 1.8));

      lastX = x;
      lastY = y;
      isMoving = true;
    };

    window.addEventListener("pointermove", onPointerMove);

    // Continuous auto ambient drops for realism
    let ambientTimer = 0;
    let animationFrameId;

    const render = () => {
      ambientTimer++;
      if (ambientTimer % 180 === 0 && !isMoving) {
        // Subtle ambient droplet
        const rx = width * (0.3 + Math.random() * 0.4);
        const ry = height * (0.3 + Math.random() * 0.4);
        addDrop(rx, ry, 20, 15);
      }

      ctx.clearRect(0, 0, width, height);
      const imgData = ctx.createImageData(width, height);
      const data = imgData.data;

      // 2D Wave propagation equation
      for (let y = 1; y < rows - 1; y++) {
        const yOffset = y * cols;
        for (let x = 1; x < cols - 1; x++) {
          const idx = yOffset + x;

          // Wave neighbors calculation
          const wave =
            (buffer1[idx - 1] +
              buffer1[idx + 1] +
              buffer1[idx - cols] +
              buffer1[idx + cols] +
              buffer1[idx - cols - 1] * 0.5 +
              buffer1[idx - cols + 1] * 0.5 +
              buffer1[idx + cols - 1] * 0.5 +
              buffer1[idx + cols + 1] * 0.5) /
              3.0 -
            buffer2[idx];

          buffer2[idx] = wave * damping;
        }
      }

      // Swap buffers
      const temp = buffer1;
      buffer1 = buffer2;
      buffer2 = temp;

      // Render transparent water light highlights & refraction caustics
      for (let y = 1; y < rows - 1; y += 1) {
        const yOffset = y * cols;
        const screenY = y * step;
        if (screenY >= height) continue;

        for (let x = 1; x < cols - 1; x += 1) {
          const idx = yOffset + x;
          const val = buffer1[idx];

          if (Math.abs(val) > 0.08) {
            // Calculate wave normal gradient for realistic light refraction
            const dx = (buffer1[idx + 1] - buffer1[idx - 1]) * 1.8;
            const dy = (buffer1[idx + cols] - buffer1[idx - cols]) * 1.8;
            const light = Math.max(0, -dx * 0.7 - dy * 0.7 + val * 0.3);

            const screenX = x * step;
            const pixelIdx = (screenY * width + screenX) * 4;

            // Transparent caustic wave highlight (Gold & Ethereal Cyan shimmer)
            const alpha = Math.min(Math.abs(val) * 1.5 + light * 2.2, 0.75);

            // Stamp step x step block for performance
            for (let sy = 0; sy < step && screenY + sy < height; sy++) {
              for (let sx = 0; sx < step && screenX + sx < width; sx++) {
                const p = ((screenY + sy) * width + (screenX + sx)) * 4;
                data[p] = 255; // R
                data[p + 1] = Math.min(255, 210 + light * 40); // G (Golden tint)
                data[p + 2] = Math.min(255, 140 + light * 100); // B
                data[p + 3] = alpha * 220; // Alpha
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-90 transition-opacity duration-300"
    />
  );
}
