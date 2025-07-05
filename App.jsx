import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Leaf } from "lucide-react";

const Layout = ({ children }) => (
  <div className="bg-green-100 min-h-screen font-sans">
    <header className="bg-green-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <Leaf className="text-lime-300" />
        <span className="text-xl font-bold">Radhey-Shanti Foundation</span>
      </div>
      <nav className="flex gap-4 text-white">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About Us</Link>
        <Link to="/work" className="hover:underline">Our Work</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </nav>
    </header>
    <main className="p-6 md:p-10">{children}</main>
    <footer className="bg-green-800 text-white text-center p-4 mt-10">
      © 2025 Radhey-Shanti Foundation. All rights reserved.
    </footer>
  </div>
);

const Home = () => (
  <div className="text-center text-green-900 space-y-4">
    <h1 className="text-3xl font-bold">Welcome to Radhey-Shanti Foundation</h1>
    <p className="text-lg">We empower the elderly with love, dignity, and purpose. Explore our mission and join us in creating a more compassionate world.</p>
  </div>
);

const About = () => (
  <Card className="bg-white p-6 max-w-3xl mx-auto text-green-900 space-y-4">
    <h2 className="text-2xl font-semibold">About Us</h2>
    <p>
      Radhey-Shanti Foundation is a humanitarian non-profit initiative committed to transforming the lives of elderly individuals residing in old age homes by fostering self-sufficiency, dignity, and a renewed sense of purpose.
    </p>
    <p>
      Anchored in the timeless philosophy of “Vasudhaiva Kutumbakam”—the world is one family—our work transcends mere caregiving. We strive to cultivate environments where the elderly are not only cared for but are meaningfully engaged, empowered, and celebrated.
    </p>
    <p>
      Through holistic approaches—vocational training, psychological support, creative enrichment, and wellness—we replace marginalization with pathways of autonomy and fulfillment.
    </p>
    <p>
      We envision aging as a stage of wisdom, contribution, and flourishing.
    </p>
  </Card>
);

const Work = () => (
  <div className="grid gap-6 md:grid-cols-2 text-green-900">
    {["Skill-Based Empowerment", "Emotional & Psychological Support", "Creative Engagement for Cognitive Health",
      "Partnering with Old-Age Homes", "Promoting Independent Living", "Combating Loneliness",
      "Preserving Life Stories & Cultural Wisdom", "Advocating for Dignified Aging",
      "Driving Awareness & Policy Change", "Living ‘Vasudhaiva Kutumbakam’"].map((title, i) => (
        <Card key={i} className="bg-white p-5 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p>{[
            "We conduct vocational training to help elders rediscover purpose through hands-on activities.",
            "We create safe environments that prioritize emotional well-being and restore self-worth.",
            "We use art, music, and storytelling to stimulate minds and bring joy.",
            "We collaborate with elder care homes for structured programs and support.",
            "We encourage daily acts of independence to reclaim autonomy.",
            "We facilitate programs to reduce isolation and build companionship.",
            "We document and celebrate life stories to honor cultural wisdom.",
            "We challenge ageism and promote dignity and inclusion.",
            "We advocate for systemic reform and elder care policies.",
            "We believe no elder should be left behind — the world is one family."
          ][i]}</p>
        </Card>
      ))}
  </div>
);

const Contact = () => (
  <Card className="bg-white p-6 max-w-xl mx-auto text-green-900 space-y-4">
    <h2 className="text-2xl font-semibold">Contact Us</h2>
    <p>If you'd like to support our mission or get in touch, we'd love to hear from you.</p>
    <form className="space-y-4">
      <input type="text" placeholder="Rhea Wadhwa,Samarth Aneja and Yajeya Wadhwa" className="w-full p-2 border rounded" />
      <input type="email" placeholder="radheyshantifoundation@gmail.com" className="w-full p-2 border rounded" />
      <textarea placeholder="Be the change!" className="w-full p-2 border rounded"></textarea>
      <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">Send</button>
    </form>
  </Card>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}