import React, { useState } from 'react'
import TopHeader from '../components/TopHeader'
import { Container } from 'react-bootstrap'
import ContactSection from '../components/hiredeveloper/ContactSection';
import ProcessSection from '../components/hiredeveloper/ProcessSection';
import FaqSection from '../components/hiredeveloper/FaqSection';
import ServiceSection from '../components/services/ServiceSection';
import TestimonialSection from '../components/services/TestimonialSection';

export default function WebDevelopment() {


    return (
        <div className='development_service nests'>
            <TopHeader title="Web Development" />
            <ContactSection
                title={<>
                    Creating <br />
                    Stunning Websites that <br />
                    Deliver Results and Drive Engagement
                </>}
                description="From initial concept to final deployment, we build websites with meticulous attention to detail, ensuring functionality and user engagement."

            />
            <ServiceSection
                data={[
                    {
                        title: "Comprehensive Web Development Services",
                        description: "We specialize in creating robust websites and web applications using the latest technologies. Our skilled developers excel in building interactive websites and internal management systems. What sets us apart is our commitment to delivering high-quality applications through a transparent and streamlined process. With over eleven years of experience and partnerships with leading brands across 10 different industries, we have the expertise to bring your project to life. We utilize the most effective tools and techniques to ensure your web application meets your specific needs.",
                        image: "https://example.com/images/web_dev_right.webp"
                    },
                    {
                        title: "Cutting-Edge Technologies to Bring Your Project to Life",
                        description: "Our dedicated team uses the most up-to-date coding languages, frameworks, and tools to deliver outstanding results for our clients. We don't just use advanced technologies; we tailor our approach to meet each project's unique requirements, ensuring the final product is something both you and we can be proud of.",
                        image: "https://example.com/images/web_dev_left.webp",
                        points: [
                            "PHP Frameworks",
                            "WordPress",
                            "Shopify",
                            "Node.js",
                            "React.js",
                            "Angular.js"
                        ]
                    }
                ]}
            />
            <TestimonialSection
                heading="Our Web Development Offerings"
                data={[
                    {
                        title: "Custom Web Application Development",
                        description: "We take care of everything from initial design to ongoing support, ensuring a secure, scalable, and smooth experience across all platforms and devices.",
                        points: [
                            "Tailored Solutions",
                            "Scalable Infrastructure",
                            "Responsive Design",
                            "Intuitive User Interfaces",
                            "Robust Functionality"
                        ],
                        image: "https://example.com/images/custom-web-application-development.webp"
                    },
                    {
                        title: "E-commerce Solutions",
                        description: "Build a seamless online store customized to your requirements. Our team integrates your e-commerce platform with existing systems, providing expertise in creating new stores or enhancing existing platforms.",
                        points: [
                            "Secure Payment Integration",
                            "Comprehensive Product Catalog",
                            "Smooth Checkout Process",
                            "Mobile-First Design",
                            "Inventory Management Tools"
                        ],
                        image: "https://example.com/images/e-commerce-solutions.webp"
                    },
                    {
                        title: "Comprehensive Website Maintenance",
                        description: "Rest easy with our flexible maintenance plans—monthly, hourly, or after-hours. Trust us to keep your website secure, updated, and running smoothly. AWS is a trusted partner for website maintenance worldwide.",
                        points: [
                            "Regular Updates and Patches",
                            "Security Monitoring and Alerts",
                            "Performance Optimization",
                            "Content Management",
                            "Bug Detection and Fixes"
                        ],
                        image: "https://example.com/images/comprehensive-website-maintenance.webp"
                    }
                ]}

            />

            <Container>
                <ProcessSection
                    heading="Our Web Development Process: A Step-by-Step Approach"
                    data={[
                        {
                            title: "Strategic Planning",
                            image: "https://example.com/images/strategic-planning.png",
                            description: "We approach web development with a strategic mindset, focusing on understanding your business model, market trends, and product positioning. This ensures we build a foundation that aligns with your goals."
                        },
                        {
                            title: "Product Design",
                            image: "https://example.com/images/product-design.png",
                            description: "Our process brings together a multidisciplinary team of strategists, designers, and developers. This collaborative approach ensures that every aspect of the design aligns with your business objectives and user needs."
                        },
                        {
                            title: "Development & Implementation",
                            image: "https://example.com/images/development-implementation.png",
                            description: "Our development phase is agile and efficient, with experienced managers overseeing every project. We focus on code quality, scalability, and adaptability, ensuring your website is built to the highest standards."
                        },
                        {
                            title: "Quality Assurance & Testing",
                            image: "https://example.com/images/quality-assurance-testing.png",
                            description: "Our rigorous testing process aims to identify and resolve any bugs or issues. We ensure the final product is not only bug-free but also secure, reliable, and provides a seamless user experience."
                        }
                    ]}
                />
            </Container>

            <FaqSection
                data={[
                    {
                        question: "What makes your web development service unique?",
                        answer: "We distinguish ourselves by offering high-quality applications, a transparent development process, and over eleven years of experience working with major companies across a variety of industries."
                    },
                    {
                        question: "Which technologies do you use in your web development projects?",
                        answer: "Our team uses a range of advanced tools and frameworks, including PHP, WordPress, Shopify, Node.js, React.js, and Angular, ensuring each project is tailored to meet specific requirements."
                    },
                    {
                        question: "How do you ensure seamless integration for e-commerce development?",
                        answer: "We create user-friendly online stores that integrate smoothly with your existing technology stack. Our expertise encompasses both full-scale platforms and customized enhancements."
                    },
                    {
                        question: "Can you describe your approach to web application development?",
                        answer: "We handle the entire process, from initial design to ongoing maintenance, ensuring that your web application is secure, scalable, and provides a seamless experience across various devices."
                    },
                    {
                        question: "What services do you offer for Magento website development?",
                        answer: "We specialize in creating custom Magento stores, whether from scratch or via migration. Our services include theme development, integrations, and robust security implementation."
                    },
                    {
                        question: "Why is CMS development important for a successful online presence?",
                        answer: "An effective Content Management System (CMS) is critical for organizing website content. We develop and streamline CMS for various types of websites, including informational sites and e-commerce platforms."
                    },
                    {
                        question: "What is your approach to web app development projects?",
                        answer: "We take a strategic approach by understanding your business model, analyzing market trends, and determining optimal product positioning. This allows us to create customized solutions that align with your goals."
                    },
                    {
                        question: "How do you ensure the quality of your web development projects?",
                        answer: "We employ an agile development process with highly skilled teams, overseen by experienced managers. Rigorous testing ensures our solutions are bug-free, reliable, secure, and offer a smooth user experience."
                    }
                ]}
            />
        </div>
    )
}
