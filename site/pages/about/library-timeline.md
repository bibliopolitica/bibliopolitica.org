---
title: "A Timeline of Chicano Studies Library (1969 – 2024)"
description: "TBD"
layout: base
permalink: "/about/library-timeline.html"
---
<div class="bg-base-100 z-40 w-full sticky top-14 border-b border-neutral">
  <div class="container px-6 py-12 prose lg:prose-lg text-base-content">
    <h1 class="tracking-tight max-w-3xl">{{ title }}</h1>
  </div>
</div>

<div class="not-prose container mt-12">
  <ul class="timeline timeline-snap-icon mx-4 max-md:timeline-compact timeline-vertical w-full">
    {%- for year in timeline -%}
    {% assign year_data = items | where_includes: "Date of Publication or Production", year.year %}
    <li>
      <div class="timeline-middle my-2">
        <a href="#{{ year.year }}" id="{{ year.year }}">
          <time class="font-sans text-2xl hover:text-base-content text-accent no-underline">{{ year.year }}</time>
        </a>
      </div>
      <hr/>
    </li>
    <li>
      <hr/>
      <div class="timeline-start md:text-end md:mr-6 ml-6 md:ml-0 mb-6">
        {% for note in year.notes %}
          <div class="mb-10 max-w-96">
            <div class="block text-xl font-black mb-1">
              {{ note.heading }}
            </div>
            <div class="text-sm font-serif">{{ note.description }}</div>
          </div>
        {% endfor %}
      </div>
      <hr/>
      <div class="timeline-end md:text-left ml-6 mb-6">
        <div class="md:mr-12 columns columns-3 sm:columns-4 md:columns-5 gap-x-2">
          {%- for item in year_data -%}
          <div class="mb-2">
            <a href="{{ '/item/'| append: item.id | url }}" class="block tooltip tooltip-bottom" data-tip="{{ item.label | escape | truncatewords: 4, '...' }}">
              {% capture img_url %}https://d1b7k5w7yjwpfg.cloudfront.net/iiif/2/bibliopolitica_{{ item.id }}_{{ item.id }}_001/full/250,/0/default.jpg{% endcapture %}
              <img src="{{ img_url }}" alt="">
            </a>
          </div>
          {%- endfor -%}
        </div>
      </div>
      <hr/>
    </li>
    {%- endfor -%}
  </ul>
</div>
