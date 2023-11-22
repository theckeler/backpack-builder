export default function getWhichView(vanView) {
  return vanView.find((view) => view.active)?.key || null;
}
