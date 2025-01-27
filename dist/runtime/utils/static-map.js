const staticImageMap = {};
function updateImageMap() {
  if (typeof window.$nuxt !== "undefined") {
    const pageImages = window.$nuxt._pagePayload?.data?.[0]?._img || {};
    Object.assign(staticImageMap, pageImages);
  }
}
export function useStaticImageMap(nuxtContext) {
  updateImageMap();
  if (nuxtContext) {
    nuxtContext.app.router.afterEach(updateImageMap);
  }
  if (window.onNuxtReady) {
    window.onNuxtReady(updateImageMap);
  }
  return staticImageMap;
}
