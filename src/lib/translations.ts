export type Lang = "th" | "en";

export type TranslationService = {
  name: string;
  short: string;
  desc: string;
  features: string[];
};

export type Translations = {
  nav: {
    home: string;
    services: string;
    portfolio: string;
    process: string;
    reviews: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    badge: string;
    headline1: string;
    headline2: string;
    headline3: string;
    sub: string;
    cta1: string;
    cta2: string;
    scrollHint: string;
  };
  about: {
    badge: string;
    title: string;
    desc: string;
    stat1Val: string;
    stat1Lbl: string;
    stat2Val: string;
    stat2Lbl: string;
    stat3Val: string;
    stat3Lbl: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    comingSoon: string;
    photobooth: TranslationService;
    video360: TranslationService;
    blessing: TranslationService;
    sticker: TranslationService;
    signme: TranslationService;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    viewMore: string;
    seeMoreTitle: string;
    seeMoreSub: string;
    tabs: {
      vibe: string;
      photobooth: string;
      video360: string;
      blessing: string;
      frames: string;
    };
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{ num: string; title: string; desc: string }>;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    items: Array<{ name: string; platform: string; text: string }>;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    facebook: string;
    instagram: string;
    tiktok: string;
    line: string;
    email: string;
    lineId: string;
    emailAddr: string;
    bookBtn: string;
    reviewBtn: string;
  };
  footer: { tagline: string; rights: string };
  loading: { message: string };
};

