import UnitConverter from '../components/tools/UnitConverter.astro';
import DateConverter from '../components/tools/DateConverter.astro';
import AgeCalculator from '../components/tools/AgeCalculator.astro';
import QRCodeGenerator from '../components/tools/QRCodeGenerator.astro';
import PasswordGenerator from '../components/tools/PasswordGenerator.astro';
import JsonFormatter from '../components/tools/JsonFormatter.astro';
import WordCounter from '../components/tools/WordCounter.astro';
import Stopwatch from '../components/tools/Stopwatch.astro';
import MarkdownPreview from '../components/tools/MarkdownPreview.astro';
import ColorConverter from '../components/tools/ColorConverter.astro';
import LoremGenerator from '../components/tools/LoremGenerator.astro';
import NumberConverter from '../components/tools/NumberConverter.astro';
import PercentageCalculator from '../components/tools/PercentageCalculator.astro';
import AspectRatioCalculator from '../components/tools/AspectRatioCalculator.astro';
import TextCaseConverter from '../components/tools/TextCaseConverter.astro';
import BmiCalculator from '../components/tools/BmiCalculator.astro';
import PomodoroTimer from '../components/tools/PomodoroTimer.astro';
import PasswordStrength from '../components/tools/PasswordStrength.astro';
import UnixTimestamp from '../components/tools/UnixTimestamp.astro';
import Base64Converter from '../components/tools/Base64Converter.astro';
import UrlConverter from '../components/tools/UrlConverter.astro';
import DiffChecker from '../components/tools/DiffChecker.astro';
import UuidGenerator from '../components/tools/UuidGenerator.astro';
import BoxShadowGenerator from '../components/tools/BoxShadowGenerator.astro';
import MetaTagGenerator from '../components/tools/MetaTagGenerator.astro';
import ImageToBase64 from '../components/tools/ImageToBase64.astro';
import RegexTester from '../components/tools/RegexTester.astro';
import YamlJsonConverter from '../components/tools/YamlJsonConverter.astro';
import JwtDecoder from '../components/tools/JwtDecoder.astro';
import TextRepeater from '../components/tools/TextRepeater.astro';
import SlugGenerator from '../components/tools/SlugGenerator.astro';
import RandomNumber from '../components/tools/RandomNumber.astro';
import KeyCodeInfo from '../components/tools/KeyCodeInfo.astro';
import GradientGenerator from '../components/tools/GradientGenerator.astro';
import SignaturePad from '../components/tools/SignaturePad.astro';
import PrimeChecker from '../components/tools/PrimeChecker.astro';
import Scratchpad from '../components/tools/Scratchpad.astro';

export interface ToolConfig {
    id: string;
    title: string;
    description: string;
    icon: string;
    component: any;
}

