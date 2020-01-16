const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//images
const ctaImage = document.getElementById('cta-img');
ctaImage.src = 'img/header-img.png';

const middleImage = document.getElementById('middle-img');
middleImage.src = 'img/mid-page-accent.jpg';





// Add the navigation to the header

const navItems = document.querySelectorAll('a');
let itemIncrement = 1;
const navList = navItems.forEach(link => {
  return (link.textContent = siteContent.nav[`nav-item-${itemIncrement++}`]);
});
  navItems.forEach(link => {
    link.style.color = 'green';
    link.onmouseover = function() {
      mouseover();
    };
    link.onmouseout = function() {
      mouseOut();
    };
    function mouseover() {
      link.style.backgroundColor = 'red';
    }
    function mouseOut() {
      link.style.backgroundColor = 'white';
    }
});


//header text
const headerText = document.querySelector('h1');
headerText.textContent = siteContent.cta.h1;

// Button
const button = document.querySelector('button');
button.textContent = siteContent.cta.button;

// Main Content
const mainContent = siteContent['main-content'];

const featuresH4 = document.querySelectorAll('h4');
featuresH4[0].textContent = mainContent['features-h4'];
featuresH4[1].textContent = mainContent['about-h4'];
featuresH4[2].textContent = mainContent['services-h4'];
featuresH4[3].textContent = mainContent['product-h4'];
featuresH4[4].textContent = mainContent['vision-h4'];
featuresH4[5].textContent = siteContent.contact['contact-h4'];

const bodyContentParagraphs = document.querySelectorAll('p');
bodyContentParagraphs[0].textContent = mainContent['features-content'];
bodyContentParagraphs[1].textContent = mainContent['about-content'];
bodyContentParagraphs[2].textContent = mainContent['services-content'];
bodyContentParagraphs[3].textContent = mainContent['product-content'];
bodyContentParagraphs[4].textContent = mainContent['vision-content'];

//Contact
const contactSection = siteContent.contact;

const contactH4 = document.querySelectorAll('.contact h4');
contactH4.textContent = contactSection['contact-h4'];

const contactParagraph = document.querySelectorAll('.contact p');
contactParagraph[0].textContent = contactSection.address;
contactParagraph[1].textContent = contactSection.phone;
contactParagraph[2].textContent = contactSection.email;

// Footer
const footerShortcut = siteContent.footer;

const copyright = document.querySelector('footer p');
copyright.textContent = footerShortcut.copyright;

// Create two new elements and make text green
const newNav = document.querySelector('nav');

const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Home';
newNavItem1.href = '#';
newNavItem1.style.color = 'green';

newNavItem1.onmouseover = function() {
  FrontmouseOver();
};
newNavItem1.onmouseout = function() {
  FrontmouseOut();
};
function FrontmouseOver() {
  newNavItem1.style.backgroundColor = 'red';
}
function FrontmouseOut() {
  newNavItem1.style.backgroundColor = 'white';
}

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Blog';
newNavItem2.href = '#';
newNavItem2.style.color = 'green';

newNavItem2.onmouseover = function() {
  FrontmouseOver();
};
newNavItem2.onmouseout = function() {
  FrontmouseOut();
};
function FrontmouseOver() {
  newNavItem2.style.backgroundColor = 'red';
}
function FrontmouseOut() {
  newNavItem2.style.backgroundColor = 'white';
}

newNav.prepend(newNavItem1);
newNav.appendChild(newNavItem2);


navItems.forEach(item => (item.style.color = 'green'));