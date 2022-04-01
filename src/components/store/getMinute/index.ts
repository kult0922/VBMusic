export const getMinute = (url: string) => {
  const lastUrl = url.split('/').slice(-1)[0];
  return lastUrl.split('=')[1];
};
