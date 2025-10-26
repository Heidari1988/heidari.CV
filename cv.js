

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('light-mode');
  document.getElementById('themeSwitch').checked = true;

  // 👇 اعمال زبان پیش‌فرض بدون تغییر
  applyTranslation(currentLang);
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
});


function toggleTheme() {
  const switchElem = document.getElementById('themeSwitch');
  if (switchElem.checked) {
    // سوییچ روشن = لایت مود
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
  } else {
    // سوییچ خاموش = دارک مود
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  }
}

    const translations = {
      fa: {
        name: 'محمد حیدری',
        title: 'توسعه‌دهنده وب',
        aboutTitle: 'درباره من',
        aboutText: 'من یک توسعه‌دهنده وب با تجربه در طراحی و پیاده‌سازی اپلیکیشن‌های مدرن هستم. تمرکزم روی React و Django است و علاقه‌مند به ساده‌سازی فرایندهای داخلی و ساخت ابزارهایی هستم که به شرکت در رشد سریع‌تر کمک کنند. از طراحی CRM گرفته تا ساخت داشبوردهای مدیریتی و ابزارهای خودکارسازی، همیشه تلاش کرده‌ام تجربه‌ای کاربردی، ساده و قابل‌اعتماد ارائه کنم.',
        skillsTitle: 'مهارت‌ها',
        roleTitle: 'نقش من در شرکت',
        role1Title: 'طراحی سیستم CRM',
        role1Desc: 'طراحی و توسعه یک سیستم مدیریت مشتریان اختصاصی برای پیگیری ارتباطات و تحلیل فروش.',
        role2Title: 'توسعه ابزارهای خودکارسازی',
        role2Desc: 'ایجاد اسکریپت‌هایی برای کاهش کار دستی و بهبود بازدهی تیم، از جمله ارسال گزارش خودکار.',
        role3Title: 'ایجاد داشبوردهای داخلی',
        role3Desc: 'ساخت داشبوردهایی برای نمایش لحظه‌ای داده‌های کلیدی شرکت و کمک به تصمیم‌گیری سریع‌تر.',
        role4Title: 'دیجیتال مارکتینگ و سئو',
        role4Desc: 'تحلیل رفتار کاربران وب‌سایت، بهینه‌سازی ساختار صفحات و محتوای دیجیتال برای ارتقای رتبه در نتایج جستجو، مدیریت استراتژی‌های کلمات کلیدی و تدوین برنامه‌های دیجیتال مارکتینگ با هدف افزایش بازدید ارگانیک و نرخ تبدیل.',
        contact: 'mohammad@company.com',
        quote: '«ساخت راه‌حل‌های هوشمند برای تسهیل تحول دیجیتال»',
        dir: 'rtl',
        skillsDescription: `به‌عنوان فارغ‌التحصیل مهندسی نرم‌افزار با تجربه حرفه‌ای در فناوری‌های نوین وب، من تجربه عملی در زمینه طراحی رابط کاربری با <strong>HTML/CSS</strong> تا توسعه اپلیکیشن‌های پویا با <strong>React</strong> و <strong>Django</strong> دارم. می‌توانید برخی از پروژه‌های من را در <a href="https://github.com/yourusername" target="_blank" class="skill-link">GitHub</a> مشاهده کنید.`
      },
      en: {
        name: 'Mohammad Heidari',
        title: 'Web Developer',
        aboutTitle: 'About',
        aboutText: "I'm a passionate web developer with several years of experience in designing and building dynamic, responsive web applications using modern technologies such as React and Django. My background combines strong problem-solving skills with a keen eye for detail, allowing me to develop robust solutions that meet real business needs. In my current role, I focus on streamlining internal workflows and creating intuitive user interfaces for our team and clients. Whether it's building a custom CRM, automating repetitive tasks, or visualizing complex data through dashboards, I love turning ideas into practical tools that deliver value.",
        skillsTitle: 'Skills',
        roleTitle: 'Role in the Company',
        role1Title: 'Designed CRM System',
        role1Desc: 'I led the design and development of a custom CRM system tailored to our business workflows. It helps track client interactions, manage sales pipelines, and provides insights through real-time analytics.',
        role2Title: 'Developed Automation Tools',
        role2Desc: 'I created several backend automation scripts that save hours of manual work per week. From syncing reports to automating follow-up emails, these tools enhance our productivity and reduce errors.',
        role3Title: 'Created Internal Dashboards',
        role3Desc: 'I designed and built interactive dashboards using React and Chart.js that visualize business metrics. These tools empower decision-makers with real-time data insights.',
        role4Title: 'Digital Marketing & SEO',
        role4Desc: 'Conducting website traffic analysis, optimizing on-page structure and content for higher search engine rankings, managing keyword strategy, and developing digital marketing campaigns to enhance organic visibility and conversion rates.',
        
        contact: 'mohammad@company.com',
        quote: '"Simplifying business processes through code and creativity."',
        dir: 'ltr',
          skillsDescription: `As a Software Engineering graduate with professional expertise in modern web technologies, I have
    hands-on experience ranging from UI design with <strong>HTML/CSS</strong> to developing dynamic
    applications using <strong>React</strong> and <strong>Django</strong>. You can view some of my projects
    on <a href="https://github.com/yourusername" target="_blank" class="skill-link">GitHub</a>.`
        
        
      }
    };


