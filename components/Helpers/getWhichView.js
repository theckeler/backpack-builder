export default function getWhichView(vanView) {
  return Object.keys(vanView).find((view) => vanView[view].active) || null;
}
