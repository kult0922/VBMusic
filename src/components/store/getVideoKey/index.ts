export const getVideoKey = (url: string) => {
  const lastUrl = url.split('/').slice(-1)[0];
  return lastUrl.split('=')[0] + '=';
};