export const translations: Record<Lang, Translations> = {
  th: {
    nav: {
      home: "หน้าแรก",
      services: "บริการของเรา",
      portfolio: "ผลงาน",
      process: "ขั้นตอน",
      reviews: "รีวิว",
      contact: "ติดต่อ",
      bookNow: "จองบริการ",
    },
    hero: {
      badge: "มากกว่าความทรงจำในวันที่แสนพิเศษของคุณ",
      headline1: "ทุกช่วงเวลา",
      headline2: "คือความทรงจำ",
      headline3: "ที่ไม่มีวันลืม",
      sub: "Blossom Pixel พร้อมมอบประสบการณ์การถ่ายภาพและวีดีโอระดับพรีเมียม ด้วยบูธที่โดดเด่น การออกแบบที่ตรงใจ และไฟล์ภาพคุณภาพสูง",
      cta1: "สำรวจบริการ",
      cta2: "ติดต่อเรา",
      scrollHint: "เลื่อนลง",
    },
    about: {
      badge: "เกี่ยวกับเรา",
      title: "Blossom Pixel คือใคร?",
      desc: "เราคือทีมผู้เชี่ยวชาญด้านการถ่ายภาพและวีดีโอในงานพิเศษ ที่ให้บริการด้วยใจ ความใส่ใจในทุกรายละเอียด และความตั้งใจให้ทุกงานของคุณกลายเป็นความทรงจำที่ล้ำค่า",
      stat1Val: "100+",
      stat1Lbl: "งานที่ผ่านมา",
      stat2Val: "99%",
      stat2Lbl: "ลูกค้าพึงพอใจ",
      stat3Val: "5★",
      stat3Lbl: "คะแนนรีวิว",
    },
    services: {
      badge: "บริการของเรา",
      title: "ครบครันทุกบริการ",
      subtitle: "สำหรับงานสำคัญของคุณ",
      comingSoon: "เร็วๆ นี้",
      photobooth: {
        name: "Photo Booth",
        short: "ฟิล์มสตริปสุดเก๋",
        desc: "บูธถ่ายภาพสุดเจ๋ง พร้อมปรินต์ทันที ออกแบบเฟรมพิเศษตามธีมงานของคุณ รองรับหลากหลายขนาด ทั้ง 2x6 และ 4x6",
        features: [
          "ออกแบบเฟรมตามธีม",
          "ปรินต์ทันทีภายในงาน",
          "รับไฟล์ทางดิจิตอล",
          "ทีมงานดูแลตลอดงาน",
        ],
      },
      video360: {
        name: "360° Video Booth",
        short: "วิดีโอ 360 องศา",
        desc: "ถ่ายวิดีโอ 360 องศา สุดระทึกใจ แสกน QR code รับไฟล์ได้ทันที จัดไฟเต็มระดับ พร้อมออกแบบเฟรมวิดีโอตามธีมงาน",
        features: [
          "ถ่ายไม่จำกัดครั้ง",
          "รับไฟล์ผ่าน QR Code",
          "ไฟ LED สว่างจัด",
          "เฟรมวิดีโอ Custom",
        ],
      },
      blessing: {
        name: "Video Blessing",
        short: "วิดีโออวยพร",
        desc: "บันทึกคำอวยพรอันมีค่าจากแขกในงาน ผ่านจอวินเทจสุดน่ารัก เป็นของขวัญที่ล้ำค่าสำหรับเจ้าบ่าว-เจ้าสาว",
        features: [
          "บันทึกวิดีโออวยพร",
          "จอวินเทจสวยงาม",
          "ส่งไฟล์หลังงาน",
          "บันทึกความทรงจำ",
        ],
      },
      sticker: {
        name: "Sticker Line",
        short: "สติ๊กเกอร์ LINE",
        desc: "สร้างสติ๊กเกอร์ LINE สุดพิเศษจากรูปภาพ Pre-wedding หรือรูปถ่ายของคุณ ตามธีมสีที่ชอบ พร้อมลิ้งค์ดาวน์โหลด",
        features: [
          "ใช้รูป Pre-wedding",
          "ธีมสีตามใจ",
          "ส่งลิ้งค์ดาวน์โหลด",
          "ออกแบบ Custom",
        ],
      },
      signme: {
        name: "Sign Me",
        short: "ลายเซ็น",
        desc: "บริการใหม่ที่กำลังจะมาเร็วๆ นี้!",
        features: ["ลายเซ็น", "ความสนุกสนาน", "บันทึกความทรงจำ", "เร็วๆ นี้!"],
      },
    },
    portfolio: {
      badge: "ผลงานของเรา",
      title: "ผลงานที่ผ่านมา",
      subtitle: "ทุกงานคือผลงานศิลปะที่เราภาคภูมิใจ",
      viewMore: "ดูเพิ่มเติม",
      seeMoreTitle: "อยากดูผลงานเพิ่มเติมอีกไหม?",
      seeMoreSub: "ติดตามเราบนโซเชียลมีเดียเพื่อชมผลงานทุกงาน",
      tabs: {
        vibe: "บรรยากาศ",
        photobooth: "โฟโต้บูธ",
        video360: "360° วีดีโอ",
        blessing: "วีดีโออวยพร",
        frames: "ออกแบบกรอบ",
      },
    },
    process: {
      badge: "ขั้นตอนการทำงาน",
      title: "ง่าย สะดวก รวดเร็ว",
      subtitle: "เพียง 4 ขั้นตอนเท่านั้น",
      steps: [
        {
          num: "01",
          title: "ออกแบบ",
          desc: "แจ้งธีมงานและรายละเอียดที่ต้องการ ทีมงานออกแบบเฟรมให้ตรงใจ",
        },
        {
          num: "02",
          title: "ยืนยัน",
          desc: "ตรวจสอบและอนุมัติแบบ ก่อนเข้างานจริง",
        },
        {
          num: "03",
          title: "ลุยงาน",
          desc: "ทีมงานพร้อมเต็มที่ดูแลงานของคุณตลอดช่วงเวลา",
        },
        {
          num: "04",
          title: "ส่งไฟล์",
          desc: "รับลิ้งค์ดาวน์โหลดไฟล์ภาพคุณภาพสูงทุกใบหลังงาน",
        },
      ],
    },
    reviews: {
      badge: "เสียงจากลูกค้า",
      title: "ลูกค้าพูดถึงเรา",
      subtitle: "ความประทับใจที่ลูกค้าได้รับ",
      cta: "ดูรีวิวทั้งหมด",
      items: [
        {
          name: "Khun Risa M",
          platform: "Facebook",
          text: "อยากแนะนำแบบ 3000% เจอทีม Blossom ตอนไปออกบูธที่ Misstar ประทับใจตั้งแต่ครั้งแรกที่เจอเลยค่ะ จองวันนั้นเลย ตอนนั้นยังไม่มีฤกษ์แต่งงาน ยังไม่ได้สถานที่แต่งงานเลยด้วยซ้ำ ตั้งแต่วันแรกที่เจอ จนถึงวันงาน คุณมุขและทีมงานดูแลดีมากๆ แขกชมกันทุกคน รูปสวย แสงสวย ช่วยคิดหน้าบูสๆ เอเนอจี้แขกสุดๆ เลือกไม่ผิดเลยจริงๆ ประทับใจมาก งานออกแบบกรอบก็ตรงเรฟสุดๆ แนะนำเพื่อนไปอีกหลายคนเลยค่ะ",
        },
        {
          name: "Khun Kpriya B",
          platform: "Facebook",
          text: "ขอบคุณพี่บีและทีมงาน Blossom Pixel มากๆ นะคะ ทีมงานบิ๊วเก่งมากทำให้ไม่เกร็งเลย ภาพสวยภาพดี แขกในงานชอบและชมกันมาก ทั้ง Photobooth และ 360 ทั้งผู้ใหญ่และเด็กปลื้มสุดๆ อยากแนะนำเลยค่ะ เต็ม 5 ดาว ให้ 100 ดาวเลยปลื้มมมม 💖💖💖💖",
        },
        {
          name: "Khun Ampere N",
          platform: "Facebook",
          text: "ขอบคุณทางทีมงาน Blossom Pixel Photobooth นะคะที่มาสร้างกิจกรรมสนุกๆ ให้กับงานแต่งของเรา ทีมงานน่ารักมากๆ ช่วยคิดกิจกรรมกล่องจุ่ม บอร์ดคนโสด สนุกมากค่ะ ชอบการออกแบบของทางทีมงานด้วย และที่ชอบสุดๆ คือคุมธีมอุปกรณ์เป็นฟีลลิ่งไม้ๆ มู้ดดีมากๆ ค่ะ แนะนำเลย 💖🫶🏻",
        },
        {
          name: "Khun Yada M",
          platform: "Facebook",
          text: "แนะนำควรมีที่สุดดดดดดด เป็น Photobooth ที่ดีที่สุด แขก enjoy จอยมากกกกก ทีมบริการดี บิ๊วแขกสุดๆ แขกในงานชมหนักมากกก ที่สำคัญภาพสวยมากกกก แนะนำค่ะต้องมี ต้องเป็น Blossom Pixel Photobooth เท่านั้นนน รักที่สุดดด",
        },
        {
          name: "คุณ พรนภัส",
          platform: "Facebook",
          text: "Photobooth แขกชอบมากกกกก! ได้ทุกวัย โดยเฉพาะญาติผู้ใหญ่ติดใจจจ 😂🫶🏻💓 ใครกำลังตัดสินใจ เชียร์เลย เริ่ดจริง ถ่ายได้ไม่จำกัด 😆 ดีไซน์ได้ตามธีม พร็อพแน่น รูปสวยคมชัด จัดสถานที่สวย เป็นระเบียบเรียบร้อย ช่วยบอกท่าโพสอีกด้วย ทีมงานน่ารัก ยิ้มเก่ง ดูแลดีสุด 💖📸",
        },
        {
          name: "Khun Pensiri T.",
          platform: "Facebook",
          text: "ขอบคุณ Blossom Pixel Photobooth ที่มาสร้างสีสันให้งานแต่งงานของเรามีรอยยิ้ม สนุกสนาน แขกชอบ Photobooth กันมา ต่อแถวถ่ายรูปกันไม่หยุดเลยค่ะ 💕 ขอบคุณคุณบี คุณอั้มมากนะคะทำกรอบ Background สวยมาก สนองความต้องการบ่าวสาวได้ครบ 😘 วันจริงจัดการ Set up สถานที่อย่างรวดเร็ว มีพร็อพมาให้เล่นมากมาย คอยเชียร์อัพแขกทุกคน ทำให้ไม่ต้องกังวลอะไรเลย ขอบคุณกล่องคำอวยพรที่จัดทำให้นะคะ นั่งอ่านคำอวยพร น้ำตาไหลเลยยยยย 🥰🥰",
        },
      ],
    },
    contact: {
      badge: "ติดต่อเรา",
      title: "พร้อมให้บริการทุกงานสำคัญ",
      subtitle: "ติดต่อเราได้หลายช่องทาง ทีมงานพร้อมตอบทุกคำถาม",
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "TikTok",
      line: "Line Official",
      email: "อีเมล",
      lineId: "@748qgshq",
      emailAddr: "blossom.pixel.th@gmail.com",
      bookBtn: "จองบริการผ่าน Facebook",
      reviewBtn: "ดูรีวิวลูกค้า",
    },
    footer: {
      tagline: "ทุกช่วงเวลาคือความทรงจำที่ไม่มีวันลืม",
      rights: "© 2026 Blossom Pixel. สงวนลิขสิทธิ์",
    },
    loading: { message: "กำลังโหลด..." },
  },

  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      process: "Process",
      reviews: "Reviews",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "More Than Memories, for Your Most Special Day",
      headline1: "Every Moment",
      headline2: "Is a Memory",
      headline3: "Worth Keeping",
      sub: "Blossom Pixel delivers premium photo & video experiences with distinctive booth setups, bespoke designs tailored to your vision, and high-quality digital files.",
      cta1: "Explore Services",
      cta2: "Contact Us",
      scrollHint: "Scroll Down",
    },
    about: {
      badge: "About Us",
      title: "Who is Blossom Pixel?",
      desc: "We are a passionate team of event photo & video specialists, dedicated to serving with heart, attending to every detail, and turning every special occasion into a memory that lasts forever.",
      stat1Val: "100+",
      stat1Lbl: "Events Covered",
      stat2Val: "99%",
      stat2Lbl: "Satisfied Clients",
      stat3Val: "5★",
      stat3Lbl: "Review Rating",
    },
    services: {
      badge: "Our Services",
      title: "Complete Event",
      subtitle: "Photo Experiences",
      comingSoon: "Coming Soon",
      photobooth: {
        name: "Photo Booth",
        short: "Classic Film Strips",
        desc: "An outstanding photo booth experience with instant printing and fully customized frame designs tailored to your event theme. Available in 2x6 and 4x6 sizes.",
        features: [
          "Custom frame design",
          "Instant on-site prints",
          "Digital file delivery",
          "Dedicated team on-site",
        ],
      },
      video360: {
        name: "360° Video Booth",
        short: "360-Degree Videos",
        desc: "Thrilling 360-degree video recordings with instant QR code delivery. Professional LED lighting and custom video frame design included.",
        features: [
          "Unlimited takes",
          "QR code instant download",
          "Professional LED lighting",
          "Custom video frames",
        ],
      },
      blessing: {
        name: "Video Blessing",
        short: "Blessing Messages",
        desc: "Capture heartfelt blessing messages from your guests through a charming vintage TV display — a priceless keepsake for the couple.",
        features: [
          "Guest video blessings",
          "Vintage TV display",
          "Post-event file delivery",
          "Cherished memories captured",
        ],
      },
      sticker: {
        name: "LINE Stickers",
        short: "Personalized Stickers",
        desc: "Create unique LINE stickers from pre-wedding or wedding photos. Fully customized color themes with download link delivered to you.",
        features: [
          "Uses your own photos",
          "Custom color themes",
          "Download link delivered",
          "Fully custom design",
        ],
      },
      signme: {
        name: "Sign Me",
        short: "Signatures",
        desc: "A brand new service coming soon!",
        features: [
          "Signatures",
          "Fun moment",
          "Touching memories",
          "Coming soon!",
        ],
      },
    },
    portfolio: {
      badge: "Our Work",
      title: "Featured Portfolio",
      subtitle: "Every event is a work of art we are proud of",
      viewMore: "View More",
      seeMoreTitle: "Want to See More?",
      seeMoreSub: "Follow us on social media for more captured moments",
      tabs: {
        vibe: "Vibe",
        photobooth: "Photo Booth",
        video360: "360° Video",
        blessing: "Video Blessing",
        frames: "Frame Designs",
      },
    },
    process: {
      badge: "How It Works",
      title: "Simple, Fast",
      subtitle: "Just 4 Easy Steps",
      steps: [
        {
          num: "01",
          title: "Design",
          desc: "Share your theme and event details. Our team crafts a custom frame design just for you.",
        },
        {
          num: "02",
          title: "Confirm",
          desc: "Review and approve the design before your event date.",
        },
        {
          num: "03",
          title: "Launch",
          desc: "Our dedicated team arrives and manages the booth throughout your event.",
        },
        {
          num: "04",
          title: "Delivery",
          desc: "Receive a download link for all high-quality digital photos after the event.",
        },
      ],
    },
    reviews: {
      badge: "Testimonials",
      title: "What Clients Say",
      subtitle: "Real experiences from real celebrations",
      cta: "See All Reviews",
      items: [
        {
          name: "Khun Risa M",
          platform: "Facebook",
          text: "Would recommend 3000%! I first met the Blossom team at their Misstar booth and was instantly captivated. I booked them on the spot — we didn't even have a wedding date or venue yet! From that very first meeting all the way to our big day, Khun Mook and the team took exceptional care of everything. Every guest was amazed — stunning photos, beautiful lighting, and the team had the most incredible energy for building up the crowd. The frame design matched our brief perfectly. I've already referred so many friends!",
        },
        {
          name: "Khun Kpriya B",
          platform: "Facebook",
          text: "Thank you so much to Phi Bee and the entire Blossom Pixel team! The crew was exceptional at making every guest feel relaxed and comfortable — no awkward moments at all. Beautiful, high-quality photos throughout. Both the Photobooth and 360 booth were an absolute hit — adults and children alike were completely thrilled. 5 stars? I'd happily give 100! 💖💖💖💖",
        },
        {
          name: "Khun Ampere N",
          platform: "Facebook",
          text: "Thank you so much to the Blossom Pixel Photobooth team for bringing such wonderful energy and activities to our wedding! The team was so sweet and creative — they organized a fun lucky draw box and a singles board game that everyone adored. The design aesthetic was gorgeous, and I especially loved how they curated the entire setup with a warm, natural wooden-feel mood. Highly recommend! 💖🫶🏻",
        },
        {
          name: "Khun Yada M",
          platform: "Facebook",
          text: "An absolute must-have — hands down the best photobooth experience! Every single guest was having the time of their lives. The team is phenomenal at getting the crowd energized and having fun. Most importantly, the photos turned out absolutely stunning. If you're planning an event, it has to be Blossom Pixel Photobooth and nothing else. Love them so much!",
        },
        {
          name: "คุณ พรนภัส",
          platform: "Facebook",
          text: "Every guest absolutely loved the photobooth! All ages, especially the older relatives who got completely hooked! 😂🫶🏻💓 If you're still on the fence, go for it — it's genuinely outstanding. Unlimited shots 😆, fully custom theme designs, tons of props, crisp and clear photos, beautifully organized setup, and the team even guided guests on poses. The team is so lovely, always smiling, and took the most wonderful care of everyone. 💖📸",
        },
        {
          name: "Khun Pensiri T.",
          platform: "Facebook",
          text: "Thank you Blossom Pixel Photobooth for filling our wedding with so many smiles and so much joy! Every single guest loved the photobooth and the queue for photos never stopped. 💕 Huge thanks to Khun Bee and Khun Am for the absolutely gorgeous frame and background design — they delivered exactly what we dreamed of. 😘 On the day, setup was lightning fast, props were plentiful, and the team kept every guest energized. We didn't have to worry about this station at all. And thank you for the guest blessing message box — I cried reading every single one. 🥰🥰",
        },
      ],
    },
    contact: {
      badge: "Get In Touch",
      title: "Ready to Make Your Event Unforgettable?",
      subtitle:
        "Reach us through any of these channels. Our team is always ready to answer your questions.",
      facebook: "Facebook",
      instagram: "Instagram",
      tiktok: "TikTok",
      line: "Line Official",
      email: "Email",
      lineId: "@748qgshq",
      emailAddr: "blossom.pixel.th@gmail.com",
      bookBtn: "Book via Facebook",
      reviewBtn: "See Client Reviews",
    },
    footer: {
      tagline: "Every moment is a memory worth keeping.",
      rights: "© 2026 Blossom Pixel. All rights reserved.",
    },
    loading: { message: "Loading..." },
  },
};
