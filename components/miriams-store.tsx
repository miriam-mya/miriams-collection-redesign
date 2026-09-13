'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  CircleUserRound,
  Clock3,
  Menu,
  Minus,
  Music2,
  Play,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type Product = {
  name: string;
  eyebrow: string;
  price: string;
  was?: string;
  image: string;
  href: string;
  colour: string;
};

const products: Product[] = [
  {
    name: 'The Rice Water Revive Duo',
    eyebrow: 'Hair · 300ml × 2',
    price: '£39.95',
    was: '£50.00',
    image: '/revive-duo.jpg',
    href: '/products/rice-water-revive-duo',
    colour: '#e9e0d6',
  },
  {
    name: 'The Rice Water Skincare Duo',
    eyebrow: 'Skin · Cleanser + cream',
    price: '£42.00',
    was: '£46.00',
    image: '/skincare-duo.jpg',
    href: 'https://www.miriamscollection.co.uk/products/rice-water-skincare-duo',
    colour: '#efe5dc',
  },
  {
    name: 'Hair Growth Collection',
    eyebrow: 'Hair · Complete system',
    price: '£89.99',
    image: '/growth-collection.jpg',
    href: 'https://www.miriamscollection.co.uk/products/everything-bundle-7-items',
    colour: '#e5e7dc',
  },
  {
    name: 'Ultimate Men’s Hair Regrowth Kit',
    eyebrow: 'Men · Targeted regrowth system',
    price: '£81.99',
    image: '/mens-hair-regrowth-kit.png',
    href: 'https://www.miriamscollection.co.uk/products/mens-hair-regrowth-kit?variant=50640504783177',
    colour: '#e9e0d6',
  },
];

const completeRitual: Product = {
  name: 'Complete Hair & Skin Ritual',
  eyebrow: 'Best value · 5 pieces',
  price: '£45.95',
  was: '£103.99',
  image: '/complete-ritual.png',
  href: 'https://www.miriamscollection.co.uk/products/rice-water-revive-duo',
  colour: '#ddebe8',
};

const productStoryVideos = [
  {
    number: '1',
    title: '65% real rice water',
    copy: "Other brands use water as their main ingredient. We've flipped that on its head by using 65% real rice water instead - naturally rich in vitamins, minerals and antioxidants.",
    src: 'https://www.miriamscollection.co.uk/cdn/shop/videos/c/vp/d54e6cd579d947b4a23733d43e67ee62/d54e6cd579d947b4a23733d43e67ee62.HD-1080p-2.5Mbps-57455975.mp4?v=0',
    poster: 'https://www.miriamscollection.co.uk/cdn/shop/files/preview_images/d54e6cd579d947b4a23733d43e67ee62.thumbnail.0000000000_1600x.jpg?v=1757874234',
  },
  {
    number: '2',
    title: '16 hero ingredients across the set',
    copy: 'Most Shampoo and Conditioner sets contain just 1 or 2. Let that sink in.',
    src: 'https://www.miriamscollection.co.uk/cdn/shop/videos/c/vp/e027cc19f27f4becb0c3d8635bfdd3cc/e027cc19f27f4becb0c3d8635bfdd3cc.HD-1080p-7.2Mbps-91556265.mp4?v=0',
    poster: 'https://www.miriamscollection.co.uk/cdn/shop/files/preview_images/e027cc19f27f4becb0c3d8635bfdd3cc.thumbnail.0000000000_1600x.jpg?v=1786663045',
  },
  {
    number: '3',
    title: 'No sulfates',
    copy: 'Sulfates strip the scalp, causing it to overproduce oil to compensate - this is what leads to greasy hair on day 2 or 3 after washing!',
    src: 'https://www.miriamscollection.co.uk/cdn/shop/videos/c/vp/edeec1e366a54a58b8b478e8e078c911/edeec1e366a54a58b8b478e8e078c911.HD-1080p-7.2Mbps-91555098.mp4?v=0',
    poster: 'https://www.miriamscollection.co.uk/cdn/shop/files/preview_images/edeec1e366a54a58b8b478e8e078c911.thumbnail.0000000000_1600x.jpg?v=1786661732',
  },
  {
    number: '4',
    title: 'Gentle amino acid cleansers',
    copy: 'Ensure a nice foamy, creamy lather that cleans build up without stripping the scalp.',
    src: 'https://www.miriamscollection.co.uk/cdn/shop/videos/c/vp/8d952906c38e4c0b89143a446e58fc1e/8d952906c38e4c0b89143a446e58fc1e.HD-1080p-7.2Mbps-85736096.mp4?v=0',
    poster: 'https://www.miriamscollection.co.uk/cdn/shop/files/preview_images/8d952906c38e4c0b89143a446e58fc1e.thumbnail.0000000000_1600x.jpg?v=1780607067',
  },
];

const productGalleryImages = [
  { src: '/revive-duo.jpg', alt: 'Rice Water Revive Duo' },
  { src: '/close-up.png', alt: 'Close-up of rice water shampoo and conditioner' },
  { src: '/complete-ritual.png', alt: "Complete Miriam's hair and skin ritual" },
];

const ingredientCards = [
  {
    name: 'Rice Water', image: '/ingredients/rice-water.jpg',
    description: "We use over 65% real rice water in this Duo. Rich in naturally occurring antioxidants, vitamins and minerals like magnesium and zinc, it's a centuries-old beauty secret for better hair.",
    helps: 'Strengthening strands and reducing breakage.',
    science: 'Rice water contains inositol, a compound that penetrates the hair and stays active even after rinsing, smoothing the cuticle and protecting against damage from styling and everyday wear.',
  },
  {
    name: 'Citrus Peel Extract', image: '/ingredients/citrus-peel.jpg',
    description: 'A refreshing botanical extract, naturally rich in antioxidant compounds.',
    helps: 'Shine & vitality',
    science: 'Citrus Peel Extract helps condition the hair and protect against oxidative stress, supporting smoother, healthier-looking strands.',
  },
  {
    name: 'Caffeine', image: '/ingredients/caffeine.jpg',
    description: 'A natural stimulant, best known for waking you up in the morning.',
    helps: 'Promoting healthy growth',
    science: 'Caffeine is well-studied in scalp care, helping to stimulate dormant hair follicles and encourage the hair growth cycle.',
  },
  {
    name: 'Rosemary Oil', image: '/ingredients/rosemary-oil.jpg',
    description: 'A traditional scalp oil, used for centuries in hair care rituals and commonly known for hair growth.',
    helps: 'Reducing hair fall',
    science: 'Rosemary is believed to help limit the enzyme that converts testosterone into DHT, the hormone linked to thinning at DHT-sensitive follicles, while also supporting scalp circulation.',
  },
  {
    name: 'Orchid', image: '/ingredients/orchid.jpg',
    description: 'A delicate botanical extract, prized in traditional Chinese herbalism.',
    helps: 'Deep hydration',
    science: 'Orchid extract is rich in moisture-binding polysaccharides, known to help skin and hair retain hydration over time.',
  },
  {
    name: 'Keratin', image: '/ingredients/keratin.jpg',
    description: "The protein that naturally makes up hair's structure.",
    helps: 'Reducing frizz',
    science: "Keratin helps fill in microscopic gaps in the hair's outer cuticle, smoothing the surface so moisture can't get in unevenly, the cause of humidity-driven frizz.",
  },
  {
    name: 'Aloe', image: '/ingredients/aloe.jpg',
    description: 'A succulent plant, valued in skin and hair care for centuries.',
    helps: 'Enhancing curl definition and smoothing straight strands, whatever your texture.',
    science: 'Aloe forms a light, moisture-sealing film on the strand, aiding detangling and helping curls hold their shape without weighing hair down.',
  },
  {
    name: 'Goji Berry', image: '/ingredients/goji-berry.jpg',
    description: 'A nutrient-rich superfruit, naturally packed with protective antioxidants.',
    helps: 'Strength & vitality',
    science: 'Goji Berry Extract helps condition and protect the hair, supporting stronger, healthier-looking strands.',
  },
  {
    name: 'Amino acid cleansers', image: '/ingredients/amino-acid-cleansers.jpg',
    description: 'Our gentle alternative to sulfates.',
    helps: 'Cleansing without stripping natural oils.',
    science: "Amino acid-based cleansers are milder than sulfates, lifting dirt and buildup while leaving the scalp's natural barrier intact. Sulfates strip the scalp, causing it to produce excess oil to overcompensate, that's why your hair gets greasy on day 2 or 3!",
  },
  {
    name: 'Coconut oil', image: '/ingredients/coconut-oil.jpg',
    description: 'A nourishing oil, rich in fatty acids.',
    helps: 'Boosting shine',
    science: "Coconut oil's fatty acids penetrate the hair shaft rather than sitting on the surface, helping strands reflect light more evenly.",
  },
  {
    name: 'Ginger Root', image: '/ingredients/ginger-root.jpg',
    description: 'A warming root, known for its anti-inflammatory properties.',
    helps: 'Balancing scalp oils to fix a dry, flaky or oily scalp.',
    science: "Ginger's natural antioxidant and anti-inflammatory compounds help soothe irritation and regulate sebum, creating a healthier scalp environment.",
  },
  {
    name: 'Coneflower', image: '/ingredients/coneflower.jpg',
    description: 'A botanical extract prized for its soothing and antioxidant properties.',
    helps: 'Scalp care & protection',
    science: 'Coneflower contains naturally occurring antioxidants and plant compounds that help condition and soothe the scalp, supporting a healthy scalp environment.',
  },
  {
    name: 'Biotin', image: '/ingredients/biotin.jpg',
    description: "A B-vitamin, naturally involved in the body's keratin production.",
    helps: 'Reducing brittle strands.',
    science: "Biotin plays a role in keratin production, hair's core structural protein, helping support stronger, less brittle strands over time.",
  },
  {
    name: 'Gardenia Flower', image: '/ingredients/gardenia-flower.jpg',
    description: 'A fragrant botanical extract, prized in traditional Asian beauty rituals.',
    helps: 'Softness & shine',
    science: 'Gardenia Flower Extract helps condition the hair, supporting smoother, softer strands and enhancing hair’s natural-looking shine.',
  },
  {
    name: 'Sophora Root', image: '/ingredients/sophora-root.jpg',
    description: 'A botanical extract traditionally used to care for and soothe the scalp.',
    helps: 'Scalp health & balance',
    science: 'Sophora Root contains naturally occurring plant compounds that can help soothe and condition the scalp, supporting a healthier environment for hair.',
  },
  {
    name: 'Pro-Vitamin B5', image: '/ingredients/pro-vitamin-b5.jpg',
    description: 'A moisture-binding vitamin that helps keep hair soft and hydrated.',
    helps: 'Dryness & softness',
    science: 'Pro-Vitamin B5 helps attract and retain moisture in the hair, improving softness and flexibility while helping reduce dryness.',
  },
];

