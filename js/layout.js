/* =========================================================
   BMPHCN - LAYOUT DÙNG CHUNG
   Header + Footer + Supabase Auth
   ========================================================= */

(() => {
    "use strict";

    /* =====================================================
       1. CONFIG SUPABASE
       ===================================================== */
    const SUPABASE_URL = "https://swuqrtnfgzyatqwxojge.supabase.co";
    const SUPABASE_KEY = "sb_publishable_tyhD6m-_HF6igF_HDpz6rQ_Boa0IzMp";

    /* =====================================================
       2. TẢI SUPABASE JS
       ===================================================== */
    function loadSupabase() {
        return new Promise((resolve, reject) => {
            if (window.supabase) {
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
            script.onload = resolve;
            script.onerror = () => reject(new Error("Không thể tải Supabase."));
            document.head.appendChild(script);
        });
    }

    let supabaseClient = null;

    function initSupabase() {
        if (!window.supabase) throw new Error("Supabase JS chưa được tải.");
        if (!window.supabaseClient) {
            window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        }
        supabaseClient = window.supabaseClient;
        return supabaseClient;
    }

    /* =====================================================
       3. HEADER & FOOTER
       ===================================================== */
    function renderHeader() {
        const placeholder = document.getElementById("header-placeholder");
        if (!placeholder) return;

        placeholder.innerHTML = `
            <style>
                /* Style riêng cho nút Đăng xuất để có màu đỏ cảnh báo */
                .btn-logout {
                    background: var(--accent);
                }
                .btn-logout:hover {
                    background: #be123c; /* Đỏ sậm hơn khi hover */
                }
            </style>
            <header>
                <a href="./index.html" class="logo-link" aria-label="Trang chủ">
                    <div class="logo">
                        <img src="./images/logo_Bộ môn.png" alt="Logo Bộ môn" onerror="this.src='./logo.png'">
                    </div>
                </a>
                <nav class="nav-links" id="mainNav" aria-label="Điều hướng chính">
                    <a href="./index.html" class="nav-item">Trang chủ</a>
                    <a href="./gioi-thieu.html" class="nav-item">Giới thiệu</a>
                    <a href="./tuyen-sinh.html" class="nav-item">Tuyển sinh</a>
                    <a href="./luan-van.html" class="nav-item">Luận văn</a>
                    <a href="./tai-nguyen.html" class="nav-item">Tài nguyên</a>
                    <a href="./thong-bao.html" class="nav-item">Thông báo</a>
                    
                    <!-- Nhóm nút Xác thực (Auth) -->
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <a href="./login.html" class="btn-login" id="btnAuthNav">
                            Đăng nhập
                        </a>
                        <a href="#" class="btn-login btn-logout" id="btnLogoutNav" style="display: none;">
                            <i class="fas fa-sign-out-alt" style="margin-right: 5px;"></i> Đăng xuất
                        </a>
                    </div>
                </nav>
                <button type="button" class="menu-toggle" id="menuToggle" aria-label="Mở menu" aria-expanded="false">
                    <i class="fas fa-bars"></i>
                </button>
            </header>
        `;
    }

    function renderFooter() {
        const placeholder = document.getElementById("footer-placeholder");
        if (!placeholder) return;
        placeholder.innerHTML = `
            <footer>
                <p>© ${new Date().getFullYear()} Bộ môn Phục hồi chức năng. Mọi quyền được bảo lưu.</p>
            </footer>
        `;
    }

    /* =====================================================
       4. GIAO DIỆN MENU & ACTIVE LINK
       ===================================================== */
    function initMobileMenu() {
        const toggle = document.getElementById("menuToggle");
        const nav = document.getElementById("mainNav");
        if (!toggle || !nav) return;

        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("active");
            toggle.setAttribute("aria-expanded", String(isOpen));
            const icon = toggle.querySelector("i");
            if (icon) icon.className = isOpen ? "fas fa-times" : "fas fa-bars";
        });

        nav.addEventListener("click", (event) => {
            if (!event.target.closest("a")) return;
            nav.classList.remove("active");
            toggle.setAttribute("aria-expanded", "false");
            const icon = toggle.querySelector("i");
            if (icon) icon.className = "fas fa-bars";
        });
    }

    function setActiveMenu() {
        let currentFile = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
        
        document.querySelectorAll(".nav-item").forEach((link) => {
            const href = (link.getAttribute("href") || "").replace("./", "").split("?")[0].split("#")[0].toLowerCase();
            if (href === currentFile) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    /* =====================================================
       5. QUẢN LÝ TRUY CẬP 
       ===================================================== */
    const PROTECTED_PAGES = [
        "dashboard.html", "quan-ly-giang-vien.html", "quan-ly-sinh-vien.html",
        "quan-ly-hoc-phan.html", "phan-cong.html", "thoi-khoa-bieu.html", "quan-ly-diem.html"
    ];

    function getCurrentPage() {
        return window.location.pathname.split("/").pop().toLowerCase() || "index.html";
    }

    async function getProfile(userId) {
        // ĐÃ CHUYỂN TỪ 'profiles' SANG 'tai-khoan-he-thong'
        const { data, error } = await supabaseClient
            .from("tai-khoan-he-thong")
            .select("*")
            .eq("id", userId)
            .maybeSingle();

        if (error) {
            console.error("Lỗi lấy thông tin hệ thống:", error);
            return null;
        }
        return data;
    }

    function updateAuthButton(user, profile) {
        const btnAuth = document.getElementById("btnAuthNav");
        const btnLogout = document.getElementById("btnLogoutNav");
        if (!btnAuth) return;

        if (!user) {
            // Khi CHƯA đăng nhập
            btnAuth.href = "./login.html";
            btnAuth.innerHTML = "Đăng nhập";
            if (btnLogout) btnLogout.style.display = "none";
            return;
        }

        // Khi ĐÃ đăng nhập (Tìm cột ho-ten hoặc email tương ứng)
        let displayName = user.email || "Tài khoản";
        
        // Nếu trong bảng tai-khoan-he-thong có cột họ tên thì dùng nó
        if (profile) {
            if (profile['ho-ten']) {
                displayName = profile['ho-ten'];
            } else if (profile['email']) {
                displayName = profile['email'];
            }
        }

        btnAuth.href = "./dashboard.html";
        btnAuth.innerHTML = `<i class="fas fa-user-circle" style="margin-right: 5px;"></i> ${displayName}`;
        
        // Hiển thị nút đăng xuất
        if (btnLogout) btnLogout.style.display = "inline-flex";
    }

    async function logout() {
        try {
            await supabaseClient.auth.signOut();
            window.location.replace("./index.html");
        } catch (error) {
            console.error("Lỗi đăng xuất:", error);
            alert("Không thể đăng xuất. Vui lòng thử lại.");
        }
    }

    function initAuthButton() {
        // Lắng nghe sự kiện click trên nút Đăng xuất chuyên biệt
        document.addEventListener("click", async (event) => {
            const logoutBtn = event.target.closest("#btnLogoutNav");
            if (logoutBtn) {
                event.preventDefault();
                await logout();
            }
        });
    }

    async function checkPageAccess(user) {
        const page = getCurrentPage();
        const isProtected = PROTECTED_PAGES.includes(page);

        if (!isProtected) return true;

        if (!user) {
            window.location.replace(`./login.html?redirect=${encodeURIComponent(page)}`);
            return false;
        }

        return true;
    }

    /* =====================================================
       6. KHỞI TẠO HỆ THỐNG AUTH
       ===================================================== */
    async function initAuth() {
        try {
            const { data, error } = await supabaseClient.auth.getSession();
            if (error) throw error;

            const user = data?.session?.user || null;
            let profile = null;

            if (user) {
                profile = await getProfile(user.id);
            }

            updateAuthButton(user, profile);
            
            const allowed = await checkPageAccess(user);
            const mainEl = document.querySelector("main");

            if (allowed) {
                if (user) document.body.classList.add("is-logged-in");
                if (mainEl) mainEl.style.opacity = "1"; 
            } else {
                document.body.classList.remove("is-logged-in");
            }

            supabaseClient.auth.onAuthStateChange(async (event, session) => {
                if (event === 'SIGNED_OUT') {
                    const page = getCurrentPage();
                    if (PROTECTED_PAGES.includes(page)) {
                        window.location.replace("./login.html");
                    } else {
                        document.body.classList.remove("is-logged-in");
                        updateAuthButton(null, null);
                    }
                }
            });

        } catch (error) {
            console.error("Lỗi khởi tạo Auth:", error);
            if (PROTECTED_PAGES.includes(getCurrentPage())) {
                window.location.replace("./login.html");
            }
        }
    }

    /* =====================================================
       7. HÀM CHẠY CHÍNH (INIT)
       ===================================================== */
    async function init() {
        const page = getCurrentPage();
        const mainEl = document.querySelector("main");
        if (PROTECTED_PAGES.includes(page) && mainEl) {
            mainEl.style.opacity = "0"; 
            mainEl.style.transition = "opacity 0.3s ease";
        }

        try {
            renderHeader();
            renderFooter();
            initMobileMenu();
            setActiveMenu();

            await loadSupabase();
            initSupabase();
            initAuthButton();
            await initAuth();
        } catch (error) {
            console.error("Lỗi hệ thống:", error);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
