---
title: "Explore the Exhibit"
description: "TBD"
layout: page
permalink: "/browse/exhibit.html"
contents:
  - label: In English
    anchor: '#in-english'
  - label: En Español
    anchor: '#en-espanol'
---

## In English

<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 not-prose">
  {%- for exhibit in collections.exhibit-en -%}
    {% include "partials/exhibit-card.html" %}
  {%- endfor -%}
</div>

## En Español

<div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 not-prose">
  {%- for exhibit in collections.exhibit-es -%}
    {% include "partials/exhibit-card.html" %}
  {%- endfor -%}
</div>
