---
title: "A Timeline of Chicano Studies Library (1969 – 2024)"
description: "TBD"
layout: page
permalink: "/about/library-timeline.html"
contents:
  - anchor: '#1969'
    Label: 1969
  - anchor: '#1971'
    Label: 1971
  - anchor: '#1972'
    Label: 1972
  - anchor: '#1973'
    Label: 1973
  - anchor: '#1974'
    Label: 1974
  - anchor: '#1975'
    Label: 1975
  - anchor: '#1976'
    Label: 1976
  - anchor: '#1977'
    Label: 1977
  - anchor: '#1978'
    Label: 1978
  - anchor: '#1979'
    Label: 1979
  - anchor: '#1980'
    Label: 1980
  - anchor: '#1981'
    Label: 1981
  - anchor: '#1982'
    Label: 1982
  - anchor: '#1982'
    Label: 1984
  - anchor: '#1985'
    Label: 1985
  - anchor: '#1989'
    Label: 1989
  - anchor: '#1990'
    Label: 1990
  - anchor: '#1992'
    Label: 1992
  - anchor: '#1997'
    Label: 1997
  - anchor: '#2005'
    Label: 2005
  - anchor: '#2007'
    Label: 2007
  - anchor: '#2024'
    Label: 2024
---

<ul class="not-prose timeline timeline-snap-icon mx-4 max-md:timeline-compact timeline-vertical w-full">
  {%- for year in timeline -%}
  {% assign year_data = items | where_includes: "Date of Publication or Production", year.year %}
  <li>
    <div class="timeline-middle my-2">
      <a class="font-sans text-accent hover:text-base-content border-b border-accent hover:border-base-content" href="#{{ year.year }}" id="{{ year.year }}">
        <time>{{ year.year }}</time>
      </a>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start md:text-end md:mr-6 ml-6 md:ml-0 mb-6">
      {% for note in year.notes %}
        <div class="mb-10 max-w-96">
          <div class="block text-xl font-black mb-1 break-words">
            {{ note.heading }}
          </div>
          <div class="font-serif break-words">{{ note.description }}</div>
        </div>
      {% endfor %}
    </div>
    <hr/>
    <div class="timeline-end md:text-left ml-6 mb-6">
      <div class="md:mr-12 columns-4 lg:columns-5 gap-x-2">
        {%- for item in year_data -%}
        <div class="mb-2">
          <a href="{{ '/item/'| append: item.ID | url }}.html" class="block tooltip tooltip-bottom" data-tip="{{ item.Label | escape | truncatewords: 4, '...' }}">
            {% capture img_url %}https://d1b7k5w7yjwpfg.cloudfront.net/iiif/2/bibliopolitica_{{ item.ID }}_{{ item.ID }}_001/full/250,/0/default.jpg{% endcapture %}
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