let currentLang = 'en';  // زبان پیش‌فرض انگلیسی

function toggleLang() {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  applyTranslation(currentLang);
}

function applyTranslation(lang) {
  const t = translations[lang];
  document.body.classList.remove('lang-fa', 'lang-en');
  document.body.classList.add(lang === 'fa' ? 'lang-fa' : 'lang-en');
  document.getElementById('name').textContent = t.name;
  document.getElementById('title').textContent = t.title;
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-text').textContent = t.aboutText;
  document.getElementById('skills-title').textContent = t.skillsTitle;
  document.getElementById('role-title').textContent = t.roleTitle;
  document.getElementById('role1-title').textContent = t.role1Title;
  document.getElementById('role1-desc').textContent = t.role1Desc;
  document.getElementById('role2-title').textContent = t.role2Title;
  document.getElementById('role2-desc').textContent = t.role2Desc;
  document.getElementById('role3-title').textContent = t.role3Title;
  document.getElementById('role3-desc').textContent = t.role3Desc;
  document.getElementById('role4-title').textContent = t.role4Title;
  document.getElementById('role4-desc').textContent = t.role4Desc;
   document.getElementById('skillsDescription').innerHTML = t.skillsDescription;
  document.getElementById('quote').textContent = t.quote;
  document.body.setAttribute('dir', t.dir);
  document.getElementById('flagIcon').src = lang === 'fa'
    ? './jpg/icon/united_kingdom1.png'
    : './jpg/icon/iran1.png';
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('light-mode');
  document.getElementById('themeSwitch').checked = true;

  // 👇 اعمال زبان پیش‌فرض بدون تغییر
  applyTranslation(currentLang);
});









document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const successMsg = document.getElementById('successMsg');
  const loadingContainer = document.getElementById('loadingSuccess');
  const checkmark = document.querySelector('.checkmark');
  const thankText = document.querySelector('.thank-text');
  const modal = document.getElementById('emailModal');
  const openEmailBtn = document.querySelector('[data-bs-target="#emailModal"]');

  let shouldShowSuccess = false;

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    updateSuccessMessage();

    const formData = new FormData(contactForm);

    fetch('https://formsubmit.co/ajax/heidari.digitaldomain@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    })
      .then(response => {
        if (response.ok) {
          contactForm.reset();
          successMsg.classList.remove('d-none');
          shouldShowSuccess = true;

          const modalInstance = bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);
          setTimeout(() => modalInstance.hide(), 400);

        } else {
          alert("مشکلی پیش آمد. دوباره امتحان کنید.");
        }
      })
      .catch(error => {
        console.error(error);
        alert("ارسال با خطا مواجه شد.");
      });
  });

  modal.addEventListener('hidden.bs.modal', () => {
    successMsg.classList.add('d-none');

    if (shouldShowSuccess === true) {
      showLoadingSuccess();
      shouldShowSuccess = false;
    }

    setTimeout(() => {
      if (openEmailBtn) openEmailBtn.focus();
    }, 300);
  });

  // 🎯 تنظیم متن پیام موفقیت بر اساس زبان
  function updateSuccessMessage() {
    const t = translations[currentLang];
    successMsg.innerHTML = t.thankYou || "Thanks! Your message was sent.";
  }

  // ✅ نمایش انیمیشن موفقیت
  function showLoadingSuccess() {
    loadingContainer.classList.remove('d-none');
    checkmark.classList.remove('show');
    thankText.classList.remove('show');

    setTimeout(() => {
      checkmark.classList.add('show');
      thankText.classList.add('show');
    }, 1000);

    setTimeout(() => {
      loadingContainer.classList.add('d-none');
      checkmark.classList.remove('show');
      thankText.classList.remove('show');
    }, 3000);
  }
});

