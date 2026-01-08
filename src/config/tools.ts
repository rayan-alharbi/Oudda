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

export interface ToolConfig {
    id: string;
    title: string;
    description: string;
    icon: string;
    component: any;
}

export const tools: ToolConfig[] = [
    // Core (Original 4)
    {
        id: 'unit-converter',
        title: 'تحويل الوحدات',
        description: 'شامل: طول، وزن، حرارة، وقت، مساحة، وتخزين رقمي.',
        icon: 'scale',
        component: UnitConverter,
    },
    {
        id: 'date-converter',
        title: 'تحويل التواريخ',
        description: 'التحويل بين الهجري والميلادي بدقة.',
        icon: 'calendar',
        component: DateConverter,
    },
    {
        id: 'age-calculator',
        title: 'حاسبة العمر',
        description: 'احسب عمرك بدقة (ميلادي وهجري) وموعد عيد ميلادك.',
        icon: 'cake',
        component: AgeCalculator,
    },
    {
        id: 'qr-generator',
        title: 'توليد QR',
        description: 'أنشئ رموز QR بسرعة للنصوص والروابط.',
        icon: 'qr_code',
        component: QRCodeGenerator,
    },

    // Utilities (Batch 1)
    {
        id: 'password-generator',
        title: 'مولد كلمات المرور',
        description: 'أنشئ كلمات مرور قوية وآمنة.',
        icon: 'key',
        component: PasswordGenerator,
    },
    {
        id: 'json-formatter',
        title: 'منسق JSON',
        description: 'تنسيق، ضغط، والتحقق من أكواد JSON.',
        icon: 'code',
        component: JsonFormatter,
    },
    {
        id: 'word-counter',
        title: 'عداد الكلمات',
        description: 'تحليل النصوص: كلمات، حروف، فقرات.',
        icon: 'text_fields',
        component: WordCounter,
    },

    // Mega Expansion (10 New)
    {
        id: 'stopwatch',
        title: 'ساعة إيقاف',
        description: 'ساعة إيقاف دقيقة مع نظام الجولات (Laps).',
        icon: 'timer',
        component: Stopwatch,
    },
    {
        id: 'pomodoro-timer',
        title: 'مؤقت بومودورو',
        description: 'مؤقت تركيز (25 دقيقة) لزيادة الإنتاجية.',
        icon: 'hourglass_top', // or hourglass_empty
        component: PomodoroTimer,
    },
    {
        id: 'markdown-preview',
        title: 'معاين Markdown',
        description: 'محرر ومعاين مباشر لنصوص Markdown.',
        icon: 'article',
        component: MarkdownPreview,
    },
    {
        id: 'color-converter',
        title: 'محول الألوان',
        description: 'تحويل بين صيغ الألوان Hex, RGB, HSL.',
        icon: 'palette',
        component: ColorConverter,
    },
    {
        id: 'lorem-generator',
        title: 'مولد نص عشوائي',
        description: 'توليد نصوص عربية عشوائية للاختبار (Lorem Ipsum).',
        icon: 'format_align_justify',
        component: LoremGenerator,
    },
    {
        id: 'bmi-calculator',
        title: 'حاسبة كتلة الجسم',
        description: 'احسب مؤشر كتلة الجسم (BMI) واعرف حالتك الصحية.',
        icon: 'health_and_safety',
        component: BmiCalculator,
    },
    {
        id: 'number-converter',
        title: 'محول الأنظمة الرقمية',
        description: 'تحويل بين الثنائي، العشري، الثماني، والسداسي عشر.',
        icon: 'onetwothree', // alternative: binary
        component: NumberConverter,
    },
    {
        id: 'percentage-calculator',
        title: 'حاسبة النسبة المئوية',
        description: 'حسابات سريعة للنسب المئوية والخصومات.',
        icon: 'percent',
        component: PercentageCalculator,
    },
    {
        id: 'aspect-ratio',
        title: 'حاسبة الأبعاد',
        description: 'حساب نسبة العرض إلى الارتفاع للشاشات والصور.',
        icon: 'aspect_ratio',
        component: AspectRatioCalculator,
    },
    {
        id: 'text-case',
        title: 'محول حالة النص',
        description: 'تحويل النصوص إلى أحرف كبيرة، صغيرة، أو عناوين.',
        icon: 'text_format',
        component: TextCaseConverter,
    },
];
