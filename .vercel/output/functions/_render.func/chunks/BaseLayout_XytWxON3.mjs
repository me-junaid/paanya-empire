import { S as createAstro, d as maybeRenderHead, f as renderHead, i as renderComponent, m as createRenderInstruction, p as addAttribute, s as renderSlot, u as renderTemplate } from "./server_54pEhW2r.mjs";
import { t as createComponent } from "./compiler_OWM8OAUp.mjs";
//#region node_modules/.pnpm/astro@7.2.8_@emnapi+core@1.11.1_@emnapi+runtime@1.11.3_@vercel+functions@3.9.6_jiti@2.7.0_yaml@2.9.0/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/layout/Header.astro
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const links = [
		{
			text: "Home",
			href: "/"
		},
		{
			text: "About",
			href: "/about"
		},
		{
			text: "Turnkey Construction",
			href: "/services/turnkey"
		},
		{
			text: "Services",
			href: "/services"
		},
		{
			text: "Projects",
			href: "/projects"
		},
		{
			text: "Process",
			href: "/process"
		},
		{
			text: "Contact",
			href: "/contact"
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300"><div class="h-16 sm:h-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between gap-2 sm:gap-4"><div class="flex items-center gap-2 sm:gap-3"><!-- Mobile Menu Toggle Button --><button id="mobile-menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false" class="xl:hidden w-10 h-10 -ml-1 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"><span class="material-symbols-outlined text-[24px]">menu</span></button><!-- Logo --><a class="flex flex-col group flex-shrink-0" href="/"><span class="font-headline font-bold text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.18em] uppercase text-on-surface group-hover:text-primary transition-colors whitespace-nowrap">PAANYA EMPIRE</span><span class="font-label text-[8px] sm:text-[9px] tracking-[0.22em] sm:tracking-[0.32em] font-semibold text-outline uppercase whitespace-nowrap hidden xs:block sm:block">DESIGN. BUILD. DELIVER.</span></a></div><!-- Desktop Navigation --><nav class="hidden xl:flex items-center gap-7">${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-[14px] font-medium text-on-surface-variant hover:text-primary transition-colors py-1 whitespace-nowrap">${link.text}</a>`)}</nav><!-- Action Buttons --><div class="flex items-center gap-2 sm:gap-4"><a class="inline-flex items-center justify-center bg-primary text-on-primary text-[11px] sm:text-[13px] font-medium tracking-wide uppercase px-3.5 py-2 sm:px-6 sm:py-3 rounded-[6px] hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap" href="/contact"><span class="sm:hidden">Get Quote</span><span class="hidden sm:inline">Get A Free Quote</span></a></div></div></header><!-- Mobile Navigation Drawer / Overlay (outside header to prevent backdrop-blur clipping) --><div id="mobile-drawer-backdrop" class="fixed inset-0 bg-inverse-surface/60 backdrop-blur-sm z-[90] opacity-0 pointer-events-none transition-opacity duration-300 xl:hidden"></div><div id="mobile-drawer" class="fixed inset-y-0 left-0 w-[85%] max-w-[340px] h-screen h-[100dvh] bg-surface-container-lowest z-[100] shadow-2xl flex flex-col justify-between transform -translate-x-full transition-transform duration-300 ease-in-out xl:hidden"><div class="p-6 flex flex-col h-full overflow-y-auto"><div class="flex items-center justify-between pb-6 border-b border-outline-variant/30 flex-shrink-0"><a class="flex flex-col" href="/"><span class="font-headline font-bold text-lg tracking-[0.16em] uppercase text-primary">PAANYA EMPIRE</span><span class="font-label text-[8px] tracking-[0.25em] font-semibold text-outline uppercase">DESIGN. BUILD. DELIVER.</span></a><button id="mobile-menu-close" type="button" aria-label="Close menu" class="w-9 h-9 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none rounded-lg cursor-pointer"><span class="material-symbols-outlined text-[24px]">close</span></button></div><nav class="flex flex-col py-6 gap-1 flex-grow">${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-on-surface hover:text-primary hover:bg-surface-container transition-colors"><span>${link.text}</span><span class="material-symbols-outlined text-[18px] text-outline">chevron_right</span></a>`)}</nav><div class="mt-auto pt-6 border-t border-outline-variant/30 flex flex-col gap-3 flex-shrink-0"><a class="w-full inline-flex items-center justify-center bg-primary text-on-primary text-sm font-semibold tracking-wider uppercase py-3.5 rounded-lg hover:bg-primary-container transition-colors shadow-md text-center" href="/contact">Get A Free Quote</a><div class="flex items-center justify-center gap-2 text-xs text-on-surface-variant pt-2"><span class="material-symbols-outlined text-[16px] text-primary">phone_in_talk</span><span>+91 98765 43210</span></div></div></div></div>${renderScript($$result, "/Users/Junaid/JCode/PaanyaGroup/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/Junaid/JCode/PaanyaGroup/src/components/layout/Header.astro", void 0);
//#endregion
//#region src/components/layout/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-surface border-t border-outline-variant/30 mt-10 sm:mt-20"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"><div class="sm:col-span-2"><a href="/" class="text-xl sm:text-2xl font-bold text-primary tracking-tight">PAANYA EMPIRE</a><p class="mt-3 sm:mt-4 text-on-surface-variant text-sm max-w-sm leading-relaxed">Premium turnkey construction and real estate services. Building trust, engineering excellence, and delivering luxury.</p></div><div><h3 class="text-xs sm:text-sm font-bold text-on-surface tracking-wider uppercase mb-3 sm:mb-4">Explore</h3><ul class="space-y-2.5 sm:space-y-3"><li><a href="/projects" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">Projects</a></li><li><a href="/services" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">Services</a></li><li><a href="/process" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">Our Process</a></li><li><a href="/about" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">About Us</a></li></ul></div><div><h3 class="text-xs sm:text-sm font-bold text-on-surface tracking-wider uppercase mb-3 sm:mb-4">Connect</h3><ul class="space-y-2.5 sm:space-y-3"><li><a href="/contact" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">Contact Us</a></li><li><a href="/faq" class="text-xs sm:text-sm text-on-surface-variant hover:text-primary transition-colors">FAQ</a></li><li class="pt-1"><a href="mailto:concierge@paanyaempire.com" class="text-xs sm:text-sm text-primary hover:underline">concierge@paanyaempire.com</a></li></ul></div></div><div class="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"><p class="text-xs sm:text-sm text-on-surface-variant">&copy; ${currentYear} Paanya Empire. All rights reserved.</p><div class="text-xs text-outline"><span>Design. Build. Deliver.</span></div></div></div></footer>`;
}, "/Users/Junaid/JCode/PaanyaGroup/src/components/layout/Footer.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://astro.build");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description = "Paanya Empire — Premium turnkey construction and real estate services. Building trust, engineering excellence, and delivering luxury." } = Astro.props;
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><!-- SEO --><title>${title} | Paanya Empire</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(`${title} | Paanya Empire`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><!-- Google Fonts: Inter --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Material Symbols --><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="min-h-screen flex flex-col">${renderComponent($$result, "Header", $$Header, {})}<main class="flex-grow pt-16 sm:pt-20">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "/Users/Junaid/JCode/PaanyaGroup/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { $$BaseLayout as t };
