type ContactEvent = {
  action: 'submit_form';
  category: 'contact';
  label: string;
};

type ClickEvent = {
  action: 'click';
  category: 'other';
  label: string;
};

interface Window {
  // pageviewのため
  gtag(type: 'config', googleAnalyticsId: string, { page_path: string });
  // eventのため
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string;
      event_category: string;
      value?: string;
    },
  );
}

export type Event = ContactEvent | ClickEvent;
