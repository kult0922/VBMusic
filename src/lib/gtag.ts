export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? '';

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== '';

// PVを測定する
export const pageview = (path: string) => {
  // @ts-ignore
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
// @ts-ignore
export const event = ({ action, category, label, value = '' }) => {
  if (!existsGaId) {
    return;
  }

  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
