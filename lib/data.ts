import { Category, Product } from "@/types";
import cameraImg from "@/public/assets/camera.png";

export const productList: Product[] = [
  {
    id: "1",
    name: "Nikon D850 Camera DSLR 45.7MP CMOS Body",
    category: "dslr",
    image: "/assets/dslr/1.png",
    description:
      "Professional DSLR with 45.7MP full-frame CMOS sensor, 4K UHD video, fast 7fps shooting, and outstanding dynamic range for any situation.",
    price: 199,
    isNew: true,
  },
  {
    id: "2",
    name: "Canon EOS 6D Mark II Camera DSLR 26.2MP CMOS Body",
    category: "dslr",
    image: "/assets/dslr/2.png",
    description:
      "26.2MP full-frame CMOS sensor, Dual Pixel CMOS AF, 45 cross-type AF points, and Full HD 60p video for versatile performance in all lighting.",
    price: 299,
    isNew: true,
  },
  {
    id: "3",
    name: "Nikon D7500 Camera DSLR 20.9MP CMOS 4K Kit 18-140 mm",
    category: "dslr",
    image: "/assets/dslr/3.png",
    description:
      "20.9MP DX-format sensor with 4K UHD video, fast 8fps continuous shooting, and 51-point autofocus for sharp results in every scene.",
    price: 399,
    isNew: true,
  },
  {
    id: "4",
    name: "Canon EOS 250D Kit with Camera Lens EF-S 18-55mm DC Black",
    category: "dslr",
    image: "/assets/dslr/4.png",
    description:
      "Compact DSLR with 24.1MP APS-C sensor, Dual Pixel CMOS AF, 4K video, and vari-angle touchscreen ideal for beginners and creators.",
    price: 199,
    isNew: true,
  },
  {
    id: "5",
    name: "Canon EOS 2000D Camera DSLR 24.1MP CMOS Kit with Camera Lens EF-S 18-55mm f/3.5-5.6 III Black",
    category: "dslr",
    image: "/assets/dslr/5.png",
    description:
      "Entry-level DSLR with 24.1MP APS-C CMOS sensor, built-in Wi-Fi, Full HD video, and easy-to-use controls for everyday photography.",
    price: 399,
    isNew: false,
  },
  {
    id: "6",
    name: "Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K",
    category: "mirrorless",
    image: "/assets/mirrorless/1.png",
    description:
      "24.2MP full-frame sensor with 693-point autofocus, 4K HDR video, 10fps burst shooting, and superb low-light performance for creators.",
    price: 299,
    isNew: true,
  },
  {
    id: "7",
    name: "Canon EOS R6 Photo Camera Mirrorless Full-Frame 20.1 M",
    category: "mirrorless",
    image: "/assets/mirrorless/2.png",
    description:
      "Full-frame 20.1MP sensor with in-body image stabilization, Dual Pixel AF II, 4K 60p video, and ISO up to 102,400 for any condition.",
    price: 399,
    isNew: false,
  },
  {
    id: "8",
    name: "Canon EOS M50 II Photo Camera Mirrorless 24MP Kit with Camera Lens EF-M 15-45mm F/3.5-6.3 IS STM Black",
    category: "mirrorless",
    image: "/assets/mirrorless/3.png",
    description:
      "24.1MP APS-C sensor with Dual Pixel CMOS AF, 4K video, vari-angle touchscreen, and built-in Wi-Fi for streaming and easy sharing.",
    price: 299,
    isNew: false,
  },
  {
    id: "9",
    name: "Canon EOS R6 Mark II Photo Camera Mirrorless Full Frame 24.2MP Body Black",
    category: "mirrorless",
    image: "/assets/mirrorless/4.png",
    description:
      "24.2MP full-frame sensor, 40fps burst shooting, advanced subject tracking, and 6K oversampled 4K video for ultimate creativity.",
    price: 199,
    isNew: false,
  },
  {
    id: "10",
    name: "Panasonic LUMIX S5 II Photo Camera Mirrorless Full Frame 24.2MP",
    category: "mirrorless",
    image: "/assets/mirrorless/5.png",
    description:
      "24.2MP full-frame hybrid camera with phase-detect AF, 6K video, Dual Native ISO, and compact design for professional versatility.",
    price: 399,
    isNew: true,
  },
  {
    id: "11",
    name: "Sony Cyber-shot DSC-RX10 IV Photo Camera Compact 20.1MP Wi-Fi Bluetooth Black",
    category: "compact",
    image: "/assets/compact/1.png",
    description:
      "20.1MP Exmor RS CMOS sensor, 25x zoom lens, fast 24fps shooting, 4K video, and Wi-Fi/Bluetooth for ultimate all-in-one performance.",
    price: 199,
    isNew: true,
  },
  {
    id: "12",
    name: "Sony Cyber-Shot DSC-RX100 VA - Photo Camera, 20,1 MP, Zoom Optic, 2.9x, ZEISS Vario-Sonnar",
    category: "compact",
    image: "/assets/compact/2.png",
    description:
      "Compact 20.1MP sensor, ZEISS 24-70mm lens, 315-point AF, 4K video with HLG, and pocket-size design perfect for travel and vlogging.",
    price: 399,
    isNew: true,
  },
  {
    id: "13",
    name: "Panasonic Lumix FZ1000 II Photo Camera Bridge 20.1 MP Zoom 16x 4K Black",
    category: "compact",
    image: "/assets/compact/3.png",
    description:
      "20.1MP large sensor with 16x Leica zoom lens, 4K video/photo modes, and high-speed performance in a versatile bridge design.",
    price: 199,
    isNew: false,
  },
  {
    id: "14",
    name: "Nikon Coolpix P1000 Photo Camera Bridge 16MP Black",
    category: "compact",
    image: "/assets/compact/4.png",
    description:
      "16MP sensor with an extraordinary 125x optical zoom lens, 4K UHD video, and advanced stabilization for extreme telephoto shooting.",
    price: 499,
    isNew: true,
  },
  {
    id: "15",
    name: "Olympus TG-6 Photo Camera Compact Subacvatic 12MP 4K Black",
    category: "compact",
    image: "/assets/compact/5.png",
    description:
      "Rugged waterproof compact with 12MP sensor, 4K video, microscope mode, GPS tracking, and shockproof design for outdoor adventures.",
    price: 399,
    isNew: true,
  },
  {
    id: "16",
    name: "Fujifilm Instax Mini 90 Neo Classic Photo Camera Instant Black",
    category: "film",
    image: "/assets/film/1.png",
    description:
      "Stylish instant camera with multiple shooting modes, built-in flash, rechargeable battery, and classic design for instant prints.",
    price: 99,
    isNew: false,
  },
  {
    id: "17",
    name: "Fujifilm Instax Wide 300 Photo Camera Instant",
    category: "film",
    image: "/assets/film/2.png",
    description:
      "Instant film camera with wide-format prints, easy operation, close-up lens adapter, and flash for capturing every fun moment.",
    price: 199,
    isNew: false,
  },
  {
    id: "18",
    name: "Agfaphoto Photo Camera Analog 35mm Reusable Black",
    category: "film",
    image: "/assets/film/3.png",
    description:
      "35mm reusable film camera with simple design, fixed-focus lens, and flash, perfect for experimenting with analog photography.",
    price: 199,
    isNew: false,
  },
  {
    id: "19",
    name: "Fujifilm Instax Mini 40 Photo Camera Instant Black",
    category: "film",
    image: "/assets/film/4.png",
    description:
      "Retro-style instant camera with automatic exposure, built-in flash, selfie mode, and easy film loading for instant fun photos.",
    price: 99,
    isNew: false,
  },
  {
    id: "20",
    name: "Fujifilm Instax Mini Evo Hybrid Photo Camera Instant",
    category: "film",
    image: "/assets/film/5.png",
    description:
      "Hybrid instant camera with 10 lens and 10 film effects, LCD screen, Bluetooth connectivity, and instant printing capabilities.",
    price: 199,
    isNew: false,
  },
  {
    id: "21",
    name: "Sigma FP Digital Camera Full Frame 24.6MP Body",
    category: "professional",
    image: "/assets/professional/1.png",
    description:
      "World’s smallest full-frame mirrorless with 24.6MP sensor, 12-bit CinemaDNG, 4K UHD, and modular design for professional creators.",
    price: 2999,
    isNew: false,
  },
];

