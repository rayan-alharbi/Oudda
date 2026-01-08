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
import BinaryConverter from '../components/tools/BinaryConverter.astro';
import HexConverter from '../components/tools/HexConverter.astro';
import AsciiConverter from '../components/tools/AsciiConverter.astro';
import RomanConverter from '../components/tools/RomanConverter.astro';
import MorseConverter from '../components/tools/MorseConverter.astro';
import Rot13Cipher from '../components/tools/Rot13Cipher.astro';
import HtmlEntityEncoder from '../components/tools/HtmlEntityEncoder.astro';
import UrlParser from '../components/tools/UrlParser.astro';
import DeviceInfo from '../components/tools/DeviceInfo.astro';
import ScreenInfo from '../components/tools/ScreenInfo.astro';
import LoanCalculator from '../components/tools/LoanCalculator.astro';
import SalaryConverter from '../components/tools/SalaryConverter.astro';
import VatCalculator from '../components/tools/VatCalculator.astro';
import DiscountCalculator from '../components/tools/DiscountCalculator.astro';
import InterestCalculator from '../components/tools/InterestCalculator.astro';
import CssMinifier from '../components/tools/CssMinifier.astro';
import SqlFormatter from '../components/tools/SqlFormatter.astro';
import CsvJsonConverter from '../components/tools/CsvJsonConverter.astro';
import IpSubnet from '../components/tools/IpSubnet.astro';
import BarcodeGenerator from '../components/tools/BarcodeGenerator.astro';
import HashGenerator from '../components/tools/HashGenerator.astro';
import HmacGenerator from '../components/tools/HmacGenerator.astro';
import Bip39Generator from '../components/tools/Bip39Generator.astro';
import IbanValidator from '../components/tools/IbanValidator.astro';
import CreditCardValidator from '../components/tools/CreditCardValidator.astro';
import XmlJsonConverter from '../components/tools/XmlJsonConverter.astro';
import CronGenerator from '../components/tools/CronGenerator.astro';
import ExifReader from '../components/tools/ExifReader.astro';
import FileSizeConverter from '../components/tools/FileSizeConverter.astro';
import TimeZoneConverter from '../components/tools/TimeZoneConverter.astro';
import ScientificCalculator from '../components/tools/ScientificCalculator.astro';
import StatisticsCalculator from '../components/tools/StatisticsCalculator.astro';
import MatrixCalculator from '../components/tools/MatrixCalculator.astro';
import PhoneNumberParser from '../components/tools/PhoneNumberParser.astro';
import ColorMixer from '../components/tools/ColorMixer.astro';
import ColorBlindnessSim from '../components/tools/ColorBlindnessSim.astro';
import ImageCropper from '../components/tools/ImageCropper.astro';
import ImageFilters from '../components/tools/ImageFilters.astro';
import SvgToPng from '../components/tools/SvgToPng.astro';
import IcoConverter from '../components/tools/IcoConverter.astro';

export interface ToolConfig {
    id: string;
    title: string;
    description: string;
    icon: string;
    component: any;
}