const ingredientIcons = [
  { name: 'Rice Water', image: '/ingredient-icons/rice-water.png' },
  { name: 'Biotin', image: '/ingredient-icons/biotin.png' },
  { name: 'Keratin', image: '/ingredient-icons/keratin.png' },
  { name: 'Caffeine', image: '/ingredient-icons/caffeine.png' },
  { name: 'Rosemary Oil', image: '/ingredient-icons/rosemary-oil.png' },
  { name: 'Ginger Root Oil', image: '/ingredient-icons/ginger-root-oil.png' },
  { name: 'Citrus Peel', image: '/ingredient-icons/citrus-peel.png' },
  { name: 'Coconut Oil', image: '/ingredient-icons/coconut-oil.png' },
  { name: 'Orchid', image: '/ingredient-icons/orchid.png' },
  { name: 'Goji Berry', image: '/ingredient-icons/goji-berry.png' },
  { name: 'Ubiquinol', image: '/ingredient-icons/ubiquinol.png' },
  { name: 'Aloe', image: '/ingredient-icons/aloe.png' },
  { name: 'Gardenia Flower', image: '/ingredient-icons/gardenia-flower.png' },
  { name: 'Sophora Root', image: '/ingredient-icons/sophora-root.png' },
  { name: 'Coneflower', image: '/ingredient-icons/coneflower.png' },
  { name: 'Pro-Vitamin B5', image: '/ingredient-icons/pro-vitamin-b5.png' },
];

const pressLogos = [
  { name: 'Vogue', image: '/press/vogue.png' },
  { name: 'Tatler', image: '/press/tatler.png' },
  { name: 'GQ', image: '/press/gq.png' },
  { name: 'Superdrug', image: '/press/superdrug.png' },
  { name: 'John Lewis', image: '/press/john-lewis.png' },
  { name: 'Weddings & Honeymoons', image: '/press/weddings-honeymoons.png' },
  { name: 'London Evening Standard', image: '/press/london-evening-standard.png' },
];

type CategoryKey = 'hair' | 'face' | 'skin' | 'men' | 'sets';

const categoryContent: Record<CategoryKey, { title: string; eyebrow: string; copy: string; image: string; products: Product[] }> = {
  hair: {
    eyebrow: 'Rice water haircare',
    title: 'Haircare, made differently.',
    copy: 'We believe your wash day should do more than simply cleanse your hair. So we create formulas designed to turn everyday products into real haircare.',
    image: '/hero-ritual.png',
    products: [products[0], products[2], products[3]],
  },
  face: {
    eyebrow: 'Everyday skincare',
    title: 'Fresh, soft & hydrated.',
    copy: 'Gently cleanses without stripping, leaving skin fresh, soft & hydrated. Deeply hydrates and supports the skin barrier for brighter, smoother-looking skin.',
    image: '/skincare-duo.jpg',
    products: [products[1], completeRitual],
  },
  skin: {
    eyebrow: 'Rice water skincare',
    title: 'Elevate your everyday.',
    copy: 'Rice Water Skincare Duo. Cleanser + Cream. For hydrated, brighter-looking skin.',
    image: '/complete-ritual.png',
    products: [products[1], completeRitual],
  },
  men: {
    eyebrow: 'For men',
    title: 'Different hair. Different reasons for loving it.',
    copy: 'Suitable for all hair types, including fine and thinning hair. Sulfate free and suitable for sensitive scalps.',
    image: '/revive-duo.jpg',
    products: [products[3], products[0], products[2]],
  },
  sets: {
    eyebrow: 'Choose your bundle below',
    title: 'Bundles.',
    copy: 'Hair, skin and targeted growth sets designed to make your everyday ritual work harder.',
    image: '/complete-ritual.png',
    products: [completeRitual, products[0], products[1], products[2]],
  },
};

const reviews = [
  {
    tag: 'Curly hair',
    quote:
      'My curls now look amazing. Underneath they are so silky and shiny — I am hooked.',
    name: 'Claire',
    image: '/social-curly.webp',
  },
  {
    tag: 'Dry, coloured hair',
    quote:
      'The difference with this one is that my hair stays hydrated, forms curls better and keeps its shine for longer.',
    name: 'Sara',
    image: '/social-coloured.webp',
  },
  {
    tag: 'Compliments',
    quote:
      'From wash one the quality of my hair has changed. It doesn’t strip the hair but somehow feels so much cleaner.',
    name: 'Lucy J',
    image: '/social-compliments.webp',
  },
  {
    tag: 'Knotty hair',
    quote:
      'My hair gets very knotty and tangled at the ends, but I’ve noticed a vast improvement. This shampoo makes my hair feel so soft.',
    name: 'Sharon',
    image: '/social-knotty.webp',
  },
];

const socialTiles = [
  { image: '/social-curly.webp', label: 'Defined curls', network: 'TikTok' },
  { image: '/social-coloured.webp', label: 'Dry, coloured hair', network: 'Instagram' },
  { image: '/social-compliments.webp', label: 'Wash-day results', network: 'TikTok' },
  { image: '/social-knotty.webp', label: 'Soft, detangled hair', network: 'Instagram' },
];

const faqs = [
  {
    q: 'What makes your shampoo and conditioner different?',
    a: 'Our shampoo and conditioner are built around one core belief: that your wash day products should actively improve your hair, not just clean it. Whilst most shampoos and conditioners contain just one or two hero ingredients, ours contain sixteen unique actives working together to nourish, repair and strengthen your hair from within. The base of our formula is 65% real rice water, supported by ingredients like keratin, rosemary oil and caffeine.',
  },
  {
    q: 'How can your formula be suitable for all hair types?',
    a: 'Our formula works by repairing the hair strand from within rather than coating it, which means it works with your hair’s natural structure rather than masking it. Rice water and hydrolyzed keratin penetrate the strand to improve its condition over time, whilst our amino acid cleansers gently lift buildup without stripping.',
  },
  {
    q: 'Are they suitable for eczema or psoriasis-prone scalps?',
    a: 'Yes. Rice water and ginger root oil are both known for their soothing properties and have shown benefits for a range of scalp conditions. Our products are also completely fragrance free, making them suitable for sensitive scalps.',
  },
  {
    q: 'What do they smell like?',
    a: 'We do not use any added fragrance in our products, making them suitable for sensitive skin. Any scent comes entirely from the natural ingredients themselves. Customers have described it as fresh, clean and natural, with some comparing it to mango sticky rice or rice pudding. It is a subtle scent and does not linger in the hair.',
  },
  {
    q: 'Are they safe for bleached or damaged hair?',
    a: 'Yes, and it is especially loved by those with dry, heat-damaged or chemically treated hair. Rice water and hydrolyzed keratin work to repair and strengthen the hair strand from within, making our formula particularly beneficial for hair that needs a little extra care.',
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="size-3.5 fill-current stroke-current" />
      ))}
    </span>
  );
}

function SlideUp({ children, className = '' }: { children: ReactNode; className?: string }) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${className} transform-gpu transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      {children}
    </div>
  );
}

function Announcement() {
  return (
    <div className="flex h-8 items-center justify-center bg-primary px-5 text-center text-[10px] font-semibold uppercase tracking-[0.13em] text-primary-foreground sm:text-xs">
      <span className="hidden sm:inline">Free UK tracked shipping over £40</span>
      <span className="hidden px-4 text-white/35 sm:inline">·</span>
      <span>4.79 from 3,300 reviews</span>
      <span className="hidden px-4 text-white/35 sm:inline">·</span>
      <span className="hidden sm:inline">Subscribe & save 10%</span>
    </div>
  );
}