export const categoryList: Category[] = [
  "dslr",
  "film",
  "professional",
  "compact",
  "mirrorless",
];

export const mainSliderData = [
  {
    id: "1",
    image: cameraImg,
    pretitle: "Special Offer",
    titlePart1: "Grab 15%",
    titlePart2: "On Every",
    titlePart3: "Camera Order",
    buttonText: "Shop Now",
  },
  {
    id: "2",
    image: cameraImg,
    pretitle: "Special Offer",
    titlePart1: "Get 25%",
    titlePart2: "Shop With",
    titlePart3: "Photo Deals",
    buttonText: "Shop Now",
  },
  {
    id: "3",
    image: cameraImg,
    pretitle: "Special Offer",
    titlePart1: "Enjoy 10%",
    titlePart2: "On Fresh",
    titlePart3: "Lens Purchase",
    buttonText: "Shop Now",
  },
  {
    id: "4",
    image: cameraImg,
    pretitle: "Special Offer",
    titlePart1: "Claim 30%",
    titlePart2: "For Your",
    titlePart3: "First Camera",
    buttonText: "Shop Now",
  },
  {
    id: "5",
    image: cameraImg,
    pretitle: "Special Offer",
    titlePart1: "Save More",
    titlePart2: "Buy Your",
    titlePart3: "Photo Gear",
    buttonText: "Shop Now",
  },
];
