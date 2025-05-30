'use client'

import RagHero from "./sections/hero";
import Features from "./sections/features";
import Ideas from "./sections/ideas";
import Metrics from "./sections/metrics";
// import Security from "./sections/security";
import RagStatsSection from "./sections/rag-stats";
// import QuantumSection from "./sections/quantum";
import FAQ from "./sections/faq";
import WhySection from "./sections/WhySection";
import TechniquesSection from "./sections/TechniquesSection";
import SmallFoot from "@/app/sections-old/smallFoot";
export default function RagApplication() {
    return (
        <main className="w-full">
            <RagHero />
            <Features />
            <Ideas />
            <Metrics />
            {/* <TechniquesSection/> */}
            {/* <Security /> */}
            <WhySection />
            <RagStatsSection />
            {/* <QuantumSection /> */}
            <FAQ />
            {/* <TestimonialsSection /> */}
            <SmallFoot title="Start Your Journey to Smarter Workflows" buttonOne="Request a Demo" buttonTwo="Need answers? Let's Talk." />
        </main>
    );
}
 