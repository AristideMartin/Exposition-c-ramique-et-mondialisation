class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    transition: all 0.3s ease;
                }
                .nav-link:hover {
                    color: #4f46e5;
                    transform: translateY(-2px);
                }
                @media (max-width: 768px) {
                    .mobile-menu {
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.3s ease-out;
                    }
                    .mobile-menu.open {
                        max-height: 500px;
                    }
                }
            </style>
            <nav class="bg-white shadow-lg">
                <div class="container mx-auto px-4 py-4">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="flex items-center space-x-2">
                            <i data-feather="home" class="text-indigo-600"></i>
                            <span class="text-xl font-bold text-gray-800">Artéfacts & Merveilles</span>
</a>
                        
                        <div class="hidden md:flex space-x-8">
                            <a href="index.html" class="nav-link text-gray-600 hover:text-indigo-600 transition">Home</a>
                            <a href="intro.html" class="nav-link text-gray-600 hover:text-indigo-600 transition">Start Exhibition</a>
</div>
                        
                        <button id="mobile-menu-button" class="md:hidden text-gray-600 focus:outline-none">
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                    
                    <div id="mobile-menu" class="mobile-menu md:hidden">
                        <div class="pt-4 pb-2 space-y-2">
                            <a href="index.html" class="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Home</a>
                            <a href="intro.html" class="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100">Start Exhibition</a>
</div>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const menuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const icon = menuButton.querySelector('i');
            if (mobileMenu.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);