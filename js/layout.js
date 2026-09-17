/* =========================================================
   BMPHCN - LAYOUT DÙNG CHUNG
   Header + Footer + Supabase Auth + Phân quyền
   ========================================================= */

(() => {
    "use strict";

    /* =====================================================
       1. CONFIG SUPABASE
       ===================================================== */

    const SUPABASE_URL =
        "https://swuqrtnfgzyatqwxojge.supabase.co";

    const SUPABASE_KEY =
        "sb_publishable_tyhD6m-_HF6igF_HDpz6rQ_Boa0IzMp";


    /* =====================================================
       2. TẢI SUPABASE JS
       ===================================================== */

    function loadSupabase() {

        return new Promise((resolve, reject) => {

            if (window.supabase) {
                resolve();
                return;
            }

            const script =
                document.createElement("script");

            script.src =
                "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

            script.onload = resolve;

            script.onerror = () => {
                reject(
                    new Error("Không thể tải Supabase.")
                );
            };

            document.head.appendChild(script);
        });
    }


    /* =====================================================
       3. SUPABASE CLIENT
       ===================================================== */

    let supabaseClient = null;


    function initSupabase() {

        if (!window.supabase) {
            throw new Error(
                "Supabase JS chưa được tải."
            );
        }

        if (!window.supabaseClient) {

            window.supabaseClient =
                window.supabase.createClient(
                    SUPABASE_URL,
                    SUPABASE_KEY
                );
        }

        supabaseClient =
            window.supabaseClient;

        return supabaseClient;
    }


    /* =====================================================
       4. HEADER
       ===================================================== */

    function renderHeader() {

        const placeholder =
            document.getElementById(
                "header-placeholder"
            );

        if (!placeholder) {
            console.warn(
                "Không tìm thấy #header-placeholder"
            );
            return;
        }


        placeholder.innerHTML = `

            <header>

                <a
                    href="index.html"
                    class="logo-link"
                    aria-label="Trang chủ"
                >

                    <div class="logo">

                        <img
                            src="images/logo_Bộ môn.png"
                            alt="Logo Bộ môn"
                        >

                    </div>


                    <div class="logo-text">

                        <div id="logo-line-1">
                            BỘ MÔN PHỤC HỒI CHỨC NĂNG
                        </div>

                        <div id="logo-line-2">
                            TRƯỜNG ĐIỀU DƯỠNG - KỸ THUẬT Y HỌC
                        </div>

                        <div id="logo-line-3">
                            ĐẠI HỌC Y DƯỢC THÀNH PHỐ HỒ CHÍ MINH
                        </div>

                    </div>

                </a>


                <nav
                    class="nav-links"
                    id="mainNav"
                    aria-label="Điều hướng chính"
                >

                    <a
                        href="index.html"
                        class="nav-item"
                    >
                        Trang chủ
                    </a>

                    <a
                        href="gioi-thieu.html"
                        class="nav-item"
                    >
                        Giới thiệu
                    </a>

                    <a
                        href="tuyen-sinh.html"
                        class="nav-item"
                    >
                        Tuyển sinh
                    </a>

                    <a
                        href="luan-van.html"
                        class="nav-item"
                    >
                        Luận văn
                    </a>

                    <a
                        href="tai-nguyen.html"
                        class="nav-item"
                    >
                        Tài nguyên
                    </a>

                    <a
                        href="thong-bao.html"
                        class="nav-item"
                    >
                        Thông báo
                    </a>

                    <a
                        href="login.html"
                        class="btn-login"
                        id="btnAuthNav"
                    >
                        Đăng nhập
                    </a>

                </nav>


                <button
                    type="button"
                    class="menu-toggle"
                    id="menuToggle"
                    aria-label="Mở menu"
                    aria-expanded="false"
                >
                    <i class="fas fa-bars"></i>
                </button>

            </header>
        `;
    }


    /* =====================================================
       5. FOOTER
       ===================================================== */

    function renderFooter() {

        const placeholder =
            document.getElementById(
                "footer-placeholder"
            );

        if (!placeholder) {
            console.warn(
                "Không tìm thấy #footer-placeholder"
            );
            return;
        }


        placeholder.innerHTML = `

            <footer>

                <p>
                    © ${new Date().getFullYear()}
                    Bộ môn Phục hồi chức năng -
                    Đại học Y Dược Thành phố Hồ Chí Minh
                </p>

            </footer>
        `;
    }


    /* =====================================================
       6. MOBILE MENU
       ===================================================== */

    function initMobileMenu() {

        const toggle =
            document.getElementById(
                "menuToggle"
            );

        const nav =
            document.getElementById(
                "mainNav"
            );

        if (!toggle || !nav) {
            return;
        }


        toggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    nav.classList.toggle(
                        "active"
                    );

                toggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                const icon =
                    toggle.querySelector("i");

                if (icon) {

                    icon.className =
                        isOpen
                            ? "fas fa-times"
                            : "fas fa-bars";
                }

            }
        );


        nav.addEventListener(
            "click",
            (event) => {

                const link =
                    event.target.closest(
                        "a"
                    );

                if (!link) {
                    return;
                }

                nav.classList.remove(
                    "active"
                );

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                const icon =
                    toggle.querySelector("i");

                if (icon) {
                    icon.className =
                        "fas fa-bars";
                }
            }
        );


        document.addEventListener(
            "click",
            (event) => {

                if (
                    !nav.contains(event.target) &&
                    !toggle.contains(event.target)
                ) {

                    nav.classList.remove(
                        "active"
                    );

                    toggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    const icon =
                        toggle.querySelector("i");

                    if (icon) {
                        icon.className =
                            "fas fa-bars";
                    }
                }
            }
        );
    }


    /* =====================================================
       7. ACTIVE MENU
       ===================================================== */

    function setActiveMenu() {

        const currentFile =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        const currentPage =
            currentFile || "index.html";


        document
            .querySelectorAll(".nav-item")
            .forEach((link) => {

                const href =
                    (link.getAttribute("href") || "")
                        .split("?")[0]
                        .split("#")[0]
                        .toLowerCase();


                if (href === currentPage) {

                    link.classList.add(
                        "active"
                    );

                } else {

                    link.classList.remove(
                        "active"
                    );
                }

            });
    }


    /* =====================================================
       8. TRANG CẦN ĐĂNG NHẬP
       ===================================================== */

    const PROTECTED_PAGES = [

        "dashboard.html",

        "quan-ly-giang-vien.html",

        "quan-ly-sinh-vien.html",

        "quan-ly-hoc-phan.html",

        "phan-cong.html",

        "thoi-khoa-bieu.html",

        "quan-ly-diem.html"

    ];


    /* =====================================================
       9. TRANG DÀNH CHO ADMIN / GIẢNG VIÊN
       ===================================================== */

    const STAFF_PAGES = [

        "dashboard.html",

        "quan-ly-giang-vien.html",

        "quan-ly-sinh-vien.html",

        "quan-ly-hoc-phan.html",

        "phan-cong.html",

        "thoi-khoa-bieu.html",

        "quan-ly-diem.html"

    ];


    /* =====================================================
       10. LẤY TÊN TRANG
       ===================================================== */

    function getCurrentPage() {

        return (
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase()
            || "index.html"
        );
    }


    /* =====================================================
       11. LẤY PROFILE
       ===================================================== */

    async function getProfile(userId) {

        const {
            data,
            error
        } = await supabaseClient
            .from("profiles")
            .select(
                "id, full_name, email, role, status"
            )
            .eq("id", userId)
            .maybeSingle();


        if (error) {

            console.error(
                "Lỗi lấy profile:",
                error
            );

            throw error;
        }


        return data;
    }


    /* =====================================================
       12. HIỂN THỊ TRẠNG THÁI AUTH
       ===================================================== */

    function updateAuthButton(user, profile) {

        const button =
            document.getElementById(
                "btnAuthNav"
            );

        if (!button) {
            return;
        }


        /* ---------------------------------------------
           CHƯA ĐĂNG NHẬP
           --------------------------------------------- */

        if (!user) {

            button.href =
                "login.html";

            button.textContent =
                "Đăng nhập";

            button.className =
                "btn-login";

            return;
        }


        /* ---------------------------------------------
           ĐÃ ĐĂNG NHẬP
           --------------------------------------------- */

        const role =
            profile?.role || "";


        if (role === "student") {

            button.href =
                "#";

            button.textContent =
                "Đăng xuất";

            button.className =
                "btn-login";

            return;
        }


        button.href =
            "dashboard.html";

        button.textContent =
            profile?.full_name ||
            user.email ||
            "Tài khoản";

        button.className =
            "btn-login";
    }


    /* =====================================================
       13. ĐĂNG XUẤT
       ===================================================== */

    async function logout() {

        try {

            const {
                error
            } = await supabaseClient.auth.signOut();


            if (error) {
                throw error;
            }


            window.location.href =
                "index.html";

        } catch (error) {

            console.error(
                "Lỗi đăng xuất:",
                error
            );

            alert(
                "Không thể đăng xuất. Vui lòng thử lại."
            );
        }
    }


    /* =====================================================
       14. XỬ LÝ CLICK NÚT AUTH
       ===================================================== */

    function initAuthButton() {

        document.addEventListener(
            "click",
            async (event) => {

                const button =
                    event.target.closest(
                        "#btnAuthNav"
                    );

                if (!button) {
                    return;
                }


                const sessionResult =
                    await supabaseClient.auth.getSession();


                const user =
                    sessionResult
                        ?.data
                        ?.session
                        ?.user;


                if (
                    user &&
                    button.textContent
                        .trim()
                        .toLowerCase()
                        .includes("đăng xuất")
                ) {

                    event.preventDefault();

                    await logout();
                }

            }
        );
    }


    /* =====================================================
       15. TRANG TỪ CHỐI TRUY CẬP
       ===================================================== */

    function accessDenied() {

        document.body.innerHTML = `

            <main
                style="
                    min-height:100vh;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    text-align:center;
                "
            >

                <div class="card">

                    <i
                        class="fas fa-lock"
                        style="
                            font-size:3rem;
                            color:var(--accent);
                            margin-bottom:1rem;
                        "
                    ></i>

                    <h2>
                        Không có quyền truy cập
                    </h2>

                    <p style="margin-top:.75rem;">
                        Tài khoản của bạn không được
                        cấp quyền truy cập trang này.
                    </p>

                    <a
                        href="index.html"
                        class="btn-primary"
                        style="margin-top:1.5rem;"
                    >
                        Về trang chủ
                    </a>

                </div>

            </main>
        `;
    }


    /* =====================================================
       16. KIỂM TRA QUYỀN TRUY CẬP
       ===================================================== */

    async function checkPageAccess(
        user,
        profile
    ) {

        const page =
            getCurrentPage();


        const isProtected =
            PROTECTED_PAGES.includes(
                page
            );


        if (!isProtected) {
            return true;
        }


        /* ---------------------------------------------
           CHƯA ĐĂNG NHẬP
           --------------------------------------------- */

        if (!user) {

            window.location.href =
                `login.html?redirect=${encodeURIComponent(
                    page
                )}`;

            return false;
        }


        /* ---------------------------------------------
           KHÔNG CÓ PROFILE
           --------------------------------------------- */

        if (!profile) {

            await logout();

            return false;
        }


        /* ---------------------------------------------
           TÀI KHOẢN KHÔNG HOẠT ĐỘNG
           --------------------------------------------- */

        if (
            profile.status &&
            profile.status !== "active"
        ) {

            alert(
                "Tài khoản của bạn chưa được kích hoạt."
            );

            await logout();

            return false;
        }


        /* ---------------------------------------------
           KIỂM TRA ROLE
           --------------------------------------------- */

        if (
            STAFF_PAGES.includes(page) &&
            !["admin", "lecturer"].includes(
                profile.role
            )
        ) {

            accessDenied();

            return false;
        }


        return true;
    }


    /* =====================================================
       17. LOG TRUY CẬP
       ===================================================== */

    async function recordAccessLog(user) {

        if (!user) {
            return;
        }


        try {

            const page =
                getCurrentPage();


            const key =
                `access_log_${page}`;


            const last =
                sessionStorage.getItem(
                    key
                );


            const now =
                Date.now();


            if (
                last &&
                now - Number(last) < 60000
            ) {
                return;
            }


            sessionStorage.setItem(
                key,
                String(now)
            );


            await supabaseClient
                .from("access_logs")
                .insert({

                    timestamp:
                        new Date().toISOString(),

                    path:
                        window.location.pathname,

                    user_id:
                        user.id,

                    user_email:
                        user.email || "",

                    user_agent:
                        navigator.userAgent

                });

        } catch (error) {

            console.warn(
                "Không ghi được access log:",
                error
            );
        }
    }


    /* =====================================================
       18. KHỞI TẠO AUTH
       ===================================================== */

    async function initAuth() {

        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth
                    .getSession();


            if (error) {
                throw error;
            }


            const session =
                data?.session || null;


            const user =
                session?.user || null;


            let profile = null;


            if (user) {

                profile =
                    await getProfile(
                        user.id
                    );
            }


            updateAuthButton(
                user,
                profile
            );


            const allowed =
                await checkPageAccess(
                    user,
                    profile
                );


            if (!allowed) {
                return;
            }


            if (user) {

                document.body.classList.add(
                    "is-logged-in"
                );

                await recordAccessLog(
                    user
                );

            } else {

                document.body.classList.remove(
                    "is-logged-in"
                );
            }


            /* -----------------------------------------
               THEO DÕI THAY ĐỔI AUTH
               ----------------------------------------- */

            supabaseClient.auth
                .onAuthStateChange(
                    async (
                        event,
                        session
                    ) => {

                        const currentUser =
                            session?.user ||
                            null;


                        let currentProfile =
                            null;


                        if (currentUser) {

                            try {

                                currentProfile =
                                    await getProfile(
                                        currentUser.id
                                    );

                            } catch (error) {

                                console.error(
                                    error
                                );
                            }
                        }


                        updateAuthButton(
                            currentUser,
                            currentProfile
                        );


                        if (
                            currentUser
                        ) {

                            document.body.classList.add(
                                "is-logged-in"
                            );

                        } else {

                            document.body.classList.remove(
                                "is-logged-in"
                            );
                        }
                    }
                );

        } catch (error) {

            console.error(
                "Lỗi khởi tạo Auth:",
                error
            );
        }
    }


    /* =====================================================
       19. KHỞI TẠO
       ===================================================== */

    async function init() {

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

            console.error(
                "Lỗi khởi tạo layout:",
                error
            );
        }
    }


    /* =====================================================
       20. CHẠY
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();
    }

})();
