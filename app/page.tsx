"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Shield,
  Zap,
  Headphones,
  ArrowRight,
  MessageSquare,
  Copy,
  ChevronDown,
  Sparkles,
  RefreshCw,
  Gift,
  ArrowLeft,
  Sun,
  Moon
} from "lucide-react";

// הסרנו את הפונט מכאן (הוא נטען עכשיו מה-Layout בצורה יעילה יותר)
const customStyles = `
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  
  body {
    overflow-x: hidden;
    max-width: 100vw;
  }
  
  img {
    -webkit-user-drag: none;
    user-drag: none;
  }
  
  .premium-grid-dark {
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.008) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.008) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, black 50%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 100%);
  }

  .premium-grid-light {
    background-image: 
      linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
    background-size: 50px 50px;
    mask-image: radial-gradient(ellipse at center, black 50%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 50%, transparent 100%);
  }
`;

function NovaXLogo({ className = "w-10 h-10", isDarkMode = true }: { className?: string, isDarkMode?: boolean }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" rx="24" fill={isDarkMode ? "white" : "black"} />
        <path
          d="M30 32C30 26.4772 34.4772 22 40 22H70V34H42C40.8954 34 40 34.8954 40 36C40 37.1046 40.8954 38 42 38H60C65.5228 38 70 42.4772 70 48C70 53.5228 65.5228 58 60 58H30V46H58C59.1046 46 60 45.1046 60 44C60 42.8954 59.1046 42 58 42H40C34.4772 42 30 37.5228 30 32Z"
          fill={isDarkMode ? "black" : "white"}
        />
        <path
          d="M30 64C30 58.4772 34.4772 54 40 54H52V66H42C40.8954 66 40 66.8954 40 68C40 69.1046 40.8954 70 42 70H60C65.5228 70 70 74.4772 70 80C70 85.5228 65.5228 90 60 90H30V78H58C59.1046 78 60 77.1046 60 76C60 74.8954 59.1046 74 58 74H40C34.4772 74 30 69.5228 30 64Z"
          fill={isDarkMode ? "black" : "white"}
        />
      </svg>
    );
  }

  return (
    <img
      src="/logo.jpeg"
      alt="NovaX Logo"
      style={{ filter: !isDarkMode ? 'invert(1)' : 'none' }}
      className={`${className} object-contain rounded-xl select-none pointer-events-none transition-all duration-300`}
      onError={() => setImgError(true)}
      draggable="false"
    />
  );
}

const packages = [
  {
    id: "starter",
    name: "חבילת התחלה",
    price: "30",
    credits: "300 קרדיטים",
    popular: false,
    features: ["300 קרדיטים מיידיים", "שימוש מיידי במערכת", "תמיכה מלאה בדיסקורד"],
  },
  {
    id: "basic",
    name: "חבילה בסיסית",
    price: "60",
    credits: "600 קרדיטים",
    popular: false,
    features: ["600 קרדיטים מיידיים", "שימוש מיידי במערכת", "תמיכה מלאה בדיסקורד"],
  },
  {
    id: "value",
    name: "חבילה משתלמת",
    price: "90",
    credits: "900 קרדיטים",
    popular: true,
    features: [
      "900 קרדיטים מיידיים",
      "שימוש מיידי במערכת",
      "תמיכת פרימיום בדיסקורד",
      "חיסכון של עד 10%",
    ],
  },
  {
    id: "advanced",
    name: "חבילה מתקדמת",
    price: "120",
    credits: "1,200 קרדיטים",
    popular: false,
    features: ["1,200 קרדיטים מיידיים", "שימוש מיידי במערכת", "תמיכה מלאה בדיסקורד"],
  },
  {
    id: "max",
    name: "חבילה מקסימלית",
    price: "180",
    credits: "1,800 קרדיטים",
    popular: false,
    features: ["1,800 קרדיטים מיידיים", "שימוש מיידי במערכת", "תמיכה מלאה בדיסקורד"],
  },
  {
    id: "lifetime",
    name: "לייפטיים קרדיטים",
    price: "220",
    credits: "קרדיטים ללא הגבלה",
    popular: true,
    features: [
      "קרדיטים לכל החיים",
      "ללא תפוגה לעולם",
      "שימוש בלתי מוגבל לחלוטין",
      "תמיכה מועדפת וראשונית",
    ],
  },
];

