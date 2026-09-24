import { render, screen, within } from "@testing-library/react";
import App from "./App";
import { experience, profile, projects, sections } from "./data/portfolio";

test("renders the hero with the portfolio owner's name and role", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.name);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.role);
});

test("renders every CV role and project from the data file", () => {
  render(<App />);
  const timeline = screen.getByRole("region", { name: sections.experience.title });
  expect(within(timeline).getAllByRole("article")).toHaveLength(experience.length);
  projects.forEach((project) => {
    expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
  });
});

test("links to the CV and verified contact details only", () => {
  render(<App />);
  screen.getAllByRole("link", { name: /cv/i }).forEach((link) => {
    expect(link).toHaveAttribute("href", profile.cv);
  });
  expect(screen.getAllByRole("link", { name: /email/i })[0]).toHaveAttribute("href", `mailto:${profile.email}`);
});

test("has a single h1 and labelled landmark sections", () => {
  render(<App />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  // Every <section> with aria-labelledby is exposed as a named "region".
  expect(screen.getAllByRole("region").length).toBeGreaterThanOrEqual(7);
});
