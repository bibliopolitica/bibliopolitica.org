---
title: "Archival Materials"
description: "TBD"
layout: "page"
permalink: "/browse/items.html"
search_limits:
  - All Fields
  - ID
  - Label
  - Summary
  - Personal Name
  - Topic
  - Type
  - Format
facets:
  - key: Type
    values:
      - Internal Documents # 25
      - Letters # 17
      - Photographs # 13
      - Newsletters # 9
      - Fliers # 6
      - Proposals # 5
      - Book Chapters # 4
      - Bibliographies # 3
      # - Brochures # 2
      # - Meeting Minutes # 2
      # - Press Releases # 2
      # - Clippings # 1
      # - Job Postings # 1
  - key: Personal Name 
    values:
      - Castillo-Speed, Lillian # 24
      - Chabrán, Richard # 19
      - García-Ayvens, Francisco # 9
      - Trujillo, Larry # 4
      - Treviño, Oscar # 4
      - Soto, Carolyn # 4
      - Garza, Luis Alberto de la # 3
      - Delgado, Manuel # 3
      - Poon, Wei Chi # 3
      - Arce, José Antonio # 2
  - key: Topic 
    values:
      # - Library Outreach # 23
      # - Library Administration # 20
      - Chicano Periodical Index # 17
      - Knowledge Organization # 17
      - Recognition # 17
      - Chicano Database # 14
      - Exhibits and Events # 13
      - Ethnic Studies # 9
      - Arts and Literature # 7
      - Chicano Thesaurus # 6
      - Serials Collection # 6
      - Ethnic Studies Library # 6
      - Chicano Studies Library Publications Unit # 6
      - Third World Liberation Front # 5
      - Chicano Studies Program # 5
---

<script src="https://unpkg.com/itemsjs@2.1.24/dist/index.umd.js"></script>
<script src="https://unpkg.com/lunr/lunr.js"></script>
<script>
  async function fetchData(dataFile) {
    const response = await fetch(dataFile);
    const data = await response.json();
    return data;
  }
  window.prefixUrl    = "{{ '/' | url }}";
  window.promisedData = fetchData("{{ '/items.json' | url }}"); 
</script>

<div class="md:flex pb-10 not-prose">
  <aside class="flex-none md:block md:basis-1/4 xl:basis-1/5 hidden md:text-sm">
    <div class="font-bold text-2xl tracking-tight mb-4">Browse Facets</div>
    <ul>
      {% for facet in facets %}
      <li class="pb-5">
        <div class="text-xl tracking-tight mb-1">{{ facet.key }}</div>
        <ul>
          {%- comment -%}
          {%- assign first_values = facet.values | limit: 6 -%}
          {%- assign last_values = facet.values | slice: 6, facet.values.size  -%}
          {%- endcomment -%}
          {% for value in facet.values %}
          <li class="border-t border-neutral py-1"><a data="{{ value | remove: ',' | remove: '.' }}" class="link hover:text-accent" href="{{ '/browse/items.html' | url }}?limit={{ facet.key | uri_encode }}&query={{ value | uri_encode }}">{{ value }}</a></li>
          {% endfor %}
          {%- comment -%}
          <details>
            {% for value in last_values %}
            <li class="border-t border-neutral py-1"><a href="{{ '/browse/items.html' | url }}?limit={{ facet.key | uri_encode }}&query={{ value | uri_encode }}">{{ value }}</a></li>
            {% endfor %}
            <summary class="text-accent cursor-pointer">
            View More
            </summary>
          </details>
          {%- endcomment -%}
        </ul>
      </li>
      {% endfor %}
    </ul>
  </aside>

  <main class="flex-auto md:basis-3/4 xl:basis-4/5 md:px-10 not-prose">
    <div class="font-bold text-2xl tracking-tight mb-4">Search</div>
    <div class="join w-full max-w-full mb-8">
      <select size="1" id="search-limit-select" class="focus:outline-none select select-bordered md:select-md select-sm join-item border-1 border-base-content">
        <option disabled>Search Within</option>
        {%- for limit in search_limits -%}
        <option>{{ limit }}</option>
        {%- endfor -%}
      </select>
      <input size="1" id="search-input" class="focus:outline-none font-mono input grow input-bordered md:input-md input-sm join-item border-1 border-base-content" placeholder="Search"/>
      <a href="{{ '/browse/items.html' | url }}" size="1" class="focus:outline-none btn btn-sm md:btn-md btn-outline join-item">✕</a>
      <button size="1" id="search-submit" class="focus:outline-none btn btn-sm md:btn-md btn-outline join-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
      </button>
    </div>
    <div id="results-info"></div>
    <div id="results" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 gap-y-5 items-center">
    </div>
  </main>

</div>

<script src="{{ '/js/search.js' | url }}"></script>