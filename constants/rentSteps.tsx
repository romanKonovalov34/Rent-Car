import Step1SVG from "@/assets/SVG/rentSteps/Step1SVG.svg";
import Step2SVG from "@/assets/SVG/rentSteps/Step2SVG.svg";
import Step3SVG from "@/assets/SVG/rentSteps/Step3SVG.svg";
import { IRentStepProps } from "@/types/types";

export const RENT_STEPS: IRentStepProps[] = [
    {
        children: <Step1SVG />,
        title: "Обратиться к нам",
        description: `Отлично, если вы это читаете -
                    переходите к шагу номер 2
                    и оставляйте заявку на аренду автомобиля`,
    },
    {
        children: <Step2SVG />,
        title: "Подать заявку",
        description: `Оформляете заявку на сайте,
                    связываетесь по телефону или
                    в мессенджерах и бронируете автомобиль`,
    },
    {
        children: <Step3SVG />,
        title: "Получение",
        description: `Забираете авто в нашем салоне
                    или мы можем доставить в любую
                    точку города`,
    },
];
