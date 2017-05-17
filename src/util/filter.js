export const getPageTypeName = (typeList, kind) =>
  typeList.find(({id}) => kind === id).name