function CartPanel({
  open,
  setOpen,
  count,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  count: number;
}) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-[92vw] bg-[#fbfaf6] sm:max-w-md">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="font-heading text-3xl">Your ritual</SheetTitle>
          <SheetDescription>{count ? `${count} item${count > 1 ? 's' : ''} ready for checkout.` : 'Your bag is waiting for something lovely.'}</SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {count ? (
            <div className="flex gap-4 border-b pb-5">
              <div className="size-24 overflow-hidden rounded-xl bg-[#e7ded3]">
                <img src="/revive-duo.jpg" alt="Rice Water Revive Duo" className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <p className="font-heading text-xl leading-tight">Rice Water Revive Duo</p>
                <p className="mt-1 text-xs text-muted-foreground">Subscribe & save · Every 8 weeks</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center rounded-full border bg-white">
                    <button className="p-2" aria-label="Decrease quantity"><Minus className="size-3" /></button>
                    <span className="min-w-5 text-center text-xs font-bold">{count}</span>
                    <button className="p-2" aria-label="Increase quantity"><Plus className="size-3" /></button>
                  </div>
                  <strong>£{(39.95 * count).toFixed(2)}</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-5 size-8 stroke-[1.3] text-muted-foreground" />
              <p className="font-heading text-2xl">Start your everyday ritual</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Rice water haircare and skincare, formulated to do more with the steps you already take.</p>
              <SheetClose className="mt-6 rounded-full bg-primary px-6 py-3 text-xs font-bold uppercase tracking-widest text-white">Shop bestsellers</SheetClose>
            </div>
          )}
        </div>
        {count > 0 && (
          <SheetFooter className="border-t bg-white p-6">
            <div className="mb-2 flex justify-between text-sm"><span>Subtotal</span><strong>£{(39.95 * count).toFixed(2)}</strong></div>
            <p className="mb-3 text-xs text-muted-foreground">Free UK Tracked 48 delivery included.</p>
            <button className="min-h-12 w-full rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90">Checkout</button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Header({
  cartCount,
  openCart,
  transparent = false,
}: {
  cartCount: number;
  openCart: () => void;
  transparent?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const updateHeader = () => setScrolled(window.scrollY > 56);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <>
      <Announcement />
      <header className={`left-0 right-0 z-40 transition-[background-color,color,border-color,box-shadow] duration-300 ${solid ? `${transparent ? 'fixed top-0' : 'relative'} border-b border-border bg-background text-foreground shadow-[0_8px_30px_rgb(0_0_0/6%)]` : 'absolute top-8 border-b border-transparent bg-transparent text-white shadow-none'}`}>
        <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-5 sm:h-[88px] sm:px-8 lg:h-[108px] lg:px-12">
          <nav className="hidden items-center gap-6 text-[12px] font-bold uppercase tracking-[0.08em] lg:flex">
            <a href="/hair" className="nav-link">Hair</a>
            <a href="/skin" className="nav-link">Skin</a>
            <a href="/sets" className="nav-link">Sets</a>
            <a href="/#shop" className="nav-link">All Products</a>
          </nav>

          <Sheet>
            <SheetTrigger className="flex size-10 items-center justify-start lg:hidden" aria-label="Open navigation">
              <Menu className="size-5 stroke-[1.7]" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[88vw] bg-[#fbfaf6] sm:max-w-sm">
              <SheetHeader className="border-b p-6">
                <img src="/miriams-logo-2026.svg" alt="Miriam's Collection" className="h-24 w-24 self-start object-contain" />
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <SheetDescription>Heritage-inspired. Botanically elevated.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-6 py-6 font-heading text-4xl leading-[1.45]">
                <SheetClose render={<a href="/hair" />}>Hair</SheetClose>
                <SheetClose render={<a href="/skin" />}>Skin</SheetClose>
                <SheetClose render={<a href="/sets" />}>Sets</SheetClose>
                <SheetClose render={<a href="/#shop" />}>All Products</SheetClose>
              </nav>
            </SheetContent>
          </Sheet>

          <a href="/" aria-label="Miriam's Collection home" className="flex justify-center">
            <img src="/miriams-logo-2026.svg" alt="Miriam's Collection" className={`h-[62px] w-[62px] object-contain transition-[filter] duration-300 sm:h-[74px] sm:w-[74px] lg:h-[96px] lg:w-[96px] ${solid ? '' : 'brightness-0 invert'}`} />
          </a>

          <div className="flex items-center justify-end gap-0.5 sm:gap-1">
            <button className="icon-button hidden sm:flex" aria-label="Search"><Search /></button>
            <button className="icon-button hidden sm:flex" aria-label="Account"><CircleUserRound /></button>
            <button className="icon-button relative flex" aria-label={`Shopping bag with ${cartCount} items`} onClick={openCart}>
              <ShoppingBag />
              <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-accent-foreground">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function ProductCard({ product, addToCart }: { product: Product; addToCart: () => void }) {
  return (
    <article className="group flex h-full flex-col">
      <a href={product.href} className="relative block aspect-[4/5] overflow-hidden rounded-[1.25rem]" style={{ background: product.colour }}>
        {product.was && <span className="absolute left-4 top-4 z-10 rounded-full bg-primary px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">Save</span>}
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-primary backdrop-blur">Subscribe & save 10%</span>
      </a>
      <div className="flex flex-1 flex-col pt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{product.eyebrow}</p>
        <a href={product.href} className="mt-2 font-heading text-[1.7rem] leading-[1.05] tracking-[-0.02em]">{product.name}</a>
        <div className="mt-3 flex items-center gap-2 text-sm"><Stars /><span className="text-xs text-muted-foreground">4.9</span></div>
        <div className="mt-3 flex items-baseline gap-2 text-sm"><strong>{product.price}</strong>{product.was && <s className="text-xs text-muted-foreground">{product.was}</s>}</div>
        <button onClick={addToCart} className="mt-5 min-h-11 rounded-full border border-primary bg-transparent px-5 text-[11px] font-bold uppercase tracking-[0.11em] transition-colors hover:bg-primary hover:text-white">Add to bag</button>
      </div>
    </article>
  );
}

function PressStrip() {
  return (
    <section className="flex h-[112px] flex-col justify-center overflow-hidden border-b border-border bg-white sm:h-[160px]" aria-label="As seen in">
      <p className="px-5 text-center text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground sm:px-8">As seen in</p>
      <div className="mt-4 overflow-hidden sm:mt-5">
        <div className="press-marquee">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="press-logo-set" aria-hidden={setIndex === 1}>
              {pressLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.image}
                  alt={setIndex === 0 ? logo.name : ''}
                  className="h-16 w-auto max-w-[220px] shrink-0 object-contain sm:h-[72px] sm:max-w-[250px]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferBundle({ addToCart }: { addToCart: () => void }) {
  const [choice, setChoice] = useState<'duo' | 'ritual'>('ritual');
  const ritual = choice === 'ritual';
  const included = [
    ['/revive-duo.jpg', 'The Rice Water Revive Duo (Sulfate Free)', '£50.00', '£39.95'],
    ['/skincare-duo.jpg', 'Rice Water Cleanser', '£22.00', '£6'],
    ['/complete-ritual.png', 'Rice Water Face Cream', '£24.00', 'FREE'],
    ['/sample-sachets.png', 'Rice Water Shampoo Sample Sachet', '', 'FREE'],
  ];

  return (
    <section id="offer" className="bg-[#eee7dc] px-5 py-12 sm:px-8 sm:py-16 lg:py-12">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[1.5rem] border border-primary/10 bg-[#f8f5ef] lg:grid lg:h-[min(780px,calc(100vh-48px))] lg:min-h-[680px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[480px] overflow-hidden bg-[#e9e0d6] lg:min-h-0">
          <img src="/complete-ritual.png" alt="The complete Hair and Skin Ritual" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute left-5 top-5 rounded-full bg-[#dbece7] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-primary sm:left-8 sm:top-8">✦ September offer</span>
        </div>

        <div className="flex items-center px-5 py-8 sm:px-9 sm:py-10 lg:overflow-y-auto lg:px-9 lg:py-7">
          <div className="w-full">
            <p className="section-kicker">September offer</p>
            <h2 className="mt-2 font-heading text-[clamp(2.8rem,3.6vw,4.3rem)] leading-[0.9] tracking-[-0.04em]">The Hair &amp; Skin Ritual</h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm"><span className="text-[#b78932]"><Stars /></span><strong>4.93</strong><span className="text-muted-foreground">Based on 1131 reviews</span></div>
            <p className="body-copy mt-4 max-w-xl">Upgrade your Rice Water Revive Duo for just £6 and get £53.99 worth of hair + skincare extras.</p>

            <div className="mt-5 space-y-2.5">
              <button onClick={() => setChoice('duo')} className={`purchase-option border lg:py-3 ${choice === 'duo' ? 'purchase-option-active' : 'border-primary/15 bg-white'}`}>
                <span className="purchase-radio"><i /></span>
                <span className="flex-1 text-left font-semibold">Shampoo + Conditioner Only</span>
                <span className="price-stack"><s>£50.00</s><strong>£39.95</strong></span>
              </button>
              <button onClick={() => setChoice('ritual')} className={`purchase-option border lg:py-3 ${choice === 'ritual' ? 'purchase-option-active' : 'border-primary/15 bg-white'}`}>
                <span className="purchase-radio"><i /></span>
                <span className="flex-1 text-left"><strong className="block">Complete Hair &amp; Skin Ritual</strong><small><span className="mr-2 rounded-full bg-primary px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-white">Best value</span>✦ Welcome kit worth £53.99 included</small></span>
                <span className="price-stack"><s>£103.99</s><strong>£45.95</strong></span>
              </button>
            </div>

            {ritual && (
              <div className="mt-3 rounded-2xl border border-primary/20 bg-white p-4 lg:p-3.5">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">Included in your Hair &amp; Skin Ritual:</p>
                {included.map(([image, name, was, price], index) => (
                  <div key={name} className={`grid grid-cols-[48px_1fr_auto] items-center gap-3 py-3 lg:grid-cols-[40px_1fr_auto] lg:py-2 ${index < included.length - 1 ? 'border-b' : ''}`}>
                    <img src={image} alt="" className="size-12 rounded-lg bg-muted object-cover lg:size-10" />
                    <span className="text-xs font-semibold leading-4 sm:text-sm">{name}</span>
                    <span className="text-right text-xs"><s className="mr-2 text-muted-foreground">{was}</s><strong>{price}</strong></span>
                  </div>
                ))}
                <div className="mt-2 grid grid-cols-2 divide-x border-t pt-3 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                  <span className="flex items-center gap-2 pr-3"><Truck className="size-3.5" /> Free UK Tracked 48 shipping</span>
                  <span className="flex items-center gap-2 pl-3"><Clock3 className="size-3.5" /> Limited time offer</span>
                </div>
              </div>
            )}

            <button onClick={addToCart} className="mt-4 min-h-[48px] w-full rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-[0.11em] text-white">
              {ritual ? 'Add Hair & Skin Ritual — £45.95' : 'Add Rice Water Revive Duo — £39.95'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const rows = [
    { label: 'Number of active & botanical ingredients', us: '16', them: 'Typically 1 or 2' },
    { label: 'Sulfates or bulk fillers', us: false, them: true },
    { label: '100% natural fragrance', us: true, them: false },
    { label: 'Suitable for all hair types', us: true, them: false },
    { label: 'Suitable for sensitive scalps', us: true, them: false },
  ];

  return (
    <section className="bg-[#f1e9dc] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1260px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">What makes us different</p>
          <h2 className="mt-4 font-heading text-[clamp(3rem,5vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">What’s the difference between us and the other brands?</h2>
        </div>
        <div className="mt-14 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div>
            <div className="aspect-[2014/1490] overflow-hidden rounded-2xl bg-[#ded7cc] lg:h-full lg:min-h-[470px] lg:aspect-auto"><img src="/terrarium.png" alt="Most shampoos compared with Miriam’s Collection" className="h-full w-full object-cover" /></div>
            <div className="-mt-5 mb-4 grid grid-cols-2 gap-2 px-3 sm:-mt-7 sm:mb-0 sm:gap-3 sm:px-6">
              <span className="relative whitespace-nowrap rounded-full bg-[#eadcc3] px-3 py-3.5 text-center text-[10px] font-bold uppercase leading-none tracking-[0.08em] sm:px-4 sm:py-3 sm:text-xs sm:tracking-wider">Most shampoos</span>
              <span className="relative whitespace-nowrap rounded-full bg-primary px-3 py-3.5 text-center text-[10px] font-bold uppercase leading-none tracking-[0.08em] text-white sm:px-4 sm:py-3 sm:text-xs sm:tracking-wider">Miriam’s Collection</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#cfc8bd] bg-[#f8f4ec]">
            <div className="grid grid-cols-[1.5fr_0.75fr_0.75fr] border-b border-[#cfc8bd] text-center text-xs font-bold uppercase tracking-widest sm:text-sm"><span className="p-5" /><span className="bg-primary p-5 text-white">Us</span><span className="bg-[#ded3bf] p-5">Them</span></div>
            {rows.map((row) => (
              <div key={row.label} className="grid min-h-[82px] grid-cols-[1.5fr_0.75fr_0.75fr] items-stretch border-b border-[#cfc8bd] last:border-0">
                <span className="flex items-center p-4 text-[15px] font-medium sm:p-5 sm:text-base">{row.label}</span>
                {[row.us, row.them].map((value, index) => <span key={index} className="flex items-center justify-center border-l border-[#cfc8bd] p-3 text-center text-[15px] font-semibold sm:text-base">{typeof value === 'string' ? value : value ? <Check className="size-7 rounded-full border border-primary p-1" /> : <X className="size-7 rounded-full border border-primary p-1" />}</span>)}
              </div>
            ))}
          </div>
        </div>
        <SlideUp className="mt-12">
          <div className="border border-[#d8d1c5] bg-[#f8f4ec] px-4 py-10 sm:px-8 sm:py-12">
            <h3 className="text-center font-heading text-[clamp(2rem,3vw,3rem)] leading-tight">Our 16 active &amp; botanical ingredients</h3>
            <div className="mt-10 grid grid-cols-4 gap-x-3 gap-y-10 lg:grid-cols-8 lg:gap-x-5">
              {ingredientIcons.map((ingredient) => (
                <div key={ingredient.name} className="flex min-w-0 flex-col items-center text-center">
                  <img src={ingredient.image} alt="" className="size-14 object-contain sm:size-16" />
                  <span className="mt-4 text-[11px] font-medium leading-tight tracking-[0.02em] sm:text-sm">{ingredient.name}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
        <div className="mt-10 overflow-hidden rounded-[2rem] bg-primary text-white shadow-[0_24px_70px_rgb(19_67_59/12%)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="flex items-end border-b border-white/15 px-7 py-9 sm:px-10 sm:py-12 lg:min-h-[290px] lg:border-b-0 lg:border-r lg:px-12">
              <strong className="font-heading text-[clamp(3.25rem,5vw,5.75rem)] leading-[0.86] tracking-[-0.045em]">We’re<br className="hidden lg:block" /> different.</strong>
            </div>
            <div className="flex flex-col justify-between px-7 py-9 sm:px-10 sm:py-12 lg:px-14">
              <div className="max-w-2xl">
                <p className="text-lg font-semibold leading-7 sm:text-xl sm:leading-8">Pick up your current bottle... we bet it has 1 or 2 hero ingredients - Argan Oil, Keratin?</p>
                <p className="body-copy mt-5 max-w-xl text-white/72">Plastered across the front to make you think you’re getting more of the good stuff than you actually are.</p>
              </div>
              <a href="/products/rice-water-revive-duo" className="group mt-9 inline-flex w-fit items-center gap-4 rounded-full bg-[#d4ae67] px-7 py-4 text-xs font-bold uppercase tracking-widest text-primary transition-transform hover:-translate-y-0.5">
                Shop now
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IngredientGallery() {
  const [selectedIngredient, setSelectedIngredient] = useState<(typeof ingredientCards)[number] | null>(null);

  return (
    <>
      <section id="ingredients" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1380px]">
          <SlideUp>
            <p className="section-kicker">Inside the formula</p>
            <h2 className="mt-4 font-heading text-[clamp(3rem,5vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">We use 16 hero ingredients..</h2>
            <p className="mt-4 text-lg">because why settle for just 1 or 2?</p>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
              {ingredientCards.map((ingredient) => (
                <article key={ingredient.name}>
                  <button type="button" onClick={() => setSelectedIngredient(ingredient)} className="group block w-full text-left">
                    <span className="block overflow-hidden rounded-xl bg-[#f1f0ed]">
                      <img src={ingredient.image} alt={ingredient.name} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                    </span>
                    <span className="mt-3 flex items-center justify-between gap-3">
                      <span className="font-heading text-xl sm:text-2xl">{ingredient.name}</span>
                      <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-primary group-hover:text-white"><Plus className="size-4" /></span>
                    </span>
                  </button>
                </article>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>

      <Sheet open={Boolean(selectedIngredient)} onOpenChange={(open) => { if (!open) setSelectedIngredient(null); }}>
        <SheetContent className="w-[94vw] overflow-y-auto bg-[#fbfaf6] p-0 sm:max-w-[560px]">
          {selectedIngredient && (
            <>
              <div className="aspect-[4/3] overflow-hidden bg-[#f0eee8]">
                <img src={selectedIngredient.image} alt={selectedIngredient.name} className="h-full w-full object-cover" />
              </div>
              <div className="px-7 py-10 sm:px-10 sm:py-12">
                <p className="section-kicker">Inside the formula</p>
                <SheetHeader className="mt-4 p-0 text-left">
                  <SheetTitle className="font-heading text-[clamp(3.2rem,7vw,5.4rem)] leading-[0.9] tracking-[-0.04em]">{selectedIngredient.name}</SheetTitle>
                  <SheetDescription className="body-copy mt-6 text-[#40534f]">{selectedIngredient.description}</SheetDescription>
                </SheetHeader>
                <div className="mt-10 border-y border-primary/15">
                  <div className="py-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">What it helps with</p>
                    <p className="body-copy mt-3 font-semibold text-primary">{selectedIngredient.helps}</p>
                  </div>
                  <div className="border-t border-primary/15 py-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">The Science</p>
                    <p className="body-copy mt-3 text-[#40534f]">{selectedIngredient.science}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Found in</p>
                  <a href="/products/rice-water-revive-duo" className="mt-3 inline-flex items-center gap-3 font-heading text-2xl">The Rice Water Revive Duo <ArrowRight className="size-4" /></a>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <section className="bg-[#dceae6] px-5 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="section-kicker">Shop the collection</p>
          <h2 className="mt-3 font-heading text-[clamp(2.9rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.04em]">Elevate your everyday.</h2>
        </div>
        <div>
          <p className="body-copy max-w-xl text-[#33514b]">Join for haircare tips, exclusive offers and insider access to the world of Miriam's Collection.</p>
          {subscribed ? (
            <div className="mt-6 flex items-center gap-3 rounded-full border border-primary/20 bg-white/70 px-5 py-4 text-sm font-semibold"><Check className="size-4" /> Welcome to the circle — check your inbox.</div>
          ) : (
            <form className="mt-6 flex flex-col gap-3 sm:flex-row" onSubmit={(event) => { event.preventDefault(); setSubscribed(true); }}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" required type="email" placeholder="Your email address" className="min-h-12 flex-1 rounded-full border border-primary/25 bg-white px-5 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              <button className="min-h-12 rounded-full bg-primary px-7 text-xs font-bold uppercase tracking-widest text-white">Join the list</button>
            </form>
          )}
          <p className="mt-3 text-[10px] leading-4 text-muted-foreground">By joining, you agree to receive Miriam’s Collection emails. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary px-5 pb-8 pt-14 text-primary-foreground sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-[1340px] gap-12 border-b border-white/18 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a href="/" aria-label="Miriam's Collection home" className="inline-flex">
            <img src="/miriams-logo-2026.svg" alt="Miriam's Collection" className="h-28 w-28 object-contain brightness-0 invert sm:h-32 sm:w-32" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">Heritage-inspired.<br />Botanically elevated. 🌾</p>
          <div className="mt-6 flex gap-3">
            <a className="social-button" href="https://www.instagram.com/miriamscollectionuk/" target="_blank" rel="noreferrer" aria-label="Instagram"><Camera /></a>
            <a className="social-button" href="https://www.tiktok.com/@miriamscollectionuk" target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 /></a>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Shop</h3>
          <a className="footer-link" href="/#shop">All products</a>
          <a className="footer-link" href="/hair">Hair</a>
          <a className="footer-link" href="/face">Face</a>
          <a className="footer-link" href="/skin">Skin</a>
          <a className="footer-link" href="/men">Men</a>
          <a className="footer-link" href="/sets">Sets</a>
        </div>
        <div>
          <h3 className="footer-heading">Discover</h3>
          <a className="footer-link" href="/our-story">Our story</a>
          <a className="footer-link" href="/#why-rice-water">Why rice water</a>
          <a className="footer-link" href="/#results">Customer results</a>
          <a className="footer-link" href="https://www.miriamscollection.co.uk/pages/wholesale">Become a stockist</a>
        </div>
        <div>
          <h3 className="footer-heading">Help</h3>
          <a className="footer-link" href="/#faqs">FAQs</a>
          <a className="footer-link" href="https://www.miriamscollection.co.uk/pages/contact">Contact us</a>
          <a className="footer-link" href="https://www.miriamscollection.co.uk/pages/shipping-and-returns">Shipping & returns</a>
          <a className="footer-link" href="mailto:hello@miriamscollection.co.uk">hello@miriamscollection.co.uk</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1340px] flex-col gap-3 pt-6 text-[10px] uppercase tracking-widest text-white/50 sm:flex-row sm:justify-between">
        <p>© 2026 Miriam’s Collection</p><p>United Kingdom · GBP £</p>
      </div>
    </footer>
  );
}

function LegacyHomeStorefront() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = () => {
    setCartCount((count) => count + 1);
    setCartOpen(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <CartPanel open={cartOpen} setOpen={setCartOpen} count={cartCount} />

      <section id="top" className="grid min-h-[690px] bg-primary text-primary-foreground lg:grid-cols-[52%_48%]">
        <div className="relative order-2 flex items-center px-6 py-14 sm:px-12 lg:order-1 lg:px-[max(48px,8vw)] lg:py-20">
          <div className="absolute -left-20 top-16 size-72 rounded-full border border-white/10" aria-hidden="true" />
          <div className="relative max-w-[660px]">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#c2dbd4]">Heritage-inspired. Botanically elevated.</p>
            <h1 className="font-heading text-[clamp(3.4rem,6.6vw,7.4rem)] leading-[0.87] tracking-[-0.045em]">Your wash day,<br /><em className="font-normal text-[#c2dbd4]">reimagined.</em></h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/78 sm:text-lg">Sulfate-free haircare powered by 65%+ real rice water and 16 active botanicals — made for stronger, softer, healthier-looking hair at every age.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#shop" className="cta cta-light">Shop the ritual <ArrowRight /></a>
              <a href="#why-rice-water" className="cta cta-ghost">Discover why it works</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-xs font-medium uppercase tracking-[0.1em] text-white/75">
              <span>✓ Sulfate free</span><span>✓ All hair types</span><span>✓ Sensitive scalps</span>
            </div>
          </div>
        </div>
        <div className="relative order-1 min-h-[520px] overflow-hidden lg:order-2 lg:min-h-full">
          <img src="/hero-ritual.png" alt="Woman using Miriam's rice water shampoo outdoors" className="absolute inset-0 h-full w-full object-cover object-[62%_62%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
          <a href="/products/rice-water-revive-duo" className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-2xl border border-white/25 bg-black/20 p-4 text-white backdrop-blur-sm transition-colors hover:bg-black/30 sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">The everyday ritual</p><p className="mt-1 font-heading text-2xl">Rice Water Revive Duo</p></div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#143f38]">£39.95</span>
          </a>
        </div>
      </section>

      <section className="border-b border-border bg-[#f7f4ee] px-5 py-6 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">As seen in</p>
        <div className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-10 text-2xl text-[#263b36] sm:gap-20 sm:text-3xl"><span className="font-heading italic">Vogue</span><span className="font-bold tracking-[-0.08em]">GQ</span><span className="font-heading">Tatler</span></div>
      </section>

      <section id="shop" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1340px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="section-kicker">The collection</p><h2 className="section-title mt-3">Start with your everyday.</h2></div>
            <p className="body-copy max-w-md text-muted-foreground">Hard-working hair and skincare for the steps you already take — now with subscribe & save across the routine.</p>
          </div>
          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <ProductCard key={product.name} product={product} addToCart={addToCart} />)}
          </div>
        </div>
      </section>

      <section className="mx-5 overflow-hidden rounded-[1.6rem] bg-[#ddece8] sm:mx-8 lg:mx-auto lg:grid lg:max-w-[1340px] lg:grid-cols-2">
        <div className="aspect-square overflow-hidden lg:aspect-auto">
          <img src="/close-up.png" alt="Miriam's Rice Water Shampoo and Conditioner" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center px-7 py-14 sm:px-14 sm:py-20 lg:px-20">
          <div>
            <p className="section-kicker">One formula, every hair type</p>
            <h2 className="mt-4 font-heading text-[clamp(3rem,5.2vw,5.5rem)] leading-[0.93] tracking-[-0.045em]">Clean hair is only the beginning.</h2>
            <p className="body-copy mt-7 max-w-xl text-[#35544e]">Traditional shampoos are designed to clean. But shampoo is something you use again and again — so why waste the opportunity? Miriam’s turns every shower into a strengthening, scalp-caring ritual.</p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-y border-primary/15 py-7 text-sm">
              <p><strong className="block font-heading text-3xl">65%+</strong> real rice water</p>
              <p><strong className="block font-heading text-3xl">16</strong> active botanicals</p>
              <p><strong className="block font-heading text-3xl">0</strong> sulfates</p>
              <p><strong className="block font-heading text-3xl">All</strong> hair types</p>
            </div>
            <a href="/products/rice-water-revive-duo" className="cta cta-dark mt-8">Meet the duo <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section id="why-rice-water" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-3xl text-center"><p className="section-kicker">The art of rice water</p><h2 className="section-title mt-4">A centuries-old ritual, made effortless.</h2><p className="body-copy mx-auto mt-6 max-w-2xl text-muted-foreground">Naturally rich in amino acids, vitamins and minerals, rice water has been used across Asia for generations. Miriam’s builds it into the products you already use every wash.</p></div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            {[
              ['01', 'Steeped', 'Pure rice is carefully steeped so its naturally occurring nutrients infuse the water.'],
              ['02', 'Elevated', 'Rice water becomes the base, then biotin, keratin, caffeine and botanicals are layered in.'],
              ['03', 'Made everyday', 'The ritual lives inside your shampoo and conditioner — no extra step, no extra fuss.'],
            ].map(([number, title, body]) => (
              <article key={number} className="relative border-t border-primary/25 pt-7">
                <span className="font-heading text-5xl text-[#8baaa2]">{number}</span>
                <h3 className="mt-8 font-heading text-3xl">{title}</h3>
                <p className="body-copy mt-3 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><p className="section-kicker text-[#b8d5cd]">More than a hero ingredient</p><h2 className="mt-4 font-heading text-[clamp(3.2rem,5.5vw,6rem)] leading-[0.9] tracking-[-0.045em]">Every ingredient earns its place.</h2><p className="body-copy mt-6 max-w-lg text-white/72">No bulk fillers and no one-ingredient marketing story. Every formula combines the rice water base with carefully chosen actives and botanicals.</p></div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/18 sm:grid-cols-4">
            {['Rice water', 'Biotin', 'Keratin', 'Caffeine', 'Rosemary', 'Coconut oil', 'Aloe', 'Pro-vitamin B5'].map((ingredient, index) => (
              <div key={ingredient} className="flex min-h-32 flex-col justify-between bg-primary p-5 transition-colors hover:bg-[#1d4a42]"><span className="font-heading text-2xl text-[#cce1db]">{String(index + 1).padStart(2, '0')}</span><span className="text-xs font-bold uppercase tracking-widest">{ingredient}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1260px]">
          <div className="flex items-end justify-between gap-8"><div><p className="section-kicker">Different hair. Shared results.</p><h2 className="section-title mt-4">Real rituals, real words.</h2></div><div className="hidden text-right text-sm sm:block"><Stars /><p className="mt-2 text-muted-foreground">4.79 from 3,300 reviews</p></div></div>
          <Carousel className="mt-12" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-5">
              {reviews.map((review) => (
                <CarouselItem key={review.tag} className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3">
                  <article className="flex min-h-[390px] flex-col rounded-2xl border bg-white p-7 sm:p-9"><div className="flex items-start justify-between gap-5"><img src={review.image} alt={`${review.name}'s ${review.tag.toLowerCase()} results`} className="size-20 rounded-2xl object-cover object-top" /><div className="text-right"><Stars /><span className="mt-3 block text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Verified</span></div></div><blockquote className="mt-7 flex-1 font-heading text-[1.65rem] leading-[1.1] tracking-[-0.02em]">“{review.quote}”</blockquote><div className="mt-7 border-t pt-5"><p className="text-xs font-bold uppercase tracking-widest">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">For {review.tag.toLowerCase()}</p></div></article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 size-10 bg-white shadow-sm sm:-left-5" />
            <CarouselNext className="-right-3 size-10 bg-white shadow-sm sm:-right-5" />
          </Carousel>
        </div>
      </section>

      <section id="story" className="grid bg-[#e9e1d6] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]"><img src="/editorial.png" alt="Miriam's rice water shampoo in an everyday setting" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /><span className="absolute bottom-7 left-7 rounded-full border border-white/30 bg-black/15 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur">From one personal journey to thousands of wash days</span></div>
        <div className="flex items-center px-7 py-16 sm:px-16 lg:px-[7vw]">
          <div><p className="section-kicker">A note from Miriam</p><h2 className="mt-4 font-heading text-[clamp(3.3rem,5.5vw,6.2rem)] leading-[0.88] tracking-[-0.045em]">I wanted everyday care to feel like real care.</h2><div className="body-copy mt-8 space-y-5 text-[#40534f]"><p>Miriam’s Collection began with my own struggles with thinning, frizz, dryness and heat damage. After years of experimenting, I found my way back to rice water — a ritual trusted for generations.</p><p>We realised the simplest step to healthier-looking hair is a good shampoo. Oiling can help, but it asks for time and consistency. We all shower. So we made that familiar step work harder.</p></div><p className="mt-8 font-heading text-3xl italic">Miriam Ahmad</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Founder, Miriam’s Collection</p><a href="https://www.tiktok.com/@miriamscollectionuk" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest">Follow Miriam on TikTok <ArrowRight className="size-4" /></a></div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1340px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">From your camera rolls</p><h2 className="section-title mt-4">Rice water rituals, shared by you.</h2></div><div className="flex gap-3"><a href="https://www.instagram.com/miriamscollectionuk/" target="_blank" rel="noreferrer" className="social-pill"><Camera /> Instagram</a><a href="https://www.tiktok.com/@miriamscollectionuk" target="_blank" rel="noreferrer" className="social-pill"><Music2 /> TikTok</a></div></div>
          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {socialTiles.map((tile) => (
              <a key={tile.label} href={tile.network === 'TikTok' ? 'https://www.tiktok.com/@miriamscollectionuk' : 'https://www.instagram.com/miriamscollectionuk/'} target="_blank" rel="noreferrer" className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted"><img src={tile.image} alt={`${tile.label} customer result`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5" /><span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm sm:left-5 sm:top-5"><Play className="ml-0.5 size-4 fill-current" /></span><div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6"><p className="text-[9px] font-bold uppercase tracking-widest text-white/65">Watch on {tile.network}</p><p className="mt-1 font-heading text-xl sm:text-2xl">{tile.label}</p></div></a>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="border-t px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-kicker">Need to know</p><h2 className="section-title mt-4">A little clarity goes a long way.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Can’t find what you need? <a href="https://www.miriamscollection.co.uk/pages/contact" className="underline underline-offset-4">Contact us</a> and the team will help.</p></div>
          <Accordion className="border-t">
            {faqs.map((faq) => <AccordionItem key={faq.q} value={faq.q} className="border-b"><AccordionTrigger className="rounded-none py-6 font-heading text-xl hover:no-underline sm:text-2xl">{faq.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}

export function HomeStorefront() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = () => {
    setCartCount((count) => count + 1);
    setCartOpen(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} transparent />
      <CartPanel open={cartOpen} setOpen={setCartOpen} count={cartCount} />

      <section id="top" className="relative h-[calc(100svh-164px)] max-h-[744px] overflow-hidden bg-[#0d2f29] sm:h-[calc(100svh-208px)] sm:max-h-[720px]">
        <img src="/hero-current.png" alt="Woman using Miriam's Rice Water Shampoo outdoors" className="absolute inset-0 h-full w-full object-cover object-[68%_65%] sm:object-[66%_48%] lg:object-[64%_46%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102c26]/78 via-[#102c26]/22 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1480px] items-end px-5 py-5 sm:items-center sm:px-8 sm:py-9 lg:px-14">
          <div className="home-hero-card max-w-[520px] rounded-[1.5rem] border border-white/30 bg-white/[0.16] p-4 text-white shadow-[0_28px_90px_rgb(0_0_0/28%)] backdrop-blur-[28px] sm:p-8 lg:p-9">
            <p className="hidden text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 sm:block">★ 4.79 from 3,300 reviews</p>
            <h1 className="mt-3 font-heading text-[clamp(2.2rem,5vw,5rem)] leading-[0.9] tracking-[-0.045em]">Your shampoo could be doing so much more.</h1>
            <p className="hero-support mt-4 max-w-md text-base leading-7 text-white/[0.86] sm:text-[17px]">Meet the shampoo and conditioner that do more than clean.</p>
            <a href="/products/rice-water-revive-duo" className="cta mt-5 border-[#dbe7df] bg-[#dbe7df] text-primary hover:bg-white sm:mt-6">Shop Now <ArrowRight /></a>
          </div>
        </div>
      </section>

      <PressStrip />
      <OfferBundle addToCart={addToCart} />

      <section id="shop" className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="section-kicker">Shop all products</p><h2 className="section-title mt-3">Choose your ritual.</h2></div>
            <a href="/sets" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">Shop bundles <ChevronRight className="size-4" /></a>
          </div>
          <div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <ProductCard key={product.name} product={product} addToCart={addToCart} />)}
          </div>
        </div>
      </section>

      <section id="why-rice-water" className="grid bg-[#dceae6] lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]"><img src="/close-up.png" alt="Miriam's Rice Water Shampoo and Conditioner" className="absolute inset-0 h-full w-full object-cover" /></div>
        <div className="flex items-center px-7 py-16 sm:px-14 lg:px-[7vw]">
          <div>
            <p className="section-kicker">Why Rice Water?</p>
            <h2 className="mt-4 font-heading text-[clamp(3.2rem,5.2vw,6rem)] leading-[0.9] tracking-[-0.045em]">Naturally rich in amino acids, vitamins and minerals.</h2>
            <p className="body-copy mt-7 max-w-xl text-[#35544e]">It’s been used for centuries across Asia for stronger, healthier hair. So we built it into the products you already use every wash.</p>
            <a href="/products/rice-water-revive-duo" className="cta cta-dark mt-8">Shop the Rice Water Shampoo &amp; Conditioner <ArrowRight /></a>
          </div>
        </div>
      </section>

      <ComparisonSection />
      <IngredientGallery />

      <section id="results" className="bg-[#f7f4ee] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1260px]">
          <div className="flex items-end justify-between gap-8"><div><p className="section-kicker">★ 4.79 from 3200 reviews</p><h2 className="section-title mt-4">Different hair.<br />Different reasons for loving it.</h2></div><div className="hidden text-right text-sm sm:block"><Stars /><p className="mt-2 text-muted-foreground">Verified customer reviews</p></div></div>
          <Carousel className="mt-12" opts={{ align: 'start', loop: true }}>
            <CarouselContent className="-ml-5">
              {reviews.map((review) => (
                <CarouselItem key={review.tag} className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3">
                  <article className="flex min-h-[390px] flex-col rounded-2xl border bg-white p-7 sm:p-9"><div className="flex items-start justify-between gap-5"><img src={review.image} alt={`${review.name}'s ${review.tag.toLowerCase()} results`} className="size-20 rounded-2xl object-cover object-top" /><div className="text-right"><Stars /><span className="mt-3 block text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Verified</span></div></div><blockquote className="mt-7 flex-1 font-heading text-[1.65rem] leading-[1.1] tracking-[-0.02em]">“{review.quote}”</blockquote><div className="mt-7 border-t pt-5"><p className="text-xs font-bold uppercase tracking-widest">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">For {review.tag.toLowerCase()}</p></div></article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 size-10 bg-white shadow-sm sm:-left-5" />
            <CarouselNext className="-right-3 size-10 bg-white shadow-sm sm:-right-5" />
          </Carousel>
        </div>
      </section>

      <section className="bg-primary px-5 py-14 text-white sm:px-8 sm:py-20 lg:py-[88px]">
        <div className="mx-auto grid max-w-[1380px] gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))] lg:gap-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="font-heading text-[clamp(3rem,4.1vw,4.7rem)] leading-[0.9] tracking-[-0.04em]">Haircare, made differently.</h2>
            <p className="body-copy mt-7 max-w-md text-white/85">We believe your wash day should do more than simply cleanse your hair. So we create formulas designed to turn everyday products into <strong className="text-white">real haircare.</strong></p>
          </div>
          {[
            ['/haircare-value-ingredients.png', 'More than hero ingredients', 'We don’t formulate around one or two ingredients just so they can sit on the front of the bottle. We use carefully selected ingredients that actually do something.'],
            ['/haircare-value-generations.png', 'Inspired by generations', 'From rice water to rosemary, we take inspiration from ingredients and rituals that have been used in haircare for generations — and reimagine them for your routine today.'],
            ['/haircare-value-everyday.png', 'Everyday care, elevated', 'Shampoo and conditioner are the two products almost everyone uses. We believe they should be some of the hardest-working formulas in your routine.'],
          ].map(([icon, title, body]) => (
            <article key={title} className="border-t border-white/20 pt-7 lg:border-0 lg:pt-0">
              <img src={icon} alt="" className="size-[58px] object-contain" />
              <h3 className="mt-5 font-heading text-[1.8rem] leading-[1.08]">{title}</h3>
              <p className="body-copy mt-4 text-white/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="grid bg-[#e9e1d6] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]"><img src="/editorial.png" alt="Miriam's rice water shampoo in an everyday setting" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" /></div>
        <div className="flex items-center px-7 py-16 sm:px-16 lg:px-[7vw]">
          <div><p className="section-kicker">My journey</p><h2 className="mt-4 font-heading text-[clamp(3.3rem,5.5vw,6.2rem)] leading-[0.88] tracking-[-0.045em]">Miriam’s Collection.</h2><div className="body-copy mt-8 space-y-5 text-[#40534f]"><p>Miriam’s Collection was born from a desire to overcome personal struggles with hair thinning, frizz, dryness and heat damage. After years of experimenting with various remedies, Miriam discovered the nourishing properties of Rice Water.</p><p>We’re on a mission to give you luxurious, science-backed products that genuinely work—without overcomplicating your self-care routine or adding unnecessary fuss. If you’re looking for thicker, healthier hair and brighter, younger skin, look no further. We’ve got you covered.</p></div><a href="/our-story" className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-1 text-xs font-bold uppercase tracking-widest">Read my story <ArrowRight className="size-4" /></a></div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">From your camera rolls</p><h2 className="section-title mt-4">Rice Water Rituals, Shared By You.</h2></div><div className="flex gap-3"><a href="https://www.instagram.com/miriamscollectionuk/" target="_blank" rel="noreferrer" className="social-pill"><Camera /> Instagram</a><a href="https://www.tiktok.com/@miriamscollectionuk" target="_blank" rel="noreferrer" className="social-pill"><Music2 /> TikTok</a></div></div>
          <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {socialTiles.map((tile) => (
              <a key={tile.label} href={tile.network === 'TikTok' ? 'https://www.tiktok.com/@miriamscollectionuk' : 'https://www.instagram.com/miriamscollectionuk/'} target="_blank" rel="noreferrer" className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted"><img src={tile.image} alt={`${tile.label} customer result`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/5" /><span className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-sm sm:left-5 sm:top-5"><Play className="ml-0.5 size-4 fill-current" /></span><div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-6"><p className="text-[9px] font-bold uppercase tracking-widest text-white/65">Watch on {tile.network}</p><p className="mt-1 font-heading text-xl sm:text-2xl">{tile.label}</p></div></a>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="border-t px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-kicker">FAQs</p><h2 className="section-title mt-4">Everything you need to know.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">Can’t find what you need? <a href="https://www.miriamscollection.co.uk/pages/contact" className="underline underline-offset-4">Contact us</a> and the team will help.</p></div>
          <Accordion className="border-t">{faqs.map((faq) => <AccordionItem key={faq.q} value={faq.q} className="border-b"><AccordionTrigger className="rounded-none py-6 font-heading text-xl hover:no-underline sm:text-2xl">{faq.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 text-base leading-7 text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
}

export function CategoryStorefront({ category }: { category: CategoryKey }) {
  const content = categoryContent[category];
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const addToCart = () => { setCartCount((count) => count + 1); setCartOpen(true); };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <CartPanel open={cartOpen} setOpen={setCartOpen} count={cartCount} />
      <section className="grid min-h-[600px] bg-[#dceae6] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 flex items-center px-7 py-16 sm:px-14 lg:order-1 lg:px-[8vw]">
          <div><p className="section-kicker">{content.eyebrow}</p><h1 className="mt-4 font-heading text-[clamp(4rem,7vw,8rem)] leading-[0.86] tracking-[-0.05em]">{content.title}</h1><p className="body-copy mt-7 max-w-xl text-[#35544e]">{content.copy}</p><a href="#collection" className="cta cta-dark mt-8">Shop the collection <ArrowRight /></a></div>
        </div>
        <div className="relative order-1 min-h-[460px] overflow-hidden lg:order-2"><img src={content.image} alt={`${category} collection`} className="absolute inset-0 h-full w-full object-cover" /></div>
      </section>
      <PressStrip />
      {category === 'sets' && <OfferBundle addToCart={addToCart} />}
      <section id="collection" className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1380px]"><p className="section-kicker">Shop {category}</p><h2 className="section-title mt-4">The collection.</h2><div className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{content.products.map((product) => <ProductCard key={product.name} product={product} addToCart={addToCart} />)}</div></div></section>
      {(category === 'hair' || category === 'men') && <ComparisonSection />}
      {(category === 'hair' || category === 'sets') && <IngredientGallery />}
      <Newsletter />
      <Footer />
    </main>
  );
}

export function StoryStorefront() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const storyChapters = [
    {
      number: '01',
      eyebrow: 'The beginning',
      title: 'A search for healthier hair.',
      copy: [
        'Miriam’s Collection was born from a desire to overcome personal struggles with hair thinning, frizz, dryness and heat damage.',
        'Like so many people, Miriam had spent years experimenting with different remedies, trying to find something that could make everyday haircare feel simpler and more effective.',
      ],
      image: '/hero-ritual.png',
      alt: 'A woman using Miriam’s Rice Water Shampoo as part of her wash-day ritual',
    },
    {
      number: '02',
      eyebrow: 'The discovery',
      title: 'It started with rice water.',
      copy: [
        'After years of experimenting with various remedies, Miriam discovered the nourishing properties of Rice Water.',
        'With a commitment to real results, we set out to create a range to help others regain their confidence, harnessing the transformative power of Rice Water.',
      ],
      image: '/close-up.png',
      alt: 'Miriam’s Rice Water Shampoo and Conditioner',
    },
    {
      number: '03',
      eyebrow: 'The first formula',
      title: 'Every wash became an opportunity.',
      copy: [
        'We realised the simplest step to healthier hair is a good shampoo. Oiling has its benefits, but it requires time and consistency, something many of us can’t always commit to.',
        'But we all shower. So creating a shampoo that truly cares for your hair made perfect sense.',
      ],
      image: '/editorial.png',
      alt: 'Miriam’s Rice Water Shampoo ready for an everyday routine',
    },
    {
      number: '04',
      eyebrow: 'The collection grows',
      title: 'From healthy hair to radiant skin.',
      copy: [
        'As we built our customer base, we connected with people looking for solutions to a variety of skin concerns, especially in the UK’s moisture-stripping weather.',
        'So, we took it a step further—incorporating our Rice Water formulations into high-quality skincare products. And it paid off.',
      ],
      image: '/skincare-duo.jpg',
      alt: 'Miriam’s Rice Water Cleanser and Face Cream',
    },
    {
      number: '05',
      eyebrow: 'Today',
      title: 'A ritual shared by thousands.',
      copy: [
        'We’ve rapidly built a loyal community of customers who swear by our products for results.',
        'Our mission remains the same: luxurious, science-backed products that genuinely work—without overcomplicating your self-care routine or adding unnecessary fuss.',
      ],
      image: '/complete-ritual.png',
      alt: 'The complete Miriam’s Collection hair and skincare ritual',
    },
  ];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <CartPanel open={cartOpen} setOpen={setCartOpen} count={cartCount} />
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden sm:min-h-[780px] lg:min-h-[calc(100svh-72px)]">
        <img src="/editorial.png" alt="Miriam’s Rice Water Shampoo in an everyday setting" className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2924]/80 via-[#0d2924]/15 to-black/5" />
        <div className="relative w-full px-5 pb-8 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
          <div className="max-w-[760px] rounded-[1.75rem] border border-white/25 bg-white/15 p-6 text-white shadow-2xl backdrop-blur-xl sm:p-9 lg:p-11">
            <p className="section-kicker text-white/75">My journey</p>
            <h1 className="mt-4 font-heading text-[clamp(3.6rem,7vw,7.6rem)] leading-[0.86] tracking-[-0.05em]">The story behind Miriam’s Collection.</h1>
            <p className="body-copy mt-6 max-w-2xl text-white/85">It began with a personal search for healthier hair and grew into everyday rituals designed to help others feel confident too.</p>
            <a href="#story-timeline" className="cta cta-light mt-7">Read the story <ArrowRight className="rotate-90" /></a>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-20 text-white sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="section-kicker text-[#bad6ce]">Told by Miriam</p>
            <p className="mt-3 text-sm text-white/55">Founder, Miriam’s Collection</p>
          </div>
          <blockquote className="font-heading text-[clamp(2.5rem,5vw,5.3rem)] leading-[0.98] tracking-[-0.035em]">“I wanted the products we use every day to do more for our hair and skin.”</blockquote>
        </div>
      </section>

      <section id="story-timeline" className="bg-[#f3ede4] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-[1380px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">How it all began</p>
            <h2 className="section-title mt-4">From one personal journey to thousands of wash days.</h2>
          </div>

          <div className="relative mt-20 sm:mt-28">
            <div className="absolute bottom-0 left-[23px] top-0 w-px bg-primary/20 lg:left-1/2" aria-hidden="true" />
            <div className="space-y-20 sm:space-y-28 lg:space-y-36">
              {storyChapters.map((chapter, index) => (
                <article key={chapter.number} className="relative pl-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:pl-0">
                  <span className="absolute left-0 top-1 z-10 flex size-12 items-center justify-center rounded-full border border-primary/25 bg-[#f3ede4] font-heading text-lg lg:left-1/2 lg:-translate-x-1/2">{chapter.number}</span>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="overflow-hidden rounded-[1.5rem] bg-[#ddd4c8] shadow-[0_24px_80px_rgba(22,63,56,0.08)]">
                      <img src={chapter.image} alt={chapter.alt} className={`w-full object-cover ${index === 0 ? 'aspect-[4/5] object-[66%_center]' : 'aspect-[5/4]'}`} />
                    </div>
                  </div>
                  <div className={`mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                    <p className="section-kicker">{chapter.eyebrow}</p>
                    <h3 className="mt-4 max-w-xl font-heading text-[clamp(2.8rem,4.8vw,5.4rem)] leading-[0.94] tracking-[-0.04em]">{chapter.title}</h3>
                    <div className="body-copy mt-7 max-w-xl space-y-5 text-[#40534f]">
                      {chapter.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#dceae6] px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div><p className="section-kicker">Our mission</p><h2 className="mt-4 font-heading text-[clamp(3.4rem,6vw,6.6rem)] leading-[0.9] tracking-[-0.045em]">Real results. No unnecessary fuss.</h2></div>
          <div><p className="body-copy max-w-2xl text-[#40534f]">We’re on a mission to give you luxurious, science-backed products that genuinely work—without overcomplicating your self-care routine. If you’re looking for thicker, healthier hair and brighter, younger skin, look no further. We’ve got you covered.</p><a href="/#shop" className="cta cta-dark mt-8">Shop the collection <ArrowRight /></a></div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-[1380px]"><p className="section-kicker">Rice Water Rituals, Shared By You.</p><h2 className="section-title mt-4">The story continues with you.</h2><div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">{socialTiles.map((tile) => <a key={tile.label} href={tile.network === 'TikTok' ? 'https://www.tiktok.com/@miriamscollectionuk' : 'https://www.instagram.com/miriamscollectionuk/'} target="_blank" rel="noreferrer" className="group relative aspect-[3/4] overflow-hidden rounded-2xl"><img src={tile.image} alt={`${tile.label} customer result`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><span className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white text-primary"><Play className="size-4 fill-current" /></span><p className="absolute bottom-5 left-5 font-heading text-2xl text-white">{tile.label}</p></a>)}</div><div className="mt-9 flex flex-wrap gap-3"><a href="https://www.tiktok.com/@miriamscollectionuk" target="_blank" rel="noreferrer" className="social-pill"><Music2 /> Follow on TikTok</a><a href="https://www.instagram.com/miriamscollectionuk/" target="_blank" rel="noreferrer" className="social-pill"><Camera /> Follow on Instagram</a></div></div></section>
      <Newsletter />
      <Footer />
    </main>
  );
}

export function ProductDetail() {
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [plan, setPlan] = useState<'subscribe' | 'once'>('subscribe');
  const [quantity, setQuantity] = useState(1);
  const [galleryApi, setGalleryApi] = useState<CarouselApi>();
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!galleryApi) return;
    const updateGalleryIndex = () => setGalleryIndex(galleryApi.selectedScrollSnap());
    updateGalleryIndex();
    galleryApi.on('select', updateGalleryIndex);
    galleryApi.on('reInit', updateGalleryIndex);
    return () => {
      galleryApi.off('select', updateGalleryIndex);
      galleryApi.off('reInit', updateGalleryIndex);
    };
  }, [galleryApi]);

  const add = () => {
    setCartCount((count) => count + quantity);
    setCartOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 md:pb-0">
      <Header cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <CartPanel open={cartOpen} setOpen={setCartOpen} count={cartCount} />

      <div className="mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12">
        <a href="/#shop" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground"><ArrowLeft className="size-3.5" /> Back to shop</a>
      </div>

      <section className="mx-auto grid max-w-[1320px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-12">
        <div className="lg:hidden">
          <p className="section-kicker">Bestselling hair ritual</p>
          <h1 className="mt-3 max-w-lg font-heading text-[clamp(2.15rem,9vw,3rem)] leading-[0.94] tracking-[-0.035em]">The Rice Water Revive Duo (Sulfate Free)</h1>
        </div>

        <div className="min-w-0 lg:sticky lg:top-6 lg:self-start">
          <Carousel setApi={setGalleryApi} opts={{ loop: true }} aria-label="Rice Water Revive Duo product gallery">
            <CarouselContent>
              {productGalleryImages.map((image, index) => (
                <CarouselItem key={image.src}>
                  <div className="aspect-square max-h-[620px] overflow-hidden rounded-2xl bg-[#e9e0d6]">
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading={index === 0 ? 'eager' : 'lazy'} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 border-0 bg-white/90 text-primary shadow-md backdrop-blur-sm hover:bg-white" />
            <CarouselNext className="right-3 border-0 bg-white/90 text-primary shadow-md backdrop-blur-sm hover:bg-white" />
          </Carousel>
          <div className="mt-3 grid grid-cols-3 gap-2" aria-label="Choose a product image">
            {productGalleryImages.map((image, index) => (
              <button key={image.src} type="button" onClick={() => galleryApi?.scrollTo(index)} aria-label={`View image ${index + 1}: ${image.alt}`} aria-current={galleryIndex === index ? 'true' : undefined} className={`overflow-hidden rounded-xl border-2 bg-[#e9e0d6] transition-opacity ${galleryIndex === index ? 'border-primary opacity-100' : 'border-transparent opacity-65 hover:opacity-100'}`}>
                <img src={image.src} alt="" className="aspect-[4/3] w-full object-cover" />
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground lg:hidden">Swipe to view all images</p>
        </div>

        <div className="lg:pt-3">
          <div className="grid grid-cols-3 gap-4 border-b pb-5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground"><span><strong className="mb-1 block text-sm text-foreground">4.79 ★</strong>3,300 reviews</span><span><strong className="mb-1 block text-sm text-foreground">65%+</strong>rice water</span><span><strong className="mb-1 block text-sm text-foreground">65k+</strong>bottles sold</span></div>
          <div className="hidden lg:block">
            <p className="section-kicker mt-7">Bestselling hair ritual</p>
            <h1 className="mt-3 max-w-3xl font-heading text-[clamp(2.8rem,3.65vw,4.25rem)] leading-[0.92] tracking-[-0.04em]">The Rice Water Revive Duo (Sulfate Free)</h1>
          </div>
          <p className="mt-6 text-lg font-semibold leading-7">Repairs Damage, Fights Frizz and Promotes Healthy Growth.</p>
          <p className="body-copy mt-2 text-muted-foreground">Powered by 65%+ real Rice Water - rich in amino acids, vitamins and minerals.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {['Sulfate Free', 'Suitable for All Hair Types', '16 Botanical and Active Ingredients'].map((item) => <li key={item} className="flex items-center gap-3"><span className="flex size-5 items-center justify-center rounded-full bg-primary text-white"><Check className="size-3" /></span>{item}</li>)}
          </ul>

          <div className="mt-8 rounded-2xl border bg-white p-2">
            <button onClick={() => setPlan('subscribe')} className={`purchase-option ${plan === 'subscribe' ? 'purchase-option-active' : ''}`}><span className="purchase-radio"><i /></span><span className="flex-1 text-left"><strong className="block">Subscribe & save 10%</strong><small>£35.96 · Pause, skip or cancel anytime</small></span><span className="price-stack"><strong>£35.96</strong><s>£39.95</s></span></button>
            <button onClick={() => setPlan('once')} className={`purchase-option ${plan === 'once' ? 'purchase-option-active' : ''}`}><span className="purchase-radio"><i /></span><span className="flex-1 text-left"><strong className="block">One-time purchase</strong><small>A single wash-day ritual</small></span><strong>£39.95</strong></button>
          </div>

          <div className="mt-4 flex gap-3">
            <div className="flex min-h-12 items-center rounded-full border bg-white px-1"><button className="p-3" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="size-3.5" /></button><span className="min-w-7 text-center text-sm font-bold">{quantity}</span><button className="p-3" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="size-3.5" /></button></div>
            <button onClick={add} className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-widest text-white">Add to bag · {plan === 'subscribe' ? '£35.96' : '£39.95'}</button>
          </div>
          <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Free UK tracked shipping · 30-day returns · Secure checkout</p>

          <div className="mt-8 rounded-2xl bg-[#dceae6] p-6"><div className="flex items-center gap-2"><Sparkles className="size-4" /><strong className="text-xs uppercase tracking-widest">What you’ll notice</strong></div><div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4"><div><strong className="timeline-time">First washes</strong><p className="timeline-copy">Softer, hydrated hair</p></div><div><strong className="timeline-time">2–4 weeks</strong><p className="timeline-copy">More shine, less frizz</p></div><div><strong className="timeline-time">Month 3</strong><p className="timeline-copy">Stronger-looking growth</p></div><div><strong className="timeline-time">Beyond</strong><p className="timeline-copy">A consistent ritual</p></div></div></div>
        </div>
      </section>

      <section className="bg-[#f3ede4] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-5xl">
            <p className="section-kicker">Inside the formula</p>
            <h2 className="mt-4 font-heading text-[clamp(3rem,5.5vw,6rem)] leading-[0.92] tracking-[-0.045em]">Here’s how the Rice Water Shampoo and Conditioner work</h2>
          </div>
          <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
            {productStoryVideos.map((item) => (
              <article key={item.number} className="min-w-[82vw] snap-start sm:min-w-0">
                <div className="aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-[#d8d2c9]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                    title={`${item.number}. ${item.title}`}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
                <div className="pt-5">
                  <p className="section-kicker">{item.number.padStart(2, '0')}</p>
                  <h3 className="mt-2 font-heading text-[1.75rem] leading-[1.05] tracking-[-0.025em]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#40534f]">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground sm:hidden">Swipe to see how the formula works <ArrowRight className="ml-2 inline size-4" /></p>
        </div>
      </section>

      <section id="ingredients" className="bg-primary px-5 py-20 text-white sm:px-8 sm:py-28"><div className="mx-auto max-w-[1180px]"><div className="mx-auto max-w-3xl text-center"><p className="section-kicker text-[#bad6ce]">Ingredients</p><h2 className="mt-4 font-heading text-[clamp(3.2rem,5.8vw,6.3rem)] leading-[0.9] tracking-[-0.045em]">We use 16 hero ingredients..</h2><p className="mt-5 text-white/70">because why settle for just 1 or 2?</p></div><div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-3"><div className="ingredient-panel"><span>01</span><h3>65% real rice water</h3><p>Other brands use water as their main ingredient. We've flipped that on its head by using 65% real rice water instead - naturally rich in vitamins, minerals and antioxidants.</p></div><div className="ingredient-panel"><span>02</span><h3>16 hero ingredients across the set</h3><p>Most Shampoo and Conditioner sets contain just 1 or 2. Let that sink in.</p></div><div className="ingredient-panel"><span>03</span><h3>No sulfates</h3><p>Sulfates strip the scalp, causing it to overproduce oil to compensate.</p></div></div></div></section>

      <section className="px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2"><div><p className="section-kicker">How to use</p><h2 className="section-title mt-4">Make every wash count.</h2><ol className="mt-9 space-y-7">{[['1', 'Cleanse', 'Massage shampoo into wet hair and scalp. Let the lather work for 1–2 minutes, then rinse well.'], ['2', 'Condition', 'Apply through mid-lengths and ends. Leave for 2–5 minutes, or longer as a nourishing mask.'], ['3', 'Repeat', 'Use consistently as your regular wash routine. The conditioner can also be used as a leave-in or curl cream.']].map(([n, title, copy]) => <li key={n} className="grid grid-cols-[42px_1fr] gap-4 border-t pt-5"><span className="font-heading text-3xl text-[#7e9f96]">{n}</span><div><strong className="font-heading text-2xl">{title}</strong><p className="mt-2 text-base leading-7 text-muted-foreground">{copy}</p></div></li>)}</ol></div><div className="overflow-hidden rounded-2xl"><img src="/hero-ritual.png" alt="Using Rice Water Shampoo as part of a wash-day ritual" className="h-full min-h-[580px] w-full object-cover object-[62%_62%]" /></div></div></section>

      <section id="product-faqs" className="border-t px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.65fr_1.35fr]"><div><p className="section-kicker">Product FAQs</p><h2 className="section-title mt-4">Everything you need to know.</h2></div><Accordion className="border-t">{faqs.map((faq) => <AccordionItem key={faq.q} value={faq.q} className="border-b"><AccordionTrigger className="rounded-none py-6 font-heading text-xl hover:no-underline sm:text-2xl">{faq.q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-6 text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="bg-[#e8eee9] px-5 py-20 sm:px-8 sm:py-24"><div className="mx-auto max-w-[1180px]"><div className="flex items-end justify-between"><div><p className="section-kicker">Complete your shelf</p><h2 className="section-title mt-4">Keep the ritual going.</h2></div><a href="/#shop" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest sm:flex">Shop all <ArrowRight className="size-4" /></a></div><div className="mt-10 grid gap-5 sm:grid-cols-3">{products.slice(1).map((product) => <ProductCard key={product.name} product={product} addToCart={add} />)}</div></div></section>

      <Newsletter />
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-[#fbfaf6]/95 px-4 py-3 shadow-[0_-8px_30px_rgb(0_0_0/8%)] backdrop-blur md:hidden"><button onClick={add} className="flex min-h-12 w-full items-center justify-between rounded-full bg-primary px-6 text-xs font-bold uppercase tracking-widest text-white"><span>Add to bag</span><span>{plan === 'subscribe' ? '£35.96' : '£39.95'}</span></button></div>
    </main>
  );
}
