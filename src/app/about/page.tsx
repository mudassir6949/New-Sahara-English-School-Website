"use client";

import React, { useState, useEffect } from "react";
import ParentsLogin from "@/app/parents/parents"; // Make sure file is parents.tsx
import AdmissionForm from "@/components/Admission"; // Make sure file is Admission.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function AboutPage() {
  const [showAdmission, setShowAdmission] = useState(false);
  const [showParentsLogin, setShowParentsLogin] = useState(false);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update carousel info
  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Autoplay carousel
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (!api) return;
      const currentIndex = api.selectedScrollSnap();
      const lastIndex = api.scrollSnapList().length - 1;
      api.scrollTo(currentIndex === lastIndex ? 0 : currentIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow =
      showAdmission || showParentsLogin ? "hidden" : "auto";
  }, [showAdmission, showParentsLogin]);

  return (
    <>
      {/* Navbar */}
      {/* Navbar */}
      <div className="flex justify-center bg-red-300 py-4 space-x-50 text-2xl">
        <button
          type="button"
          onClick={() => {
            // Scroll smoothly to the "about" section
            if (typeof window !== "undefined") {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }

            // Hide both modals
            setShowAdmission(false);
            setShowParentsLogin(false);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded hover:bg-gray-200 transition"
        >
          <img
            src="/logo.sahara.jpeg"
            alt="NSES Logo"
            className="w-8 h-8 rounded-full"
          />
          NSES
        </button>

        <button
          type="button"
          onClick={() => {
            setShowAdmission(true);
            setShowParentsLogin(false); // closes parents login
          }}
          className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition"
        >
          Admission
        </button>

        <button
          type="button"
          onClick={() => {
            setShowParentsLogin(true);
            setShowAdmission(false); // closes admission
          }}
          className="px-4 py-2 bg-white rounded hover:bg-gray-200 transition"
        >
          Parents Login
        </button>
      </div>

      {/* Admission Form Modal */}
      {showAdmission && (
        <div className="fixed inset-0 flex items-center justify-center bg-src=/image10..jpeg bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-4">
            <button
              onClick={() => setShowAdmission(false)}
              className="absolute top-2 right-2 text-red-600 text-lg"
            >
              ✖
            </button>
            <AdmissionForm
              onsubmit={() => setShowAdmission(false)}
              // add optional switch button inside form if needed
            />
          </div>
        </div>
      )}

      {/* Parents Login Modal */}
      {showParentsLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-src=/image8..jpeg bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-sm mx-4">
            <button
              onClick={() => setShowParentsLogin(false)}
              className="absolute top-2 right-2 text-red-600 text-lg"
            >
              ✖
            </button>
            <ParentsLogin onSubmit={() => setShowParentsLogin(false)} />
          </div>
        </div>
      )}

      {/* Carousel */}
      <div className="mt-6">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem>
              <img
                src="/image1.jpeg"
                alt="slide 1"
                className="w-full h-[400px] object-cover rounded-md"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/image.6.jpeg"
                alt="slide 2"
                className="w-full h-[400px] object-cover rounded-md"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src="/image3.jpeg"
                alt="slide 3"
                className="w-full h-[400px] object-cover rounded-md"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* About Section */}
      <section id="about">
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10 px-4 md:px-10">
          <div className="md:w-1/2">
            <img
              src="/image5.jpeg"
              alt="About School"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-xl leading-relaxed">
            <h2 className="text-center md:text-left text-4xl text-red-700 mb-3">
              "New Sahara English School"
            </h2>
            <p>
              New Sahara English School is run by HWS and follows MSBSHSE. We
              focus on the overall development of every student, emphasizing
              education, sports, building character through social and moral
              values, and shaping a confident personality.
            </p>
            <br />
            <p>
              We strongly believe in imparting education that makes an
              individual smart by providing them an open platform to think and
              act on instinct rather than giving them only textual knowledge.
            </p>
            <br />
            <p>
              Our ideology “Better efforts, better life” being the motto of New
              Sahara school, we firmly believe that the only way to success is
              hard work.
              <br />
              We believe in giving our students an open platform to think
              liberally.
              <br />
              We focus on teaching them how to think instead of telling them
              what to think.
              <br />
              We tend to involve the student so as to open their creative wings.
            </p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="mt-10 w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.890232321754!2d75.35943755591397!3d19.95384760462654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbbd129458633d%3A0xd1997cc8979cf00c!2sNew%20Sahara%20English%20School!5e0!3m2!1sen!2sin!4v1759309311760!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="New Sahara English School Location"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 text-white py-10 px-4 md:px-10 text-lg">
        <p>Address: Harsul-Sawangi, Aurangabad, Maharashtra 431008</p>
        <p>
          Telephone:{" "}
          <a href="tel:+919518781883" className="underline hover:text-blue-500">
            +91 9518781883
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:newsaharaenglishschool@gmail.com"
            className="underline hover:text-blue-500"
          >
            newsaharaenglishschool@gmail.com
          </a>
        </p>
        <p className="text-center mt-4">
          All Rights Reserved With New Sahara English School
        </p>
      </div>
    </>
  );
}
