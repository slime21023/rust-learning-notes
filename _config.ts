import lume from "lume/mod.ts";

// Markdown plugin configuration
const markdown = {};


const site = lume({}, { markdown });
site.copy("img");
site.copy("favicon.ico");
site.ignore("README.md", "CHANGELOG.md", "node_modules");

export default site;
