export interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      media_details?: {
        sizes?: {
          medium?: {
            source_url: string;
          };
        };
      };
    }>;
  };
}
