import { r as __exportAll } from "./rolldown-runtime_BMI-E3GI.mjs";
import { f as renderHead, u as renderTemplate } from "./server_54pEhW2r.mjs";
import { t as createComponent } from "./compiler_OWM8OAUp.mjs";
//#region src/pages/ssr-test.astro
var ssr_test_exports = /* @__PURE__ */ __exportAll({
	default: () => $$SsrTest,
	file: () => $$file,
	url: () => $$url
});
var $$SsrTest = createComponent(($$result, $$props, $$slots) => {
	const currentTime = (/* @__PURE__ */ new Date()).toISOString();
	return renderTemplate`<html lang="en"><head><title>SSR Test</title>${renderHead($$result)}</head><body><h1>Astro SSR is working</h1><p>Server time:</p><strong>${currentTime}</strong></body></html>`;
}, "/Users/Junaid/JCode/PaanyaGroup/src/pages/ssr-test.astro", void 0);
var $$file = "/Users/Junaid/JCode/PaanyaGroup/src/pages/ssr-test.astro";
var $$url = "/ssr-test";
//#endregion
//#region \0virtual:astro:page:src/pages/ssr-test@_@astro
var page = () => ssr_test_exports;
//#endregion
export { page };
