export default function getActiveView(vanView) {
  return vanView.find((view) => view.active)?.key || null;
}
