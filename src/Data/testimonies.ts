export interface Testimony {
  name: string;
  avatar?: string;
  quote: string;
  service: "remedial" | "fertility" | "pregnancy";
}

export const testimonies: Testimony[] = [
  {
    name: "Tracey Musham",
    quote:
      "A wonderful experience with Jenny. Welcoming, clean & relaxing atmosphere in her home clinic. I've had many massages of varying techniques and I can honestly say this was one of the most relaxing. I would not hesitate to recommend Jenny. I'll be returning for a full massage soon. Thankyou Jenny.",
    service: "remedial",
  },
  {
    name: "Shane",
    quote:
      "Jenny at iCare Health Massage is absolutely amazing! I have been booking with her since my pregnancy for specialised pregnancy massages, and now postpartum, I continue to see her for remedial massage. She is incredibly skilled, attentive, and always knows exactly how to relieve tension and discomfort. Her approach is both professional and caring, making every session a truly relaxing and healing experience. I always leave feeling refreshed and rejuvenated. I highly recommend Jenny to anyone looking for high-quality massage therapy. Five stars all the way!",
    service: "pregnancy",
  },
  {
    name: "Laura Robertson",
    quote:
      "I've seen Jenny 3 times now for a pregnancy massage. She is amazing. Very professional & also personable. She makes you feel welcome the moment you walk in. Her technique & pressure during the massage is perfect. Would highly recommend!",
    service: "pregnancy",
  },
  {
    name: "Bella Josh Brett",
    quote:
      "I recently visited Jenny for fertility massage. She did an amazing job. From the moment I walked in, I felt welcomed and comfortable. I left the session feeling significantly better and happier. I highly recommend Jenny for anyone in need of professional and effective massage therapy. Thank you Jenny😊",
    service: "fertility",
  },
  {
    name: "Mechelle Wyatt",
    quote:
      "Jenny offers a calm, gentle and thorough massage. I love she always knows where to touch and in perfect pressure. And she also helps us to find out how we feel during the past trauma. Also fertility massage helps me with the period delay issue. Strongly recommend if you would like to have profound changes in your body.",
    service: "fertility",
  },
  {
    name: "Monica Li",
    quote:
      "Jenny is an incredible professional! Our session together was absolutely amazing, and I felt that she really understood and cared about my personal state. I am satisfied with the experience and am already looking forward to our next appointment. Highly recommend her services 👍👍👍",
    service: "remedial",
  },
];
