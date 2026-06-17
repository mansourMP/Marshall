import type { Lang } from "./i18n/types";

export type ProductDetail = {
  quality: string;
  origin: string;
  usage: string;
  oem: string;
};

const DETAILS: Record<string, Record<Lang, ProductDetail>> = {
  "premium-engine-oil": {
    en: {
      quality:
        "Formulated to exceed API SN/SM standards. Advanced additive package provides superior wear protection, thermal stability, and deposit control. Every batch undergoes laboratory testing for viscosity index, flash point, and contaminant screening.",
      origin:
        "Engineered specifically for the Central Asian climate — managing extreme temperature fluctuations from -30°C winter cold starts to +45°C summer highway heat. Developed with input from our government chemical engineering team.",
      usage:
        "Recommended for passenger vehicles, SUVs, and light commercial fleets operating in desert or mountain terrain. Extended drain intervals supported. Ideal for consistent fleet maintenance schedules.",
      oem: "Available for bulk supply, custom viscosity adjustments, and private-label branding. Packaging from 1L to 200L. Technical documentation and SDS provided with every order.",
    },
    ru: {
      quality:
        "Разработано с превышением стандартов API SN/SM. Усовершенствованный пакет присадок обеспечивает превосходную защиту от износа, термическую стабильность и контроль отложений. Каждая партия проходит лабораторные испытания.",
      origin:
        "Создано специально для климата Центральной Азии — управление экстремальными температурами от -30°C зимой до +45°C летом. Разработано при участии нашей государственной команды химиков-инженеров.",
      usage:
        "Рекомендовано для легковых автомобилей, внедорожников и лёгких коммерческих автопарков, эксплуатируемых в пустынной или горной местности. Поддерживаются увеличенные интервалы замены.",
      oem: "Доступно для оптовых поставок, индивидуальной настройки вязкости и брендирования. Фасовка от 1л до 200л. Техническая документация и SDS с каждым заказом.",
    },
    uz: {
      quality:
        "API SN/SM standartlaridan yuqori darajada ishlab chiqilgan. Ilg'or qo'shimchalar paketi a'lo darajadagi aşınma himoyasi, termal barqarorlik va cho'kindi nazoratini ta'minlaydi. Har bir partiya laboratoriya sinovlaridan o'tkaziladi.",
      origin:
        "Markaziy Osiyo iqlimi uchun maxsus ishlab chiqilgan — qishki -30°C sovuq ishga tushirishdan yozgi +45°C magistral jaziramasigacha bo'lgan ekstremal harorat o'zgarishlarini boshqaradi. Davlat kimyoviy muhandislik jamoamiz ishtirokida ishlab chiqilgan.",
      usage:
        "Cho'l yoki tog'li hududlarda ishlaydigan yengil avtomobillar, SUV va yengil tijorat avtoparklari uchun tavsiya etiladi. Uzaytirilgan almashtirish oralig'i qo'llab-quvvatlanadi.",
      oem: "Ulgurji yetkazib berish, buyurtma qovushqoqlik sozlashlari va xususiy brend markalash uchun mavjud. 1L dan 200L gacha qadoqlash. Har bir buyurtma bilan texnik hujjatlar va SDS taqdim etiladi.",
    },
  },
  "standard-engine-oil": {
    en: {
      quality:
        "Reliable mineral-based formulation meeting API SL/SJ standards. Consistent viscosity retention and deposit control for everyday driving conditions. Cost-effective without compromising engine protection.",
      origin:
        "Developed for the Central Asian market where affordability and reliability are equally critical. Tested extensively on older vehicle models common throughout the region.",
      usage:
        "Best suited for older vehicle models, high-mileage engines, agricultural equipment, and budget-conscious fleet operations. Recommended oil change interval: 5,000–7,000 km.",
      oem: "Available in bulk for fleet operators and agricultural enterprises. Custom packaging sizes upon request. Technical support included.",
    },
    ru: {
      quality:
        "Надёжная минеральная формула, соответствующая стандартам API SL/SJ. Стабильное сохранение вязкости и контроль отложений для повседневной эксплуатации. Экономичность без ущерба для защиты двигателя.",
      origin:
        "Разработано для рынка Центральной Азии, где доступность и надёжность одинаково важны. Тщательно протестировано на старых моделях автомобилей, распространённых в регионе.",
      usage:
        "Лучше всего подходит для старых моделей авто, двигателей с большим пробегом, сельхозтехники и экономных автопарков. Рекомендуемый интервал замены: 5 000–7 000 км.",
      oem: "Доступно оптом для автопарков и сельхозпредприятий. Индивидуальные размеры упаковки по запросу. Техническая поддержка включена.",
    },
    uz: {
      quality:
        "API SL/SJ standartlariga javob beradigan ishonchli mineral asosli formula. Kundalik haydash sharoitlari uchun barqaror qovushqoqlik saqlanishi va cho'kindi nazorati. Dvigatel himoyasidan voz kechmagan holda iqtisodiy.",
      origin:
        "Narx va ishonchlilik bir xil darajada muhim bo'lgan Markaziy Osiyo bozori uchun ishlab chiqilgan. Mintaqada keng tarqalgan eski avtomobil modellarida keng sinovdan o'tkazilgan.",
      usage:
        "Eski avtomobil modellari, yuqori bosib o'tgan dvigatellar, qishloq xo'jaligi texnikasi va tejamkor avtopark operatsiyalari uchun eng mos keladi. Tavsiya etilgan moy almashtirish oralig'i: 5 000–7 000 km.",
      oem: "Avtoparklar va qishloq xo'jaligi korxonalari uchun ulgurji yetkazib berish mavjud. So'rov bo'yicha buyurtma qadoqlash o'lchamlari. Texnik yordam kiritilgan.",
    },
  },
  antifreeze: {
    en: {
      quality:
        "Ethylene glycol-based coolant with advanced corrosion inhibitor package. Protection from -37°C freezing to +129°C boiling. Compatible with aluminum, cast iron, copper, and brass cooling systems.",
      origin:
        "Designed to protect cooling systems from oxidation caused by high summer temperatures and scale build-up typical of local water conditions in Central Asia.",
      usage:
        "Recommended for all passenger and commercial vehicles. For heavy-duty fleets, ensure complete system flush before introduction. Mix ratio adaptable to local climate requirements.",
      oem: "Available in concentrate or ready-mix. Custom color-coding for bulk enterprise clients. 1L to 200L packaging options.",
    },
    ru: {
      quality:
        "Охлаждающая жидкость на основе этиленгликоля с усовершенствованным пакетом ингибиторов коррозии. Защита от -37°C до +129°C. Совместима с алюминиевыми, чугунными, медными и латунными системами.",
      origin:
        "Разработана для защиты систем охлаждения от окисления, вызванного высокими летними температурами, и образования накипи, типичной для местных водных условий Центральной Азии.",
      usage:
        "Рекомендована для всех легковых и коммерческих автомобилей. Для тяжёлых автопарков — полная промывка системы перед заливкой. Пропорция смешивания адаптируется к местному климату.",
      oem: "Доступна в виде концентрата или готового раствора. Индивидуальная цветовая маркировка для оптовых клиентов. Фасовка от 1л до 200л.",
    },
    uz: {
      quality:
        "Ilg'or korroziya ingibitori paketiga ega etilen glikol asosli sovutish suyuqligi. -37°C muzlashdan +129°C qaynashgacha himoya. Alyuminiy, cho'yan, mis va latun sovutish tizimlari bilan mos keladi.",
      origin:
        "Yuqori yozgi haroratlar tufayli kelib chiqadigan oksidlanishdan va Markaziy Osiyodagi mahalliy suv sharoitlariga xos bo'lgan qatlam hosil bo'lishidan sovutish tizimlarini himoya qilish uchun ishlab chiqilgan.",
      usage:
        "Barcha yengil va tijorat avtomobillari uchun tavsiya etiladi. Og'ir yuk avtoparklari uchun kiritishdan oldin tizimni to'liq yuvish kerak. Aralashtirish nisbati mahalliy iqlim talablariga moslashtiriladi.",
      oem: "Konsentrat yoki tayyor eritma shaklida mavjud. Ulgurji korporativ mijozlar uchun buyurtma rang kodlash. 1L dan 200L gacha qadoqlash imkoniyatlari.",
    },
  },
  "brake-fluid": {
    en: {
      quality:
        "High-performance DOT 4 brake fluid. Dry boiling point >260°C, wet boiling point >165°C. Polyglycol-based formulation ensures fade-resistant braking and consistent pedal feel under heavy use.",
      origin:
        "Formulated for responsiveness in extreme winter cold and vapor-lock resistance in intense summer heat — critical for Central Asian driving conditions.",
      usage:
        "Essential for mountain driving to prevent vaporization on steep descents. Compatible with all DOT 4 systems. Recommended replacement every 2 years or 40,000 km.",
      oem: "Bulk supply for automotive service centers and fleet maintenance facilities. Available under Marshall brand or private label.",
    },
    ru: {
      quality:
        "Высокоэффективная тормозная жидкость DOT 4. Температура кипения: сухая >260°C, влажная >165°C. Формула на полигликолевой основе обеспечивает стабильное торможение и ощущение педали при интенсивной эксплуатации.",
      origin:
        "Разработана для отзывчивости в экстремальный зимний холод и устойчивости к паровым пробкам в интенсивную летнюю жару — критически важно для условий вождения в Центральной Азии.",
      usage:
        "Необходима для горного вождения для предотвращения парообразования на крутых спусках. Совместима со всеми системами DOT 4. Рекомендуемая замена каждые 2 года или 40 000 км.",
      oem: "Оптовые поставки для автосервисов и пунктов обслуживания автопарков. Доступно под брендом Marshall или собственной маркой.",
    },
    uz: {
      quality:
        "Yuqori samarali DOT 4 tormoz suyuqligi. Quruq qaynash nuqtasi >260°C, nam qaynash nuqtasi >165°C. Poliglikol asosli formula og'ir foydalanishda so'nishga chidamli tormozlash va barqaror pedal hissini ta'minlaydi.",
      origin:
        "Ekstremal qishki sovuqda sezgirlik va kuchli yoz jaziramasida bug' qulfiga chidamlilik uchun ishlab chiqilgan — Markaziy Osiyo haydash sharoitlari uchun juda muhim.",
      usage:
        "Tik pasayishlarda bug'lanishni oldini olish uchun tog' haydashda zarur. Barcha DOT 4 tizimlari bilan mos keladi. Har 2 yilda yoki 40 000 km da almashtirish tavsiya etiladi.",
      oem: "Avtomobil xizmat ko'rsatish markazlari va avtoparklarga texnik xizmat ko'rsatish muassasalari uchun ulgurji yetkazib berish. Marshall brendi yoki xususiy brend ostida mavjud.",
    },
  },
  grease: {
    en: {
      quality:
        "Lithium-complex grease with high mechanical stability and excellent water resistance. NLGI Grade 2. Drop point >190°C. Prevents washout and maintains consistency under heavy loads.",
      origin:
        "Built to resist extreme heat in industrial and agricultural sectors throughout Central Asia. Prevents bearing burnout in continuous-operation machinery.",
      usage:
        "Wheel bearings and chassis points for heavy machinery. Superior adhesion prevents grit and dust ingress. Suitable for automotive, agricultural, and industrial applications.",
      oem: "Available from 400g cartridges to 18kg industrial pails. Custom consistency grades available for specialized industrial applications.",
    },
    ru: {
      quality:
        "Литиевая комплексная смазка с высокой механической стабильностью и отличной водостойкостью. Класс NLGI 2. Температура каплепадения >190°C. Предотвращает вымывание и сохраняет консистенцию под тяжёлыми нагрузками.",
      origin:
        "Создана для работы в условиях экстремальной жары в промышленном и сельскохозяйственном секторах Центральной Азии. Предотвращает перегрев подшипников в оборудовании непрерывной работы.",
      usage:
        "Колёсные подшипники и точки шасси для тяжёлой техники. Превосходная адгезия предотвращает попадание песка и пыли. Подходит для автомобильного, сельскохозяйственного и промышленного применения.",
      oem: "Доступна от картриджей 400г до промышленных вёдер 18кг. Индивидуальные классы консистенции для специализированных промышленных применений.",
    },
    uz: {
      quality:
        "Yuqori mexanik barqarorlik va a'lo darajadagi suvga chidamlilikka ega litiy-kompleks surkov moyi. NLGI 2-sinf. Tomchilash nuqtasi >190°C. Og'ir yuklar ostida yuvilib ketishni oldini oladi va konsistensiyani saqlaydi.",
      origin:
        "Markaziy Osiyodagi sanoat va qishloq xo'jaligi sektorlarida ekstremal issiqlikka qarshilik ko'rsatish uchun ishlab chiqarilgan. Uzluksiz ishlaydigan mashinalarda podshipniklarning kuyishini oldini oladi.",
      usage:
        "Og'ir texnika uchun g'ildirak podshipniklari va shassi nuqtalari. Yuqori adgeziya qum va chang kirishini oldini oladi. Avtomobil, qishloq xo'jaligi va sanoat uchun mos.",
      oem: "400g kartridjlardan 18kg sanoat chelaklarigacha mavjud. Ixtisoslashgan sanoat qo'llanmalari uchun buyurtma konsistensiya sinflari mavjud.",
    },
  },
};

export function getProductDetail(
  productId: string,
  lang: Lang
): ProductDetail | null {
  const product = DETAILS[productId];
  if (!product) return null;
  return product[lang] ?? product.en ?? null;
}

export const PRODUCT_IDS = Object.keys(DETAILS);
