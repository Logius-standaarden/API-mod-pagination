import { processRuleBlocks } from "https://logius-standaarden.github.io/publicatie/respec/plugins/adr.mjs";
import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  pubDomain: "api",
  shortName: "mod-template",
  specType: "HR",
  specStatus: "WV",
  publishDate: "2024-03-07",
  publishVersion: "1.0.2",
  previousPublishDate: "2023-05-23",
  previousPublishVersion: "1.0.1",
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
  github: "https://github.com/Logius-standaarden/API-mod-template/",
  postProcess: [processRuleBlocks],
});
