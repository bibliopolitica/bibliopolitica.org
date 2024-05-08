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
      - Newsletters
      - Brochures
      - Letters
      - Photographs
      - Bibliographies
      - Fliers
      - Internal Documents
      - Book Chapters
      - Clippings
      - Proposals
      - Meeting Minutes
      - Press Releases
      - Job Postings
  - key: Topic 
    values:
      - Chicano Periodical Index
      - Knowledge Organization
      - Recognition
      - Chicano Thesaurus
      - Chicano Database
      - Third World Liberation Front
      - Library Administration
      - Chicano Studies Library Publications Unit
      - Arts and Literature
      - Serials Collection
      - Ethnic Studies Library
      - Exhibits and Events
      - Library Outreach
      - Chicano Studies Program
      - Ethnic Studies
  - key: Personal Name 
    values:
      - Castillo-Speed, Lillian
      - Chabrán, Richard
      - García-Ayvens, Francisco, 1948-2018
      - Trujillo, Larry
      - Arce, José Antonio, 1948-2018
      - Treviño, Oscar
      - Soto, Carolyn
      - Garza, Luis Alberto de la
      - Delgado, Manuel
      - Poon, Wei Chi
      - Yañez, Elva

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
  <aside class="flex-none md:block max-w-56 hidden md:text-sm">
    <div class="font-bold text-2xl tracking-tight mb-4">Browse Facets</div>
    <ul>
      {% for facet in facets %}
      <li class="pb-5">
        <div class="text-xl tracking-tight mb-1">{{ facet.key }}</div>
        <ul>
          {% assign first_values = facet.values | limit: 4 %}
          {% assign last_values = facet.values | slice: 4, facet.values.size  %}
          {% for value in first_values %}
          <li class="border-t border-neutral py-1"><a href="{{ '/browse/items.html' | url }}?limit={{ facet.key | uri_encode }}&query={{ value | uri_encode }}">{{ value }}</a></li>
          {% endfor %}
          <details>
            {% for value in last_values %}
            <li class="border-t border-neutral py-1"><a href="{{ '/browse/items.html' | url }}?limit={{ facet.key | uri_encode }}&query={{ value | uri_encode }}">{{ value }}</a></li>
            {% endfor %}
            <summary class="text-accent cursor-pointer">
            View More
            </summary>
          </details>
        </ul>
      </li>
      {% endfor %}
    </ul>
  </aside>

  <main class="flex-auto md:px-10 not-prose">
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