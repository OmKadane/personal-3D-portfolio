export const PALETTE = {
  get color1() {
    return getComputedStyle(document.documentElement).getPropertyValue("--color1").trim() || "#272946";
  },
  get color2() {
    return getComputedStyle(document.documentElement).getPropertyValue("--color2").trim() || "#aaea6c";
  },
  get color3() {
    return getComputedStyle(document.documentElement).getPropertyValue("--color3").trim() || "#e7ffee";
  },
};

export const DIAGONAL_FACTOR = 1 / Math.sqrt(2);
export const ZOOM_MAX_BOUND = 2;
export const ZOOM_MIN_BOUND = 0.2;
