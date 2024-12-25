import { FaReact, FaJava } from "react-icons/fa";
import { SiElectron,SiExpo } from "react-icons/si";
import AyagimaGelsinImage from "../assets/ayagimagelsin.png";

export const projects = [
    {
        href: "https://github.com/Cras15/Ajanda",
        projectName: "Ajanda Uygulaması",
        description: "ElectronVite, React ile geliştirilmiş açık kaynak masaüstü uygulaması.",
        color: "orange",
        icon: <div className="flex flex-row space-x-4">
            <FaReact className="h-8 w-8" />
            <SiElectron className="h-8 w-8" />
        </div>,
        image: "https://camo.githubusercontent.com/c893386edbb735e66122b5946930a724a8393271d407c3bb75c40b6f06378044/68747470733a2f2f692e68697a6c69726573696d2e636f6d2f356f36337a776d2e6a7067",
    },
    {
        href: "https://ayagimagelsin.tr",
        projectName: "Ayağıma Gelsin",
        description: "Expo, Java Spring Boot ve React ile geliştirilmiş, web ve mobil tabanlı bir online yemek ve market sipariş uygulaması.",
        color: "red",
        icon: <div className="flex flex-row space-x-4">
            <FaReact className="h-8 w-8" />
            <SiExpo className="h-8 w-8" />
            <FaJava className="h-8 w-8" />
        </div>,
        image: AyagimaGelsinImage,
    },

];