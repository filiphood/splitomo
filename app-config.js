
// app-config.js - Edit this file to customize your landing page
const APP_CONFIG = {
    // Basic App Info
    appName: "Splitomo",
    pageTitle: "Splitomo - Split bills, not friendships",
    metaDescription: "Split bills instantly with AI-powered receipt scanning. Never fight with friends about money again.",
    
    // App Assets
    logoIcon: "images/splitomo-icon.png", // 32x32 app icon for navigation
    logoIconFooter: "images/splitomo-icon.png", // if other version for footer
    
    // Colors (CSS custom properties)
    colors: {
        // Main brand colors
        mainColor: "#248A3D",

        buttonColor: "#248A3D",
        buttonHighlight: "#000000",

        linkColor: "#000000",
        linkHighlight: "#248A3D",

        
        // Text colors
        mainText: "#000000",
        secondaryText: "#7f8c8d",

        // Background colors
        bgMain: "#FFFFFF",
        bgSecondary: "#F5F5F5",
        
        // Logo colors
        logoColorLight: "#000000",   // Top navigation logo
        logoColorDark: "#000000",    // Footer logo
        
        // UI elements
        borderColor: "#e9ecef",
        shadow: "0 10px 30px rgba(0,0,0,0.1)",
        shadowLight: "0 5px 15px rgba(0,0,0,0.08)"
    },

    // Hero Section
    hero: {
        title: "Never fight with friends about money again",
        subtitle: "Split bills instantly with AI-powered receipt scanning. Just snap a photo, add friends, and let Splitomo do the math.",
        phoneImage: "images/splitomo-hero.png",
        downloadButtonText: "Download for iOS"
    },

    // Features Section
    features: {
        title: "How does it work? 🤌",
        subtitle: "Simple and powerful", 
        items: [
            {
                icon: "fas fa-camera",
                title: "Snap a Photo",
                description: "Take a picture of any receipt and let AI extract all items automatically",
                image: "images/splitomo-screen-1.png"
            },
            {
                icon: "fas fa-users", 
                title: "Add Friends",
                description: "Add who was there and assign items to each person with a simple tap",
                image: "images/splitomo-screen-2.png"
            },
            {
                icon: "fas fa-share-alt",
                title: "Share Results", 
                description: "Generate a beautiful PDF showing who owes what and share it instantly",
                image: "images/splitomo-screen-3.png"
            }
        ]
    },

    // About Section (Luna-style)
    about: {
        title: "Hi, I'm Filip 👋",
        paragraphs: [
            "I built Splitomo to help me stop those awkward money conversations with friends and push myself to create something that actually solves a real problem.",
            "I wanted to build a bill splitting experience that felt <strong>incredible</strong> to use so great design and interaction was something I put a lot of time into.",
            "Hopefully you feel that when you use it and my app helps you as much as it's helped me :)"
        ],
        signature: {
            name: "Filip",
            title: "Splitomo creator",
            avatar: "images/splitomo-filip.jpeg"
        },
        mainPhoto: "images/splitomo-filip.jpeg"
    },

    // Contact & Social
    contact: {
        email: "filiphood.creative@gmail.com",
        twitter: "https://twitter.com/filip_hood",
    },

    // Footer
    footer: {
        copyright: "© 2025 Splitomo. Made with ☕️ by Filip."
    },

    // App Store Links (add when ready)
    appStore: {
        ios: "", // Add your App Store URL when ready
        android: ""
    }
};

