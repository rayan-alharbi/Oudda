import UnitConverter from '../components/tools/UnitConverter.astro';
import DateConverter from '../components/tools/DateConverter.astro';
import AgeCalculator from '../components/tools/AgeCalculator.astro';
import QRCodeGenerator from '../components/tools/QRCodeGenerator.astro';
import PasswordGenerator from '../components/tools/PasswordGenerator.astro';
import JsonFormatter from '../components/tools/JsonFormatter.astro';
import WordCounter from '../components/tools/WordCounter.astro';

export interface ToolConfig {
    id: string;
    title: string;
    description: string;
    icon: string;
    component: any; // Astro component type
}

export const tools: ToolConfig[] = [
    {
        id: 'unit-converter',
        title: 'تحويل الوحدات',
        description: 'حول بين وحدات القياس المختلفة: الطول، الوزن، الحرارة، والمزيد.',
        icon: 'scale',
        component: UnitConverter,
    },
    {
        id: 'date-converter',
        title: 'تحويل التواريخ',
        description: 'التحويل الدقيق بين التاريخ الهجري والميلادي مع عرض تفاصيل اليوم.',
        icon: 'calendar',
        component: DateConverter,
    },
    {
        id: 'age-calculator',
        title: 'حاسبة العمر',
        description: 'احسب عمرك بدقة بالسنوات والشهور والأيام، واحسب الفرق بين تاريخين.',
        icon: 'cake',
        component: AgeCalculator,
    },
    {
        id: 'qr-generator',
        title: 'توليد QR',
        description: 'أنشئ رموز QR لأي نص أو رابط وقم بتحميلها أو مشاركتها بسهولة.',
        icon: 'qr_code',
        component: QRCodeGenerator,
    },
    {
        id: 'password-generator',
        title: 'مولد كلمات المرور',
        description: 'أنشئ كلمات مرور قوية وآمنة مع خيارات مخصصة.',
        icon: 'key',
        component: PasswordGenerator,
    },
    {
        id: 'json-formatter',
        title: 'منسق JSON',
        description: 'قم بتنسيق وضغط أكواد JSON والتحقق من صحتها.',
        icon: 'code',
        component: JsonFormatter,
    },
    {
        id: 'word-counter',
        title: 'عداد الكلمات',
        description: 'احسب عدد الكلمات والحروف والفقرات في النصوص.',
        icon: 'text_fields',
        component: WordCounter,
    },
];
