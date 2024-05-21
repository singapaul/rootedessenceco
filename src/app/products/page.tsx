"use client"
import MovingBanner from "@/components/molecules/MovingBanner/MovingBanner";
import { Footer } from "@/components/organisms/Footer";
import { NavBar } from "@/components/organisms/NavBar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
           <NavBar/>
           <MovingBanner />
           <Footer />
        </main>
    )}    