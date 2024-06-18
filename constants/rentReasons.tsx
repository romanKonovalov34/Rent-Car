import Reasons1SVG from "@/assets/SVG/reasons/Reason1SVG.svg";
import Reasons2SVG from "@/assets/SVG/reasons/Reason2SVG.svg";
import Reasons3SVG from "@/assets/SVG/reasons/Reason3SVG.svg";
import Reasons4SVG from "@/assets/SVG/reasons/Reason4SVG.svg";
import Reasons5SVG from "@/assets/SVG/reasons/Reason5SVG.svg";
import Reasons6SVG from "@/assets/SVG/reasons/Reason6SVG.svg";
import { IRentStepProps } from "@/types/types";

export const RENT_REASONS: IRentStepProps[] = [
    {
        children: <Reasons1SVG />,
        title: "Страховка",
        description: `Все наши автомобили застрахованы
                    по ОСАГО И КАСКО`,
    },
    {
        children: <Reasons2SVG />,
        title: "Ценовая политика",
        description: `Всегда доступные цены и приятные
                    бонусы постоянным клиентам`,
    },
    {
        children: <Reasons3SVG />,
        title: "Автопарк",
        description: `Весь автопарк в отличном состоянии
                    и всегда пополняется новыми моделями`,
    },
    {
        children: <Reasons4SVG />,
        title: "Техническая поддержка",
        description: `Для вас работает техническая поддержка
                    для решения различных вопросов`,
    },
    {
        children: <Reasons5SVG />,
        title: "Оплата",
        description: `Любая удобная для вас форма оплаты
                    нал/безнал, банковский перевод)`,
    },
    {
        children: <Reasons6SVG />,
        title: "Скорость",
        description: `Оформление аренды любого авто
                    в течении не более 15 минут`,
    },
];
