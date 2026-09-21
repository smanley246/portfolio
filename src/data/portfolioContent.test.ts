import { describe, expect, it } from "vitest";
import { aboutPageData } from "./aboutData/aboutData";
import { educationData } from "./educationData/educationData";
import { currentWorkRole, workRoles } from "./workData/workData";
import { aboutData } from "./mainSummaryData/aboutData";
import { heroData } from "./mainSummaryData/heroData";

describe("professional portfolio content", () => {
  it("includes the current Skyline BI role as the newest work entry", () => {
    expect(workRoles[0]).toBe(currentWorkRole);
    expect(currentWorkRole.title).toBe("Junior Business Intelligence Developer");
    expect(currentWorkRole.place).toBe("Skyline Group of Companies");
    expect(currentWorkRole.when).toBe("June 2026–Present");
    expect(currentWorkRole.bullets.join(" ")).toMatch(/Microsoft Fabric|data lakes/i);
  });

  it("describes the completed B.Eng. in Computer Engineering", () => {
    expect(educationData.degreeCard.program).toContain("B.Eng.");
    expect(educationData.degreeCard.program).toContain("Computer Engineering");
    expect(educationData.degreeCard.years).toContain("2026");
    expect(educationData.degreeCard.paragraphs?.join(" ")).toMatch(/completed/i);
  });

  it("contains no current-student language in website content data", () => {
    const content = JSON.stringify({
      aboutPageData,
      aboutData,
      heroData,
      educationData,
      workRoles,
    });
    expect(content).not.toMatch(
      /\bgraduating\b|current(?:\s+\w+){0,4}\s+student|completing my(?:\s+\w+){0,4}\s+degree|outside of academics/i,
    );
  });

  it("keeps employer references out of personal profile copy", () => {
    const personalCopy = JSON.stringify({ aboutPageData, aboutData, heroData });
    expect(personalCopy).not.toMatch(/Skyline Group of Companies/i);
  });
});
