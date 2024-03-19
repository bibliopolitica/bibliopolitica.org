---
title: "A Timeline of Chicano Studies Library (1969 – 2024)"
description: "TBD"
layout: page
permalink: "/about/library-timeline.html"
---

<div class="not-prose">
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    {%- for item in timeline -%}
      {%- assign mod = forloop.index | modulo: 2 -%}
      {%- if mod == 0 -%}
        <li>
          <hr/>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="font-sans text-2xl">{{ item.year }}</time>
            <a href="#line-{{ forloop.index }}" id="line-{{ forloop.index }}" class="block text-xl font-black hover:text-accent no-underline">{{ item.heading }}</a>
            <div class="text-sm">{{ item.description }}</div>
          </div>
          <hr/>
        </li>
      {%- else -%}
        <li>
          <hr />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
          </div>
          <div class="timeline-end mb-10">
            <time class="font-sans text-2xl">{{ item.year }}</time>
            <a href="#line-{{ forloop.index }}" id="line-{{ forloop.index }}" class="block text-xl font-black hover:text-accent no-underline">{{ item.heading }}</a>
            <div class="text-sm">{{ item.description }}</div>
          </div>
          <hr />
        </li>
      {%- endif -%}
    {%- endfor -%}
  </ul>
</div>
