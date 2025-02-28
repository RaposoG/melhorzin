export const getIcon = (iconName?: string) => {
  try {
    return require(`@/public/static/icons/${iconName}.json`);
  } catch (_error) {
    return require(`@/public/static/icons/source.json`);
  }
};
