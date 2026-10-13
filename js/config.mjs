import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  pubDomain: "api",
  shortName: "mod-pagination",
  specType: "HR",
  specStatus: "CV",
  publishDate: "2026-11-05",
  publishVersion: "1.0.0",
  previousPublishVersion: [],
  editors: [{
    name: "Logius Standaarden",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  authors: [{
    name: "Logius Standaarden",
    company: "Logius",
    companyURL: "https://www.logius.nl",
  },],
  github: "https://github.com/Logius-standaarden/API-mod-pagination",
  postProcess: [processRuleBlocks],
});