const features = [
  {
    title: "מהירות מטורפת",
    desc: "מנוע ספאם החזק בישראל - אלפי הודעות בדקות ספורות ללא עיכובים.",
    icon: Zap,
  },
  {
    title: "אמין ומאובטח",
    desc: "תשתית יציבה במיוחד, תשלום מאובטח ומוצפן, ודיסקרטיות מלאה מובטחת.",
    icon: Shield,
  },
  {
    title: "מותאם אישית",
    desc: "כתבו את הטקסט שלכם בדיוק כמו שאתם רוצים או בחרו מברירת המחדל.",
    icon: Sparkles,
  },
  {
    title: "פעיל 24/7",
    desc: "המערכת שלנו עובדת בצורה אוטומטית לחלוטין בכל שעות היממה ללא הפסקה.",
    icon: RefreshCw,
  },
  {
    title: "תמיכה אישית",
    desc: "צוות התמיכה המקצועי שלנו זמין עבורכם בדיסקורד ועונה בתוך דקות בודדות.",
    icon: Headphones,
  },
  {
    title: "עדכונים חינם",
    desc: "כל העדכונים, הפיצ'רים החדשים והשיפורים כלולים בחבילה שלכם ללא תשלום נוסף.",
    icon: Gift,
  },
];

const faqs = [
  {
    q: "כמה זמן לוקח לקבל את הקרדיטים?",
    a: "ברגע שהתשלום מאומת על ידי הצוות, הקרדיטים נטענים לחשבון באופן מיידי. בדרך כלל התהליך כולו לוקח מספר דקות בלבד.",
  },
  {
    q: "אילו אמצעי תשלום זמינים?",
    a: "ניתן לשלם באמצעות מגוון אמצעי תשלום בהתאם לאפשרויות הזמינות בזמן הרכישה. פרטים מלאים מופיעים בעת פתיחת טיקט.",
  },
  {
    q: "האם המידע שלי נשמר?",
    a: "אנו שואפים לשמור על פרטיות המשתמשים ולצמצם ככל האפשר איסוף מידע שאינו נדרש לצורך מתן השירות.",
  },
  {
    q: "מה ההבדל בין החבילות?",
    a: "כל חבילה כוללת כמות שונה של קרדיטים. ככל שהחבילה גדולה יותר, כך המחיר הממוצע לכל קרדיט נמוך יותר.",
  },
  {
    q: "מה עושים אם נתקלתי בבעיה?",
    a: "צוות התמיכה זמין דרך מערכת הטיקטים. ניתן לפתוח פנייה ולקבל סיוע בנושאי רכישה, טעינת קרדיטים או בעיות טכניות.",
  },
  {
    q: "איך מתחילים להשתמש במערכת?",
    a: "לאחר קבלת הקרדיטים ניתן לבחור את השירות הרצוי ולהשתמש בהם בהתאם להוראות המופיעות במערכת.",
  },
  {
    q: "האם אפשר לקבל החזר כספי?",
    a: "מדיניות ההחזרים תלויה בסוג הרכישה ובמצב השימוש בשירות. מומלץ לפנות לתמיכה לקבלת מידע מדויק לגבי המקרה שלך.",
  },
  {
    q: "האם יש הגבלה על השימוש בקרדיטים?",
    a: "ההגבלות משתנות בהתאם לסוג החבילה ולתנאי השירות. ניתן לעיין בפרטים המלאים לפני ביצוע הרכישה.",
  },
  {
    q: "האם השימוש במערכת חוקי?",
    a: "המערכת מספקת כלי טכנולוגי בלבד. על המשתמש לוודא שהשימוש שהוא מבצע עומד בחוקי האזור שלו, בתנאי השימוש של הפלטפורמות הרלוונטיות ובכל התקנות החלות עליו. האחריות על אופן השימוש במערכת היא של המשתמש בלבד.",
  },
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<"home" | "privacy" | "terms">("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const inviteLink = "https://discord.gg/spammeril";

  const copyInvite = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(inviteLink).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => fallbackCopyTextToClipboard(inviteLink));
    } else {
      fallbackCopyTextToClipboard(inviteLink);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateTo = (view: "home" | "privacy" | "terms") => {
    setCurrentView(view);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const theme = {
    mainBg: isDarkMode ? "bg-[#1b1b1b]" : "bg-[#fafafa]",
    gradientBg: isDarkMode ? "from-[#1b1b1b] via-[#161616] to-[#0a0a0a]" : "from-[#ffffff] via-[#f4f4f5] to-[#ececed]",
    text: isDarkMode ? "text-white" : "text-black",
    textMuted: isDarkMode ? "text-zinc-400" : "text-zinc-500",
    navBg: isDarkMode ? "bg-[#1b1b1b]/70 border-white/[0.04]" : "bg-white/80 border-black/[0.05] shadow-sm",
    glowTop: isDarkMode ? "bg-white/[0.015]" : "bg-black/[0.03]",
    glowSide: isDarkMode ? "bg-zinc-800/[0.02]" : "bg-black/[0.02]",
    badge: isDarkMode ? "bg-[#252525] border-white/[0.04] text-zinc-300" : "bg-zinc-100 border-black/[0.05] text-zinc-700 shadow-sm",
    badgeDot: isDarkMode ? "bg-white" : "bg-black",
    btnPrimary: isDarkMode ? "bg-white text-black hover:bg-zinc-200 shadow-white/5" : "bg-black text-white hover:bg-zinc-800 shadow-black/10",
    btnSecondary: isDarkMode ? "bg-[#202020]/80 border border-white/[0.04] text-zinc-300 hover:bg-[#2c2c2c]" : "bg-white border border-black/[0.1] text-black hover:bg-zinc-50 shadow-sm",
    btnIcon: isDarkMode ? "text-white/80" : "text-black",
    card: isDarkMode ? "bg-[#202020]/50 border-white/[0.03] hover:border-zinc-500 hover:bg-[#252525]/60" : "bg-white border-black/[0.05] hover:border-black/[0.2] shadow-sm hover:shadow-md",
    cardIconBox: isDarkMode ? "bg-[#2c2c2c] border-white/[0.02]" : "bg-zinc-100 border-black/[0.05]",
    cardIcon: isDarkMode ? "text-white" : "text-black",
    cardHoverLine: isDarkMode ? "bg-white" : "bg-black",
    pricingBase: isDarkMode ? "bg-[#202020]/40 border-white/[0.03] hover:border-zinc-500" : "bg-white border-black/[0.05] hover:border-black/[0.2]",
    pricingPop: isDarkMode ? "bg-gradient-to-b from-[#2a2a2a]/90 to-[#1b1b1b]/90 border-white/50 shadow-[0_0_50px_rgba(255,255,255,0.02)]" : "bg-gradient-to-b from-zinc-50 to-white border-black shadow-[0_0_40px_rgba(0,0,0,0.08)]",
    pricingTag: isDarkMode ? "bg-white text-black" : "bg-black text-white",
    pricingDivider: isDarkMode ? "border-white/[0.03]" : "border-black/[0.08]",
    footerBg: isDarkMode ? "bg-[#151515]/90 border-white/[0.03]" : "bg-[#f8f8f8]/90 border-black/[0.05]",
    footerLink: isDarkMode ? "hover:text-white" : "hover:text-black",
    footerDot: isDarkMode ? "bg-[#252525]" : "bg-zinc-300",
    legalBox: isDarkMode ? "bg-[#202020]/30 border-white/[0.03]" : "bg-white border-black/[0.05] shadow-xl",
  };

  return (
    <main className={`min-h-screen w-full relative bg-gradient-to-b ${theme.gradientBg} ${theme.text} overflow-x-hidden transition-colors duration-500`} dir="rtl">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <div className={`absolute inset-0 opacity-50 transition-opacity duration-500 ${isDarkMode ? 'premium-grid-dark' : 'premium-grid-light'}`} />
        {/* הקטנו משמעותית את הטשטוש (Blur) ואת גודל האלמנטים במובייל למניעת קריסות */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[1000px] h-[300px] sm:h-[500px] rounded-full blur-[60px] sm:blur-[140px] transition-colors duration-500 ${theme.glowTop}`} />
        <div className={`absolute bottom-[20%] -left-[20%] sm:left-[-10%] w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] rounded-full blur-[60px] sm:blur-[160px] transition-colors duration-500 ${theme.glowSide}`} />
      </div>

      <AnimatePresence mode="wait">
        
        {currentView === "home" && (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            <nav className={`relative z-50 border-b backdrop-blur-xl transition-colors duration-500 ${theme.navBg}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none" onClick={() => navigateTo("home")}>
                  <NovaXLogo className="w-8 h-8 sm:w-10 sm:h-10 shadow-xl" isDarkMode={isDarkMode} />
                  <span className="text-lg sm:text-2xl font-bold tracking-tight">
                    Nova<span className={theme.textMuted}>X</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-8">
                  <div className="hidden md:flex items-center gap-8 mr-4 select-none">
                    <a href="#features" className={`text-sm font-medium ${theme.textMuted} ${theme.footerLink} transition-colors`}>יתרונות</a>
                    <a href="#pricing" className={`text-sm font-medium ${theme.textMuted} ${theme.footerLink} transition-colors`}>מחירון</a>
                    <a href="#faq" className={`text-sm font-medium ${theme.textMuted} ${theme.footerLink} transition-colors`}>שאלות נפוצות</a>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-[#252525] text-zinc-400 hover:text-white' : 'bg-zinc-100 text-zinc-500 hover:text-black'}`}
                      aria-label="Toggle Theme"
                    >
                      {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </button>
                    
                    <a
                      href={inviteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-3 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-105 flex items-center gap-2 select-none ${theme.btnPrimary}`}
                    >
                      <span className="hidden sm:inline">הצטרף לדיסקורד</span>
                      <span className="sm:hidden">לדיסקורד</span>
                      <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 sm:hidden" />
                    </a>
                  </div>
                </div>
              </div>
            </nav>

            <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-16 sm:pt-24 sm:pb-24 md:pt-44 md:pb-32">
              <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 select-none">
                
                <div className="space-y-4 sm:space-y-6 max-w-4xl">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border rounded-full text-[11px] sm:text-xs font-semibold transition-colors duration-500 ${theme.badge}`}>
                    <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${theme.badgeDot}`} />
                    הספאמר המוביל בישראל
                  </div>
                  
                  {/* טיפוגרפיה משופרת למובייל: קטן יותר כדי למנוע גלישה, שורות קריאות יותר */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] sm:leading-[1.2]">
                    ברוכים הבאים ל-NovaX
                    <span className={`block mt-2 sm:mt-3 bg-gradient-to-l bg-clip-text text-transparent ${isDarkMode ? 'from-white via-zinc-400 to-zinc-600' : 'from-black via-zinc-600 to-zinc-400'}`}>
                      הספאמר הטוב בישראל
                    </span>
                  </h1>
                  
                  <p className={`text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed pt-2 transition-colors duration-500 px-2 ${theme.textMuted}`}>
                    קבלו גישה מיידית למערכת שליחת ה-SMS החזקה, המהירה והמתקדמת ביותר.
                  </p>
                </div>

                {/* כפתורים מסודרים במובייל: אחד מתחת לשני או צד לצד עם ריווח נכון */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto px-4">
                  <a
                    href="#pricing"
                    className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 ${theme.btnPrimary}`}
                  >
                    לרכישת קרדיטים
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  </a>
                  <a
                    href="#features"
                    className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all flex items-center justify-center gap-3 ${theme.btnSecondary}`}
                  >
                    <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.btnIcon}`} />
                    למה אנחנו?
                  </a>
                </div>

                <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-10 md:pt-12 border-t w-full max-w-xl mx-auto transition-colors duration-500 ${theme.pricingDivider}`}>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold">200+</div>
                    <div className={`text-[10px] sm:text-xs mt-1 transition-colors duration-500 ${theme.textMuted}`}>לקוחות מרוצים</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold">50K+</div>
                    <div className={`text-[10px] sm:text-xs mt-1 transition-colors duration-500 ${theme.textMuted}`}>הודעות עובדו</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold">24/7</div>
                    <div className={`text-[10px] sm:text-xs mt-1 transition-colors duration-500 ${theme.textMuted}`}>זמינות מלאה</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-extrabold">4.9</div>
                    <div className={`text-[10px] sm:text-xs mt-1 transition-colors duration-500 ${theme.textMuted}`}>ציון משתמשים</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="features" className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 border-t transition-colors duration-500 ${theme.pricingDivider}`}>
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 select-none">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-l bg-clip-text text-transparent ${isDarkMode ? 'from-white to-zinc-400' : 'from-black to-zinc-600'}`}>
                  למה לבחור במערכת שלנו?
                </h2>
                <p className={`text-sm sm:text-base md:text-lg transition-colors duration-500 px-2 ${theme.textMuted}`}>
                  טכנולוגיית קצה שנועדה להעניק לכם יתרון משמעותי, יציבות מקסימלית וחוויית משתמש חסרת פשרות.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {features.map((feat, idx) => {
                  const IconComp = feat.icon;
                  return (
                    <div
                      key={idx}
                      className={`group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-300 backdrop-blur-xl ${theme.card}`}
                    >
                      <div className={`mb-4 sm:mb-5 md:mb-6 inline-flex p-3 sm:p-3.5 rounded-lg sm:rounded-xl border transition-colors select-none ${theme.cardIconBox} group-hover:${isDarkMode?'bg-[#383838]':'bg-zinc-200'}`}>
                        <IconComp className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 ${theme.cardIcon}`} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-wide select-none">{feat.title}</h3>
                      <p className={`text-sm leading-relaxed ${theme.textMuted}`}>{feat.desc}</p>
                      <div className={`absolute bottom-0 right-0 left-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl sm:rounded-b-2xl ${theme.cardHoverLine}`} />
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="pricing" className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 border-t transition-colors duration-500 ${theme.pricingDivider}`}>
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 select-none">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-l bg-clip-text text-transparent ${isDarkMode ? 'from-white to-zinc-400' : 'from-black to-zinc-600'}`}>
                 בחרו את החבילה שלכם
                </h2>
                <p className={`text-sm sm:text-base md:text-lg transition-colors duration-500 px-2 ${theme.textMuted}`}>
                  בחרו את המסלול המדויק לצרכים שלכם והצטרפו כבר עכשיו למערכת שלנו.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8">
                {packages.map((pkg, idx) => (
                  <div
                    key={pkg.id}
                    className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 backdrop-blur-xl ${
                      pkg.popular ? theme.pricingPop : theme.pricingBase
                    }`}
                  >
                    {pkg.popular && (
                      <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-black tracking-widest uppercase px-4 sm:px-5 py-1 sm:py-1.5 rounded-full shadow-md select-none ${theme.pricingTag}`}>
                        מומלץ
                      </div>
                    )}

                    <div className="space-y-5 sm:space-y-6 text-center select-none">
                      <div>
                        <h3 className={`text-xs sm:text-sm font-semibold mb-1 uppercase tracking-wider ${theme.textMuted}`}>{pkg.name}</h3>
                        <div className="text-xs sm:text-sm font-bold">{pkg.credits}</div>
                      </div>

                      <div className={`py-4 border-y ${theme.pricingDivider}`}>
                        <div className="flex items-center justify-center gap-1">
                          <span className={`text-lg sm:text-xl font-bold ${theme.textMuted}`}>₪</span>
                          <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">{pkg.price}</span>
                        </div>
                        <span className={`text-xs mt-1 block ${theme.textMuted}`}>תשלום חד פעמי</span>
                      </div>

                      <ul className="space-y-3 sm:space-y-4 pt-2 text-right px-2">
                        {pkg.features.map((feat, j) => (
                          <li key={j} className="flex items-center gap-2 sm:gap-3 text-sm">
                            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-white/10 border-white/20' : 'bg-black/[0.05] border-black/10'}`}>
                              <Check className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${theme.cardIcon}`} />
                            </div>
                            <span className={`font-medium ${theme.textMuted}`}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 sm:pt-8 select-none">
                      <a
                        href={inviteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl text-center font-bold text-sm transition-all hover:scale-[1.02] shadow-sm ${
                          pkg.popular ? theme.btnPrimary : theme.btnSecondary
                        }`}
                      >
                        הצטרף עכשיו
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="faq" className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 border-t transition-colors duration-500 ${theme.pricingDivider}`}>
              <div className="text-center mb-8 sm:mb-10 md:mb-16 select-none">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 sm:mb-3 bg-gradient-to-l bg-clip-text text-transparent ${isDarkMode ? 'from-white to-zinc-400' : 'from-black to-zinc-600'}`}>
                  רגע לפני שמתחילים
                </h2>
                <p className={`text-sm sm:text-base ${theme.textMuted}`}>תשובות לשאלות הנפוצות ביותר</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-colors backdrop-blur-xl ${theme.card}`}
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 sm:p-5 md:p-6 text-right flex items-center justify-between gap-3 sm:gap-4 font-semibold focus:outline-none select-none"
                      >
                        <span className="text-sm sm:text-base md:text-lg pr-1">{faq.q}</span>
                        <div className={`p-1 sm:p-1.5 rounded-md sm:rounded-lg border transition-colors shrink-0 ${theme.cardIconBox}`}>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${theme.cardIcon} ${isOpen ? "rotate-180" : "rotate-0"}`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm leading-relaxed border-t pt-3 sm:pt-4 ${theme.pricingDivider} ${theme.textMuted}`}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-24">
              <div className={`border p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] text-center relative overflow-hidden shadow-2xl backdrop-blur-xl ${theme.legalBox}`}>
                <div className={`absolute top-0 right-0 w-40 sm:w-80 h-40 sm:h-80 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none ${isDarkMode?'bg-white/[0.01]':'bg-black/[0.03]'}`} />
                <div className="relative z-10 max-w-2xl mx-auto space-y-4 sm:space-y-6 select-none">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                    מוכנים לצאת לדרך?
                  </h2>
                  <p className={`text-sm sm:text-base leading-relaxed px-2 ${theme.textMuted}`}>
                    הצטרפו עוד היום לקהילת הדיסקורד שלנו, פתחו טיקט רכישה בתוך שניות ותיהנו מיכולות פרימיום בלתי מתפשרות.
                  </p>
                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full">
                    <a
                      href={inviteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 ${theme.btnPrimary}`}
                    >
                      מעבר לדיסקורד
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <button
                      onClick={copyInvite}
                      className={`w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                        copied ? 'bg-green-500/10 text-green-600 border border-green-500/20' : theme.btnSecondary
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                          הועתק בהצלחה!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                          העתקת קישור הזמנה
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {currentView === "privacy" && (
          <motion.div
            key="privacy-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12"
          >
            <div className={`flex items-center justify-between mb-8 sm:mb-10 md:mb-16 border-b pb-4 sm:pb-6 select-none ${theme.pricingDivider}`}>
              <button
                onClick={() => navigateTo("home")}
                className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-colors group ${theme.footerLink}`}
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">חזרה למסך הראשי</span>
                <span className="sm:hidden">חזור</span>
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <NovaXLogo className="w-6 h-6 sm:w-8 sm:h-8 pointer-events-none select-none" isDarkMode={isDarkMode} />
                <span className="text-lg sm:text-xl font-semibold">
                  Nova<span className={theme.textMuted}>X</span>
                </span>
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-12 select-none">
              <div className={`inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 border rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 ${theme.badge}`}>
                מסמך משפטי
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 tracking-tight">
                הצהרת <span className={isDarkMode ? "text-zinc-500" : "text-zinc-500"}>הגנת נתונים</span>
              </h1>
              
              <p className={`text-xs sm:text-sm md:text-lg px-4 ${theme.textMuted}`}>
                השקיפות והביטחון שלכם הם הערך העליון שלנו
              </p>
              
              <p className={`text-[10px] sm:text-xs mt-3 md:mt-4 ${isDarkMode ? 'text-zinc-600' : 'text-zinc-400'}`}>
                תאריך עדכון אחרון: מאי 2026
              </p>
            </div>

            <div className={`border rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8 md:space-y-10 leading-relaxed text-right max-w-4xl mx-auto backdrop-blur-xl ${theme.legalBox}`}>
              <p className={`text-xs sm:text-sm md:text-base border-b pb-4 sm:pb-6 ${theme.pricingDivider} ${isDarkMode ? 'text-zinc-300' : 'text-zinc-800'}`}>
                הפרטיות שלכם חשובה לנו מאין כמותה. ב-<strong>NovaX</strong> אנו מתחייבים לאסוף אך ורק את המידע המינימלי ההכרחי לתפעול תקין ויציב של המערכת.
                <br /><br />
                כניסתכם ושימושכם בפלטפורמה מעידים על הסכמתכם המלאה לעקרונות במפורטים במסמך זה.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">איזה מידע נאסף אודותיכם?</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  אנו מגבילים את איסוף הנתונים לפרטים טכניים הכרחיים בלבד, שנועדו לאפשר את מתן השירות, לאבטח את הפלטפורמה ולמנוע שימוש לרעה. 
                </p>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  חשוב להדגיש כי אין אנו אוגרים נתוני אמצעי תשלום, מספרי אשראי או פרטי חשבון בנק. כל הליכי הסליקה מבוצעים באופן בלעדי על ידי ספקים צד שלישי המוסמכים לכך.
                </p>
              </div>

              <div className={`space-y-2 sm:space-y-3 md:space-y-4 pt-4 border-t ${theme.pricingDivider}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">מטרות השימוש בנתונים</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  המידע המינימלי שאנו אוספים מיועד אך ורק למטרות הבאות:
                </p>
                <ul className={`space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base pr-2 sm:pr-4 ${theme.textMuted}`}>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>ניהול הפלטפורמה והענקת גישה רציפה לשירותים.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>תקשורת מהירה ומתן סיוע טכני בעת הצורך.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>ניטור אבטחתי לאיתור ניסיונות פריצה או הונאה.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>אופטימיזציה ושיפור מתמיד של חוויית המשתמש.</span>
                  </li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-3 md:space-y-4 pt-4 border-t ${theme.pricingDivider}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">תקני אבטחה מחמירים</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  אנו מיישמים שכבות הגנה איתנות ופרוטוקולים מתקדמים כדי לשמור על כל פיסת מידע המצויה במערכותינו. יחד עם זאת, מובהר כי לא קיימת הרמטיות מוחלטת ברשת האינטרנט, וכל שימוש בפלטפורמה נעשה מתוך הבנת הסיכונים הטבעיים הקיימים בסביבה דיגיטלית.
                </p>
              </div>

              <div className={`space-y-2 sm:space-y-3 md:space-y-4 pt-4 border-t ${theme.pricingDivider}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">שיתוף מידע עם גורמי חוץ</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  אנו מתחייבים כי לעולם לא נמכור או נשכיר את פרטיכם לאיש. העברת נתונים לצד שלישי תתבצע אך ורק בנסיבות החריגות הבאות:
                </p>
                <ul className={`space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base pr-2 sm:pr-4 ${theme.textMuted}`}>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>כאשר ניתנה הסכמה מפורשת מצידכם.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>כאשר אנו מחויבים לכך מתוקף דרישה חוקית או צו שיפוטי.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>לצורך הגנה מהותית על זכויותיה וקניינה של החברה או עובדיה.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 shrink-0 animate-pulse ${theme.cardHoverLine}`} />
                    <span>במקרים של חשד סביר לביצוע עבירה פלילית דרך הפלטפורמה.</span>
                  </li>
                </ul>
              </div>

              <div className={`space-y-2 sm:space-y-3 md:space-y-4 pt-4 border-t ${theme.pricingDivider}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">אחריותכם האישית</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  הנכם נושאים באחריות המלאה והבלעדית לכל פעולה המתבצעת דרך חשבונכם. החברה מהווה ספקית תשתית בלבד, ואינה אמונה על טיב התוכן או ניטור פעולות הקצה של משתמשיה באופן אקטיבי.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10 select-none">
              <button
                onClick={() => navigateTo("home")}
                className={`px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-105 ${theme.btnSecondary}`}
              >
                חזרה למסך הראשי
              </button>
            </div>
          </motion.div>
        )}

        {currentView === "terms" && (
          <motion.div
            key="terms-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12"
          >
            <div className={`flex items-center justify-between mb-8 sm:mb-10 md:mb-16 border-b pb-4 sm:pb-6 select-none ${theme.pricingDivider}`}>
              <button
                onClick={() => navigateTo("home")}
                className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-colors group ${theme.footerLink}`}
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">חזרה למסך הראשי</span>
                <span className="sm:hidden">חזור</span>
              </button>
              
              <div className="flex items-center gap-2 sm:gap-3">
                <NovaXLogo className="w-6 h-6 sm:w-8 sm:h-8 pointer-events-none select-none" isDarkMode={isDarkMode} />
                <span className="text-lg sm:text-xl font-semibold">
                  Nova<span className={theme.textMuted}>X</span>
                </span>
              </div>
            </div>

            <div className="text-center mb-8 sm:mb-12 select-none">
              <div className={`inline-flex items-center justify-center px-3 py-1 sm:px-4 sm:py-1.5 border rounded-full text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 ${theme.badge}`}>
                מסמך משפטי
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 tracking-tight">
                תקנון <span className={isDarkMode ? "text-zinc-500" : "text-zinc-500"}>המערכת</span>
              </h1>
              
              <p className={`text-xs sm:text-sm md:text-lg px-4 ${theme.textMuted}`}>
                מסמך ההבנות המחייב לכל משתמשי הפלטפורמה
              </p>
              
              <p className={`text-[10px] sm:text-xs mt-3 md:mt-4 ${isDarkMode ? 'text-zinc-600' : 'text-slate-400'}`}>
                תאריך עדכון אחרון: מאי 2026
              </p>
            </div>

            <div className={`border rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 space-y-6 sm:space-y-8 md:space-y-10 leading-relaxed text-right max-w-4xl mx-auto backdrop-blur-xl ${theme.legalBox}`}>
              <p className={`text-xs sm:text-sm md:text-base border-b pb-4 sm:pb-6 ${theme.pricingDivider} ${isDarkMode ? 'text-zinc-300' : 'text-slate-700'}`}>
                ברוכים הבאים לזירת הפעילות של <strong>NovaX</strong>. הגישה והשימוש באתר, בכלים הטכנולוגיים ובבוט שלנו מותנים בהסכמה מלאה לסעיפים המפורטים להלן.
                <br /><br />
                במידה ואינכם מסכימים לתנאים אלו, במלואם או בחלקם, הנכם מתבקשים לחדול מכל שימוש במערכותינו באופן מיידי.
              </p>

              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">חובות המשתמש בפלטפורמה</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  כמשתמשי המערכת, הנכם מתחייבים לנצל את השירותים המוצעים אך ורק למטרות חוקיות, העולות בקנה אחד עם הדין החל במדינת ישראל ובמדינת היעד של נמעני ההודעות.
                </p>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  מובהר בזאת כי חל איסור גורף ונחרץ להשתמש בתשתיות שלנו לצורך הונאות, סחיטה, התחזויות, פריצות, או כל פעילות שעשויה לפגוע בקניינו או בזכויותיו של גורם שלישי כלשהו.
                </p>
              </div>

              <div className={`space-y-2 sm:space-y-3 md:space-y-4 pt-4 sm:pt-6 border-t ${theme.pricingDivider}`}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">הצהרת היעדר אחריות מצד החברה</h3>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  כלל השירותים מוענקים במתכונת "כמות שהם" (As-Is). איננו יכולים להתחייב לרצף פעילות חסין לחלוטין מנפילות, לעקיפה מוחלטת של מנגנוני חסימה (Anti-Bot) באתרים שונים, או להבטיח את מסירת ההודעה בכל תרחיש.
                </p>
                <p className={`text-xs sm:text-sm md:text-base ${theme.textMuted}`}>
                  הנהלת NovaX פטורה באופן מלא מכל אחריות נזיקית, עקיפה או ישירה, הנובעת מתקלות זמניות, הפסקת שירות או נזקים הנובעים מאופן השימוש של המשתמשים במערכת.
                </p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-10 select-none">
              <button
                onClick={() => navigateTo("home")}
                className={`px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all hover:scale-105 ${theme.btnSecondary}`}
              >
                חזרה למסך הראשי
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      <footer className={`relative z-10 border-t backdrop-blur-md py-6 sm:py-8 md:py-12 transition-colors duration-500 select-none ${theme.footerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-center md:text-right">
            <span className={`font-bold cursor-pointer transition-colors ${theme.footerLink}`} onClick={() => navigateTo("home")}>NovaX © 2026</span>
            <span className={`hidden sm:inline-block w-1.5 h-1.5 rounded-full ${theme.footerDot}`} />
            <span className={`text-[10px] sm:text-xs md:text-sm ${theme.textMuted}`}>השימוש באתר באחריות המשתמש בלבד.</span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mt-2 md:mt-0">
            <a href={inviteLink} target="_blank" rel="noopener noreferrer" className={`transition-colors ${theme.footerLink}`}>
              דיסקורד
            </a>
            <span className={`w-1 h-1 rounded-full ${theme.footerDot}`} />
            <span onClick={() => navigateTo("terms")} className={`cursor-pointer transition-colors ${theme.footerLink}`}>תקנון המערכת</span>
            <span className={`w-1 h-1 rounded-full ${theme.footerDot}`} />
            <span onClick={() => navigateTo("privacy")} className={`cursor-pointer transition-colors ${theme.footerLink}`}>מדיניות פרטיות</span>
          </div>
        </div>
      </footer>

    </main>
  );
}