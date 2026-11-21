// Keeps Wisdom Pearls out of search engines until the owner approves launch.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

test("robots.txt asks every crawler to stay away", () => {
  const robots = readFileSync("public/robots.txt", "utf8");
  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Disallow: \/$/m);
});

test("every page carries a noindex tag", () => {
  const base = readFileSync("src/layouts/Base.astro", "utf8");
  assert.match(base, /<meta name="robots" content="noindex, nofollow" \/>/);
});

test("every deploy job is locked behind WISDOM_PEARLS_PUBLISH", () => {
  const deploy = readFileSync(".github/workflows/deploy.yml", "utf8");
  const jobs = deploy.slice(deploy.indexOf("\njobs:"));
  const names = [...jobs.matchAll(/^ {2}([a-z-]+):$/gm)].map((m) => m[1]);
  assert.ok(names.length >= 3, "expected ci, build and deploy jobs");
  const lock = "if: vars.WISDOM_PEARLS_PUBLISH == 'true'";
  assert.equal(jobs.split(lock).length - 1, names.length);
});
