import { cn } from "@/lib/utils";
import { Do_Hyeon } from "next/font/google";

import MatchRound from "@/app/(service)/(landing)/_components/MatchRound";
import PredictPercent from "@/app/(service)/(landing)/_components/PredictPercent";

const font = Do_Hyeon({
    subsets: ["latin"],
    weight: "400",
});

export default function Home() {
    return (
        <div className="relative mx-auto max-w-screen-lg flex-1 py-4">
            <div className="flex items-center justify-center py-20">
                <h1
                    className={cn(
                        "text-5xl font-bold text-white",
                        font.className,
                    )}
                >
                    승부예측
                </h1>
            </div>
            <PredictPercent />
            <div className="scrollbar-hide flex w-[1024px] flex-col gap-12">
                <MatchRound />
            </div>
        </div>
    );
}
