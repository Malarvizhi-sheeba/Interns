import React, { useState } from "react";
import "../styles/AccordionSection.css";
import accordianPlus from "../assets/images/accordian-plus.png";
import accordianMinus from "../assets/images/accordian-minus.png";

// D: \scube_weekly_assesment\weekly_asses5\weekly - asses5\src
function AccordionSection() {
    const [accordionStates, setAccordionStates] = useState([false, false, false]);

    const toggleAccordion = (index) => {
        setAccordionStates((prev) => {
            const newStates = [...prev];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    return (
        <section className="accordian-main">
            {[...Array(3)].map((_, index) => (
                <div className="accordian" key={index}>
                    <div
                        className="accordian-head"
                        onClick={() => toggleAccordion(index)}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={accordionStates[index] ? accordianMinus : accordianPlus}
                            alt="toggle icon"
                        />
                        <h2>
                            {[
                                "How can I store different environments on Breeze?",
                                "How can I switch environments on Breeze?",
                                "How do I make my environment URLs safe?",
                            ][index]}
                        </h2>
                    </div>
                    {accordionStates[index] && (
                        <div className="accordian-body">
                            <p>
                                {[
                                    `Once logged in to the Breeze web app, you can create a separate workspace for your projects.
Under the “Environment” section, you can store different URLs for different environments.`,
                                    `You can store different environments’ URLs inside your workspace and just by clicking on those URLs, you will be able to switch between them.`,
                                    `You can create a “key” for your environment to make it secure and access privately.`,
                                ][index]}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}

export default AccordionSection;