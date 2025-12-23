// Testing.jsx
import React from "react";
import Landing from "../../sections/landing/Landing-2";
import InfiniteScroll from "../../components/infinite-scroll/InfiniteScroll-1";
import About from "../../sections/about/About-2";
import Project from "../../sections/projects/Project-1";
import Features from "../../sections/features/Features-2";
import CTASection from "../../sections/cta/CTASection-1";
import QuickActionButton from "../../components/quickActionButtons/QuickActionButton-1";
import Footer from "../../sections/footer/Footer-1";
import Faq from "../../components/faq/Faq-1";

const Home = () => {
  // faqData.js
  const faqData = [
    {
      question: "What is cloud deployment?",
      answer:
        "Cloud deployment is the process of deploying applications to cloud platforms like AWS, Azure, or Google Cloud instead of running them on local or on-premise servers.",
    },
    {
      question: "Why should applications be deployed on the cloud?",
      answer:
        "Cloud deployment provides scalability, high availability, better performance, and cost efficiency compared to traditional on-premise infrastructure.",
    },
    {
      question: "What are the common cloud deployment models?",
      answer:
        "The common models are public cloud, private cloud, hybrid cloud, and multi-cloud, chosen based on security, compliance, and scalability needs.",
    },
    {
      question: "What is CI/CD in cloud deployment?",
      answer:
        "CI/CD is an automated pipeline that builds, tests, and deploys applications continuously, reducing manual errors and speeding up releases.",
    },
    {
      question: "How is application security handled in cloud deployment?",
      answer:
        "Security is managed using IAM roles, network firewalls, encryption, monitoring, and regular patching to protect cloud-hosted applications.",
    },
    {
      question: "What happens if cloud resources go down?",
      answer:
        "Cloud platforms use redundancy, load balancers, and backups so applications remain available even if individual resources fail.",
    },
  ];

  return (
    <div className="bg-purple-600">
      <QuickActionButton
        size={80}
        topLabel="Book Call"
        bottomLabel="Start Now"
        textSize="text-lg"
        duration={1.2}
        easing="elastic.out(1, 0.5)"
      />

      <div className="relative z-10  rounded-b-[3.5rem]  bg-primary-dark">
        <Landing />
        <div className="max-w-[1600px] mx-auto ">
          <InfiniteScroll />
        </div>
        <About />
        <Project />
        <div className="max-w-[1440px] mx-auto px-6 py-16">
          <h2 className="font-ragnear mb-4 md:mb-8 text-3xl md:text-6xl  font-bold ">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, index) => (
            <Faq
              key={index}
              question={faq.question}
              trigger="hover"
              answer={faq.answer}
            />
          ))}
        </div>
        <Features />
        <CTASection />
      </div>
      <div style={{ height: "70vh" }}></div>

      <Footer />
    </div>
  );
};

export default Home;
