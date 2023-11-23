export default function getActiveViewIndex(vanView) {
  const activeViewIndex = vanView.findIndex((view) => view.active);
  return activeViewIndex !== -1 ? activeViewIndex : null;
}