export const tools: ToolConfig[] = [
    // Core (Original)
    { id: 'unit-converter', title: 'تحويل الوحدات', description: 'طول، وزن، حرارة، ووحدات أخرى.', icon: 'scale', component: UnitConverter },
    { id: 'date-converter', title: 'تحويل التواريخ', description: 'هجري <-> ميلادي.', icon: 'calendar', component: DateConverter },
    { id: 'age-calculator', title: 'حاسبة العمر', description: 'حساب العمر بدقة بالميلادي والهجري.', icon: 'cake', component: AgeCalculator },
    { id: 'qr-generator', title: 'توليد QR', description: 'إنشاء رموز QR.', icon: 'qr_code', component: QRCodeGenerator },

    // Batch 1 (3 Tools)
    { id: 'password-generator', title: 'مولد كلمات المرور', description: 'كلمات مرور آمنة.', icon: 'key', component: PasswordGenerator },
    { id: 'json-formatter', title: 'منسق JSON', description: 'تنسيق والتحقق من JSON.', icon: 'code', component: JsonFormatter },
    { id: 'word-counter', title: 'عداد الكلمات', description: 'تحليل النصوص.', icon: 'text_fields', component: WordCounter },

    // Mega Expansion 1 (10 Tools)
    { id: 'stopwatch', title: 'ساعة إيقاف', description: 'ساعة إيقاف مع جولات.', icon: 'timer', component: Stopwatch },
    { id: 'pomodoro-timer', title: 'مؤقت بومودورو', description: 'مؤقت تركيز قابل للتخصيص.', icon: 'hourglass_top', component: PomodoroTimer },
    { id: 'markdown-preview', title: 'معاين Markdown', description: 'محرر مع تصدير PDF/HTML.', icon: 'article', component: MarkdownPreview },
    { id: 'color-converter', title: 'محول الألوان', description: 'Hex, RGB, HSL مع لاقط ألوان.', icon: 'palette', component: ColorConverter },
    { id: 'lorem-generator', title: 'مولد نص عشوائي', description: 'نصوص عربية للاختبار.', icon: 'format_align_justify', component: LoremGenerator },
    { id: 'bmi-calculator', title: 'حاسبة كتلة الجسم', description: 'مؤشر كتلة الجسم (BMI).', icon: 'health_and_safety', component: BmiCalculator },
    { id: 'number-converter', title: 'محول الأنظمة', description: 'ثنائي، عشري، سداسي.', icon: 'onetwothree', component: NumberConverter },
    { id: 'percentage-calculator', title: 'حاسبة النسبة', description: 'حساب النسب والخصومات.', icon: 'percent', component: PercentageCalculator },
    { id: 'aspect-ratio', title: 'حاسبة الأبعاد', description: 'حساب أبعاد الشاشة.', icon: 'aspect_ratio', component: AspectRatioCalculator },
    { id: 'text-case', title: 'محول حالة النص', description: 'أحرف كبيرة/صغيرة.', icon: 'text_format', component: TextCaseConverter },

    // Mega Expansion 2 (10 Tools)
    { id: 'pwd-strength', title: 'فحص كلمة المرور', description: 'تحليل قوة كلمة المرور.', icon: 'shield', component: PasswordStrength },
    { id: 'unix-timestamp', title: 'وقت Unix', description: 'تحويل الطوابع الزمنية.', icon: 'schedule', component: UnixTimestamp },
    { id: 'base64-tool', title: 'محول Base64', description: 'تشفير وفك تشفير Base64.', icon: 'enhanced_encryption', component: Base64Converter },
    { id: 'url-encoder', title: 'تشفير الروابط', description: 'تشفير وفك تشفير URL.', icon: 'link', component: UrlConverter },
    { id: 'diff-checker', title: 'مقارنة النصوص', description: 'إيجاد الفروقات بين نصين.', icon: 'difference', component: DiffChecker },
    { id: 'uuid-generator', title: 'توليد UUID', description: 'معرفات فريدة v4.', icon: 'fingerprint', component: UuidGenerator },
    { id: 'box-shadow', title: 'مولد الظل', description: 'إنشاء كود CSS Box Shadow.', icon: 'layers', component: BoxShadowGenerator },
    { id: 'meta-tag', title: 'مولد Meta Tags', description: 'أكواد SEO للمواقع.', icon: 'search', component: MetaTagGenerator },
    { id: 'img-base64', title: 'صورة إلى Base64', description: 'تحويل الصور لنصوص.', icon: 'image', component: ImageToBase64 },
    { id: 'regex-tester', title: 'فاحص Regex', description: 'اختبار التعابير النمطية.', icon: 'rule', component: RegexTester },

    // Mega Expansion 3 (10 Tools)
    { id: 'yaml-json', title: 'محول YAML/JSON', description: 'تحويل بين YAML ولاJSON.', icon: 'data_object', component: YamlJsonConverter },
    { id: 'jwt-decoder', title: 'فك تشفير JWT', description: 'قراءة محتوى توكن JWT.', icon: 'vpn_key', component: JwtDecoder },
    { id: 'text-repeater', title: 'مكرر النصوص', description: 'تكرار النص عدة مرات.', icon: 'replay', component: TextRepeater },
    { id: 'slug-generator', title: 'مولد Slug', description: 'تحويل العناوين لروابط.', icon: 'link', component: SlugGenerator },
    { id: 'random-number', title: 'أرقام عشوائية', description: 'توليد رقم ضمن نطاق.', icon: 'casino', component: RandomNumber },
    { id: 'key-code', title: 'معلومات المفاتيح', description: 'إظهار أكواد أزرار الكيبورد.', icon: 'keyboard', component: KeyCodeInfo },
    { id: 'gradient-gen', title: 'مولد التدرج', description: 'صنع تدرجات لونية CSS.', icon: 'gradient', component: GradientGenerator },
    { id: 'signature-pad', title: 'لوحة التوقيع', description: 'رسم وحفظ التواقيع.', icon: 'draw', component: SignaturePad },
    { id: 'prime-checker', title: 'فحص الأعداد الأولية', description: 'هل الرقم أولي؟', icon: 'functions', component: PrimeChecker },
    { id: 'memo-pad', title: 'مذكرتي', description: 'تدوين ملاحظات سريعة.', icon: 'note', component: Scratchpad },
];