// Icons are from Material Symbols Rounded
export const tools: ToolConfig[] = [
    // --- Core Tools ---
    { id: 'unit-converter', title: 'تحويل الوحدات', description: 'طول، وزن، حرارة.', icon: 'scale', component: UnitConverter },
    { id: 'date-converter', title: 'تحويل التواريخ', description: 'هجري وميلادي.', icon: 'edit_calendar', component: DateConverter },
    { id: 'age-calculator', title: 'حاسبة العمر', description: 'حساب العمر الدقيق.', icon: 'cake', component: AgeCalculator },
    { id: 'qr-generator', title: 'توليد QR', description: 'إنشاء رموز سريعة.', icon: 'qr_code_2', component: QRCodeGenerator },

    // --- Text & Security ---
    { id: 'password-generator', title: 'كلمات المرور', description: 'توليد كلمات قوية.', icon: 'password', component: PasswordGenerator },
    { id: 'pwd-strength', title: 'فحص القوة', description: 'اختبار كلمات المرور.', icon: 'shield_lock', component: PasswordStrength },
    { id: 'hash-gen', title: 'تشفير Hash', description: 'MD5, SHA-256.', icon: 'fingerprint', component: HashGenerator },
    { id: 'hmac-gen', title: 'مولد HMAC', description: 'توقيع مشفر.', icon: 'key', component: HmacGenerator },
    { id: 'bip39-gen', title: 'عبارات BIP39', description: 'كلمات المحافظ.', icon: 'lock_reset', component: Bip39Generator },

    // --- Developer Utilities ---
    { id: 'json-formatter', title: 'منسق JSON', description: 'تجميل كود JSON.', icon: 'data_object', component: JsonFormatter },
    { id: 'xml-json', title: 'XML <-> JSON', description: 'تحويل صيغ.', icon: 'swap_horiz', component: XmlJsonConverter },
    { id: 'yaml-json', title: 'YAML <-> JSON', description: 'تحويل ملفات الإعدادات.', icon: 'topic', component: YamlJsonConverter },
    { id: 'csv-json', title: 'CSV <-> JSON', description: 'جداول البيانات.', icon: 'table_view', component: CsvJsonConverter },
    { id: 'sql-fmt', title: 'تنسيق SQL', description: 'تحسين استعلامات DB.', icon: 'database', component: SqlFormatter },
    { id: 'cron-gen', title: 'Cron Job', description: 'مواعيد المهام.', icon: 'schedule_send', component: CronGenerator },
    { id: 'regex-tester', title: 'فاحص Regex', description: 'التعابير النمطية.', icon: 'regular_expression', component: RegexTester },
    { id: 'jwt-decoder', title: 'فك JWT', description: 'قراءة التوكن.', icon: 'token', component: JwtDecoder },

    // --- Encoders & Decoders ---
    { id: 'base64-tool', title: 'Base64', description: 'تشفير النصوص.', icon: 'code', component: Base64Converter },
    { id: 'url-encoder', title: 'URL Encode', description: 'تشفير الروابط.', icon: 'link', component: UrlConverter },
    { id: 'html-enc', title: 'HTML Entities', description: 'رموز الويب.', icon: 'html', component: HtmlEntityEncoder },
    { id: 'binary-tool', title: 'نص <-> ثنائي', description: 'الأصفار والواحدات.', icon: 'memory', component: BinaryConverter },
    { id: 'hex-tool', title: 'نص <-> Hex', description: 'النظام السداسي.', icon: 'numbers', component: HexConverter },
    { id: 'rot13', title: 'ROT13 & Cipher', description: 'تشفير بسيط.', icon: 'enhanced_encryption', component: Rot13Cipher },
    { id: 'morse-tool', title: 'شفرة مورس', description: 'إشارات صوتية.', icon: 'graphic_eq', component: MorseConverter },

    // --- Formatting & Content ---
    { id: 'word-counter', title: 'عداد الكلمات', description: 'إحصائيات النص.', icon: 'article', component: WordCounter },
    { id: 'text-case', title: 'حالة الأحرف', description: 'كبيرة/صغيرة.', icon: 'text_fields', component: TextCaseConverter },
    { id: 'text-repeater', title: 'مكرر النصوص', description: 'نسخ متكرر.', icon: 'repeat', component: TextRepeater },
    { id: 'lorem-generator', title: 'نص عشوائي', description: 'لوريم إيبسوم عربي.', icon: 'format_quote', component: LoremGenerator },
    { id: 'slug-generator', title: 'Slugify', description: 'روابط نظيفة.', icon: 'link_off', component: SlugGenerator },
    { id: 'diff-checker', title: 'مقارنة نصوص', description: 'كشف الاختلافات.', icon: 'difference', component: DiffChecker },
    { id: 'markdown-preview', title: 'Markdown', description: 'محرر مباشر.', icon: 'markdown', component: MarkdownPreview },

    // --- Network & Device ---
    { id: 'ip-subnet', title: 'الشبكات الفرعية', description: 'Subnet Calc.', icon: 'router', component: IpSubnet },
    { id: 'url-parser', title: 'محلل الروابط', description: 'أجزاء URL.', icon: 'http', component: UrlParser },
    { id: 'device-info', title: 'جهازي', description: 'معلومات المتصفح.', icon: 'devices', component: DeviceInfo },
    { id: 'screen-info', title: 'دقة الشاشة', description: 'الأبعاد والبيكسل.', icon: 'screenshot_monitor', component: ScreenInfo },

    // --- Finance & Math ---
    { id: 'loan-calc', title: 'القروض', description: 'الأقساط والفوائد.', icon: 'account_balance', component: LoanCalculator },
    { id: 'salary-calc', title: 'الراتب', description: 'ساعة/شهر/سنة.', icon: 'payments', component: SalaryConverter },
    { id: 'vat-calc', title: 'الضريبة', description: 'قيمة مضافة VAT.', icon: 'percent', component: VatCalculator },
    { id: 'discount-calc', title: 'الخصومات', description: 'أسعار التخفيض.', icon: 'local_offer', component: DiscountCalculator },
    { id: 'interest-calc', title: 'الاستثمار', description: 'الفائدة المركبة.', icon: 'savings', component: InterestCalculator },
    { id: 'percentage-calculator', title: 'النسبة المئوية', description: 'حسابات متنوعة.', icon: 'pie_chart', component: PercentageCalculator },
    { id: 'sci-calc', title: 'حاسبة علمية', description: 'جذور ومثلثات.', icon: 'calculate', component: ScientificCalculator },
    { id: 'stat-calc', title: 'الإحصاء', description: 'متوسط وتباين.', icon: 'bar_chart', component: StatisticsCalculator },
    { id: 'matrix-calc', title: 'المصفوفات', description: 'Matrix Ops.', icon: 'grid_on', component: MatrixCalculator },
    { id: 'prime-checker', title: 'الأرقام الأولية', description: 'فحص الأعداد.', icon: 'looks_one', component: PrimeChecker },
    { id: 'number-converter', title: 'أنظمة العد', description: 'Base Converter.', icon: 'dialpad', component: NumberConverter },
    { id: 'random-number', title: 'رقم عشوائي', description: 'RNG.', icon: 'shuffle', component: RandomNumber },

    // --- Images & Colors ---
    { id: 'color-converter', title: 'الألوان', description: 'RGB, HEX, HSL.', icon: 'palette', component: ColorConverter },
    { id: 'color-mix', title: 'دمج الألوان', description: 'خلط الألوان.', icon: 'invert_colors', component: ColorMixer },
    { id: 'cb-sim', title: 'عمى الألوان', description: 'محاكي الرؤية.', icon: 'eye_tracking', component: ColorBlindnessSim },
    { id: 'gradient-gen', title: 'تدرجات CSS', description: 'خلفيات ملونة.', icon: 'gradient', component: GradientGenerator },
    { id: 'img-crop', title: 'قص الصور', description: 'تعديل الأبعاد.', icon: 'crop', component: ImageCropper },
    { id: 'img-filter', title: 'فلاتر', description: 'تأثيرات بصرية.', icon: 'filter_b_and_w', component: ImageFilters },
    { id: 'svg-png', title: 'SVG to PNG', description: 'تحويل فيكتور.', icon: 'image', component: SvgToPng },
    { id: 'ico-conv', title: 'أيقونات ICO', description: 'Favicon.', icon: 'app_shortcut', component: IcoConverter },
    { id: 'img-base64', title: 'صورة لـ نص', description: 'Base64 Image.', icon: 'image_aspect_ratio', component: ImageToBase64 },
    { id: 'exif-read', title: 'بيانات الصورة', description: 'EXIF Metadata.', icon: 'info', component: ExifReader },

    // --- Utilities & Misc ---
    { id: 'stopwatch', title: 'ساعة إيقاف', description: 'مؤقت رياضي.', icon: 'timer', component: Stopwatch },
    { id: 'pomodoro-timer', title: 'بومودورو', description: 'تركيز وإنتاجية.', icon: 'hourglass_top', component: PomodoroTimer },
    { id: 'bmi-calculator', title: 'كتلة الجسم', description: 'الصحة والوزن.', icon: 'monitor_weight', component: BmiCalculator },
    { id: 'uuid-generator', title: 'UUID', description: 'معرفات فريدة.', icon: 'fingerprint', component: UuidGenerator },
    { id: 'barcode-gen', title: 'باركود', description: 'للمنتجات.', icon: 'qr_code_scanner', component: BarcodeGenerator },
    { id: 'iban-check', title: 'فاحص IBAN', description: 'حسابات بنكية.', icon: 'account_balance_wallet', component: IbanValidator },
    { id: 'cc-check', title: 'فاحص بطاقات', description: 'Luhn Check.', icon: 'credit_card', component: CreditCardValidator },
    { id: 'phone-parser', title: 'فاحص أرقام', description: 'بيانات الهاتف.', icon: 'call', component: PhoneNumberParser },
    { id: 'file-size', title: 'أحجام الملفات', description: 'تحويل بايت.', icon: 'folder_open', component: FileSizeConverter },
    { id: 'timezone', title: 'المناطق الزمنية', description: 'توقيت عالمي.', icon: 'public', component: TimeZoneConverter },
    { id: 'unix-timestamp', title: 'Unix Time', description: 'طابع زمني.', icon: 'history', component: UnixTimestamp },
    { id: 'ascii-tool', title: 'جدول ASCII', description: 'رموز.', icon: 'abc', component: AsciiConverter },
    { id: 'roman-tool', title: 'أرقام رومانية', description: 'I, V, X.', icon: 'museum', component: RomanConverter },
    { id: 'box-shadow', title: 'ظل الصندوق', description: 'CSS Shadow.', icon: 'layers', component: BoxShadowGenerator },
    { id: 'css-min', title: 'ضغط CSS', description: 'Minifier.', icon: 'compress', component: CssMinifier },
    { id: 'meta-tag', title: 'SEO Meta', description: 'وسوم الموقع.', icon: 'search', component: MetaTagGenerator },
    { id: 'signature-pad', title: 'توقيع', description: 'رسم يدوي.', icon: 'draw', component: SignaturePad },
    { id: 'memo-pad', title: 'مذكرتي', description: 'ملاحظات.', icon: 'edit_note', component: Scratchpad },
    { id: 'key-code', title: 'أزرار الكيبورد', description: 'Key Codes.', icon: 'keyboard', component: KeyCodeInfo },
    { id: 'aspect-ratio', title: 'أبعاد الشاشة', description: '16:9, 4:3.', icon: 'aspect_ratio', component: AspectRatioCalculator },
];
