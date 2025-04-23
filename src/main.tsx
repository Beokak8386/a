import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/index.css";
import PhotoEditor from "@/components/photo-editor";
import GenerativeAiTools from "@/components/generative-ai-tools";
import GenerativeFill from "@/components/generative-fill";
import GenerativeExpand from "@/components/generative-expand";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="overflow-x-hidden bg-[#0a0f20] bg-[radial-gradient(ellipse_40%_100%_at_60%_-10%,rgba(119,138,232,0.3),rgba(119,138,232,0))] text-white">
            <Header />
            <PhotoEditor />
            <hr className="h-0 w-full border-t-gray-400/30 text-gray-300/50" />
            <GenerativeAiTools />
            <GenerativeFill />
            <GenerativeExpand />
            <Footer />
        </div>
    </StrictMode>,
);