// Function to apply configuration to the page
function applyConfig() {
    // Update page title and meta
    document.title = APP_CONFIG.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = APP_CONFIG.metaDescription;

    // Update CSS custom properties for colors
    const root = document.documentElement;
    Object.entries(APP_CONFIG.colors).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
    });

    // Update navigation logo
    const navLogo = document.getElementById('nav-logo');
    if (navLogo) {
        const navLogoImg = navLogo.querySelector('img');
        if (navLogoImg) {
            navLogoImg.src = APP_CONFIG.logoIcon;
            navLogoImg.alt = APP_CONFIG.appName;
        }
        // Update logo text color
        navLogo.style.color = APP_CONFIG.colors.logoColorLight;
    }

    // Update footer logo
    const footerLogo = document.getElementById('footer-logo');
    if (footerLogo) {
        const footerLogoImg = footerLogo.querySelector('img');
        if (footerLogoImg) {
            footerLogoImg.src = APP_CONFIG.logoIconFooter || APP_CONFIG.logoIcon;
            footerLogoImg.alt = APP_CONFIG.appName;
        }
        // Update footer logo text color
        footerLogo.style.color = APP_CONFIG.colors.logoColorDark;
    }

    // Update hero section
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroPhoneImage = document.getElementById('hero-phone-image');
    const downloadBtn = document.getElementById('download-ios-btn');
    
    if (heroTitle) heroTitle.textContent = APP_CONFIG.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = APP_CONFIG.hero.subtitle;
    if (heroPhoneImage) {
        heroPhoneImage.src = APP_CONFIG.hero.phoneImage;
        heroPhoneImage.alt = `${APP_CONFIG.appName} App`;
    }
    if (downloadBtn) {
        downloadBtn.innerHTML = `<i class="fab fa-apple"></i> ${APP_CONFIG.hero.downloadButtonText}`;
        if (APP_CONFIG.appStore.ios) {
            downloadBtn.href = APP_CONFIG.appStore.ios;
        }
    }

    // Update features section
    const featuresTitle = document.getElementById('features-title');
    if (featuresTitle) featuresTitle.textContent = APP_CONFIG.features.title;
    const featuresSubtitle = document.getElementById('features-subtitle');
if (featuresSubtitle) featuresSubtitle.textContent = APP_CONFIG.features.subtitle;
    
    APP_CONFIG.features.items.forEach((feature, index) => {
        const num = index + 1;
        const featureTitle = document.getElementById(`feature-${num}-title`);
        const featureDesc = document.getElementById(`feature-${num}-desc`);
        const featureImage = document.querySelector(`.feature-card:nth-child(${num}) .feature-image`);
        const featureIcon = document.querySelector(`.feature-card:nth-child(${num}) .feature-icon i`);
        
        if (featureTitle) featureTitle.textContent = feature.title;
        if (featureDesc) featureDesc.textContent = feature.description;
        if (featureImage) {
            featureImage.src = feature.image;
            featureImage.alt = feature.title;
        }
        if (featureIcon) featureIcon.className = feature.icon;
    });

    // Update about section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.innerHTML = APP_CONFIG.about.title;
    
    APP_CONFIG.about.paragraphs.forEach((paragraph, index) => {
        const aboutText = document.getElementById(`about-text-${index + 1}`);
        if (aboutText) aboutText.innerHTML = paragraph;
    });
    
    // Update signature
    const signatureName = document.getElementById('signature-name');
    const signatureTitle = document.getElementById('signature-title');
    const signatureAvatar = document.getElementById('signature-avatar');
    const aboutAvatar = document.getElementById('about-avatar');
    
    if (signatureName) signatureName.textContent = APP_CONFIG.about.signature.name;
    if (signatureTitle) signatureTitle.textContent = APP_CONFIG.about.signature.title;
    if (signatureAvatar) signatureAvatar.src = APP_CONFIG.about.signature.avatar;
    if (aboutAvatar) aboutAvatar.src = APP_CONFIG.about.mainPhoto;

    // Update social links
    const twitterLink = document.getElementById('twitter-link');
    const emailLink = document.getElementById('email-link');
    
    if (twitterLink) twitterLink.href = APP_CONFIG.contact.twitter;
    if (emailLink) emailLink.href = `mailto:${APP_CONFIG.contact.email}`;

    // Update footer
    const footerCopyright = document.getElementById('footer-copyright');
    if (footerCopyright) footerCopyright.textContent = APP_CONFIG.footer.copyright;

    console.log('✅ Config applied successfully!');
}

// Apply configuration when page loads
document.addEventListener('DOMContentLoaded', applyConfig);

// Function to apply basic config to subpages (privacy, terms)
function applySubpageConfig() {
    // Update CSS custom properties for colors
    const root = document.documentElement;
    Object.entries(APP_CONFIG.colors).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}`, value);
    });

    // Update all logos
    const logos = document.querySelectorAll('.logo img');
    logos.forEach(logo => {
        logo.src = APP_CONFIG.logoIcon;
        logo.alt = APP_CONFIG.appName;
    });

    // Update all email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${APP_CONFIG.contact.email}`;
        if (link.textContent.includes('@')) {
            link.textContent = APP_CONFIG.contact.email;
        }
    });

    // Update footer copyright
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        footerCopyright.textContent = APP_CONFIG.footer.copyright;
    }

    console.log('✅ Subpage config applied successfully!');
}

// Apply configuration based on page type
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('hero-title')) {
        // Main page
        applyConfig();
    } else {
        // Subpage (privacy, terms)
        applySubpageConfig();
    }
});