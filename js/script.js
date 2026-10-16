// --- ฟังก์ชันสำหรับเปลี่ยนหน้า
function navigateTo(url, event) {
    if (event) event.preventDefault();
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. ไฮไลต์เมนูตามหน้าปัจจุบัน
    let currentPath = window.location.pathname.split('/').pop();
    if (currentPath === '') currentPath = 'index.html';

    const navLinks = document.querySelectorAll('.nav-link, .main-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPath) {
            link.classList.add('active');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuBtn && mainNav) {
        // เมื่อกดแฮมเบอรกะเรอเห้อ ให้แอคทีฟ
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mainNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // กดนอก ให้ปิดเมนูอัตโนมัติ
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });

        // ปิดเมนูอัตโนมัติ
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }

    // 3. Product Grid
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        const products = [
            { name: "เปปเปอร์โรเมีย (Peperomia caperata)", img: "images/Product1.png", specimen: "Price : 1,090 THB", sunLevel: 70, badge: "Masterpiece" },
            { name: "สนออสเตรเลีย (Casuarina sp.)", img: "images/Product2.png", specimen: "Price : 1,300 THB", sunLevel: 80, badge: "New" },
            { name: "อัลลัวออปซิสมาเนียรีอาน่า (alluaudiosis marnieriana)", img: "images/Product3.png", specimen: "Price : 1,190 THB", sunLevel: 100, badge: "" },
            { name: "หมากเล็กหมากน้อย (Antidesma)", img: "images/Product4.png", specimen: "Price : 1,090 THB", sunLevel: 100, badge: "" },
            { name: "อรพิม (Phanera Scandens)", img: "images/Product5.png", specimen: "Price : 890 THB", sunLevel: 90, badge: "" },
            { name: "ยูโฟเบีย เฮดิโอทอยเดส (Euphorbia)", img: "images/Product6.png", specimen: "Price : 1,115 THB", sunLevel: 45, badge: "" },
            { name: "รากสามสิบ (Asparagus racemosus)", img: "images/Product7.png", specimen: "Price : 890 THB", sunLevel: 65, badge: "" },
            { name: "เชอรี่แคระ (Malpighia glabra)", img: "images/Product8.png", specimen: "Price : 999 THB", sunLevel: 95, badge: "" },
            { name: "อรพิม (Phanera Scandens)", img: "images/Product9.png", specimen: "Price : 1,225 THB", sunLevel: 90, badge: "" },
            { name: "Phildendron gloriosum", img: "images/Product10.png", specimen: "Price : 1,115 THB", sunLevel: 45, badge: "" },
            { name: "Anthurium Vittarifolium", img: "images/Product11.png", specimen: "Price : 2,590 THB", sunLevel: 85, badge: "" },
            { name: "เน็กไทร์ (Anthurium Vittarifolium)", img: "images/Product12.png", specimen: "Price : 2,000 THB", sunLevel: 85, badge: "" }
        ];

        let html = '';
        products.forEach(p => {
            let badgeHtml = p.badge ? `<span class="badge bg-olive position-absolute top-0 start-0 m-3">${p.badge}</span>` : '';
            html += `
            <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card wabi-card h-100">
                    ${badgeHtml}
                    <img src="${p.img}" class="card-img-top" alt="${p.name}">
                    <div class="card-body px-0 d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title font-heading mt-2" style="font-size: 1rem;">${p.name}</h5>
                            <p class="text-muted small en-text mb-3">${p.specimen}</p>
                        </div>
                        
                        <div>
                            <div class="mb-3">
                                <label class="small text-muted mb-1" style="font-size: 0.75rem;">ความต้องการแสงแดด</label>
                                <div class="progress rounded-0" style="height: 6px;">
                                    <div class="progress-bar bg-olive" role="progressbar" style="width: ${p.sunLevel}%"></div>
                                </div>
                            </div>
                            
                            <button class="btn btn-outline-dark w-100 rounded-0 py-2" onclick="navigateTo('Contact.html')">สอบถามชิ้นงานนี้</button>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        productGrid.innerHTML = html;
    }

    // Contact.html 
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const alert = document.getElementById('formAlert');
            if (alert) alert.classList.remove('d-none');
            this.reset();
            if (alert) setTimeout(() => alert.classList.add('d-none'), 5000);
        });
    }
});