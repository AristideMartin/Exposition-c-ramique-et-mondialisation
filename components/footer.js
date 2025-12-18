class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1e293b;
                }
                .footer-link:hover {
                    color: #a5b4fc;
                    transform: translateX(2px);
                }
            </style>
            <footer class="text-gray-300 py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div class="md:col-span-2">
                            <h3 class="text-2xl font-bold text-white mb-4">Artéfacts & Merveilles</h3>
                            <p class="mb-4">Découvrez les trésors de la civilisation humaine à travers notre expérience de musée virtuel.</p>
<div class="flex space-x-4">
                                <a href="#" class="text-gray-300 hover:text-white transition">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="text-gray-300 hover:text-white transition">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="text-gray-300 hover:text-white transition">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="text-gray-300 hover:text-white transition">
                                    <i data-feather="youtube"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold text-white mb-4">Liens Rapides</h4>
<ul class="space-y-2">
                                <li><a href="index.html" class="footer-link transition">Home</a></li>
                                <li><a href="intro.html" class="footer-link transition">Start Exhibition</a></li>
</ul>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-semibold text-white mb-4">Contact</h4>
<ul class="space-y-2">
                                <li class="flex items-center">
                                    <i data-feather="map-pin" class="mr-2"></i>
                                    <span>123 Museum Ave, Culture City</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="mail" class="mr-2"></i>
                                    <span>info@artifacts-wonders.com</span>
                                </li>
                                <li class="flex items-center">
                                    <i data-feather="phone" class="mr-2"></i>
                                    <span>+1 (555) 123-4567</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p>&copy; ${new Date().getFullYear()} Artifacts & Wonders. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);