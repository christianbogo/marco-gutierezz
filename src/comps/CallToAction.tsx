import React, { useState } from "react";
import "../styles/about.css"; // Re-using about styles for consistency

const CallToAction = () => {
    const userEmail = "marcogutierrezho@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(userEmail);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // fallback for older browsers
            const textarea = document.createElement("textarea");
            textarea.value = userEmail;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand("copy");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err2) { }
            document.body.removeChild(textarea);
        }
    };

    return (
        <div className="about-cta">
            <h3>Ready to Bring Your Vision to Life?</h3>
            <p>
                Let's discuss your project and create something extraordinary together.
                I'm here to help you tell your story through compelling visual content.
            </p>
            <button className="about-cta-button" onClick={handleCopyEmail}>
                {copied ? "Email Copied!" : "Get in Touch"}
            </button>
        </div>
    );
};

export default CallToAction;
