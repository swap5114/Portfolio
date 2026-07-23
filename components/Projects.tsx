"use client";

import { projects } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { FeaturedProject, StandardProject } from "./ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          index="03 / selected work"
          title="Built to survive failure."
          aside="framed by the decision, not the demo"
        />

        <div className="space-y-10">
          {featured.map((p) => (
            <Reveal key={p.id}>
              <FeaturedProject project={p} />
            </Reveal>
          ))}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-1">
              {rest.map((p) => (
                <Reveal key={p.id}>
                  <StandardProject project={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
